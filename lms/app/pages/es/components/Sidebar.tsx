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
      title: 'Unit 1: Environment-Ecosystem',
      modules: [
        'Introduction to Environmental Science',
        'Ecosystems and Biodiversity',
        'Natural Resources',
        'Environmental Ethics',
        'Unit 1 Quiz'
      ]
    },
    {
      id: 2,
      title: 'Unit 2: Natural Resources',
      modules: [
        'Renewable and Non-Renewable Energy Resources',
        'Forest Resources: Use and Over-exploitation',
        'Water Resources Management',
        'Mineral Resources and Environmental Effects',
        'Unit 2 Quiz'
      ]
    },
    {
      id: 3,
      title: 'Unit 3: Biodiversity and its Conservation',
      modules: [
        'Definition: Genetic, Species and Ecosystem Diversity',
        'Value of Biodiversity',
        'Biodiversity at Global, National and Local Levels',
        'Threats to Biodiversity',
        'Unit 3 Quiz'
      ]
    },
    {
      id: 4,
      title: 'Unit 4: Environmental Pollution',
      modules: [
        'Air Pollution: Definition, Causes, Effects and Control',
        'Water Pollution: Definition, Causes, Effects and Control',
        'Soil Pollution and Noise Pollution',
        'Nuclear Hazards and Solid Waste Management',
        'Unit 4 Quiz'
      ]
    },
    {
      id: 5,
      title: 'Unit 5: Human Population Change and the Environment',
      modules: [
        'Population Growth and Population Explosion',
        'Women Empowerment and Population Control',
        'Environmental Issues: Global Warming, Acid Rain, Ozone Depletion',
        'Role of Information Technology in Environment and Human Health',
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
          <h2>Environmental Science</h2>
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