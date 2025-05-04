
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <AnimateOnScroll variant="fadeInDown">
          <div className="bg-gradient-to-r from-accounting-700 to-accounting-800 text-white py-16">
            <div className="container-section">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-xl text-accounting-100">
                  Have questions or ready to get started? Reach out to our team of financial experts.
                </p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
        
        <AnimateOnScroll variant="bounceInUp" delay={0.2}>
          <ContactSection />
        </AnimateOnScroll>
        
        
      </div>
      <Footer />
    </>
  );
};

export default Contact;
