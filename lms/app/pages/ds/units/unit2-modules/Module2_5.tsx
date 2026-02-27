'use client';
import Quiz from '../../components/Quiz';

const Module2_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.5</div>
        <div className="lesson-title-main">
          <h1>Pow(x, n)</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          Hello there!
        </p>

        <p className="mb-6">
          Welcome to today's problem-solving session! We're excited to guide you through an interesting algorithmic challenge.
        </p>

        <p className="mb-6">
          In your previous sessions, you explored the concepts of recursion, starting with an introduction and then moving into a deeper dive into how recursion works. In today's session, your learning objective focuses on tackling the Pow(x, n) problem, where you will implement a function to calculate x raised to the power n (x^n). This challenge requires you to compute x^n efficiently, allowing you to apply optimization techniques that reduce time complexity, understand and utilize binary exponentiation, handle edge cases in mathematical computations, and think recursively to solve complex problems.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Naive Approach (O(n))</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Multiply x by itself n times</li>
              <li>Simple but inefficient for large values of n</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">2. Optimized Approach - Binary Exponentiation (O(log n))</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use the property: x^n = (x^2)^(n/2) when n is even</li>
              <li>Use the property: x^n = x * x^(n-1) when n is odd</li>
              <li>This reduces time complexity significantly</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">3. Edge Cases to Consider</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>When n = 0, result should be 1</li>
              <li>When n &lt; 0, compute 1 / x^|n|</li>
              <li>When x = 0 and n &lt; 0, handle division by zero</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Approach</h2>
        <p className="mb-4 font-semibold">Pseudocode Solution:</p>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`FUNCTION power(x, n):
    // Step 1: Base case - anything to power 0 is 1
    IF n == 0:
        RETURN 1
    
    // Step 2: Handle negative exponent
    IF n < 0:
        x = 1 / x          // Convert to positive exponent
        n = -n             // Make n positive
    
    // Step 3: Check if n is even
    IF n is EVEN:
        // Step 3a: Recursively compute x^(n/2)
        half = power(x, n / 2)
        
        // Step 3b: Square the result (x^(n/2) * x^(n/2) = x^n)
        RETURN half * half
    
    // Step 4: If n is odd
    ELSE:
        // Step 4a: Compute x * x^(n-1)
        RETURN x * power(x, n - 1)
END FUNCTION`}</code>
        </pre>

        <p className="mb-4 font-semibold">Step-by-step explanation:</p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li><strong>Base case:</strong> If n = 0, return 1 (any number to power 0 is 1)</li>
          <li><strong>Negative exponent:</strong> If n &lt; 0, convert x to 1/x and make n positive</li>
          <li>
            <strong>Even exponent:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Calculate x^(n/2) recursively (this is the key optimization!)</li>
              <li>Square the result: (x^(n/2))^2 = x^n</li>
              <li>This reduces the problem size by half in each step</li>
            </ul>
          </li>
          <li>
            <strong>Odd exponent:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Multiply x by x^(n-1)</li>
              <li>Recursively solve for x^(n-1)</li>
            </ul>
          </li>
        </ol>

        <div className="mb-6 bg-blue-50 p-4 rounded">
          <p className="font-semibold mb-2">Why is this faster?</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Instead of doing n multiplications, we only do log(n) multiplications</li>
            <li>For n = 1,000,000, instead of 1 million operations, we only need about 20!</li>
            <li>This is the power of divide and conquer</li>
          </ul>
        </div>
        <section className="content-section">
          <h3>Practice Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://leetcode.com/problems/powx-n/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Pow(x, n)</h4>
              <p className="text-xs text-gray-500">LeetCode • Medium</p>
            </a>
          </div>
        </section>

        <Quiz
          title="Module 2.5 Quiz: Efficient Power Calculation"
          questions={[
            {
              question: "What is the Time Complexity of implementing Pow(x, n) using recursive binary exponentiation?",
              options: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
              correctAnswer: 2,
              explanation: "Binary exponentiation reduces the exponent by half in each recursive call, leading to a logarithmic time complexity."
            },
            {
              question: "How should a negative exponent 'n' be handled according to the lesson?",
              options: ["Return 0", "Ignore the negative sign", "Change x to 1/x and treat n as positive", "Subtract x from n"],
              correctAnswer: 2,
              explanation: "Mathematically, x^-n = (1/x)^n. This allows us to reuse the same logic for positive exponents."
            },
            {
              question: "If 'n' is even, what is the core optimization step?",
              options: ["half = power(x, n/2); return half * half", "return x * power(x, n-1)", "return x + x", "return 1"],
              correctAnswer: 0,
              explanation: "By calculating x^(n/2) once and squaring it, we avoid re-calculating the same half, saving nearly half the work."
            },
            {
              question: "What is the result of any (non-zero) number raised to the power of 0?",
              options: ["0", "1", "The number itself", "Infinity"],
              correctAnswer: 1,
              explanation: "This is the classic base case for power functions: x^0 = 1 for any x ≠ 0."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={5}
        />

        <h2 className="text-2xl font-semibold mb-4">Similar Problems</h2>
        <p className="mb-4">
          Practice these related problems to strengthen your understanding:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://leetcode.com/problems/sqrtx/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Sqrt(x) - LeetCode
            </a> - Finding square root using binary search
          </li>
          <li>
            <a href="https://leetcode.com/problems/super-pow/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Super Pow - LeetCode
            </a> - Power with large exponents
          </li>
          <li>
            <a href="https://leetcode.com/problems/powx-n/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Powx-n - LeetCode
            </a> - The original problem on LeetCode
          </li>
          <li>
            <a href="https://leetcode.com/problems/valid-perfect-square/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Valid Perfect Square
            </a> - Check if a number is a perfect square
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Reference Materials</h2>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Articles &amp; Tutorials:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a href="https://cp-algorithms.com/algebra/binary-exp.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Binary Exponentiation - CP Algorithms
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Exponentiation_by_squaring" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Exponentiation by Squaring - Wikipedia
                </a>
              </li>
              <li>
                <a href="https://www.geeksforgeeks.org/write-a-c-program-to-calculate-powxn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Power Function Implementation - GeeksforGeeks
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Video Resources:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a href="https://www.youtube.com/watch?v=L-Wzglnm4dM" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Fast Exponentiation Tutorial
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=g9YQyYi4IQQ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Pow(x,n) Solution Walkthrough
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Practice Platforms:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  LeetCode
                </a>
              </li>
              <li>
                <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  HackerRank
                </a>
              </li>
              <li>
                <a href="https://codeforces.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  Codeforces
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Module2_5;
