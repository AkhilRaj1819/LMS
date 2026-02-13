'use client';
import React from 'react';

const Module3_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.12</div>
        <div className="lesson-title-main">
          <h1>Deadlock Avoidance</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Imagine a system where multiple processes constantly request memory, CPU cycles, and I/O devices. If these resources are allocated blindly, the system might enter a state where processes wait forever. To prevent this, we use Deadlock Avoidance, a strategy that predicts resource allocation outcomes before making decisions.</p>
        <p>Unlike deadlock prevention, which restricts how processes request resources, avoidance carefully evaluates every request and grants it only if the system remains in a safe state.</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnU1YWY4bDk2cmtydG9kOHdhaXZ3YnNyMmhxZnZjZHVvM2J4ZjJnbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/gOEpIcmsNf1lDM79LG/giphy.gif" alt="" />

        <h3>What is Deadlock Avoidance?</h3>
        <p>Deadlock avoidance ensures the operating system never enters an unsafe state. Instead of blocking conditions entirely (as in prevention), the OS performs real-time checks to determine whether granting a resource request might lead to a deadlock later.</p>
        <p>This means the OS behaves intelligently by predicting future resource usage patterns before making decisions. The goal is not to prevent all risky actions, but to ensure that granting any request will not compromise the system&apos;s ability to complete all processes.</p>

        <h3>Safe State</h3>
        <p>A system is in a safe state if there exists at least one sequence of process execution such that every process can obtain the resources it needs and finish execution. This is known as a safe sequence.</p>
        <p>A safe state guarantees that no matter the order of execution, the system can always avoid a deadlock by choosing appropriate scheduling decisions.</p>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded my-4">
          <p className="font-semibold">Example of Safe Sequence: P2 → P3 → P1</p>
        </div>

        <h3>Unsafe State</h3>
        <p>A system is in an unsafe state if no safe sequence exists. An unsafe state does not always result in a deadlock but has the potential to move into one. Hence, the OS avoids unsafe states altogether.</p>
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded my-4">
          <p className="font-semibold">Unsafe State = System might still run, but there is at least one path leading to deadlock.</p>
        </div>

        <h3>Why Safe vs Unsafe Matters</h3>
        <p>The reason unsafe states are avoided is because resource allocation decisions made in unsafe states cannot guarantee future completion of all processes. Even if no deadlock exists now, one may occur with the next request.</p>
        <p>Think of a system like a narrow bridge. If too many cars enter without careful planning, two cars may get stuck facing each other. A safe state ensures that enough space always remains to avoid such deadlocks.</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHU3djBkeTc4OTk2empvNGhtcDRvaTlxN2ZucTJrdDFjdTFqamJxaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/xT5LMPQqC4wJqMqLp6/giphy.gif" alt="" />

        <h3>Banker&apos;s Algorithm</h3>
        <p>The Banker&apos;s Algorithm is the most widely used method to implement deadlock avoidance. It evaluates each resource request like a bank evaluating loan applications. A loan (resource request) is approved only if the bank (system) will remain stable after granting it.</p>

        <h4>Key Data Structures</h4>
        <ul>
          <li><strong>Max Matrix:</strong> Maximum demand of each process.</li>
          <li><strong>Allocation Matrix:</strong> Current resource allocation.</li>
          <li><strong>Need Matrix = Max - Allocation</strong></li>
          <li><strong>Available Vector:</strong> Remaining unallocated resources.</li>
        </ul>

        <h4>How Banker&apos;s Algorithm Works</h4>
        <ol>
          <li>Check if the request is within the process&apos;s declared maximum.</li>
          <li>Check if resources are currently available.</li>
          <li>Hypothetically grant the resources and check if the system remains in a safe state.</li>
          <li>If safe → grant request. If unsafe → deny or delay the request.</li>
        </ol>

        <h3>Understanding Safe-State Check in Depth</h3>
        <p>The Banker&apos;s Algorithm performs a "simulation" before finalizing a resource allocation. This simulation predicts whether granting the request might push the system into danger.</p>
        <p>This ensures that even if processes proceed with different execution paths, the system always has a possible ordering where all processes can finish.</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">Key Insight:</p>
          <p>A request is NEVER granted if it leads to a situation where even one process might get permanently stuck waiting.</p>
        </div>

        <h3>Banker&apos;s Algorithm Example</h3>
        <p>Consider a system with 3 resource types and 3 processes.</p>

        <h4>Max Matrix</h4>
        <div className="overflow-x-auto my-4">
          <table className="border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P1</td>
                <td className="border border-gray-300 px-4 py-2">7</td>
                <td className="border border-gray-300 px-4 py-2">5</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P2</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P3</td>
                <td className="border border-gray-300 px-4 py-2">9</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Allocation Matrix</h4>
        <div className="overflow-x-auto my-4">
          <table className="border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P2</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P3</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Available Resources</h4>
        <pre className="bg-gray-100 p-4 rounded my-2">
