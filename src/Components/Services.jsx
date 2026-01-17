import React from 'react'
import './Services.css'
import { FaCapsules, FaAppleAlt, FaUserMd, FaUsers } from 'react-icons/fa'

const Services = ({ id }) => {
  const services = [
    {
      icon: <FaCapsules />,
      title: 'Quality Supplements',
      description: 'Scientifically formulated vitamins and minerals that deliver results you can feel. Each batch undergoes rigorous testing.',
      features: ['Third-party tested', 'Bioavailable formulas', 'GMP certified']
    },
    {
      icon: <FaAppleAlt />,
      title: 'Organic Foods',
      description: 'Carefully sourced organic produce and pantry staples. Farm-to-table quality with strict standards.',
      features: ['100% organic', 'Locally sourced', 'Seasonal selections']
    },
    {
      icon: <FaUserMd />,
      title: 'Personal Plans',
      description: 'Tailored nutrition guidance based on your lifestyle and goals. Build sustainable healthy habits.',
      features: ['Custom meal plans', 'Progress tracking', 'Expert consultations']
    },
    {
      icon: <FaUsers />,
      title: 'Family Wellness',
      description: 'Complete wellness solutions for every family member. Specialized products for all ages.',
      features: ['Child nutrition', 'Senior care', 'Family packages']
    }
  ]

  return (
    <section id={id} className="services">
      <div className="container">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">
          Comprehensive nutrition solutions designed to support your health at every stage of life
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="service-button cta-button secondary-button">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services