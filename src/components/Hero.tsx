import React from 'react'
import { Target, Cpu, BrainCircuit } from 'lucide-react'

const Hero: React.FC = () => {
  const heroBgImageUrl = 'https://images.unsplash.com/photo-1581091226809-a1b7c9a41b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBgImageUrl})` }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-dark-bg opacity-70"></div>
      </div>


      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-extra-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
          Transform Your Expertise Into Software
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Where <span className="text-strategy font-semibold">Strategy</span>,{' '}
          <span className="text-technology font-semibold">Technology</span>, and{' '}
          <span className="text-domain font-semibold">Domain Expertise</span> Intersect
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Your industry knowledge is valuable. We help you monetize it through software in just 30 days.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-intersection hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus-visible-ring"
          >
            Book Discovery Call
          </a>
          <a
            href="#process"
            className="inline-block px-8 py-3 border border-gray-500 text-base font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300 focus-visible-ring"
          >
            See Our Process
          </a>
        </div>
      </div>

      {/* Subtle icon hints (optional, might remove if bg is busy) */}
      <div className="absolute bottom-10 left-10 opacity-20 text-strategy z-10">
        <Target size={48} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 text-technology z-10">
        <Cpu size={48} />
      </div>
       <div className="absolute top-20 right-1/4 opacity-20 text-domain z-10">
        <BrainCircuit size={48} />
      </div>
    </section>
  )
}

export default Hero
