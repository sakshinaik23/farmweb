"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <footer className="relative bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-gray-300 pt-16 pb-6 overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-green-700/20 blur-[140px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-5"
        >
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-3xl font-[var(--font-playfair)] font-semibold text-white tracking-wide">
              Vrindavan
            </span>
            <span className="text-xl font-[var(--font-poppins)] font-medium text-orange-400">
              Farms
            </span>
          </Link>

          <p className="text-gray-400 leading-relaxed text-sm">
            A serene farmstay & celebration destination in Badlapur — offering peaceful stays, vibrant events, farm-fresh food, and unforgettable experiences in nature.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-orange-400 hover:text-white transition-all duration-300 text-sm"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h4 className="text-white font-semibold mb-4 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Rooms", "Packages", "Events"].map((item, i) => (
              <li key={i}>
                <Link
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* EXPERIENCES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h4 className="text-white font-semibold mb-4 tracking-wide">
            Experiences
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              "Farm Stay",
              "Day Picnic",
              "Swimming Pool",
              "Rain Dance",
              "Birthdays & Weddings",
            ].map((exp, i) => (
              <li
                key={i}
                className="hover:text-orange-400 transition-colors duration-300 cursor-pointer"
              >
                {exp}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="space-y-3 text-sm"
        >
          <h4 className="text-white font-semibold tracking-wide">Contact Us</h4>
          <p className="text-gray-400">
            📍 Near Chon, Aghanwadi Next Janai farms, Badlapur, Maharashtra 421503
          </p>
          <p className="text-gray-400">📞 +91 8767048880</p>
          <p className="text-gray-400">✉️ info@vrindavanfarm.com</p>

          {/* CTA */}
          <button className="mt-3 px-6 py-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full text-white text-sm hover:scale-105 transition-transform duration-300 shadow-md">
            Book Your Stay →
          </button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} Vrindavan Farms. All rights reserved.</p>
        <div className="flex gap-6 mt-2 sm:mt-0">
          <Link href="/terms" className="hover:text-orange-400 transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="hover:text-orange-400 transition-colors">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}