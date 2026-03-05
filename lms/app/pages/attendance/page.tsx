"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Calendar,
    FileText,
    Menu,
    Search,
    Send,
    Clock,
    ShieldCheck,
    CheckCircle2,
    ArrowLeft,
    Umbrella,
    Briefcase,
    AlertCircle,
    ChevronDown,
    Activity
} from "lucide-react";
import { useSidebar } from "@/components/SidebarContext";
import Footer from "@/components/Footer";

export default function LeaveApplicationPage() {
    const { data: session } = useSession();
    const [mounted, setMounted] = useState(false);
    const { setIsOpen: setIsSidebarOpen } = useSidebar();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const [formData, setFormData] = useState({
        leaveType: "sick",
        startDate: "",
        endDate: "",
        reason: ""
    });

    useEffect(() => {
        setMounted(true);
        // Redirect guests back to home
        if (session?.user && (session.user as any).isGuest) {
            router.push("/");
        }
    }, [session, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/leaves", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userName: session?.user?.name,
                    userEmail: session?.user?.email,
                    ...formData
                })
            });

            if (res.ok) {
                setSuccess(true);
                setFormData({ leaveType: "sick", startDate: "", endDate: "", reason: "" });
                setTimeout(() => setSuccess(false), 5000);
            }
        } catch (error) {
            console.error("Failed to submit leave application");
        } finally {
            setLoading(false);
        }
    };

    if (!mounted) return null;

    return (
        <>
            <main className="px-6 sm:px-16 py-6 sm:py-10 min-w-0 overflow-x-hidden">
                {/* TOP NAV BAR */}
                <div className="flex items-center justify-between mb-8 sm:mb-12">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-blue-600"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl sm:text-2xl font-black tracking-tight flex items-center gap-3">
                            <Calendar className="w-6 h-6 text-blue-600" />
                            Attendance & Leave
                        </h2>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="hidden md:relative group md:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA] group-focus-within:text-[#121212] transition-colors" />
                            <input
                                type="text"
                                placeholder="Search records..."
                                className="pl-11 pr-6 py-2.5 bg-white border border-[#E5E2D9] rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 lg:w-80 transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* HERO SECTION */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <button
                                onClick={() => router.back()}
                                className="flex items-center gap-2 text-xs font-black text-[#AAA] uppercase tracking-widest hover:text-blue-600 transition-colors group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Back to Dashboard
                            </button>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black text-[#121212] mb-4">Leave Application</h1>
                        <p className="text-[#888] font-medium leading-relaxed max-w-2xl mx-auto">
                            Request time off for medical, personal, or institutional reasons. Your application will be routed to the respective HOD for digital approval.
                        </p>
                    </motion.section>

                    <div className="flex flex-col gap-8">
                        {/* APPLICATION FORM */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[2rem] border border-[#E5E2D9] p-8 sm:p-10 shadow-sm relative overflow-hidden"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="space-y-8">
                                    {/* Leave Type */}
                                    <div className="text-center">
                                        <label className="block text-[10px] font-black text-[#AAA] uppercase tracking-widest mb-4">Leave Type</label>
                                        <div className="relative">
                                            <select
                                                value={formData.leaveType}
                                                onChange={(e) => setFormData({ ...formData, leaveType: e.target.value })}
                                                className="w-full p-4 bg-[#F8F6F1] border border-[#E5E2D9] rounded-xl text-xs font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all appearance-none cursor-pointer text-center pr-12"
                                                required
                                            >
                                                <option value="sick">Sick Leave</option>
                                                <option value="casual">Casual Leave</option>
                                                <option value="emergency">Emergency Leave</option>
                                                <option value="other">Other</option>
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA] pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Dates */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="text-center">
                                            <label className="block text-[10px] font-black text-[#AAA] uppercase tracking-widest mb-4">Start Date</label>
                                            <input
                                                type="date"
                                                value={formData.startDate}
                                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                                className="w-full p-4 bg-[#F8F6F1] border border-[#E5E2D9] rounded-xl text-xs font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all text-center"
                                                required
                                            />
                                        </div>
                                        <div className="text-center">
                                            <label className="block text-[10px] font-black text-[#AAA] uppercase tracking-widest mb-4">End Date</label>
                                            <input
                                                type="date"
                                                value={formData.endDate}
                                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                                className="w-full p-4 bg-[#F8F6F1] border border-[#E5E2D9] rounded-xl text-xs font-bold focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 outline-none transition-all text-center"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Reason */}
                                    <div className="text-center">
                                        <label className="block text-[10px] font-black text-[#AAA] uppercase tracking-widest mb-4">Reason for Leave</label>
                                        <textarea
                                            value={formData.reason}
                                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                                            placeholder="Please provide a detailed reason for your leave..."
                                            className="w-full h-48 p-8 bg-[#F8F6F1] border border-[#E5E2D9] rounded-[1.5rem] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 resize-none transition-all placeholder:text-[#AAA] text-center"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-10 pt-8 border-t border-[#F8F6F1]">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-[10px] font-black text-[#121212]">VERIFIED REQUEST</p>
                                            <p className="text-[9px] font-bold text-[#888]">Subject to department audit</p>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading || !formData.startDate || !formData.endDate || !formData.reason.trim()}
                                        className="px-12 py-4 bg-blue-600 text-white rounded-xl text-xs font-black shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                                    >
                                        {loading ? "Processing..." : "Submit Application"}
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
                                        <h3 className="text-2xl font-black text-[#121212] mb-2">Application Sent!</h3>
                                        <p className="text-sm text-[#888] font-medium max-w-xs mx-auto">
                                            Your leave request has been submitted to the department. Track your approval status in the dashboard.
                                        </p>
                                        <button
                                            onClick={() => setSuccess(false)}
                                            className="mt-8 text-xs font-black text-blue-600 uppercase tracking-widest hover:underline"
                                        >
                                            New Application
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
                        { label: "Academic Calendar", href: "#" },
                        { label: "Holiday List", href: "#" },
                        { label: "Leave Policy", href: "#" }
                    ]}
                    copyright="© 2026 GGU LMS • Student Life Affairs"
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

        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0.5;
          cursor: pointer;
        }
      `}</style>
        </>
    );
}