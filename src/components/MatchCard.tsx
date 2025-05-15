'use client';

import { motion } from 'framer-motion';

interface MatchCardProps {
  id: number;
  teamA: string;
  teamB: string;
  homeLogo: string;   // <-- add this
  awayLogo: string;   // <-- add this
  time: string;
  odds: number;
  status: string;
  onPlaceBet: (matchId: number) => void;
}

export default function MatchCard({
  id,
  teamA,
  teamB,
  homeLogo,
  awayLogo,
  time,
  odds,
  status,
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
      <div className="flex items-center gap-3 text-lg sm:text-xl font-semibold text-blue-800 mb-2">
        {/* Home team logo */}
        <img src={homeLogo} alt={`${teamA} logo`} className="w-8 h-8 object-contain" />
        {/* Home team name */}
        <span>{teamA}</span>
        <span className="text-gray-500">vs</span>
        {/* Away team name */}
        <span>{teamB}</span>
        {/* Away team logo */}
        <img src={awayLogo} alt={`${teamB} logo`} className="w-8 h-8 object-contain" />
      </div>

      <div className="text-sm text-gray-500 mb-2">{matchTime}</div>

      <div className="text-xs font-semibold text-blue-500 uppercase mb-4">{status}</div>

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
