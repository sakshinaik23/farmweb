"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const igImages = [
  { src: "/images/insta1.webp", href: "https://www.instagram.com/p/POST1/" },
  { src: "/images/insta2.webp", href: "https://www.instagram.com/p/POST2/" },
  { src: "/images/insta3.webp", href: "https://www.instagram.com/p/POST3/" },
  { src: "/images/insta4.webp", href: "https://www.instagram.com/p/POST4/" },
  { src: "/images/insta5.webp", href: "https://www.instagram.com/p/POST5/" },
  { src: "/images/insta6.webp", href: "https://www.instagram.com/p/POST6/" },
];

export default function InstagramSection() {
  return (
    <section className="py-15 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Header */}
        <motion.p
          className="uppercase tracking-widest text-sm text-orange-500 font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          On The #GRAM
        </motion.p>

        <motion.h2
          className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Vrindavan Farms Instagram
        </motion.h2>

        <motion.p
          className="mt-2 text-gray-700 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Follow us and see beautiful farm moments @vrindavan_farms
        </motion.p>

        {/* Glass Frame Container */}
        <motion.div
          className="mt-12 p-6 rounded-3xl bg-white/30 backdrop-blur-lg shadow-xl border border-white/30 hover:border-white/50 transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {igImages.map((img, i) => (
              <motion.a
                key={i}
                href={img.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Image
                  src={img.src}
                  alt={`Instagram ${i + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Instagram overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center p-2 rounded-xl">
                  <Instagram className="w-6 h-6 mb-2" />
                  <p className="text-sm font-semibold">View on Instagram</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Follow Button */}
        <motion.a
          href="https://www.instagram.com/vrindavan_farms"
          target="_blank"
          className="inline-flex items-center gap-2 mt-10 px-8 py-3 bg-gradient-to-r from-green-700 via-yellow-500 to-orange-400 text-white font-bold rounded-full shadow-xl hover:scale-105 transition-transform duration-300 animate-gradient-x"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Instagram className="w-5 h-5" />
          Follow @vrindavan_farms
        </motion.a>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
}