'use client';
import React from 'react';

const Module1_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.10</div>
        <div className="lesson-title-main">
          <h1>Operation on Processes & Interprocess Communication</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>Process Operations and IPC</h3>
        <p>Processes can be loners, or they can collaborate! How do they talk (pipes) or nudge (signals) each other? Let us explore their social (and sometimes bossy) lives.</p>
        
        <h4>Process Operations</h4>
        <ul>
          <li>Process Creation</li>
          <li>Process Termination</li>
          <li>Process Suspension</li>
        </ul>

        <h4>Interprocess Communication</h4>
        <ul>
          <li><strong>Pipes:</strong> Unidirectional communication</li>
          <li><strong>Signals:</strong> Notification mechanism</li>
          <li><strong>Message Queues:</strong> Asynchronous communication</li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_10;
