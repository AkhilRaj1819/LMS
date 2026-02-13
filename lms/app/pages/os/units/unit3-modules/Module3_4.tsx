'use client';
import React, { useState, useEffect } from 'react';

const SemaphoreAnimation = () => {
  const [value, setValue] = useState(2);
  const [students, setStudents] = useState([0, 1, 2]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStudents(prev => prev.map(s => (s + 1) % 3));
      setValue(prev => prev === 2 ? 1 : prev === 1 ? 0 : 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        {students.map((pos, i) => (
          <div key={i} className={`${pos < 2 ? 'bg-emerald-500' : 'bg-gray-700'} rounded-lg w-20 h-20 flex items-center justify-center text-white font-bold transition-colors duration-500`}>
            S{i + 1}
          </div>
        ))}
      </div>
      <p className="text-center text-white mt-4 font-bold">Semaphore Value: {value}</p>
    </div>
  );
};

const ParkingAnimation = () => {
  const [parked, setParked] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setParked(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-4">
        {[0, 1, 2].map(i => (
          <div key={i} className={`border-4 ${i < parked ? 'border-emerald-500 bg-emerald-100' : 'border-gray-300 bg-white'} rounded-lg w-24 h-24 flex items-center justify-center font-bold transition-all duration-500`}>
            {i < parked ? '🚗' : ''}
          </div>
        ))}
      </div>
      <p className="text-center text-gray-700 mt-4 font-medium">Cars parked: {parked}/3</p>
    </div>
  );
};

const Module3_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.4</div>
        <div className="lesson-title-main">
          <h1>Semaphores</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Imagine you&apos;re in a library with only two computers for students to use. If three students arrive at the same time, how do we ensure that only two can use the computers while the third waits without chaos or conflict?</p>
        <p>This real-world scenario illustrates the need for synchronization a system to control how multiple processes share limited resources safely. And that&apos;s exactly where Semaphores come in.</p>

        <SemaphoreAnimation />

        <h3>Semaphores</h3>
        <p>A Semaphore is a synchronization primitive used in operating systems to manage access to shared resources in a concurrent environment. It helps prevent race conditions (when two or more processes access shared data at the same time and cause inconsistency) and ensures that the critical section is accessed by only one process or a limited number of processes at once.</p>
        <p>A semaphore is represented as a variable that controls resource availability. It operates using two atomic operations meaning they execute completely without interruption:</p>
        <ul>
          <li><strong>Wait (P):</strong> Decrements the semaphore value. If it becomes negative, the process is blocked until the value is positive again.</li>
          <li><strong>Signal (V):</strong> Increments the semaphore value, signaling that a resource is available for use.</li>
        </ul>

        <h3>📘 Example</h3>
        <p>Imagine a small parking lot with only three spaces. We can manage access using a semaphore whose initial value is 3.</p>
        <ul>
          <li>Each car entering performs a Wait (P) — reducing the available slots by one.</li>
          <li>When all slots are full (semaphore = 0), the next car must wait until another leaves.</li>
          <li>When a car leaves, it performs a Signal (V) — freeing one slot for others.</li>
        </ul>
        <p>This ensures no two cars try to occupy the same space — just like semaphores ensure safe process access to shared resources.</p>

        <ParkingAnimation />

        <h3>Watch and Learn</h3>
        <p>Watch the video given below</p>
        <p>This video explains how semaphores are implemented to control process synchronization, manage critical sections, and prevent race conditions.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/XDIOC2EY5JE" title="Semaphores" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Types of Semaphores</h3>
        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold">🔒 Binary Semaphore</h4>
            <p>Only one process can access the resource at a time.</p>
            <p className="text-sm mt-2">Critical Section: Other processes must wait until it&apos;s released.</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-semibold">⚙️ Counting Semaphore</h4>
            <p>Allows multiple processes up to a defined limit.</p>
            <p className="text-sm mt-2">Each process gets a slot; when all are filled, others must wait.</p>
          </div>
        </div>

        <h3>1. Binary Semaphore</h3>
        <p>Also known as a mutex, a binary semaphore can have only two values — 0 and 1.</p>
        <ul>
          <li><strong>Value = 1:</strong> The resource is free and available.</li>
          <li><strong>Value = 0:</strong> The resource is currently being used by a process.</li>
        </ul>
        <p>Binary semaphores are used to achieve mutual exclusion, ensuring only one process can access a critical section at a time.</p>

        <h3>2. Counting Semaphore</h3>
        <p>A counting semaphore can have any non-negative integer value. It is used when multiple instances of a resource exist.</p>
        <p>For example, if a database has five simultaneous connections, a counting semaphore initialized to 5 ensures that only up to five processes can access it at once.</p>

        <h3>Disadvantages of Semaphores</h3>
        <ul>
          <li><strong>Busy Waiting (Spinlock Issue):</strong> In semaphore implementation, a process might continuously check (or "spin") to see if the semaphore is available, wasting CPU cycles.</li>
          <li><strong>Deadlocks:</strong> If multiple processes hold semaphores and wait for others to release them, it could result in a deadlock where no process can proceed.</li>
          <li><strong>Priority Inversion:</strong> A lower-priority process holding a semaphore may block higher-priority processes, causing unnecessary delays.</li>
          <li><strong>Complexity in Usage:</strong> Improper use of semaphore operations (like missing a signal or overusing wait) can lead to issues such as resource leaks or inconsistencies.</li>
          <li><strong>Starvation:</strong> Processes with lower priority may never get access to the semaphore if higher-priority processes continuously dominate access.</li>
        </ul>

        <h3>Improving Semaphore Usage</h3>
        <p>To prevent busy waiting, semaphores are often implemented with blocking and wake-up mechanisms.</p>
        <ul>
          <li><strong>Modified Wait (P):</strong> If the semaphore value &gt; 0, decrement and proceed. If the semaphore value = 0, block the process until the resource is released.</li>
          <li><strong>Modified Signal (V):</strong> Increment the semaphore value. If any process is waiting, wake one up to continue execution.</li>
        </ul>
        <p>This approach ensures fairness and avoids CPU wastage by putting waiting processes to sleep instead of making them spin.</p>

        <h3>Example: Parking Lot Analogy (Blocking Instead of Spinning)</h3>
        <p>If a car arrives and the parking lot is full, it waits in a queue (blocked state). When another car leaves (signal), the waiting one enters — just like blocked processes resume execution once the semaphore is released.</p>

        <h3>How to Solve Semaphore Problems</h3>
        <p>Solving semaphore-based problems involves tracking initial values and how each operation (P or V) changes them. Follow these steps:</p>
        <ol>
          <li>Note the initial semaphore value (S₀).</li>
          <li>For each P (wait), subtract 1 from the semaphore value.</li>
          <li>For each V (signal), add 1 to the semaphore value.</li>
          <li>Continue sequentially across all processes.</li>
          <li>The final semaphore value = S₀ - total(P) + total(V).</li>
        </ol>

        <h3>Example Walkthrough</h3>
        <p>Semaphore initialized to 10. Two processes execute:</p>
        <ul>
          <li>Process A: 3 P, 1 V</li>
          <li>Process B: 2 P, 2 V</li>
        </ul>
        <p>Calculation: 10 - (3+2) + (1+2) = 10 - 5 + 3 = 8.</p>
        <p className="font-semibold">✅ Final semaphore value = 8.</p>

        <details className="bg-blue-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Solved Problem-1</summary>
          <p className="mt-2">A Counting Semaphore was initialized to 12. then 10P (wait) and 4V (Signal) operations were computed on this semaphore. What is the result?</p>
          <p className="mt-2 font-semibold">Here&apos;s how to solve this problem</p>
          <ul>
            <li>Initial Value of Semaphore: The semaphore is initialized to 12.</li>
            <li>Effect of 10 P (Wait) Operations: Each P operation decrements the semaphore value. 12−10=2</li>
            <li>Effect of 4 V (Signal) Operations: Each V operation increments the semaphore value. 2+4=6</li>
            <li>Result: The final value of the semaphore is 6.</li>
          </ul>
        </details>

        <details className="bg-green-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Solved Problem-2</summary>
          <p className="mt-2">There is a semaphore S initialized to 5. The following operations are performed by two processes, P1 and P2:</p>
          <ul>
            <li>Process P1 executes 3 P (wait) operations and then 2 V (signal) operations.</li>
            <li>Process P2 executes 2 V (signal) operations and then 1 P (wait) operation.</li>
          </ul>
          <p className="mt-2">What is the final value of the semaphore after all operations?</p>
          <p className="mt-2 font-semibold">Here&apos;s how to solve this problem</p>
          <ol>
            <li>Initial value of the semaphore = 5.</li>
            <li>Process P1 executes 3 P (wait) operations: 5 - 1 = 4, 4 - 1 = 3, 3 - 1 = 2.</li>
            <li>Process P1 executes 2 V (signal) operations: 2 + 1 = 3, 3 + 1 = 4.</li>
            <li>Process P2 executes 2 V (signal) operations: 4 + 1 = 5, 5 + 1 = 6.</li>
            <li>Process P2 executes 1 P (wait) operation: 6 - 1 = 5.</li>
            <li>Final value of the semaphore = 5.</li>
          </ol>
        </details>

        <h3>Real-World Applications of Semaphores</h3>
        <ul>
          <li><strong>Printers in an Office:</strong> If five employees share two printers, semaphores prevent printing overlap and ensure orderly access.</li>
          <li><strong>Airport Runways:</strong> Only one aircraft can use a runway at a time; semaphores ensure controlled scheduling of takeoffs and landings.</li>
          <li><strong>Traffic Signals:</strong> Semaphores manage intersections, allowing one direction to proceed while others wait — ensuring safe traffic flow.</li>
          <li><strong>Database Transactions:</strong> Semaphores prevent multiple transactions from modifying the same record simultaneously, avoiding data corruption.</li>
          <li><strong>Cloud Servers:</strong> Limit the number of concurrent virtual machines running on a host to prevent overload.</li>
        </ul>

        <details className="bg-yellow-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Practice Question</summary>
          <p className="mt-2">Consider a counting semaphore initialized to 8. Two processes, A and B, perform operations on the semaphore. The following operations occur:</p>
          <ul>
            <li>Process A executes 4 P (wait) operations.</li>
            <li>Process B executes 2 V (signal) operations.</li>
            <li>Process A then executes 1 V (signal) operation.</li>
          </ul>
          <p className="mt-2">What is the final value of the semaphore?</p>
        </details>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://medium.com/@pushpendrajtp99/semaphore-in-operating-system-e3c0a21655a8" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Semaphore in Operating System - Medium</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/semaphores-in-process-synchronization/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Semaphores in Process Synchronization - GeeksforGeeks</a></li>
          <li><a href="https://www.theknowledgeacademy.com/blog/semaphore-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Semaphore in Operating Systems: A Beginner&apos;s Guide to OS</a></li>
        </ul>
        <img src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dmNlMm96b3BhOWx2OTZtYWd2Yng5aHg3ZGRuODhlMjN6bmtlZGJjYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZW9RkoNqEItptErDL6/giphy.gif" alt="" />
      </section>
    </div>
  );
};

export default Module3_4;
