"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  images: string[];   
  highlights?: string[];
  reverse?: boolean;
}

export default function DetailSection({
  title,
  desc,
  images,
  highlights,
  reverse,
}: Props) {
  return (
    <section className="py-20 px-6">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center`}
      >
        {/* IMAGE GRID */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative w-full ${
                index === 0 ? "col-span-2 h-[300px]" : "h-[150px]"
              }`}
            >
              <Image
                src={img}
                alt={`${title} image ${index + 1}`}
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-700 leading-relaxed">{desc}</p>

          {highlights && (
            <ul className="space-y-2 text-gray-600">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-700 rounded-full"></span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}