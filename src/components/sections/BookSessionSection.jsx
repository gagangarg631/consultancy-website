import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingForm from '../BookSessionForm';
import SessionModeSelector from '../ModeSelector';
import { contact } from '../../data/contact';
import { getLatestBookingByEmail } from '../../services/firestore/bookings';
import { useDebounce } from 'use-debounce';

const BookSessionSection = () => {
  const location = useLocation();
  const sessionInfo = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
    mode: 'online',
  });

  const [debouncedEmail] = useDebounce(formData.email, 500);

  const navigate = useNavigate();

  const goToPayment = () => {
    const data = {
      ...sessionInfo,
      formData,
      amount: sessionInfo.amount[formData.sessionNumber]
    }

    
    navigate('/book-session/payments', { state: data })
  }

  const selectMode = (mode) => {
    setFormData({ ...formData, mode })
  }


  const fetchLatestBooking = async () => {
    const docs = await getLatestBookingByEmail(debouncedEmail);
    if (docs.length > 0) {
      setFormData({ ...formData, sessionNumber: (docs[0].sessionNumber ?? 1) + 1 })
    } else {
      setFormData({ ...formData, sessionNumber: 1 })
    }
  }

  const isValidEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  useEffect(() => {
    if (debouncedEmail && isValidEmail(debouncedEmail)) {
      fetchLatestBooking();
    } else {
      setFormData({ ...formData, sessionNumber: null })
    }
  }, [debouncedEmail]);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Book Your Session</h2>
          <p className="text-xl text-gray-600">
            Taking the first step towards better mental health is just a click away.
          </p>
        </div>
        <div className="flex mx-auto justify-center gap-8 mt-10 sm:flex-row flex-col">
          <div className="w-full sm:w-2/5 gap-4 flex flex-col">
            <div className="shadow-md rounded-xl p-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{sessionInfo.title}</h3>
                {formData.sessionNumber && (
                  <h3 className="text-xl font-semibold text-green-700 mb-1">
                    ₹{(sessionInfo.amount[formData.sessionNumber]).toLocaleString("en-IN")}
                  </h3>
                )}
              </div>
              <p className="text-gray-600 mb-4">{sessionInfo.description}</p>
              <SessionModeSelector onSelect={selectMode} sessionMode={formData.mode} />
            </div>
            {formData.mode === "clinic" && (
              <div className="p-4 bg-blue-50 border border-blue-200 text-blue-800 text-sm rounded-md">
                <strong>Note:</strong> For clinic sessions, we’re currently associated with <strong>Holy Mind Care</strong>,
                under the consultation of <strong>Dr. Aman Mehta</strong> (Psychiatrist, MBBS, MD).
              </div>
            )}
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">{contact.email}</span>
                </div>
                {formData.mode === 'clinic' && (
                  <>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{contact.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{contact.timings}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl w-full sm:w-3/5 flex items-center justify-center">
            <BookingForm 
              submitted={goToPayment} 
              formData={formData} 
              setFormData={setFormData} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookSessionSection;