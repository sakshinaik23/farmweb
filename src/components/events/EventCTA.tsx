"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function EventCTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/experience/hero.png"
        alt="Book Event"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-105"
      />

      {/* Gradient Overlay (better than solid black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        {/* Small Label */}
        <p className="uppercase tracking-[0.4em] text-xs text-white/70">
          Let’s Celebrate Together
        </p>

        {/* Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Plan Your Event With Us
        </h2>

        {/* Subtext */}
        <p className="mt-6 text-white/80 text-sm sm:text-base max-w-xl mx-auto">
          Connect with our team to customize your celebration and create
          unforgettable memories at Vrindavan Farms.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* WhatsApp */}
          <Link
            href="https://wa.me/918767048880"
            target="_blank"
            className="px-10 py-4 bg-green-700 text-white rounded-full font-semibold 
                       hover:bg-green-800 hover:scale-105 active:scale-95 
                       transition-all duration-300 shadow-xl"
          >
            Enquire on WhatsApp
          </Link>

          {/* Instagram */}
          <Link
            href="https://www.instagram.com/vrindavan__farms/"
            target="_blank"
            className="px-10 py-4 border border-white text-white rounded-full font-semibold 
                       hover:bg-white hover:text-black hover:scale-105 active:scale-95 
                       transition-all duration-300"
          >
            View Instagram
          </Link>

        </div>
      </motion.div>
    </section>
  );
}