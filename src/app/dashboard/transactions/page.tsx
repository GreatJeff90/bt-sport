import UserProfile from "@/components/UserProfile";
import History from "@/components/History";
import Spacer from "@/components/Spacer";
import BottomNav from "@/components/BottomNav";

export default function transactions() {
  return (
    <main>
      <UserProfile />
      <History />
      <Spacer />
      <BottomNav />
    </main>
  );
}
