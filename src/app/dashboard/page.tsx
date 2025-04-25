import UserProfile from "@/components/UserProfile";
import StatsCard from "@/components/StatsCard";
import LiveMatches from "@/components/LiveMatches";
import Leaderboard from "@/components/Leaderboard";
import History from "@/components/History";
import Spacer from "@/components/Spacer";
import BottomNav from "@/components/BottomNav";

export default function Dashboard() {
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
