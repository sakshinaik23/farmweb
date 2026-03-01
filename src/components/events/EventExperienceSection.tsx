"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EventExperienceSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#f8f6f2] overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-green-100 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/packages_bg.png"
              alt="Event Experience"
              width={700}
              height={500}
              className="object-cover w-full h-[350px] md:h-[450px] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Small Label */}
          <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
            Experience
          </p>

          {/* Heading */}
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Perfect Blend of Nature & Celebration
          </h2>

          {/* Decorative Divider */}
          <div className="mt-6 w-20 h-1 bg-green-700 rounded-full"></div>

          {/* Description */}
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Spacious green lawns, refreshing swimming pool access, vibrant rain
            dance setups and cozy bonfire evenings — everything thoughtfully
            designed to create unforgettable celebrations in a serene and
            nature-filled environment.
          </p>

          {/* Supporting Points */}
          <ul className="mt-8 space-y-3 text-gray-800 text-sm md:text-base">
            <li>• Open lawns ideal for décor and entertainment</li>
            <li>• Pool & rain dance access for energetic events</li>
            <li>• Bonfire evenings for intimate gatherings</li>
            <li>• Peaceful surroundings for memorable moments</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}