import axios from 'axios'

import {createContext, useState, useContext, useEffect} from 'react'


export const CategoriaContext = createContext()

export const useCategoria = () => {
    return useContext(CategoriaContext)
}

export const CategoriaProvider = ({children}) => {
    const [categoria, setCategoria] = useState('horror')
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({})
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        const getVideos = async (categoria) => {
            const resultado = await axios(`https://api.pexels.com/videos/search?query=${categoria}`, {
                headers: {
                    'Authorization': '563492ad6f91700001000001808815ec997a4953a1632254efd57669'
                }
            })
            setCategorias(resultado.data.videos)
        }
        getVideos()
    }, [])

    const getVideosCategory = async (categoria) =>{
        try {
            const resultado = await axios(`https://api.pexels.com/videos/search?query=${categoria}`, {
                headers: {
                    'Authorization': '563492ad6f91700001000001808815ec997a4953a1632254efd57669'
                }
            })
            setCategorias(resultado.data.videos)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <CategoriaContext.Provider
            value={{
                categoria,
                categorias,
                categoriaSeleccionada,
                setCategoriaSeleccionada,
                getVideosCategory,
                setCategoria
            }}
        >
            {children}
        </CategoriaContext.Provider>
    )
}
