'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  LayoutGrid,
  ChevronDown,
  HelpCircle,
  Menu,
  CheckCircle2,
  BookOpen,
  Boxes,
  ArrowLeft
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
      const res = await fetch(`/api/progress?userEmail=${email}&subject=DS`, {
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
      title: 'Foundations of DSA',
      description: 'Start your coding journey with foundational concepts. complexity analysis, and simple array-based challenges.',
      modules: [
        { title: 'Introduction to DSA & Orientation', description: 'Explore why DSA is the most important subject for software engineers.' },
        { title: 'Foundational Mathematics for DSA', description: 'Refresh your math skills with concepts like Logarithms and Series.' },
        { title: 'Foundational Mathematics for DSA - II', description: 'Dive deeper into discrete math and combinatorics.' },
        { title: 'Power of Two', description: 'A classic problem to understand bit manipulation.' },
        { title: 'Fizz Buzz', description: 'The legendary interview problem. Learn logical flow.' },
        { title: 'Time and space Complexity', description: 'The most critical topic. Learn Big O notation.' },
        { title: 'Deep Dive into Complexity Analysis', description: 'Master analyzing nested loops and recursive calls.' },
        { title: 'Revisiting Arrays and Strings', description: 'Re-learn the most basic data structures.' },
        { title: 'Running Sum of 1d Array', description: 'Practice array manipulation with prefix sums.' },
        { title: 'Richest Customer Wealth', description: 'Practice 2D array traversal and optimization.' },
        { title: 'Contains Duplicate', description: 'Learn frequency counting and sorting.' },
        { title: 'Valid Palindrome', description: 'Master string manipulation and two-pointer techniques.' },
        { title: 'Reverse String', description: 'Explore in-place array reversal techniques.' },
        { title: 'Longest Common Prefix', description: 'A string handling challenge for multiple inputs.' }
      ]
    },
    {
      id: 2,
      title: 'Algorithm Essentials',
      description: 'Master the fundamental logic patterns of competitive coding. recursion, sorting, and sliding windows.',
      modules: [
        { title: 'Introduction to Recursion', description: 'Learn how functions can call themselves to solve complex problems.' },
        { title: 'Deep Dive into Recursion', description: 'Explore the call stack and base cases.' },
        { title: 'Letter combination of phone number', description: 'A classic back-tracking problem.' },
        { title: 'Fibonacci Number', description: 'Understand different ways to calculate sequences.' },
        { title: 'Pow(x, n)', description: 'Optimize computations using binary exponentiation.' },
        { title: 'Hands-On | File Directory Scanner', description: 'Apply recursion to real-world file systems.' },
        { title: 'Subsequence Patterns in Recursion', description: 'Master generating subsequences.' },
        { title: 'Introduction to Sorting & Merge Sort', description: 'Start your journey into sorting algorithms.' },
        { title: 'Sort an Array', description: 'Practice sorting with real-world constraints.' },
        { title: 'Merge Sorted Array', description: 'Efficiently combine two pre-ordered lists.' },
        { title: 'Quick Sort Algorithm', description: 'Explore the "Partition" strategy in sorting.' }
      ]
    },
    {
      id: 3,
      title: 'Stacks, Queues & Linked lists',
      description: 'Explore linear data structures and their applications. Master LIFO, FIFO, and dynamic memory.',
      modules: [
        { title: 'Introduction to Stacks', description: 'Learn LIFO structure used in undo buffers.' },
        { title: 'Introduction to Queues & Deques', description: 'Explore FIFO logic and double-ended queues.' },
        { title: 'Evaluate Reverse Polish Notation', description: 'Use stacks to calculate values from postfix expressions.' },
        { title: 'Basic Calculator', description: 'Build a functional expression evaluator.' },
        { title: 'Valid Parentheses', description: 'Practical application of stack patterns to validate structures.' },
        { title: 'Tower of Hanoi', description: 'The legendary recursive puzzle.' },
        { title: 'Introduction to Singly Linked list', description: 'Learn how nodes link to form dynamic chains.' },
        { title: 'Merge Two Sorted Lists', description: 'Combine linked structures efficiently.' },
        { title: 'Palindrome Linked List', description: 'Use fast/slow pointers for symmetry check.' },
        { title: 'The Slow & Fast Pointer Pattern', description: 'Master the "tortoise and hare" technique.' }
      ]
    },
    {
      id: 4,
      title: 'Trees and Hash Maps',
      description: 'Move into non-linear hierarchies. Learn about binary trees and fast hash-based lookups.',
      modules: [
        { title: 'Introduction to trees', description: 'Step into hierarchical data structures.' },
        { title: 'Binary Tree Traversals', description: 'Master Inorder, Preorder and Postorder.' },
        { title: 'Introduction to Binary Trees', description: 'Focus on trees with at most two children.' },
        { title: 'Invert Binary Tree', description: 'The famous "mirroring" problem.' },
        { title: 'Introduction to Hash Maps', description: 'Learn O(1) average lookup time.' },
        { title: 'Design HashMap', description: 'Build your own hash system with collision handling.' }
      ]
    },
    {
      id: 5,
      title: 'BSTs & Graphs',
      description: 'Tackle advanced search structures and complex networks. Master BSTs and graph algorithms.',
      modules: [
        { title: 'Introduction to BSTs', description: 'Learn specialized trees for fast searching.' },
        { title: 'Search in a BST', description: 'Observe perfect logarithmic search in action.' },
        { title: 'Validate Binary Search Tree', description: 'Ensure a tree maintains the BST property.' },
        { title: 'Introduction to Graphs', description: 'Model social networks and the internet.' },
        { title: 'Graph Traversal (BFS & DFS)', description: 'Learn how to "walk" through a network.' },
        { title: 'Number of Islands', description: 'Solve "connected components" problems in a grid.' },
        { title: 'Cycle Detection in Graphs', description: 'Identify infinite loops in networks.' }
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

      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center text-red-500 border-2 border-red-500 rounded-lg rotate-[30deg]">
            <div className="-rotate-[30deg]">
              <Boxes className="w-4 h-4" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#2B2B2B] tracking-tight">Data Structures</h1>
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

      {/* TABS */}
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
                  layoutId="activeTabUnderlineDS"
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
                            key={idx}
                            className="relative group/module cursor-pointer pt-1"
                            onClick={() => onModuleSelect(unit.id, idx + 1)}
                          >
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
      `}</style>
    </div>
  );
};

export default CourseOverview;
