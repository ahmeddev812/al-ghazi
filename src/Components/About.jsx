import React from 'react'
import './About.css'

const About = ({ id }) => {
  return (
    <section id={id} className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Story</h2>
            <p className="about-description">
              Founded on the simple yet powerful belief that true health begins with purity, 
              PureNutrition was born from a passion for wellness and a commitment to quality. 
              In a world filled with processed foods and questionable supplements, we set out 
              to create something different.
            </p>
            <p className="about-description">
              Every product we offer is meticulously sourced, rigorously tested, and crafted 
              with integrity. We blend traditional wisdom with modern nutritional science to 
              deliver solutions that actually work. Our commitment isn't just to quality 
              ingredients—it's to transparent sourcing, ethical practices, and supporting 
              your wellness journey at every step.
            </p>
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                To make pure, effective nutrition accessible to every family, empowering 
                healthier lives through transparency and quality.
              </p>
            </div>
          </div>
          <div className="about-image">
            <div className="image-stack">
              <div 
                className="stack-image main" 
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800)' }}
              ></div>
              <div 
                className="stack-image secondary" 
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w-800)' }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="values">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {[
              { title: 'Purity', desc: 'No artificial additives or compromises' },
              { title: 'Science', desc: 'Evidence-based formulations' },
              { title: 'Transparency', desc: 'Know what you\'re consuming' },
              { title: 'Community', desc: 'Supporting local producers' },
              { title: 'Integrity', desc: 'Ethical in everything we do' }
            ].map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">0{index + 1}</div>
                <h4>{value.title}</h4>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About