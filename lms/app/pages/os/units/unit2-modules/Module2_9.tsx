'use client';
import React from 'react';

const Module2_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.9</div>
        <div className="lesson-title-main">
          <h1>Priority Scheduling</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>This lesson will teach you about Priority Scheduling, a CPU scheduling technique that uses process priorities.</p>
        <p>By the end, you&apos;ll understand the issues associated with priority scheduling, know how to resolve them, and be able to apply the concept through practice exercises.</p>

        <h2>Priority Scheduling</h2>
        <p>Priority Scheduling is a CPU scheduling method where each process is assigned a priority, and the CPU is given to the process with the highest priority first. If two processes have the same priority, they are scheduled based on their arrival time.</p>
        <p>This method can be preemptive or non-preemptive, depending on whether a higher-priority process can interrupt a running process.</p>

        <h3>Types of Priority Scheduling</h3>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(17).jpg" alt="" />

        <h3>Key Metrics &amp; Formulas</h3>
        <ul>
          <li><strong>Waiting Time (WT)</strong> = Start Time − Arrival Time − Burst Time (for non-preemptive).</li>
          <li><strong>Turnaround Time (TAT)</strong> = Completion Time − Arrival Time.</li>
          <li><strong>Average Waiting Time</strong> = Sum of WT across all processes / Number of processes.</li>
        </ul>

        <h3>Priority Scheduling: Advantages vs. Limitations</h3>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(18).jpg" alt="" />
        <br />

        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded my-6">
          <h3 className="font-semibold text-red-700">The Problem with Priority Scheduling: Starvation</h3>
          <p>A major disadvantage of Priority Scheduling is the potential for indefinite blocking, also known as starvation.</p>
          <p><strong>Definition:</strong> Starvation occurs when a low-priority process is ready to run but is prevented from getting CPU time because there is a constant stream of higher-priority processes arriving.</p>
          <p><strong>Scenario:</strong> In a heavily loaded system, low-priority processes might wait indefinitely and may never get the chance to execute. They are &quot;starved&quot; of CPU time.</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded my-6">
          <h3 className="font-semibold text-green-700">The Solution to Starvation: Aging Mechanism</h3>
          <p><strong>Definition:</strong> Aging is a technique of gradually increasing the priority of processes that have been waiting in the ready queue for a long time.</p>
          <p><strong>How it Works:</strong> As a process &quot;ages&quot; (waits longer) in the queue, its priority is periodically increased.</p>
          <p><strong>Example:</strong></p>
          <ul className="ml-6 list-disc">
            <li>Imagine a system where priorities range from 127 (lowest) to 0 (highest).</li>
            <li>A rule could be implemented to increase a process&apos;s priority (e.g., decrease its priority number by 1) for every 15 minutes it waits.</li>
            <li>Eventually, even a process that started with the lowest priority (127) will have its priority increased to a point where it becomes one of the highest-priority processes in the system, guaranteeing that it will eventually be executed.</li>
          </ul>
          <ul className="ml-6 list-disc mt-2">
            <li>Increases priority of waiting processes over time to avoid indefinite delay.</li>
            <li>Ensures fairness by dynamically adjusting priorities based on wait time.</li>
          </ul>
          <p className="mt-2">This ensures that no process is blocked indefinitely and solves the problem of starvation.</p>
        </div>
        <p>Watch the video given below to understand the logic behind Priority Scheduling.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/yKD3pcFvGmY" title="Scheduling Algorithms - Priority Scheduling" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h2>Problems using Priority Scheduling</h2>
        <p>Take a look at the videos below to understand how to solve problems while scheduling using Priority scheduling algorithm.</p>
        <h3>Problem-1:</h3>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/Z2KsfhEJOFA" title="Priority Scheduling (Solved Problem 1)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Mind Map</h3>
        <p>This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Priority+Scheduling.svg" alt="" />

        <h3>Bonus Content</h3>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://www.techopedia.com/definition/priority-scheduling" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">What is Priority Scheduling? - Techopedia</a></li>
          <li><a href="https://www.scaler.com/topics/priority-scheduling-in-os/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Priority Scheduling Algorithm - Scaler Topics</a></li>
          <li><a href="https://medium.com/@akshatmistry/priority-scheduling-a-cpu-scheduling-approach-8c8e8e8e8e8e" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">PRIORITY SCHEDULING.. A CPU SCHEDULING APPROACH | by Akshat A. Mistry | Medium</a></li>
        </ul>
        <p>Now, let&apos;s try to solve some problems in the upcoming assignment.</p>
      </section>
    </div>
  );
};

export default Module2_9;
