'use client';
import React from 'react';
import Module2_1 from './unit2-modules/Module2_1';
import Module2_2 from './unit2-modules/Module2_2';
import Module2_3 from './unit2-modules/Module2_3';
import Module2_4 from './unit2-modules/Module2_4';
import Module2_5 from './unit2-modules/Module2_5';
import Module2_6 from './unit2-modules/Module2_6';
import Module2_7 from './unit2-modules/Module2_7';
import Module2_8 from './unit2-modules/Module2_8';
import Module2_9 from './unit2-modules/Module2_9';
import Module2_10 from './unit2-modules/Module2_10';
import Module2_11 from './unit2-modules/Module2_11';
import Module2_12 from './unit2-modules/Module2_12';
import Module2_13 from './unit2-modules/Module2_13';
import Module2_14 from './unit2-modules/Module2_14';
import Module2_15 from './unit2-modules/Module2_15';
import Module2_16 from './unit2-modules/Module2_16';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const moduleNames = [
    'Introduction to threads',
    'Multithreading models and Hyperthreading',
    'Issues in threading',
    'Introduction to CPU Scheduling',
    'First Come First Served',
    'First Come First Served - Implementation',
    'Shortest Job First',
    'Shortest Job First - Implementation',
    'Priority Scheduling',
    'Priority Scheduling - Implementation',
    'Round Robin',
    'Round Robin - Implementation',
    'Multilevel Queue Scheduling (Optional)',
    'Project: Simple Job Queue with Priority Scheduling | Part 1',
    'Project: Simple Job Queue with Priority Scheduling | Part 2',
    'Threads and CPU scheduling | Practice Assignment (Optional)'
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return <Module2_1 />;
      case 2:
        return <Module2_2 />;
      case 3:
        return <Module2_3 />;
      case 4:
        return <Module2_4 />;
      case 5:
        return <Module2_5 />;
      case 6:
        return <Module2_6 />;
      case 7:
        return <Module2_7 />;
      case 8:
        return <Module2_8 />;
      case 9:
        return <Module2_9 />;
      case 10:
        return <Module2_10 />;
      case 11:
        return <Module2_11 />;
      case 12:
        return <Module2_12 />;
      case 13:
        return <Module2_13 />;
      case 14:
        return <Module2_14 />;
      case 15:
        return <Module2_15 />;
      case 16:
        return <Module2_16 />;
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
        {currentModule < 16 && (
          <button onClick={() => setCurrentModule(currentModule + 1)} className="next-module-btn" style={{ fontWeight: 'bold' }}>
            {moduleNames[currentModule]} →
          </button>
        )}
      </div>
    </div>
  );
};

export default Unit2;
