import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [all, setAll] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(all ? faqs : faqs.slice(0, 8)).map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left text-gray-800 font-medium text-lg"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      {!all && (
      <div className="flex justify-center w-full mt-10">
        <button 
          onClick={() => setAll(true)}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          View More
        </button>
      </div>
      )}
    </section>
  );
}
