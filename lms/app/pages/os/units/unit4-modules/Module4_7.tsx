'use client';
import React from 'react';

const Module4_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.7</div>
        <div className="lesson-title-main">
          <h1>Segmentation</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>Imagine your notebook. Instead of writing all subjects mixed together, you divide it into separate sections: Math, Science, English.</p>
        <p>Each section has a different size and grows independently.</p>
        <p>This is exactly how <strong>segmentation</strong> works in memory.</p>

        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="flex justify-around items-center">
            <div className="border-4 border-blue-500 bg-blue-50 px-8 py-6 rounded-xl font-bold text-gray-800">Math</div>
            <div className="border-4 border-green-500 bg-green-50 px-8 py-6 rounded-xl font-bold text-gray-800">Science</div>
            <div className="border-4 border-orange-500 bg-orange-50 px-8 py-6 rounded-xl font-bold text-gray-800">English</div>
          </div>
        </div>

        <h3>Segmentation</h3>
        <p>Segmentation is a memory management technique where a program is divided into variable-sized parts called <strong>segments</strong>.</p>
        <p>Each segment represents a logical unit of the program such as:</p>
        <ul>
          <li>Code Segment</li>
          <li>Data Segment</li>
          <li>Stack Segment</li>
          <li>Heap Segment</li>
        </ul>
        <p>Unlike paging, segmentation divides programs based on logical meaning, not fixed size.</p>

        <h3>Visualizing a Process Divided into Segments</h3>
        <div className="bg-gray-50 rounded-2xl p-8 my-6">
          <div className="space-y-3">
            <div className="border-4 border-purple-500 bg-purple-50 px-6 py-4 rounded-xl font-bold text-gray-800">Code</div>
            <div className="border-4 border-blue-500 bg-blue-50 px-6 py-4 rounded-xl font-bold text-gray-800">Data</div>
            <div className="border-4 border-green-500 bg-green-50 px-6 py-4 rounded-xl font-bold text-gray-800">Stack</div>
            <div className="border-4 border-orange-500 bg-orange-50 px-6 py-4 rounded-xl font-bold text-gray-800">Heap</div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">Each segment grows independently and is stored separately in memory.</p>
        </div>

        <p>Watch the video to understand segmentation in depth.</p>
        <div className="my-4">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/dz9Tk6KCMlQ" title="Segmentation in Operating Systems" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-lg"></iframe>
        </div>

        <h3>Segmentation vs Paging</h3>
        <p>Paging divides memory into fixed-size blocks, while segmentation divides memory based on logical program units.</p>
        <p>Both solve different problems, and many systems combine both.</p>
        <strong>Difference between segmentation and paging: </strong>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/segmentationvspaging.jpg" alt="" />

        <h3>Logical vs Physical Address</h3>
        <p>CPU generates <strong>logical addresses</strong>.</p>
        <p>Actual location where data is stored is the <strong>physical address</strong>.</p>
        <p>Segmentation uses:</p>
        <ul>
          <li>Segment Number</li>
          <li>Offset</li>
        </ul>
        <p>The Memory Management Unit (MMU) converts logical → physical address.</p>
        <iframe width="407" height="360" src="https://www.youtube.com/embed/dDs53dBjErA" title="Logical vs Physical address space | OS | Lec-32 | Bhanu Priya" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        <h3>Advantages of Segmentation</h3>
        <ul>
          <li>Logical division matches program structure</li>
          <li>Efficient sharing of code and data</li>
          <li>Supports dynamic segment growth</li>
        </ul>

        <h3>Disadvantages</h3>
        <ul>
          <li>External fragmentation occurs</li>
          <li>Variable-sized segments increase management complexity</li>
        </ul>

        <h3>Segmentation in Games</h3>
        <p>Games like PUBG divide memory into segments for each player&apos;s:</p>
        <ul>
          <li>Character code</li>
          <li>Player data</li>
          <li>World map data</li>
          <li>Physics and graphics engine</li>
        </ul>
        <p>This ensures protection, sharing, and fast access for critical features.</p>

        <h3>Solved Problems</h3>
        <details className="bg-blue-50 border-4 border-blue-500 p-4 rounded-xl my-4">
          <summary className="font-bold cursor-pointer">Problem 1</summary>
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/segmentation_question_1.jpg" alt="" />
          <div className="mt-3">
            <p className="font-semibold">Solution</p>
            <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/segmentation_solution_1.jpg" alt="" />
          </div>
        </details>

        <details className="bg-green-50 border-4 border-green-500 p-4 rounded-xl my-4">
          <summary className="font-bold cursor-pointer">Problem 2</summary>
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/segmentation_question_2.jpg" alt="" />
          <div className="mt-3">
            <p className="font-semibold">Solution</p>
            <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/segmentation_solution_2.jpg" alt="" />
          </div>
        </details>

      </section>
    </div>
  );
};

export default Module4_7;
