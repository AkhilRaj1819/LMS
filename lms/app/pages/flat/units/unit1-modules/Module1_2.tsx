
'use client';
import React from 'react';
import Quiz from '../../components/Quiz';


const Module1_2: React.FC = () => {
  const quizQuestions = [
    {
      question: "Which of the following is logically equivalent to the statement 'If it is raining (P), then the ground is wet (Q)'?",
      options: [
        "If the ground is wet, then it is raining (Q → P)",
        "If it is not raining, then the ground is not wet (¬P → ¬Q)",
        "If the ground is not wet, then it is not raining (¬Q → ¬P)",
        "It is raining and the ground is not wet (P ∧ ¬Q)"
      ],
      correctAnswer: 2,
      explanation: "The contrapositive (¬Q → ¬P) is the only statement among these that is logically equivalent to the original implication (P → Q)."
    },
    {
      question: "What is the primary difference between a constructive proof and a non-constructive proof?",
      options: [
        "Constructive proofs are longer",
        "Constructive proofs explicitly build the object whose existence is claimed",
        "Non-constructive proofs are not valid in computer science",
        "Constructive proofs use mathematical induction only"
      ],
      correctAnswer: 1,
      explanation: "A constructive proof demonstrates that something exists by providing a specific method or example to build it, whereas a non-constructive proof proves existence without showing how to find it."
    },
    {
      question: "If you want to disprove the claim 'Every odd number is prime', what is the best technique to use?",
      options: ["Direct Proof", "Mathematical Induction", "Proof by Counterexample", "Proof by Contrapositive"],
      correctAnswer: 2,
      explanation: "A single counterexample (e.g., 9 is odd but not prime) is sufficient to disprove a universal claim ('Every...')."
    },
    {
      question: "In a proof by contradiction, after assuming the negation of the theorem, you aim to:",
      options: [
        "Prove the negation is true",
        "Derive a logical impossibility or contradiction",
        "Find a counterexample",
        "Construct an automaton"
      ],
      correctAnswer: 1,
      explanation: "The goal of contradiction is to show that assuming the theorem is false leads to an impossible situation, meaning the theorem must be true."
    },
    {
      question: "Which proof technique is most commonly used to prove that √2 is irrational?",
      options: ["Mathematical Induction", "Proof by Construction", "Proof by Contradiction", "Direct Proof"],
      correctAnswer: 2,
      explanation: "The standard proof for the irrationality of √2 assumes it is rational (a/b) and derives a contradiction regarding the factors of a and b."
    }
  ];

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.2</div>
        <div className="lesson-title-main">
          <div className="text-sm text-gray-600 mb-2">📚 Theory of Computation &gt; UNIT-1: Automata Methods and Finite Automata</div>
          <h1>🔍 Additional Forms of Proof</h1>
          <div className="flex flex-wrap gap-4 mt-3 text-sm">
            <div><span className="font-semibold">⏱️ Estimated Time:</span> 75-90 minutes</div>
            <div><span className="font-semibold">📊 Difficulty:</span> Intermediate</div>
            <div><span className="font-semibold">🎯 Prerequisites:</span> Mathematical Induction, Logic</div>
            <div><span className="font-semibold">✅ Pass Score:</span> 70% or higher</div>
          </div>
        </div>
      </div>

      <h1>🎯
        What You'll Master</h1>

      <section className="content-section">
        <h1>🎯
          What You'll Master</h1>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Understand and apply proof by contradiction (reductio ad absurdum) to prove statements in automata theory and formal languages</li>
            <li>Master proof by contrapositive and distinguish it from direct proof and contradiction techniques</li>
            <li>Apply proof by construction to demonstrate the existence of automata, regular expressions, and language properties</li>
            <li>Utilize proof by counterexample to disprove false claims about languages, automata, and computational properties</li>
            <li>Evaluate which proof technique is most appropriate for different types of statements in theory of computation</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p>
          Imagine you're a detective trying to solve a complex case. You can't always prove someone is guilty by finding direct evidence—sometimes you need to prove that they couldn't possibly be innocent. This is exactly what additional proof techniques allow us to do in Theory of Computation. While mathematical induction is powerful for proving properties that hold across all natural numbers, there are many theorems in computer science—especially concerning automata, languages, and computability—that require different approaches.
        </p>
        <p>
          In theoretical computer science, we often need to prove whether certain problems are solvable, whether languages have specific properties, or whether one computational model is more powerful than another. Direct proof isn't always feasible or elegant. Additional forms of proof—contradiction, contrapositive, construction, and counterexample—give us a complete toolkit to rigorously prove or disprove any claim. These techniques are fundamental to understanding the limits of computation, proving decidability and undecidability results, and demonstrating the equivalence or non-equivalence of different computational models.
        </p>
        <p>
          For students pursuing computer science, mastering these proof techniques is essential not just for exams, but for research, algorithm design, and technical interviews at top tech companies like Google, Microsoft, and Amazon. These companies regularly ask questions requiring proof by contradiction (e.g., "Prove that certain problems are NP-complete") or construction (e.g., "Design an automaton that recognizes this language"). Understanding these methods will elevate your problem-solving skills from memorizing algorithms to truly understanding computational foundations.
        </p>

        <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Cryptography:</strong> Proof by contradiction is used to prove that certain encryption schemes are secure (e.g., RSA security relies on contradiction-based proofs)</li>
          <li><strong>Compiler Design:</strong> Proof by construction is essential for showing that parsers correctly recognize language syntax</li>
          <li><strong>Algorithm Complexity:</strong> Proof by contradiction establishes lower bounds for computational problems (e.g., proving sorting requires Ω(n log n) comparisons)</li>
          <li><strong>AI & Machine Learning:</strong> Counterexamples are used to identify limitations in neural network architectures and learning algorithms</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>📖 Deep Dive: Understanding the Concept</h3>

        <h4 className="mt-4 font-semibold">Definition & Fundamentals</h4>
        <p>
          <strong>What are Additional Forms of Proof?</strong> In mathematics and theoretical computer science, a proof is a logical argument that establishes the truth of a mathematical statement beyond any doubt. While direct proof (assuming hypotheses and deriving conclusions through logical steps) and mathematical induction (proving base case and inductive step) are fundamental, they cannot handle all types of statements efficiently. Additional forms of proof provide alternative logical pathways to establish truth when direct approaches are impractical or impossible.
        </p>
        <p>
          These alternative proof techniques emerged from classical Greek logic and were formalized by mathematicians like Euclid (300 BCE) who used contradiction extensively in "Elements," and modern logicians who developed formal proof theory. In computer science, these techniques became indispensable when Alan Turing and Alonzo Church proved fundamental limits of computation in the 1930s—many of their groundbreaking results relied on proof by contradiction and construction.
        </p>
        <p>
          Why do these proof techniques exist? Different types of mathematical statements have different logical structures. Some statements are easier to prove by assuming they're false and deriving an impossibility (contradiction), others by proving the contrapositive, and still others by explicitly constructing an example. Without these techniques, many fundamental results in computability theory (like the undecidability of the Halting Problem) and complexity theory (like NP-completeness results) would be impossible to prove.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">The Four Major Additional Proof Forms:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Proof by Contradiction (Reductio ad Absurdum):</strong> Assume the statement is false, derive a logical impossibility, conclude the statement must be true</li>
            <li><strong>Proof by Contrapositive:</strong> Instead of proving "If P then Q," prove "If not Q then not P" (logically equivalent)</li>
            <li><strong>Proof by Construction:</strong> Prove existence by explicitly constructing an example that satisfies the required properties</li>
            <li><strong>Proof by Counterexample:</strong> Disprove universal claims by finding a single example where the claim fails</li>
          </ul>
        </div>

        <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Proposition:</strong> A declarative statement that is either true or false (but not both)</li>
          <li><strong>Hypothesis:</strong> The "if" part of a conditional statement; assumptions we accept as true</li>
          <li><strong>Conclusion:</strong> The "then" part of a conditional statement; what we aim to prove</li>
          <li><strong>Contradiction:</strong> A statement that is logically impossible; both P and ¬P (not P) cannot be simultaneously true</li>
          <li><strong>Contrapositive:</strong> For statement "P → Q," the contrapositive is "¬Q → ¬P" (logically equivalent)</li>
          <li><strong>Converse:</strong> For statement "P → Q," the converse is "Q → P" (NOT logically equivalent—common mistake!)</li>
          <li><strong>Counterexample:</strong> A specific instance that makes a universal claim false</li>
          <li><strong>Constructive Proof:</strong> Explicitly builds/constructs an object proving existence</li>
        </ul>

        <div className="my-8 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-center text-xl font-bold mb-8 text-gray-800">Visual Representation: Logical Relationships</h4>
          <div className="flex items-center justify-center gap-12">
            <div className="relative">
              <div className="w-32 h-32 bg-[#5c2e2e] rounded-full relative">
                <div className="absolute top-4 left-8 w-8 h-3 bg-white rounded-full opacity-40"></div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#4a2424]"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ff6b35] rounded-full"></div>
                <div className="absolute -top-2 left-[35%] w-1.5 h-4 bg-[#4a2424] rotate-[-30deg]"></div>
                <div className="absolute -top-2 left-[60%] w-1.5 h-4 bg-[#4a2424] rotate-[30deg]"></div>
                <div className="absolute -top-4 left-[25%] w-1.5 h-3 bg-[#4a2424] rotate-[-45deg]"></div>
                <div className="absolute -top-4 left-[70%] w-1.5 h-3 bg-[#4a2424] rotate-[45deg]"></div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-700 mb-2">Syntax error in text</h3>
              <p className="text-gray-500 text-lg">mermaid version 10.9.5</p>
            </div>
          </div>
          <p className="text-center mt-8 text-sm italic text-gray-600">Figure 2: Logical flow of different proof strategies</p>
        </div>

        <h4 className="mt-6 font-semibold">How It Works: The Mechanism Explained</h4>

        <div className="mt-4 space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h5 className="font-semibold text-lg">🔴 Proof by Contradiction (Reductio ad Absurdum)</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To prove a statement P is true, we assume P is false (¬P) and show that this assumption leads to a logical impossibility—a contradiction. Since our reasoning is valid, the only error must be in our assumption, forcing us to conclude that P must be true. Think of it like a chess endgame: you assume your opponent has a defense, then prove systematically that every possible move leads to checkmate, forcing the conclusion that no defense exists.
            </p>

            <p className="mt-3"><strong>Step-by-Step Process:</strong></p>
            <ol className="list-decimal ml-6 mt-2 space-y-1">
              <li><strong>State what you want to prove:</strong> Clearly identify the proposition P</li>
              <li><strong>Assume the negation:</strong> Assume ¬P is true (the opposite of what you want to prove)</li>
              <li><strong>Derive logical consequences:</strong> Using valid logical rules and known facts, derive implications from ¬P</li>
              <li><strong>Reach a contradiction:</strong> Continue until you derive something impossible (e.g., "1 = 0" or "n is both even and odd")</li>
              <li><strong>Conclude the original statement:</strong> Since ¬P leads to impossibility, P must be true</li>
            </ol>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Classic Example: √2 is Irrational</p>
              <p className="mt-2"><strong>Claim:</strong> √2 cannot be expressed as a fraction p/q where p and q are integers.</p>
              <ol className="list-decimal ml-6 mt-2 space-y-1 text-sm">
                <li>Assume √2 is rational, so √2 = p/q where p and q are in lowest terms (no common factors)</li>
                <li>Square both sides: 2 = p²/q², so p² = 2q²</li>
                <li>p² is even (it's 2 times something), so p must be even. Write p = 2k</li>
                <li>Substitute: (2k)² = 2q², so 4k² = 2q², meaning q² = 2k²</li>
                <li>q² is even, so q is even. But we now have both p and q are even, meaning they share factor 2—contradicting our assumption they're in lowest terms!</li>
              </ol>
              <p className="mt-2"><strong>Conclusion:</strong> Our assumption that √2 is rational led to contradiction, so √2 must be irrational. ∎</p>
            </div>

            <div className="mt-6 flex justify-center">
              <iframe width="751" height="404" src="https://www.youtube.com/embed/SfKzDswM6LQ" title="Proofs by contradiction." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h5 className="font-semibold text-lg">🔵 Proof by Contrapositive</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To prove "If P then Q" (P → Q), we instead prove "If not Q then not P" (¬Q → ¬P). These statements are logically equivalent, but sometimes the contrapositive is much easier to prove. Imagine proving "All students who pass the exam studied hard." Instead of tracking all students who studied and checking if they passed, you could prove the contrapositive: "Any student who didn't study hard didn't pass"—often easier to verify!
            </p>

            <p className="mt-3"><strong>Why It Works:</strong> The logical equivalence (P → Q) ≡ (¬Q → ¬P) is a fundamental law of logic. Think about it: if "rain implies wet ground," then "dry ground implies no rain" must also be true. The contrapositive preserves truth but shifts the proof burden, often making complex statements simpler.</p>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Example: If n² is even, then n is even</p>
              <p className="mt-2">Direct proof would be hard: Starting from "n² is even" to conclude "n is even" requires complicated reasoning.</p>
              <p className="mt-2"><strong>Contrapositive approach:</strong> Prove "If n is odd, then n² is odd" (much easier!)</p>
              <ol className="list-decimal ml-6 mt-2 space-y-1 text-sm">
                <li>Assume: n is odd, so n = 2k + 1 for some integer k</li>
                <li>Calculate: n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1</li>
                <li>Conclude: n² = 2m + 1 where m = 2k² + 2k, so n² is odd</li>
              </ol>
              <p className="mt-2"><strong>Result:</strong> We proved the contrapositive, so the original statement is true! ∎</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h5 className="font-semibold text-lg">🟢 Proof by Construction</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To prove that something exists, we don't just claim it exists—we build it explicitly. This is like an engineer proving a bridge can be built by actually designing the blueprint with exact specifications. In automata theory, constructive proofs are essential: we prove a language is regular by constructing a finite automaton that recognizes it; we prove two languages can be combined by constructing the union/intersection automaton.
            </p>

            <p className="mt-3"><strong>When to Use Construction:</strong> Existence claims in computer science (∃x such that P(x)) are best proven constructively because the construction itself is often useful beyond the proof—it becomes an algorithm, a design pattern, or a computational model others can use.</p>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Example: Constructing DFA for Language L = {'{'}w | w contains "01"{'}'}</p>
              <p className="mt-2"><strong>Claim:</strong> There exists a DFA that accepts all binary strings containing substring "01".</p>
              <p className="mt-2"><strong>Proof by Construction:</strong> We explicitly build the DFA:</p>
              <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                <li>States: q₀ (start), q₁ (saw 0), q₂ (saw 01 - accept state)</li>
                <li>Transitions: δ(q₀, 0) = q₁, δ(q₀, 1) = q₀, δ(q₁, 0) = q₁, δ(q₁, 1) = q₂, δ(q₂, 0) = q₂, δ(q₂, 1) = q₂</li>
                <li>Verification: String "001" → q₀ →⁰ q₁ →⁰ q₁ →¹ q₂ (accepted ✓)</li>
              </ul>
              <p className="mt-2"><strong>Conclusion:</strong> We constructed the DFA explicitly, proving such an automaton exists. ∎</p>
            </div>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold text-center mb-4">Constructed DFA Visualization</p>
              <div className="flex justify-center items-center">
                <svg width="500" height="200" viewBox="0 0 500 200" className="border border-gray-300 rounded">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                    </marker>
                  </defs>

                  {/* States */}
                  <circle cx="80" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="80" y="95" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>
                  <text x="80" y="110" textAnchor="middle" fontSize="10">Start</text>

                  <circle cx="250" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="250" y="95" textAnchor="middle" fontSize="14" fontWeight="bold">q₁</text>
                  <text x="250" y="110" textAnchor="middle" fontSize="10">Saw '0'</text>

                  <circle cx="420" cy="100" r="30" fill="#dcfce7" stroke="#22c55e" strokeWidth="3" />
                  <circle cx="420" cy="100" r="25" fill="none" stroke="#22c55e" strokeWidth="2" />
                  <text x="420" y="95" textAnchor="middle" fontSize="14" fontWeight="bold">q₂</text>
                  <text x="420" y="110" textAnchor="middle" fontSize="10">Saw '01'</text>

                  {/* Start arrow */}
                  <line x1="20" y1="100" x2="50" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />

                  {/* Transitions */}
                  {/* q0 to q1 on 0 */}
                  <line x1="110" y1="100" x2="220" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="165" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

                  {/* q0 self-loop on 1 */}
                  <path d="M 80 70 Q 80 30, 100 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="90" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

                  {/* q1 to q2 on 1 */}
                  <line x1="280" y1="100" x2="390" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="335" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">1</text>

                  {/* q1 self-loop on 0 */}
                  <path d="M 250 70 Q 250 30, 270 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="260" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">0</text>

                  {/* q2 self-loop on 0,1 */}
                  <path d="M 420 70 Q 420 30, 440 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <text x="430" y="40" textAnchor="middle" fontSize="12" fontWeight="bold">0,1</text>
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">Figure 4: DFA constructed to recognize strings containing "01"</p>
            </div>

            <div className="mt-6 flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/miT3lMbllhw?si=OQ8M9st5vlAy44nY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h5 className="font-semibold text-lg">🔴 Proof by Counterexample</h5>
            <p className="mt-2">
              <strong>The Core Principle:</strong> To disprove a universal claim "For all x, P(x) is true," we only need to find one single example where P(x) is false. This is the logical principle behind software testing: one failing test case proves the program has a bug. In automata theory, counterexamples are crucial for showing that certain languages are not regular, or that claimed properties don't hold.
            </p>

            <p className="mt-3"><strong>When to Use Counterexamples:</strong> This technique is exclusively for disproving universal claims. You cannot use counterexamples to prove universal statements—only to disprove them.</p>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Example: Disproving "All prime numbers are odd"</p>
              <p className="mt-2"><strong>Claim:</strong> For all prime numbers p, p is odd.</p>
              <p className="mt-2"><strong>Counterexample:</strong> Consider p = 2. The number 2 is prime (divisible only by 1 and 2), but 2 is even, not odd.</p>
              <p className="mt-2"><strong>Conclusion:</strong> The claim is false. One counterexample is sufficient to disprove a universal statement. ∎</p>
            </div>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold">💻 Automata Example: Disproving "All regular languages are finite"</p>
              <p className="mt-2"><strong>Claim:</strong> All regular languages contain finitely many strings.</p>
              <p className="mt-2"><strong>Counterexample:</strong> Consider L = {'{'}0ⁿ | n ≥ 0{'}'} = {'{'}ε, 0, 00, 000, ...{'}'}. This language is regular (recognized by a simple DFA), but contains infinitely many strings.</p>
              <p className="mt-2"><strong>Conclusion:</strong> The claim is false. Regular languages can be infinite. ∎</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">🔧 Key Components & Architecture</h3>
        <p className="mb-4">Understanding when to use each proof technique is crucial for success in theory of computation. Here's a detailed breakdown of each component:</p>

        <div className="space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold text-lg">Component 1: Proof by Contradiction</h4>
            <p className="mt-2 text-sm">
              This technique is most powerful when the statement to prove involves impossibility, uniqueness, or irrationality. The architecture involves: (1) Clear statement of what we want to prove, (2) Explicit negation of the statement, (3) Chain of logical deductions from the negation, (4) Identification of the contradiction (often with previously established facts), and (5) Conclusion that the original statement must be true. In automata theory, contradiction is essential for proving undecidability results (e.g., the Halting Problem is undecidable) and for showing certain languages cannot be recognized by finite automata. The power comes from being able to reason about impossibility without needing to construct explicit examples.
            </p>
          </div>


          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold text-lg">Component 2: Proof by Contrapositive</h4>
            <p className="mt-2 text-sm">
              The contrapositive is specifically designed for conditional statements (if-then propositions). Its architecture leverages logical equivalence: instead of proving P → Q directly, we prove ¬Q → ¬P, which is guaranteed to have the same truth value. This is particularly useful when the negations of P or Q are simpler to work with than P or Q themselves. In computational complexity, contrapositive proofs are common: instead of proving "if problem A is in P, then B is in P," we prove "if B is not in P, then A is not in P," which can be more straightforward when we already know properties of B.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-lg">Component 3: Proof by Construction</h4>
            <p className="mt-2 text-sm">
              Constructive proofs are the most practical in computer science because they provide algorithms and designs, not just existence claims. The architecture involves: (1) Understanding the requirements and constraints, (2) Designing the object (automaton, algorithm, function) step-by-step, (3) Proving that the construction satisfies all required properties, and (4) Often analyzing the construction's complexity or efficiency. In automata theory, constructive proofs are ubiquitous: proving closure properties of regular languages (if L₁ and L₂ are regular, then L₁ ∪ L₂ is regular) requires constructing the union automaton. The construction itself becomes a reusable technique.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold text-lg">Component 4: Proof by Counterexample</h4>
            <p className="mt-2 text-sm">
              Counterexamples are the simplest yet most decisive proof technique for disproving universal claims. The architecture is minimal: (1) Identify the universal claim, (2) Find or construct a single instance that violates it, (3) Verify that the instance indeed violates the claim. In theory of computation, counterexamples are critical during the exploration phase: when investigating whether a property holds for all automata or languages, a single counterexample can save hours of futile proof attempts. This technique teaches the importance of testing edge cases and boundary conditions.
            </p>
          </div>
        </div>

        <div className="my-8 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-center text-xl font-bold mb-8 text-gray-800">Proof Technique Decision Flowchart</h4>
          <div className="flex items-center justify-center gap-12">
            <div className="relative">
              <div className="w-32 h-32 bg-[#5c2e2e] rounded-full relative">
                <div className="absolute top-4 left-8 w-8 h-3 bg-white rounded-full opacity-40"></div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-4 bg-[#4a2424]"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#ff6b35] rounded-full"></div>
                <div className="absolute -top-2 left-[35%] w-1.5 h-4 bg-[#4a2424] rotate-[-30deg]"></div>
                <div className="absolute -top-2 left-[60%] w-1.5 h-4 bg-[#4a2424] rotate-[30deg]"></div>
                <div className="absolute -top-4 left-[25%] w-1.5 h-3 bg-[#4a2424] rotate-[-45deg]"></div>
                <div className="absolute -top-4 left-[70%] w-1.5 h-3 bg-[#4a2424] rotate-[45deg]"></div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-gray-700 mb-2">Syntax error in text</h3>
              <p className="text-gray-500 text-lg">mermaid version 10.9.5</p>
            </div>
          </div>
          <p className="text-center mt-8 text-sm italic text-gray-600">Figure 5: Decision tree for selecting the appropriate proof technique</p>
        </div>

        <div className="mt-6 bg-gray-50 border-l-4 border-gray-400 p-4">
          <h4 className="font-semibold text-lg">Real-World Implementation</h4>

          <div className="mt-3 space-y-3 text-sm">
            <div>
              <p className="font-semibold">In Computer Science Research:</p>
              <p>Modern research papers in theoretical computer science heavily rely on these proof techniques. The famous P vs NP problem, if solved, will almost certainly use proof by contradiction (proving either P = NP by showing ¬(P = NP) leads to contradiction, or P ≠ NP similarly). The Cook-Levin theorem (proving SAT is NP-complete) uses a constructive proof by building a reduction from any NP problem to SAT. Complexity theorists use contrapositive reasoning regularly: "if this problem has a polynomial algorithm, then so does this known-hard problem" is proven via contrapositive.</p>
            </div>

            <div>
              <p className="font-semibold">In Software Engineering:</p>
              <p>Testing frameworks embody proof by counterexample: every failing test case is a counterexample disproving "this code is correct for all inputs." Formal verification tools like Coq and Isabelle automate proof by construction and contradiction to verify that software meets specifications. Compilers use constructive proofs when optimizing code—they must construct the optimized program and prove it's equivalent to the original.</p>
            </div>

            <div>
              <p className="font-semibold">In Cryptography:</p>
              <p>Security proofs extensively use contradiction: to prove a cryptosystem is secure, we assume an attacker can break it, then show this implies breaking a known-hard problem (like factoring large numbers), which is considered impossible. This contradiction-based approach underpins modern cryptography, including RSA, elliptic curve cryptography, and blockchain security.</p>
              <div className="mt-4 flex justify-center">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QrkS3UwBFEo?si=BWmxTuDaSielSbzf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">⚠️ Common Misconceptions</h3>

        <div className="space-y-4">
          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #1: "Contrapositive and converse are the same thing"</p>
            <p className="mt-2"><strong>Reality:</strong> This is a critical error! For statement P → Q, the contrapositive is ¬Q → ¬P (logically equivalent to the original), but the converse is Q → P (NOT logically equivalent!). Example: "If it rains, the ground is wet" (true). Contrapositive: "If the ground is not wet, it didn't rain" (also true). Converse: "If the ground is wet, it rained" (false—could be a sprinkler!). Many students confuse these, leading to invalid proofs. Always remember: only contrapositive preserves logical equivalence.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #2: "Proof by contradiction and contrapositive are the same"</p>
            <p className="mt-2"><strong>Reality:</strong> These are related but distinct techniques. Contrapositive is specifically for proving conditional statements (P → Q) by proving ¬Q → ¬P. Proof by contradiction can be used for any statement type: you assume the negation of the entire statement and derive a contradiction. For conditional statements, contradiction assumes P ∧ ¬Q and derives contradiction, while contrapositive assumes ¬Q and proves ¬P directly. Contrapositive is cleaner when applicable, but contradiction is more general.</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #3: "One counterexample proves a statement true"</p>
            <p className="mt-2"><strong>Reality:</strong> Counterexamples can ONLY disprove universal statements—they cannot prove anything true. If the claim is "all swans are white," finding one black swan disproves it. But finding one white swan doesn't prove all swans are white. To prove a universal statement, you need a general proof (induction, direct proof, etc.) covering all cases, not just examples. This is why testing software can find bugs (counterexamples to correctness) but cannot prove correctness (that would require formal verification covering all inputs).</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
            <p className="font-semibold text-red-600">Misconception #4: "Proof by construction always means writing code or building physical objects"</p>
            <p className="mt-2"><strong>Reality:</strong> Constructive proof means providing an explicit method or example, not necessarily implementing it in code. In mathematics, constructing a function that satisfies certain properties is a constructive proof. In automata theory, drawing a state diagram is construction. The key is that you specify every detail explicitly—someone else could follow your construction to build the object. Non-constructive proofs (like some uses of the Axiom of Choice) prove existence without giving any method to find the object. Construction is about explicitness, not physical implementation.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">⚙️ See It In Action: Detailed Worked Examples</h3>

        <div className="space-y-8">
          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-lg">Worked Example 1: Proof by Contradiction - Proving Language Non-Regularity</h4>
            <p className="mt-2 font-semibold">📝 Problem Statement</p>
            <p className="mt-1"><strong>Claim:</strong> The language L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is not regular.</p>
            <p className="mt-1 text-sm"><strong>Context:</strong> This is a fundamental result in automata theory. The language consists of strings with equal numbers of 0s followed by 1s: {'{'}ε, 01, 0011, 000111, ...{'}'}. We'll use proof by contradiction combined with the Pumping Lemma for regular languages.</p>

            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold">🔍 Step-by-Step Solution</p>

              <p className="font-semibold mt-3">Step 1: Assume the negation</p>
              <p className="text-sm mt-1">Assume, for the sake of contradiction, that L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} IS regular.</p>

              <p className="font-semibold mt-3">Step 2: Apply the Pumping Lemma</p>
              <p className="text-sm mt-1">Since L is assumed regular, it must satisfy the Pumping Lemma: there exists a pumping length p such that any string s ∈ L with |s| ≥ p can be split as s = xyz where:</p>
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>|xy| ≤ p</li>
                <li>|y| &gt; 0</li>
                <li>For all i ≥ 0, xyⁱz ∈ L</li>
              </ul>

              <p className="font-semibold mt-3">Step 3: Choose a strategic string</p>
              <p className="text-sm mt-1">Select s = 0ᵖ1ᵖ (p zeros followed by p ones). Clearly s ∈ L and |s| = 2p ≥ p.</p>

              <p className="font-semibold mt-3">Step 4: Analyze the decomposition</p>
              <p className="text-sm mt-1">According to the Pumping Lemma, s can be written as s = xyz where |xy| ≤ p. Since the first p characters of s are all 0s, and |xy| ≤ p, both x and y must consist entirely of 0s. So y = 0ᵏ for some k &gt; 0.</p>

              <p className="font-semibold mt-3">Step 5: Pump the string</p>
              <p className="text-sm mt-1">Consider xy²z (pumping y once more). Since y consists of k zeros, xy²z has p + k zeros and p ones. But p + k ≠ p (since k &gt; 0), so xy²z has unequal numbers of 0s and 1s.</p>

              <p className="font-semibold mt-3">Step 6: Identify the contradiction</p>
              <p className="text-sm mt-1">We derived that xy²z must be in L (by Pumping Lemma), but xy²z has unequal numbers of 0s and 1s, so xy²z ∉ L. This is a contradiction!</p>

              <p className="font-semibold mt-3">Step 7: Conclusion</p>
              <p className="text-sm mt-1">Our assumption that L is regular led to a logical impossibility. Therefore, L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} must be NOT regular.</p>

              <div className="mt-4 bg-green-50 p-3 rounded">
                <p className="font-semibold">✅ Final Answer</p>
                <p className="mt-1 text-sm">The language L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is NOT regular.</p>
                <p className="mt-1 text-sm">This proof demonstrates the power of contradiction: we cannot construct a DFA for this language, and contradiction gives us a rigorous way to prove impossibility.</p>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded">
                <p className="font-semibold">💡 Key Insights</p>
                <ul className="list-disc ml-6 mt-1 text-sm">
                  <li><strong>Strategic choice matters:</strong> Choosing s = 0ᵖ1ᵖ was deliberate—it has clear structure that breaks when pumped</li>
                  <li><strong>Contradiction + Pumping Lemma:</strong> Most non-regularity proofs combine these techniques</li>
                  <li><strong>This generalizes:</strong> Any language requiring "counting" or "matching" typically isn't regular</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-lg">Worked Example 2: Proof by Contrapositive</h4>
            <p className="mt-2 font-semibold">📝 Problem Statement</p>
            <p className="mt-1"><strong>Claim:</strong> Let L₁ and L₂ be languages over alphabet Σ. Prove: If L₁ ∪ L₂ is finite, then both L₁ and L₂ are finite.</p>
            <p className="mt-1 text-sm"><strong>Context:</strong> This is a set-theoretic statement about languages. Direct proof would be awkward, but the contrapositive is elegant.</p>

            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold">🔍 Step-by-Step Solution</p>

              <p className="font-semibold mt-3">Step 1: Identify the conditional structure</p>
              <p className="text-sm mt-1">The statement has form "If P then Q" where:</p>
              <ul className="list-disc ml-6 mt-1 text-sm">
                <li>P: "L₁ ∪ L₂ is finite"</li>
                <li>Q: "Both L₁ and L₂ are finite"</li>
              </ul>

              <p className="font-semibold mt-3">Step 2: Form the contrapositive</p>
              <p className="text-sm mt-1">The contrapositive is "If ¬Q then ¬P", which translates to:</p>
              <p className="text-sm mt-1 italic">"If at least one of L₁ or L₂ is infinite, then L₁ ∪ L₂ is infinite"</p>

              <p className="font-semibold mt-3">Step 3: Prove the contrapositive (Case 1)</p>
              <p className="text-sm mt-1">Assume L₁ is infinite (the case where L₂ is infinite is symmetric).</p>
              <p className="text-sm mt-1">Since L₁ ⊆ L₁ ∪ L₂, and L₁ contains infinitely many strings, L₁ ∪ L₂ must also contain infinitely many strings (at least all strings from L₁).</p>
              <p className="text-sm mt-1">Therefore, L₁ ∪ L₂ is infinite.</p>

              <p className="font-semibold mt-3">Step 4: Prove the contrapositive (Case 2)</p>
              <p className="text-sm mt-1">If L₂ is infinite, by identical reasoning (L₂ ⊆ L₁ ∪ L₂), we conclude L₁ ∪ L₂ is infinite.</p>

              <p className="font-semibold mt-3">Step 5: Conclusion</p>
              <p className="text-sm mt-1">We've proven the contrapositive: if either L₁ or L₂ is infinite, then L₁ ∪ L₂ is infinite.</p>
              <p className="text-sm mt-1">By logical equivalence, the original statement is true: if L₁ ∪ L₂ is finite, then both L₁ and L₂ must be finite.</p>

              <div className="mt-4 bg-green-50 p-3 rounded">
                <p className="font-semibold">✅ Final Answer</p>
                <p className="mt-1 text-sm">The statement is proven true via contrapositive.</p>
                <p className="mt-1 text-sm">This demonstrates how contrapositive can transform a statement about finiteness (which is about "not having something") into a statement about infiniteness (which is about "having something"), making the proof more direct.</p>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded">
                <p className="font-semibold">💡 Key Insights</p>
                <ul className="list-disc ml-6 mt-1 text-sm">
                  <li><strong>Contrapositive simplified reasoning:</strong> Proving "infinite implies infinite" is more intuitive than "finite implies finite"</li>
                  <li><strong>Set inclusion is key:</strong> The subset relationship L₁ ⊆ L₁ ∪ L₂ makes the contrapositive proof immediate</li>
                  <li><strong>Always check for contrapositive opportunity:</strong> When statements involve negations or "lack of property," try contrapositive</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-lg">Worked Example 3: Proof by Construction - Closure Under Union</h4>
            <p className="mt-2 font-semibold">📝 Problem Statement</p>
            <p className="mt-1"><strong>Claim:</strong> The class of regular languages is closed under union. That is, if L₁ and L₂ are regular languages, then L₁ ∪ L₂ is also regular.</p>
            <p className="mt-1 text-sm"><strong>Context:</strong> Closure properties are fundamental in automata theory. We'll prove this by constructing a DFA for L₁ ∪ L₂ from DFAs for L₁ and L₂.</p>

            <div className="mt-4 bg-gray-50 p-4 rounded">
              <p className="font-semibold">🔍 Step-by-Step Solution</p>

              <div className="mt-3 space-y-3 text-sm">
                <div>
                  <p className="font-semibold">Step 1: Setup and assumptions</p>
                  <ul className="list-disc ml-6 mt-1">
                    <li>Let M₁ = (Q₁, Σ, δ₁, q₁, F₁) be a DFA recognizing L₁</li>
                    <li>Let M₂ = (Q₂, Σ, δ₂, q₂, F₂) be a DFA recognizing L₂</li>
                    <li>We'll construct M = (Q, Σ, δ, q₀, F) that recognizes L₁ ∪ L₂</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Step 2: Construct the state set</p>
                  <p className="mt-1">Q = Q₁ × Q₂ (Cartesian product of state sets)</p>
                  <p className="mt-1">Each state in M is a pair (p, q) where p ∈ Q₁ and q ∈ Q₂</p>
                  <p className="mt-1 italic">Intuition: M simulates both M₁ and M₂ simultaneously, tracking both computations in parallel</p>
                </div>

                <div>
                  <p className="font-semibold">Step 3: Define the start state</p>
                  <p className="mt-1">q₀ = (q₁, q₂) (pair of start states from M₁ and M₂)</p>
                </div>

                <div>
                  <p className="font-semibold">Step 4: Construct the transition function</p>
                  <p className="mt-1">For state (p, q) ∈ Q and symbol a ∈ Σ:</p>
                  <p className="mt-1">δ((p, q), a) = (δ₁(p, a), δ₂(q, a))</p>
                  <p className="mt-1 italic">Meaning: When reading symbol a in combined state (p, q), transition to the state where M₁ goes to δ₁(p, a) and M₂ goes to δ₂(q, a)</p>
                </div>

                <div>
                  <p className="font-semibold">Step 5: Define accepting states</p>
                  <p className="mt-1">F = {'{'}(p, q) | p ∈ F₁ OR q ∈ F₂{'}'}</p>
                  <p className="mt-1 italic">Key insight: Accept if either M₁ accepts OR M₂ accepts (this captures union semantics)</p>
                  <p className="mt-1">Formally: F = (F₁ × Q₂) ∪ (Q₁ × F₂)</p>
                </div>

                <div>
                  <p className="font-semibold">Step 6: Verify correctness</p>
                  <p className="mt-1">For any string w:</p>
                  <ul className="list-disc ml-6 mt-1">
                    <li>M processes w, ending in state (p, q)</li>
                    <li>This means M₁ ends in state p, and M₂ ends in state q</li>
                    <li>M accepts w ⟺ (p, q) ∈ F ⟺ p ∈ F₁ OR q ∈ F₂</li>
                    <li>⟺ M₁ accepts w OR M₂ accepts w ⟺ w ∈ L₁ OR w ∈ L₂</li>
                    <li>⟺ w ∈ L₁ ∪ L₂</li>
                  </ul>
                  <p className="mt-1">Therefore, L(M) = L₁ ∪ L₂</p>
                </div>

                <div>
                  <p className="font-semibold">Step 7: Conclusion</p>
                  <p className="mt-1">We have explicitly constructed a DFA M that recognizes L₁ ∪ L₂. Since we constructed a DFA (which defines a regular language), L₁ ∪ L₂ is regular.</p>
                </div>
              </div>

              <div className="mt-4 bg-green-50 p-3 rounded">
                <p className="font-semibold">✅ Final Answer</p>
                <p className="mt-1 text-sm">Regular languages are closed under union. The proof is constructive—we built the union DFA explicitly using the product construction.</p>
                <p className="mt-1 text-sm"><strong>Construction details:</strong> States: Q₁ × Q₂, Start: (q₁, q₂), Accept: (F₁ × Q₂) ∪ (Q₁ × F₂), Transitions: component-wise</p>
              </div>

              <div className="mt-4 bg-blue-50 p-3 rounded">
                <p className="font-semibold">💡 Key Insights</p>
                <ul className="list-disc ml-6 mt-1 text-sm">
                  <li><strong>Product construction is powerful:</strong> This technique works for intersection too (just change accepting states to F₁ × F₂)</li>
                  <li><strong>Parallel simulation:</strong> The key idea is simulating both automata simultaneously</li>
                  <li><strong>State explosion:</strong> If M₁ has n states and M₂ has m states, M has n·m states—can be exponentially large</li>
                  <li><strong>Generalization:</strong> This construction extends to any finite number of languages (not just two)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded mt-4">
              <p className="font-semibold text-center mb-4">Product Construction Visualization</p>
              <div className="flex justify-center items-center">
                <svg width="600" height="300" viewBox="0 0 600 300" className="border border-gray-300 rounded">
                  <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                    </marker>
                  </defs>

                  <text x="80" y="30" fontSize="14" fontWeight="bold">M₁ (Recognizes L₁)</text>
                  <circle cx="50" cy="70" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="50" y="75" textAnchor="middle" fontSize="12">q₁</text>
                  <circle cx="120" cy="70" r="20" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="120" cy="70" r="16" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                  <text x="120" y="75" textAnchor="middle" fontSize="12">f₁</text>
                  <line x1="70" y1="70" x2="100" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
                  <text x="85" y="65" textAnchor="middle" fontSize="10">a</text>

                  <text x="230" y="30" fontSize="14" fontWeight="bold">M₂ (Recognizes L₂)</text>
                  <circle cx="200" cy="70" r="20" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="200" y="75" textAnchor="middle" fontSize="12">q₂</text>
                  <circle cx="270" cy="70" r="20" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="270" cy="70" r="16" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                  <text x="270" y="75" textAnchor="middle" fontSize="12">f₂</text>
                  <line x1="220" y1="70" x2="250" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
                  <text x="235" y="65" textAnchor="middle" fontSize="10">b</text>

                  <text x="200" y="140" fontSize="14" fontWeight="bold">M (Product Construction - Recognizes L₁ ∪ L₂)</text>

                  <circle cx="100" cy="200" r="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="100" y="200" textAnchor="middle" fontSize="10">(q₁,q₂)</text>

                  <circle cx="250" cy="200" r="25" fill="#fef3c7" stroke="#eab308" strokeWidth="2" />
                  <circle cx="250" cy="200" r="21" fill="none" stroke="#eab308" strokeWidth="1.5" />
                  <text x="250" y="200" textAnchor="middle" fontSize="10">(q₁,f₂)</text>

                  <circle cx="400" cy="200" r="25" fill="#fef3c7" stroke="#eab308" strokeWidth="2" />
                  <circle cx="400" cy="200" r="21" fill="none" stroke="#eab308" strokeWidth="1.5" />
                  <text x="400" y="200" textAnchor="middle" fontSize="10">(f₁,q₂)</text>

                  <circle cx="550" cy="200" r="25" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
                  <circle cx="550" cy="200" r="21" fill="none" stroke="#22c55e" strokeWidth="1.5" />
                  <text x="550" y="200" textAnchor="middle" fontSize="10">(f₁,f₂)</text>

                  <line x1="125" y1="200" x2="225" y2="200" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="175" y="195" textAnchor="middle" fontSize="10">b</text>

                  <line x1="275" y1="200" x2="375" y2="200" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="325" y="195" textAnchor="middle" fontSize="10">a</text>

                  <line x1="425" y1="200" x2="525" y2="200" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="475" y="195" textAnchor="middle" fontSize="10">b</text>

                  <path d="M 100 175 Q 175 160, 250 175" fill="none" stroke="#374151" strokeWidth="1.5" markerEnd="url(#arrow2)" />
                  <text x="175" y="160" textAnchor="middle" fontSize="10">a</text>

                  <text x="300" y="270" fontSize="11" fill="#059669" fontWeight="bold">States with f₁ or f₂ are accepting (union!)</text>
                </svg>
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">Figure 7: Product construction for union - states combine components, accept if either component accepts</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <iframe width="347" height="195" src="https://www.youtube.com/embed/CuYZIsBSguw" title="Closure Properties of Regular Languages + Proofs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📚 Problem-Solving Practice</h3>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-lg">📘 Easy Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove that if n is an integer and n² is divisible by 4, then n is even. Use proof by contrapositive.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Step 1:</strong> Identify the conditional structure. P: "n² is divisible by 4", Q: "n is even"</p>
                <p><strong>Step 2:</strong> Form the contrapositive: ¬Q → ¬P, which is "If n is odd, then n² is not divisible by 4"</p>
                <p><strong>Step 3:</strong>  Assume n is odd. Then n = 2k + 1 for some integer k.
                </p>
                <p><strong>Step 4:</strong>  Calculate n² = (2k + 1)² = 4k² + 4k + 1 = 4(k² + k) + 1</p>
                <p><strong>Step 5:</strong>  We proved the contrapositive, so the original statement is true.
                </p>
                <p><strong>Final Answer:</strong> The statement is proven via contrapositive. If n² is divisible by 4, then n must be even.∎</p>
              </div>
            </details>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-semibold text-lg">📙 Medium Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove or disprove: "If L₁ and L₂ are regular languages over the same alphabet Σ, and L₁ ∩ L₂ = ∅ (empty), then L₁ and L₂ must be finite languages."</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-yellow-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Approach:</strong> This is a universal claim, so we disprove it using a counterexample.</p>

                <p><strong>Counterexample:</strong> Let Σ = {'{'}0, 1{'}'}. Define
                  L₁ = {'{'}w | w contains an even number of 0s{'}'} and
                  L₂ = {'{'}w | w contains an odd number of 0s{'}'}.</p>

                <p><strong>Verification (Regular):</strong> Both L₁ and L₂ are regular because they can be recognized by simple 2-state DFAs.</p>

                <p><strong>Verification (Disjoint):</strong> L₁ ∩ L₂ = ∅ because a string cannot simultaneously have both an even and an odd number of 0s.</p>

                <p><strong>Verification (Infinite):</strong> Both languages are infinite. For example, L₁ contains ε, 00, 0000, … and L₂ contains 0, 000, 00000, …</p>

                <p><strong>Conclusion:</strong> We found regular languages that are disjoint yet both infinite, which disproves the claim.</p>

                <p><strong>Final Answer:</strong> The claim is FALSE. Counterexample: L₁ = {'{'}even number of 0s{'}'}, L₂ = {'{'}odd number of 0s{'}'}. Both are regular, disjoint, and infinite. ∎</p>
              </div>
            </details>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-lg">📕 Hard Problem</h4>

            <p className="mt-2">
              <strong>Problem:</strong> Use proof by contradiction to prove that the language
              L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} (strings formed by concatenating a string with itself)
              is NOT regular.
            </p>

            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-red-600">
                Show Solution
              </summary>

              <div className="mt-3 text-sm space-y-2">
                <p><strong>Approach:</strong> Assume L is regular and apply the Pumping Lemma to derive a contradiction.</p>

                <p><strong>Step 1:</strong> Assume L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is regular.</p>

                <p><strong>Step 2:</strong> By the Pumping Lemma, there exists a pumping length p such that any string s ∈ L with |s| ≥ p can be written as s = xyz where |xy| ≤ p, |y| &gt; 0, and xyⁱz ∈ L for all i ≥ 0.</p>

                <p><strong>Step 3:</strong> Choose s = 0ᵖ1ᵖ0ᵖ1ᵖ. This string is in L because s = ww where w = 0ᵖ1ᵖ, and |s| = 4p ≥ p.</p>

                <p><strong>Step 4:</strong> Since |xy| ≤ p and the string begins with p zeros, both x and y consist only of 0s from the first block. Thus y = 0ᵏ for some 1 ≤ k ≤ p.</p>

                <p><strong>Step 5:</strong> Consider xy²z. This adds k zeros to the first block, giving:
                  <br />0ᵖ⁺ᵏ1ᵖ0ᵖ1ᵖ
                </p>

                <p><strong>Step 6:</strong> For this string to be in L, it must equal ww for some w. Then |xy²z| = 4p + k, so |w| = (4p + k)/2 = 2p + k/2. The first half would need to match the second half, but the first half begins with p+k zeros while the corresponding part in the second half has only p zeros. This mismatch makes equality impossible.</p>

                <p><strong>Step 7:</strong> This contradicts the Pumping Lemma requirement that xy²z ∈ L.</p>

                <p><strong>Final Answer:</strong> The language L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is NOT regular. ∎</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 space-y-6">

        <h4 className="font-semibold text-lg">📝 Short Answer Questions</h4>

        {/* Question 1 */}
        <div>
          <p className="font-semibold">
            Question 1: Explain the difference between proof by contradiction and proof by contrapositive, including when each is most appropriate to use.
          </p>

          <details className="mt-2">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Show Sample Answer
            </summary>

            <div className="mt-3 text-sm space-y-2">
              <p>
                Proof by contrapositive is specifically for conditional statements (P → Q) and proves the logically equivalent statement ¬Q → ¬P instead. It's most appropriate when the negations of the hypothesis or conclusion are easier to work with than the original statements.
              </p>

              <p>
                Proof by contradiction is more general and works for any type of statement: you assume the negation of what you want to prove and derive a logical impossibility. It's most appropriate for impossibility claims, uniqueness proofs, or when you cannot find a direct path from hypotheses to conclusion.
              </p>

              <p>
                The key distinction is that contrapositive maintains the conditional structure and proves an equivalent statement directly, while contradiction proves the original statement by showing its negation is impossible. Contrapositive is typically cleaner when applicable, but contradiction is more versatile and can handle non-conditional statements.
              </p>
            </div>
          </details>
        </div>

        {/* Question 2 */}
        <div>
          <p className="font-semibold">
            Question 2: Why is proof by counterexample insufficient to prove a statement true, even if you find many examples supporting it? Give a concrete example to illustrate.
          </p>

          <details className="mt-2">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Show Sample Answer
            </summary>

            <div className="mt-3 text-sm space-y-2">
              <p>
                Proof by counterexample can only disprove universal claims, not prove them, because of the logical asymmetry in universal quantification. A universal statement "for all x, P(x)" asserts that P holds for infinitely many (or at least many) values, so checking finite examples—even millions—leaves infinitely many unchecked cases.
              </p>

              <p>
                A classic example is the conjecture "all numbers of the form 2^(2^n) + 1 are prime" (Fermat numbers). For n = 0, 1, 2, 3, 4, we get 3, 5, 17, 257, 65537—all prime! This held for every tested case for centuries.
              </p>

              <p>
                But when n = 5, we get:
                <br />2³² + 1 = 4,294,967,297 = 641 × 6,700,417,
                <br />which is composite.
              </p>

              <p>
                This single counterexample disproved the conjecture that seemed true for all tested cases. This illustrates why examples support but don't prove: they can never cover all cases, while a single counterexample definitively disproves universality.
              </p>
            </div>
          </details>
        </div>

        {/* Question 3 */}
        <div>
          <p className="font-semibold">
            Question 3: Describe a scenario in automata theory where proof by construction is not just sufficient but actually more valuable than a non-constructive existence proof.
          </p>

          <details className="mt-2">
            <summary className="cursor-pointer font-semibold text-blue-600">
              Show Sample Answer
            </summary>

            <div className="mt-3 text-sm space-y-2">
              <p>
                In automata theory, proving closure properties of regular languages through construction is far more valuable than non-constructive proofs.
              </p>

              <p>
                For example, when proving "regular languages are closed under concatenation," a constructive proof explicitly builds an NFA for L₁·L₂ from NFAs for L₁ and L₂.
              </p>

              <p>
                This construction becomes a reusable algorithm: compiler designers can implement this exact construction to handle concatenation in regular expressions. Students can apply this construction to solve problems. The proof itself becomes a tool, not just a logical argument.
              </p>

              <p>
                In contrast, a non-constructive proof might use the Myhill-Nerode theorem to argue concatenation preserves regularity without building the automaton. While valid, this provides no practical method to obtain the concatenation automaton.
              </p>

              <p>
                In computer science, where proofs often correspond to algorithms, constructive proofs are typically preferred because they provide both theoretical understanding and practical implementation.
              </p>
            </div>
          </details>
        </div>

      </div>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📊 Comparison & Analysis</h3>
        <p className="mb-4">Understanding when to apply each proof technique is crucial for efficient problem-solving. Different proof methods have different strengths, weaknesses, and appropriate use cases. This comparison will help you choose the right tool for each proof task.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2">Aspect</th>
                <th className="border border-gray-300 p-2">Proof by Contradiction</th>
                <th className="border border-gray-300 p-2">Proof by Contrapositive</th>
                <th className="border border-gray-300 p-2">Proof by Construction</th>
                <th className="border border-gray-300 p-2">Proof by Counterexample</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Definition</td>
                <td className="border border-gray-300 p-2">Assume negation of claim, derive logical impossibility, conclude original claim true</td>
                <td className="border border-gray-300 p-2">Prove conditional P → Q by proving ¬Q → ¬P (logically equivalent)</td>
                <td className="border border-gray-300 p-2">Prove existence by explicitly building an object satisfying requirements</td>
                <td className="border border-gray-300 p-2">Disprove universal claim by finding single example where claim fails</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Advantages</td>
                <td className="border border-gray-300 p-2">✓ Works for any type of statement<br />✓ Powerful for impossibility claims<br />✓ Often reveals deep insights<br />✓ Essential for undecidability proofs</td>
                <td className="border border-gray-300 p-2">✓ Often simpler than direct proof<br />✓ Logically equivalent to original<br />✓ Useful when negations are simpler<br />✓ Clean and direct approach</td>
                <td className="border border-gray-300 p-2">✓ Provides explicit algorithm/example<br />✓ Practical and implementable<br />✓ Construction itself is valuable<br />✓ Preferred in CS for existence claims</td>
                <td className="border border-gray-300 p-2">✓ Most efficient disproof method<br />✓ Only needs one example<br />✓ Decisive and conclusive<br />✓ Easy to verify</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Disadvantages</td>
                <td className="border border-gray-300 p-2">✗ Can be complex to execute<br />✗ Sometimes harder to follow<br />✗ May not provide constructive insight<br />✗ Requires finding the right contradiction</td>
                <td className="border border-gray-300 p-2">✗ Only works for conditionals<br />✗ Students confuse with converse<br />✗ Not applicable to all statements<br />✗ Limited scope</td>
                <td className="border border-gray-300 p-2">✗ May be difficult to find construction<br />✗ Can be time-consuming<br />✗ Requires creativity and insight<br />✗ Not always possible for all existence claims</td>
                <td className="border border-gray-300 p-2">✗ Only disproves, never proves<br />✗ Finding counterexample can be hard<br />✗ Doesn't explain why claim fails generally<br />✗ No positive information gained</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Best Use Case</td>
                <td className="border border-gray-300 p-2">Proving non-regularity of languages, undecidability results, irrationality proofs, uniqueness claims</td>
                <td className="border border-gray-300 p-2">Conditional statements where negations are simpler (divisibility, evenness, properties of numbers)</td>
                <td className="border border-gray-300 p-2">Closure properties of languages, building automata, algorithm design, existence of computational models</td>
                <td className="border border-gray-300 p-2">Disproving claims like "all CFLs are regular", "all algorithms terminate", testing hypotheses</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Worst Case Scenario</td>
                <td className="border border-gray-300 p-2">When direct proof is straightforward (unnecessary complexity), or when constructive example is needed</td>
                <td className="border border-gray-300 p-2">Non-conditional statements, statements where original form is already simplest</td>
                <td className="border border-gray-300 p-2">When object is impossible to construct explicitly, or non-constructive existence suffices</td>
                <td className="border border-gray-300 p-2">When trying to prove positive claims (impossible with counterexamples)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Example in Automata</td>
                <td className="border border-gray-300 p-2">Proving L = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'} is not regular using Pumping Lemma</td>
                <td className="border border-gray-300 p-2">If DFA M accepts w, then |w| ≥ k ⟹ If |w| &lt; k, then M doesn't accept w</td>
                <td className="border border-gray-300 p-2">Building union automaton to prove regular languages closed under union</td>
                <td className="border border-gray-300 p-2">Disproving "all regular languages are finite" with L = {'{'}0*{'}'} (infinite but regular)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">Logical Structure</td>
                <td className="border border-gray-300 p-2">Assume ¬P, derive contradiction Q ∧ ¬Q, conclude P</td>
                <td className="border border-gray-300 p-2">To prove P → Q, prove ¬Q → ¬P instead</td>
                <td className="border border-gray-300 p-2">To prove ∃x P(x), build specific x satisfying P(x)</td>
                <td className="border border-gray-300 p-2">To disprove ∀x P(x), find one x where ¬P(x)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-semibold">Complexity</td>
                <td className="border border-gray-300 p-2">High - requires identifying what contradiction to derive and logical chain to reach it</td>
                <td className="border border-gray-300 p-2">Medium - straightforward once contrapositive is formed correctly</td>
                <td className="border border-gray-300 p-2">High - requires creativity to design the construction</td>
                <td className="border border-gray-300 p-2">Low - just need to find one example (but finding it may be hard)</td>
              </tr>
            </tbody>
          </table>
        </div>

      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">When to Choose What?</h3>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <h4 className="font-semibold mb-3">Decision Guide:</h4>

          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold">Choose Proof by Contradiction when:</p>
              <p>The claim involves impossibility ("no such object exists"), uniqueness ("only one object satisfies"), or you cannot find a direct path from hypothesis to conclusion. Essential for proving languages are not regular/context-free, and for undecidability results.</p>
            </div>

            <div>
              <p className="font-semibold">Choose Proof by Contrapositive when:</p>
              <p>You have a conditional statement P → Q, and you notice that ¬P or ¬Q are simpler to work with than P or Q. Common in number theory (divisibility, parity) and when proving "if something has property X, it has property Y."</p>
            </div>

            <div>
              <p className="font-semibold">Choose Proof by Construction when:</p>
              <p>The claim is an existence statement ("there exists an automaton/algorithm/function"), especially in computer science where the construction itself is valuable. Use for closure properties, building automata, and algorithm design proofs.</p>
            </div>

            <div>
              <p className="font-semibold">Choose Proof by Counterexample when:</p>
              <p>The claim is universal ("all X have property P") and you want to disprove it. One counterexample suffices. Use for testing hypotheses and disproving overly general claims.</p>
            </div>
          </div>
        </div>

        <div className="my-8 p-8 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="text-center text-xl font-bold mb-4 text-gray-800">Proof Technique Selection Venn Diagram</h4>
          <p className="text-center text-lg font-semibold mb-6">Types of Statements & Appropriate Proofs</p>

          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4">
              <p className="font-semibold text-center">Existence</p>
              <p className="text-center text-sm">∃x P(x)</p>
              <p className="text-center text-sm mt-2">Use: <strong>Construction</strong></p>
            </div>

            <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4">
              <p className="font-semibold text-center">Universal</p>
              <p className="text-center text-sm">∀x P(x)</p>
              <p className="text-center text-sm mt-2">Disprove with</p>
              <p className="text-center text-sm"><strong>Counterexample</strong></p>
            </div>

            <div className="bg-green-100 border-2 border-green-500 rounded-lg p-4">
              <p className="font-semibold text-center">Conditional</p>
              <p className="text-center text-sm">P → Q</p>
              <p className="text-center text-sm mt-2">Use: <strong>Contrapositive</strong></p>
              <p className="text-center text-sm">or <strong>Contradiction</strong></p>
            </div>

            <div className="bg-purple-100 border-2 border-purple-500 rounded-lg p-4">
              <p className="font-semibold text-center">Impossibility</p>
              <p className="text-center text-sm">¬∃x P(x)</p>
              <p className="text-center text-sm mt-2">Use: <strong>Contradiction</strong></p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border-2 border-yellow-500 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-center font-semibold">General</p>
            <p className="text-center text-sm mt-1"><strong>Contradiction</strong> works for all</p>
          </div>

          <p className="text-center mt-6 text-sm italic text-gray-600">Choose technique based on statement structure and what you're proving/disproving</p>
          <p className="text-center text-sm italic text-gray-600">Figure 8: Statement types determine which proof technique is most appropriate</p>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">⚠️ Common Pitfalls & How to Avoid Them</h3>
        <p className="mb-4">Learn from common mistakes students make when applying these proof techniques. Understanding these pitfalls will help you avoid them in exams and practical applications.</p>

        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #1: Confusing Contrapositive with Converse</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> When given "If P then Q," students write the converse "If Q then P" thinking it's the contrapositive, then proceed to prove the converse instead of the original statement.</p>
            <p className="text-sm mt-2"><strong>Why it's wrong:</strong> The converse is NOT logically equivalent to the original statement. For example, "If it rains, the ground is wet" is true, but the converse "If the ground is wet, it rained" is false (could be a sprinkler). Only the contrapositive (¬Q → ¬P) is equivalent.</p>
            <p className="text-sm mt-2"><strong>Consequences:</strong> The "proof" is invalid because you proved a different statement. Even if your proof of the converse is correct, you haven't proven the original claim.</p>
            <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Always write out the contrapositive carefully: negate BOTH the hypothesis and conclusion, and SWAP their positions. Use the formula: (P → Q) ⟺ (¬Q → ¬P). Double-check that you have negations of both parts.</p>
            <p className="text-sm mt-2"><strong>Example:</strong> Original: "If n² is even, then n is even." Contrapositive (correct): "If n is odd, then n² is odd." Converse (wrong): "If n is even, then n² is even." The converse happens to be true in this case, but it's a different statement!</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #2: Assuming You've Reached a Contradiction Too Early</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> In proof by contradiction, students assume the negation of the claim, derive something that seems "weird" or "unexpected," and immediately declare they've found a contradiction without checking if it's truly logically impossible.</p>
            <p className="text-sm mt-2"><strong>Why it's wrong:</strong> A contradiction must be a logical impossibility—a statement of the form "X ∧ ¬X" (both X and not-X are true simultaneously). Something being counterintuitive, unlikely, or having large/infinite values is NOT a contradiction. For example, deriving that a set is infinite is not a contradiction—infinite sets exist!</p>
            <p className="text-sm mt-2"><strong>Consequences:</strong> The proof is incomplete or invalid. Examiners will mark this as incorrect reasoning.</p>
            <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Clearly identify what the contradiction is. State explicitly which two contradictory facts you've derived. Check that they truly cannot both be true. Common valid contradictions: "n is both even and odd," "L is finite and infinite," "M has both 5 states and 7 states," or deriving a false statement like "0 = 1."</p>
            <p className="text-sm mt-2"><strong>Example:</strong> When proving L = {'{'}0ⁿ1ⁿ{'}'} is not regular, the contradiction is: "By Pumping Lemma, xy²z ∈ L" (because we assumed L is regular) AND "xy²z has unequal numbers of 0s and 1s, so xy²z ∉ L" (by definition of L). These directly contradict each other.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #3: Using Examples to Prove Universal Statements</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> To prove "all regular languages satisfy property P," students show that several specific regular languages satisfy P, then conclude the universal statement is proven.</p>
            <p className="text-sm mt-2"><strong>Why it's wrong:</strong> Examples—even many examples—only demonstrate that some instances satisfy a property. They cannot prove universal statements because they don't cover all possible cases. There could be millions of cases that work, but a single case that fails disproves the universal claim.</p>
            <p className="text-sm mt-2"><strong>Consequences:</strong> The proof is logically invalid. Universal claims require universal proofs (direct proof, induction, contradiction covering all cases), not examples.</p>
            <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> For universal statements, use proof techniques that cover all cases: direct proof with arbitrary element, mathematical induction, or proof by contradiction. Examples are useful for building intuition and testing hypotheses, but they're not proofs. Conversely, remember that ONE counterexample CAN disprove a universal statement.</p>
            <p className="text-sm mt-2"><strong>Example:</strong> To prove "all regular languages are closed under complement," you cannot just show that {'{'}0*{'}'} and {'{'}1*{'}'} have regular complements. You must prove that FOR ANY regular language L (recognized by some DFA M), you can construct a DFA M' recognizing L's complement (swap accepting and non-accepting states).</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #4: Incomplete Constructions</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> In proof by construction, students sketch a partial design or give a vague description like "we build a DFA that tracks the property," without specifying all components (states, transitions, start state, accepting states) or proving the construction is correct.</p>
            <p className="text-sm mt-2"><strong>Why it's wrong:</strong> Proof by construction requires complete, explicit specification. Someone else should be able to build the exact object from your description. Vague or incomplete descriptions leave gaps that may hide errors or impossibilities.</p>
            <p className="text-sm mt-2"><strong>Consequences:</strong> The construction may not actually work, or the proof is incomplete. Examiners want to see full details.</p>
            <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> For automata constructions, explicitly state: (1) Q (set of states), (2) Σ (alphabet), (3) δ (transition function—define for every state and symbol), (4) q₀ (start state), (5) F (accepting states). Then prove correctness by showing your construction recognizes exactly the claimed language. Include verification of key cases.</p>
            <p className="text-sm mt-2"><strong>Example:</strong> Wrong: "To recognize L₁ ∪ L₂, build a DFA that simulates both M₁ and M₂." This is too vague. Correct: "Construct M = (Q₁ × Q₂, Σ, δ, (q₀₁, q₀₂), (F₁ × Q₂) ∪ (Q₁ × F₂)) where δ((p,q), a) = (δ₁(p,a), δ₂(q,a)). Proof: By induction on |w|, M ends in state (p,q) after reading w iff M₁ ends in p and M₂ ends in q..."</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">🚫 Pitfall #5: Misusing Pumping Lemma in Contradiction Proofs</h4>
            <p className="text-sm mt-2"><strong>What students do wrong:</strong> When using the Pumping Lemma to prove non-regularity via contradiction, students either: (a) choose a string that's too simple and can actually be pumped successfully, (b) don't properly use the constraint |xy| ≤ p, or (c) fail to check that the pumped string is actually outside the language.</p>
            <p className="text-sm mt-2"><strong>Why it's wrong:</strong> The Pumping Lemma is adversarial: you choose the string, but the "adversary" chooses the decomposition (subject to constraints). If you don't choose your string strategically, the adversary can find a decomposition that works, failing to produce the needed contradiction.</p>
            <p className="text-sm mt-2"><strong>Consequences:</strong> The proof fails—you don't derive a contradiction, so you haven't proven non-regularity.</p>
            <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Choose a string with clear, regular structure (like 0^p 1^p) where pumping will obviously break the language's requirements. Use the constraint |xy| ≤ p to determine what y must be (e.g., if |xy| ≤ p and string starts with p 0s, then y is all 0s). Then show that pumping y violates the language definition (e.g., creates unequal counts).</p>
            <p className="text-sm mt-2"><strong>Example for L = {'{'}0ⁿ1ⁿ{'}'}:</strong> String 0^p 1^p is good because y must be in first p characters (all 0s), so pumping adds only 0s, breaking the n=n requirement. String 01 is bad (too short if p &gt; 2). String (01)^p is bad because y might span the pattern and pumping could still satisfy the language.</p>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
          <h4 className="font-semibold">💡 Exam Tips:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
            <li><strong>Identify statement type first:</strong> Before choosing a proof technique, classify the statement (conditional, universal, existence, impossibility). This determines which techniques apply.</li>
            <li><strong>Show your logical structure:</strong> Make it clear what technique you're using. Write "Proof by Contradiction: Assume ¬P" or "Proof by Contrapositive: We prove ¬Q → ¬P" so graders know your approach.</li>
            <li><strong>Define variables clearly:</strong> When doing constructions or algebraic manipulations, define all variables (e.g., "Let k be an integer such that..."). Undefined variables lose points.</li>
            <li><strong>In contradiction, state the contradiction explicitly:</strong> Don't just say "contradiction!" Write out both contradictory statements: "We derived X, but also ¬X, which is impossible."</li>
            <li><strong>Check logical equivalence:</strong> When using contrapositive, verify you're proving the actual contrapositive (¬Q → ¬P), not the converse or inverse.</li>
            <li><strong>For constructions, verify correctness:</strong> After building an automaton or algorithm, prove it works. Show at least one example execution and argue why it handles all cases.</li>
            <li><strong>Time management:</strong> Proof by construction often takes longer than other techniques. Budget your exam time accordingly—if a construction seems too complex, check if another proof method works.</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📄 Quick Reference Cheat Sheet</h3>
        <p className="mb-4">Save this page for quick review! Here's everything you need to remember at a glance.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">🔑 Key Definitions</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Contradiction:</strong> Assume ¬P, derive impossibility, conclude P true</li>
              <li><strong>Contrapositive:</strong> Prove ¬Q → ¬P instead of P → Q (equivalent)</li>
              <li><strong>Construction:</strong> Prove existence by building explicit example</li>
              <li><strong>Counterexample:</strong> Disprove ∀x P(x) by finding one x where ¬P(x)</li>
              <li><strong>Converse:</strong> Q → P (NOT equivalent to P → Q)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">📐 Important Logical Equivalences</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Contrapositive:</strong> (P → Q) ≡ (¬Q → ¬P)</li>
              <li><strong>NOT Equivalent:</strong> (P → Q) ≢ (Q → P) [converse]</li>
              <li><strong>NOT Equivalent:</strong> (P → Q) ≢ (¬P → ¬Q) [inverse]</li>
              <li><strong>De Morgan's:</strong> ¬(P ∧ Q) ≡ (¬P ∨ ¬Q)</li>
              <li><strong>De Morgan's:</strong> ¬(P ∨ Q) ≡ (¬P ∧ ¬Q)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚙️ Proof Strategy Selection</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Conditional (P → Q):</strong> Try contrapositive if negations simpler</li>
              <li><strong>Existence (∃x):</strong> Use construction (build explicit x)</li>
              <li><strong>Universal (∀x) to disprove:</strong> Find counterexample</li>
              <li><strong>Impossibility:</strong> Use contradiction</li>
              <li><strong>When stuck:</strong> Try contradiction as last resort</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">✅ When to Use Each Technique</h4>
            <ul className="text-sm space-y-1">
              <li><strong>Contradiction:</strong> Non-regularity proofs (with Pumping Lemma), uniqueness and impossibility claims, when direct proof is unclear</li>
              <li><strong>Contrapositive:</strong> Conditional statements, when negations are simpler</li>
              <li><strong>Construction:</strong> Closure properties, building automata, existence proofs</li>
              <li><strong>Counterexample:</strong> Disproving universal claims</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">⚠️ Common Mistakes</h4>
            <ul className="text-sm space-y-1">
              <li>❌ Confusing contrapositive with converse</li>
              <li>❌ Claiming contradiction without logical impossibility</li>
              <li>❌ Using examples to prove universal claims</li>
              <li>❌ Incomplete constructions (missing components)</li>
              <li>❌ Poor string choice in Pumping Lemma proofs</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">📋 Proof Template - Contradiction</h4>
            <ol className="text-sm space-y-1 list-decimal ml-4">
              <li>"Proof by Contradiction: Assume ¬P"</li>
              <li>Apply known facts and logical rules</li>
              <li>"This implies [statement X]"</li>
              <li>"But we also have [statement ¬X]"</li>
              <li>"Contradiction! Therefore P is true. ∎"</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">🛠️ Hands-On Lab Exercise</h3>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded">
          <h4 className="font-semibold text-lg">Multi-Technique Proof Challenge</h4>

          <div className="mt-4 space-y-4">
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">📋 Objective:</h5>
              <p className="text-sm mt-1">Apply all four proof techniques (contradiction, contrapositive, construction, counterexample) to analyze properties of regular languages and automata. This comprehensive exercise will test your ability to choose and execute the appropriate proof method for different types of claims.</p>
              <p className="text-sm mt-2">You will work through a series of related problems, each requiring a different proof technique, building a complete understanding of when and how to apply each method.</p>
            </div>

            <div className="bg-white p-4 rounded">
              <p className="font-semibold">⏱️ Estimated Time: 60-75 minutes</p>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">🎯 Learning Goals:</h5>
              <ul className="text-sm mt-2 list-disc ml-6 space-y-1">
                <li>Recognize which proof technique is appropriate for different statement types</li>
                <li>Execute complete, rigorous proofs using all four additional proof forms</li>
                <li>Apply proof techniques specifically to automata theory and formal languages</li>
                <li>Develop intuition for proof strategy selection</li>
                <li>Practice writing clear, well-structured mathematical arguments</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">📝 Instructions:</h5>

              <div className="text-sm mt-2 space-y-3">
                <div>
                  <p className="font-semibold">Problem 1: Proof by Contradiction</p>
                  <p>Prove that the language L = {'{'}0ⁱ1ʲ | i &gt; j{'}'} is NOT regular. Use proof by contradiction combined with the Pumping Lemma. Choose your string strategically and clearly identify the contradiction.</p>
                  <p className="text-gray-600 italic mt-1">Hint: Consider string 0^(p+1) 1^p where p is the pumping length.</p>
                </div>

                <div>
                  <p className="font-semibold">Problem 2: Proof by Contrapositive</p>
                  <p>Prove: "If a DFA M with n states accepts at least one string of length ≥ n, then M accepts infinitely many strings." Use proof by contrapositive.</p>
                  <p className="text-gray-600 italic mt-1">Hint: The contrapositive is "If M accepts only finitely many strings, then M accepts no strings of length ≥ n."</p>
                </div>

                <div>
                  <p className="font-semibold">Problem 3: Proof by Construction</p>
                  <p>Prove that regular languages are closed under intersection by constructing a DFA for L₁ ∩ L₂ given DFAs M₁ and M₂ for L₁ and L₂. Provide complete construction (all components) and verify correctness.</p>
                  <p className="text-gray-600 italic mt-1">Hint: Use product construction, but modify accepting states appropriately for intersection.</p>
                </div>

                <div>
                  <p className="font-semibold">Problem 4: Proof by Counterexample</p>
                  <p>Disprove the claim: "If L₁ ⊆ L₂ and L₂ is regular, then L₁ is regular." Find a counterexample where L₁ ⊆ L₂, L₂ is regular, but L₁ is not regular.</p>
                  <p className="text-gray-600 italic mt-1">Hint: Consider L₂ = {'{'}0,1{'}'}* (all strings) and L₁ = {'{'}0ⁿ1ⁿ | n ≥ 0{'}'}.</p>
                </div>

                <div>
                  <p className="font-semibold">Problem 5: Technique Selection Challenge</p>
                  <p>For each of the following claims, identify which proof technique is most appropriate and briefly justify your choice (you don't need to provide the full proof):</p>
                  <ul className="list-disc ml-6 mt-1">
                    <li>(a) If L is infinite and regular, then L contains strings of arbitrarily long length</li>
                    <li>(b) There exists a DFA that accepts exactly three strings</li>
                    <li>(c) The language L = {'{'}wwᴿ | w ∈ {'{'}0,1{'}'}*{'}'} is not regular</li>
                    <li>(d) All minimal DFAs have at most 2ⁿ states for alphabet size n</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">Reflection and Analysis</h5>
              <p className="text-sm mt-1">After completing the problems, write a brief analysis (150-200 words) reflecting on:</p>
              <ul className="text-sm list-disc ml-6 mt-1">
                <li>Which proof technique did you find most challenging and why?</li>
                <li>What strategies helped you choose the right technique?</li>
                <li>How do these techniques relate to each other?</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">📦 What to Submit:</h5>
              <p className="text-sm mt-1">Prepare a document containing:</p>
              <ul className="text-sm list-disc ml-6 mt-1">
                <li>Complete written proofs for Problems 1-4</li>
                <li>Technique identification and justification for Problem 5</li>
                <li>Reflection paragraph from Problem 6</li>
                <li>Any diagrams or automata you construct (for Problem 3)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">✅ Success Criteria:</h5>
              <p className="text-sm mt-1">Your solutions should demonstrate:</p>
              <ul className="text-sm list-disc ml-6 mt-1">
                <li>Correct identification and application of proof techniques</li>
                <li>Clear logical structure and explicit statement of assumptions</li>
                <li>Complete constructions with all necessary components</li>
                <li>Proper verification that constructions and counterexamples work</li>
                <li>Clear identification of contradictions in contradiction proofs</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold">🎓 Grading Rubric (100 points total):</h5>
              <ul className="text-sm mt-2 space-y-1">
                <li><strong>Problem 1 (Contradiction): 25 points</strong> (strategic string choice, correct derivation, clear contradiction)</li>
                <li><strong>Problem 2 (Contrapositive): 20 points</strong> (correct contrapositive formation, complete proof)</li>
                <li><strong>Problem 3 (Construction): 25 points</strong> (complete DFA specification, correctness verification)</li>
                <li><strong>Problem 4 (Counterexample): 15 points</strong> (valid counterexample, verification)</li>
                <li><strong>Problem 5 (Technique Selection): 10 points</strong> (correct identification, sound justification)</li>
                <li><strong>Reflection: 5 points</strong> (thoughtful analysis, clear writing)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3 className="text-xl font-semibold mb-4">📚 Problem-Solving Practice</h3>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <h4 className="font-semibold text-lg">📘 Easy Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove that if n is an integer and n² is divisible by 4, then n is even. Use proof by contrapositive.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <p><strong>Step 1:</strong> Identify the conditional structure. P: "n² is divisible by 4", Q: "n is even"</p>
                <p><strong>Step 2:</strong> Form the contrapositive: ¬Q → ¬P, which is "If n is odd, then n² is not divisible by 4"</p>
                <p><strong>Step 3:</strong> Assume n is odd. Then n = 2k + 1 for some integer k.</p>
                <p><strong>Step 4:</strong> Calculate n² = (2k + 1)² = 4k² + 4k + 1 = 4(k² + k) + 1</p>
                <p><strong>Step 5:</strong> n² = 4m + 1 where m = k² + k. This means n² leaves remainder 1 when divided by 4, so n² is NOT divisible by 4.</p>
                <p><strong>Step 6:</strong> We proved the contrapositive, so the original statement is true.</p>
                <p className="font-semibold mt-2">Final Answer: The statement is proven via contrapositive. If n² is divisible by 4, then n must be even</p>
              </div>
            </details>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h4 className="font-semibold text-lg">📙 Medium Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Prove or disprove: "If L₁ and L₂ are regular languages over the same alphabet Σ, and L₁ ∩ L₂ = ∅ (empty), then L₁ and L₂ must be finite languages."</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-yellow-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <p><strong>Approach:</strong> This is a universal claim that we should attempt to disprove with a counterexample.</p>
                <p className="mt-2"><strong>Counterexample:</strong> Let Σ = {'{'}0, 1{'}'}. Define L₁ = {'{'}w | w contains an even number of 0s{'}'} and L₂ = {'{'}w | w contains an odd number of 0s{'}'}</p>
                <p><strong>Verification - Both are regular:</strong> L₁ and L₂ are both regular (can be recognized by simple 2-state DFAs)</p>
                <p><strong>Verification - Disjoint:</strong> L₁ ∩ L₂ = ∅ because a string cannot simultaneously have both even and odd number of 0s</p>
                <p><strong>Verification - Infinite:</strong> Both L₁ and L₂ are infinite. For example, L₁ contains ε, 00, 0000, ... (infinitely many strings)</p>
                <p><strong>Conclusion:</strong> We found regular languages that are disjoint but both infinite, disproving the claim.</p>
                <p className="font-semibold mt-2">Final Answer: The claim is FALSE. Counterexample: L₁ = {'{'}even number of 0s{'}'}, L₂ = {'{'}odd number of 0s{'}'}. Both regular, disjoint, but infinite.</p>
              </div>
            </details>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-lg">📕 Hard Problem</h4>
            <p className="mt-2"><strong>Problem:</strong> Use proof by contradiction to prove that the language L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} (strings that are concatenations of a string with itself, like "0101" or "11111111") is NOT regular.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-red-600">Show Solution</summary>
              <div className="mt-3 text-sm space-y-2">
                <p><strong>Solution:</strong></p>
                <p><strong>Approach:</strong> Assume L is regular and apply the Pumping Lemma to derive a contradiction.</p>
                <p className="mt-2"><strong>Step 1:</strong> Assume L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is regular.</p>
                <p><strong>Step 2:</strong> By the Pumping Lemma, there exists a pumping length p such that any string s ∈ L with |s| ≥ p can be written as s = xyz where |xy| ≤ p, |y| &gt; 0, and xy<sup>i</sup>z ∈ L for all i ≥ 0.</p>
                <p><strong>Step 3:</strong> Choose s = 0<sup>p</sup> 1<sup>p</sup> 0<sup>p</sup> 1<sup>p</sup> (p zeros, p ones, p zeros, p ones). This is in L because s = ww where w = 0<sup>p</sup> 1<sup>p</sup>. Also |s| = 4p ≥ p.</p>
                <p><strong>Step 4:</strong> Since |xy| ≤ p and s starts with p zeros, both x and y consist only of 0s from the first block. So y = 0<sup>k</sup> for some 1 ≤ k ≤ p.</p>
                <p><strong>Step 5:</strong> Consider xy²z. This adds k more 0s to the first block, giving 0<sup>(p+k)</sup> 1<sup>p</sup> 0<sup>p</sup> 1<sup>p</sup>. For this to be in L, it must equal ww for some w. This would require w = 0<sup>((p+k)/2)</sup> 1<sup>(p/2)</sup> 0<sup>(p/2)</sup> 1<sup>(p/2)</sup>, but (p+k)/2 is not an integer if k is odd, and even if k is even, the structure doesn't match ww format.</p>
                <p><strong>Step 6:</strong> More rigorously: If xy²z = ww, then |xy²z| = 4p + k, so |w| = (4p + k)/2 = 2p + k/2. The first 2p + k/2 characters would need to equal the last 2p + k/2 characters. But the first part has p+k zeros at the start, while the corresponding position in the second half has only p zeros. Contradiction!</p>
                <p><strong>Step 7:</strong> Our assumption that L is regular led to contradiction. Therefore, L is NOT regular.</p>
                <p className="font-semibold mt-2">Final Answer: The language L = {'{'}ww | w ∈ {'{'}0,1{'}'}*{'}'} is NOT regular, proven by contradiction using the Pumping Lemma.</p>
              </div>
            </details>
          </div>
        </div>

        <h4 className="mt-8 font-semibold text-lg">Short Answer Questions</h4>

        <div className="space-y-6 mt-4">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="font-semibold">Question 1:</p>
            <p className="mt-2">Explain the difference between proof by contradiction and proof by contrapositive, including when each is most appropriate to use.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Sample Answer</summary>
              <div className="mt-3 text-sm space-y-2">
                <p>Proof by contrapositive is specifically for conditional statements (P → Q) and proves the logically equivalent statement ¬Q → ¬P instead. It's most appropriate when the negations of the hypothesis or conclusion are easier to work with than the original statements.</p>
                <p>Proof by contradiction is more general and works for any type of statement: you assume the negation of what you want to prove and derive a logical impossibility. It's most appropriate for impossibility claims, uniqueness proofs, or when you cannot find a direct path from hypotheses to conclusion.</p>
                <p>The key distinction is that contrapositive maintains the conditional structure and proves an equivalent statement directly, while contradiction proves the original statement by showing its negation is impossible. Contrapositive is typically cleaner when applicable, but contradiction is more versatile and can handle non-conditional statements.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="font-semibold">Question 2:</p>
            <p className="mt-2">Why is proof by counterexample insufficient to prove a statement true, even if you find many examples supporting it? Give a concrete example to illustrate.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Sample Answer</summary>
              <div className="mt-3 text-sm space-y-2">
                <p>Proof by counterexample can only disprove universal claims, not prove them, because of the logical asymmetry in universal quantification. A universal statement "for all x, P(x)" asserts that P holds for infinitely many (or at least many) values, so checking finite examples—even millions—leaves infinitely many unchecked cases.</p>
                <p>A classic example is the conjecture "all numbers of the form 2<sup>(2<sup>n</sup>)</sup> + 1 are prime" (Fermat numbers). For n = 0, 1, 2, 3, 4, we get 3, 5, 17, 257, 65537—all prime! This held for every tested case for centuries. But when n = 5, we get 2<sup>32</sup> + 1 = 4,294,967,297 = 641 × 6,700,417, which is composite. This single counterexample disproved the conjecture that seemed true for all tested cases.</p>
                <p>This illustrates why examples support but don't prove: they can never cover all cases, while a single counterexample definitively disproves universality.</p>
              </div>
            </details>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <p className="font-semibold">Question 3:</p>
            <p className="mt-2">Describe a scenario in automata theory where proof by construction is not just sufficient but actually more valuable than a non-constructive existence proof.</p>
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-blue-600">Show Sample Answer</summary>
              <div className="mt-3 text-sm space-y-2">
                <p>In automata theory, proving closure properties of regular languages through construction is far more valuable than non-constructive proofs. For example, when proving "regular languages are closed under concatenation," a constructive proof explicitly builds an NFA for L₁·L₂ from NFAs for L₁ and L₂.</p>
                <p>This construction becomes a reusable algorithm: compiler designers can implement this exact construction to handle concatenation in regular expressions. Students can apply this construction to solve problems. The proof itself becomes a tool, not just a logical argument.</p>
                <p>In contrast, a non-constructive proof might use the Myhill-Nerode theorem to argue concatenation preserves regularity without building the automaton. While valid, this provides no practical method to obtain the concatenation automaton. In computer science, where proofs often correspond to algorithms, constructive proofs are typically preferred because they provide both theoretical understanding and practical implementation.</p>
              </div>
            </details>
          </div>
        </div>
      </section>


      <section className="content-section mt-12 bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100">
        <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-tighter italic">Module 1.2 Mastery Quiz</h2>
        <div className="bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm transition-all hover:shadow-md">
          <Quiz
            title="Additional Forms of Proof Quiz"
            questions={quizQuestions}
            subject="FLAT"
            unitId={1}
            moduleId={2}
          />
        </div>
      </section>

      <div className="mt-16 py-8 border-t text-center opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[1em]">Unit 1.2 | Module Complete</p>
      </div>

    </div>
  );
};

export default Module1_2;
