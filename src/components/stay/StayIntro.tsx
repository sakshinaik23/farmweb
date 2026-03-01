"use client";

import { motion } from "framer-motion";

export default function StayIntro() {
  return (
    <section className="py-20 px-6 bg-[#f8f6f2]">
      <div className="max-w-4xl mx-auto text-center">

        {/* Small Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="uppercase tracking-[4px] text-sm text-green-800 font-medium mb-4"
        >
          Peaceful Farmhouse Living
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-[var(--font-playfair)] text-gray-900 leading-tight"
        >
          Experience Comfort in Nature
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 leading-relaxed"
        >
          Wake up to fresh air, open greenery and peaceful surroundings. 
          Our premium rooms are designed for family and group comfort, 
          offering a clean, relaxing and private farmhouse experience 
          away from city noise.
        </motion.p>

      </div>
    </section>
  );
}