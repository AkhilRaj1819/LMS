'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';

const Module1_16: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.16</div>
        <div className="lesson-title-main">
          <h1>Count Primes</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Count Primes – LeetCode Problem #204</h3>
        <p>
          In this problem, you'll implement an efficient way to count how many prime numbers exist <strong>strictly less than</strong> a given integer n.
        </p>
        <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium italic">
            "Counting primes is the perfect way to test your implementation skills of the Sieve of Eratosthenes. It's a common interview question for testing optimization awareness."
          </p>
        </div>
        <div className="image-container flex justify-center my-6">
          <img src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif" alt="Coding" className="rounded-xl shadow-lg h-48" />
        </div>
      </section>

      <section className="content-section">
        <h3>Conceptual Guide</h3>
        <p>A quick walkthrough of how to efficiently count primes using the Sieve of Eratosthenes.</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl rounded-2xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/klcIklsWzrY" title="Sieve Logic" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Step-by-Step Approach</h3>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left font-bold text-blue-600 hover:text-blue-800 flex items-center justify-between group"
          >
            <span>Click to expand the implementation guide</span>
            <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>▼</span>
          </button>

          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="font-mono text-blue-500 font-bold">01</div>
                <div>
                  <h4 className="font-bold">Initialization</h4>
                  <p className="text-sm text-gray-600">Create a boolean array of size 'n' and mark all as true. Explicitly set indices 0 and 1 to false.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-mono text-blue-500 font-bold">02</div>
                <div>
                  <h4 className="font-bold">The Sieve Loop</h4>
                  <p className="text-sm text-gray-600">Iterate from i = 2 up to sqrt(n). If isPrime[i] is true, mark all its multiples starting from i*i as false.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="font-mono text-blue-500 font-bold">03</div>
                <div>
                  <h4 className="font-bold">Counting</h4>
                  <p className="text-sm text-gray-600">Traverse the processed array once and count the remaining 'true' values.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://leetcode.com/problems/count-primes/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-blue-600">204. Count Primes</h4>
            <p className="text-xs text-gray-500">LeetCode • Medium</p>
          </a>
          <a href="https://leetcode.com/problems/ugly-number/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-blue-600">263. Ugly Number</h4>
            <p className="text-xs text-gray-500">LeetCode • Easy</p>
          </a>
        </div>
      </section>
      

      <Quiz
        title="Module 1.16 Quiz: Count Primes Logic"
        questions={[
          {
            question: "Why do we only need to iterate the Sieve loop up to sqrt(n)?",
            options: ["Because primes are only found below sqrt(n)", "To reduce memory usage", "Because any composite number 'n' must have at least one factor less than or equal to sqrt(n)", "It's a limitation of computer architecture"],
            correctAnswer: 2,
            explanation: "If a number has a factor larger than sqrt(n), its corresponding factor must be smaller than sqrt(n)."
          },
          {
            question: "When counting primes strictly less than 'n', should you include 'n' if it is prime?",
            options: ["Yes", "No", "Only if n is even", "Only if n is large"],
            correctAnswer: 1,
            explanation: "The problem asks for 'strictly less than n', so the check should exclude the value of n itself."
          },
          {
            question: "What is the result of Count Primes for n = 10?",
            options: ["4 (2, 3, 5, 7)", "5 (1, 2, 3, 5, 7)", "3 (3, 5, 7)", "2 (2, 5)"],
            correctAnswer: 0,
            explanation: "The primes less than 10 are 2, 3, 5, and 7. Thus, the count is 4."
          },
          {
            question: "What is the Time Complexity of checking if a single number is prime (Brute Force)?",
            options: ["O(log n)", "O(sqrt(n))", "O(1)", "O(n)"],
            correctAnswer: 1,
            explanation: "Checking a single number's primality by testing divisors up to its square root takes O(sqrt(n)) time."
          },
          {
            question: "Which approach is strictly better for counting primes up to a large 'n'?",
            options: ["Brute force for every number", "The Sieve of Eratosthenes", "Sorting the numbers", "Random sampling"],
            correctAnswer: 1,
            explanation: "The Sieve's O(n log log n) is exponentially faster than O(n * sqrt(n)) brute force for large values of n."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={16}
      />
    </div>
  );
};

export default Module1_16;
