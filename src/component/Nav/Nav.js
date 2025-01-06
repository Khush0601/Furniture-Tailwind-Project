import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import { useNavigate } from 'react-router'
const Nav = () => {
  const [isOpen,setIsOpen]=useState(false)
    const navigate=useNavigate()
    const toggleDrawer=()=>{
     setIsOpen(!isOpen)
    }
  return (
    <>
    <nav className='px-5 xs:px-10 py-3 bg-[#000610] grid grid-cols-12 text-white gap-2'>
     <div className='col-span-6 xs:col-span-4  flex items-center'>
     <Logo/>
     </div>
     <div className='col-span-6 xs:col-span-8  flex items-center justify-end cursor-pointer'>
     <div className='xs:hidden' onClick={toggleDrawer}>Menu</div>
          <div className='hidden xs:flex '>
          <div className='mx-2' onClick={()=>navigate('/home')} >Home</div>
          <div className='mx-2' onClick={()=>navigate('/about')} >About</div>
          <div className='mx-2' onClick={()=>navigate('/services')}>Services</div>
          <div className='ml-2' onClick={()=>navigate('/contact')}>Contact</div>
     </div>
     </div>
   </nav>

  {
    isOpen &&  <div className={`fixed top-0 right-0 h-full bg-gray-900 text-white w-60 p-6
         transform ${isOpen ?'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
         <div className='flex justify-end text-xl' onClick={()=>setIsOpen(false)}>✖</div>
        <div className="mt-8">
          <div className="py-2 cursor-pointer" onClick={() => navigate('/home')}>
            Home
          </div>
          <div className="py-2 cursor-pointer" onClick={() => navigate('/about')}>
            About
          </div>
          <div className="py-2 cursor-pointer" onClick={() => navigate('/services')}>
            Services
          </div>
          <div className="py-2 cursor-pointer" onClick={() => navigate('/contact')}>
            Contact
          </div>
        </div>
       
   </div>
  }
  
    </>
  )
}

export default Nav