import React from 'react'

const ServicesCard = ({servicescardImage,servicesImageInfo,servicesCardTitle}) => {
  return (
    <div className='w-[300px] h-44 bg-stone-200 p-2.5 flex gap-4 items-center m-2.5 hover:w-[330px] hover:h-48 transition-all duration-300 ease-in-out rounded-lg cursor-pointer'>
      <img src={servicescardImage} alt={servicesImageInfo} className='w-36 h-36 rounded-2xl hover:w-40 h-40'/>
      <div className='text-xl font-normal hover:text-2xl'>{servicesCardTitle}</div>
      </div>
  )
}

export default ServicesCard