"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PackagesHero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <Image
        src="/images/packages_bg.png"
        alt="Vrindavan Farms Packages"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          Stay Packages at Vrindavan Farms
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90">
          Premium farm stays designed for couples, families and group celebrations.
        </p>
      </motion.div>
    </section>
  );
}