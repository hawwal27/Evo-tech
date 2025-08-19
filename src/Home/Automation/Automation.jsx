import React from 'react'
import Navbar from './Navbar'
import Hero from '../Hero'
import AboutAutomation from './Aboutus'
import ContactSection from './Contactus'

const Automation = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div id='about'>

      <AboutAutomation/>
      </div>
      <div id='contact'>

      <ContactSection/> 
      </div>
    </div>
  )
}

export default Automation
