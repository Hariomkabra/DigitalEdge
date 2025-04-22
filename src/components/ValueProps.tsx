import React from 'react';
import { LineChart, BarChart3, Users, Globe } from 'lucide-react';

const ValueProps: React.FC = () => {
  const stats = [
    {
      id: 1,
      title: "ROI Increase",
      value: "280%",
      description: "Average ROI increase for clients",
      icon: <LineChart className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Client Retention",
      value: "94%",
      description: "Client retention rate year-over-year",
      icon: <Users className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 3,
      title: "Revenue Generated",
      value: "$125M+",
      description: "Revenue generated for clients",
      icon: <BarChart3 className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 4,
      title: "Industries Served",
      value: "12+",
      description: "Specialized industry experience",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proven Results That Speak Volumes</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Our metrics demonstrate our commitment to delivering exceptional value and tangible outcomes for our clients.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-xl font-medium text-gray-800 mb-2">{stat.title}</p>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;