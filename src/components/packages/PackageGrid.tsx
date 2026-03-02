"use client";

import { motion } from "framer-motion";
import { packages } from "@/data/packages";

export default function PackageGrid() {
  return (
    <section className="bg-[#f8f6f2] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              {pkg.title}
            </h3>

            {pkg.subtitle && (
              <p className="text-sm text-gray-500 mt-1">{pkg.subtitle}</p>
            )}

            <div className="mt-6 space-y-1">
              <p className="text-green-700 font-semibold">
                Weekend: {pkg.weekendPrice}
              </p>
              <p className="text-gray-700">
                Weekday: {pkg.weekdayPrice}
              </p>
              <p className="text-gray-600 text-sm">
                {pkg.childPrice}
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              <p>{pkg.capacity}</p>
              <p>{pkg.minGuests}</p>
            </div>

            <p className="mt-6 text-gray-700 text-sm leading-relaxed">
              {pkg.description}
            </p>

            <div className="mt-8 text-sm text-gray-700">
              <p className="font-semibold">Includes:</p>
              <p>
                Welcome Drink · Dinner · Breakfast (Tea/Coffee) · Lunch
              </p>
            </div>

            <button className="mt-8 w-full py-3 bg-green-700 text-white rounded-full font-semibold hover:bg-green-800 transition">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}