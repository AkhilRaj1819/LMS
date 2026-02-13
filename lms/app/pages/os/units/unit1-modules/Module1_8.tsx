'use client';
import React, { useEffect, useState } from 'react';

const queue = ['Job Queue', 'Ready Queue', 'CPU', 'I/O Queue', 'Exit'];

const Module1_8: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((p) => (p + 1) % queue.length);
    }, 1200);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="module-content">
      {/* Header */}
      <div className="lesson-header">
        <div className="lesson-number-badge">1.8</div>
        <div className="lesson-title-main">
          <h1>Introduction to Processes</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="content-section">
        <p>
          Have you ever wondered how your computer can play music, browse the web,
          and download a file all at the same time?</p>
          <p> This magic is possible because
          of processes and threads. They are the real heroes behind multitasking
          and efficient resource management in every operating system.
        </p>

        <img src="https://media1.tenor.com/m/KfQ7a-nHd20AAAAd/mickey-mouse-rummaging.gif" alt="" />

        <p><strong>Credits:</strong> tenor</p>

        <p>
          In this lesson, you’ll explore the fundamental concepts of processes
          and threads, which are the backbone of multitasking and resource
          management in an operating system. You will also explore what
          processes are, how they are created, their lifecycle, and the
          different states a process can be in during execution.
        </p>
      </section>

      {/* Processes and Threads */}
      <section className="content-section">
        <h3>Processes and Threads</h3>

        <p>
          In an operating system, a process is a program that is currently being
          executed. It is more than just a running program; it includes the
          program code, its current activity, and the resources it uses, such as
          memory and CPU time. A process is created when a program is executed
          and exists until it finishes or is terminated.
        </p>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_process_threads.png" alt="" />

        <p>
          A thread is the smallest unit of CPU execution within a process. While
          a process can contain multiple threads, all threads share the same
          memory and resources, making them lighter and faster to switch between
          compared to separate processes.
        </p>

        <p>
          Threads are essential for concurrent programming allowing multiple
          operations to happen “in parallel” within the same application.
        </p>

        <p>
          <strong>Example:</strong> In a browser, one thread may load the page,
          another may handle user input, and another may stream audio, all under
          the same process.
        </p>

        <p><strong>Video:</strong> Introduction to Processes and Threads</p>
        <h6>What this video covers</h6>
        <p>This short visual explains how processes and threads work inside the OS, how they differ, and how multiple threads within the same process improve multitasking.
</p><p>It also demonstrates how threads share resources for faster communication and task execution.</p>
      </section>
<iframe
  width="414"
  height="360"
  src="https://www.youtube.com/embed/OrM7nZcxXZU"
  title="Process Management (Processes and Threads)"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

      {/* Process State */}
      <section className="content-section">
        <h3>Process State</h3>

        <p>
          In an operating system, a process goes through various stages during its lifetime, and these stages are referred to as process states. A process can be in one of several states at any given point, depending on its activity and the resources available to it. Understanding these states helps us comprehend how the operating system manages and transitions processes efficiently.
        </p>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_process_lifecycle.png" alt="" />

<p>Here are tehe main process states:</p>
        <div className="card-grid">
          <div className="state-card new">New<br /><small>The process is being created.</small></div>
          <div className="state-card ready">Ready<br /><small>The process is loaded into memory and is waiting for the CPU to execute.</small></div>
          <div className="state-card running">Running<br /><small>The process is currently executing on the CPU.</small></div>
          <div className="state-card waiting">Waiting (Blocked)<br /><small>The process is waiting for an external event, like input or data.</small></div>
          <div className="state-card terminated">Terminated<br /><small>The process has finished its task and is removed from memory</small></div>
        </div>

        <p><strong>🎥 Video:</strong> Process States</p>
