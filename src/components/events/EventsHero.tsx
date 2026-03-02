"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventsHero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center text-center overflow-hidden">
      
      <Image
        src="/images/hero5.webp"
        alt="Events at Vrindavan Farms"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
          Celebrate Your Special Moments
        </h1>

        <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg">
          From birthdays to corporate outings — host unforgettable events surrounded by nature.
        </p>
      </motion.div>
    </section>
  );
}