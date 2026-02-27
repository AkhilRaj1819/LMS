'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module2_22: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.22</div>
        <div className="lesson-title-main">
          <h1>Assignment | Maximum Sum Subarray of Size K</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In our last lesson, we unpacked the theory behind the Sliding Window technique. Now, it's time to put that theory into practice with a hands-on assignment that perfectly illustrates its power and efficiency.
        </p>


        <p className="mb-6">
          Imagine you have a long list of numbers, and you're asked to find the consecutive block of numbers (of a specific size k) that gives the highest possible sum. That's exactly what we'll be tackling!
        </p>

        <p className="mb-6">
          Given an array of integers arr[] and a number k, your mission is to find the maximum sum of a subarray that has a size of exactly k.
        </p>

        <h3 className="text-xl font-semibold mb-4">Visualizing the Problem</h3>
        <p className="mb-4">
          Before we dive into the code, let's visualize how we can approach this. The core idea is to maintain a "window" of size k that slides across the array, and we'll keep track of the largest sum we see. This video offers an excellent explanation of the concept along with dry runs:
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KtpqeN0Goro" title="Maximum Sum Subarray of Size K" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-6">
          To get you started, here is a step-by-step approach.
        </p>

        <h3 className="text-xl font-semibold mb-4">The Sliding Window Approach</h3>

        <div className="mb-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2"
          >
            <span className="transform transition-transform duration-300" style={{ display: 'inline-block', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)' }}>
              ▶
            </span>
            Click for a Step-by-Step Breakdown
          </button>

          <div
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{
              maxHeight: isExpanded ? '3000px' : '0',
              opacity: isExpanded ? 1 : 0
            }}
          >
            <div className="mt-4 space-y-4">
              <p>
                Let's take the example arr[] = [1, 4, 2, 10, 23, 3, 1, 0, 20] and k = 4.
              </p>

              <div>
                <p className="font-semibold mb-2">The Naive (Brute-Force) Way:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>You could first consider the subarray from index 0 to 3: [1, 4, 2, 10], and calculate its sum (17).</li>
                  <li>Then, consider the subarray from index 1 to 4: [4, 2, 10, 23], and calculate its sum (39).</li>
                  <li>...and so on, until you reach the end of the array.</li>
                  <li>This works, but it's inefficient. For each starting point, you're summing up k elements. This gives it a time complexity of O(n*k), which can be very slow for large arrays.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">The Efficient (Sliding Window) Way: This is where the magic happens! Instead of recalculating the sum every time, we can be smarter.</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 1: Calculate the sum of the first window.</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Sum the first k elements. In our example, the first window is [1, 4, 2, 10].</li>
                  <li>windowSum = 1 + 4 + 2 + 10 = 17.</li>
                  <li>This is our initial maxSum. So, maxSum = 17.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 2: Slide the window one position to the right.</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>To get the sum of the next window [4, 2, 10, 23], we don't need to add them all up again.</li>
                  <li>We can take our previous windowSum (17), subtract the element that's leaving the window (1) and add the new element that's entering the window (23).</li>
                  <li>New windowSum = 17 - 1 + 23 = 39.</li>
                  <li>Now, we compare this new windowSum with our maxSum. Since 39 &gt; 17, our new maxSum is 39.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">Step 3: Keep sliding!</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Repeat the process. The next window is [2, 10, 23, 3].</li>
                  <li>New windowSum = 39 - 4 + 3 = 38.</li>
                  <li>Is 38 &gt; 39? No. So, maxSum remains 39.</li>
                  <li>Continue this process until your window reaches the end of the array.</li>
                </ul>
              </div>

              <p>
                <strong>Why is this better?</strong> We are only performing two operations (one addition, one subtraction) for each step. This makes the time complexity O(n), a huge improvement! The space we use is just for a few variables, so the space complexity is O(1).
              </p>
            </div>
          </div>
        </div>


        <div className="mb-6 bg-blue-50 p-4 rounded">
          <p className="font-semibold mb-2">Did you know?</p>
          <p>The sliding window technique is not just for arrays! It's widely used in problems involving strings (like finding the longest substring with no repeating characters) and in real-world applications like network data analysis to calculate moving averages of traffic.</p>
        </div>
        <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">maximum sum subarray of size k</h4>
            <p className="text-xs text-gray-500">leetcode • Medium</p>
          </a>
        </div>
      </section>

        <Quiz
          title="Module 2.22 Quiz: Maximum Sum Subarray of Size K"
          questions={[
            {
              question: "What is the time complexity of the optimized Sliding Window approach for this problem?",
              options: ["O(k)", "O(n)", "O(n * k)", "O(log n)"],
              correctAnswer: 1,
              explanation: "The window slides once over the array, doing O(1) work per step, resulting in O(n) total time."
            },
            {
              question: "How do you calculate the sum of the current window using the sum of the previous window (size K)?",
              options: ["Re-add all K elements", "Add the new element only", "Subtract the element that left and add the new element that entered", "Multiply by K"],
              correctAnswer: 2,
              explanation: "This is the 'sliding' part: `newSum = oldSum - arr[i-k] + arr[i]`."
            },
            {
              question: "What is the space complexity of this sliding window implementation?",
              options: ["O(1)", "O(k)", "O(n)", "O(n^2)"],
              correctAnswer: 0,
              explanation: "We only store a few variables (maxSum, currentSum, indices), regardless of the size of the input array."
            },
            {
              question: "If k = 3 and the array is [1, 2, 3, 4, 5], what is the sum of the second window (starting from index 1)?",
              options: ["6", "9", "12", "7"],
              correctAnswer: 1,
              explanation: "The first window (0-2) is [1, 2, 3] = 6. The second window (1-3) is [2, 3, 4] = 9."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={22}
        />
      </section>
    </div>
  );
};

export default Module2_22;
