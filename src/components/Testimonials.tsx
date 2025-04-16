"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    avatar: "/avatars/About me-cuate.png",
    username: "@chuka123",
    quote: "I never thought betting this way would be this fun and profitable!",
  },
  {
    avatar: "/avatars/Headphone-pana.png",
    username: "@amakaWins",
    quote: "Reverse betting flipped the game for me. BT Sport is the real deal!",
  },
  {
    avatar: "/avatars/Headphone-pana.png",
    username: "@oddsDave",
    quote: "I’m hooked. Finally a system that rewards smart thinking, not just luck.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 text-center bg-[#f9fafe] my-20 rounded-xl">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl font-bold text-[#131355] mb-14"
      >
        💬 What Our Users Say
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-center justify-center mb-4">
              <Image
                src={t.avatar}
                alt={t.username}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-gray-700 italic text-sm mb-4">"{t.quote}"</p>
            <span className="text-[#0070f3] font-medium">{t.username}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
