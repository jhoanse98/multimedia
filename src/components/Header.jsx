import React from 'react'
import {Link} from 'react-router-dom'

import {FaHome, FaSearch, FaStar, FaUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <div className=' flex flex-col items-center md:flex-row md:justify-between p-4'>
            <div className='flex flex-col md:flex-row items-center'>
                <img className=" h-12 w-28" alt="logo-inicio" src='https://codekitapp.com/images/help/free-tailwind-icon@2x.png' />
                <nav className=' flex flex-col md:flex-row mx-10'>
                    <div className='inline-block'>
                        <div className=' flex items-center p-2 mx-5'>
                            <FaHome  className=' w-5 h-5 text-white'/>
                            <Link className=" m-3 uppercase text-sm font-bold text-white hover:text-gray-300" to="/home/inicio">Inicio</Link>
                        </div>
                    </div>
                    <div className='inline-block'>
                        <div className=' flex items-center p-2 mx-5'>
                            <FaStar  className=' w-5 h-5 text-white'/>
                            <Link className=" m-3 uppercase text-sm font-bold  text-white hover:text-gray-300" to="/">Favoritos</Link>
                        </div>
                    </div>
                    <div className='inline-block'>
                        <div className=' flex items-center p-2 mx-5'>
                            <FaSearch  className=' w-5 h-5 text-white'/>
                            <Link className=" m-3 uppercase text-sm font-bold text-white hover:text-gray-300" to="/">Busqueda</Link>
                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <div className=' flex items-center p-2 mx-5'>
                    <FaUserCircle  className=' w-10 h-10 text-white'/>
                    <Link className=" m-3 uppercase text-sm font-bold text-white hover:text-gray-300" to="/login">Sign Out</Link>
               </div>
            </div>
        </div>
    </header>
  )
}

export default Header