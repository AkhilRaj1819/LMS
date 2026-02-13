'use client';
import React, { useState, useEffect } from 'react';

const CPULockAnimation = () => {
  const [locked, setLocked] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLocked(true);
      setTimeout(() => setLocked(false), 800);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-16">
        <div className="bg-blue-500 rounded-full w-32 h-32 flex items-center justify-center text-white font-bold text-xl">CPU</div>
        <div className={`h-1 w-24 transition-colors duration-300 ${locked ? 'bg-red-500' : 'bg-blue-400'}`} />
        <div className={`rounded-full w-32 h-32 flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 ${locked ? 'bg-red-500' : 'bg-emerald-500'}`}>LOCK</div>
      </div>
    </div>
  );
};

const LockAnimation = () => {
  const [step, setStep] = useState(0);
  const processes = ['P1', 'P2', 'P3'];
  const states = ['UNLOCKED', 'LOCKED', 'UNLOCKED'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8 relative">
        {[0, 1, 2].map(i => {
          const pos = (i - step + 3) % 3;
          return (
            <div key={i} className={`absolute transition-all duration-500 ${pos === 0 ? 'left-16' : pos === 1 ? 'left-1/2 -translate-x-1/2' : 'right-16'}`}>
              {pos === 1 ? (
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg w-24 h-24 flex items-center justify-center text-white font-bold">{processes[(step + i) % 3]}</div>
                  <div className={`absolute -top-4 -right-4 ${states[step] === 'LOCKED' ? 'bg-red-500' : 'bg-emerald-500'} rounded-full w-32 h-32 flex items-center justify-center text-white font-bold`}>{states[step]}</div>
                </div>
              ) : pos === 2 ? (
                <div className={`${states[step] === 'UNLOCKED' && step === 2 ? 'bg-emerald-500' : 'bg-gray-800'} rounded-lg w-24 h-24 flex items-center justify-center text-white font-bold`}>{processes[(step + i) % 3]}</div>
              ) : (
                <div className="bg-gray-800 rounded-lg w-24 h-24 flex items-center justify-center text-white font-bold">{processes[(step + i) % 3]}</div>
              )}
            </div>
          );
        })}
        <div className="h-24 w-full" />
      </div>
    </div>
  );
};

