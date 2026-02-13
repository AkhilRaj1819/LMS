'use client';
import React from 'react';

const Module2_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.6</div>
        <div className="lesson-title-main">
          <h1>First Come First Served - Implementation</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In this assignment, you will be implementing the First Come First Served algorithm.</p>

        <h4>Terminologies Used in CPU Scheduling</h4>
        <ul>
          <li><strong>Arrival Time:</strong> The time at which the process arrives in the ready queue.</li>
          <li><strong>Completion Time:</strong> The time at which the process completes its execution.</li>
          <li><strong>Turn Around Time:</strong> Time Difference between completion time and arrival time.<br />Turn Around Time = (Completion Time – Arrival Time)</li>
          <li><strong>Waiting Time:</strong> Time Difference between turnaround time and burst time.<br />Waiting Time = (Turn Around Time – Burst Time).</li>
        </ul>

        <h5>Solved Problem</h5>
        <p>In this example, we have assumed the arrival time of all processes is 0, so turnaround and completion times are the same.</p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Gemini_Generated_Image_zbqwqmzbqwqmzbqw.png" alt="" />

        <h2>Implementation</h2>
        <h5>Here&apos;s how you can implement FCFS Scheduling</h5>
        <ol>
          <li>Input the processes along with their burst time (bt).</li>
          <li>Find waiting time (wt) for all processes.</li>
          <li>As first process that comes need not to wait so waiting time for process 1 will be 0 i.e. wt[0] = 0.</li>
          <li>Find waiting time for all other processes i.e. for process i -&gt; wt[i] = bt[i-1] + wt[i-1].</li>
          <li>Find turnaround time = waiting_time + burst_time for all processes.</li>
          <li>Find average waiting time = total_waiting_time / no_of_processes.</li>
          <li>Similarly, find average turnaround time = total_turn_around_time / no_of_processes.</li>
        </ol>

        <h3>Bonus Content</h3>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://www.sanfoundry.com/c-program-fcfs-scheduling/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">FCFS Scheduling Program in C - Sanfoundry</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/program-for-fcfs-cpu-scheduling-set-1/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Program for FCFS CPU Scheduling | Set 1 - GeeksforGeeks</a></li>
        </ul>
        <p>Let&apos;s get started with the Assignment!</p>
      </section>
    </div>
  );
};

export default Module2_6;
