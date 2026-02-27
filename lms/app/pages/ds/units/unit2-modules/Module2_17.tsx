'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_17: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.17</div>
        <div className="lesson-title-main">
          <h1>Two Sum II - Input Array Is Sorted</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          Hey! 👋 Here's your quick, simple guide for this milestone.
        </p>

        <p className="mb-6">
          The goal is to help you grow your coding skills and your online tech presence, all through one small activity.
        </p>

        <h3 className="text-xl font-semibold mb-4">What You'll Do (and Why It Helps You)</h3>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Solve one LeetCode problem</p>
            <p>Because real problem-solving builds confidence and strengthens your logic over time — even one problem makes a difference.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">2. Take a screenshot of your Accepted solution</p>
            <p>Just a quick way for us to confirm you've completed the milestone.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">3. Use the LeetHub extension to auto-push your solution to GitHub</p>
            <p>This keeps your GitHub active without any extra effort. A greener GitHub = stronger portfolio = better impression during internships and placements.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">4. (Optional) Share your progress on LinkedIn</p>
            <p>A small post shows consistency and helps you build visibility. Recruiters love seeing growth.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">How to Complete It (Simple Steps)</h3>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Step 1: Open the LeetCode problem</p>
            <p>Read it slowly, check the examples, and try a simple approach first. You don't need the smartest solution — just the correct one.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 2: Get the green "Accepted"</p>
            <p>Once you do, take a quick screenshot.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 3: Install the LeetHub Chrome extension</p>
            <p>Sign in with GitHub → Let it create a repo → Now every time you solve a problem, your code appears on GitHub automatically. Zero manual work.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 4: Check your GitHub repository</p>
            <p>Make sure your latest solution is there. If yes — great! You've now added to your portfolio.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 5 (Optional): Share on LinkedIn</p>
            <p className="mb-2">A simple post like:</p>
            <p className="italic text-gray-700">"Solved today's LeetCode milestone and learned &lt;concept&gt;. Loving the auto-push to GitHub via LeetHub!"</p>
            <p className="mt-2">This builds your visibility over time.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Your Submission</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Screenshot of your Accepted LeetCode submission</li>
          <li>GitHub repo link (auto-updated by LeetHub)</li>
          <li>(Optional) LinkedIn post link/screenshot</li>
        </ul>
        <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">two sum ii - input array is sorted</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

        <Quiz
          title="Module 2.17 Quiz: Two Sum II Challenge"
          questions={[
            {
              question: "In the 'Two Sum II' problem, why can we use Two-Pointers instead of a Hash Map?",
              options: ["Because the array is small", "Because the array is sorted", "Because there are no duplicates", "Because the target is positive"],
              correctAnswer: 1,
              explanation: "The sorted property allows us to increment/decrement pointers based on the sum, making it more space-efficient (O(1)) than a Hash Map (O(n))."
            },
            {
              question: "If the current sum `arr[i] + arr[j]` is GREATER than the target, which modification is correct?",
              options: ["i++", "j--", "Both i++ and j--", "Reset i to 0"],
              correctAnswer: 1,
              explanation: "To decrease the sum in a sorted array, we must move the right pointer (j) to the left (smaller values)."
            },
            {
              question: "What is a common pitfall regarding the 'index' requirements in LeetCode's 'Two Sum II'?",
              options: ["It requires O(n^2)", "It requires 1-based indexing for the result", "It requires 0-based indexing", "It only allows positive sums"],
              correctAnswer: 1,
              explanation: "The problem specifically asks for the indices to be 1-based, meaning you add 1 to your 0-based array indices before returning."
            },
            {
              question: "What is the space complexity of the optimal Two-Pointer solution for 'Two Sum II'?",
              options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
              correctAnswer: 0,
              explanation: "Since we only store two pointers and a few variables, the extra space used remains constant regardless of array size."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={17}
        />

        <p className="mb-6">
          This milestone isn't about perfection. It's about showing up, practicing, and building small habits that compound into something big — stronger skills, a better GitHub, and a more confident you.
        </p>
      </section>
    </div>
  );
};

export default Module2_17;
