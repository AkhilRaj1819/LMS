'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module2_21: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.21</div>
        <div className="lesson-title-main">
          <h1>Longest Substring Without Repeating Characters</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this assignment, you will learn how to find the longest substring without repeating characters.
        </p>

        <h3 className="text-xl font-semibold mb-4">Problem statement</h3>
        <p className="mb-6">
          Given a string s, find the length of the longest substring without repeating characters.
        </p>

        <h3 className="text-xl font-semibold mb-4">Sample Input:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>s = "abcabcbb"</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Output:</h3>
        <pre className="bg-gray-100 p-4 rounded mb-6">
          <code>3</code>
        </pre>

        <h3 className="text-xl font-semibold mb-4">Explanation:</h3>
        <p className="mb-6">
          The answer is "abc", with the length of 3.
        </p>

        <h3 className="text-xl font-semibold mb-4">Solution</h3>
        <p className="mb-4 font-semibold">
          Hint: Try to solve this problem using sliding window. If a window has unique characters, return it's length.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wiGpQwVHdE0" title="Longest Substring Without Repeating Characters" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-6">
          To solve this problem, you will need knowledge of unordered_sets(for C++) and sets (for python). By using maps in C++, you can store each character and it's frequency. Frequency of each letter is the number of times it occurs in a string. This way you can keep track of frequencies of each character in a window. If the frequency of any character increases more than 1, then shift the window until that character.
        </p>
        <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">longest substring without repeating characters</h4>
            <p className="text-xs text-gray-500">LeetCode • Medium</p>
          </a>
        </div>
      </section>

        <Quiz
          title="Module 2.21 Quiz: Longest Substring Without Repeating Characters"
          questions={[
            {
              question: "Which sliding window type is best for finding the longest substring with unique characters?",
              options: ["Fixed-size sliding window", "Variable-size sliding window", "Circular sliding window", "Static window"],
              correctAnswer: 1,
              explanation: "Since the length of the longest unique substring isn't known and can vary, we use a variable-size window that expands/shrinks based on uniqueness."
            },
            {
              question: "If the right pointer 'j' encounters a character that is ALREADY present in the window, what should the left pointer 'i' do?",
              options: ["Stop the program", "Jump to the end", "Move forward (shrink the window) until the repeating character is no longer in the window", "Stay at the same position"],
              correctAnswer: 2,
              explanation: "To restore the 'unique character' property of the window, we must remove characters from the left until the duplicate is gone."
            },
            {
              question: "What is the most efficient way to check if a character already exists in the current window?",
              options: ["Iterate through the entire window every time", "Use a Set or a Hash Map to store characters in the window", "Sort the string first", "Use nested loops"],
              correctAnswer: 1,
              explanation: "A Hash Map or Set provides O(1) average time complexity for lookups, keeping the overall algorithm efficient."
            },
            {
              question: "What is the overall time complexity of this sliding window approach?",
              options: ["O(n^2)", "O(n log n)", "O(n)", "O(2^n)"],
              correctAnswer: 2,
              explanation: "Even though there's a loop inside the main loop to move the left pointer, each character is 'visited' by the pointers at most twice, resulting in O(n)."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={21}
        />
      </section>
    </div>
  );
};

export default Module2_21;
