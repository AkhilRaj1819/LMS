'use client';
import React from 'react';

const Module2_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.8</div>
        <div className="lesson-title-main">
          <h1>Shortest Job First - Implementation</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In this assignment, you will be implementing Shortest Job First Algorithm (SJF) — one of the most efficient CPU scheduling techniques in Operating Systems.</p>
        <p>The Shortest Job First (SJF) or Shortest Job Next (SJN) algorithm selects the waiting process that has the smallest execution time to execute next. SJF (or SJN) can be preemptive or non-preemptive, depending on whether a running process can be interrupted for a new, shorter one.</p>

        <h3>Formulas for Calculating Times in Scheduling</h3>
        
        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold">1. Turnaround Time (TAT):</h4>
            <p><strong>TAT = Completion Time (CT) − Arrival Time (AT)</strong></p>
            <p>Represents the total time a process spends in the system, from arrival to completion.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-semibold">2. Waiting Time (WT):</h4>
            <p><strong>WT = Turnaround Time (TAT) − Burst Time (BT)</strong></p>
            <p>The amount of time a process spends waiting in the ready queue before execution.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-semibold">3. Completion Time (CT):</h4>
            <p>The time at which a process finishes execution, based on burst times and order of execution.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold">4. Average Turnaround Time (Avg TAT):</h4>
            <p><strong>Avg TAT = (Sum of Turnaround Times) / (Total Number of Processes)</strong></p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="font-semibold">5. Average Waiting Time (Avg WT):</h4>
            <p><strong>Avg WT = (Sum of Waiting Times) / (Total Number of Processes)</strong></p>
          </div>
        </div>

        <p>These formulas apply to both preemptive and non-preemptive SJF. The only difference lies in how processes are selected during execution.</p>

        <h3>Implementation Steps</h3>
        <details className="bg-gray-100 border-2 border-gray-800 rounded-lg p-4 cursor-pointer">
          <summary className="font-semibold text-lg">Click to view step-by-step approach</summary>
          <ol className="mt-4 space-y-2">
            <li>Sort all processes by arrival time. If two have the same arrival time, sort by burst time.</li>
            <li>Execute the process that has arrived earliest and has the shortest burst time.</li>
            <li>After a process completes, select the next shortest burst process among those already arrived.</li>
            <li>Repeat until all processes are completed.</li>
            <li>Finally, calculate Waiting Time (WT) and Turnaround Time (TAT) for each process.</li>
          </ol>
        </details>

        <h3>Bonus Content</h3>
        <p>This section is optional but recommended to explore deeper insights into SJF scheduling.</p>
        <ul>
          <li><a href="https://www.naukri.com/code360/library/how-is-shortest-job-first-scheduling-performed-in-operating-systems" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">How Is Shortest Job First Scheduling Performed In Operating Systems? – Naukri.com Code360</a></li>
          <li><a href="https://testbook.com/objective-questions/mcq-on-shortest-job-first--5eea6a1539140f30f369f363" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Shortest Job First MCQ [Free PDF] – Testbook</a></li>
        </ul>

        <h3>Assignment Objective</h3>
        <p>To implement the Shortest Job First (SJF) scheduling algorithm and compare its performance against First Come First Serve (FCFS).</p>
        <ul>
          <li>Implement SJF (non-preemptive) scheduling through coding.</li>
          <li>Calculate and interpret key efficiency metrics such as average waiting time and turnaround time.</li>
          <li>Compare SJF and FCFS to identify where SJF performs better.</li>
          <li>Analyze benefits and challenges of using SJF under different workloads.</li>
          <li>Understand the concept of burst time prediction and its role in achieving optimal average waiting time.</li>
          <li>Gain practical understanding of how CPU scheduling affects system performance.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_8;
