'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import MatchList from '@/components/MatchList';
import FilterBar from '@/components/FilterBar';

export default function MatchesPage() {
  const router = useRouter();

  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [league, setLeague] = useState('All Leagues');
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
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-8 tracking-tight">
        Available Matches
      </h1>

      {/* Pass filter state and setters to FilterBar */}
      <FilterBar
        searchTerm={searchTerm}
        league={league}
        matchType={matchType}
        onSearchChange={setSearchTerm}
        onLeagueChange={setLeague}
        onMatchTypeChange={setMatchType}
      />

      <div className="space-y-6">
        {/* Pass filters to MatchList */}
        <MatchList
          onPlaceBet={handlePlaceBet}
          searchTerm={searchTerm}
          selectedLeague={league}
          matchType={matchType}
        />
      </div>
    </motion.div>
  );
}
