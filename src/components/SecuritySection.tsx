import React from 'react';
import Link from 'next/link';

const SecuritySection = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Security Is Our Priority</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            When trading in precious metals, security and trust are paramount. 
            Discover how we protect your investments at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-l-4 border-amber-500">
            <div className="flex items-start mb-4">
              <div className="bg-amber-100 p-4 rounded-full mr-4 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-amber-800">Secure Transactions</h3>
                <p className="text-gray-700">
                  Our payment systems are secured with bank-grade 256-bit SSL encryption. 
                  We employ advanced fraud detection and multi-factor authentication for all transactions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start mb-4">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Maximum-Security Storage</h3>
                <p className="text-gray-600">
                  All gold in our custody is stored in state-of-the-art vaults with 24/7 armed security,
                  advanced biometric access controls, and sophisticated alarm systems.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-amber-100 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Full Insurance Coverage</h3>
                <p className="text-gray-600">
                  Every ounce of gold in our custody is fully insured through Lloyd&apos;s of London,
                  covering theft, loss, damage, and transit security up to the full market value.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-amber-600 rounded-xl shadow-md overflow-hidden flex flex-col">
            <div className="flex-1 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Security Commitment</h3>
              <p className="mb-6">
                At East African Gold Exchange, security isn&apos;t just a feature—it&apos;s built into everything we do.
                From sourcing to delivery, every step of our process is designed with your security in mind.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regulatory compliance with AML and KYC protocols</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular independent auditing of all gold holdings</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>End-to-end encryption for all customer data</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Secure, insured shipping options worldwide</span>
                </li>
              </ul>
              <Link href="/security" 
                className="inline-block bg-white text-amber-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300">
                Learn More About Our Security
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/security" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
          >
            Learn More About Our Security
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;