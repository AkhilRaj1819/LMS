'use client';
import React from 'react';

const Module1_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.4</div>
        <div className="lesson-title-main">
          <h1>System Calls and Programs</h1>
        </div>
      </div>

      <section className="content-section">

        <p>
          In this lesson, you’ll dive into the concept of system calls and system programs, two essential
          building blocks of operating systems.
        </p>
        <img src="https://media.tenor.com/Wy0aK-SkjmcAAAAi/start-begin.gif" alt="" />

        <p>Credits: tenor</p>

        {/* 👉 Add GIF / image from Tenor here */}

        <p>
          A system call acts as a bridge between user programs and the operating system. When a program
          needs a service like accessing a file or managing memory it makes a request, and the OS fulfills
          it by executing a series of system calls. These calls can be written in assembly language or
          high-level languages like C or Pascal. If a high-level language is used, the operating system
          provides predefined functions that can directly invoke these system calls.
        </p>

        <h3>What is a System Call?</h3>

        <p>
          A system call is a fundamental concept in operating systems, and it can be defined in several
          ways:
        </p>

        <ul>
          <li>It’s a way for a program to request a service from the operating system’s kernel.</li>
          <li>It’s a mechanism that allows programs to interact with the OS.</li>
          <li>
            It’s a request made by software to the kernel for specific operations, such as accessing files,
            managing memory, or communicating with devices.
          </li>
        </ul>

        <p>
          The Application Program Interface (API) acts as the bridge between the operating system and user
          programs. It provides a set of predefined functions that allow programs to request OS services
          without needing to understand the complex details of how those services are implemented.
        </p>

        <p>
          At the core of the OS is the kernel system, which manages critical functions like memory
          allocation, process scheduling, and device communication. Access to the kernel is strictly
          controlled—programs can only interact with it through system calls. These calls are essential
          for any program that needs to use system resources like memory, files, or devices.
        </p>

        <p>
          To understand how this works, let’s look at the distinction between User Mode and Kernel Mode:
        </p>

        <ul>
          <li>
            Programs running in User Mode don’t have direct access to hardware or critical system
            resources.
          </li>
          <li>
            Instead, they rely on system calls to request operations, which are then executed in Kernel
            Mode, where the OS has full control over the system.
          </li>
        </ul>

        <p>
          This separation is crucial for system security. By restricting direct hardware access to the OS,
          system calls ensure that programs can only interact with resources in a controlled and secure
          manner, preventing unauthorized access and potential system crashes.
        </p>

        <h3>How Are System Calls Executed?</h3>

        <p>
          When a computer software needs to access the operating system's kernel, it makes a system call.
        </p>

        <h3>How Does the System Call Execution Flow Work?</h3>

        <p>
          This diagram illustrates the step-by-step execution flow of a system call. It shows how control
          transitions from user space to kernel space and back, ensuring secure access to system
          resources.
        </p>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/system-call-steps-execution.webp" alt="" />

        {/* 👉 Image here
            Image Credits: Phoenixnap */}

        <p>
          A system call lets a program ask the operating system to perform tasks by switching from user
          mode to kernel mode. This switch allows the system to safely handle important operations. Now,
          we can look at the core idea behind this process, as shown in the images.
        </p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/OS-system-calls.png" alt="" />

        {/* 👉 Image here
            Image Credits: PrepBytes */}

        <p>
          The system call uses an API to expose the operating system's services to user programs. It is the
          only method to access the kernel system. All programs or processes that require resources for
          execution must use system calls, as they serve as an interface between the operating system and
          user programs.
        </p>

        <p>Below are some examples of how a system call varies from a user function.</p>

        <ul>
          <li>
            A system call function may create and use kernel processes to execute the asynchronous
            processing.
          </li>
          <li>
            A system call has greater authority than a standard subroutine. A system call with
            kernel-mode privilege executes in the kernel protection domain.
          </li>
          <li>
            System calls are not permitted to use shared libraries or any symbols that are not present in
            the kernel protection domain.
          </li>
          <li>The code and data for system calls are stored in global kernel memory.</li>
        </ul>

        <h3>Why Are System Calls Important?</h3>

        <p>
          System calls are the glue that connects applications to the operating system. Without them, apps
          like Netflix wouldn’t be able to access files, manage processes, or interact with hardware. They
          ensure that applications run securely, efficiently, and seamlessly.
        </p>
        

        <h3>Features of System Calls</h3>
        <img src="https://kq-storage.kalvium.community/system%20calls.jpg" alt="" />

        <p>
          To understand how this works, let’s look at the distinction between User Mode and Kernel Mode:
        </p>

        <ul>
          <li>
            Programs running in User Mode don’t have direct access to hardware or critical system
            resources.
          </li>
          <li>
            Instead, they rely on system calls to request operations, which are then executed in Kernel
            Mode, where the OS has full control over the system.
          </li>
        </ul>

        <p>
          System calls are the backbone of how applications interact with the operating system (OS). They
          allow programs to request services like file access, process management, and device control. In
          this guide, we’ll break down the five main types of system calls in a way that’s easy to
          understand, with a real-world example to bring it all to life.
        </p>

        <h3>Real-World Use Case: Streaming a Movie on Netflix</h3>

        <p>
          Imagine you’re streaming a movie on Netflix. Behind the scenes, system calls are working
          tirelessly to make this happen. Let’s see how each type of system call plays a role:
        </p>

        <ul>
          <li>
            <strong>Process Control:</strong> Netflix creates processes to handle video decoding,
            buffering, and user input.
          </li>
          <li>
            <strong>File Manipulation:</strong> The app accesses video files stored on Netflix’s servers.
          </li>
          <li>
            <strong>Device Manipulation:</strong> It interacts with your device’s hardware, like the
            screen and speakers.
          </li>
          <li>
            <strong>Information Maintenance:</strong> It checks system time for playback synchronization
            and retrieves device attributes.
          </li>
          <li>
            <strong>Communications:</strong> Netflix sends and receives data over the internet to stream
            the movie.
          </li>
        </ul>

        <p>Now, let’s explore each type of system call in detail.</p>

        <h3>1. Process Control</h3>

        <p>
          Process control system calls manage the lifecycle and behavior of processes. In our Netflix
          example, these calls handle tasks like starting the video player, pausing playback, or
          terminating background processes when you close the app.
        </p>

        <p>
          <strong>Key Examples:</strong>
        </p>

        <ul>
          <li>create process: Start the video player.</li>
          <li>terminate process: Stop the app when you exit.</li>
          <li>wait event: Pause playback until you hit "play."</li>
        </ul>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/OS-system-calls-process-flow.png" alt="" />

        <p>
          <strong>Process Control</strong>
        </p>

        {/* 👉 Image here
            Image Credits: Scaler
            Image: A flowchart showing how processes are created, managed, and terminated.
            This image is provided for context not mandatory. */}

        <h3>2. File Manipulation</h3>

        <p>
          File manipulation system calls handle file operations like reading, writing, and deleting. For
          Netflix, these calls are used to access video files stored on servers and manage temporary files
          for buffering.
        </p>

        <p>
          <strong>Key Examples:</strong>
        </p>

        <ul>
          <li>open, close: Open a video file for streaming and close it after playback.</li>
          <li>read: Read video data from the file.</li>
          <li>get file attributes: Check the size and format of the video file.</li>
        </ul>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/OS-system-calls-file-sys.png" alt="" />

        {/* 👉 Image here
            Image Credits: dev.to
            Image: A file system diagram showing how files are accessed and managed. */}

        <h3>3. Device Manipulation</h3>

        <p>
          Device manipulation system calls interact with hardware devices. In Netflix, these calls ensure
          the video is displayed on your screen and the audio is played through your speakers.
        </p>

        <p>
          <strong>Key Examples:</strong>
        </p>

        <ul>
          <li>request device: Access your device’s GPU for video rendering.</li>
          <li>read, write: Send audio data to your speakers.</li>
          <li>get device attributes: Check screen resolution for optimal video quality.</li>
        </ul>

        <h3>4. Information Maintenance</h3>

        <p>
          Information maintenance system calls retrieve or update system information. Netflix uses these
          to synchronize playback, check system time, and ensure smooth streaming.
        </p>

        <p>
          <strong>Key Examples:</strong>
        </p>

        <ul>
          <li>get time: Sync video playback with subtitles.</li>
          <li>get system data: Check available memory for buffering.</li>
          <li>set process attributes: Adjust video quality based on network speed.</li>
        </ul>

        <h3>5. Communications</h3>

        <p>
          Communication system calls enable data exchange between processes or over networks. Netflix
          relies on these to stream video data from its servers to your device.
        </p>

        <p>
          <strong>Key Examples:</strong>
        </p>

        <ul>
          <li>create communication connection: Establish a connection to Netflix’s servers.</li>
          <li>send, receive messages: Send playback requests and receive video data.</li>
        </ul>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/OS-chromecast.png" alt="" />

        {/* 👉 Image here
            Image credits: HowStuffWorks
            attach remote devices: Connect to external devices like Chromecast like seen in the image above. */}

        <h3>System Programs</h3>

        <p>
          System programs are utilities provided by the operating system that make it easier for users and
          developers to perform tasks. These programs abstract low-level operations, offering simple
          interfaces to interact with the system.
        </p>

        <p>
          <strong>Examples of System Programs:</strong>
        </p>

        <ul>
          <li>
            <strong>File Management Utilities:</strong> Commands like cp and mv in UNIX or the graphical
            file explorer in Windows.
          </li>
          <li>
            <strong>Process Monitoring Tools:</strong> Utilities like top in Linux or Task Manager in
            Windows to observe system activity.
          </li>
          <li>
            <strong>Communication Tools:</strong> Email clients, messaging applications, or file transfer
            protocols.
          </li>
          <li>
            <strong>Program Execution Utilities:</strong> Tools to compile, execute, or debug programs,
            such as gcc or gdb in Linux.
          </li>
        </ul>

        <p>
          These tools are essential for both system administration and everyday use, making system
          functionalities more user-friendly.
        </p>

        <p>Take a look at the video given below to understand system programs.</p>

        {/* 👉 Add video embed here for system programs */}
        <iframe width="414" height="360" src="https://www.youtube.com/embed/UWDzhz8MVqc" title="System Programs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <p>
          System calls provide secure access to system resources. Can you think of scenarios where poorly
          implemented system calls could compromise system security?
        </p>

        <p>
          A poorly implemented system call can compromise security by exposing vulnerabilities, such as
          unauthorized access to sensitive data or allowing malicious programs to exploit bugs for
          privilege escalation. For example, if a system call fails to validate user inputs properly,
          attackers could execute arbitrary code or access restricted areas of the system.
        </p>

        <h3>Summary</h3>

        <ul>
          <li>
            <strong>System Calls:</strong> These are mechanisms through which programs request services
            from the operating system, such as file management, process control, or communication between
            processes.
          </li>
          <li>
            <strong>Types of System Calls:</strong> They include process control, file management, device
            management, information maintenance, and communication, each serving specific functionalities
            for smooth application-hardware interaction.
          </li>
          <li>
            <strong>Importance of System Calls:</strong> They act as a bridge between user programs and the
            OS, ensuring secure and efficient execution of tasks requiring hardware or system resources.
          </li>
          <li>
            <strong>System Programs:</strong> These are utilities provided by the operating system to
            facilitate tasks like file manipulation, resource monitoring, and communication, offering a
            user-friendly interface for system-level tasks.
          </li>
          <li>
            <strong>Role of System Programs:</strong> They abstract complex OS operations, enabling users
            and applications to perform operations efficiently without directly interacting with hardware
            or low-level OS components.
          </li>
        </ul>

        <h3>Mind Map</h3>

        <p>
          This section provides a visual summary of the lesson content to enhance conceptual clarity. It is
          intended purely for reference and will not be included in assessments or quizzes.
        </p>

        {/* 👉 Mind map image here */}
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/System+calls+and+programs.svg" alt="" />

        <h3>Bonus Content</h3>

        <p>
          This section is optional, and learners who want to explore the topics covered so far can utilize
          the materials provided below.
        </p>

        <ul>
          <li>
            <a
              href="https://www.guru99.com/system-call-operating-system.html"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-900"
            >
              System Call in OS (Operating System) - guru99
            </a>
          </li>
          <li>
            <a
              href="https://bito.ai/blog/understanding-system-calls-in-operating-systems/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-900"
            >
              Understanding System Calls in Operating Systems - bito.ai
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/system-programs-in-operating-system/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-900"
            >
              System Programs in Operating System - GeeksforGeeks
            </a>
          </li>
        </ul>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_system_calls_gif.gif" alt="" />

        <p>Now, let's progress to the next lesson!</p>

      </section>
    </div>
  );
};

export default Module1_4;
