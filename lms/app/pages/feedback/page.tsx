"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Search,
  Menu,
  Send,
  ShieldCheck,
  Clock,
  Zap,
  Trash2,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";
import Footer from "@/components/Footer";
import { useSession } from "next-auth/react";
import { useSidebar } from "@/components/SidebarContext";

export default function FeedbackPage() {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setIsOpen: setIsSidebarOpen } = useSidebar();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    // Redirect guests back to home
    if (session?.user && (session.user as any).isGuest) {
      router.push("/");
    }
  }, [session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        setSuccess(true);
        setMessage("");
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Failed to submit feedback");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="text-[#121212] font-sans selection:bg-blue-100">
      <main className="px-6 sm:px-16 py-6 sm:py-10 min-w-0 overflow-x-hidden w-full">
        <div className="flex items-center justify-between mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#3E73C1]"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-[#1E3A8A] uppercase">
              Pulse Connectivity
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:relative group md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#3E73C1] transition-colors" />
              <input
                type="text"
                placeholder="Query knowledge base..."
                className="pl-11 pr-6 py-3 bg-white border border-[#E5E2D9] rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-[#3E73C1]/5 focus:border-[#3E73C1]/30 w-64 lg:w-80 transition-all placeholder:text-slate-300"
              />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 text-center"
          >
            <div className="flex justify-center mb-8">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-3 text-[10px] font-black text-[#AAA] uppercase tracking-[0.2em] hover:text-[#3E73C1] transition-all group px-5 py-2.5 bg-white border border-[#E5E2D9] rounded-full"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                Return to Node
              </button>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#121212] tracking-tighter mb-6 uppercase">Voice Protocol</h1>
            <p className="text-slate-500 font-bold leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              Your contributions drive institutional evolution. All transmissions are anonymized via secure hashing before review.
            </p>
          </motion.section>

          <div className="flex flex-col gap-8">
            <div className="bg-white rounded-[2.5rem] border border-[#E5E2D9] p-8 sm:p-12 shadow-sm">
              <div className="flex flex-col items-center gap-4 mb-12 text-center">
                <h4 className="text-[10px] font-black text-[#3E73C1] tracking-[0.3em] uppercase">Security Protocol</h4>
                <div className="w-16 h-1 bg-[#3E73C1]/10 rounded-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center gap-5 group">
                  <div className="w-14 h-14 bg-[#F8F6F1] border border-[#E5E2D9] rounded-2xl flex items-center justify-center text-[#3E73C1] group-hover:bg-[#3E73C1] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <p className="text-[11px] text-[#121212] font-black uppercase tracking-wider leading-relaxed max-w-[200px]">24H Review Cycle</p>
                </div>
                <div className="flex flex-col items-center text-center gap-5 group">
                  <div className="w-14 h-14 bg-[#F8F6F1] border border-[#E5E2D9] rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <p className="text-[11px] text-[#121212] font-black uppercase tracking-wider leading-relaxed max-w-[200px]">Priority Response</p>
                </div>
                <div className="flex flex-col items-center text-center gap-5 group">
                  <div className="w-14 h-14 bg-[#F8F6F1] border border-[#E5E2D9] rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
                    <Trash2 className="w-6 h-6" />
                  </div>
                  <p className="text-[11px] text-[#121212] font-black uppercase tracking-wider leading-relaxed max-w-[200px]">90D Auto-Purge</p>
                </div>
              </div>
            </div>

            {/* FEEDBACK FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] border border-[#E5E2D9] p-8 sm:p-10 shadow-sm relative overflow-hidden"
            >
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="text-center">
                  <label className="block text-[10px] font-black text-[#AAA] uppercase tracking-widest mb-4">How can we help you today?</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your thoughts, suggestions or concerns here..."
                    className="w-full h-64 p-8 bg-[#F8F6F1] border border-[#E5E2D9] rounded-[1.5rem] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 resize-none transition-all placeholder:text-[#AAA] text-center"
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-8 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-[#121212]">ANONYMOUS SECURE</p>
                      <p className="text-[9px] font-bold text-[#888]">Your identity is never shared</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !message.trim()}
                    className="px-12 py-5 bg-[#3E73C1] text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-900/20 hover:bg-[#1E3A8A] hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-3 group"
                  >
                    {loading ? "TRANSMITTING..." : "Communicate Signal"}
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-emerald-100 rounded-[2rem] flex items-center justify-center text-emerald-600 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-[#121212] mb-2">Thank You!</h3>
                    <p className="text-sm text-[#888] font-medium max-w-xs">
                      Your feedback has been submitted successfully and will be reviewed shortly.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-8 text-xs font-black text-blue-600 uppercase tracking-widest hover:underline"
                    >
                      Submit another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* FOOTER */}
        <Footer
          links={[
            { label: "Safety", href: "#" },
            { label: "Privacy", href: "#" },
            { label: "Conduct", href: "#" }
          ]}
          copyright="© 2026 GGU LMS • Institutional Support"
        />
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #F8F6F1;
          margin: 0;
          padding: 0;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}
