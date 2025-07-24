import React from 'react';
import { image2, image3, image6 } from '../assets';

const JourneySection = () => {
  return (
    <section className="mb-12 md:flex md:items-start md:justify-between p-8 rounded-3xl" style={{ backgroundColor: 'rgb(147 172 252 / 39%)' }}>
      {/* Text Section */}
      <div className="md:w-2/3 space-y-3 text-gray-800 text-lg leading-relaxed">
        <h3 className="text-3xl md:text-5xl mb-10 font-semibold leading-[32px] md:leading-[56px]">A Journey to Healing, A Path to Growth together ✨{'\t'}🧠</h3>
        <p>
          At The MindSpace Centre, we believe every mind deserves a safe, non-judgmental space to heal and grow. Founded by <b>Ashish Sura</b>, a counselling psychologist, The MindSpace Centre is where real conversations help you work through stress, anxiety, past hurts, and everyday struggles.
        </p>
        <p>
          Whether you're an adolescent, adult, or family — your story matters. Therapy here is practical, personalized, and paced as per your comfort. Together, we focus on understanding your patterns, breaking what holds you back, and building coping skills that actually work for your life.
        </p>
        <p>
          <i>
            At The MindSpace Centre, it's not about 'fixing' you. It's about supporting you as you understand yourself better and move towards healthier living.
          </i>
        </p>
        <p><b>You're welcome here.</b></p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 mt-10 md:mt-0 flex flex-col items-center space-y-6">
        <div className="rounded-2xl overflow-hidden p-1">
          <img
            src={image6}
            alt="Founder in cafe"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
