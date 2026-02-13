'use client';
import React from 'react';

const Module4_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.9</div>
        <div className="lesson-title-main">
          <h1>Fragmentation</h1>
        </div>
      </div>
      
      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded my-4">
          <p className="font-semibold">🤔 Thinking</p>
          <p className="mt-2">If your system shows free memory but still refuses to load a process, is the memory really free? Or is it fragmented into useless tiny pieces?</p>
        </div>

        <p>Even though your system shows free memory, the process may still not load because the free space is broken into many small, scattered pieces instead of being one large, continuous block.</p>
        <p>A process requires contiguous memory, and if no single block is big enough — even if total free RAM is more — the OS cannot allocate it.</p>
        <p>This situation is called <strong>external fragmentation</strong>.</p>
        <p>Memory exists, but not in a usable form.</p>

        <h3>Fragmentation</h3>
        <p>Fragmentation is an unwanted problem in the operating system in which the processes are loaded and unloaded from memory, and free memory space is fragmented. Processes can&apos;t be assigned to memory blocks due to their small size, and the memory blocks stay unused. It is also necessary to understand that as programs are loaded and deleted from memory, they generate free space or a hole in the memory. These small blocks cannot be allotted to new arriving processes, resulting in inefficient memory use.</p>
        <p>The conditions of fragmentation depend on the memory allocation system. As the process is loaded and unloaded from memory, these areas are fragmented into small pieces of memory that cannot be allocated to incoming processes. It is called fragmentation.</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded my-4">
          <p className="font-semibold">💡 Did you know?</p>
          <p className="mt-2">Even supercomputers face fragmentation!</p>
          <p>A tiny 1% memory fragmentation can slow down simulations significantly.</p>
        </div>

        <h3>Causes of Fragmentation</h3>
        <p>Fragmentation occurs due to the dynamic loading and unloading of processes in the main memory. When processes are allocated memory blocks and later removed or swapped out, free spaces are left behind. These spaces are often scattered and non-contiguous, making it difficult to allocate memory efficiently to new processes.</p>
        <p>Even if the total free memory is sufficient, it may not be usable if it&apos;s divided into small, non-contiguous blocks that cannot fit the size of a new process. Additionally, when processes are allocated larger blocks than they need, the leftover space within those blocks goes unused, leading to internal fragmentation.</p>
        <p>Frequent swapping of processes and unpredictable memory requests further exacerbate fragmentation. This leaves the memory filled with scattered gaps, reducing the system&apos;s overall efficiency and ability to handle new processes effectively.</p>

        <h3>Types of Fragmentation</h3>
        <p>There are mainly two types of fragmentation in the operating system. These are as follows:</p>
        <ul>
          <li>Internal Fragmentation</li>
          <li>External Fragmentation</li>
        </ul>

        <h4>Internal Fragmentation</h4>
        <p>When a process is allocated to a memory block, and if the process is smaller than the amount of memory requested, a free space is created in the given memory block. Due to this, the free space of the memory block is unused, which causes internal fragmentation.</p>
        <p><strong>For Example:</strong></p>
        <p>Assume that memory allocation in RAM is done using fixed partitioning (i.e., memory blocks of fixed sizes). 2MB, 4MB, 4MB, and 8MB are the available sizes. The Operating System uses a part of this RAM.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_fragmentation_image1.jpg" alt="" />

        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="space-y-3">
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-xl font-bold text-gray-700">2 MB</div>
            <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-xl font-bold text-gray-800">4 MB (P1: 3 MB used, 1 MB wasted)</div>
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-xl font-bold text-gray-700">4 MB</div>
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-xl font-bold text-gray-700">8 MB</div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">Process P1 (3MB) allocated 4MB block → 1MB wasted (Internal Fragmentation)</p>
        </div>

        <p>Let&apos;s suppose a process P1 with a size of 3MB arrives and is given a memory block of 4MB. As a result, the 1MB of free space in this block is unused and cannot be used to allocate memory to another process. It is known as internal fragmentation.</p>

        <h4>How to avoid internal fragmentation?</h4>
        <p>The problem of internal fragmentation may arise due to the fixed sizes of the memory blocks. It may be solved by assigning space to the process via dynamic partitioning. Dynamic partitioning allocates only the amount of space requested by the process. As a result, there is no internal fragmentation.</p>

        <h4>External Fragmentation</h4>
        <p>External fragmentation happens when a dynamic memory allocation method allocates some memory but leaves a small amount of memory unusable. The quantity of available memory is substantially reduced if there is too much external fragmentation. There is enough memory space to complete a request, but it is not contiguous. It&apos;s known as external fragmentation.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_fragmentation_image2.jpg" alt="" />

        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="space-y-3">
            <div className="border-4 border-green-500 bg-green-50 px-6 py-3 rounded-xl font-bold text-gray-800">Process 1 (20 KB)</div>
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-xl font-bold text-gray-700">Free (10 KB)</div>
            <div className="border-4 border-green-500 bg-green-50 px-6 py-3 rounded-xl font-bold text-gray-800">Process 2 (30 KB)</div>
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-xl font-bold text-gray-700">Free (15 KB)</div>
            <div className="border-4 border-green-500 bg-green-50 px-6 py-3 rounded-xl font-bold text-gray-800">Process 3 (25 KB)</div>
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-xl font-bold text-gray-700">Free (25 KB)</div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">Total Free: 50 KB, but Process 5 (45 KB) cannot fit — External Fragmentation</p>
        </div>

        <p>Let&apos;s take the example of external fragmentation. In the above diagram, you can see that there is sufficient space (50 KB) to run a process (05) (need 45KB), but the memory is not contiguous. You can use compaction, paging, and segmentation to use the free space to execute a process.</p>

        <h4>How to remove external fragmentation?</h4>
        <p>This problem occurs when you allocate RAM to processes continuously. It is done in paging and segmentation, where memory is allocated to processes non-contiguously. As a result, if you remove this condition, external fragmentation may be decreased.</p>
        <p>Compaction is another method for removing external fragmentation. External fragmentation may be decreased when dynamic partitioning is used for memory allocation by combining all free memory into a single large block. The larger memory block is used to allocate space based on the requirements of the new processes. This method is also known as defragmentation.</p>
        <p>Now, let&apos;s take a look at the major differences between internal and external fragmentation.</p>

        <h3>Difference between internal and external fragmentation</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border-2 border-gray-400 px-4 py-3 text-left font-bold">Internal Fragmentation</th>
                <th className="border-2 border-gray-400 px-4 py-3 text-left font-bold">External Fragmentation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2">Occurs when allocated memory is larger than needed</td>
                <td className="border-2 border-gray-400 px-4 py-2">Occurs when free memory is scattered in small blocks</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-400 px-4 py-2">Wasted space inside allocated blocks</td>
                <td className="border-2 border-gray-400 px-4 py-2">Wasted space between allocated blocks</td>
              </tr>
              <tr>
                <td className="border-2 border-gray-400 px-4 py-2">Fixed partitioning causes this</td>
                <td className="border-2 border-gray-400 px-4 py-2">Dynamic partitioning causes this</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border-2 border-gray-400 px-4 py-2">Solved by dynamic partitioning</td>
                <td className="border-2 border-gray-400 px-4 py-2">Solved by compaction or paging</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Additional Deep Understanding</h3>
        <p>Fragmentation increases:</p>
        <ul>
          <li>Process waiting time</li>
          <li>System slowdown</li>
          <li>CPU idle cycles</li>
          <li>Swapping overhead</li>
          <li>Memory wastage</li>
        </ul>
        <p>It silently affects multitasking performance — even when &quot;free memory&quot; appears available.</p>

        <h3>Real-World Scenario</h3>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded my-4">
          <p>Imagine running multiple apps on a smartphone: WhatsApp, Instagram, Chrome, and a game.</p>
          <p className="mt-2">After a few hours, the system becomes slow — not because RAM is full, but because it is fragmented into tiny unusable blocks.</p>
          <p className="mt-2">The OS may even kill background apps to recover contiguous space.</p>
          <p className="mt-2 font-semibold">Server systems experience this even more — hundreds of processes → fragmentation → performance drop.</p>
        </div>

        <h3>Solving Fragmentation Problem Using Paging</h3>
        <p>To address the challenge of fragmentation, operating systems employ various techniques, one of which is paging. Paging is a method used for managing memory in which the system divides physical memory into small fixed-size blocks called &quot;frames&quot; and logical memory into corresponding blocks known as &quot;pages.&quot;</p>
        <p>When a process requires memory, the operating system assigns one or more pages to the process. These pages are linked to frames in the physical memory, and a page table facilitates access by mapping logical memory addresses to their corresponding physical addresses.</p>
        <p>Paging effectively tackles fragmentation by allocating memory in standardized pages, mitigating external fragmentation. Additionally, internal fragmentation is minimized as pages are allocated precisely to the required size. This approach optimizes memory utilization, thereby enhancing overall system performance.</p>
        <p>Moreover, paging provides additional advantages, including improved memory protection and sharing capabilities. The page table serves to safeguard memory from unauthorized access and facilitates memory sharing among multiple processes. Furthermore, paging enables the operating system to transfer pages to disk, freeing up physical memory for other processes.</p>
      </section>
    </div>
  );
};

export default Module4_9;
