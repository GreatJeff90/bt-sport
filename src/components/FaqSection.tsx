"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is reverse betting?",
    answer: "Reverse betting means betting on events *not* to happen. Instead of predicting who wins, you profit when the expected doesn’t occur.",
  },
  {
    question: "How do I withdraw my winnings?",
    answer: "You can withdraw via bank transfer or your preferred payment method. Payouts are usually instant or within a few hours.",
  },
  {
    question: "Is this platform safe?",
    answer: "Absolutely. We use bank-level encryption and secure payment gateways to protect your data and funds.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-6 sm:px-12 py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-10 text-[#131355]">FAQs</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="w-full text-left flex justify-between items-center font-medium text-[#131355] text-lg"
              onClick={() => toggle(index)}
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
