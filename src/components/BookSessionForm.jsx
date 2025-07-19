import { useEffect, useState } from "react";
import db from "../firebase";
import SlotBookingForm from "./SlotBookingForm";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import Spinner from "./Spinner";
import getSessionLabel from "../data/sessionLabels";

const BookingForm = ({ submitted, formData, setFormData, loading = false }) => {

  const [loadingSlots, setLoadingSlots] = useState(false);

  const availableSlots = {
    online: [
      ...generateTimeSlots("08:30", "10:30", 60),
      ...generateTimeSlots("17:00", "20:00", 60)
    ],
    clinic: generateTimeSlots("11:00", "16:00", 60)
  };

  const [bookedSlots, setBookedSlots] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function getTimestampFromDateAndTime(dateStr, timeStr) {
    // dateStr = "2025-07-18"
    // timeStr = "08:00 AM"

    const [time, modifier] = timeStr.split(" "); // "08:00", "AM"
    let [hours, minutes] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    } else if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    // Construct timestamp string in ISO format: "2025-07-18T08:00:00"
    const isoString = `${dateStr}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`;

    return new Date(isoString).toISOString(); // JS Date object → will be stored as Firestore Timestamp
  }

  const selectSlot = (slot) => {
    const { date, time } = slot;
    setFormData({
        ...formData,
        date,
        time,
        timestamp: getTimestampFromDateAndTime(date, time)
      })
  }

  const fetchBookedSlots = async () => {
    setLoadingSlots(true);
    const snapshot = await getDocs(collection(db, "bookings"));
    const slotsBooked = {};

    snapshot.forEach((doc) => {
      const data = doc.data();

      // Only use `date` and `time` fields
      const { date, time } = data;

      if (date && time) {
        if (!slotsBooked[date]) slotsBooked[date] = [];
        slotsBooked[date].push(time);
      }
    });

    setBookedSlots(slotsBooked);
    setLoadingSlots(false);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.phone && formData.email && formData.date && formData.mode) {
      submitted();
    } else if (!formData.time) {
      alert('Please select a slot');
    } else {
      alert('Something went wrong! Please try again');
    }
  };

  function generateTimeSlots(startTime, endTime, interval = 30, gap = 30) {
    const slots = [];
    const [startHour, startMin] = startTime.split(":").map(Number);
    const [endHour, endMin] = endTime.split(":").map(Number);

    const start = new Date();
    start.setHours(startHour, startMin, 0, 0);

    const end = new Date();
    end.setHours(endHour, endMin, 0, 0);

    while (start < end) {
      const hours = start.getHours();
      const minutes = start.getMinutes();
      const formattedTime = formatAMPM(hours, minutes);
      slots.push(formattedTime);
      start.setMinutes(start.getMinutes() + interval + gap);
    }

    return slots;
  }

  function formatAMPM(hours, minutes) {
    const ampm = hours >= 12 ? "PM" : "AM";
    const hr = hours % 12 || 12;
    const min = minutes.toString().padStart(2, "0");
    return `${hr}:${min} ${ampm}`;
  }

  useEffect(() => {
    fetchBookedSlots();
  }, []);

  return (
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
    
        <div className="flex gap-2 md:flex-row flex-col">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {formData.sessionNumber && (
            <input
              type="email"
              name="email"
              placeholder="Your session"
              className="w-full border-green-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold text-green-700 text-lg"
              value={getSessionLabel(formData.sessionNumber)}
              disabled
            />
          )}
            
        </div>

        <div className="flex gap-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phone"
              placeholder="Your Phone"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.phone}
              onChange={handleChange}
              required
            />
        </div>

        <SlotBookingForm 
          availableSlots={availableSlots}
          bookedSlots={bookedSlots}
          onSlotSelected={selectSlot}
          mode={formData.mode}
          loading={loadingSlots}
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Additional Message (Optional)"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? <Spinner /> : 'Submit'}
        </button>
      </form>
  );
};

export default BookingForm;
