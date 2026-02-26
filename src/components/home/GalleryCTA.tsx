"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Corrected fadeUp variant for TS
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] }, // standard easeOut array
  },
};

// Gallery / Amenities / Events data
const gallery = [
  { img: "/images/gallery1.jpg", title: "Lush Green Lawns" },
  { img: "/images/gallery2.jpg", title: "Swimming Pool Fun" },
  { img: "/images/gallery3.jpg", title: "Rain Dance Area" },
  { img: "/images/gallery4.jpg", title: "Indoor Games & Activities" },
  { img: "/images/gallery5.jpg", title: "Authentic Homemade Food" },
  { img: "/images/gallery6.jpg", title: "Event Decoration & Parties" },
];

export default function GalleryCTA() {
  return (
    <section className="py-16 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-20"
        >
          <p className="font-oswald text-[9px] sm:text-xs tracking-[0.32em] text-gray-500 mb-2 sm:mb-3 font-medium">
            EXPERIENCE & AMENITIES
          </p>
          <h2 className="font-oswald text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug drop-shadow-lg">
            See what Vrindavan Farms offers
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                ease: [0.42, 0, 0.58, 1],
                delay: idx * 0.1,
              }}
              className="relative h-52 sm:h-64 md:h-72 rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-3 sm:p-4 rounded-3xl">
                <h3 className="text-white text-base sm:text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-center mt-8 sm:mt-16"
        >
          <a
            href="/booking"
            className="font-oswald tracking-[0.2em] font-semibold inline-block bg-green-800 hover:bg-green-700 text-white px-6 sm:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-sm shadow-lg transition-all duration-300"
          >
            BOOK YOUR STAY NOW
          </a>
        </motion.div>
      </div>
    </section>
  );
}