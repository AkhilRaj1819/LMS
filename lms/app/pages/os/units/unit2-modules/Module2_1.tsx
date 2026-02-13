'use client';
import React from 'react';

const Module2_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to Threads</h1>
        </div>
      </div>
      
      <section className="content-section">
        <h3>The Unsung Heroes of Multitasking</h3>
        <p>Ever wondered how your app juggles music, downloads, AND your frantic typing? Meet the unsung heroes: threads!</p>
        
        <h4>What are Threads?</h4>
        <p>A thread is the smallest unit of execution within a process. Multiple threads can exist within a single process, sharing resources but executing independently.</p>
        
        <h4>Benefits of Threads</h4>
        <ul>
          <li><strong>Responsiveness:</strong> Keep applications responsive during long operations</li>
          <li><strong>Resource Sharing:</strong> Threads share memory and resources of their process</li>
          <li><strong>Economy:</strong> Creating threads is cheaper than creating processes</li>
          <li><strong>Scalability:</strong> Take advantage of multiprocessor architectures</li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_1;
