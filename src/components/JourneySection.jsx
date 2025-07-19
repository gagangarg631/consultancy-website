import React from 'react';

const JourneySection = () => {
  return (
    <section className="mb-12 md:flex md:items-start md:justify-between p-8 rounded-3xl" style={{ backgroundColor: 'rgb(147 172 252 / 39%)' }}>
      {/* Text Section */}
      <div className="md:w-2/3 space-y-6 text-gray-800 text-lg leading-relaxed">
        <p>
          At The MindSpace Centre, we understand that life can feel overwhelming at times. Whether it’s stress that won’t ease, anxiety that quietly builds, or past wounds that still hurt — every mind needs a safe, understanding space to heal and grow.
        </p>

        <p>
          Founded by Ashish Sura, a practising counselling psychologist, The MindSpace Centre isn’t just a clinic — it’s a space where you’re heard without judgment and supported with practical, real-world guidance. I’ve worked with adolescents, adults, and families, and I know that each person’s story is different. That’s why therapy here is never one-size-fits-all.
        </p>

        <p>
          We help people work through everyday struggles like stress, anxiety, low mood, and relationship issues, as well as deeper concerns like trauma, identity confusion, and emotional overwhelm. My approach is simple: listen deeply, work practically, and move at your pace. Together, we break patterns that hold you back and build small steps that move you forward.
        </p>

        <p>
          At MindSpace, therapy isn’t about ‘fixing’ you. It’s about walking with you, helping you understand yourself better, and finding ways to cope that actually fit your life.
        </p>

        <p><b>You don’t have to struggle alone. You’re welcome here.</b></p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 mt-10 md:mt-0 flex flex-col items-center space-y-6">
        <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 p-1 bg-white">
          <img
            src="https://via.placeholder.com/300x200.png?text=Cafe+Image"
            alt="Founder in cafe"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-md border border-green-200 p-1 bg-white">
          <img
            src="https://via.placeholder.com/300x200.png?text=Namaste+Image"
            alt="Founder greeting"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
