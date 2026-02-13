'use client';
import React from 'react';

const Module1_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.14</div>
        <div className="lesson-title-main">
          <h1>Remote Procedure Calls</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>RPC - Programming with Teleportation</h3>
        <p>How can your program call a function on a computer miles away like it is next door? Unravel the magic of Remote Procedure Calls (RPCs) - it is like programming with teleportation!</p>
        
        <h4>What is RPC?</h4>
        <p>RPC allows a program to execute a procedure on another computer as if it were a local call.</p>
        
        <h4>RPC Components</h4>
        <ul>
          <li>Client Stub</li>
          <li>Server Stub</li>
          <li>RPC Runtime</li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_14;
