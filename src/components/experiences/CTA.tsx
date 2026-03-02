"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#f8f6f2] py-16 sm:py-20 md:py-24 px-6 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 sm:p-14 md:p-16 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xlfont-[var(--font-playfair)] font-bold text-gray-900 leading-tight">
          Ready to Experience Vrindavan Farms?
        </h2>

        <p className="mt-5 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Plan your perfect getaway filled with nature, fun activities,
          celebrations, and peaceful moments. Let us make your visit memorable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {/* Primary Button */}
          <Link
            href="/booking"
            className="px-8 py-3 bg-green-700 text-white rounded-full font-semibold text-base hover:bg-green-800 transition-all duration-300 shadow-md"
          >
            Book Your Experience
          </Link>

          {/* Secondary Button */}
          <Link
            href="/packages"
            className="px-8 py-3 border border-green-700 text-green-700 rounded-full font-semibold text-base hover:bg-green-700 hover:text-white transition-all duration-300"
          >
            View Packages
          </Link>
        </div>
      </motion.div>
    </section>
  );
}