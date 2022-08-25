import React from 'react'
import {Outlet} from 'react-router-dom'
import Card from './Card'
import Header from './Header'
import Slider from './Slider'

const Home = () => {

  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}

export default Home