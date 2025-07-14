// src/components/sections/AboutSection.jsx
import React from 'react';
import { CheckCircle, Brain } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About The Mindspace Centre</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with a vision to make mental health support accessible, inclusive, and effective for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To provide compassionate, evidence-based mental health services that empower individuals 
              to heal, grow, and thrive. We believe that everyone deserves access to quality mental 
              health support in a safe, non-judgmental environment.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Trauma-informed care approach</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">CBT, DBT, and other evidence-based therapies</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Bilingual support (Hindi/English)</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Online and offline consultation options</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-16 h-16 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Dr. [Your Name]</h4>
              <p className="text-blue-600 mb-4">Clinical Psychologist & Founder</p>
              <p className="text-gray-600 text-sm">
                Licensed clinical psychologist with [X] years of experience specializing in anxiety, 
                depression, trauma therapy, and adolescent mental health. Certified in CBT, DBT, 
                and trauma-informed care approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;