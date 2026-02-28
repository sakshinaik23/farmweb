"use client";

import { useState, useRef, useEffect } from "react";
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
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  // Only render after mount to prevent SSR mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1800}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen w-full">
              {/* Cinematic Zoom Image */}
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={activeIndex === index ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 8, ease: "easeOut" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover brightness-[0.85] contrast-110"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center px-6 sm:px-16 lg:px-28">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="max-w-4xl text-white"
                >
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="uppercase tracking-[0.3em] text-xs sm:text-sm text-green-300 mb-4"
                  >
                    Welcome to
                  </motion.p>

                  <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="
                      font-bebas uppercase
                      text-[2.8rem] sm:text-[4.5rem] md:text-[6rem]
                      leading-[0.95]
                      bg-gradient-to-r from-white via-green-200 to-white
                      bg-clip-text text-transparent
                      drop-shadow-2xl
                    "
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-4 text-base sm:text-lg md:text-xl text-white/85"
                  >
                    {slide.subtitle}
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-8 flex flex-col sm:flex-row gap-6"
                  >
                    <a
                      href="#experiences"
                      className="
                        px-10 py-4 rounded-full
                        bg-gradient-to-r from-green-700 to-green-900
                        text-white font-semibold tracking-wide
                        shadow-xl hover:scale-105 hover:shadow-green-900/40
                        transition-all duration-300
                      "
                    >
                      Explore Experiences
                    </a>

                    <a
                      href="#packages"
                      className="
                        px-10 py-4 rounded-full
                        border border-white/60
                        backdrop-blur-md
                        text-white font-semibold tracking-wide
                        hover:bg-white hover:text-black
                        transition-all duration-300
                      "
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

      {/* Pagination Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "w-10 bg-white shadow-md"
                : "w-3 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}