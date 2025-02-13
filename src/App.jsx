import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer"/>
      <Programs/>
      <About/>
      <Title subTitle="Gallery" title="Campus Photos"/>
      <Campus/>
      <Title subTitle="Testimonials" title="What student says"/>
      <Testimonials/>
      <Title subTitle="Contact Us" title="Get in Touch"/>
      <Contact/>
      </div>
      <Footer/>
      
      
    </div>
  )
}
