import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Process from './components/Process'
import Services from './components/Services'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-dark-bg text-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Services />
        <Work />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
