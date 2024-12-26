import React from 'react'
import Nav from '../../component/Nav/Nav'
import Image1 from '../../Assets/Image1.jpg'
import Image2 from '../../Assets/image2.jpg'
import Footer from '../../component/Footer/footer'
const About = () => {
  return (
    <div className={'w-screen'}>
      <Nav/>
      <section className='px-5 my-5 xs:px-10'>
      <div className='h-[700px] py-10 about-banner flex justify-center items-center xs:justify-start'>
        <div className='px-5  text-center text-white xs:w-52 text-left'>
          <div className='text-3xl xs:text-left '>About Our Brand</div>
          <div className='xs:text-left '> Furniture can be a product of design and can be considered a form of
           decorative art. In addition to furniture's functional role, it can serve a symbolic 
           or religious purpose. It can be made from a vast multitude of materials, including metal, plastic, and wood.
           </div>
        </div>
      </div>
      <div className='my-14  flex items-center justify-center flex-col  tapp-text'>
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
      <div className='bg-stone-400 py-14 px-5'>
        <div className='grid grid-cols-1 md:grid-cols-2  flex items-center gap-10'>
          <div className='flex flex-col ' >
            <div className='text-center text-2xl md:text-start'>Carefully
             <br/> considered 
             <br/> Details  
             <br/>
              & Perfections</div>
            <div className='py-2 text-center md:text-start '>Furniture can be a product of design and can be considered a form of
           decorative art. In addition to furniture's functional role, it can serve a symbolic 
           or religious purpose. It can be made from a vast multitude of materials, including metal, plastic, and wood.</div>
          </div>
          <div className='py-2 flex items-center justify-center'>
            <img src={Image1} alt='image' className='h-96 rounded-2xl'/>
          </div>
        </div>
        {/* 2nd box */}
        <div className='grid grid-cols-1 md:grid-cols-2 py-10 gap-10 flex items-center'>
          <div className='w-full'>
          <img src={Image2} alt='image' className='h-96 rounded-2xl w-full'/>
          </div>
          <div className='text-center md:text-start'>
           <div className='text-2xl'>Crafted in
           <br/>
           combination of beauty &
           <br/>
           Perfection
           </div>
           <div className='py-2 text-center  md:text-start '>Furniture can be a product of design and can be considered a form of
           decorative art. In addition to furniture's functional role, it can serve a symbolic 
           or religious purpose. It can be made from a vast multitude of materials, including metal, plastic, and wood.</div>
          </div>
        </div>
      </div>
      <div className='my-10'>
        <Footer/>
      </div>

      </section>
    </div>
  )
}

export default About