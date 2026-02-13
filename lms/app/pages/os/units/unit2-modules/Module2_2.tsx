'use client';
import React from 'react';

const Module2_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.2</div>
        <div className="lesson-title-main">
          <h1>Multithreading Models and Hyperthreading</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In today's computing world, programs are expected to perform multiple tasks simultaneously and efficiently. Multithreading and Hyperthreading are key techniques that allow software to leverage modern CPUs to their fullest potential. While multithreading enables a single program to execute multiple tasks concurrently by dividing them into threads, Hyperthreading allows a CPU core to handle more than one thread at a time, improving overall performance and responsiveness.</p>
        
        <p>In this lesson, we will explore how multithreading models map user threads to kernel threads, understand the benefits and trade-offs of each model, and see how Hyperthreading enhances CPU utilization and system efficiency in real-world applications.</p>
        
        
        <h3>Multithreading models</h3>
        <p>Multithreading is a feature in operating systems that allows a program to do several tasks at the same time. Think of it like having multiple hands working together to complete different parts of a job faster. Each "hand" is called a thread, and they help make programs run more efficiently. Multithreading makes your computer work better by using its resources more effectively, leading to quicker and smoother performance for applications like web browsers, games, and many other programs you use every day.</p>
        
        <p>Video: Introduction to Multithreading Models</p>
        <p><strong>Overview:</strong> This video explains multithreading models in operating systems and how user threads are mapped to kernel threads.</p>
        <ul>
          <li><strong>Concept: </strong> Multithreading allows a program to perform multiple tasks concurrently by using threads.</li>
          <li><strong>Types of Threads: </strong>User threads (managed by libraries) and Kernel threads (managed by the OS).</li>
          <li><strong>Thread Models: </strong>One-to-One, Many-to-One, Many-to-Many and how they affect concurrency and resource usage.</li>
          <li><strong>Practical Examples: </strong> Web servers, games, multimedia apps, and databases benefiting from multithreading.</li>
        </ul>

        <iframe width="395" height="360" src="https://www.youtube.com/embed/PgDaJEjlBuI" title="Multithreading vs Multiprocessing | System Design" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <p><strong>There are two types of threads:</strong></p>
        <ul>
          <li><strong>User Thread:</strong> Managed by user-level libraries, not the OS, and are lightweight and fast to create.</li>
          <li><strong>Kernel Thread:</strong> Managed by the OS kernel, offering more access to system resources but with higher overhead.</li>
        </ul>
        
        <p><strong>Types of Common Thread Relations:</strong></p>

        <ul>
        <p><strong>One-to-One:</strong> Each user thread has a corresponding kernel thread. Advantage: Better concurrency, fully utilizes CPU cores. Disadvantage: Higher resource overhead for many threads.</p>
        
        <p><strong>Many-to-One:</strong> Multiple user threads share one kernel thread. Advantage: Lightweight and efficient for small applications. Disadvantage: If one thread blocks, all threads block; limited concurrency.</p>
        
        <p><strong>Many-to-Many:</strong> Multiple user threads are mapped to multiple kernel threads. Advantage: Combines benefits of both models; scalable concurrency. Disadvantage: Complex implementation and management.</p>
        </ul>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Three-types-of-thread-models-Popular-operating-systems-5-22-24-adopt-the.ppm" alt="image" />
        <br />
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(22).jpg" alt="Types of common threads" />
        
        <h4>Additional Insights:</h4>
        <ul>
          <li>Examine how multithreading models map user threads to kernel threads and their trade-offs in terms of performance and resource usage.</li>
          <li>One-to-One provides better concurrency but higher resource cost, Many-to-One is lightweight but limited in concurrency, and Many-to-Many combines benefits but adds complexity.</li>
        </ul>
        
        <h4>Practical Applications of Multithreading</h4>
        <ul>
          <li>Web servers handling multiple simultaneous requests.</li>
          <li>Games rendering multiple objects and physics calculations concurrently.</li>
          <li>Multimedia applications process audio, video, and input in parallel.</li>
          <li>Databases handling multiple queries at once.</li>
        </ul>
        
        <h3>Hyperthreading</h3>
        <p>Hyperthreading allows a single CPU core to act as two logical cores, enabling more efficient processing by running two threads simultaneously, improving performance in multi-threaded applications.</p>
        
        <h4>Key Benefits of Hyperthreading:</h4>
        <ul>
          <li>Increases CPU utilization by allowing idle execution units to be used by other threads.</li>
          <li>Improves system responsiveness and throughput in multi-threaded applications.</li>
          <li>Reduces context-switching overhead by sharing execution resources between threads.</li>
          <li>Works alongside multithreading models to provide hardware-level concurrency.</li>
        </ul>
        
        <h4>Real-world Example:</h4>
        <p>A CPU with Hyperthreading can process two threads simultaneously, such as one thread calculating physics in a game while another renders graphics, increasing FPS without adding extra cores.</p>
        
        <p>Watch the video given below to understand Multithreading models and Hyperthreading.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/HW2Wcx-ktsc" title="Multithreading Models &amp; Hyperthreading" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <h3>Advantages of Multithreading</h3>
        <ul>
          <li>Efficient CPU utilization by parallelizing tasks.</li>
          <li>Faster execution and improved application responsiveness.</li>
          <li>Resource sharing among threads within a process.</li>
          <li>Simplified program structure for handling multiple tasks concurrently.</li>
        </ul>
        
        <h3>Challenges of Multithreading</h3>
        <ul>
          <li>Synchronization issues: Threads may conflict when accessing shared resources.</li>
          <li>Race conditions: Multiple threads modifying shared data simultaneously.</li>
          <li>Deadlocks: Threads waiting indefinitely for resources held by others.</li>
          <li>Debugging complexity: Errors in multithreaded programs can be difficult to reproduce.</li>
        </ul>
        
        <h3>Mind Map</h3>
        <p>This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Multithreading+models+and+Hyperthreading.svg" alt="Mind map" />
        
        <h4>Bonus Content</h4>
        <p>This section is optional, and learners who want to explore the topics covered so far can utilize the materials provided below.</p>
        
        <a href="https://www.baeldung.com/cs/multithreading-vs-hyperthreading#:~:text=Hyperthreading%20breaks%20a%20single%20physical,distinction%20between%20the%20two%20techniques" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>Multithreading vs Hyperthreading - baeldung</a>
        <br />
        <a href="https://www.geeksforgeeks.org/operating-systems/difference-between-user-level-thread-and-kernel-level-thread/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>Difference between User Level thread and Kernel Level thread - GeeksforGeeks</a>
        <br />
        <a href="https://unstop.com/blog/multithreading-in-os" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>Multithreading In Operating Systems - Types, Pros, Cons And More - unstop</a>
      </section>
    </div>
  );
};

export default Module2_2;
