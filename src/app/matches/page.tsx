"use client";

import { useState } from "react";
import Link from "next/link";
import MatchList from "@/components/MatchList";
import FilterBar from "@/components/FilterBar";

export default function MatchesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen py-20 px-6 sm:px-12 text-white font-sans">
      
      {/* Navigation Bar */}
      <div className="flex justify-between items-center mb-6">
        <Link
          href="/"
          className="text-blue-300 hover:text-blue-400 hover:underline transition-all font-medium text-sm sm:text-base"
        >
          ← Back to Home
        </Link>
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {["All Matches", "Upcoming", "Live", "Past"].map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase().replace(" ", "-")}`}
              className="text-sm sm:text-base font-semibold text-gray-300 hover:text-blue-400 transition-all duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-300">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-[#0f172a] text-white px-6 py-4 rounded-lg shadow-lg space-y-4`}
      >
        {["All Matches", "Upcoming", "Live", "Past"].map((label) => (
          <Link
            key={label}
            href={`#${label.toLowerCase().replace(" ", "-")}`}
            className="block text-sm sm:text-base font-semibold text-gray-300 hover:text-blue-400 transition-all duration-200"
            onClick={() => setIsMenuOpen(false)} // Close the menu when clicked
          >
            {label}
          </Link>
        ))}
      </div>

      <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-blue-300 drop-shadow-lg">
        Available Matches
      </h1>

      {/* Filter Bar */}
      <div className="mb-6">
        <FilterBar />
      </div>

      {/* Match List */}
      <div className="space-y-6">
        <MatchList />
      </div>
    </div>
  );
}
