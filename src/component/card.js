import React from 'react'

const Card = ({el}) => {
  return (
    <div className='w-80 h-96  m-4 flex flex-col border-[1px] shadow-md rounded-xl tapp-border'>
      <img src={el.image} alt={el.name} className='w-80 h-64'/>
      <div className='px-2.5 py-2'>
      <div className='font-semibold tapp-text'>{el.name}</div>
      <div className='tapp-text'>{el.description}</div>
      <div className='tapp-text'>{el.price}</div>
      </div>
    </div>
  )
}

export default Card