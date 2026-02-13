'use client';
import React from 'react';

const Module1_16: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.16</div>
        <div className="lesson-title-main">
          <h1>Dispatching (Optional)</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>CPU Dispatching</h3>
        <p>Understand the concept of dispatching in operating systems, where the CPU switches control to the selected process for execution.</p>
        
        <h4>What is Dispatching?</h4>
        <p>The dispatcher gives control of the CPU to the process selected by the scheduler.</p>
        
        <h4>Dispatcher Functions</h4>
        <ul>
          <li>Context switching</li>
          <li>Switching to user mode</li>
          <li>Jumping to proper location in user program</li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_16;
