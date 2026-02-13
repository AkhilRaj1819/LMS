'use client';
import React from 'react';

const Module1_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.1</div>
        <div className="lesson-title-main">
          <h1>Getting Started with OS</h1>
        </div>
      </div>

      <section className="content-section">

        <p>Hey Everyone!</p>

        <p>
          Imagine walking into an airport. Flights are landing and taking off every minute, luggage is being sorted,
          passengers are checking in, and air traffic controllers are coordinating hundreds of movements at once.
          Everything happens according to a system — organized, timed, and managed carefully so nothing collides or gets lost.
        </p>

        {/* 👉 Place an image here:
            Image of a busy airport terminal / airport operations / air traffic control */}
        <img
  src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%2BSystems%2Fairplane.gif"
  alt="Busy airport operations"
  style={{
    width: 380,
    height: 260,
    objectFit: 'contain',
    display: 'block',
    margin: '32px auto',
    borderRadius: 12,
    background: '#ffffff',
  }}
/>


        <p>
          Now, think of your computer working in the same way. Every app you open, every file you save, every click you make
          - all of it relies on a hidden manager that keeps everything running smoothly. This invisible force is what we
          call the Operating System.
        </p>

        {/* 👉 Place an image here:
            Diagram showing Operating System between hardware and applications */}
        <img
          src="/images/os-between-hardware-and-apps.png"
          alt="Operating system between hardware and applications"
          className="lesson-image"
        />

        <p>
          This lesson is your Course Overview. It will give you a clear picture of what you’ll learn throughout the
          Operating Systems course and how each part connects to the next.
        </p>

        <p>Let's get started.</p>

        <h3>Learning Objectives</h3>

        <p>By the end of this course, you’ll be fully equipped to:</p>

        <ul>
          <li>Understand and explain core operating system concepts like process management, memory allocation, and file systems.</li>
          <li>Analyze and troubleshoot real-world OS-level problems, including deadlocks, scheduling issues, and resource contention.</li>
          <li>Design and evaluate efficient CPU scheduling and memory management strategies for different use cases.</li>
          <li>Apply operating system principles in areas like systems programming, performance tuning, and interview preparation.</li>
        </ul>

        <p>
          💡 Recruiters and hiring managers don’t just assess what you know about operating systems, but how well you can
          apply that knowledge to real-world scenarios. This course helps you build a systems-thinking mindset focused on
          clarity, efficiency, and precision.
        </p>

        <h3>Why This Course?</h3>

        <p>
          Unlike generic OS tutorials, this course is structured for depth, clarity, and practical impact. It's crafted
          to bridge academic foundations with real-world applications. You won’t just learn how an OS works—you’ll learn
          to explain, optimize, and apply its concepts in interviews, projects, and system-level problem-solving.
        </p>

        

        {/* 👉 Place an image here:
            Illustration showing learning journey / roadmap / structured learning path */}
        <img
  src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/ISA+(9).jpg"
  alt="Structured learning journey"
  className="lesson-image"
  style={{
    display: 'block',
    margin: '32px auto'
  }}
