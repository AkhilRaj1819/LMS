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
      {
    id: 1,
    name: "ES",
    link: "/pages/es",
    description: "Environmental Science",
    icon: <img src={Planet.src} className="w-8 h-8" />,
    color: "",
    stats: { Credits: 2, Modules: 156,}
  },
    { id: 2, name: "NSS" , link:"/pages/nss", description: "National Service Scheme", icon: <img src={Nss.src} className="w-20" />, color: "",stats: { Credits: 1, Modules: 25,}},
    { id: 3, name: "OS" , link:"/pages/os", description: "Operating Systems", icon: <img src={Os.src} className="w-8 h-8" />, color: "", stats: { Credits: 3, Modules: 25,}},
    { id: 4, name: "LS: PPHC" , link:"/pages/ls", description: "Language Systems: Principles and Practices of Human Communication", icon: <img src={Eng.src} className="w-8 h-8" />, color: "", stats: { Credits: 4, Modules: 19,} },
    { id: 5, name: "DS" , link:"/pages/ds", description: "Data Structures", icon:<img src={Stu.src} className="w-8 h-8" />, color: "", stats: { Credits: 4, Modules: 156,} },
    { id: 6, name: "FLAT" , link:"/pages/flat", description: "Formal Languages & Automata Theory", icon: <img src={Fsm.src} className="w-12 h-12" />, color: "", stats: { Credits: 4, Modules: 156,} },
  ];

  return (
    <div className="min-h-screen w-full flex bg-white">
      <Sidebar />
      
      <div className="flex-1 bg-transparent relative">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }}></div>

      {/* Top Navigation Bar */}
      <header className="bg-white h-16 flex items-center justify-between px-6 border-b relative z-10" style={{ borderColor: '#EFEFEF' }}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#C6B7F2' }}>
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="font-semibold text-lg" style={{ color: '#1F2933' }}>LMS</span>
        </div>
        
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg" style={{ backgroundColor: '#FAFAFA', width: '320px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
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

      <div className="flex relative z-10">
        {/* Left Sidebar */}
        <aside className="w-56 p-6 bg-white bg-opacity-50">
          <div className="space-y-3">
            <div className="rounded-xl p-4 relative" style={{ backgroundColor: '#FFF2CC' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-sm" style={{ color: '#1F2933' }}>Semester 4</span>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ backgroundColor: '#FFFFFF', color: '#1F2933' }}>Current</span>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4A3A8' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C6B7F2' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#BFE3F3' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
              </div>
            </div>

            {['Semester 3', 'Semester 2', 'Semester 1'].map((sem) => (
              <div key={sem} className="rounded-xl p-4 cursor-pointer hover:bg-white transition-colors">
                <div className="mb-3">
                  <span className="font-semibold text-sm" style={{ color: '#6B7280' }}>{sem}</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#EDEDED' }}></div>
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#EDEDED' }}></div>
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#EDEDED' }}></div>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-transparent relative">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle, #d1d5db 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px'
          }}></div>
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
