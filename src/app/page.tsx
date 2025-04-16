"use client";

import HowItWorks from "@/components/HowItWorks";
import PlatformStats from "@/components/PlatformStats";
import WhyChoose from "@/components/WhyChoose";
import ReferralProgram from "@/components/ReferralProgram";
import JoinNow from "@/components/JoinNow";
import RecentWinners from "@/components/RecentWinners";
import Leaderboard from "@/components/Leaderboard";
import Testimonials from "@/components/Testimonials";
import BettingTips from "@/components/BettingTips";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FaqSection from "@/components/FaqSection";
import MobileAppPromo from "@/components/MobileAppPromo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
    <div className="min-h-screen bg-white text-black font-sans transition-colors duration-500 bg-gradient-to-b from-white via-[#f5faff] to-[#e6f0ff] ">

      <Header />
     
      <HeroSection />

      <JoinNow />

      <HowItWorks />
      
      <WhyChoose />

      <PlatformStats />

      <RecentWinners />

      <Leaderboard />

      {/* <LiveMatches /> */}

      <Testimonials />


      <ReferralProgram />

      <BettingTips />

      <FaqSection />

      <MobileAppPromo />

     
      
      </div>
       <Footer />
    </div>
  );
}
