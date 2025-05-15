"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bell, CircleUserRound } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  const username =
    session?.user?.name ||
    session?.user?.email?.split("@")[0] ||
    "Guest";

  const navLinks = [
    { label: "Profile", href: "/dashboard/profile" },
    { label: "My Bets", href: "/dashboard/my-bets" },
    { label: "Transactions", href: "/dashboard/transactions" },
    { label: "Referrals", href: "/dashboard/referrals" },
  ];

  return (
    <header className="w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 sm:px-12 py-4 max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden sm:flex w-full justify-between items-center">
          <div className="flex items-center gap-4">
            <CircleUserRound className="w-10 h-10 text-blue-200 opacity-30" />
            <h1 className="text-lg font-semibold text-gray-800">
              Hello, <span className="text-[#2563eb]">{username}</span>
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <nav className="flex gap-6 text-sm items-center">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-gray-700 hover:text-[#2563eb] transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="/deposit"
              className="bg-[#2563eb] text-white text-sm font-medium px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition-colors duration-200"
            >
              Deposit
            </Link>
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-700 hover:text-[#2563eb]" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="sm:hidden flex w-full justify-between items-center">
          <div className="flex items-center gap-4">
            <CircleUserRound className="w-8 h-8 text-blue-200 opacity-30" />
            <h1 className="text-sm font-semibold text-gray-800">
              Hello, <span className="text-[#2563eb]">{username}</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-gray-700 hover:text-[#2563eb]" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 pt-2 pb-4 bg-white shadow-md rounded-b-lg space-y-4 text-sm">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block text-gray-700 hover:text-[#2563eb] transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/deposit"
            className="block w-full bg-[#2563eb] text-white text-center font-medium py-2 rounded-xl shadow hover:bg-blue-700 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Deposit
          </Link>
        </div>
      )}
    </header>
  );
}
