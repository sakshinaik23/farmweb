"use client";

import { motion } from "framer-motion";

const rules = [
  "50% advance payment required to confirm booking",
  "Check-in: 4 PM | Check-out: 2 PM",
  "Outside food and beverages are not allowed",
  "Children (3–9 years) charged at half rate",
  "Guests must follow property safety guidelines",
  "Any damage to property will be chargeable",
];

export default function StayGuidelines() {
  return (
    <section className="py-13 bg-[#f8f6f2] px-4 md:px-6 relative overflow-hidden  ">

      {/* Decorative Background Blurs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#d4f1d4]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ffe9c2]/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[var(--font-playfair)] font-bold text-gray-900">
            Stay Guidelines
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Kindly review the following guidelines to ensure a smooth, safe, and enjoyable experience at our farmhouse.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-[#f0ead6] overflow-hidden w-full md:w-[100%] h-[90%]"
            >

              <div className="relative flex items-start gap-5 p-6">

                {/* Number Badge */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-900 text-white text-base font-semibold shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-lg leading-relaxed">
                  {rule}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}