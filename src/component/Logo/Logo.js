import React from 'react'
import icon from '../../Assets/icon2.jpg'
const Logo = () => {
  return (
    <div className='flex'>
         <img src={icon} alt='home-icon' className='w-6 h-6'/>
         <div className='text-lg px-1'>Furnitura</div>
    </div>
  )
}

export default Logo