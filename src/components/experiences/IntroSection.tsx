"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold leading-tight"
        >
          A Place for Fun, Relaxation & Celebration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto"
        >
          Each experience here blends nature&apos;s calm with memorable activities
          designed for families, friends and groups.
        </motion.p>

      </div>
    </section>
  );
}