'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.14</div>
        <div className="lesson-title-main">
          <h1>Longest Common Prefix</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Finding Common Ground</h3>
        <p>Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string <code className="bg-gray-100 px-1 rounded text-rose-500">""</code>.</p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <h4 className="font-bold text-gray-800 mb-2">Example 1</h4>
            <p className="text-xs font-mono text-blue-600 mb-2">Input: ["flower", "flow", "flight"]</p>
            <p className="text-sm text-emerald-600 font-bold">Output: "fl"</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
            <h4 className="font-bold text-gray-800 mb-2">Example 2</h4>
            <p className="text-xs font-mono text-rose-600 mb-2">Input: ["dog", "racecar", "car"]</p>
            <p className="text-sm text-rose-600 font-bold">Output: ""</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>The "Sorting" Strategy</h3>
        <p>A clever way to solve this is to sort the array alphabetically. Why? Because the most different strings will end up at the <strong>first</strong> and <strong>last</strong> positions of the array.</p>
        <div className="bg-gray-900 rounded-2xl p-6 font-mono text-sm shadow-xl my-6">
          <p className="text-gray-500">// Unsorted:</p>
          <p className="text-white">["flower", "flow", "flight", "flew"]</p>
          <p className="text-emerald-400 mt-2">// Sorted Alphabetically:</p>
          <p className="text-white">["flew", "flight", "flow", "flower"]</p>
          <p className="text-blue-300 mt-2">// Compare 'flew' vs 'flower':</p>
          <p className="text-gray-400">Match: f, l, e ... (w != o) -&gt; "fle"</p>
        </div>
        <div className="bg-amber-50 p-6 rounded-2xl border-l-4 border-amber-500">
          <p className="text-sm text-amber-900 leading-relaxed font-medium">
            <strong>Key Insight:</strong> Once sorted, you only need to compare the first string and the last string. Any character common to both of them must be common to everything in between.
          </p>
        </div>
      </section>
      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/longest-common-prefix/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Longest Common Prefix</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>

      <Quiz
        title="Module 1.14 Quiz: Prefix Analysis"
        questions={[
          {
            question: "What is a 'Common Prefix' in a set of strings?",
            options: ["The longest string in the set", "A substring that appears anywhere in all strings", "The shared sequence of characters at the beginning of all strings", "The last character shared by all strings"],
            correctAnswer: 2,
            explanation: "Prefixes must start from the very first character (index 0) of the strings."
          },
          {
            question: "Why does sorting the array alphabetically help find the common prefix?",
            options: ["It removes all strings without a prefix", "It puts the strings with the most differences at the first and last positions", "It makes all strings the same length", "It's just a required step on LeetCode"],
            correctAnswer: 1,
            explanation: "Alphabetical sorting ensures that if a prefix exists for all strings, it must be the shared prefix between the 'lexicographically' smallest and largest strings."
          },
          {
            question: "Given ['apple', 'ape', 'april'], what is the longest common prefix?",
            options: ["a", "app", "ap", "apple"],
            correctAnswer: 2,
            explanation: "All three start with 'ap'. The next characters ('p', 'e', 'r') don't match."
          },
          {
            question: "In the sorting approach, which two strings do you compare after the array is sorted?",
            options: ["The first and second", "The last two", "The first and last", "All of them simultaneously"],
            correctAnswer: 2,
            explanation: "Comparing the first and last strings is sufficient because they are the most 'distant' in alphabetical order."
          },
          {
            question: "What should the function return if the strings have nothing in common (e.g., ['abc', 'xyz'])?",
            options: ["null", "0", "an empty string \"\"", "undefined"],
            correctAnswer: 2,
            explanation: "The problem statement specifies returning an empty string \"\" when no common prefix is found."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={14}
      />
    </div>
  );
};

export default Module1_14;