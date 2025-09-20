'use client';

import React from 'react';
import TestimonialForm from '@/components/TestimonialForm';

const TestimonialSubmission = () => {
  return (
    <div className="bg-amber-50 rounded-xl p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-2">Share Your Experience</h2>
      <p className="text-center text-gray-600 mb-6">
        We value your feedback! If you&apos;ve done business with us, please consider sharing your experience.
      </p>
      
      <TestimonialForm />
    </div>
  );
};

export default TestimonialSubmission;