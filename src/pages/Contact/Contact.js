import React from 'react'
import Nav from '../../component/Nav/Nav'

const Contact = () => {
  return (
    <div>
      <Nav/>
      <section className='h-[700px] contact-banner flex justify-center items-center md:justify-end'>
       <div className='h-[400px] w-[400px] bg-slate-50 md:mr-24 p-5'>
        <div className='text-2xl'>Contact Us</div>
        <form className='flex flex-col py-8'>
          <input placeholder='enter Name' type='text' className='border-[1px] border-solid rounded-xl p-4 border-black mb-5' />
          <input placeholder='enter Email' type='text' className='border-[1px] border-solid rounded-xl p-4 border-black mb-5'/>
          <input placeholder='enter phone' type='text' className='border-[1px] border-solid rounded-xl p-4 border-black mb-5'/>
          <button className='text-start w-20 bg-blue-800 text-white px-4 py-2 rounded-xl text-center'>Submit</button>
        </form>
       </div>
      </section>
    </div>
  )
}

export default Contact