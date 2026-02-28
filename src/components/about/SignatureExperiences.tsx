"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  "/images/sig1.webp",
  "/images/sig4.webp",
  "/images/sig2.webp",
  "/images/sig3.webp",
];

export default function SignatureExperiences() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f6f2] via-white to-[#f8f6f2] py-24 sm:py-32 -mt-16">

      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-100 rounded-full blur-[120px] opacity-40"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch min-h-[620px]">

        {/* LEFT SIDE - IMAGE SLIDER */}
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          speed={900}
          loop
          className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="relative w-full h-full group">
              <Image
                src={img}
                alt="Signature Experience"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-[4000ms] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* RIGHT SIDE - CONTENT WITH SCROLL TRIGGER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="h-full flex flex-col justify-center space-y-8"
        >
          <span className="uppercase tracking-[0.5em] text-xs text-gray-500 font-[var(--font-montserrat)]">
            Our Signature Experiences
          </span>

          <h2 className="text-4xl sm:text-5xl font-[var(--font-playfair)] font-bold bg-gradient-to-r from-green-700 via-green-500 to-orange-400 bg-clip-text text-transparent leading-tight">
            Reconnect With Nature, Rediscover Yourself
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
            Step away from city chaos and embrace serene farm mornings,
            organic farm-fresh meals, refreshing rain dances, and magical
            bonfire evenings under starlit skies. Every experience is crafted
            to help you relax, reconnect, and create unforgettable memories
            with loved ones.
          </p>

          {/* Highlights */}
          <div className="grid gap-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <p>Authentic farm-to-table dining experiences</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <p>Spacious lawns for weddings & celebrations</p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <p>Relaxing pool, rain dance & bonfire nights</p>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-8 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full shadow-xl transition-all duration-300 w-fit"
          >
            Explore Experiences →
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}