"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, LineChart } from "lucide-react";

export default function WhyChoose() {
  const features = [
    {
      icon: <LineChart className="w-10 h-10 text-[#0070f3]" />,
      title: "Smart Analytics",
      description:
        "Advanced statistical analysis to help you make informed betting decisions.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: "Secure Platform",
      description:
        "Bank-grade security measures to protect your funds and personal information.",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-400" />,
      title: "Instant Payouts",
      description:
        "Quick and hassle-free withdrawals with multiple payment options.",
    },
  ];

  return (
    <section
      id="why-choose"
      className="w-full max-w-7xl mx-auto px-6 py-20 text-center sm:text-left"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-[#131355]"
      >
        Why Choose <span className="text-[#0070f3]">BT Sport</span>
      </motion.h2>

      <div className="grid gap-10 sm:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border border-[#e6f0ff]"
          >
            <div className="mb-4 flex justify-center sm:justify-start">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#131355]">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-base">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
