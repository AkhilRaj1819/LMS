'use client';
import React, { useState, useEffect } from 'react';

const PreventionAnimation = () => {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="border-4 border-emerald-500 bg-emerald-50 rounded-2xl px-8 py-6 text-center">
          <p className="font-bold text-gray-800 text-lg">Printer (Shared)</p>
        </div>
        <div className="border-4 border-emerald-500 bg-emerald-50 rounded-2xl px-8 py-6 text-center">
          <p className="font-bold text-gray-800 text-lg">Scanner (Shared)</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8">
        <div className="border-4 border-blue-500 bg-blue-50 rounded-2xl px-8 py-6 text-center">
          <p className="font-bold text-gray-800 text-lg">Process P1</p>
        </div>
        <div className="border-4 border-orange-500 bg-orange-50 rounded-2xl px-8 py-6 text-center">
          <p className="font-bold text-gray-800 text-lg">Process P2</p>
        </div>
      </div>
    </div>
  );
};

const AvoidanceAnimation = () => {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="text-center mb-6">
        <div className="inline-block border-4 border-blue-500 bg-blue-50 px-8 py-4 rounded-2xl">
          <p className="font-bold text-gray-800 text-lg">DATABASE SERVER (Max Connections: 5)</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="border-4 border-emerald-500 bg-emerald-50 px-6 py-3 rounded-2xl font-bold text-gray-800">User A</div>
        <div className="border-4 border-emerald-500 bg-emerald-50 px-6 py-3 rounded-2xl font-bold text-gray-800">User B</div>
        <div className="border-4 border-emerald-500 bg-emerald-50 px-6 py-3 rounded-2xl font-bold text-gray-800">User C</div>
        <div className={`border-4 px-6 py-3 rounded-2xl font-bold transition-all duration-500 ${state > 0 ? 'border-emerald-500 bg-emerald-50 text-gray-800' : 'border-gray-400 bg-gray-100 text-gray-500'}`}>User D</div>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800">{state === 0 ? 'User D → Requests Connection' : state === 1 ? 'Server Check: Safe State ✓' : 'Request Approved — System Remains Safe'}</p>
      </div>
    </div>
  );
};

const IgnoringAnimation = () => {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: 'System Running Normally', border: 'border-emerald-500', bg: 'bg-emerald-50' },
    { title: 'Deadlock Occurs', border: 'border-red-500', bg: 'bg-red-50' },
    { title: 'System Ignores Deadlock', border: 'border-orange-500', bg: 'bg-orange-50' },
    { title: 'Manual Restart Needed', border: 'border-gray-500', bg: 'bg-gray-100' }
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="text-center">
        <div className={`inline-block border-4 ${steps[step].border} ${steps[step].bg} px-8 py-4 rounded-2xl font-bold text-gray-800 text-lg transition-all duration-500`}>
          {steps[step].title}
        </div>
      </div>
    </div>
  );
};

const TerminationAnimation = () => {
  const [terminated, setTerminated] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTerminated(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className="border-4 border-red-500 bg-red-50 px-6 py-3 rounded-2xl font-bold text-gray-800">P1 – Waiting</div>
        <div className="border-4 border-red-500 bg-red-50 px-6 py-3 rounded-2xl font-bold text-gray-800">P2 – Waiting</div>
        <div className={`border-4 px-6 py-3 rounded-2xl font-bold transition-all duration-500 ${terminated ? 'border-gray-400 bg-gray-100 text-gray-400 line-through' : 'border-red-500 bg-red-50 text-gray-800'}`}>P3 – Waiting</div>
      </div>
      <p className="text-center mt-4 font-semibold text-gray-800">{terminated ? 'Process P3 Terminated ✓' : 'All Processes Deadlocked'}</p>
    </div>
  );
};

const PreemptionAnimation = () => {
  const [preempted, setPreempted] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPreempted(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800">P1</div>
          <p className="text-gray-700 text-sm mt-2 font-semibold">{preempted ? 'Lost Printer' : 'Holds Printer'}</p>
        </div>
        <div className={`border-4 rounded-2xl w-24 h-24 flex items-center justify-center font-bold transition-all duration-500 ${preempted ? 'border-emerald-500 bg-emerald-50 text-gray-800' : 'border-gray-400 bg-gray-100 text-gray-500'}`}>Printer</div>
        <div className="text-center">
          <div className="border-4 border-purple-500 bg-purple-50 px-6 py-3 rounded-2xl font-bold text-gray-800">P2</div>
          <p className="text-gray-700 text-sm mt-2 font-semibold">{preempted ? 'Gets Printer' : 'Needs Printer'}</p>
        </div>
      </div>
    </div>
  );
};

const RollbackAnimation = () => {
  const [rolled, setRolled] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRolled(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className={`border-4 px-8 py-4 rounded-2xl font-bold transition-all duration-500 ${rolled ? 'border-orange-500 bg-orange-50' : 'border-blue-500 bg-blue-50'} text-gray-800`}>
          Transaction T1<br/>
          <span className="text-sm">{rolled ? 'Rolled back to Step 5' : 'At Step 9'}</span>
        </div>
      </div>
    </div>
  );
};

