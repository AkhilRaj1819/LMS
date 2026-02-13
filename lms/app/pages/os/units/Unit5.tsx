'use client';
import React from 'react';
import Module5_1 from './unit5-modules/Module5_1';
import Module5_2 from './unit5-modules/Module5_2';
import Module5_3 from './unit5-modules/Module5_3';
import Module5_4 from './unit5-modules/Module5_4';
import Module5_5 from './unit5-modules/Module5_5';
import Module5_6 from './unit5-modules/Module5_6';
import Module5_7 from './unit5-modules/Module5_7';
import Module5_8 from './unit5-modules/Module5_8';
import Module5_9 from './unit5-modules/Module5_9';
import Module5_10 from './unit5-modules/Module5_10';
import Module5_11 from './unit5-modules/Module5_11';
import Module5_12 from './unit5-modules/Module5_12';
import Module5_13 from './unit5-modules/Module5_13';
import Module5_14 from './unit5-modules/Module5_14';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit5: React.FC<Unit5Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
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
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1: return <Module5_1 />;
      case 2: return <Module5_2 />;
      case 3: return <Module5_3 />;
      case 4: return <Module5_4 />;
      case 5: return <Module5_5 />;
      case 6: return <Module5_6 />;
      case 7: return <Module5_7 />;
      case 8: return <Module5_8 />;
      case 9: return <Module5_9 />;
      case 10: return <Module5_10 />;
      case 11: return <Module5_11 />;
      case 12: return <Module5_12 />;
      case 13: return <Module5_13 />;
      case 14: return <Module5_14 />;
      default: return <div>Module not found</div>;
    }
  };

  return (
    <div className="unit-container">
      {renderModule()}
      <div className="navigation-buttons" style={{ marginTop: '40px', marginBottom: '40px' }}>
        {currentModule > 1 && (
          <button onClick={() => setCurrentModule(currentModule - 1)} className="prev-module-btn" style={{ fontWeight: 'bold' }}>
            ← {moduleNames[currentModule - 2]}
          </button>
        )}
        {currentModule < 14 && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit5;
