import React from 'react';
import { Link } from './ui/Link';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Let's discuss how our digital marketing expertise can help grow your business. Schedule a free consultation today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Request a Proposal</h3>
              <p className="text-blue-100 mb-6">
                Tell us about your project and get a customized proposal tailored to your business needs.
              </p>
              <Link 
                href="/contact" 
                className="bg-white text-blue-800 hover:bg-blue-50 font-medium px-6 py-3 rounded-md inline-flex items-center transition-colors"
              >
                Get Started <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            
            <div className="bg-blue-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Schedule a Call</h3>
              <p className="text-blue-100 mb-6">
                Speak directly with one of our digital marketing experts for personalized advice.
              </p>
              <Link 
                href="/schedule" 
                className="bg-white text-blue-800 hover:bg-blue-50 font-medium px-6 py-3 rounded-md inline-flex items-center transition-colors"
              >
                Book a Time <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <div className="bg-blue-500 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <span className="text-lg">(555) 123-4567</span>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-500 p-2 rounded-full mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <span className="text-lg">info@digitaledge.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;