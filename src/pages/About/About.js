import React from 'react'
import Nav from '../../component/Nav/Nav'

const About = ({isLight}) => {
  return (
    <div className={`w-screen  ${isLight?'light':'dark'} tapp-bg`}>
        <Nav/>
    </div>
  )
}

export default About