import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { image3 } from '../assets';

const FounderSection = () => {
    const navigate = useNavigate();

  return (
    <section className="p-6 md:flex md:items-center md:justify-between">
      {/* Text Content */}
      <div className="md:w-1/2 space-y-6">
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

        <button 
            className="mt-4 px-6 py-3 text-white rounded-lg font-medium bg-blue-600 transition"
            onClick={() => navigate('/about')}
        >
          More about my Journey
        </button>
      </div>

      {/* Images and Name */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex flex-col items-end relative">
        {/* <div className="relative w-full flex justify-center">
          <img
            src={image6}
            alt="Founder"
            className="w-48 h-60 object-cover rounded-xl shadow-lg z-10"
          />
          <img
            src={img1}
            alt="Founder Speaking"
            className="w-40 h-52 lg:block hidden object-cover rounded-xl shadow-md absolute right-0 bottom-[-20px] z-0"
          />
        </div> */}
        <div className="md:w-2/3 mt-10 md:mt-0 flex flex-col items-center space-y-6">
          <div className="rounded-2xl overflow-hidden p-1">
            <img
              src={image3}
              alt="Founder in cafe"
              className="rounded-2xl object-cover w-full h-auto"
            />
          </div>
          <h3 className="mt-6 text-lg font-semibold text-gray-800">Psychologist & Founder</h3>
        </div>

      </div>
    </section>
  );
};

export default FounderSection;
