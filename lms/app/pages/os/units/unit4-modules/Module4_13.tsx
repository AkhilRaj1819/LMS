'use client';
import React, { useState, useEffect } from 'react';

const FIFOAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const refs = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  const frames = [
    [7], [7, 0], [7, 0, 1], [0, 1, 2], [0, 1, 2], [1, 2, 3], [1, 2, 3], [2, 3, 4], [3, 4, 2], [4, 2, 3], [2, 3, 0], [2, 3, 0], [2, 3, 0]
  ];
  const faults = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8, 9, 9, 9];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % refs.length), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-blue-700">Reference: {refs[step]}</div>
        <div className="text-sm text-blue-600">Page Faults: {faults[step]}</div>
      </div>
      <div className="flex justify-center gap-2">
        {frames[step].map((page, i) => (
          <div key={i} className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white font-bold rounded">
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

const LRUAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const refs = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  const frames = [
    [7], [7, 0], [7, 0, 1], [7, 0, 1, 2], [7, 0, 1, 2], [0, 1, 2, 3], [0, 1, 2, 3], [0, 3, 2, 4], [0, 3, 4, 2], [0, 4, 2, 3], [4, 2, 3, 0], [4, 2, 3, 0], [4, 3, 0, 2]
  ];
  const faults = [1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 7, 7, 7];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % refs.length), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-purple-500 bg-purple-50 p-6 rounded-lg">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-purple-700">Reference: {refs[step]}</div>
        <div className="text-sm text-purple-600">Page Faults: {faults[step]}</div>
      </div>
      <div className="flex justify-center gap-2">
        {frames[step].map((page, i) => (
          <div key={i} className="w-16 h-16 flex items-center justify-center bg-purple-500 text-white font-bold rounded">
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

const OptimalAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const refs = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2];
  const frames = [
    [7], [7, 0], [7, 0, 1], [7, 0, 1, 2], [7, 0, 1, 2], [3, 0, 1, 2], [3, 0, 1, 2], [3, 0, 4, 2], [3, 0, 4, 2], [3, 0, 4, 2], [3, 0, 4, 2], [3, 0, 4, 2], [3, 0, 4, 2]
  ];
  const faults = [1, 2, 3, 4, 4, 5, 5, 6, 6, 6, 6, 6, 6];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % refs.length), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-green-500 bg-green-50 p-6 rounded-lg">
      <div className="text-center mb-4">
        <div className="text-xl font-bold text-green-700">Reference: {refs[step]}</div>
        <div className="text-sm text-green-600">Page Faults: {faults[step]}</div>
      </div>
      <div className="flex justify-center gap-2">
        {frames[step].map((page, i) => (
          <div key={i} className="w-16 h-16 flex items-center justify-center bg-green-500 text-white font-bold rounded">
            {page}
          </div>
        ))}
      </div>
    </div>
  );
};

const Module4_13: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.13</div>
        <div className="lesson-title-main">
          <h1>Solved Problems on Page Replacement</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Computing Page Faults</h3>
        <p>
          Apply page replacement algorithms to compute page faults accurately. In this lesson, we'll solve problems using FIFO, LRU, and Optimal algorithms with the same reference string to compare their performance.
        </p>
      </section>

      <section className="content-section">
        <h3>Problem Statement</h3>
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
          <p className="font-semibold text-orange-800">Given:</p>
          <ul className="text-orange-800">
            <li>Number of frames: <strong>4</strong></li>
            <li>Reference string: <strong>[7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2]</strong></li>
          </ul>
          <p className="font-semibold text-orange-800 mt-2">Find: Total page faults using FIFO, LRU, and Optimal algorithms</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Solution 1: FIFO Algorithm</h3>
        <p>First In First Out replaces the oldest page in memory.</p>
        <FIFOAnimation />
        <div className="mt-4 border-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
          <p className="text-center font-bold text-blue-800 text-lg">Total Page Faults (FIFO): 9</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Solution 2: LRU Algorithm</h3>
        <p>Least Recently Used replaces the page that hasn't been used for the longest time.</p>
        <LRUAnimation />
        <div className="mt-4 border-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
          <p className="text-center font-bold text-purple-800 text-lg">Total Page Faults (LRU): 7</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Solution 3: Optimal Algorithm</h3>
        <p>Optimal replaces the page that will not be used for the longest time in the future.</p>
        <OptimalAnimation />
        <div className="mt-4 border-4 border-green-500 bg-green-50 p-4 rounded-lg">
          <p className="text-center font-bold text-green-800 text-lg">Total Page Faults (Optimal): 6</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Comparison Summary</h3>
        <table className="w-full border-collapse border-2 border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Algorithm</th>
              <th className="border-2 border-gray-400 p-3">Page Faults</th>
              <th className="border-2 border-gray-400 p-3">Performance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">FIFO</td>
              <td className="border-2 border-gray-400 p-3 text-center">9</td>
              <td className="border-2 border-gray-400 p-3">Worst - ignores usage patterns</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">LRU</td>
              <td className="border-2 border-gray-400 p-3 text-center">7</td>
              <td className="border-2 border-gray-400 p-3">Better - considers recent usage</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">Optimal</td>
              <td className="border-2 border-gray-400 p-3 text-center">6</td>
              <td className="border-2 border-gray-400 p-3">Best - uses future knowledge</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        
        <details className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <summary className="font-bold cursor-pointer text-blue-800">Problem 1: Compare FIFO vs LRU</summary>
          <div className="mt-3">
            <p><strong>Given:</strong> 3 frames, Reference: [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]</p>
            <p className="mt-2"><strong>Task:</strong> Calculate page faults for both FIFO and LRU</p>
            <p className="mt-2 text-sm text-blue-700"><strong>Answer:</strong> FIFO = 9, LRU = 10</p>
          </div>
        </details>

        <details className="border-4 border-green-500 bg-green-50 p-4 rounded-lg mb-4">
          <summary className="font-bold cursor-pointer text-green-800">Problem 2: Optimal Algorithm</summary>
          <div className="mt-3">
            <p><strong>Given:</strong> 4 frames, Reference: [2, 3, 2, 1, 5, 2, 4, 5, 3, 2, 5, 2]</p>
            <p className="mt-2"><strong>Task:</strong> Find minimum page faults using Optimal</p>
            <p className="mt-2 text-sm text-green-700"><strong>Answer:</strong> Optimal = 6</p>
          </div>
        </details>

        <details className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg mb-4">
          <summary className="font-bold cursor-pointer text-purple-800">Problem 3: LRU Deep Dive</summary>
          <div className="mt-3">
            <p><strong>Given:</strong> 3 frames, Reference: [7, 0, 1, 2, 0, 3, 0, 4, 2, 3]</p>
            <p className="mt-2"><strong>Task:</strong> Show frame state after each reference for LRU</p>
            <p className="mt-2 text-sm text-purple-700"><strong>Answer:</strong> Total faults = 6</p>
          </div>
        </details>

        <details className="border-4 border-red-500 bg-red-50 p-4 rounded-lg mb-4">
          <summary className="font-bold cursor-pointer text-red-800">Problem 4: Belady's Anomaly</summary>
          <div className="mt-3">
            <p><strong>Given:</strong> Reference: [1, 2, 3, 4, 1, 2, 5, 1, 2, 3, 4, 5]</p>
            <p className="mt-2"><strong>Task:</strong> Compare FIFO with 3 frames vs 4 frames</p>
            <p className="mt-2 text-sm text-red-700"><strong>Answer:</strong> 3 frames = 9 faults, 4 frames = 10 faults (anomaly!)</p>
          </div>
        </details>

        <details className="border-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
          <summary className="font-bold cursor-pointer text-yellow-800">Problem 5: All Three Algorithms</summary>
          <div className="mt-3">
            <p><strong>Given:</strong> 4 frames, Reference: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]</p>
            <p className="mt-2"><strong>Task:</strong> Calculate faults for FIFO, LRU, and Optimal</p>
            <p className="mt-2 text-sm text-yellow-700"><strong>Answer:</strong> FIFO = 8, LRU = 8, Optimal = 6</p>
          </div>
        </details>
      </section>

      <section className="content-section">
        <h3>Key Takeaways</h3>
        <ul>
          <li><strong>Optimal</strong> always gives minimum page faults but requires future knowledge</li>
          <li><strong>LRU</strong> performs better than FIFO in most practical scenarios</li>
          <li><strong>FIFO</strong> is simplest but can suffer from Belady's Anomaly</li>
          <li>More frames generally reduce page faults (except FIFO anomaly cases)</li>
          <li>Algorithm choice depends on implementation cost vs performance gain</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/page-replacement-algorithms-in-operating-systems/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Page Replacement Algorithms - GeeksforGeeks
            </a>
          </li>
          <li>
            <a href="https://www.javatpoint.com/os-page-replacement-algorithms" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Page Replacement Algorithms - Javatpoint
            </a>
          </li>
          <li>
            <a href="https://www.tutorialspoint.com/operating_system/os_virtual_memory.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Virtual Memory - Tutorialspoint
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Module4_13;
