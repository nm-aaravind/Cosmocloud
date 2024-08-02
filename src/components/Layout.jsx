import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='container min-w-full font-kanit'>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout