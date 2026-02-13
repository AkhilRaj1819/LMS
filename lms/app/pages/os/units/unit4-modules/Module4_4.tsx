'use client';
import React from 'react';

const Module4_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.4</div>
        <div className="lesson-title-main">
          <h1>Partition Allocation Techniques (Worst Fit)</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In this lesson, you will explore the Worst Fit memory allocation strategy. This technique behaves opposite to Best Fit. Instead of choosing the smallest block that fits, it chooses the largest free memory block for placing a process.</p>
        <p>At first, this may seem illogical why waste a large block on a small process? But Worst Fit has a specific purpose: to leave behind the largest possible leftover block for future processes.</p>

        <h3>Worst Fit Algorithm</h3>
        <p>The Worst Fit algorithm selects the largest available hole in memory for allocating a process. The idea is that after allocation, the leftover space is still large enough to hold future processes, potentially reducing the creation of many small unusable holes.</p>

        <h3>How Worst Fit Works</h3>
        <ol>
          <li>Scan all free blocks currently available in memory.</li>
          <li>Find the largest block among them.</li>
          <li>Check if the block is large enough for the incoming process.</li>
          <li>Allocate the process inside this largest block and leave the remaining portion as a new free hole.</li>
          <li>If no block is large enough → the process cannot be allocated.</li>
        </ol>

        <h3>Worst Fit Selection Animation</h3>
        <p>Watch how the process finds and chooses the largest available block.</p>

        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="text-center mb-4">
            <div className="inline-block border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-2xl font-bold text-gray-800">Process (25 KB)</div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-2xl font-bold text-gray-700">30 KB</div>
            <div className="border-4 border-emerald-500 bg-emerald-50 px-6 py-3 rounded-2xl font-bold text-gray-800">120 KB ✓</div>
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-2xl font-bold text-gray-700">60 KB</div>
            <div className="border-4 border-gray-400 bg-gray-100 px-6 py-3 rounded-2xl font-bold text-gray-700">40 KB</div>
          </div>
          <p className="text-center text-sm text-gray-600">Worst Fit → chooses the 120 KB block because it is the largest.</p>
        </div>

        <h3>Advantages of Worst Fit</h3>
        <ul>
          <li><strong>Reduces small unused gaps:</strong> Since it uses the largest block, the remaining space is still large enough for future processes.</li>
          <li><strong>Useful for large processes:</strong> Ensures that memory always tries to preserve larger blocks for future high-memory tasks.</li>
          <li><strong>Better initial utilization:</strong> Works well at the beginning when system memory still has large contiguous blocks.</li>
        </ul>

        <h3>Disadvantages of Worst Fit</h3>
        <ul>
          <li><strong>Higher fragmentation:</strong> Large blocks break into smaller chunks leading to many leftover fragments.</li>
          <li><strong>Wasted space:</strong> Small processes waste space inside large blocks.</li>
          <li><strong>Slow allocation:</strong> Must scan entire memory to find the largest block.</li>
          <li><strong>Does not scale well:</strong> As fragmentation increases, performance drops significantly.</li>
        </ul>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded my-4">
          <p className="font-semibold">Real-World Analogy</p>
          <p className="mt-2">Imagine a warehouse storing boxes (processes). Worst Fit puts a small box inside the largest empty shelf. This leaves the remaining shelves completely free for any future large boxes.</p>
        </div>

        <h3>Where Worst Fit Is Useful</h3>
        <ul>
          <li><strong>Large File Systems:</strong> Useful when big files frequently arrive.</li>
          <li><strong>Servers with heavy and uneven workloads:</strong> Ensures large blocks stay available for demanding tasks.</li>
          <li><strong>Batch processing systems:</strong> Where maximizing large-block availability is important.</li>
        </ul>

        <h3>Why Some Systems Avoid Worst Fit</h3>
        <p>Most modern OS systems avoid Worst Fit because:</p>
        <ul>
          <li>It creates many small unusable holes.</li>
          <li>It wastes big blocks unnecessarily.</li>
          <li>Other strategies (First Fit / Next Fit) perform better in practice.</li>
        </ul>
        <p>Worst Fit aims to preserve big memory blocks, but at the cost of increased fragmentation, making it suitable only for selected scenarios.</p>

        <h3>Implementation Reference</h3>
        <p>Explore the implementation of the Worst Fit algorithm in memory management here:</p>
        <p><a href="https://www.geeksforgeeks.org/program-worst-fit-algorithm-memory-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Worst Fit Program – GeeksforGeeks</a></p>

        <h3>Additional Links (Optional)</h3>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/worst-fit-allocation-in-operating-systems/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Worst Fit – GFG</a></li>
          <li><a href="https://prepinsta.com/operating-systems/worst-fit-algorithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Worst Fit – PrepInsta</a></li>
        </ul>

        <p className="mt-4">With Worst Fit understood, you are now ready to compare it with First Fit, Best Fit, Next Fit, and see when each algorithm performs well.</p>
        <p>Now let&apos;s try to implement the Worst Fit algorithm in the assignment below.</p>
      </section>
    </div>
  );
};

export default Module4_4;
