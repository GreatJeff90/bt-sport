"use client";
import { motion } from "framer-motion";

export default function LiveMatches() {
  return (
    <section className="w-full max-w-4xl my-16 bg-white rounded-xl shadow-lg p-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-center text-[#131355] mb-8"
      >
        ⚽ Live Matches
      </motion.h2>

      <div className="border border-[#e6e6e6] rounded-lg p-6 bg-gradient-to-br from-[#f5faff] to-[#e6f0ff]">
        {/* Match 1 */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <span className="text-green-500">🟢 LIVE Football</span>
          <span className="font-semibold text-gray-700">67:45</span>
        </div>
        <div className="flex justify-between items-center font-semibold text-xl text-[#131355] mb-6">
          <span>Real Madrid</span>
          <span className="text-2xl text-black">1 - 1</span>
          <span>Barcelona</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <OddsButton label="1" odds="2.40" />
          <OddsButton label="X" odds="3.00" />
          <OddsButton label="2" odds="2.90" />
        </div>

        {/* Match 2 */}
        <div className="flex justify-between items-center text-sm text-gray-600 my-5">
          <span className="text-green-500">🟢 LIVE Football</span>
          <span className="font-semibold text-gray-700">52:10</span>
        </div>
        <div className="flex justify-between items-center font-semibold text-xl text-[#131355] mb-6">
          <span>Juventus</span>
          <span className="text-2xl text-black">0 - 2</span>
          <span>Napoli</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <OddsButton label="1" odds="4.10" />
          <OddsButton label="X" odds="3.30" />
          <OddsButton label="2" odds="1.95" />
        </div>

        {/* Match 3 */}
        <div className="flex justify-between items-center text-sm text-gray-600 my-5">
          <span className="text-green-500">🟢 LIVE Football</span>
          <span className="font-semibold text-gray-700">74:22</span>
        </div>
        <div className="flex justify-between items-center font-semibold text-xl text-[#131355] mb-6">
          <span>PSG</span>
          <span className="text-2xl text-black">3 - 0</span>
          <span>Lyon</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <OddsButton label="1" odds="1.65" />
          <OddsButton label="X" odds="4.50" />
          <OddsButton label="2" odds="6.00" />
        </div>
      </div>
    </section>
  );
}

function OddsButton({ label, odds }: { label: string; odds: string }) {
  return (
    <div className="bg-white rounded-md shadow-md p-4 cursor-pointer hover:bg-[#e0eaff] transition duration-300">
      <span className="block text-lg font-semibold">{label}</span>
      <span className="text-sm text-gray-500">({odds})</span>
    </div>
  );
}
