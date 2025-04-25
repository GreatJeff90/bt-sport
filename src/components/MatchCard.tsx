'use client';

import { motion } from 'framer-motion';

interface MatchCardProps {
  id: number;
  teamA: string;
  teamB: string;
  time: string;
  odds: number;
  onPlaceBet: (matchId: number) => void;
}

export default function MatchCard({
  id,
  teamA,
  teamB,
  time,
  odds,
  onPlaceBet,
}: MatchCardProps) {
  const matchTime = new Date(time).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-blue-50 border border-blue-100 rounded-2xl shadow p-6"
    >
      <div className="text-lg sm:text-xl font-semibold text-blue-800 mb-2">
        {teamA} <span className="text-gray-500">vs</span> {teamB}
      </div>

      <div className="text-sm text-gray-500 mb-4">{matchTime}</div>

      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-600 font-medium">Reverse Odds:</span>
        <span className="text-xl font-bold text-blue-600">{odds}</span>
      </div>

      <button
        onClick={() => onPlaceBet(id)}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-transform duration-200 hover:scale-105 shadow"
      >
        Place Reverse Bet
      </button>
    </motion.div>
  );
}
