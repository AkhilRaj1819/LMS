'use client';
import React from 'react';

const Module1_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.6</div>
        <div className="lesson-title-main">
          <h1>Operating System Design, Implementation and Structures</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>Inside Your Operating System</h3>
        <p>What is really inside your OS? We are cracking open the case to explore the architectural blueprints and ingenious structures that make it all tick!</p>
        
        <h4>OS Structures</h4>
        <ul>
          <li><strong>Monolithic:</strong> Entire OS in kernel space</li>
          <li><strong>Layered:</strong> OS divided into layers</li>
          <li><strong>Microkernel:</strong> Minimal kernel with services in user space</li>
          <li><strong>Modular:</strong> Loadable kernel modules</li>
          <li><strong>Hybrid:</strong> Combination of approaches</li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_6;
