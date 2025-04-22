import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Why is digital marketing important for my business?",
      answer: "Digital marketing is crucial in today's digital age as it helps businesses reach their target audience effectively, increase brand awareness, generate leads, and drive sales. With more consumers searching for products and services online, having a strong digital presence is essential for business growth and staying competitive in the market."
    },
    {
      question: "How does your digital marketing agency measure the impact of your campaigns?",
      answer: "We use comprehensive analytics tools and KPIs to track campaign performance, including website traffic, conversion rates, engagement metrics, ROI, and more. Our team provides regular detailed reports showing the direct impact of our strategies on your business goals."
    },
    {
      question: "How long will I be locked into a contract?",
      answer: "We believe in earning your business every month. While we recommend a minimum 6-month commitment for optimal results, we offer flexible contract terms tailored to your needs. Our focus is on delivering value and building long-term partnerships based on results."
    },
    {
      question: "How much does digital marketing cost?",
      answer: "Digital marketing costs vary based on your goals, target market, and chosen services. We create custom packages tailored to your budget and objectives. Our transparent pricing ensures you know exactly what you're investing in and the expected returns."
    },
    {
      question: "How long does digital marketing take to see results?",
      answer: "Results timeline varies by strategy. PPC campaigns can show immediate results, while SEO typically takes 3-6 months for significant improvements. We set realistic expectations and provide regular updates on progress towards your goals."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Digital Marketing FAQs</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="bg-white rounded-lg shadow-sm">
                    <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left">
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          open ? 'transform rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-6 py-4 text-gray-600">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;