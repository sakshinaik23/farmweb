"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EventEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Your enquiry has been submitted. We will contact you shortly.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      guests: "",
      message: "",
    });
  };

  return (
    <section className="relative py-5 sm:py-10 bg-[#f8f6f2] overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute -top-40 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-green-100 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs text-gray-500">
            Enquiry
          </p>

          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-bold text-gray-900">
            Plan Your Event With Us
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Share your event details and our team will contact you with
            availability and pricing.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white/90 backdrop-blur-md 
                     p-6 sm:p-10 md:p-12 
                     rounded-2xl sm:rounded-3xl 
                     shadow-xl sm:shadow-2xl 
                     border border-white/40 
                     transition-all duration-500"
        >
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-green-100 via-transparent to-orange-100 opacity-20 pointer-events-none"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">

            {/* Full Name */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 
                           rounded-lg sm:rounded-xl 
                           border border-gray-300 bg-white 
                           focus:outline-none focus:ring-2 
                           focus:ring-green-700 focus:border-green-700 
                           transition-all duration-300"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">
                Contact Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 
                           rounded-lg sm:rounded-xl 
                           border border-gray-300 bg-white 
                           focus:outline-none focus:ring-2 
                           focus:ring-green-700 focus:border-green-700 
                           transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 
                           rounded-lg sm:rounded-xl 
                           border border-gray-300 bg-white 
                           focus:outline-none focus:ring-2 
                           focus:ring-green-700 focus:border-green-700 
                           transition-all duration-300"
              />
            </div>

            {/* Event Type */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">
                Event Type
              </label>
              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="mt-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 
                           rounded-lg sm:rounded-xl 
                           border border-gray-300 bg-white 
                           focus:outline-none focus:ring-2 
                           focus:ring-green-700 focus:border-green-700 
                           transition-all duration-300"
              >
                <option value="">Select Event</option>
                <option>Birthday Celebration</option>
                <option>Corporate Outing</option>
                <option>Pre-Wedding Event</option>
                <option>Family Get-Together</option>
              </select>
            </div>

            {/* Event Date */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">
                Preferred Event Date
              </label>
              <input
                type="date"
                name="eventDate"
                required
                value={formData.eventDate}
                onChange={handleChange}
                className="mt-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 
                           rounded-lg sm:rounded-xl 
                           border border-gray-300 bg-white 
                           focus:outline-none focus:ring-2 
                           focus:ring-green-700 focus:border-green-700 
                           transition-all duration-300"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-800">
                Expected Guests
              </label>
              <input
                type="number"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="mt-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 
                           rounded-lg sm:rounded-xl 
                           border border-gray-300 bg-white 
                           focus:outline-none focus:ring-2 
                           focus:ring-green-700 focus:border-green-700 
                           transition-all duration-300"
              />
            </div>

          </div>

          {/* Message */}
          <div className="mt-6 sm:mt-8 flex flex-col">
            <label className="text-sm font-medium text-gray-800">
              Additional Details
            </label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full px-3 sm:px-4 py-2.5 sm:py-3 
                         rounded-lg sm:rounded-xl 
                         border border-gray-300 bg-white 
                         focus:outline-none focus:ring-2 
                         focus:ring-green-700 focus:border-green-700 
                         transition-all duration-300"
              placeholder="Tell us more about your event..."
            />
          </div>

          {/* Submit Button */}
          <div className="mt-8 sm:mt-10 text-center">
            <button
              type="submit"
              className="px-8 sm:px-12 py-3 sm:py-4 
                         bg-green-700 text-white 
                         rounded-full font-semibold 
                         text-sm sm:text-base
                         hover:bg-green-800 hover:scale-[1.03] 
                         active:scale-95 transition-all duration-300 
                         shadow-lg"
            >
              Submit
            </button>
          </div>

        </motion.form>

      </div>
    </section>
  );
}