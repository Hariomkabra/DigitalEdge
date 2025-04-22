import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface ServiceLayoutProps {
  children: React.ReactNode;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default ServiceLayout;