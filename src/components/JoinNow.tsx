"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function JoinNow() {
  return (
    <section className="w-full max-w-7xl mx-auto my-24 px-6 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-[#131355] text-white rounded-2xl shadow-xl py-16 px-6 sm:px-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Ready to Win Differently?
        </h2>
        <p className="text-base sm:text-lg text-gray-200 mb-8">
          Join our Telegram channel for tips, bonuses, and exclusive updates!
        </p>

        <a
          href="https://t.me/YOUR_TELEGRAM_CHANNEL" // replace with your real Telegram link
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#0070f3] hover:bg-[#005fcc] text-white px-6 py-3 rounded-full text-sm font-semibold transition shadow-lg"
          >
            <Send className="w-5 h-5" />
            Join Our Telegram
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
