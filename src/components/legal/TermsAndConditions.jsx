import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-4">
        These Terms & Conditions govern your use of <strong>[Your Business Name]</strong>'s services. By booking a session or using our website, you agree to comply with these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Services</h2>
      <p className="mb-4">
        We offer psychological consultations, therapy sessions, and mental wellness guidance. All services are intended for non-emergency psychological support only.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Eligibility</h2>
      <p className="mb-4">
        You must be 18 years or older to use our services. Minors require guardian consent.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Booking and Payments</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>All appointments must be scheduled in advance.</li>
        <li>Payments must be made online via Razorpay.</li>
        <li>Sessions are confirmed only after successful payment.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        We are not responsible for any decisions you make based on our consultations. Our professionals are certified, but services do not replace medical or emergency support.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of the service constitutes acceptance of those changes.
      </p>
    </div>
  );
};

export default TermsAndConditions;
