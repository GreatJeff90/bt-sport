'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  CircleUserRound,
  LogOut,
  Pencil,
  Eye,
  EyeOff,
  Settings,
  Trophy,
  Coins,
  ScrollText,
  Banknote,
  ShieldCheck,
  Link2,
} from 'lucide-react';

import StatsCard from '@/components/StatsCard'; // 👈 Make sure this path is correct

export default function ProfilePage() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const toggleBalance = () => setIsBalanceVisible(!isBalanceVisible);

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+234 701 234 5678',
    balance: '₦25,000.00',
  };

  const cards = [
    {
      label: 'Transaction History',
      icon: <ScrollText className="w-5 h-5 text-blue-600" />,
    },
    {
      label: 'Linked Accounts',
      icon: <Link2 className="w-5 h-5 text-blue-600" />,
    },
    {
      label: 'Security Settings',
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-3xl mx-auto px-6 py-6">
        {/* Top Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative bg-white rounded-2xl shadow-md p-5"
        >
          <button className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 transition">
            <Link href="/dashboard/settings">
              <Settings className="w-6 h-6" />
            </Link>
          </button>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <CircleUserRound className="text-blue-600 w-8 h-8" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.phone}</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Available Balance</p>
              <h3 className="text-2xl font-bold text-blue-600">
                {isBalanceVisible ? user.balance : '****'}
              </h3>
            </div>
            <button
              onClick={toggleBalance}
              className="text-blue-600 hover:text-blue-800 transition"
            >
              {isBalanceVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <StatsCard />
        </motion.div>

        {/* Account Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 bg-white rounded-2xl shadow-md p-5 space-y-4"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-md font-medium text-gray-700">{user.email}</p>
            </div>
            <Pencil className="w-5 h-5 text-blue-500 cursor-pointer" />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="text-md font-medium text-gray-700">{user.phone}</p>
            </div>
            <Pencil className="w-5 h-5 text-blue-500 cursor-pointer" />
          </div>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 grid grid-cols-2 gap-4"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <p className="text-sm font-medium text-gray-700">{card.label}</p>
              {card.icon}
            </div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
            <Pencil size={18} />
            Edit Profile
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-100 text-red-600 rounded-xl shadow hover:bg-red-200 transition">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}
