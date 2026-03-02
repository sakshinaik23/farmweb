"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

interface Experience {
  title: string;
  desc: string;
  tags: string[];
  price: string;
  image: string;
}

const experiences: Experience[] = [
  {
    title: "Farm Stay Experience",
    desc: "Wake up to birds, fresh air, and peaceful greenery all around you.",
    tags: ["Family Friendly", "Nature", "Relaxing"],
    price: "From ₹2000 / night",
    image: "/images/exp1.webp",
  },
  {
    title: "Day Picnic",
    desc: "One-day escape packed with food, games, pool fun & relaxation.",
    tags: ["Includes Lunch", "Pool Fun", "Games"],
    price: "₹1200 / person",
    image: "/images/exp6.webp",
  },
  {
    title: "Event Celebrations",
    desc: "Celebrate birthdays, engagements & corporate events in open lawns.",
    tags: ["Decor", "Music", "Large Space"],
    price: "Custom Packages",
    image: "/images/exp3.webp",
  },
  {
    title: "Pool & Rain Dance",
    desc: "High-energy DJ rain dance & refreshing pool activities.",
    tags: ["DJ", "Water Fun", "Kids Friendly"],
    price: "Included in Picnic",
    image: "/images/exp2.webp",
  },
  {
    title: "Homely Food",
    desc: "Freshly prepared authentic meals with local flavors.",
    tags: ["Pure Veg", "Local Taste", "Fresh"],
    price: "Included",
    image: "/images/include1.webp",
  },
  {
    title: "Comfort & Relaxation",
    desc: "Spacious rooms designed for comfort & peace of mind.",
    tags: ["AC Rooms", "Clean", "Peaceful"],
    price: "From ₹2500 / night",
    image: "/images/exp4.webp",
  },
];

export default function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<any>(null);

  return (
    <section
      id="experiences"
      className="relative py-20 bg-gradient-to-b from-[#f8f6f2] via-white to-[#f8f6f2] overflow-hidden"
    >
      {/* Soft Luxury Background Glow */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-green-200 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200 blur-3xl opacity-20 rounded-full"></div>

      {/* HEADER */}
      <div className="relative text-center mb-20 px-6">
        <p className="uppercase tracking-[0.35em] text-xs text-gray-500 font-semibold">
          Experiences
        </p>

        <h2 className="mt-4 text-3xl sm:text-5xl font-bold text-gray-900">
          Discover Moments at{" "}
          <span className="text-gray-900">Vrindavan Farms</span>
        </h2>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides
          loop
          speed={900}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          navigation={{
            nextEl: ".exp-next",
            prevEl: ".exp-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1.1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {experiences.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 0.92,
                    opacity: isActive ? 1 : 0.5,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl group"
                >
                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Softer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* CONTENT */}
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/80 mb-4 max-w-md">
                      {item.desc}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs border border-white/40 px-3 py-1 rounded-full backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* PRICE + BUTTON */}
                    <div className="flex items-center justify-between max-w-md">
                      <span className="font-semibold text-base">
                        {item.price}
                      </span>

                      <button className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 hover:scale-105 transition text-sm font-semibold shadow-lg">
                        Explore →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* PREMIUM NAVIGATION BUTTONS */}
        <button className="exp-prev absolute top-1/2 -left-8 -translate-y-1/2 w-16 h-16 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center text-gray-800 hover:scale-110 hover:bg-green-700 hover:text-white transition-all duration-300 z-20">
          ‹
        </button>

        <button className="exp-next absolute top-1/2 -right-8 -translate-y-1/2 w-16 h-16 rounded-full bg-white/70 backdrop-blur-md border border-white/40 shadow-xl flex items-center justify-center text-gray-800 hover:scale-110 hover:bg-green-700 hover:text-white transition-all duration-300 z-20">
          ›
        </button>
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center mt-12 gap-3">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeIndex === index
                ? "bg-green-800 w-8"
                : "bg-gray-300 w-2 hover:bg-green-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}