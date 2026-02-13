'use client';
import React from 'react';

const Module1_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.3</div>
        <div className="lesson-title-main">
          <h1>Fundamentals of computer systems</h1>
        </div>
      </div>

      <section className="content-section">

        <p>
          In this optional lesson, you'll explore fundamental concepts that will enhance your understanding
          of operating systems. This provides a concise overview of the foundational principles behind how
          computer systems operate, laying the groundwork for a deeper comprehension of OS concepts.
        </p>

        <p>
          These topics are designed to build a strong conceptual framework, enriching your knowledge of
          operating systems and their underlying principles.
        </p>

        <h3>Computer system operation</h3>

        <p>Watch this video to know more about computer system operations.</p>

        {/* 👉 Add video embed / thumbnail for "Computer system operation" here */}
        <iframe width="414" height="360" src="https://www.youtube.com/embed/VjPgYcQqqN0" title="Basics of OS (Computer System Operation)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_computer_operations.jpg" alt="" />

        <h3>Storage structure</h3>

        <p>Watch this video to understand how the storage structure of a computer system works.</p>
        <iframe width="414" height="360" src="https://www.youtube.com/embed/YcRd3WMbXnE" title="Basics of OS (Storage Structure)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_storage_structure.jpg" alt="" />
        {/* 👉 Add video embed / thumbnail for "Storage structure" here */}

        <h3>I/O Structure</h3>

        <p>
          Watch the video give below to understand the I/O structure, and the role of device controllers and
          device drivers. You will also understand what Direct Memory Access (DMA) is.
        </p>
        <iframe width="414" height="360" src="https://www.youtube.com/embed/F18RiREDkwE" title="Basics of OS (I/O Structure)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        {/* 👉 Add video embed / thumbnail for "I/O Structure" here */}

        <h3>Computer system architecture</h3>

        <p>
          Take a look at the video provided below to grasp a comprehensive understanding of computer system
          architecture.
        </p>
        <iframe width="414" height="360" src="https://www.youtube.com/embed/So9SR3qpWsM" title="Computer System Architecture" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        {/* 👉 Add video embed / thumbnail for "Computer system architecture" here */}

        <h3>Bonus Content</h3>

        <p>
          This section is optional and learners who want to explore further or need alternate resources to
          prepare can utilize the following references.
        </p>

        <ul>
          <li>
            <a
              href="https://www.geeksforgeeks.org/operating-systems/storage-structure-in-operating-systems/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-900"
            >
              Storage Structure in Operating Systems - GeeksforGeeks
            </a>
          </li>

          <li>
            <a
              href="https://www.tutorialspoint.com/computer-system-architecture"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-900"
            >
              Computer System Architecture - tutorialspoint
            </a>
          </li>

          <li>
            <a
              href="https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/13_IOSystems.html"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-900"
            >
              Operating Systems: I/O Systems - cs.uic.edu
            </a>
          </li>
        </ul>

        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_fundamentals_computer_systems_gif.gif" alt="" />

        <p>Let's move on to the next lesson now!</p>

      </section>
    </div>
  );
};

export default Module1_3;
