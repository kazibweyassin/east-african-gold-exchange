import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">Our Security Measures</h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At East African Gold Exchange, we implement comprehensive security measures to protect your investments 
            and ensure the integrity of every transaction.
          </p>

          {/* Security Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Physical Security</h2>
              <p className="text-gray-600">
                State-of-the-art vault systems with 24/7 monitoring, armed guards, and multiple verification protocols for access.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Transaction Security</h2>
              <p className="text-gray-600">
                Encrypted payment processing, multi-factor authentication, and secure escrow services for large transactions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Compliance</h2>
              <p className="text-gray-600">
                Full adherence to international anti-money laundering (AML) and know-your-customer (KYC) regulations.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-amber-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Data Protection</h2>
              <p className="text-gray-600">
                Advanced encryption for customer data, regular security audits, and strict internal access controls.
              </p>
            </div>
          </div>

          {/* Detailed Security Sections */}
          <div className="space-y-16">
            {/* Physical Security */}
            <div id="physical-security" className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Physical Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Vault Storage</h3>
                  <p className="text-gray-600 mb-4">
                    All gold in our possession is stored in Grade III TRTL-30X6 rated vaults that provide protection against 
                    sophisticated attacks. These vaults feature:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Reinforced concrete walls and ceilings</li>
                    <li>Time-delay combination locks</li>
                    <li>Seismic and motion detection systems</li>
                    <li>24/7 armed security personnel</li>
                    <li>Continuous CCTV monitoring</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Access Control</h3>
                  <p className="text-gray-600 mb-4">
                    Our facilities implement strict access control protocols:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Biometric authentication (fingerprint and retinal scanning)</li>
                    <li>Two-person integrity rule for vault access</li>
                    <li>Comprehensive visitor logging and escort requirements</li>
                    <li>Background checks for all employees with vault access</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Insurance Coverage</h3>
                  <p className="text-gray-600 mb-4">
                    All stored gold is fully insured through Lloyd&apos;s of London with comprehensive coverage:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Full market value coverage for theft, damage, or loss</li>
                    <li>Additional coverage during transit</li>
                    <li>Natural disaster protection</li>
                    <li>Liability insurance for handling errors</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Regular Audits</h3>
                  <p className="text-gray-600 mb-4">
                    We maintain transparency through rigorous audit practices:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Quarterly inventory reconciliation by independent auditors</li>
                    <li>Annual full physical audits by KPMG</li>
                    <li>Random spot checks by regulatory authorities</li>
                    <li>Video-documented audit trails available to clients with large holdings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transaction Security */}
            <div id="transaction-security" className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Transaction Security</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Payment Security</h3>
                  <p className="text-gray-600 mb-4">
                    We implement industry-leading payment security measures:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>256-bit SSL encryption for all online transactions</li>
                    <li>PCI DSS Level 1 compliance for credit card processing</li>
                    <li>Real-time fraud detection systems</li>
                    <li>Secure bank-to-bank transfers for large transactions</li>
                    <li>No storage of complete credit card information</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Authentication</h3>
                  <p className="text-gray-600 mb-4">
                    Multi-factor authentication protocols protect your account:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Strong password requirements</li>
                    <li>Two-factor authentication (2FA) via mobile app</li>
                    <li>Biometric authentication options</li>
                    <li>Account activity notifications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Escrow Services</h3>
                  <p className="text-gray-600 mb-4">
                    For large transactions, we provide secure escrow services:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Third-party verification of funds and gold authenticity</li>
                    <li>Step-by-step transaction confirmation process</li>
                    <li>Secure handover protocols</li>
                    <li>Complete documentation and receipts</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Shipping Security</h3>
                  <p className="text-gray-600 mb-4">
                    When shipping gold, we take extraordinary precautions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Armored vehicle transport for high-value shipments</li>
                    <li>Discreet packaging with no external indications of contents</li>
                    <li>GPS tracking on all shipments</li>
                    <li>Full insurance coverage during transit</li>
                    <li>Signature confirmation and ID verification upon delivery</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Compliance */}
            <div id="compliance" className="bg-white rounded-xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-6">Regulatory Compliance</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">KYC and AML Compliance</h3>
                  <p className="text-gray-600 mb-4">
                    We adhere to strict regulatory standards in all jurisdictions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Comprehensive Know Your Customer (KYC) procedures</li>
                    <li>Anti-Money Laundering (AML) monitoring systems</li>
                    <li>Suspicious activity reporting protocols</li>
                    <li>Regular compliance training for all staff</li>
                    <li>Ongoing transaction monitoring</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Documentation</h3>
                  <p className="text-gray-600 mb-4">
                    All transactions are thoroughly documented:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Transaction receipts with unique reference numbers</li>
                    <li>Certificates of authenticity</li>
                    <li>Secure digital records maintained for 7+ years</li>
                    <li>Chain of custody documentation</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Ethical Sourcing</h3>
                  <p className="text-gray-600 mb-4">
                    We ensure all gold is ethically sourced:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Compliance with Responsible Gold Guidance</li>
                    <li>Conflict-free certification</li>
                    <li>Regular supplier audits</li>
                    <li>Transparent supply chain documentation</li>
                    <li>Adherence to OECD Due Diligence Guidance</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 text-amber-700">Regulatory Partners</h3>
                  <p className="text-gray-600 mb-4">
                    We work closely with regulatory bodies and industry organizations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>World Gold Council member</li>
                    <li>London Bullion Market Association (LBMA) accreditation</li>
                    <li>Registered with relevant financial authorities</li>
                    <li>Regular compliance audits by external specialists</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Security Team */}
          <div className="bg-amber-50 rounded-xl p-8 text-center mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Have Security Concerns?</h2>
            <p className="text-lg mb-6">
              Our dedicated security team is available to address any questions or concerns about the security of your gold investments.
            </p>
            <div className="mt-8">
              <a href="/contact" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Contact Our Security Team
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}