// src/components/sections/ContactSection.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import TestimonialCard from '../ui/TestimonialCard';
import { contact } from '../../data/contact';
import JoinUsSection from '../JoinUsSection';
import PaymentSuccessPopup from '../PaymentSuccessPopup';

const ContactSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            We're here to support you on your mental health journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="group bg-blue-50 shadow-md rounded-2xl px-6 py-8 flex flex-col items-center transition hover:scale-105 duration-300 h-full">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600">{contact.phone}</p>
          </div>
          <div className="group bg-blue-50 shadow-md rounded-2xl px-6 py-8 flex flex-col items-center transition hover:scale-105 duration-300 h-full">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">{contact.email}</p>
          </div>
          <div className="group bg-blue-50 shadow-md rounded-2xl px-6 py-8 flex flex-col items-center transition hover:scale-105 duration-300 h-full">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
            <p>{contact.address}</p>
          </div>
        </div>

        <JoinUsSection />
      </div>
    </div>
  );
};

export default ContactSection;