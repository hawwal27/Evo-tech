import React from 'react'
import Navbar from "./Navbar"
import Hero from "./Hero"
import ServiceCard from "./ServiceCard"
import Footer from "./Footer"
import Whyus from "./Whyus"



const Home = () => {
  return (
    <div>
      <div id='Navbar'>

      </div>
        <Navbar/>
        <div id='Hero'>

        <Hero/>
        </div>
        <div id='service'>
        <ServiceCard/>

        </div>
        <div id='why us'>

        <Whyus/>
        </div>
      <Footer/>
      
    </div>
  )
}

export default Home
