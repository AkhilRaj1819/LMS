'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  LayoutGrid,
  ChevronDown,
  HelpCircle,
  Menu,
  CheckCircle2,
  Cpu,
  ArrowLeft,
  Workflow
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
      const res = await fetch(`/api/progress?userEmail=${email}&subject=FLAT`, {
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
      title: 'Unit-1: Automata Methods and Finite Automata',
      description: 'Master the fundamentals of automata theory, proof techniques, DFA, NFA, and text search algorithms.',
      modules: [
        { id: '1.1', title: 'Foundations of Automata Theory', description: 'History, alphabets, and basic string operations' },
        { id: '1.2', title: 'Additional Forms of Proof', description: 'Contradiction, contrapositive, and construction' },
        { id: '1.3', title: 'Inductive Proofs', description: 'Mathematical, strong, and structural induction' },
        { id: '1.4', title: 'Deterministic Finite Automata (DFA)', description: 'Formal definitions and state transitions' },
        { id: '1.5', title: 'Non-deterministic Finite Automata (NFA)', description: 'Exploring non-deterministic computation' },
        { id: '1.6', title: 'Text Search using Finite Automata', description: 'KMP algorithm and pattern matching' },
        { id: '1.7', title: 'Regular Expressions', description: 'Formal notation and construction rules' },
        { id: '1.8', title: 'Finite Automata with ε-Transitions', description: 'ε-NFA and epsilon elimination' }
      ]
    },
    {
      id: 2,
      title: 'Unit-2: Regular Languages and Context Free Languages',
      description: 'Explore regular expressions, algebraic laws, pumping lemma, and DFA minimization.',
      modules: [
        { id: '2.1', title: 'Regular Expressions', description: 'Deep dive into theory and applications' },
        { id: '2.2', title: 'Identities & Algebraic Laws', description: 'Rules for simplifying regular expressions' },
        { id: '2.3', title: 'Pumping Lemma', description: 'Proving non-regularity of languages' },
        { id: '2.4', title: 'Closure Properties', description: 'Operations preserving language regularity' },
        { id: '2.5', title: 'Decision Properties', description: 'Algorithms for membership and emptiness' },
        { id: '2.6', title: 'Minimization of FA', description: 'Table-filling algorithm and stabilization' }
      ]
    },
    {
      id: 3,
      title: 'Regular Languages',
      description: 'Learn regular expressions, their operations, and the pumping lemma.',
      modules: [
        { id: '3.1', title: 'Regular Expressions', description: 'Pattern matching notation and regular sets' },
        { id: '3.2', title: 'Regular Expression Operations', description: 'Union, concatenation, and Kleene star' },
        { id: '3.3', title: 'Applications and Conversions', description: 'Thompson\'s construction and applications' },
        { id: '3.4', title: 'Pumping Lemma', description: 'Tool for proving non-regularity of languages' },
        { id: '3.5', title: 'Regular Grammars', description: 'Right-linear and left-linear grammars' },
        { id: '3.6', title: 'Unit 3 Quiz', description: 'Test your understanding of regular languages' }
      ]
    },
    {
      id: 4,
      title: 'Context-Free Languages',
      description: 'Understand context-free grammars, parse trees, and pushdown automata.',
      modules: [
        { id: '4.1', title: 'Context-Free Grammars', description: 'CFG definition and derivation trees' },
        { id: '4.2', title: 'Derivations & Ambiguity', description: 'Different strategies and ambiguity problems' },
        { id: '4.3', title: 'Normal Forms', description: 'Chomsky and Greibach normal forms' },
        { id: '4.4', title: 'Pushdown Automata', description: 'Stack-based automata for CFGs' },
        { id: '4.5', title: 'CFG-PDA Equivalence', description: 'Equivalence between CFGs and PDAs' },
        { id: '4.6', title: 'Unit 4 Quiz', description: 'Test your understanding of CFGs' }
      ]
    },
    {
      id: 5,
      title: 'Turing Machines & Computability',
      description: 'Explore the universal computation model, decidability, and complexity theory.',
      modules: [
        { id: '5.1', title: 'Chomsky Hierarchy', description: 'Classification of formal grammars and languages' },
        { id: '5.2', title: 'Turing Machine Definition', description: 'Formal definition and computational model' },
        { id: '5.3', title: 'Post Correspondence Problem', description: 'Fundamental undecidable problem' },
        { id: '5.4', title: 'Decidable Problems', description: 'Problems with algorithmic solutions' },
        { id: '5.5', title: 'Undecidable Problems', description: 'Halting problem and computational limits' },
        { id: '5.6', title: 'Unit 5 Quiz', description: 'Test your mastery of computability' }
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
          <div className="w-8 h-8 flex items-center justify-center text-indigo-600 border-2 border-indigo-600 rounded-lg rotate-[30deg]">
            <div className="-rotate-[30deg]">
              <Workflow className="w-4 h-4" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#2B2B2B] tracking-tight">Automata Theory</h1>
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
                  layoutId="activeTabUnderlineFLAT"
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
                            key={module.id}
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
