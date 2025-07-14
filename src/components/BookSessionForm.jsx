import React, { useState } from 'react';

const BookingForm = ({ submitted, formData, setFormData }) => {

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can send this data to Firebase, a backend server, or trigger Razorpay
  };

  return (
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
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
        </div>

        <div className="flex gap-2 md:flex-row flex-col">
            <input
                type="number"
                name="phone"
                placeholder="Your Phone"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
                required
            />
        </div>

        <input
          type="date"
          name="date"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.time}
          onChange={handleChange}
          required
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
        //   type="submit"
            onClick={submitted}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
  );
};

export default BookingForm;
