'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_20: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.20</div>
        <div className="lesson-title-main">
          <h1>The Sliding Window Pattern</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this lesson, you will learn about the Sliding Window technique.
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/what-tenor.gif" alt="Sliding Window" />
          <p className="text-sm text-gray-600 mt-2">Image Credit: tenor</p>
        </div>

        <p className="mb-6">
          Imagine your eyesight focusing on only a few words at a time while reading—that's your window.
        </p>

        <p className="mb-6">
          As your eyes move forward, new words come into focus while previous ones fade. When you're tired, your vision narrows; when alert, it expands. For difficult sentences, you refocus on smaller sections before broadening your view again. This natural adjustment mirrors the sliding window technique, ensuring smooth and efficient processing!
        </p>

        <h3 className="text-xl font-semibold mb-4">What is the Sliding Window Technique?</h3>
        <p className="mb-6">
          The sliding window technique is an efficient method in computer science for optimizing problems involving arrays, strings, and other linear data structures. It transforms certain algorithms with O(n²) time complexity into O(n) solutions by reducing redundant computations. Conceptually, it functions like a window moving over a sequence of data, dynamically expanding or contracting based on specific conditions. This approach enables processing data in segments rather than recalculating values for each individual element, significantly improving efficiency.
        </p>

        <p className="mb-4">
          Now, let's watch a short video demonstrating the sliding window technique with a simple example.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jM2dhDPYMQM" title="Sliding Window Technique" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Types of Sliding Window Techniques</h3>
        <p className="mb-6">
          There are two primary types of sliding window techniques. Let's explore each one, compare their differences in the table below, and then go through the pseudocodes for both.
        </p>

        <h3 className="text-xl font-semibold mb-4">Fixed-Size Sliding Window</h3>
        <p className="mb-4">
          A fixed-size sliding window maintains a window of constant size (like 3 elements) that moves through an array one element at a time. It's perfect for problems where you need to find optimal subarrays of a specific size.
        </p>

        <p className="mb-4 font-semibold">
          Example Problem: Find max sum of exactly 3 consecutive elements in an array
        </p>

        <p className="mb-4">
          Let's use this array: [2, 1, 5, 1, 3, 2]
        </p>

        <p className="mb-4 font-semibold">Approach and Dry Run:</p>
        <p className="mb-4">
          We start by calculating the sum of our first window of size 3, then slide through the array, updating our sum and tracking the maximum value.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Initial window: [2, 1, 5] = 8 (This is our current maxSum)</li>
          <li>Slide window: Remove 2, add 1 → [1, 5, 1] = 7 (Less than maxSum, so maxSum stays 8)</li>
          <li>Slide window: Remove 1, add 3 → [5, 1, 3] = 9 (Greater than maxSum, so maxSum becomes 9)</li>
          <li>Slide window: Remove 5, add 2 → [1, 3, 2] = 6 (Less than maxSum, so maxSum stays 9)</li>
          <li>Final answer: 9</li>
        </ul>

        <p className="mb-6">
          <strong>How it's efficient:</strong> Instead of recalculating the entire sum for each window (which would be 3 additions each time), we do just 2 operations: 1 subtraction and 1 addition. This makes our algorithm much faster!
        </p>

        <h3 className="text-xl font-semibold mb-4">Variable-Size Sliding Window</h3>
        <p className="mb-4">
          A variable-size sliding window can grow or shrink based on conditions. It's used when you don't know the exact size of the subarray you're looking for, but you know a condition it must satisfy.
        </p>

        <p className="mb-4 font-semibold">
          Example Problem: Find smallest subarray with sum ≥ target value (let's say target = 7)
        </p>

        <p className="mb-4">
          Let's use this array: [2, 1, 5, 2, 3, 2]
        </p>

        <p className="mb-4 font-semibold">Approach and Dry Run:</p>
        <p className="mb-4">
          We start with an empty window and expand it by adding elements until we meet our condition. Once the condition is met, we try to shrink the window from the left while still maintaining the condition, recording the best window size along the way.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Start with empty window, currentSum = 0, minLength = infinity</li>
          <li>Add 2: [2], sum = 2 (&lt; 7, condition not met, expand)</li>
          <li>Add 1: [2, 1], sum = 3 (&lt; 7, condition not met, expand)</li>
          <li>Add 5: [2, 1, 5], sum = 8 (≥ 7, condition met!)</li>
          <li>Record length: 3 elements (new minLength = 3)</li>
          <li>Try shrinking: Remove 2, window becomes [1, 5], sum = 6 (&lt; 7, can't shrink more)</li>
          <li>Add 2: [1, 5, 2], sum = 8 (≥ 7, condition met)</li>
          <li>Try shrinking: Remove 1, window becomes [5, 2], sum = 7 (= 7, still meets condition)</li>
          <li>Record length: 2 elements (new minLength = 2)</li>
          <li>Try shrinking more: Remove 5, window becomes [2], sum = 2 (&lt; 7, can't shrink more)</li>
          <li>Add 3: [2, 3], sum = 5 (&lt; 7, condition not met, expand)</li>
          <li>Add 2: [2, 3, 2], sum = 7 (= 7, condition met!)</li>
          <li>Record length: 3 elements (not smaller than minLength = 2)</li>
          <li>Try shrinking: Remove 2, window becomes [3, 2], sum = 5 (&lt; 7, can't shrink more)</li>
          <li>End of array reached</li>
          <li>Final answer: The smallest subarray with sum ≥ 7 has length 2 (the elements [5, 2])</li>
        </ul>

        <p className="mb-6">
          <strong>How it's efficient:</strong> The "expand and shrink" approach ensures we examine each element at most twice (once when adding, once when potentially removing), giving us linear time complexity despite checking subarrays of different sizes.
        </p>

        <h3 className="text-xl font-semibold mb-4">Sliding Window Types Comparison</h3>
        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Fixed-Size Window</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Variable-Size Window</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Definition</td>
                <td className="border border-gray-300 px-4 py-2">Window size remains constant throughout the algorithm</td>
                <td className="border border-gray-300 px-4 py-2">Window size changes dynamically based on certain conditions</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Simple Example</td>
                <td className="border border-gray-300 px-4 py-2">Find max sum of exactly 3 consecutive elements in an array</td>
                <td className="border border-gray-300 px-4 py-2">Find smallest subarray with sum ≥ target value</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Real-Life Use Case</td>
                <td className="border border-gray-300 px-4 py-2">Netflix/YouTube buffering a fixed number of seconds ahead regardless of connection speed</td>
                <td className="border border-gray-300 px-4 py-2">Adaptive video streaming that buffers more content when connection is poor and less when connection is stable</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">When To Use</td>
                <td className="border border-gray-300 px-4 py-2">When the size of the pattern you're looking for is known in advance</td>
                <td className="border border-gray-300 px-4 py-2">When you need to find the optimal window size that satisfies a condition</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mb-4">Fixed-size Sliding Window : pseudo code its explanation and animation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function fixedSlidingWindow(data, windowSize):
    initialize windowState using first windowSize elements
    initialize bestResult using windowState
    
    for each element from windowSize to end of data:
        update windowState by removing the leftmost element and adding the new element
        
        if windowState is better than bestResult:
            update bestResult
    
    return bestResult`}</code>
        </pre>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>A sliding window is a small section that moves across a list, adding a new element while removing the old one.</li>
          <li>windowState keeps track of the current window's value, and bestResult stores the best value found so far.</li>
          <li>The function starts with the first few elements (k = window size), then slides the window across the list (n = total number of elements), updating windowState and comparing it with bestResult.</li>
          <li>This method avoids unnecessary recalculations, making it much faster (O(n × k) to O(n)), and finally returns bestResult.</li>
        </ul>

        <p className="mb-4">
          Look at the below animation to visualize it
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/bEuYVs+(1).gif" alt="Fixed Sliding Window Animation" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Variable-size Sliding Window : pseudo code its explanation and animation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`function variableSlidingWindow(data, condition):
    start = 0  # Left boundary of the window
    
    for each element in data:
        expand window by adding current element
        
        while window satisfies condition:
            process current window as a valid result
            shrink window from the left
            move start forward
    
    return finalResult`}</code>
        </pre>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>A sliding window dynamically expands and shrinks while moving across a list, adjusting based on a given condition instead of a fixed size.</li>
          <li>start marks the left boundary of the window, and the window grows by adding elements while checking if the condition is met.</li>
          <li>When the condition is satisfied, the current window is processed as a valid result. Then, the window shrinks by moving start forward until the condition is no longer met.</li>
          <li>This method efficiently finds variable-sized subarrays, improving performance to O(n) by avoiding extra recalculations, and finally returns finalResult.</li>
        </ul>

        <p className="mb-4">
          Look at the below animation to visualize it
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/PSUP-Advanced/LTEQpe+(1).gif" alt="Variable Sliding Window Animation" />
        </div>

        <p className="mb-4">
          Alternatively, you can watch the following video to understand the sliding window technique, its two types, and examples for each.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jM2dhDPYMQM?end=373" title="Sliding Window Technique Detailed" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <p className="text-sm text-gray-600 mt-2">Note: The video is set to end at 6 minutes and 13 seconds.</p>
        </div>
        <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problem-list/sliding-window/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">maximum sum subarray of size k</h4>
            <p className="text-xs text-gray-500">leetcode • Medium</p>
          </a>
        </div>
      </section>

        <Quiz
          title="Module 2.20 Quiz: Sliding Window Pattern"
          questions={[
            {
              question: "What is the main advantage of the Sliding Window technique?",
              options: ["It reduces memory usage to zero", "It transforms O(n^2) or O(nk) problems into O(n) by avoiding redundant calculations", "It only works for strings", "It makes recursion faster"],
              correctAnswer: 1,
              explanation: "Sliding window 'slides' over the data, updating the result based on elements entering and leaving, which is much faster than recalculating from scratch for every segment."
            },
            {
              question: "In a fixed-size window of size 'k', what are the two basic operations performed when moving the window to the next position?",
              options: ["Add two elements", "Subtract the outgoing (leftmost) element and add the incoming (rightmost) element", "Sort the window", "Double the window size"],
              correctAnswer: 1,
              explanation: "This maintain-and-update approach ensures that each transition takes O(1) time instead of O(k)."
            },
            {
              question: "When should you use a 'Variable-Size' sliding window?",
              options: ["When the length of the ideal subarray is not fixed and depends on a specific condition (like a target sum)", "When the array size is unknown", "When the window size is always 1", "When you want to use more memory"],
              correctAnswer: 0,
              explanation: "Variable-size windows grow to meet a condition and shrink to find the 'best' or 'smallest' version of that condition."
            },
            {
              question: "What is the typical time complexity of a sliding window problem where each element enters and leaves the window at most once?",
              options: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
              correctAnswer: 1,
              explanation: "Even with the 'while' loop inside for variable windows, each element is pushed and popped exactly once, leading to O(2n) which is O(n)."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={20}
        />

        <p className="mb-6">
          To summarize, the sliding window technique boosts efficiency by eliminating redundant calculations. Instead of recalculating sums entirely, we update them dynamically by removing the outgoing element and adding the incoming one. This reduces the time complexity from O(n multiplied k) to O(n), (where n is total number of elements and k is the window size) making it highly efficient for large datasets.
        </p>
        <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FMindmap%20-%20sliding%20window%20approach.png" alt="" />
      </section>
    </div>
  );
};

export default Module2_20;
