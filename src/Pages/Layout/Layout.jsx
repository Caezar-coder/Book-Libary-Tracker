import React from 'react'
import Header from '../../Components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='MainBody'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
