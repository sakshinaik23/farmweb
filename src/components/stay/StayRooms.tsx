"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const rooms = [
  {
    image: "/images/room1.webp",
    title: "Premium Garden View Room",
    highlights: ["Attached Washroom", "Spacious Interiors", "Peaceful Surroundings"],
  },
  {
    image: "/images/room2.webp",
    title: "Premium Family Comfort Room",
    highlights: ["Ideal for Families", "Comfort Bedding", "Clean & Hygienic"],
  },
  {
    image: "/images/room3.webp",
    title: "Premium Group Stay Room",
    highlights: ["Perfect for Groups", "Private Space", "Airy & Bright"],
  },
  {
    image: "/images/room4.webp",
    title: "Premium Lawn Facing Room",
    highlights: ["Scenic Views", "Relaxed Ambience", "Spacious Layout"],
  },
  {
    image: "/images/room5.webp",
    title: "Premium Deluxe Room",
    highlights: ["Elegant Interiors", "Comfort & Privacy", "Modern Amenities"],
  },
  {
    image: "/images/room6.webp",
    title: "Premium Comfort Suite",
    highlights: ["Spacious Layout", "Peaceful Stay", "Family Friendly"],
  },
];

const containerVariant: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function StayRooms() {
  return (
    <section className="py-16 md:py-15 bg-[#f8f6f2] px-4 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-[var(--font-playfair)] font-bold text-gray-900">
            Our Premium Rooms
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Comfortable, spacious and thoughtfully designed rooms for a peaceful farmhouse stay.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 backdrop-blur-sm text-green-800 text-[10px] md:text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Premium
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-green-800 transition">
                  {room.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                  {room.highlights.map((item, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs bg-green-50 text-green-800 px-2 md:px-3 py-1 rounded-full border border-green-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <Link
                  href="/booking"
                  className="inline-block mt-4 md:mt-6 text-[10px] md:text-xs font-semibold tracking-wider text-green-800 uppercase hover:underline"
                >
                  Check Availability →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}