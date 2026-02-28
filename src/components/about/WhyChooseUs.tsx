"use client";

import { motion } from "framer-motion";
import {
  Home,
  Utensils,
  Trees,
  Waves,
  HeartHandshake,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Premium Rooms",
    desc: "Spacious, clean, and peaceful rooms designed for complete comfort.",
  },
  {
    icon: Utensils,
    title: "Authentic Homemade Food",
    desc: "Freshly prepared meals with local flavors and hygienic ingredients.",
  },
  {
    icon: Waves,
    title: "Pool & Rain Dance",
    desc: "Fun-filled water activities for families, kids, and friends.",
  },
  {
    icon: Trees,
    title: "Open Green Lawns",
    desc: "Perfect space for weddings, birthdays & corporate celebrations.",
  },
  {
    icon: HeartHandshake,
    title: "Warm Hospitality",
    desc: "Friendly staff ensuring every guest feels welcomed and cared for.",
  },
  {
    icon: Sparkles,
    title: "Stress-Free Experience",
    desc: "From booking to celebration, we handle everything smoothly.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-[#f8f6f2] overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-green-100 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.5em] text-xs text-gray-500 font-[var(--font-montserrat)]">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold bg-gray-900 bg-clip-text text-transparent">
            The Vrindavan Farms Difference
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-700 transition-all duration-500">
                  <Icon className="w-6 h-6 text-green-700 group-hover:text-white transition-all duration-500" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

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