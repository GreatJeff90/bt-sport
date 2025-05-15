'use client';

import { FC } from 'react';

interface FilterBarProps {
  searchTerm: string;
  league: string;
  matchType: string;
  onSearchChange: (value: string) => void;
  onLeagueChange: (value: string) => void;
  onMatchTypeChange: (value: string) => void;
}

const FilterBar: FC<FilterBarProps> = ({
  searchTerm,
  league,
  matchType,
  onSearchChange,
  onLeagueChange,
  onMatchTypeChange,
}) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search team or league..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="px-4 py-2 border border-blue-200 rounded-lg w-full sm:w-64 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* League Dropdown */}
      <select
        value={league}
        onChange={(e) => onLeagueChange(e.target.value)}
        className="px-4 py-2 border border-blue-200 rounded-lg shadow-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option>All Leagues</option>
        <option>Premier League</option>
        <option>La Liga</option>
        <option>Bundesliga</option>
      </select>

      {/* Match Type Dropdown */}
      <select
        value={matchType}
        onChange={(e) => onMatchTypeChange(e.target.value)}
        className="px-4 py-2 border border-blue-200 rounded-lg shadow-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option>All Matches</option>
        <option>Live</option>
        <option>Past</option>
        <option>Upcoming</option>
      </select>
    </div>
  );
};

export default FilterBar;
