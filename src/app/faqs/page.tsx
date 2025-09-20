import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Find answers to common questions about gold investing, our products, services, and processes.
          </p>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a href="#buying-gold" className="bg-amber-50 rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.75c.414 0 .75.336.75.75v.75m0 0H18a2.25 2.25 0 002.25-2.25V6.75m0 0H5.625c-.621 0-1.125.504-1.125 1.125v3.75m18-3.75c0 .621-.504 1.125-1.125 1.125h-1.5m-16.5-1.5c0 .621.504 1.125 1.125 1.125h1.5m0-1.125c0-.621-.504-1.125-1.125-1.125H5.625m1.5 0h9.75c.621 0 1.125.504 1.125 1.125v3.75m-10.5-3.75c0 .621.504 1.125 1.125 1.125h1.5m-1.5 0c0 .621.504 1.125 1.125 1.125h1.5m-1.5 0h1.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5m1.5-3.75h1.5c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125h-1.5m-1.5-6h3m-3 0h-3m3 0v3m0-3v-3" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Buying Gold</h2>
              <p className="text-gray-600 mb-3">Questions about purchasing process, minimum orders, and payment methods.</p>
              <div className="text-amber-600 font-medium flex items-center">
                View answers
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="#gold-quality" className="bg-amber-50 rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Gold Quality</h2>
              <p className="text-gray-600 mb-3">Information about purity standards, certifications, and verification methods.</p>
              <div className="text-amber-600 font-medium flex items-center">
                View answers
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            
            <a href="#shipping-delivery" className="bg-amber-50 rounded-xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-md">
              <div className="bg-amber-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Shipping & Delivery</h2>
              <p className="text-gray-600 mb-3">Details about shipping options, insurance, tracking, and international delivery.</p>
              <div className="text-amber-600 font-medium flex items-center">
                View answers
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
          
          {/* FAQ Sections */}
          <div className="space-y-16">
            {/* Buying Gold Section */}
            <div id="buying-gold" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Buying Gold</h2>
              <div className="space-y-6">
                <details className="group bg-white p-6 rounded-lg shadow-sm">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg">What is the minimum amount of gold I can purchase?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-4">
                    Our minimum order size is 10 grams of gold (approximately 0.32 troy ounces). For larger investors, we offer preferential rates on purchases over 100 grams, and even better terms for bulk orders exceeding 1 kilogram.
                  </p>
                </details>
                
                <details className="group bg-white p-6 rounded-lg shadow-sm">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg">What payment methods do you accept?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-4">
                    <p className="mb-3">
                      We accept the following payment methods:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Bank wire transfers (preferred for large orders)</li>
                      <li>Secure credit/debit card payments</li>
                      <li>Cryptocurrency (Bitcoin, Ethereum)</li>
                      <li>PayPal (for orders under $10,000)</li>
                    </ul>
                    <p className="mt-3">
                      For security and compliance reasons, we cannot accept cash payments for orders above $10,000.
                    </p>
                  </div>
                </details>
                
                <details className="group bg-white p-6 rounded-lg shadow-sm">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg">How is the price of gold determined?</span>
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-4">
                    <p className="mb-3">
                      Our gold prices are based on the international gold spot price, which is determined by global market factors. We update our prices in real-time during market hours. Our pricing includes:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Current spot price of gold</li>
                      <li>A small premium based on the product type and form</li>
                      <li>Any applicable manufacturing or processing costs</li>
                      <li>Secure handling and insurance</li>
                    </ul>
                    <p className="mt-3">
                      For large orders, we can often offer more favorable pricing. Please contact our trading desk for real-time quotes on larger quantities.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Still Have Questions */}
          <div className="max-w-3xl mx-auto bg-amber-50 rounded-xl p-8 text-center mb-16">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-lg mb-6">
              Our gold experts are ready to help with any questions about investing in gold, 
              our products, or your specific requirements.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                Contact Us
              </Link>
              <Link href="/education" className="border border-amber-600 hover:bg-amber-100 text-amber-600 font-bold py-3 px-8 rounded-lg transition duration-300">
                Gold Education
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQsPage;