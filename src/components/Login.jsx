import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Alerta from './Alerta'

const Login = () => {
 
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState({})
  
  

  const handleSumbit = e => {
    e.preventDefault()

    if([email,password].includes('')){
      setAlerta({
        msg:'Todos los campos son obligatorios',
        error:true
      })
      return
    }

    if(password.length < 6){
      setAlerta({
        msg:'La contraseña es muy corta',
        error:true
    })
      return
    }

    setAlerta({})
    navigate("/home/inicio")  
  }

  const {msg} = alerta
  return (
    <>
    <h1 className=' text-white font-black text-6xl text-center'>Inicia Sesión</h1>
    {msg && <Alerta alerta={alerta} />}
    <form 
        className='mt-16 mb-2 bg-slate-200 shadow rounded-lg p-5'
        onSubmit={handleSumbit}
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
        <div className='my-5'>
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

        <input 
            type="submit"
            value="Iniciar Sesión"
            className=' bg-gradient-to-r from-slate-500  to-red-700 w-full py-3 mb-5 uppercase text-white font-bold rounded hover:cursor-pointer hover:bg-sky-800'
        />
    </form>
    <nav className=' lg:flex lg:justify-between'>
        <Link
            className='block text-center my-5 text-white uppercase text-sm'
            to="/registrar"
        >No tienes una cuenta? Registrate</Link>
    </nav>
</>
  )
}

export default Login