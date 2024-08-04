import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className='container min-w-full font-kanit'>
      <Header />
      <Outlet />
      <ToastContainer position='bottom-center' hideProgressBar={true} draggable autoClose={2000} limit={1}  transition={Flip} toastStyle={{ backgroundColor:'#2563eb', color: 'white' ,fontFamily: 'Kanit', fontSize:'1.2rem'}}/>
    </div>
  )
}

export default Layout