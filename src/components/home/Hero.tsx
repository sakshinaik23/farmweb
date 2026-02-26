"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/farm-hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Vrindavan Farms
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
          Escape the city and experience peace, greenery, delicious food
          and joyful celebrations in one beautiful destination.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/booking"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-md font-semibold"
          >
            Book Now
          </Link>

          <Link
            href="/about"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
}