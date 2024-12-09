import React, { useState } from 'react'



import './App.css'
import Footer from './component/Footer/footer'

import Nav from './component/Nav/Nav'
import Section from './component/Section/Section'
const App = () => {
  const [isLight,setIsLight]=useState(true)

  return (
   <>
   <div className='fixed right-2 bottom-2'>
    <label htmlFor='themeCheckBox'>{isLight?'light':"dark"}</label>
    <input id='themeCheckBox' type='checkbox' checked={isLight} onChange={()=>setIsLight((p)=>!p)}/>
   </div>
     <div className={`w-screen  ${isLight?'light':'dark'} tapp-bg`}>
     <Nav/>
   
    <Section/>
   
     <Footer/>
    </div>
   </>
  )
}

export default App