"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    image: "/images/hero1.jpg",
    title: "VRINDAVAN FARMS",
    subtitle: "Nature Stay & Celebration Destination",
  },
  {
    image: "/images/hero2.webp",
    title: "PERFECT WEEKEND GETAWAY",
    subtitle: "Family · Groups · Peaceful Stays",
  },
  {
    image: "/images/hero3.webp",
    title: "FUN & RELAXATION",
    subtitle: "Pool · Rain Dance · Outdoor Activities",
  },
];

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1500}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              {/* IMAGE WITH SLIGHTLY DARKER TONE */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={activeIndex === index ? { scale: 1.12 } : { scale: 1 }}
                transition={{ duration: 7, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover brightness-95 contrast-105"
                />
              </motion.div>

              {/* DARKER GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/0" />

              {/* TEXT */}
              <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-24">
                <motion.div
                  key={activeIndex}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { delayChildren: 0.9, staggerChildren: 0.25 },
                    },
                  }}
                  className="text-white max-w-4xl"
                >
                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1 }}
                    className="
                      font-bebas
                      uppercase
                      text-[2.5rem] sm:text-[3.8rem] md:text-[5.2rem] lg:text-[6.4rem]
                      leading-[1.1] sm:leading-[0.88]
                      tracking-tight
                      drop-shadow-2xl
                    "
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.9 }}
                    className="
                      mt-2 sm:mt-4
                      text-sm sm:text-lg md:text-xl lg:text-2xl
                      tracking-wide
                      text-white/90
                    "
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.8 }}
                    className="mt-4 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
                  >
                    <a
                      href="#experiences"
                      className="bg-green-900 hover:bg-green-800 text-white px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg transition-all text-center"
                    >
                      Explore Experiences
                    </a>

                    <a
                      href="#packages"
                      className="border border-white text-white hover:bg-white hover:text-black px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold rounded-full shadow-lg transition-all text-center"
                    >
                      View Packages
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}