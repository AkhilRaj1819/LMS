'use client';
import React from 'react';
import Module4_1 from './unit4-modules/Module4_1';
import Module4_2 from './unit4-modules/Module4_2';
import Module4_3 from './unit4-modules/Module4_3';
import Module4_4 from './unit4-modules/Module4_4';
import Module4_5 from './unit4-modules/Module4_5';
import Module4_6 from './unit4-modules/Module4_6';
import Module4_7 from './unit4-modules/Module4_7';
import Module4_8 from './unit4-modules/Module4_8';
import Module4_9 from './unit4-modules/Module4_9';
import Module4_10 from './unit4-modules/Module4_10';
import Module4_11 from './unit4-modules/Module4_11';
import Module4_12 from './unit4-modules/Module4_12';
import Module4_13 from './unit4-modules/Module4_13';
import Module4_14 from './unit4-modules/Module4_14';
import Module4_15 from './unit4-modules/Module4_15';
import Module4_16 from './unit4-modules/Module4_16';
import Module4_17 from './unit4-modules/Module4_17';

interface Unit4Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit4: React.FC<Unit4Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Introduction to Memory Management',
    'Main Memory and Virtual Memory (Optional)',
    'Dynamic Storage Management (Optional)',
    'Fixed and Variable Partitioning',
    'Partition Allocation Techniques (Best fit)',
    'Partition Allocation Techniques (Worst fit)',
    'Partition Allocation Techniques (First fit)',
    'Paging',
    'Segmentation',
    'Assignment | Paging & Segmentation',
    'Fragmentation',
    'Page replacement Algorithm: FIFO',
    'Optimal Page replacement',
    'Least Recently Used',
    'Solved Problems on Page Replacement',
    'Other page replacement algorithms (Optional)',
    'Memory Management | Practice Assignment (Optional)'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1: return <Module4_1 />;
      case 2: return <Module4_2 />;
      case 3: return <Module4_3 />;
      case 4: return <Module4_4 />;
      case 5: return <Module4_5 />;
      case 6: return <Module4_6 />;
      case 7: return <Module4_7 />;
      case 8: return <Module4_8 />;
      case 9: return <Module4_9 />;
      case 10: return <Module4_10 />;
      case 11: return <Module4_11 />;
      case 12: return <Module4_12 />;
      case 13: return <Module4_13 />;
      case 14: return <Module4_14 />;
      case 15: return <Module4_15 />;
      case 16: return <Module4_16 />;
      case 17: return <Module4_17 />;
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
        {currentModule < 17 && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit4;