const Module3_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.3</div>
        <div className="lesson-title-main">
          <h1>Test &amp; Set Lock</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Have you ever wondered how multiple programs running at the same time like your music player, web browser, and file downloads avoid interfering with each other when accessing the same data or memory?</p>
        <p>That&apos;s exactly where synchronization mechanisms like the Test &amp; Set Lock (TSL) come in.</p>

        <p>When multiple processes or threads share a common resource (like a variable, memory block, or file), it&apos;s important to ensure that only one process accesses it at a time. Without such control, the system may face race conditions, leading to incorrect or unpredictable results.</p>
        <p>The Test &amp; Set Lock is one of the simplest yet most effective hardware-supported mechanisms used to achieve mutual exclusion, allowing only one process to enter its critical section while others wait.</p>

        <h3>Understanding Test &amp; Set Lock</h3>
        <ul>
          <li>The Test &amp; Set Lock allows a process to check if a resource is free and, if so, immediately claim it.</li>
          <li>If the resource is free, a process acquires the lock and enters the critical section.</li>
          <li>If the resource is locked, other processes wait until it is released.</li>
          <li>The lock is an atomic hardware-level operation, ensuring mutual exclusion.</li>
        </ul>
        <p>Imagine a single doorway: one person enters while others line up. The doorway (lock) toggles between free and occupied.</p>

        <LockAnimation />
        <p className="text-sm text-gray-600">P2 approach the lock; when a process reaches the center the lock turns RED – LOCKED, then after a short hold it returns to GREEN – UNLOCKED.</p>

        <h3>Watch and Learn</h3>
        <p>🎥 <strong>Video Resource:</strong> Watch the video below to visually understand how Test &amp; Set Lock operates and why it&apos;s important in concurrent programming:</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/5oZYS5dTrmk" title="Test and Set Lock" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        <h3>How It Helps in Mutual Exclusion</h3>
        <p>Imagine a single seat in a library that many students want to sit in. Only one student can occupy it at a time, while others must wait for their turn.</p>
        <ul>
          <li>The first student checks if it&apos;s free and takes the seat.</li>
          <li>The seat is now locked (occupied).</li>
          <li>The next student arrives, sees it&apos;s taken, and waits.</li>
          <li>Once the first student leaves, the seat becomes free again.</li>
        </ul>
        <p>Just like this, a Test &amp; Set Lock ensures that one process uses the resource at a time, maintaining order and data consistency.</p>

        <div className="flex items-center justify-center gap-4 my-6">
          <p className="font-semibold">Seat</p>
          <div className="border-2 border-blue-500 px-3 py-1 rounded text-sm"><strong>S1</strong></div>
          <div className="border-2 border-green-500 px-3 py-1 rounded text-sm"><strong>S2</strong></div>
          <div className="border-2 border-purple-500 px-3 py-1 rounded text-sm"><strong>S3</strong></div>
        </div>
        <p className="text-sm text-gray-600">The green circle represents the free seat. Each student (process) moves forward, occupies it for a while (red = locked), then leaves it free again.</p>

        <h3>Hardware-Level Support</h3>
        <p>The power of Test &amp; Set Lock lies in the fact that it&apos;s supported directly by the hardware. This means the CPU itself performs the check and the lock-setting in one unbreakable operation.</p>
        <p>This hardware-level support makes synchronization much faster than if it were done purely by software. It also prevents race conditions, where two or more processes might try to modify shared data simultaneously.</p>
        <p>Think of it like a security guard (the CPU) who instantly locks a door in one swift motion — no one else can interfere during that exact moment.</p>

        <CPULockAnimation />
        <p className="text-center text-blue-600 font-medium mt-4">The CPU (left) sends atomic signals to the Lock (right).</p>
        <p className="text-center text-red-600 font-medium">Lock turns red briefly — showing how hardware operates instantly, preventing interference.</p>

        <h3>Advantages of Test &amp; Set Lock</h3>
        <p>The Test &amp; Set Lock provides several key benefits that make it useful in operating systems and multiprogramming environments:</p>
        <ul>
          <li><strong>Simplicity:</strong> Easy to understand and implement.</li>
          <li><strong>Speed:</strong> Uses a single hardware instruction, making it very fast.</li>
          <li><strong>Ensures Mutual Exclusion:</strong> Only one process can enter the critical section at a time.</li>
          <li><strong>Reliable:</strong> Works even when multiple processes compete for the same resource.</li>
          <li><strong>Foundation for Other Locks:</strong> Serves as the basis for advanced synchronization mechanisms like semaphores and mutexes.</li>
        </ul>

        <h3>Limitations of Test &amp; Set Lock</h3>
        <p>While effective, the Test &amp; Set Lock also has certain limitations:</p>
        <div className="space-y-4 my-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
            <h4 className="font-semibold">Busy Waiting:</h4>
            <p>A process that fails to acquire the lock keeps checking repeatedly until it becomes free, wasting CPU time when the resource remains locked for long durations.</p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h4 className="font-semibold">No Fairness Guarantee:</h4>
            <p>There is no defined order in which waiting processes acquire the lock. This can lead to starvation, where some processes are delayed indefinitely.</p>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="font-semibold">Performance Overhead in Multiprocessors:</h4>
            <p>In systems with multiple processors, continuous testing of the same lock variable can cause high memory traffic and reduce overall efficiency.</p>
          </div>
        </div>
        <p>Despite these drawbacks, the Test &amp; Set Lock remains a fundamental concept in synchronization, forming the basis for understanding more efficient and fair locking mechanisms.</p>

        <h3>Real-World Analogy</h3>
        <p>Consider a public restroom key shared among employees in a small office:</p>
        <ul>
          <li>When the restroom is free, the key hangs on a hook.</li>
          <li>The first employee takes the key, effectively locking it for others.</li>
          <li>Other employees who arrive later see that the key is gone and must wait.</li>
          <li>Once the first employee finishes, they return the key, making it available again.</li>
        </ul>
        <p>This simple act of taking and returning the key mirrors the behavior of a Test &amp; Set Lock — ensuring exclusive access and preventing conflicts when multiple users share the same resource.</p>

        <h3>Deeper Understanding</h3>
        <p>The Test &amp; Set Lock plays a vital role in hardware synchronization, where coordination must happen at lightning speed. It&apos;s commonly used in:</p>
        <ul>
          <li><strong>Kernel synchronization</strong>, where system-level processes must share critical data safely.</li>
          <li><strong>Thread management</strong>, ensuring orderly execution of multiple threads.</li>
          <li><strong>Resource allocation</strong>, to prevent multiple entities from using the same resource simultaneously.</li>
        </ul>
        <p>In modern systems, this mechanism forms the foundation for more sophisticated techniques that reduce busy waiting and improve fairness.</p>

        <h3>Additional Learning (Optional)</h3>
        <p>If you want to explore more about how Test &amp; Set Lock works at the hardware level, check out these helpful resources:</p>
        <ul>
          <li><a href="https://medium.com/@saqlain9696382/hardware-synchronization-test-and-set-and-compare-and-swap-instruction-synchronization-87c9d15c6faa" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Hardware Synchronization (Test_and_Set() Instruction) | Synchronization | Operating Systems | by Saqlain Amin | Medium</a></li>
          <li><a href="https://galaxy.ai/youtube-summarizer/understanding-test-and-set-instruction-in-operating-systems-for-process-synchronization-9hzoO4hBXFw" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Understanding Test and Set Instruction in Operating Systems for Process Synchronization | Galaxy.ai</a></li>
          <li><a href="https://galaxy.ai/youtube-summarizer/understanding-test-and-set-instruction-in-operating-systems-for-process-synchronization-9hzoO4hBXFw" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Hardware Synchronization Algorithms: Unlock and Lock, Test and Set, Swap – GeeksforGeeks</a></li>
        </ul>
        <p>And with that, we come to the end of this lesson. Happy learning!</p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/activity_team.gif" alt="" />
      </section>
    </div>
  );
};

export default Module3_3;
