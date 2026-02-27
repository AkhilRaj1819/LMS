'use client';
import Quiz from '../../components/Quiz';

const Module2_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.4</div>
        <div className="lesson-title-main">
          <h1>Fibonacci Number</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          In the previous lesson, you explored the power of recursion and saw how problems can be broken down into smaller subproblems. Now, let's apply that knowledge to a classic problem—the Fibonacci series! This assignment will challenge you to implement Fibonacci using recursion, understand its limitations, and explore more efficient solutions.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Problem Statement</h2>
        <p className="mb-6">
          Your task is to write a program that takes the number n as input and prints the Fibonacci series up to the nth term, following 0-based indexing.
        </p>

        <h3 className="text-xl font-semibold mb-4">What is a Fibonacci Sequence?</h3>
        <p className="mb-6">
          The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The 0th Fibonacci number is 0, and the 1st Fibonacci number is 1 and so on.
        </p>

        <div className="mb-6">
          <p className="font-semibold mb-2">Input Format:</p>
          <p className="mb-4">The first line contains an integer n, representing the number of Fibonacci terms to print.</p>

          <p className="font-semibold mb-2">Output Format:</p>
          <p className="mb-4">Print the Fibonacci series up to the nth term, with space-separated integers.</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">How to approach the problem</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Define a Recursive Function:</strong> Create a recursive function fib(n) that calculates the nth Fibonacci number.</li>
          <li><strong>Base Cases:</strong> Implement the base cases for n = 0 and n = 1, returning 0 and 1 respectively.</li>
          <li><strong>Recursive Step:</strong> For n ≥ 2, recursively call fib(n-1) and fib(n-2) and return their sum.</li>
          <li><strong>Iterate and Print:</strong> Iterate from 0 to n, calling fib(i) for each i and printing the result with a space.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Recursion Tree</h3>
        <p className="mb-4">
          Let's take n = 4 and visualize how the recursive calls expand:
        </p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`               F(4)
              /    \\
         F(3)      F(2)
        /    \\     /    \\
    F(2)    F(1) F(1)   F(0)
   /    \\
F(1)   F(0)`}</code>
        </pre>

        <p className="font-semibold mb-2">Breakdown of Calls:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>F(4) calls F(3) and F(2).</li>
          <li>F(3) calls F(2) and F(1).</li>
          <li>F(2) calls F(1) and F(0).</li>
          <li>Base cases (F(1) = 1 and F(0) = 0) stop recursion.</li>
          <li>The values are added as recursion unwinds.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Dry Run of Fibonacci Recursion (F(4))</h3>
        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Function Call</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Returns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">F(4) → F(3) + F(2)</td>
                <td className="border border-gray-300 px-4 py-2">2 + 1 = 3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">F(3) → F(2) + F(1)</td>
                <td className="border border-gray-300 px-4 py-2">1 + 1 = 2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">F(2) → F(1) + F(0)</td>
                <td className="border border-gray-300 px-4 py-2">1 + 0 = 1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">F(1)</td>
                <td className="border border-gray-300 px-4 py-2">1 (Base Case)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">F(0)</td>
                <td className="border border-gray-300 px-4 py-2">0 (Base Case)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Example 1:</h3>
        <div className="mb-6">
          <p className="font-semibold mb-2">Input:</p>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            <code>5</code>
          </pre>

          <p className="font-semibold mb-2">Output:</p>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            <code>0 1 1 2 3 5</code>
          </pre>

          <p className="font-semibold mb-2">Explanation:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>The 0th Fibonacci number is 0. The first Fibonacci number is 1.</li>
            <li>Starting with the 2nd Fibonacci number, the nth number will be the sum of the (n-1)th and (n-2)th numbers.</li>
            <li>So, the second Fibonacci number is 0 + 1 = 1.</li>
            <li>The third Fibonacci number is 1 + 1 = 2, and so on.</li>
          </ul>
        </div>

        <h3 className="text-xl font-semibold mb-4">Example 2:</h3>
        <div className="mb-6">
          <p className="font-semibold mb-2">Input:</p>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            <code>3</code>
          </pre>

          <p className="font-semibold mb-2">Output:</p>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            <code>0 1 1 2</code>
          </pre>

          <p className="font-semibold mb-2">Explanation:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>The 0th Fibonacci number is 0. The first Fibonacci number is 1.</li>
            <li>The second Fibonacci number is 0 + 1 = 1.</li>
            <li>The third Fibonacci number is 1 + 1 = 2.</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">Constraints:</p>
          <p>0 ≤ n ≤ 30</p>
        </div>

        <p className="mb-4">
          Alternatively, you can watch the following video to better understand this coding problem
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/dxyYP3BSdcQ?end=392" title="Fibonacci Number" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-sm text-gray-600 mt-2">Note: This Video is set to end at 6 minute and 32 seconds.</p>
        </div>

        <p className="mb-4">
          It's time for the code-along session of this assignment lesson with your mentor!
        </p>

        <div className="mb-6">
          <img src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="Coding time" />
          <p className="text-sm text-gray-600 mt-2">Image Credit: Giphy</p>
        </div>
        <section className="content-section">
          <h3>Practice Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://leetcode.com/problems/fibonacci-number/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Fibonacci Number</h4>
              <p className="text-xs text-gray-500">LeetCode • Easy</p>
            </a>
          </div>
        </section>

        <Quiz
          title="Module 2.4 Quiz: Fibonacci & Recursion"
          questions={[
            {
              question: "What is the time complexity of a naive recursive Fibonacci algorithm?",
              options: ["O(n)", "O(n^2)", "O(2^n)", "O(log n)"],
              correctAnswer: 2,
              explanation: "Each call generates two more calls until the base case is reached, resulting in exponential growth O(2^n)."
            },
            {
              question: "Why is naive recursion considered inefficient for calculating Fibonacci numbers?",
              options: ["It uses too many loops", "It basicly performs 'overlapping subproblems' multiple times (re-calculating the same values)", "It doesn't support decimal numbers", "It is only for even numbers"],
              correctAnswer: 1,
              explanation: "For example, F(4) calls F(3) and F(2), and F(3) also calls F(2). F(2) is calculated multiple times unnecessarily."
            },
            {
              question: "What are the base cases for the Fibonacci sequence?",
              options: ["F(0)=0 and F(1)=1", "F(1)=1 and F(2)=1", "F(n) = F(n-1) + F(n-2)", "F(0)=1 and F(1)=1"],
              correctAnswer: 0,
              explanation: "The standard sequence starts with 0 and 1 as the 0th and 1st terms respectively."
            },
            {
              question: "What is the maximum depth of the recursion tree (Space Complexity) for F(n)?",
              options: ["O(1)", "O(log n)", "O(n)", "O(2^n)"],
              correctAnswer: 2,
              explanation: "The recursion stack grows linearly with 'n' as we dive down to the base cases."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={4}
        />
      </section>
    </div>
  );
};

export default Module2_4;
