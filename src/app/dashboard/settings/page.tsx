'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ChevronUp,
  Key,
  CreditCard,
  PiggyBank,
  LayoutDashboard,
  ShieldQuestion,
  Palette,
  ShieldCheck,
  Trash2,
} from 'lucide-react';

export default function SettingsPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sectionWrapper =
    'bg-white rounded-2xl shadow-md p-6 mb-6 transition hover:shadow-lg';

  const sectionHeader =
    'flex justify-between items-center cursor-pointer select-none group';

  const sectionTitle =
    'text-xl font-semibold flex items-center gap-3 text-blue-600 group-hover:text-blue-700';

  const label = 'block text-sm font-medium text-gray-600';
  const input =
    'w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition';

  const sectionContentVariants = {
    initial: { opacity: 0, height: 0 },
    animate: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-10 text-blue-600">Settings</h1>

      {/* SECTION TEMPLATE */}
      {[
        {
          id: 'login',
          icon: <Key className="w-5 h-5 text-blue-500" />,
          title: 'Login Settings',
          content: (
            <>
              <label className={label}>Change Email</label>
              <input type="email" className={input} placeholder="Enter new email" />

              <label className={label}>Change Password</label>
              <input type="password" className={input} placeholder="Enter new password" />
            </>
          ),
        },
        {
          id: 'payment',
          icon: <CreditCard className="w-5 h-5 text-blue-500" />,
          title: 'Payment Settings',
          content: (
            <>
              <label className={label}>Card Number</label>
              <input type="text" className={input} placeholder="Enter card number" />

              <label className={label}>Expiration Date</label>
              <input type="text" className={input} placeholder="MM/YY" />
            </>
          ),
        },
        {
          id: 'saving',
          icon: <PiggyBank className="w-5 h-5 text-blue-500" />,
          title: 'Saving Settings',
          content: (
            <>
              <label className={label}>Auto-Save Amount</label>
              <input type="number" className={input} placeholder="Enter save amount" />
            </>
          ),
        },
        {
          id: 'homepage',
          icon: <LayoutDashboard className="w-5 h-5 text-blue-500" />,
          title: 'Homepage Settings',
          content: (
            <>
              <label className={label}>Homepage Layout</label>
              <select className={input}>
                <option>Default</option>
                <option>Compact</option>
                <option>Grid</option>
              </select>
            </>
          ),
        },
        {
          id: 'security',
          icon: <ShieldQuestion className="w-5 h-5 text-blue-500" />,
          title: 'Security Questions',
          content: (
            <>
              <label className={label}>Security Question</label>
              <input type="text" className={input} placeholder="Enter your question" />

              <label className={label}>Answer</label>
              <input type="text" className={input} placeholder="Enter your answer" />
            </>
          ),
        },
        {
          id: 'themes',
          icon: <Palette className="w-5 h-5 text-blue-500" />,
          title: 'Themes',
          content: (
            <>
              <label className={label}>Choose Theme</label>
              <select className={input}>
                <option>Light</option>
                <option>Dark</option>
                <option>System Default</option>
              </select>
            </>
          ),
        },
        {
          id: 'securityCenter',
          icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
          title: 'Security Center',
          content: (
            <>
              <button className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Enable Two-Factor Authentication
              </button>
              <button className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Change Password
              </button>
            </>
          ),
        },
        {
          id: 'closeAccount',
          icon: <Trash2 className="w-5 h-5 text-red-600" />,
          title: 'Close Account',
          content: (
            <>
              <p className="text-sm text-gray-600">
                Are you sure you want to close your account? This action cannot be undone.
              </p>
              <button className="w-full p-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                Close Account
              </button>
            </>
          ),
          textColor: 'text-red-600',
        },
      ].map(({ id, icon, title, content, textColor }) => (
        <section key={id} className={sectionWrapper}>
          <div
            onClick={() => toggleSection(id)}
            className={`${sectionHeader}`}
          >
            <h2 className={`${sectionTitle} ${textColor || ''}`}>
              {icon}
              {title}
            </h2>
            {openSection === id ? <ChevronUp /> : <ChevronDown />}
          </div>

          <AnimatePresence initial={false}>
            {openSection === id && (
              <motion.div
                className="overflow-hidden mt-4 space-y-4"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={sectionContentVariants}
                transition={{ duration: 0.3 }}
              >
                {content}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      ))}
    </div>
  );
}
