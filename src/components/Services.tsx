import React from 'react'
import { Target, Cpu, BrainCircuit, Check } from 'lucide-react'

const AdvantageCard: React.FC<{ icon: React.ElementType; title: string; points: string[]; colorClass: string }> = ({ icon: Icon, title, points, colorClass }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-xl border-l-4 border-r-4 border-transparent hover:border-l-4 hover:border-r-4 transition-all duration-300" style={{ borderLeftColor: colorClass, borderRightColor: colorClass }}>
    <div className="flex items-center mb-6">
      <Icon className={`h-8 w-8 mr-4 ${colorClass}`} />
      <h3 className={`text-2xl font-bold ${colorClass}`}>{title}</h3>
    </div>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start">
          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
          <span className="text-gray-300 leading-normal">{point}</span>
        </li>
      ))}
    </ul>
  </div>
)

const Services: React.FC = () => {
  const advantages = [
    {
      icon: Target,
      title: 'Strategic Execution',
      colorClass: 'text-strategy',
      borderColor: 'border-strategy',
      points: [
        'Market validation & positioning',
        'MVP definition & roadmap planning',
        'Monetization strategy development',
        'Go-to-market planning support',
        'Competitive landscape analysis',
      ],
    },
    {
      icon: Cpu,
      title: 'Technical Implementation',
      colorClass: 'text-technology',
      borderColor: 'border-technology',
      points: [
        'Rapid prototyping & development',
        'Scalable cloud architecture design',
        'Modern tech stack utilization (React, Node, etc.)',
        'API integrations & data management',
        'Secure and reliable infrastructure setup',
      ],
    },
    {
      icon: BrainCircuit,
      title: 'Domain Amplification',
      colorClass: 'text-domain',
      borderColor: 'border-domain',
      points: [
        'Translating expertise into features',
        'Intuitive UI/UX design for specialists',
        'Workflow optimization through software',
        'Data visualization for insights',
        'Ensuring industry-specific compliance',
      ],
    },
  ]

  return (
    <section id="services" className="py-section-py bg-gradient-to-b from-gray-900 to-dark-bg">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-extra-tight">
            The <span className="text-intersection">808alpha</span> Advantage
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-normal">
            We provide more than just code. We offer a comprehensive partnership to transform your expertise into a thriving micro-SaaS business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {advantages.map((adv, index) => (
            <AdvantageCard
              key={index}
              icon={adv.icon}
              title={adv.title}
              points={adv.points}
              colorClass={adv.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
