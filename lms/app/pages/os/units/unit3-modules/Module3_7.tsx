'use client';
import React, { useState, useEffect } from 'react';

const MutualExclusionAnimation = () => {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % 2);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${active === 0 ? 'bg-blue-500' : 'bg-gray-600'}`}>P1</div>
        <div className="w-32 h-32 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">Critical Section</div>
        <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${active === 1 ? 'bg-purple-500' : 'bg-gray-600'}`}>P2</div>
      </div>
    </div>
  );
};

const DeadlockAnimation = () => {
  const [waiting, setWaiting] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setWaiting(prev => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className={`w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${waiting ? 'bg-red-500' : 'bg-orange-500'}`}>P1</div>
        <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold">Critical Section</div>
        <div className={`w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${waiting ? 'bg-red-500' : 'bg-orange-500'}`}>P2</div>
      </div>
    </div>
  );
};

const Module3_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.7</div>
        <div className="lesson-title-main">
          <h1>Solved Problems on Process Synchronization</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Have you ever wondered what happens when multiple processes try to access the same shared resource like two programs trying to print at the same time, or multiple transactions updating a single bank record simultaneously? How does the operating system ensure that every process gets its fair turn without causing data corruption or deadlocks?</p>
        <img src="https://media.istockphoto.com/id/1134910502/vector/footprint-route-human-prints-follow-trail-funny-people-shoe-steps-black-footstep-signs.jpg?s=612x612&w=0&k=20&c=rVjTGQDJpU6XB10HVO5AG_L7hiSeVYAFWJBaNNcCV-4=" alt="" />
        <p>To answer this, we explore Process Synchronization Problems practical scenarios that test how synchronization primitives like semaphores, mutexes, and monitors work together to maintain control, order, and fairness among processes.</p>
        <p>In this lesson, you will explore various problems related to process synchronization and understand how synchronization primitives such as semaphores, mutexes, and monitors are applied in real scenarios.</p>

        <h3>Problem 1</h3>
        <p>Consider the methods used by processes P1 and P2 for accessing their critical sections. The initial values of shared boolean variables S1 and S2 are randomly assigned.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_process_sync_image_1.jpg" alt="" />
        <p className="font-semibold mt-4">Question: Which one of the following statements describes the properties achieved?</p>
        <ul>
          <li>(a) Mutual exclusion but not progress</li>
          <li>(b) Progress but not mutual exclusion</li>
          <li>(c) Neither mutual exclusion nor progress</li>
          <li>(d) Both mutual exclusion and progress</li>
        </ul>

        <details className="bg-blue-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Solution Explanation</summary>
          <p className="mt-2">P1 and P2 depend on conditions involving S1 and S2 to access their critical sections.</p>
          <p className="mt-2"><strong>Mutual Exclusion:</strong></p>
          <ul>
            <li>P1 enters if S1 ≠ S2 and P2 enters if S1 = S2.</li>
            <li>These conditions can&apos;t be true simultaneously — so mutual exclusion is guaranteed.</li>
          </ul>
          <p className="mt-2"><strong>Progress:</strong></p>
          <ul>
            <li>If S1 = S2 initially, P2 proceeds, while P1 waits indefinitely.</li>
            <li>If S1 ≠ S2 initially, P1 proceeds, while P2 waits indefinitely.</li>
            <li>Hence, there&apos;s no guarantee of progress.</li>
          </ul>
          <p className="mt-2 font-semibold">Correct Answer: (a) Mutual exclusion but not progress.</p>
        </details>

        <MutualExclusionAnimation />
        <p className="text-sm text-gray-600 text-center">The two colored dots represent processes attempting to access the critical section — but never at the same time.</p>

        <h3>Problem 2</h3>
        <p>Watch the following video to understand how processes use synchronization constructs like semaphores to control access to shared resources.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/_yl0qAnsa_8" title="Process Synchronization - Problem 2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Problem 3</h3>
        <p>Two processes, P1 and P2, need to access a critical section of code. Consider the synchronization construct used by the processes:</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_process_sync_image_2.jpg" alt="" />
        <p className="mt-2">The shared variables wants1 and wants2 are initialized to false.</p>
        <p className="font-semibold mt-4">Which one of the following statements is TRUE about the construct?</p>
        <ul>
          <li>(a) It does not ensure mutual exclusion.</li>
          <li>(b) It does not ensure bounded waiting.</li>
          <li>(c) It requires that processes enter the critical section in strict alternation.</li>
          <li>(d) It does not prevent deadlocks, but ensures mutual exclusion.</li>
        </ul>

        <details className="bg-green-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Solution Explanation</summary>
          <p className="mt-2">When a process sets its wants variable to true, it indicates a request for entry into the critical section.</p>
          <ul>
            <li><strong>Mutual Exclusion:</strong> Only one process can enter at a time — ensured.</li>
            <li><strong>Deadlock:</strong> Both may set wants = true simultaneously → both wait forever → deadlock possible.</li>
            <li><strong>Bounded Waiting:</strong> Not guaranteed — one process can be delayed indefinitely.</li>
            <li><strong>Strict Alternation:</strong> Not enforced.</li>
          </ul>
          <p className="mt-2 font-semibold">Correct Answer: (d) It does not prevent deadlocks, but ensures mutual exclusion.</p>
        </details>

        <DeadlockAnimation />
        <p className="text-sm text-gray-600 text-center">Both processes are waiting on each other — an illustration of potential deadlock.</p>

        <h3>Problem 4</h3>
        <p>The following video demonstrates a complex synchronization scenario and how it can be solved using semaphores and condition variables.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/fWL8HAIrgMw" title="Process Synchronization - Problem 4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Problem 5</h3>
        <p>A counting semaphore was initialized to 10. Then, 6 P (wait) operations and 4 V (signal) operations were completed. Find the resulting value of the semaphore.</p>
        <ul>
          <li>(a) 0</li>
          <li>(b) 8</li>
          <li>(c) 10</li>
          <li>(d) 12</li>
        </ul>

        <details className="bg-yellow-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Solution Explanation</summary>
          <ul className="mt-2">
            <li>Initial value = 10</li>
            <li>Each P (wait) → decreases value by 1</li>
            <li>Each V (signal) → increases value by 1</li>
          </ul>
          <p className="mt-2">After 6 P operations → 10 − 6 = 4</p>
          <p>After 4 V operations → 4 + 4 = 8</p>
          <p className="mt-2 font-semibold">Final Answer: 8</p>
        </details>

        <h3>Concept Recap</h3>
        <ul>
          <li>Semaphores manage signaling between processes and prevent race conditions.</li>
          <li>Mutexes ensure mutual exclusion for accessing shared resources.</li>
          <li>Monitors provide structured synchronization with automatic mutual exclusion and condition variables.</li>
          <li>Deadlocks and starvation must be checked in every synchronization design.</li>
        </ul>

        <details className="bg-purple-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Practice Question</summary>
          <p className="mt-2">A semaphore S is initialized to 5. Process A performs 3 P (wait) operations, and Process B performs 2 V (signal) operations. What will be the final value of the semaphore? Show your calculation.</p>
          <p className="mt-2 font-semibold">Answer</p>
          <ul>
            <li>Initial S = 5</li>
            <li>After 3 P → 5 − 3 = 2</li>
            <li>After 2 V → 2 + 2 = 4</li>
            <li>Final value = 4</li>
          </ul>
        </details>

        <h3>Additional Practice Problems (No solutions; use as assignments)</h3>
        <ol>
          <li><strong>Producer-Consumer Variation:</strong> A buffer of size 4 is shared between one producer and one consumer. The producer produces items at rates that sometimes exceed the consumer. Design a semaphore-based solution (list semaphores and initial values) and explain how you would prevent buffer overflow and underflow. Also describe what happens if the producer crashes while holding the mutex.</li>
          <li><strong>Readers–Writers (Writers Priority):</strong> Design a monitor or semaphore solution that gives priority to writers but prevents starvation of readers. Describe the variables you will keep, the order of operations for readers and writers, and how you guarantee no starvation.</li>
          <li><strong>Dining Philosophers Extension:</strong> Suppose 7 philosophers sit around a circular table. Propose two different solutions (one using resource ordering and another using a monitor) that avoid deadlock. For each solution, argue correctness and whether starvation can still occur.</li>
          <li><strong>Barrier Synchronization:</strong> N threads perform computations in phases. Implement a barrier so that no thread proceeds to the next phase until all N threads finish the current phase. Provide a semaphore/monitor-based design and explain how to reuse the barrier across multiple phases.</li>
          <li><strong>Bounded Waiting Test:</strong> Consider a mutual-exclusion algorithm where each process uses a shared variable turn and a flag array. Prove or provide a counterexample whether this algorithm guarantees bounded waiting. If not, show how to modify it to enforce bounded waiting.</li>
          <li><strong>Priority Inversion Scenario:</strong> Describe a system with three threads (low, medium, high priority) and a shared resource protected by a mutex. Show how priority inversion can occur and propose at least two strategies (e.g., priority inheritance, priority ceiling) to mitigate it. Explain trade-offs for each strategy.</li>
        </ol>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.javatpoint.com/process-synchronization-in-os" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Process Synchronization in OS (Operating System) - javatpoint</a></li>
          <li><a href="https://drishty-ganatra66.medium.com/one-stop-for-process-synchronization-the-heart-of-operating-system-%EF%B8%8F-592fce551c54" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">One Stop for Process Synchronization | by Drishty Ganatra</a></li>
          <li><a href="https://www.gatevidyalay.com/process-synchronization-practice-problems/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Process Synchronization | Practice Problems | Gate Vidyalay</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Module3_7;
