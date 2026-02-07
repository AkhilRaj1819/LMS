'use client';
import React, { useState, useEffect } from 'react';
import MainSidebar from '@/components/Sidebar';

interface CourseOverviewProps {
  onModuleSelect: (unitId: number, moduleId: number) => void;
}

const CourseOverview: React.FC<CourseOverviewProps> = ({ onModuleSelect }) => {
  const [activeTab, setActiveTab] = useState('learning-path');
  const [expandedUnit, setExpandedUnit] = useState<number | null>(1);
  const [dynamicModules, setDynamicModules] = useState([]);

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    const res = await fetch('/api/modules?subject=ls');
    const data = await res.json();
    if (data.ok) {
      setDynamicModules(data.data);
    }
  };

  const units = [
    {
      id: 1,
      title: 'Introduction to Language and Linguistics',
      description: 'Understand fundamental concepts of human language, linguistics sub-fields, phonetics, phonology, and morphology.',
      modules: [
        { id: '1.1', title: 'Overview of Linguistics', description: 'Introduction to linguistics and its major sub-fields' },
        { id: '1.2', title: 'Phonetics', description: 'Study of speech sounds and their physical properties' },
        { id: '1.3', title: 'Phonology', description: 'Sound patterns and phonological processes' },
        { id: '1.4', title: 'Morphology', description: 'Word structure and formation processes' },
        { id: '1.5', title: 'Unit 1 Quiz', description: 'Test your knowledge of Unit 1 concepts' }
      ]
    },
    {
      id: 2,
      title: 'Syntax and Semantics',
      description: 'Examine sentence structure, meaning systems, and language typology across different languages.',
      modules: [
        { id: '2.1', title: 'Syntax and Syntactic Structures', description: 'Rules governing sentence formation' },
        { id: '2.2', title: 'Semantics and Semantic Structures', description: 'Meaning in language and semantic relations' },
        { id: '2.3', title: 'Language Typology', description: 'Classification and comparison of languages' },
        { id: '2.4', title: 'Unit 2 Quiz', description: 'Test your knowledge of Unit 2 concepts' }
      ]
    },
    {
      id: 3,
      title: 'Language Acquisition and Change',
      description: 'Explore how languages are learned, how they change over time, and historical linguistics.',
      modules: [
        { id: '3.1', title: 'First and Second Language Acquisition', description: 'Processes of learning native and additional languages' },
        { id: '3.2', title: 'Language Change and Contact', description: 'How languages evolve and influence each other' },
        { id: '3.3', title: 'Historical Linguistics', description: 'Study of language evolution and reconstruction' },
        { id: '3.4', title: 'Unit 3 Quiz', description: 'Test your knowledge of Unit 3 concepts' }
      ]
    },
    {
      id: 4,
      title: 'Sociolinguistics and Applied Linguistics',
      description: 'Understand social aspects of language, variation, policy, identity, and technology integration.',
      modules: [
        { id: '4.1', title: 'Sociolinguistics and Variation', description: 'Language variation across social contexts' },
        { id: '4.2', title: 'Language Policy and Planning', description: 'Government and institutional language decisions' },
        { id: '4.3', title: 'Language and Identity', description: 'How language shapes and reflects identity' },
        { id: '4.4', title: 'Language and Technology', description: 'Computational linguistics and NLP applications' },
        { id: '4.5', title: 'Unit 4 Quiz', description: 'Test your knowledge of Unit 4 concepts' }
      ]
    },
    {
      id: 5,
      title: 'Language in Context and Research',
      description: 'Analyze language in cultural, social, and global contexts, and explore linguistic research methods.',
      modules: [
        { id: '5.1', title: 'Language and Culture', description: 'Relationship between language and cultural practices' },
        { id: '5.2', title: 'Language and Gender', description: 'Gender differences in language use' },
        { id: '5.3', title: 'Language and Power', description: 'Language as a tool of power and control' },
        { id: '5.4', title: 'Language and Globalization', description: 'Impact of globalization on languages' },
        { id: '5.5', title: 'Research Methods in Linguistics', description: 'Approaches to linguistic research and analysis' },
        { id: '5.6', title: 'Unit 5 Quiz', description: 'Test your knowledge of Unit 5 concepts' }
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
              <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" stroke="#7CB342" strokeWidth="2" fill="none"/>
            </svg>
            <h1 className="course-title">Language Systems: Principles and Practices</h1>
          </div>
          <div className="header-right">
            <div className="progress-bar-container">
              <div className="progress-segments">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`segment ${i < 0 ? 'completed' : ''}`}></div>
                ))}
              </div>
              <div className="progress-text">0% Completed • 0% Mastery</div>
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
                  <div className="badge-label">Unit</div>
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
          {dynamicModules.length > 0 && (
            <div className="unit-block">
              <div className="unit-header-block" onClick={() => setExpandedUnit(expandedUnit === 6 ? null : 6)}>
                <div className="module-badge">
                  <div className="badge-label">Unit</div>
                  <div className="badge-number">6</div>
                </div>
                <div className="unit-description">
                  <h2 className="unit-title">Additional Resources</h2>
                  <p className="unit-desc">Uploaded modules and resources</p>
                </div>
                <div className="expand-indicator">{expandedUnit === 6 ? '▼' : '▶'}</div>
              </div>
              {expandedUnit === 6 && (
                <div className="lessons-timeline">
                  {dynamicModules.map((module: any, idx) => (
                    <div key={idx} className="lesson-item" onClick={() => window.open(module.fileUrl, '_blank')}>
                      <div className="lesson-badge">6.{idx + 1}</div>
                      <div className="lesson-content">
                        <h3 className="lesson-title">{module.moduleName}</h3>
                        <p className="lesson-desc">{module.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CourseOverview;
