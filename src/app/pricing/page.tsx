import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {/* Pricing Hero Section */}
      <section className="relative bg-gray-900 text-white py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image 
            src="/images/unsplash/backgrounds/pricing-bg.jpg" 
            alt="Gold background" 
            fill
            className="object-cover"
            sizes="100vw"
            quality={75}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 to-gray-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Transparent Gold Pricing</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We believe in complete transparency in our pricing. As direct sellers, we eliminate
            middlemen markup, offering you the best value for authentic East African gold.
          </p>
          <div className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg text-white font-semibold transition-colors">
            <Link href="#current-prices">View Today&apos;s Prices</Link>
          </div>
        </div>
      </section>

      {/* How Our Pricing Works */}
      <section className="py-20 bg-white" id="how-pricing-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="block text-amber-600 font-semibold mb-2">PRICING MODEL</span>
            <h2 className="text-4xl font-bold mb-4">How Our Pricing Works</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              Our prices are based on the international gold spot price plus a small, transparent premium that covers
              sourcing, testing, certification, and delivery. No hidden fees, ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Base Gold Price</h3>
              <p className="text-gray-600 mb-4">
                We start with the international gold spot price as our baseline, updated daily to ensure current market rates.
              </p>
              <p className="text-sm text-gray-500">
                Source: London Bullion Market Association (LBMA)
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Premium</h3>
              <p className="text-gray-600 mb-4">
                A small premium based on purity level, with higher purity gold commanding a slightly higher premium.
              </p>
              <p className="text-sm text-gray-500">
                All gold is certified for purity by independent laboratories.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Form Factor</h3>
              <p className="text-gray-600 mb-4">
                Different products (bars, nuggets, coins) have different premiums based on manufacturing and certification costs.
              </p>
              <p className="text-sm text-gray-500">
                Bulk purchases qualify for premium discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Prices Section */}
      <section className="py-20 bg-gray-50" id="current-prices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="block text-amber-600 font-semibold mb-2">PRICING GUIDE</span>
            <h2 className="text-4xl font-bold mb-4">Today&apos;s Gold Prices</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              <span className="font-bold">Current Gold Spot Price: $1,952.80 per troy ounce</span><br />
              <span className="text-sm text-gray-500">Last updated: September 19, 2025 at 09:00 AM EAT</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gold Bars Pricing */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-amber-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">Gold Bars</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">1g Bar (99.99%)</span>
                    <span className="font-bold text-amber-600">$68.50</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">10g Bar (99.99%)</span>
                    <span className="font-bold text-amber-600">$650.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">1oz Bar (99.99%)</span>
                    <span className="font-bold text-amber-600">$2,010.50</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">100g Bar (99.99%)</span>
                    <span className="font-bold text-amber-600">$6,380.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">1kg Bar (99.99%)</span>
                    <span className="font-bold text-amber-600">$63,450.00</span>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/services" className="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">
                    View Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Gold Nuggets Pricing */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-amber-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">Gold Nuggets</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Small (1-3g)</span>
                    <span className="font-bold text-amber-600">$70.00/g</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Medium (3-10g)</span>
                    <span className="font-bold text-amber-600">$68.50/g</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">Large (10-30g)</span>
                    <span className="font-bold text-amber-600">$67.25/g</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">XL (30g+)</span>
                    <span className="font-bold text-amber-600">$66.00/g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Collector&apos;s Premium</span>
                    <span className="font-bold text-amber-600">+10-20%</span>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/services" className="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">
                    View Products
                  </Link>
                </div>
              </div>
            </div>

            {/* Gold Coins Pricing */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200">
              <div className="h-48 bg-amber-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-center">Gold Coins</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">1/10 oz East African</span>
                    <span className="font-bold text-amber-600">$228.50</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">1/4 oz East African</span>
                    <span className="font-bold text-amber-600">$545.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">1/2 oz East African</span>
                    <span className="font-bold text-amber-600">$1,060.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="font-medium">1 oz East African</span>
                    <span className="font-bold text-amber-600">$2,075.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Limited Edition</span>
                    <span className="font-bold text-amber-600">From $2,450.00</span>
                  </div>
                </div>
                <div className="text-center">
                  <Link href="/services" className="inline-block px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-colors">
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="block text-amber-600 font-semibold mb-2">BULK ORDERS</span>
            <h2 className="text-4xl font-bold mb-4">Volume Discounts</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              We offer attractive discounts for bulk purchases. Contact our team for customized quotes for large orders.
            </p>
          </div>

          <div className="overflow-hidden shadow-md rounded-lg border border-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-amber-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">Purchase Volume</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">Discount Rate</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">Benefits</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">100g - 500g</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1.5%</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Free domestic shipping</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">501g - 1kg</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2.5%</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Free shipping + priority processing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1.001kg - 5kg</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">3.5%</td>
                  <td className="px-6 py-4 text-sm text-gray-900">All benefits + personal account manager</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Over 5kg</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Custom</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Contact us for custom package</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Price Guarantee */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Price Guarantee</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            If you find the same quality gold product at a lower price from another certified direct seller, 
            we&apos;ll match that price plus give you an additional 1% discount.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3 bg-white text-amber-600 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Contact Us For A Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="block text-amber-600 font-semibold mb-2">QUESTIONS</span>
            <h2 className="text-4xl font-bold mb-4">Pricing FAQs</h2>
            <div className="h-1 w-24 bg-amber-600 mx-auto mb-8"></div>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-bold mb-3">How often do your gold prices change?</h3>
              <p className="text-gray-600">
                Our gold prices are updated daily based on the international gold spot price. The price you see on our website is guaranteed for 24 hours from the time of posting.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-bold mb-3">Do you charge any hidden fees?</h3>
              <p className="text-gray-600">
                No. Our pricing is completely transparent. The listed price includes all costs except for shipping, which is calculated at checkout based on your location and preferred shipping method.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-bold mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept bank transfers, secure credit card payments, and selected cryptocurrencies. For orders over $10,000, we offer escrow services for additional security.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-bold mb-3">Can I lock in a price for future purchase?</h3>
              <p className="text-gray-600">
                Yes, we offer price lock options for up to 30 days with a 20% deposit. This is particularly useful for customers planning larger purchases who want to protect against potential price increases.
              </p>
            </div>
            
            <div className="pb-8">
              <h3 className="text-xl font-bold mb-3">Do you buy gold as well as sell it?</h3>
              <p className="text-gray-600">
                Yes, we do buy gold from customers, although our primary business is selling. Please contact us for current buy-back rates, which are based on the purity and form of your gold.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}