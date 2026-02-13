'use client';
import React from 'react';

const Module3_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.2</div>
        <div className="lesson-title-main">
          <h1>The Critical Section Problem</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Have you ever wondered what would happen if two people tried to withdraw money from the same bank account at the same time? Or what might occur if two programs attempted to save changes to the same file simultaneously?</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDZiZzBwNXJncmxvM3BreDBvcTgxc2VkeHhvNXVzdjQ5a3UyZjFwbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3orieMQGRwRZq1tL2w/giphy.gif" alt="" />
        <p>In both cases, the outcome could be unpredictable, the account balance might be updated incorrectly, or the file could get corrupted. These kinds of problems arise when multiple processes or threads try to access or modify the same shared resource at once.</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-6">
          <p>In multiprogramming and multithreading environments, several processes often execute concurrently and share common resources such as variables, files, or input/output devices. When two or more of them access or modify these resources at the same time, Inconsistencies may appear in the data or in how the system behaves. To manage such situations, computer systems use synchronization mechanisms techniques that coordinate process execution so that only one process accesses a shared resource at a time. The specific part of a program where the shared resource is accessed is known as the critical section.</p>
        </div>

        <h3>What is a Critical Section</h3>
        <p>A critical section is a portion of a program where a shared resource (like a variable, file, or memory location) is accessed or modified. Only one process should execute in the critical section at a time to ensure consistency and correctness of data.</p>
        <p>If multiple processes are allowed to execute their critical sections simultaneously, it may result in race conditions, where the outcome depends on the sequence or timing of execution, leading to unpredictable results.</p>

        <div className="bg-gradient-to-r from-purple-900 to-red-600 p-6 rounded-lg my-6">
          <h4 className="text-white font-semibold mb-3">Example: Bank Account Withdrawal</h4>
          <p className="text-white">Consider a bank account with an initial balance of $100. Two processes, Process A and Process B, both attempt to withdraw $50 simultaneously.</p>
          <ul className="text-white my-3">
            <li>• Process A checks the balance (100).</li>
            <li>• Process B checks the balance (still 100, because A hasn&apos;t updated it yet).</li>
            <li>• Process A deducts 50 and updates the balance to 50.</li>
            <li>• Process B deducts 50 based on its outdated view (100) and updates it to 50 again.</li>
          </ul>
          <p className="text-white font-semibold">Final balance = 50, but it should be 0.</p>
          <p className="text-white mt-3">This inconsistency occurs because both processes accessed and modified the shared variable (balance) at the same time, resulting in a <span className="text-yellow-300 font-semibold">race condition</span>. The section of code that updates the balance is the <span className="text-cyan-300 font-semibold">critical section</span>. The goal is to ensure that only one process at a time can execute within this section, preventing such conflicts.</p>
        </div>

        <h3>The Critical Section Problem</h3>
        <p>The Critical Section Problem is the task of designing a protocol or mechanism that ensures correct and safe execution when multiple processes share resources.</p>
        <p>It requires coordination among processes so that they can enter their critical sections in a controlled manner.</p>

        <h3>Conditions for a Correct Solution</h3>
        <p>A correct and efficient solution to the critical section problem must satisfy the following three conditions:</p>
        <p><strong>Core Conditions</strong><br />Required for a correct synchronization solution</p>

        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold">🔒 Mutual Exclusion</h4>
            <p>At any given time, only one process is allowed to enter its critical section. This ensures that shared data is not accessed or modified simultaneously by multiple processes, maintaining data integrity.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-semibold">⚙️ Progress</h4>
            <p>If no process is in the critical section, the selection of the next process to enter should not be delayed indefinitely. The decision should depend only on processes that are ready to enter, not on unrelated ones.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-semibold">⏳ Bounded Waiting</h4>
            <p>Every process must get a fair chance to enter its critical section. After a process has requested to enter, there should be a limit on how many others can go before it. This prevents starvation.</p>
          </div>
        </div>

        <p>In essence, a well-designed synchronization solution must ensure safety (mutual exclusion), fairness (bounded waiting), and progress (no indefinite delay).</p>

        <h3>Peterson&apos;s Solution</h3>
        <p>Peterson&apos;s Algorithm is a software-based solution that allows two processes to share a single-use resource without conflicts, ensuring mutual exclusion. It was proposed by Gary L. Peterson in 1981 and remains a classic example of process synchronization.</p>

        <h4>Peterson&apos;s Algorithm - Step-by-Step Flow</h4>
        <p>Peterson&apos;s Algorithm helps two processes share a resource safely. It uses two flags to express intent and one shared variable turn to decide whose turn it is.</p>
        <pre className="bg-gray-100 p-4 rounded my-4">
{`do {
  flag[i] = true; // Wants to enter
  turn = j; // Give turn to the other
  while (flag[j] && turn == j); // Wait politely

  // Critical Section
  ...

  flag[i] = false; // Exit
  // Remainder Section
  ...
} while (true);`}
        </pre>

        <div className="flex items-center gap-2 my-6 overflow-x-auto">
          <div className="bg-blue-50 border-2 border-blue-500 p-3 rounded min-w-[150px]">
            <p className="font-semibold">🚩 Intent to Enter</p>
            <p className="text-sm">Each process sets flag[i] = true</p>
          </div>
          <span className="text-2xl">➡️</span>
          <div className="bg-green-50 border-2 border-green-500 p-3 rounded min-w-[150px]">
            <p className="font-semibold">🎯 Turn Assignment</p>
            <p className="text-sm">The process assigns turn = j</p>
          </div>
          <span className="text-2xl">➡️</span>
          <div className="bg-yellow-50 border-2 border-yellow-500 p-3 rounded min-w-[150px]">
            <p className="font-semibold">⏳ Wait Check</p>
            <p className="text-sm">Wait while (flag[j] && turn == j)</p>
          </div>
          <span className="text-2xl">➡️</span>
          <div className="bg-purple-50 border-2 border-purple-500 p-3 rounded min-w-[150px]">
            <p className="font-semibold">🧩 Critical Section</p>
            <p className="text-sm">Access shared resource</p>
          </div>
          <span className="text-2xl">➡️</span>
          <div className="bg-orange-50 border-2 border-orange-500 p-3 rounded min-w-[150px]">
            <p className="font-semibold">✅ Exit</p>
            <p className="text-sm">Set flag[i] = false</p>
          </div>
        </div>

        <h4>Why Peterson&apos;s Algorithm Works</h4>
        <p>Peterson&apos;s Algorithm satisfies all three essential requirements of a correct synchronization solution:</p>
        <ul>
          <li><strong>Mutual Exclusion</strong> At most one process can enter the critical section because both processes check the turn and flag conditions before entering.</li>
          <li><strong>Progress</strong> If no process is in its critical section, one of the waiting processes can enter immediately without unnecessary delay.</li>
          <li><strong>Bounded Waiting</strong> Once a process signals its intention to enter, the other cannot repeatedly overtake it, ensuring fairness and preventing starvation.</li>
        </ul>

        <h4>🌿 Advantages</h4>
        <ul>
          <li>Completely software-based — requires no hardware instructions.</li>
          <li>Ensures mutual exclusion, progress, and bounded waiting.</li>
          <li>Simple, elegant, and ideal for understanding synchronization concepts.</li>
          <li>Excellent for educational use and explaining theoretical concurrency.</li>
        </ul>

        <h4>🔥 Limitations</h4>
        <ul>
          <li>Works only for two processes; extension to more is difficult.</li>
          <li>May fail on modern CPUs due to instruction reordering or caching.</li>
          <li>Not practical for real operating systems — hardware mechanisms are preferred.</li>
          <li>Mainly a conceptual model for understanding mutual exclusion.</li>
        </ul>

        <h4>Theoretical Importance</h4>
        <p>Peterson&apos;s Algorithm is mainly of academic and conceptual value. It helps students and developers understand how mutual exclusion can be achieved through logical reasoning and shared variables, without special machine instructions.</p>
        <p>Modern systems now use more reliable, hardware-assisted synchronization mechanisms like:</p>
        <ul>
          <li>Semaphores</li>
          <li>Mutex Locks</li>
          <li>Monitors</li>
          <li>Spinlocks</li>
          <li>Atomic operations (Test-and-Set, Compare-and-Swap)</li>
        </ul>
        <p>All of these are built upon the same principles demonstrated in Peterson&apos;s solution.</p>

        <h3>Bonus Content</h3>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://herovired.com/learning-hub/topics/critical-section-problem-in-os" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">herovired - Critical Section Problem in OS (Operating System)</a></li>
          <li><a href="https://www.geeksforgeeks.org/dsa/petersons-algorithm-in-process-synchronization/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GeeksforGeeks - Peterson&apos;s Algorithm in Process Synchronization</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/critical-section-in-synchronization/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GeeksforGeeks - Critical Section in Synchronization</a></li>
        </ul>
        <p>Let&apos;s move to the next lesson now.</p>
        <img src="https://media.tenor.com/T4seyB15I2YAAAAi/lets-go.gif" alt="" />
      </section>
    </div>
  );
};

export default Module3_2;
