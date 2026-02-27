'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.12</div>
        <div className="lesson-title-main">
          <h1>Assignment | Merge Sort</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Divide &amp; Conquer in Action: Sorting with Merge Sort</h3>

        <p className="mb-6">
          Sorting isn't just about putting numbers in order — it's about understanding patterns that scale, optimize, and make your code smarter. In this assignment, you'll implement one of the most classic and powerful sorting techniques ever invented — Merge Sort.
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.kalvium.community/mergesort.png" alt="Merge Sort" />
        </div>

        <p className="mb-6">
          Whether you're cleaning up messy input, organizing leaderboard data, or preparing datasets for analysis, Merge Sort is a go-to method you'll keep revisiting in coding interviews and real-world development.
        </p>

        <p className="mb-6 font-semibold">
          It's not just sorting. It's divide and conquer at its finest.
        </p>

        <h3 className="text-xl font-semibold mb-4">What You'll Learn by the End of This</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>How to recursively divide arrays into halves until they're trivially sorted</li>
          <li>The elegance of merging small sorted arrays into a larger sorted one</li>
          <li>Why this algorithm always runs in O(n log n) time, regardless of input</li>
          <li>How Merge Sort shines in sorting large datasets and linked lists, and how it's a brilliant example of algorithmic thinking</li>
        </ul>

        <p className="mb-6">
          This session includes a live code-along with your mentor. Bring your brain, your laptop, and maybe a warm drink. It's going to be fun.
        </p>

        <h3 className="text-xl font-semibold mb-4">Your Task</h3>
        <p className="mb-6">
          Write a program that sorts an array of integers in ascending order using the Merge Sort algorithm.
        </p>

        <h3 className="text-xl font-semibold mb-4">Input Format</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>First line: A single integer n (number of elements in the array)</li>
          <li>Second line: n space-separated integers</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Output Format</h3>
        <p className="mb-6">
          A single line: the sorted array, printed in ascending order (space-separated)
        </p>

        <h3 className="text-xl font-semibold mb-4">Sample Input 1</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{`8  
5 2 7 1 3 9 4 6`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Sample Output 1</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>1 2 3 4 5 6 7 9</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Sample Input 2</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{`6  
6 5 4 3 2 1`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Sample Output 2</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>1 2 3 4 5 6</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">How Merge Sort Works</h3>
        <p className="mb-4">
          Think of Merge Sort as two powerful phases:
        </p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Step 1: Divide</p>
            <p>Split the array into two halves, then split those halves again... and again... Until each chunk is just a single element.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 2: Conquer &amp; Merge</p>
            <p>Now merge these single-element arrays back together — but in sorted order. Compare elements while merging to ensure the resulting array stays sorted.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Key Ideas Behind the Algorithm</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Base Case:</strong> An array of 1 element is already sorted.</li>
          <li>
            <strong>Recursive Case:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Keep dividing the array into halves</li>
              <li>Recursively sort both halves</li>
              <li>Merge them using a helper function that compares elements and assembles a sorted array</li>
            </ul>
          </li>
          <li><strong>Time Complexity:</strong> Always O(n log n)</li>
          <li><strong>Space Complexity:</strong> O(n) due to the extra array used during merging</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Problem-Solving Guide</h3>
        <p className="mb-4 font-semibold">Step-by-step breakdown of the logic</p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Recursive Splitting</p>
            <p className="mb-2">Write a function mergeSort(arr) that:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Checks if len(arr) &lt;= 1 → return the array</li>
              <li>Else, split arr into left_half and right_half</li>
              <li>Recursively sort both halves</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Merge Logic</p>
            <p className="mb-2">Write a helper function merge(left, right) that:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Takes two sorted arrays</li>
              <li>Creates a new result array</li>
              <li>Uses two pointers to compare and insert elements into the result</li>
              <li>Adds remaining elements (if any)</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Call mergeSort() on the input array</p>
            <p>Print the result</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Constraints</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>1 ≤ n ≤ 10⁵</li>
          <li>-10⁹ ≤ arr[i] ≤ 10⁹</li>
        </ul>
        <section className="content-section">
          <h3>Practice Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://leetcode.com/problems/merge-sorted-array/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Merge Sorted Array</h4>
              <p className="text-xs text-gray-500">LeetCode • Easy</p>
            </a>
          </div>
        </section>

        <Quiz
          title="Module 2.12 Quiz: Merge Sort Mastery"
          questions={[
            {
              question: "Why is the Space Complexity of Merge Sort O(n)?",
              options: ["Because of the recursion stack", "Because it requires an auxiliary array to hold the elements while merging", "Because the input array itself is counted", "Because the algorithm is unstable"],
              correctAnswer: 1,
              explanation: "The merging step creates a result array (or copies into one) that is as large as the combined size of the two halves being merged."
            },
            {
              question: "What is the result of dividing an array of size 1?",
              options: ["Two arrays of size 0.5", "Recursion stops because it's the base case", "An error occurs", "It is divided into 0 and 1"],
              correctAnswer: 1,
              explanation: "In Merge Sort, a single element is already sorted. This is the base case where we stop dividing and start merging."
            },
            {
              question: "Is Merge Sort faster for sorted arrays or unsorted arrays?",
              options: ["Faster for sorted arrays", "Faster for reversed arrays", "It takes exactly the same time O(n log n) for all inputs", "It depends on the first element"],
              correctAnswer: 2,
              explanation: "Merge Sort's structure of splitting and merging is identical regardless of the values, making its performance O(n log n) in all scenarios."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={12}
        />
      </section>
    </div>
  );
};

export default Module2_12;
