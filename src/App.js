import React, { useState } from 'react'
import icon from '../src/Assets/icon.png'
import AboutImg from '../src/Assets/AboutImg.jpg'
import data from '../src/Data/data'
import Card from './component/card' 

import './App.css'
const App = () => {
  const [isLight,setIsLight]=useState(true)

  return (
   <>
   <div className='fixed right-2 bottom-2'>
    <label htmlFor='themeCheckBox'>{isLight?'light':"dark"}</label>
    <input id='themeCheckBox' type='checkbox' checked={isLight} onChange={()=>setIsLight((p)=>!p)}/>
   </div>
     <div className={`w-screen  ${isLight?'light':'dark'} tapp-bg`}>
   <nav className='px-5 xs:px-10 py-3 bg-slate-200 grid grid-cols-12 gap-2'>
     <div className='col-span-6 xs:col-span-4  flex items-center'>
     <img src={icon} alt='home-icon' className='w-6 h-6'/>
     <div className='text-lg px-1'>Furnitura</div>
     </div>
     <div className='col-span-6 xs:col-span-8  flex items-center justify-end '>
     <div className='xs:hidden'>Menu</div>
          <div className='hidden xs:flex '>
          <div className='mx-2'>Home</div>
          <div className='mx-2'>About</div>
          <div className='mx-2'>Services</div>
          <div className='ml-2'>Contact</div>
     </div>
     </div>
   </nav>
   <section className='px-5  xs:px-10 '>
   <div className='h-[700px] py-10 home-banner flex flex-col justify-center items-center'>
        <div className='text-3xl text-center'>Transform Your Space With Our </div>
        <div className='text-3xl text-center'>Premium Furnitures</div>
        <div className='text-center'>
        Furniture refers to objects intended to support various human activities such 
        as seating (e.g., stools, chairs, and sofas), eating (tables), storing items, working, and sleeping 
        </div>
        <div className='flex gap-4 my-6'>
          <button className='px-8 py-2 explore-button rounded-lg'>Shop Now</button>
          <button className='px-8 py-2  explore-button rounded-lg'>Explore</button>
        </div>
   </div>

   <div className='py-10 px-2 my-4 grid grid-cols-1 md:grid-cols-2  tapp-bg gap-2 '>
    <div className='  flex justify-center items-center '>
    <img src={AboutImg} alt="aboutImg" className=' h-96'/>
    </div>
    <div className='  flex flex-col justify-center '>
    <div className='text-4xl text-center md:text-left tapp-text'>About Us</div>
            <div className='my-4 text-center md:text-left tapp-text '>
            Furniture is a human-made object that serves a variety of purposes,
             including seating, eating, sleeping, and working. It can be used to hold 
             items at a convenient height, or to store things. 
            </div>
            <div className='text-center md:text-left tapp-text'>
        Furniture can be a product of design and can be considered a 
        form of decorative art. The functional and decorative aspects of furniture
         have been emphasized more or less throughout history according to economics and fashion.
        </div>
    </div>
   </div>
   <div className='py-10 px-2 my-4   tapp-bg flex flex-wrap justify-center'>
  
          {
            data.map((el,i)=>{
              return <Card key={i} el={el} />
            })
          }
     

   </div>
   </section>
   
   
  
    </div>
   </>
  )
}

export default App