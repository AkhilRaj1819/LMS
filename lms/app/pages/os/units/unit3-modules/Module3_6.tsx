'use client';
import React, { useState, useEffect } from 'react';

const MonitorAnimation = () => {
  const [active, setActive] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">P</div>
        <div className={`w-32 h-32 ${active ? 'bg-emerald-500' : 'bg-gray-700'} rounded-lg flex items-center justify-center text-white font-bold text-xl transition-all duration-500`}>Monitor</div>
      </div>
    </div>
  );
};

const ConditionVariableAnimation = () => {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${state === 0 ? 'bg-blue-500' : state === 1 ? 'bg-gray-400' : 'bg-emerald-500'}`}>
          {state === 0 ? 'wait()' : state === 1 ? 'waiting...' : 'signal()'}
        </div>
      </div>
    </div>
  );
};

const Module3_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.6</div>
        <div className="lesson-title-main">
          <h1>Monitors</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>How can multiple processes safely share common resources like printers, buffers, or database records without conflicts, yet without worrying about semaphores or manual locks? That&apos;s where Monitors come into play.</p>
        <p>In this lesson, you will explore Monitors a higher-level synchronization construct that abstracts away semaphore complexity and understand how they simplify synchronization in the Dining Philosophers problem.</p>

        <h3>Monitors</h3>
        <p>A Monitor is a high-level synchronization construct that encapsulates:</p>
        <ul>
          <li>Shared variables (data that needs protection).</li>
          <li>Procedures (operations that access the shared data).</li>
          <li>Synchronization code (implemented internally using locks and condition variables).</li>
        </ul>
        <p>Monitors ensure that only one process can execute a monitor procedure at a time, automatically providing mutual exclusion. Processes that cannot continue (e.g., due to unavailable resources) are made to wait on condition variables inside the monitor.</p>

        <MonitorAnimation />
        <p className="text-sm text-gray-600 text-center">The red dot represents a process entering the monitor — only one at a time — illustrating automatic mutual exclusion.</p>

        <h3>Watch and Learn</h3>
        <p>Watch the video given below to understand monitors.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/ufdQ0GR855M" title="Monitors" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Key Characteristics of Monitors</h3>
        <ul>
          <li><strong>Encapsulation:</strong> Shared data and synchronization logic are grouped together.</li>
          <li><strong>Automatic Mutual Exclusion:</strong> Only one process can execute inside the monitor at any given time.</li>
          <li><strong>Condition Variables:</strong> Used to make processes wait (via wait()) and resume (via signal()).</li>
          <li><strong>Structured Synchronization:</strong> No explicit "P" or "V" operations like semaphores — monitors handle this internally.</li>
        </ul>

        <h3>Condition Variables in Monitors</h3>
        <p>Unlike semaphores, Monitors use Condition Variables to handle process waiting. A condition variable represents a queue of processes waiting for a specific condition to become true.</p>
        <ul>
          <li><strong>wait(x)</strong> — suspends the calling process until condition x is signaled.</li>
          <li><strong>signal(x)</strong> — resumes exactly one waiting process on condition x (if any).</li>
        </ul>

        <ConditionVariableAnimation />
        <p className="text-sm text-gray-600 text-center">Here, the blue box waits until a green "signal" triggers it — demonstrating structured waiting and signaling.</p>

        <p>The monitor ensures structured waiting and signaling. This prevents problems like busy waiting, deadlocks, or incorrect sequencing.</p>

        <h3>Dining Philosophers Solution using Monitors</h3>
        <p>The Dining Philosophers Problem can be elegantly solved using Monitors. Here, the monitor manages philosopher states and ensures proper sequencing of chopstick access to prevent deadlock and starvation.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/K52NiClfvyE" title="Dining Philosophers Solution using Monitors" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>


        <h3>Problem Setup</h3>
        <p>Five philosophers are sitting around a table. Each philosopher alternates between two states:</p>
        <ul>
          <li><strong>Thinking:</strong> Not using chopsticks.</li>
          <li><strong>Hungry/Eating:</strong> Trying to pick up two chopsticks (left and right).</li>
        </ul>
        <p>The challenge is to design a system where philosophers can eat only when both chopsticks are available, and avoid deadlock (where everyone waits forever) and starvation (where someone never eats).</p>

        <h3>How It Works</h3>
        <ul>
          <li>A philosopher calls pickup(i) when hungry.</li>
          <li>The monitor checks if both neighboring philosophers are not eating.</li>
          <li>If yes, the philosopher starts eating; otherwise, they wait on their condition variable.</li>
          <li>After finishing, putdown(i) is called — this allows waiting neighbors to proceed.</li>
          <li>The monitor ensures that no two adjacent philosophers eat at the same time.</li>
        </ul>

        <h3>Advantages of Monitor-Based Solution</h3>
        <ul>
          <li><strong>No Busy Waiting:</strong> Waiting philosophers are blocked efficiently.</li>
          <li><strong>Automatic Mutual Exclusion:</strong> The monitor enforces one-at-a-time access.</li>
          <li><strong>Deadlock-Free:</strong> Each philosopher waits only if both neighbors are eating.</li>
          <li><strong>Fairness:</strong> All philosophers eventually get a chance to eat.</li>
        </ul>

        <h3>Watch the Video</h3>
        <p>The following video explains how monitors are used to solve the Dining Philosophers problem by combining structured waiting and signaling.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/K52NiClfvyE" title="Dining Philosophers Solution using Monitors" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <details className="bg-purple-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Practice Problem</summary>
          <p className="mt-2 font-semibold">Monitor Problem – Reader-Writer Simulation</p>
          <p className="mt-2">Design a Monitor to handle the Readers–Writers problem where:</p>
          <ul>
            <li>Multiple readers can read simultaneously.</li>
            <li>Only one writer can write at a time.</li>
          </ul>
          <p className="mt-2">Your monitor should use condition variables to prevent readers and writers from accessing the data simultaneously.</p>
          <p className="mt-2 font-semibold">Solution (Conceptual Outline):</p>
        </details>

        <h3>Summary</h3>
        <ul>
          <li>Monitors are high-level synchronization constructs combining mutual exclusion and condition variables.</li>
          <li>They simplify synchronization by abstracting semaphore-based operations.</li>
          <li>Condition variables enable structured waiting (wait()) and signaling (signal()).</li>
          <li>In the Dining Philosophers problem, monitors eliminate deadlocks and ensure fairness.</li>
          <li>Monitors promote clear, modular, and deadlock-free concurrent programming.</li>
        </ul>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.faizabidi.com/blog/p8vvnejhm15oe0b7lxj3ekcmk0qxlr" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Monitors: An Operating System Structuring Concept — Faiz Abidi</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/monitors-in-process-synchronization/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Monitors in Process Synchronization - GeeksforGeeks</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/monitors-in-process-synchronization/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dining-Philosophers Solution using Monitors</a></li>
        </ul>
        <p>Let&apos;s move on to the next lesson now.</p>
      </section>
    </div>
  );
};

export default Module3_6;
