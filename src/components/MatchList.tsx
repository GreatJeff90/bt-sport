'use client';

import { FC, useEffect, useState } from 'react';
import MatchCard from './MatchCard';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  league: string;           // add league property (you'll need to fetch it in API)
  status: string;
  time: string; // formatted time string like "20:00"
  date: string; // formatted date string like "May 15"
  odds?: number;
}

interface MatchListProps {
  onPlaceBet: (matchId: number) => void;
  matchType?: string;
  searchTerm?: string;
  league?: string;
}

const MatchList: FC<MatchListProps> = ({
  onPlaceBet,
  matchType = 'All Matches',
  searchTerm = '',
  league = 'All Leagues',
}) => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const res = await fetch('/api/matches');
        const data = await res.json();
        if (data.matches) {
          const withOdds = data.matches.map((m: Match) => ({
            ...m,
            odds: +(1.5 + Math.random() * 2).toFixed(2),
          }));

          setMatches(withOdds);
        }
      } catch (err) {
        console.error('Failed to load matches:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, []);

  // Apply all filters here
  const filteredMatches = matches.filter((m) => {
    const matchTypeFilter = matchType === 'All Matches' || m.status === matchType;
    const leagueFilter = league === 'All Leagues' || m.league === league;
    const searchFilter =
      searchTerm === '' ||
      m.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.league.toLowerCase().includes(searchTerm.toLowerCase());

    return matchTypeFilter && leagueFilter && searchFilter;
  });

  if (loading) return <p className="text-sm text-gray-400">Loading matches...</p>;
  if (filteredMatches.length === 0)
    return <p className="text-sm text-gray-500">No matches found.</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {filteredMatches.map((match) => (
        <MatchCard
          key={match.id}
          id={match.id}
          teamA={match.homeTeam}
          homeLogo={match.homeLogo}
          teamB={match.awayTeam}
          awayLogo={match.awayLogo}
          time={`${match.date} ${match.time}`}
          odds={match.odds ?? 2.5}
          status={match.status}
          onPlaceBet={onPlaceBet}
        />
      ))}
    </div>
  );
};

export default MatchList;
