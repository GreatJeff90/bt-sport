"use client";

import { useState } from "react";
import Image from "next/image";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] flex items-center justify-center px-4 py-12">
          <div className="max-w-md w-full bg-[#0f172a] border border-blue-800 rounded-2xl p-8 shadow-lg shadow-blue-900/40 backdrop-blur-md">
              <div className="flex justify-center mb-6">
  <Image
    src="/logo.png"
    alt="Logo"
    width={140}
    height={40}
    className="object-contain"
    priority
  />
</div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-300 text-center mb-6">
          Forgot Your Password?
        </h2>

        <p className="text-blue-200 text-center mb-6">
          Enter your email and we'll send you a link to reset your password.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-blue-200 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-blue-100 placeholder:text-blue-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md shadow-blue-600/30 transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-blue-300">
          Remember your password?{" "}
          <a href="/signin" className="text-blue-400 hover:text-blue-200 font-medium transition-all">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
