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
      title: 'Unit 1: Introduction to Formal Languages',
      modules: [
        'Alphabets and Strings',
        'Language Operations',
        'Finite State Machines',
        'DFA and NFA',
        'Transition Diagrams'
      ]
    },
    {
      id: 2,
      title: 'Unit 2: Finite Automata',
      modules: [
        'Acceptance of Languages',
        'DFA and NFA Equivalence',
        'NFA to DFA Conversion',
        'Epsilon Transitions',
        'Automata Minimization'
      ]
    },
    {
      id: 3,
      title: 'Unit 3: Regular Languages',
      modules: [
        'Regular Expressions',
        'Regular Expression Operations',
        'Applications and Conversions',
        'Pumping Lemma',
        'Regular Grammars'
      ]
    },
    {
      id: 4,
      title: 'Unit 4: Context-Free Languages',
      modules: [
        'Context-Free Grammars',
        'Leftmost and Rightmost Derivations',
        'Normal Forms',
        'Pushdown Automata',
        'CFG-PDA Equivalence'
      ]
    },
    {
      id: 5,
      title: 'Unit 5: Turing Machines and Computability',
      modules: [
        'Chomsky Hierarchy',
        'Turing Machine Definition',
        'Post Correspondence Problem',
        'Decidable Problems',
        'Undecidable Problems'
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
          <h2>Formal Languages & Automata Theory</h2>
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