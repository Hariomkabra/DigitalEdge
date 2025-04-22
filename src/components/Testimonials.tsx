import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      quote: "DigitalEdge completely transformed our online presence. Their SEO strategies helped us increase organic traffic by 215% in just 6 months.",
      author: "Sarah Johnson",
      title: "Marketing Director, TechSolutions Inc.",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company: "TechSolutions Inc.",
      industry: "SaaS",
      results: "215% increase in organic traffic",
    },
    {
      id: 2,
      quote: "Working with DigitalEdge has been a game-changer for our e-commerce business. Their PPC campaigns delivered a 320% ROI within the first quarter.",
      author: "Michael Chen",
      title: "CEO, Urban Outfitters",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company: "Urban Outfitters",
      industry: "E-commerce",
      results: "320% ROI on PPC campaigns",
    },
    {
      id: 3,
      quote: "Their data-driven approach to social media marketing helped us build a loyal community around our brand. Engagement up 175% year-over-year.",
      author: "Emma Rodriguez",
      title: "Brand Manager, Wellness Co.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      company: "Wellness Co.",
      industry: "Health & Wellness",
      results: "175% increase in social engagement",
    },
  ];

  useEffect(() => {
    let interval: number | undefined;
    
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section 
      className="py-20 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. See what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-xl text-white italic mb-6 leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex flex-col mb-6">
                          <span className="font-bold text-white">{testimonial.author}</span>
                          <span className="text-gray-300">{testimonial.title}</span>
                        </div>
                        <div className="bg-blue-600 bg-opacity-20 p-4 rounded-lg">
                          <p className="text-white font-medium mb-1">Results:</p>
                          <p className="text-blue-200">{testimonial.results}</p>
                        </div>
                      </div>
                      <div className="md:w-1/3 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-white font-medium">{testimonial.company}</p>
                          <p className="text-gray-300">{testimonial.industry}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={24} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all"
            aria-label="Next testimonial"
          >
            <ArrowRight size={24} />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-400 bg-opacity-50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/case-studies" 
            className="inline-flex items-center text-blue-300 hover:text-blue-100 font-medium transition-colors"
          >
            See All Case Studies
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;