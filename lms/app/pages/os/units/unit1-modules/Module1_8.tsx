'use client';
import React from 'react';

const Module1_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.8</div>
        <div className="lesson-title-main">
          <h1>Introduction to Processes</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>Understanding Processes</h3>
        <p>What are these processes everyone talks about? Think of them as the OS tiny, tireless workers - let us meet them (live!) and see how they are managed.</p>
        
        <h4>What is a Process?</h4>
        <p>A process is a program in execution. It includes the program code, current activity, and allocated resources.</p>
        
        <h4>Process States</h4>
        <ul>
          <li><strong>New:</strong> Process is being created</li>
          <li><strong>Ready:</strong> Waiting to be assigned to processor</li>
          <li><strong>Running:</strong> Instructions are being executed</li>
          <li><strong>Waiting:</strong> Waiting for some event</li>
          <li><strong>Terminated:</strong> Process has finished execution</li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_8;
