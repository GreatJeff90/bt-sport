"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const tips = [
  {
    title: "How to Spot Unlikely Outcomes",
    excerpt:
      "Learn the psychology and stats behind identifying outcomes the crowd doesn’t expect.",
    link: "#",
  },
  {
    title: "Maximize Odds Without Risking It All",
    excerpt:
      "A smart strategy guide for making safer reverse bets that still pay off big.",
    link: "#",
  },
  {
    title: "3 Mistakes to Avoid in Reverse Betting",
    excerpt:
      "From chasing losses to poor bankroll management — here’s what not to do.",
    link: "#",
  },
];

export default function BettingTips() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-[#131355] mb-12 text-center"
      >
        🧠 Betting Tips & Insights
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-2 text-[#0070f3] mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm font-medium uppercase">Tip #{index + 1}</span>
            </div>
            <h3 className="text-lg font-semibold text-[#131355] mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{tip.excerpt}</p>
            <a
              href={tip.link}
              className="text-[#0070f3] font-medium text-sm hover:underline"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
