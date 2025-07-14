import ServiceCard from '../ui/ServiceCard';
import { keyServices } from '../../data/services';
import { useNavigate } from 'react-router-dom';

const HomeSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Because healing starts with being heard.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Welcome to The Mindspace Centre, where your mental health journey begins with compassion, 
            understanding, and professional expertise. We provide safe, confidential, and effective 
            psychological support in Hindi and English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Explore Our Services
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {keyServices.map((service) => (
            <ServiceCard key={service.id} service={service} actionCentered />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;