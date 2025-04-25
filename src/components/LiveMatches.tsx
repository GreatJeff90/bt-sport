'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

const LiveMatches = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/matches');
  };

  const matches = [
    {
      homeTeam: 'Liverpool',
      awayTeam: 'Manchester United',
      status: 'In Progress',
      time: '19:45',
      date: 'Apr 24',
    },
    {
      homeTeam: 'Barcelona',
      awayTeam: 'Real Madrid',
      status: 'Upcoming',
      time: '21:00',
      date: 'Apr 25',
    },
    {
      homeTeam: 'Chelsea',
      awayTeam: 'Arsenal',
      status: 'In Progress',
      time: '18:30',
      date: 'Apr 24',
    },
    {
      homeTeam: 'Bayern Munich',
      awayTeam: 'Borussia Dortmund',
      status: 'Upcoming',
      time: '20:15',
      date: 'Apr 26',
    },
    {
      homeTeam: 'Juventus',
      awayTeam: 'AC Milan',
      status: 'In Progress',
      time: '22:00',
      date: 'Apr 24',
    },
  ];

  return (
    <motion.div
      onClick={handleClick}
      className="bg-white rounded-2xl p-6 max-w-4xl mx-auto mt-8 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-blue-600 w-6 h-6"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM12 22c-5.52 0-10-4.48-10-10s4.48-10 10-10 10 4.48 10 10-4.48 10-10 10z" />
              <path d="M17 11h-3V8h-2v3H7v2h3v3h2v-3h3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-600">Live Matches</h3>
        </div>
        <ArrowRight className="text-blue-500 w-5 h-5" />
      </div>

      {/* Match List */}
      <div className="space-y-3">
        {matches.map((match, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-blue-50 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <img src="/logos/club-logo.png" alt="Home Logo" className="w-6 h-6 object-contain" />
              <span className="text-sm font-semibold text-blue-800">{match.homeTeam}</span>
              <span className="mx-1 text-gray-400 font-normal text-xs">vs</span>
              <span className="text-sm font-semibold text-blue-800">{match.awayTeam}</span>
              <img src="/logos/club-logo.png" alt="Away Logo" className="w-6 h-6 object-contain" />
            </div>
            <div className="text-right text-xs">
              <div className={`${match.status === 'In Progress' ? 'text-green-600' : 'text-yellow-600'} font-semibold`}>
                {match.status}
              </div>
              <div className="text-gray-500">{match.time} | {match.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <p className="text-sm text-center text-gray-500 mt-5">
        Tap to view full match dashboard and updates
      </p>
    </motion.div>
  );
};

export default LiveMatches;
