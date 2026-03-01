"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[35vh] min-h-[320px] overflow-hidden">

      {/* Background Image with subtle zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/stay-hero.webp"
          alt="About Vrindavan Farms"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />

      {/* Soft Glow Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-green-700/30 blur-[120px] opacity-60" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4 sm:px-8">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="uppercase text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide font-[var(--font-playfair)] leading-tight sm:leading-snug"
        >
          Stay With Us
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] bg-white mt-3 sm:mt-4"
        />

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 sm:mt-4 text-xs xs:text-sm flex flex-wrap justify-center gap-1 xs:gap-2"
        >
          <Link
            href="/"
            className="text-white/80 hover:text-orange-400 transition-colors duration-300"
          >
            Home
          </Link>

          <span className="text-white/50">/</span>

          <Link
            href="/about"
            className="text-white/80 hover:text-orange-400 transition-colors duration-300"
          >
            Stay
          </Link>
        </motion.div>
      </div>
    </section>
  );
}