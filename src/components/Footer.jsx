// src/components/Footer.jsx
import React from 'react';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">The Mindspace Centre</span>
            </div>
            <p className="text-gray-400">
              Professional mental health services with compassion and expertise.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigate('about')} className="hover:text-white">About Us</button></li>
              <li><button onClick={() => navigate('services')} className="hover:text-white">Services</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => navigate("privacy-policy")} className="hover:text-white">Privacy Policy</button></li>
              <li><button onClick={() => navigate("terms-and-conditions")} className="hover:text-white">Terms & Conditions</button></li>
              <li><button onClick={() => navigate("refund-policy")} className="hover:text-white">Refund Policy</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 The Mindspace Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;