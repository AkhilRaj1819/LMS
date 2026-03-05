"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Lock, Mail as MailIcon } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/pages/adminDashboard");
    } else {
      alert("Invalid credentials");
    }
    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/pages/adminDashboard?admin=true" });
  };

  return (
    <div className="h-screen bg-[#F8F6F1] flex items-center justify-center px-6 relative overflow-hidden text-[#121212]">
      {/* Decorative Dashboard-style blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-400/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-indigo-300/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 sm:p-12 shadow-sm relative z-10"
      >
        <div className="flex flex-col items-center mb-8 text-center">
          <img src="/images/ggu-techwing.png" alt="University Logo" className="h-12 mb-8" />
          <h1 className="text-2xl font-bold text-[#1E3A8A] tracking-tight mb-2">Admin Login</h1>
          <p className="text-[#1E3A8A]/60 text-sm font-semibold max-w-xs">
            Sign in to access the admin dashboard.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-[#888] tracking-widest pl-2">Email Address</label>
            <div className="relative">
              <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA]" />
              <input
                type="email"
                placeholder="admin@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[#F9F9F9] border border-[#E5E2D9] rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-[#BBB]"
                required
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase text-[#888] tracking-widest pl-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA]" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-[#F9F9F9] border border-[#E5E2D9] rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-[#BBB]"
                required
                suppressHydrationWarning
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-[#1E3A8A] text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#152a6a] transition-all disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E5E2D9]"></div>
          </div>
          <div className="relative flex justify-center text-[9px]">
            <span className="px-4 bg-white text-[#AAA] font-bold uppercase tracking-widest">or continue with</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-[#E5E2D9] bg-white px-6 py-4 flex items-center justify-center gap-3 cursor-pointer hover:bg-[#F9F9F9] transition-all rounded-2xl font-bold text-[#121212] text-[10px] uppercase tracking-widest"
        >
          <svg width="16" height="16" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#34A853" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#FBBC05" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /></svg>
          <span>Sign in with Google</span>
        </button>

        <div className="mt-10 flex items-center justify-between border-t border-[#F0F0F0] pt-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-[9px] font-bold text-[#AAA] uppercase tracking-widest hover:text-[#121212] transition-colors"
          >
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </button>
          <div className="h-1 w-1 bg-[#E5E2D9] rounded-full" />
          <a href="#" className="text-[9px] font-bold text-[#AAA] uppercase tracking-widest hover:text-[#121212] transition-colors">
            Help
          </a>
        </div>
      </motion.div>
    </div>
  );
}
