'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule }) => {
  const module1Quiz = [
    {
      question: "What is a process?",
      options: ["A program in execution", "A program stored on disk", "A CPU instruction", "A memory location"],
      correctAnswer: 0,
      explanation: "A process is a program in execution. It includes the program code, current activity, and allocated resources."
    },
    {
      question: "Which state comes after the 'Ready' state?",
      options: ["New", "Running", "Waiting", "Terminated"],
      correctAnswer: 1,
      explanation: "After Ready state, when the scheduler selects the process, it moves to Running state."
    },
    {
      question: "What does PCB stand for?",
      options: ["Process Control Block", "Program Control Block", "Process Code Block", "Program Code Block"],
      correctAnswer: 0,
      explanation: "PCB stands for Process Control Block, which contains all information about a process."
    }
  ];

  const module2Quiz = [
    {
      question: "Which scheduler selects processes from the job pool?",
      options: ["Short-term scheduler", "Long-term scheduler", "Medium-term scheduler", "CPU scheduler"],
      correctAnswer: 1,
      explanation: "Long-term scheduler (job scheduler) selects processes from the job pool and loads them into memory."
    },
    {
      question: "What is the main criterion for FCFS scheduling?",
      options: ["Priority", "Burst time", "Arrival time", "Deadline"],
      correctAnswer: 2,
      explanation: "FCFS (First Come First Serve) schedules processes based on their arrival time."
    },
    {
      question: "Which scheduling algorithm is optimal?",
      options: ["FCFS", "SJF", "Round Robin", "Priority"],
      correctAnswer: 1,
      explanation: "SJF (Shortest Job First) is optimal as it gives minimum average waiting time."
    }
  ];

  const module3Quiz = [
    {
      question: "In FCFS scheduling, which process is executed first?",
      options: ["Shortest process", "Highest priority", "First arrived process", "Last arrived process"],
      correctAnswer: 2,
      explanation: "FCFS executes processes in the order they arrive in the ready queue."
    },
    {
      question: "What is the main disadvantage of FCFS?",
      options: ["Complex implementation", "Convoy effect", "High overhead", "Starvation"],
      correctAnswer: 1,
      explanation: "FCFS suffers from convoy effect where short processes wait for long processes."
    },
    {
      question: "Which algorithm can cause starvation?",
      options: ["FCFS", "Round Robin", "Priority Scheduling", "SJF"],
      correctAnswer: 2,
      explanation: "Priority scheduling can cause starvation where low priority processes may never execute."
    }
  ];

  const module4Quiz = [
    {
      question: "What is a thread?",
      options: ["A lightweight process", "A heavy process", "A system call", "A scheduler"],
      correctAnswer: 0,
      explanation: "A thread is a lightweight process, the basic unit of CPU utilization."
    },
    {
      question: "What is IPC?",
      options: ["Internet Protocol Communication", "Inter-Process Communication", "Internal Process Control", "Integrated Process Communication"],
      correctAnswer: 1,
      explanation: "IPC stands for Inter-Process Communication, mechanisms for processes to communicate."
    },
    {
      question: "Which IPC mechanism uses a buffer?",
      options: ["Shared Memory", "Message Passing", "Pipes", "Sockets"],
      correctAnswer: 1,
      explanation: "Message passing uses a buffer (mailbox) to exchange messages between processes."
    }
  ];

  const unit2Quiz = [
    {
      question: "What happens during context switching?",
      options: ["Process creation", "Saving and loading process state", "Process termination", "Memory allocation"],
      correctAnswer: 1,
      explanation: "Context switching involves saving the state of current process and loading the state of next process."
    },
    {
      question: "Which scheduling is preemptive?",
      options: ["FCFS", "SJF (non-preemptive)", "Round Robin", "All of the above"],
      correctAnswer: 2,
      explanation: "Round Robin is a preemptive scheduling algorithm with time quantum."
    },
    {
      question: "What is the time quantum in Round Robin?",
      options: ["Total execution time", "Fixed time slice", "Waiting time", "Turnaround time"],
      correctAnswer: 1,
      explanation: "Time quantum is a fixed time slice allocated to each process in Round Robin scheduling."
    },
    {
      question: "Which has lower overhead: threads or processes?",
      options: ["Threads", "Processes", "Both equal", "Depends on OS"],
      correctAnswer: 0,
      explanation: "Threads have lower overhead as they share resources within the same process."
    },
    {
      question: "What is the main advantage of multithreading?",
      options: ["Increased memory", "Better resource utilization", "Simpler code", "Faster disk access"],
      correctAnswer: 1,
      explanation: "Multithreading provides better resource utilization and responsiveness."
    },
    {
      question: "What is the difference between user-level and kernel-level threads?",
      options: ["User-level threads are faster", "Kernel-level threads are managed by the OS, user-level by runtime", "User-level threads use more memory", "There is no difference"],
      correctAnswer: 1,
      explanation: "Kernel-level threads are managed by the operating system, while user-level threads are managed by the runtime system."
    },
    {
      question: "What is a race condition?",
      options: ["A situation where two processes compete for the same resource", "An undesirable situation where output depends on sequence of execution", "A type of scheduling algorithm", "A hardware malfunction"],
      correctAnswer: 1,
      explanation: "A race condition is an undesirable situation where the output depends on the sequence or timing of process execution."
    },
    {
      question: "What is mutual exclusion?",
      options: ["A technique to speed up processes", "A requirement that only one process can access a resource at a time", "A type of process state", "A scheduling policy"],
      correctAnswer: 1,
      explanation: "Mutual exclusion is a requirement that only one process can access a critical resource at a time."
    },
    {
      question: "What is a semaphore?",
      options: ["A hardware device", "A synchronization tool that uses integer counters", "A type of memory allocation", "A process scheduling algorithm"],
      correctAnswer: 1,
      explanation: "A semaphore is a synchronization tool that uses integer counters to control access to shared resources."
    },
    {
      question: "What is the producer-consumer problem?",
      options: ["A problem about resource allocation", "A classic synchronization problem involving shared buffer access", "A scheduling problem", "A memory management issue"],
      correctAnswer: 1,
      explanation: "The producer-consumer problem is a classic synchronization problem involving coordinated access to a shared buffer."
    }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.1</div>
              <div className="lesson-title-main">
                <h1>Process Concepts</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is a Process?</h3>
              <p>A process is a program in execution. It is an active entity that requires resources such as CPU time, memory, files, and I/O devices to accomplish its task.</p>
              
              <h4>Difference between Program and Process:</h4>
              <ul>
                <li><strong>Program:</strong> Passive entity stored on disk (executable file)</li>
                <li><strong>Process:</strong> Active entity with program counter and resources</li>
              </ul>

              <h4>Process Components:</h4>
              <ul>
                <li><strong>Text Section:</strong> Executable code (program instructions)</li>
                <li><strong>Data Section:</strong> Global variables and static data</li>
                <li><strong>Stack:</strong> Temporary data (function parameters, return addresses, local variables)</li>
                <li><strong>Heap:</strong> Dynamically allocated memory during runtime</li>
              </ul>

              <h4>Process Characteristics:</h4>
              <ul>
                <li><strong>Identity:</strong> Unique process identifier (PID)</li>
                <li><strong>State:</strong> Current execution status (new, ready, running, waiting, terminated)</li>
                <li><strong>Resources:</strong> Allocated memory, files, I/O devices</li>
                <li><strong>Context:</strong> Register values, program counter, stack pointer</li>
              </ul>

              <div className="image-container">
                <img src="https://cdn-images-1.medium.com/max/900/1*6vsoP1cWzQkN95AlEt2WoA.jpeg" alt="Process in Memory" />
                <p className="image-caption">Figure 2.1: Process in Memory</p>
              </div>

              <h3>Process State Diagram</h3>
              <p>A process goes through various states during its lifetime:</p>
              
              <h4>Process States:</h4>
              <ul>
                <li><strong>New:</strong> Process is being created</li>
                <li><strong>Ready:</strong> Process is waiting to be assigned to processor</li>
                <li><strong>Running:</strong> Instructions are being executed</li>
                <li><strong>Waiting:</strong> Process is waiting for some event (I/O completion)</li>
                <li><strong>Terminated:</strong> Process has finished execution</li>
              </ul>

              <div className="image-container">
                <img src="https://miro.medium.com/1*4NrwsHUMDF7M1OfoMzBsKw.jpeg" alt="Process State Diagram" />
                <p className="image-caption">Figure 2.2: Process State Diagram</p>
              </div>

              <h3>Process Control Block (PCB)</h3>
              <p>PCB is a data structure maintained by the OS for every process. It contains all information about a process.</p>

              <h4>Components of PCB:</h4>
              <ul>
                <li><strong>Process ID (PID):</strong> Unique identifier for the process</li>
                <li><strong>Process State:</strong> Current state (new, ready, running, waiting, terminated)</li>
                <li><strong>Program Counter:</strong> Address of next instruction to execute</li>
                <li><strong>CPU Registers:</strong> Contents of processor registers</li>
                <li><strong>CPU Scheduling Information:</strong> Priority, scheduling queue pointers</li>
                <li><strong>Memory Management Information:</strong> Page tables, segment tables</li>
                <li><strong>Accounting Information:</strong> CPU time used, time limits</li>
                <li><strong>I/O Status Information:</strong> List of I/O devices allocated</li>
              </ul>

              <div className="image-container">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240618163537/Process-Control-Block.png" alt="PCB" />
                <p className="image-caption">Figure 2.3: Process Control Block structure</p>
              </div>

              <h3>Process Operations</h3>

              <h4>1. Process Creation</h4>
              <p>A process may create several new processes during execution. The creating process is called parent, and new processes are called children.</p>
              
              <div className="example-box">
                <h5>Process Creation Steps</h5>
                <ol>
                  <li>Process Request (fork/exec system call)</li>
                  <li>Allocate Process Control Block (PCB)</li>
                  <li>Assign Unique Process ID (PID)</li>
                  <li>Allocate Memory Space</li>
                  <li>Initialize PCB with process attributes</li>
                  <li>Load program code and data into memory</li>
                  <li>Set initial register values and program counter</li>
                  <li>Insert process into ready queue</li>
                  <li>Process becomes eligible for scheduling</li>
                </ol>
              </div>

              <h5>Process Creation Methods:</h5>
              <ul>
                <li><strong>fork():</strong> Create child process (Unix/Linux)</li>
                <li><strong>exec():</strong> Replace process image with new program</li>
                <li><strong>spawn():</strong> Create and execute new process (Windows)</li>
                <li><strong>system():</strong> Execute command via shell</li>
              </ul>

              <h5>Process Hierarchy:</h5>
              <ul>
                <li><strong>Parent Process:</strong> Creates other processes</li>
                <li><strong>Child Process:</strong> Created by parent process</li>
                <li><strong>Process Tree:</strong> Hierarchical process organization</li>
                <li><strong>Zombie Process:</strong> Terminated but not cleaned up by parent</li>
                <li><strong>Orphan Process:</strong> Parent terminated before child</li>
              </ul>

              <h4>2. Process Termination</h4>
              <p>Process terminates when it finishes executing its final statement.</p>
              
              <h5>Termination Conditions:</h5>
              <ul>
                <li><strong>Normal completion:</strong> exit() system call</li>
                <li><strong>Fatal error:</strong> Segmentation fault, divide by zero</li>
                <li><strong>Killed by another process:</strong> kill() system call</li>
                <li><strong>Parent termination:</strong> Cascading termination of children</li>
              </ul>

              <div className="example-box">
                <h5>Example: fork() System Call</h5>
                <p>In Unix/Linux, fork() creates a child process:</p>
                <ul>
                  <li>Returns 0 to child process</li>
                  <li>Returns child's PID to parent process</li>
                  <li>Returns -1 if creation fails</li>
                  <li>Child is duplicate of parent with separate memory space</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Introduction to Processes</h4>
              <p>Comprehensive introduction to processes, process states, and process control block in operating systems.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OrM7nZcxXZU"
                title="Introduction to Processes"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-embed">
              <h4>Process State Diagram</h4>
              <p>Detailed explanation of process state transitions and the process lifecycle.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jZ_6PXoaoxo"
                title="Process State Diagram"
                allowFullScreen
              ></iframe>
            </div>

            <Quiz title="Module 1 Quiz" questions={module1Quiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Process Scheduling →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Process Scheduling</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Process Schedulers</h3>
              <p>Schedulers are special system software that handle process scheduling. There are three types:</p>

              <h4>1. Long-Term Scheduler (Job Scheduler)</h4>
              <ul>
                <li>Selects processes from job pool and loads into memory</li>
                <li>Controls degree of multiprogramming</li>
                <li>Executes less frequently</li>
              </ul>

              <h4>2. Short-Term Scheduler (CPU Scheduler)</h4>
              <ul>
                <li>Selects process from ready queue for execution</li>
                <li>Executes very frequently (milliseconds)</li>
                <li>Must be very fast</li>
              </ul>

              <h4>3. Medium-Term Scheduler</h4>
              <ul>
                <li>Removes processes from memory (swapping)</li>
                <li>Reduces degree of multiprogramming</li>
                <li>Improves process mix</li>
              </ul>

              <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKHItrJ8RsHnrfHCKt7bBIjYO1TVaMlKKFwB-KyLh0orzhkif0JZVZa_P_mnCbZTeOk6CFQ&s=10" alt="Schedulers" />
                <p className="image-caption">Figure 2.4: Types of Schedulers</p>
              </div>

              <h3>Scheduling Criteria</h3>
              <p>Different CPU scheduling algorithms have different properties:</p>

              <ul>
                <li><strong>CPU Utilization:</strong> Keep CPU as busy as possible</li>
                <li><strong>Throughput:</strong> Number of processes completed per time unit</li>
                <li><strong>Turnaround Time:</strong> Time from submission to completion</li>
                <li><strong>Waiting Time:</strong> Time spent in ready queue</li>
                <li><strong>Response Time:</strong> Time from submission to first response</li>
              </ul>

              <h4>Optimization Goals:</h4>
              <ul>
                <li>Maximize CPU utilization</li>
                <li>Maximize throughput</li>
                <li>Minimize turnaround time</li>
                <li>Minimize waiting time</li>
                <li>Minimize response time</li>
              </ul>
            </section>

            <div className="video-embed">
              <h4>Process Schedulers</h4>
              <p>Learn about different types of schedulers and their roles in process management.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/pro8cU5Uzdg"
                title="Process Schedulers"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-embed">
              <h4>CPU Scheduling Criteria</h4>
              <p>Understanding the criteria used to evaluate CPU scheduling algorithms.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/rFt1hwh-8zU"
                title="CPU Scheduling Criteria"
                allowFullScreen
              ></iframe>
            </div>

            <Quiz title="Module 2 Quiz" questions={module2Quiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Process Concepts</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Scheduling Algorithms →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Scheduling Algorithms</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>CPU Scheduling Algorithms</h3>

              <h4>1. First-Come, First-Served (FCFS)</h4>
              <p>Simplest scheduling algorithm. Process that requests CPU first is allocated first.</p>
              <ul>
                <li><strong>Non-preemptive:</strong> Once CPU allocated, process keeps it until termination</li>
                <li><strong>Implementation:</strong> FIFO queue</li>
                <li><strong>Advantage:</strong> Simple to implement</li>
                <li><strong>Disadvantage:</strong> Convoy effect (short processes wait for long ones)</li>
              </ul>

              <div className="image-container">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/FCFS.png" alt="FCFS" />
                <p className="image-caption">Figure 2.5: FCFS Scheduling Example</p>
              </div>

              <h4>2. Shortest Job First (SJF)</h4>
              <p>Associates with each process the length of its next CPU burst. Shortest burst time process is scheduled first.</p>
              <ul>
                <li><strong>Optimal:</strong> Gives minimum average waiting time</li>
                <li><strong>Two schemes:</strong> Non-preemptive and Preemptive (SRTF)</li>
                <li><strong>Advantage:</strong> Minimum average waiting time</li>
                <li><strong>Disadvantage:</strong> Difficult to predict burst time, starvation possible</li>
              </ul>

              <div className="image-container">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20221109131350/SJF.png" alt="SJF" />
                <p className="image-caption">Figure 2.6: SJF Scheduling Example</p>
              </div>

              <h4>3. Priority Scheduling</h4>
              <p>Each process is assigned a priority. CPU is allocated to process with highest priority.</p>
              <ul>
                <li><strong>Preemptive:</strong> Higher priority process preempts running process</li>
                <li><strong>Non-preemptive:</strong> Higher priority waits for current to finish</li>
                <li><strong>Problem:</strong> Starvation (low priority may never execute)</li>
                <li><strong>Solution:</strong> Aging (gradually increase priority)</li>
              </ul>

              <h4>4. Round Robin (RR)</h4>
              <p>Each process gets a small unit of CPU time (time quantum). After quantum expires, process is preempted.</p>
              <ul>
                <li><strong>Preemptive:</strong> Process runs for time quantum then preempted</li>
                <li><strong>Time Quantum:</strong> Typically 10-100 milliseconds</li>
                <li><strong>Advantage:</strong> Fair allocation, good response time</li>
                <li><strong>Disadvantage:</strong> Higher context switching overhead</li>
              </ul>

              <div className="example-box">
                <h5>Example: Round Robin Scheduling</h5>
                <p>Consider 3 processes with Time Quantum = 4ms:</p>
                <ul>
                  <li>P1: Burst Time = 24ms</li>
                  <li>P2: Burst Time = 3ms</li>
                  <li>P3: Burst Time = 3ms</li>
                </ul>
                <p>Execution: P1(0-4) → P2(4-7) → P3(7-10) → P1(10-14) → P1(14-18) → P1(18-22) → P1(22-26)</p>
                <p>Average Waiting Time = (6 + 4 + 7) / 3 = 5.67ms</p>
              </div>

              <h5>Time Quantum Effects:</h5>
              <ul>
                <li><strong>Large quantum:</strong> Behaves like FCFS</li>
                <li><strong>Small quantum:</strong> High context switching overhead</li>
                <li><strong>Optimal quantum:</strong> Balance between response time and overhead</li>
              </ul>

              <h4>5. Multilevel Queue Scheduling</h4>
              <p>Ready queue is partitioned into separate queues based on process type.</p>
              <ul>
                <li>Each queue has its own scheduling algorithm</li>
                <li>Processes permanently assigned to one queue</li>
                <li>Example: Foreground (interactive) vs Background (batch)</li>
              </ul>

              <h4>6. Multilevel Feedback Queue (MLFQ)</h4>
              <p>Allows processes to move between queues based on behavior.</p>
              <ul>
                <li>Processes can move between queues</li>
                <li>Aging prevents starvation</li>
                <li>Most general and complex</li>
                <li>Used in modern operating systems</li>
              </ul>

              <div className="image-container">
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200909154820/ROUNDROBIN.jpg" alt="Round Robin" />
                <p className="image-caption">Figure 2.7: Round Robin Scheduling Example</p>
              </div>

              <h3>Algorithm Comparison</h3>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Algorithm</th>
                      <th>Advantages</th>
                      <th>Disadvantages</th>
                      <th>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>FCFS</td>
                      <td>Simple, fair ordering</td>
                      <td>Convoy effect, poor average performance</td>
                      <td>Batch systems</td>
                    </tr>
                    <tr>
                      <td>SJF</td>
                      <td>Optimal average waiting time</td>
                      <td>Difficult to predict burst time, starvation</td>
                      <td>Batch with known times</td>
                    </tr>
                    <tr>
                      <td>Priority</td>
                      <td>Flexible, customizable</td>
                      <td>Starvation, priority inversion</td>
                      <td>Real-time systems</td>
                    </tr>
                    <tr>
                      <td>Round Robin</td>
                      <td>Fairness, good response time</td>
                      <td>Context switching overhead</td>
                      <td>Time-sharing systems</td>
                    </tr>
                    <tr>
                      <td>Multilevel Queue</td>
                      <td>Process differentiation</td>
                      <td>Potential starvation in lower queues</td>
                      <td>Different process types</td>
                    </tr>
                    <tr>
                      <td>MLFQ</td>
                      <td>Adaptive, balances goals</td>
                      <td>Complex implementation</td>
                      <td>General purpose systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <h5>Example: FCFS vs SJF Comparison</h5>
                <p>Consider processes: P1(24ms), P2(3ms), P3(3ms)</p>
                <p><strong>FCFS:</strong> Average Waiting Time = (0 + 24 + 27) / 3 = 17ms</p>
                <p><strong>SJF:</strong> Average Waiting Time = (6 + 0 + 3) / 3 = 3ms</p>
                <p>SJF reduces average waiting time by 82%!</p>
              </div>
            </section>

            <div className="video-embed">
              <h4>CPU Scheduling Algorithms</h4>
              <p>Comprehensive explanation of FCFS, SJF, Priority, and Round Robin scheduling algorithms.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/YxNyJ-CUINc"
                title="CPU Scheduling Algorithms"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-embed">
              <h4>Scheduling Algorithm Examples</h4>
              <p>Step-by-step examples and calculations for different scheduling algorithms.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/TxjIlNYRZ5M"
                title="Scheduling Algorithm Examples"
                allowFullScreen
              ></iframe>
            </div>

            <Quiz title="Module 3 Quiz" questions={module3Quiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Process Scheduling</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Multithreading & IPC →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.4</div>
              <div className="lesson-title-main">
                <h1>Multithreading & IPC</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Multithreading</h3>
              <p>A thread is a basic unit of CPU utilization. It comprises a thread ID, program counter, register set, and stack.</p>

              <h4>Benefits of Multithreading:</h4>
              <ul>
                <li><strong>Responsiveness:</strong> Application continues running even if part is blocked</li>
                <li><strong>Resource Sharing:</strong> Threads share memory and resources</li>
                <li><strong>Economy:</strong> Cheaper than process creation</li>
                <li><strong>Scalability:</strong> Can utilize multiprocessor architectures</li>
              </ul>

              <div className="image-container">
                <img src="https://i0.wp.com/pediaa.com/wp-content/uploads/2019/02/Difference-Between-Single-Thread-and-Multi-Thread-in-Java-Comparison-Summary.jpg?resize=475%2C376" alt="Multithreading" />
                <p className="image-caption">Figure 2.8: Single-threaded vs Multi-threaded Process</p>
              </div>

              <h3>Multithreading Models</h3>

              <h4>1. Many-to-One Model</h4>
              <ul>
                <li>Many user-level threads mapped to one kernel thread</li>
                <li>Thread management in user space (efficient)</li>
                <li>Entire process blocks if thread makes blocking call</li>
                <li>Cannot run in parallel on multiprocessors</li>
              </ul>

              <h4>2. One-to-One Model</h4>
              <ul>
                <li>Each user thread maps to kernel thread</li>
                <li>More concurrency than many-to-one</li>
                <li>Creating user thread requires kernel thread</li>
                <li>Examples: Windows, Linux</li>
              </ul>

              <h4>3. Many-to-Many Model</h4>
              <ul>
                <li>Many user threads to many kernel threads</li>
                <li>OS creates sufficient kernel threads</li>
                <li>Best of both worlds</li>
                <li>More complex to implement</li>
              </ul>

              <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7epXnbvDojf1Yk-DDgbRM6fMrHN9eaiJL_A&s" alt="Threading Models" />
                <p className="image-caption">Figure 2.9: Multithreading Models</p>
              </div>

              <h3>Inter-Process Communication (IPC)</h3>
              <p>Processes need to communicate and synchronize their actions. IPC provides mechanisms for this.</p>

              <h4>IPC Mechanisms:</h4>

              <h5>1. Shared Memory</h5>
              <ul>
                <li>Region of memory shared between processes</li>
                <li>Fast communication</li>
                <li>Requires synchronization</li>
                <li>Example: Producer-Consumer problem</li>
              </ul>

              <h5>2. Message Passing</h5>
              <ul>
                <li>Processes communicate by exchanging messages</li>
                <li>No shared memory needed</li>
                <li>Useful for distributed systems</li>
                <li>Operations: send(message), receive(message)</li>
              </ul>

              <div className="image-container">
                <img src="https://i.ytimg.com/vi/WYua8GUZlVE/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CIAC0AWKAgwIABABGFkgYyhlMA8=&rs=AOn4CLDBaBXs_5rhWLPG1xKjidLrsbFs-A" alt="IPC" />
                <p className="image-caption">Figure 2.10: Shared Memory vs Message Passing</p>
              </div>

              <h4>Other IPC Mechanisms:</h4>

              <h5>3. Pipes</h5>
              <ul>
                <li><strong>Anonymous Pipes:</strong> Temporary, unidirectional communication</li>
                <li><strong>Named Pipes (FIFO):</strong> Persistent, bidirectional communication</li>
                <li><strong>Implementation:</strong> Kernel-managed buffer</li>
                <li><strong>Usage:</strong> Process chains, shell commands (e.g., ls | grep)</li>
              </ul>

              <h5>4. Message Queues</h5>
              <ul>
                <li><strong>POSIX Message Queues:</strong> Portable interface</li>
                <li><strong>System V Message Queues:</strong> Traditional Unix implementation</li>
                <li><strong>Format:</strong> Typed messages with priorities</li>
                <li><strong>Access:</strong> Multiple readers/writers supported</li>
              </ul>

              <h5>5. Sockets</h5>
              <ul>
                <li><strong>Unix Domain Sockets:</strong> Local inter-process communication</li>
                <li><strong>Internet Domain Sockets:</strong> Network communication</li>
                <li><strong>Stream Sockets:</strong> Reliable, connection-oriented (TCP)</li>
                <li><strong>Datagram Sockets:</strong> Unreliable, connectionless (UDP)</li>
              </ul>

              <h5>6. Signals</h5>
              <ul>
                <li>Software interrupts for notification</li>
                <li>Examples: SIGKILL, SIGTERM, SIGINT</li>
                <li>Asynchronous communication</li>
              </ul>

              <div className="example-box">
                <h5>Example: Producer-Consumer Problem</h5>
                <p>Classic IPC synchronization problem:</p>
                <ul>
                  <li><strong>Producer:</strong> Produces data and puts in shared buffer</li>
                  <li><strong>Consumer:</strong> Consumes data from shared buffer</li>
                  <li><strong>Challenge:</strong> Synchronize access to prevent race conditions</li>
                  <li><strong>Solution:</strong> Use semaphores or monitors for synchronization</li>
                </ul>
              </div>

              <h3>Synchronization Mechanisms</h3>
              <ul>
                <li><strong>Semaphores:</strong> Counting synchronization primitive (P and V operations)</li>
                <li><strong>Monitors:</strong> High-level synchronization construct</li>
                <li><strong>Mutex:</strong> Binary semaphore for mutual exclusion</li>
                <li><strong>Barriers:</strong> Synchronization point for multiple processes</li>
              </ul>
            </section>

            <div className="video-embed">
              <h4>Multithreading in Operating Systems</h4>
              <p>Understanding threads, multithreading models, and benefits of multithreading.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/exbKr6fnoUw"
                title="Multithreading in Operating Systems"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-embed">
              <h4>Inter-Process Communication</h4>
              <p>Learn about IPC mechanisms including shared memory and message passing.</p>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dJuYKfR8vec"
                title="Inter-Process Communication"
                allowFullScreen
              ></iframe>
            </div>

            <Quiz title="Module 4 Quiz" questions={module4Quiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Scheduling Algorithms</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Unit 2 Comprehensive Quiz →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <h2>Unit 2 Comprehensive Quiz</h2>
            
            <section className="content-section">
              <p>Test your understanding of all concepts covered in Unit 2: Process Management.</p>
              <p>This quiz covers:</p>
              <ul>
                <li>Process Concepts and PCB</li>
                <li>Process Scheduling and Schedulers</li>
                <li>CPU Scheduling Algorithms (FCFS, SJF, Priority, Round Robin)</li>
                <li>Multithreading and IPC</li>
              </ul>
            </section>

            <Quiz title="Unit 2 Comprehensive Quiz" questions={unit2Quiz} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.geeksforgeeks.org/introduction-of-process-management/" target="_blank" rel="noopener noreferrer">GeeksforGeeks - Process Management</a></li>
                <li><a href="https://www.tutorialspoint.com/operating_system/os_process_scheduling.htm" target="_blank" rel="noopener noreferrer">TutorialsPoint - Process Scheduling</a></li>
                <li><a href="https://nptel.ac.in/courses/106/106/106106144/" target="_blank" rel="noopener noreferrer">NPTEL - Operating Systems</a></li>
                <li><a href="http://peterindia.net/OperatingSystems.html" target="_blank" rel="noopener noreferrer">Peter India - Operating Systems</a></li>
                <li><a href="https://www.javatpoint.com/os-process-schedulers" target="_blank" rel="noopener noreferrer">JavaTpoint - Process Schedulers</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Multithreading & IPC</button>
            </div>
          </div>
        );

      default:
        return <div>Module content loading...</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit2;
