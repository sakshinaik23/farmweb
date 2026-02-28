"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 5, suffix: "+", label: "Premium Rooms" },
  { number: 50, suffix: "+", label: "Events Hosted" },
  { number: 1000, suffix: "+", label: "Happy Guests" },
  { number: 5, suffix: "+", label: "Years of Experience" },
];

export default function FarmStats() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f8f6f2] via-white to-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.5em] text-xs text-gray-500 font-[var(--font-montserrat)]">
            Our Journey in Numbers
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Trusted by Families & Celebrations
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-3xl py-12 px-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <h3 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-orange-400 bg-clip-text text-transparent">
                <CountUp
                  end={stat.number}
                  duration={1.5}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </h3>

              <p className="mt-4 text-sm uppercase tracking-wider text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}