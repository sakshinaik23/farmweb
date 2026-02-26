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
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" as const },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function AboutVrindavan() {
  return (
    <section className="relative py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* SCROLL TRIGGER CONTAINER */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeLeft}
            className="relative h-[460px] md:h-[590px] rounded-3xl overflow-hidden shadow-xl"
          >
            <motion.div
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.6, ease: "easeOut" as const }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <Image
                src="/images/exp1.webp"
                alt="Vrindavan Farms Green Environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div variants={fadeRight} className="space-y-6">
            {/* LABEL */}
            <motion.p
              variants={fadeUp}
              className="font-oswald tracking-[0.32em] text-[11px] text-gray-500"
            >
              ABOUT VRINDAVAN FARMS
            </motion.p>

            {/* HEADING */}
            <motion.h2
              variants={fadeUp}
              className="font-oswald text-2xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-snug"
            >
              A peaceful escape where
              <br />
              nature, comfort & celebration meet
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 max-w-lg text-base md:text-lg leading-relaxed"
            >
              Vrindavan Farms is a thoughtfully designed farmhouse retreat
              surrounded by lush greenery and open lawns — ideal for peaceful
              stays, joyful celebrations, and memorable gatherings away from
              city chaos.
            </motion.p>

            {/* HIGHLIGHTS */}
            <motion.div variants={sectionVariants} className="space-y-4">
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
                  className="flex gap-4"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-green-800 flex-shrink-0" />

                  <div>
                    <h4 className="font-oswald text-base md:text-lg tracking-tight text-gray-900">
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-oswald tracking-[0.2em] font-bold inline-block mt-6 bg-green-800 hover:bg-green-700 text-white px-10 py-3 rounded-full text-xs shadow-lg transition-all"
            >
              PLAN YOUR VISIT
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}