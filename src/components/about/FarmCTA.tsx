"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StayBookingCTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about-cta.webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Experience Nature & Comfort
          <span className="block">
            Create Beautiful Moments
          </span>
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-200 mt-6 mb-10 max-w-2xl mx-auto"
        >
          The perfect setting for peaceful stays and special occasions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold transition-all duration-300 shadow-2xl text-center text-base sm:text-lg"
          >
            Book Now
          </Link>

          <Link
            href="/experiences"
            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-white hover:bg-white hover:text-black rounded-full font-semibold transition-all duration-300 text-center text-base sm:text-lg"
          >
            Explore Experiences
          </Link>
        </motion.div>

      </div>
    </section>
  );
}