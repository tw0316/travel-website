"use client";
import React, { useState } from 'react';

const Maldives = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    destination: 'Maldives',
    travelDuration: '1-2 nights',
    numberOfPeople: 1,
    travelMonth: '',
  });

  // Handle form changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending data to an API.
    console.log('Form submitted', formData);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Maldives - Your Dream Vacation Awaits</h1>
        <p className="text-lg text-gray-700 mb-6">
          The Maldives is a paradise for travelers, known for its white sandy beaches, crystal-clear waters, and luxurious resorts. Whether you're looking for a relaxing retreat or an adventurous getaway, the Maldives offers something for everyone.
        </p>
      </div>

      {/* Images Section */}
      <div className="flex justify-center mb-12">
        <img
          src="/images/maldives-resort.jpg"
          alt="Maldives Resort"
          className="w-full max-w-4xl rounded-lg shadow-xl object-cover"
        />
      </div>

      {/* Travel Inquiry Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Your Dream Vacation is Just a Few Clicks Away!
        </h2>
        <p className="text-lg text-center text-black mb-8">
          Talk to an advisor about your travel goals, and they will start building your perfect vacation right away.
        </p>

        <form onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-black">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-black">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Email and Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-black">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Vacation Destination */}
          <div className="mb-6">
            <label htmlFor="destination" className="block text-black">Vacation Destination</label>
            <select
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            >
              <option value="Maldives">Maldives</option>
            </select>
          </div>

          {/* Travel Duration */}
          <div className="mb-6">
            <label htmlFor="travelDuration" className="block text-black">Travel Duration</label>
            <select
              id="travelDuration"
              name="travelDuration"
              value={formData.travelDuration}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="1-2 nights">1-2 nights</option>
              <option value="3-4 nights">3-4 nights</option>
              <option value="5-7 nights">5-7 nights</option>
              <option value="8+ nights">8+ nights</option>
            </select>
          </div>

          {/* Number of People */}
          <div className="mb-6">
            <label htmlFor="numberOfPeople" className="block text-black">Number of People</label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="1"
              required
            />
          </div>

          {/* Travel Month */}
          <div className="mb-6">
            <label htmlFor="travelMonth" className="block text-black">Month of Travel</label>
            <input
              type="month"
              id="travelMonth"
              name="travelMonth"
              value={formData.travelMonth}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Maldives;