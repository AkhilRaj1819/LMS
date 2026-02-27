"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, RefreshCw, GraduationCap, LayoutGrid, CheckCircle2, User, Menu, Search, TrendingUp } from "lucide-react";
import AdminSidebar from "../../../components/AdminSidebar";
import Footer from "@/components/Footer";

export default function AdminProgress() {
  const { data: session } = useSession();
  const router = useRouter();
  const [students, setStudents] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [progress, setProgress] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [studentSearch, setStudentSearch] = useState("");

  const courseStructure: any = {
    DS: {
      name: "Data Structures",
      color: "#EC4899",
      units: [
        {
          id: 1,
          name: "Foundations of DSA",
          modules: [
            "Introduction to DSA & Orientation",
            "Foundational Mathematics for DSA",
            "Foundational Mathematics for DSA - II",
            "Power of Two",
            "Fizz Buzz",
            "Time and space Complexity",
            "Deep Dive into Complexity Analysis",
            "Revisiting Arrays and Strings",
            "Running Sum of 1d Array",
            "Richest Customer Wealth",
            "Contains Duplicate",
            "Valid Palindrome",
            "Reverse String",
            "Longest Common Prefix",
            "Assignment | Sieve of Eratosthenes",
            "Count Primes"
          ]
        },
        {
          id: 2,
          name: "Algorithm Essentials",
          modules: [
            "Introduction to Recursion",
            "Deep Dive into Recursion",
            "Letter combination of phone number",
            "Fibonacci Number",
            "Pow(x, n)",
            "Hands-On | File Directory Scanner",
            "Subsequence Patterns in Recursion",
            "Introduction to Sorting & Merge Sort",
            "Sort an Array",
            "Merge Sorted Array",
            "Assignment | Kth largest element in an array",
            "Assignment | Merge Sort",
            "Quick Sort Algorithm",
            "Assignment | Quick Sort",
            "Assignment | Sorting Algorithm Optimization",
            "The Two-Pointer Approach | Collision Pattern",
            "Two Sum II - Input Array Is Sorted",
            "Container With Most Water",
            "3 sum",
            "The Sliding Window Pattern",
            "Longest Substring Without Repeating Characters",
            "Assignment | Maximum Sum Subarray of Size K",
            "Clash of Codes #1 | Algorithm Essentials"
          ]
        },
        {
          id: 3,
          name: "Stacks, Queues & Linked lists",
          modules: [
            "Introduction to Stacks",
            "Introduction to Queues & Deques",
            "Assignment | Infix to Postfix Conversion",
            "Assignment | Infix to Prefix Conversion",
            "Evaluate Reverse Polish Notation",
            "Assignment | Infix to Postfix Conversion",
            "Basic Calculator",
            "Assignment | Valid Parentheses",
            "Valid Parentheses",
            "Next Greater Element I",
            "Tower of Hanoi",
            "Introduction to Singly Linked list",
            "Assignment | Design a Linked List",
            "Merge Two Sorted Lists",
            "Palindrome Linked List",
            "Assignment | Reverse a Linked List",
            "The Slow & Fast Pointer Pattern",
            "Middle of the Linked List",
            "Remove Nth Node From End of List",
            "Assignment | Linked List Cycle Detection",
            "Hands-on | GPS Navigation",
            "Clash of Codes #2 | Stacks, Queues & Linked Lists"
          ]
        },
        {
          id: 4,
          name: "Trees and Hash Maps",
          modules: [
            "Introduction to trees",
            "Assignment | Level Order Traversal",
            "Assignment | Inorder, Preorder and Postorder Traversal",
            "Assignment | Tree traversals using recursion",
            "Introduction to Binary Trees",
            "Assignment | Binary Tree Operations - I",
            "Assignment | Binary Tree Operations Part - II",
            "Assignment | Find Maximum Depth of Binary Tree",
            "Assignment | Invert Binary Tree",
            "Introduction to Hash Maps and Hash Tables",
            "Assignment | Design HashMap",
            "Assignment | Two Sum using Hash Map",
            "Hands-on | Semantic Keyword Analyzer",
            "Clash of Codes #3 | Trees and Hash Maps"
          ]
        },
        {
          id: 5,
          name: "BSTs & Graphs",
          modules: [
            "Introduction to Binary Search Trees (BSTs)",
            "Search in a Binary Search Tree",
            "Assignment | Validate Binary Search Tree",
            "Assignment | Quest for the Hidden Integer",
            "Assignment | BST Pair Sum Check",
            "Introduction to Graphs and Representation",
            "Graph Traversal Algorithms (BFS & DFS)",
            "Assignment | BFS and DFS on a Graph",
            "Find if Path Exists in Graph",
            "Clone Graph",
            "Assignment | Number of Islands",
            "Cycle Detection in Graphs",
            "Assignment | Detect Cycle in a Graph",
            "Assignment | Social Network Clique Finder",
            "Hands-on | Task Dependency Manager",
            "Clash of Codes #4 | BSTs & Graphs"
          ]
        }
      ]
    },
    OS: {
      name: "Operating Systems",
      color: "#8B5CF6",
      units: [
        {
          id: 1,
          name: "Computer System & OS Overview",
          modules: [
            "Getting Started with OS",
            "Introduction to Operating systems",
            "System calls and programs",
            "Operating System Design, Implementation and structures",
            "Introduction to processes",
            "Operation on Processes & Interprocess communication",
            "Shared memory and Message passing Systems",
            "Remote Procedure calls"
          ]
        },
        {
          id: 2,
          name: "Process Management",
          modules: [
            "Introduction to threads",
            "Multithreading models and Hyperthreading",
            "Issues in threading",
            "Introduction to CPU Scheduling",
            "First Come First Served",
            "First Come First Served - Implementation",
            "Shortest Job First",
            "Shortest Job First - Implementation",
            "Priority Scheduling",
            "Priority Scheduling - Implementation",
            "Round Robin",
            "Round Robin - Implementation"
          ]
        },
        {
          id: 3,
          name: "Concurrency & Deadlock",
          modules: [
            "Process Synchronization",
            "The Critical Section Problem",
            "Test & set Lock",
            "Semaphores",
            "Classic problems of Process synchronization",
            "Monitors",
            "Solved problems on Process synchronization",
            "Assignment | Process Synchronization",
            "Deadlocks",
            "Deadlock Handling methods and Recovery",
            "Deadlock Avoidance"
          ]
        },
        {
          id: 4,
          name: "Memory Management",
          modules: [
            "Introduction to Memory Management",
            "Fixed and Variable Partitioning",
            "Partition Allocation Techniques (Best fit)",
            "Partition Allocation Techniques (Worst fit)",
            "Partition Allocation Techniques (First fit)",
            "Paging",
            "Segmentation",
            "Assignment | Paging & Segmentation",
            "Fragmentation",
            "Page replacement Algorithm: FIFO",
            "Optimal Page replacement",
            "Least Recently Used",
            "Solved Problems on Page Replacement"
          ]
        },
        {
          id: 5,
          name: "File Systems & Storage",
          modules: [
            "Introduction to Storage Management",
            "File systems",
            "File system Implementations",
            "File Allocation methods",
            "File system crash recovery and protection",
            "Free space management",
            "RAID",
            "Virtual Machines",
            "Getting Started with Linux: Desktop, Terminal, and Basics",
            "Working with directories in Linux",
            "Working with Files and Exploring the Linux Directory Structure",
            "Mini Project: System Resource Monitor & Process Analyzer"
          ]
        }
      ]
    },
    ES: {
      name: "Environmental Science",
      color: "#10B981",
      units: [
        {
          id: 1,
          name: "Environment-Ecosystem",
          modules: [
            "Definition, Scope and Importance - Need for Public Awareness",
            "Multidisciplinary Nature of Environmental Sciences",
            "Concept of an Ecosystem",
            "Structure and Function of an Ecosystem: Producers",
            "Consumers, Decomposers, Ecological Succession & Food Chains",
            "Food Webs & Ecological Pyramids",
            "Energy Flow in Ecosystems & Types of Ecosystems"
          ]
        },
        {
          id: 2,
          name: "Natural Resources",
          modules: [
            "Energy & Forest Resources: Renewable vs Non-renewable Energy and Forest Conservation",
            "Deforestation & Case Studies: Timber Extraction, Mining, Dams and Effects on Forests and Tribal People",
            "Water Resources: Use, Over-utilization, Floods, Droughts, Conflicts & Dams",
            "Mineral Resources: Use and Exploitation",
            "Food Resources: World Food Problems, Changes Caused by Agriculture and Overgrazing",
            "Effects of Modern Agriculture: Fertilizer-Pesticide Problems, Waterlogging & Salinity"
          ]
        },
        { id: 3, name: "Biodiversity and its Conservation", modules: ["Definition: Genetic, Species and Ecosystem Diversity", "Value of Biodiversity", "Biodiversity at Global, National and Local Levels", "Threats to Biodiversity", "Unit 3 Quiz"] },
        { id: 4, name: "Environmental Pollution", modules: ["Air Pollution: Definition, Causes, Effects and Control", "Water Pollution: Definition, Causes, Effects and Control", "Soil Pollution and Noise Pollution", "Nuclear Hazards and Solid Waste Management", "Unit 4 Quiz"] },
        { id: 5, name: "Human Population Change and the Environment", modules: ["Population Growth and Population Explosion", "Women Empowerment and Population Control", "Environmental Issues: Global Warming, Acid Rain, Ozone Depletion", "Role of Information Technology in Environment and Human Health", "Unit 5 Quiz"] }
      ]
    },
    LS: {
      name: "Language Systems",
      color: "#EF4444",
      units: [
        {
          id: 1,
          name: "Foundations of Language",
          modules: [
            "Overview of Linguistics and its Sub-fields",
            "Phonetics and Phonology",
            "Morphology: The Study of Word Structure",
            "Unit 1 Mastery Quiz"
          ]
        },
        {
          id: 2,
          name: "Meaning and Structure",
          modules: [
            "Syntax and Syntactic Structures",
            "Semantics and Semantic Structures",
            "Language Typology",
            "Unit 2 Mastery Quiz"
          ]
        },
        {
          id: 3,
          name: "Evolution and Growth",
          modules: [
            "Learning to Speak",
            "The Changing Word",
            "Tracing the Past",
            "Unit 3 Mastery Quiz"
          ]
        },
        {
          id: 4,
          name: "Language in Society",
          modules: [
            "Social Variation",
            "Policy and Power",
            "Language and Identity",
            "Digital Linguistics",
            "Unit 4 Mastery Quiz"
          ]
        },
        {
          id: 5,
          name: "Culture and Globalization",
          modules: [
            "Language and Culture",
            "Gendered Expression",
            "The Global Stage",
            "Research Masterclass",
            "Unit 5 Mastery Quiz"
          ]
        }
      ]
    },
    FLAT: {
      name: "Formal Languages & Automata",
      color: "#3B82F6",
      units: [
        { id: 1, name: "Introduction to Formal Languages", modules: ["Alphabets and Strings", "Language Operations", "Finite State Machines", "DFA and NFA", "Transition Diagrams", "Unit 1 Quiz"] },
        { id: 2, name: "Finite Automata", modules: ["Acceptance of Languages", "DFA and NFA Equivalence", "NFA to DFA Conversion", "Epsilon Transitions", "Automata Minimization", "Unit 2 Quiz"] },
        { id: 3, name: "Regular Languages", modules: ["Regular Expressions", "Regular Expression Operations", "Applications and Conversions", "Pumping Lemma", "Regular Grammars", "Unit 3 Quiz"] },
        { id: 4, name: "Context-Free Languages", modules: ["Context-Free Grammars", "Leftmost and Rightmost Derivations", "Normal Forms", "Pushdown Automata", "CFG-PDA Equivalence", "Unit 4 Quiz"] },
        { id: 5, name: "Turing Machines and Computability", modules: ["Chomsky Hierarchy", "Turing Machine Definition", "Post Correspondence Problem", "Decidable Problems", "Undecidable Problems", "Unit 5 Quiz"] }
      ]
    },
    NSS: {
      name: "National Service Scheme",
      color: "#F59E0B",
      units: [
        { id: 1, name: "Orientation: Career Guidance", modules: ["Career Orientation & Future Planning", "Ice Breaking & Personal Skills", "Success Stories & Motivation", "Talent Show Activities", "Environmental Literature"] },
        { id: 2, name: "Nature & Waste Management", modules: ["Best Out of Waste Competition", "Poster Making Competition", "Recycling & Environmental Pollution", "Rainwater Harvesting Management", "Eco-Friendly Product Management"] },
        { id: 3, name: "Community Service", modules: ["One Day Special Camp in Village", "Village Survey & Problem Identification", "Health Awareness Programs", "Consumer Awareness Programs", "Collaboration with NGOs & Charities"] },
        { id: 4, name: "Environmental Safety", modules: ["Eco-Friendly Approaches", "Vehicle Maintenance Workshops", "Safety Campaign Projects", "Go Green Activities", "Clean Campus Program"] },
        { id: 5, name: "Digital Environmental Awareness", modules: ["Digital Environmental Awareness", "Organizing Zero-Waste Day", "Women Empowerment Programs", "Internet Safety & Cyber Wellness", "Digital Citizenship Activities"] }
      ]
    }
  };

  useEffect(() => {
    if (session === null) return;
    if (session && !session.user?.isAdmin) {
      router.push("/");
      return;
    }
    if (session) {
      fetchStudents();
    }
  }, [session]);

  // Handle searching with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (session?.user?.isAdmin) {
        fetchStudents(studentSearch);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [studentSearch]);

  const fetchStudents = async (query = "") => {
    setIsSearching(true);
    const url = query ? `/api/users/students?q=${encodeURIComponent(query)}` : "/api/users/students";
    const res = await fetch(url);
    const data = await res.json();
    if (data.ok) {
      setStudents(data.data.filter((u: any) => !u.isAdmin));
    }
    setLoading(false);
    setIsSearching(false);
  };

  const fetchProgress = async (email: string) => {
    setSelectedStudent(email);
    setSelectedSubject(null);
    const timestamp = new Date().getTime();
    console.log('Fetching progress for:', email);
    const res = await fetch(`/api/progress?userEmail=${email}&_t=${timestamp}`, {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache'
      }
    });
    const data = await res.json();
    console.log('Progress data received:', data);
    if (data.success) {
      setProgress(data.data);
    }
  };

  const isModuleCompleted = (subject: string, unitId: number, moduleId: number) => {
    return progress.some(
      (p) => p.subject === subject && p.unitId === unitId && p.moduleId === moduleId
    );
  };

  const getModuleScore = (subject: string, unitId: number, moduleId: number) => {
    return progress.find(
      (p) => p.subject === subject && p.unitId === unitId && p.moduleId === moduleId
    );
  };

  const getSubjectProgress = (subject: string) => {
    const structure = courseStructure[subject];
    if (!structure) return { completed: 0, total: 0, percentage: 0 };

    let total = 0;
    let completed = 0;

    structure.units.forEach((unit: any) => {
      unit.modules.forEach((_: any, idx: number) => {
        total++;
        if (isModuleCompleted(subject, unit.id, idx + 1)) {
          completed++;
        }
      });
    });

    return { completed, total, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F6F1] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#3E73C1] border-t-transparent rounded-full animate-spin" />
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Synchronizing Nodes...</p>
        </div>
      </div>
    );
  }

  const filteredStudents = students; // Data is already filtered by the API

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#121212] font-sans">
      <div className="flex relative">
        <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        <main className="flex-1 sm:ml-[280px] px-6 sm:px-16 py-6 sm:py-10 min-w-0 overflow-x-hidden relative z-10">
          {/* TOP NAV BAR */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="sm:hidden p-2 bg-white border border-[#E5E2D9] rounded-xl text-[#3E73C1] cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A8A]">Student Progress</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <p className="text-[10px] font-bold uppercase text-[#888] tracking-widest leading-none">Status</p>
                <p className="text-sm font-bold text-[#3E73C1] mt-1">Real-time Analytics</p>
              </div>
            </div>
          </div>

          {/* PAGE HEADER */}
          <div className="mb-12 px-2">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#121212] tracking-tighter mb-4 flex items-center gap-4">
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-[#3E73C1]" />
              Student Progress
            </h1>
            <p className="text-slate-500 font-semibold text-sm sm:text-lg max-w-2xl leading-relaxed">
              Track student quiz scores, module completion, and overall academic progress across all subjects.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            {/* STUDENT ROSTER */}
            <div className="col-span-12 lg:col-span-3 space-y-4">
              <div className="bg-white border border-[#E5E2D9] rounded-[2rem] p-6 shadow-sm flex flex-col h-[700px]">
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-[#1E3A8A] tracking-widest uppercase mb-4 ml-1">Students</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Filter..."
                      value={studentSearch}
                      onChange={(e) => setStudentSearch(e.target.value)}
                      className="w-full bg-[#F8F6F1] border border-[#E5E2D9] pl-10 pr-4 py-2.5 rounded-xl text-xs font-bold outline-none focus:ring-2 focus:ring-[#3E73C1]/10 transition-all"
                    />
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar no-scrollbar">
                  {filteredStudents.map((student) => (
                    <button
                      key={student._id}
                      onClick={() => fetchProgress(student.email)}
                      className={`w-full text-left p-4 rounded-2xl transition-all border cursor-pointer ${selectedStudent === student.email
                        ? "bg-[#3E73C1] border-[#3E73C1] text-white"
                        : "bg-[#F8F6F1] border-transparent text-[#121212] hover:bg-white hover:border-[#E5E2D9]"
                        }`}
                    >
                      <div className="font-bold text-[11px] uppercase tracking-tight truncate">{student.fullName || "Not Set"}</div>
                      <div className={`text-[9px] font-bold truncate mt-0.5 ${selectedStudent === student.email ? 'text-white/70' : 'text-slate-400'}`}>
                        {student.email}
                      </div>
                      <div className={`text-[8px] font-bold uppercase tracking-[0.15em] mt-2 inline-block px-2 py-0.5 rounded-full border ${selectedStudent === student.email ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-[#E5E2D9] text-[#3E73C1]'
                        }`}>
                        Semester {student.currentSemester}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ANALYTICS VIEWPORT */}
            <div className="col-span-12 lg:col-span-9">
              {!selectedStudent ? (
                <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-12 h-[700px] flex flex-col items-center justify-center text-center opacity-60">
                  <div className="w-24 h-24 bg-[#F8F6F1] rounded-[2rem] flex items-center justify-center mb-6">
                    <User className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#121212] tracking-tighter uppercase mb-2">Select a Student</h3>
                  <p className="text-sm font-semibold text-slate-400 max-w-sm leading-relaxed">Choose a student from the list to view their quiz scores and module completion status.</p>
                </div>
              ) : !selectedSubject ? (
                <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 sm:p-12 shadow-sm min-h-[700px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                    <div>
                      <p className="text-[10px] font-bold uppercase text-[#3E73C1] tracking-[0.2em] mb-2 leading-none">Progress Overview</p>
                      <h2 className="text-2xl sm:text-3xl font-bold text-[#121212] tracking-tighter uppercase mr-4 flex items-center gap-3">
                        <GraduationCap className="w-8 h-8 text-[#3E73C1]" />
                        {students.find(s => s.email === selectedStudent)?.fullName}
                      </h2>
                    </div>
                    <button
                      onClick={() => fetchProgress(selectedStudent!)}
                      className="flex items-center justify-center gap-3 bg-[#F8F6F1] border border-[#E5E2D9] px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:border-[#3E73C1] transition-all group cursor-pointer"
                    >
                      <RefreshCw className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-700" />
                      Refresh
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(courseStructure).map(([code, subject]: [string, any]) => {
                      const prog = getSubjectProgress(code);
                      return (
                        <motion.div
                          key={code}
                          onClick={() => setSelectedSubject(code)}
                          className="group bg-[#F8F6F1]/50 border border-[#E5E2D9] rounded-[2rem] p-8 cursor-pointer hover:bg-white hover:border-[#3E73C1]/30 transition-all duration-300"
                        >
                          <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm border border-[#E5E2D9] group-hover:border-transparent group-hover:bg-white transition-all bg-white" style={{ color: subject.color }}>
                                <LayoutGrid className="w-6 h-6" />
                              </div>
                              <h3 className="text-sm font-bold text-[#121212] uppercase tracking-tight">{subject.name}</h3>
                            </div>
                            <div className="text-3xl font-bold" style={{ color: subject.color }}>
                              {prog.percentage}%
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="flex justify-between items-end">
                              <p className="text-[10px] font-bold uppercase tracking-widest text-[#3E73C1] group-hover:tracking-[0.2em] transition-all">Quiz Score</p>
                              <p className="text-[10px] font-bold text-slate-400">{prog.completed} / {prog.total} Completed</p>
                            </div>
                            <div className="w-full bg-[#E5E2D9]/50 rounded-full h-3 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${prog.percentage}%` }}
                                className="h-full transition-all duration-1000"
                                style={{ backgroundColor: subject.color }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-[#E5E2D9] rounded-[2.5rem] p-8 sm:p-12 shadow-sm min-h-[700px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => setSelectedSubject(null)}
                        className="p-4 bg-[#F8F6F1] border border-[#E5E2D9] rounded-2xl hover:bg-white hover:border-[#3E73C1] transition-all group cursor-pointer"
                      >
                        <ArrowLeft className="w-5 h-5 text-slate-500 group-hover:text-[#3E73C1]" />
                      </button>
                      <div>
                        <p className="text-[10px] font-bold uppercase text-[#3E73C1] tracking-widest mb-1">Module Details</p>
                        <h2 className="text-2xl font-bold text-[#121212] tracking-tighter uppercase">{courseStructure[selectedSubject].name}</h2>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Overall Score</p>
                        <div className="text-3xl font-bold" style={{ color: courseStructure[selectedSubject].color }}>
                          {getSubjectProgress(selectedSubject).percentage}%
                        </div>
                      </div>
                      <button
                        onClick={() => fetchProgress(selectedStudent!)}
                        className="p-4 bg-[#3E73C1] rounded-2xl group active:scale-95 transition-all cursor-pointer"
                      >
                        <RefreshCw className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-700" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-8">
                    {courseStructure[selectedSubject].units.map((unit: any) => (
                      <div key={unit.id} className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="h-px bg-[#E5E2D9] flex-1" />
                          <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3E73C1] whitespace-nowrap">
                            Unit S{unit.id}: {unit.name}
                          </h3>
                          <div className="h-px bg-[#E5E2D9] flex-1" />
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                          {unit.modules.map((moduleName: string, idx: number) => {
                            const moduleId = idx + 1;
                            const completed = isModuleCompleted(selectedSubject, unit.id, moduleId);
                            const score = getModuleScore(selectedSubject, unit.id, moduleId);

                            return (
                              <div
                                key={moduleId}
                                className={`flex items-center justify-between p-5 rounded-[1.5rem] border transition-all duration-300 ${completed
                                  ? "bg-white border-[#3E73C1]/20 shadow-sm"
                                  : "bg-[#F8F6F1]/40 border-[#E5E2D9]/60 grayscale-[0.5] opacity-70"
                                  }`}
                              >
                                <div className="flex items-center gap-5">
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${completed
                                    ? "bg-[#3E73C1] text-white"
                                    : "bg-[#E5E2D9] text-slate-400"
                                    }`}>
                                    {completed ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-[10px] font-bold">{moduleId}</span>}
                                  </div>
                                  <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#3E73C1] leading-none mb-1.5 grayscale-0">Module {unit.id}.{moduleId}</p>
                                    <h4 className={`text-xs font-bold uppercase tracking-tight ${completed ? 'text-[#121212]' : 'text-slate-500'}`}>
                                      {moduleName}
                                    </h4>
                                  </div>
                                </div>
                                {completed && score && (
                                  <div className="flex items-center gap-8 px-6 border-l border-slate-100">
                                    <div className="flex flex-col items-end">
                                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-300 mb-1">Score</p>
                                      <span className="text-xl font-bold" style={{ color: courseStructure[selectedSubject].color }}>
                                        {score.percentage}%
                                      </span>
                                    </div>
                                    <div className="flex flex-col items-end">
                                      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-300 mb-1">Correct Answers</p>
                                      <span className="text-xs font-bold text-[#121212] bg-[#F8F6F1] px-3 py-1.5 rounded-lg border border-[#E5E2D9]">
                                        {score.score} / {score.totalQuestions}
                                      </span>
                                    </div>
                                  </div>
                                )}
                                {!completed && (
                                  <div className="px-6 border-l border-slate-200">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Not Attempted</span>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <Footer
            links={[
              { label: "Admin Panel", href: "#" },
              { label: "System Logs", href: "#" },
              { label: "Support", href: "#" }
            ]}
            copyright="© 2026 GGU LMS • Administrative Interface"
          />
        </main>
      </div >
    </div >
  );
}
