import React from 'react'
import { Quote } from 'lucide-react'

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  metric?: string; // Optional metric like "Reduced workload by X%"
  imageUrl?: string; // Optional image URL
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, author, title, metric, imageUrl }) => (
  <div className="bg-gray-800 p-8 rounded-lg shadow-lg flex flex-col h-full">
    <Quote className="h-8 w-8 text-intersection mb-4" />
    <blockquote className="text-gray-300 italic mb-6 flex-grow">"{quote}"</blockquote>
    <div className="flex items-center mt-auto">
      {imageUrl ? (
        <img src={imageUrl} alt={author} className="h-12 w-12 rounded-full mr-4 object-cover" />
      ) : (
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mr-4">
          {author.charAt(0)}
        </div>
      )}
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-gray-400">{title}</p>
        {metric && <p className="text-sm text-green-400 mt-1">{metric}</p>}
      </div>
    </div>
  </div>
)

const Testimonials: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "808alpha didn't just build software; they understood my niche and translated my process perfectly. The result exceeded my expectations.",
      author: 'Jane D.',
      title: 'Financial Consultant',
      metric: 'Automated 90% of reporting tasks',
      imageUrl: 'https://source.unsplash.com/random/100x100?woman,professional&sig=1',
    },
    {
      quote: 'The speed and quality of development were incredible. In just a month, we had a working MVP that I could immediately start testing with clients.',
      author: 'Mike R.',
      title: 'Marketing Strategist',
      imageUrl: 'https://source.unsplash.com/random/100x100?man,professional&sig=2',
    },
    {
      quote: 'Working with 808alpha felt like having a dedicated tech co-founder. They grasped the industry specifics quickly and built exactly what was needed.',
      author: 'Sarah K.',
      title: 'Supply Chain Expert',
      metric: 'Launched MVP to first paying customers in 6 weeks',
      imageUrl: 'https://source.unsplash.com/random/100x100?woman,tech&sig=3',
    },
  ]

  return (
    <section id="testimonials" className="py-section-py bg-dark-bg">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white leading-extra-tight">
            From Our Clients
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-normal">
            Hear directly from experts who partnered with us to bring their software ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
