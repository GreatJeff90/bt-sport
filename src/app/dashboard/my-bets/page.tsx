'use client';

import UserProfile from "@/components/UserProfile";
import History from "@/components/History";
import Spacer from "@/components/Spacer";
import BottomNav from "@/components/BottomNav";
import ReverseBetCard from "@/components/ReverseBetCard";
import ReverseBetList from "@/components/ReverseBetList";

export default function MyBets() {
  const handleCancelBet = (betId: number) => {
    console.log("Cancelling bet with ID:", betId);
    // Cancel logic here
  };

  return (
    <main>
      <UserProfile />

      {/* List of Reverse Bets */}
      <ReverseBetList onCancel={handleCancelBet} filterStatus="All" />

      <History />
      <Spacer />
      <BottomNav />
    </main>
  );
}
