'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_23: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.23</div>
        <div className="lesson-title-main">
          <h1>Clash of Codes #1 | Algorithm Essentials</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="mb-6">
          <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Clash of Codes" />
        </div>

        <h3 className="text-xl font-semibold mb-4">What Is This?</h3>
        <p className="mb-6">
          This session is a fun, interactive competition designed to put your problem-solving skills to the test. Instead of a traditional lecture, you will work in teams to solve a challenge using a specific algorithmic strategy. The main event will be a friendly debate where you defend your team's approach and analyze the trade-offs of others.
        </p>

        <h3 className="text-xl font-semibold mb-4">Learning Objective</h3>
        <p className="mb-6">
          The goal of this session is for you to be able to defend different approaches to a problem involving core algorithm concepts. You will practice analyzing a problem, formulating a solution using a specific technique, and articulating its strengths and weaknesses.
        </p>

        <h3 className="text-xl font-semibold mb-4">Session Outcome</h3>
        <p className="mb-6">
          By the end of this session, you will have applied your knowledge of complexity, sorting, and recursion to a practical problem. You will be better able to compare different algorithmic solutions and justify why one might be chosen over another based on factors like efficiency and simplicity.
        </p>

        <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
        <p className="mb-4">
          Your core challenge today is a classic coding problem. It's simple to understand but has several interesting solutions.
        </p>

        <p className="mb-6">
          Given a list of unique numbers and a target number T, your task is to determine if there is a pair of two numbers in the list that adds up exactly to T. You only need to return true or false.
        </p>

        <div className="mb-6">
          <p className="font-semibold mb-2">Example:</p>
          <pre className="bg-gray-100 p-4 rounded">
            <code>{`List: [3, 5, 2, 8, 11]
Target T: 10
Result: true (because 2 + 8 = 10)`}</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Your Mission</h3>
        <p className="mb-6">
          You will be divided into three teams. Each team will be assigned a specific approach to solve the "Two Sum" problem. Your goal is to develop a solution based on your assigned method and prepare to defend it in a debate.
        </p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Team 1: The Brute Force Approach</p>
            <p className="mb-2">Your mission is to use the most direct and straightforward method. Check every possible pair of numbers to see if they sum to the target.</p>
            <p className="italic text-gray-700">Hint: Think about the simplest way you would solve this with a pen and paper. How can you make sure you've checked every single combination?</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Team 2: The Sort &amp; Scan Approach</p>
            <p className="mb-2">Your mission is to find a more efficient way. This involves pre-processing the data. First, sort the list, then use a clever technique to find the pair.</p>
            <p className="italic text-gray-700">Hint: Once the list is sorted, if you pick a number from the beginning and one from the end, can their sum tell you which way to move your pointers?</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Team 3: The Recursive Search Approach</p>
            <p className="mb-2">Your mission is to solve the problem by breaking it down into smaller, identical sub-problems using recursion. For each number, can you find its "complement" in the rest of the list?</p>
            <p className="italic text-gray-700">Hint: Your recursive function could ask a simple question: "Does the number I need exist in the smaller list that's left over?"</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">The Game Plan</h3>
        <p className="mb-4">
          The entire session will be timed. Stay focused and manage your time well!
        </p>

        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Activity</th>
                <th className="border border-gray-300 px-4 py-2 text-left">What You'll Be Doing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">0 - 10 mins</td>
                <td className="border border-gray-300 px-4 py-2">Briefing &amp; Team Setup</td>
                <td className="border border-gray-300 px-4 py-2">The mentor will explain the rules and assign you to one of the three teams.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">10 - 25 mins</td>
                <td className="border border-gray-300 px-4 py-2">Solution Prep Time</td>
                <td className="border border-gray-300 px-4 py-2">In your teams, discuss your assigned approach. Finalize your pseudocode, analyze its complexity, and prepare your debate points.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">25 - 35 mins</td>
                <td className="border border-gray-300 px-4 py-2">Opening Statements</td>
                <td className="border border-gray-300 px-4 py-2">One person from each team will present your solution in a short, 2-3 minute pitch.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">35 - 45 mins</td>
                <td className="border border-gray-300 px-4 py-2">The Debate!</td>
                <td className="border border-gray-300 px-4 py-2">Your team will ask one prepared question to each of the other two teams to challenge their approach. Be ready to answer questions too!</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">45 - 50 mins</td>
                <td className="border border-gray-300 px-4 py-2">Verdict &amp; Wrap-Up</td>
                <td className="border border-gray-300 px-4 py-2">We'll vote on the most convincing argument, and the mentor will share the final takeaways.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Presentation &amp; Debate Rules</h3>

        <div className="mb-6">
          <p className="font-semibold mb-2">What to Prepare (in the 15-minute Prep Time):</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>A small Pseudocode:</strong> A clear, step-by-step description of your algorithm.</li>
            <li><strong>Time &amp; Space Complexity:</strong> The Big O notation for your solution (e.g., O(n²), O(n log n)).</li>
            <li><strong>Your "Pitch" (Defense):</strong> A short explanation of why your approach is a good choice. What are its strengths? (e.g., "It's the simplest to code," or "It's the most efficient for large datasets.")</li>
            <li><strong>Two Questions:</strong> One sharp, insightful question for each of the other two teams.</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">How to Present (during your 2-3 minute slot):</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>One person from your team will be the spokesperson.</li>
            <li>Briefly walk through your pseudocode (don't spend too much time here).</li>
            <li>Clearly state your Time and Space Complexity.</li>
            <li>Deliver your defense: Argue why your solution has merit.</li>
          </ul>
        </div>

        <p className="mb-6">
          Remember, the goal isn't about finding the single "correct" answer. It's about understanding the trade-offs between different solutions.
        </p>
        <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/two-sum/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">two sum</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
          <a href="https://www.geeksforgeeks.org/problems/sort-a-stack-using-recursion/1" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">sort a stack using recursion</h4>
            <p className="text-xs text-gray-500">GeeksforGeeks • Medium</p>
          </a>
        </div>
      </section>

        <Quiz
          title="Module 2.23 Quiz: Clash of Codes Prep"
          questions={[
            {
              question: "What is the time complexity of the 'Brute Force' Two Sum approach where you check every pair?",
              options: ["O(n)", "O(n log n)", "O(n^2)", "O(1)"],
              correctAnswer: 2,
              explanation: "Checking every pair requires two nested loops, each running 'n' times, leading to O(n^2)."
            },
            {
              question: "If Team 2 uses 'Sort & Scan', what is their overall time complexity?",
              options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
              correctAnswer: 1,
              explanation: "Sorting the array takes O(n log n), and a single two-pointer pass take O(n). The bottleneck is the sorting step, so it is O(n log n)."
            },
            {
              question: "In algorithm design, what does a 'trade-off' typically refer to?",
              options: ["Changing the data type", "Trading speed for memory or simplicity (and vice versa)", "Deleting code to make it run faster", "Updating the compiler"],
              correctAnswer: 1,
              explanation: "Trade-offs are the choices made between competing priorities like execution time, memory usage, and development ease."
            },
            {
              question: "Which of these is a valid point for defending Brute Force in a debate?",
              options: ["It is the most complex", "It uses the most memory", "It is the simplest to implement and understand for small datasets", "It is usually the fastest for millions of records"],
              correctAnswer: 2,
              explanation: "For very small datasets, Brute Force is extremely easy to write, test, and maintain, even if it's theoretically slower."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={23}
        />

        <p className="mb-6 font-semibold">
          Good luck, and may the best argument win!
        </p>
      </section>
    </div>
  );
};

export default Module2_23;
