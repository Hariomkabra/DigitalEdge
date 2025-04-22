import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ValueProps from '../components/ValueProps';
import About from '../components/About';
import Goals from '../components/Goals';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'DigitalEdge | Digital Marketing Agency';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <About />
        <Goals />
        <Services />
        <Testimonials />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;