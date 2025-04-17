"use client";

import MatchCard from "./MatchCard";

const mockMatches = [
  {
    id: 1,
    teamA: "Manchester United",
    teamB: "Chelsea",
    time: "2025-04-17T20:00:00",
    odds: 2.45,
  },
  {
    id: 2,
    teamA: "Real Madrid",
    teamB: "Barcelona",
    time: "2025-04-18T18:30:00",
    odds: 3.15,
  },
];

export default function MatchList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {mockMatches.map((match) => (
        <MatchCard key={match.id} {...match} />
      ))}
    </div>
  );
}
