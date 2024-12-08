import React from 'react'

const Card = ({el}) => {
  return (
    <div className='w-80 h-96  m-4 flex flex-col shadow-md rounded-xl '>
      <img src={el.image} alt={el.name} className='w-80 h-64'/>
      <div className='px-2.5 py-2'>
      <div className='font-semibold'>{el.name}</div>
      <div>{el.description}</div>
      <div>{el.price}</div>
      </div>
    </div>
  )
}

export default Card