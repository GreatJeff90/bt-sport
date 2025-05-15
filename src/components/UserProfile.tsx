'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, PlusCircle, Clock } from 'lucide-react';

const UserProfile = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <motion.div
      className="bg-white text-black rounded-2xl p-6 max-w-4xl mx-auto shadow-xl "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >   

      {/* Balance Section - Responsive Layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-blue-50 p-4 rounded-xl mb-6 gap-4">
        {/* Balance + Eye Toggle */}
        <div className="flex items-center gap-3">
          <div>
            <p className="text-sm text-gray-600">Available Balance</p>
            <h3 className="text-2xl font-bold text-blue-600">
              {isBalanceVisible ? '₦1500' : '****'}
            </h3>
          </div>
          <button
            onClick={toggleBalanceVisibility}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {isBalanceVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 justify-end w-full sm:w-auto">
          <button className="bg-blue-500 text-white rounded-xl p-3 sm:p-4 flex items-center gap-2 shadow hover:scale-105 transition-transform duration-200">
            <PlusCircle size={20} />
            <span className="text-sm font-medium">Add Money</span>
          </button>
          <button className="bg-blue-100 text-blue-700 rounded-xl p-3 sm:p-4 flex items-center gap-2 shadow hover:scale-105 transition-transform duration-200">
            <Clock size={20} />
            <span className="text-sm font-medium">History</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default UserProfile;
