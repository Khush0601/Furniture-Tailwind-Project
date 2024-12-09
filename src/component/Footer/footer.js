import React from 'react'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <div className='py-10 px-2 my-4  grid grid-cols-12 bg-[#000610] text-white'>
      <div className='col-span-12 md:col-span-4  py-4 flex justify-center'>
        <Logo/> 
      </div>
      <div className='col-span-12 md:col-span-8 '>
       <div className=' flex justify-around py-4'>
       <div>
        <p>Links</p>
        <p>Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Testimony</p>
       </div>
       <div>
        <p>Contact</p>
        <p>FAQ</p>
        <p>Blog</p>
        <p>Contact</p>
       </div>
       <div >
        <p >Contact</p>
        <p>1800-233-232</p>
       
       </div>
       </div>
      </div>
    </div>
  )
}

export default Footer