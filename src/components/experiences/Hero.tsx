"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen overflow-hidden text-white">
      
      {/* Background Image */}
      <Image
        src="/images/experience/hero.png"
        alt="Experiences at Vrindavan Farms"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 max-w-5xl mx-auto min-h-[85vh] md:min-h-screen"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Experiences at <span className="text-green-400">Vrindavan Farms</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
          At Vrindavan Farms, we combine nature, comfort, and exciting activities
          to create memorable experiences for families, friends, and corporate groups.
        </p>
      </motion.div>
    </section>
  );
}