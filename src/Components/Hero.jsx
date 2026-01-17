import React, { useState, useEffect } from 'react'
import './Hero.css'
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'

const Hero = ({ id }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const heroImages = [
    image1,
    image2,
    image3,
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
     <section id={id} className="hero"> 
      <div className="hero-content">
        <h1 className="hero-title">
          Pure Nutrition for a <span className="highlight">Healthier</span> You
        </h1>
        <p className="hero-subtitle">
          Discover premium supplements and organic foods tailored to support your wellness journey. 
          Backed by science, delivered with care.
        </p>
        <div className="hero-buttons">
          <button 
            className="cta-button" 
            onClick={() => scrollToSection('services')}
          >
            Explore Products
          </button>
          <button 
            className="cta-button secondary-button" 
            onClick={() => scrollToSection('contact')}
          >
            Book Consultation
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>5000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Natural Ingredients</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Expert Support</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-slider">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`slider-image ${index === currentImage ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="slider-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentImage ? 'active' : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero