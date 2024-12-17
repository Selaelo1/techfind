import React from 'react';
import { Shield, TrendingUp, Users, Briefcase, Code2, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'Every professional is manually verified by our expert team to ensure top quality.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Pricing',
    description: 'No hidden fees or subscriptions. Just a simple 5% service fee on successful projects.',
  },
  {
    icon: Users,
    title: 'Strong Network',
    description: 'Build lasting relationships with professionals in your industry.',
  },
  {
    icon: Briefcase,
    title: 'Quality Projects',
    description: 'Access high-value opportunities from vetted businesses worldwide.',
  },
  {
    icon: Code2,
    title: 'Tech Focus',
    description: 'Specialized platform for technology and development projects.',
  },
  {
    icon: Clock,
    title: 'Quick Matching',
    description: 'Find the right talent or project within hours, not weeks.',
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechFind?</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're revolutionizing the tech freelancing industry with our unique approach
            to connecting talent with opportunity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-black text-white p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;