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
    const res = await fetch(`/api/progress?userEmail=${email}&subject=DS`);
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
      title: 'Introduction to Data Structures',
      description: 'Master fundamental data structures including arrays, sparse matrices, stacks, queues, and their practical applications.',
      modules: [
        { id: '1.1', title: 'Arrays Fundamentals and Representations', description: 'Array basics, memory representation, and fundamental operations' },
        { id: '1.2', title: 'Sparse Matrices', description: 'Efficient representation and operations on sparse matrices' },
        { id: '1.3', title: 'Stack Operations and Applications', description: 'LIFO operations, infix to postfix conversion, Tower of Hanoi' },
        { id: '1.4', title: 'Queue Operations and Types', description: 'FIFO operations, circular queues, and priority queues' },
        { id: '1.5', title: 'Practical Experiments', description: 'Two stacks in array, queue implementation, expression evaluation' }
      ]
    },
    {
      id: 2,
      title: 'Linked Lists',
      description: 'Explore dynamic linear data structures with flexible memory allocation and efficient insertion/deletion operations.',
      modules: [
        { id: '2.1', title: 'Singly/Linear Linked Lists', description: 'Node structure, pointers, and singly linked list operations' },
        { id: '2.2', title: 'Linked List Implementation of Stacks and Queues', description: 'Dynamic stack and queue implementations using linked lists' },
        { id: '2.3', title: 'Doubly and Circular Linked Lists', description: 'Bidirectional and circular linked list structures' },
        { id: '2.4', title: 'Linked List Applications', description: 'Real-world applications and advanced linked list operations' },
        { id: '2.5', title: 'Practical Experiments', description: 'Stack using linked list, priority queue, reverse display, duplicate removal' }
      ]
    },
    {
      id: 3,
      title: 'Trees and Binary Trees',
      description: 'Master hierarchical data structures for efficient searching, sorting, and organizing data.',
      modules: [
        { id: '3.1', title: 'Tree Terminology and Representations', description: 'Tree terminology, properties, and representation methods' },
        { id: '3.2', title: 'Binary Trees and Binary Search Trees', description: 'Binary tree operations, BST properties, and search algorithms' },
        { id: '3.3', title: 'Advanced Tree Types: Heaps, B-Trees, and N-ary Trees', description: 'Specialized tree structures for optimal performance' },
        { id: '3.4', title: 'Tree Traversals, Applications, and Hashing', description: 'Traversal algorithms, tree applications, and hash techniques' },
        { id: '3.5', title: 'Practical Experiments', description: 'Binary tree to DLL conversion, BST balance verification' }
      ]
    },
    {
      id: 4,
      title: 'Advanced Trees and Heaps',
      description: 'Learn graph theory and advanced algorithms for modeling relationships and network analysis.',
      modules: [
        { id: '4.1', title: 'Graph Types and Terminology', description: 'Graph fundamentals, types, and mathematical properties' },
        { id: '4.2', title: 'Graph Representations', description: 'Adjacency matrix, adjacency list, and storage methods' },
        { id: '4.3', title: 'Graph Traversals: BFS and DFS', description: 'Breadth-first and depth-first search algorithms' },
        { id: '4.4', title: 'Graph Applications: MST and Shortest Path', description: 'Minimum spanning trees and shortest path algorithms' },
        { id: '4.5', title: 'Practical Experiments', description: 'Directed graph DFS traversal and advanced graph algorithms' }
      ]
    },
    {
      id: 5,
      title: 'Graphs and Hashing',
      description: 'Master searching and sorting algorithms with complexity analysis and optimization techniques.',
      modules: [
        { id: '5.1', title: 'Searching Techniques: Linear and Binary Search', description: 'Sequential and divide-and-conquer search algorithms' },
        { id: '5.2', title: 'Basic Sorting Algorithms: Bubble, Insertion, Selection Sort', description: 'Fundamental comparison-based sorting techniques' },
        { id: '5.3', title: 'Divide and Conquer Sorting: Merge Sort and Quick Sort', description: 'Advanced sorting algorithms with optimal complexity' },
        { id: '5.4', title: 'Quick Sort Implementation and Optimization', description: 'Advanced quick sort techniques and performance optimization' },
        { id: '5.5', title: 'Assessment, Resources, and Advanced Topics', description: 'Comprehensive assessment and learning resources' }
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
            <h1 className="course-title">Data Structures (DS)</h1>
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