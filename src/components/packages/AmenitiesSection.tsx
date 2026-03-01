"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Waves,
  Flame,
  Trees,
  Tv,
  Activity,
  MapPin,
} from "lucide-react";

const items = [
  {
    title: "Swimming Pool",
    desc: "Relax and refresh in our spacious and well-maintained pool.",
    icon: Waves,
  },
  {
    title: "Rain Dance",
    desc: "Fun-filled rain dance sessions with music and energy.",
    icon: Activity,
  },
  {
    title: "Multiple Lawns",
    desc: "Large open green lawns for games, events and gatherings.",
    icon: Trees,
  },
  {
    title: "Free WiFi",
    desc: "Stay connected while enjoying your peaceful farm stay.",
    icon: Wifi,
  },
  {
    title: "AC & TV Rooms",
    desc: "Comfortable rooms equipped with AC and television.",
    icon: Tv,
  },
  {
    title: "Bonfire Nights",
    desc: "Memorable evenings with bonfire and group activities.",
    icon: Flame,
  },
  {
    title: "Private Garden",
    desc: "Dedicated private garden spaces for relaxation.",
    icon: Trees,
  },
  {
    title: "River Nearby",
    desc: "Beautiful river at walking distance from the property.",
    icon: MapPin,
  },
];

export default function AmenitiesSection() {
  return (
    <section className="bg-gray-100 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800">
            Amenities & Facilities
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Designed to deliver comfort, fun, and unforgettable experiences in a serene farm setting.
          </p>
        </motion.div>

        {/* Icon Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 text-center">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                {/* Circular Icon */}
                <div className="w-24 h-24 rounded-full bg-green-800 flex items-center justify-center shadow-lg">
                  <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-semibold text-green-800">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-[240px]">
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