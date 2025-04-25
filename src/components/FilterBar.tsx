'use client';

export default function FilterBar() {
  return (
    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search team or league..."
        className="px-4 py-2 border border-blue-200 rounded-lg w-full sm:w-64 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* All Leagues Dropdown */}
      <select className="px-4 py-2 border border-blue-200 rounded-lg shadow-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option>All Leagues</option>
        <option>Premier League</option>
        <option>La Liga</option>
        <option>Bundesliga</option>
      </select>

      {/* All Matches Dropdown */}
      <select className="px-4 py-2 border border-blue-200 rounded-lg shadow-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <option>All Matches</option>
        <option>Live</option>
        <option>Past</option>
        <option>Upcoming</option>
      </select>
    </div>
  );
}
