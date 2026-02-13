'use client';
import React from 'react';

const Module2_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.4</div>
        <div className="lesson-title-main">
          <h1>Introduction to CPU Scheduling</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Imagine the CPU as a busy chef in a restaurant kitchen. Multiple orders (processes) are waiting, and the chef must decide which dish to cook first to keep everyone satisfied and the kitchen running smoothly. In this lesson, you&apos;ll explore CPU bursts, I/O bursts, understand preemptive and non-preemptive scheduling, and learn various scheduling algorithms that optimize CPU performance.</p>

        <div className="flex gap-2 mb-4">
          <div className="border-2 border-blue-500 px-3 py-1 rounded text-sm animate-pulse">
            <strong>Process 1</strong>
          </div>
          <div className="border-2 border-green-500 px-3 py-1 rounded text-sm animate-pulse" style={{animationDelay: '0.2s'}}>
            <strong>Process 2</strong>
          </div>
          <div className="border-2 border-purple-500 px-3 py-1 rounded text-sm animate-pulse" style={{animationDelay: '0.4s'}}>
            <strong>Process 3</strong>
          </div>
        </div>
        <p>Watch as the processes move through the queue and get executed by the CPU — just like tasks in a real system!</p>

        <h4>Introduction to CPU Scheduling</h4>
        <h3>What is CPU Scheduling?</h3>
        <p>CPU scheduling is the process of deciding which process from the ready queue will be executed by the CPU next. It ensures that multiple processes share the CPU effectively, maximising system performance.</p>
        <h3>Why is it important?</h3>
        <p>CPU scheduling is crucial for achieving efficient CPU utilisation, reducing waiting time, and improving overall system throughput. It helps balance resource allocation and ensures smooth multitasking in modern computing systems.</p>

        <p>🎥 <strong>Video: CPU Scheduling Explained</strong></p>
        <p><strong>Overview:</strong> This video explains the basics of CPU scheduling, why it&apos;s important for system performance, and how processes move between CPU bursts and I/O bursts. You&apos;ll also learn about preemptive vs non-preemptive scheduling and get an introduction to different CPU scheduling methods.</p>
        <iframe width="386" height="360" src="https://www.youtube.com/embed/EWkQl0n0w5M" title="Introduction to CPU Scheduling" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h4>CPU and I/O Burst Cycles</h4>
        <p>A process moves back and forth between two stages while running: CPU execution and I/O wait.</p>
        <p>During CPU execution, the process does calculations, and during I/O wait, it waits for input or output tasks to finish. Once the process finishes its I/O tasks or reaches the last step, it goes back to CPU execution to finish any remaining work and then ends.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(15).jpg" alt="CPU and I/O" />
        <p>In CPU scheduling, the goal is to keep the CPU as busy as possible. Good scheduling helps reduce idle time by effectively managing when processes switch between CPU tasks and waiting for input/output tasks. It also ensures that processes return to the CPU to finish their work and eventually complete.</p>

        <div className="flex items-center justify-center gap-6 my-8">
          <div className="text-center">
            <div className="bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl">
              CPU Burst
            </div>
            <p className="mt-2 text-gray-600">Processing</p>
          </div>
          <div className="bg-blue-400 text-white px-4 py-2 rounded">
            ➡️
          </div>
          <div className="text-center">
            <div className="bg-orange-500 text-white font-bold px-8 py-4 rounded-2xl">
              I/O Burst
            </div>
            <p className="mt-2 text-gray-600">Waiting</p>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">Each white circle represents a &quot;process token&quot; moving through CPU and I/O bursts, giving a visual sense of CPU scheduling in action.</p>

        <p>This diagram shows how a process typically works: it starts with a CPU burst, using the computer&apos;s processor for calculations, and then transitions to an I/O burst, pausing to wait for operations like reading or writing files. This alternation continues until the process finishes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_introduction_to_cpu_scheduling_image1.jpg" alt="" />
        <br />

        <h4>Preemptive and Non-Preemptive Scheduling</h4>
        <p><strong>Preemptive Scheduling:</strong> In preemptive scheduling, a running process can be interrupted and moved back to the ready queue if a higher-priority process arrives or becomes ready.</p>
        <p>Example: Round Robin scheduling.</p>
        <p><strong>Non-Preemptive Scheduling:</strong> In non-preemptive scheduling, once a process starts executing, it cannot be stopped until it completes, regardless of other processes in the queue.</p>
        <p>Example: First Come First Serve (FCFS) scheduling.</p>
        <p>Watch the given video below to understand more about this topic.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/4DhFmL-6SDA" title="Preemptive and Non-Preemptive Scheduling" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <br />

        <h4>Dispatcher and Dispatch Latency</h4>
        <p>Once the CPU scheduler selects a process from the ready queue, <strong>another component is responsible for actually handing over the CPU.</strong> This component is called the <strong>dispatcher.</strong></p>

        <h3>What is a Dispatcher?</h3>
        <p>The <strong>dispatcher</strong> is the OS component that:</p>
        <ul>
          <li>Switches the CPU from one process to another</li>
          <li>Performs a <strong>context switch</strong> (saving the state of the current process and loading the next one)</li>
          <li>Transfers control of the CPU to the selected process</li>
          <li><strong>Switches the CPU from kernel mode to user mode before execution begins</strong></li>
          <li><strong>Ensures the correct process state and program counter are restored</strong></li>
        </ul>
        <p>In simple terms,<strong> the scheduler decides who should run next, and the dispatcher makes it happen.</strong></p>
        <p><strong>Real-world example:</strong> Think of the dispatcher as the kitchen assistant who clears the current cooking station and brings the next dish to the chef. The chef (CPU) can only start cooking once the assistant finishes the setup.</p>

        <h3>What is Dispatch Latency?</h3>
        <p><strong>Dispatch latency</strong> is the time taken by the dispatcher to:</p>
        <ul>
          <li>Stop one process</li>
          <li>Switch context</li>
          <li>Start executing the next process</li>
        </ul>
        <p>This time includes:</p>
        <ul>
          <li>Saving registers of the current process</li>
          <li>Loading registers of the new process</li>
          <li>Switching between user mode and kernel mode</li>
          <li><strong>Updating internal scheduling and process control structures</strong></li>
        </ul>
        <p><strong>Lower dispatch latency = faster system response</strong></p>

        <h3>Why Dispatch Latency Matters</h3>
        <ul>
          <li>In <strong>real-time and interactive systems</strong>, high dispatch latency can cause noticeable delays</li>
          <li>Preemptive scheduling algorithms (like Round Robin) rely on fast dispatching to remain efficient</li>
          <li>Large dispatch latency reduces the benefits of frequent context switching</li>
          <li><strong>High dispatch latency can reduce CPU utilization by increasing overhead</strong></li>
        </ul>
        <p><strong>Example:</strong> If a CPU switches tasks very often but takes too long to switch each time, the system wastes time managing switches instead of doing actual work.</p>

        <h3>Dispatcher in Preemptive vs Non-Preemptive Scheduling</h3>
        <ul>
          <li><strong>Preemptive Scheduling:</strong> Dispatcher is invoked frequently (e.g., time quantum expiry in Round Robin)</li>
          <li><strong>Non-Preemptive Scheduling:</strong> Dispatcher is invoked only when a process finishes execution or blocks for I/O</li>
          <li><strong>Dispatch latency has a higher impact in preemptive systems due to frequent context switches</strong></li>
        </ul>

        <h2>CPU Scheduling Criteria</h2>
        <p>Scheduling criteria help us evaluate the performance of CPU scheduling algorithms. Click on each card to expand and explore with real-world examples.</p>
        
        <div className="space-y-4 my-6">
          <details className="bg-blue-50 border-2 border-gray-800 rounded-lg p-4">
            <summary className="flex items-center gap-2 cursor-pointer font-semibold text-blue-700">
              💻 CPU Utilisation
            </summary>
            <div className="mt-4 text-gray-700">
              <p>The goal of any scheduling algorithm is to keep the CPU as busy as possible. Ideally, CPU utilisation ranges from 0% to 100%, but in real systems, it typically varies between 40% (lightly loaded systems) and 90% (heavily loaded systems).</p>
              <p className="mt-2"><em>Example:</em> Imagine a factory with a single machine. If the machine is idle for long periods, the factory&apos;s output decreases. Similarly, if the CPU remains idle, the system&apos;s efficiency drops.</p>
            </div>
          </details>

          <details className="bg-orange-50 border-2 border-gray-800 rounded-lg p-4">
            <summary className="flex items-center gap-2 cursor-pointer font-semibold text-orange-600">
              📈 Throughput
            </summary>
            <div className="mt-4 text-gray-700">
              <p>Throughput refers to the number of processes completed per unit of time. A higher throughput indicates that the CPU is efficiently handling tasks.</p>
              <p className="mt-2"><em>Example:</em> Think of a checkout counter at a supermarket. If the cashier serves more customers per hour, the throughput is higher. Similarly, the CPU&apos;s performance improves when it completes more processes in a given time frame.</p>
            </div>
          </details>

          <details className="bg-green-50 border-2 border-gray-800 rounded-lg p-4">
            <summary className="flex items-center gap-2 cursor-pointer font-semibold text-green-700">
              ⏱️ Turnaround Time
            </summary>
            <div className="mt-4 text-gray-700">
              <p>Turnaround time is the total time taken by a process from submission to completion. It includes waiting time in queues, time spent in execution, and I/O operations.</p>
              <p className="mt-2"><em>Example:</em> Imagine submitting a document for printing. Turnaround time is the total duration from the moment you click &quot;Print&quot; to when the printed document is ready to collect.</p>
            </div>
          </details>

          <details className="bg-yellow-50 border-2 border-gray-800 rounded-lg p-4">
            <summary className="flex items-center gap-2 cursor-pointer font-semibold text-yellow-700">
              ⌛ Waiting Time
            </summary>
            <div className="mt-4 text-gray-700">
              <p>Waiting time is the time a process spends waiting in the ready queue before getting CPU attention.</p>
              <p className="mt-2"><em>Example:</em> Consider a restaurant where diners wait for a table. The waiting time is the time they spend in the waiting area before being seated. Similarly, processes in the ready queue wait for their turn to execute.</p>
            </div>
          </details>

          <details className="bg-purple-50 border-2 border-gray-800 rounded-lg p-4">
            <summary className="flex items-center gap-2 cursor-pointer font-semibold text-purple-700">
              ⚡ Response Time
            </summary>
            <div className="mt-4 text-gray-700">
              <p>Response time measures how quickly the system starts responding to a request after submission. It&apos;s about the time to start responding, not the total time to complete the task.</p>
              <p className="mt-2"><em>Example:</em> When you search for something on a browser, the response time is the time it takes for the search results to begin appearing, even if it&apos;s just the first few results.</p>
            </div>
          </details>
        </div>

        <h2>Mind Map</h2>
        <p>This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Introduction+to+CPU+Scheduling.svg" alt="Mind map" />

        <h2>Bonus Content</h2>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/cpu-scheduling-criteria/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">CPU Scheduling Criteria - GFG</a></li>
          <li><a href="https://www.baeldung.com/cs/cpu-io-burst-cycles" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">CPU and I/O Burst Cycles - Baeldung on Computer Science</a></li>
          <li><a href="https://medium.com/@tanmaykumarchaursia/understanding-cpu-scheduling-a-comprehensive-guide-to-efficient-process-management-2169b701b953" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Understanding CPU Scheduling: A Comprehensive Guide to Efficient Process Management - Medium</a></li>
        </ul>
        <img src="https://media1.tenor.com/m/GdlwuIs9-WsAAAAC/minions-despicableme.gif" alt="" />
      </section>
    </div>
  );
};

export default Module2_4;
