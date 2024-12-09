import React, { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { Navigate, Route,  Routes } from 'react-router'
import About from './pages/About/About'

const App = () => {
  const [isLight,setIsLight]=useState(true)
   return (
   <>
   <div className='fixed right-2 bottom-2'>
    <label htmlFor='themeCheckBox'>{isLight?'light':"dark"}</label>
    <input id='themeCheckBox' type='checkbox' checked={isLight} onChange={()=>setIsLight((p)=>!p)}/>
   </div>
    
     <Routes>
      <Route index element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home isLight={isLight}/>}/>
      <Route path="/about"  element={<About isLight={isLight}/>}/>
     </Routes>
   </>
  )
}

export default App