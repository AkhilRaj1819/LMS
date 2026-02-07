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
    const res = await fetch(`/api/progress?userEmail=${email}&subject=FLAT`);
    const data = await res.json();
    if (data.success) {
      setStudentProgress(data.data);
    }
  };

  const completedModules = studentProgress.length;
  const masteryModules = studentProgress.filter(p => p.percentage >= 80).length;
  const totalModules = 30;
  const completedPercentage = Math.round((completedModules / totalModules) * 100);
  const masteryPercentage = Math.round((masteryModules / totalModules) * 100);

  const units = [
    {
      id: 1,
      title: 'Introduction to Formal Languages',
      description: 'Master the fundamentals of formal languages, alphabets, strings, and language operations. Understand grammar basics and the Chomsky hierarchy.',
      modules: [
        { id: '1.1', title: 'Alphabets and Strings', description: 'Basic building blocks of formal languages' },
        { id: '1.2', title: 'Language Operations', description: 'Union, concatenation, and Kleene star operations' },
        { id: '1.3', title: 'Finite State Machines', description: 'Introduction to automata and string acceptance' },
        { id: '1.4', title: 'DFA and NFA', description: 'Deterministic and non-deterministic finite automata' },
        { id: '1.5', title: 'Transition Diagrams', description: 'Visual representation of automata' },
        { id: '1.6', title: 'Unit 1 Quiz', description: 'Test your understanding of formal languages' }
      ]
    },
    {
      id: 2,
      title: 'Finite Automata',
      description: 'Explore deterministic and non-deterministic finite automata, regular expressions, and their equivalences.',
      modules: [
        { id: '2.1', title: 'Acceptance of Languages', description: 'How automata accept and reject strings' },
        { id: '2.2', title: 'DFA and NFA Equivalence', description: 'Theoretical equivalence of deterministic and non-deterministic automata' },
        { id: '2.3', title: 'NFA to DFA Conversion', description: 'Subset construction algorithm' },
        { id: '2.4', title: 'Epsilon Transitions', description: 'NFA with epsilon moves and their elimination' },
        { id: '2.5', title: 'Automata Minimization', description: 'State minimization and optimization techniques' },
        { id: '2.6', title: 'Unit 2 Quiz', description: 'Test your understanding of finite automata' }
      ]
    },
    {
      id: 3,
      title: 'Regular Languages',
      description: 'Learn regular expressions, their operations, applications, and the pumping lemma for regular languages.',
      modules: [
        { id: '3.1', title: 'Regular Expressions', description: 'Pattern matching notation and regular sets' },
        { id: '3.2', title: 'Regular Expression Operations', description: 'Union, concatenation, and Kleene star operations' },
        { id: '3.3', title: 'Applications and Conversions', description: 'Practical applications and Thompson\'s construction' },
        { id: '3.4', title: 'Pumping Lemma', description: 'Tool for proving non-regularity of languages' },
        { id: '3.5', title: 'Regular Grammars', description: 'Right-linear and left-linear grammars' },
        { id: '3.6', title: 'Unit 3 Quiz', description: 'Test your understanding of regular languages' }
      ]
    },
    {
      id: 4,
      title: 'Context-Free Languages',
      description: 'Understand context-free grammars, parse trees, normal forms, and pushdown automata.',
      modules: [
        { id: '4.1', title: 'Context-Free Grammars', description: 'CFG definition and derivation trees' },
        { id: '4.2', title: 'Leftmost and Rightmost Derivations', description: 'Different derivation strategies and ambiguity' },
        { id: '4.3', title: 'Normal Forms', description: 'Chomsky and Greibach normal forms' },
        { id: '4.4', title: 'Pushdown Automata', description: 'Stack-based automata for context-free languages' },
        { id: '4.5', title: 'CFG-PDA Equivalence', description: 'Equivalence between CFGs and PDAs' },
        { id: '4.6', title: 'Unit 4 Quiz', description: 'Test your understanding of context-free languages' }
      ]
    },
    {
      id: 5,
      title: 'Turing Machines and Computability',
      description: 'Explore the universal computation model, decidability, and complexity theory fundamentals.',
      modules: [
        { id: '5.1', title: 'Chomsky Hierarchy', description: 'Classification of formal grammars and languages' },
        { id: '5.2', title: 'Turing Machine Definition', description: 'Formal definition and computational model' },
        { id: '5.3', title: 'Post Correspondence Problem', description: 'Fundamental undecidable problem' },
        { id: '5.4', title: 'Decidable Problems', description: 'Problems with algorithmic solutions' },
        { id: '5.5', title: 'Undecidable Problems', description: 'Halting problem and computational limits' },
        { id: '5.6', title: 'Unit 5 Quiz', description: 'Test your understanding of Turing machines and computability' }
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
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#667eea" strokeWidth="2" fill="none"/>
            </svg>
            <h1 className="course-title">Formal Languages & Automata Theory</h1>
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