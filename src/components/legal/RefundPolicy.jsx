import React from 'react';
import { contact } from '../../data/contact';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4">
        At <strong>{contact.businessName}</strong>, we strive to offer high-quality psychological services. However, we understand that sometimes plans change.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Refund Eligibility</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Full refund if cancellation is made 24+ hours before the session</li>
        <li>50% refund for cancellations made within 24 hours</li>
        <li>No refund for missed sessions or no-shows</li>
        <li>If a session is cancelled by us, a full refund or rescheduling will be provided</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Request a Refund</h2>
      <p className="mb-4">
        Email us at <strong>ashishsura007@gmail.com</strong> with your full name, payment ID, and appointment time. Refunds are processed within 5–7 business days.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Disputes</h2>
      <p>
        Any dispute regarding payments or sessions will be resolved professionally and fairly. Our goal is to ensure mutual respect and understanding.
      </p>
    </div>
  );
};

export default RefundPolicy;
