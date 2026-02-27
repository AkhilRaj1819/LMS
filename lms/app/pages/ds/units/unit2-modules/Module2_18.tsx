'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_18: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.18</div>
        <div className="lesson-title-main">
          <h1>Container With Most Water</h1>
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
          <a href="https://leetcode.com/problems/container-with-most-water/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">container with most water</h4>
            <p className="text-xs text-gray-500">LeetCode • Medium</p>
          </a>
        </div>
      </section>

        <Quiz
          title="Module 2.18 Quiz: Container With Most Water"
          questions={[
            {
              question: "In the 'Container With Most Water' problem, how is the area of water between two bars calculated?",
              options: ["length * height", "distance between bars * height of the taller bar", "distance between bars * height of the shorter bar", "average height * distance between bars"],
              correctAnswer: 2,
              explanation: "The volume of water is limited by the shorter bar (height) and the distance between the two bars (width)."
            },
            {
              question: "When using Two-Pointers for this problem, why do we move the pointer pointing to the SHORTER bar?",
              options: ["To decrease the width faster", "Because moving the taller bar's pointer can never result in a larger area (height is still limited by the same or even shorter bar)", "To find the middle bar", "It doesn't matter which one we move"],
              correctAnswer: 1,
              explanation: "Moving the taller bar's pointer reduces the width while the height remains capped by the shorter bar, so the area can only decrease or stay the same."
            },
            {
              question: "What is the time complexity of the Two-Pointer approach for this problem?",
              options: ["O(n log n)", "O(n^2)", "O(n)", "O(1)"],
              correctAnswer: 2,
              explanation: "We traverse the array once from both ends until the pointers meet, resulting in linear time complexity."
            },
            {
              question: "What is the brute force approach for this problem, and what is its complexity?",
              options: ["Sorting the bars, O(n log n)", "Checking every possible pair of bars, O(n^2)", "Using a stack, O(n)", "Binary search, O(log n)"],
              correctAnswer: 1,
              explanation: "The brute force approach uses two nested loops to calculate the area for every possible pair of lines."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={18}
        />

        <p className="mb-6 font-semibold">
          You've got this. 🚀
        </p>
      </section>
    </div>
  );
};

export default Module2_18;
