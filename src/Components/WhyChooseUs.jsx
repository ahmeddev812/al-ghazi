import React from 'react'
import './WhyChooseUs.css'
import { FaCheckCircle, FaLeaf, FaHeart, FaAward, FaShippingFast, FaHeadset } from 'react-icons/fa'

const WhyChooseUs = ({ id }) => {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: 'Third-Party Tested',
      description: 'Every product verified by independent laboratories'
    },
    {
      icon: <FaLeaf />,
      title: 'Halal Certified',
      description: 'Meeting strict dietary and quality requirements'
    },
    {
      icon: <FaHeart />,
      title: 'Family-Owned',
      description: 'Personal care and attention in every order'
    },
    {
      icon: <FaAward />,
      title: 'Award-Winning',
      description: 'Recognized for excellence in nutritional products'
    },
    {
      icon: <FaShippingFast />,
      title: 'Fast Shipping',
      description: 'Free delivery on orders above $50'
    },
    {
      icon: <FaHeadset />,
      title: 'Expert Support',
      description: '24/7 customer service with nutritionists'
    }
  ]

  return (
    <section id={id} className="why-choose-us">
      <div className="container">
        <h2 className="section-title">Why Choose PureNutrition</h2>
        <p className="section-subtitle">
          We stand apart through our unwavering commitment to quality, transparency, 
          and your complete satisfaction
        </p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="certifications">
          <h3>Our Certifications</h3>
          <div className="cert-logos">
            <div className="cert-logo">GMP</div>
            <div className="cert-logo">FDA</div>
            <div className="cert-logo">ISO 9001</div>
            <div className="cert-logo">HALAL</div>
            <div className="cert-logo">ORGANIC</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs