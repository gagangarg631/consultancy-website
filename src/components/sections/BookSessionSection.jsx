// src/components/sections/BookSessionSection.jsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle, CheckCircle } from 'lucide-react';
import BookSessionModal from '../BookSessionModal';
import QRCodePayment from '../QRCodePayment';
import { useLocation } from 'react-router-dom';
import BookingForm from '../BookSessionForm';
import SessionModeSelector from '../ModeSelector';

const BookSessionSection = () => {
  const location = useLocation();
  const sessionInfo = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
    mode: 'online'
  });
  const [isPayment, setIsPayment] = useState(false);

  const goToPayment = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsPayment(true);
  }

  const selectMode = (mode) => {
    setFormData({ ...formData, mode })
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Book Your Session</h2>
          <p className="text-xl text-gray-600">
            Taking the first step towards better mental health is just a click away.
          </p>
        </div>

        {!isPayment && (
          <div className="flex mx-auto justify-center gap-8 mt-10 sm:flex-row flex-col">
          <div className="w-full sm:w-2/5 gap-4 flex flex-col">
            <div className="shadow-md rounded-xl p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{sessionInfo.title}</h3>
              <p className="text-gray-600 mb-4">{sessionInfo.description}</p>
              <SessionModeSelector onSelect={selectMode} sessionMode={formData.mode} />
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">+91 [Your Phone Number]</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">[your-email@mindspace.com]</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">[Your Clinic Address]</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Mon-Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl w-full sm:w-3/5 flex items-center justify-center">
            <BookingForm submitted={goToPayment} formData={formData} setFormData={setFormData} />
          </div>
        </div>
        )}

        {isPayment && (
          <div className="bg-white mx-auto rounded-xl shadow-md p-6 md:w-1/2 w-full border text-center mt-4">
            <div className="mb-4 text-left flex flex-col items-center">
              <h3 className="text-lg font-semibold text-gray-800">Payment Details</h3>
              <p className="text-sm text-gray-600">{sessionInfo.title}</p>
              <p className="text-sm text-gray-600">Session: <span className="font-medium">{formData.mode}</span></p>
              <p className="text-sm text-gray-700 mt-1">Amount: <span className="font-bold text-blue-600">₹999</span></p>
            </div>
            <QRCodePayment />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookSessionSection;