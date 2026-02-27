'use client';
import React from 'react';
import Quiz from '../../components/Quiz';

const Module1_15: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.15</div>
        <div className="lesson-title-main">
          <h1>Assignment | Sieve of Eratosthenes</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Mastering Prime Numbers</h3>
        <p>
          Welcome to your first pair programming assignment! In this session, we'll use arrays to implement one of the most elegant algorithms in number theory, the <strong>Sieve of Eratosthenes</strong>.
        </p>
        <div className="bg-emerald-50 p-6 rounded-2xl border-l-4 border-emerald-500 my-8 shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">
            "This technique isn't just about identifying primes—it's a brilliant example of preprocessing and optimization in algorithm design."
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>The Core Concept</h3>
        <p>Instead of checking every number individually back-to-front, the Sieve works by <strong>elimination</strong>:</p>
        <div className="image-container flex justify-center my-6">
          <img src="https://kq-storage.kalvium.community/seiveof.png" alt="Sieve Visualization" className="rounded-xl shadow-lg" />
        </div>
        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-gray-800">1. Mark Everything</h4>
            <p className="text-sm text-gray-600">Start by assuming all numbers from 2 to n are prime.</p>
          </div>
          <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
            <h4 className="font-bold text-rose-600">2. Strike Out</h4>
            <p className="text-sm text-gray-600">For every prime found, strike out all of its multiples (e.g., if 2 is prime, strike 4, 6, 8...).</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Video Walkthrough</h3>
        <p>Watch this video to understand the step-by-step logic of the Sieve and how it achieves incredible efficiency.</p>
        <div className="video-embed my-6">
          <div className="video-container shadow-2xl rounded-2xl overflow-hidden">
            <iframe src="https://www.youtube.com/embed/g5Fuxn_AvSk" title="Sieve Explained" allowFullScreen></iframe>
          </div>
        </div>
      </section>
      

      <Quiz
        title="Module 1.15 Quiz: Sieve of Eratosthenes"
        questions={[
          {
            question: "What is the primary function of the Sieve of Eratosthenes?",
            options: ["To sort an array of numbers", "To find all prime numbers up to a given 'n'", "To find the GCD of two numbers", "To encrypt a string"],
            correctAnswer: 1,
            explanation: "The Sieve of Eratosthenes is an ancient and efficient algorithm for finding all prime numbers up to any given limit 'n'."
          },
          {
            question: "What is the first number we start with when marking multiples in the Sieve?",
            options: ["0", "1", "2", "3"],
            correctAnswer: 2,
            explanation: "We start at 2 because it is the smallest prime number. 0 and 1 are not prime numbers."
          },
          {
            question: "Once we identify 'p' as a prime, which numbers do we mark as 'not prime'?",
            options: ["All numbers after p", "All divisors of p", "All multiples of p (2p, 3p, 4p...)", "None of them"],
            correctAnswer: 2,
            explanation: "The logic of the sieve is to eliminate all multiples of a prime, as a multiple of a prime is by definition not a prime itself."
          },
          {
            question: "What is the Time Complexity of the Sieve of Eratosthenes?",
            options: ["O(n)", "O(n^2)", "O(n log log n)", "O(log n)"],
            correctAnswer: 2,
            explanation: "The Sieve is extremely fast, with a complexity of O(n log log n), making it much faster than checking each number individually."
          },
          {
            question: "What kind of extra memory is typically used to implement the Sieve?",
            options: ["A single integer variable", "A boolean array of size n+1", "A 2D matrix", "No extra memory is needed"],
            correctAnswer: 1,
            explanation: "We use a boolean array of size n+1, where 'true' means a number is prime and 'false' means it has been marked as a multiple."
          }
        ]}
        subject="DS"
        unitId={1}
        moduleId={15}
      />
    </div>
  );
};

export default Module1_15;
