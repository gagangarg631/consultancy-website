import { useEffect, useState } from "react";

export default function SlotBookingForm({ availableSlots, bookedSlots, onSlotSelected, mode, loading = false }) {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: "",
  });


  const handleDateChange = (e) => {
    setFormData({ ...formData, date: e.target.value, time: "" });
  };

  const handleTimeSelect = (slot) => {
    const updatedData = { ...formData, time: slot };
    setFormData(updatedData);
    onSlotSelected(updatedData)
  };

  const isSlotBooked = (date, slot) =>
    bookedSlots[date]?.includes(slot);

  const getAvailableSlots = () => availableSlots[mode] || [];

  const formatDate = (inputDate) => {
    const date = new Date(inputDate);

    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);

    return formattedDate;
  }

  return (
    <div className="mx-auto space-y-6">
      <label className="block">
        <span className="text-gray-700 font-medium">Select a Date</span>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleDateChange}
          className="mt-1 w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>

      {formData.date && !loading && (
        <div>
          <h3 className="text-gray-700 font-medium mb-2">Available Slots</h3>
          <div className="grid gap-3 grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
            {getAvailableSlots().map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => handleTimeSelect(slot)}
                disabled={isSlotBooked(formData.date, slot)}
                className={`p-2 rounded-lg border text-center transition ${
                  formData.time === slot
                    ? "bg-blue-600 text-white"
                    : isSlotBooked(formData.date, slot)
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-blue-100 text-gray-700"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <h3 className="text-gray-700 font-medium text-center text-green-700 font-semibold">Fething available Slots...</h3>
      )}

      {formData.time && (
        <div className="text-green-600 font-medium mt-2">
          Selected Slot: {formatDate(formData.date)} at {formData.time}
        </div>
      )}
    </div>
  );
}
