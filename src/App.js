import React from 'react'
import icon from '../src/Assets/icon.png'

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
    <section className='w-full   bg-slate-400 flex justify-center items-center text-[white]'>
       <div className='w-full  flex justify-center items-center flex-col px-5 my-40'>
        <div className='text-3xl text-center'>Transform Your Space With Our </div>
        <div className='text-3xl text-center'>Premium Furnitures</div>
        <div className='text-center'>
        Furniture refers to objects intended to support various human activities such 
        as seating (e.g., stools, chairs, and sofas), eating (tables), storing items, working, and sleeping 
        </div>
       </div>
    </section>
    <section></section>
  
    </div>
  )
}

export default App