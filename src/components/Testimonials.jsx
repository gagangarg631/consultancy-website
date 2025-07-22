import { useState } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "./ui/TestimonialCard";

const Testimonials = () => {
    const [all, setAll] = useState(false);

    return (
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Our Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {(all ? testimonials : testimonials.slice(3)).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
        </div>
    )
}

export default Testimonials;