<iframe
  width="414"
  height="360"
  src="https://www.youtube.com/embed/jZ_6PXoaoxo"
  title="Process State"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
      </section>

      <h6>What this video covers:</h6>
      <p>A visual explanation of how a process moves between states — from creation to termination.</p>
      <p>The video also clarifies how the OS handles waiting, I/O operations, and switching between processes.</p>

      {/* PCB */}
      <section className="content-section">
        <h3>Process Control Block</h3>

        <p>
          The Process Control Block (PCB) is a data structure used by the operating system to store information about each active process. It acts as a control mechanism, allowing the OS to manage processes and keep track of their state. The PCB is crucial for process management and contains essential details, including:
        </p>

        <div className="card-grid">
          <div className="pcb-card">Process State< br/><small>The current state of the process (e.g., ready, running, waiting).</small></div>
          <div className="pcb-card">Program Counter<br/><small>Holds the address of the next instruction to be executed by the process.</small></div>
          <div className="pcb-card">CPU Registers<br/><small>Stores values for various registers needed for process execution.</small></div>
          <div className="pcb-card">Memory Management Info<br/><small>Includes base/limit registers or page tables for memory allocation.</small></div>
          <div className="pcb-card">Scheduling Info<br/><small>Contains priority, scheduling queue links, and other scheduling parameters.</small></div>
          <div className="pcb-card">I/O Status Info<br/><small>Lists the devices or files the process is currently using.</small></div>
          <div className="pcb-card wide">Accounting Info<br/><small>Includes information like the amount of CPU time used by the process.</small></div>
        </div>

        <p><strong>Video:</strong> Process Control Block (PCB)</p>
        <iframe width="414" height="360" src="https://www.youtube.com/embed/4s2MKuVYKV8" title="Process Control Block" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h5>What this video covers:</h5>
        <p>The structure and importance of the PCB, how it helps the operating system save a process’s state, and how it enables seamless process switching.
It also includes a walkthrough of what data fields are stored and how the OS uses them during process scheduling.</p>
      </section>

      {/* Scheduling */}
      <section className="content-section">
        <h3>Process Scheduling</h3>

        <p>
          Process scheduling is an essential function of an operating system (OS) that determines which process runs at any given time. The goal is to ensure fair and efficient use of the CPU while managing multiple processes. To understand process scheduling better, it's important to know about two main components:
        </p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/scheduling_queues.webp" alt="" />
<p>Process scheduling determines which process gets the CPU next.
It ensures that all processes get a fair share of CPU time, maintaining smooth multitasking.


The operating system uses multiple queues to manage processes at different stages:</p>
        <ul>
          <li>Job Queue :  All processes that are waiting to be admitted into the system.</li>
          <li>Ready Queue : Processes that are ready and waiting for CPU time.</li>
          <li>I/O Queue : Processes performing input/output operations before returning to ready state.</li>
          <li>Exit : Processes that have completed execution.</li>
        </ul>
        <p>Let’s visualize how a process moves through these queues:</p>

        {/* Animation */}
        <div className="queue-wrapper">
          {queue.map((q, i) => (
            <div
              key={q}
              className={`queue-box ${step === i ? 'active' : ''}`}
            >
              {q}
              {step === i && <div className="p1">P1</div>}
            </div>
          ))}
        </div>

        <p>
          Watch how the process (P1) moves from the Job Queue → Ready Queue → CPU
          → I/O Queue → Exit and loops back,demonstrating the continuous scheduling cycle.
        </p>

        <p>
          This animation illustrates how the CPU scheduler ensures efficient and orderly execution of processes.
Each movement represents how the OS decides when a process should run, wait, or perform I/O ensuring maximum CPU utilization and fairness among all active processes.


In real systems, scheduling algorithms like FCFS, Round Robin, Shortest Job First (SJF), and Priority Scheduling determine this order dynamically, balancing speed, responsiveness, and resource fairness.
        </p>
      </section>

      {/* Advantages / Disadvantages */}
      <section className="content-section">
        <h3>Advantages, Disadvantages & Real-World Scenario</h3>

        <div className="two-col">
          <div className="box success">
            <h4>Advantages</h4>
            <ul>
              <li>Improved performance:<br/><small>Multithreading allows multiple operations to run simultaneously within a single process, boosting efficiency.</small></li>
              <li>Resource sharing: <br/><small>Threads within the same process share memory, reducing overhead and improving speed.</small></li>
              <li>Better responsiveness<br/><small>Threads can handle background tasks (like saving files) without freezing the entire application.</small></li>
              <li>Scalability<br/><small> Multithreading benefits multi-core systems by distributing work evenly across CPUs.</small></li>
              <li>Efficient CPU utilization<br/><small>The scheduler ensures every process gets fair CPU time, avoiding idle resources.</small></li>
            </ul>
          </div>

          <div className="box warning">
            <h4>Disadvantages</h4>
            <ul>
              <li>Complex debugging:<br/><small>Managing multiple threads can lead to synchronization issues and race conditions.</small></li>
              <li>Context switching overhead:<br/><small>Switching between processes/threads consumes CPU time and memory.</small></li>
              <li>Resource contention:<br/><small> Threads competing for shared data may cause inconsistent results</small></li>
              <li>Deadlocks:<br/><small>Poor synchronization can cause processes to wait indefinitely for each other’s resources.</small></li>
              <li>Diminishing returns: <br/><small>Excessive threads may overload the CPU, reducing overall performance.</small></li>
            </ul>
          </div>
        </div>

        <div className="box info">
          <h4>💡 Real-World Scenario</h4>
          <p>
            Imagine you’re watching a YouTube video:
            <br/> One process runs your
            browser. <br/>Inside it, multiple threads handle different tasks — one decodes the video, another manages buffering, another plays the audio, and another listens for your clicks.
            <br/>When you open a new tab or download something, the OS uses process scheduling to allocate CPU time fairly among them.
            <br/>If your network is slow, the I/O thread moves to a waiting state while others continue working — keeping playback smooth.
