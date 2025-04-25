'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-black bg-white">
      <main className="flex flex-col-reverse sm:flex-row items-center justify-between w-full max-w-7xl gap-12 px-6 sm:px-12 mx-auto py-20">
        {/* Left: Text */}
        <div className="flex flex-col text-center sm:text-left max-w-xl gap-6 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Flip the Game.{" "}
            <span className="text-blue-600">Bet Against the Odds</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-600"
          >
            It's not about what will happen — it’s about what <em>won’t</em>. Welcome to reverse betting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex gap-4 mt-4 flex-wrap justify-center sm:justify-start"
          >
            <a
              href="#how-it-works"
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              How It Works
            </a>
            <a
              href="#"
              className="text-blue-600 border border-blue-600 px-6 py-3 rounded-2xl font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              Start Betting Differently
            </a>
          </motion.div>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="relative w-full max-w-md sm:max-w-lg transition-transform duration-300 ease-in-out"
        >
          <Image
            src="/hero1.png"
            alt="Hero Mockup"
            width={1000}
            height={800}
            className="w-full h-auto object-contain select-none drop-shadow-xl"
            priority
          />
        </motion.div>
      </main>
    </section>
  );
}
