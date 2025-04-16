"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 sm:px-12 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo2.png"
            alt="Logo"
            width={150} // increased from 120
            height={40}
            className="object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex gap-8 text-sm items-center">
          {["Matches", "Leaderboard", "Blog", "Promotion"].map((label, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-700 hover:text-[#2563eb] hover:underline transition-all duration-200"
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            className="ml-4 bg-black text-white px-6 py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Sign In
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 pt-2 pb-4 bg-white shadow-md rounded-b-lg space-y-4 text-sm">
          {["Matches", "Leaderboard", "Blog", "Promotion"].map((label, i) => (
            <a
              key={i}
              href="#"
              className="block text-gray-700 hover:text-[#2563eb] hover:underline transition-all"
            >
              {label}
            </a>
          ))}

          <a
            href="#"
            className="block bg-black text-white text-center px-6 py-2 rounded-full hover:opacity-90 transition"
          >
            Sign In
          </a>
        </div>
      )}
    </header>
  );
}
