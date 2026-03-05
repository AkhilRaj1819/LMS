"use client";

import { useSession, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LayoutGrid, BookOpen, MessageSquare, CheckSquare, LogOut } from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const isGGU = (session?.user as any)?.isGGU || (session?.user as any)?.isAdmin;

  const menuItems = [
    { icon: <LayoutGrid className="w-5 h-5" />, label: "Dashboard", path: "/" },
    { icon: <BookOpen className="w-5 h-5" />, label: "Livebooks", path: "/pages/livebooks", restricted: !isGGU },
    { icon: <MessageSquare className="w-5 h-5" />, label: "Feedback", path: "/pages/feedback", restricted: !isGGU },
    { icon: <CheckSquare className="w-5 h-5" />, label: "Leave", path: "/pages/attendance", restricted: !isGGU },
  ];

  const sidebarContent = (
    <div className="flex h-full w-[280px] flex-col bg-white font-sans border-r border-[#E5E2D9]">
      {/* LOGO SECTION */}
      <div className="pt-12 pb-10 px-10 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-52 h-12 relative">
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
            <LayoutGrid className="w-5 h-5 text-slate-400 rotate-45" />
          </button>
        )}
      </div>

      {/* PROFILE SECTION */}
      <div className="px-10 mb-8 py-2">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-2 border-[#3E73C1] p-0.5 overflow-hidden relative">
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  fill
                  className="rounded-full object-cover bg-slate-50"
                  alt="Profile"
                />
              ) : null}
              <div className={`w-full h-full rounded-full bg-[#3E73C1] flex items-center justify-center ${session?.user?.image ? 'hidden' : ''}`}>
                <span className="text-white font-bold text-lg">
                  {session?.user?.name?.charAt(0)?.toUpperCase() || "S"}
                </span>
              </div>
            </div>

          </div>
          <div>
            <p className="text-[#3E73C1] font-black text-base truncate max-w-[120px]">{session?.user?.name || "Student"}</p>
            <p className="text-slate-400 font-bold text-xs">{isGGU ? "Student" : "Guest"}</p>
          </div>
        </div>
      </div>

      {/* BLUE NAVIGATION SECTION */}
      <div className="flex-1 bg-[#3E73C1] rounded-tr-[3.5rem] mt-2 flex flex-col pt-10 px-0 overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
          <p className="px-10 text-sm font-bold text-white mb-6 uppercase tracking-widest opacity-60">General Navigation</p>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              const isLocked = item.restricted;
              return (
                <div key={item.path} className="relative pl-8">
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#F0F4F9] rounded-l-[1.5rem] shadow-lg shadow-blue-900/10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <button
                    onClick={() => {
                      if (isLocked) return;
                      router.push(item.path);
                      if (onClose) onClose();
                    }}
                    className={`w-full flex items-center gap-5 px-6 py-4 transition-all duration-300 relative z-10 ${isLocked
                      ? "text-white/30 cursor-not-allowed"
                      : isActive
                        ? "text-[#3E73C1]"
                        : "text-white/90 hover:text-white cursor-pointer"
                      }`}
                  >
                    <span className={`${isLocked ? 'text-white/30' : isActive ? 'text-[#3E73C1]' : 'text-white'
                      }`}>
                      {item.icon}
                    </span>
                    <span className="text-base font-bold tracking-tight">{item.label}</span>
                    {isLocked && (
                      <svg className="w-3.5 h-3.5 ml-auto text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          <div className="pt-8 px-0">
            <div className="pl-8 cursor-pointer">
              <button
                onClick={async () => {
                  try {
                    await fetch("/api/users/logout", { method: "POST" });
                  } catch (e) { }
                  signOut({ callbackUrl: "/pages/login" });
                }}
                className="w-full flex items-center gap-5 px-6 py-5 text-red-500 hover:text-red-500/50 transition-all mt-4 border-t border-white/10"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-base font-bold tracking-tight">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
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
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] sm:hidden"
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
