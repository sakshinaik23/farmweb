"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function StayBookingCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden ">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/stay-cta1.webp')", // replace with your premium image
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-4xl mx-auto text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold mb-6"
        >
          Ready to Experience a Peaceful Farm Stay?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Escape the city noise and enjoy comfortable rooms, fresh air,
          delicious meals, and relaxing moments at Vrindavan Farms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/booking"
            className="inline-block px-10 py-4 bg-green-800 text-white rounded-full text-sm font-semibold tracking-wide hover:bg-green-600 hover:text-white transition duration-300 shadow-lg"
          >
            Check Availability & Book Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}