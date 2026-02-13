'use client';
import React from 'react';

const Module4_1: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.1</div>
        <div className="lesson-title-main">
          <h1>Introduction to Memory Management</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Imagine your laptop running a browser, VS Code, a compiler, and a game. How does the OS decide which program gets memory, how much it gets, and where to place it? This is exactly what Memory Management solves.</p>
        <img style={{width: '300px', height: '200px'}} src="https://media.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif" alt="Memory Management" />

        <h3>Memory Management</h3>
        <p>Memory Management is the process of controlling and coordinating computer memory, assigning portions known as blocks to various running programs to optimize the overall performance of the system.</p>
        <p>It is the most important function of an operating system that manages primary memory. It helps processes to move back and forward between the main memory and execution disk. It helps OS to keep track of every memory location, irrespective of whether it is allocated to some process or it remains free.</p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p>Think of memory as a huge library. The OS is the librarian that decides which book (program) is stored where, prevents books from mixing, and keeps the shelves organized.</p>
        </div>

        <h3>Why Use Memory Management?</h3>
        <p>Here, are reasons for using memory management:</p>
        <ul>
          <li>It allows you to check how much memory needs to be allocated to processes that decide which processor should get memory at what time.</li>
          <li>Tracks whenever inventory gets freed or unallocated. According to it will update the status.</li>
          <li>It allocates the space to application routines.</li>
          <li>It also make sure that these applications do not interfere with each other.</li>
          <li>Helps protect different processes from each other</li>
          <li>It places the programs in memory so that memory is utilized to its full extent.</li>
        </ul>

        <p>Now that you understand why memory management matters, let us explore the first concept: Swapping.</p>

        <h3>Swapping</h3>
        <p>Swapping is a process where a program or part of it is temporarily moved from the main memory to a secondary storage device, such as a hard disk. This allows the system to free up memory for other processes. Once needed again, the swapped-out process is brought back into the main memory to resume execution.</p>

        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Process P1</div>
              <p className="text-sm text-gray-600 mt-2">↓ Swapped Out</p>
            </div>
            <div className="border-4 border-gray-500 bg-gray-100 px-6 py-3 rounded-2xl font-bold text-gray-800">Backing Store</div>
            <div className="text-center">
              <div className="border-4 border-emerald-500 bg-emerald-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Process P2</div>
              <p className="text-sm text-gray-600 mt-2">↑ Loaded Into RAM</p>
            </div>
          </div>
        </div>

        <p>This animation shows how:</p>
        <ul>
          <li>P1 is swapped out of RAM into the backing store.</li>
          <li>RAM becomes available for another process.</li>
          <li>P2 is loaded into RAM.</li>
          <li>Later, P1 may be swapped back into memory when needed.</li>
        </ul>
        <p>Swapping is essential in systems that run many applications at once, enabling the OS to manage limited memory wisely while keeping all programs responsive.</p>

        <p>The secondary storage, known as the backing store, serves as a space to hold these swapped-out memory images and must be large enough to accommodate all active processes. It also ensures quick and direct access to the stored data when required.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/swapping.png" alt="" />

        <h4>Major benefits/pros of swapping:</h4>
        <ul>
          <li>It offers a higher degree of multiprogramming.</li>
          <li>Allows dynamic relocation. For example, if address binding at execution time is being used, then processes can be swap in different locations. Else in case of compile and load time bindings, processes should be moved to the same location.</li>
          <li>It helps to get better utilization of memory.</li>
          <li>Minimum wastage of CPU time on completion so it can easily be applied to a priority-based scheduling method to improve its performance.</li>
        </ul>

        <p>With swapping understood, let&apos;s look at how memory management techniques are broadly classified.</p>

        <h3>Memory Management Techniques</h3>
        <p>The memory management techniques can be classified into following main categories:</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/memory-management-schemes.png" alt="" />

        <h3>Contiguous memory management schemes</h3>
        <p>In a Contiguous memory management scheme, each program occupies a single contiguous block of storage locations, i.e., a set of memory locations with consecutive addresses.</p>

        <h4>Single contiguous memory management schemes</h4>
        <p>The Single contiguous memory management scheme is the simplest memory management scheme used in the earliest generation of computer systems. In this scheme, the main memory is divided into two contiguous areas or partitions. The operating systems reside permanently in one partition, generally at the lower memory, and the user process is loaded into the other partition.</p>

        <h4>Advantages</h4>
        <ul>
          <li>Simple to implement.</li>
          <li>Easy to manage and design.</li>
          <li>Once a process is loaded, it receives full CPU time without interruptions.</li>
        </ul>

        <h4>Disadvantages</h4>
        <ul>
          <li>Wastage of memory due to unused space inside the single allocated large partition.</li>
          <li>CPU can remain idle while waiting for large programs to load from disk.</li>
          <li>Large programs cannot run if they exceed the fixed available partition size.</li>
          <li>Does not support multiprogramming — only one program can reside in memory at a time.</li>
        </ul>

        <h4>Multiple Partitioning:</h4>
        <p>The single Contiguous memory management scheme is inefficient as it limits computers to execute only one program at a time resulting in wastage in memory space and CPU time. The problem of inefficient CPU use can be overcome using multiprogramming that allows more than one program to run concurrently. To switch between two processes, the operating systems need to load both processes into the main memory. The operating system needs to divide the available main memory into multiple parts to load multiple processes into the main memory. Thus multiple processes can reside in the main memory simultaneously.</p>

        <p>The multiple partitioning schemes can be of two types:</p>

        <div className="space-y-4 my-6">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
            <h4 className="font-semibold">Fixed Partitioning:</h4>
            <p className="mt-2">In fixed partitioning, the main memory is divided into a set number of fixed-size partitions at system startup. Each partition can hold one process. This scheme is simple and easy to implement but can lead to internal fragmentation, where unused memory within a partition is wasted if the process is smaller than the partition size.</p>
            <p className="mt-2 text-sm">Imagine memory divided into fixed-sized blocks. Each block can hold exactly one process, even if the process is smaller — causing unused space inside the block.</p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
            <h4 className="font-semibold">Dynamic Partitioning:</h4>
            <p className="mt-2">Dynamic partitioning, on the other hand, divides the main memory into partitions of variable sizes based on the requirements of the processes. This allows for more efficient memory use and minimizes internal fragmentation. However, it can lead to external fragmentation, where free memory is available but scattered, making it difficult to allocate large contiguous memory blocks.</p>
          </div>
        </div>

        <p>We will be discussing the above schemes in detail in the upcoming lessons.</p>

        <h3>Non-Contiguous memory management schemes:</h3>
        <p>In a non-contiguous memory management scheme, a program is divided into smaller blocks that are loaded into different portions of memory, which do not need to be adjacent. This approach helps utilize memory more efficiently and overcomes the limitations of contiguous allocation. These schemes can be classified based on the size of the blocks and whether the blocks reside entirely in the main memory or not.</p>

        <p>Non-contiguous memory management schemes can be of two types:</p>

        <div className="space-y-4 my-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <h4 className="font-semibold">Paging:</h4>
            <p className="mt-2">Paging is a memory management scheme where a process is divided into fixed-size blocks called pages, which are loaded into equally sized blocks in main memory called frames. This eliminates the problem of external fragmentation and allows processes to be stored in non-contiguous memory locations. However, it can lead to internal fragmentation if the allocated frame size exceeds the process&apos;s requirements.</p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="font-semibold text-sm">Process Pages → Memory Frames</p>
              <p className="text-sm mt-2">Page 0 → Frame 5 | Page 1 → Frame 3 | Page 2 → Frame 12 | Page 3 → Frame 9</p>
              <p className="text-sm text-gray-600 mt-2">As shown above, pages are scattered across memory frames, proving that paging does not require contiguous memory.</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h4 className="font-semibold">Segmentation:</h4>
            <p className="mt-2">Segmentation divides a program into variable-sized blocks called segments, which correspond to logical divisions such as code, data, and stack. These segments are loaded into memory wherever space is available. Unlike paging, segmentation aligns with the program&apos;s logical structure, but it can suffer from external fragmentation as free memory becomes scattered.</p>
            <div className="bg-white p-4 rounded mt-3">
              <p className="font-semibold text-sm">Process Segments → Memory</p>
              <p className="text-sm mt-2">Code → Block 14 | Data → Block 2 | Stack → Block 20</p>
              <p className="text-sm text-gray-600 mt-2">Segments vary in size and reflect the program&apos;s logical structure, unlike pages which are equal-sized.</p>
            </div>
          </div>
        </div>

        <p>We will be discussing the above schemes in detail in the upcoming lessons.</p>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/operating-systems/memory-management-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Memory Management in Operating System - GeeksforGeeks</a></li>
          <li><a href="https://medium.com/@The_Anshuman/memory-management-in-os-450655fbc338" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Memory management in Os</a></li>
          <li><a href="https://medium.com/@cloud.devops.enthusiast/memory-management-in-os-e076e1ceaadf" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Memory Management in OS | Medium</a></li>
        </ul>

        <p className="mt-4">Let&apos;s progress to the next lesson now!</p>
      </section>
    </div>
  );
};

export default Module4_1;
