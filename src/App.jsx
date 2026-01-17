import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'
import WhyChooseUs from './Components/WhyChooseUs.jsx'
import Testimonials from './Components/Testimonials.jsx'
import Contact from './Components/Contact.jsx'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />  {/* Add id="hero" */}
      <About id="about" />
      <Services id="services" />
      <WhyChooseUs id="why" />
      <Testimonials id="testimonials" />
      <Contact id="contact" />
      <Footer />
    </>
  )
}

export default App