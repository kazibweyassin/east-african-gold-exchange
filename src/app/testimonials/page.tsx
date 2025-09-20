import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialForm from '@/components/TestimonialForm';

const TestimonialsPage = () => {
  // Array of testimonials
  const testimonials = [
    {
      id: 1,
      name: "David Chen",
      role: "Investment Portfolio Manager",
      location: "Singapore",
      image: "/images/testimonials/david-chen.jpg",
      quote: "As a portfolio manager handling significant assets, I needed a reliable gold supplier with impeccable credentials. East African Gold Exchange has been exceptional in every transaction. Their authentication processes give me complete confidence when making large purchases for my clients.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Private Collector",
      location: "United States",
      image: "/images/testimonials/sarah-johnson.jpg",
      quote: "I've been collecting gold for over 15 years, and my experience with East African Gold Exchange has been outstanding. The purity of their gold is consistently excellent, and their customer service team has always been responsive and knowledgeable.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Okafor",
      role: "Jewelry Manufacturer",
      location: "Nigeria",
      image: "/images/testimonials/michael-okafor.jpg",
      quote: "Finding a reliable supplier of high-quality gold was crucial for our jewelry business. East African Gold Exchange delivers exceptional products with consistent purity and color. Their logistics are smooth, and we've never had an issue with delayed shipments.",
      rating: 5
    },
    {
      id: 4,
      name: "Elena Petrova",
      role: "Private Investor",
      location: "Russia",
      image: "/images/testimonials/elena-petrova.jpg",
      quote: "During economic uncertainty, I decided to diversify my portfolio with physical gold. East African Gold Exchange made the process straightforward even for someone new to precious metals investing. Their educational resources were particularly helpful.",
      rating: 4
    },
    {
      id: 5,
      name: "Rajiv Patel",
      role: "Gold Trading Company CEO",
      location: "India",
      image: "/images/testimonials/rajiv-patel.jpg",
      quote: "We've established a long-term partnership with East African Gold Exchange for our wholesale gold needs. Their pricing is competitive, their documentation is always in perfect order, and they maintain strict ethical standards in their sourcing.",
      rating: 5
    },
    {
      id: 6,
      name: "Aisha Mohammed",
      role: "Fine Jewelry Designer",
      location: "UAE",
      image: "/images/testimonials/aisha-mohammed.jpg",
      quote: "The quality and consistency of gold from East African Gold Exchange has allowed us to create our signature jewelry pieces with confidence. Their commitment to ethical sourcing also aligns perfectly with our brand values.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "currentColor" : "none"} 
        className={`w-5 h-5 ${i < rating ? 'text-amber-500' : 'text-gray-300 stroke-1 stroke-gray-300'}`}
      >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-4">Customer Testimonials</h1>
          <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hear from our satisfied customers about their experiences working with East African Gold Exchange.
          </p>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border-t-4 border-amber-500 relative">
                <div className="absolute top-4 right-4 text-amber-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" className="opacity-20">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.884-3.995 2.979-3.995 5.849h4v10h-10zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.884-3.996 2.979-3.996 5.849h3.999v10h-10z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-amber-200 shadow-sm">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-amber-700">{testimonial.role}, {testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  
                  <div className="flex items-center text-amber-600">
                    <span className="text-sm font-medium">Verified Purchase</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Your Testimonial */}
          <div className="bg-amber-50 rounded-xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-2">Share Your Experience</h2>
            <p className="text-center text-gray-600 mb-6">
              We value your feedback! If you&apos;ve done business with us, please consider sharing your experience.
            </p>
            
            <TestimonialForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;