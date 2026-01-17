import React, { useState } from 'react'
import './Contact.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      info: '123 Wellness Street, Health District',
      detail: 'Nutrition Center, Floor 3'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      detail: 'Mon-Fri, 9AM-6PM'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      info: 'info@purenutrition.com',
      detail: 'We reply within 24 hours'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      info: 'Sunday - Thursday',
      detail: '9:00 AM - 6:00 PM'
    }
  ]

  return (
    <section id={id} className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have questions about our products or need personalized recommendations? 
          Our wellness experts are here to help.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-description">
              Reach out for guidance on your nutritional journey. We're committed to 
              helping you achieve your health goals.
            </p>
            
            <div className="info-cards">
              {contactInfo.map((item, index) => (
                <div key={index} className="info-card">
                  <div className="info-icon">
                    {item.icon}
                  </div>
                  <div className="info-content">
                    <h4>{item.title}</h4>
                    <p className="info-main">{item.info}</p>
                    <p className="info-detail">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="map-placeholder">
              <div className="map-overlay">
                <h4>Our Location</h4>
                <p>Visit our wellness center for personal consultations</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="cta-button submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact