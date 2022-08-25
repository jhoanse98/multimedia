import {useState} from 'react'
import { Link } from 'react-router-dom'

const Registrar = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

  }
  return (
    <>
        <h1 className=' text-white font-black text-6xl text-center '>Crea tu Cuenta</h1>
        <form 
            className=' mt-16 mb-2 bg-slate-200 shadow-lg rounded-lg p-5'
            onSubmit={handleSubmit}
        >
            <div className='mb-5'>
                <label  htmlFor="email"className='uppercase text-gray-600 block text-xl font-bold'>Email</label>
                <input 
                    id="email"
                    type="email"
                    placeholder='Email de Registro'
                    className='w-full mt-2 p-3 border rounded-md bg-gray-50'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label  htmlFor="password"className='uppercase text-gray-600 block text-xl font-bold'>Password</label>
                <input 
                    id="password"
                    type="password"
                    placeholder='Password de Registro'
                    className='w-full mt-2 p-3 border rounded-md bg-gray-50'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label  htmlFor="password2"className='uppercase text-gray-600 block text-xl font-bold'>Repetir password</label>
                <input 
                    id="password2"
                    type="password"
                    placeholder='Repetir Password'
                    className='w-full mt-2 p-3 border rounded-md bg-gray-50'
                    value={repetirPassword}
                    onChange={e => setRepetirPassword(e.target.value)}
                />
            </div>

            <input 
                type="submit"
                value="Iniciar Sesión"
                className=' bg-gradient-to-r from-slate-500  to-red-700  w-full py-3 my-5 uppercase text-white font-bold rounded hover:cursor-pointer hover:bg-sky-800'
            />
        </form>
        <nav className=' lg:flex lg:justify-between'>
            <Link
                className='block text-center my-1 text-white uppercase text-sm'
                to="/login"
            >¿Ya tienes una cuenta? Inicia Sesión</Link>
        </nav>
    </>
  )
}

export default Registrar