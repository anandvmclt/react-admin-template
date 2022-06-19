import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import './layout.css'
const Layout = () => {
  return (
    <div className='d-flex screen-wrapper' >
        <Sidebar/>
        <div className='w-100 overflow-auto'>
            <div>
                 <Navbar/>
            </div>
        <Outlet/>
        </div>
    </div>
  )
}

export default Layout