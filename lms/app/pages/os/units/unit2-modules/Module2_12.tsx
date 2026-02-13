'use client';
import React from 'react';

const Module2_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.12</div>
        <div className="lesson-title-main">
          <h1>Round Robin - Implementation</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In this assignment, you will be implementing the Round Robin Algorithm.</p>
        <p>Before diving into the implementation of the Round Robin Scheduling Algorithm, let&apos;s explore its working principles and step-by-step process. Understanding these concepts will provide a solid foundation for implementing the algorithm effectively.</p>
        <p>Round Robin(RR) is a CPU scheduling method where each process gets a fixed time slot to execute. It&apos;s like taking turns to use the CPU in a cycle. This method is a preemptive version of the First-Come, First-Serve algorithm, meaning a process can be stopped before it finishes if its time is up.</p>
        <p>In Round Robin scheduling, a fixed amount of time, called the time quantum, is given to each process. If a process finishes its task within this time, it ends. If not, it goes back to the ready queue and waits for its next turn.</p>

        <h3>Characteristics of Round Robin Scheduling</h3>
        <ul>
          <li>Simple and easy to implement.</li>
          <li><strong>Fair:</strong> All processes get an equal share of CPU time, so no process is left waiting too long.</li>
          <li><strong>Preemptive:</strong> A process can be interrupted after its time quantum, even if it hasn&apos;t finished.</li>
        </ul>

        <h3>Advantages</h3>
        <ul>
          <li>Each process gets an equal share of CPU time.</li>
          <li><strong>Time-sharing:</strong> New processes are added to the end of the queue, and each gets a turn to use the CPU after a certain amount of time.</li>
          <li><strong>Prevents starvation:</strong> No process can be ignored for too long.</li>
        </ul>

        <h3>Disadvantages</h3>
        <ul>
          <li><strong>Longer waiting times:</strong> Since processes have to wait for their turn, this can increase waiting time.</li>
          <li><strong>Low throughput:</strong> The CPU isn&apos;t used as efficiently as it could be, especially if the time quantum is small.</li>
          <li><strong>Context switching:</strong> Switching between processes takes time and can slow things down.</li>
          <li><strong>Large Gantt charts:</strong> If the time quantum is too small, the Gantt chart becomes very long, making scheduling time-consuming.</li>
        </ul>

        <h3>Bonus Content</h3>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://data-flair.training/blogs/round-robin-scheduling-algorithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Round Robin Scheduling Algorithm - DataFlair</a></li>
          <li><a href="https://cactusware.com/blog/round-robin-scheduling-algorithms" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Optimising Game Scheduling With Round-Robin Algorithms</a></li>
        </ul>
        <p>It&apos;s assignment time!!!</p>
      </section>
    </div>
  );
};

export default Module2_12;
