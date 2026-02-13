'use client';
import React from 'react';

const Module1_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.11</div>
        <div className="lesson-title-main">
          <h1>Shared Memory and Message Passing Systems</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>IPC Mechanisms</h3>
        <p>How do processes share secrets or data super-fast? Discover if they prefer leaving notes in a shared mailbox (shared memory) or sending direct telegrams (message passing)!</p>
        
        <h4>Shared Memory</h4>
        <p>Multiple processes access the same memory region for fast data exchange.</p>
        
        <h4>Message Passing</h4>
        <p>Processes communicate by sending and receiving messages through the OS.</p>
      </section>
    </div>
  );
};

export default Module1_11;
