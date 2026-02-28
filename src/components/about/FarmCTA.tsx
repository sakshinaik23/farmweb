"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FarmCTA() {
  return (
    <section className="relative w-full h-[85vh] min-h-[650px] overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/cta-bg.webp"
        alt="Vrindavan Farms"
        fill
        priority
        className="object-cover brightness-110"
      />

      {/* Softer Overlay (lighter than before) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-center lg:justify-between text-white">

        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl text-center lg:text-left"
        >
          {/* Small Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.5em] text-xs text-white font-[var(--font-montserrat)]"
          >
            Plan Your Escape
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-6 text-5xl sm:text-6xl font-bold leading-tight text-white"
          >
            Experience Nature, Comfort
            <span className="block text-white">
              & Unforgettable Moments
            </span>
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 text-white/90 text-lg leading-relaxed"
          >
            Whether it's a peaceful family getaway, a birthday celebration,
            or a corporate retreat — Vrindavan Farms offers the perfect
            setting to create beautiful memories.
          </motion.p>
        </motion.div>

        {/* Right Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-0 flex flex-col sm:flex-row gap-6"
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold transition-all duration-300 shadow-2xl text-center text-lg"
          >
            Book Now
          </Link>

          <Link
            href="/experiences"
            className="px-8 py-4 border-2 border-white hover:bg-white hover:text-black rounded-full font-semibold transition-all duration-300 text-center text-lg"
          >
            Explore Experiences
          </Link>
        </motion.div>

      </div>
    </section>
  );
}