<span style={{ color: '#1a73e8', display: 'block', marginTop: '8px' }}>
  This is how modern operating systems create a seamless multitasking experience — blending the power of processes, threads, and scheduling.
</span>
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="content-section">
        <h3>Summary</h3>

       <ul>
  <li>
    <strong>Processes and Threads:</strong> A process is a program in execution,
    while a thread is a lightweight unit of execution within a process. Threads
    allow tasks to be divided and executed concurrently within the same process,
    improving efficiency.
  </li>

  <li>
    <strong>Process State:</strong> A process transitions through states such as
    new, ready, running, waiting, and terminated during its lifecycle. These
    states represent the different stages of execution and interaction with
    system resources.
  </li>

  <li>
    <strong>Process Control Block (PCB):</strong> The PCB acts as a data structure
    that holds essential information about a process, such as its state, program
    counter, CPU registers, memory limits, and I/O status, enabling efficient
    process management by the OS.
  </li>

  <li>
    <strong>Process Scheduling:</strong> This mechanism ensures optimal CPU
    utilization by organizing processes using structures like the job queue and
    ready queue. It prioritizes and allocates CPU time to processes based on
    scheduling algorithms to meet system performance goals.
  </li>
</ul>

<section className="content-section">
  <h3>Mind Map</h3>
  <p>
    This section provides a visual summary of the lesson content to enhance
    conceptual clarity. It is intended purely for reference and will not be
    included in assessments or quizzes.
  </p>

  <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Introduction+to+processes.svg" alt="" />
</section>


      </section>

      {/* Bonus */}
      <section className="content-section">
        <h3>Bonus Content</h3>
        <p>
          This section is optional, and learners who want to explore further or need alternate resources to prepare can utilize the following references.
        </p>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/top-content/?trk=article_not_found"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Understanding the Process Control Block (PCB) - linkedin.com
            </a>
          </li>
          <li>
            <a
              href="https://workat.tech/core-cs/tutorial/processes-and-threads-os-6iboki1s2y3t"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Processes and Threads | Operating Systems (OS) - workat.tech
            </a>
          </li>
          <li>
            <a
              href="https://www.alexomegapy.com/post/understanding-process-states-in-os"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Understanding Process States in Operating Systems - alexomegapy
            </a>
          </li>
        </ul>

        <p>Now, let's proceed to the next lesson.</p>
      </section>

      {/* Local styles for animation and layout */}
      <style jsx>{`
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
        }

        .state-card, .pcb-card {
          padding: 14px;
          border-radius: 8px;
          text-align: center;
          font-weight: 600;
          background: #f4f6fa;
        }

        .pcb-card.wide {
          grid-column: span 2;
        }

        .queue-wrapper {
          display: flex;
          gap: 12px;
          margin: 16px 0;
          flex-wrap: wrap;
        }

        .queue-box {
          position: relative;
          padding: 14px 16px;
          border-radius: 8px;
          background: #eef1f6;
          min-width: 110px;
          text-align: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .queue-box.active {
          background: #ffd54f;
          transform: scale(1.05);
        }

        .p1 {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #e53935;
          color: #fff;
          font-size: 12px;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .two-col {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 16px;
          margin-top: 12px;
        }

        .box {
          padding: 16px;
          border-radius: 10px;
        }

        .success { background: #e8f5e9; }
        .warning { background: #fff8e1; }
        .info { background: #e3f2fd; margin-top: 16px; }
      `}</style>
    </div>
  );
};

export default Module1_8;
