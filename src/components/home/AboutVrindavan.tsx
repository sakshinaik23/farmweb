"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ---------- Animation Variants ---------- */
const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutVrindavan() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#f8f6f2] via-white to-[#f8f6f2] overflow-hidden">

      {/* Decorative Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeLeft}
            className="relative h-[320px] sm:h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <Image
                src="/images/exp1.webp"
                alt="Vrindavan Farms Green Environment"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div variants={fadeRight} className="space-y-6">

            {/* LABEL */}
            <motion.p
              variants={fadeUp}
              className="tracking-[0.35em] text-xs text-gray-500 font-semibold uppercase"
            >
              About Vrindavan Farms
            </motion.p>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              A peaceful escape where <br />
              <span className="text-green-800">
                nature, comfort & celebration
              </span>{" "}
              meet
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 max-w-xl text-base md:text-lg leading-relaxed"
            >
              Vrindavan Farms is a thoughtfully designed farmhouse retreat
              surrounded by lush greenery and open lawns — ideal for peaceful
              stays, joyful celebrations, and memorable gatherings away from
              city chaos.
            </motion.p>

            {/* HIGHLIGHTS */}
            <motion.div
              variants={sectionVariants}
              className="space-y-5 pt-4"
            >
              {[
                {
                  title: "Peaceful Green Environment",
                  desc: "Wide open lawns, fresh air, and calming natural surroundings.",
                },
                {
                  title: "Authentic Homemade Food",
                  desc: "Freshly prepared meals with local flavors, served hygienically.",
                },
                {
                  title: "Activities for All Age Groups",
                  desc: "Pool, rain dance, and indoor & outdoor games for everyone.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex gap-4 items-start group"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shadow-sm">
                    <div className="w-3 h-3 bg-green-800 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              href="/booking"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 bg-green-800 hover:bg-green-700 text-white px-10 py-3 rounded-full text-sm font-semibold shadow-xl transition-all tracking-wide"
            >
              PLAN YOUR VISIT
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}