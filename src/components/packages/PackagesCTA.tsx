"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PackagesCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

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

      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold mb-6"
        >
          Ready to Book Your Stay?
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto"
        >
          Contact us now to confirm availability and secure your dates at
          Vrindavan Farms.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://wa.me/918767048880"
            target="_blank"
            className="inline-block px-10 py-4 bg-green-800 text-white rounded-full text-sm font-semibold tracking-wide hover:bg-green-600 transition duration-300 shadow-lg"
          >
            WhatsApp Booking
          </Link>
        </motion.div>

      </div>
    </section>
  );
}