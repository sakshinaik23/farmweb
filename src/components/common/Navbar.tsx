"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "ROOMS", href: "/rooms" },
  { name: "PACKAGES", href: "/packages" },
  { name: "EVENTS", href: "/events" },
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
        ${hasBg ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 flex items-center">

        {/* LOGO */}
        <Link
          href="/"
          className={`
            flex items-center gap-1 px-3 sm:px-4 py-2 rounded-full transition-all
            ${hasBg ? "bg-white/90 shadow-sm" : "bg-white/10"}
          `}
        >
          <span
            className={`
              text-2xl sm:text-2xl font-[var(--font-playfair)] font-semibold
              ${hasBg ? "text-green-900" : "text-white"}
            `}
          >
            Vrindavan
          </span>
          <span
            className={`
              text-lg sm:text-lg font-[var(--font-poppins)] font-medium
              ${hasBg ? "text-green-900" : "text-white"}
            `}
          >
            Farms
          </span>
        </Link>

        {/* NAV LINKS - Desktop */}
        <div
          className={`
            hidden md:flex items-center gap-6 lg:gap-10
            absolute left-1/2 -translate-x-1/2
            text-[14px] sm:text-[15px] md:text-[16px]
            tracking-widest
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
                    absolute left-0 -bottom-1 h-[1px] bg-current
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* BOOK NOW - Desktop */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/booking"
            className="
              bg-green-800 text-white
              px-6 sm:px-9 py-2.5 sm:py-3.5
              rounded-full
              uppercase tracking-widest text-xs sm:text-sm font-semibold
              shadow-lg
              hover:bg-green-700 hover:shadow-xl
              transition-all duration-300
            "
          >
            Contact Us
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="ml-auto md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md bg-white/20 hover:bg-white/30 transition"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-4 pt-4 pb-6 flex flex-col gap-4 text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium uppercase tracking-widest text-sm ${
                pathname === link.href ? "font-bold" : "opacity-90"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="bg-green-800 text-white px-6 py-2 rounded-full text-sm font-semibold mt-2 shadow hover:bg-green-700 transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}