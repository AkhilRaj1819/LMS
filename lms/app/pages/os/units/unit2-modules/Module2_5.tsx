'use client';
import React from 'react';

const Module2_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.5</div>
        <div className="lesson-title-main">
          <h1>First Come First Served</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>From this lesson onwards, you will be looking into various scheduling algorithms and understand where they will be used.</p>

        <h4>First Come First Served (FCFS) algorithm</h4>
        <p>First Come First Served (FCFS) is the simplest CPU scheduling algorithm. In FCFS, processes are executed in the exact order they arrive in the ready queue, without any preemption. This means the process that arrives first gets executed first, followed by the next in line.</p>
        <p>While FCFS is straightforward to implement, it has some limitations, such as the convoy effect, where longer processes can cause delays for shorter ones waiting in the queue. This can lead to inefficiencies in some scenarios.</p>

        <h3>FCFS Scheduling in Action</h3>
        <p>Processes enter the queue in arrival order (P1 → P2 → P3) and execute sequentially.</p>
        <div className="flex items-center justify-between my-4 relative">
          <div className="flex gap-2">
            <div className="border-2 border-blue-500 px-3 py-1 rounded text-sm animate-[moveRight_3s_ease-in-out_infinite]" style={{animationDelay: '0s'}}><strong>P1</strong></div>
            <div className="border-2 border-green-500 px-3 py-1 rounded text-sm animate-[moveRight_3s_ease-in-out_infinite]" style={{animationDelay: '1s'}}><strong>P2</strong></div>
            <div className="border-2 border-purple-500 px-3 py-1 rounded text-sm animate-[moveRight_3s_ease-in-out_infinite]" style={{animationDelay: '2s'}}><strong>P3</strong></div>
          </div>
          <div className="animate-pulse ml-auto">
            <p>🖥️ <strong>CPU</strong></p>
          </div>
        </div>
        <style jsx>{`
          @keyframes moveRight {
            0% { transform: translateX(0); opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(calc(100vw - 200px)); opacity: 0; }
          }
        `}</style>

        <h3>Terminology &amp; Metrics</h3>
        <ul>
          <li><strong>Arrival Time:</strong> When a process enters the ready queue.</li>
          <li><strong>Burst Time:</strong> CPU time needed for process execution.</li>
          <li><strong>Completion Time:</strong> When the process finishes.</li>
          <li><strong>Turnaround Time (TAT)</strong> = Completion Time – Arrival Time.</li>
          <li><strong>Waiting Time (WT)</strong> = Turnaround Time – Burst Time.</li>
        </ul>

        <h3>Advantages</h3>
        <ul>
          <li>Simple and straightforward to implement.</li>
          <li>Works well for batch systems or minimal context switching.</li>
        </ul>

        <h3>Limitations</h3>
        <ul>
          <li>Can cause long waiting times—particularly if a short job follows a long one (convoy effect).</li>
          <li>Average turnaround and waiting time depend heavily on arrival order.</li>
        </ul>
        <p>For a deeper understanding, refer to the video explaining how FCFS works.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/7DoP1L9nAAs" title="Scheduling Algorithms - First Come First Served (FCFS)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h4>Problems using FCFS</h4>
        <p>When working with scheduling algorithms like FCFS, it&apos;s important to understand some key performance measures:</p>
        <p><strong>Turnaround Time (TAT):</strong> This is the total time taken by a process from the moment it enters the system until it completes execution.</p>
        <p>Formula: TAT = Completion Time (CT) – Arrival Time (AT)</p>
        <p><strong>Waiting Time (WT):</strong> This is the amount of time a process spends waiting in the ready queue before its execution starts.</p>
        <p>Formula: WT = Turnaround Time (TAT) – Burst Time (BT)</p>
        <p>These metrics help analyze the efficiency of the scheduling algorithm.</p>
        <p>Take a look at the videos given below to understand how Average time and Efficiency is calculated.</p>

        <h4>Problem-1:</h4>
        <p>The following video explains how to find the efficiency while using FCFS for scheduling numerically.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/8-BUGte27sk" title="First Come First Served Scheduling (Solved Problem 2)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>[Optional Content]</h3>
        <h3>Problem-2:</h3>
        <p>The following video contains an explanation to solve the problem to find the Average time numerically.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/VSMAjMfJ6KQ" title="First Come First Served Scheduling (Solved Problem 1)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h4>Mind Map</h4>
        <p>This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/First+come+First+Served.svg" alt="Mind map" />
        <br />

        <h4>Bonus Content</h4>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://www.scaler.com/topics/first-come-first-serve/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">First Come First Serve (FCFS) Scheduling - Scaler Topics</a></li>
          <li><a href="https://www.vbspu.ac.in/e-content/Scheduling-Algorithm.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Scheduling Algorithm - Operating System</a></li>
          <li><a href="https://www.theknowledgeacademy.com/blog/first-come-first-serve/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">First Come First Serve (FCFS) Scheduling Algorithm</a></li>
        </ul>
        <p>Let&apos;s move on to the next lesson!</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDFhY3BjNm9hZjRweWlzMmZ0ODB0dDIzazNtMW9ibzdxd3gyMTE4YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7btNa0RUYa5E7iiQ/giphy.gif" alt="" />
      </section>
    </div>
  );
};

export default Module2_5;
