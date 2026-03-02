"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-20 px-6 bg-[#f8f6f2]">
      <div className="max-w-4xl mx-auto text-center">
        {/*Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-gray-900 leading-tight"
        >
          A Place for Fun, Relaxation & Celebration
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 leading-relaxed"
        >
          Each experience here blends nature&apos;s calm with memorable activities
          designed for families, friends and groups.
        </motion.p>

      </div>
    </section>
  );
}