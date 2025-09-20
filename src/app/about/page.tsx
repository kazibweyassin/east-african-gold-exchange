import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
      {/* About Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-gray-900"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-amber-600 text-white rounded-full mb-4">Est. 2015</span>
          <h1 className="text-5xl font-bold mb-6 leading-tight">About East African Gold Direct</h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            East African Gold Direct is the premier direct seller of high-quality gold 
            sourced from East Africa&apos;s most reputable mining operations, offering authentic products 
            with transparent pricing and unmatched quality assurance.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-amber-600 text-white rounded-lg text-center">
              <span className="block text-2xl font-bold">10+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="px-4 py-2 bg-amber-600 text-white rounded-lg text-center">
              <span className="block text-2xl font-bold">1000+</span>
              <span className="text-sm">Happy Clients</span>
            </div>
            <div className="px-4 py-2 bg-amber-600 text-white rounded-lg text-center">
              <span className="block text-2xl font-bold">99.9%</span>
              <span className="text-sm">Gold Purity</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* Our History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="block text-amber-600 font-semibold mb-2">OUR JOURNEY</span>
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="border-l-4 border-amber-600 pl-6">
              <span className="inline-block py-1 px-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded mb-2">2015</span>
              <h3 className="text-xl font-bold mb-2">Company Founded</h3>
              <p className="text-gray-600">East African Gold Direct was established by a team of gold industry experts with over 30 years of combined experience in the East African mining sector.</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-6">
              <span className="inline-block py-1 px-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded mb-2">2018</span>
              <h3 className="text-xl font-bold mb-2">International Expansion</h3>
              <p className="text-gray-600">We expanded our operations to serve international markets, establishing trusted relationships with clients across Europe, Asia, and North America.</p>
            </div>
            
            <div className="border-l-4 border-amber-600 pl-6">
              <span className="inline-block py-1 px-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded mb-2">2023</span>
              <h3 className="text-xl font-bold mb-2">Industry Recognition</h3>
              <p className="text-gray-600">Awarded the prestigious Gold Industry Excellence Award for our commitment to quality, transparency, and ethical sourcing practices.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-amber-600">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To provide our customers with authentic, high-quality gold directly from the 
                source in East Africa, eliminating middlemen and ensuring fair pricing.
              </p>
              <p className="text-gray-600">
                We strive to create value for our customers while maintaining the highest 
                standards of integrity and quality in all our products. Our commitment extends to 
                sustainable and ethical sourcing practices that benefit local communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-amber-600">Our Vision</h2>
              <p className="text-gray-600 mb-4">
                To become the leading direct gold seller from East Africa, known for our 
                product quality, transparent pricing, and commitment to excellence.
              </p>
              <p className="text-gray-600">
                We envision a future where customers can confidently purchase authentic gold 
                directly from the source, with complete transparency and trust. We aim to set 
                new standards in the gold industry for quality, reliability, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="block text-amber-600 font-semibold mb-2">OUR PRINCIPLES</span>
            <h2 className="text-4xl font-bold mb-4">Core Values</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our values guide every aspect of our business, from sourcing to delivery. They&apos;re the foundation of our reputation and the reason our customers trust us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Integrity</h3>
              <p className="text-gray-600 text-center">
                We maintain the highest standards of honesty and ethical conduct in all our operations. Our business is built on trust, transparency, and doing what&apos;s right—even when no one is watching.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Quality Assurance</h3>
              <p className="text-gray-600 text-center">
                We never compromise on quality. Every gold product we sell undergoes rigorous testing and certification to guarantee authenticity, purity, and weight—giving our customers complete confidence in their purchase.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Ethical Sourcing</h3>
              <p className="text-gray-600 text-center">
                We are committed to responsible and sustainable gold sourcing practices. We work only with mines and suppliers who meet our strict standards for labor practices, environmental responsibility, and community impact.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Customer Focus</h3>
              <p className="text-gray-600 text-center">
                Our customers are at the heart of everything we do. We&apos;re committed to delivering exceptional service, personalized attention, and building lasting relationships based on trust and mutual respect.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Transparency</h3>
              <p className="text-gray-600 text-center">
                We believe in complete transparency in our pricing, sourcing, and business practices. Our customers always know exactly what they&apos;re paying for—with no hidden fees or surprises.
              </p>
            </div>
            
            <div className="bg-amber-50 rounded-xl p-8 shadow-sm transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Innovation</h3>
              <p className="text-gray-600 text-center">
                We continuously seek new ways to improve our products, services, and processes. We embrace innovation to better serve our customers and stay ahead in a dynamic industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="block text-amber-600 font-semibold mb-2">OUR EXPERTS</span>
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our leadership team brings decades of experience in gold mining, international trade, and quality assurance. 
              Together, they ensure that East African Gold Direct delivers on its promise of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Daniel Omondi</h3>
                <p className="text-amber-600 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-600 mb-4">
                  With 20+ years of experience in East African gold mining and trade, Daniel leads our company with unmatched expertise and vision.
                </p>
                <div className="flex space-x-3 text-gray-500">
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Sarah Kimani</h3>
                <p className="text-amber-600 font-medium mb-4">Chief Operations Officer</p>
                <p className="text-gray-600 mb-4">
                  Sarah oversees our day-to-day operations, ensuring our gold sourcing, quality assurance, and delivery processes exceed industry standards.
                </p>
                <div className="flex space-x-3 text-gray-500">
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Michael Njenga</h3>
                <p className="text-amber-600 font-medium mb-4">Head of Quality Assurance</p>
                <p className="text-gray-600 mb-4">
                  A certified gemologist with specialized training in precious metals, Michael leads our rigorous quality testing and certification processes.
                </p>
                <div className="flex space-x-3 text-gray-500">
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="hover:text-amber-600">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="block text-amber-600 font-semibold mb-2">TRUST & RELIABILITY</span>
            <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="bg-gray-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">ISO 9001</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">LBMA Member</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">RJC Certified</span>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg h-32 w-full flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">Fair Trade Gold</span>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  )
}