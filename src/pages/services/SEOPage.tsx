import React, { useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Link } from '../../components/ui/Link';
import {
  Search, TrendingUp, BarChart, Target, Key, Puzzle,
  Link as LucideLink, Gauge, Globe, ShieldCheck,
  Code, Terminal, Lightbulb, ArrowRight, Star, CheckCircle
} from 'lucide-react';

const SeoPage: React.FC = () => {
  useEffect(() => {
    document.title = "SEO Services | Creative Click Media";
  }, []);

  const features = [
    {
      title: "Keyword Research",
      icon: <Key className="w-8 h-8 text-indigo-600" />,
      description:
        "We identify the most relevant and high-potential keywords for your business to attract the right audience.",
    },
    {
      title: "On-Page Optimization",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      description:
        "We optimize your website's content, meta tags, and structure to improve search engine rankings.",
    },
    {
      title: "Off-Page Optimization",
      icon: <LucideLink className="w-8 h-8 text-green-500" />,
      description:
        "We build high-quality backlinks and enhance your online presence to boost your website's authority.",
    },
    {
      title: "Technical SEO",
      icon: <Terminal className="w-8 h-8 text-gray-700" />,
      description:
        "We ensure your website is technically sound, with proper indexing, crawlability, and site speed for optimal performance.",
    },
    {
      title: "Content Optimization",
      icon: <Lightbulb className="w-8 h-8 text-orange-500" />,
      description:
        "We help you create and optimize valuable content that attracts and engages your target audience.",
    },
    {
      title: "Local SEO",
      icon: <Globe className="w-8 h-8 text-teal-500" />,
      description:
        "We optimize your online presence to attract local customers and improve your visibility in local search results.",
    },
    {
      title: "Performance Tracking",
      icon: <BarChart className="w-8 h-8 text-purple-500" />,
      description:
        "We monitor your website's SEO performance and provide detailed reports to track progress and identify areas for improvement.",
    },
    {
      title: "Competitive Analysis",
      icon: <Puzzle className="w-8 h-8 text-yellow-500" />,
      description:
        "We analyze your competitors' strategies to identify opportunities and gain a competitive edge in search rankings.",
    },
    {
      title: "SEO Audits",
      icon: <Search className="w-8 h-8 text-red-500" />,
      description:
        "We conduct comprehensive SEO audits to identify issues and opportunities for improving your website's search engine performance.",
    },
  ];

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO results vary depending on factors like website age, competition, and the effort invested. Generally, it takes 3-6 months to see noticeable improvements.",
    },
    {
      question: "What is the difference between SEO and PPC?",
      answer: "SEO (Search Engine Optimization) focuses on organic (non-paid) search results, while PPC (Pay-Per-Click) involves paid advertising on search engines.",
    },
    {
      question: "Why is SEO important for my business?",
      answer: "SEO helps increase your website's visibility in search engines, driving more organic traffic, leads, and ultimately, sales.",
    },
    {
      question: "What is involved in an SEO audit?",
      answer: "An SEO audit involves a comprehensive analysis of your website's technical aspects, on-page elements, off-page factors, and content to identify areas for improvement.",
    },
  ];

  return (
            <ServiceLayout>
              {/* Custom SEO Services Section */}
              <section className="relative bg-white py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div>
              <h3 className="text-blue-700 text-lg font-semibold uppercase">
                Search Engine Optimization (SEO)
              </h3>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Rank Higher, <br /> Grow Faster
              </h1>
              <p className="text-gray-600 text-lg mb-6">
                With a strategic approach and cutting-edge techniques, we'll optimize your search engine strategy to help your business rank well, drive traffic, and achieve lasting results.
              </p>
              <a
                href="/contact"
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-md text-lg inline-block transition-all"
              >
                Request A Proposal
              </a>

              {/* Rating Section */}
              <div className="mt-6 flex items-center space-x-3">
                <img
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjlkZDJlczlrZWVkaW05dDAyZmI0eHloMXV0cTAwMWdwZXM0NXRreiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5NPhdqmyRxn8I/giphy.webp"
                  alt="Google"
                  className="w-6 h-6"
                />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-700 text-sm">65+ Google Rating</span>
              </div>
            </div>

            {/* Image and Stats */}
            <div className="relative">
              <div className="absolute top-1/2 right-1 bg-white shadow-lg rounded-xl p-4 w-40 text-sm text-gray-700 space-y-4 z-10">
                <div className="flex justify-between">
                  <span>Average rank</span>
                  <span className="font-bold text-blue-600">1.2</span>
                </div>
                <div className="flex justify-between">
                  <span>Sessions</span>
                  <span className="font-bold text-blue-600">7,332</span>
                </div>
                <div className="flex justify-between">
                  <span>Page views</span>
                  <span className="font-bold text-blue-600">17,023</span>
                </div>
                <div className="flex justify-between">
                  <span>Goal completions</span>
                  <span className="font-bold text-blue-600">841</span>
                </div>
              </div>

              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
                alt="SEO Strategy"
                className="rounded-lg shadow-xl z-0"
              />
            </div>
          </div>
        </section>

              {/* SEO Services Section */}
              <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side: Illustration */}
            <div className="flex justify-center">
              <img
                src="https://neilsonmarketing.com/wp-content/uploads/2023/07/insurance-data-overview-banner.svg"
                alt="SEO Services Illustration"
                className="max-w-md w-full"
              />
            </div>

            {/* Right Side: Text Content */}
            <div>
              <p className="text-blue-700 font-semibold text-sm uppercase mb-2">SEO Services</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Outrank The Competition
              </h2>
              <p className="text-gray-700 text-base mb-4">
                Plenty of SEO agencies can tell you what you need to do to rank higher in search results. But at Creative Click Media, we don’t just tell you what to do – we also explain why it’s important and show you how it impacts your business goals.
              </p>
              <p className="text-gray-700 text-base mb-4">
                Our agency was founded on the belief that SEO isn’t a one-time fix, but an ongoing process that should be integrated into your overall marketing strategy. We’ll work with you to create customized SEO solutions that not only improve your ranking, but also help you achieve your long-term business goals.
              </p>
              <p className="text-gray-700 text-base mb-6">
                We understand that ranking higher in search results is important to the success of your business, but we also know that there’s more to SEO than just keywords and backlinks. That’s why our team takes a comprehensive approach to SEO, looking at all aspects of your online presence to ensure that you’re not only ranking higher but also driving quality traffic to your website.
              </p>

              {/* Footer text links */}
              <div className="flex flex-wrap text-sm text-gray-600 divide-x divide-gray-300 mt-6">
                <span className="pr-4">A Partnership Approach</span>
                <span className="px-4">Ongoing SEO Support</span>
                <span className="pl-4">Regular Reporting &amp; Analysis</span>
              </div>
            </div>
          </div>
        </section>

      {/* Why Choose Our SEO Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-indigo-600 font-semibold uppercase">Strategic SEO Solutions</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Search Engine Optimization Services?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our SEO services are built on a foundation of in-depth research, proven strategies,
              and a commitment to delivering measurable results. We work as an extension of your
              team to achieve sustainable growth in organic search.
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

     

      {/* Ready to Improve Your Search Rankings? */}
      <section className="py-20 bg-[#374151] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Ready to Improve Your Search Rankings?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our SEO experts help you climb the search engine results pages and drive
                more organic traffic to your website. Contact us today for a free consultation.
              </p>
              <Link
                href="/contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-md text-lg inline-block transition-all"
              >
                Get a Free SEO Consultation
              </Link>
            </div>
            <div className="relative">
              <Search className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 text-indigo-500 opacity-20" />
              <img
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNlb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="SEO Consultation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Click Media Delivers SEO Success */}
 {/* Creative Click Media Delivers Email Marketing Success */}
   
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

      <section className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h4 className="text-sm text-blue-600 font-semibold mb-2">
      How Our NJ SEO Company Is Different
    </h4>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
      Strategically Unconventional By Design
    </h2>

    <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-5xl mx-auto">
      {/* Header */}
      <div className="grid grid-cols-3 text-white font-bold text-center text-lg">
        <div className="bg-blue-600 py-4">
          <img src="/path/to/your/ccm-logo.png" alt="CCM Logo" className="mx-auto h-6" />
        </div>
        <div className="bg-white text-blue-900 py-4 border-y border-gray-200">VS</div>
        <div className="bg-red-600 py-4">Other Agencies</div>
      </div>

      {/* Content Rows */}
      {[
        {
          ccm: "In-house SEO experts providing tailored strategies.",
          title: "Dedicated Team",
          other: "Outsourced teams don’t fully understand your industry."
        },
        {
          ccm: "Custom SEO aligned with your business goals for better results.",
          title: "Strategic Content",
          other: "Uses cookie-cutter strategies, not tailored to your needs."
        },
        {
          ccm: "Comprehensive reports that track every SEO performance metric.",
          title: "Custom SEO Strategies",
          other: "Reports lack depth, missing crucial SEO insights."
        },
        {
          ccm: "Full-service SEO covering technical, on-page, and content.",
          title: "Analysis Report",
          other: "Only focuses on some elements of SEO, missing the full picture."
        },
        {
          ccm: "Quick to adapt to Google’s algorithm changes.",
          title: "Adaptability & Speed",
          other: "Lacks responsiveness to updates, hurting search rankings."
        }
      ].map((item, index) => (
        <div key={index} className="grid grid-cols-3 border-t border-gray-200 text-sm sm:text-base">
          <div className="bg-blue-50 px-4 py-5 text-gray-800">{item.ccm}</div>
          <div className="bg-white px-4 py-5 font-semibold text-blue-900 text-center">{item.title}</div>
          <div className="bg-red-50 px-4 py-5 text-gray-800">{item.other}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* SEO FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              SEO Services FAQs
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


              {/* Digital Marketing Insights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            SEO Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "Is It Still Worth Investing in SEO Marketing Services in 2025?",
                image: "https://sociolabs.in/wp-content/uploads/2023/02/SEO-bro-1-1.png.webp", // Replace with actual image path
                author: "Olivia Garrison",
                date: "January 23, 2025"
              },
              {
                title: "How to Choose an SEO Agency: Finding the Ideal Partner for Your Business",
                image: "https://media.licdn.com/dms/image/v2/D4D12AQH7VqSn0ZNXAw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1706621921975?e=2147483647&v=beta&t=ny-4qapsX9X5hfKqBMkh5XzdQxcv4fCwQi-u0ZRYrvo", // Replace with actual image path
                author: "Olivia Garrison",
                date: "April 12, 2024"
              },
              {
                title: "Checklist: How to Create High-Ranking Local Landing Pages",
                image: "https://hirepro.in/wp-content/uploads/2024/01/Personality-tests-in-hiring_-Advantages-and-some-popular-examples-2-1024x880.png", // Replace with actual image path
                author: "Olivia Garrison",
                date: "January 17, 2024"
              }
            ].map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-blue-900 hover:underline cursor-pointer mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {post.author} • {post.date}
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

export default SeoPage;