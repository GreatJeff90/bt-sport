'use client';

import { motion } from 'framer-motion';

interface BetSlipCardProps {
  id: number;
  teamA: string;
  teamB: string;
  time: string;
  odds: number;
  status: string;
  amount: number;
  onCancel: (betId: number) => void;
}

export default function ReverseBetCard({
  id,
  teamA,
  teamB,
  time,
  odds,
  status,
  amount,
  onCancel,
}: BetSlipCardProps) {
  const matchTime = new Date(time).toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-blue-50 border border-blue-100 rounded-2xl shadow p-6 max-w-sm mx-auto"
    >
      <div className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
        {teamA} <span className="text-gray-500">vs</span> {teamB}
      </div>

      <div className="text-sm text-gray-500 mb-2">{matchTime}</div>

      <div className="text-xs font-semibold text-blue-500 uppercase mb-2">
        {status}
      </div>

      <div className="flex justify-between items-center text-sm mb-1">
        <span className="text-gray-600 font-medium">Amount:</span>
        <span className="font-bold text-gray-800">₦{amount.toLocaleString()}</span>
      </div>

      <div className="flex justify-between items-center text-sm mb-4">
        <span className="text-gray-600 font-medium">Reverse Odds:</span>
        <span className="text-lg font-bold text-blue-600">{odds}</span>
      </div>

      <button
        onClick={() => onCancel(id)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-xl transition-transform duration-200 hover:scale-105 shadow"
      >
        Cancel Bet
      </button>
    </motion.div>
  );
}
