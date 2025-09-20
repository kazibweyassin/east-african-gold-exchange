import React from 'react';
import Image from 'next/image';

export default function CertificationsSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/unsplash/backgrounds/certification-bg.jpg" 
          alt="Gold certification background" 
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">Quality Certified</h3>
            <p className="text-gray-600 text-center">
              All our gold is tested and certified for purity by independent laboratories.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">ISO Standards</h3>
            <p className="text-gray-600 text-center">
              Our processes meet international standards for quality management and ethical sourcing.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <div className="h-16 w-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center text-gray-900">Ethical Sourcing</h3>
            <p className="text-gray-600 text-center">
              We follow responsible and ethical practices in sourcing all our gold products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}