import React from 'react'
import { TrendingUp } from 'lucide-react'

interface CaseStudyProps {
  imageUrl: string;
  title: string;
  description: string;
  result: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ imageUrl, title, description, result }) => (
  <div className="bg-light-bg rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl">
    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
       {/* Use a valid Unsplash URL or a placeholder */}
       <img
        src={imageUrl || `https://source.unsplash.com/random/400x225?technology&sig=${Math.random()}`}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-dark-text">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-normal">{description}</p>
      <div className="flex items-center text-green-600">
        <TrendingUp className="h-5 w-5 mr-2" />
        <p className="text-sm font-semibold">{result}</p>
      </div>
    </div>
  </div>
)

const Work: React.FC = () => {
  const caseStudies: CaseStudyProps[] = [
    {
      imageUrl: 'https://source.unsplash.com/random/400x225?finance,options',
      title: 'Covered Calls Portfolio Manager',
      description: 'Helped a financial advisor automate complex options strategy tracking for clients, saving hours of manual work.',
      result: 'Reduced admin time by 80%',
    },
    {
      imageUrl: 'https://source.unsplash.com/random/400x225?data,marketing',
      title: 'Mini CDP Platform',
      description: 'Enabled a marketing consultant to offer a niche Customer Data Platform service, unifying client data sources.',
      result: 'Launched new high-margin service offering',
    },
    {
      imageUrl: 'https://source.unsplash.com/random/400x225?advertising,dashboard',
      title: 'Self-Service Ad Platform',
      description: 'Transformed an ad agency\'s internal process into a self-service tool for small businesses, creating a new revenue stream.',
      result: 'Achieved $10k MRR within 3 months',
    },
  ]

  return (
    <section id="work" className="py-section-py bg-light-bg text-dark-text">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-extra-tight">
            Transformation Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-normal">
            See how we've helped subject matter experts like you turn their knowledge into successful software products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
