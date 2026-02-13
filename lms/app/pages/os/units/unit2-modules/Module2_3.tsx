'use client';
import React from 'react';

const Module2_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.3</div>
        <div className="lesson-title-main">
          <h1>Issues in Threading</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>Threading Challenges</h3>
        <p>What happens when too many cooks (threads) spoil the broth (your program)? Let us dive into the messy drama of threading challenges!</p>
        
        <h4>Common Threading Issues</h4>
        <ul>
          <li><strong>Race Conditions:</strong> Multiple threads accessing shared data</li>
          <li><strong>Deadlocks:</strong> Threads waiting for each other indefinitely</li>
          <li><strong>Thread Safety:</strong> Ensuring correct behavior in multithreaded environment</li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_3;
