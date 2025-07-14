import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-3 italic">"{testimonial.text}"</p>
      <p className="text-gray-500 text-sm">- {testimonial.author}</p>
    </div>
  );
};

export default TestimonialCard;