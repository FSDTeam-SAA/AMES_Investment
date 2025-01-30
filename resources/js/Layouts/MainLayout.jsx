import Footer from '@/Components/Footer'
import { NavBar } from '@/Components/NavBar'
import React from 'react'

const MainLayout = ({ children }) => {
  return (
    <div className=' bg-black'>
    <NavBar/>
   <div className="content bg-black">{children}</div>
   <Footer/>

    </div>
  )
}

export default MainLayout