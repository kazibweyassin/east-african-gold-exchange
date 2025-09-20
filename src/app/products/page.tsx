import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      {/* Products Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Gold Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our curated selection of authentic gold directly sourced from East African mines.
            All products come with certification of purity, ethical sourcing, and origin documentation.
          </p>
        </div>
      </section>

      {/* Product Quality Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Gold Standard</h2>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">99.99% Purity Guaranteed</h3>
                  <p className="text-gray-700">Every gold product we offer is tested and certified to meet the highest international standards of purity. Our gold is refined to 99.99% (24 karat) purity, ensuring maximum value and investment potential.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">Ethical Sourcing Certification</h3>
                  <p className="text-gray-700">We work exclusively with mines that follow ethical mining practices and provide fair wages to workers. Each product comes with documentation verifying its ethical source and chain of custody.</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-amber-700 mb-2">Independent Verification</h3>
                  <p className="text-gray-700">Our gold products are independently verified by internationally accredited laboratories. Each item comes with a certificate of authenticity and detailed analysis report.</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center px-8">
                    <h3 className="text-3xl font-bold mb-4">Gold Certification</h3>
                    <p className="text-xl">Each product includes detailed documentation:</p>
                    <ul className="list-disc list-inside text-left mt-4 space-y-2">
                      <li>Certificate of Authenticity</li>
                      <li>Purity Assay Report</li>
                      <li>Origin Documentation</li>
                      <li>Ethical Mining Verification</li>
                      <li>Chain of Custody Report</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Bars Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Investment Gold Bars</h2>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">Our investment-grade gold bars are manufactured to the highest standards and marked with unique serial numbers for verification and tracking.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/products/gold-bar-1.jpg" 
                  alt="1kg Gold Bar" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-amber-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                  1 KG | 999.9
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">1kg Gold Bar</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Purity:</span> 99.99% (24 karat)</p>
                  <p><span className="font-semibold">Weight:</span> 1000 grams (32.15 troy oz)</p>
                  <p><span className="font-semibold">Dimensions:</span> 116.5mm × 51mm × 8.7mm</p>
                  <p><span className="font-semibold">Features:</span> Serial number, manufacturer stamp, weight & purity markings</p>
                  <p><span className="font-semibold">Certification:</span> Includes assay card and certificate of authenticity</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$67,500.00 USD</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/products/gold-bars-2.jpg" 
                  alt="500g Gold Bar" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-amber-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                  500 G | 999.9
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">500g Gold Bar</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Purity:</span> 99.99% (24 karat)</p>
                  <p><span className="font-semibold">Weight:</span> 500 grams (16.08 troy oz)</p>
                  <p><span className="font-semibold">Dimensions:</span> 80mm × 40mm × 7mm</p>
                  <p><span className="font-semibold">Features:</span> Serial number, manufacturer stamp, weight & purity markings</p>
                  <p><span className="font-semibold">Certification:</span> Includes assay card and certificate of authenticity</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$33,750.00 USD</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/products/gold-investment-1.jpg" 
                  alt="100g Gold Bar" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-amber-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                  100 G | 999.9
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">100g Gold Bar</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Purity:</span> 99.99% (24 karat)</p>
                  <p><span className="font-semibold">Weight:</span> 100 grams (3.22 troy oz)</p>
                  <p><span className="font-semibold">Dimensions:</span> 47mm × 27mm × 3.5mm</p>
                  <p><span className="font-semibold">Features:</span> Serial number, manufacturer stamp, weight & purity markings</p>
                  <p><span className="font-semibold">Certification:</span> Includes assay card and certificate of authenticity</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$6,750.00 USD</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gold Nuggets Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Natural Gold Nuggets</h2>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">Our natural gold nuggets are sourced directly from East African mines, offering unique shapes and textures prized by collectors and investors alike.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/products/gold-nuggets-1.jpg" 
                  alt="Premium Gold Nuggets" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-amber-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                  50g+
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Premium Gold Nuggets</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Size Range:</span> 50g+ per nugget</p>
                  <p><span className="font-semibold">Purity:</span> 90-98% natural gold</p>
                  <p><span className="font-semibold">Origin:</span> East African alluvial deposits</p>
                  <p><span className="font-semibold">Characteristics:</span> Unique shapes, natural texture, high collectible value</p>
                  <p><span className="font-semibold">Certification:</span> Includes origin certificate and purity analysis</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$3,600.00 USD/oz</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image 
                  src="/images/products/gold-jewelry-1.jpg" 
                  alt="Medium Gold Nuggets" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-amber-600 text-white text-xs font-bold px-2 py-1 m-2 rounded">
                  10-50g
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Medium Gold Nuggets</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Size Range:</span> 10-50g per nugget</p>
                  <p><span className="font-semibold">Purity:</span> 88-96% natural gold</p>
                  <p><span className="font-semibold">Origin:</span> East African alluvial deposits</p>
                  <p><span className="font-semibold">Characteristics:</span> Varied shapes, natural texture, good collector pieces</p>
                  <p><span className="font-semibold">Certification:</span> Includes origin certificate and purity analysis</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$3,500.00 USD/oz</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-gradient-to-r from-amber-200 to-amber-400 flex items-center justify-center">
                <div className="p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-amber-800 mx-auto">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                  </svg>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Small Gold Nuggets</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Size Range:</span> 1-10g per nugget</p>
                  <p><span className="font-semibold">Purity:</span> 85-95% natural gold</p>
                  <p><span className="font-semibold">Origin:</span> East African alluvial deposits</p>
                  <p><span className="font-semibold">Characteristics:</span> Small unique pieces, natural texture, starter collector items</p>
                  <p><span className="font-semibold">Certification:</span> Includes batch origin certificate</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$3,400.00 USD/oz</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gold Coins Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Investment & Collectible Gold Coins</h2>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">Our selection of premium gold coins includes both investment bullion coins and limited edition collectible pieces, all crafted with exceptional detail and purity.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-gradient-to-r from-amber-50 to-amber-200 flex items-center justify-center">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full bg-amber-600 mx-auto flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">1 OZ</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">1oz Investment Coins</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Weight:</span> 1 troy oz (31.1g)</p>
                  <p><span className="font-semibold">Purity:</span> 99.99% (24 karat)</p>
                  <p><span className="font-semibold">Diameter:</span> 32.7mm</p>
                  <p><span className="font-semibold">Thickness:</span> 2.8mm</p>
                  <p><span className="font-semibold">Features:</span> Serialized, minted with East African Gold Direct logo</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$2,150.00 USD</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-gradient-to-r from-amber-50 to-amber-200 flex items-center justify-center">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full bg-amber-600 mx-auto flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">EA</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">East African Collection Coins</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Weight:</span> 1 troy oz (31.1g)</p>
                  <p><span className="font-semibold">Purity:</span> 99.99% (24 karat)</p>
                  <p><span className="font-semibold">Diameter:</span> 38.6mm</p>
                  <p><span className="font-semibold">Special Features:</span> Limited edition, numbered, featuring East African wildlife designs</p>
                  <p><span className="font-semibold">Presentation:</span> Includes display case and certificate of authenticity</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">$2,350.00 USD</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-gradient-to-r from-amber-50 to-amber-200 flex items-center justify-center">
                <div className="p-6 flex gap-2">
                  <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">1/10</span>
                    </div>
                  </div>
                  <div className="w-20 h-20 rounded-full bg-amber-600 flex items-center justify-center">
                    <div className="w-18 h-18 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">1/4</span>
                    </div>
                  </div>
                  <div className="w-24 h-24 rounded-full bg-amber-600 flex items-center justify-center">
                    <div className="w-22 h-22 rounded-full bg-amber-500 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">1/2</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Fractional Gold Coins</h3>
                <div className="space-y-3 text-sm text-gray-700 mb-4">
                  <p><span className="font-semibold">Weights Available:</span> 1/10 oz (3.11g), 1/4 oz (7.78g), 1/2 oz (15.55g)</p>
                  <p><span className="font-semibold">Purity:</span> 99.99% (24 karat)</p>
                  <p><span className="font-semibold">Diameters:</span> 16.5mm, 22mm, 27mm respectively</p>
                  <p><span className="font-semibold">Features:</span> Ideal for smaller investments and gifts</p>
                  <p><span className="font-semibold">Packaging:</span> Available individually or as a set in protective capsules</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-amber-600 font-semibold">From $225.00 USD</span>
                  <Link href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded transition-colors">
                    Inquire
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Storage & Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Storage & Delivery Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-amber-100 p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Secure Storage Solutions</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">We offer fully insured, high-security storage for your gold investments. Our storage facilities feature:</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>24/7 armed security and surveillance</li>
                    <li>Advanced biometric access controls</li>
                    <li>Full segregation of assets (your gold is stored separately)</li>
                    <li>Regular auditing by independent parties</li>
                    <li>Complete insurance coverage</li>
                    <li>Certificate of ownership and storage</li>
                  </ul>
                  <p className="text-gray-700">Storage fees: 0.5% per annum of gold value, billed quarterly</p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-amber-100 p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Secure Delivery Services</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">For clients who prefer physical possession, we offer secure delivery options:</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Fully insured armored courier services</li>
                    <li>Discreet packaging with no indication of contents</li>
                    <li>Tracking and signature confirmation</li>
                    <li>Available worldwide (subject to local regulations)</li>
                    <li>Optional video verification of packaging process</li>
                    <li>Delivery time: 3-10 business days depending on location</li>
                  </ul>
                  <p className="text-gray-700">Delivery fees: Starting at $250 USD, depending on value and destination</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Purchase Premium Gold?</h2>
          <p className="text-xl mb-8">
            Contact our team of gold experts today to discuss your specific requirements. We offer personalized service, competitive pricing, and secure transaction methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-700 rounded-md font-semibold transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white rounded-md font-semibold transition-colors border border-white"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}