import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link } from './ui/Link';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const services = [
    { name: 'SEO & Content Marketing', href: '/services/seo' },
    { name: 'Web Design & Development', href: '/services/web-design' },
    { name: 'PPC & Paid Social', href: '/services/ppc' },
    { name: 'Social Media Management', href: '/services/social-media' },
    { name: 'Email Marketing', href: '/services/email' },
    { name: 'Analytics & Reporting', href: '/services/analytics' },
  ];

  const industries = [
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Technology', href: '/industries/tech' },
    { name: 'Real Estate', href: '/industries/real-estate' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      <nav className={`w-full transition-all duration-300 ${
        scrolled ? 'bg-white text-black' : 'bg-white text-black'
      } py-4`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNtQyqmv9AVXhrCM5UR1I6mra7QvP_6NsLg&s" 
                alt="Creative Click Media" 
                className="h-8"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                href="/" 
                className={`font-medium ${scrolled ? 'text-black' : 'text-black'}`}
              >
                Home
              </Link>
              
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className={`flex items-center font-medium ${
                      scrolled ? 'text-black' : 'text-black'
                    }`}>
                      Services
                      <ChevronDown size={16} className={`ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition duration-200 ease-out"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition duration-150 ease-in"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-xs transform px-2">
                        <div className="overflow-hidden rounded-lg shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-1 p-2">
                            {services.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center rounded-lg p-2 hover:bg-gray-200"
                              >
                                <span className="text-sm font-medium text-black">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className={`flex items-center font-medium ${
                      scrolled ? 'text-black' : 'text-black'
                    }`}>
                      Industries
                      <ChevronDown size={16} className={`ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition duration-200 ease-out"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition duration-150 ease-in"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-xs transform px-2">
                        <div className="overflow-hidden rounded-lg shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-1 p-2">
                            {industries.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center rounded-lg p-2 hover:bg-gray-200"
                              >
                                <span className="text-sm font-medium text-black">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              
              <Link 
                href="/about" 
                className={`font-medium ${scrolled ? 'text-black' : 'text-black'}`}
              >
                About
              </Link>
              
              <Link 
                href="/insights" 
                className={`font-medium ${scrolled ? 'text-black' : 'text-black'}`}
              >
                Insights
              </Link>

              <div className="flex items-center space-x-4">
                <Link 
                  href="tel:877-361-8016" 
                  className={`font-medium ${scrolled ? 'text-black' : 'text-black'}`}
                >
                  <Phone size={18} className="inline mr-2" />
                  877-361-8016
                </Link>
                
                <Link 
                  href="/get-started" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;