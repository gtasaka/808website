import React from 'react'
import { Triangle } from 'lucide-react' // Using Triangle as a placeholder for the converging elements visual

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-section-py bg-gradient-to-b from-dark-bg to-intersection/30">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Converging Elements Visual Placeholder */}
        <div className="relative mb-10 flex justify-center items-center h-24">
           <div className="absolute w-16 h-16 rounded-full bg-strategy opacity-70 -translate-x-10 animate-pulse"></div>
           <div className="absolute w-16 h-16 rounded-full bg-technology opacity-70 translate-x-10 animate-pulse delay-100"></div>
           <div className="absolute w-16 h-16 rounded-full bg-domain opacity-70 translate-y-8 animate-pulse delay-200"></div>
           {/* Intersection Point */}
           <div className="absolute w-8 h-8 rounded-full bg-intersection shadow-glow-intersection">
             <Triangle className="w-8 h-8 text-white fill-current transform rotate-180" />
           </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-extra-tight">
          Ready to Build at the <span className="text-intersection">Intersection</span>?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-normal">
          Your expertise is the key ingredient. Our strategy and technology complete the formula for your micro-SaaS success. Let's turn your knowledge into recurring revenue.
        </p>
        <a
          href="mailto:hello@808alpha.studio?subject=Discovery Call Request" // Example mailto link
          className="inline-block px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-intersection hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Book Discovery Call
        </a>
         <p className="text-sm text-gray-500 mt-6">
          Or email us directly at <a href="mailto:hello@808alpha.studio" className="text-gray-400 hover:text-intersection underline">hello@808alpha.studio</a>
        </p>
      </div>
    </section>
  )
}

export default CTA
