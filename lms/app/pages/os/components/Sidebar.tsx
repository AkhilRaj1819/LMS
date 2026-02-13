'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  selectedModule: string;
  onModuleSelect: (unitId: number, moduleId: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedModule, onModuleSelect, isOpen, onClose }) => {
  const units = [
    {
      id: 1,
      title: 'Module 1: Getting started with OS',
      modules: [
        'Getting Started with OS',
        'Introduction to Operating systems',
        'Fundamentals of computer systems (Optional)',
        'System calls and programs',
        'Assignment: System calls and programs (Optional)',
        'Operating System Design, Implementation and structures',
        'Operating System Generation and System Boot (Optional)',
        'Introduction to processes',
        'Assignment: Introduction to processes (Optional)',
        'Operation on Processes & Interprocess communication',
        'Shared memory and Message passing Systems',
        'Assignment: Shared memory and Message passing Systems (Optional)',
        'Sockets in OS (Optional)',
        'Remote Procedure calls',
        'Assignment: Remote Procedure calls (Optional)',
        'Dispatching (Optional)',
        'Assignment: Getting started with OS (Optional)',
        'Getting started with OS | Practice Assignment (Optional)'
      ]
    },
    {
      id: 2,
      title: 'Module 2: Threads and CPU scheduling',
      modules: [
        'Introduction to threads',
        'Multithreading models and Hyperthreading',
        'Issues in threading',
        'Introduction to CPU Scheduling',
        'First Come First Served',
        'First Come First Served - Implementation',
        'Shortest Job First',
        'Shortest Job First - Implementation',
        'Priority Scheduling',
        'Priority Scheduling - Implementation',
        'Round Robin',
        'Round Robin - Implementation',
        'Multilevel Queue Scheduling (Optional)',
        'Project: Simple Job Queue with Priority Scheduling | Part 1',
        'Project: Simple Job Queue with Priority Scheduling | Part 2',
        'Threads and CPU scheduling | Practice Assignment (Optional)'
      ]
    },
    {
      id: 3,
      title: 'Module 3: Process Synchronization and Deadlocks',
      modules: [
        'Process Synchronization',
        'The Critical Section Problem',
        'Test & set Lock',
        'Semaphores',
        'Classic problems of Process synchronization',
        'Monitors',
        'Solved problems on Process Synchronization',
        'Assignment | Process Synchronization',
        'Linkers and Dynamic linking (Optional)',
        'Deadlocks',
        'Deadlock Handling methods and Recovery',
        'Deadlock Avoidance',
        'Solved Problems on Deadlocks (Optional)',
        'Process Synchronization and Deadlocks | Practice Assignment (Optional)'
      ]
    },
    {
      id: 4,
      title: 'Module 4: Memory Management',
      modules: [
        'Introduction to Memory Management',
        'Main Memory and Virtual Memory (Optional)',
        'Dynamic Storage Management (Optional)',
        'Fixed and Variable Partitioning',
        'Partition Allocation Techniques (Best fit)',
        'Partition Allocation Techniques (Worst fit)',
        'Partition Allocation Techniques (First fit)',
        'Paging',
        'Segmentation',
        'Assignment | Paging & Segmentation',
        'Fragmentation',
        'Page replacement Algorithm: FIFO',
        'Optimal Page replacement',
        'Least Recently Used',
        'Solved Problems on Page Replacement',
        'Other page replacement algorithms (Optional)',
        'Memory Management | Practice Assignment (Optional)'
      ]
    },
    {
      id: 5,
      title: 'Module 5: Storage Management & Linux',
      modules: [
        'Introduction to Storage Management',
        'File systems',
        'File system Implementations',
        'File Allocation methods',
        'File system crash recovery and protection',
        'Free space management',
        'RAID',
        'Virtual Machines',
        'Getting Started with Linux: Desktop, Terminal, and Basics',
        'Working with directories in Linux',
        'Working with Files and Exploring the Linux Directory Structure',
        'Mastering Linux Basics: System Info, Networking, Packages & Text Editing (Optional)',
        'Mini Project: System Resource Monitor & Process Analyzer',
        'Storage Management & Linux | Practice Assignment (Optional)'
      ]
    }
  ];

  const [expandedUnit, setExpandedUnit] = useState<number | null>(
    selectedModule ? parseInt(selectedModule.split('.')[0]) : null
  );

  const [currentUnit] = selectedModule.split('.').map(Number);
  const [, currentModule] = selectedModule.split('.').map(Number);

  const handleUnitClick = (unitId: number) => {
    setExpandedUnit(expandedUnit === unitId ? null : unitId);
  };

  const handleModuleClick = (unitId: number, moduleIndex: number) => {
    onModuleSelect(unitId, moduleIndex);
    onClose();
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link href="/pages/livebooks" className="back-to-livebooks">
          ← Back to Livebooks
        </Link>
        <div className="sidebar-header">
          <h2>Operating Systems</h2>
        </div>
        <nav className="sidebar-nav">
          {units.map((unit) => (
            <div key={unit.id} className="unit-section">
              <button
                className={`unit-button ${currentUnit === unit.id ? 'active' : ''}`}
                onClick={() => handleUnitClick(unit.id)}
              >
                {unit.title}
              </button>
              {expandedUnit === unit.id && (
                <ul className="module-list">
                  {unit.modules.map((module, index) => (
                    <li key={index}>
                      <button
                        className={`module-button ${currentModule === index + 1 ? 'active' : ''}`}
                        onClick={() => handleModuleClick(unit.id, index + 1)}
                      >
                        {module}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
