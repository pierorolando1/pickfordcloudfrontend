import { useMutation } from '@apollo/client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RingLoader } from 'react-spinners'
import swal from 'sweetalert'
import { UPLOAD_IMAGE } from '../graphql/mutations'
import { bytesToMb, isFile } from '../helpers'
import lenguage from '../lenguage'

const DragArea = ({filetype} : {filetype:'image'|'video'|'pdf'|'file'}) => {
    
    const { leng } = useSelector((state:any) => state.lenguages)
    const [areDragIn, setAreDragIn] = useState(false)
    const [loading, setLoading] = useState(false)
    const [uploadImage, { data }] = useMutation(UPLOAD_IMAGE)
    const [link, setLink] = useState(null)

    document.querySelector("body")!.addEventListener('drop', (e) => e.preventDefault())
    document.querySelector("body")!.addEventListener('dragover', (e) => e.preventDefault())
    
    const selectImage = () => {
        const input:any = document.querySelector("#inputimage")
        input.click()
    }

    const handleDrop = (e:React.DragEvent<HTMLDivElement>|any) => {
        e.preventDefault()
        setAreDragIn(false)
        checkAndUploadImage(e.dataTransfer.files[0])
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>|any) => checkAndUploadImage( e.target.files[0] )

    const checkAndUploadImage = async (image:File) => {
        if(isFile(image, filetype)){
            if(bytesToMb(image.size) > 7) swal({
                title: leng === "es" ? lenguage.es.veryBig : lenguage.en.veryBig,
                text: leng === "es" ? lenguage.es.maxSize : lenguage.en.maxSize,
                icon: 'error' 
            })
            else
                try {
                    setLoading(true)
                    const { data } = await uploadImage({variables:{ file: image }})
                    setLoading(false)
                    console.log(data)

                    swal({
                        icon: 'success',
                        text: data.imageUpload
                    })
                } catch (error:any) {
                    setLoading(false)
                    swal({
                        icon: 'error',
                        text: error + ''
                    })
                }
                

        } else { // In the case if the file uploaded is not a image
            swal({
                title: "Error",
                text: leng === "es" ? lenguage.es.needImage : lenguage.en.needImage,
                icon: 'error' 
            })
        }
    }

    return (
        loading ? 
        <RingLoader color="#1d4ed8" />
        :
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="relative max-w-sm w-full bg-blue">
            <div>
                <div 
                    onDragEnter={(e) => setAreDragIn(true)} 
                    onDragLeave={(e) => setAreDragIn(false)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop} onClick={selectImage} className={`absolute cursor-pointer transition-all h-44 max-w-sm w-full flex items-center justify-center rounded-sm ${ !areDragIn ? 'border-gray-500 border-4' : 'border-gray-50 border-8' }`}>
                    
                    {
                        areDragIn &&
                        <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} className="absolute opacity-70 w-3/4" style={{top: '-120%'}}>
                            <img src="https://cm3sector.org/wp-content/uploads/2018/12/bigbroda.jpg" alt="" />
                        </motion.div>
                    }
                    
                    <input type='file' accept='image/*' className="hidden" id="inputimage" onChange={handleInputChange} />
                </div>
            </div>
            <div className={`h-44 max-w-sm w-full flex justify-center items-center bg-gray-800 ${areDragIn ? 'bg-opacity-60' :'bg-opacity-25' }`}>
                <h1 className={ !areDragIn ? 'text-gray-500' : 'text-gray-50 font-bold' }>{ leng === "es" ? lenguage.es.dragOrClickImg : lenguage.en.dragOrClickImg }</h1>
            </div>
        </motion.div>
    )
}

export default DragArea
