import React from 'react';
import { Link } from './ui/Link';
import { ArrowRight } from 'lucide-react';

const Goals: React.FC = () => {
  const goals = [
    {
      id: 1,
      title: "I Need to Revamp My Website",
      description: "An outdated website can deter visitors and harm your brand's credibility. We specialize in creating visually appealing and user-friendly modern websites that keep your audience engaged and impressed.",
      services: [
        "Website Design",
        "Website Maintenance",
        "WordPress Development",
        "eCommerce Marketing",
        "Copywriting"
      ],
      icon: "🖥️",
      color: "pink"
    },
    {
      id: 2,
      title: "I Want to Build My Brand",
      description: "Your brand is more than just a logo or color scheme—it's the perception that customers have of your company. We'll help you create a strong, memorable brand identity that sets you apart from the competition.",
      services: [
        "Branding & Identity",
        "Graphic Design",
        "Content Marketing",
        "Email Marketing",
        "Video Marketing"
      ],
      icon: "🎨",
      color: "orange"
    },
    {
      id: 3,
      title: "I'd Like to Generate More Traffic",
      description: "A website that isn't generating traffic is missing out on valuable potential customers. We'll improve your website's visibility and boost your search engine rankings to ensure your online presence thrives.",
      services: [
        "Search Engine Optimization",
        "Generative Engine Optimization",
        "Local SEO",
        "PPC Management",
        "Social Media Advertising"
      ],
      icon: "📈",
      color: "green"
    },
    {
      id: 4,
      title: "I Want to Engage My Audience",
      description: "Building a loyal audience requires meaningful interactions. We'll develop custom content strategies and engagement tactics that resonate with your audience and will keep them coming back for more.",
      services: [
        "Social Media Marketing",
        "Digital Marketing",
        "Conversion Rate Optimization",
        "Email Marketing",
        "Content Marketing"
      ],
      icon: "🎯",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-medium mb-2">Digital Marketing Goals</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Your End Game?</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our results-driven campaigns are infused with creativity and designed to address your pain points, optimize your strategy, and meet your digital marketing goals. No matter what your company is up against in the digital domain, we're up for the challenge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-2xl bg-${goal.color}-100`}>
                {goal.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{goal.title}</h4>
              <p className="text-gray-600 mb-6">{goal.description}</p>
              
              <div className="mb-6">
                <h5 className="font-medium text-gray-900 mb-2">EXPLORE:</h5>
                <ul className="space-y-2">
                  {goal.services.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className={`w-2 h-2 rounded-full bg-${goal.color}-500 mr-2`}></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link
                href={`/get-started`}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;