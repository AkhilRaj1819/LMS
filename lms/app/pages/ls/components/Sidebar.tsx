'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  selectedModule: string | null;
  onModuleSelect: (unitId: number, moduleId: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedModule, onModuleSelect, isOpen, onClose }) => {
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);

  const units = [
    {
      id: 1,
      title: 'Unit 1: Introduction to Language',
      modules: [
        'Overview of Linguistics',
        'Phonetics',
        'Phonology',
        'Morphology',
        'Unit 1 Quiz'
      ]
    },
    {
      id: 2,
      title: 'Unit 2: Syntax and Semantics',
      modules: [
        'Syntax and Syntactic Structures',
        'Semantics and Semantic Structures',
        'Language Typology',
        'Unit 2 Quiz'
      ]
    },
    {
      id: 3,
      title: 'Unit 3: Language Acquisition',
      modules: [
        'First and Second Language Acquisition',
        'Language Change and Contact',
        'Historical Linguistics',
        'Unit 3 Quiz'
      ]
    },
    {
      id: 4,
      title: 'Unit 4: Sociolinguistics',
      modules: [
        'Sociolinguistics and Variation',
        'Language Policy and Planning',
        'Language and Identity',
        'Language and Technology',
        'Unit 4 Quiz'
      ]
    },
    {
      id: 5,
      title: 'Unit 5: Language in Context',
      modules: [
        'Language and Culture',
        'Language and Gender',
        'Language and Power',
        'Language and Globalization',
        'Research Methods in Linguistics',
        'Unit 5 Quiz'
      ]
    }
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Link href="/pages/livebooks" className="back-to-livebooks">
          ← Back to Livebooks
        </Link>
        <div className="sidebar-header">
          <h2>Language Systems</h2>
        </div>
        <nav className="sidebar-nav">
          {units.map((unit) => (
            <div key={unit.id} className="unit-section">
              <button
                className={`unit-button ${expandedUnit === unit.id ? 'active' : ''}`}
                onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
              >
                {unit.title}
              </button>
              {expandedUnit === unit.id && (
                <ul className="module-list">
                  {unit.modules.map((module, idx) => (
                    <li key={idx}>
                      <button
                        className={`module-button ${selectedModule === `${unit.id}.${idx + 1}` ? 'active' : ''}`}
                        onClick={() => onModuleSelect(unit.id, idx + 1)}
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
