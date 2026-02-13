"use client";

import React from "react";
import { useSession } from "next-auth/react";
import OptionCardL from "@/components/OptionCardL";
import Sidebar from "@/components/Sidebar";
import Planet from "@/public/icons/planet-earth.png"
import Nss from "@/public/icons/nss.png"
import Os from "@/public/icons/os.png"
import Eng from "@/public/icons/eng.png"
import Stu from "@/public/icons/structure.png"
import Fsm from "@/public/icons/fsm.png"
const page = () => {

  const options = [
    { id: 2, name: "National Service Scheme", link: "/pages/nss", description: "National Service Scheme focuses on community service and social responsibility through practical engagement and volunteer work.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" /><circle cx="9" cy="7" r="4" stroke="#F59E0B" strokeWidth="2" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" /><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" /><circle cx="9" cy="7" r="2" fill="#F59E0B" opacity="0.3" /></svg>, color: "#F59E0B", stats: { Credits: 1, Modules: 25, } },
    { id: 3, name: "Operating Systems", link: "/pages/os", description: "This course explores the internal structure, services, and design principles of modern operating systems. It introduces processes and threads.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#8B5CF6" strokeWidth="2" /><rect x="7" y="7" width="4" height="4" fill="#8B5CF6" opacity="0.3" /><rect x="13" y="7" width="4" height="4" fill="#8B5CF6" opacity="0.3" /><rect x="7" y="13" width="4" height="4" fill="#8B5CF6" opacity="0.3" /><rect x="13" y="13" width="4" height="4" fill="#8B5CF6" opacity="0.3" /></svg>, color: "#8B5CF6", stats: { Credits: 3, Modules: 25, } },
    { id: 4, name: "Language Systems", link: "/pages/ls", description: "Language Systems course covers principles and practices of human communication, focusing on effective written and verbal expression.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 12h8M12 8v8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" opacity="0.4" /></svg>, color: "#EF4444", stats: { Credits: 4, Modules: 19, } },
    { id: 5, name: "Data Structures", link: "/pages/ds", description: "Learn Data Structures and Algorithms through hands-on coding. From arrays to graphs, master problem-solving patterns and optimization.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="3" stroke="#EC4899" strokeWidth="2" /><circle cx="5" cy="19" r="3" stroke="#EC4899" strokeWidth="2" /><circle cx="19" cy="19" r="3" stroke="#EC4899" strokeWidth="2" /><path d="M12 8v3M10.5 13.5L7 17M13.5 13.5L17 17" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="5" r="1.5" fill="#EC4899" opacity="0.4" /><circle cx="5" cy="19" r="1.5" fill="#EC4899" opacity="0.4" /><circle cx="19" cy="19" r="1.5" fill="#EC4899" opacity="0.4" /></svg>, color: "#EC4899", stats: { Credits: 4, Modules: 156, } },
    { id: 6, name: "FLAT", link: "/pages/flat", description: "Formal Languages & Automata Theory explores computational models, regular expressions, and the theoretical foundations of computer science.", icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="12" r="3" stroke="#3B82F6" strokeWidth="2" /><circle cx="18" cy="12" r="3" stroke="#3B82F6" strokeWidth="2" /><path d="M9 12h6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" /><path d="M6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" /><circle cx="6" cy="12" r="1.5" fill="#3B82F6" opacity="0.4" /><circle cx="18" cy="12" r="1.5" fill="#3B82F6" opacity="0.4" /></svg>, color: "#3B82F6", stats: { Credits: 4, Modules: 156, } },
    {
      id: 1,
      name: "Environmental Science",
      link: "/pages/es",
      description: "This course introduces environmental science principles, highlighting sustainability and ecological balance for Computer Science applications.",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="2" /><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" fill="#10B981" opacity="0.2" /><path d="M8 12c0-2 1-4 4-4s4 2 4 4" stroke="#10B981" strokeWidth="2" strokeLinecap="round" /></svg>,
      color: "#10B981",
      stats: { Credits: 2, Modules: 156, }
    },
  ];


  return (
    <div className="flex h-screen overflow-hidden">
      <div className="fixed left-0 top-0 h-screen overflow-hidden z-50 w-16">
        <Sidebar />
      </div>
      <div className="flex-1 bg-transparent relative ml-16 overflow-hidden" style={{
        backgroundImage: 'radial-gradient(circle, #D8D8D8 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        backgroundColor: '#FFFFFF'
      }}>

        {/* Top Navigation Bar */}
        <header className="bg-white h-20 flex items-center justify-between px-8 border-b relative z-10" style={{ borderColor: '#EFEFEF' }}>

          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="w-9 h-7 rounded border-2 border-gray-400 bg-white flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#FF6B6B">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gray-300 rounded-b"></div>
            </div>
            <span className="font-bold text-2xl" style={{ color: '#1F2933' }}>Livebooks</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#FAFAFA', width: '320px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search courses..."
              className="bg-transparent outline-none flex-1 text-sm"
              style={{ color: '#1F2933' }}
            />
            <kbd className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: '#EFEFEF', color: '#6B7280' }}>Ctrl K</kbd>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden h-[calc(100vh-5rem)]">
          {/* Left Sidebar */}
          <aside className="w-64 h-full p-6 bg-white bg-opacity-50 overflow-y-auto">
            <div className="space-y-3">
              <div className="rounded p-4 relative" style={{ backgroundColor: '#FFF9E6' }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-xs" style={{ color: '#D97706' }}>Semester 4</span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: '#FEF3C7' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-xs font-medium" style={{ color: '#D97706' }}>Current</span>
                  </div>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCE7F3' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E9D5FF' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCE7F3' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EC4899" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M12 1v6m0 6v6" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="border-b border-dashed border-gray-300"></div>

              <div className="rounded-xl p-4 cursor-pointer hover:bg-white transition-colors">
                <div className="mb-4">
                  <span className="font-semibold text-base" style={{ color: '#9CA3AF' }}>Semester 3</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#FED7AA' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#BFDBFE' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#BAE6FD' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-dashed border-gray-300"></div>

              <div className="rounded-xl p-4 cursor-pointer hover:bg-white transition-colors">
                <div className="mb-4">
                  <span className="font-semibold text-base" style={{ color: '#9CA3AF' }}>Semester 2</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#E9D5FF' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9333EA" strokeWidth="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#D9F99D' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#65A30D" strokeWidth="2">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#FBCFE8' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DB2777" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-dashed border-gray-300"></div>

              <div className="rounded-xl p-4 cursor-pointer hover:bg-white transition-colors">
                <div className="mb-4">
                  <span className="font-semibold text-base" style={{ color: '#9CA3AF' }}>Semester 1</span>
                </div>
                <div className="flex -space-x-2">
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#BAE6FD' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#FED7AA' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-full" style={{ backgroundColor: '#FED7AA' }}>
                    <div className="w-full h-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EA580C" strokeWidth="2">
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-8 bg-transparent relative overflow-y-auto">
            <h1 className="text-2xl font-bold mb-8 relative z-10" style={{ color: '#1F2933' }}>Semester 4</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {options.map((item) => (
                <OptionCardL
                  key={item.id}
                  name={item.name}
                  href={item.link}
                  description={item.description}
                  icon={item.icon}
                  stats={item.stats}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
