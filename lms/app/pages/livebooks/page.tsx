"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Search,
  Menu,
  ChevronRight,
  GraduationCap,
  Clock,
  LayoutGrid,
  Library,
  ArrowUpRight,
  Plus
} from "lucide-react";
import { useProgress } from "@/app/pages/useProgress";
import Footer from "@/components/Footer";
import { useSidebar } from "@/components/SidebarContext";

interface LivebookCardProps {
  name: string;
  code: string;
  description: string;
  credits: number;
  totalModules: number;
  color: string;
  icon: React.ReactNode;
  link: string;
}

function LivebookCard({ name, code, description, credits, totalModules, color, icon, link }: LivebookCardProps) {
  const router = useRouter();
  const { completedPercentage } = useProgress(code, totalModules);

  return (
    <motion.div
      onClick={() => router.push(link)}
      className="bg-white rounded-[2rem] border border-[#E5E2D9] p-8 shadow-sm transition-all group relative overflow-hidden flex flex-col h-full cursor-pointer"
    >
      {/* Background Accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-[0.03] rounded-bl-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-500`} />

      {/* Icon & Title */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        <div className={`w-14 h-14 ${color} bg-opacity-10 rounded-2xl flex items-center justify-center`}>
          {icon}
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#AAA] mb-1">{code}</span>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-[#F8F6F1] rounded-full border border-[#E5E2D9]">
            <span className="text-[10px] font-black text-[#121212]">{credits} Credits</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="text-xl font-black text-[#121212] mb-3">{name}</h3>
        <p className="text-sm text-[#888] font-medium leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Progress Section */}
        <div className="mt-auto pt-6 border-t border-[#F5F5F5]">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[10px] font-black text-[#AAA] uppercase">Completion</span>
            <span className={`text-[10px] font-black ${completedPercentage >= 100 ? 'text-emerald-500' : 'text-blue-600'}`}>
              {completedPercentage}%
            </span>
          </div>
          <div className="h-2 w-full bg-[#EEEEEE] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completedPercentage}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-blue-600 rounded-full"
            />
          </div>
        </div>

        {/* Action Button (Visual only since card is clickable) */}
        <div className="mt-6 w-full py-3.5 bg-white border-2 border-[#E5E2D9] rounded-xl text-xs font-black text-[#121212] lg:group-hover:bg-blue-600 lg:group-hover:text-white lg:group-hover:border-blue-600 transition-all flex items-center justify-center gap-2 group/btn">
          Explore Modules
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}

export default function LivebooksPage() {
  const { data: session } = useSession();
  const [mounted, setMounted] = useState(false);
  const { setIsOpen: setIsSidebarOpen } = useSidebar();
  const [activeSemester, setActiveSemester] = useState(4);

  useEffect(() => {
    setMounted(true);
    if (session?.user) {
      const userSem = (session.user as any).currentSemester;
      if (userSem) setActiveSemester(userSem);
    }
  }, [session]);

  const subjects = [
    {
      name: "Operating Systems",
      code: "OS",
      description: "Explore the internal structure, services, and design principles of modern operating systems. Master kernels, shells, and process management.",
      credits: 3,
      totalModules: 58,
      color: "text-blue-600",
      icon: <LayoutGrid className="w-6 h-6" />,
      link: "/pages/os"
    },
    {
      name: "Data Structures",
      code: "DS",
      description: "Master the art of organizing and managing data. From elementary arrays to complex graphs and algorithm optimization patterns.",
      credits: 4,
      totalModules: 91,
      color: "text-emerald-600",
      icon: <Library className="w-6 h-6" />,
      link: "/pages/ds"
    },
    {
      name: "Formal Lang & Automata",
      code: "FLAT",
      description: "Dive into computational models, regular languages, and the mathematical foundations of computer science and compilers.",
      credits: 4,
      totalModules: 30,
      color: "text-amber-600",
      icon: <Plus className="w-6 h-6 rotate-45" />,
      link: "/pages/flat"
    },
    {
      name: "Environmental Science",
      code: "ES",
      description: "A comprehensive study of ecological balance and sustainability principles tailored for modern engineering applications.",
      credits: 2,
      totalModules: 25,
      color: "text-rose-600",
      icon: <GraduationCap className="w-6 h-6" />,
      link: "/pages/es"
    },
    {
      name: "Language Systems",
      code: "LS",
      description: "Master the structures of human communication. Explore phonetic patterns, syntactic structures, and cultural linguistics.",
      credits: 4,
      totalModules: 22,
      color: "text-indigo-600",
      icon: <BookOpen className="w-6 h-6" />,
      link: "/pages/ls"
    },
    {
      name: "National Service Scheme",
      code: "NSS",
      description: "Dedicated to social responsibility and community impact through practical engagement and environmental excellence.",
      credits: 1,
      totalModules: 25,
      color: "text-slate-800",
      icon: <Menu className="w-6 h-6" />,
      link: "/pages/nss"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="text-[#121212] font-sans selection:bg-blue-100">
      <main className="px-6 sm:px-16 py-6 sm:py-10 min-w-0 overflow-x-hidden w-full">
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
              <Library className="w-6 h-6 text-blue-600" />
              Livebooks
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden md:relative group md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AAA] group-focus-within:text-[#121212] transition-colors" />
              <input
                type="text"
                placeholder="Search livebooks..."
                className="pl-11 pr-6 py-2.5 bg-white border border-[#E5E2D9] rounded-xl text-xs font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 lg:w-80 transition-all"
              />
            </div>
          </div>
        </div>

        {/* PAGE HEADER */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-2">Academic Curriculum</p>
              <h1 className="text-3xl sm:text-4xl font-black text-[#121212]">Explore Your Courses</h1>
            </div>

            {/* Semester Selector Pills */}
            <div className="flex p-1.5 bg-white border border-[#E5E2D9] rounded-2xl gap-1">
              {[1, 2, 3, 4].map((sem) => (
                <button
                  key={sem}
                  onClick={() => setActiveSemester(sem)}
                  className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter transition-all ${activeSemester === sem
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'text-[#888] hover:bg-[#F8F6F1] hover:text-[#121212]'
                    }`}
                >
                  Sem {sem}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SUBJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSemester}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="contents"
            >
              {activeSemester === 4 ? (
                subjects.map((subject, i) => (
                  <LivebookCard key={i} {...subject} />
                ))
              ) : (
                <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-white rounded-[2rem] border border-[#E5E2D9] flex items-center justify-center mb-6">
                    <Clock className="w-10 h-10 text-[#AAA]" />
                  </div>
                  <h3 className="text-xl font-black text-[#121212] mb-2">Curriculum Locked</h3>
                  <p className="text-sm text-[#888] font-medium max-w-xs">
                    Course materials for Semester {activeSemester} are currently archived. View Semester 4 for current content.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <Footer
          links={[
            { label: "Curriculum", href: "#" },
            { label: "Resources", href: "#" },
            { label: "Help", href: "#" }
          ]}
          copyright="© 2026 GGU GGU LMS • Livebooks Interface"
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;  
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
