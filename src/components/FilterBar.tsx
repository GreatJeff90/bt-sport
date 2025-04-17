"use client";

export default function FilterBar() {
  return (
    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
      <input
        type="text"
        placeholder="Search team or league..."
        className="px-4 py-2 border rounded-lg w-full sm:w-64"
      />
      <select className="px-4 py-2 border rounded-lg">
        <option>All Leagues</option>
        <option>Premier League</option>
        <option>La Liga</option>
        <option>Bundesliga</option>
      </select>
    </div>
  );
}
