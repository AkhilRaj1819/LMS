'use client';
import React, { useState, useEffect } from 'react';

const ThreadAnimation = () => {
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
        <div className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${active === 0 ? 'bg-emerald-500' : 'bg-gray-700'}`}>
          Increment
        </div>
        <div className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">Shared Var</div>
        <div className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${active === 1 ? 'bg-red-500' : 'bg-gray-700'}`}>
          Decrement
        </div>
      </div>
    </div>
  );
};

const WorkingAnimation = () => {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => (prev + 1) % 4);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-300 ${state === 0 || state === 1 ? 'bg-emerald-500' : 'bg-gray-400'}`}>
          Increment
        </div>
        <div className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-300 ${state === 2 || state === 3 ? 'bg-red-500' : 'bg-gray-400'}`}>
          Decrement
        </div>
      </div>
      <p className="text-center text-gray-700 mt-4 font-medium">{state === 0 || state === 1 ? 'Increment working' : 'Decrement working'}</p>
    </div>
  );
};

const Module3_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.8</div>
        <div className="lesson-title-main">
          <h1>Assignment | Process Synchronization</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Have you ever wondered how multiple threads running in parallel like one updating data while another reads it can avoid interfering with each other and corrupting shared memory? How can two threads safely modify a single variable without causing a race condition or a crash?</p>
        <p>In this assignment, you&apos;ll explore how synchronization primitives like semaphores help maintain control when multiple threads or processes share system resources. You&apos;ll implement a synchronization solution that ensures only one thread accesses the critical section at a time, reinforcing both conceptual and practical understanding.</p>

        <h3>Assignment: Process Synchronization with Semaphores</h3>
        <p>In this assignment, you will solve a problem to implement process synchronization using semaphores. Two threads one incrementing and one decrementing a shared variable must work in coordination without interfering with each other.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">Here&apos;s the problem statement:</p>
          <p className="mt-2">Consider a scenario where two threads, ThreadIncrement and ThreadDecrement, concurrently operate on a shared variable. The goal is to synchronize the threads using semaphores to ensure that only one thread can execute its critical section at a time. ThreadIncrement is responsible for incrementing the shared variable, while ThreadDecrement is responsible for decrementing it.</p>
        </div>

        <h3>ThreadIncrement:</h3>
        <p>Implement ThreadIncrement to increment the shared variable. Use semaphores to ensure exclusive access to the critical section during the increment operation.</p>

        <h3>ThreadDecrement:</h3>
        <p>Implement ThreadDecrement to decrement the shared variable. Employ semaphores to ensure exclusive access to the critical section during the decrement operation.</p>

        <h3>How to Approach the Problem</h3>
        <p>Before coding, let&apos;s understand the problem conceptually step by step:</p>

        <h4>Step 1: Identify the Shared Resource</h4>
        <ul>
          <li>The shared resource here is a single variable (like shared_var).</li>
          <li>Both threads read and modify it.</li>
          <li>Since they execute concurrently, without control, their operations might overlap and cause a race condition.</li>
        </ul>

        <h4>Step 2: Protect the Critical Section</h4>
        <ul>
          <li>The critical section is the part of code where the variable changes — increment or decrement.</li>
          <li>We use a semaphore to protect this section.</li>
          <li>The semaphore acts as a "gatekeeper" that lets only one thread in at a time.</li>
        </ul>

        <h4>Step 3: Apply Semaphore Operations</h4>
        <ul>
          <li>Use acquire() (or wait()) before entering the critical section.</li>
          <li>Perform the update (increment or decrement).</li>
          <li>Use release() (or signal()) after leaving the section.</li>
          <li>This ensures strict turn-taking between the threads — preventing simultaneous access.</li>
        </ul>

        <h4>Step 4: Handle Edge Cases</h4>
        <ul>
          <li>Make sure the shared variable never goes below 0 during decrements.</li>
          <li>If one thread is waiting too long, check for fairness (avoid starvation).</li>
          <li>Cleanly release the semaphore even if errors occur (good practice in all synchronization code).</li>
        </ul>

        <ThreadAnimation />
        <p className="text-sm text-gray-600 text-center">The green thread (increment) and red thread (decrement) take turns accessing the shared variable — the semaphore ensures only one is active at any given time.</p>

        <h3>Real-World Analogy</h3>
        <p>Think of it like this: Imagine two people using an ATM. The ATM represents a critical section only one person can use it at a time. The semaphore works like the ATM door lock one person enters, locks the door, finishes, then unlocks it so the next can enter. This guarantees safe, sequential access.</p>

        <h3>How to Think Before Coding</h3>
        <p>When you begin the assignment:</p>
        <ul>
          <li>Identify what part of your code modifies shared data; that&apos;s your critical section.</li>
          <li>Use a semaphore to wrap that section (acquire before, release after).</li>
          <li>Think about edge cases like variable underflow (value going negative).</li>
          <li>Remember, both threads can run concurrently, your semaphore ensures they don&apos;t collide.</li>
          <li>Finally, test with different numbers of increment/decrement operations to verify synchronization.</li>
        </ul>

        <h3>Hints for Implementation</h3>
        <ul>
          <li>Use one global semaphore (initialized to 1) for mutual exclusion.</li>
          <li>Each thread should perform its task inside a try/finally or equivalent block to always release the semaphore.</li>
          <li>For realistic simulation, include a small sleep() delay so threads interleave naturally.</li>
          <li>Print updates to show which thread acted and the current variable value.</li>
        </ul>

        <WorkingAnimation />
        <p className="text-sm text-gray-600 text-center">Threads alternate between working (in the critical section) and waiting (outside it). This visualizes perfect semaphore-based coordination.</p>

        <h3>Next Steps</h3>
        <p>Now that you understand how semaphores control access, you&apos;ll implement your logic for ThreadIncrement and ThreadDecrement in the assignment section. Think carefully, write the code, test different inputs, and verify that only one thread runs its critical section at a time.</p>

        <div className="bg-gray-100 p-4 rounded-lg my-4">
          <h4 className="font-semibold">Sample Input:</h4>
          <pre className="mt-2 text-sm">
Initial value of the shared variable: 5
Number of increment operations for ThreadIncrement: 3
Number of decrement operations for ThreadDecrement: 2
          </pre>

          <h4 className="font-semibold mt-4">Sample Output:</h4>
          <pre className="mt-2 text-sm">
ThreadIncrement: Incremented shared variable to 6
ThreadDecrement: Decremented shared variable to 5
ThreadIncrement: Incremented shared variable to 6
ThreadDecrement: Decremented shared variable to 5
ThreadIncrement: Incremented shared variable to 6
          </pre>
        </div>

        <h3>Constraints:</h3>
        <ul>
          <li>The initial value of the shared variable is an integer.</li>
          <li>The number of increment and decrement operations are positive integers.</li>
          <li>Implement semaphores for synchronization.</li>
          <li>Ensure that the shared variable is not accessed simultaneously by both threads.</li>
          <li>The shared variable cannot go below 0 during decrement operations.</li>
        </ul>

        <p className="mt-4">Try to come up with a basic logic before starting the assignment. You will be allowed to write code for this assignment using C++, Python and Java.</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp5nTnzjvc0FtwaGXwLavPGjzs4bjpMPQoXg&s" alt="" />
      </section>
    </div>
  );
};

export default Module3_8;
