'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_16: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.16</div>
        <div className="lesson-title-main">
          <h1>The Two-Pointer Approach | Collision Pattern</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In many array-based problems, especially when working with sorted arrays, a powerful technique called the Two-Pointer Collision Pattern helps us solve problems efficiently in O(n) time.
        </p>

        <p className="mb-6">
          In this problem, you are given a sorted array of integers and a target value. Your task is to find all unique pairs in the array that sum up to the target. Each pair should appear only once, and the order of elements in the pair must be ascending.
        </p>

        <p className="mb-6">
          This problem is a classic case for applying two pointers — one starting from the beginning and one from the end — and moving them toward each other depending on the sum of elements.
        </p>

        <p className="mb-4">
          You can watch this video to understand the approach for this problem better.
        </p>

        <div className="mb-6">
          <iframe width="407" height="360" src="https://www.youtube.com/embed/3OamzN90kPg" title="Contains Duplicate - Leetcode 217 - Python" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-4 font-semibold">
          This video walks through:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>What Two-Pointers is</li>
          <li>How it's applied</li>
          <li>Example problems (like the one you're solving!)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">What you'll do?</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Efficiently search for target pairs in sorted arrays</li>
          <li>Avoid counting duplicate pairs</li>
          <li>Implement a clean solution in both Java and C++</li>
          <li>Recognize when this pattern is better than brute force</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Further Reading &amp; Resources</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://www.geeksforgeeks.org/two-pointers-technique/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GeeksforGeeks – Two Pointer Technique
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/explore/learn/card/two-pointers/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LeetCode – Explore Card: Two Pointers
            </a>
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Practice Problems</h3>
        <p className="mb-4">
          Try these to solidify your understanding:
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Platform</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Problem</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">LeetCode</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Two Sum II – Sorted Array
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">LeetCode</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="https://leetcode.com/problems/3sum/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    3Sum
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">HackerRank</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a href="https://www.hackerrank.com/challenges/pairs/problem" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Pairs
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        

        <Quiz
          title="Module 2.16 Quiz: Two-Pointer Collision Pattern"
          questions={[
            {
              question: "What is the prerequisite for using the Two-Pointer Collision Pattern to find pairs with a specific sum?",
              options: ["The array must be empty", "The array must be sorted", "The array must contain only positive numbers", "The array must be unsorted"],
              correctAnswer: 1,
              explanation: "The collision pattern relies on the sorted property to decide which pointer to move based on whether the current sum is too small or too large."
            },
            {
              question: "If 'left' and 'right' are your two pointers and `arr[left] + arr[right]` is LESS than the target, what should you do?",
              options: ["Decrement 'right'", "Increment 'left'", "Stop the search", "Increment both pointers"],
              correctAnswer: 1,
              explanation: "Since the array is sorted, incrementing the left pointer increases the total sum."
            },
            {
              question: "If `arr[left] + arr[right]` is GREATER than the target, what should you do?",
              options: ["Increment 'left'", "Decrement 'right'", "Swap the elements", "Decrement both pointers"],
              correctAnswer: 1,
              explanation: "Since the array is sorted, decrementing the right pointer decreases the total sum."
            },
            {
              question: "What is the time complexity of the two-pointer approach compared to a nested loop (brute force) for finding a pair sum?",
              options: ["O(n) vs O(n^2)", "O(n^2) vs O(n)", "O(log n) vs O(n)", "O(n log n) vs O(n^2)"],
              correctAnswer: 0,
              explanation: "The two-pointer approach traverses the array at most once (O(n)), while a nested loop checks all possible pairs (O(n^2))."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={16}
        />

        <h3 className="text-xl font-semibold mb-4">Instructions</h3>
        <p className="mb-4">
          In this session, students will participate in a pair programming exercise. Each pair is required to collaboratively solve the given problem using a single system. Once the solution is successfully implemented and verified, the second member may use that solution for their individual assignment submission.
        </p>

        <p className="mb-4 font-semibold">Guidelines:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Form pairs before the session begins.</li>
          <li>Work together on one system per pair to develop and test the solution.</li>
          <li>In case a student is unable to find a partner, they should pair up with the mentor for this activity.</li>
          <li>Use of Large Language Models (LLMs) such as ChatGPT, Gemini, or similar tools is strictly prohibited.</li>
          <li>You may refer to Google or official documentation only for understanding syntax or language-specific concepts.</li>
        </ul>

        <p className="mb-6">
          The objective of this activity is to encourage collaboration, logical thinking, and peer learning while maintaining academic integrity.
        </p>

        <p className="mb-6 font-semibold">
          You've got the tools and understanding—now it's time to put your skills to the test! Dive into the assignment and master the two-pointer technique by solving real problems.
        </p>
      </section>
    </div>
  );
};

export default Module2_16;
