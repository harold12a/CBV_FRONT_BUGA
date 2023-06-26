import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

// import Buttons from '../pages/Buttons'

const Main = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    {/* <Buttons /> */}

    </>
  )
}

export default Main