'use client';
import React from 'react';

const Module2_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.11</div>
        <div className="lesson-title-main">
          <h1>Round Robin</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>This lesson explains Round Robin scheduling, a key idea in operating systems. You&apos;ll cover how it works, its main features, and how it shares CPU time fairly. You&apos;ll also learn to calculate waiting and turnaround times.</p>

        <h3>Round Robin Algorithm</h3>
        <p>Round-Robin (RR) is a scheduling algorithm designed specifically for time-sharing systems to ensure fair CPU allocation. It is similar to First-Come, First-Serve (FCFS), but with the critical addition of preemption, which allows the system to switch between processes.</p>

        <h3>The Time Quantum (or Time Slice)</h3>
        <p>This is the central mechanism of Round-Robin.</p>
        <ul>
          <li><strong>Definition:</strong> A small, fixed unit of time (typically 10-100 ms) that a process is allowed to run on the CPU.</li>
          <li><strong>Function:</strong> Once the time quantum expires, the currently running process is preempted (stopped) and the CPU is given to the next process in the queue. This prevents any single process from monopolizing the CPU.</li>
        </ul>

        <h3>Implementation and Process Flow</h3>
        <ul>
          <li>We keep the ready queue as a FIFO queue of processes.</li>
          <li>New processes are added to the tail of the ready queue.</li>
          <li>The CPU scheduler picks the first process from the ready queue, sets a timer to interrupt after 1 time quantum, and dispatches the process.</li>
        </ul>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(19).jpg" alt="" />

        <h3>The Time Quantum Performance Trade-Off</h3>
        <p>The size of the time quantum is critical to the algorithm&apos;s performance.</p>
        <ul>
          <li><strong>If the Time Quantum is Too Large:</strong> The algorithm starts to behave like FCFS. Long processes can make shorter processes wait for a long time, reducing responsiveness.</li>
          <li><strong>If the Time-Quantum is Too Small:</strong> The system will spend too much time on context switching (saving the state of one process and loading another). This high overhead reduces the overall efficiency of the system.</li>
        </ul>
        <p>Not sure how Round Robin works! Take a look at the video given below.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/YzBBJYfwdi8" title="Scheduling Algorithms - Round Robin Scheduling" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Solved problems</h3>
        <p>Watch the videos given below to understand how to calculate Average turn around time, Waiting time and Efficiency while using Round Robin algorithm.</p>
        <h3>Problem-1:</h3>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/7TpxxTNrcTg" title="Round Robin Scheduling (Turnaround Time &amp; Waiting Time)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>The convoy effect occurs when a set of nearly completed processes must wait for one long process, causing a backlog and inefficient CPU use. Round Robin scheduling mitigates this by allocating fixed time slots for each process, ensuring no single process monopolizes CPU time, thereby reducing the likelihood of a convoy effect. This leads to better overall system responsiveness and fairness in CPU time distribution among processes.</p>

        <details className="bg-blue-50 border-2 border-blue-500 rounded-lg p-4 cursor-pointer my-6">
          <summary className="font-semibold text-lg text-blue-700">Try out the question given below</summary>
          <div className="mt-4">
            <h4 className="font-semibold">Question</h4>
            <p>Consider the set of 5 processes whose arrival time and burst time are given below-</p>
            <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_round_robin_image_1.jpg" alt="" />
            <p>If the CPU scheduling policy is Round Robin with time quantum = 2 unit, calculate the average waiting time and average turn around time.</p>
          </div>
        </details>

        <h2>Bonus Content</h2>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://takeuforward.org/operating-system/round-robin-scheduling-explained" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Round Robin Scheduling : Explained - Tutorial</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/program-for-round-robin-scheduling-for-the-same-arrival-time/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Program for Round Robin Scheduling for the same Arrival time - GeeksforGeeks</a></li>
          <li><a href="https://chiraggoyaliit.medium.com/round-robin-cpu-scheduling-algorithm-part-5-52fe958f72b1" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Round Robin CPU Scheduling Algorithm (Part-5) | by Chirag Goyal</a></li>
        </ul>
        <p>Now let&apos;s try to solve a similar problem in the next lesson.</p>
      </section>
    </div>
  );
};

export default Module2_11;
