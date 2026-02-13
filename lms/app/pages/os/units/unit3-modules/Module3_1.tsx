'use client';
import React from 'react';

const Module3_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.1</div>
        <div className="lesson-title-main">
          <h1>Process Synchronization</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Time management isn&apos;t just a life skill — it&apos;s a CPU skill too. Just as you balance multiple tasks in a day, an operating system must coordinate multiple processes trying to use shared resources at the same time.</p>
        <p>In this lesson, you&apos;ll explore how operating systems ensure safe cooperation among concurrent processes, avoiding chaos, data loss, and race conditions.</p>

        <h3>What You&apos;ll Learn</h3>
        <p>By the end of this lesson, you&apos;ll be able to:</p>
        <ul>
          <li>Explain the concept and importance of Process Synchronization.</li>
          <li>Understand Race Conditions, Critical Sections, and why they matter.</li>
          <li>Explore synchronization tools, Mutex, Semaphore, and Monitor.</li>
          <li>Analyze real-world coordination issues like Deadlock, Starvation, and Priority Inversion.</li>
          <li>Apply basic synchronization strategies to maintain correctness and data consistency.</li>
        </ul>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
          &quot;What happens when two people try to edit the same document at once?&quot;
        </blockquote>

        <p>Both people may overwrite each other&apos;s changes, save incomplete edits, or end up with a confused final document, because their actions are happening simultaneously without coordination.</p>
        <p>That&apos;s exactly what happens in an operating system when multiple processes try to access shared data at the same time without proper synchronization.</p>
        <p>Each process executes independently, and their instructions can interleave in unpredictable ways, causing one process to read or modify data while another is still updating it.</p>
        <p>The result? Inconsistency. Errors. Unpredictable outcomes.</p>
        <p><strong>Synchronization is the OS&apos;s way of saying: &quot;One at a time, please.&quot;</strong></p>

        <h3>The Need for Synchronization</h3>
        <p>Operating systems often deal with cooperating processes, processes that can affect or be affected by others running at the same time.</p>
        <p>These processes share data or resources in two ways:</p>
        <ul>
          <li><strong>Direct Sharing:</strong> Sharing a common address space like shared memory.</li>
          <li><strong>Indirect Sharing:</strong> Exchanging information through files, pipes, or messages.</li>
        </ul>
        <p>But cooperation introduces risk — multiple cooks in one kitchen can spoil the broth unless they coordinate access.</p>

        <h3>The Race Condition Problem</h3>
        <p>A race condition occurs when two or more processes access shared data concurrently, and the final outcome depends on the order in which the processes execute. Since that order is unpredictable, results can vary each time the program runs.</p>
        <p><strong>Example:</strong></p>
        <p>Suppose we have a shared variable: <code>x = 5</code></p>
        <p>And two processes:</p>
        <ul>
          <li>Process A: x = x + 1</li>
          <li>Process B: x = x * 2</li>
        </ul>
        <p><strong>Case 1: A runs first, then B</strong></p>
        <ul>
          <li>A executes: x = 5 + 1 = 6</li>
          <li>B executes: x = 6 * 2 = 12</li>
          <li>Final value: 12</li>
        </ul>
        <p><strong>Case 2: B runs first, then A</strong></p>
        <ul>
          <li>B executes: x = 5 * 2 = 10</li>
          <li>A executes: x = 10 + 1 = 11</li>
          <li>Final value: 11</li>
        </ul>
        <p><strong>Observation:</strong> The final value of x depends on the execution order. Sometimes it&apos;s 11, sometimes 12. This unpredictability is what makes race conditions problematic.</p>
        <p><strong>Solution:</strong> To prevent race conditions, processes must be synchronized using mechanisms like locks, semaphores, or mutexes, ensuring that shared data is accessed in a controlled and predictable manner.</p>

        <h3>Critical Sections: Where the Conflict Happens</h3>
        <p>A critical section is the part of a program that accesses shared data — the danger zone where race conditions can occur.</p>
        <p>To maintain consistency: <strong>Only one process should execute its critical section at a time.</strong></p>
        <h3>Synchronization Must Ensure</h3>
        <ul>
          <li><strong>Mutual Exclusion</strong> – Only one process in the critical section at once.</li>
          <li><strong>Progress</strong> – If no one&apos;s inside, some process should get the chance to enter.</li>
          <li><strong>Bounded Waiting</strong> – Every process should eventually get a turn; no one waits forever.</li>
        </ul>

        <h3>Try It: Visualize the Conflict</h3>
        <table className="border-collapse border border-gray-400 my-4">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Process</th>
              <th className="border border-gray-400 p-2">Code Segment</th>
              <th className="border border-gray-400 p-2">Shared Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">P1</td>
              <td className="border border-gray-400 p-2">Balance = Balance + 100</td>
              <td className="border border-gray-400 p-2">Balance</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">P2</td>
              <td className="border border-gray-400 p-2">Balance = Balance - 50</td>
              <td className="border border-gray-400 p-2">Balance</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Question:</strong> What happens if both execute their lines simultaneously?</p>
        <p>Think:</p>
        <ul>
          <li>– Which process should go first?</li>
          <li>– What happens if they both read &quot;Balance&quot; at the same time?</li>
          <li>– Will the final value be correct?</li>
        </ul>
        <details className="bg-gray-100 border-2 border-gray-800 rounded-lg p-4 cursor-pointer my-4">
          <summary className="font-semibold">Reveal Answer</summary>
          <p className="mt-2">If both processes read Balance simultaneously, they may both read the same initial value and perform their operations independently, leading to one update being lost. Proper synchronization ensures operations happen sequentially.</p>
        </details>

        <h3>Synchronization Tools</h3>
        <h4>1. Mutex (Mutual Exclusion Lock)</h4>
        <p>A mutex ensures that only one process accesses a shared resource at a time — like a key to a locked room. Whoever holds the key can enter; others must wait.</p>
        <p><strong>Use Case:</strong> Simple critical section control.</p>

        <h4>2. Semaphore</h4>
        <p>A semaphore is like a counter that controls access to multiple instances of a resource.</p>
        <p>It uses two atomic operations:</p>
        <table className="border-collapse border border-gray-400 my-4">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Operation</th>
              <th className="border border-gray-400 p-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">wait() / P()</td>
              <td className="border border-gray-400 p-2">Decrement; if &lt; 0, process waits.</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">signal() / V()</td>
              <td className="border border-gray-400 p-2">Increment; wakes up waiting process.</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Example:</strong></p>
        <pre className="bg-gray-100 p-4 rounded">
{`wait(mutex);
   // critical section
signal(mutex);`}
        </pre>

        <h4>3. Monitor</h4>
        <p>A monitor is a high-level synchronization construct that bundles:</p>
        <ul>
          <li>Shared variables</li>
          <li>Methods to access them</li>
          <li>Automatic locking</li>
        </ul>
        <p><strong>Think of it like:</strong> A secure office where only one person can enter and work inside at a time — the door locks automatically.</p>

        <h3>Real-World Challenges</h3>
        <p>Even with synchronization tools, several issues can arise:</p>
        <table className="border-collapse border border-gray-400 my-4">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Issue</th>
              <th className="border border-gray-400 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2">Deadlock</td>
              <td className="border border-gray-400 p-2">Processes wait indefinitely for each other&apos;s resources.</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Starvation</td>
              <td className="border border-gray-400 p-2">A process never gets CPU time because others always preempt it.</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2">Priority Inversion</td>
              <td className="border border-gray-400 p-2">A low-priority process holds a lock needed by a higher-priority one.</td>
            </tr>
          </tbody>
        </table>

        <h3>Concept Reinforcement</h3>
        <p>Look over each concept box to explore key takeaways:</p>
        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold">Race Condition</h4>
            <p>When results depend on the unpredictable order of execution.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">Critical Section</h4>
            <p>Code segment accessing shared data — must be protected.</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold">Mutex</h4>
            <p>A lock ensuring only one process enters the critical section.</p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Semaphore</h4>
            <p>A counting signal used to coordinate multiple processes.</p>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-semibold">Monitor</h4>
            <p>A structured way to handle synchronization automatically.</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Deadlock</h4>
            <p>Circular waiting among processes, halting progress.</p>
          </div>
        </div>
        <h4>Watch & Explore</h4>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/ph2awKa8r5Y" title="Process Synchronization" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Bonus Reading:</h3>
        <ul>
          <li><a href="https://riteshk981.medium.com/process-synchronization-aaac2feb7656" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Medium - Process Synchronization</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/introduction-of-process-synchronization/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GeeksforGeeks - Introduction of Process Synchronization</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Module3_1;
