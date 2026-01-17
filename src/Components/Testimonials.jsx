import React, { useState, useEffect } from 'react'
import './Testimonials.css'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      text: "After trying multiple brands, PureNutrition's transparency about ingredients won me over. My family's health has never been better.",
      author: "Sarah Johnson",
      role: "Mother of two",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150"
    },
    {
      text: "The quality of products and expert guidance make this my go-to for all nutritional needs. Truly exceptional service!",
      author: "Ahmed Rahman",
      role: "Fitness Coach",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150"
    },
    {
      text: "As a senior citizen, I appreciate the specialized care and pure products. My energy levels have improved significantly.",
      author: "Margaret Williams",
      role: "Retired Teacher",
      rating: 5,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150"
    },
    {
      text: "The organic food selection is outstanding! Fresh, delicious, and delivered right to my door. Highly recommended!",
      author: "David Chen",
      role: "Software Engineer",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id={id} className="testimonials">
      <div className="container">
        <h2 className="section-title">Trusted by Families</h2>
        <p className="section-subtitle">
          Hear from our community of satisfied customers who have transformed their health
        </p>
        
        <div className="testimonials-slider">
          <div className="slider-container">
            <div 
              className="slides-wrapper"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card card">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="star" />
                      ))}
                    </div>
                    <div className="testimonial-author">
                      <div 
                        className="author-image"
                        style={{ backgroundImage: `url(${testimonial.image})` }}
                      ></div>
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <p>{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="slider-arrow prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="slider-arrow next" onClick={nextSlide}>
            ›
          </button>
          
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials