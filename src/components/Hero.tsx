import React from 'react';
import { Link } from './ui/Link';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] bg-navy-900 relative flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-blue-600 font-medium mb-4">New Jersey's #1 Digital Marketing Agency</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Digital is<br />in our DNA
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Forget the status quo. Our cutting-edge strategies and creative campaigns will revolutionize your marketing and boost your bottom line.
            </p>
            <Link 
              href="/request-proposal" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md text-lg inline-block transition-all"
            >
              Request A Proposal
            </Link>

            <div className="mt-8">
              <div className="flex items-center">
                <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmMxcGxnZmxuaDcza3JlbzVjYTc3NXFramVucXl4ZWJhNGl2Nm1kOSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5NPhdqmyRxn8I/giphy.webp"
                 alt="Google" className="h-6 mr-2" />
                <div className="text-white">
                  <span className="font-medium">Google rating</span>
                  <div className="flex items-center">
                    <span className="mr-1">65+</span>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative max-w-md mx-auto lg:max-w-none">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
                alt="Digital Marketing Expert"
                className="rounded-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-2xl transform rotate-3"></div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;