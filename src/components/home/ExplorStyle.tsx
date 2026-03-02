"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ---------- Animation ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeSide: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ---------- Data ---------- */
const features = [
  {
    title: "Premium Rooms & Stay",
    desc: "Comfortable, clean rooms with modern amenities for peaceful relaxation.",
    img: "/images/card-1.jpg",
    column: "right",
    accent: "text-orange-500",
  },
  {
    title: "Celebrations & Events",
    desc: "Birthdays, pre-weddings, corporate gatherings & unforgettable memories.",
    img: "/images/card-4.jpg",
    column: "left",
    accent: "text-green-800",
  },
  {
    title: "Fun Activities for All Ages",
    desc: "Swimming pool, rain dance, indoor & outdoor games for everyone.",
    img: "/images/card-3.jpg",
    column: "right",
    accent: "text-orange-500",
  },
  {
    title: "Authentic Homemade Food",
    desc: "Freshly prepared local meals served with warmth & hygiene.",
    img: "/images/card-2.jpg",
    column: "left",
    accent: "text-green-800",
  },
];

export default function ExplorStyle() {
  return (
    <section className="relative py-20 sm:py-12 bg-gradient-to-b from-[#f8f6f2] via-white to-[#f8f6f2] overflow-hidden">

      {/* Soft Decorative Blurs */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-green-200 blur-3xl opacity-20 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 blur-3xl opacity-20 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500 font-semibold mb-3">
            What's Your Travel Style?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover experiences at{" "}
            <span className="text-gray-900">Vrindavan Farms</span>
          </h2>
        </motion.div>

        {/* Zig Zag Layout */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeSide}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`flex flex-col gap-5 ${
                item.column === "left" ? "md:translate-y-16" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative h-56 sm:h-72 md:w-125 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
  <Image
    src={item.img}
    alt={item.title}
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
</div>

              {/* TEXT */}
              <div className="space-y-2">
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${item.accent}`}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mt-20"
        >
          <a
            href="/booking"
            className="inline-block bg-green-800 hover:bg-green-700 text-white px-10 py-3 rounded-full text-sm font-semibold shadow-xl transition duration-300 tracking-wide"
          >
            BOOK YOUR EXPERIENCE NOW
          </a>
        </motion.div>

      </div>
    </section>
  );
}