import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { CategoriaContext, useCategoria } from '../context/categoriaContext'
import ContentCategory from './ContentCategory'


const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1)

    const prev = () => {
        if(currentSlide > 1){
            setCurrentSlide(currentSlide-1)
        }
    }

    const next = () => {
        if(currentSlide < 3){
            setCurrentSlide(currentSlide+1)
        }
    }

    

    

    return(
        <>
        <div className=' my-20 md:max-w-[768px]  flex justify-center m-auto'>
            <section className='w-4/5 h-56'>
                <div className='relative'>
                    <div>
                        <ul>
                            <li className={`relative ${currentSlide !== 1 ? 'hidden' : null} `} >
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"/>
                                <div className='absolute top-0 left-0 h-full w-full flex items-end justify-center'>
                                    <h2 className='text-sm font-bold text-black text-center py-5 mb-5 w-2/4 bg-white opacity-50 '>Descripción 1</h2>
                                </div>
                            </li>
                            <li className={`relative ${currentSlide !== 2 ? 'hidden' : null} `}>
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"/>
                                <div className='absolute top-0 left-0 h-full w-full flex items-end justify-center'>
                                    <h2 className='text-sm font-bold text-black text-center py-5 mb-5 w-2/4 bg-white opacity-50'>Descripción 2</h2>
                                </div>
                            </li>
                            <li className={`relative ${currentSlide !== 3 ? 'hidden' : null}`}>
                                <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"/>
                                <div className='absolute top-0 left-0 h-full w-full flex justify-center items-end'>
                                    <h2 className='text-sm font-bold text-black text-center py-5 mb-5 w-2/4 bg-white opacity-50'>Descripción 3</h2>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className=' absolute top-0  px-5 flex h-full w-full left-0'>
                        <div className='my-auto w-full flex justify-between'>
                            <button  onClick={prev} className='bg-white p-2 rounded-full bg-opacity-80 shadow-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <button onClick={next} className='bg-white p-2 rounded-full bg-opacity-80 shadow-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </button>

                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
        <div>
            <ContentCategory />
        </div>
        
        </>
    )
}

export default Slider