/>


        <p>This is more than just an Operating Systems course:</p>

        <h3>Structured Learning Journey</h3>
        <p>Carefully crafted to help you understand not just what an OS does, but why it matters.</p>

        <h3>Conceptual Progression</h3>
        <p>Each module builds on the previous—ensuring clarity without overwhelming jumps.</p>

        <h3>Diverse Assessments</h3>
        <p>From MCQs and diagram questions to hands-on activities and code walkthroughs—designed for well-rounded mastery.</p>

        <h3>Practical Relevance</h3>
        <p>Concepts are tied to real-world systems, troubleshooting cases, and industry-aligned OS scenarios.</p>

        <h3>What’s Expected From You</h3>

        <p>
          This course covers all the essential OS concepts and graded activities, but to truly internalize the subject,
          you’ll need to:
        </p>

        <ul>
          <li>Work through the additional practice questions provided after each major topic.</li>
          <li>Revisit core explanations and live sessions with a system-level problem-solving mindset.</li>
          <li>Dive into the system scenario-based assessments that reflect real-world and interview-level OS challenges.</li>
        </ul>

        <p>📌 Note: There’s no shortcut to mastery. Practice + Conceptual Clarity is the key!</p>

        <p>Now, let's look into the course outcomes.</p>

        <h3>Course Outcomes</h3>

        <ul>
          <li>CO1: Explain and illustrate the fundamental concepts of operating systems, including system calls, processes, and core design principles.</li>
          <li>CO2: Analyze and implement various CPU scheduling algorithms and multithreading models to enhance process efficiency and optimize CPU utilization in operating systems.</li>
          <li>CO3: Examine synchronization challenges and implement appropriate deadlock handling mechanisms to ensure efficient concurrent execution.</li>
          <li>CO4: Evaluate memory management techniques, including paging, segmentation, and partition allocation, to understand the organization, allocation, and efficient management of system memory.</li>
          <li>CO5: Analyze file system architectures and storage management techniques for efficient data organization and retrieval.</li>
          <li>CO6: Demonstrate proficiency in utilizing the Linux operating system, including system navigation, file management, and the application of essential tools for system and network operations.</li>
        </ul>

        <h3>Flow of the Course</h3>

        <p>
          There are five modules. Each module includes conceptual assignments, visual walkthroughs, and system-level
          exercises to strengthen your understanding.
        </p>

        {/* 👉 Place an image here:
            Visual showing all 5 OS modules (overview diagram / course flow chart) */}
        <img
          src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%2BSystems%2Fover1.jpg"
          alt="Operating systems course flow"
          className="lesson-image"
          style={{
    width: 380,
    height: 260,
    objectFit: 'contain',
    display: 'block',
    margin: '32px auto',
    borderRadius: 12,
    background: '#ffffff',
  }}
        />

        <h3>Getting started with OS</h3>
        <p>
          Introduces the purpose, structure, and core functions of operating systems — the software that manages hardware
          and enables program execution. Covers system calls, process creation, and interprocess communication mechanisms
          such as shared memory, message passing, and remote procedure calls. Learners explore how OS design choices
          influence efficiency, reliability, and usability across different system architectures.
        </p>

        <h3>Threads and CPU scheduling</h3>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%2BSystems%2Fover2.jpg" alt=""
         style={{
    width: 380,
    height: 260,
    objectFit: 'contain',
    display: 'block',
    margin: '32px auto',
    borderRadius: 12,
    background: '#ffffff',
  }} />
        
        <p>
          Explores the fundamental unit of execution — the thread — and its relationship with processes. Covers
          multithreading models, hyperthreading, and the issues that arise from concurrent execution. Introduces CPU
          scheduling concepts and algorithms including FCFS, SJF, Priority, and Round Robin.
        </p>

        <h3>Process Synchronization and Deadlocks</h3>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%2BSystems%2Fover3.jpg" alt=""
        style={{
    width: 380,
    height: 260,
    objectFit: 'contain',
    display: 'block',
    margin: '32px auto',
    borderRadius: 12,
    background: '#ffffff',
  }}
        />
        <p>
          Delves into the challenges of coordinating multiple processes that share resources. Explains synchronization
          mechanisms such as semaphores, locks, and monitors, along with classical concurrency problems like
          producer-consumer and dining philosophers. Introduces deadlocks — their causes, prevention, avoidance,
          and recovery strategies.
        </p>

        <h3>Memory Management</h3>
         <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%2BSystems%2Fover4.jpg" alt="" 
         style={{
    width: 380,
    height: 260,
    objectFit: 'contain',
    display: 'block',
    margin: '32px auto',
    borderRadius: 12,
    background: '#ffffff',
  }} />
        <p>
          Explains how operating systems allocate, manage, and optimize main memory to support multiple processes.
          Covers partitioning schemes, paging, and segmentation with practical assignments on page replacement algorithms
          like FIFO, Optimal, and LRU.
        </p>

        <h3>Storage Management & Linux</h3>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%2BSystems%2Fover5.jpg" alt="" 
        style={{
    width: 380,
    height: 260,
    objectFit: 'contain',
    display: 'block',
    margin: '32px auto',
    borderRadius: 12,
    background: '#ffffff',
  }}/>
        <p>
          Focuses on how operating systems handle long-term data storage and retrieval. Discusses file system structures,
          allocation methods, crash recovery, protection techniques, and RAID configurations for reliability.
          The module concludes with a practical Linux lab series.
        </p>

        <p>To ensure a holistic understanding, the course includes:</p>

        <ul>
          <li>MCQs – Test your theoretical understanding.</li>
          <li>Coding Assignments – Write and optimize code for classic and real-world problems.</li>
          <li>Bonus Practice lessons – For your additional practice.</li>
          <li>Subjective Questions – Evaluate deeper conceptual understanding.</li>
        </ul>

        <p>
          This course is more than just clearing exams—it's about thinking like a systems engineer. Be consistent,
          explore the "why" behind the design, and stay curious.
        </p>

        <h3>Activity 🎉</h3>

        <p>
          Now, you will play the online game Operating Systems Rush to explore different operating systems like Windows,
          Linux, and macOS in a fun and interactive way.
        </p>

        {/* 👉 Place an image here:
            Screenshot or banner of the “Operating Systems Rush” online game */}
        <img
          src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%2BSystems%2Fminions.gif"
          alt="Operating systems rush game"
          className="lesson-image"
        />

        <p>
  <a
    href="https://planeta42.com/it/funos/#google_vignette"
    target="_blank"
    rel="noreferrer"
    className="text-blue-600 underline hover:text-blue-900"
  >
    Here is the link
  </a>
</p>


        <p>
          As you play, you will collect the correct OS blocks to earn points. After the game, you will reflect on the
          characteristics of each operating system and discuss why operating systems are important for managing tasks,
          resources, and overall system efficiency. Discussion will be led by your mentor.
        </p>

        <p>
          This activity lets you learn by doing while also encouraging critical thinking, providing a meaningful and
          engaging start to your journey in understanding operating systems.
        </p>

        <p>And that's a wrap for this lesson!</p>

      </section>
    </div>
  );
};

export default Module1_1;
