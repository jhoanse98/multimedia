import React from 'react'

import ReactPlayer from 'react-player'
import { useCategoria } from '../context/categoriaContext'
import {useNavigate} from 'react-router-dom'




const ContentDetails = () => {
    const {categoriaSeleccionada, categoria} = useCategoria()
    console.log(categoriaSeleccionada.video_files)
    const navigate= useNavigate()
    

    
  return (
    <div className=' max-w-[80%] m-auto my-20'>
        <div className=' flex flex-col md:grid md:grid-cols-2 gap-10'>
            <div className=' w-full h-full flex flex-col justify-center items-center' >
                <ReactPlayer id="player" width="100%" url={`${categoriaSeleccionada.video_files[2].link}`} playing={true} loop={true} />
                <button  className="w-[20%] bg-gray-300 mx-20 mt-5 rounded-md uppercase sm:text-xs text-center font-bold hover:bg-gray-400 transition-all p-2" 
                >Fullscreen</button>
                <button  className="w-[20%] bg-gray-300 mx-20 mt-5 rounded-md uppercase sm:text-xs text-center font-bold hover:bg-gray-400 transition-all p-2" 
                onClick={() => navigate(`/home/${categoria}`)}>Atras</button>

            </div>
            <div>
                <h2 className='text-center text-white font-bold uppercase my-10 text-3xl'>Descripcion del video</h2>
                <p className='text-black text-lg font-bold p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aperiam, provident voluptas veritatis dolorem fugiat, inventore perspiciatis nostrum, magnam aliquam quos quibusdam? Consequuntur accusantium aliquid quidem repudiandae iste impedit neque! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nostrum voluptate magni architecto nemo beatae quod, eaque sapiente similique inventore amet, atque doloremque, cupiditate aliquam ipsum esse numquam tenetur deleniti.</p>  
            </div>
        </div>
    
    </div>
  )
}

export default ContentDetails