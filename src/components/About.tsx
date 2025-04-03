import React from 'react'
import { Target, Cpu, BrainCircuit } from 'lucide-react'

const FeatureCard: React.FC<{ icon: React.ElementType; title: string; description: string; colorClass: string; shadowClass: string }> = ({ icon: Icon, title, description, colorClass, shadowClass }) => (
  <div className={`bg-gray-800 p-6 rounded-lg shadow-lg border-t-4 ${colorClass} ${shadowClass} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
    <Icon className={`h-10 w-10 mb-4 ${colorClass}`} />
    <h3 className={`text-xl font-bold mb-2 ${colorClass}`}>{title}</h3>
    <p className="text-gray-400 text-sm leading-normal">{description}</p>
  </div>
)

const About: React.FC = () => {
  return (
    <section id="about" className="py-section-py bg-light-bg text-dark-text">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-extra-tight">
            The Power of <span className="text-intersection">Intersection</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-normal">
            Most solutions focus on just one piece of the puzzle. At 808alpha.studio, we understand that true innovation happens when strategy, technology, and deep domain expertise converge. We bring all three together to build impactful software that solves real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Strategy"
            description="We don't just build; we architect for success. Our strategic approach ensures your software aligns with market needs and business goals, maximizing your ROI."
            colorClass="text-strategy border-strategy"
            shadowClass="hover:shadow-glow-strategy"
          />
          <FeatureCard
            icon={Cpu}
            title="Technology"
            description="Leveraging modern, efficient tech stacks, we rapidly prototype and build robust, scalable micro-SaaS applications tailored to your specific requirements."
            colorClass="text-technology border-technology"
            shadowClass="hover:shadow-glow-technology"
          />
          <FeatureCard
            icon={BrainCircuit}
            title="Domain Expertise"
            description="Your knowledge is our foundation. We work closely with you to translate your industry insights into intuitive, valuable software features that resonate with users."
            colorClass="text-domain border-domain"
            shadowClass="hover:shadow-glow-domain"
          />
        </div>
      </div>
    </section>
  )
}

export default About
