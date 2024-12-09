import React from 'react'
import Home from './pages/Home/Home'
import { Navigate, Route,  Routes } from 'react-router'
import About from './pages/About/About'
const AppRoutes = () => {
  return (
    <>
        <Routes>
      <Route index element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about"  element={<About />}/>
     </Routes>
    </>
  )
}

export default AppRoutes