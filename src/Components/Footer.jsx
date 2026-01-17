import React, { useState } from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      // Simulate subscription
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail('')
    }
  }

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaYoutube />, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <h2>Pure<span>Nutrition</span></h2>
            <p className="footer-tagline">
              Nourishing Generations, One Pure Choice at a Time
            </p>
          </div>
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Quality Supplements</a></li>
            <li><a href="#services">Organic Foods</a></li>
            <li><a href="#services">Personal Plans</a></li>
            <li><a href="#services">Family Wellness</a></li>
            <li><a href="#services">Nutrition Counseling</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Subscribe for wellness tips and exclusive offers</p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
            />
            <button type="submit" className="subscribe-button">
              Subscribe
            </button>
          </form>
          {isSubscribed && (
            <p className="subscribe-success">Thank you for subscribing!</p>
          )}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright">
          © 2024 PureNutrition. All rights reserved. | Designed with ❤️ for your health
        </p>
      </div>
    </footer>
  )
}

export default Footer