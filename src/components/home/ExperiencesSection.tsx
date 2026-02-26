"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

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
    desc: "Peaceful stay surrounded by greenery and open lawns.",
    tags: ["Family Friendly", "Nature", "Relaxing"],
    price: "From ₹2000 / night",
    image: "/images/exp1.webp",
  },
  {
    title: "Day Picnic",
    desc: "Perfect one-day getaway with food & activities.",
    tags: ["Includes Lunch", "Pool Fun", "Games"],
    price: "₹1200 / person",
    image: "/images/exp2.webp",
  },
  {
    title: "Event Celebrations",
    desc: "Birthdays, engagements & corporate gatherings.",
    tags: ["Decor", "Music", "Large Space"],
    price: "Custom Packages",
    image: "/images/exp3.webp",
  },
  {
    title: "Pool & Rain Dance",
    desc: "Fun-filled water activities for all age groups.",
    tags: ["DJ", "Water Fun", "Kids Friendly"],
    price: "Included in Picnic",
    image: "/images/exp4.webp",
  },
  {
    title: "Homely Food",
    desc: "Fresh, authentic & delicious meals served hot.",
    tags: ["Pure Veg", "Local Taste", "Fresh"],
    price: "Included",
    image: "/images/exp5.webp",
  },
  {
    title: "Comfort & Relaxation",
    desc: "Comfortable stay with premium amenities.",
    tags: ["AC Rooms", "Clean", "Peaceful"],
    price: "From ₹2500 / night",
    image: "/images/exp6.webp",
  },
];

export default function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="experiences" className="py-20 sm:py-28 bg-white overflow-hidden relative">
      {/* SECTION HEADER */}
      <div className="text-center mb-12 sm:mb-20 px-4 sm:px-0">
        <h2 className="font-oswald uppercase tracking-[0.32em] text-[10px] sm:text-[11px] text-gray-500">
          Experiences
        </h2>

        <h3 className="font-oswald text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mt-2 sm:mt-4">
          What you’ll enjoy at Vrindavan Farms
        </h3>
      </div>

      {/* CAROUSEL */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={12}
          centeredSlides
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 12 },
            768: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
          }}
          loop
          navigation={{
            nextEl: ".exp-next",
            prevEl: ".exp-prev",
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {experiences.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <motion.div
                  animate={{
                    scale: isActive ? 1 : 0.95,
                    opacity: isActive ? 1 : 0.55,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative h-[400px] sm:h-[500px] md:h-[560px] rounded-2xl overflow-hidden shadow-2xl bg-white"
                >
                  {/* IMAGE */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/35" />

                  {/* TOP TITLE */}
                  <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
                    <h4 className="font-oswald text-xl sm:text-2xl md:text-3xl tracking-tight text-white leading-none">
                      {item.title}
                    </h4>
                  </div>

                  {/* BOTTOM CONTENT */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                    <p className="text-sm sm:text-base md:text-base text-white/90 mb-3 sm:mb-5 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-5">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs sm:text-sm bg-white/25 px-2 sm:px-3 py-1 rounded-full backdrop-blur"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* PRICE */}
                    <p className="font-oswald text-sm sm:text-lg md:text-xl tracking-tight mb-3 sm:mb-6">
                      {item.price}
                    </p>

                    {/* CTA */}
                    <button className="font-oswald tracking-[0.2em] bg-green-800 hover:bg-green-700 transition px-6 sm:px-10 py-2 sm:py-3 rounded-full text-xs sm:text-sm shadow-lg w-fit">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAV BUTTONS */}
        <button className="exp-prev absolute top-1/2 left-2 sm:-left-12 -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-900 text-white text-xl sm:text-2xl flex items-center justify-center shadow-xl hover:bg-green-800 transition z-20">
          ←
        </button>

        <button className="exp-next absolute top-1/2 right-2 sm:-right-12 -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-900 text-white text-xl sm:text-2xl flex items-center justify-center shadow-xl hover:bg-green-800 transition z-20">
          →
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {experiences.map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full transition-all duration-500 ${
              activeIndex === index ? "bg-green-900 w-7" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}