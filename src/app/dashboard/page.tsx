
import { redirect } from "next/navigation";

import UserProfile from "@/components/UserProfile";
import StatsCard from "@/components/StatsCard";
import LiveMatches from "@/components/LiveMatches";
import Leaderboard from "@/components/Leaderboard";
import History from "@/components/History";
import Spacer from "@/components/Spacer";
import BottomNav from "@/components/BottomNav";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login if not authenticated
    redirect("/signin");
  }
  return (
    <main>
      <UserProfile />
      <StatsCard />
      <LiveMatches />
      <Leaderboard />
      <History />
      <Spacer />
      <BottomNav />
    </main>
  );
}

