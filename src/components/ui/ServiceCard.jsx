import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service, actionCentered = false }) => {
  const IconComponent = service.icon;

  const navigate = useNavigate();

  const handleGoToBookSession = () => {
    const { amount, title, description } = service;
    const sessionInfo = { amount, title, description };
    navigate('/book-session', { state: sessionInfo });
  };
  
  return (
    <div className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow relative" style={{ backgroundColor: service.bgColor ?? 'white'}}>
      <div className="mb-4">
        <IconComponent className={`w-8 h-8 ${service.color}`} />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      
      {service.link ? (
        <button 
          onClick={() => navigate(service.link)} 
          className={`text-blue-600 font-semibold hover:text-blue-700 flex items-center ${actionCentered ? 'mx-auto' : ''}`}
        >
          Know more {!actionCentered && <ArrowRight className="w-4 h-4 ml-1" />}
        </button>
      ) : (
        <button 
          onClick={handleGoToBookSession} 
          className={`text-blue-600 font-semibold hover:text-blue-700 flex items-center ${actionCentered ? 'mx-auto' : ''}`}
        >
          Book now {!actionCentered && <ArrowRight className="w-4 h-4 ml-1" />}
        </button>
      )}
    </div>
  );
};

export default ServiceCard;