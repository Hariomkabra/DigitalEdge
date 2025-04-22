import React from 'react';
import { Link } from './ui/Link';
import { ArrowUpRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-medium mb-2">About Creative Click Media</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Your Partner for Success</h3>
            <div className="prose prose-lg">
              <p className="text-gray-700 mb-6">
                Creative Click Media is a full-service digital marketing agency dedicated to helping businesses like yours thrive in today's competitive online marketplace. As leaders in SEO, web design, ecommerce, conversion rate optimization, and internet marketing services, we're committed to driving traffic, converting visitors, and delivering tangible results for our clients.
              </p>
              <p className="text-gray-700 mb-6">
                Our full-service digital marketing solutions have helped hundreds of businesses in New Jersey and nationwide generate more leads, calls, and revenue, with an ever-expanding trophy cabinet to show for it.
              </p>
              <p className="text-gray-700">
                We're in the business of helping businesses like yours find success online, and we're committed to staying at the forefront of digital marketing innovation. Your journey to digital marketing success starts here. Contact Creative Click Media today to discover how our comprehensive digital marketing solutions can help you boost your bottom line and build your brand on the web and beyond.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
                alt="Marketing Success"
                className="w-full rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 bg-white p-6 rounded-tr-2xl">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-600">+362%</span>
                  <span className="text-gray-600">Leads</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">Average increase in 3 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;