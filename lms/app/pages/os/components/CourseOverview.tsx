'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  MessageSquare,
  LayoutGrid,
  ArrowLeft,
  BookOpen,
  ChevronDown,
  PlayCircle,
  Clock,
  Award,
  Book,
  FileText,
  HelpCircle,
  Menu,
  CheckCircle2
} from "lucide-react";
import { useRouter } from 'next/navigation';

interface CourseOverviewProps {
  onModuleSelect: (unitId: number, moduleId: number) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ onModuleSelect }) => {
  const [activeTab, setActiveTab] = useState('learning-path');
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);
  const { data: session } = useSession();
  const [studentProgress, setStudentProgress] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.email) {
      fetchStudentProgress(session.user.email);
    }
  }, [session]);

  const fetchStudentProgress = async (email: string) => {
    try {
      const res = await fetch(`/api/progress?userEmail=${email}&subject=OS`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });
      const data = await res.json();
      if (data.success) {
        setStudentProgress(data.data);
      }
    } catch (error) {
      console.error("Failed to fetch progress", error);
    }
  };

  const units = [
    {
      id: 1,
      title: 'Getting started with OS',
      description: 'Introduction to fundamentals, system calls, and the core architecture of modern operating systems.',
      icon: <LayoutGrid className="w-6 h-6" />,
      modules: [
        { id: '1.1', title: 'Getting Started with OS', description: 'Explore the fundamentals of Operating Systems through engaging sessions and activities.' },
        { id: '1.2', title: 'Introduction to Operating systems', description: 'Uncover the invisible force that controls your system heart and brain.' },
        { id: '1.3', title: 'System calls and programs', description: 'Uncover the secret handshakes apps use to boss the operating system around!' },
        { id: '1.4', title: 'Operating System Design, Implementation and structures', description: 'Architecture blueprints and ingenious structures that make it all tick!' },
        { id: '1.5', title: 'Introduction to processes', description: 'Meet the OS tiny, tireless workers - see how they are managed.' },
        { id: '1.6', title: 'Operation on Processes & Interprocess communication', description: 'How processes talk or nudge each other through pipes and signals.' },
        { id: '1.7', title: 'Shared memory and Message passing Systems', description: 'Secrets of shared memory and message passing systems.' },
        { id: '1.8', title: 'Remote Procedure calls', description: 'The magic of calling functions on distant computers.' }
      ]
    },
    {
      id: 2,
      title: 'Threads and CPU scheduling',
      description: 'Master multithreading models and the algorithms that determine which tasks the CPU executes next.',
      icon: <Cpu className="w-6 h-6" />,
      modules: [
        { id: '2.1', title: 'Introduction to threads', description: 'Ever wondered how your app juggles music, downloads, AND your frantic typing? Meet the unsung heroes: threads!' },
        { id: '2.2', title: 'Multithreading models and Hyperthreading', description: 'One brain, many thoughts? Or many brains, many thoughts? Unpack how your CPU really handles threads and the magic of Hyperthreading!' },
        { id: '2.3', title: 'Issues in threading', description: 'What happens when too many cooks (threads) spoil the broth (your program)? Let us dive into the messy drama of threading challenges!' },
        { id: '2.4', title: 'Introduction to CPU Scheduling', description: 'Who gets to use the CPU next? Become the ultimate bouncer for your computer tasks and decide who gets VIP access!' },
        { id: '2.5', title: 'First Come First Served', description: 'The get in line policy for your CPU tasks! Is it the fairest way, or just the simplest?' },
        { id: '2.6', title: 'First Come First Served - Implementation', description: 'Time to code the queue! How do we actually build this digital waiting line for our CPU tasks?' },
        { id: '2.7', title: 'Shortest Job First', description: 'Tired of waiting? What if your CPU prioritized the quickest tasks first? Uncover the speedy (but sometimes tricky) world of Shortest Job First!' },
        { id: '2.8', title: 'Shortest Job First - Implementation', description: 'Can you predict the future? Let us figure out how to actually implement a scheduler that needs to know task lengths beforehand!' },
        { id: '2.9', title: 'Priority Scheduling', description: 'Not all tasks are created equal! How do we give some processes the red carpet treatment while others wait?' },
        { id: '2.10', title: 'Priority Scheduling - Implementation', description: 'Let us build the VIP list! How do you code a scheduler that plays favorites based on task importance?' },
        { id: '2.11', title: 'Round Robin', description: 'Everyone gets a turn! Explore this fair share CPU scheduler - like a carousel for your processes.' },
        { id: '2.12', title: 'Round Robin - Implementation', description: 'Slice and dice that CPU time! How do we code a system where every task gets its fair (and tiny) moment in the spotlight?' }
      ]
    },
    {
      id: 3,
      title: 'Process Synchronization and Deadlocks',
      description: 'Solving the critical section problem with semaphores, monitors, and avoiding system gridlock.',
      icon: <Clock className="w-6 h-6" />,
      modules: [
        { id: '3.1', title: 'Process Synchronization', description: 'Learning how to make multiple processes share resources nicely.' },
        { id: '3.2', title: 'The Critical Section Problem', description: 'Ensuring only one process gets alone time with shared data.' },
        { id: '3.3', title: 'Test & set Lock', description: 'Hardware level instructions for process coordination.' },
        { id: '3.4', title: 'Semaphores', description: 'Traffic lights for controlling resource access.' },
        { id: '3.5', title: 'Classic problems of Synchronization', description: 'Dining philosophers and other legendary concurrent puzzles.' },
        { id: '3.6', title: 'Monitors', description: 'VIP lounges for automatic synchronization management.' },
        { id: '3.7', title: 'Solved problems on Synchronization', description: 'Practical scenarios and theoretical applications.' },
        { id: '3.8', title: 'Assignment | Synchronization', description: 'Implementation focus using semaphores.' },
        { id: '3.9', title: 'Deadlocks', description: 'The deadly embrace of processes waiting for each other.' },
        { id: '3.10', title: 'Deadlock Handling and Recovery', description: 'Untangling system gridlocks through recovery strategies.' },
        { id: '3.11', title: 'Deadlock Avoidance', description: 'Stearing clear of deadlocks before they happen.' }
      ]
    },
    {
      id: 4,
      title: 'Memory Management',
      description: 'Understanding paging, segmentation, and the SNUG strategies for allocating computer memory.',
      icon: <Award className="w-6 h-6" />,
      modules: [
        { id: '4.1', title: 'Introduction to Memory Management', description: 'Where your programs live while they are running.' },
        { id: '4.2', title: 'Fixed and Variable Partitioning', description: 'Slicing up memory into predefined or custom chunks.' },
        { id: '4.3', title: 'Partition Allocation (Best fit)', description: 'Snug fit strategies for memory matchmakers.' },
        { id: '4.4', title: 'Partition Allocation (Worst fit)', description: 'Leaving large holes can actually be a good thing.' },
        { id: '4.5', title: 'Partition Allocation (First fit)', description: 'Quick and easy strategies for the first spot that fits.' },
        { id: '4.6', title: 'Paging', description: 'Revolutionary equal-sized chopping of programs.' },
        { id: '4.7', title: 'Segmentation', description: 'Logical division based on code, data, and stack.' },
        { id: '4.8', title: 'Assignment | Paging & Segmentation', description: 'Solving address translation concepts.' },
        { id: '4.9', title: 'Fragmentation', description: 'Recovering the wasted holes in memory real estate.' },
        { id: '4.10', title: 'Page replacement: FIFO', description: 'The simplest eviction policy for memory overflow.' },
        { id: '4.11', title: 'Optimal Page replacement', description: 'Peering into the future for perfect swapping.' },
        { id: '4.12', title: 'Least Recently Used', description: 'The gold standard for practical memory swapping.' },
        { id: '4.13', title: 'Solved Problems on Page Replacement', description: 'Computing page faults for various algorithms.' }
      ]
    },
    {
      id: 5,
      title: 'Storage Management & Linux',
      description: 'Mastering file systems, RAID, and hands-on Linux system resource monitor projects.',
      icon: <Book className="w-6 h-6" />,
      modules: [
        { id: '5.1', title: 'Introduction to Storage Management', description: 'Where your digital treasures are physically stored.' },
        { id: '5.2', title: 'File systems', description: 'Organizing bits into structures you can navigate.' },
        { id: '5.3', title: 'File system Implementations', description: 'Looking under the hood of NTFS, ext4, and more.' },
        { id: '5.4', title: 'File Allocation methods', description: 'Contiguous, linked, or indexed physical storage.' },
        { id: '5.5', title: 'Crash recovery and protection', description: 'Saving data from the brink after power failures.' },
        { id: '5.6', title: 'Free space management', description: 'Managing the empty nooks and crannies of disks.' },
        { id: '5.7', title: 'RAID', description: 'Team storage for speed and safety.' },
        { id: '5.8', title: 'Virtual Machines', description: 'The Matrix: running computers within computers.' },
        { id: '5.9', title: 'Linux Basics & Terminal', description: 'Mastering the command line and basic navigation.' },
        { id: '5.10', title: 'Directories in Linux', description: 'Advanced text-based superpowers for Linux.' },
        { id: '5.11', title: 'Files and Directory Structure', description: 'Pipes, permissions, and directory symphonies.' },
        { id: '5.12', title: 'Project: System Resource Monitor', description: 'Building a process analyzer and summarizer.' }
      ]
    }
  ];

  const completedModules = studentProgress.length;
  const masteryModules = studentProgress.filter(p => p.percentage >= 80).length;
  const totalModules = units.reduce((acc, unit) => acc + unit.modules.length, 0);
  const completedPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;
  const masteryPercentage = totalModules > 0 ? Math.round((masteryModules / totalModules) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-10 py-12 font-sans">
      {/* BACK TO LIVEBOOKS */}
      <button
        onClick={() => router.push('/pages/livebooks')}
        className="flex items-center gap-2 text-sm font-bold text-[#AAA] hover:text-[#121212] transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Livebooks
      </button>

      {/* HEADER SECTION - Match Image */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center text-red-500 border-2 border-red-500 rounded-lg rotate-[30deg]">
            <div className="-rotate-[30deg]">
              <Cpu className="w-4 h-4" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#2B2B2B] tracking-tight">Operating Systems</h1>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${(i + 1) * 5 <= completedPercentage ? 'bg-emerald-500' : 'bg-[#E5E2D9]'
                  }`}
              />
            ))}
          </div>
          <p className="text-[10px] font-bold text-[#AAA] uppercase">
            {completedPercentage}% Completed
          </p>
        </div>
      </div>

      {/* TABS - Match Image */}
      <div className="flex items-center justify-between border-b border-[#EEE] mb-12">
        <div className="flex items-center gap-10">
          {[
            { id: 'learning-path', label: 'Learning Path', icon: <Menu className="w-4 h-4" /> },
            { id: 'sessions', label: 'Sessions', icon: <LayoutGrid className="w-4 h-4" /> },
            { id: 'assessments', label: 'Assessments', icon: <div className="text-lg leading-none">+</div> },
            { id: 'about', label: 'About', icon: <HelpCircle className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 py-4 text-sm font-bold transition-all relative ${activeTab === tab.id
                ? 'text-[#121212]'
                : 'text-[#888] hover:text-[#121212]'
                }`}
            >
              {tab.icon}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabUnderlineOS"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#121212]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="space-y-16">
        {activeTab === 'learning-path' ? (
          units.map((unit) => {
            const isUnitFinished = unit.modules.every((_, idx) =>
              studentProgress.some(p => p.unitId === unit.id && p.moduleId === idx + 1 && p.completed)
            );

            return (
              <div key={unit.id} className="relative group/unit">
                {/* UNIT HEADER ROW */}
                <div className="flex items-start gap-8 mb-12">
                  {/* UNIT SQUARE BADGE - Match Image perfectly */}
                  <div className={`w-20 h-20 border border-[#E5E2D9] rounded flex flex-col items-center justify-center shrink-0 bg-white transition-colors duration-500 ${isUnitFinished ? 'border-emerald-500 ring-4 ring-emerald-50/50' : ''
                    }`}>
                    <span className="text-[10px] font-bold text-[#AAA] uppercase tracking-wider mb-1">UNIT</span>
                    <span className="text-4xl font-bold text-[#121212] leading-none">{unit.id}</span>
                  </div>

                  <div className="flex-1">
                    <div
                      className="flex items-center justify-between group cursor-pointer"
                      onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                    >
                      <h2 className="text-2xl font-bold text-[#121212] group-hover:text-emerald-600 transition-colors">{unit.title}</h2>
                      <div className={`w-8 h-8 rounded-full border border-[#EEE] flex items-center justify-center transition-all duration-300 ${expandedUnit === unit.id ? 'rotate-180 bg-[#121212] text-white border-[#121212]' : 'text-[#AAA] hover:border-[#CCC]'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-[15px] text-[#888] font-medium leading-relaxed max-w-4xl mt-2">
                      {unit.description}
                    </p>
                  </div>
                </div>

                {/* SUBMODULES TIMELINE */}
                <AnimatePresence>
                  {expandedUnit === unit.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="relative pl-10 ml-10 border-l border-dashed border-[#E5E2D9] space-y-12 pb-8"
                    >
                      {unit.modules.map((module, idx) => {
                        const moduleRecord = studentProgress.find(p => p.unitId === unit.id && p.moduleId === idx + 1);
                        const isCompleted = moduleRecord?.completed || false;

                        return (
                          <div
                            key={module.id}
                            className="relative group/module cursor-pointer pt-1"
                            onClick={() => onModuleSelect(unit.id, idx + 1)}
                          >
                            {/* Green square badge with number */}
                            <div className={`absolute -left-[57px] top-0 w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold text-white transition-all shadow-sm ${isCompleted ? 'bg-emerald-500' : 'bg-[#121212]'
                              }`}>
                              {unit.id}.{idx + 1}
                            </div>

                            <div className="flex-1">
                              <h3 className="text-[17px] font-bold text-[#121212] group-hover/module:translate-x-1 transition-transform inline-block">
                                {module.title}
                              </h3>
                              <p className="text-sm text-[#AAA] font-medium leading-relaxed mt-1 block">
                                {module.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        ) : (
          <div className="bg-[#FBFAF8] rounded-[3rem] border border-[#EAE8E0] p-32 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white rounded-[2rem] border border-[#EAE8E0] shadow-sm flex items-center justify-center text-[#CCC] mb-8">
              <LayoutGrid className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-[#121212] mb-4 uppercase tracking-tighter">Content coming soon</h3>
            <p className="text-[#888] font-medium max-w-sm leading-relaxed">
              We are currently finalizing the high-fidelity materials for this section. Please check back next week.
            </p>
          </div>
        )}
      </div>

      <style jsx global>{`
        body {
          background-color: #FFFFFF !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 0px;
        }
      `}</style>
    </div >
  );
};

export default CourseOverview;
