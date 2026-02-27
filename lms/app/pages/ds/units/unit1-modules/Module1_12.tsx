'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.12</div>
        <div className="lesson-title-main">
          <h1>Valid Palindrome</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Mastering String Logic</h3>
        <p>Welcome to your next milestone! "Valid Palindrome" is a classic interview question that tests your ability to clean data and use efficient traversal techniques.</p>
        <div className="bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">
            "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward."
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Two Approaches to Compare</h3>
        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">1. The "Reverse" Strategy</h4>
            <p className="text-sm text-gray-600">Clean the string, reverse it, and compare it to the original. Easy to code, but uses extra memory for the copy.</p>
            <p className="text-xs font-mono mt-2 text-gray-400">Space: O(n)</p>
          </div>
          <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-emerald-600 mb-2">2. The "Two-Pointer" Strategy</h4>
            <p className="text-sm text-gray-600">Use two pointers (start and end) and move them toward the center, comparing characters as you go. Faster and memory-efficient.</p>
            <p className="text-xs font-mono mt-2 text-gray-400">Space: O(1)</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Pro Tip: Data Cleaning</h3>
        <p>Before comparing, remember to:</p>
        <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
          <li>Convert to lowercase.</li>
          <li>Remove spaces, commas, and special characters.</li>
          <li>Focus only on <code className="bg-gray-100 px-1 rounded">0-9</code> and <code className="bg-gray-100 px-1 rounded">a-z</code>.</li>
        </ul>
      </section>
      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/valid-palindrome/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Valid Palindrome</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <Quiz
        title="Module 1.12 Quiz: Palindrome Logic"
        questions={[
          {
            question: "How does the 'Valid Palindrome' problem define a palindrome?",
            options: ["Reads the same forward and backward, including symbols", "Reads the same forward and backward after removing non-alphanumeric characters and ignoring case", "Any word that has at least two of the same letter", "A string with an even number of characters"],
            correctAnswer: 1,
            explanation: "In most coding challenges, palindromes are case-insensitive and ignore non-alphanumeric characters like spaces or punctuation."
          },
          {
            question: "Which of these is the most memory-efficient way to check for a palindrome?",
            options: ["Reversing the entire string and comparing", "Using two pointers (left and right) and comparing inward", "Splitting the string into an array and sorting", "Converting the string into a number"],
            correctAnswer: 1,
            explanation: "The two-pointer approach uses O(1) auxiliary space because it doesn't create a new copy of the string."
          },
          {
            question: "What should 'isPalindrome('')' (empty string) return based on LeetCode standards?",
            options: ["True", "False", "Null", "Error"],
            correctAnswer: 0,
            explanation: "An empty string is considered a valid palindrome as it reads the same forward and backward by vacuously satisfying the condition."
          },
          {
            question: "Why do we convert the string to lowercase before checking?",
            options: ["To save memory", "To make it case-insensitive ('A' and 'a' should match)", "Because lowercase characters are faster to process", "It is mandatory for all LeetCode problems"],
            correctAnswer: 1,
            explanation: "Palindromes are usually about the sequence of letters, not their capitalization."
          },
          {
            question: "In the string 'A man, a plan, a canal: Panama', what is the first letter compared with the last letter (after cleaning)?",
            options: ["'A' and 'a'", "'A' and '.'", "'m' and 'a'", "'A' and 'P'"],
            correctAnswer: 0,
            explanation: "After cleaning and lowercasing, the first char is 'a' and the last is 'a' (from Panama), hence they match."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={12}
      />
    </div>
  );
};

export default Module1_12;