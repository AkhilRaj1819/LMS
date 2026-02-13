'use client';
import React from 'react';

const Module2_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.7</div>
        <div className="lesson-title-main">
          <h1>Shortest Job First</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In this unit, you will explore the Shortest Job First (SJF) scheduling algorithm, including both preemptive and non-preemptive versions. You will compare SJF with FCFS to understand their differences and analyze the disadvantages of SJF in practical scenarios.</p>

        <h4>Shortest Job First algorithm</h4>
        <p>The Shortest Job First (SJF) scheduling algorithm is a method used by the operating system to select which process to execute next from the ready queue.</p>
        <ul>
          <li><strong>Core Principle:</strong> The process that requires the CPU for the shortest period of time is the first one to be assigned the CPU.</li>
          <li><strong>Contrast with FCFS:</strong> Unlike First Come First Serve (FCFS), where the process that arrives first gets the CPU regardless of its execution time, SJF prioritizes processes based on their length.</li>
          <li><strong>Focus on &quot;Next CPU Burst&quot;:</strong> It&apos;s important to note that SJF scheduling does not consider the entire lifetime of a process. Instead, it focuses on the length of the process&apos;s next CPU burst.</li>
        </ul>
        <p>A more accurate name for this algorithm would be the &quot;Shortest Next CPU Burst&quot; algorithm.</p>
        <p>The algorithm selects the process that has the smallest next CPU burst from the available processes in the ready queue.</p>

        <h3>Handling Tie-Breaks in SJF</h3>
        <p>A situation may arise where two or more processes have the exact same next CPU burst length.</p>
        <p><strong>Solution:</strong> To break the tie, the First Come First Serve (FCFS) scheduling policy is used. The process that arrived in the ready queue first among the tied processes will be granted the CPU.</p>

        <h2>Types of SJF Algorithm</h2>
        <p>The SJF algorithm can be implemented in two distinct ways:</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(23).jpg" alt="" />

        <h3>The Core Problem:</h3>
        <p>One of the main issues is that it requires knowing the burst time of each process in advance, which isn&apos;t always possible. This makes it less suitable for real-world systems where burst times are unknown. Another issue is that longer tasks might have to wait a long time if there are many shorter tasks ahead of them. This is known as the starvation problem, where longer processes get stuck waiting for shorter ones to finish.</p>

        <h3>The Solution - Approximation:</h3>
        <ul>
          <li>Since SJF is an optimal algorithm in terms of minimizing average waiting time, we try to approximate it.</li>
          <li>We can predict the length of the next CPU burst based on the lengths of its previous CPU bursts. The assumption is that the next burst will be similar in length to the previous ones.</li>
          <li>By using this predicted value, the scheduler can pick the process with the shortest predicted CPU burst and apply the SJF logic.</li>
        </ul>
        <p>Watch the video given below to understand how Shortest Job First (SJF) works.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/t0g9b3SJECg" title="Scheduling Algorithms - Shortest Job First (SJF)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Turnaround Time Calculation</h3>
        <p>Now, let&apos;s walk through the process of calculating the turnaround time and average turnaround time for the example covered in the video.</p>
        <p>Turnaround Time (TAT) is the total time from the arrival of the process to its completion.</p>
        <p><strong>TAT = Completion time − Arrival time</strong></p>

        <h4>Process Data:</h4>
        <ul>
          <li>P1: Arrival time = 0, Completion time = 17, Burst time = 8ms</li>
          <li>P2: Arrival time = 1, Completion time = 5, Burst time = 4ms</li>
          <li>P3: Arrival time = 2, Completion time = 26, Burst time = 9ms</li>
          <li>P4: Arrival time = 3, Completion time = 10, Burst time = 5ms</li>
        </ul>

        <h4>Turnaround Time (TAT):</h4>
        <ul>
          <li>P1: Turnaround Time for P1 = Completion time of P1 - Arrival time of P1 = 17 - 0 = 17ms.</li>
          <li>P2: Turnaround Time for P2 = Completion time of P2 - Arrival time of P2 = 5 - 1 = 4ms.</li>
          <li>P3: Turnaround Time for P3 = Completion time of P3 - Arrival time of P3 = 26 - 2 = 24ms.</li>
          <li>P4: Turnaround Time for P4 = Completion time of P4 - Arrival time of P4 = 10 - 3 = 7ms.</li>
        </ul>
        <p><strong>Average Turnaround Time = total_turn_around_time / no_of_processes = 13.00ms</strong></p>

        <h4>Bonus Content</h4>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://www.guru99.com/shortest-job-first-sjf-scheduling.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Shortest Job First (SJF): Preemptive, Non-Preemptive Example - guru99.com</a></li>
          <li><a href="https://www.geeksforgeeks.org/dsa/shortest-remaining-time-first-preemptive-sjf-scheduling-algorithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Shortest Remaining Time First (Preemptive SJF) Scheduling Algorithm - GeeksforGeeks</a></li>
          <li><a href="https://medium.com/@francescofranco_39234/shortest-job-first-scheduling-2170df05c355" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Shortest Job First Scheduling - Medium</a></li>
        </ul>
        <p>Great job! You&apos;ve successfully completed this lesson.</p>
      </section>
    </div>
  );
};

export default Module2_7;
