import React from 'react'
import "./Hero.css"
 import hero from "../../assets/hero.png"
 import dark_arrow from "../../assets/dark-arrow.png"

export default function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculam designed to empower students 
            with the knowledge, skills and experiences nedded to excel in
            the dynamic feild of education </p>
            <button className='btn'>Explore more <img src={dark_arrow}/></button>
      </div>
    </div>
  )
}
