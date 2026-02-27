'use client';
import Quiz from '../../components/Quiz';

const Module2_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.9</div>
        <div className="lesson-title-main">
          <h1>Sort an Array</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">What is the problem asking?</h3>
        <p className="mb-4">
          You are given a list of numbers. Your task is to arrange them in ascending order, meaning from the smallest number to the largest number.
        </p>

        <p className="mb-6">
          You are not allowed to use any built-in sorting functions, so you must write the sorting logic yourself.
        </p>

        <h3 className="text-xl font-semibold mb-4">Why do we need sorting?</h3>
        <p className="mb-4">Sorting helps us:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Read data more easily</li>
          <li>Search faster</li>
          <li>Organize results in a meaningful way</li>
        </ul>

        <p className="mb-4">In real life, it's like arranging:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Marks from lowest to highest</li>
          <li>Prices from cheapest to most expensive</li>
          <li>Dates from oldest to newest</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Approach used in this lesson: Bubble Sort</h3>
        <p className="mb-4">We will use Bubble Sort because:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>It is easy to understand</li>
          <li>It works well for learning logic</li>
          <li>It does not use any built-in functions</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">How Bubble Sort works (simple explanation)</h3>
        <p className="mb-4">Think of numbers as bubbles in water.</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>We compare two adjacent numbers</li>
          <li>If the left number is greater, we swap them</li>
          <li>We repeat this process again and again</li>
          <li>After every round, the largest number moves to the end</li>
          <li>We stop when the array becomes fully sorted</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Step-by-step idea</h3>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li>Start from the first element</li>
          <li>Compare it with the next element</li>
          <li>Swap if they are in the wrong order</li>
          <li>Move forward and keep comparing</li>
          <li>Repeat this for multiple rounds until no swaps are needed</li>
        </ol>

        <h3 className="text-xl font-semibold mb-4">Example walkthrough</h3>
        <div className="mb-6">
          <p className="font-semibold mb-2">Input:</p>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            <code>5 2 3 1</code>
          </pre>

          <p className="font-semibold mb-2">Steps:</p>
          <ul className="list-disc ml-6 mb-4 space-y-2">
            <li>Compare 5 and 2 → swap → 2 5 3 1</li>
            <li>Compare 5 and 3 → swap → 2 3 5 1</li>
            <li>Compare 5 and 1 → swap → 2 3 1 5</li>
            <li>Next round continues until sorted</li>
          </ul>

          <p className="font-semibold mb-2">Final Output:</p>
          <pre className="bg-gray-100 p-4 rounded">
            <code>1 2 3 5</code>
          </pre>
        </div>

        <h3 className="text-xl font-semibold mb-4">Important points to remember</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Bubble Sort compares adjacent elements</li>
          <li>Multiple passes are required</li>
          <li>Duplicate values are handled correctly</li>
          <li>Negative numbers are also sorted properly</li>
          <li>Time complexity is slower, but logic is very clear</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">When should you use this approach?</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>When learning sorting logic</li>
          <li>When problem size is small</li>
          <li>When clarity matters more than performance</li>
        </ul>

        <p className="mb-6">
          Don't worry if this feels slow at first. Sorting problems help build comparison logic, which is a foundation for many advanced algorithms.
        </p>
        <section className="content-section">
          <h3>Practice Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://leetcode.com/problems/sort-an-array/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Sort an Array</h4>
              <p className="text-xs text-gray-500">LeetCode • Medium</p>
            </a>
          </div>
        </section>

        <Quiz
          title="Module 2.9 Quiz: Sorting an Array (Bubble Sort)"
          questions={[
            {
              question: "What is the key mechanism of Bubble Sort?",
              options: ["Picking the smallest element and moving it to the front", "Comparing adjacent elements and swapping them if they are in the wrong order", "Dividing the array into two halves recursively", "Building a max-heap"],
              correctAnswer: 1,
              explanation: "Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements and swapping them."
            },
            {
              question: "After one full pass of Bubble Sort on an array of size 'n', which element is guaranteed to be in its correct sorted position?",
              options: ["The smallest element", "The largest element", "The middle element", "No element is guaranteed after one pass"],
              correctAnswer: 1,
              explanation: "In each pass, the largest unsorted element 'bubbles' up to its correct final position at the end of the array."
            },
            {
              question: "What is the worst-case time complexity of Bubble Sort?",
              options: ["O(n)", "O(log n)", "O(n^2)", "O(n log n)"],
              correctAnswer: 2,
              explanation: "In the worst case (reverse sorted array), Bubble Sort needs n passes, each doing nearly n comparisons, resulting in quadratic time."
            },
            {
              question: "Why is Bubble Sort suitable for learning purposes despite its inefficiency?",
              options: ["It is the fastest algorithm", "It uses very little memory", "The logic is straightforward and helps beginners understand comparison-based sorting", "It is used in large-scale databases"],
              correctAnswer: 2,
              explanation: "Its simplicity makes it an excellent first algorithm to learn the basic concept of sorting through comparisons."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={9}
        />

        <p className="mb-6 font-semibold">
          Master this, and tougher problems will feel easier later 👍
        </p>
      </section>
    </div>
  );
};

export default Module2_9;
