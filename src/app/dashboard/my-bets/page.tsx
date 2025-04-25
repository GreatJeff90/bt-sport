'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2, PlusCircle, ArrowRight, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/DashboardHeader';

const BetCard = ({ bet, onDelete }: { bet: any, onDelete: () => void }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between">
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{bet.match}</h4>
        <p className="text-sm text-gray-500">{bet.date}</p>
      </div>
      <div className="flex gap-4">
        <Link href={`/bet-details/${bet.id}`} passHref>
          <button className="text-blue-600 hover:text-blue-800">
            Place Reverse Bet
          </button>
        </Link>
        <button onClick={onDelete} className="text-red-600 hover:text-red-800">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default function MyBetsPage() {
  const [bets, setBets] = useState([
    { match: 'Team A vs Team B', date: '2025-04-30', id: 1 },
    { match: 'Team C vs Team D', date: '2025-05-02', id: 2 },
  ]);

  const deleteBet = (id: number) => {
    setBets(bets.filter(bet => bet.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="max-w-3xl mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white rounded-2xl shadow-md p-5"
        >
          <h2 className="text-lg font-bold text-gray-800">Available Matches</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 space-y-4"
        >
          {bets.map(bet => (
            <BetCard key={bet.id} bet={bet} onDelete={() => deleteBet(bet.id)} />
          ))}
        </motion.div>
      </main>
    </div>
  );
}
