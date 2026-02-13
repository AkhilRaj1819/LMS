'use client';
import React from 'react';

const Module2_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.2</div>
        <div className="lesson-title-main">
          <h1>Multithreading Models and Hyperthreading</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>One Brain, Many Thoughts?</h3>
        <p>One brain, many thoughts? Or many brains, many thoughts? Unpack how your CPU really handles threads and the magic of Hyperthreading!</p>
        
        <h4>Multithreading Models</h4>
        <ul>
          <li><strong>Many-to-One:</strong> Many user threads mapped to one kernel thread</li>
          <li><strong>One-to-One:</strong> Each user thread maps to a kernel thread</li>
          <li><strong>Many-to-Many:</strong> Many user threads multiplexed to smaller or equal kernel threads</li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_2;
