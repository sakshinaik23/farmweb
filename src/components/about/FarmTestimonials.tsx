"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Family Guest",
    text: "Peaceful weekend getaway and warm hospitality. The greenery and open skies made it unforgettable.",
  },
  {
    name: "Rahul Mehta",
    role: "Birthday Celebration",
    text: "Everything was arranged perfectly. Loved it! The staff was extremely helpful and friendly.",
  },
  {
    name: "Sneha Patil",
    role: "Corporate Event",
    text: "Beautiful space for team outings and events. Great pool, lawn, and amazing food.",
  },
  {
    name: "Amit Kulkarni",
    role: "Weekend Stay",
    text: "Calm environment and amazing greenery. Truly a perfect escape from city life.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-[#fdfcf9] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-xs text-gray-400">
          Guest Experience
        </p>
        <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
          What Our Guests Say
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }} // move from start to half width
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {/* Duplicate testimonials for smooth scrolling */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/60 border border-white/70 shadow-xl rounded-3xl p-10 flex flex-col justify-between flex-shrink-0 w-150"
            >
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                “{item.text}”
              </p>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-5 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}