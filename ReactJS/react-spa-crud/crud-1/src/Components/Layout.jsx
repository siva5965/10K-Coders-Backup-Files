import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
    <h2>Hi Welcome to CRUD Operation</h2>
    <Outlet/>
    
    </div>
  )
}

export default Layout