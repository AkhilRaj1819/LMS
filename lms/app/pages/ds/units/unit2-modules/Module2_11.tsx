'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.11</div>
        <div className="lesson-title-main">
          <h1>Assignment | Kth largest element in an array</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this assignment, you will try to solve a problem by using heaps.
        </p>

        <p className="mb-4">
          Try to come up with the solution yourself, but if you want some help you can refer to the following video.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XEmy13g1Qxc" title="Kth Largest Element in an Array" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-6">
          You can also refer to this blog. You can either watch the video or go through the blog for your reference.
        </p>

        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-4">
          For additional practice, you can visit the following problem links given below. This part is optional and you can continue to the next lesson without solving these problems.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://www.geeksforgeeks.org/problems/k-closest-elements3619/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Problem-1
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/problems/k-th-largest-sum-contiguous-subarray/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Problem-2
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/problems/overlapping-intervals--170633/1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Problem-3
            </a>
          </li>
        </ul>
        <section className="content-section">
          <h3>Practice Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://leetcode.com/problems/kth-largest-element-in-an-array/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Kth Largest Element in an Array</h4>
              <p className="text-xs text-gray-500">LeetCode • Medium</p>
            </a>
            <a href="https://leetcode.com/problems/kth-largest-element-in-a-stream/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Kth Largest Element in a Stream</h4>
              <p className="text-xs text-gray-500">LeetCode • Easy</p>
            </a>
          </div>
        </section>

        <Quiz
          title="Module 2.11 Quiz: Heaps & Kth Largest"
          questions={[
            {
              question: "Why are heaps efficient for finding the Kth largest element?",
              options: ["They sort the array automatically", "They provide O(1) access to the minimum/maximum element", "They use less memory than arrays", "They convert recursion into loops"],
              correctAnswer: 1,
              explanation: "Max-heaps give immediate access to the largest element, and Min-heaps of size K can track the largest K elements efficiently."
            },
            {
              question: "What is the Time Complexity of building a heap from an array of size 'n'?",
              options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
              correctAnswer: 2,
              explanation: "Building a heap (Heapify) using the bottom-up approach takes linear time, O(n)."
            },
            {
              question: "In a Min-Heap used to find the Kth largest element, what does the root represent after processing all elements?",
              options: ["The largest element", "The smallest element in the original array", "The Kth largest element", "The average of all elements"],
              correctAnswer: 2,
              explanation: "In a min-heap of size K, the root is the smallest of the K largest elements, which is the Kth largest element overall."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={11}
        />
      </section>
    </div>
  );
};

export default Module2_11;
