import { testimonials } from "../data/testimonials";
import TestimonialCard from "./ui/TestimonialCard";

const Testimonials = () => {
    return (
        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
    )
}

export default Testimonials;