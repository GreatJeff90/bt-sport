// components/Sidebar.tsx
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/bets">My Bets</Link></li>
        <li><Link href="/dashboard/profile">Profile</Link></li>
        <li><Link href="/dashboard/referrals">Referrals</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
