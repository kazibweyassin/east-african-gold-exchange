import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/unsplash/backgrounds/cta-bg.jpg" 
          alt="Gold background" 
          fill
          className="object-cover"
          sizes="100vw"
          quality={75}
        />
        <div className="absolute inset-0 bg-amber-900/70" />
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Ready to Purchase High-Quality Gold?</h2>
        <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
          We offer authentic, certified gold at competitive prices. As direct sellers, we eliminate the 
          middleman markup, ensuring you get the best value for your investment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-700 rounded-md font-semibold transition-colors"
          >
            View Gold Products
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white rounded-md font-semibold transition-colors border border-white"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </section>
  );
}