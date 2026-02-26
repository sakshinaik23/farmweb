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
  const [showNavbar, setShowNavbar] = useState(true); // visible at start
  const [hasBg, setHasBg] = useState(false); // ❌ no bg at start
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // At top → show navbar, NO background
      if (currentScrollY < 50) {
        setShowNavbar(true);
        setHasBg(false);
      }
      // Scroll UP → show navbar WITH background
      else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
        setHasBg(true);
      }
      // Scroll DOWN → hide navbar
      else {
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
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* LOGO */}
        <Link
          href="/"
          className={`
            flex items-center gap-1 px-4 py-2 rounded-full transition-all
            ${hasBg ? "bg-white/90 shadow-sm" : "bg-white/10"}
          `}
        >
          <span
            className={`
              text-2xl font-[var(--font-playfair)] font-semibold
              ${hasBg ? "text-green-900" : "text-white"}
            `}
          >
            Vrindavan
          </span>
          <span
            className={`
              text-lg font-[var(--font-poppins)] font-medium
              ${hasBg ? "text-green-900" : "text-white"}
            `}
          >
            Farms
          </span>
        </Link>

        {/* NAV LINKS */}
        <div
          className={`
            hidden md:flex items-center gap-10
            absolute left-1/2 -translate-x-1/2
            text-[15px] md:text-[16px]
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

        {/* BOOK NOW */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/booking"
            className="
              bg-green-800 text-white
              px-9 py-3.5
              rounded-full
              uppercase tracking-widest text-sm font-semibold
              shadow-lg
              hover:bg-green-700 hover:shadow-xl
              transition-all duration-300
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}