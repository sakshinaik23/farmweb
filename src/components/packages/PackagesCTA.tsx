"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PackagesCTA() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/packages_cta_bg.png" 
        alt="Vrindavan Farms Booking"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to Book Your Stay?
        </h2>

        <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg">
          Contact us now to confirm availability and secure your dates at
          Vrindavan Farms.
        </p>

        <Link
          href="https://wa.me/918767048880"
          target="_blank"
          className="mt-8 inline-block px-8 py-4 bg-green-700 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-green-800 transition duration-300"
        >
          WhatsApp Booking
        </Link>
      </motion.div>
    </section>
  );
}