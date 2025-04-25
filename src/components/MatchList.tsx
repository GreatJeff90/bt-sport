import { FC } from "react";
import MatchCard from "./MatchCard";

interface MatchListProps {
  onPlaceBet: (matchId: number) => void;
  matchType?: string; // Optional match type filter
}

const mockMatches = [
  {
    id: 1,
    teamA: "Manchester United",
    teamB: "Chelsea",
    time: "2025-04-25T20:00:00",
    odds: 2.45,
    status: "Upcoming",
  },
  {
    id: 2,
    teamA: "Real Madrid",
    teamB: "Barcelona",
    time: "2025-04-24T18:30:00",
    odds: 3.15,
    status: "Live",
  },
  {
    id: 3,
    teamA: "Liverpool",
    teamB: "Arsenal",
    time: "2025-04-23T18:30:00",
    odds: 1.95,
    status: "Past",
  },
];

const MatchList: FC<MatchListProps> = ({ onPlaceBet, matchType = "All Matches" }) => {
  const filteredMatches =
    matchType === "All Matches"
      ? mockMatches
      : mockMatches.filter((match) => match.status === matchType);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {filteredMatches.map((match) => (
        <MatchCard key={match.id} {...match} onPlaceBet={onPlaceBet} />
      ))}
    </div>
  );
};

export default MatchList;
