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
      title: 'Unit 1: Career Guidance',
      modules: [
        'Career Orientation & Future Planning',
        'Ice Breaking & Personal Skills',
        'Success Stories & Motivation',
        'Talent Show Activities',
        'Environmental Literature'
      ]
    },
    {
      id: 2,
      title: 'Unit 2: Waste Management',
      modules: [
        'Best Out of Waste Competition',
        'Poster Making Competition',
        'Recycling & Environmental Pollution',
        'Rainwater Harvesting Management',
        'Eco-Friendly Product Management'
      ]
    },
    {
      id: 3,
      title: 'Unit 3: Community Service',
      modules: [
        'One Day Special Camp in Village',
        'Village Survey & Problem Identification',
        'Health Awareness Programs',
        'Consumer Awareness Programs',
        'Collaboration with NGOs & Charities'
      ]
    },
    {
      id: 4,
      title: 'Unit 4: Environmental Safety',
      modules: [
        'Eco-Friendly Approaches',
        'Vehicle Maintenance Workshops',
        'Safety Campaign Projects',
        'Go Green Activities',
        'Clean Campus Program'
      ]
    },
    {
      id: 5,
      title: 'Unit 5: Digital Awareness',
      modules: [
        'Digital Environmental Awareness',
        'Organizing Zero-Waste Day',
        'Women Empowerment Programs',
        'Internet Safety & Cyber Wellness',
        'Digital Citizenship Activities'
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
          <h2>NSS Course</h2>
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
