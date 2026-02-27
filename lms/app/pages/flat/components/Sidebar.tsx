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
      title: 'Unit-1: Automata Methods and Finite Automata',
      modules: [
        'Foundations of Automata Theory',
        'Additional Forms of Proof',
        'Inductive Proofs',
        'Deterministic Finite Automata (DFA)',
        'Non-deterministic Finite Automata (NFA)',
        'Text Search using Finite Automata',
        'Regular Expressions',
        'Finite Automata with ε-Transitions'
      ]
    },
    {
      id: 2,
      title: 'Unit-2: Regular Languages and Context Free Languages',
      modules: [
        'Regular Expressions',
        'Identities & Algebraic Laws',
        'Pumping Lemma',
        'Closure Properties',
        'Decision Properties',
        'Minimization of FA'
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
        'Regular Grammars',
        'Unit 3 Quiz'
      ]
    },
    {
      id: 4,
      title: 'Unit 4: Context-Free Languages',
      modules: [
        'Context-Free Grammars',
        'Derivations & Ambiguity',
        'Normal Forms',
        'Pushdown Automata',
        'CFG-PDA Equivalence',
        'Unit 4 Quiz'
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
        'Undecidable Problems',
        'Unit 5 Quiz'
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
