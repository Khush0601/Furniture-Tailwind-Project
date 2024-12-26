import React from 'react'
import Nav from '../../component/Nav/Nav'

const About = () => {
  return (
    <div className={'w-screen'}>
      <Nav/>
      <section className='px-5 xs:px-10'>
      <div className='h-[700px] py-10 about-banner flex justify-center items-center xs:justify-start'>
        <div className='px-5  text-center text-white xs:w-52 text-left'>
          <div className='text-3xl xs:text-left '>About Our Brand</div>
          <div className='xs:text-left '> Furniture can be a product of design and can be considered a form of
           decorative art. In addition to furniture's functional role, it can serve a symbolic 
           or religious purpose. It can be made from a vast multitude of materials, including metal, plastic, and wood.
           </div>
        </div>
      </div>
      <div className='my-14  flex items-center justify-center flex-col'>
       <div className='text-2xl'>OverView</div>
       <div className='text-center px-5 py-4'> Furniture can be a product of design and can be considered a form of
           decorative art. In addition to furniture's functional role, it can serve a symbolic 
           or religious purpose. It can be made from a vast multitude of materials, including metal, plastic, and wood.
           Furniture can be made using a variety of woodworking joints which often reflects the local culture.
           People have been using natural objects, such as tree stumps, rocks and moss, as furniture since the beginning
            of human civilization and continues today in some households/campsites. Archaeological research shows that from 
            around 30,000 years ago, people started to construct and carve their own furniture, using wood, stone, and animal bones.
           </div>
      </div>
      <div>Image</div>
      <div>Footer</div>

      </section>
    </div>
  )
}

export default About