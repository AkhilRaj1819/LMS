"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LayoutGrid,
  BookOpen,
  Users,
  FileText,
  Calendar,
  MessageSquare,
  BarChart3,
  TrendingUp,
  LogOut,
  Menu,
  X
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: SidebarProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { icon: <LayoutGrid className="w-5 h-5" />, label: "Dashboard", path: "/pages/adminDashboard" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Livebooks", path: "/pages/livebooks" },
    { icon: <Users className="w-5 h-5" />, label: "Manage Users", path: "/pages/adminUsers" },
    { icon: <FileText className="w-5 h-5" />, label: "Leave Requests", path: "/pages/adminLeaves" },
    { icon: <Calendar className="w-5 h-5" />, label: "Timetable", path: "/pages/adminTimetable" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Student Progress", path: "/pages/adminProgress" },
    { icon: <MessageSquare className="w-5 h-5" />, label: "Feedback", path: "/pages/adminFeedback" },
  ];

  const sidebarContent = (
    <div className="flex h-full w-[280px] flex-col bg-white font-sans border-r border-[#E5E2D9]">
      {/* LOGO SECTION */}
      <div className="pt-12 pb-10 px-10 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-52 h-12 relative cursor-pointer" onClick={() => router.push("/pages/adminDashboard")}>
            <Image
              src="/images/ggu-techwing.png"
              alt="GGU Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="sm:hidden p-2 hover:bg-slate-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-400" />
          </button>
        )}
      </div>

      {/* PROFILE SECTION */}
      <div className="px-10 mb-8 py-2">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-2 border-rose-500 p-0.5 overflow-hidden relative">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  fill
                  className="rounded-full object-cover bg-slate-50"
                  alt="Profile"
                />
              ) : null}
              <div className={`w-full h-full rounded-full bg-[#1E3A8A] flex items-center justify-center ${session?.user?.image ? 'hidden' : ''}`}>
                <span className="text-white font-bold text-lg">
                  {session?.user?.name?.charAt(0)?.toUpperCase() || "A"}
                </span>
              </div>
            </div>

          </div>
          <div>
            <p className="text-[#1E3A8A] font-bold text-base truncate max-w-[120px] leading-tight">
              {session?.user?.name?.split(' ')[0] || "Admin"}
            </p>
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-0.5">Administrator</p>
          </div>
        </div>
      </div>

      {/* BLUE NAVIGATION SECTION */}
      <div className="flex-1 bg-[#3E73C1] rounded-tr-[3.5rem] mt-2 flex flex-col pt-10 px-0 overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
          <p className="px-10 text-[10px] font-bold text-white/50 mb-6 uppercase tracking-widest leading-none">Management System</p>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <div key={item.path} className="relative pl-8 ">
                  <button
                    onClick={() => {
                      router.push(item.path);
                      if (onClose) onClose();
                    }}
                    className={`w-full flex items-center gap-5 px-6 py-4 transition-all duration-300 cursor-pointer ${isActive
                      ? "bg-[#F8F6F1] text-[#3E73C1] rounded-l-[1.5rem]"
                      : "text-white/90 hover:text-white"}`}
                  >
                    <span className={`${isActive ? 'text-[#3E73C1]' : 'text-white'}`}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold tracking-tight uppercase whitespace-nowrap">{item.label}</span>
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="mt-auto pt-8 pb-10">
            <div className="pl-8 cursor-pointer">
              <button
                onClick={async () => {
                  try {
                    await fetch("/api/users/logout", { method: "POST" });
                  } catch (e) { }
                  signOut({ callbackUrl: "/pages/adminLogin" });
                }}
                className="w-full flex items-center gap-5 px-6 py-5 text-rose-300 hover:text-rose-100 transition-all border-t border-white/10 cursor-pointer"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-bold tracking-tight uppercase">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden sm:flex fixed left-0 top-0 h-screen w-[280px] flex-col z-[50]">
        {sidebarContent}
      </aside>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 z-[60] sm:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-screen w-[280px] z-[70] sm:hidden overflow-hidden"
            >
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

