"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative  overflow-hidden">
      <main className="flex flex-col-reverse sm:flex-row items-center justify-between w-full max-w-7xl gap-12 px-6 sm:px-12 mx-auto py-20">
        {/* Text Section */}
        <div className="flex flex-col text-center sm:text-left max-w-xl gap-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold leading-tight"
          >
            Win by Betting on What{" "}
            <span className="text-[#0070f3]">Won't</span> Happen.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Reverse the rules. Outsmart the game. Reverse betting starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-4 mt-4 flex-wrap justify-center sm:justify-start"
          >
            <a
              href="#how-it-works"
              className="bg-[#2563eb] text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-[#1e4db7] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-[#2563eb] border border-[#2563eb] px-6 py-3 rounded-full font-semibold hover:bg-[#eef4ff] hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Start Betting Differently
            </a>
          </motion.div>

        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative w-full max-w-md sm:max-w-lg transition-transform duration-300 ease-in-out"
        >
          <div className="overflow-visible">
            <Image
              src="/hero1.png"
              alt="Floating Mockup"
              width={1000}
              height={800}
              className="w-full h-auto object-contain select-none"
              priority
            />
          </div>
        </motion.div>

      </main>

    </section>
  );
}
