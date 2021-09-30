import { motion } from "framer-motion"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RingLoader } from "react-spinners"
import lenguage from "../lenguage"

export const ImageUploadPage = () => {

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <DragImageArea />
        </div>
    )
}

const DragImageArea = () => {
    const { leng } = useSelector((state:any) => state.lenguages)
    const [areDragIn, setAreDragIn] = useState(false)
    const [loading, setLoading] = useState(false)

    document.querySelector("body")!.addEventListener('drop', (e) => {
        e.preventDefault()
        handleDrop(e)
    })
    
    document.querySelector("body")!.addEventListener('dragover', (e) => {
        e.preventDefault()
    })
    
    const selectImage = () => {
        const input:any = document.querySelector("#inputimage")
        input.click()
    }

    const handleDrop = (e:React.DragEvent<HTMLDivElement>|DragEvent) => {
        console.log("AAAAAAAAAAA")
        setAreDragIn(false)
        //TODO: upload the image

        e.preventDefault()
    }

    return (
        loading ? 
        <RingLoader color="#1d4ed8" />
        :
        <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className="relative max-w-sm w-full bg-blue">
            <div>
                <div 
                    onDragEnter={(e) => {
                        setAreDragIn(true)
                    }} 
                    onDragLeave={(e) => {
                        setAreDragIn(false)
                    }}
                    onDragOver={(e) => {
                        e.preventDefault()
                    }} 
                    onDrop={handleDrop} onClick={selectImage} className={`absolute cursor-pointer transition-all h-44 max-w-sm w-full flex items-center justify-center rounded-sm ${ !areDragIn ? 'border-gray-500 border-4' : 'border-gray-50 border-8' }`}>
                    
                    {
                        areDragIn &&
                        <motion.div initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }} className="absolute opacity-70 w-3/4" style={{top: '-120%'}}>
                            <img src="https://cm3sector.org/wp-content/uploads/2018/12/bigbroda.jpg" alt="" />
                        </motion.div>
                    }
                    
                    <input type='file' accept='image/*' className="hidden" id="inputimage" />
                </div>
            </div>
            <div className={`h-44 max-w-sm w-full flex justify-center items-center bg-gray-800 bg-opacity-25 ${areDragIn ? 'bg-opacity-60' :'' }`}>
                <h1 className={ !areDragIn ? 'text-gray-500' : 'text-gray-50 font-bold' }>{ leng === "es" ? lenguage.es.dragOrClickImg : lenguage.en.dragOrClickImg }</h1>
            </div>
        </motion.div>
    )
}