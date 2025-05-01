'use client';

import { FC } from "react";
import ReverseBetCard from "./ReverseBetCard";
import { motion } from "framer-motion";

const mockReverseBets = [
  {
    id: 1,
    teamA: "Man Utd",
    teamB: "Chelsea",
    time: "2025-04-25T20:00:00",
    odds: 2.45,
    amount: 5000,
    status: "Active",
  },
  {
    id: 2,
    teamA: "Real Madrid",
    teamB: "Barcelona",
    time: "2025-04-24T18:30:00",
    odds: 3.15,
    amount: 7000,
    status: "Won",
  },
  {
    id: 3,
    teamA: "Liverpool",
    teamB: "Arsenal",
    time: "2025-04-23T18:30:00",
    odds: 1.95,
    amount: 4000,
    status: "Lost",
  },
];

interface ReverseBetListProps {
  onCancel: (betId: number) => void;
}

const ReverseBetList: FC<ReverseBetListProps> = ({ onCancel }) => {
  return (
    <motion.div
      className="bg-white text-black rounded-2xl p-6 mt-6 max-w-4xl mx-auto shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-start gap-6">
        {mockReverseBets.map((bet) => (
          <div className="flex-shrink-0 w-full sm:w-80">
            <ReverseBetCard key={bet.id} {...bet} onCancel={onCancel} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ReverseBetList;
