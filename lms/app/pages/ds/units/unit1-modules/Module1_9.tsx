'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.9</div>
        <div className="lesson-title-main">
          <h1>Running Sum of 1d Array</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Practicing Problem Solving</h3>
        <p>Hey! 👋 Here's your quick guide for this milestone. The goal is to help you grow your coding skills and your online tech presence through one small activity.</p>
        <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">
            "Solving one problem a day makes a massive difference over a year. Start building your portfolio today."
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>What You'll Do</h3>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">1. Solve on LeetCode</h4>
            <p className="text-sm text-gray-600">Solve "Running Sum of 1d Array". It's the perfect introduction to array traversal.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-purple-600 mb-2">2. Automation with LeetHub</h4>
            <p className="text-sm text-gray-600">Use the LeetHub extension to auto-push your work to GitHub. A greener GitHub is a stronger portfolio.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Understanding Running Sum</h3>
        <p>The running sum of an array is defined as <code className="bg-gray-100 px-1 rounded text-blue-600">runningSum[i] = sum(nums[0]…nums[i])</code>.</p>
        <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm shadow-xl my-6">
          <p className="text-emerald-400">// Example:</p>
          <p className="text-white">Input: nums = [1, 2, 3, 4]</p>
          <p className="text-blue-300">Output: results = [1, 3, 6, 10]</p>
          <p className="text-gray-500 mt-2">// Explanation:</p>
          <p className="text-gray-400">1 = 1</p>
          <p className="text-gray-400">3 = 1 + 2</p>
          <p className="text-gray-400">6 = 1 + 2 + 3</p>
          <p className="text-gray-400">10 = 1 + 2 + 3 + 4</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Submission Checklist</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span>Screenshot of "Accepted" LeetCode status</span>
          </li>
          <li className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span>GitHub repository link</span>
          </li>
          <li className="flex items-center gap-3">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
            <span>(Optional) LinkedIn post sharing your win!</span>
          </li>
        </ul>
      </section>
      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/running-sum-of-1d-array/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">
Running Sum of 1d Array</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <Quiz
        title="Module 1.9 Quiz: Running Sum Logic"
        questions={[
          {
            question: "Given the array [1, 1, 1, 1, 1], what is the running sum array?",
            options: ["[1, 2, 3, 4, 5]", "[5, 4, 3, 2, 1]", "[1, 1, 1, 1, 1]", "[0, 1, 2, 3, 4]"],
            correctAnswer: 0,
            explanation: "Each step adds the next '1' to the current total: 1, 1+1=2, 2+1=3, and so on."
          },
          {
            question: "What is the most efficient Time Complexity for the Running Sum problem?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctAnswer: 2,
            explanation: "You only need to visit each element once as you maintain a running total."
          },
          {
            question: "Which formula describes the relationship between the results[i] and results[i-1]?",
            options: ["results[i] = nums[i] + results[i-1]", "results[i] = nums[i] * results[i-1]", "results[i] = results[i-1]", "results[i] = nums[0]"],
            correctAnswer: 0,
            explanation: "The sum up to index 'i' is just the sum up to 'i-1' plus the new value at 'i'."
          },
          {
            question: "If you calculate the running sum 'in-place' (modifying the input array), what is the Auxiliary Space complexity?",
            options: ["O(1)", "O(n)", "O(n^2)", "O(log n)"],
            correctAnswer: 0,
            explanation: "In-place means you aren't using extra memory proportional to the input size, so auxiliary space is constant."
          },
          {
            question: "What is the primary benefit of using the LeetHub extension?",
            options: ["It solves problems for you", "It automatically syncs your accepted code to GitHub", "It gives you free LeetCode premium", "It hides your profile from recruiters"],
            correctAnswer: 1,
            explanation: "LeetHub automates the process of maintaining a GitHub portfolio by pushing your solutions as soon as they are accepted."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={9}
      />
    </div>
  );
};

export default Module1_9;