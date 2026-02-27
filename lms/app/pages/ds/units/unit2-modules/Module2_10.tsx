'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_10: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.10</div>
        <div className="lesson-title-main">
          <h1>Merge Sorted Array</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          Hey there! 👋 Welcome to the LeetCode milestone.
        </p>

        <p className="mb-6">
          Here's your quick, simple guide for this milestone.
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
            <p className="font-semibold mb-2">3. Use the LeetHub extension to auto-push your solution to GitHub [Optional]</p>
            <p>This keeps your GitHub active without any extra effort. A greener GitHub = stronger portfolio = better impression during internships and placements.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">4. (Optional) Share your progress on LinkedIn[Optional]</p>
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
            <p className="font-semibold mb-2">Step 3: Install the LeetHub Chrome extension[Optional]</p>
            <p>Sign in with GitHub → Let it create a repo → Now every time you solve a problem, your code appears on GitHub automatically. Zero manual work.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 4: Check your GitHub repository [Optional]</p>
            <p>Make sure your latest solution is there. If yes — great! You've now added to your portfolio.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 5: Share on LinkedIn [Optional]</p>
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

        <p className="mb-6">
          This milestone isn't about perfection. It's about showing up, practicing, and building small habits that compound into something big — stronger skills, a better GitHub, and a more confident you.
        </p>
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
          title="Module 2.10 Quiz: Merge Sorted Array Challenge"
          questions={[
            {
              question: "What is the optimal time complexity to merge two sorted arrays of size 'm' and 'n'?",
              options: ["O(m * n)", "O(m + n)", "O(log(m + n))", "O( (m+n) log (m+n) )"],
              correctAnswer: 1,
              explanation: "By using two pointers (one for each array), we can merge them by traversing each element exactly once."
            },
            {
              question: "If you are merging in-place into the first array (which has extra space at the end), which pointers strategy is safest to avoid overwriting?",
              options: ["Start from the beginning (index 0) of both arrays", "Start from the end of both arrays and fill from the back", "Sort the first array after appending the second", "Use a temporary third array only"],
              correctAnswer: 1,
              explanation: "Filling from the back ensures that we don't overwrite the elements in the first array that haven't been compared yet."
            },
            {
              question: "What is the benefit of using the LeetHub extension as mentioned in the lesson?",
              options: ["It solves the problem for you", "It automatically synchronizes your LeetCode solutions to a GitHub repository", "It increases your LeetCode rank", "It provides hints for difficult problems"],
              correctAnswer: 1,
              explanation: "LeetHub is a tool specifically designed to help developers build a portfolio by auto-pushing their successful LeetCode submissions to GitHub."
            },
            {
              question: "In the 'Merge Sorted Array' problem, if one array becomes empty, what should happen to the remaining elements of the other array?",
              options: ["They should be discarded", "They should be sorted again", "They should be copied directly into the result", "Return an error"],
              correctAnswer: 2,
              explanation: "Since the input arrays are already sorted, any remaining elements are also sorted and can be moved directly into the merged result."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={10}
        />

        <p className="mb-6 font-semibold">
          You've got this. 🚀
        </p>
      </section>
    </div>
  );
};

export default Module2_10;
