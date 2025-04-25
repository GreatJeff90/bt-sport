"use client";

import { motion } from "framer-motion";
import { TrendingUp, Trophy, Users } from "lucide-react";

const stats = [
  { label: "Total Earnings", value: "₦500,000", icon: <TrendingUp size={24} /> },
  { label: "Total Bets", value: "150", icon: <Trophy size={24} /> },
  { label: "Referrals", value: "30", icon: <Users size={24} /> },
];

export default function StatsCard() {
  return (
    <motion.section
      className="bg-white text-black rounded-2xl p-6 max-w-4xl mx-auto shadow-xl my-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold text-blue-500 mb-6">My Stats</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-blue-50 p-4 rounded-xl flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="bg-blue-100 text-blue-700 rounded-full p-3">
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-600">{stat.label}</p>
              <h3 className="text-lg font-bold text-blue-600">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
