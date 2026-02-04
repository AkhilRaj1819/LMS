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
      title: 'Unit 1: Introduction to Data Structures',
      modules: [
        'Arrays Fundamentals and Representations',
        'Sparse Matrices',
        'Stack Operations and Applications',
        'Queue Operations and Types',
        'Practical Experiments'
      ]
    },
    {
      id: 2,
      title: 'Unit 2: Linked Lists',
      modules: [
        'Singly/Linear Linked Lists',
        'Linked List Implementation of Stacks and Queues',
        'Doubly and Circular Linked Lists',
        'Linked List Applications',
        'Practical Experiments'
      ]
    },
    {
      id: 3,
      title: 'Unit 3: Trees and Binary Trees',
      modules: [
        'Tree Terminology and Representations',
        'Binary Trees and Binary Search Trees',
        'Advanced Tree Types: Heaps, B-Trees, and N-ary Trees',
        'Tree Traversals, Applications, and Hashing',
        'Practical Experiments'
      ]
    },
    {
      id: 4,
      title: 'Unit 4: Advanced Trees and Heaps',
      modules: [
        'Graph Types and Terminology',
        'Graph Representations',
        'Graph Traversals: BFS and DFS',
        'Graph Applications: MST and Shortest Path',
        'Practical Experiments'
      ]
    },
    {
      id: 5,
      title: 'Unit 5: Graphs and Hashing',
      modules: [
        'Searching Techniques: Linear and Binary Search',
        'Basic Sorting Algorithms: Bubble, Insertion, Selection Sort',
        'Divide and Conquer Sorting: Merge Sort and Quick Sort',
        'Quick Sort Implementation and Optimization',
        'Assessment, Resources, and Advanced Topics'
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
          <h2>Data Structures (DS)</h2>
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