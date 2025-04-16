"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MobileAppPromo() {
  return (
    <section className="flex flex-col-reverse sm:flex-row items-center justify-between w-full max-w-7xl gap-12 mb-5 px-6 sm:px-12 mx-auto py-20 relative overflow-hidden rounded-[2rem] bg-white/30 shadow-2xl backdrop-blur-md">
      {/* Glowing BG Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#0070f3] blur-3xl opacity-20 rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#c03496] blur-3xl opacity-20 rounded-full animate-pulse" />
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col text-center sm:text-left max-w-xl gap-6 z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Mobile App <span className="text-[#0070f3]">Coming</span> Soon 📱
        </h2>

        <p className="text-lg sm:text-xl text-gray-600">
          Bet smarter. Bet faster. Wherever you go.
          <br />
          <span className="text-gray-500">Stay tuned for our official app launch.</span>
        </p>

        <div className="flex gap-4 mt-4 flex-wrap justify-center sm:justify-start">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 hover:opacity-90 transition-transform duration-300"
          >
            Get Notified
          </a>
          <a
            href="#"
            className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Image Preview with animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          delay: 0.4,
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        viewport={{ once: false }}
        className="relative w-full max-w-md sm:max-w-lg z-10"
      >
        <div className="overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500">
          <Image
            src="/app-preview.png"
            alt="Mobile App Preview"
            width={800}
            height={600}
            className="w-full h-auto object-cover rounded-[2rem]"
          />
        </div>
      </motion.div>
    </section>
  );
}
