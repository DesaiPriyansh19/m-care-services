"use client";

import { useState } from "react";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about-us" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO */}
        <Link href="/">
          <img
            src="/M-care.png"
            alt="M-Care Services"
            className="h-12 md:h-14 lg:h-16 xl:max-h-20 w-auto object-contain cursor-pointer"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center space-x-10 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-gray-600 hover:text-black transition after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CALL BUTTON */}
      <a
  href="/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    hidden md:inline-flex items-center gap-2
    px-5 py-2.5
    rounded-xl
    border border-gray-300
    text-sm font-semibold text-gray-800
    bg-white/60 backdrop-blur
    shadow-sm
    hover:bg-black hover:text-white hover:border-black
    transition-all duration-300
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16"
    />
  </svg>
  Brochure
</a>


        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <span className="block w-6 h-[2px] bg-black mb-1"></span>
          <span className="block w-6 h-[2px] bg-black mb-1"></span>
          <span className="block w-6 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 space-y-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 text-lg"
            >
              {item.label}
            </Link>
          ))}

<a
  href="/brochure.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    flex items-center justify-center gap-2
    px-4 py-3
    rounded-xl
    border border-gray-300
    text-gray-800 font-semibold
    bg-white
    hover:bg-black hover:text-white hover:border-black
    transition-all
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16v-8m0 8l-4-4m4 4l4-4M4 20h16"
    />
  </svg>
  Download Brochure
</a>


        </div>
      )}
    </header>
  );
}
