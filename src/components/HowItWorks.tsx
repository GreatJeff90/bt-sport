"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Shuffle, Trophy } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Lightbulb className="w-10 h-10 text-[#0070f3]" />,
      title: "Pick Unlikely Outcomes",
      description:
        "Choose what you believe won't happen in a match — it's all about flipping the odds.",
    },
    {
      icon: <Shuffle className="w-10 h-10 text-[#0070f3]" />,
      title: "Stake With Strategy",
      description:
        "Place your bet with confidence. The less likely it is, the higher the reward.",
    },
    {
      icon: <Trophy className="w-10 h-10 text-[#0070f3]" />,
      title: "Win Big Differently",
      description:
        "If it doesn't happen, you win. It's time to rethink victory in sports betting.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full max-w-7xl mx-auto px-6 py-20 text-center sm:text-left"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#131355]"
      >
        How It <span className="text-[#0070f3]">Works</span>
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-[#e6f0ff]"
          >
            <div className="mb-4 flex justify-center sm:justify-start">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#131355]">
              {step.title}
            </h3>
            <p className="text-gray-600 text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}
