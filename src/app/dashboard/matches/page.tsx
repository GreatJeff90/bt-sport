'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import MatchList from '@/components/MatchList';
import FilterBar from '@/components/FilterBar';

export default function MatchesPage() {
  const router = useRouter();
  const [matchType, setMatchType] = useState('All Matches');

  const handlePlaceBet = (matchId: number) => {
    router.push(`/my-bets?matchId=${matchId}`);
  };

  return (
    <motion.div
      className="min-h-screen bg-white text-black py-16 px-6 sm:px-12 font-sans"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-8 tracking-tight">
        Available Matches
      </h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <FilterBar />
      </div>

      {/* Match List */}
      <div className="space-y-6">
        <MatchList onPlaceBet={handlePlaceBet} matchType={matchType} />
      </div>
    </motion.div>
  );
}
