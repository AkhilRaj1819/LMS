'use client';
import React from 'react';

const Module2_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.4</div>
        <div className="lesson-title-main">
          <h1>Introduction to CPU Scheduling</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>The Ultimate Bouncer for Your Tasks</h3>
        <p>Who gets to use the CPU next? Become the ultimate bouncer for your computer tasks and decide who gets VIP access!</p>
        
        <h4>CPU Scheduling Basics</h4>
        <p>CPU scheduling determines which process runs when multiple processes are ready to execute.</p>
        
        <h4>Scheduling Criteria</h4>
        <ul>
          <li><strong>CPU Utilization:</strong> Keep CPU as busy as possible</li>
          <li><strong>Throughput:</strong> Number of processes completed per time unit</li>
          <li><strong>Turnaround Time:</strong> Time from submission to completion</li>
          <li><strong>Waiting Time:</strong> Time spent waiting in ready queue</li>
          <li><strong>Response Time:</strong> Time from submission to first response</li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_4;
