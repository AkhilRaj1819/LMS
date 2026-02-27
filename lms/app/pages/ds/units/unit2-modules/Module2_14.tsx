'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.14</div>
        <div className="lesson-title-main">
          <h1>Assignment | Quick Sort</h1>
        </div>
      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">Divide &amp; Conquer in Action: Sorting with Quick Sort</h3>

        <p className="mb-6">
          Sorting isn't just an algorithm — it's a rite of passage for every coder. And Quick Sort? It's like the fast-talking genius of the sorting world — unpredictable in worst cases, but blazing fast on average. In this assignment, you'll dive deep into how Quick Sort uses the divide and conquer strategy to bring order to chaos.
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.kalvium.community/quicksort.png" alt="Quick Sort" />
        </div>

        <p className="mb-6">
          Whether you're sorting search results, leaderboard scores, or massive log files, Quick Sort's slick pivot-based strategy makes it a popular pick for developers and interviewers alike.
        </p>

        <p className="mb-6 font-semibold">
          It's not just sorting. It's divide and conquer with attitude.
        </p>

        <h3 className="text-xl font-semibold mb-4">What You'll Learn by the End of This</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>How to select a pivot and partition arrays around it</li>
          <li>The clever art of recursive subdivision using a base condition</li>
          <li>Why this algorithm performs in O(n log n) time on average</li>
          <li>When Quick Sort shines — and when it stumbles (hello, worst-case O(n²))</li>
        </ul>

        <p className="mb-6">
          This session includes a live code-along with your mentor. Bring your keyboard and your curiosity. Quick Sort's quirks are worth exploring!
        </p>

        <h3 className="text-xl font-semibold mb-4">Your Task</h3>
        <p className="mb-6">
          Write a program that sorts an array of integers in ascending order using the Quick Sort algorithm.
        </p>

        <h3 className="text-xl font-semibold mb-4">Input Format</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>First line: A single integer n (number of elements in the array)</li>
          <li>Second line: n space-separated integers</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Output Format</h3>
        <p className="mb-6">
          A single line: the sorted array, printed in ascending order (space-separated)
        </p>

        <h3 className="text-xl font-semibold mb-4">Sample Input 1</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{`7  
4 7 2 1 5 9 3`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Sample Output 1</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>1 2 3 4 5 7 9</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Sample Input 2</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>{`5  
5 1 4 2 8`}</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Sample Output 2</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>1 2 4 5 8</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">How Quick Sort Works</h3>
        <p className="mb-4">
          Quick Sort works in two high-energy phases:
        </p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Step 1: Partition the Array</p>
            <p>Pick a pivot element. Reorder the array so that everything smaller than the pivot goes to the left, and everything bigger goes to the right.</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Step 2: Recur on the Sub-arrays</p>
            <p>Recursively apply Quick Sort to the left and right sub-arrays — just like you would handle two rival teams: sort them out independently.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Key Ideas Behind the Algorithm</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Pivot Selection:</strong> The magic element that splits the array — you can choose it randomly or use a consistent strategy (like picking the last element).</li>
          <li><strong>Partitioning Logic:</strong> Rearrange elements so the pivot ends up in its correct position.</li>
          <li><strong>Recursive Case:</strong> Sort everything left and right of the pivot.</li>
          <li><strong>Base Case:</strong> If the sub-array has 0 or 1 elements, it's already sorted.</li>
          <li><strong>Average Time Complexity:</strong> O(n log n)</li>
          <li><strong>Worst-case Time Complexity:</strong> O(n²) — but rare with good pivot choices</li>
          <li><strong>Space Complexity:</strong> O(log n) on average for recursion stack</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Problem-Solving Guide</h3>
        <p className="mb-4 font-semibold">Step-by-step breakdown of the logic</p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Recursive Quick Sort Function</p>
            <p className="mb-2">Write quickSort(arr, low, high) that:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>If low &gt;= high, return</li>
              <li>Calls partition() to place pivot at correct position</li>
              <li>Recursively quickSorts left and right halves</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Partition Function</p>
            <p className="mb-2">Write partition(arr, low, high):</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Picks pivot (e.g., arr[high])</li>
              <li>Moves elements smaller than pivot to left</li>
              <li>Places pivot in correct sorted position</li>
              <li>Returns pivot's index</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Driver Code</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Read the input</li>
              <li>Call quickSort() on the entire array</li>
              <li>Print the sorted array</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Constraints</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>1 ≤ n ≤ 10⁵</li>
          <li>-10⁹ ≤ arr[i] ≤ 10⁹</li>
        </ul>
        
        <Quiz
          title="Module 2.14 Quiz: Quick Sort Assignment Prep"
          questions={[
            {
              question: "What is the primary function of the 'partition' step in Quick Sort?",
              options: ["To divide the array exactly in half", "To find the median element", "To place the chosen pivot in its final sorted position and separate elements less than and greater than it", "To merge two sorted arrays"],
              correctAnswer: 2,
              explanation: "Partitioning is the 'conquer' part of the logic where we rearrange elements relative to the pivot."
            },
            {
              question: "What is the standard base case for a recursive `quickSort(arr, low, high)` implementation?",
              options: ["low == high", "low >= high", "arr.length == 0", "pivot == 0"],
              correctAnswer: 1,
              explanation: "If low is equal to or greater than high, the subarray has zero or one element, and it is already sorted."
            },
            {
              question: "If we always choose the last element as the pivot in a reverse-sorted array, what happens to the performance?",
              options: ["It remains O(n log n)", "It improves to O(n)", "It degrades to the worst case O(n^2)", "It remains O(log n)"],
              correctAnswer: 2,
              explanation: "Consistent choosing of an extreme (smallest or largest) in sorted or reverse-sorted data leads to highly unbalanced partitions and O(n^2) behavior."
            },
            {
              question: "In the partition logic, once an element 'j' is found to be smaller than the pivot, what is the usual next step?",
              options: ["Remove the element", "Swap it with the element at the 'smaller elements boundary' index and increment that index", "Place it at the end of the array", "Recursive call"],
              correctAnswer: 1,
              explanation: "The standard Lomuto partition scheme uses a pointer 'i' to track the boundary of elements smaller than the pivot and swaps found elements into that region."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={14}
        />

        <h3 className="text-xl font-semibold mb-4">Resources to Learn the Concept</h3>
        <p className="mb-4">
          Before the session, take a look at these curated materials:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Hackerearth Quick Sort Tutorial
            </a> Beginner-friendly with visuals and dry runs.
          </li>
          <li>
            <a href="https://medium.com/@george.seif94/a-tour-of-the-top-5-sorting-algorithms-with-python-code-43ea9aa02889" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Quick Sort Medium Article (Complete Guide)
            </a> Everything you wanted to know about Quick Sort but were afraid to ask.
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=Hoixgm4-P4M" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Quick Sort YouTube Video (Simplified Explanation)
            </a> See how partitioning works, step-by-step.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Let's Get Coding!</h3>
        <p className="mb-6">
          This session is interactive. You'll write the Quick Sort function line-by-line with your mentor.
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/avengers-captain-america.gif" alt="Coding time" />
        </div>

        <p className="mb-4">
          Once you've completed this, you'll feel like:
        </p>

        <div className="mb-6">
          <img src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif" alt="Success" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Bonus Practice Problems</h3>
        <p className="mb-4">
          Think you've got the hang of Quick Sort? Put your skills to the test:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://www.geeksforgeeks.org/problems/quick-sort/1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GFG: Quick Sort Practice
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/problems/sort-an-array/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LeetCode: Sort an Array
            </a> Try Quick Sort first, then compare with Merge or Heap sort.
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GFG: Kth Smallest Element
            </a> An awesome use-case of Quick Sort's partitioning logic.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Instructions</h3>
        <p className="mb-4">
          In this session, students will participate in a pair programming exercise. Each pair is required to collaboratively solve the given problem using a single system. Once the solution is successfully implemented and verified, the second member may use that solution for their individual assignment submission.
        </p>

        <p className="mb-4 font-semibold">Guidelines:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Form pairs before the session begins.</li>
          <li>Work together on one system per pair to develop and test the solution.</li>
          <li>In case a student is unable to find a partner, they should pair up with the mentor for this activity.</li>
          <li>Use of Large Language Models (LLMs) such as ChatGPT, Gemini, or similar tools is strictly prohibited.</li>
          <li>You may refer to Google or official documentation only for understanding syntax or language-specific concepts.</li>
        </ul>

        <p className="mb-4">
          The objective of this activity is to encourage collaboration, logical thinking, and peer learning while maintaining academic integrity.
        </p>
      </section>
    </div>
  );
};

export default Module2_14;
