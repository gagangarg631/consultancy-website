import React from 'react';
import { contact } from '../../data/contact';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        This Privacy Policy describes how <strong>{contact.businessName}</strong> ("we", "our", or "us") collects, uses, and discloses your personal information when you use our services or access our website.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Personal identification information (name, email, phone number)</li>
        <li>Health-related details shared during consultations</li>
        <li>Session notes (if applicable)</li>
        <li>Payment details (processed securely via Razorpay)</li>
        <li>IP address and browser data (for analytics and security)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Your Information</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>To provide psychological consultation and mental health support</li>
        <li>To contact clients regarding sessions or changes</li>
        <li>To process payments and maintain billing records</li>
        <li>To comply with legal obligations</li>
        <li>To improve our services and website experience</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Data Security</h2>
      <p className="mb-4">
        We store your data in secure environments and restrict access only to authorized personnel. We use encryption, SSL, and other technologies to prevent unauthorized access.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Third-Party Disclosure</h2>
      <p className="mb-4">
        We do not sell, trade, or share your personal data for marketing purposes. Razorpay handles all payment transactions securely on our behalf.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
      <p className="mb-4">
        You may access, correct, or request deletion of your personal information by contacting us at <strong>[Your Email]</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>
        If you have questions about this Privacy Policy, email us at <strong>[Your Email]</strong>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
