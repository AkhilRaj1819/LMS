'use client';
import React from 'react';
import Module3_1 from './unit3-modules/Module3_1';
import Module3_2 from './unit3-modules/Module3_2';
import Module3_3 from './unit3-modules/Module3_3';
import Module3_4 from './unit3-modules/Module3_4';
import Module3_5 from './unit3-modules/Module3_5';
import Module3_6 from './unit3-modules/Module3_6';
import Module3_7 from './unit3-modules/Module3_7';
import Module3_8 from './unit3-modules/Module3_8';
import Module3_9 from './unit3-modules/Module3_9';
import Module3_10 from './unit3-modules/Module3_10';
import Module3_11 from './unit3-modules/Module3_11';
import Module3_12 from './unit3-modules/Module3_12';
import Module3_13 from './unit3-modules/Module3_13';
import Module3_14 from './unit3-modules/Module3_14';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Process Synchronization',
    'The Critical Section Problem',
    'Test & set Lock',
    'Semaphores',
    'Classic problems of Process synchronization',
    'Monitors',
    'Solved problems on Process Synchronization',
    'Assignment | Process Synchronization',
    'Linkers and Dynamic linking (Optional)',
    'Deadlocks',
    'Deadlock Handling methods and Recovery',
    'Deadlock Avoidance',
    'Solved Problems on Deadlocks (Optional)',
    'Process Synchronization and Deadlocks | Practice Assignment (Optional)'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <Module3_1 />;
      case 2:
        return <Module3_2 />;
      case 3:
        return <Module3_3 />;
      case 4:
        return <Module3_4 />;
      case 5:
        return <Module3_5 />;
      case 6:
        return <Module3_6 />;
      case 7:
        return <Module3_7 />;
      case 8:
        return <Module3_8 />;
      case 9:
        return <Module3_9 />;
      case 10:
        return <Module3_10 />;
      case 11:
        return <Module3_11 />;
      case 12:
        return <Module3_12 />;
      case 13:
        return <Module3_13 />;
      case 14:
        return <Module3_14 />;
      default:
        return <div>Module not found</div>;
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

export default Unit3;
