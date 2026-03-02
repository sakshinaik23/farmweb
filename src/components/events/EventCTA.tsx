"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EventsCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/experience/hero.png"
        alt="Plan Your Event at Vrindavan Farms"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-4xl mx-auto text-center text-white">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-xs text-white/70 mb-6"
        >
          Let’s Celebrate Together
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold mb-6 leading-tight"
        >
          Plan Your Event With Us
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Connect with our team to customize your celebration and create
          unforgettable memories at Vrindavan Farms.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Primary Button */}
          <Link
            href="https://wa.me/918767048880"
            target="_blank"
            className="inline-block px-10 py-4 bg-green-800 text-white rounded-full text-sm font-semibold tracking-wide hover:bg-green-600 transition duration-300 shadow-lg"
          >
            Enquire on WhatsApp
          </Link>

          {/* Secondary Button */}
          <Link
            href="https://www.instagram.com/vrindavan__farms/"
            target="_blank"
            className="inline-block px-10 py-4 border border-white text-white rounded-full text-sm font-semibold tracking-wide hover:bg-white hover:text-green-800 transition duration-300"
          >
            View Instagram
          </Link>
        </motion.div>

      </div>
    </section>
  );
}