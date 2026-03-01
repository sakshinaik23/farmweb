"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Heart, Sun } from "lucide-react";

const packages = [
  {
    title: "Group Stay",
    description:
      "Ideal for families and friends looking for a relaxing overnight farmhouse experience.",
    icon: Users,
  },
  {
    title: "Couple Stay",
    description:
      "Perfect for peaceful getaways with comfort, privacy and beautiful surroundings.",
    icon: Heart,
  },
  {
    title: "Day Picnic",
    description:
      "Enjoy full-day access to pool, lawn and activities without overnight stay.",
    icon: Sun,
  },
];

export default function StayPackagesSnapshot() {
  return (
    <section className="py-13 bg-[#f8f6f2] px-4 md:px-6 relative overflow-hidden ">

      {/* Soft Background Glow */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-green-100/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-4xl font-[var(--font-playfair)] font-bold text-gray-900">
            Stay Options & Packages
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose the perfect stay option that suits your group size and occasion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-tr from-green-200 to-green-400 text-gray-800 mb-6 group-hover:from-green-700 group-hover:to-green-500 group-hover:text-white transition-all duration-300 shadow-inner">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 transition duration-300 group-hover:text-green-700">
                  {pkg.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  {pkg.description}
                </p>

                {/* Link */}
                <Link
                  href="/packages"
                  className="inline-block px-6 py-2 text-sm font-medium rounded-full border border-gray-900 text-gray-900 hover:bg-green-700 hover:border-green-700 hover:text-white transition duration-300"
                >
                  View Details
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            href="/packages"
            className="inline-block px-10 py-4 bg-green-700 text-white rounded-full text-sm md:text-base font-semibold tracking-wide hover:bg-green-800 transition duration-300 shadow-lg hover:shadow-xl"
          >
            View Full Packages
          </Link>
        </div>

      </div>
    </section>
  );
}