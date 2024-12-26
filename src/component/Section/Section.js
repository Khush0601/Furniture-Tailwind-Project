import React from 'react'
import AboutImg from '../../Assets/AboutImg.jpg'
import data from '../../Data/data'
import Card from '../../component/card' 

const Section = () => {

  
  return (
    <>
<section className='px-5  xs:px-10 '>
   <div className='h-[700px] py-10 home-banner flex flex-col justify-center items-center'>
        <div className='text-3xl text-center'>Transform Your Space With Our </div>
        <div className='text-3xl text-center'>Premium Furnitures</div>
        <div className='text-center'>
        Furniture refers to objects intended to support various human activities such 
        as seating (e.g., stools, chairs, and sofas), eating (tables), storing items, working, and sleeping 
        </div>
        <div className='flex gap-4 my-6'>
          <button className='px-8 py-2 explore-button rounded-lg' >Shop Now</button>
          <button className='px-8 py-2  explore-button rounded-lg'>Explore</button>
        </div>
   </div>

   <div className='py-10 px-2 my-4 grid grid-cols-1 md:grid-cols-2  tapp-bg gap-2 '>
    <div className='  flex justify-center items-center '>
    <img src={AboutImg} alt="aboutImg" className=' h-96'/>
    </div>
    <div className='flex flex-col justify-center '>
            <div className='text-4xl text-center md:text-left tapp-text'>About Us</div>
            <div className='my-4 text-center md:text-left tapp-text '>
             Furniture is a human-made object that serves a variety of purposes,
             including seating, eating, sleeping, and working. It can be used to hold 
             items at a convenient height, or to store things. 
            </div>
            <div className='text-center md:text-left tapp-text'>
             Furniture can be a product of design and can be considered a 
             form of decorative art. The functional and decorative aspects of furniture
             have been emphasized more or less throughout history according to economics and fashion.
             </div>
    </div>
   </div>
   <div className='py-10 px-2 my-4   tapp-bg flex flex-wrap justify-center'>
          {
            data.map((el,i)=>{
              return <Card key={i} el={el} />
            })
          }
     

   </div>

   
</section>
    </>
  )
}

export default Section