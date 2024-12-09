import React from 'react'
import Footer from '../../component/Footer/footer'
import Nav from '../../component/Nav/Nav'
import Section from '../../component/Section/Section'
const Home = ({isLight}) => {
  return (
    <div className={`w-screen  ${isLight?'light':'dark'} tapp-bg`}>
    <Nav/>
    <Section/>
    <Footer/>
    </div>
  )
}

export default Home