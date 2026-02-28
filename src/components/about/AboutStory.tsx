"use client";

import { motion, Variants, Transition } from "framer-motion";

// Container variant for staggering children
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Fade-up variant with TypeScript-friendly easing
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1], // cubic-bezier easeOut
    } as Transition,
  },
};

export default function AboutStory() {
  return (
    <section className="relative bg-gradient-to-b from-[#f8f6f2] via-white to-[#f8f6f2] pt-12 pb-32 sm:pt-16 sm:pb-40 overflow-hidden">

      {/* Floating soft circles */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-green-100/40 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-yellow-100/30 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Label */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="tracking-[0.5em] text-xs text-gray-500 font-[var(--font-montserrat)]"
        >
          OUR STORY
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 text-5xl sm:text-6xl font-semibold font-[var(--font-playfair)] text-gray-900 leading-[1.15]"
        >
          About Vrindavan Farms
        </motion.h2>

        {/* Animated underline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 mx-auto w-24 h-[2px] bg-green-600 rounded-full"
        />

        {/* Paragraphs with staggered fade-up */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 space-y-8 text-gray-700 text-lg sm:text-xl leading-[2.1] font-[var(--font-jakarta)] font-medium"
        >
          <motion.p
            variants={fadeUp}
            className="bg-white/30 rounded-xl p-6 shadow-lg backdrop-blur-sm"
          >
            Vrindavan Farms was created to give people a{" "}
            <span className="font-semibold text-green-700">peaceful escape</span>{" "}
            from busy city life. Surrounded by greenery and wide open lawns, it is
            a place where <span className="font-semibold">families, friends, and colleagues</span>{" "}
            can relax, celebrate, and enjoy quality time in nature.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="bg-white/30 rounded-xl p-6 shadow-lg backdrop-blur-sm"
          >
            With <span className="font-semibold text-green-700">five premium rooms</span>,{" "}
            <span className="font-semibold">delicious homemade food</span>, swimming pool, rain dance, indoor & outdoor games, 
            and a spacious lawn for events, we provide everything in one destination. 
            From day picnics to grand celebrations, Vrindavan Farms ensures every moment feels{" "}
            <span className="font-semibold text-green-700">special and stress-free</span>.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}