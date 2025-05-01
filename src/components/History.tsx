"use client";

import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link'; // Import the Link component

const History = () => {
  const transactions = [
    {
      date: '2025-04-20',
      betDetails: 'Football Match: Team A vs Team B',
      wager: '$50',
      outcome: 'win',
      payout: '$100',
    },
    {
      date: '2025-04-18',
      betDetails: 'Basketball Match: Team C vs Team D',
      wager: '$75',
      outcome: 'loss',
    },
    {
      date: '2025-04-15',
      betDetails: 'Tennis Match: Player X vs Player Y',
      wager: '$25',
      outcome: 'win',
      payout: '$50',
    },
  ];

  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-xl max-w-4xl mx-auto mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg font-semibold text-blue-500 mb-4">History</h3>
      {transactions.map((transaction, index) => (
        <Link key={index} href="/dashboard/transactions" passHref> 
          <motion.div
            className="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">{transaction.date}</span>
              <span className="text-md font-semibold">{transaction.betDetails}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">{transaction.wager}</span>
              <div className="flex items-center">
                {transaction.outcome === 'win' ? (
                  <>
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="ml-2 text-sm text-blue-500">{transaction.payout}</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-6 h-6 text-red-500" />
                    <span className="ml-2 text-sm text-red-500">Loss</span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};

export default History;
