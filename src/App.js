import React, { useState } from 'react'
import './App.css'
import AppRoutes from './Routes'


const App = () => {
  const [isLight,setIsLight]=useState(true)
   return (
   <>
   <div className='fixed right-2 bottom-2'>
    <label htmlFor='themeCheckBox'>{isLight?'light':"dark"}</label>
    <input id='themeCheckBox' type='checkbox' checked={isLight} onChange={()=>setIsLight((p)=>!p)}/>
   </div>
    
   <div className={`${isLight?'light':'dark'} tapp-bg`}>
    <AppRoutes/>
    </div>
   </>
  )
}

export default App