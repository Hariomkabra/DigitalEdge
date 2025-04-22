import React, { useState, useEffect } from 'react';
import ServiceLayout from '../../components/ServiceLayout';
import { Link } from '../../components/ui/Link';
import {
  Mail, Users, Layout, Rocket, Target, CheckCircle,
  TrendingUp, Clock, MessageSquare, ArrowRight, Star, Zap, ChevronDown, ShieldCheck
} from 'lucide-react';

const EmailMarketingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Email Marketing Services | Creative Click Media";
  }, []);

  const features = [
    {
      title: "Custom Email Campaigns",
      icon: <Mail className="w-8 h-8 text-indigo-600" />,
      description:
        "We design bespoke email campaigns that align with your brand and resonate with your target audience, ensuring higher engagement and conversions.",
    },
    {
      title: "Audience Segmentation",
      icon: <Users className="w-8 h-8 text-teal-500" />,
      description:
        "We segment your email lists to send targeted messages, improving relevance and maximizing the impact of each campaign.",
    },
    {
      title: "Conversion-Focused Design",
      icon: <Layout className="w-8 h-8 text-blue-600" />,
      description:
        "Our email designs are strategically crafted to guide recipients towards specific actions, driving traffic, leads, and sales effectively.",
    },
    {
      title: "Automation & Scheduling",
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      description:
        "Automate your email workflows for timely and consistent communication, nurturing leads and engaging customers at the right moment.",
    },
    {
      title: "Performance Tracking & Analytics",
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      description:
        "We provide detailed reports on your email campaign performance, offering insights to optimize future strategies and improve ROI.",
    },
    {
      title: "A/B Testing",
      icon: <Zap className="w-8 h-8 text-orange-500" />,
      description:
        "We conduct A/B tests on various email elements to identify what resonates best with your audience, continuously refining your campaigns for better results.",
    },
    {
      title: "Personalization",
      icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
      description:
        "Personalize your email content to create more meaningful connections with your subscribers, increasing engagement and loyalty.",
    },
    {
      title: "List Growth Strategies",
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      description:
        "We implement effective strategies to grow your email list organically, expanding your reach and potential customer base.",
    },
    {
      title: "Compliance & Deliverability",
      icon: <ShieldCheck className="w-8 h-8 text-blue-800" />,
      description:
        "We ensure your email marketing adheres to best practices and regulations, maximizing deliverability and protecting your sender reputation.",
    },
  ];

  const faqs = [
  {
    question: "How much does email marketing cost?",
    answer: "The cost of email marketing varies depending on your list size, frequency of emails, and platform used. We offer flexible pricing based on your needs."
  },
  {
    question: "How do you measure the success of email campaigns?",
    answer: "We track metrics like open rates, click-through rates, conversions, and engagement to measure performance and improve results."
  },
  {
    question: "What types of email campaigns do you manage?",
    answer: "We handle newsletters, promotional emails, product announcements, drip campaigns, and more to help you engage your audience effectively."
  },
  {
    question: "Why is email marketing important for my business?",
    answer: "Email marketing drives customer engagement, builds brand loyalty, and delivers a high ROI by reaching users directly in their inboxes."
  },
  {
    question: "What kind of marketing emails will you create for my business?",
    answer: "We create customized, engaging emails that align with your brand and goals—whether it's nurturing leads, announcing new products, or re-engaging past customers."
  },
  {
    question: "Which email marketing platform do you use?",
    answer: "We primarily use platforms like MailChimp, Klaviyo, and Sendinblue, depending on your business goals and integration needs."
  },
  {
    question: "Is MailChimp free?",
    answer: "MailChimp offers a free tier with basic features for small lists. For more advanced functionality, paid plans are available."
  },
  {
    question: "Can't I just buy subscribers?",
    answer: "Buying subscribers is not recommended. It can harm your sender reputation, reduce engagement, and violate anti-spam laws. Organic growth yields better long-term results."
  },
  {
    question: "How involved will I be in the email marketing process?",
    answer: "You're involved as much as you'd like! We handle strategy and execution, but we collaborate with you for approvals, feedback, and branding."
  }
];


  return (
      <ServiceLayout>
  {/* Email Marketing Promo Section */}
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Text Content */}
      <div>
        <p className="text-blue-600 text-sm font-semibold mb-2">
          Email Marketing Services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#0a1a3a] mb-4">
          Emails that <span className="text-blue-600">Drive Revenue</span>
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          In the world of digital marketing, email remains one of the most powerful tools for 
          connecting with your audience. Creative Click Media’s Email Marketing services are designed 
          to help you engage, nurture, and convert your subscribers into loyal customers. Ready to 
          maximize your email marketing ROI?
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md text-lg inline-block transition-all"
        >
          Request A Proposal
        </Link>

        <div className="mt-6 flex items-center">
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjlkZDJlczlrZWVkaW05dDAyZmI0eHloMXV0cTAwMWdwZXM0NXRreiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5NPhdqmyRxn8I/giphy.webp" alt="Google" className="w-6 h-6" />
          <span className="ml-2 text-gray-800 font-medium">Google rating</span>
          <span className="ml-2 text-yellow-500 font-bold">65+</span>
          <div className="flex ml-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09L5.64 12.18.761 7.91l6.088-.883L10 1.5l3.151 5.527 6.088.883-4.879 4.27 1.518 5.91z"/></svg>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Image + Metrics */}
      <div className="relative">
        <div className="relative z-10">
          <img
            src="https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg"
            alt="Email Marketing"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

       
        {/* Email Stats Card */}
        <div className="absolute top-4 right-[-60px] bg-white rounded-xl shadow-lg p-4 space-y-4 w-56 text-sm z-20">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-800">
                      📤 Sent
                    </span>
                    <span className="font-bold">2,423</span>
                    <span className="text-green-500 text-xs">+1.84%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-800">
                      ⏳ Pending
                    </span>
                    <span className="font-bold">132</span>
                    <span className="text-green-500 text-xs">+1.34%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-800">
                      🌞 Open rate
                    </span>
                    <span className="font-bold">21.52%</span>
                    <span className="text-green-500 text-xs">+3.42%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-gray-800">
                      👥 Total subscribers
                    </span>
                    <span className="font-bold">10,621</span>
                    <span className="text-green-500 text-xs">+1.72%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>



      {/* Build Stronger Connections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm text-indigo-600 font-semibold uppercase">Strategic Email Marketing</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Build Stronger Connections with Email Marketing Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our email marketing services focus on creating targeted and automated campaigns that nurture
              leads, engage customers, and drive measurable results for your business.
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

      {/* Turning Subscribers into Customers */}

      <section className="bg-[#01143b] text-white py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <div>
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                  Turn Subscribers <br /> Into Sales
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  Email marketing is undoubtedly a powerful digital marketing tool, but it’s only beneficial if it's done well.
                  We believe that email marketing should be a two-way conversation, not a one-sided megaphone.
                  We take the time to get to know you and your business so that we can create content that is relevant,
                  engaging and designed to drive results. Our work doesn’t end when we press send, it only begins.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Box 1 */}
                  <div className="bg-white text-[#01143b] p-5 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold mb-2">High-Quality Campaigns</h3>
                    <p className="text-sm">
                      When it comes to email marketing, quality is more important than quantity. We’ll ensure your emails are well-written, visually appealing, and properly targeted to deliver results.
                    </p>
                  </div>
                  {/* Box 2 */}
                  <div className="bg-white text-[#01143b] p-5 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold mb-2">Comprehensive Reporting</h3>
                    <p className="text-sm">
                      We’ll provide you with monthly reports detailing your email marketing progress, including click-through rates, subscriptions, conversations, and other key success metrics.
                    </p>
                  </div>
                  {/* Box 3 */}
                  <div className="bg-white text-[#01143b] p-5 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold mb-2">Consistent Optimization</h3>
                    <p className="text-sm">
                      We understand that truly successful email marketing is an ongoing process. We’ll make sure your campaigns are constantly improving so you can achieve the best possible results.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center relative">
                <img
                  src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_80,w_820/v1587483114/content-items/004/280/247/coronavirusextra-original.gif?1587483114" // Replace with your actual image path
                  alt="Email Marketing Promotion"
                  className="rounded-lg shadow-2xl max-w-full"
                />
              </div>
            </div>
          </div>
        </section>


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
  <div className="container mx-auto px-4">
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header Row */}
      <div className="grid grid-cols-3 text-white font-bold text-center text-lg">
        <div className="bg-blue-600 py-4"> 
          <img src="/path/to/your/ccm-logo.png" alt="CCM Logo" className="mx-auto h-6" />
        </div>
        <div className="bg-white text-blue-900 py-4 border-y border-gray-200">VS</div>
        <div className="bg-red-600 py-4">Other Agencies</div>
      </div>

      {/* Table Rows */}
      {[
        {
          ccm: "Personalized, segmented email campaigns for higher engagement.",
          title: "Personalized Campaigns",
          other: "Sends generic emails, ignoring user preferences."
        },
        {
          ccm: "Data-driven targeting to reach the right audience.",
          title: "Data-Driven Targeting",
          other: "Broad targeting, leading to low engagement and conversions."
        },
        {
          ccm: "Detailed reports on email performance and ROI.",
          title: "Detailed Reporting",
          other: "Reports offer surface-level metrics, lacking depth."
        },
        {
          ccm: "Automated email workflows for timely communication.",
          title: "Automated Workflows",
          other: "Manual processes, leading to delays and inefficiency."
        },
        {
          ccm: "Campaigns focused on measurable ROI for real results.",
          title: "ROI Focused",
          other: "Little focus on return, difficult to gauge campaign success."
        }
      ].map((item, idx) => (
        <div key={idx} className="grid grid-cols-3 text-sm sm:text-base border-t border-gray-200">
          <div className="bg-blue-50 px-4 py-5 text-gray-800">{item.ccm}</div>
          <div className="bg-white px-4 py-5 font-semibold text-center text-blue-900">{item.title}</div>
          <div className="bg-red-50 px-4 py-5 text-gray-800">{item.other}</div>
        </div>
      ))}
    </div>
  </div>
