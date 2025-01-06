import React from 'react'
import image from '../../Assets/sofa set2.jpg'
const ServicesCard = () => {
  return (
    <div className='w-80 h-44 bg-stone-200 p-2.5 flex gap-4 items-center'>
      <img src={image} alt='' className='w-36 h-36 rounded-2xl'/>
      <div className='text-xl font-normal'>Recliners</div>
      </div>
  )
}

export default ServicesCard