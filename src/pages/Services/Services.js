import React from 'react'
import Nav from '../../component/Nav/Nav'
import ServicesCard from '../../component/servicesCard/ServicesCard'
import recliners from '../../Assets/recliners.jpg'
import diningSets from '../../Assets/dining sets.jpg'
import beanBags from '../../Assets/bean Bags.jpg'
import livingRoom from '../../Assets/living Room.jpg'
import diningRoom from '../../Assets/dining room.jpg'
import bedRoom from '../../Assets/bed room.jpg'
import officeChairs from '../../Assets/office chairs.jpg'
import matress from '../../Assets/matress.jpg'
import studyTable from '../../Assets/study table.jpg'
import sofaSets from '../../Assets/sofaset4.jpg'
import Footer from '../../component/Footer/footer'
const Services = () => {
  return (
   <div className={'w-screen'}>
   <Nav/>
   <section className='p-2 flex flex-wrap justify-center'>
    <ServicesCard servicescardImage={recliners} servicesImageInfo={'recliners'} servicesCardTitle={'Recliners'}/>
    <ServicesCard servicescardImage={diningSets} servicesImageInfo={'diningSets'} servicesCardTitle={'Dining Sets'}/>
    <ServicesCard servicescardImage={beanBags} servicesImageInfo={'beanBags'} servicesCardTitle={'Bean Bags'}/>
    <ServicesCard servicescardImage={livingRoom} servicesImageInfo={'livingRoom'} servicesCardTitle={'Living Room'}/>
    <ServicesCard servicescardImage={diningRoom} servicesImageInfo={'diningRoom'} servicesCardTitle={'Dining Room'}/>
    <ServicesCard servicescardImage={bedRoom} servicesImageInfo={'bedRoom'} servicesCardTitle={'Bed Room '}/>
    <ServicesCard servicescardImage={officeChairs} servicesImageInfo={'officeChairs'} servicesCardTitle={'Office Chairs'}/>
    <ServicesCard servicescardImage={matress} servicesImageInfo={'matress'} servicesCardTitle={'Matress'}/>
    <ServicesCard servicescardImage={studyTable} servicesImageInfo={'studyTable'} servicesCardTitle={'Study Table'}/>
    <ServicesCard servicescardImage={sofaSets} servicesImageInfo={'sofasets'} servicesCardTitle={'Sofa sets'}/>
   </section>

<Footer/>
   </div>
  )
}

export default Services