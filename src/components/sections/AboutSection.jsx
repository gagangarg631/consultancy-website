// src/components/sections/AboutSection.jsx
import React from 'react';
import { CheckCircle, Brain } from 'lucide-react';
import JourneySection from '../JourneySection';
import JoinUsSection from '../JoinUsSection';

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

        <JourneySection />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Meet Your Therapist: Ashish Sura</h3>
            <p className="text-gray-600 mb-6">
              I’m Ashish Sura, a counselling psychologist committed to creating a compassionate and supportive therapeutic space. My approach combines structured psychological techniques with deep, empathetic listening. I work with adolescents, adults, and families to help them manage:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Anxiety & Depression </span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Behavioural & Emotional Challenges</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Relationship challenges</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Trauma & Grief issues</span>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Personality & Identity challenges</span>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Addiction challenges</span>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <span className="text-gray-700">Schizophrenia, Bipolar, and OCD</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6 font-semibold mt-4">
              Whether it’s your first therapy session or you’re returning to work on deeper patterns, I welcome you to” The MindSpace Centre” — where healing begins with understanding.
            </p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Brain className="w-16 h-16 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Mr. Ashish Sura</h4>
              <p className="text-blue-600 mb-4">Counselling Psychologist & Founder</p>
              <p className="text-gray-600 text-sm">
                Hi, I'm Ashish sura. I have a Master's degree in Psychology with Post Graduation Diploma in Guidance and counselling and I'm trained in more than 10 different therapies. I've had the privilege of helping over 300+ clients through
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At The MindSpace Centre, our mission is to break the silence around mental health and create a safe, stigma-free space where every person feels understood, accepted, and supported. We believe mental health struggles aren’t something to hide or be ashamed of—they’re part of being human. Through compassionate conversations and practical therapy, we help individuals move beyond labels and find real healing, clarity, and strength in their everyday lives.
            </p>
          </div>
        </div>

        <JoinUsSection />
      </div>
    </div>
  );
};

export default AboutSection;