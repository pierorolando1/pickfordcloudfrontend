import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import lenguage from '../lenguage'

const WelcomePage = () => {

    const { leng } = useSelector((state:any) => state.lenguages)
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center">
            <motion.h1 initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} className="text-gray-100 font-bold text-4xl py-7">{ leng === "es" ? lenguage.es.title : lenguage.en.title }</motion.h1>
            
            <div className="max-w-xl mx-auto w-full">
                <Link to="/upload/image"><button className="bg-blue-700 w-full text-gray-100 font-bold py-2 rounded shadow-sm hover:shadow-lg m-1">{ leng === "es" ? lenguage.es.image : lenguage.en.image }</button></Link>
                <button className="bg-indigo-700 w-full text-gray-100 font-bold py-2 rounded shadow-sm hover:shadow-lg m-1">{ leng === "es" ? lenguage.es.video : lenguage.en.video }</button>
                <button className="bg-red-700 w-full text-gray-100 font-bold py-2 rounded shadow-sm hover:shadow-lg m-1">{ leng === "es" ? lenguage.es.pdf : lenguage.en.pdf }</button>
                <button className="bg-green-700 w-full text-gray-100 font-bold py-2 rounded shadow-sm hover:shadow-lg m-1 mt-4">{ leng === "es" ? lenguage.es.another : lenguage.en.another }</button>
            </div>
            {/* <form action="http://localhost:3001/upload/photo" method="POST" encType="multipart/form-data">
                <input type="file" name="image" />
                <button type="submit">{ leng === "es" ? lenguage.es.title : lenguage.en.title }</button>
            </form> */}
        </div>
    )
}

export default WelcomePage
