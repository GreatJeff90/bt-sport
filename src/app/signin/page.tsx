"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
      // You can pass rememberMe here if your backend supports it
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    if (result?.ok) {
      router.push("/dashboard");
    } else {
      setError("Login failed");
      setLoading(false);
    }
  };

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
          Log In
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-blue-100 placeholder:text-blue-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-200 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-blue-100 placeholder:text-blue-400 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm text-blue-400">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="accent-blue-600"
              />
              Remember me
            </label>
            <a href="/forgot-password" className="hover:text-blue-300 transition-all">
              Forgot password?
            </a>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md shadow-blue-600/30 transition-all duration-300"
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-blue-300">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-400 hover:text-blue-200 font-medium transition-all">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
