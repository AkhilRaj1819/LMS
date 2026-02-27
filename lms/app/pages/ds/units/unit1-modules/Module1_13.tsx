'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_13: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.13</div>
        <div className="lesson-title-main">
          <h1>Reverse String</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Efficiency in Modification</h3>
        <p>In this milestone, you will reverse a string <strong>in-place</strong>. This is a common requirement in low-level programming where memory is restricted.</p>
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">
            "Don't just allocate a new array. Swap the characters in the original memory. This is the difference between O(n) space and O(1) space."
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>The Swap Logic</h3>
        <p>Using two pointers—one at the start (<code className="bg-gray-100 px-1 rounded">left</code>) and one at the end (<code className="bg-gray-100 px-1 rounded">right</code>):</p>
        <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-sm my-6">
          <ol className="space-y-4">
            <li className="flex gap-4">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
              <span>Compare and <strong>swap</strong> the characters at <code className="bg-gray-100 px-1 rounded">left</code> and <code className="bg-gray-100 px-1 rounded">right</code>.</span>
            </li>
            <li className="flex gap-4">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
              <span>Increment <code className="bg-gray-100 px-1 rounded text-emerald-600">left++</code> and decrement <code className="bg-gray-100 px-1 rounded text-rose-600">right--</code>.</span>
            </li>
            <li className="flex gap-4">
              <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
              <span>Repeat until the pointers meet or cross in the middle.</span>
            </li>
          </ol>
        </div>
      </section>
      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/reverse-string/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Reverse String</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <Quiz
        title="Module 1.13 Quiz: Reverse Logic"
        questions={[
          {
            question: "What does 'In-Place' modification mean?",
            options: ["Creating a copy of the array", "Modifying the input data structure directly without extra memory", "Storing the data in a database", "Using a faster CPU"],
            correctAnswer: 1,
            explanation: "In-place algorithms modify the original input, keeping the Auxiliary Space complexity at O(1)."
          },
          {
            question: "In the Two-Pointer approach to reverse a string of length 'n', at what point do the pointers meet?",
            options: ["At index n", "At index 0", "At index n/2", "They never meet"],
            correctAnswer: 2,
            explanation: "Since the pointers move from both ends toward the center, they will meet or cross halfway through the array."
          },
          {
            question: "What is the Time Complexity of reversing a string with 'n' characters?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
            correctAnswer: 2,
            explanation: "You visit roughly half the characters to perform swaps, which simplifies to O(n) linear time."
          },
          {
            question: "Which operation is used to switch the values of two variables in an array?",
            options: ["Add", "Shift", "Swap", "Rotate"],
            correctAnswer: 2,
            explanation: "A swap operation (often using a temporary variable) is Used to exchange values between two memory locations."
          },
          {
            question: "If 'left = 0' and 'right = 4', how many total swaps will occur to reverse the array?",
            options: ["5", "4", "3", "2"],
            correctAnswer: 3,
            explanation: "Index 0 swaps with 4, then 1 swaps with 3. Index 2 (the middle) doesn't need to swap with itself. Total = 2."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={13}
      />
    </div>
  );
};

export default Module1_13;