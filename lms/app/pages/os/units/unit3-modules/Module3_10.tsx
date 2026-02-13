'use client';
import React, { useState, useEffect } from 'react';

const DeadlockAnimation = () => {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setState(prev => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900 rounded-2xl p-8 my-6">
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${state === 0 ? 'bg-blue-500' : 'bg-red-500'}`}>P1</div>
          <p className="text-white text-sm mt-2">{state === 0 ? 'Holds R1' : 'Waits for R2'}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${state === 0 ? 'bg-emerald-500' : 'bg-gray-600'}`}>R1</div>
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${state === 0 ? 'bg-emerald-500' : 'bg-gray-600'}`}>R2</div>
        </div>
        <div className="text-center">
          <div className={`w-24 h-24 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${state === 0 ? 'bg-purple-500' : 'bg-red-500'}`}>P2</div>
          <p className="text-white text-sm mt-2">{state === 0 ? 'Holds R2' : 'Waits for R1'}</p>
        </div>
      </div>
    </div>
  );
};

const Module3_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.10</div>
        <div className="lesson-title-main">
          <h1>Deadlocks</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Imagine you&apos;re working on your laptop, one app is saving a file while another is printing a document. Suddenly, the system hangs. Both programs are waiting forever, but for what?</p>
        <p>Welcome to the world of Deadlocks, a state where processes are stuck waiting for each other indefinitely, each holding something the other needs.</p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/NoSQL%20Databases%20for%20Web%20Development%2Fwave-hello.webp" alt="" />

        <h3>Deadlocks</h3>
        <p>All the processes in a system require resources such as CPU, memory, file storage, and I/O devices to execute. Once the execution is finished, the process releases the resource it was holding. However, when many processes run on a system, they compete for these resources. This competition may create a deadlock situation.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">💡 Example:</p>
          <p className="mt-2">Process P1 holds Resource R1 and waits for R2, while Process P2 holds R2 and waits for R1. Neither can continue until the other releases the resource. Hence, both are stuck forever.</p>
        </div>

        <p>Great! You now understand the idea. Let&apos;s look at a simple, relatable analogy to make it even clearer.</p>

        <h3>Example</h3>
        <p>Consider John and Amy, who happen to be siblings. They find themselves in a deadlock state as Amy desires a laptop that John possesses, but is unwilling to share. Simultaneously, John wants the TV remote that Amy has, but she refuses to give it to him. This real-life situation mirrors deadlocks perfectly.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/deadlocks+eg.png" alt="" />

        <p>Now that you&apos;ve seen a human analogy, let&apos;s connect it back to how deadlocks happen inside an operating system.</p>

        <h3>Deadlock in Operating Systems</h3>
        <p>Assume that P1 and P2 are the names of two processes. P1 is given resource R1 and P2 is given resource R2. If P1 wants R2 and P2 wants R1, both must wait until the other releases its resource, creating a deadlock.</p>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/Deadlock_actual_eg.png" alt="" />

        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Process</th>
                <th className="border border-gray-300 px-4 py-2">Holds</th>
                <th className="border border-gray-300 px-4 py-2">Requests</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">P1</td>
                <td className="border border-gray-300 px-4 py-2">R1</td>
                <td className="border border-gray-300 px-4 py-2">R2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">P2</td>
                <td className="border border-gray-300 px-4 py-2">R2</td>
                <td className="border border-gray-300 px-4 py-2">R1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Now that we clearly understand the scenario, let&apos;s explore what happens next, the consequences.</p>

        <h3>What are the Consequences of a Deadlock?</h3>
        <ul>
          <li>System freezes or becomes unresponsive.</li>
          <li>Loss of unsaved work and potential data corruption.</li>
          <li>Resource utilization drops to zero as processes remain stuck.</li>
          <li>Critical system operations may never complete, requiring manual restart.</li>
        </ul>

        <p>After understanding the consequences, it becomes important to differentiate deadlock from a very similar concept, starvation.</p>

        <h3>Difference Between Starvation and Deadlock</h3>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Aspect</th>
                <th className="border border-gray-300 px-4 py-2">Deadlock</th>
                <th className="border border-gray-300 px-4 py-2">Starvation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Definition</td>
                <td className="border border-gray-300 px-4 py-2">Processes wait indefinitely for each other</td>
                <td className="border border-gray-300 px-4 py-2">Process waits indefinitely for resources</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Cause</td>
                <td className="border border-gray-300 px-4 py-2">Circular wait condition</td>
                <td className="border border-gray-300 px-4 py-2">Poor scheduling or priority</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Recovery</td>
                <td className="border border-gray-300 px-4 py-2">Requires intervention</td>
                <td className="border border-gray-300 px-4 py-2">May resolve eventually</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Now that the difference is clear, let&apos;s look at the exact conditions that MUST happen for a deadlock to occur.</p>

        <h3>Necessary conditions for Deadlocks</h3>
        <p>Deadlocks occur only when all four of the following Coffman conditions hold true:</p>
        <strong>Mutual Exclusion</strong>
        <p></p>
        <strong>Hold and Wait</strong>
        <p></p>
        <strong>No Preemption</strong>
        <p></p>
        <strong>Circular Wait</strong>
        <p></p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_deadlock_image1.jpg" alt="" />

        <p>Once you know the conditions, the next step is to learn how to detect deadlocks using a Resource Allocation Graph.</p>

        <h3>Resource Allocation Graph in Deadlocks</h3>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/qPuf5B5xPCs" title="Lec20 Resource Allocation Graph in Deadlock | with example | Operating System" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <p>A Resource Allocation Graph (RAG) shows which processes requested or hold which resources.</p>

        <p>With detection covered, let&apos;s move to the next part — how an OS responds to a deadlock.</p>

        <h3>Deadlock Detection and Recovery</h3>
        <h4>Detection</h4>
        <ul>
          <li>Use a wait-for graph</li>
          <li>Check for cycles</li>
          <li>If cycle exists → deadlock is present</li>
        </ul>

        <h4>Recovery</h4>
        <ul>
          <li>Abort processes</li>
          <li>Preempt resources</li>
        </ul>

        <p>Now that you know how deadlocks are detected and fixed, let&apos;s look at strategies that help avoid them altogether.</p>

        <h3>Deadlock Prevention and Avoidance</h3>
        <ul>
          <li><strong>Prevention:</strong> Stop at least one Coffman condition.</li>
          <li><strong>Avoidance:</strong> Use Banker&apos;s Algorithm to allow only safe allocations.</li>
        </ul>

        <h4>Banker&apos;s Algorithm Concept:</h4>
        <ul>
          <li>Processes declare their maximum resource needs.</li>
          <li>OS checks if system remains in a safe state.</li>
          <li>If not safe → process must wait.</li>
        </ul>

        <p>You&apos;ve now explored deadlocks from definition → examples → consequences → conditions → detection → recovery → avoidance. This completes the full deadlock lifecycle and gives you a complete understanding of the topic!</p>

        <h3>Advantages of Deadlock Handling</h3>
        <ul>
          <li>Ensures system reliability through safe resource allocation.</li>
          <li>Helps avoid unpredictable system crashes.</li>
          <li>Provides structured techniques (like Banker&apos;s Algorithm) for safe execution.</li>
          <li>Improves OS design by encouraging disciplined resource management.</li>
        </ul>

        <h3>Disadvantages / Limitations</h3>
        <ul>
          <li>Detection algorithms are expensive and slow for large systems.</li>
          <li>Recovery (aborting processes) may cause data loss.</li>
          <li>Prevention requires strong restrictions, reducing parallelism.</li>
          <li>Avoidance (Banker&apos;s Algorithm) needs maximum demands known beforehand.</li>
        </ul>

        <h3>Real-World Scenarios Where Deadlocks Occur</h3>
        <p>Deadlocks are not just theory they appear in everyday technology. Here are some real examples, explained visually:</p>

        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold">🖨 Printer Queue</h4>
            <p className="text-sm mt-2">Two print jobs each wait for the printer while holding the file lock for their respective documents.</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-semibold">💳 Banking Systems</h4>
            <p className="text-sm mt-2">Transaction A locks Account X and waits for Account Y, while Transaction B locks Account Y and waits for Account X.</p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-semibold">🤖 Robotics</h4>
            <p className="text-sm mt-2">Two robots each grab a shared arm joint, waiting for the other to release their grip.</p>
          </div>
          <br />
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20system%2Fdeadlock.png" alt="" />
        </div>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/introduction-of-deadlock-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Deadlock in OS: Necessary Conditions and Examples</a></li>
          <li><a href="https://medium.com/@parul947a/deadlocks-in-os-da7634638f5" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">DEADLOCKS IN OS | by Parul chaddha | Medium</a></li>
          <li><a href="https://blog.bytebytego.com/p/ep112-what-is-a-deadlock" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">EP112: What is a deadlock? - ByteByteGo Newsletter</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Module3_10;
