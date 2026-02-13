'use client';
import React, { useState, useEffect } from 'react';

const ProducerConsumerAnimation = () => {
  const [buffer, setBuffer] = useState([0, 0, 0, 0, 0]);
  const [pos, setPos] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPos(prev => (prev + 1) % 5);
      setBuffer(prev => prev.map((v, i) => i === pos ? 1 : v === 1 ? 0 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [pos]);

  return (
    <div className="bg-gray-900 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className="text-white font-bold">Producer</div>
        <div className="flex gap-2">
          {buffer.map((v, i) => (
            <div key={i} className={`w-16 h-16 rounded border-2 ${v ? 'bg-red-500 border-red-600' : 'bg-gray-700 border-gray-600'} transition-all duration-300`} />
          ))}
        </div>
        <div className="text-white font-bold">Consumer</div>
      </div>
    </div>
  );
};

const ReadersWritersAnimation = () => {
  const [readers, setReaders] = useState([1, 1, 1]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setReaders(prev => prev.map(() => Math.random() > 0.5 ? 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        {readers.map((active, i) => (
          <div key={i} className={`w-16 h-16 rounded-lg ${active ? 'bg-blue-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold transition-all duration-300`}>
            R{i + 1}
          </div>
        ))}
        <div className="w-24 h-24 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">Data</div>
      </div>
    </div>
  );
};

const DiningPhilosophersAnimation = () => {
  const [eating, setEating] = useState([0, 0, 0, 0, 0]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const next = Math.floor(Math.random() * 5);
      setEating(prev => prev.map((v, i) => i === next ? 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl p-8 my-6">
      <div className="relative w-64 h-64 mx-auto">
        {eating.map((state, i) => {
          const angle = (i * 72 - 90) * Math.PI / 180;
          const x = 50 + 40 * Math.cos(angle);
          const y = 50 + 40 * Math.sin(angle);
          return (
            <div key={i} className={`absolute w-12 h-12 rounded-full ${state ? 'bg-orange-500' : 'bg-yellow-200'} flex items-center justify-center font-bold text-sm transition-all duration-300`} style={{left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)'}}>
              P{i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Module3_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.5</div>
        <div className="lesson-title-main">
          <h1>Classic Problems of Process Synchronization</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>What happens when several processes try to use the same resource at the same time like multiple customers trying to withdraw money from a single bank account or multiple threads accessing the same file? How can the system ensure that each process gets a fair turn without creating chaos or corruption of data?</p>
        <img src="https://www.icegif.com/wp-content/uploads/2023/08/icegif-224.gif" alt="" />
        <p>To answer this, we study three of the most important synchronization challenges the Producer–Consumer, Readers–Writers, and Dining Philosophers problems. These classic problems help us understand how operating systems maintain balance, fairness, and coordination among competing processes.</p>

        <h3>The Bounded buffer Problem</h3>
        <p>The Bounded Buffer Problem also known as the Producer–Consumer Problem — models a scenario where two processes share a limited buffer space:</p>
        <ul>
          <li><strong>Producer:</strong> Generates data and adds it to the buffer.</li>
          <li><strong>Consumer:</strong> Takes data from the buffer for processing.</li>
        </ul>
        <p>The challenge lies in ensuring that:</p>
        <ul>
          <li>The producer doesn&apos;t add data when the buffer is full.</li>
          <li>The consumer doesn&apos;t try to remove data when the buffer is empty.</li>
        </ul>
        <p>Synchronization is needed so both operate smoothly without overwriting or reading invalid data.</p>

        <h3>Real-World Example</h3>
        <p>Imagine a bakery with a counter that can hold only five loaves of bread at a time. The baker (producer) keeps baking and placing loaves on the counter, while customers (consumers) come and take them away. If the counter is full, the baker must wait. If the counter is empty, the customer must wait. This is the exact scenario the Producer–Consumer problem represents.</p>

        <ProducerConsumerAnimation />
        <p className="text-sm text-gray-600 text-center">The moving red dot represents an item being produced and consumed in the buffer continuously.</p>

        <h3>Watch and Learn</h3>
        <p>Watch the video below to understand the reason behind bounded buffer Problem.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/Qx3P2wazwI0" title="The Bounded Buffer Problem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Solution Using Semaphores</h3>
        <p>We use three synchronization variables:</p>
        <ul>
          <li><strong>Mutex:</strong> Ensures that only one process modifies the buffer at a time.</li>
          <li><strong>Empty:</strong> Counts empty slots in the buffer (initialized to buffer size).</li>
          <li><strong>Full:</strong> Counts filled slots (initialized to 0).</li>
        </ul>

        <details className="bg-blue-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Practice Problem 1 – Bounded Buffer</summary>
          <p className="mt-2">A buffer can hold a maximum of 6 items. Initially, it is empty. The producer adds 4 items, and the consumer removes 2. Find the current values of full and empty.</p>
          <p className="mt-2 font-semibold">Solution:</p>
          <ul>
            <li>Initial: full = 0, empty = 6</li>
            <li>After 4 produce operations → full = 4, empty = 2</li>
            <li>After 2 consume operations → full = 2, empty = 4</li>
          </ul>
          <p className="mt-2 font-semibold">Final Answer: full = 2, empty = 4</p>
        </details>

        <h3>The Readers–Writers Problem</h3>
        <p>The Readers–Writers Problem addresses synchronization between processes that read and write shared data. Multiple readers can read simultaneously, but writers require exclusive access.</p>

        <ReadersWritersAnimation />
        <p className="text-sm text-gray-600 text-center">Blue blocks represent multiple readers accessing shared data concurrently — showing that many readers can read at the same time without interference.</p>

        <h3>Key Rules</h3>
        <ul>
          <li>If a writer is writing, no reader can read.</li>
          <li>If one or more readers are reading, no writer can write.</li>
          <li>Readers should not starve writers, and vice versa.</li>
        </ul>

        <h3>Solution Using Semaphores</h3>
        <p>We use:</p>
        <ul>
          <li><strong>Mutex:</strong> Protects the reader count variable.</li>
          <li><strong>Write:</strong> Ensures mutual exclusion for writers.</li>
        </ul>

        <details className="bg-green-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Practice Problem 2 – Readers–Writers</summary>
          <p className="mt-2">Assume there are 3 readers and 2 writers. Initially, one writer is writing. What happens if all readers arrive while writing is in progress?</p>
          <p className="mt-2 font-semibold">Solution:</p>
          <ul>
            <li>When a writer is active, write = 0.</li>
            <li>Thus, any incoming reader must wait() because writers have priority.</li>
            <li>Once the writer finishes and signals, all readers can read together.</li>
            <li>If no further writers arrive, readers execute concurrently.</li>
          </ul>
          <p className="mt-2 font-semibold">Conclusion: Readers will wait until the current writer finishes, preventing data inconsistency.</p>
        </details>

        <h3>Watch and Learn</h3>
        <p>Watch the video below to understand the reason behind readers writers problem and a possible solution.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/p2XDhW5INOo" title="The Readers Writers Problem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>The Dining Philosophers Problem</h3>
        <p>The Dining Philosophers Problem is a model for resource sharing and deadlock avoidance. Five philosophers sit at a round table with five forks. Each philosopher must pick up two forks one on the left and one on the right to eat. If all pick up their left fork at once, none can eat, resulting in a deadlock.</p>

        <DiningPhilosophersAnimation />
        <p className="text-sm text-gray-600 text-center">Each circle represents a philosopher alternately "thinking" (light yellow) and "eating" (orange) — showing coordination to prevent deadlock.</p>

        <h3>Possible Solutions</h3>
        <ul>
          <li><strong>Resource Hierarchy:</strong> Number the forks and ensure philosophers pick them up in a specific order (e.g., lower-numbered fork first).</li>
          <li><strong>Asymmetric Solution:</strong> Odd philosophers pick up the left fork first; even philosophers pick up the right fork first.</li>
          <li><strong>Semaphore Approach:</strong> Use a semaphore to limit the number of philosophers eating simultaneously to 4, ensuring one fork remains available.</li>
        </ul>

        <details className="bg-yellow-50 p-4 rounded-lg my-4">
          <summary className="font-semibold cursor-pointer">Practice Problem 3 – Dining Philosophers</summary>
          <p className="mt-2">Suppose all five philosophers attempt to eat simultaneously. Explain how a deadlock occurs and how it can be avoided.</p>
          <p className="mt-2 font-semibold">Solution:</p>
          <p className="mt-2"><strong>Deadlock Scenario:</strong></p>
          <ul>
            <li>Each philosopher picks up their left fork, leaving no forks available on the right.</li>
            <li>Now all are waiting indefinitely, causing a circular wait condition.</li>
          </ul>
          <p className="mt-2"><strong>Solution Approach:</strong></p>
          <ul>
            <li>Implement an asymmetric rule — philosophers 1, 3, and 5 pick up their right fork first, while 2 and 4 pick up their left.</li>
            <li>This breaks the cycle, ensuring at least one philosopher can always eat.</li>
          </ul>
          <p className="mt-2 font-semibold">Result: Deadlock is prevented; resource utilization is improved.</p>
        </details>

        <h3>Watch and Learn</h3>
        <p>Check out the video below to acquaint yourself with the Dining Philosophers Problem.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/FYUi-u7UWgw" title="The Dining Philosophers Problem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Summary</h3>
        <ul>
          <li><strong>Producer–Consumer:</strong> Focuses on balancing production and consumption rates using semaphores.</li>
          <li><strong>Readers–Writers:</strong> Deals with sharing data between concurrent readers and exclusive writers.</li>
          <li><strong>Dining Philosophers:</strong> Models deadlock prevention and resource management in circular systems.</li>
        </ul>
        <p>All three help in understanding race conditions, fairness, and deadlock prevention.</p>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/readers-writers-problem-set-1-introduction-and-readers-preference-solution/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Readers-Writers Problem | GeeksforGeeks</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/dining-philosopher-problem-using-semaphores/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dining Philosopher Problem Using Semaphores - GeeksforGeeks</a></li>
        </ul>
        <p>That&apos;s all about the classic problems of process synchronization. Let&apos;s move to the next lesson now!</p>
        <img src="https://cdn.pixabay.com/animation/2023/02/01/12/10/12-10-03-346_512.gif" alt="" />
      </section>
    </div>
  );
};

export default Module3_5;
