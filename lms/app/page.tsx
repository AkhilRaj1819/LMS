"use client";

import OptionCard from "@/components/OptionCard";
import Timetable from "@/components/Timetable";
import Sidebar from "@/components/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.isAdmin) {
      router.push("/pages/adminDashboard");
    }
  }, [session, router]);

  const options = [
    {
      id: 1,
      name: "LiveBooks",
      link: "/pages/livebooks",
      color: "#8CAAAF",
      img: "https://kalvium.community/assets/launcher-livebooks-logo-13706a15.svg",
    },
    {
      id: 2,
      name: "Gmail",
      link: "https://gmail.com",
      color: "#B9A2A7",
      img: "https://kalvium.community/assets/launcher-mail-logo-d2f5af18.svg",
    },
    {
      id: 3,
      name: "GMeet",
      link: "https://meet.google.com/landing",
      color: "#97ABC3",
      img: "https://kalvium.community/assets/launcher-chat-logo-69a6b73e.svg",
    },
    {
      id: 4,
      name: "Apply for leave",
      link: "/pages/attendance",
      color: "#8B869B",
      img: "https://kalvium.community/assets/launcher-attendance-logo-b26e5d0b.svg",
    },
    {
      id: 5,
      name: "Calendar",
      link: "https://calendar.google.com/",
      color: "#B9A2A7",
      img: "https://kalvium.community/assets/launcher-calendar-logo-3350606d.svg",
    },
    
  ];

  return (
    <div className="min-h-screen w-full flex bg-white">
      <Sidebar />

      <div className="flex-1 bg-transparent pt-20 relative">
        {/* Dotted background pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: 'radial-gradient(circle, #d1d5db 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        }}></div>
        {/* tighter container like image */}
        <div className="max-w-[1050px] mx-auto px-6 py-6 relative z-10">
          <div className="flex gap-10">
            {/* LEFT COLUMN (smaller like image) */}
            <div className="flex flex-col gap-6 w-[560px] shrink-0">
              {/* Profile */}
              <div className="relative bg-blue-100 rounded-lg px-6 py-8 flex justify-between items-start shadow-sm min-h-[180px] overflow-hidden">
                {/* Stripe pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" patternUnits="userSpaceOnUse" width="20" height="20">
                        <line x1="0" y1="0" x2="20" y2="0" stroke="#60a5fa" strokeWidth="1" />
                        <line x1="0" y1="0" x2="0" y2="20" stroke="#60a5fa" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="space-y-2.5 relative z-10">
                  <h1 className="text-2xl font-semibold text-gray-800">
                    👋 Hi {session?.user?.name || "Full Name"}
                  </h1>

                  

                  <p className="text-sm text-gray-700 flex items-center gap-1.5">
                    <span>🎓</span>
                      B-TECH (CSE) Specialization in Software Product Engineering
                  </p>

                  <p className="text-sm text-gray-600 flex items-center gap-1.5">
                    <span>🏛️</span>
                    Godavari Global University
                  </p>
                </div>

                <img
                  src="https://ggu.edu.in/wp-content/uploads/2025/03/ggu-new-logo.png"
                  alt="University Logo"
                  className="w-16 h-16 object-contain bg-white rounded-md p-1.5"
                />
              </div>

              {/* Timetable */}
              <div className="relative">
                <h2 className="text-lg font-semibold mb-3">My Day</h2>
                <div className="h-[280px] relative z-10 bg-white">
                  <Timetable />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Your Apps</h2>
              <div className="grid grid-cols-3 gap-x-4 gap-y-5 content-start">
                {options.map((item) => (
                  <OptionCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
