"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ExternalLink, Calendar, ArrowUpRight, Clock } from "lucide-react";

interface Period {
  time: string;
  subject: string;
  teacher?: string;
  description?: string;
}

export default function Timetable() {
  const router = useRouter();
  const [data, setData] = useState<Period[]>([]);
  const [selected, setSelected] = useState<Period | null>(null);
  const [currentPeriod, setCurrentPeriod] = useState<Period | null>(null);

  const handleNavigation = () => {
    if (!selected) return;
    const subject = selected.subject.toUpperCase();
    if (subject.includes("OS")) router.push("/pages/os");
    else if (subject.includes("DS")) router.push("/pages/ds");
    else if (subject.includes("FLAT")) router.push("/pages/flat");
    else if (subject.includes("ES")) router.push("/pages/es");
    else if (subject.includes("LS")) router.push("/pages/ls");
    else if (subject.includes("NSS")) router.push("/pages/nss");
    else router.push("/pages/livebooks");
  };

  const loadData = useCallback(async () => {
    const res = await fetch("/api/timetable");
    const json = await res.json();
    if (json.ok) {
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
      const today = days[new Date().getDay()];
      const todayData = json.data[today] || [];
      setData(todayData);
    }
  }, []);

  const parseTime = (timeStr: string) => {
    const [hoursStr, minutesStr] = timeStr.split(":");
    let hours = Number(hoursStr);
    const minutes = Number(minutesStr);
    if (hours < 9) hours += 12; // Simple heuristic for PM if before 9 (school hours)
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  const getCurrentPeriod = useCallback(() => {
    const now = new Date();
    for (const period of data) {
      const [start, end] = period.time.split(" - ");
      const startTime = parseTime(start);
      const endTime = parseTime(end);
      if (now >= startTime && now <= endTime) {
        return period;
      }
    }
    return null;
  }, [data]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (data.length > 0) {
      const current = getCurrentPeriod();
      setCurrentPeriod(current);
      // Auto-select current period if available, otherwise first
      setSelected(current || data[0]);

      const interval = setInterval(() => {
        const newPeriod = getCurrentPeriod();
        setCurrentPeriod(newPeriod);
      }, 60000);
      return () => clearInterval(interval);
    }
  }, [data, getCurrentPeriod]);

  if (data.length === 0) {
    return (
      <div className="py-8 flex flex-col items-center text-[#AAA] gap-4 bg-white rounded-3xl border border-[#EEE]">
        <Calendar className="w-8 h-8 opacity-10" />
        <p className="text-[10px] font-bold uppercase tracking-widest">No classes scheduled</p>
      </div>
    );
  }

  // Calculate indicator position based on rows
  const getIndicatorPosition = () => {
    if (!data.length) return null;
    const now = new Date();

    const firstStart = parseTime(data[0].time.split(" - ")[0]);
    const lastEnd = parseTime(data[data.length - 1].time.split(" - ")[1]);

    if (now < firstStart) return 0;
    if (now > lastEnd) return 100;

    let periodIndex = -1;
    let progressInRange = 0;

    for (let i = 0; i < data.length; i++) {
      const [start, end] = data[i].time.split(" - ");
      const startTime = parseTime(start);
      const endTime = parseTime(end);

      if (now >= startTime && now <= endTime) {
        periodIndex = i;
        const duration = endTime.getTime() - startTime.getTime();
        const elapsed = now.getTime() - startTime.getTime();
        progressInRange = elapsed / duration;
        break;
      }

      // If it's between periods (a gap), we can interpolate or hide
      if (i < data.length - 1) {
        const nextStart = parseTime(data[i + 1].time.split(" - ")[0]);
        if (now > endTime && now < nextStart) {
          // It's in the gap between row i and row i+1
          periodIndex = i + 0.5; // Visual midpoint representation
          break;
        }
      }
    }

    // If periodIndex is still -1, it means 'now' is outside any defined period or gap,
    // but we've already handled before first and after last.
    // This case should ideally not be reached if the above checks are comprehensive.
    // However, if it does, we can return null or a default. For now, let's assume it's covered.
    if (periodIndex === -1) return null;


    // Convert index to percentage of total rows
    // Since each button is a row of equal height
    return ((periodIndex + progressInRange) / data.length) * 100;
  };

  const indicatorPos = getIndicatorPosition();

  return (
    <div className="w-full flex bg-white border border-[#E5E2D9] overflow-hidden rounded-2xl h-[480px] shadow-sm">
      {/* LEFT SIDEBAR: TIME SLOTS */}
      <div className="w-[150px] md:w-[200px] border-r border-[#E5E2D9] flex flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="relative">
            {/* Real-time Indicator Line */}
            {indicatorPos !== null && (
              <div
                className="absolute left-0 right-0 z-20 pointer-events-none transition-all duration-1000 ease-linear"
                style={{ top: `${indicatorPos}%` }}
              >
                <div className="w-full border-t-3 border-dotted border-[#FF4D4D] opacity-80" />
              </div>
            )}

            <div className="divide-y divide-[#F0F0F0]">
              {data.map((period, i) => {
                const isLunch = period.subject === "Lunch Break";
                const isSelected = selected === period;
                const isCurrent = currentPeriod === period;

                if (isLunch) {
                  return (
                    <div
                      key={i}
                      className="w-full h-16 bg-[#FBFBFB] flex items-center justify-center border-y border-[#EEE] relative group"
                    >
                      <p className="text-[13px] font-medium text-[#7096CC] tracking-wide">
                        Lunch Break ({period.time.replace(/0(\d:\d\d)/g, '$1')})
                      </p>
                      {isCurrent && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#7096CC] rounded-full animate-pulse" />
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={i}
                    onClick={() => setSelected(period)}
                    className={`w-full p-5 text-left transition-colors relative cursor-pointer ${isSelected ? "bg-[#F8F6F1]" : "hover:bg-[#FAF9F6]"
                      }`}
                  >
                    <p className={`text-[10px] font-bold mb-1 ${isCurrent ? "text-rose-500" : "text-[#AAA]"}`}>
                      {period.time}
                    </p>
                    <p className={`text-xs font-bold tracking-tight truncate ${isSelected ? "text-[#121212]" : "text-[#555]"}`}>
                      {period.subject || "Break"}
                    </p>
                    {period.teacher && (
                      <p className="text-[9px] font-medium text-[#AAA] truncate mt-0.5">
                        {period.teacher}
                      </p>
                    )}
                    {isCurrent && (
                      <div className="absolute right-3 top-3 w-1.5 h-1.5 bg-rose-500 rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* DASHED DIVIDER */}
      <div className="w-[1px] bg-transparent border-r border-dashed border-[#E5E2D9]" />

      {/* RIGHT DETAIL VIEW */}
      <div className="flex-1 relative p-10 overflow-hidden bg-dot-grid flex flex-col">
        <AnimatePresence mode="wait">
          {selected?.subject === "Lunch Break" ? (
            <motion.div
              key="lunch-break-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-24 h-24 bg-blue-50/50 rounded-full flex items-center justify-center">
                <Clock className="w-10 h-10 text-blue-300 animate-pulse" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#121212] tracking-tighter">It&apos;s Lunch Break</h2>
                <p className="text-xs text-[#AAA] font-bold uppercase tracking-widest mt-2" > Time to refuel and recharge</p>
              </div>
              <div className="px-6 py-2 bg-[#F8F6F1] border border-[#E5E2D9] rounded-full text-[10px] font-bold text-[#7096CC]">
                RESUMING AT 01:15 PM
              </div>
            </motion.div>
          ) : selected && (
            <motion.div
              key={selected.time}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="h-full flex flex-col"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-[#121212] text-white text-[9px] font-bold rounded-sm uppercase tracking-widest">
                      {selected.time.split(" - ")[0]}
                    </span>
                    <span className="w-4 h-[1px] bg-[#DDD]" />
                    <span className="text-[9px] font-bold text-[#AAA] uppercase tracking-widest">Live Session</span>
                  </div>
                  <h2 className="text-3xl font-bold text-[#121212] tracking-tighter leading-none max-w-md">
                    {selected.subject || "Open Study"}
                  </h2>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center">
                        <Calendar className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-[10px] font-bold text-[#888]">{selected.time}</span>
                    </div>
                    {selected.teacher && (
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#DDD] rounded-full" />
                        <span className="text-[10px] font-bold text-[#888]">{selected.teacher}</span>
                      </div>
                    )}
                  </div>
                </div>
                <button
                  onClick={handleNavigation}
                  className="p-3 bg-white border border-[#E5E2D9] rounded-xl hover:bg-[#F8F6F1] transition-all shadow-sm group cursor-pointer"
                >
                  <ArrowUpRight className="w-6 h-6 text-[#121212] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Detail Content */}
              <div className="mt-auto space-y-6">
                {selected.description ? (
                  <div className="p-6 bg-[#F8F6F1]/50 border border-[#E5E2D9] rounded-2xl">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#AAA] mb-3">Agenda & Overview</p>
                    <p className="text-xs text-[#666] leading-relaxed line-clamp-3">
                      {selected.description}
                    </p>
                  </div>
                ) : (
                  <div className="p-6 border border-dashed border-[#E5E2D9] rounded-2xl">
                    <p className="text-[10px] font-bold text-[#AAA] tracking-tight">No additional descriptions were provided for this session yet.</p>
                  </div>
                )}
                <button
                  onClick={handleNavigation}
                  className="w-full py-3 bg-[#121212] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#333] transition-all cursor-pointer"
                >
                  Enter Integrated Session
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* DOT GRID STYLE */}
        <style jsx>{`
          .bg-dot-grid {
            background-color: white;
            background-image: radial-gradient(#F0EFEA 1px, transparent 1px);
            background-size: 20px 20px;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 0px;
          }
        `}</style>
      </div>
    </div>
  );
}
