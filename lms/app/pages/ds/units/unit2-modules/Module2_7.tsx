'use client';
import Quiz from '../../components/Quiz';

const Module2_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.7</div>
        <div className="lesson-title-main">
          <h1>Subsequence Patterns in Recursion</h1>
        </div>
      </div>

      <section className="content-section">

        <p className="mb-6">
          Ever tried to shuffle the letters of your name just for fun? Like, turning "abc" into "ac", "b", or even ""? (Yes, nothing is something in recursion!)
        </p>

        <p className="mb-6">
          Welcome to the magical world of subsequences — where even the absence of a letter is still counted. In this lesson, we'll unravel how recursion helps in finding every possible way to pick and skip elements from a sequence — systematically, smartly, and sometimes even sneakily.
        </p>

        <p className="mb-6">
          In this lesson, you will learn about working with subsequences and various patterns that you will come across while working with problems using recursion.
        </p>

        <p className="mb-6">
          Now imagine solving this systematically with a powerful tool: recursion. How does recursion help us uncover all possible subsequences? Let's find out!
        </p>

        <h2 className="text-2xl font-semibold mb-4">The Power of Recursion in Subsequence Problems</h2>
        <p className="mb-4">
          Let's say you're holding the string "ABC".
        </p>

        <p className="mb-4 font-semibold">What are the possible subsequences?</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>AB</li>
          <li>AC</li>
          <li>BC</li>
          <li>ABC</li>
          <li>(and yes, the lonely empty string "" too!)</li>
        </ul>

        <p className="mb-6">
          So that's 2³ = 8 subsequences, including the empty one. Why 2³? Because for each character, you have two choices: include it, or skip it.
        </p>

        <p className="mb-6">
          And this is where recursion enters like a coding superhero, elegantly branching out into all possible paths. One decision at a time.
        </p>

        <h3 className="text-xl font-semibold mb-4">Real-Life Analogy 1: Packing for a Trip</h3>
        <div className="mb-6">
          <img src="https://kq-storage.kalvium.community/subsequenceinrecursion.png" alt="Packing for a trip" />
        </div>

        <p className="mb-4 font-semibold">Scenario:</p>
        <p className="mb-4">You're going on a short trip. You open your closet and see 3 items:</p>
        <ul className="list-disc ml-6 mb-4 space-y-1">
          <li>Jacket</li>
          <li>Sunglasses</li>
          <li>Book</li>
        </ul>

        <p className="mb-4">
          Your task: decide which items to pack. You can take all, none, or any combination of them — but you can't change their order in the list.
        </p>

        <p className="mb-4 font-semibold">The possible packing combinations?</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Jacket, Sunglasses, Book</li>
          <li>Jacket, Sunglasses</li>
          <li>Jacket, Book</li>
          <li>Jacket</li>
          <li>Sunglasses, Book</li>
          <li>Sunglasses</li>
          <li>Book</li>
          <li>(take nothing and wing it)</li>
        </ul>

        <p className="mb-6">
          This is exactly like generating subsequences. For each item, you have a choice: take it or leave it. Recursion simulates this decision-making at each item. It explores all combinations systematically.
        </p>

        <p className="mb-4">
          Watch this video to understand the subsequences in recursion.
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AxNNVECce8c" title="Subsequences in Recursion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Why are subsequences important?</h3>
        <p className="mb-6">
          They're foundational for problems like finding subsets, solving combinatorial puzzles, and optimizing operations in dynamic programming.
        </p>
        

        <Quiz
          title="Module 2.7 Quiz: Subsequences & Recursion"
          questions={[
            {
              question: "If a string has length 'n', how many total subsequences (including the empty string) can be generated?",
              options: ["n", "n^2", "2^n", "n!"],
              correctAnswer: 2,
              explanation: "For each of the 'n' elements, you have 2 binary choices: either include it in the current subsequence or exclude it. This results in 2 * 2 * ... (n times) = 2^n combinations."
            },
            {
              question: "What is the primary recursive pattern used to generate all subsequences of a string?",
              options: ["Picking the first and last elements only", "Making two recursive calls: one including the current element and one excluding it", "Sorting the string and then removing duplicates", "Using a single loop with a base case"],
              correctAnswer: 1,
              explanation: "The 'include/exclude' or 'pick/skip' strategy is the standard recursive approach for power set and subsequence problems."
            },
            {
              question: "Is the empty string ('') considered a valid subsequence of any string?",
              options: ["No, it must contain at least one character", "Yes, it represents the case where every element was 'skipped'", "Only if the original string was empty", "Only in Tail Recursion"],
              correctAnswer: 1,
              explanation: "A subsequence is formed by deleting zero or more elements. Deleting all elements leaves the empty string."
            },
            {
              question: "What differentiates a subsequence from a substring?",
              options: ["Subsequences must be contiguous", "Substrings must be contiguous, but subsequences don't have to be", "They are the same thing", "Subsequences are only used for numbers"],
              correctAnswer: 1,
              explanation: "A substring is a contiguous slice of a string. A subsequence maintains the relative order of elements but doesn't require them to be next to each other in the original string."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={7}
        />

        <div className="mb-6 bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
          <p className="font-semibold mb-2">[OPTIONAL CONTENT]</p>
          <p className="mb-2">
            The content given below is optional and you can skip this if you wish. We advise you to go through these when you have free time for better understanding.
          </p>
          <p className="mb-4">
            Watch this video to understand the various common patterns in recursion based problems.
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eQCS_v3bw0Q" title="Common Patterns in Recursion" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Mind map of this lesson</h3>
        <div className="mb-6">
          <img src="https://kq-storage.kalvium.community/mmsubsequence.png" alt="Subsequence patterns mind map" />
        </div>
      </section>
    </div>
  );
};

export default Module2_7;
