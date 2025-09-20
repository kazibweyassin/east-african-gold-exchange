import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GoldEducationPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-gray-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gold Investment Education</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Understanding the fundamentals of gold investment helps you make informed decisions.
            Learn about gold purity, types, market factors, and investment strategies.
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-8 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#why-gold" className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">Why Invest in Gold</a>
            <a href="#purity" className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">Gold Purity</a>
            <a href="#forms" className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">Forms of Gold</a>
            <a href="#storage" className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">Storage Options</a>
            <a href="#faq" className="px-4 py-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors">FAQs</a>
          </div>
        </div>
      </section>

      {/* Why Invest in Gold */}
      <section className="py-16 bg-white" id="why-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Invest in Gold?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="/images/education/gold-history.jpg"
                  alt="Historical gold investment"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">Historical Value Preservation</h3>
              <p className="text-gray-700 mb-4">
                For thousands of years, gold has maintained its value across civilizations and economic systems. 
                Unlike paper currencies which can depreciate due to inflation, gold has historically preserved purchasing power over long periods.
              </p>
              <p className="text-gray-700 mb-4">
                When analyzing gold&apos;s performance over the past century, it has consistently served as a hedge against major economic downturns, 
                including the Great Depression, the 1970s stagflation, the 2008 financial crisis, and more recently during the COVID-19 pandemic.
              </p>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="font-medium text-amber-800">
                  &ldquo;Gold has maintained its value throughout 6,000 years of civilization, while countless currencies have risen and fallen.&rdquo;
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-6 rounded-lg overflow-hidden">
                <Image 
                  src="/images/education/gold-market.jpg"
                  alt="Gold market analysis"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">Portfolio Diversification</h3>
              <p className="text-gray-700 mb-4">
                Gold typically has a low or negative correlation with other major asset classes like stocks and bonds. 
                When stock markets experience volatility, gold often moves independently or even in the opposite direction.
              </p>
              <p className="text-gray-700 mb-4">
                Financial advisors typically recommend allocating 5-15% of a portfolio to gold and precious metals, 
                depending on individual risk tolerance and investment goals.
              </p>
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Gold Performance During Market Stress:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>2008 Financial Crisis:</span>
                    <span className="font-medium text-green-600">+25.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2020 Pandemic:</span>
                    <span className="font-medium text-green-600">+24.6%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Stock Market Correction:</span>
                    <span className="font-medium text-green-600">+9.7%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">Hedge Against Inflation</h3>
              <p className="text-gray-700 mb-4">
                Gold has historically served as a hedge against inflation. When consumer prices rise, the value of fiat currency declines, 
                but gold tends to maintain its real value over time.
              </p>
              <p className="text-gray-700 mb-4">
                During periods of high inflation, such as the 1970s, gold prices rose dramatically, outpacing inflation rates 
                and helping investors preserve their wealth.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <h4 className="font-semibold mb-2">Gold vs. Inflation (1971-2021):</h4>
                <p className="text-gray-700">
                  While the US dollar has lost over 85% of its purchasing power since 1971, 
                  gold has increased more than 45x in dollar terms during the same period.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-700">Liquidity and Universal Value</h3>
              <p className="text-gray-700 mb-4">
                Gold is highly liquid and can be quickly converted to cash in virtually any currency, anywhere in the world. 
                It&apos;s recognized and valued across all cultures and economies.
              </p>
              <p className="text-gray-700 mb-4">
                In times of geopolitical instability or currency crises, gold often serves as a safe haven asset and a form of 
                wealth that crosses borders easily.
              </p>
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 mt-4">
                <p className="font-medium text-amber-800">
                  &ldquo;Gold is the only financial asset that is not simultaneously someone else&apos;s liability.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Purity */}
      <section className="py-16 bg-amber-50" id="purity">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Understanding Gold Purity</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="rounded-lg overflow-hidden mb-6 shadow-lg">
                <Image 
                  src="/images/education/gold-purity.jpg"
                  alt="Gold purity comparison showing different karat gold samples"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-gray-700 mb-6">
                Gold purity is typically measured in karats or as a percentage of pure gold content. The higher the karat number or percentage, 
                the purer the gold and generally the higher its value.
              </p>
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-amber-700">24 Karat (99.9% Pure)</h3>
                  <p className="text-gray-700">
                    The highest purity gold commercially available. This is considered &ldquo;investment grade&rdquo; gold and is used for gold bars, 
                    coins and some high-end jewelry. It&apos;s soft and malleable, with a rich yellow color.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-amber-700">22 Karat (91.7% Pure)</h3>
                  <p className="text-gray-700">
                    Used primarily for high-quality jewelry and some coins. It&apos;s more durable than 24K gold while maintaining 
                    most of the valuable properties.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-amber-700">18 Karat (75% Pure)</h3>
                  <p className="text-gray-700">
                    A common purity for jewelry, offering a good balance between gold content and durability.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-amber-700">14 Karat (58.3% Pure)</h3>
                  <p className="text-gray-700">
                    Popular for everyday jewelry, especially in the US. More affordable but less valuable as an investment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-6 text-center">Gold Purity Verification</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Hallmarking</h4>
                    <p className="text-gray-600 text-sm">Official stamps that indicate gold purity and manufacturer.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Assay Testing</h4>
                    <p className="text-gray-600 text-sm">Professional laboratory analysis to determine exact gold content.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">XRF Spectroscopy</h4>
                    <p className="text-gray-600 text-sm">Advanced technology used for non-destructive analysis of gold composition.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Acid Testing</h4>
                    <p className="text-gray-600 text-sm">Traditional method using acid solutions to test gold purity.</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="text-sm font-medium text-amber-800">
                    <strong>Important:</strong> Always purchase gold from reputable dealers who provide proper certification and 
                    verification of purity. All our gold products come with full documentation and have been independently verified.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forms of Gold Investment */}
      <section className="py-16 bg-white" id="forms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Forms of Gold Investment</h2>
          
          <div className="mb-10 rounded-lg overflow-hidden relative">
            <Image 
              src="/images/education/gold-mining.jpg"
              alt="Gold mining operations"
              width={1200}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent flex items-end">
              <p className="text-white p-6 text-lg font-medium">Understanding the different ways to invest in gold can help you choose the right approach for your goals.</p>
            </div>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 bg-amber-50 border-b">
                <h3 className="text-xl font-bold mb-4 text-amber-800">Physical Gold</h3>
                <p className="text-gray-700">
                  Tangible gold that you can hold and store yourself, including bars, coins, and nuggets.
                </p>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Advantages:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Direct ownership with no counterparty risk</li>
                  <li>Can be stored securely at home or in vaults</li>
                  <li>Highly liquid and universally recognized</li>
                  <li>Completely private form of wealth</li>
                </ul>
                <h4 className="font-semibold mb-3">Considerations:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Requires secure storage</li>
                  <li>Insurance costs for larger holdings</li>
                  <li>May have small dealer premiums above spot price</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 bg-amber-50 border-b">
                <h3 className="text-xl font-bold mb-4 text-amber-800">Gold ETFs & Funds</h3>
                <p className="text-gray-700">
                  Financial products that track the price of gold without requiring physical ownership.
                </p>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Advantages:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Easy to buy and sell through brokerage accounts</li>
                  <li>No need for physical storage or insurance</li>
                  <li>Highly liquid with minimal spreads</li>
                  <li>Available in tax-advantaged accounts</li>
                </ul>
                <h4 className="font-semibold mb-3">Considerations:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Annual management fees</li>
                  <li>Counterparty risk with financial institutions</li>
                  <li>No access to physical gold</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6 bg-amber-50 border-b">
                <h3 className="text-xl font-bold mb-4 text-amber-800">Gold Mining Stocks</h3>
                <p className="text-gray-700">
                  Investments in companies that mine, process, and sell gold.
                </p>
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3">Advantages:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
                  <li>Potential for dividends</li>
                  <li>Leverage to gold price (often outperform in bull markets)</li>
                  <li>Easy to buy and sell through stock exchanges</li>
                  <li>Exposure to company growth and efficiencies</li>
                </ul>
                <h4 className="font-semibold mb-3">Considerations:</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>Company-specific risks beyond gold price</li>
                  <li>Subject to market volatility</li>
                  <li>Geopolitical and operational challenges</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 bg-amber-50 p-6 rounded-lg border border-amber-200">
            <h3 className="text-xl font-bold mb-4">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              For serious investors looking to protect wealth from inflation and economic uncertainty, physical gold offers 
              the most direct and secure form of gold ownership. We specialize in premium physical gold products that provide:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>Direct ownership</strong> - You own the actual gold, not a paper promise</li>
              <li><strong>Privacy</strong> - Physical gold can be held privately outside the financial system</li>
              <li><strong>No counterparty risk</strong> - Not dependent on any financial institution&apos;s stability</li>
              <li><strong>Long-term value</strong> - Physical gold has preserved wealth for thousands of years</li>
            </ul>
            <div className="mt-6">
              <Link href="/products" className="inline-block px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">
                View Our Gold Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Options */}
      <section className="py-16 bg-gray-50" id="storage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Gold Storage Options</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">Proper storage is essential for protecting your gold investment. Consider these options based on your security needs and access requirements.</p>
          
          <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image 
                src="/images/education/gold-info-1.jpg"
                alt="Secure gold storage"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-700">Protecting Your Investment</h3>
              <p className="text-gray-700 mb-4">
                The security of your gold investment is paramount. Regardless of which storage option you choose, 
                ensure it provides adequate protection against theft, damage, and unauthorized access.
              </p>
              <p className="text-gray-700">
                For significant gold holdings, we recommend diversifying your storage across multiple secure 
                locations to mitigate risk. Our advisors can help you develop a comprehensive storage strategy 
                tailored to your specific needs and circumstances.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4 bg-amber-600 text-white">
                <h3 className="font-bold text-lg">Home Storage</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Complete control over your gold</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Immediate access at any time</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">No ongoing storage fees</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Security concerns for larger amounts</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">May have insurance limitations</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Best for: Smaller quantities and those who prefer direct access to their gold.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4 bg-amber-600 text-white">
                <h3 className="font-bold text-lg">Bank Safe Deposit Box</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Better security than home storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Relatively low annual costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Some privacy protection</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Limited access during banking hours</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Often not insured by the bank</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Best for: Moderate amounts of gold with occasional access needs.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-amber-600">
              <div className="p-4 bg-amber-600 text-white">
                <h3 className="font-bold text-lg">Private Vault Storage</h3>
                <span className="inline-block mt-1 px-2 py-0.5 bg-white text-amber-600 text-xs font-bold rounded">RECOMMENDED</span>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Maximum security with armed guards</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Full insurance coverage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">More privacy than banking system</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Better access hours than banks</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Higher annual fees than bank boxes</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Best for: Larger gold holdings requiring maximum security.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4 bg-amber-600 text-white">
                <h3 className="font-bold text-lg">Allocated Storage Program</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Professional management of your gold</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Full insurance coverage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Easy liquidation when needed</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Regular auditing and verification</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-gray-700">Annual storage fees (0.5-1%)</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Best for: Investors who want hassle-free ownership with professional management.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Storage Solutions</h3>
              <p className="text-gray-700 mb-4">
                We offer comprehensive storage solutions for our clients, including our premium Allocated Storage Program in 
                high-security vaults located in Switzerland, Singapore, and New York. Our service includes:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>100% allocated ownership with segregated storage</li>
                <li>Full insurance through Lloyd&apos;s of London</li>
                <li>Regular third-party auditing</li>
                <li>Option for physical delivery at any time</li>
                <li>Competitive storage rates starting at 0.5% annually</li>
              </ul>
              <Link href="/contact" className="inline-block px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors">
                Inquire About Storage Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">Answers to common questions about gold investment, storage, and our products.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Image 
                  src="/images/education/gold-info-1.jpg"
                  alt="Gold investment information"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-md mb-6"
                />
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <h3 className="font-semibold text-amber-800 mb-2">Have More Questions?</h3>
                  <p className="text-gray-700 mb-4">Our gold investment specialists are available to answer any questions you may have about investing in gold.</p>
                  <Link href="/contact" className="text-amber-700 font-semibold hover:text-amber-800 inline-flex items-center">
                    Contact our experts
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What is the minimum amount of gold I should buy?</h3>
                  <p className="text-gray-700">
                    There is no strict minimum, but most investors start with at least 1 ounce of gold (about 31 grams) or its equivalent. 
                    We offer products starting from 1g gold bars, allowing you to begin with a smaller investment and build your position over time.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Is gold taxable when I sell it?</h3>
                  <p className="text-gray-700">
                    In most countries, gold is subject to capital gains tax when sold at a profit. The exact tax treatment varies by country 
                    and sometimes by the form of gold. We recommend consulting with a tax professional for advice specific to your situation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How do I know I&apos;m getting authentic gold?</h3>
                  <p className="text-gray-700">
                    All our gold products come with certificates of authenticity and have been independently verified for purity. 
                    We only source from reputable refineries and mines with strong track records. Each product includes documentation 
                    of its origin, purity, and verification methods used.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Which is better: gold bars or coins?</h3>
                  <p className="text-gray-700">
                    Both have advantages. Gold bars typically have lower premiums over the spot price, making them more cost-effective for 
                    pure investment. Gold coins often have numismatic (collector) value and can be more liquid in smaller transactions. 
                    Many investors maintain a mix of both in their portfolios.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">How much of my portfolio should be in gold?</h3>
                  <p className="text-gray-700">
                    Financial experts typically recommend allocating 5-15% of an investment portfolio to gold and precious metals. 
                    This percentage might be higher during times of economic uncertainty or high inflation. Your specific allocation 
                    should depend on your investment goals, risk tolerance, and overall financial situation.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">What&apos;s the difference between allocated and unallocated gold?</h3>
                  <p className="text-gray-700">
                    Allocated gold means you own specific, identifiable pieces of gold held in your name. Unallocated gold represents 
                    a claim on a portion of gold held by a bank or dealer without specific bars assigned to you. We strongly recommend 
                    allocated gold ownership as it eliminates counterparty risk in the event of a financial institution&apos;s failure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Gold Investment?</h2>
          <p className="text-xl mb-8">
            Our team of gold experts is ready to help you make informed decisions about gold investment 
            that align with your financial goals and risk tolerance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-amber-700 rounded-md font-semibold transition-colors"
            >
              Browse Gold Products
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-amber-800 hover:bg-amber-900 text-white rounded-md font-semibold transition-colors border border-white"
            >
              Speak with a Gold Specialist
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
}