import {Routes, Route} from 'react-router-dom'
import Cards from './components/Cards'
import ContentDetails from './components/ContentDetails'
import Home from './components/Home'
import Login from './components/Login'
import Registrar from './components/Registrar'
import Slider from './components/Slider'
import AuthLayout from './layout/AuthLayout'

function App() {
  const cards = [
    {
      titulo:"terror",
      img: "https://wallpaperscute.com/wp-content/uploads/2018/09/The-Nun-Movie-Desktop-Wallpaper.jpg"
    },
    {
      titulo:"infantil",
      img: "https://tse1.mm.bing.net/th?id=OIP.woHV2BoxjdTwxGtw_gLA4QHaE8&pid=Api&P=0"
    },
    {
      titulo:"comedia",
      img: "https://tse2.mm.bing.net/th?id=OIP.oNFx2CpBpGM4n0AGXPEteQHaEL&pid=Api&P=0"
    },
    {
      titulo:"drama",
      img: "https://1.bp.blogspot.com/-IFnOBbktFGo/XcMKCCqWMHI/AAAAAAAALCg/sv1qOF76N5oY5xqZaJ1voPC-5DxfQedvQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Escalera-al-cielo-horizontal.jpg"
    },
    {
      titulo:"ciencia ficción",
      img: "https://1.bp.blogspot.com/-IFnOBbktFGo/XcMKCCqWMHI/AAAAAAAALCg/sv1qOF76N5oY5xqZaJ1voPC-5DxfQedvQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Escalera-al-cielo-horizontal.jpg"
    }
  ]

  return (
    <div className=' bg-gradient-to-br from-slate-400  to-red-600 h-screen  overflow-auto'>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
        </Route>
        
        <Route exact path="/home" element={<Home />}>
          <Route path="inicio" element={<Cards />}/>
          <Route path=":categoria" element={<Slider />}/>
          <Route path=":categoria/:idCategoria" element={<ContentDetails />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
