'use client';
import React from 'react';

const Module4_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.6</div>
        <div className="lesson-title-main">
          <h1>Paging</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Your laptop is running a browser, a code editor, WhatsApp Web, and maybe even a game all at the same time. But your RAM is definitely not big enough to hold every app fully. So here&apos;s the big question: How does the Operating System make it look like every program has enough memory, even when it doesn&apos;t?</p>
        <p>The answer lies in a powerful memory-management technique used by all modern OS: <strong>Paging</strong>. Let&apos;s dive in.</p>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDN6aG42YzNrNXp2cWxxOXIzOWx4bm1pa2czamx3czBocm12NXRmaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BWEY1LI6WdaN2/giphy.gif" alt="" />

        <h3>Paging</h3>
        <p>Paging is a memory management technique that eliminates external fragmentation and allows processes to be stored in non-contiguous memory. Instead of loading the whole program into RAM, the OS loads it in small fixed-size chunks called <strong>pages</strong>.</p>
        <ul>
          <li>Physical memory is also divided into equal-sized blocks called <strong>frames</strong>.</li>
          <li>The OS maps pages → frames using a <strong>page table</strong>.</li>
        </ul>

        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-bold mb-3 text-center">Logical Memory (Pages)</h4>
              <div className="space-y-2">
                <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-xl font-bold text-gray-800">Page 0</div>
                <div className="border-4 border-green-500 bg-green-50 px-6 py-3 rounded-xl font-bold text-gray-800">Page 1</div>
                <div className="border-4 border-orange-500 bg-orange-50 px-6 py-3 rounded-xl font-bold text-gray-800">Page 2</div>
                <div className="border-4 border-purple-500 bg-purple-50 px-6 py-3 rounded-xl font-bold text-gray-800">Page 3</div>
              </div>
            </div>
            <div className="text-4xl text-gray-400">→</div>
            <div>
              <h4 className="font-bold mb-3 text-center">Physical Memory (Frames)</h4>
              <div className="space-y-2">
                <div className="border-4 border-purple-500 bg-purple-50 px-6 py-3 rounded-xl font-bold text-gray-800">Frame 0: Page 3</div>
                <div className="border-4 border-gray-300 bg-gray-100 px-6 py-3 rounded-xl font-bold text-gray-500">Frame 1: Empty</div>
                <div className="border-4 border-blue-500 bg-blue-50 px-6 py-3 rounded-xl font-bold text-gray-800">Frame 2: Page 0</div>
                <div className="border-4 border-orange-500 bg-orange-50 px-6 py-3 rounded-xl font-bold text-gray-800">Frame 3: Page 2</div>
                <div className="border-4 border-green-500 bg-green-50 px-6 py-3 rounded-xl font-bold text-gray-800">Frame 4: Page 1</div>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">These pages are placed into available frames in RAM.</p>
        </div>

        <p>Watch the video given below to understand paging in detail.</p>
        <div className="my-4">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/pJ6qrCB8pDw" title="Paging in Operating Systems" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg"></iframe>
        </div>

        <h3>Why Do We Even Need Paging?</h3>
        <p>Without paging, programs would need one big continuous space in RAM. But RAM gets filled with gaps (holes), causing external fragmentation.</p>
        <p>Paging solves this by:</p>
        <ul>
          <li>Cutting memory into equal-size pieces (frames)</li>
          <li>Cutting programs into equal-size pieces (pages)</li>
          <li>Allowing pages to be placed anywhere in RAM</li>
        </ul>
        <p>Also, read <a href="https://www.geeksforgeeks.org/paging-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">this site</a> to understand the page structure and its components.</p>

        <h3>Page Table — The Translator</h3>
        <p>The OS uses a <strong>Page Table</strong> to keep track of which page is stored in which physical frame.</p>
        <p>Example Entry:</p>
        <ul>
          <li>Page 2 → Frame 7</li>
          <li>Page 5 → Frame 3</li>
        </ul>

        <h3>What is a Page Fault?</h3>
        <p>A <strong>page fault</strong> occurs when a program tries to access a page that is not currently in RAM.</p>
        <p>The OS must fetch it from secondary storage, which takes more time.</p>

        <h4>Page Fault Handling Steps:</h4>
        <ol>
          <li>Check if the requested page is in RAM.</li>
          <li>If not → trigger a page fault.</li>
          <li>OS loads the page from disk into a free frame.</li>
          <li>Update Page Table.</li>
          <li>Resume program execution.</li>
        </ol>

        <h3>Advantages of Paging</h3>
        <ul>
          <li>No external fragmentation.</li>
          <li>RAM can store parts of multiple processes at once.</li>
          <li>Allows programs larger than main memory.</li>
          <li>Efficient for multitasking OS.</li>
        </ul>

        <h3>Disadvantages of Paging</h3>
        <ul>
          <li>Page table consumes extra memory.</li>
          <li>Higher access time due to address translation.</li>
          <li>Page faults slow down program execution.</li>
        </ul>

        <h3>Real-World Applications</h3>
        <ul>
          <li>All modern OS (Windows, Linux, macOS) rely heavily on paging.</li>
          <li>Virtual Memory systems use paging for multitasking.</li>
          <li>Large applications like browsers and IDEs use paging to load required chunks only.</li>
        </ul>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded my-4">
          <p className="font-semibold">Note</p>
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/paging_formula.png" alt="" />
          <p className="mt-2">Solved problems</p>
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/paging_prob_1.png" alt="" />
          <br />
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/paging_prob_2.png" alt="" />
        </div>

        <h3>Practice Problems</h3>
        <details className="bg-blue-50 border-4 border-blue-500 p-4 rounded-xl my-4">
          <summary className="font-bold cursor-pointer">Problem 1: Page Number and Offset Calculation</summary>
          <div className="mt-3">
            <p>A system uses 4 KB page size.</p>
            <p>Calculate:</p>
            <ul>
              <li>a) Page number</li>
              <li>b) Offset</li>
            </ul>
            <p>For a logical address: 0x4A21</p>
          </div>
        </details>

        <details className="bg-green-50 border-4 border-green-500 p-4 rounded-xl my-4">
          <summary className="font-bold cursor-pointer">Problem 2: Page Fault Count</summary>
          <div className="mt-3">
            <p>A process has 6 pages. Physical memory has 4 frames.</p>
            <p>Page reference string:</p>
            <p className="font-mono bg-white p-2 rounded">2, 1, 4, 2, 3, 2, 1, 5</p>
            <p>Identify → How many page faults occur?</p>
          </div>
        </details>
        <br />
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20system%2Fpaging.png" alt="" />

        <h3>Additional Links (Optional)</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/paging-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Paging in Operating System - GeeksforGeeks</a></li>
          <li><a href="https://medium.com/@priyankagupta1709/paging-in-operating-system-b1f5c7f8c3e3" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Paging in OS | Medium</a></li>
          <li><a href="https://www.spiceworks.com/tech/devops/articles/what-is-paging/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Paging in Operating Systems: What it Is & How it Works</a></li>
        </ul>

        <p className="mt-4">Let&apos;s move on to the next lesson now.</p>
      </section>
    </div>
  );
};

export default Module4_6;
