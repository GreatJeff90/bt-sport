"use client";  // because SessionProvider uses React context and hooks

import { SessionProvider } from "next-auth/react";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/DashboardHeader";
import Spacer from "@/components/Spacer";

const DashboardLayout = ({ children, session }: { children: React.ReactNode; session?: any }) => {
  return (
    <SessionProvider session={session}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6">{children}</main>
        <Spacer />
        <BottomNav />
      </div>
    </SessionProvider>
  );
};

export default DashboardLayout;
