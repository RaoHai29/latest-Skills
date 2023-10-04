import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
const ProctedRoute = () => {
    let isAuthenticated = localStorage.getItem("isLogged")
  return (
    isAuthenticated !== true ? <Navigate to='admin' /> : <Outlet />
  )
}

export default ProctedRoute