'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.10</div>
        <div className="lesson-title-main">
          <h1>Richest Customer Wealth</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Scaling Up to 2D Arrays</h3>
        <p>In this milestone, you'll tackle a classic 2D array problem. It's about finding the maximum value by summing up elements in a grid.</p>
        <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">
            "Problems like Richest Customer Wealth teach you how to think in multiple dimensions. Mastering nested loops is the key to complex data manipulation."
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Understanding the Grid</h3>
        <p>You are given an <code className="bg-gray-100 px-1 rounded">m x n</code> integer grid where <code className="bg-gray-100 px-1 rounded">accounts[i][j]</code> is the amount of money the <code className="bg-gray-100 px-1 rounded">i-th</code> customer has in the <code className="bg-gray-100 px-1 rounded">j-th</code> bank.</p>
        <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm shadow-xl my-6">
          <p className="text-emerald-400">// Example:</p>
          <p className="text-white">Input: accounts = [[1, 2, 3], [3, 2, 1]]</p>
          <p className="text-blue-300">Output: 6</p>
          <p className="text-gray-500 mt-2">// Explanation:</p>
          <p className="text-gray-400">Customer 1: 1 + 2 + 3 = 6</p>
          <p className="text-gray-400">Customer 2: 3 + 2 + 1 = 6</p>
          <p className="text-gray-400 font-bold">Max Wealth: 6</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Milestone Checklist</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
            <div className="text-2xl mb-2">💻</div>
            <p className="text-xs font-bold font-mono">Solve Problem</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
            <div className="text-2xl mb-2">📸</div>
            <p className="text-xs font-bold font-mono">Screenshot Result</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
            <div className="text-2xl mb-2">📁</div>
            <p className="text-xs font-bold font-mono">Auto-push to GitHub</p>
          </div>
        </div>
      </section>
      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/richest-customer-wealth/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Richest Customer Wealth</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <Quiz
        title="Module 1.10 Quiz: Matrix Wealth"
        questions={[
          {
            question: "In the Richest Customer Wealth problem, what does each row of the 2D array represent?",
            options: ["A single bank account", "A single customer", "A specific currency", "A day of the week"],
            correctAnswer: 1,
            explanation: "Each row (i) contains all the bank accounts owned by the i-th customer."
          },
          {
            question: "How do you calculate a customer's total wealth?",
            options: ["Multiply all numbers in the row", "Find the largest number in the row", "Sum all numbers in the row", "Subtract the first number from the last"],
            correctAnswer: 2,
            explanation: "The problem defines wealth as the total sum of money across all bank accounts a customer owns."
          },
          {
            question: "What is the Time Complexity of this solution given an 'm x n' matrix?",
            options: ["O(m)", "O(n)", "O(m + n)", "O(m * n)"],
            correctAnswer: 3,
            explanation: "Since you must visit every single cell (j) for every customer (i) to find the sum, you iterate through m*n elements."
          },
          {
            question: "Which type of loop structure is typically used to solve this problem?",
            options: ["A single while loop", "Nested for loops", "A recursive function", "A switch statement"],
            correctAnswer: 1,
            explanation: "You use one loop to iterate through the customers (rows) and a nested loop to iterate through their accounts (columns)."
          },
          {
            question: "What is the Space Complexity if you only store the 'max wealth' encountered so far?",
            options: ["O(1)", "O(m)", "O(n)", "O(m * n)"],
            correctAnswer: 0,
            explanation: "You only need a single variable to keep track of the maximum sum found, which is independent of the input size (constant space)."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={10}
      />
    </div>
  );
};

export default Module1_10;