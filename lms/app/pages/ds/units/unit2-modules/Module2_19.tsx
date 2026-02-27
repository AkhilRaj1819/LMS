'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_19: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.19</div>
        <div className="lesson-title-main">
          <h1>3 sum</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this assignment, we will solve the 3 sum problem using the two pointer technique we learnt in the previous learning unit.
        </p>

        <h3 className="text-xl font-semibold mb-4">Problem statement</h3>
        <p className="mb-6">
          Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. So, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.
        </p>

        <h3 className="text-xl font-semibold mb-4">Input:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{`6
-1 0 1 2 -1-4`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Output:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>[[-1,-1,2],[-1,0,1]]</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Explanation:</h3>
        <p className="mb-6">
          Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition of summing up to zero with i!=j!=k
        </p>

        <h3 className="text-xl font-semibold mb-4">Approach</h3>
        <p className="mb-4 font-semibold">
          Check this out
        </p>

        <p className="mb-4">
          Check out the video if you are not very clear with the logic.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jzZsG8n2R9A" title="3 Sum Problem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/3sum/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">3 sum</h4>
            <p className="text-xs text-gray-500">LeetCode • Medium</p>
          </a>
        </div>
      </section>

        <Quiz
          title="Module 2.19 Quiz: 3Sum Problem"
          questions={[
            {
              question: "What is the common first step for the optimized 3Sum solution using Two-Pointers?",
              options: ["Reverse the array", "Sort the array", "Search for zeros", "Copy to a new array"],
              correctAnswer: 1,
              explanation: "Sorting the array allows us to use the Two-Pointer technique and efficiently avoid duplicate triplets by skipping identical values."
            },
            {
              question: "What is the time complexity of the optimized 3Sum algorithm (sorting + two pointers loop)?",
              options: ["O(n)", "O(n log n)", "O(n^2)", "O(n^3)"],
              correctAnswer: 2,
              explanation: "Sorting takes O(n log n) and the nested loop (one for each element + a two-pointer pass) takes O(n^2), making the overall complexity O(n^2)."
            },
            {
              question: "How do you ensure triplets are 'unique' in the 3Sum output?",
              options: ["Use a Set for all results", "Skip the current element if it's the same as the previous one", "Filter the list at the end", "Both A and B are valid, but skipping duplicates during the loop is more efficient"],
              correctAnswer: 3,
              explanation: "While a Set works, skipping duplicates during the iteration (by checking `arr[i] == arr[i-1]`) avoids unnecessary calculations."
            },
            {
              question: "If we find a triplet that sums to zero, what do we do next with the two pointers (left and right)?",
              options: ["Stop the search", "Increment left and decrement right while skipping duplicates", "Reset both to middle", "Only increment left"],
              correctAnswer: 1,
              explanation: "To find more potential triplets for the same fixed element, we move both pointers towards the center, ensuring we skip any identical values to keep the results unique."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={19}
        />
      </section>
    </div>
  );
};

export default Module2_19;
