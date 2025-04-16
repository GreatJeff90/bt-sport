"use client";

import { Gift, UserPlus2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ReferralProgram() {
  return (
    <section
      className="w-full max-w-7xl mx-auto my-24 px-6 sm:px-12 rounded-xl bg-gradient-to-r from-[#e6f0ff] to-[#f5faff] overflow-hidden shadow-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center justify-between gap-10 py-16"
      >
        <div className="flex items-center gap-4">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Gift className="w-10 h-10 text-[#0070f3]" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#131355] mb-2">
              Invite & Earn
            </h2>
            <p className="text-gray-600 text-base">
              Refer a friend & earn <span className="text-[#131355] font-semibold">₦500</span> when they place a bet!
            </p>
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="mt-6 md:mt-0 inline-flex items-center gap-2 bg-[#0070f3] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-[#005fcc] transition"
        >
          <UserPlus2 className="w-5 h-5" />
          Get Your Referral Link
        </motion.button>
      </motion.div>
    </section>
  );
}
