import React from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 relative">
            <div className="absolute top-4 right-4 text-amber-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 2.979-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 2.979-3.996 5.849h3.999v10h-10z"/>
              </svg>
            </div>
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden relative border-2 border-amber-200 shadow-sm">
                <Image 
                  src="/images/unsplash/testimonials/testimonial-1.jpg" 
                  alt="John Mwangi"
                  fill
                  className="object-cover"
                  sizes="64px"
                  quality={75}
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg text-gray-800">John Mwangi</h4>
                <p className="text-sm text-amber-700">Jewelry Manufacturer, Kenya</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Working directly with East African Gold Direct has eliminated so many hassles in my supply chain. The quality is consistent, pricing is transparent, and I know exactly where my gold is coming from."
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 relative">
            <div className="absolute top-4 right-4 text-amber-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 2.979-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 2.979-3.996 5.849h3.999v10h-10z"/>
              </svg>
            </div>
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden relative border-2 border-amber-200 shadow-sm">
                <Image 
                  src="/images/unsplash/testimonials/testimonial-2.jpg" 
                  alt="Amina Kimani"
                  fill
                  className="object-cover"
                  sizes="64px"
                  quality={75}
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg text-gray-800">Amina Kimani</h4>
                <p className="text-sm text-amber-700">Investment Firm, Tanzania</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic">
              "As an investment firm, we appreciate dealing directly with gold sellers instead of brokers. East African Gold Direct provides excellent documentation and their gold quality exceeds industry standards."
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-amber-500 relative">
            <div className="absolute top-4 right-4 text-amber-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 2.979-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 2.979-3.996 5.849h3.999v10h-10z"/>
              </svg>
            </div>
            <div className="flex items-center mb-6">
              <div className="h-16 w-16 rounded-full overflow-hidden relative border-2 border-amber-200 shadow-sm">
                <Image 
                  src="/images/unsplash/testimonials/testimonial-3.jpg" 
                  alt="Robert Omondi"
                  fill
                  className="object-cover"
                  sizes="64px"
                  quality={75}
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg text-gray-800">Robert Omondi</h4>
                <p className="text-sm text-amber-700">Private Collector, Uganda</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 italic">
              "I've purchased gold from many sellers over the years, but East African Gold Exchange offers the best value by far. Dealing directly with them means better prices and authentic, high-quality gold every time."
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="/testimonials" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            See More Testimonials
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}