'use client';
import React from 'react';

const Module4_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.8</div>
        <div className="lesson-title-main">
          <h1>Assignment | Paging &amp; Segmentation</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Have you ever wondered how an operating system decides where a program should be placed in memory when you run it? Why some programs run smoothly even when memory is full, while others fail with errors?</p>
        <p>This lesson answers such questions by exploring two powerful memory management techniques: <strong>Paging</strong> and <strong>Segmentation</strong>. Both are used by modern operating systems to efficiently organize processes in memory, avoid fragmentation, and ensure fast execution.</p>

        <h3>Paging</h3>
        <p>Paging is a memory management scheme that eliminates the need for contiguous allocation of physical memory. In paging, the process&apos;s memory is divided into fixed-size blocks called <strong>pages</strong>, and the physical memory is divided into fixed-size blocks called <strong>frames</strong>. The operating system keeps track of all pages and frames, allowing non-contiguous memory allocation, which eliminates issues like fragmentation.</p>

        <h4>How paging works?</h4>
        <ul>
          <li><strong>Division of Memory:</strong> The process&apos;s logical address space is divided into fixed-size pages, and physical memory is divided into frames of the same size.</li>
          <li><strong>Page Table:</strong> A page table maps the pages of the process to the frames of physical memory. When a process accesses a particular page, the system translates the logical address into a physical address using the page table.</li>
          <li><strong>No Contiguity:</strong> Pages and frames do not have to be contiguous in memory. A process can be loaded into any available frames, allowing more efficient use of memory.</li>
        </ul>

        <h4>Advantages of Paging</h4>
        <ul>
          <li><strong>Eliminates Fragmentation:</strong> Paging prevents both internal and external fragmentation since all pages and frames are of the same size.</li>
          <li><strong>Efficient Memory Allocation:</strong> The system can utilize memory more effectively by allocating memory in non-contiguous blocks.</li>
        </ul>

        <h4>Disadvantages of Paging</h4>
        <ul>
          <li><strong>Overhead:</strong> Paging introduces overhead because of the additional page table that needs to be maintained.</li>
          <li><strong>Internal Fragmentation:</strong> Though paging eliminates external fragmentation, it can still cause internal fragmentation if the process doesn&apos;t completely fill a frame.</li>
        </ul>

        <h3>Segmentation</h3>
        <p>Segmentation is a memory management technique where a program is divided into different segments based on its logical components, such as functions, objects, or data structures. Unlike paging, which divides memory into fixed-size blocks, segmentation allows the programmer to divide a program into segments of varying sizes. Each segment can be allocated in contiguous memory, making it a more flexible and logical approach for memory management.</p>

        <h4>How It Works?</h4>
        <ul>
          <li><strong>Division of Program:</strong> A program is divided into logical segments, such as code, data, stack, and heap.</li>
          <li><strong>Segment Table:</strong> A segment table keeps track of the base address and length of each segment in memory.</li>
          <li><strong>Contiguous Allocation:</strong> Segments are allocated in contiguous memory blocks, meaning the system tries to allocate a contiguous block of memory for each segment, which can lead to external fragmentation over time.</li>
        </ul>

        <h4>Advantages of Segmentation</h4>
        <ul>
          <li><strong>Logical Division:</strong> Segmentation aligns more closely with how a program is logically divided, making it easier to manage and understand.</li>
          <li><strong>No Internal Fragmentation:</strong> Since segments are allocated based on their size, there&apos;s no wasted space within a segment.</li>
        </ul>

        <h4>Disadvantages of Segmentation</h4>
        <ul>
          <li><strong>External Fragmentation:</strong> Over time, the memory can become fragmented, making it harder to allocate large contiguous blocks of memory.</li>
          <li><strong>Complexity:</strong> Managing segments and keeping track of each segment&apos;s base and length can be more complex than paging.</li>
        </ul>

        <h3>Paging vs Segmentation</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-2 border-gray-400 px-4 py-3 text-left font-bold">Feature</th>
                <th className="border-2 border-gray-400 px-4 py-3 text-left font-bold">Paging</th>
                <th className="border-2 border-gray-400 px-4 py-3 text-left font-bold">Segmentation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2 font-semibold">Division</td>
                <td className="border-2 border-gray-400 px-4 py-2">Fixed-size pages</td>
                <td className="border-2 border-gray-400 px-4 py-2">Variable-size segments</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-400 px-4 py-2 font-semibold">Allocation</td>
                <td className="border-2 border-gray-400 px-4 py-2">Non-contiguous</td>
                <td className="border-2 border-gray-400 px-4 py-2">Contiguous</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2 font-semibold">Fragmentation</td>
                <td className="border-2 border-gray-400 px-4 py-2">Internal</td>
                <td className="border-2 border-gray-400 px-4 py-2">External</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-400 px-4 py-2 font-semibold">Based on</td>
                <td className="border-2 border-gray-400 px-4 py-2">Physical memory</td>
                <td className="border-2 border-gray-400 px-4 py-2">Program structure</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2 font-semibold">Table used</td>
                <td className="border-2 border-gray-400 px-4 py-2">Page table</td>
                <td className="border-2 border-gray-400 px-4 py-2">Segment table</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Solved Problems</h3>
        <details className="bg-blue-50 border-4 border-blue-500 p-4 rounded-xl my-4">
          <summary className="font-bold cursor-pointer">Problem-1 (Paging)</summary>
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/paging_problem_3.jpg" alt="" />
          <div className="mt-3">
            <p className="font-semibold">Solution</p>
            <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/paging_solution_3.jpg" alt="" />
          </div>
        </details>

        <details className="bg-green-50 border-4 border-green-500 p-4 rounded-xl my-4">
          <summary className="font-bold cursor-pointer">Problem-2 (Segmentation)</summary>
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/segmentation_question_3.jpg" alt="" />
          <div className="mt-3">
            <p className="font-semibold">Solution</p>
            <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/segmentation_answer_3.jpg" alt="" />
          </div>
        </details>
      </section>
    </div>
  );
};

export default Module4_8;
