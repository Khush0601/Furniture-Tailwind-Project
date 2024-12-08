import React from 'react'
import icon from '../src/Assets/icon.png'
import AboutImg from '../src/Assets/AboutImg.jpg'
import data from '../src/Data/data'
import Card from './component/card'
const App = () => {
  return (
    <div className='w-screen h-screen bg-[black]'>
    <nav className='w-full h-14 bg-slate-900 flex justify-center items-center text-[white] shadow-md '>
      <div className=' w-4/5 flex justify-between '>
        <div className='flex  items-center '>
          <div >
            <img src={icon} alt='home-icon' className='w-4 h-4'/>
          </div>
          <div className='text-lg px-1'>Furnitura</div>
        </div>
        <div className='text-lg'>
          <div className=' xs:hidden'>Menu</div>
          <div className='hidden xs:flex gap-x-2.5'>
          <div>Home</div>
          <div>About</div>
          <div>Services</div>
          <div>Contact</div>
          </div>
        </div>
      </div>
    </nav>
    <section className='w-full bg-black-200 flex justify-center items-center text-[white]'>
       <div className='w-full  flex justify-center items-center flex-col px-5 my-40'>
        <div className='text-3xl text-center'>Transform Your Space With Our </div>
        <div className='text-3xl text-center'>Premium Furnitures</div>
        <div className='text-center'>
        Furniture refers to objects intended to support various human activities such 
        as seating (e.g., stools, chairs, and sofas), eating (tables), storing items, working, and sleeping 
        </div>
       </div>
    </section>
    <section className='w-full  bg-slate-400 flex justify-center py-20'>
      <div className=' w-4/5 grid grid-cols-1 md:grid-cols-2 items-center'>
        <div className='w-full flex justify-center p-1.5 md:flex items-center'>
          <img src={AboutImg} alt="aboutImg" className='w-96 h-96 md:w-96 h-96 object-cover'/>
        </div>
        <div className=' w-full flex flex-col justify-center p-10 md:align-center'>
            <div className='text-4xl text-center md:text-left'>About Us</div>
            <div className='my-4 text-center md:text-left'>
            Furniture is a human-made object that serves a variety of purposes,
             including seating, eating, sleeping, and working. It can be used to hold 
             items at a convenient height, or to store things. 
            </div>
            <div className='text-center md:text-left'>
        Furniture can be a product of design and can be considered a 
        form of decorative art. The functional and decorative aspects of furniture
         have been emphasized more or less throughout history according to economics and fashion.
        </div>
        </div>
     </div>
    </section>
    <section className='w-full   flex justify-center items-center'>
       <div className='w-4/5  flex flex-wrap  justify-center items-center'>
          {
            data.map((el,i)=>{
              return <Card key={i} el={el} />
            })
          }
       </div>
    </section>
  
    </div>
  )
}

export default App