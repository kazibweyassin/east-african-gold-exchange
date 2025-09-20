import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Gold Products</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We offer a range of premium gold products sourced directly from East African mines.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-amber-500">
            <div className="relative h-64">
              <Image 
                src="/images/unsplash/products/gold-bar.jpg" 
                alt="Gold Bars" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Gold Bars</h3>
              <p className="text-gray-700 mb-4">
                Premium quality gold bars available in various weights, from 10g to 1kg.
              </p>
              <Link
                href="/products"
                className="text-amber-600 font-semibold hover:text-amber-700 flex items-center"
              >
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-amber-500">
            <div className="relative h-64">
              <Image 
                src="/images/unsplash/products/gold-nuggets.jpg" 
                alt="Gold Nuggets" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Gold Nuggets</h3>
              <p className="text-gray-700 mb-4">
                Natural gold nuggets with unique shapes and high purity levels.
              </p>
              <Link
                href="/products"
                className="text-amber-600 font-semibold hover:text-amber-800 flex items-center"
              >
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-amber-500">
            <div className="relative h-64">
              <Image 
                src="/images/unsplash/products/gold-coins.jpg" 
                alt="Gold Coins" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={80}
              />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3 text-amber-800">Gold Coins</h3>
              <p className="text-gray-700 mb-4">
                Collectible and investment gold coins with various designs and weights.
              </p>
              <Link
                href="/products"
                className="text-amber-600 font-semibold hover:text-amber-800 flex items-center"
              >
                View Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/products" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}