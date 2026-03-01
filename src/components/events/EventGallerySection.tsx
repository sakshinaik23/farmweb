"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/exp3.webp",
  "/images/gallery6.jpg",
  "/images/insta2.webp",
  "/images/experience/meetup.webp",
  "/images/gallery4.jpg",
  "/images/card-4.jpg",
  "/images/gallery3.jpg",
  "/images/experience/event2.png",
  "/images/experience/pool_img2.png",
  "/images/experience/event3.png",
  "/images/experience/meetup2.webp",
  "/images/experience/event4.png",

];

export default function EventGallerySection() {
  return (
    <section className="relative bg-gray-50 py-24 px-6 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-40 left-0 w-96 h-96 bg-green-100 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 blur-3xl opacity-30 rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
            Gallery
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            Moments From Our Events
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            A glimpse into the celebrations, joy, and unforgettable experiences hosted at Vrindavan Farms.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              {/* Image */}
              <Image
                src={src}
                alt="Event gallery"
                width={500}
                height={400}
                className="object-cover w-full h-[260px] transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Subtle Lift Effect */}
              <div className="absolute inset-0 group-hover:scale-[1.02] transition duration-500"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}