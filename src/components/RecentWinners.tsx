"use client";

import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

const winners = [
  { name: "John D.", amount: 120000 },
  { name: "Chuka123", amount: 95000 },
  { name: "Ada B.", amount: 78000 },
  { name: "Obinna K.", amount: 150000 },
  { name: "Blessing M.", amount: 65000 },
];

export default function RecentWinners() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 bg-gradient-to-br from-[#f5faff] to-[#e6f0ff] rounded-2xl shadow-lg my-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-[#131355] mb-10"
      >
        🎉 Recent Winners
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {winners.map((winner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-4 border border-gray-100 rounded-xl shadow-sm flex items-center space-x-4 hover:shadow-md transition duration-300"
          >
            <PartyPopper className="text-green-500 w-6 h-6 flex-shrink-0" />
            <p className="text-sm text-gray-700 font-medium">
              <span className="text-[#131355] font-semibold">{winner.name}</span>{" "}
              just won{" "}
              <span className="text-green-600 font-bold">₦{winner.amount.toLocaleString()}</span>{" "}
              on a reverse bet! 💰
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
