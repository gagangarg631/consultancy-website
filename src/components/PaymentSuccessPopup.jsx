import { CheckCircle } from 'lucide-react';

export default function PaymentSuccessPopup({ mode = 'online' }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full text-center animate-fadeInScale">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full animate-ping-once">
            <CheckCircle size={48} className="text-green-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h2>
        <p className="text-gray-700">
          Thank you for your booking.
        </p>
        <p className="text-gray-600 mt-1 mb-4">
          Our psychologist will contact you shortly.
        </p>

        {mode === 'clinic' && (
          <a
            href="https://maps.app.goo.gl/1yWyXNcgQjjZy8XB7?g_st=com.google.maps.preview.copy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 underline"
          >
            View on Google Maps
          </a>
        )}
      </div>
    </div>
  );
}
