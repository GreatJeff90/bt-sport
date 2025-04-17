"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpIcon, ArrowDownIcon, MagnifyingGlassIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Leaderboard() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: "Alice", score: 1500, change: 1, wins: 5, draws: 2, bets: 10 },
    { id: 2, name: "Bob", score: 1450, change: -1, wins: 4, draws: 3, bets: 9 },
    { id: 3, name: "Charlie", score: 1420, change: 0, wins: 5, draws: 1, bets: 8 },
    { id: 4, name: "Dora", score: 1300, change: 2, wins: 3, draws: 3, bets: 10 },
    { id: 5, name: "Ethan", score: 1280, change: -2, wins: 2, draws: 5, bets: 7 },
    { id: 6, name: "Frank", score: 1240, change: 1, wins: 6, draws: 1, bets: 11 },
    { id: 7, name: "Grace", score: 1200, change: -1, wins: 4, draws: 4, bets: 9 },
    { id: 8, name: "Hannah", score: 1180, change: 0, wins: 3, draws: 5, bets: 8 },
    { id: 9, name: "Ivy", score: 1150, change: 2, wins: 5, draws: 2, bets: 10 },
    { id: 10, name: "Jack", score: 1100, change: -2, wins: 4, draws: 3, bets: 7 },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-sans tracking-wide min-h-screen flex flex-col">
      {/* Navigation */}
      <div className="flex justify-between items-center px-6 sm:px-16 py-4 border-b border-blue-800 bg-[#0f172a]/60 backdrop-blur">
        
        <a href="/" className="flex items-center">
        
            <img
            src="/logo.png"
            alt="Logo"
            width={100}
            height={30}
            className="object-contain cursor-pointer"
            />
        </a>
       

              
        <Link
          href="/"
          className="text-sm text-blue-300 hover:text-white transition-all bg-blue-900/20 border border-blue-600 px-4 py-1.5 rounded-full shadow-sm hover:shadow-blue-600/40"
        >
          ⬅ Back to Home
        </Link>
      </div>

      {/* Animated Intro */}
     <section className="py-10 px-6 sm:px-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
  <div>
    {/* Animated Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-5xl sm:text-6xl font-extrabold leading-tight text-blue-300 drop-shadow"
    >
      Galactic Rankings
    </motion.h1>
    
    {/* Animated Paragraph */}
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
  className="max-w-2xl text-lg sm:text-xl text-blue-200"
>
  Compete in the Galactic Rankings by predicting match outcomes and earning points based on your accuracy. The more correct predictions you make, the higher your rank! But that's not all—boost your points by referring friends to join the game. <br /><br />For every successful referral, you'll earn additional points, accelerating your journey to the top! Keep an eye on your progress and unlock exclusive rewards as you rise through the ranks.
</motion.p>

{/* CTA Button */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
  className="flex gap-4 mt-4 flex-wrap justify-center sm:justify-start"
>
  <a
    href="/signin"
    className="bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#1e4db7] hover:scale-105 transition-all duration-300 ease-in-out"
  >
    Get Started
  </a>
  <a
    href="/promotions"
    className="text-[#2563eb] border border-[#2563eb] px-6 py-3 rounded-full font-semibold hover:bg-[#eef4ff] hover:scale-105 transition-all duration-300 ease-in-out"
  >
    Go To Promotions
  </a>
</motion.div>


  </div>
  
  {/* Image visible on all screens, centered in its div */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="lg:block sm:hidden flex justify-center "  // Center the image in the div
  >
    <img
      src="/soccer.png"
      alt="Soccer"
      className="max-w-[450px] h-auto object-contain"
    />
  </motion.div>
</section>


      {/* Filter Tabs */}
      <div className="flex justify-center space-x-3 mt-4 mb-6">
        {["All Time", "Monthly", "Weekly", "Friends"].map((label) => (
          <button
            key={label}
            onClick={() => setFilter(label.toLowerCase())}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border ${
              filter === label.toLowerCase()
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                : "text-blue-300 border-blue-700 hover:bg-blue-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto mb-8 px-4">
        <div className="flex items-center border border-blue-600 rounded-xl overflow-hidden bg-[#0f172a]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search players..."
            className="flex-1 px-4 py-2 bg-transparent text-blue-100 placeholder:text-blue-400 outline-none"
          />
          <MagnifyingGlassIcon className="w-5 h-5 text-blue-400 mr-3" />
        </div>
      </div>

      {/* Top 3 Users */}
      <div className="flex justify-center space-x-4 mb-10 px-6">
        {users.slice(0, 3).map((user, i) => (
          <div
            key={user.id}
            className="flex flex-col items-center text-center px-4 py-6 rounded-xl shadow-lg w-28 sm:w-36 bg-gradient-to-br from-blue-900 to-blue-700 animate-fade-in"
          >
            <UserCircleIcon className="w-10 h-10 text-blue-300 mb-2" />
            <h4 className="font-semibold text-sm">{user.name}</h4>
            <span className="text-xs text-blue-400 mt-1">
              {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
            </span>
            <p className="font-bold text-lg text-white">{user.score}</p>
          </div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="mx-auto px-4 mb-12 space-y-3 w-[80vw] max-w-screen-lg">
        {filteredUsers.slice(3).map((user, i) => (
          <div
            key={user.id}
            className="flex items-center justify-between py-3 px-4 rounded-lg bg-[#1e293b] hover:bg-blue-800/30 border border-blue-700 transition-all"
          >
            <div className="flex items-center gap-3 w-1/3">
              <span className="text-sm font-semibold text-blue-300 w-6">{i + 4}</span> {/* Start from 4 */}
              <UserCircleIcon className="w-7 h-7 text-blue-400" />
              <div>
                <p className="font-semibold text-sm text-white">{user.name}</p>
              </div>
            </div>

            {/* Wins, Draws, Bets (Middle section) */}
            <div className="hidden lg:flex w-1/3 justify-center space-x-4 text-sm text-blue-200">
              <span className="font-medium">{user.wins} Wins</span>
              <span className="font-medium">{user.draws} Draws</span>
              <span className="font-medium">{user.bets} Bets</span>
            </div>

            {/* Score and Change */}
            <div className="flex items-center gap-2 w-1/3 justify-end">
              <span className="font-bold text-blue-200">{user.score}</span>
              {user.change > 0 ? (
                <ArrowUpIcon className="w-4 h-4 text-green-400" />
              ) : user.change < 0 ? (
                <ArrowDownIcon className="w-4 h-4 text-red-400" />
              ) : null}
              <ChevronRightIcon className="w-4 h-4 text-blue-400" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mb-12">
        <button className="px-5 py-2 text-sm font-medium text-blue-300 border border-blue-600 rounded-full hover:bg-blue-800/50 transition-all">
          Load More
        </button>
      </div>
    </div>
  );
}
