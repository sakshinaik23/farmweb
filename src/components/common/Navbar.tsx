"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "STAY", href: "/stay" },
  { name: "PACKAGES", href: "/packages" },
  { name: "EVENTS", href: "/events" },
  { name: "EXPERIENCES", href: "/experiences" },
];

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [hasBg, setHasBg] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
        setHasBg(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
        setHasBg(true);
      } else {
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${
          hasBg
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
            : "bg-transparent"
        }
      `}
    >
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LOGO */}
        <Link
          href="/"
          className={`
            flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-300
            ${hasBg ? "bg-white shadow-sm" : "bg-white/10 backdrop-blur-md"}
          `}
        >
          <span
            className={`text-2xl font-[var(--font-playfair)] font-semibold ${
              hasBg ? "text-green-900" : "text-white"
            }`}
          >
            Vrindavan
          </span>
          <span
            className={`text-lg font-[var(--font-poppins)] ${
              hasBg ? "text-green-900" : "text-white"
            }`}
          >
            Farms
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div
          className={`
            hidden md:flex items-center gap-10
            absolute left-1/2 -translate-x-1/2
            tracking-widest text-[15px]
            ${hasBg ? "text-gray-800" : "text-white"}
          `}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link key={link.name} href={link.href} className="relative group">
                <span className={isActive ? "font-semibold" : "opacity-90"}>
                  {link.name}
                </span>

                <span
                  className={`
                    absolute left-0 -bottom-2 h-[2px]
                    ${hasBg ? "bg-green-900" : "bg-white"}
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA BUTTON */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/booking"
            className="
              px-8 py-3 rounded-full
              uppercase tracking-widest text-sm font-semibold
              text-white bg-gradient-to-r from-green-700 to-green-900
              shadow-lg hover:scale-105 transition-all duration-300
            "
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center gap-1"
          >
            {/* Always 3 lines (no cross animation) */}
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                hasBg ? "bg-green-900" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                hasBg ? "bg-green-900" : "bg-white"
              }`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                hasBg ? "bg-green-900" : "bg-white"
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl px-6 pt-6 pb-8 flex flex-col gap-5 text-gray-800"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`uppercase tracking-widest text-sm ${
                  pathname === link.href
                    ? "font-bold text-green-800"
                    : "opacity-80"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/booking"
              className="mt-4 bg-green-800 text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:bg-green-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}