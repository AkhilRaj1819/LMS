'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  LayoutGrid,
  ArrowLeft,
  ChevronDown,
  HelpCircle,
  Menu,
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
      const res = await fetch(`/api/progress?userEmail=${email}&subject=LS`, {
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
      title: 'Foundations of Language',
      description: 'Explore the fundamental building blocks of human communication, from basic speech sounds to the structure of words.',
      modules: [
        { id: '1.1', title: 'Overview of Linguistics and its Sub-fields', description: 'Dive into the scientific study of language and survey its eight major domains.' },
        { id: '1.2', title: 'Phonetics and Phonology', description: 'Explore how humans produce, perceive, and organize the physical sounds of speech.' },
        { id: '1.3', title: 'Morphology: The Study of Word Structure', description: 'See how smaller meaningful units combine to create complex words.' },
        { id: '1.4', title: 'Unit 1 Mastery Quiz', description: 'Test your understanding of the foundations of language and linguistics.' }
      ]
    },
    {
      id: 2,
      title: 'Meaning and Structure',
      description: 'Master the rules of sentence construction and the complex systems of meaning that underly every language.',
      modules: [
        { id: '2.1', title: 'Syntax and Syntactic Structures', description: 'Understand the universal rules that allow us to build an infinite number of sentences.' },
        { id: '2.2', title: 'Semantics and Semantic Structures', description: 'Journey into the mental dictionary and how we construct meaning from words.' },
        { id: '2.3', title: 'Language Typology', description: 'Analyze how the world\'s 7,000 languages are organized, classified, and typed.' },
        { id: '2.4', title: 'Unit 2 Mastery Quiz', description: 'Test your understanding of syntax, semantics and language typology.' }
      ]
    },
    {
      id: 3,
      title: 'Evolution and Growth',
      description: 'Discover how we acquire language as infants and how languages evolve, diverge, and contact each other.',
      modules: [
        { id: '3.1', title: 'Learning to Speak', description: 'How do children master a language in just a few short years?' },
        { id: '3.2', title: 'The Changing Word', description: 'Observe how languages morph and shift through time and contact.' },
        { id: '3.3', title: 'Tracing the Past', description: 'Use linguistic clues to reconstruct long-lost ancient languages.' },
        { id: '3.4', title: 'Unit 3 Mastery Quiz', description: 'Review language acquisition and historical evolution.' }
      ]
    },
    {
      id: 4,
      title: 'Language in Society',
      description: 'Analyze the powerful relationship between language, social identity, policy, and modern technology.',
      modules: [
        { id: '4.1', title: 'Social Variation', description: 'How our social background shapes the way we speak and interact.' },
        { id: '4.2', title: 'Policy and Power', description: 'The role of language in government, education, and social control.' },
        { id: '4.3', title: 'Language and Identity', description: 'Explore how what we say defines who we are to the world.' },
        { id: '4.4', title: 'Digital Linguistics', description: 'How AI and technology are revolutionizing language processing.' },
        { id: '4.5', title: 'Unit 4 Mastery Quiz', description: 'Synthesize sociolinguistics and applied linguistics.' }
      ]
    },
    {
      id: 5,
      title: 'Culture and Globalization',
      description: 'Examine language as a global phenomenon and master the methods for conducting linguistic research.',
      modules: [
        { id: '5.1', title: 'Language and Culture', description: 'The intricate dance between linguistic expression and cultural belief.' },
        { id: '5.2', title: 'Gendered Expression', description: 'Analyze the subtle and overt ways gender influences language.' },
        { id: '5.3', title: 'The Global Stage', description: 'The impact of English as a lingua franca and global language loss.' },
        { id: '5.4', title: 'Research Masterclass', description: 'Equip yourself with tools for professional linguistic analysis.' },
        { id: '5.5', title: 'Unit 5 Mastery Quiz', description: 'Final check on culture, gender, and research methods.' }
      ]
    }
  ];

  const completedModules = studentProgress.length;
  const totalModules = units.reduce((acc, unit) => acc + unit.modules.length, 0);
  const completedPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

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
              <Globe className="w-4 h-4" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#2B2B2B] tracking-tight">Language Systems</h1>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${(i + 1) * 5 <= completedPercentage ? 'bg-indigo-500' : 'bg-[#E5E2D9]'
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
                  layoutId="activeTabUnderlineLS"
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
                  {/* UNIT SQUARE BADGE */}
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
                      <h2 className="text-2xl font-bold text-[#121212] group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{unit.title}</h2>
                      <div className={`w-8 h-8 rounded-full border border-[#EEE] flex items-center justify-center transition-all duration-300 ${expandedUnit === unit.id ? 'rotate-180 bg-[#121212] text-white border-[#121212]' : 'text-[#AAA] hover:border-[#CCC]'}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-[15px] text-[#888] font-medium leading-relaxed max-w-4xl mt-2 opacity-80">
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
                            {/* Indigo square badge with number */}
                            <div className={`absolute -left-[57px] top-0 w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold text-white transition-all shadow-sm ${isCompleted ? 'bg-emerald-500' : 'bg-[#121212]'
                              }`}>
                              {unit.id}.{idx + 1}
                            </div>

                            <div className="flex-1">
                              <h3 className="text-[17px] font-bold text-[#121212] group-hover/module:translate-x-1 transition-transform inline-block">
                                {module.title}
                                {isCompleted && moduleRecord?.score !== undefined && (
                                  <span className="ml-3 text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                    Score: {moduleRecord.score}/{moduleRecord.totalQuestions}
                                  </span>
                                )}
                              </h3>
                              <p className="text-sm text-[#AAA] font-medium leading-relaxed mt-1 block opacity-80">
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
    </div>
  );
};

export default CourseOverview;
