import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What should I do if I'm unable to book a session with you?",
    answer: "If you're unable to book, please reach out to us via WhatsApp or call so we can assist you manually or fit you in on priority.",
  },
  {
    question: "How can I reschedule or cancel my session?",
    answer: "You can cancel or reschedule from the booking link or by contacting us directly at least 24 hours before your session.",
  },
  {
    question: "Is it necessary to prepare for the first session with a therapist?",
    answer: "No preparation is needed. Just come as you are. We’ll guide you through the process at your comfort level.",
  },
  {
    question: "What if I cancel my session last minute?",
    answer: "We understand emergencies, but last-minute cancellations may be charged unless it’s unavoidable. Kindly inform us early.",
  },
  {
    question: "How many sessions will it take to get better?",
    answer: "It varies person to person. Some feel relief in 1–3 sessions, others need longer support. Your journey is unique.",
  },
  {
    question: "Can I get cured in one session?",
    answer: "Therapy is a process. While you might feel better after one session, lasting change usually takes a few sessions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
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
    </section>
  );
}
