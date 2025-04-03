import React from 'react'
import { Search, DraftingCompass, Rocket, CheckCircle } from 'lucide-react'

const ProcessStep: React.FC<{ icon: React.ElementType; step: number; title: string; description: string; isLast?: boolean }> = ({ icon: Icon, step, title, description, isLast = false }) => (
  <div className="relative flex items-start group">
    {/* Vertical line connector */}
    {!isLast && (
      <div className="absolute left-6 top-12 w-px h-full bg-gray-600 md:hidden lg:block"></div>
    )}
     {/* Horizontal line connector for medium screens */}
     {!isLast && (
      <div className="hidden md:block lg:hidden absolute top-6 left-1/2 w-full h-px bg-gray-600 -ml-1/2"></div>
    )}

    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-intersection flex items-center justify-center text-white font-bold text-xl z-10 shadow-md group-hover:scale-110 transition-transform">
      <Icon className="h-6 w-6" />
    </div>
    <div className="ml-6">
      <div className="text-sm font-semibold text-intersection uppercase tracking-wider mb-1">Step {step}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 leading-normal">{description}</p>
    </div>
  </div>
)

const Process: React.FC = () => {
  return (
    <section id="process" className="py-section-py bg-dark-bg">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-extra-tight">
            Our 4-Week Transformation Process
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-normal">
            From idea to launch-ready micro-SaaS in just 30 days. Our streamlined process focuses on speed, efficiency, and translating your expertise into a tangible product.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
           {/* Connecting line for large screens (vertical) */}
           <div className="hidden lg:block absolute left-6 top-6 bottom-6 w-px bg-gray-600"></div>
           {/* Connecting line for medium screens (horizontal) */}
           <div className="hidden md:block lg:hidden absolute top-6 left-0 right-0 h-px bg-gray-600"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <ProcessStep
              icon={Search}
              step={1}
              title="Discovery & Strategy"
              description="Deep dive into your expertise, target market, and core value proposition. Define MVP scope and strategic roadmap."
            />
            <ProcessStep
              icon={DraftingCompass}
              step={2}
              title="Architecture & Planning"
              description="Design the technical architecture, user flows, and data models. Plan sprints for rapid development cycles."
            />
            <ProcessStep
              icon={Rocket}
              step={3}
              title="Rapid Development"
              description="Build the core features using agile methodologies. Frequent check-ins ensure alignment with your vision."
            />
            <ProcessStep
              icon={CheckCircle}
              step={4}
              title="Refinement & Launch Prep"
              description="Iterate based on feedback, polish the UI/UX, and prepare for launch. Finalize documentation and deployment strategy."
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