Available: 3 3 2
        </pre>

        <p>The system must check whether processes can complete in some order.</p>

        <h4>Computed Need Matrix</h4>
        <p>Need = Max - Allocation</p>
        <div className="overflow-x-auto my-4">
          <table className="border-collapse border border-gray-300">
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P1</td>
                <td className="border border-gray-300 px-4 py-2">7</td>
                <td className="border border-gray-300 px-4 py-2">4</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P2</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">P3</td>
                <td className="border border-gray-300 px-4 py-2">6</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Now the OS attempts to build a safe sequence by repeatedly checking which processes can finish using the currently Available vector.</p>

        <h3>Safe Sequence Evaluation</h3>
        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="font-semibold">Step 1:</p>
            <p>P2 can finish because Need(P2) = 1 2 2 ≤ Available(3 3 2)</p>
            <p className="mt-2">New Available = Available + Allocation(P2) = 5 3 2</p>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="font-semibold">Step 2:</p>
            <p>P1 can finish because Need(P1) = 7 4 3 ≤ Available(5 3 2)</p>
            <p className="mt-2">False → Cannot run yet</p>
          </div>
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <p className="font-semibold">Step 3:</p>
            <p>P3 can finish because Need(P3) = 6 0 0 ≤ Available(5 3 2)</p>
            <p className="mt-2">False → Cannot run</p>
          </div>
        </div>

        <p>Only P2 could run. Now we try again in the updated state until we find a safe sequence:</p>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded my-4">
          <p className="font-semibold">Step 4:</p>
          <p>After further iterations, safe sequence is determined as: <strong>P2 → P1 → P3</strong></p>
        </div>

        <p>Since a safe sequence exists, the system is in a safe state and resource requests can be granted.</p>
        <p>Now that we deeply understand Banker&apos;s Algorithm, let us explore why deadlock avoidance is useful in real systems.</p>

        <h3>Advantages of Deadlock Avoidance</h3>
        <ul>
          <li>Allows dynamic, real-time resource allocation.</li>
          <li>Ensures the system never enters unsafe states.</li>
          <li>Avoids unnecessary blocking seen in deadlock prevention.</li>
          <li>Better resource utilization compared to rigid prevention techniques.</li>
        </ul>

        <h3>Disadvantages of Deadlock Avoidance</h3>
        <ul>
          <li>Requires maximum future resource requirements in advance.</li>
          <li>Computationally expensive due to safe-state calculations.</li>
          <li>Not suitable for systems with unpredictable resource demands.</li>
          <li>High overhead in large-scale and real-time systems.</li>
        </ul>

        <h3>Real-World Applications</h3>
        <ul>
          <li><strong>Database Management Systems:</strong> Avoids conflicting locks during transaction scheduling.</li>
          <li><strong>Cloud Resource Schedulers:</strong> Ensures safe allocation of CPU, RAM, and network bandwidth.</li>
          <li><strong>Banking Servers:</strong> Inspired by Banker&apos;s Algorithm to ensure safe loan allocation.</li>
          <li><strong>Air Traffic Management:</strong> Ensures safe sequencing of takeoff and landing slots.</li>
          <li><strong>Distributed Systems:</strong> Ensures nodes do not request resources in unsafe patterns.</li>
        </ul>

        <h3>Understanding Through Videos</h3>
        <p>Watch the video starting from 9:30 to see Resource Allocation Graph-based avoidance.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/nDDytwtIMXE" title="Lec22 Deadlock Avoidance with Resource Allocation Graph(with example) | Operating System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>Learn Deadlock Avoidance using the Resource Request Algorithm.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/Or40J_f2RHo" title="Lec24 Deadlock Avoidance: Bankers(Resource Request Algorithm) with example |Operating System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Practice Questions</h3>
        <ol>
          <li>Define safe and unsafe states. Provide your own example of each.</li>
          <li>Explain why the Banker&apos;s Algorithm requires processes to declare maximum resource needs in advance.</li>
          <li>Given an Available vector of [2, 3, 1] and a Need matrix P1: [1,2,1], P2: [2,1,0], P3: [3,0,2], Identify which processes can complete first.</li>
        </ol>

        <p>With a solid understanding of how deadlock avoidance maintains system safety, we are now ready to explore how these principles apply in more complex concurrent environments.</p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20system%2Fdeadlock%203.png" alt="" />

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.scaler.com/topics/operating-system/deadlock-avoidance-in-os/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Deadlock Avoidance in OS - Scaler Topics</a></li>
          <li><a href="https://herovired.com/learning-hub/blogs/deadlock-avoidance-in-os" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">What is Deadlock Avoidance in OS (Operating System)?</a></li>
        </ul>

        <p className="mt-4">Let&apos;s move on to the next lesson!</p>
      </section>
    </div>
  );
};

export default Module3_12;
