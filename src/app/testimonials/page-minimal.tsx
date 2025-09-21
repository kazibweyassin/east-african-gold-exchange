import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients say about their experience with East African Gold Exchange.
            </p>
          </div>

          {/* Simple testimonial without any complex components */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="h-16 w-16 rounded-full bg-amber-200 flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-800">DC</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-gray-800">David Chen</h3>
                  <p className="text-sm text-amber-700">Investment Portfolio Manager</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                <span className="text-amber-500 text-xl">★★★★★</span>
              </div>
              
              <p className="text-gray-700 italic mb-4">
                "As a portfolio manager handling significant assets, I needed a reliable gold supplier with impeccable credentials. East African Gold Exchange has been exceptional in every transaction."
              </p>
            </div>
          </div>

          {/* Contact section */}
          <div className="bg-amber-50 rounded-xl p-8 max-w-3xl mx-auto mt-12">
            <h2 className="text-2xl font-semibold text-center mb-2">Share Your Experience</h2>
            <p className="text-center text-gray-600 mb-6">
              We value your feedback! Contact us to share your testimonial.
            </p>
            
            <div className="text-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;