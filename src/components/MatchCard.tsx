"use client";

import { motion } from "framer-motion";

export default function MatchCard({ teamA, teamB, time, odds }: any) {
  const matchTime = new Date(time).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-lg p-6 border border-blue-700"
    >
      <div className="text-lg font-extrabold mb-2 text-blue-300">
        {teamA} vs {teamB}
      </div>
      <div className="text-sm text-gray-400 mb-4">{matchTime}</div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-blue-300">Reverse Odds:</span>
        <span className="text-xl font-bold text-blue-500">{odds}</span>
      </div>
      <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 ease-in-out shadow-md">
        Place Reverse Bet
      </button>
    </motion.div>
  );
}
  