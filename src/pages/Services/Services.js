import React from 'react'
import Nav from '../../component/Nav/Nav'
import ServicesCard from '../../component/servicesCard/ServicesCard'

const Services = () => {
  return (
   <div className={'w-screen'}>
   <Nav/>
   <section className='p-2'>
    <ServicesCard/>
   </section>

   </div>
  )
}

export default Services