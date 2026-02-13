'use client';
import React from 'react';

const Module4_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.2</div>
        <div className="lesson-title-main">
          <h1>Fixed and Variable Partitioning</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>When multiple programs run at the same time, how does the operating system decide where each program should be placed in memory without causing conflicts or wasting space?</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGIwYXp4bGQ5dnl5cjN4enEydGU0cWhzamt5NjVmNGh4cWFjN2IwNiZlcD12MV9naWZzX3NlYXJjaCZjdT1n/CjmvTCZf2U3p09Cn0h/giphy.gif" alt="" />
        <p>In this lesson, you will learn how operating systems divide memory into partitions, how fixed and variable partitioning work, and how real systems decide where each process fits. As systems run multiple programs, efficient memory management becomes essential to avoid waste, fragmentation, and performance issues.</p>
        <p>Let us begin with the simplest memory management approach: Fixed Partitioning.</p>

        <h3>Fixed Partitioning</h3>
        <p>Fixed partitioning, also known as static partitioning, is a memory allocation technique used in operating systems to divide physical memory into fixed-size partitions or regions, each dedicated to a specific process or user. These partitions are typically assigned at system boot time and remain allocated to their designated processes until those processes terminate or release the partition.</p>

        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="space-y-2">
            <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800">P1</div>
            <div className="border-4 border-gray-300 bg-white px-6 py-3 rounded-2xl text-gray-400">Empty</div>
            <div className="border-4 border-emerald-500 bg-emerald-50 px-6 py-3 rounded-2xl font-bold text-gray-800">P2</div>
            <div className="border-4 border-gray-300 bg-white px-6 py-3 rounded-2xl text-gray-400">Empty</div>
          </div>
        </div>

        <p>This method is the oldest and simplest technique for managing multiple processes in main memory. The number of partitions in RAM is fixed, though the size of each partition can vary. As a contiguous allocation method, spanning across partitions is not allowed. Partitions are defined either before execution or during system configuration.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">Example:</p>
          <p className="mt-2">Imagine a hotel with rooms of fixed sizes. Each room (partition) can only accommodate one guest (process). If a room is too large for a single guest, the extra space is wasted.</p>
        </div>

        <p className="text-sm text-gray-600 italic">The diagram shows how memory is divided in an operating system. A portion is dedicated to the operating system itself, while the rest is split into equal-sized partitions for processes. Partition 1 has 3 MB of space, but only 1 MB is used by Process P1, leaving 2 MB unused. Partition 2 is fully used by Process P1, while Partitions 3 and 4 are completely unused. External fragmentation occurs when free space is scattered across partitions, making it unusable for larger processes. Internal fragmentation happens when a process doesn&apos;t fully use its allocated partition, leaving wasted space within it.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/fixed+partitioning.png" alt="" />

        <h4>Advantages of Fixed Partitioning:</h4>
        <ul>
          <li>Easy to implement: Simpler design and fewer variables to manage.</li>
          <li>Low overhead: Minimal runtime management required.</li>
          <li>Predictable performance: Consistent allocation times and resource usage.</li>
          <li>Suitable for systems with a fixed number of processes: Ideal for environments with known, unchanging workloads.</li>
          <li>Prevents processes from interfering with each other: Each process is confined to its own partition.</li>
          <li>Easy to debug: Simpler memory layout makes identifying issues straightforward.</li>
          <li>Prevents external fragmentation: Memory is allocated in fixed blocks, avoiding gaps between allocations.</li>
        </ul>

        <h4>Disadvantages of Fixed Partitioning:</h4>
        <ul>
          <li>Causes internal fragmentation: Unused space within partitions cannot be utilized by other processes.</li>
          <li>Limits the size of processes: Processes cannot exceed the size of a fixed partition.</li>
          <li>Restricts the degree of multiprogramming: Fixed partitions limit the number of processes that can run concurrently.</li>
        </ul>

        <p>Overall, fixed partitioning is useful in scenarios where the number of processes is fixed and their memory requirements are known in advance. It is commonly employed in embedded systems, real-time systems, and environments with limited memory resources.</p>
        <p>To overcome these limitations, operating systems introduced variable or dynamic partitioning.</p>

        <h3>Variable Partitioning</h3>
        <p>Variable (or dynamic) partitioning is part of the contiguous allocation technique, designed to address the limitations of fixed partitioning. Unlike fixed partitioning, partitions in variable partitioning are not predefined during system configuration or before execution.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/dynamic+partitioning.png" alt="" />
        <p>Initially, the RAM is empty, and partitions are created at runtime based on the needs of incoming processes. The partition size is matched to the size of the incoming process, allowing for efficient RAM utilization and avoiding internal fragmentation. The number of partitions in RAM is not fixed and varies depending on the number of incoming processes and the available main memory.</p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded my-4">
          <p className="font-semibold">Example:</p>
          <p className="mt-2">Imagine a parking lot where spaces are assigned based on the size of the vehicle (process) arriving. A compact car gets a small space, while a large truck gets a bigger one. This dynamic assignment ensures that no space is wasted unnecessarily</p>
        </div>

        <p className="text-sm text-gray-600 italic">The diagram depicts the memory allocation in an operating system environment. The section labeled "Operating System (OS)" is dedicated to essential OS functions and data structures. Additionally, there are blocks representing different processes: P1 (5 MB), P2 (2 MB), P3 (3 MB), and P4 (4 MB). Dynamic partitioning, as illustrated, allows for flexible allocation of memory based on the specific requirements of each process, accommodating processes of various sizes by allocating only the necessary amount of memory.</p>

        <h4>Advantages of Variable (Dynamic) Partitioning:</h4>
        <ul>
          <li>Eliminates internal fragmentation: Memory is allocated exactly as needed by each process, minimizing wasted space within partitions.</li>
          <li>No restrictions on the degree of multiprogramming: Can accommodate as many processes as memory allows.</li>
          <li>No limitations on process size: Processes can be allocated memory based on their actual requirements.</li>
        </ul>

        <h4>Disadvantages of Variable (Dynamic) Partitioning:</h4>
        <ul>
          <li>Complex to implement (allocation and deallocation): Requires sophisticated algorithms to manage memory efficiently.</li>
          <li>Susceptible to external fragmentation: Free memory can become scattered, making it difficult to allocate large contiguous blocks.</li>
        </ul>

        <p>Overall, variable partitioning dynamically adjusts memory allocation to the needs of processes, improving memory efficiency compared to fixed partitioning.</p>

        <h3>Difference between Fixed and Variable partitioning:</h3>
        <div className="overflow-x-auto my-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Aspect</th>
                <th className="border border-gray-300 px-4 py-2">Fixed Partitioning</th>
                <th className="border border-gray-300 px-4 py-2">Variable Partitioning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Partition Size</td>
                <td className="border border-gray-300 px-4 py-2">Fixed at boot time</td>
                <td className="border border-gray-300 px-4 py-2">Created dynamically at runtime</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Internal Fragmentation</td>
                <td className="border border-gray-300 px-4 py-2">Yes</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">External Fragmentation</td>
                <td className="border border-gray-300 px-4 py-2">No</td>
                <td className="border border-gray-300 px-4 py-2">Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Complexity</td>
                <td className="border border-gray-300 px-4 py-2">Simple</td>
                <td className="border border-gray-300 px-4 py-2">Complex</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Flexibility</td>
                <td className="border border-gray-300 px-4 py-2">Low</td>
                <td className="border border-gray-300 px-4 py-2">High</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Now that you understand both partitioning types, let&apos;s examine the fragmentation problems they face.</p>

        <h3>Internal and External Fragmentation</h3>
        <h4>Internal Fragmentation</h4>
        <p>Occurs in fixed partitioning when a process does not use the entire allocated partition. The unused memory inside the partition is wasted.</p>

        <h4>External Fragmentation</h4>
        <p>Occurs in variable partitioning when free memory becomes scattered into small holes. Even if enough total free memory exists, it may not be contiguous, preventing allocation.</p>

        <p>To reduce external fragmentation, operating systems often use a technique called compaction.</p>

        <h3>Compaction</h3>
        <p>Compaction involves moving allocated memory blocks to consolidate free memory into a single contiguous block. This process reduces external fragmentation by merging smaller free memory segments into larger contiguous chunks, making it easier to fulfill larger memory requests.</p>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded my-4">
          <p className="font-semibold">Example:</p>
          <p className="mt-2">Suppose your desk has books and random objects spread all over, leaving small gaps between them. You need space to place a large file, but none of the gaps are big enough. You gather all the items on one side of the desk (compaction), creating a single large empty space for your file.</p>
        </div>

        <p>Compaction is typically used in contiguous memory allocation systems. In non-contiguous memory allocation systems, such as paging or segmentation, compaction is generally not applicable because memory allocation is inherently non-contiguous.</p>
        <p>With fragmentation and compaction understood, let us now explore how the OS chooses which free space a process should be placed into. These are called allocation strategies.</p>

        <h3>Allocation Strategies: First Fit, Best Fit, Worst Fit</h3>
        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <p className="font-bold text-center mb-4">Memory Blocks</p>
          <div className="space-y-2 mb-4">
            <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Block 1 (10MB)</div>
            <div className="border-4 border-emerald-500 bg-emerald-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Block 2 (6MB)</div>
            <div className="border-4 border-purple-500 bg-purple-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Block 3 (15MB)</div>
          </div>
          <p className="font-bold text-center">Request: 5 MB</p>
          <div className="mt-4 space-y-2">
            <p className="text-center">First Fit selects Block 1</p>
            <p className="text-center">Best Fit selects Block 2</p>
            <p className="text-center">Worst Fit selects Block 3</p>
          </div>
        </div>

        <h4>First Fit</h4>
        <p>Allocates the first available free block that is large enough for the process. Fast and simple, but may lead to scattered small holes.</p>

        <h4>Best Fit</h4>
        <p>Searches the entire memory and allocates the smallest free block that can fit the process. Reduces leftover space but increases overhead.</p>

        <h4>Worst Fit</h4>
        <p>Allocates the largest available free block. Helps reduce tiny unusable holes but is less efficient for average workloads.</p>

        <h3>Real-World Applications</h3>
        <ul>
          <li><strong>Embedded Systems:</strong> Often use fixed partitioning for predictable performance.</li>
          <li><strong>Modern Operating Systems:</strong> Use variants of dynamic partitioning combined with paging.</li>
          <li><strong>Cloud Resource Management:</strong> Uses dynamic allocation similar to variable partitioning.</li>
          <li><strong>Virtual Machines:</strong> Use adaptive memory allocation techniques inspired by these models.</li>
        </ul>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/fixed-or-static-partitioning-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Fixed (or static) Partitioning in Operating System - GeeksforGeeks</a></li>
          <li><a href="https://www.geeksforgeeks.org/variable-or-dynamic-partitioning-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Variable (or Dynamic) Partitioning in Operating System - GeeksforGeeks</a></li>
          <li><a href="https://study.com/academy/lesson/what-is-memory-partitioning-definition-concept.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">What is Memory Partitioning? - Definition &amp; Concept - Lesson | Study.com</a></li>
        </ul>

        <p className="mt-4">Having mastered fixed and variable partitioning, fragmentation, and allocation strategies, you are now ready to move into the more concepts about Allocation Strategies.</p>
      </section>
    </div>
  );
};

export default Module4_2;
