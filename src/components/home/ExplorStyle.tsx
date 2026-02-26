"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ---------- Animation Variants ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ---------- Features Data ---------- */
const features = [
  {
    title: "Premium Rooms & Stay",
    desc: "Comfortable, clean rooms with amenities.",
    img: "/images/card-1.jpg",
    column: "right",
    color: "text-orange-400",
  },
  {
    title: "Celebrations & Events",
    desc: "Birthdays, pre-weddings, corporate events.",
    img: "/images/card-4.jpg",
    column: "left",
    color: "text-green-900",
  },
  {
    title: "Fun Activities for All Ages",
    desc: "Swimming, rain dance, indoor games.",
    img: "/images/card-3.jpg",
    column: "right",
    color: "text-orange-400",
  },
  {
    title: "Authentic Homemade Food",
    desc: "Fresh meals with local flavors.",
    img: "/images/card-2.jpg",
    column: "left",
    color: "text-green-900",
  },
];

export default function ExplorStyle() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <p className="font-oswald text-xs tracking-[0.32em] text-gray-500 mb-3 font-medium">
            WHAT'S YOUR TRAVEL STYLE?
          </p>
          <h2 className="font-oswald text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug drop-shadow-lg">
            Discover experiences at Vrindavan Farms
          </h2>
        </motion.div>

        {/* Zig-Zag Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">

          {/* Left Column */}
          <div className="flex flex-col gap-20 transform md:translate-x-20 md:translate-y-10">
            {features
              .filter((f) => f.column === "left")
              .map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" as const }}
                  className={`flex flex-col gap-2 ${idx === 0 ? "mt-5" : "mt-0"}`}
                >
                  <h3 className={`font-oswald text-lg md:text-2xl md:text-3xl font-bold ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 italic text-sm md:text-base md:text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>

                  <div className="relative h-70 md:h-100 w-105 rounded-3xl overflow-hidden shadow-2xl">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </motion.div>
              ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-20 md:-translate-y-10">
            {features
              .filter((f) => f.column === "right")
              .map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" as const }}
                  className={`flex flex-col gap-2 ${idx === 1 ? "mt-5" : "mt-0"}`}
                >
                  <div className="relative h-72 md:h-100 w-105 rounded-3xl overflow-hidden shadow-2xl">
                    <Image src={item.img} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  <h3 className={`font-oswald text-lg md:text-2xl md:text-3xl font-bold ${item.color}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 italic text-sm md:text-base md:text-lg leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mt-16"
        >
          <a
            href="/booking"
            className="font-oswald tracking-[0.2em] font-semibold inline-block mt-6 bg-green-800 hover:bg-green-700 text-white px-10 py-3 rounded-full text-xs shadow-lg transition-all duration-300"
          >
            BOOK YOUR EXPERIENCE NOW
          </a>
        </motion.div>

      </div>
    </section>
  );
}