</section>



              {/* FAQs */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
                      Email Marketing FAQs
                    </h2>
                    <p className="text-lg text-gray-600 mb-10 text-left">
                      All of your burning email marketing questions, all in one place:
                    </p>
                    <div className="space-y-2">
                      {faqs.map((faq, index) => {
                        const [isOpen, setIsOpen] = useState(false);
                        return (
                          <div
                            key={index}
                            className={`bg-white border border-gray-200 rounded-md cursor-pointer`}
                          >
                            <button
                              className="flex items-center justify-between w-full p-4"
                              onClick={() => setIsOpen(!isOpen)}
                              aria-expanded={isOpen}
                              aria-controls={`faq-content-${index}`}
                            >
                              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                              <ChevronDown
                                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>
                            {isOpen && (
                              <div
                                id={`faq-content-${index}`}
                                className="p-4 border-t border-gray-200"
                              >
                                <p className="text-gray-700">{faq.answer}</p>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>

              {/* Digital Marketing Insights */}
              <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-12 text-center">
              Digital Marketing Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "11 Actionable LinkedIn Marketing Ideas To Boost Your Small Business",
                  image: "https://creativeclickmedia.com/wp-content/uploads/2021/12/Linkedin-Marketing-Ideas-png.webp", // Replace with actual path or URL
                  author: "Tom Cerullo",
                  date: "December 13, 2021"
                },
                {
                  title: "Optimize Your Facebook Business Strategy According to 5 Easy Factors",
                  image: "https://creativeclickmedia.com/wp-content/uploads/2021/11/Facebook-Business-Strategy-png.webp", // Replace with actual path or URL
                  author: "Tom Cerullo",
                  date: "November 1, 2021"
                },
                {
                  title: "SEO VS PPC – The Ultimate Marketing Strategy Smackdown",
                  image: "https://img.freepik.com/free-vector/marketing-concept-illustration_114360-7324.jpg?semt=ais_hybrid&w=740", // Replace with actual path or URL
                  author: "Tom Cerullo",
                  date: "September 7, 2021"
                }
              ].map((post, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-blue-700 hover:underline mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {post.author} <span className="mx-2">•</span> {post.date}
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

export default EmailMarketingPage;