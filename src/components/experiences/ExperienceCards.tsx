"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { ExperienceItem } from "@/data/experiences";

interface Props {
  items: ExperienceItem[];
}

export default function ExperienceCards({ items }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-gray-100">
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
          {items.map((item, index) => {
            const previewImage =
              item.images?.length > 0
                ? item.images[0]
                : "/images/placeholder.jpg";

            return (
              <SwiperSlide key={item.id}>
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
                      src={previewImage}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                    {/* CONTENT */}
                    <div className="absolute bottom-0 left-0 p-8 text-white z-10">
                      <h3 className="text-2xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80 line-clamp-2">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="exp-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md">
          ‹
        </button>

        <button className="exp-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md">
          ›
        </button>
      </div>
    </section>
  );
}