import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Link } from '../../components/ui/Link';
import { 
  Monitor, Code, Palette, Users, Zap, CheckCircle, 
  Layout, Smartphone, ShieldCheck, Rocket, Target,
  Laptop, PenTool, LineChart, ArrowRight, Star
} from 'lucide-react';

const WebDesignPage: React.FC = () => {
  useEffect(() => {
    document.title = "Web Design Services | Creative Click Media";
  }, []);

  const features = [
    {
      title: "Custom Branded Designs",
      icon: <PenTool className="w-8 h-8 text-pink-600" />,
      description:
        "We create custom websites tailored to reflect your brand’s unique style and message. This ensures a memorable experience for visitors that strengthens your brand identity.",
    },
    {
      title: "Conversion-Driven Layout",
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      description:
        "We design layouts that guide users toward key actions to increase the likelihood of conversions. Each element is strategically placed with your conversion goals in mind.",
    },
    {
      title: "User-Friendly Navigation",
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      description:
        "We design intuitive navigation that guides users effortlessly through your site. Easy website navigation improves user satisfaction and encourages longer visits.",
    },
    {
      title: "Fast Loading Speed",
      icon: <Rocket className="w-8 h-8 text-green-500" />,
      description:
        "We optimize your website for quick loading times, reduced bounce rates, and improved user experience. Faster sites keep your visitors exploring each page longer.",
    },
    {
      title: "SEO Foundations",
      icon: <Target className="w-8 h-8 text-purple-600" />,
      description:
        "Our sites are built with SEO best practices from the ground up, making it easier to rank in search engines. This foundation helps boost visibility in search results.",
    },
    {
      title: "Clear Calls To Action",
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      description:
        "We include strategically placed calls to action to encourage users to take the desired next steps. Effective CTAs drive conversions and turn visits into leads or sales.",
    },
    {
      title: "Consistent Branding",
      icon: <Palette className="w-8 h-8 text-yellow-400" />,
      description:
        "Our custom website designs incorporate your brand’s colors, fonts, and style elements for a cohesive look. Consistency enhances brand recognition and instills a sense of trust.",
    },
    {
      title: "Responsive Across Devices",
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      description:
        "Our sites adapt to any device to create a seamless experience on desktop, tablet, and mobile. This flexibility enhances usability and keeps visitors engaged.",
    },
    {
      title: "Ongoing Support",
      icon: <ShieldCheck className="w-8 h-8 text-blue-800" />,
      description:
        "We provide continuous support to keep your website updated and secure over time. This ensures long-term reliability and performance as your business grows.",
    },
  ];

  const faqs = [
    {
      question: "How much does a website design cost?",
      answer: "Our website design services are customized to your specific needs. Pricing varies based on project scope, features, and complexity."
    },
    {
      question: "Why is professional web design important?",
      answer: "Professional web design creates credibility, improves user experience, and drives conversions. It's your digital storefront and often the first impression for potential customers."
    },
    {
      question: "Is my website mobile-friendly?",
      answer: "All our websites are built with responsive design, ensuring optimal viewing and interaction experience across all devices - desktop, tablet, and mobile."
    },
    {
      question: "What types of websites do you design?",
      answer: "We design all types of websites including corporate sites, e-commerce platforms, landing pages, blogs, and custom web applications."
    }
  ];

  return (
    <ServiceLayout>
      {/* Custom Website Design Section */}
      <section className="relative bg-navy-900 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Custom Website Design
              </h1>
              <h2 className="text-2xl text-blue-400 mb-6">
                Create a Stunning Online Presence
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Your website is often the first impression potential customers have of your business. 
                Make it count with our custom web design services that focus on converting visitors 
                into loyal customers.
              </p>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md text-lg inline-block transition-all"
              >
                Request A Proposal
              </Link>
              <div className="mt-8 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-white">65+ Google Reviews</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                alt="Web Design Process"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

     {/* Web Design Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Illustration */}
      <div className="flex justify-center">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/web-designing-3488223-2912019.png"
          alt="Web Design Illustration"
          className="max-w-md w-full"
        />
      </div>

      {/* Right: Text Content */}
      <div>
        <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide mb-2">
          Leaders in NJ Web Design
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Designed to Captivate & Convert
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          In today’s digital world, your website is your most powerful marketing tool.
          It’s where potential customers come to learn about your business, products,
          and services. Our Custom Website Design services are focused on creating visually
          striking, highly functional websites that provide an exceptional user experience.
          At Creative Click Media, we blend creativity with strategy to design websites
          that not only look great but also deliver results.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap text-gray-600 text-sm divide-x divide-gray-300">
          <span className="pr-4">Custom Website Design</span>
          <span className="px-4">Responsive Design</span>
          <span className="pl-4">eCommerce Design</span>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* Build for the Future */}
      return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-blue-600 font-semibold uppercase">Creative Web Design Solutions</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Build for the Future with Website Design Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our custom website design services focus on creating scalable, cutting-edge websites that evolve with your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

      {/* High-Impact Web Designs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              High-Impact Web Designs
            </h2>
            <h3 className="text-xl text-blue-600 mb-6">
              Custom Websites That Convert
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              We don't use templates - every website is custom-designed to match your brand 
              and business goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <img 
                src="https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg"
                alt="WordPress Development"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WordPress</h3>
              <p className="text-gray-600">
                Custom, flexible solutions that support all business types and needs.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <img 
                src="https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
                alt="Shopify Development"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Shopify</h3>
              <p className="text-gray-600">
                Ideal for eCommerce with built-in tools for seamless selling.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* Turning Visitors into Customers */}
  <section className="py-20 bg-[#1e3a8a] text-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Turning Visitors into Customers
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Our Custom Website Design services are designed to do more than just create a beautiful online presence—they’re about converting visitors into loyal customers. By focusing on both design and functionality, we help you achieve your business objectives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="bg-blue-500 bg-opacity-20 rounded">
                {/* Placeholder for icon */}
              </div>
              <h3 className="font-bold mb-2 text-center">Enhance Brand Perception</h3>
              <p className="text-sm text-gray-300 text-center">
                Develop a visually appealing and professional website that reflects your brand’s identity and values. A well-designed website helps build credibility, establishes trust with visitors, and strengthens overall brand perception.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="bg-blue-500 bg-opacity-20 rounded">
                {/* Placeholder for icon */}
              </div>
              <h3 className="font-bold mb-2 text-center">Increase Engagement</h3>
              <p className="text-sm text-gray-300 text-center">
                Create an engaging website that captivates visitors and encourages them to explore your content. Use intuitive navigation, interactive elements, and compelling visuals to keep users engaged, reducing bounce rates and boosting retention.
              </p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <div className="bg-blue-500 bg-opacity-20 ">
                {/* Placeholder for icon */}
              </div>
              <h3 className="font-bold mb-2 text-center">Drive Conversions</h3>
              <p className="text-sm text-gray-300 text-center">
                Design your website with a strategic focus on converting visitors into customers. Optimize user journeys, utilize clear calls to action, and streamline the checkout process to increase leads, generate sales, and achieve business goals.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://miro.medium.com/v2/resize:fit:2160/1*H7XzqV0r4YdQK90w3Rf67w.gif" 
            alt="3D Website Design"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>

    {/* Creative Click Media Delivers web design page */} 
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left Side Image */}
      <div className="flex justify-center relative order-1 lg:order-none">
        <div className="relative w-80 h-auto bg-pink-100 p-6 rounded-lg">
          <img 
            src="https://assets.grok.com/users/e32dbf57-3462-425a-8b91-d5ca9a2006f4/generated/N4kDwXjLycvnhl4P/image.jpg"
            alt="3D Website Design"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full -z-10 rounded-lg bg-pink-200" />
        </div>
      </div>

      {/* Right Side Text */}
      <div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Creative Click Media Delivers
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl">
          Our digital marketing team has generated lasting success for businesses in a wide array of industries.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-3 text-sm">
            {[
              "Website Design",
              "SEO Services",
              "GEO Services",
              "PPC Management",
              "eCommerce Solutions",
              "Branding & Identity",
              "CRO Services",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm">
            {[
              "Social Media Marketing",
              "Email Marketing",
              "Content Strategy",
              "Video Production",
              "WordPress Development",
              "Ongoing Support",
              "Digital Marketing",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>


 {/* How We Are Different */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        How We Are Different
      </h2>
      <h3 className="text-xl text-blue-600 mb-6">
        Strategically Unconventional By Design
      </h3>
    </div>

    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 text-sm md:text-base rounded-lg shadow-md overflow-hidden">
        
        {/* Creative Click Media Column */}
        <div className="bg-blue-900 text-white p-6 space-y-6">
          <h3 className="text-2xl font-bold mb-4">CCM</h3>
          <p>Custom designs that reflect your brand’s vision and values.</p>
          <p>Conversion-focused layouts that drive results.</p>
          <p>End-to-end development services for a seamless experience.</p>
          <p>Design optimized for speed, SEO, and performance.</p>
          <p>Flexible designs that adapt to growing business needs.</p>
        </div>

        {/* Middle Comparison Column */}
        <div className="bg-white text-center p-6 space-y-6 font-semibold text-gray-800 border-y border-gray-200">
          <div>Custom Design</div>
          <div>Conversion Focused</div>
          <div>End-to-End Service</div>
          <div>Performance & SEO</div>
          <div>Flexibility & Updates</div>
        </div>

        {/* Other Agencies Column */}
        <div className="bg-red-600 text-white p-6 space-y-6">
          <h3 className="text-2xl font-bold mb-4">Other Agencies</h3>
          <p>Relies on templates, not personalized to your brand.</p>
          <p>Designs lack focus on converting visitors into customers.</p>
          <p>Provides only partial services, leading to disconnected experiences.</p>
          <p>Sites are slow, with no attention to SEO or performance metrics.</p>
          <p>Designs don’t scale well, limiting future growth opportunities.</p>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Website Design FAQs
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Insights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Digital Marketing Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "11 Actionable LinkedIn Marketing Ideas",
                image: "https://images.pexels.com/photos/2977547/pexels-photo-2977547.jpeg",
                author: "John Smith",
                date: "May 15, 2025"
              },
              {
                title: "Optimize Your Facebook Business Strategy",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
                author: "Sarah Johnson",
                date: "May 8, 2025"
              },
              {
                title: "SEO VS PPC - The Ultimate Marketing Strategy",
                image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg",
                author: "Mike Wilson",
                date: "April 29, 2025"
              }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600">
                    By {post.author} | {post.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default WebDesignPage;