'use client';

import React from 'react';

const Module1_7: React.FC = () => {
  return (
    <div className="module-content">
      {/* Header */}
      <div className="lesson-header">
        <div className="lesson-number-badge">1.7</div>
        <div className="lesson-title-main">
          <h1>Operating System Generation and System Boot</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="content-section">
        <p>
          In this optional unit, you will explore two important aspects of
          operating systems: Operating System Generation and System Boot.
        </p>

        <p>
          The process of operating system generation involves customizing the
          OS to suit specific hardware, while system boot refers to the process
          of starting up a computer and loading the OS into memory. These
          foundational processes are key to understanding how systems are
          prepared for use.
        </p>
      </section>

      {/* System Boot */}
      <section className="content-section">
        <h3>System Boot</h3>

        <p>
          System Boot is the process that occurs when a computer is powered on,
          preparing the system for use by loading the operating system into the
          computer&apos;s memory. It starts with a Power-On Self Test (POST),
          which checks whether essential hardware components like RAM, keyboard,
          and display are working correctly.
        </p>

        <p>
          After this, the BIOS or UEFI firmware takes control and looks for a
          bootable device, such as a hard drive or SSD. Once found, a small
          program called the boot loader is loaded. The boot loader’s main job is
          to locate and load the core of the operating system, known as the
          kernel, into memory.
        </p>

        <p>
          After the OS is loaded, it initializes hardware devices, starts system
          services, and prepares the system for user interaction. There are two
          main types of system booting: Cold Booting and Warm Booting.
        </p>

        <ul>
          <li>
            <strong>Cold Booting (or hard booting)</strong> happens when the
            computer is started from a completely powered-off state.
          </li>
          <li>
            <strong>Warm Booting (or soft booting)</strong> occurs when the
            system is restarted without turning off the power, such as using
            the &quot;Restart&quot; option. Both types follow a similar process,
            but cold booting includes the full hardware initialization through
            POST.
          </li>
        </ul>

        <p>
          Watch the video below to briefly understand Operating System
          Generation and System Boot.
        </p>
        <iframe width="414" height="360" src="https://www.youtube.com/embed/wD0PrF3fGSY" title="Operating System Generation and System Boot" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>

      {/* Summary */}
      <section className="content-section">
        <h3>Summary</h3>

        <ul>
          <li>
            <strong>Operating System Generation:</strong> The OS generation
            process customizes the OS for specific hardware configurations,
            ensuring it can interact with the device&apos;s components.
          </li>
          <li>
            <strong>Customization of OS during Sysgen:</strong> During system
            generation, specific customizations such as memory allocation,
            security settings, and peripheral management are tailored based on
            system requirements and user needs.
          </li>
          <li>
            <strong>System Boot:</strong> This is the process where the computer
            loads the OS from storage into memory, initializing hardware and
            software to make the system ready for use.
          </li>
          <li>
            <strong>Boot Loader:</strong> A small program that helps load the
            operating system into memory by initializing hardware and locating
            the OS files.
          </li>
          <li>
            <strong>Post-Boot Activities:</strong> After booting, the system
            sets up various services and resources, preparing the system for
            user interaction.
          </li>
        </ul>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/Operating+System+Generation+and+System+Boot.svg" alt="" />
      </section>

      {/* Bonus Content */}
      <section className="content-section">
        <h3>Bonus Content</h3>

        <p>
          This section is optional and learners who want to explore further or
          need alternate resources to prepare can utilize the following
          references.
        </p>

        <ul>
          <li>
            <a
              href="https://www.javatpoint.com/booting-in-operating-system"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Booting in Operating System - javatpoint
            </a>
          </li>
          <li>
            <a
              href="https://www.geeksforgeeks.org/booting-and-dual-booting-of-operating-system/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Booting and Dual Booting of Operating System - GeeksforGeeks
            </a>
          </li>
          <li>
            <a
              href="https://www.tutorialspoint.com/operating-system-generations"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#1a73e8', textDecoration: 'underline' }}
            >
              Operating System Generations - TutorialsPoint
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Module1_7;
