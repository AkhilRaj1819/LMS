'use client';
import React from 'react';

const Module1_1: React.FC = () => {
  return (
    <div className="module-content">

      <div className="lesson-header">
        <div className="lesson-number-badge">1.2</div>
        <div className="lesson-title-main">
          <h1>Introduction to Operating Systems</h1>
        </div>
      </div>

      <section className="content-section">

        <p>
          Have you ever wondered what actually happens when you press the power button on your computer or smartphone?
          How does the screen light up, apps start running, and everything just works without you needing to control every tiny component?
        </p>

        {/* Image from file (Windows XP / boot image)
            👉 Paste the base64 image from the HTML file here */}
        { <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VnNHkwZG0ybXY2MDIxbDAxb2w5ZHZxbWp5Mzl6bXJneHdnOWRmeiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/AqV8uSb8ptxyo7Wyog/giphy.gif" alt="Operating system boot screen" className="lesson-image" /> }

        <p>
          Well, behind all that magic is something called an <strong>Operating System (OS)</strong> – the invisible brain
          that keeps your device alive and responsive.
        </p>

        <h3>What is an Operating System?</h3>

        <p>
          An Operating System (OS) is a special type of software that runs on a computer.
          Think of it as the manager of the computer; it takes care of everything, making sure all parts of the system
          work smoothly together. It acts as a bridge between the user, the software, and the computer’s hardware,
          like the processor, memory, and storage.
        </p>

        <p>
          The OS makes sure all the computer's resources, like its memory and CPU, are used efficiently.
          It also handles important tasks, like running programs, managing files, and keeping things secure.
          Simply put, the OS is the backbone of a computer that ensures everything runs without problems.
        </p>

        <p>
          For example, popular operating systems you might have heard of include Windows, Linux, and macOS.
        </p>

        {/* Illustration image shown under this section in file */}
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_intro_cover.jpg" alt="" />

        <p>
          Now that we understand what an operating system is, let’s explore why it plays such a crucial role in
          managing computer systems and making them user-friendly.
        </p>

        <h3>Why do we need an Operating System?</h3>

        <p>
          Imagine trying to use a computer where every task like opening a file, running an app, or saving your work
          had to be done manually by interacting directly with the hardware. Sounds impossible, right?
          That’s where the Operating System (OS) steps in!
        </p>

        <h4>Simplifies User Interaction</h4>
        <p>
          The OS provides an interface either Graphical (GUI) or Command-Line (CLI) that lets users communicate with the
          hardware easily. Without it, users would need to know complex hardware instructions just to perform basic
          actions like printing a file or browsing the internet.
        </p>

        <h4>Manages Hardware Resources</h4>
        <p>
          Every computer has multiple components like the CPU, memory, input/output devices, and storage.
          The OS ensures these resources are allocated properly to different tasks and prevents conflicts when multiple
          programs run simultaneously.
        </p>

        <h4>Enables Multitasking</h4>
        <p>
          Modern operating systems allow you to run multiple programs at the same time.
          For example, listening to music while typing a document and downloading a file in the background.
          The OS handles process scheduling so everything runs smoothly without crashing.
        </p>

        <h4>Provides File and Data Management</h4>
        <p>
          The OS organizes data into files and folders, helping users store, retrieve, and modify information easily.
          It keeps track of where files are stored and manages permissions to prevent unauthorized access.
        </p>

        <h4>Ensures Security and Stability</h4>
        <p>
          The OS acts as a guardian, protecting your system from unauthorized access, viruses, and hardware misuse.
          It controls who can access what, manages passwords, and ensures stable operation even if one program fails.
        </p>

        <h4>Manages Communication and Networking</h4>
        <p>
          The OS handles network connections, allowing data to flow between devices.
          It supports network protocols like TCP/IP and ensures secure file sharing, internet browsing,
          and online communication.
        </p>

        <h4>Improves Performance and Efficiency</h4>
        <p>
          By coordinating all activities, the OS maximizes CPU utilization, balances workloads,
          and ensures programs use resources efficiently giving users faster and smoother performance.
        </p>

        <p>
          <strong>In short:</strong> The Operating System is the heart and soul of a computer system managing resources,
          simplifying interaction, ensuring security, and keeping everything running in harmony.
          Without an OS, using a computer would feel like driving a car without a steering wheel – all power, no control!
        </p>

        <h3>Types of OS</h3>

        <p>
          Operating Systems come in various types, each designed for specific environments and user needs.
          Let’s explore the main ones with their features, uses, and examples.
        </p>

        <h4>Batch Operating System</h4>
        <ul>
          <li>Executes batches of jobs automatically without user interaction.</li>
          <li>Efficient for large repetitive tasks.</li>
          <li>Common in early mainframe systems.</li>
        </ul>
        <p><strong>Example:</strong> IBM OS/360, early scientific computing systems.</p>

        <h4>Time-Sharing (Multitasking) OS</h4>
        <ul>
          <li>Each process gets a small time slice.</li>
          <li>Improves responsiveness and system utilization.</li>
          <li>Ideal for personal computers and servers.</li>
        </ul>
        <p><strong>Example:</strong> UNIX, Linux, Windows 10.</p>

        <h4>Distributed Operating System</h4>
        <ul>
          <li>Manages a group of networked computers as a single system.</li>
          <li>Improves scalability and reliability.</li>
          <li>Used in cloud and cluster environments.</li>
        </ul>
        <p><strong>Example:</strong> Google’s Android Things, Amoeba, Microsoft Azure platform.</p>

        <h4>Real-Time Operating System (RTOS)</h4>
        <ul>
          <li>Ensures immediate response to input events.</li>
          <li>Essential for safety-critical systems.</li>
          <li>Used in robotics, defense, and healthcare devices.</li>
        </ul>
        <p><strong>Example:</strong> VxWorks, QNX, FreeRTOS.</p>

        <h4>Mobile Operating System</h4>
        <ul>
          <li>Optimized for mobile processors and sensors.</li>
          <li>Provides secure app environments.</li>
          <li>Supports wireless communication and touch-based UI.</li>
        </ul>
        <p><strong>Example:</strong> Android, iOS.</p>

        <h4>Embedded Operating System</h4>
        <ul>
          <li>Designed for devices with limited resources.</li>
          <li>Highly stable and efficient.</li>
          <li>Used in home appliances and vehicles.</li>
        </ul>
        <p><strong>Example:</strong> Embedded Linux, Windows IoT, Contiki.</p>

        <h3>Operating System: Multiprogramming and Multitasking</h3>

        <h4>Multiprogramming</h4>
        <ul>
          <li>Allows multiple programs to reside in memory simultaneously.</li>
          <li>The CPU switches to another program when one waits for I/O.</li>
          <li>Increases CPU utilization.</li>
        </ul>

        <h4>Multitasking</h4>
        <ul>
          <li>Allows multiple tasks to appear to run at the same time.</li>
          <li>The OS rapidly switches between tasks.</li>
          <li>Improves user experience and responsiveness.</li>
        </ul>

        {/* Video thumbnail shown in file */}
        {/* 👉 Add video thumbnail image here */}

        <h3>Operating System Services</h3>

        <h4>Process Management</h4>
        <ul>
          <li>Manages running programs.</li>
          <li>Handles creation, scheduling, and termination.</li>
          <li>Supports multitasking.</li>
        </ul>

        <h4>Memory Management</h4>
        <ul>
          <li>Allocates memory to processes.</li>
          <li>Provides virtual memory.</li>
        </ul>

        <h4>File Management</h4>
        <ul>
          <li>Manages files, directories, and permissions.</li>
          <li>Organizes data on storage devices.</li>
        </ul>

        <h4>Device Management</h4>
        <ul>
          <li>The OS manages hardware devices like printers, monitors, and hard drives.</li>
          <li>It provides device drivers, which translate requests from programs into commands the hardware can understand.</li>
          <li>Ensures proper communication between the system and devices.</li>
        </ul>

        <h4>Security and Access Control</h4>
        <ul>
          <li>The OS provides security services to protect data and prevent unauthorized access.</li>
          <li>It uses user authentication (e.g., passwords, biometrics) and access control lists (ACLs).</li>
          <li>Ensures only authorized users can access specific files or system resources.</li>
        </ul>

        <h4>Network Management</h4>
        <ul>
          <li>The OS provides services to manage network connections.
</li>
          <li>Handles communication between computers, data transmission, and network security.
</li>
        <li>Supports protocols like TCP/IP and enables networked services like file sharing and internet browsing.</li>
        </ul>

        <h3>Operating System User Interfaces</h3>
        <p>An Operating System (OS) User Interface allows users to interact with the computer. It acts as a bridge between the user and the system. The two types of User Interfaces</p>

        <h4>Command-Line Interface (CLI)</h4>
        <p>
          The Command-Line Interface allows users to interact with the computer through text commands. It’s highly efficient and suitable for power users or systems that require precision and speed. CLI is resource-light and ideal for environments like servers, embedded systems, or mission-critical operations such as space stations.
        </p>

        <h4>Graphical User Interface (GUI)</h4>
        <p>
          A Graphical User Interface allows users to interact with visual elements like icons, windows, and buttons. It is intuitive and user-friendly, making it perfect for general users. GUIs are widely used in desktops, mobile devices, and interactive systems, helping users visualize data easily.
        </p>

        <h6>When building an operating system for a mission-critical space station control system, would a Command-Line Interface (CLI) or a Graphical User Interface (GUI) be more suitable?</h6>

        <p>A Command-Line Interface (CLI) is better for a mission-critical space station system. It is fast, uses fewer system resources, and gives precise control. It also reduces the chance of mistakes, like accidental clicks, and supports automation. A Graphical User Interface (GUI) can still be used to help visualize data and monitor system status.</p>

        <h3>Summary</h3>

        <ul>
          <li>An OS is system software that manages computer hardware, software, and resources, acting as an interface between the user and the hardware.</li>
          <li>Key types include Batch OS, Time-Sharing OS, Distributed OS, Real-Time OS, and Mobile OS, each designed for specific environments and use cases.</li>
          <li>OS structures include Monolithic, Layered, Microkernel, and Hybrid, determining how components like kernel, drivers, and user services interact.
</li>
          <li>Core services include process management, memory management, file system management, I/O device handling, and security to ensure smooth operations.</li>
          <li>Operating systems offer interfaces like Command-Line Interface (CLI) for precise control and Graphical User Interface (GUI) for ease of use and accessibility.</li>
        </ul>

        <h3>Mind Map</h3>

        <p>
          This section provides a visual summary of the lesson content to enhance conceptual clarity. It is intended purely for reference and will not be included in assessments or quizzes.
        </p>

        {/* Mind-map SVG image from file */}
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Introduction+to+Operating+System.svg" alt="" />

        <p>Let's move on to the next lesson!</p>

      </section>
    </div>
  );
};

export default Module1_1;
