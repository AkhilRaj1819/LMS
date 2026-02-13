'use client';
import React from 'react';

const Module2_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.3</div>
        <div className="lesson-title-main">
          <h1>Issues in Threading</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In this lesson, you will learn how the fork and exec system calls work and explore the challenges involved in threading and thread management. You will also understand issues related to thread creation, behavior after fork, and thread cancellation in multithreaded environments essential concepts for efficient and safe concurrent programming.</p>
        
        <h4>fork() and exec() system calls</h4>
        <p><strong>Fork:</strong> Creates a new process by duplicating the existing process, called the parent.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA.jpg" alt="fork()" />
        <p><strong>Exec:</strong> The exec() family of functions replaces the current process content with a new process content. It loads the program into the current process space and runs it from the entry point.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(2).jpg" alt="exec()" />
        <p>Used together to achieve multitasking by spawning and executing new processes.</p>
        <p>These system calls are specific to Linux-based operating systems. While the core concepts are universal, the implementation details discussed here pertain to Linux.</p>
        
        <div>
          <strong>Example:</strong>
          <p>When you open a new terminal and type a command like <strong>`ls`</strong>, the shell creates a <strong>child process</strong> using <strong>`fork()`</strong>, and then replaces that child process’s code using <strong>`exec()`</strong> to run the ls program.</p>
        </div>

        <h4>Threading Issues</h4>
        <p>Threads introduce complexity when system calls like <strong>`fork()`</strong> are involved.</p>
        <p><strong>Fork Behaviour:</strong> When a thread calls <strong>`fork`</strong>, only the calling thread is duplicated in the child process, <strong>not all threads.</strong></p>
        <ul>
          <li>This can lead to <strong>inconsistencies</strong> if other threads were managing shared resources such as files or sockets.</li>
          <li>Hence, careful design is crucial to ensure proper resource handling after a <strong>`fork.`</strong></li>
        </ul>
        <p>🎥 <strong>Video: Understanding fork() and exec() System Calls</strong></p>
        <p><strong>Overview:</strong> This video explains how fork() and exec() work together to achieve multitasking in Linux-based systems. You’ll learn how processes are created, replaced, and managed at the system level.</p>
        <ul>
        <li><strong>`fork()`: </strong>Duplicates the current process to create a child process.</li>
        <li><strong>`exec()`:</strong> Replaces the process memory with a new program.</li>
        <li><strong>Usage Together:</strong> Enables executing new programs without starting a new process entirely.</li>
        <strong>Key Learning:</strong> Understand how these calls are fundamental to multitasking and process control in Unix/Linux systems.
        </ul>
        <iframe width="394" height="360" src="https://www.youtube.com/embed/o2Sf0GHWpmk" title="Threading Issues [fork() &amp; exec() System Calls]" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        

        <h3>Thread Cancellation</h3>
        <h3>What is Thread Cancellation?</h3>
        <p>Thread cancellation refers to the act of terminating a thread before it finishes its designated task. In simpler terms, a running thread can be forcefully stopped before it completes its execution.</p>

        <h3>Ways to Cancel a Thread</h3>
        <p>There are two main ways a thread can be stopped:</p>
        <ol>
          <li><strong>Stopping it Right Now (Asynchronous Cancellation):</strong> This is like suddenly pulling the plug. One thread immediately stops another thread. The thread that&apos;s being stopped has no choice in the matter.</li>
          <li><strong>Asking it to Stop Later (Deferred Cancellation):</strong> This is a more careful way. One thread asks another to stop, but the other thread gets to check if it&apos;s a good time to stop. This gives it a chance to finish important things or clean up before stopping completely.</li>
        </ol>

        <h3>Problems with Thread Cancellation</h3>
        <p>Stopping threads can cause problems, especially when they&apos;re using computer resources (like memory or files). Here are two main issues:</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(14).jpg" alt="Problems with Thread Cancellation" />

        <h3>The Best Way to Stop Threads</h3>
        <p>To avoid these problems, it&apos;s usually best to use the &quot;asking it to stop later&quot; (deferred cancellation) method. This lets the thread safely stop itself, reducing the chances of problems with resources or data</p>

        <h4>Extended Learning Connection</h4>
        <p>To strengthen your understanding, recall concepts from Multithreading Models and Hyperthreading. Both topics tie closely to how threads interact with the OS and CPU at different levels.</p>

        {/* <div>
          <p><strong>Fork()</strong></p>
          <p><strong>Race Condition</strong></p>
          <p><strong>Deadlock</strong></p>
          <p>Threads improve performance — but they can also create hidden problems. Watch how they &quot;move&quot; and sometimes collide while working together!</p>
        </div> */}

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3>🔁 Fork Behavior</h3>
            <p>When a thread calls fork(), only that thread is copied — others vanish in the child process. This can cause inconsistencies if shared data was being handled by other threads.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h3>💾 Resource Conflicts</h3>
            <p>Multiple threads writing to the same memory or file can corrupt data. Synchronization tools (mutexes, semaphores) prevent such collisions.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h3>⛔ Deadlocks</h3>
            <p>Two threads waiting forever for each other&apos;s lock — no one moves! This freeze is called a deadlock. Lock ordering or timeout helps prevent it.</p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h3>⚡ Race Conditions</h3>
            <p>When threads &apos;race&apos; to modify shared data, results become random. Proper synchronization ensures predictable behavior.</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <h3>🧩 Debugging Complexity</h3>
          <p>Threaded programs can behave differently each run due to timing differences — debugging them can be a nightmare!</p>
        </div>
        <br />

        <h4>Deeper Insights</h4>
        <ul>
          <li><strong>Mapping Threads to Kernel Threads:</strong> Understand how multithreading models (One-to-One, Many-to-One, and Many-to-Many) determine how efficiently threads map to CPU resources.</li>
          <li><strong>Hardware-Level Concurrency via Hyperthreading:</strong> Learn how Hyperthreading allows a single CPU core to execute multiple threads simultaneously, boosting performance and utilization.</li>
        </ul>
        <br />

        <h4>Mind Map</h4>
        <p>This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Issues+in+threading.svg" alt="mind map" />
        <br />


        <h4>Bonus Content</h4>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        <ul>
          <li><a href="https://ece.uwaterloo.ca/~dwharder/icsrts/Tutorials/fork_exec/" target="_blank" rel="noopener noreferrer">fork() and exec() - University of Waterloo</a></li>
          <li><a href="https://www.ibm.com/docs/en/zos/2.4.0?topic=requirements-thread-cancellation" target="_blank" rel="noopener noreferrer">Thread cancellation - IBM</a></li>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/threading-issues/" target="_blank" rel="noopener noreferrer">Threading Issues - GeeksforGeeks</a></li>
        </ul>
        <p>Let&apos;s move on to the next lesson now.</p>
      </section>
    </div>
  );
};

export default Module2_3;