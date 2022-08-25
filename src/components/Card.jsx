import React from 'react'
import {Link} from 'react-router-dom'
import { useCategoria } from '../context/categoriaContext'

const Card = ({card}) => {
    const {getVideosCategory, setCategoria} = useCategoria()
  return (
    <div className=' w-60'>
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white md:w-full w-full mx-2 h-40" onClick={() => {setCategoria(card.titulo) 
            getVideosCategory(card.titulo)}}>
                <Link to={`/home/${card.titulo}`}>
                    <img className="w-full h-20  rounded-t-lg" src={card.img} alt=""/>
                </Link>
                <div className="p-6">
                    <h5 className="text-gray-900 text-sm font-medium mb-2 text-center uppercase">{card.titulo}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card