'use client';
import Quiz from '../../components/Quiz';

const Module2_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.3</div>
        <div className="lesson-title-main">
          <h1>Letter combination of phone number</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          In this optional assignment, you will be solving a problem to practice your understanding of recursion.
        </p>

        <p className="mb-4">
          Take a look at the video before solving the problem.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0snEunUacZY" title="Letter Combinations of a Phone Number" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-4">
          We advise you to understand the logic of the problem before starting the assignment.
        </p>
        <section className="content-section">
          <h3>Practice Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Letter Combinations of a Phone Number</h4>
              <p className="text-xs text-gray-500">LeetCode • Medium</p>
            </a>
          </div>
        </section>

        <Quiz
          title="Module 2.3 Quiz: Phone Number Combinations"
          questions={[
            {
              question: "What is the primary recursive objective in the 'Letter Combinations of a Phone Number' problem?",
              options: ["To multiply the digits together", "To iterate through the keypad and find all possible paths from the first digit to the last", "To sort the digits in ascending order", "To find the sum of all letters"],
              correctAnswer: 1,
              explanation: "The problem asks for all possible letter combinations, which requires exploring every possible letter for each digit recursively."
            },
            {
              question: "If the input string has 'n' digits, and each digit corresponds to at most 4 letters, what is the approximate time complexity?",
              options: ["O(n)", "O(n^2)", "O(4^n)", "O(log n)"],
              correctAnswer: 2,
              explanation: "For each of the 'n' digits, you have up to 4 choices, leading to an exponential complexity of O(4^n)."
            },
            {
              question: "When does the recursion reach its base case in this problem?",
              options: ["When the input string is empty", "When the current combination's length equals the input string's length", "When we encounter the digit '1'", "When the result list is full"],
              correctAnswer: 1,
              explanation: "Once the length of the string we are building matches the length of the input digits, we have a valid combination and can stop the current recursive path."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={3}
        />
      </section>
    </div>
  );
};

export default Module2_3;