const Module3_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.11</div>
        <div className="lesson-title-main">
          <h1>Deadlock Handling Methods and Recovery</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Before we learn how to handle deadlocks, consider this question:</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">If the system forcibly takes away a resource from a process to break a circular wait, which deadlock handling strategy is being used?</p>
        </div>
        <p>This lesson will guide you through all deadlock handling methods with examples, visuals, and clear continuity between concepts.</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzc2bDlrOTZ1aXR2dHdla2NxazJjbGV0NWgzeXdlOXlkYTFjOXo1NiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/QDyW8tJ7zGaVfL5xv5/giphy.gif" alt="" />

        <h3>Introduction to Deadlock Handling</h3>
        <p>Deadlock handling ensures that a system remains stable even when multiple processes compete for resources. There are four main strategies used in operating systems: Prevention, Avoidance, Detection, and Recovery. To understand these methods deeply, we will explore:</p>
        <ul>
          <li>Why deadlocks happen</li>
          <li>What each method does</li>
          <li>How operating systems apply these techniques in practice</li>
        </ul>

        <h3>Deadlock Handling Methods</h3>
        <p>Handling deadlocks effectively is crucial for ensuring system stability and maintaining operational efficiency. In this section, we explore the four primary strategies for deadlock handling: Prevention, Avoidance, Detection, and Ignoring deadlocks. Each method is detailed to provide learners with comprehensive insights and practical knowledge.</p>

        <h3>1. Deadlock Prevention</h3>
        <p>Deadlock prevention involves proactively designing the system to ensure that at least one of the necessary conditions for a deadlock does not occur. This method changes system behaviour to avoid situations where deadlocks might arise, focusing on redesigning resource allocation protocols.</p>
        <p>Deadlock Prevention modifies how resources are acquired so that at least one Coffman condition never occurs. It is a design-level change to ensure deadlocks never form.</p>

        <div className="grid grid-cols-2 gap-4 my-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded text-sm">Mutual Exclusion</div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded text-sm">Hold and Wait</div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded text-sm">No Preemption</div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded text-sm">Circular Wait</div>
        </div>

        <h4>Techniques:</h4>
        <ul>
          <li><strong>Eliminate Mutual Exclusion:</strong> Modify resources to be shareable wherever possible. For example, read-only files can be accessed by multiple processes simultaneously without conflict. This reduces the chance of processes blocking each other over exclusive resources.</li>
          <li><strong>Eliminate Hold and Wait:</strong> Require processes to request all required resources simultaneously or release currently held resources before requesting new ones. For instance, a program might request all necessary memory blocks upfront instead of sequentially.</li>
          <li><strong>Allow Preemption:</strong> Design the system to forcibly take resources from processes and reallocate them when necessary. For example, the operating system might pause a low-priority task and reclaim its resources for a critical process.</li>
          <li><strong>Eliminate Circular Wait:</strong> Impose a strict ordering of resource allocation to prevent circular dependencies. For instance, if resource A must be acquired before resource B, no process can acquire B without first acquiring A.</li>
        </ul>

        <h4>Example:</h4>
        <p>Both processes can use the Printer and Scanner at the same time (shared resources), so no one blocks the other.</p>

        <PreventionAnimation />

        <h4>Advantages:</h4>
        <ul>
          <li>Proactively avoids deadlocks.</li>
          <li>Ensures smooth operation without interruptions.</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>May lead to inefficient resource utilization.</li>
          <li>Imposing ordering can complicate system design.</li>
        </ul>

        <p>Now that prevention focuses on avoiding conditions that lead to deadlocks, let us move to a smarter strategy that evaluates resource requests dynamically: Deadlock Avoidance.</p>

        <h3>2. Deadlock Avoidance</h3>
        <p>Deadlock avoidance uses real-time algorithms to evaluate resource allocation requests and ensure the system remains in a "safe state," where it can always proceed without deadlocks. Unlike prevention, avoidance dynamically assesses each situation before granting resources.</p>

        <h4>Key Algorithm:</h4>
        <p><strong>Banker&apos;s Algorithm:</strong> This algorithm checks if granting a resource request will leave the system in a safe state. It compares available resources to the maximum needs of all processes.</p>

        <h4>Example:</h4>
        <p>The database server checks whether granting a new connection keeps the system in a safe state. If not safe, it delays the request to avoid deadlock.</p>

        <AvoidanceAnimation />

        <h4>Advantages:</h4>
        <ul>
          <li>Prevents deadlocks dynamically.</li>
          <li>Optimizes resource allocation by making decisions in real-time.</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>Requires precise knowledge of resource requirements.</li>
          <li>Increases computational overhead.</li>
        </ul>

        <p>Avoidance works well when the system can anticipate resource needs. But what if the system does not prevent or avoid deadlocks at all? Some OSes simply ignore the problem altogether.</p>

        <h3>Ignoring Deadlocks</h3>
        <p>Some systems, particularly those with a low likelihood of deadlocks or where recovery mechanisms are expensive, choose to ignore deadlocks altogether. This approach assumes that deadlocks are so rare that handling them explicitly is unnecessary.</p>

        <h4>How It Works:</h4>
        <p>The system operates as usual without any checks for deadlocks. If a deadlock occurs, manual intervention or a system reboot may be required.</p>

        <IgnoringAnimation />

        <h4>Example:</h4>
        <p>In some embedded systems, where processes are simple and predictable, ignoring deadlocks might be a viable strategy.</p>

        <h4>Advantages:</h4>
        <ul>
          <li>Simplifies system design.</li>
          <li>No overhead from prevention or detection mechanisms.</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>Deadlocks can cause indefinite system halts.</li>
          <li>Suitable only for specific scenarios.</li>
        </ul>

        <h3>Deadlock Recovery</h3>
        <p>Deadlocks can significantly impact system performance, and recovering from them is a critical skill for ensuring system reliability. In this section, we explore effective methods to recover from deadlocks, providing practical insights and clear explanations to enhance your understanding.</p>

        <h3>1. Process Termination</h3>
        <p>One of the most straightforward ways to recover from a deadlock is by terminating processes involved in the deadlock.</p>

        <TerminationAnimation />

        <h4>Approaches:</h4>
        <ul>
          <li><strong>Terminate all processes involved:</strong> This brute-force method removes the deadlock entirely but may result in significant loss of work and data.</li>
          <li><strong>Terminate processes selectively:</strong> Processes are terminated one by one based on certain criteria, such as priority, runtime, or resource usage, until the deadlock is resolved.</li>
        </ul>

        <h4>Example:</h4>
        <p>Imagine a system with three processes competing for resources. If terminating one low-priority process frees up the resources to continue other processes, the deadlock is resolved efficiently.</p>

        <h4>Advantages:</h4>
        <ul>
          <li>Easy to implement.</li>
          <li>Effective in critical situations where recovery speed is essential.</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>Loss of progress and potential data inconsistency.</li>
          <li>Not suitable for high-priority or critical processes.</li>
        </ul>

        <h3>2. Resource Preemption</h3>
        <p>In this method, resources are forcibly taken from processes to resolve the deadlock.</p>

        <PreemptionAnimation />

        <h4>Steps:</h4>
        <ul>
          <li><strong>Select a victim process:</strong> Identify which process will temporarily lose its resources.</li>
          <li><strong>Rollback if necessary:</strong> Ensure the victim process can resume execution later without significant impact.</li>
          <li><strong>Prevent starvation:</strong> Use policies to ensure the same process isn&apos;t repeatedly chosen as the victim.</li>
        </ul>

        <h4>Example:</h4>
        <p>In a printer-sharing scenario, if Process A holds the printer but is waiting for the scanner, the system can preempt the printer from Process A and allocate it to Process B, resolving the deadlock.</p>

        <h4>Advantages:</h4>
        <ul>
          <li>Avoids terminating processes.</li>
          <li>Suitable for systems where processes can be rolled back safely.</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>Resource inconsistencies may arise.</li>
          <li>Rollbacks require additional system overhead.</li>
        </ul>

        <h3>3. Rollback</h3>
        <p>Rollback involves reverting one or more processes to a previously saved state (checkpoint) to break the deadlock.</p>

        <RollbackAnimation />

        <h4>How it Works:</h4>
        <p>Processes periodically save their progress (checkpointing). When a deadlock occurs, one or more processes roll back to their last checkpoint, freeing up resources and allowing other processes to proceed.</p>

        <h4>Example:</h4>
        <p>In a database system, if two transactions are deadlocked, rolling back one transaction to its previous state allows the other to complete successfully.</p>

        <h4>Advantages:</h4>
        <ul>
          <li>Minimal disruption compared to termination.</li>
          <li>Ensures processes can continue execution from a safe point.</li>
        </ul>

        <h4>Disadvantages:</h4>
        <ul>
          <li>Requires frequent checkpointing.</li>
          <li>Can be resource-intensive.</li>
        </ul>

        <h3>4. Combination of Methods</h3>
        <p>In many real-world systems, a combination of termination, preemption, and rollback is used. This hybrid approach ensures that the most suitable recovery strategy is applied based on the specific scenario.</p>

        <div className="flex items-center justify-center gap-4 my-6">
          <div className="border-4 border-red-500 bg-red-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Terminate Process</div>
          <div className="border-4 border-orange-500 bg-orange-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Preempt Resource</div>
          <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Rollback State</div>
        </div>

        <p>By understanding and applying these methods, systems can effectively recover from deadlocks, ensuring reliability and minimal impact on performance.</p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20system%2Fdeadlock%202.png" alt="" />

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://afteracademy.com/article/what-are-deadlock-handling-techniques-in-operating-system" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">What are Deadlock handling techniques in Operating System?</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/handling-deadlocks/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Handling Deadlocks - GeeksforGeeks</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/recovery-from-deadlock-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Recovery from Deadlock in Operating System - GeeksforGeeks</a></li>
        </ul>

        <p className="mt-4">Happy Learning ;)</p>
      </section>
    </div>
  );
};

export default Module3_11;
