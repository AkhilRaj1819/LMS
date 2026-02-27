'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_11: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.11</div>
        <div className="lesson-title-main">
          <h1>Contains Duplicate</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Identifying Patterns</h3>
        <p>In this milestone, you'll tackle "Contains Duplicate". It's a fundamental problem that introduces you to the trade-offs between Time and Space complexity.</p>
        <div className="bg-rose-50 p-6 rounded-2xl border-l-4 border-rose-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">
            "Should you sort the data first, or use extra memory to keep track of what you've seen? Choosing the right strategy is what makes a great engineer."
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Possible Approaches</h3>
        <div className="space-y-4 my-6">
          <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-gray-800">1. Brute Force</h4>
            <p className="text-sm text-gray-600">Compare every pair of elements. Simple, but slow (O(n²)).</p>
          </div>
          <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-blue-600">2. Sorting First</h4>
            <p className="text-sm text-gray-600">Duplicates will be next to each other after sorting (O(n log n)).</p>
          </div>
          <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-emerald-600">3. Using a HashSet</h4>
            <p className="text-sm text-gray-600">Check if an element exists in a set while traversing. Fast (O(n)) but uses extra space.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Milestone Checklist</h3>
        <div className="flex flex-col gap-3 my-6">
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-all">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600" />
            <span className="text-sm font-semibold">Solve "Contains Duplicate" on LeetCode</span>
          </label>
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-all">
            <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600" />
            <span className="text-sm font-semibold">Verify GitHub auto-push via LeetHub</span>
          </label>
        </div>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/contains-duplicate/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Contains Duplicate</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <Quiz
        title="Module 1.11 Quiz: Duplicate Detection"
        questions={[
          {
            question: "What is the primary goal of the 'Contains Duplicate' problem?",
            options: ["Count how many duplicates exist", "Return true if any value appears at least twice", "Remove all duplicates from the array", "Sort the array in descending order"],
            correctAnswer: 1,
            explanation: "The problem only asks if *any* value is repeated. If at least one element exists more than once, return true."
          },
          {
            question: "In the Brute Force approach (using nested loops), what is the Time Complexity?",
            options: ["O(1)", "O(n)", "O(n log n)", "O(n^2)"],
            correctAnswer: 3,
            explanation: "Brute force compares every element 'i' with every other element 'j', leading to approximately n*n comparisons."
          },
          {
            question: "If you sort the array first, why is it easier to find duplicates?",
            options: ["Sorting removes the duplicates", "Duplicate elements will become adjacent (neighbors)", "Sorting makes the array smaller", "It's not actually easier"],
            correctAnswer: 1,
            explanation: "In a sorted array, all identical values are grouped together, so you only need to check if nums[i] == nums[i-1]."
          },
          {
            question: "Why is the HashSet approach often considered better than Sorting?",
            options: ["It uses less memory", "It has a faster Time Complexity (O(n) vs O(n log n))", "It's easier to type", "It works only for integers"],
            correctAnswer: 1,
            explanation: "HashSet operations (add/check) take O(1) on average, resulting in O(n) total time, which is theoretically faster than sorting."
          },
          {
            question: "What is the Space Complexity of the HashSet approach?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
            correctAnswer: 1,
            explanation: "In the worst case (no duplicates), you will store all 'n' elements in the HashSet, requiring linear space."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={11}
      />
    </div>
  );
};

export default Module1_11;