import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ faq, isExpanded, onToggle }) => {
  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isExpanded && (
        <p className="mt-3 text-gray-600">{faq.answer}</p>
      )}
    </div>
  );
};

export default FAQItem;