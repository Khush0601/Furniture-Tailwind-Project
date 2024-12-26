import React from 'react'
import Home from './pages/Home/Home'
import { Navigate, Route,  Routes } from 'react-router'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Contact from './pages/Contact/Contact'
const AppRoutes = () => {
  return (
    <>
        <Routes>
      <Route index element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default AppRoutes