import { Instagram, Linkedin, QrCode } from 'lucide-react';
import whatsapp_qr from '../assets/whatsapp_qrcode.png';

const JoinUsSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-10 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Join Us on Social Media
        </h2>
        <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
          Be part of a growing community that cares. Connect with us on social platforms and stay updated with our journey in healing and growth.
        </p>

        <div className="grid gap-8 md:grid-cols-3 justify-center items-start">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/the_mindspace_centre?igsh=emMydWJzemR0aDNx&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-pink-50 shadow-md rounded-2xl px-6 py-8 flex flex-col items-center transition hover:scale-105 duration-300 h-full"
  >
    <div className="bg-pink-100 p-4 rounded-full mb-4">
      <Instagram className="text-pink-600 w-8 h-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600">Instagram</h3>
    <p className="text-sm text-gray-500 mt-2">Follow our updates</p>
  </a>

  {/* LinkedIn */}
  <a
    href="http://linkedin.com/in/ashish-sura-07900a233"
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-blue-50 shadow-md rounded-2xl px-6 py-8 flex flex-col items-center transition hover:scale-105 duration-300 h-full"
  >
    <div className="bg-blue-100 p-4 rounded-full mb-4">
      <Linkedin className="text-blue-700 w-8 h-8" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">LinkedIn</h3>
    <p className="text-sm text-gray-500 mt-2">Connect professionally</p>
  </a>

  {/* WhatsApp */}
  <div className="group bg-green-50 shadow-md rounded-2xl px-6 py-8 flex flex-col items-center transition hover:scale-105 duration-300 h-full">
    <div className="w-24 h-24 rounded-xl overflow-hidden border-green-300 shadow-sm">
      <img
        src={whatsapp_qr}
        alt="WhatsApp QR Code"
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-lg font-semibold text-green-600">WhatsApp</h3>
    <p className="text-sm text-gray-500 mt-2 mb-4 text-center">Scan to chat with us</p>
    
  </div>
</div>

      </div>
    </section>
  );
};

export default JoinUsSection;
