"use client";

import { motion } from "framer-motion";
import { Trophy, ArrowUpRight } from "lucide-react";

const leaders = [
  { username: "topbetKing", earnings: 200000 },
  { username: "NaijaOdds", earnings: 175000 },
  { username: "QueenBets", earnings: 162500 },
  { username: "ReverseGod", earnings: 150000 },
  { username: "LuckyTayo", earnings: 130000 },
];

export default function Leaderboard() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 bg-white my-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-bold text-center text-[#131355] mb-10"
      >
        🏆 Weekly Leaderboard
      </motion.h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md">
          <thead className="bg-[#131355] text-white text-left text-sm">
            <tr>
              <th className="px-6 py-4">Rank</th>
              <th className="px-6 py-4">Username</th>
              <th className="px-6 py-4">Earnings</th>
              <th className="px-6 py-4">Trend</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, index) => (
              <tr
                key={index}
                className={`border-t ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="px-6 py-4 font-bold text-[#0070f3]">{index + 1}</td>
                <td className="px-6 py-4 font-medium">@{leader.username}</td>
                <td className="px-6 py-4 font-semibold text-green-600">
                  ₦{leader.earnings.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <ArrowUpRight className="text-green-500 w-5 h-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
