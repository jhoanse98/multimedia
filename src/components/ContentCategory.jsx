import React from 'react'
import {Link} from 'react-router-dom'
import { useCategoria } from '../context/categoriaContext'

const ContentCategory = () => {
    const {categorias, categoria, setCategoriaSeleccionada} = useCategoria()
    
  return (
    <>
        <div className='m-5'>
            <h2 className='text-white font-bold uppercase pt-5 pl-5'>{categoria}</h2>
            <div className=' relative flex items-center top-0 left-0 p-5 '>
                <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth obj'>
                    {categorias.map(category => (
                        <Link to={`/home/${categoria}/${category.id}`}>
                            <img  key={category.id}className='w-[220px] h-[200px] inline-block py-5 pr-4 cursor-pointer hover:scale-150 ease-in-out duration-300 hover:object-cover hover:w-[250px] hover:h-[250px]'
                                src={category.image} 
                                onClick={() => {
                                    setCategoriaSeleccionada(category)
                                }}
                                />
                        </Link>
                        
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default ContentCategory