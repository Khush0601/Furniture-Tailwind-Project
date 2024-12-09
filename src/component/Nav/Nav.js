import React from 'react'
import Logo from '../Logo/Logo'
import { useNavigate } from 'react-router'
const Nav = () => {
    const navigate=useNavigate()
  return (
    <>
    <nav className='px-5 xs:px-10 py-3 bg-[#000610] grid grid-cols-12 text-white gap-2'>
     <div className='col-span-6 xs:col-span-4  flex items-center'>
     <Logo/>
     </div>
     <div className='col-span-6 xs:col-span-8  flex items-center justify-end cursor-pointer'>
     <div className='xs:hidden'>Menu</div>
          <div className='hidden xs:flex '>
          <div className='mx-2' >Home</div>
          <div className='mx-2' >About</div>
          <div className='mx-2'>Services</div>
          <div className='ml-2'>Contact</div>
     </div>
     </div>
   </nav>
    </>
  )
}

export default Nav