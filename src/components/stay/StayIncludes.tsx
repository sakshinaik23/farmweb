"use client";

import { motion } from "framer-motion";

const includes = [
  {
    title: "Welcome Drink",
    description:
      "A refreshing welcome to begin your peaceful farmhouse stay.",
    image: "/images/include1.webp",
  },
  {
    title: "Farm-Fresh Meals",
    description:
      "Breakfast, lunch and dinner prepared with care.",
    image: "/images/include2.webp",
  },
  {
    title: "Swimming Pool",
    description:
      "Relax in crystal-clear waters surrounded by greenery.",
    image: "/images/include3.webp",
  },
  {
    title: "Rain Dance Moments",
    description:
      "Celebrate and have fun with music and rain dance sessions.",
    image: "/images/include4.webp",
  },
];

export default function StayIncludes() {
  return (
    <section className="py-10 md:py-12 bg-[#f8f6f2] px-4 sm:px-6 md:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-[var(--font-playfair)] font-bold text-gray-900">
            What’s Included in Your Stay
          </h2>
          <p className="mt-4 xs:mt-5 text-base xs:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Thoughtfully curated comforts and experiences designed
            to make your farmhouse stay memorable and relaxing.
          </p>
        </div>

        {/* Rows */}
        <div className="space-y-16 xs:space-y-20 md:space-y-28">
          {includes.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row ${!isEven ? "md:flex-row-reverse" : ""} items-center gap-8 xs:gap-10 md:gap-14`}
              >
                {/* Image Card */}
                <div className="w-full md:w-1/2 relative group">
                  {/* Light green/orange offset background */}
                  <div className="absolute -bottom-3 -right-3 xs:-bottom-4 xs:-right-4 w-full h-full rounded-3xl shadow-md bg-gradient-to-tr from-[#ffe9c2] to-[#d4f1d4]"></div>

                  <div className="relative rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition duration-500 border border-gray-200">
                    <div
                      className="h-48 xs:h-56 md:h-72 bg-cover bg-center transition duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent opacity-50 group-hover:opacity-30 transition duration-500" />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-4 xs:space-y-5 md:space-y-6">
                  <div className="text-sm xs:text-base md:text-base tracking-widest text-[#6b8e23] font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-2xl xs:text-3xl md:text-4xl font-semibold text-[#4a4a3f]">
                    {item.title}
                  </h3>

                  <div className="w-12 xs:w-16 h-[2px] bg-[#ffa94d]" />

                  <p className="text-base xs:text-lg md:text-xl text-gray-700 leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}