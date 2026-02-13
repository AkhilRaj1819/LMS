'use client';

import React from 'react';

const Module1_6: React.FC = () => {
  return (
    <div className="module-content">
      {/* Header */}
      <div className="lesson-header">
        <div className="lesson-number-badge">1.6</div>
        <div className="lesson-title-main">
          <h1>Operating System Design, Implementation and Structures</h1>
        </div>
      </div>

      {/* Introduction */}
      <section className="content-section">
        <p>
          In this lesson, you will explore the fundamentals of operating system
          (OS) design and implementation. We will examine how operating systems
          are planned, structured, and realized in practice. This lesson also
          discusses the core objectives, policies, mechanisms, and architectural
          structures that define how modern OS function and evolve.
        </p>

        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/calculus%20%26%20linear%20algebra%2Fstartt.gif" alt="" />

        <p>
          You will understand how designers translate theoretical concepts into
          real, efficient systems that manage both hardware and software
          resources. This knowledge will give you insight into how OS design
          choices affect system performance, security, scalability, and
          usability.
        </p>
      </section>

      {/* OS Design & Implementation */}
      <section className="content-section">
        <h3>Operating System Design &amp; Implementation</h3>
        <p>
          Operating system design involves structuring and organizing system
          components to meet objectives such as reliability, performance,
          security, scalability, and maintainability.
        </p>
      </section>

      {/* Implementation Focus */}
      <section className="content-section">
        <h4>Implementation Focus</h4>
        <p>
          The focus of implementation is to convert the design into working code
          that interacts directly with hardware components and user-level
          applications.
        </p>
        <p>
          It includes writing the kernel, developing system calls, integrating
          device drivers, and managing input/output subsystems. Proper
          implementation ensures the OS can efficiently manage resources such as
          CPU time, memory, and peripheral devices.
        </p>
      </section>

      {/* Policies & Mechanisms */}
      <section className="content-section">
        <h4>Policies &amp; Mechanisms</h4>
        <p>
          OS mechanisms define how tasks are executed, while policies determine
          what should be done. For example, a scheduling mechanism determines
          how processes switch, and a scheduling policy decides which process
          runs next.
        </p>
        <p>
          Mechanisms provide flexibility, allowing policies to be changed or
          optimized without altering the system’s core logic.
        </p>
      </section>

      {/* Key Considerations */}
      <section className="content-section">
        <h4>Key Considerations</h4>
        <ul>
          <li>Compatibility with multiple hardware architectures.</li>
          <li>Support for user interaction and developer accessibility.</li>
          <li>
            Adaptability to new technologies such as cloud computing and IoT.
          </li>
          <li>
            Balance between system performance, reliability, and security.
          </li>
        </ul>
      </section>

      {/* Evolution */}
      <section className="content-section">
        <h3>Evolution of Operating System Design</h3>
        <p>
          Operating systems have evolved with changing hardware and
          computational needs. Their design principles have shifted from
          efficiency and control to modularity, scalability, and user
          experience.
        </p>

        <div className="table-wrapper">
          <table className="content-table">
            <thead>
              <tr>
                <th>Era</th>
                <th>Type</th>
                <th>Key Design Goals</th>
                <th>Example Systems</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1950s–60s</td>
                <td>Batch OS</td>
                <td>
                  Automate execution of jobs, reduce manual intervention
                </td>
                <td>IBM 7094</td>
              </tr>
              <tr>
                <td>1970s</td>
                <td>Time-Sharing OS</td>
                <td>Interactive multi-user environment</td>
                <td>UNIX, MULTICS</td>
              </tr>
              <tr>
                <td>1990s</td>
                <td>Networked OS</td>
                <td>
                  Communication and resource sharing over networks
                </td>
                <td>Windows NT, Novell NetWare</td>
              </tr>
              <tr>
                <td>2000s</td>
                <td>Distributed OS</td>
                <td>
                  Coordination among multiple processors
                </td>
                <td>Solaris, Amoeba</td>
              </tr>
              <tr>
                <td>2010s–Present</td>
                <td>Cloud &amp; Mobile OS</td>
                <td>
                  Virtualization, portability, energy efficiency
                </td>
                <td>Android, iOS, Linux, ChromeOS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="insight">
          <strong>Insight:</strong> The complexity of OS design increased as
          systems moved from single-purpose computers to cloud-based and mobile
          devices, emphasizing security, connectivity, and power management.
        </p>
      </section>

      {/* RTOS vs GPOS */}
      <section className="content-section">
        <h3>Design Goals of a Real-Time OS vs General-Purpose OS</h3>
        <p>
          The design goals of a Real-Time Operating System (RTOS) focus on
          deterministic behavior, ensuring that critical tasks meet their
          deadlines consistently and reliably. Timing, predictability, and low
          latency are crucial.
        </p>
        <p>
          In contrast, a General-Purpose Operating System (GPOS) emphasizes
          throughput, multitasking, and usability, focusing on performance and
          flexibility rather than strict timing guarantees.
        </p>

        <div className="table-wrapper">
          <table className="content-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Real-Time OS</th>
                <th>General-Purpose OS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Goal</td>
                <td>Timely and predictable task execution</td>
                <td>Efficiency and user convenience</td>
              </tr>
              <tr>
                <td>Scheduling</td>
                <td>Priority and deadline-based</td>
                <td>Fairness or round-robin</td>
              </tr>
              <tr>
                <td>Latency</td>
                <td>Extremely low</td>
                <td>Variable</td>
              </tr>
              <tr>
                <td>Use Cases</td>
                <td>Embedded systems, medical devices</td>
                <td>Desktops, servers, mobile systems</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Video */}
      <section className="content-section">
        <h3>Video: Operating System Design &amp; Implementation</h3>
        <iframe width="414" height="360" src="https://www.youtube.com/embed/t_McsJ1RGQg" title="Operating System Design &amp; Implementation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h4>Video Summary</h4>
        <p>
          The video explains the design and implementation of an operating
          system, focusing on user goals and system goals. It highlights the
          importance of separating policy from mechanism for flexibility and
          explains why modern operating systems are implemented using
          higher-level languages like C/C++ for easier development and
          portability.
        </p>
      </section>

      {/* Core Goals */}
      <section className="content-section">
        <h3>Core Design Goals of an Operating System</h3>
        <p>Hover over each card to reveal its detailed explanation.</p>

        <ul>
          <li>
            <strong>Performance</strong> – Efficient use of resources and quick
            response to user commands for smooth system functioning.
          </li>
          <li>
            <strong>Security</strong> – Protection of system data and resources
            from unauthorized access using authentication, encryption, and
            access controls.
          </li>
          <li>
            <strong>Reliability</strong> – Ensuring the OS runs consistently
            without crashes, offering recovery options after faults.
          </li>
          <li>
            <strong>Scalability</strong> – Ability to expand to support more
            users, processes, or devices without reducing performance.
          </li>
          <li>
            <strong>Maintainability</strong> – Simplifying updates, debugging,
            and system modifications to adapt to future requirements.
          </li>
        </ul>
      </section>

      {/* Design Considerations */}
      <section className="content-section">
        <h3>Design Considerations</h3>
        <ul>
          <li>
            <strong>Prioritize Goals</strong> – Designers must identify and rank
            the systems primary goals to guide all architectural and coding
            decisions.
          </li>
          <li>
            <strong>Align with Requirements</strong> – OS goals should be in
            harmony with hardware constraints, user needs, and future
            scalability requirements.
          </li>
          <li>
            <strong>Manage Conflicts</strong> – Design conflicts like
            performance vs. security are resolved using cost-benefit analysis
            and empirical evaluation.
          </li>
          <li>
            <strong>Goal-Driven Design</strong> – Each design element must
            directly support one or more objectives, improving consistency and
            performance.
          </li>
        </ul>
      </section>

      {/* Structures */}
      <section className="content-section">
        <h3>Structures of an Operating System</h3>
        <p>
          The structure of an operating system defines how its core components
          are organized, interact, and exchange data.</p>
           <p>Different structures were
          developed to overcome challenges like system complexity, maintenance,
          performance, and security.
        </p>

        <p>
          Below are the three fundamental architectures that have shaped how
          modern operating systems are built today.
        </p>
      </section>

      {/* Monolithic */}
      <section className="content-section">
        <h4>Monolithic Structure</h4>
        <p>
          In a Monolithic Operating System, all services such as process
          management, file handling, device drivers, and memory management exist
          together in one large kernel space. Since everything shares the same
          memory, the system runs very fast, but it becomes fragile because a
          bug in one service can crash the entire OS.
        </p>

        <h5>Advantages</h5>
        <ul>
          <li>Very high performance due to direct function calls.</li>
          <li>Efficient resource sharing between components.</li>
        </ul>

        <h5>Disadvantages</h5>
        <ul>
          <li>Hard to maintain and extend.</li>
          <li>
            Low security and poor fault isolation — one fault can stop the
            system.
          </li>
        </ul>

        <p>
          <strong>Examples:</strong> UNIX, MS-DOS, early Linux versions.
        </p>
        <p>
          💡 Like an open workspace where everyone talks freely — work happens
          fast but one problem affects the entire team.
        </p>
      </section>

      {/* Layered */}
      <section className="content-section">
        <h4>Layered Structure</h4>
        <p>
          In this model, the OS is divided into multiple layers, each with a
          defined role and dependency on the layer below it. The top layers
          provide user services, while the lower layers handle hardware-level
          functions. This makes the design clean, modular, and easy to debug.
        </p>

        <h5>Advantages</h5>
        <ul>
          <li>Clear separation of system functionality.</li>
          <li>Easier to maintain and test.</li>
          <li>Errors are isolated within layers.</li>
        </ul>

        <h5>Disadvantages</h5>
        <ul>
          <li>Some loss in speed due to crossing multiple layers.</li>
          <li>Difficult to define perfect layer boundaries.</li>
        </ul>

        <p>
          <strong>Examples:</strong> THE Operating System, Windows NT (partially
          layered).
        </p>
        <p>
          💡 Like an office building with separate departments on each floor —
          communication is structured and controlled.
        </p>
      </section>

      {/* Microkernel */}
      <section className="content-section">
        <h4>Microkernel Structure</h4>
        <p>
          In a Microkernel OS, only essential functions such as inter-process
          communication (IPC), CPU scheduling, and memory management run inside
          the kernel. All other services like drivers, file systems, and network
          protocols run in user mode.
        </p>

        <p>
          This separation enhances <strong>security, stability, and
          modularity</strong>, as faults in user-space services do not crash the
          core kernel.
        </p>

        <h5>Advantages</h5>
        <ul>
          <li>Very high modularity and fault tolerance.</li>
          <li>Easier updates and system extensions.</li>
          <li>Improved security as kernel remains small.</li>
        </ul>

        <h5>Disadvantages</h5>
        <ul>
          <li>Slight performance overhead due to message passing.</li>
          <li>More complex communication design.</li>
        </ul>

        <p>
          <strong>Examples:</strong> Mach, QNX, Minix, macOS (XNU hybrid kernel).
        </p>
        <p>
          💡 Like a secure core office where only key employees work inside, and
          others operate remotely — stable and safe, though communication takes
          longer.
        </p>
      </section>

      {/* Modern Trends */}
      <section className="content-section">
        <h3>Modern OS Trends</h3>
        <ul>
          <li>
            <strong>Modular Kernels (Linux):</strong> Allow dynamic loading of
            components for flexibility.
          </li>
          <li>
            <strong>Virtualization (Cloud OS):</strong> Isolate resources for
            scalability (e.g., KVM, Xen).
          </li>
          <li>
            <strong>Mobile OS Design:</strong> Optimize battery,
            responsiveness, and security (Android, iOS).
          </li>
          <li>
            <strong>IoT &amp; Embedded OS:</strong> Real-time and lightweight
            (FreeRTOS, Zephyr).
          </li>
          <li>
            <strong>Container-Based OS:</strong> Support lightweight, isolated
            execution environments (Docker, CoreOS).
          </li>
        </ul>
      </section>

      {/* Summary */}
      <section className="content-section">
        <h3>Summary</h3>
        <ul>
          <li>
            <strong>Design Goals and Policies:</strong> Focus on performance,
            security, and adaptability.
          </li>
          <li>
            <strong>Implementation Process:</strong> Translate goals into kernel
            logic and mechanisms.
          </li>
          <li>
            <strong>Structures:</strong> Monolithic (fast), Layered (organized),
            Microkernel (secure).
          </li>
          <li>
            <strong>Modern Design:</strong> Emphasizes modularity, scalability,
            and energy efficiency.
          </li>
        </ul>
      </section>

      {/* Mind Map */}
      <section className="content-section">
        <h3>Mind Map</h3>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Operating+System+Design%2C+Implementation+and+structures.svg" alt="" />
      </section>

      {/* References */}
     <section className="content-section">
  <h3>References</h3>
  <ul>
    <li>
      <a
        href="https://www.geeksforgeeks.org/operating-systems/design-and-implementation-in-operating-system/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#1a73e8', textDecoration: 'underline' }}
      >
        Design and Implementation in Operating System - GeeksforGeeks
      </a>
    </li>
    <li>
      <a
        href="https://thecodest.co/en/dictionary/operating-systems-design/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#1a73e8', textDecoration: 'underline' }}
      >
        Operating Systems Design - The Codest
      </a>
    </li>
  </ul>

  <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_design_implementation_gif.gif" alt="" />
</section>

    </div>
  );
};

export default Module1_6;
