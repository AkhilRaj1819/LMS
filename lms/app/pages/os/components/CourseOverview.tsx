'use client';
import React, { useState, useEffect } from 'react';
import MainSidebar from '@/components/Sidebar';
import { useSession } from 'next-auth/react';

interface CourseOverviewProps {
  onModuleSelect: (unitId: number, moduleId: number) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ onModuleSelect }) => {
  const [activeTab, setActiveTab] = useState('learning-path');
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);
  const { data: session } = useSession();
  const [studentProgress, setStudentProgress] = useState<any[]>([]);

  useEffect(() => {
    if (session?.user?.email) {
      fetchStudentProgress(session.user.email);
    }
  }, [session]);

  const fetchStudentProgress = async (email: string) => {
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
  };

  const completedModules = studentProgress.length;
  const masteryModules = studentProgress.filter(p => p.percentage >= 80).length;
  const totalModules = 25;
  const completedPercentage = Math.round((completedModules / totalModules) * 100);
  const masteryPercentage = Math.round((masteryModules / totalModules) * 100);

  const units = [
    {
      id: 1,
      title: 'Getting started with OS',
      description: 'This module introduces the fundamentals of operating systems, including their purpose, structure, and core functions. It explains how operating systems manage hardware, support program execution, and enable communication between processes.',
      modules: [
        { id: '1.1', title: 'Getting Started with OS', description: 'Explore the fundamentals of Operating Systems through engaging sessions, hands-on assignments, and real-world problem-solving activities.' },
        { id: '1.2', title: 'Introduction to Operating systems', description: 'What if your OS disappeared - would you even be able to turn your computer on? This session uncovers the invisible force that controls your system heart and brain.' },
        { id: '1.3', title: 'Fundamentals of computer systems (Optional)', description: 'Understand the basic components, functions, and operations of computer systems that form the foundation of modern computing.' },
        { id: '1.4', title: 'System calls and programs', description: 'How do your apps get anything done? Uncover the secret handshakes (system calls!) they use to boss the operating system around!' },
        { id: '1.5', title: 'Assignment: System calls and programs (Optional)', description: 'Improve confidence in understanding System calls and program before attempting the actual assessment' },
        { id: '1.6', title: 'Operating System Design, Implementation and structures', description: 'What is really inside your OS? We are cracking open the case to explore the architectural blueprints and ingenious structures that make it all tick!' },
        { id: '1.7', title: 'Operating System Generation and System Boot (Optional)', description: 'Explore the evolution of operating systems and understand the system boot process from power-on to OS loading.' },
        { id: '1.8', title: 'Introduction to processes', description: 'What are these processes everyone talks about? Think of them as the OS tiny, tireless workers - let us meet them (live!) and see how they are managed.' },
        { id: '1.9', title: 'Assignment: Introduction to processes (Optional)', description: 'Improve confidence in understanding Introduction to process before attempting the actual assessment' },
        { id: '1.10', title: 'Operation on Processes & Interprocess communication', description: 'Processes can be loners, or they can collaborate! How do they talk (pipes) or nudge (signals) each other? Let us explore their social (and sometimes bossy) lives.' },
        { id: '1.11', title: 'Shared memory and Message passing Systems', description: 'How do processes share secrets or data super-fast? Discover if they prefer leaving notes in a shared mailbox (shared memory) or sending direct telegrams (message passing)!' },
        { id: '1.12', title: 'Assignment: Shared memory and Message passing Systems (Optional)', description: 'Improve confidence in understanding Shared memory & Message passing before doing actual assessment' },
        { id: '1.13', title: 'Sockets in OS (Optional)', description: 'Learn how sockets enable communication between processes over a network in operating systems.' },
        { id: '1.14', title: 'Remote Procedure calls', description: 'How can your program call a function on a computer miles away like it is next door? Unravel the magic of Remote Procedure Calls (RPCs) - it is like programming with teleportation!' },
        { id: '1.15', title: 'Assignment: Remote Procedure calls (Optional)', description: 'Improve confidence in understanding Remote Procedure Calls before attempting the actual assessment' },
        { id: '1.16', title: 'Dispatching (Optional)', description: 'Understand the concept of dispatching in operating systems, where the CPU switches control to the selected process for execution.' },
        { id: '1.17', title: 'Assignment: Getting started with OS (Optional)', description: 'Improve confidence in understanding, getting started with OS before attempting the actual assessment' },
        { id: '1.18', title: 'Getting started with OS | Practice Assignment (Optional)', description: 'Practice this assignment as an optional activity to strengthen your conceptual understanding.' }
      ]
    },
    {
      id: 2,
      title: 'Threads and CPU scheduling',
      description: 'This module introduces threads as the basic unit of execution and explains their relationship with processes. It covers CPU scheduling concepts and common algorithms such as FCFS, SJF, Priority, and Round Robin, focusing on fairness, responsiveness, and performance.',
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
        { id: '2.12', title: 'Round Robin - Implementation', description: 'Slice and dice that CPU time! How do we code a system where every task gets its fair (and tiny) moment in the spotlight?' },
        { id: '2.13', title: 'Multilevel Queue Scheduling (Optional)', description: 'Understand the concept of dispatching in operating systems, where the CPU switches control to the selected process for execution.' },
        { id: '2.14', title: 'Project: Simple Job Queue with Priority Scheduling | Part 1', description: 'Implement priority scheduling to compute waiting and turnaround times accurately.' },
        { id: '2.15', title: 'Project: Simple Job Queue with Priority Scheduling | Part 2', description: 'Compare preemptive and non-preemptive priority scheduling using CPU metrics' },
        { id: '2.16', title: 'Threads and CPU scheduling | Practice Assignment (Optional)', description: 'Practice this assignment as an optional activity to strengthen your conceptual understanding.' }
      ]
    },
    {
      id: 3,
      title: 'Process Synchronization and Deadlocks',
      description: 'This module explains how multiple processes coordinate while sharing resources using synchronization mechanisms such as locks, semaphores, and monitors. It also introduces deadlocks, their causes, and strategies for prevention and handling to ensure system stability.',
      modules: [
        { id: '3.1', title: 'Process Synchronization', description: 'Ever tried group work where everyone edits the same document at once? Let us learn how to make processes share nicely!' },
        { id: '3.2', title: 'The Critical Section Problem', description: 'Imagine a one-person bathroom in a busy office. How do we ensure only one process gets alone time with shared data?' },
        { id: '3.3', title: 'Test & set Lock', description: 'Is this resource free? Learn a simple, powerful hardware instruction that answers this crucial question for process coordination!' },
        { id: '3.4', title: 'Semaphores', description: 'Need traffic lights for your processes? Meet semaphores, the classic tool for controlling access to shared resources!' },
        { id: '3.5', title: 'Classic problems of Process synchronization', description: 'Dining philosophers starving? Barbers sleeping? Unravel these legendary brain-teasers of concurrent programming!' },
        { id: '3.6', title: 'Monitors', description: 'Tired of juggling locks and conditions yourself? Discover Monitors, the VIP lounges that manage synchronization for you!' },
        { id: '3.7', title: 'Solved problems on Process Synchronization', description: 'Apply theoretical knowledge of process synchronization by working through practical scenarios.' },
        { id: '3.8', title: 'Assignment | Process Synchronization', description: 'Learn to implement process synchronization using semaphores by managing concurrent thread access to a shared variable.' },
        { id: '3.9', title: 'Linkers and Dynamic linking (Optional)', description: 'How does your compiled code magically find and use other pieces of code, sometimes even after it starts running?' },
        { id: '3.10', title: 'Deadlocks', description: 'I am waiting for you, but you are waiting for me! What happens when processes get stuck in this deadly embrace?' },
        { id: '3.11', title: 'Deadlock Handling methods and Recovery', description: 'Your system is gridlocked! Do we call a tow truck (kill a process) or try to untangle the mess?' },
        { id: '3.12', title: 'Deadlock Avoidance', description: 'Can we be OS fortune tellers, peering into the future to steer clear of deadlocks before they even happen?' },
        { id: '3.13', title: 'Solved Problems on Deadlocks (Optional)', description: 'Walk through real examples of deadlock scenarios and their resolution using resource allocation graphs.' },
        { id: '3.14', title: 'Process Synchronization and Deadlocks | Practice Assignment (Optional)', description: 'Practice this assignment as an optional activity to strengthen your conceptual understanding.' }
      ]
    },
    {
      id: 4,
      title: 'Memory Management',
      description: 'This module explains how operating systems manage and allocate main memory to support multiple processes. It covers paging, segmentation, and page replacement algorithms, focusing on performance and efficient resource utilization.',
      modules: [
        { id: '4.1', title: 'Introduction to Memory Management', description: 'Where does your program actually live while it is running? Let us explore your computer most valuable real estate!' },
        { id: '4.2', title: 'Main Memory and Virtual Memory (Optional)', description: 'Explain main vs virtual memory and how OS manages them efficiently.' },
        { id: '4.3', title: 'Dynamic Storage Management (Optional)', description: 'In this lesson, you will learn about dynamic storage management.' },
        { id: '4.4', title: 'Fixed and Variable Partitioning', description: 'Slicing up memory: do we use pre-defined chunks (fixed) or cut custom sizes (variable)? What is the trade-off?' },
        { id: '4.5', title: 'Partition Allocation Techniques (Best fit)', description: 'Playing memory matchmaker! How do we find the snuggest available spot for a new process?' },
        { id: '4.6', title: 'Partition Allocation Techniques (Worst fit)', description: 'Sounds bad, but is it? Why might leaving the largest possible hole be a good strategy for memory allocation?' },
        { id: '4.7', title: 'Partition Allocation Techniques (First fit)', description: 'Quick and easy! Why search far and wide when the first spot that fits will do? But is it always efficient?' },
        { id: '4.8', title: 'Paging', description: 'What if we chopped programs and memory into equal-sized pages? Welcome to a revolutionary way to manage memory!' },
        { id: '4.9', title: 'Segmentation', description: 'Instead of equal pages, what if we divided memory based on logical parts of a program, like code, data, and stack?' },
        { id: '4.10', title: 'Assignment | Paging & Segmentation', description: 'In this assignment, learners will solve problems related to paging and segmentation, applying address translation concepts.' },
        { id: '4.11', title: 'Fragmentation', description: 'Oh, the wasted space! Discover the annoying holes in memory that are too small to use - memory version of lost socks!' },
        { id: '4.12', title: 'Page replacement Algorithm: FIFO', description: 'When memory is full and a new page needs to come in, who gets evicted? First In, First Out - fair or just simple?' },
        { id: '4.13', title: 'Optimal Page replacement', description: 'If you had a crystal ball to know which page will not be needed for the longest time, how would you swap?' },
        { id: '4.14', title: 'Least Recently Used', description: 'Have not used it in a while? You are out! Explore this popular, practical strategy for deciding which page to kick out.' },
        { id: '4.15', title: 'Solved Problems on Page Replacement', description: 'Apply page replacement algorithms to compute page faults accurately' },
        { id: '4.16', title: 'Other page replacement algorithms (Optional)', description: 'You will explore some of the other page replacement algorithms in this lesson.' },
        { id: '4.17', title: 'Memory Management | Practice Assignment (Optional)', description: 'Practice this assignment as an optional activity to strengthen your conceptual understanding.' }
      ]
    },
    {
      id: 5,
      title: 'Storage Management & Linux',
      description: 'This module covers how operating systems manage long-term storage through file systems, allocation methods, protection, and reliability techniques. It also introduces virtualization and provides hands-on Linux labs for practical system interaction.',
      modules: [
        { id: '5.1', title: 'Introduction to Storage Management', description: 'Beyond Save As, where do your digital treasures actually live and how does your OS keep track of them all?' },
        { id: '5.2', title: 'File systems', description: 'It is not just folders! How does your OS organize billions of bits into a structure you can actually navigate without going insane?' },
        { id: '5.3', title: 'File system Implementations', description: 'Ever wondered what is under the hood of NTFS, FAT32, or ext4? Let us peek at how these digital librarians actually work!' },
        { id: '5.4', title: 'File Allocation methods', description: 'When you save a file, where do its pieces physically go on the disk? Contiguous, linked, or indexed - what is the best scatter plan?' },
        { id: '5.5', title: 'File system crash recovery and protection', description: 'Power outage! System crash! How does your file system play hero and try to bring your data back from the brink (and keep it safe)?' },
        { id: '5.6', title: 'Free space management', description: 'Your disk is not a bottomless pit! How does the OS keep track of all the empty nooks and crannies to store new files?' },
        { id: '5.7', title: 'RAID', description: 'One disk is good, but what if many disks team up? Discover RAID: for super speed, super safety, or a bit of both!' },
        { id: '5.8', title: 'Virtual Machines', description: 'Want to run Windows on your Mac, or Linux inside Windows? Step into the Matrix with Virtual Machines - computers within your computer!' },
        { id: '5.9', title: 'Getting Started with Linux: Desktop, Terminal, and Basics', description: 'Goodbye GUI, hello command line! Can you navigate your computer with just typed commands? Let us find out!' },
        { id: '5.10', title: 'Working with directories in Linux', description: 'Moving beyond ls and cd! Let us unlock more text-based superpowers and start making Linux dance to your tune.' },
        { id: '5.11', title: 'Working with Files and Exploring the Linux Directory Structure', description: 'Users, permissions, and pipes, oh my! Master the art of controlling who does what and making commands work together like a symphony.' },
        { id: '5.12', title: 'Mastering Linux Basics: System Info, Networking, Packages & Text Editing (Optional)', description: 'Ready to automate and customize? Let us dip our toes into scripting and essential tools to make Linux truly your playground.' },
        { id: '5.13', title: 'Mini Project: System Resource Monitor & Process Analyzer', description: 'Apply Linux commands and scripting to monitor and summarize system performance.' },
        { id: '5.14', title: 'Storage Management & Linux | Practice Assignment (Optional)', description: 'Practice this assignment as an optional activity to strengthen your conceptual understanding.' }
      ]
    }
  ];

  return (
    <div className="flex">
      <div className="fixed left-0 top-0 h-screen overflow-hidden">
        <MainSidebar />
      </div>
      <div className="flex-1">
        <div className="lms-dashboard">
          <div className="lms-container">
        <div className="lms-header">
          <div className="header-left">
            <svg className="megaphone-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#E63946" strokeWidth="2" fill="none"/>
            </svg>
            <h1 className="course-title">Operating Systems</h1>
          </div>
          <div className="header-right">
            <div className="progress-bar-container">
              <div className="progress-segments">
                {[...Array(20)].map((_, i) => {
                  const segmentThreshold = (i + 1) * 5;
                  return (
                    <div 
                      key={i} 
                      className={`segment ${
                        completedPercentage >= segmentThreshold ? 'completed' : 
                        masteryPercentage >= segmentThreshold ? 'mastery' : ''
                      }`}
                    ></div>
                  );
                })}
              </div>
              <div className="progress-text">{completedPercentage}% Completed • {masteryPercentage}% Mastery</div>
            </div>
          </div>
        </div>

        <nav className="tab-navigation">
          <button className={`tab ${activeTab === 'learning-path' ? 'active' : ''}`} onClick={() => setActiveTab('learning-path')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 3h12M2 8h12M2 13h12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Learning Path
          </button>
          <button className={`tab ${activeTab === 'sessions' ? 'active' : ''}`} onClick={() => setActiveTab('sessions')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="3" width="10" height="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            Sessions
          </button>
          <button className={`tab ${activeTab === 'assessments' ? 'active' : ''}`} onClick={() => setActiveTab('assessments')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            Assessments
          </button>
          <button className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            About
          </button>
          <button className="tab" onClick={() => window.location.href = '/pages/livebooks'} style={{ marginLeft: 'auto' }}>
            Go to Livebooks
          </button>
        </nav>

        <div className="timeline-content">
          {units.map((unit) => (
            <div key={unit.id} className="unit-block">
              <div className="unit-header-block" onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}>
                <div className="module-badge">
                  <div className="badge-label">Module</div>
                  <div className="badge-number">{unit.id}</div>
                </div>
                <div className="unit-description">
                  <h2 className="unit-title">{unit.title}</h2>
                  <p className="unit-desc">{unit.description}</p>
                </div>
                <div className="expand-indicator">{expandedUnit === unit.id ? '▼' : '▶'}</div>
              </div>

              {expandedUnit === unit.id && (
                <div className="lessons-timeline">
                  {unit.modules.map((module, idx) => (
                    <div 
                      key={module.id} 
                      className="lesson-item" 
                      onClick={(e) => {
                        e.stopPropagation();
                        onModuleSelect(unit.id, idx + 1);
                      }}
                    >
                      <div className="lesson-badge">{module.id}</div>
                      <div className="lesson-content">
                        <h3 className="lesson-title">{module.title}</h3>
                        <p className="lesson-desc">{module.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseOverview;
