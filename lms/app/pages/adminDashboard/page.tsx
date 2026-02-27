"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Menu,
  Users,
  TrendingUp,
  FileText,
  MessageSquare,
  ChevronRight,
  BarChart3,
  Sparkles
} from "lucide-react";
import AdminSidebar from "../../../components/AdminSidebar";
import OptionCard from "@/components/OptionCard";
import { OptionItem } from "@/types";
import Footer from "@/components/Footer";

export default function AdminDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({ total: 0, students: 0, admins: 0, guests: 0 });
  const [leavesCount, setLeavesCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [recentLeaves, setRecentLeaves] = useState<any[]>([]);
  const [recentFeedback, setRecentFeedback] = useState<any[]>([]);
  const [lowPerformers, setLowPerformers] = useState<any[]>([]);
  const [topPerformers, setTopPerformers] = useState<any[]>([]);
  const [subjectCompletion, setSubjectCompletion] = useState<any[]>([]);


  useEffect(() => {
    if (session === null) return;
    if (session && !session.user?.isAdmin) {
      router.push("/");
      return;
    }
    if (session) {
      fetchStats();
      const interval = setInterval(fetchStats, 30000); // Refresh every 30s for live feel
      return () => clearInterval(interval);
    }
  }, [session, router]);

  const CustomIcons = {
    LiveBooks: () => (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="6" y="8" width="18" height="20" rx="3" className="fill-[#3E73C1]/10 stroke-[#3E73C1]" strokeWidth="1.5" />
        <rect x="10" y="4" width="18" height="20" rx="3" className="fill-white stroke-[#3E73C1]" strokeWidth="1.5" />
        <path d="M15 10H23" stroke="#E5E2D9" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 14H23" stroke="#E5E2D9" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 18H20" stroke="#E5E2D9" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23" cy="19" r="4" className="fill-[#3E73C1] animate-pulse" />
        <path d="M22 19L24 19" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    Users: () => (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="16" cy="11" r="5" className="fill-[#3E73C1]/20 stroke-[#3E73C1]" strokeWidth="1.5" />
        <path d="M7 26C7 21.0294 11.0294 17 16 17C20.9706 17 25 21.0294 25 26" className="stroke-[#3E73C1]" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="23" cy="22" r="4" className="fill-white stroke-[#3E73C1]" strokeWidth="1" />
        <path d="M21 22H25M23 20V24" stroke="#3E73C1" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    Leave: () => (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M8 4H20L26 10V26C26 27.1046 25.1046 28 24 28H8C6.89543 28 6 27.1046 6 26V6C6 4.89543 6.89543 4 8 4Z" className="fill-[#3E73C1]/10 stroke-[#3E73C1]" strokeWidth="1.5" />
        <path d="M20 4V10H26" className="stroke-[#3E73C1]" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10" y="14" width="12" height="1.5" rx="0.75" fill="#E5E2D9" />
        <rect x="10" y="18" width="10" height="1.5" rx="0.75" fill="#E5E2D9" />
        <rect x="10" y="22" width="6" height="1.5" rx="0.75" fill="#A8C4EB" />
        <path d="M22 22L24 24L28 20" stroke="#3E73C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    Timetable: () => (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="6" width="24" height="20" rx="3" className="fill-white stroke-[#3E73C1]" strokeWidth="1.5" />
        <path d="M4 12H28" className="stroke-[#3E73C1]" strokeWidth="1.5" />
        <path d="M10 4V8M22 4V8" className="stroke-[#3E73C1]" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="8" y="16" width="3" height="3" rx="1" className="fill-[#3E73C1]" />
        <rect x="14" y="16" width="3" height="3" rx="1" fill="#E5E2D9" />
        <rect x="20" y="16" width="3" height="3" rx="1" fill="#E5E2D9" />
        <rect x="8" y="21" width="3" height="3" rx="1" fill="#E5E2D9" />
        <rect x="14" y="21" width="3" height="3" rx="1" className="fill-[#3E73C1]/40" />
      </svg>
    ),
    Progress: () => (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M6 26L12 18L18 22L26 10" className="stroke-[#3E73C1]/20" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 26L12 18L18 22L26 10" className="stroke-[#3E73C1]" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="10" r="3" className="fill-[#3E73C1]" />
        <rect x="6" y="22" width="4" height="4" rx="1" className="fill-[#3E73C1]/10" />
        <rect x="12" y="16" width="4" height="10" rx="1" className="fill-[#3E73C1]/30" />
        <rect x="18" y="10" width="4" height="16" rx="1" className="fill-[#3E73C1]/60" />
        <rect x="24" y="4" width="4" height="22" rx="1" className="fill-[#3E73C1]" />
      </svg>
    ),
    Feedback: () => (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M6 8C6 6.89543 6.89543 6 8 6H24C25.1046 6 26 6.89543 26 8V20C26 21.1046 25.1046 22 24 22H14L8 27V22H8C6.89543 22 6 21.1046 6 20V8Z" className="fill-[#3E73C1]/10 stroke-[#3E73C1]" strokeWidth="1.5" />
        <circle cx="11" cy="14" r="1.5" fill="#3E73C1" />
        <circle cx="16" cy="14" r="1.5" fill="#3E73C1" opacity="0.6" />
        <circle cx="21" cy="14" r="1.5" fill="#3E73C1" opacity="0.3" />
        <path d="M22 24C23.6569 24 25 22.6569 25 21" stroke="#3E73C1" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 4" />
      </svg>
    ),
  };

  const quickLinks: OptionItem[] = [
    {
      id: 1,
      name: "LiveBooks",
      link: "/pages/livebooks",
      icon: <CustomIcons.LiveBooks />,
      color: "#8CAAAF"
    },
    {
      id: 2,
      name: "Manage Users",
      link: "/pages/adminUsers",
      icon: <CustomIcons.Users />,
      color: "#B9A2A7"
    },
    {
      id: 3,
      name: "Leave Applications",
      link: "/pages/adminLeaves",
      icon: <CustomIcons.Leave />,
      color: "#97ABC3"
    },
    {
      id: 4,
      name: "Timetable",
      link: "/pages/adminTimetable",
      icon: <CustomIcons.Timetable />,
      color: "#8B869B"
    },
    {
      id: 5,
      name: "Student Progress",
      link: "/pages/adminProgress",
      icon: <CustomIcons.Progress />,
      color: "#8CAAAF"
    },
    {
      id: 6,
      name: "Feedback",
      link: "/pages/adminFeedback",
      icon: <CustomIcons.Feedback />,
      color: "#FFA07A"
    },
  ];

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();

      if (data.ok) {
        setStats(data.stats.users);
        setLeavesCount(data.stats.leaves.count);
        setRecentLeaves(data.stats.leaves.recent);
        setFeedbackCount(data.stats.feedback.count);
        setRecentFeedback(data.stats.feedback.recent);
        setLowPerformers(data.stats.performance.lowPerformers);
        setTopPerformers(data.stats.performance.topPerformers);
        setSubjectCompletion(data.stats.performance.subjectCompletion);
      }
    } catch (error) {
      console.error("Failed to fetch stats", error);
    }
  };


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#121212] font-sans">
      <div className="flex relative">
        <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 sm:ml-[280px] px-6 sm:px-16 py-6 sm:py-10 min-w-0 overflow-x-hidden relative z-10">
          {/* TOP NAV BAR */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#3E73C1] cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A8A]">Admin Dashboard</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-bold uppercase text-[#888] tracking-widest leading-none">Admin Panel</p>
                <p className="text-sm font-bold text-[#3E73C1] mt-1">{session?.user?.email}</p>
              </div>
            </div>
          </div>

          {/* WELCOME SECTION */}
          <div className="mb-12 px-2">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tighter mb-4">
              Welcome back, {session?.user?.name || "Admin"}
            </h1>
            <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl leading-relaxed">
              Here's an overview of your institution. Manage students, track progress, and stay updated.
            </p>
          </div>

          {/* MAIN STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            <div onClick={() => router.push('/pages/adminUsers')} className="bg-white border border-[#E5E2D9] rounded-[1.8rem] p-6 shadow-sm hover:border-[#3E73C1]/30 transition-all group cursor-pointer">
              <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3">Total Users</p>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-[#1E3A8A] tracking-tighter">{stats.total}</h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tight">Users</p>
                </div>
                <Users className="w-5 h-5 text-blue-600 mb-1 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div onClick={() => router.push('/pages/adminUsers')} className="bg-white border border-[#E5E2D9] rounded-[1.8rem] p-6 shadow-sm hover:border-[#3E73C1]/30 transition-all group cursor-pointer relative overflow-hidden">
              <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3">Students</p>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 tracking-tighter">{stats.students}</h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tight">Enrolled</p>
                </div>
                <Users className="w-5 h-5 text-blue-600 mb-1 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div onClick={() => router.push('/pages/adminUsers')} className="bg-white border border-[#E5E2D9] rounded-[1.8rem] p-6 shadow-sm hover:border-[#3E73C1]/30 transition-all group cursor-pointer">
              <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3">Admins</p>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-[#1E3A8A] tracking-tighter">{stats.admins}</h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tight">Accounts</p>
                </div>
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse mb-3" />
              </div>
            </div>

            <div onClick={() => router.push('/pages/adminLeaves')} className="bg-white border border-[#E5E2D9] rounded-[1.8rem] p-6 shadow-sm hover:border-[#3E73C1]/30 transition-all group cursor-pointer">
              <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3">Leave Requests</p>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-rose-600 tracking-tighter">{leavesCount}</h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tight">Pending</p>
                </div>
                <FileText className="w-5 h-5 text-rose-600 mb-1 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            <div onClick={() => router.push('/pages/adminFeedback')} className="bg-white border border-[#E5E2D9] rounded-[1.8rem] p-6 shadow-sm hover:border-[#3E73C1]/30 transition-all group cursor-pointer">
              <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3">Guests</p>
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-emerald-600 tracking-tighter">{stats.guests}</h3>
                  <p className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-tight">Active Guests</p>
                </div>
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mb-3" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            {/* LEFT COLUMN: ACTIVITY & PERFORMANCE */}
            <div className="lg:col-span-8 space-y-8">
              {/* ROW 1: LEAVES & FEEDBACK */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm h-[380px] flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Recent Leave Requests</h3>
                    <button onClick={() => router.push('/pages/adminLeaves')} className="p-2 hover:bg-[#F8F6F1] rounded-full transition-colors cursor-pointer">
                      <ChevronRight className="w-5 h-5 text-slate-300" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar pr-1">
                    {recentLeaves.length === 0 ? (
                      <p className="text-slate-400 font-bold text-sm">No leave requests yet</p>
                    ) : (
                      recentLeaves.map((leave) => (
                        <div key={leave._id} className="p-4 bg-[#F9F9F9] border border-[#E5E2D9] rounded-2xl group hover:border-[#3E73C1]/30 transition-colors">
                          <p className="font-bold text-sm text-[#121212] mb-1">{leave.userName}</p>
                          <div className="flex justify-between items-center">
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{leave.leaveType}</p>
                            <p className="text-[9px] font-bold text-[#3E73C1] uppercase tracking-widest bg-white px-2 py-1 rounded-full border border-[#E5E2D9]">
                              {new Date(leave.startDate).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm h-[380px] flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Recent Feedback</h3>
                    <button onClick={() => router.push('/pages/adminFeedback')} className="p-2 hover:bg-[#F8F6F1] rounded-full transition-colors cursor-pointer">
                      <ChevronRight className="w-5 h-5 text-slate-300" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar pr-1">
                    {recentFeedback.length === 0 ? (
                      <p className="text-slate-400 font-bold text-sm">No feedback received yet</p>
                    ) : (
                      recentFeedback.map((fb) => (
                        <div key={fb._id} className="p-4 bg-[#F9F9F9] border border-[#E5E2D9] rounded-2xl group hover:border-emerald-500/20 transition-colors">
                          <p className="text-xs font-bold text-slate-600 line-clamp-2 leading-relaxed mb-2">"{fb.message}"</p>
                          <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Received {new Date(fb.createdAt).toLocaleDateString()}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* ROW 2: PERFORMANCE WATCH */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm h-[380px] flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase text-rose-600 underline underline-offset-8 decoration-rose-200">Low Performers</h3>
                    <TrendingUp className="w-5 h-5 text-rose-300" />
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar pr-1">
                    {lowPerformers.length === 0 ? (
                      <p className="text-slate-400 font-bold text-sm">All students performing well</p>
                    ) : (
                      lowPerformers.map((student) => (
                        <div key={student.email} className="p-4 bg-rose-50/30 border border-rose-100 rounded-2xl flex items-center justify-between group hover:bg-rose-50/50 transition-colors">
                          <div className="truncate pr-4">
                            <p className="font-bold text-xs text-[#121212] truncate uppercase tracking-tight">{student.email}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{student.count} quizzes taken</p>
                          </div>
                          <span className="text-rose-600 font-bold text-lg">{student.avg.toFixed(1)}%</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm h-[380px] flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase text-emerald-600 underline underline-offset-8 decoration-emerald-200">Top Performers</h3>
                    <Sparkles className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div className="flex-1 overflow-y-auto space-y-3 no-scrollbar pr-1">
                    {topPerformers.length === 0 ? (
                      <p className="text-slate-400 font-bold text-sm">Not enough data yet</p>
                    ) : (
                      topPerformers.map((student, idx) => (
                        <div key={student.email} className="p-4 bg-emerald-50/30 border border-emerald-100 rounded-2xl flex items-center justify-between group hover:bg-emerald-50/50 transition-colors">
                          <div className="truncate pr-4 flex items-center gap-3">
                            <span className="text-[10px] font-bold text-emerald-600/40">0{idx + 1}</span>
                            <div className="truncate">
                              <p className="font-bold text-xs text-[#121212] truncate uppercase tracking-tight">{student.email}</p>
                              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{student.count} quizzes taken</p>
                            </div>
                          </div>
                          <span className="text-emerald-600 font-bold text-lg">{student.avg.toFixed(1)}%</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* ROW 3: SUBJECTS (Added from main) */}
              <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase">Subject Performance Overview</h3>
                  <BarChart3 className="w-5 h-5 text-slate-300" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {subjectCompletion.slice(0, 6).map((subject) => (
                    <div key={subject.subject} className="space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <span className="text-[#121212] uppercase tracking-widest">{subject.subject}</span>
                        <span className="text-[#3E73C1] bg-blue-50 px-2 py-1 rounded-md border border-blue-100">{subject.avgScore}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#EEEEEE] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${subject.avgScore}%` }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-[#3E73C1] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: QUICK NAV */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-8 shadow-sm h-fit flex flex-col lg:sticky lg:top-10">
                <h3 className="text-lg font-bold text-[#1E3A8A] tracking-tight uppercase mb-8">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4 pb-4">
                  {quickLinks.map((link) => (
                    <OptionCard key={link.id} item={link} className="h-40 w-full" />
                  ))}
                </div>
                <div className="mt-8 p-6 bg-[#3E73C1] border border-blue-400 rounded-[1.5rem] relative overflow-hidden group transition-all">
                  <div className="relative z-10 text-white">
                    <p className="text-[10px] font-bold uppercase text-white/60 tracking-widest mb-1">System Status</p>
                    <p className="text-sm font-bold text-white mb-3">All Systems Running</p>
                    <p className="text-xs font-bold text-white/80 leading-tight">GGU Learning Management System is online and functioning normally.</p>
                  </div>
                  <Sparkles className="absolute -bottom-2 -right-2 w-16 h-16 text-white/10 rotate-12 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <Footer
            links={[
              { label: "Admin Panel", href: "#" },
              { label: "System Logs", href: "#" },
              { label: "Support", href: "#" }
            ]}
            copyright="© 2026 GGU LMS • Administrative Interface"
          />
        </main>
      </div>
    </div>
  );
}

