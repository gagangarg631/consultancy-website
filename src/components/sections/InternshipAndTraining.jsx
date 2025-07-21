const InternshipAndTraining = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 rounded-2xl bg-green-100 p-6">Internship & Training for Aspiring Psychologists</h1>

      <div className="rounded-2xl bg-green-50 p-6">
        <p className="mb-2">
          At The MindSpace Centre, we believe learning should feel real, practical, and supportive — just like therapy itself. Our Internship and Training Program is designed for psychology students and aspiring professionals who want to move beyond theory and gain hands-on experience in real-world counselling settings.
        </p>
        <p className="mb-4">
          Whether you're a graduate, postgraduate, or early-career professional, this program helps you build confidence, learn structured therapy techniques, and understand how counselling works in actual practice.
        </p>
      </div>

      <div className="rounded-2xl bg-pink-50 p-6 mt-6">

      
      <h2 className="text-2xl font-semibold mb-4">What You’ll Learn:</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Basics of counselling and therapy setup</li>
        <li>Introduction to CBT, DBT, and client handling</li>
        <li>Psychological assessment and documentation</li>
        <li>Building rapport and active listening techniques</li>
        <li>Case discussions and role-plays</li>
        <li>Ethical guidelines and professional boundaries</li>
        <li>Real-life client handling under supervision (as applicable)</li>
        <li>Personal growth and professional skill-building</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Who Can Join:</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>BA / MA / MSc Psychology students</li>
        <li>Aspiring counselling psychologists</li>
        <li>College students exploring mental health careers</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">Program Duration & Pricing:</h2>
      <div className="text-black">
        <p className="mb-4">(Choose as per your need)</p>

        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm font-semibold text-black">
                <th className="pb-2 border-b border-black">Program Type</th>
                <th className="pb-2 border-b border-black">Duration</th>
                {/* <th className="pb-2 border-b border-black">Fees (INR)</th> */}
              </tr>
            </thead>
            <tbody className="text-sm text-black">
              <tr>
                <td>Short-Term Internship</td>
                <td>2 Weeks (Online/Offline)</td>
                {/* <td>₹2,500</td> */}
              </tr>
              <tr>
                <td>Practical Training Program</td>
                <td>1 Month (Blended)</td>
                {/* <td>₹4,500</td> */}
              </tr>
              <tr>
                <td>Professional Training + Supervision</td>
                <td>3 Months (Certificate Program)</td>
                {/* <td>₹12,000</td> */}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="italic text-black mt-4 text-md">
          All programs include certification, guidance sessions, and interactive workshops.
        </p>
      </div>


      <h2 className="text-2xl font-semibold mt-8 mb-2">Why Choose Our Program?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Practical, non-theoretical learning</li>
        <li>Supervision from a practising counselling psychologist</li>
        <li>Focus on skills actually used in therapy rooms</li>
        <li>Small group size for personal guidance</li>
        <li>Supportive, judgment-free learning space</li>
      </ul>

    </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-2">How to Apply:</h2>
      <p className="text-black">
        Contact us at{' '}
        <a href="mailto:ashishsura007@gmail.com" className="text-blue-600 underline hover:text-blue-800">
          ashishsura007@gmail.com
        </a>{' '}
        or call{' '}
        <a href="tel:+917027635300" className="text-green-600 underline hover:text-green-800">
          70276-35300
        </a>{' '}
        to get the next batch details.
      </p>

    </div>
  );
};

export default InternshipAndTraining;
