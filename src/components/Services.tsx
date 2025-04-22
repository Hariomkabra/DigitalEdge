import React from 'react';
import { Link } from './ui/Link';
import { Search, Monitor, PenTool, Target, Instagram, Mail, LineChart, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "SEO & Content",
      description: "Improve your visibility in search engines with our data-driven SEO strategies.",
      icon: <Search className="w-10 h-10 text-blue-600" />,
      link: "/services/seo",
    },
    {
      id: 2,
      title: "Web Design",
      description: "Create stunning websites that convert visitors into customers.",
      icon: <Monitor className="w-10 h-10 text-blue-600" />,
      link: "/services/web-design",
    },
    {
      id: 3,
      title: "Branding",
      description: "Develop a strong brand identity that connects with your audience.",
      icon: <PenTool className="w-10 h-10 text-blue-600" />,
      link: "/services/branding",
    },
    {
      id: 4,
      title: "PPC & Paid Social",
      description: "Drive immediate traffic and results with targeted paid campaigns.",
      icon: <Target className="w-10 h-10 text-blue-600" />,
      link: "/services/ppc",
    },
    {
      id: 5,
      title: "Social Media",
      description: "Build engagement and community across social platforms.",
      icon: <Instagram className="w-10 h-10 text-blue-600" />,
      link: "/services/social-media",
    },
    {
      id: 6,
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with targeted email campaigns.",
      icon: <Mail className="w-10 h-10 text-blue-600" />,
      link: "/services/email",
    },
    {
      id: 7,
      title: "CRO",
      description: "Optimize your website to maximize conversions and revenue.",
      icon: <LineChart className="w-10 h-10 text-blue-600" />,
      link: "/services/cro",
    },
    {
      id: 8,
      title: "Analytics & Reporting",
      description: "Gain insights from comprehensive data analysis and reporting.",
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      link: "/services/analytics",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Digital Marketing Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your unique business needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 p-2 inline-block bg-blue-50 rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md inline-block transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;