"use client";

import { motion } from "framer-motion";
import { Cake, Briefcase, Heart, Users } from "lucide-react";

const events = [
  {
    title: "Birthday Celebrations",
    desc: "Celebrate unforgettable birthdays with pool parties, lawn decorations, music, and bonfire evenings.",
    icon: Cake,
  },
  {
    title: "Corporate Outings",
    desc: "Host productive and refreshing team outings with open lawns, activities, and peaceful surroundings.",
    icon: Briefcase,
  },
  {
    title: "Pre-Wedding & Couple Events",
    desc: "Beautiful natural backdrops and private lawns perfect for intimate couple celebrations and photoshoots.",
    icon: Heart,
  },
  {
    title: "Family Get-Togethers",
    desc: "Spacious stay options and engaging activities ideal for memorable family gatherings.",
    icon: Users,
  },
];

export default function EventTypesSection() {
  return (
    <section className="relative py-28 bg-[#f8f6f2] overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-green-100 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="text-center mb-20"
        >
          {/* Small Label */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.5em] text-xs text-gray-500"
          >
            Events
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7 }}
            className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900"
          >
            Celebrate Every Occasion With Us
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From birthdays to corporate outings — host unforgettable events surrounded by nature.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {events.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-700 transition-all duration-500">
                  <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}