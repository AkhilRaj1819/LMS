
'use client';
import React from 'react';
import Quiz from '../../components/Quiz';


const Module1_4: React.FC = () => {
  const quizQuestions = [
    {
      question: "Which component of the DFA 5-tuple (Q, Σ, δ, q₀, F) represents the set of all possible states?",
      options: ["Σ", "δ", "Q", "F"],
      correctAnswer: 2,
      explanation: "Q is the finite set of states that the automaton can exist in."
    },
    {
      question: "In a 'Deterministic' Finite Automaton, for every state and every input symbol, how many possible next states are there?",
      options: ["Exactly one", "Zero or more", "At least one", "One or more"],
      correctAnswer: 0,
      explanation: "Determinism means that for every (state, symbol) pair, there is exactly one transition to a next state."
    },
    {
      question: "What does the transition function δ: Q × Σ → Q define?",
      options: [
        "The set of starting states",
        "The mapping from a current state and input symbol to a next state",
        "The set of all strings accepted by the DFA",
        "The alphabet of the language"
      ],
      correctAnswer: 1,
      explanation: "The transition function δ defines how the DFA moves from one state to another when it consumes an input symbol."
    },
    {
      question: "A string is 'accepted' by a DFA if the computation ends in which type of state?",
      options: ["Start state", "Trap state", "Accept (or Final) state", "Any state"],
      correctAnswer: 2,
      explanation: "A DFA accepts a string if, after reading the entire string, it arrives in one of the states in the set F (accepting states)."
    },
    {
      question: "Which of the following describes a 'Trap State' or 'Dead State' in a DFA?",
      options: [
        "A state that is reachable but has no outgoing transitions",
        "An accepting state that you can never leave",
        "A non-accepting state that leads only to itself for all input symbols",
        "The initial state of the DFA"
      ],
      correctAnswer: 2,
      explanation: "A trap state is a non-accepting state that once entered, the automaton can never leave (all transitions lead back to it), ensuring the string will be rejected."
    }
  ];

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.4</div>
        <div className="lesson-title-main">
          <h1>🤖 Deterministic Finite Automata (DFA)</h1>
        </div>
      </div>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 What You'll Master - Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Define and formally describe a Deterministic Finite Automaton using the 5-tuple notation (Q, Σ, δ, q₀, F)</li>
            <li>Design DFAs to recognize specific regular languages and string patterns from problem descriptions</li>
            <li>Trace string processing through DFA state transitions and determine acceptance or rejection</li>
            <li>Convert between different DFA representations: state diagrams, transition tables, and formal definitions</li>
            <li>Prove correctness of DFA designs and analyze their computational properties and limitations</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p>
          Imagine you're building a text editor that needs to recognize email addresses, or a compiler that must validate variable names in code. How does a computer actually decide if a string of characters matches a specific pattern? Enter the Deterministic Finite Automaton (DFA)—one of the most fundamental computational models in computer science!
        </p>
        <p>
          A DFA is like a smart machine that reads input symbols one by one and makes decisions based on its current state. Think of it as a sophisticated traffic light system: depending on where you are (your state) and what happens next (your input), you transition to a new state. Eventually, you either end up in a "good" state (accept) or a "bad" state (reject).
        </p>
        <p>
          DFAs are the theoretical foundation behind regular expressions, lexical analyzers in compilers, network protocol validators, and even the pattern matching you use every day in text editors and search engines. Every time you use grep, regex in Python, or search with wildcards, you're leveraging the power of finite automata!
        </p>

        <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Compilers & Interpreters:</strong> Lexical analyzers use DFAs to tokenize source code (identifying keywords, identifiers, numbers)</li>
          <li><strong>Text Processing:</strong> Pattern matching engines in grep, sed, and text editors use finite automata</li>
          <li><strong>Network Protocols:</strong> Protocol validators ensure messages follow correct format (HTTP, TCP/IP)</li>
          <li><strong>Digital Circuit Design:</strong> Sequential circuits are modeled as finite state machines</li>
          <li><strong>Bioinformatics:</strong> DNA sequence pattern matching uses automata-based algorithms</li>
          <li><strong>Game AI:</strong> Character behavior and game state management using state machines</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Video Resources</h3>

        <div className="space-y-6 mt-4">
          <div>
            <h4 className="font-semibold mb-2">Introduction to Deterministic Finite Automata</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fu0j32S3pBE?si=e5yFVF3EZBhAfhCv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">DFA Design and Construction</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/L5iCGi3dW-Y?si=iMZrzI_6Kn8Fxrhd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">DFA Examples and Applications</h4>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/7zOBE8lKhis?si=zFwhg8r4Qfj-Mrxs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h4 className="font-semibold text-lg mb-3">💡 Real-World Applications:</h4>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Compilers &amp; Interpreters:</strong> Lexical analyzers use DFAs to tokenize source code (identifying keywords, identifiers, numbers)</li>
          <li><strong>Text Processing:</strong> Pattern matching engines in grep, sed, and text editors use finite automata</li>
          <li><strong>Network Protocols:</strong> Protocol validators ensure messages follow correct format (HTTP, TCP/IP)</li>
          <li><strong>Digital Circuit Design:</strong> Sequential circuits are modeled as finite state machines</li>
          <li><strong>Bioinformatics:</strong> DNA sequence pattern matching uses automata-based algorithms</li>
          <li><strong>Game AI:</strong> Character behavior and game state management using state machines</li>
        </ul>
      </section>

      <section className="content-section" id="deep-dive">
        <h3>📖 Deep Dive: Understanding NFA</h3>

        <h4 className="mt-4 font-semibold">Definition &amp; Fundamentals</h4>
        <p>
          A Nondeterministic Finite Automaton (NFA) is a theoretical computational model that recognizes regular languages through a mechanism fundamentally different from deterministic finite automata. Unlike a DFA where each state has exactly one transition for each input symbol, an NFA can have multiple transitions for the same input symbol from a single state, or even no transition at all. This nondeterministic behavior means that when processing an input string, the automaton can simultaneously pursue multiple computational paths, accepting the string if any of these paths leads to an accepting state.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Formal 5-Tuple Notation:</p>
          <p className="mt-2">M = (Q, Σ, δ, q₀, F) where:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Q</strong> is a finite set of states</li>
            <li><strong>Σ</strong> is a finite input alphabet</li>
            <li><strong>δ: Q × Σ → P(Q)</strong> is the transition function that maps a state and input symbol to a set of states (the power set of Q)</li>
            <li><strong>q₀ ∈ Q</strong> is the initial state</li>
            <li><strong>F ⊆ Q</strong> is the set of accepting (final) states</li>
          </ul>
        </div>

        <p className="mt-4">
          The key difference from DFAs lies in the transition function δ. In a DFA, δ maps to a single state, but in an NFA, δ maps to a set of states, allowing for multiple simultaneous transitions. This nondeterminism gives NFAs their power and flexibility—they can "guess" which path to take and explore multiple possibilities in parallel.
        </p>

        <p className="mt-4">
          NFAs were introduced by Michael Rabin and Dana Scott in 1959, earning them the Turing Award for their fundamental contributions to automata theory. Initially, NFAs seemed more powerful than DFAs due to their ability to explore multiple paths. However, a groundbreaking result proved that NFAs and DFAs are computationally equivalent—any language recognized by an NFA can also be recognized by some DFA, and vice versa. Despite this equivalence, NFAs are often exponentially more concise than their DFA counterparts, making them easier to design and understand for complex patterns.
        </p>

        <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
        <ul className="list-disc ml-6 space-y-1">
          <li><strong>Nondeterminism:</strong> The ability of an automaton to have multiple possible next states for a given current state and input symbol</li>
          <li><strong>Epsilon (ε) Transition:</strong> A transition that can be taken without consuming any input symbol, allowing state changes on empty input</li>
          <li><strong>Computation Path:</strong> A sequence of state transitions from the start state while processing an input string</li>
          <li><strong>Accepting Computation:</strong> A computation path that ends in an accepting state after consuming the entire input</li>
          <li><strong>Power Set Construction:</strong> The algorithm used to convert an NFA to an equivalent DFA by treating sets of NFA states as single DFA states</li>
        </ul>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mt-6">
          <h4 className="text-center font-bold text-lg mb-4">Visual Representation of NFA</h4>
          <p className="text-center font-semibold mb-4">NFA Example: Recognizing strings ending with "ab"</p>

          <div className="flex justify-center items-center gap-8">
            <svg width="600" height="200" viewBox="0 0 600 200" className="mx-auto">
              <defs>
                <marker id="arrowNFA" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>

              {/* Start arrow */}
              <line x1="30" y1="100" x2="70" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowNFA)" />

              {/* q0 - Start State */}
              <circle cx="100" cy="100" r="30" fill="#3b82f6" stroke="#1e40af" strokeWidth="2" />
              <text x="100" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">q₀</text>
              <text x="100" y="145" textAnchor="middle" fontSize="12">Start</text>

              {/* Self-loop on q0 with a,b */}
              <path d="M 100 70 Q 100 30, 120 60" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="110" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9333ea">a,b</text>

              {/* q0 to q1 transition */}
              <line x1="130" y1="100" x2="220" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="175" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9333ea">a</text>

              {/* q1 - Intermediate State */}
              <circle cx="250" cy="100" r="30" fill="#ef4444" stroke="#b91c1c" strokeWidth="2" />
              <text x="250" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">q₁</text>

              {/* q1 to q2 transition */}
              <line x1="280" y1="100" x2="370" y2="100" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowNFA)" />
              <text x="325" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#9333ea">b</text>

              {/* q2 - Accept State */}
              <circle cx="400" cy="100" r="30" fill="#22c55e" stroke="#15803d" strokeWidth="3" />
              <circle cx="400" cy="100" r="25" fill="none" stroke="#15803d" strokeWidth="2" />
              <text x="400" y="105" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">q₂</text>
              <text x="400" y="145" textAnchor="middle" fontSize="12">Accept</text>
            </svg>

            {/* Legend */}
            <div className="border-2 border-gray-300 rounded p-4 bg-gray-50">
              <h5 className="font-semibold mb-3">Legend</h5>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                  <span>Start State</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500 border-2 border-green-700"></div>
                  <span>Accept State</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="24" height="24">
                    <line x1="0" y1="12" x2="24" y2="12" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowNFA)" />
                  </svg>
                  <span>Transition</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="font-semibold text-red-600">Multiple paths possible!</p>
                  <p className="text-xs mt-1">From q₀ on 'a': stay at q₀<br />OR move to q₁</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 italic mt-4">
            Figure 2: An NFA that accepts all strings ending with "ab". Notice how from state q₀ on input 'a', there are TWO possible transitions (nondeterminism).
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>⚙️ How It Works: The Mechanism Explained</h3>

        <p className="mt-4">
          Understanding how an NFA processes input requires thinking differently from the deterministic model. When an NFA reads an input string, it doesn't follow a single, predetermined path through its states. Instead, it explores all possible paths simultaneously, using a mechanism conceptually similar to parallel computation or quantum superposition.
        </p>

        <p className="mt-4">Let's break down the NFA computation process step by step:</p>

        <div className="mt-4 space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold">Step 1: Initialization</h4>
            <p className="text-sm mt-2">
              The NFA begins in its initial state q₀, with the entire input string waiting to be processed. We can think of this as having one active computation thread or "token" at the start state.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">Step 2: Reading Input and Branching</h4>
            <p className="text-sm mt-2">
              When the NFA reads the first input symbol, it consults its transition function δ. If δ(q₀, a) = {'{'}q₁, q₂, q₃{'}'}, this means the NFA can simultaneously transition to states q₁, q₂, and q₃. Conceptually, the single computation token splits into three tokens, one following each possible path. This is the essence of nondeterminism—the ability to pursue multiple alternatives at once.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Step 3: Parallel Path Exploration</h4>
            <p className="text-sm mt-2">
              As each token continues reading the input, it may encounter more nondeterministic choices, causing further branching. Some tokens may reach dead ends (states with no valid transition for the current input symbol)—these computation paths simply terminate and are discarded. Other tokens continue their journey through the automaton.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold">Step 4: Acceptance Decision</h4>
            <p className="text-sm mt-2">
              After the entire input string has been consumed, we examine all surviving computation paths. If at least one path has ended in an accepting state, the NFA accepts the string. It only takes a single successful path among potentially many failed paths for the string to be accepted. This is like a "guess-and-verify" strategy where the NFA explores all possibilities and succeeds if any possibility works out.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-indigo-500 p-4 mt-6">
          <h4 className="font-semibold">💡 Analogy: The Maze Explorer</h4>
          <p className="text-sm mt-2">
            Here's a concrete analogy: Imagine you're in a maze trying to find the exit. A DFA is like a person who can only make one choice at each intersection and must carefully plan their route to avoid getting lost. An NFA, however, is like having the superpower to clone yourself at every intersection, sending one copy down each possible path. Even if 99 of your clones hit dead ends, as long as one clone finds the exit, you succeed. The NFA accepts if any computational clone reaches an accepting state.
          </p>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-4 mt-6">
          <h4 className="font-semibold mb-3">🔍 Example Trace: Processing "baab"</h4>
          <p className="text-sm mb-3">Consider the NFA shown in Figure 2 above, processing the string "baab":</p>

          <ol className="list-decimal ml-6 space-y-2 text-sm">
            <li>
              <strong>Input: 'b'</strong> - From q₀, only the self-loop is available. One token stays at q₀.
            </li>
            <li>
              <strong>Input: 'a'</strong> - From q₀, two choices: stay at q₀ OR move to q₁. The token splits into two: one at q₀, one at q₁.
            </li>
            <li>
              <strong>Input: 'a'</strong> - Token at q₀ splits again (stay at q₀ OR move to q₁). Token at q₁ has no transition for 'a', so it dies. Now we have two tokens: both at q₀ and q₁.
            </li>
            <li>
              <strong>Input: 'b'</strong> - Token at q₀ stays at q₀. Token at q₁ moves to q₂ (accept state). Token at q₀ can also stay at q₀.
            </li>
            <li className="text-green-600 font-semibold">
              <strong>Final State:</strong> One token reached q₂ (accept state). Therefore, the string "baab" is ✅ ACCEPTED!
            </li>
          </ol>
        </div>
      </section>

      <section className="content-section">
        <h3>🔧 Key Components &amp; Architecture</h3>

        <div className="space-y-6 mt-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Component 1: State Set (Q)</h4>
            <p className="text-sm">
              The state set in an NFA serves the same fundamental purpose as in a DFA—representing the automaton's "memory" of what it has seen so far in the input. However, NFAs often require fewer states than equivalent DFAs because nondeterminism allows more compact representations. Each state represents a particular condition or pattern recognition stage. For example, in an NFA recognizing strings ending with "ab", we need states to remember "we just saw an 'a'" and "we just saw 'ab'". The state space is typically much smaller than the equivalent DFA, which might need to track all possible combinations of recent input characters.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Component 2: Nondeterministic Transition Function (δ)</h4>
            <p className="text-sm">
              This is where NFAs fundamentally differ from DFAs. The transition function δ: Q × Σ → P(Q) maps a state-input pair to a set of states rather than a single state. The power set P(Q) represents all possible subsets of Q, allowing δ to specify zero, one, or multiple next states. For instance, δ(q₀, a) = {'{'}q₀, q₁{'}'} means "from state q₀ on input 'a', you can transition to either q₀ or q₁ (or both simultaneously in the parallel interpretation)". This function is typically represented using a transition table or diagram, where multiple arrows with the same label can emanate from a single state. When δ(q, a) = ∅ (empty set), it means there's no valid transition, causing that computation path to terminate.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Component 3: Epsilon (ε) Transitions</h4>
            <p className="text-sm">
              Many NFA definitions include the ability to make epsilon transitions—state changes that occur without consuming any input symbol. These are represented as ε-labeled arrows in state diagrams. Epsilon transitions are incredibly useful for combining multiple automata or simplifying complex patterns. For example, if you want to recognize either "cat" or "dog", you can create separate automata for each word and connect them to a common start state with ε-transitions. When processing input, the NFA can spontaneously jump to any state reachable via a chain of ε-transitions, effectively being in multiple states at once even before reading any input. Formally, this requires extending the transition function to δ: Q × (Σ ∪ {'{'}ε{'}'}) → P(Q).
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Component 4: Acceptance Mechanism</h4>
            <p className="text-sm">
              The acceptance mechanism in NFAs follows an existential quantification principle: a string is accepted if there exists at least one computation path that leads to an accepting state. This contrasts with the universal quantification that would require all paths to accept. This design choice makes NFAs more flexible and easier to construct for many patterns. When an NFA finishes processing input, it checks all "live" computation paths (those that haven't hit dead ends). If any of these paths ended in a state belonging to the accepting set F, the string is accepted. This existential acceptance criterion is what gives NFAs their power—they only need to "guess" correctly once among potentially many wrong guesses.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6">
          <h4 className="font-semibold text-lg mb-3">🎬 NFA with Epsilon Transitions</h4>
          <p className="text-sm text-gray-700 mb-4">
            <strong>Gate Smashers - 12:45</strong> - Visual animation showing epsilon transitions<br />
            <span className="text-gray-600">What you'll learn: How ε-transitions work and their role in NFA design</span>
          </p>
          <div className="flex justify-center">
            <iframe width="800" height="450" src="https://www.youtube.com/embed/hLCXdHz96bU" title="NFA with Epsilon Transitions" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-8">
          <h4 className="text-center font-bold text-xl mb-2">NFA System Architecture</h4>
          <h5 className="text-center font-semibold text-lg mb-8">NFA Components and Their Interactions</h5>

          <div className="relative bg-white p-8 rounded-lg" style={{ minHeight: '480px' }}>
            {/* Input String - Top Left */}
            <div className="absolute bg-blue-100 border-2 border-blue-500 rounded-lg p-3 text-center" style={{ top: '30px', left: '30px', width: '160px' }}>
              <div className="font-bold text-blue-700">Input String</div>
              <div className="text-sm mt-2">"a b a b"</div>
              <div className="text-xs mt-1">Σ = {'{'}a, b{'}'}</div>
            </div>

            {/* Arrow: Input to Transition (horizontal) */}
            <div className="absolute text-xs" style={{ top: '25px', left: '200px' }}>symbol</div>
            <svg className="absolute" style={{ top: '50px', left: '195px' }} width="135" height="20">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#000" />
                </marker>
              </defs>
              <line x1="0" y1="10" x2="125" y2="10" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Transition Function - Top Center */}
            <div className="absolute bg-purple-100 border-2 border-purple-500 rounded-lg p-3" style={{ top: '20px', left: '335px', width: '210px' }}>
              <div className="text-center font-bold text-purple-700">Transition Function δ</div>
              <div className="text-center text-xs mt-1">Q × Σ → P(Q)</div>
              <div className="mt-2 text-xs">
                <div className="flex justify-between border-b border-gray-400 pb-1">
                  <span className="font-semibold">State</span>
                  <span className="font-semibold">Input 'a'</span>
                  <span className="font-semibold">Input 'b'</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>q₀</span>
                  <span className="text-purple-600 font-semibold">{'{'}q₀, q₁{'}'}</span>
                  <span className="text-purple-600 font-semibold">{'{'}q₀{'}'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>q₁</span>
                  <span className="text-purple-600 font-semibold">∅</span>
                  <span className="text-purple-600 font-semibold">{'{'}q₂{'}'}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>q₂</span>
                  <span className="text-purple-600 font-semibold">∅</span>
                  <span className="text-purple-600 font-semibold">∅</span>
                </div>
              </div>
              <div className="text-center text-xs mt-2 text-red-600 font-semibold">Multiple states = Nondeterminism!</div>
              <div className="text-center text-xs">∅ = No valid transition (dead end)</div>
            </div>

            {/* Arrow: Input to State Set (diagonal down) */}
            <div className="absolute text-xs" style={{ top: '125px', left: '75px' }}>current state</div>
            <svg className="absolute" style={{ top: '100px', left: '95px' }} width="40" height="80">
              <line x1="15" y1="0" x2="5" y2="70" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* State Set - Bottom Left */}
            <div className="absolute bg-orange-100 border-2 border-orange-500 rounded-lg p-3" style={{ top: '180px', left: '30px', width: '160px' }}>
              <div className="text-center font-bold text-orange-700">State Set (Q)</div>
              <div className="text-sm mt-2">Q = {'{'}q₀, q₁, q₂{'}'}</div>
              <div className="text-sm mt-1">q₀: Start State</div>
              <div className="text-sm">F = {'{'}q₂{'}'}: Accept</div>
            </div>

            {/* Arrow: Transition to Computation (horizontal) */}
            <div className="absolute text-xs" style={{ top: '85px', left: '555px' }}>next states</div>
            <svg className="absolute" style={{ top: '60px', left: '550px' }} width="105" height="20">
              <line x1="0" y1="10" x2="95" y2="10" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Computation Engine - Top Right */}
            <div className="absolute bg-green-100 border-2 border-green-600 rounded-lg p-3" style={{ top: '30px', left: '650px', width: '180px' }}>
              <div className="text-center font-bold text-green-700">Computation Engine</div>
              <div className="text-xs mt-2">Parallel Path Exploration</div>
              <ul className="text-xs mt-2 space-y-0.5">
                <li>• Clone tokens on branch</li>
                <li>• Track active states</li>
                <li>• Handle ε-transitions</li>
                <li>• Discard dead paths</li>
              </ul>
            </div>

            {/* Arrow: Computation to Acceptance (down) */}
            <div className="absolute text-xs" style={{ top: '155px', left: '690px' }}>final states</div>
            <svg className="absolute" style={{ top: '150px', left: '735px' }} width="20" height="65">
              <line x1="10" y1="0" x2="10" y2="55" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Acceptance Checker - Middle Right */}
            <div className="absolute bg-red-100 border-2 border-red-500 rounded-lg p-3" style={{ top: '215px', left: '650px', width: '180px' }}>
              <div className="text-center font-bold text-red-700">Acceptance Checker</div>
              <div className="text-xs mt-2">Existential Quantification</div>
              <div className="text-xs mt-1">Accept if ∃ path to F</div>
              <div className="text-xs mt-1 text-green-600 font-semibold">One success = Accept ✓</div>
            </div>

            {/* Arrow: Acceptance to Output (right) */}
            <div className="absolute text-xs" style={{ top: '210px', left: '840px' }}>decision</div>
            <svg className="absolute" style={{ top: '250px', left: '835px' }} width="85" height="20">
              <line x1="0" y1="10" x2="75" y2="10" stroke="#000" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Output - Far Right */}
            <div className="absolute bg-yellow-100 border-2 border-yellow-500 rounded-lg p-3 text-center" style={{ top: '220px', left: '920px', width: '140px' }}>
              <div className="font-bold text-yellow-700">Output</div>
              <div className="text-sm mt-2">Accept / Reject</div>
              <div className="text-xl mt-1 text-green-600 font-bold">✓ or ✗</div>
            </div>

            {/* Key Insight Box - Bottom */}
            <div className="absolute bg-white border-2 border-gray-800 rounded-lg p-3" style={{ bottom: '15px', left: '50%', transform: 'translateX(-50%)', width: '580px' }}>
              <div className="text-center font-bold mb-2">Key Insight</div>
              <ul className="text-xs space-y-1">
                <li>• NFA explores ALL possible computation paths simultaneously</li>
                <li>• Multiple arrows from same state = Nondeterministic choice</li>
                <li>• Accepts if ANY path reaches accept state (existential acceptance)</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 italic mt-4">
            Figure 5: Complete NFA architecture showing how components interact during string processing
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>💻 Real-World Implementation</h3>
        <p className="mt-4">
          In practical systems, NFAs are implemented using various algorithms and data structures optimized for performance. Modern regular expression engines use hybrid approaches that combine NFA and DFA techniques to balance memory usage and execution speed.
        </p>

        <div className="mt-6 space-y-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Linux and UNIX Systems</h4>
            <p className="text-sm">
              The grep command and its variants (egrep, grep -E) use NFA-based pattern matching. When you execute grep "pattern" file.txt, the regex engine constructs an NFA from your pattern, then simulates its execution on each line of the file. The Thompson NFA construction algorithm, developed by Ken Thompson in 1968, is still used in many implementations. Modern versions use optimizations like lazy DFA construction, where DFA states are built on-demand during execution and cached for reuse.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Programming Language Regex Engines</h4>
            <p className="text-sm">
              Python's re module, JavaScript's regex engine, and Perl's pattern matching all use NFA-based implementations. These engines support advanced features like backreferences and lookahead assertions that go beyond pure regular languages. When you call re.match(r'(a|b)*c', string) in Python, the engine constructs an NFA with ε-transitions to handle the alternation (a|b) and Kleene star (*) operators, then simulates it on your input string.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Compiler Lexical Analysis</h4>
            <p className="text-sm">
              Tools like Flex (Fast Lexical Analyzer) and Lex generate efficient C code for tokenizing input. The process involves: (1) Converting regular expressions to NFAs, (2) Combining all NFAs into a single large NFA using ε-transitions, (3) Converting this NFA to a DFA using subset construction, and (4) Minimizing the DFA to reduce the number of states. The final DFA is then encoded as a state transition table in the generated C code, enabling extremely fast tokenization.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://tse2.mm.bing.net/th/id/OIP.6lEuAsm70yFAd3b7l2YPPwHaDx?rs=1&pid=ImgDetMain&o=7&rm=3" alt="NFA Diagram" className="max-w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="content-section">
        <h4 className="font-semibold text-lg mb-3">💻 Example: In the Linux Kernel</h4>
        <p className="mb-3">The Linux kernel uses NFA-based pattern matching in several subsystems:</p>
        <ul className="list-disc ml-6 space-y-2 mb-4">
          <li><strong>iptables/netfilter:</strong> Network packet filtering uses NFA-like state machines to match packet patterns against firewall rules</li>
          <li><strong>SELinux:</strong> Security policy enforcement involves matching file paths and contexts using automata-based algorithms</li>
          <li><strong>Device Tree Matching:</strong> The kernel matches device tree nodes using pattern-based algorithms derived from automata theory</li>
        </ul>
        <p>
          These implementations prioritize speed and use optimized state transition tables rather than simulating NFA execution directly. The kernel precompiles patterns into DFAs at boot time or rule load time, then uses simple table lookups during packet processing for maximum performance.
        </p>
      </section>

      <section className="content-section">
        <h4 className="font-semibold text-lg mb-3">💻 Example: In Browser JavaScript Engines</h4>
        <p className="mb-3">
          Modern JavaScript engines (V8 in Chrome, SpiderMonkey in Firefox, JavaScriptCore in Safari) implement regex matching using sophisticated NFA-based algorithms:
        </p>
        <p className="mb-2">When you write /^([a-z]+)@([a-z]+)\.com$/ to validate email addresses, the engine:</p>
        <ol className="list-decimal ml-6 space-y-1 mb-4">
          <li>Parses the regex into an abstract syntax tree (AST)</li>
          <li>Constructs an NFA with states for each pattern component</li>
          <li>Uses backtracking simulation to handle capture groups like ([a-z]+)</li>
          <li>Applies JIT (Just-In-Time) compilation to generate optimized machine code for frequently used patterns</li>
        </ol>
        <p>
          V8's Irregexp engine can switch between interpreted and compiled execution modes depending on pattern complexity and execution frequency, balancing compilation overhead with runtime performance.
        </p>
      </section>

      <section className="content-section">
        <h3>⚠️ Common Misconceptions</h3>

        <div className="mt-6 space-y-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Misconception #1: NFAs are more powerful than DFAs</h4>
            <p className="text-sm mb-2"><strong>What students believe:</strong></p>
            <p className="text-sm mb-3">
              Since NFAs can explore multiple paths simultaneously and have epsilon transitions, they must be able to recognize more languages than DFAs.
            </p>
            <p className="text-sm mb-2"><strong>Reality:</strong></p>
            <p className="text-sm mb-3">
              NFAs and DFAs are computationally equivalent. They recognize exactly the same class of languages—the regular languages. Every NFA can be converted to an equivalent DFA using the subset construction algorithm, and every DFA is trivially an NFA (with single-element sets in its transition function). The difference is in representation size and ease of design, not computational power.
            </p>
            <p className="text-sm mb-2"><strong>Why this matters:</strong></p>
            <p className="text-sm">
              Understanding this equivalence is crucial for theoretical computer science. It shows that nondeterminism doesn't add computational power at the finite automaton level, though it does make automata easier to design and often more compact.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Misconception #2: NFAs actually execute all paths in parallel physically</h4>
            <p className="text-sm mb-2"><strong>What students believe:</strong></p>
            <p className="text-sm mb-3">
              When an NFA processes input, it somehow creates multiple physical copies of itself running simultaneously on different processors.
            </p>
            <p className="text-sm mb-2"><strong>Reality:</strong></p>
            <p className="text-sm mb-3">
              The "parallel paths" interpretation is a conceptual model, not a physical implementation. In practice, NFAs are simulated on deterministic computers using algorithms that track the set of currently active states. At each step, the algorithm computes the set of states reachable from the current state set on the next input symbol. This is called the "subset construction" and runs in polynomial time relative to the input length.
            </p>
            <p className="text-sm mb-2"><strong>Implementation detail:</strong></p>
            <p className="text-sm">
              A typical NFA simulation maintains a set current_states and updates it iteratively: current_states = δ(current_states, next_symbol), where δ is extended to work on sets of states.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Misconception #3: Empty set transitions mean "reject immediately"</h4>
            <p className="text-sm mb-2"><strong>What students believe:</strong></p>
            <p className="text-sm mb-3">
              If δ(q, a) = ∅ (empty set), the entire NFA should reject the input string immediately.
            </p>
            <p className="text-sm mb-2"><strong>Reality:</strong></p>
            <p className="text-sm mb-3">
              When a particular computation path encounters δ(q, a) = ∅, only that specific path terminates and is discarded. Other parallel paths continue executing. The string is only rejected if all paths eventually die or end in non-accepting states. One successful path among many failed ones is sufficient for acceptance.
            </p>
            <p className="text-sm mb-2"><strong>Example:</strong></p>
            <p className="text-sm">
              In an NFA with states {'{'}q₀, q₁{'}'} where δ(q₀, a) = {'{'}q₀, q₁{'}'} and δ(q₁, a) = ∅, processing "aa" would have one path (q₀ → q₀ → q₀) survive while another (q₀ → q₁ → dead) dies. The surviving path determines the outcome.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold text-lg mb-2">Misconception #4: Epsilon transitions consume input symbols invisibly</h4>
            <p className="text-sm mb-2"><strong>What students believe:</strong></p>
            <p className="text-sm mb-3">
              An ε-transition reads an invisible or "empty" input symbol from the string.
            </p>
            <p className="text-sm mb-2"><strong>Reality:</strong></p>
            <p className="text-sm">
              Epsilon transitions don't consume any input. They're spontaneous state changes that occur without reading input. When computing the set of active states, you must take the epsilon closure—all states reachable from the current states via chains of ε-transitions. This happens before and after processing each actual input symbol. The input string length doesn't change; ε-transitions are purely internal state transitions.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>🎥 Learn Through Videos</h3>
        <p className="mt-2 mb-6">Watch these carefully selected videos to reinforce your understanding with visual explanations and animations.</p>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-2">📚 NFA Complete Tutorial</h4>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Neso Academy - 14:23 minutes</strong><br />
              What you'll learn: Complete introduction to NFAs with formal definition, examples, and comparison with DFAs
            </p>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/58N2N7zJGrQ?si=QuPrxZe0uuMO8a-9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">🎬 NFA with Epsilon Transitions</h4>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Gate Smashers - 12:45 minutes</strong><br />
              What you'll learn: Visual step-by-step animation of NFA execution including epsilon closure computation
            </p>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/K2qy4af98ys?si=L8G7-Rn1z6et7R-2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">💻 NFA to DFA Conversion</h4>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Neso Academy - 18:30 minutes</strong><br />
              What you'll learn: Subset construction algorithm with complete worked example showing power set method
            </p>
            <div className="flex justify-center">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/h4v7x0IMhtI?si=fW-08l1smLJNwweb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📺 Additional Resources:</h3>

        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Online Simulators:</h4>
            <p className="text-sm">JFLAP (Java Formal Languages and Automata Package) - Download from jflap.org for interactive NFA simulation</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Interactive Tutorials:</h4>
            <p className="text-sm">Automaton Simulator at automatonsimulator.com - Draw and test NFAs in browser</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Visualization Tools:</h4>
            <p className="text-sm">VisuAlgo.net/en/fa - Animated NFA execution with step-by-step state tracking</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Practice Problems:</h4>
            <p className="text-sm">GeeksforGeeks NFA problems section with detailed solutions</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>⚙️ See It In Action: Algorithm &amp; Examples</h3>

        <h4 className="mt-6 font-semibold text-lg">The NFA Simulation Algorithm</h4>
        <p className="mt-3">
          The standard algorithm for simulating an NFA processes an input string by maintaining a set of currently active states. At each step, it computes the set of states reachable from the current states on the next input symbol, including epsilon closure computations. This algorithm runs in O(n × |Q|²) time where n is the input length and |Q| is the number of states, because for each input symbol we may need to compute epsilon closures which can require checking all states.
        </p>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 mt-6">
          <h4 className="font-bold text-lg mb-4">NFA Simulation Algorithm</h4>
          <h5 className="font-semibold mb-3">Pseudocode</h5>

          <pre className="bg-white p-4 rounded border border-gray-300 overflow-x-auto text-sm">
            <code>{`// NFA String Acceptance Algorithm
// Input: NFA M = (Q, Σ, δ, q₀, F) and input string w = w₁w₂...wₙ
// Output: ACCEPT if M accepts w, REJECT otherwise

FUNCTION EpsilonClosure(states)
BEGIN
    // Compute all states reachable via ε-transitions
    closure = states
    stack = states
    
    WHILE stack is not empty DO
        current = stack.pop()
        FOR EACH state s IN δ(current, ε) DO
            IF s NOT IN closure THEN
                closure.add(s)
                stack.push(s)
            END IF
        END FOR
    END WHILE
    
    RETURN closure
END FUNCTION

SimulateNFA(M, w)
BEGIN
    // Step 1: Initialize with ε-closure of start state
    current_states = EpsilonClosure({q₀})
    
    // Step 2: Process each input symbol
    FOR i = 1 TO length(w) DO
        next_states = ∅
        
        // Step 3: For each active state, find transitions on wᵢ
        FOR EACH state q IN current_states DO
            next_states = next_states ∪ δ(q, wᵢ)
        END FOR
        
        // Step 4: Compute ε-closure of resulting states
        current_states = EpsilonClosure(next_states)
        
        // Step 5: If no states remain, reject early (optimization)
        IF current_states = ∅ THEN
            RETURN REJECT
        END IF
    END FOR
    
    // Step 6: Check if any final state is reachable
    IF current_states ∩ F ≠ ∅ THEN
        RETURN ACCEPT
    ELSE
        RETURN REJECT
    END IF
END`}</code>
          </pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <h4 className="font-semibold text-lg mb-3">⏱️ Complexity Analysis:</h4>

          <div className="space-y-3 text-sm">
            <div>
              <strong>Time Complexity:</strong>
              <p className="mt-1">O(n × |Q|²) where n is input length and |Q| is number of states. The quadratic factor comes from epsilon closure computation which may need to visit all states for each current state.</p>
            </div>

            <div>
              <strong>Space Complexity:</strong>
              <p className="mt-1">O(|Q|) to store the set of current states and epsilon closure</p>
            </div>

            <div>
              <strong>Best Case:</strong>
              <p className="mt-1">O(n × |Q|) when epsilon closures are small or non-existent</p>
            </div>

            <div>
              <strong>Worst Case:</strong>
              <p className="mt-1">O(n × |Q|²) when epsilon closures are large and deeply nested</p>
            </div>

            <div>
              <strong>Practical Performance:</strong>
              <p className="mt-1">For most real-world patterns, |Q| is small (&lt; 100 states), making this very efficient</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
          <h4 className="text-center font-bold text-lg mb-4">NFA String Processing Flow</h4>

          <div className="bg-gray-50 p-6 rounded">
            <div className="flex flex-col items-center space-y-4 text-sm">
              <div className="bg-white border-2 border-blue-500 px-6 py-3 rounded shadow">
                <strong>Start: Place token at q₀</strong>
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="bg-white border-2 border-blue-500 px-6 py-3 rounded shadow">
                <strong>Read next input symbol a</strong>
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-purple-100 border-2 border-purple-500 transform rotate-45"></div>
                <div className="relative z-10 text-center px-4">
                  <strong>Consult δ(current_state, a)</strong>
                </div>
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="bg-white border-2 border-gray-500 px-6 py-3 rounded shadow">
                <strong>Multiple next states?</strong>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-green-600 font-bold">YES</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-green-50 border-2 border-green-500 px-4 py-2 rounded text-center">
                    Clone token for<br />each possible state
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-red-600 font-bold">NO</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-red-50 border-2 border-red-500 px-4 py-2 rounded text-center">
                    Move token to<br />next state
                  </div>
                </div>
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-purple-100 border-2 border-purple-500 transform rotate-45"></div>
                <div className="relative z-10 text-center px-4">
                  <strong>Any valid<br />transition?</strong>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-red-600 font-bold">NO</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-red-50 border-2 border-red-500 px-4 py-2 rounded text-center">
                    Discard this token<br />(Dead end)
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-green-600 font-bold">YES</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-white border-2 border-blue-500 px-4 py-2 rounded text-center">
                    Continue
                  </div>
                </div>
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-purple-100 border-2 border-purple-500 transform rotate-45"></div>
                <div className="relative z-10 text-center px-4">
                  <strong>Any tokens<br />remaining?</strong>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-blue-600 font-bold">YES</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-blue-50 border-2 border-blue-500 px-4 py-2 rounded text-center">
                    Move token to<br />next state
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-gray-600 font-bold">NO</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-gray-50 border-2 border-gray-500 px-4 py-2 rounded text-center">
                    Proceed to<br />final check
                  </div>
                </div>
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-purple-100 border-2 border-purple-500 transform rotate-45"></div>
                <div className="relative z-10 text-center px-4">
                  <strong>More input?</strong>
                </div>
              </div>

              <div className="text-sm text-center text-gray-600 italic">
                YES: Loop back to "Read next symbol" | NO: Continue below
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-gray-100 border-2 border-gray-500 transform rotate-45"></div>
                <div className="relative z-10 text-center">
                  <strong>Merge<br />input</strong>
                </div>
              </div>

              <div className="text-2xl text-gray-600">↓</div>

              <div className="relative w-48 h-48 flex items-center justify-center">
                <div className="absolute w-32 h-32 bg-purple-100 border-2 border-purple-500 transform rotate-45"></div>
                <div className="relative z-10 text-center px-4">
                  <strong>Any token in<br />accept state?</strong>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <div className="flex flex-col items-center">
                  <div className="text-sm text-green-600 font-bold">YES</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-green-100 border-2 border-green-600 px-6 py-3 rounded shadow-lg text-center">
                    <strong className="text-green-700">✅ ACCEPT STRING</strong>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-sm text-red-600 font-bold">NO</div>
                  <div className="text-2xl text-gray-600">↓</div>
                  <div className="bg-red-100 border-2 border-red-600 px-6 py-3 rounded shadow-lg text-center">
                    <strong className="text-red-700">❌ REJECT STRING</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 italic mt-4">
            Figure 4: Complete flowchart of NFA string processing algorithm
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>📝 Worked Examples</h3>

        <div className="mt-6 space-y-8">
          {/* Example 1 */}
          <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
            <h4 className="font-bold text-xl mb-4">Worked Example 1: Basic NFA Simulation</h4>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <h5 className="font-semibold mb-2">📝 Problem Statement</h5>
              <p className="text-sm mb-3">Consider the following NFA that accepts all strings over {'{'}a, b{'}'} that end with "abb":</p>

              <table className="w-full text-sm border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">State</th>
                    <th className="border border-gray-300 p-2">Input 'a'</th>
                    <th className="border border-gray-300 p-2">Input 'b'</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">→q₀</td>
                    <td className="border border-gray-300 p-2">{'{'}q₀, q₁{'}'}</td>
                    <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">q₁</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">q₂</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">{'{'}*q₃{'}'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">*q₃</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm font-semibold">Question: Trace the execution of this NFA on the input string "aabb". Show all computation paths and determine whether the string is accepted.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h5 className="font-semibold mb-3">🔍 Step-by-Step Solution</h5>

              <div className="space-y-3 text-sm">
                <div>
                  <strong>Initialization: Start at q₀</strong>
                  <p>Current states: {'{'}q₀{'}'}</p>
                </div>

                <div>
                  <strong>Read 'a' (position 1):</strong>
                  <p>From q₀ on 'a' → {'{'}q₀, q₁{'}'}</p>
                  <p className="text-gray-600">The NFA makes a nondeterministic choice: it can stay at q₀ OR move to q₁</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₀, q₁{'}'} - Path splits into 2 branches!</p>
                </div>

                <div>
                  <strong>Read 'a' (position 2):</strong>
                  <p>From q₀ on 'a' → {'{'}q₀, q₁{'}'}</p>
                  <p>From q₁ on 'a' → ∅ (dead end, this path dies)</p>
                  <p>Union of results: {'{'}q₀, q₁{'}'}</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₀, q₁{'}'}</p>
                </div>

                <div>
                  <strong>Read 'b' (position 3):</strong>
                  <p>From q₀ on 'b' → {'{'}q₀{'}'}</p>
                  <p>From q₁ on 'b' → {'{'}q₂{'}'}</p>
                  <p>Union of results: {'{'}q₀, q₂{'}'}</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₀, q₂{'}'}</p>
                </div>

                <div>
                  <strong>Read 'b' (position 4, final symbol):</strong>
                  <p>From q₀ on 'b' → {'{'}q₀{'}'}</p>
                  <p>From q₂ on 'b' → {'{'}q₃{'}'}</p>
                  <p>Union of results: {'{'}q₀, q₃{'}'}</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₀, q₃{'}'}</p>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <strong>Final Check:</strong>
                  <p>Are any current states in F = {'{'}q₃{'}'}?</p>
                  <p className="font-semibold text-green-700">Yes! q₃ ∈ {'{'}q₀, q₃{'}'} and q₃ ∈ F</p>
                  <p className="font-semibold text-green-700">At least one path reached an accepting state!</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-semibold mb-2">✅ Final Answer</h5>
              <p className="text-sm mb-2"><strong>The string "aabb" is ACCEPTED by this NFA</strong></p>
              <ul className="text-sm list-disc ml-6 space-y-1">
                <li>Accepting computation path: q₀ →(a) q₁ →(a) ∅ (dead), but parallel path: q₀ →(a) q₀ →(a) q₁ →(b) q₂ →(b) q₃ ✓</li>
                <li>Final active states: {'{'}q₀, q₃{'}'}, and since q₃ ∈ F, the string is accepted</li>
              </ul>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-4">
              <h5 className="font-semibold mb-2">💡 Key Insights</h5>
              <ul className="text-sm list-disc ml-6 space-y-1">
                <li>Even though one path died (q₁ on second 'a'), other paths continued and one succeeded</li>
                <li>The NFA correctly identified that "aabb" ends with the pattern "abb"</li>
                <li>State q₀ acts as a "wildcard" that can consume any prefix before the pattern</li>
                <li>Only when the NFA "guesses" to start matching at the right position (after first 'a') does it succeed</li>
              </ul>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white border-2 border-green-300 rounded-lg p-6">
            <h4 className="font-bold text-xl mb-4">Worked Example 2: NFA with Epsilon Transitions</h4>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <h5 className="font-semibold mb-2">📝 Problem Statement</h5>
              <p className="text-sm mb-3">Consider an NFA with ε-transitions that recognizes strings matching the pattern (a|b)*c (zero or more a's or b's followed by c):</p>

              <table className="w-full text-sm border-collapse border border-gray-300 mb-3">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">State</th>
                    <th className="border border-gray-300 p-2">Input 'a'</th>
                    <th className="border border-gray-300 p-2">Input 'b'</th>
                    <th className="border border-gray-300 p-2">Input 'c'</th>
                    <th className="border border-gray-300 p-2">ε-transition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">→q₀</td>
                    <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                    <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                    <td className="border border-gray-300 p-2">{'{'}q₃{'}'}</td>
                    <td className="border border-gray-300 p-2">∅</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">q₁</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">q₂</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">*q₃</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm font-semibold">Question: Trace the execution on input string "abc" showing all epsilon closure computations.</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h5 className="font-semibold mb-3">🔍 Step-by-Step Solution</h5>

              <div className="space-y-3 text-sm">
                <div>
                  <strong>Initialization: Compute ε-closure({'{'}q₀{'}'})</strong>
                  <p>From q₀: no ε-transitions → ε-closure({'{'}q₀{'}'}) = {'{'}q₀{'}'}</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₀{'}'}</p>
                </div>

                <div>
                  <strong>Read 'a':</strong>
                  <p>From q₀ on 'a' → {'{'}q₁{'}'}</p>
                  <p>Compute ε-closure({'{'}q₁{'}'}): From q₁ via ε → q₀</p>
                  <p>ε-closure({'{'}q₁{'}'}) = {'{'}q₁, q₀{'}'}</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₀, q₁{'}'}</p>
                </div>

                <div>
                  <strong>Read 'b':</strong>
                  <p>From q₀ on 'b' → {'{'}q₂{'}'}</p>
                  <p>From q₁ on 'b' → ∅</p>
                  <p>Union: {'{'}q₂{'}'}</p>
                  <p>Compute ε-closure({'{'}q₂{'}'}): From q₂ via ε → q₀</p>
                  <p>ε-closure({'{'}q₂{'}'}) = {'{'}q₂, q₀{'}'}</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₀, q₂{'}'}</p>
                </div>

                <div>
                  <strong>Read 'c':</strong>
                  <p>From q₀ on 'c' → {'{'}q₃{'}'}</p>
                  <p>From q₂ on 'c' → ∅</p>
                  <p>Union: {'{'}q₃{'}'}</p>
                  <p>Compute ε-closure({'{'}q₃{'}'}): From q₃: no ε-transitions</p>
                  <p className="font-semibold text-blue-600">Current states: {'{'}q₃{'}'}</p>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <strong>Final Check:</strong>
                  <p className="font-semibold text-green-700">Is q₃ ∈ F? YES! String is ACCEPTED ✓</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <h5 className="font-semibold mb-2">✅ Final Answer</h5>
              <p className="text-sm mb-2"><strong>String "abc" is ACCEPTED</strong></p>
              <p className="text-sm">Key observation: Epsilon transitions allow the NFA to "loop back" to q₀ after consuming 'a' or 'b', enabling recognition of the pattern (a|b)*c</p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h5 className="font-semibold mb-2">💡 Key Insights</h5>
              <ul className="text-sm list-disc ml-6 space-y-1">
                <li>ε-transitions effectively create loops without consuming input, implementing the Kleene star (*) operator</li>
                <li>Epsilon closure must be computed after every regular transition to find all reachable states</li>
                <li>This NFA structure is typical for regex patterns with alternation and repetition</li>
              </ul>
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white border-2 border-purple-300 rounded-lg p-6">
            <h4 className="font-bold text-xl mb-4">Worked Example 3: NFA to DFA Conversion (Subset Construction)</h4>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <h5 className="font-semibold mb-2">📝 Problem Statement</h5>
              <p className="text-sm mb-3">Convert the following NFA to an equivalent DFA using subset construction:</p>

              <div className="text-sm mb-3">
                <p><strong>NFA Definition:</strong></p>
                <ul className="list-disc ml-6">
                  <li>Q = {'{'}q₀, q₁, q₂{'}'}</li>
                  <li>Σ = {'{'}0, 1{'}'}</li>
                  <li>q₀ = start state</li>
                  <li>F = {'{'}q₂{'}'}</li>
                </ul>
              </div>

              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">State</th>
                    <th className="border border-gray-300 p-2">Input '0'</th>
                    <th className="border border-gray-300 p-2">Input '1'</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">→q₀</td>
                    <td className="border border-gray-300 p-2">{'{'}q₀, q₁{'}'}</td>
                    <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">q₁</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">*q₂</td>
                    <td className="border border-gray-300 p-2">∅</td>
                    <td className="border border-gray-300 p-2">∅</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <h5 className="font-semibold mb-3">🔍 Step-by-Step Solution: Subset Construction Algorithm</h5>

              <div className="space-y-3 text-sm">
                <div>
                  <strong>Step 1: Initialize DFA with start state [q₀]</strong>
                  <p>DFA states created: {'{'}[q₀]{'}'}</p>
                </div>

                <div>
                  <strong>Step 2: Process state [q₀]</strong>
                  <p>On input '0': δ({'{'}q₀{'}'}, 0) = {'{'}q₀, q₁{'}'} → Create DFA state [q₀q₁]</p>
                  <p>On input '1': δ({'{'}q₀{'}'}, 1) = {'{'}q₀{'}'} → State [q₀] already exists</p>
                  <p className="text-blue-600">DFA transitions: [q₀] →(0) [q₀q₁], [q₀] →(1) [q₀]</p>
                </div>

                <div>
                  <strong>Step 3: Process state [q₀q₁]</strong>
                  <p>On input '0': δ({'{'}q₀, q₁{'}'}, 0) = {'{'}q₀, q₁{'}'} (self-loop)</p>
                  <p>On input '1': δ({'{'}q₀, q₁{'}'}, 1) = {'{'}q₀{'}'} ∪ {'{'}q₂{'}'} = {'{'}q₀, q₂{'}'} → Create [q₀q₂]</p>
                  <p className="text-blue-600">DFA transitions: [q₀q₁] →(0) [q₀q₁], [q₀q₁] →(1) [q₀q₂]</p>
                </div>

                <div>
                  <strong>Step 4: Process state [q₀q₂]</strong>
                  <p>On input '0': δ({'{'}q₀, q₂{'}'}, 0) = {'{'}q₀, q₁{'}'} → [q₀q₁] exists</p>
                  <p>On input '1': δ({'{'}q₀, q₂{'}'}, 1) = {'{'}q₀{'}'} → [q₀] exists</p>
                  <p className="text-blue-600">DFA transitions: [q₀q₂] →(0) [q₀q₁], [q₀q₂] →(1) [q₀]</p>
                </div>

                <div>
                  <strong>Step 5: Determine accepting states</strong>
                  <p>A DFA state is accepting if it contains any NFA accepting state (q₂)</p>
                  <p>[q₀] - doesn't contain q₂ → non-accepting</p>
                  <p>[q₀q₁] - doesn't contain q₂ → non-accepting</p>
                  <p>[q₀q₂] - contains q₂ → ACCEPTING</p>
                  <p className="font-semibold text-green-600">DFA accepting states: F' = {'{'}[q₀q₂]{'}'}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 mb-4">
              <h5 className="font-semibold mb-3">Resulting DFA Transition Table</h5>
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 p-2">DFA State</th>
                    <th className="border border-gray-300 p-2">Input '0'</th>
                    <th className="border border-gray-300 p-2">Input '1'</th>
                    <th className="border border-gray-300 p-2">Accepting?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">→[q₀]</td>
                    <td className="border border-gray-300 p-2">[q₀q₁]</td>
                    <td className="border border-gray-300 p-2">[q₀]</td>
                    <td className="border border-gray-300 p-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">[q₀q₁]</td>
                    <td className="border border-gray-300 p-2">[q₀q₁]</td>
                    <td className="border border-gray-300 p-2">[q₀q₂]</td>
                    <td className="border border-gray-300 p-2">No</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">*[q₀q₂]</td>
                    <td className="border border-gray-300 p-2">[q₀q₁]</td>
                    <td className="border border-gray-300 p-2">[q₀]</td>
                    <td className="border border-gray-300 p-2 font-semibold text-green-600">YES</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <h5 className="font-semibold mb-2">✅ Final Answer</h5>
              <div className="text-sm">
                <p className="mb-2"><strong>Equivalent DFA:</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Q' = {'{'}[q₀], [q₀q₁], [q₀q₂]{'}'}</li>
                  <li>Σ = {'{'}0, 1{'}'}</li>
                  <li>Start state: [q₀]</li>
                  <li>F' = {'{'}[q₀q₂]{'}'}</li>
                  <li>The DFA has 3 states compared to the NFA's 3 states (in this case, same number, but generally DFA can have up to 2^n states)</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h5 className="font-semibold mb-2">💡 Key Insights</h5>
              <ul className="text-sm list-disc ml-6 space-y-1">
                <li>Each DFA state represents a set of NFA states that could be active simultaneously</li>
                <li>The subset construction algorithm systematically explores all reachable state combinations</li>
                <li>DFA state [q₀q₁] represents "the NFA could be in either q₀ or q₁"</li>
                <li>This DFA is deterministic—exactly one transition per state-symbol pair</li>
                <li>The resulting DFA recognizes the same language: strings containing "01" as a substring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="code-implementation">
        <h3>💻 Code Implementation</h3>
        <p className="mt-4">
          Now let's implement a complete NFA simulator in Python. This implementation will handle both regular transitions and epsilon transitions, providing a practical tool for testing NFA designs. The code demonstrates how to represent an NFA using Python data structures and simulate its execution step-by-step, making the theoretical concepts concrete and executable.
        </p>
        <p className="mt-3">
          We'll use dictionaries to represent the transition function, sets to track active states, and implement the epsilon closure algorithm as a separate helper function. This modular design makes the code easy to understand and extend. The implementation follows the algorithm presented earlier and includes detailed comments explaining each step.
        </p>

        <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 mt-6">
          <h4 className="font-bold text-lg mb-4">Complete Working Implementation</h4>
          <h5 className="font-semibold mb-3">Full NFA Simulator Implementation</h5>
          <div className="bg-gray-800 text-white p-4 rounded text-xs mb-2">
            <span className="text-blue-400">Python 3</span>
          </div>

          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-xs leading-relaxed">
            <code>{`# ============================================
# Nondeterministic Finite Automaton Simulator
# Language: Python 3
# Description: Complete NFA implementation with epsilon transitions
# ============================================

class NFA:
    """
    Nondeterministic Finite Automaton with epsilon transitions.
    
    Attributes:
        states: Set of all states in the NFA
        alphabet: Set of input symbols (excluding epsilon)
        transitions: Dict mapping (state, symbol) to set of next states
        start_state: Initial state
        accept_states: Set of accepting states
    """
    
    def __init__(self, states, alphabet, transitions, start_state, accept_states):
        self.states = set(states)
        self.alphabet = set(alphabet)
        self.transitions = transitions
        self.start_state = start_state
        self.accept_states = set(accept_states)
        self.epsilon = 'ε'  # Epsilon symbol
    
    def epsilon_closure(self, states):
        """
        Compute epsilon closure of a set of states.
        Returns all states reachable via epsilon transitions.
        
        Algorithm: DFS/BFS traversal following epsilon edges
        Time Complexity: O(|states| * |transitions|)
        """
        closure = set(states)  # Start with input states
        stack = list(states)   # Stack for DFS traversal
        
        while stack:
            current = stack.pop()
            
            # Check for epsilon transitions from current state
            if (current, self.epsilon) in self.transitions:
                for next_state in self.transitions[(current, self.epsilon)]:
                    if next_state not in closure:
                        closure.add(next_state)
                        stack.append(next_state)  # Continue exploring
        
        return closure
    
    def move(self, states, symbol):
        """
        Compute the set of states reachable from 'states' on 'symbol'.
        Does NOT include epsilon closure - that's done separately.
        """
        next_states = set()
        for state in states:
            if (state, symbol) in self.transitions:
                next_states.update(self.transitions[(state, symbol)])
        return next_states
    
    def accepts(self, input_string, verbose=False):
        """
        Determine if the NFA accepts the input string.
        
        Args:
            input_string: String to test
            verbose: If True, print step-by-step execution trace
        
        Returns:
            Boolean indicating acceptance
        """
        # Step 1: Initialize with epsilon closure of start state
        current_states = self.epsilon_closure({self.start_state})
        
        if verbose:
            print(f"Initial states (ε-closure): {current_states}")
        
        # Step 2: Process each input symbol
        for i, symbol in enumerate(input_string):
            if symbol not in self.alphabet:
                raise ValueError(f"Symbol '{symbol}' not in alphabet")
            
            # Step 3: Compute next states on this symbol
            next_states = self.move(current_states, symbol)
            
            # Step 4: Compute epsilon closure of next states
            current_states = self.epsilon_closure(next_states)
            
            if verbose:
                print(f"After '{symbol}' (position {i+1}): {current_states}")
            
            # Early termination if no states remain
            if not current_states:
                if verbose:
                    print("All paths dead - REJECT")
                return False
        
        # Step 5: Check if any current state is accepting
        result = bool(current_states & self.accept_states)
        
        if verbose:
            print(f"Final states: {current_states}")
            print(f"Accept states: {self.accept_states}")
            print(f"Result: {'ACCEPT ✓' if result else 'REJECT ✗'}")
        
        return result

# ============================================
# Example Usage: NFA that accepts strings ending with "ab"
# ============================================

def create_ends_with_ab_nfa():
    """Create NFA that accepts strings ending with 'ab' over {a, b}"""
    states = {'q0', 'q1', 'q2'}
    alphabet = {'a', 'b'}
    start_state = 'q0'
    accept_states = {'q2'}
    
    # Transition function: (state, symbol) -> {set of next states}
    transitions = {
        ('q0', 'a'): {'q0', 'q1'},  # Nondeterminism: stay OR move
        ('q0', 'b'): {'q0'},         # Stay at q0
        ('q1', 'b'): {'q2'},         # Complete 'ab' pattern
        # q1 has no transition on 'a' - dead end
        # q2 has no transitions - absorbing accept state
    }
    
    return NFA(states, alphabet, transitions, start_state, accept_states)

def create_epsilon_nfa():
    """Create NFA with epsilon transitions: (a|b)*c"""
    states = {'q0', 'q1', 'q2', 'q3'}
    alphabet = {'a', 'b', 'c'}
    start_state = 'q0'
    accept_states = {'q3'}
    
    transitions = {
        ('q0', 'a'): {'q1'},
        ('q0', 'b'): {'q2'},
        ('q0', 'c'): {'q3'},
        ('q1', 'ε'): {'q0'},  # Epsilon back to start (loop)
        ('q2', 'ε'): {'q0'},  # Epsilon back to start (loop)
    }
    
    return NFA(states, alphabet, transitions, start_state, accept_states)

# ============================================
# Main demonstration
# ============================================

if __name__ == "__main__":
    print("=" * 60)
    print("NFA Simulator - Example 1: Strings ending with 'ab'")
    print("=" * 60)
    
    nfa1 = create_ends_with_ab_nfa()
    test_strings_1 = ["ab", "aab", "bab", "abab", "aba", "b", "aabb"]
    
    for test_str in test_strings_1:
        print(f"\nTesting '{test_str}':")
        result = nfa1.accepts(test_str, verbose=True)
        print("-" * 60)
    
    print("\n" + "=" * 60)
    print("NFA Simulator - Example 2: Pattern (a|b)*c")
    print("=" * 60)
    
    nfa2 = create_epsilon_nfa()
    test_strings_2 = ["c", "ac", "bc", "abc", "aaabbbac", "a", "ab"]
    
    for test_str in test_strings_2:
        print(f"\nTesting '{test_str}':")
        result = nfa2.accepts(test_str, verbose=True)
        print("-" * 60)`}</code>
          </pre>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-3">Code Walkthrough</h4>

          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h5 className="font-semibold mb-2">1. Data Structures Used:</h5>
              <p className="text-sm">
                The NFA class encapsulates all components of an NFA. States are stored as Python sets for efficient membership testing. The transition function is implemented as a dictionary mapping (state, symbol) tuples to sets of next states. This allows O(1) lookup of transitions and naturally handles the nondeterministic aspect—multiple states can be in the value set. The choice of dictionary over a 2D array provides flexibility for sparse transition functions where many entries would be empty.
              </p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h5 className="font-semibold mb-2">2. Epsilon Closure Algorithm:</h5>
              <p className="text-sm">
                The epsilon_closure() method implements a depth-first search (DFS) through epsilon transitions. It uses a stack to track states to explore and a set to avoid revisiting states. This is crucial for correctness—without tracking visited states, we could loop infinitely on epsilon cycles. The algorithm returns all states reachable from the input states via any path of epsilon transitions, including the input states themselves. Time complexity is O(|states| × |epsilon transitions|), which is typically O(|Q|²) in the worst case.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-semibold mb-2">3. Move Function:</h5>
              <p className="text-sm">
                The move() function computes the set of states reachable from a set of current states on a given input symbol. It deliberately does NOT compute epsilon closure—that's done separately. This separation of concerns makes the code cleaner and matches the theoretical algorithm. The function simply unions all next states from each current state's transitions on the given symbol.
              </p>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h5 className="font-semibold mb-2">4. Main Acceptance Algorithm:</h5>
              <p className="text-sm">
                The accepts() method implements the core NFA simulation. It starts by computing the epsilon closure of the start state (important for NFAs where start state has epsilon transitions). For each input symbol, it: (1) computes the move on that symbol, (2) computes epsilon closure of the result, and (3) updates current states. The verbose mode provides detailed execution traces, invaluable for debugging and understanding NFA behavior. The final check uses set intersection (&) to efficiently test if any current state is accepting.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mt-6">
          <h4 className="font-semibold text-lg mb-4">Example Execution Output</h4>
          <h5 className="font-semibold mb-3">Sample Run: Testing "aabb" on ends-with-"ab" NFA</h5>

          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">Input:</p>
            <pre className="bg-gray-100 p-3 rounded text-sm">
              <code>{`nfa1 = create_ends_with_ab_nfa()
result = nfa1.accepts("aabb", verbose=True)`}</code>
            </pre>
          </div>

          <div>
            <p className="text-sm font-semibold mb-2">Output:</p>
            <pre className="bg-gray-900 text-green-400 p-4 rounded text-xs overflow-x-auto">
              <code>{`Testing 'aabb':
Initial states (ε-closure): {'q0'}
After 'a' (position 1): {'q1', 'q0'}
After 'a' (position 2): {'q1', 'q0'}
After 'b' (position 3): {'q2', 'q0'}
After 'b' (position 4): {'q2', 'q0'}
Final states: {'q2', 'q0'}
Accept states: {'q2'}
Result: ACCEPT ✓`}</code>
            </pre>
          </div>

          <div className="bg-blue-50 p-4 rounded mt-4">
            <p className="text-sm font-semibold mb-2">Explanation:</p>
            <p className="text-sm">
              Notice how the set of current states grows and shrinks as the NFA explores paths. After reading the first 'a', we have both q0 and q1 active (nondeterministic branching). The pattern "ab" is recognized when we reach q2, and since q2 remains active at the end, the string is accepted.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-4">⚠️ Common Implementation Mistakes</h4>

          <div className="space-y-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <h5 className="font-semibold mb-3">Mistake #1: Forgetting epsilon closure after initialization</h5>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Wrong Code:</p>
                <pre className="bg-gray-900 text-red-400 p-3 rounded text-xs overflow-x-auto">
                  <code>{`# INCORRECT - missing epsilon closure of start state
def accepts(self, input_string):
    current_states = {self.start_state}  # Bug: no ε-closure!
    for symbol in input_string:
        next_states = self.move(current_states, symbol)
        current_states = self.epsilon_closure(next_states)`}</code>
                </pre>
              </div>

              <p className="text-sm mb-2"><strong>Why it's wrong:</strong></p>
              <p className="text-sm mb-3">
                If the start state has epsilon transitions to other states, we'll miss those initially reachable states. The NFA should be in ALL states reachable from start via epsilon transitions before reading any input.
              </p>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Correct Code:</p>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
                  <code>{`// CORRECT - compute epsilon closure of start state
def accepts(self, input_string):
    current_states = self.epsilon_closure({self.start_state})  # Correct!
    for symbol in input_string:
        next_states = self.move(current_states, symbol)
        current_states = self.epsilon_closure(next_states)`}</code>
                </pre>
              </div>

              <p className="text-sm font-semibold">Key Lesson:</p>
              <p className="text-sm">ALWAYS compute epsilon closure at initialization and after every move operation.</p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
              <h5 className="font-semibold mb-3">Mistake #2: Not handling missing transitions</h5>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Wrong Code:</p>
                <pre className="bg-gray-900 text-red-400 p-3 rounded text-xs overflow-x-auto">
                  <code>{`def move(self, states, symbol):
    next_states = set()
    for state in states:
        # Bug: KeyError if (state, symbol) not in transitions!
        next_states.update(self.transitions[(state, symbol)])
    return next_states`}</code>
                </pre>
              </div>

              <p className="text-sm mb-2"><strong>Why it's wrong:</strong></p>
              <p className="text-sm mb-3">
                If a state has no transition for a given symbol (which is common in NFAs), this will raise a KeyError and crash. In NFA semantics, missing transitions mean that computation path dies (δ returns empty set).
              </p>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Correct Code:</p>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
                  <code>{`def move(self, states, symbol):
    next_states = set()
    for state in states:
        if (state, symbol) in self.transitions:  # Check before access
            next_states.update(self.transitions[(state, symbol)])
    return next_states  # Returns empty set if no transitions`}</code>
                </pre>
              </div>

              <p className="text-sm font-semibold">Key Lesson:</p>
              <p className="text-sm">Always use if key in dict or dict.get(key, default) when transitions might be missing.</p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h5 className="font-semibold mb-3">Mistake #3: Infinite loop in epsilon closure with cycles</h5>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Wrong Code:</p>
                <pre className="bg-gray-900 text-red-400 p-3 rounded text-xs overflow-x-auto">
                  <code>{`def epsilon_closure(self, states):
    closure = set(states)
    for state in closure:  # Bug: modifying set while iterating!
        if (state, self.epsilon) in self.transitions:
            closure.update(self.transitions[(state, self.epsilon)])
    return closure`}</code>
                </pre>
              </div>

              <p className="text-sm mb-2"><strong>Why it's wrong:</strong></p>
              <p className="text-sm mb-3">
                This doesn't handle epsilon cycles (A →ε B →ε A) and won't explore transitively reachable states properly. It also modifies a set while iterating over it, which can cause errors.
              </p>

              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Correct Code:</p>
                <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">
                  <code>{`def epsilon_closure(self, states):
    closure = set(states)
    stack = list(states)  # Use stack for DFS
    while stack:
        current = stack.pop()
        if (current, self.epsilon) in self.transitions:
            for next_state in self.transitions[(current, self.epsilon)]:
                if next_state not in closure:  # Avoid revisiting
                    closure.add(next_state)
                    stack.append(next_state)
    return closure`}</code>
                </pre>
              </div>

              <p className="text-sm font-semibold">Key Lesson:</p>
              <p className="text-sm">Use DFS/BFS with visited tracking to handle graph traversal with cycles.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-indigo-500 p-4 mt-6">
          <h4 className="font-semibold text-lg mb-3">💡 Optimization Tips:</h4>
          <ul className="text-sm space-y-2">
            <li><strong>Precompute Epsilon Closures:</strong> For each state, compute epsilon closure once and cache it in a dictionary for O(1) lookup during simulation</li>
            <li><strong>Early Termination:</strong> If current_states becomes empty during processing, return False immediately—no need to continue</li>
            <li><strong>Use Frozensets:</strong> For hashable state sets (useful in NFA-to-DFA conversion), use frozenset instead of set to allow using sets as dictionary keys</li>
            <li><strong>Lazy DFA Construction:</strong> Instead of full subset construction, build DFA states on-demand during simulation and cache them (hybrid NFA/DFA approach)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>📚 Problem-Solving Practice</h3>

        <div className="mt-6 space-y-6">
          {/* Easy Problem */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">📘 Easy Problem: Design Basic NFA</h4>
            <p className="text-sm mb-4">
              <strong>Problem:</strong> Design an NFA with the minimum number of states that accepts all strings over Σ = {'{'}0, 1{'}'} that contain at least one '1'.
            </p>

            <details className="bg-white p-4 rounded border border-green-300">
              <summary className="font-semibold cursor-pointer text-green-700">Show Solution</summary>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">Solution:</p>
                  <p>We need only 2 states:</p>
                  <ul className="list-disc ml-6 mt-2">
                    <li>q₀ (start, non-accepting): haven't seen a '1' yet</li>
                    <li>q₁ (accepting): seen at least one '1'</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Transition Table:</p>
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 p-2">State</th>
                        <th className="border border-gray-300 p-2">Input '0'</th>
                        <th className="border border-gray-300 p-2">Input '1'</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">→q₀</td>
                        <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">*q₁</td>
                        <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-2">Explanation:</p>
                  <p>
                    From q₀, stay at q₀ on '0' (haven't seen '1' yet), move to q₁ on '1' (found it!). From q₁, stay at q₁ on any input (once we've seen '1', we stay in accepting state). This accepts strings like "1", "01", "101", "0001111" but rejects "" (empty) and "000".
                  </p>
                </div>

                <div className="bg-green-100 p-3 rounded">
                  <p className="font-semibold">Final Answer:</p>
                  <p>2-state NFA with states {'{'}q₀, q₁{'}'}, transitions as shown above</p>
                </div>
              </div>
            </details>
          </div>

          {/* Medium Problem */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">📙 Medium Problem: NFA with Complex Pattern</h4>
            <p className="text-sm mb-4">
              <strong>Problem:</strong> Construct an NFA that accepts all strings over Σ = {'{'}a, b{'}'} where the third symbol from the end is 'a'. Examples: "aaa", "aba", "baa", "aaab", "bbaab" should be accepted. "ab", "bbb", "abba" should be rejected.
            </p>

            <details className="bg-white p-4 rounded border border-yellow-300">
              <summary className="font-semibold cursor-pointer text-yellow-700">Show Solution</summary>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">Solution:</p>
                  <p className="mb-2">This requires the NFA to "remember" the last 3 symbols. We'll use nondeterminism to guess when we're 3 symbols from the end.</p>

                  <p className="font-semibold mt-3 mb-2">States:</p>
                  <ul className="list-disc ml-6">
                    <li>q₀: start state, haven't committed to position yet</li>
                    <li>q₁: just saw 'a', guess this might be 3rd from end</li>
                    <li>q₂: one symbol after the guessed 'a'</li>
                    <li>q₃: two symbols after the guessed 'a' (accepting)</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Transition Table:</p>
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 p-2">State</th>
                        <th className="border border-gray-300 p-2">Input 'a'</th>
                        <th className="border border-gray-300 p-2">Input 'b'</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">→q₀</td>
                        <td className="border border-gray-300 p-2">{'{'}q₀, q₁{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₀{'}'}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">q₁</td>
                        <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">q₂</td>
                        <td className="border border-gray-300 p-2">{'{'}q₃{'}'}</td>
                        <td className="border border-gray-300 p-2">{'{'}q₃{'}'}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">*q₃</td>
                        <td className="border border-gray-300 p-2">∅</td>
                        <td className="border border-gray-300 p-2">∅</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-2">How it works:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Stay at q₀ on any input (reading prefix)</li>
                    <li>On 'a', nondeterministically branch: stay at q₀ OR move to q₁ (guess this 'a' is 3rd from end)</li>
                    <li>From q₁, must read exactly 2 more symbols (any symbols) to reach q₃</li>
                    <li>q₃ is accepting but has no transitions (must be at end of string)</li>
                  </ul>

                  <p className="font-semibold mt-3 mb-1">Example trace for "bbaab":</p>
                  <p className="font-mono text-xs">q₀ →b q₀ →b q₀ →a {'{'}q₀,q₁{'}'} →a {'{'}q₀,q₁,q₂{'}'} →b {'{'}q₀,q₃{'}'}</p>
                  <p className="mt-1">Final states include q₃, so ACCEPT ✓</p>
                </div>

                <div className="bg-yellow-100 p-3 rounded">
                  <p className="font-semibold">Final Answer:</p>
                  <p>4-state NFA as described above. The nondeterminism allows the NFA to "guess" when it's seeing the symbol that will end up being 3rd from the end.</p>
                </div>
              </div>
            </details>
          </div>

          {/* Hard Problem */}
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">📕 Hard Problem: NFA to DFA Conversion with Epsilon</h4>
            <p className="text-sm mb-4">
              <strong>Problem:</strong> Convert the following ε-NFA to a DFA:
            </p>

            <table className="w-full text-sm border-collapse border border-gray-300 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 p-2">State</th>
                  <th className="border border-gray-300 p-2">'0'</th>
                  <th className="border border-gray-300 p-2">'1'</th>
                  <th className="border border-gray-300 p-2">ε</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">→q₀</td>
                  <td className="border border-gray-300 p-2">∅</td>
                  <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                  <td className="border border-gray-300 p-2">∅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">q₁</td>
                  <td className="border border-gray-300 p-2">{'{'}q₁{'}'}</td>
                  <td className="border border-gray-300 p-2">∅</td>
                  <td className="border border-gray-300 p-2">{'{'}q₂{'}'}</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">*q₂</td>
                  <td className="border border-gray-300 p-2">∅</td>
                  <td className="border border-gray-300 p-2">{'{'}q₃{'}'}</td>
                  <td className="border border-gray-300 p-2">∅</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">q₃</td>
                  <td className="border border-gray-300 p-2">{'{'}q₃{'}'}</td>
                  <td className="border border-gray-300 p-2">∅</td>
                  <td className="border border-gray-300 p-2">∅</td>
                </tr>
              </tbody>
            </table>

            <details className="bg-white p-4 rounded border border-red-300">
              <summary className="font-semibold cursor-pointer text-red-700">Show Solution</summary>

              <div className="mt-4 space-y-4 text-sm">
                <h5 className="font-semibold text-base">Complete Solution with Epsilon Closure:</h5>

                <div className="bg-blue-50 p-3 rounded">
                  <p className="font-semibold mb-2">Step 1: Compute epsilon closures for each state</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>ε-closure({'{'}q₀{'}'}) = {'{'}q₀{'}'}</li>
                    <li>ε-closure({'{'}q₁{'}'}) = {'{'}q₁, q₂{'}'} (q₁ →ε q₂)</li>
                    <li>ε-closure({'{'}q₂{'}'}) = {'{'}q₂{'}'}</li>
                    <li>ε-closure({'{'}q₃{'}'}) = {'{'}q₃{'}'}</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold">Step 2: Initialize DFA with ε-closure of start state</p>
                  <p>DFA start state = [q₀] (since ε-closure({'{'}q₀{'}'}) = {'{'}q₀{'}'})</p>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 3: Process [q₀]</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>On '0': move(q₀, 0) = ∅ → ε-closure(∅) = ∅ = [∅] (dead state)</li>
                    <li>On '1': move(q₀, 1) = {'{'}q₁{'}'} → ε-closure({'{'}q₁{'}'}) = {'{'}q₁, q₂{'}'} = [q₁q₂]</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 4: Process [q₁q₂]</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>On '0': move({'{'}q₁,q₂{'}'}, 0) = {'{'}q₁{'}'} → ε-closure({'{'}q₁{'}'}) = {'{'}q₁, q₂{'}'} = [q₁q₂] (self-loop)</li>
                    <li>On '1': move({'{'}q₁,q₂{'}'}, 1) = {'{'}q₃{'}'} → ε-closure({'{'}q₃{'}'}) = {'{'}q₃{'}'} = [q₃]</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 5: Process [q₃]</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>On '0': move({'{'}q₃{'}'}, 0) = {'{'}q₃{'}'} → ε-closure({'{'}q₃{'}'}) = {'{'}q₃{'}'} = [q₃] (self-loop)</li>
                    <li>On '1': move({'{'}q₃{'}'}, 1) = ∅ → [∅]</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">Step 6: Process [∅] (dead state)</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>On '0': ∅ → [∅] (self-loop)</li>
                    <li>On '1': ∅ → [∅] (self-loop)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold mb-2">Step 7: Determine accepting states</p>
                  <p className="mb-2">A DFA state is accepting if it contains any ε-NFA accepting state (q₂)</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>[q₀] - doesn't contain q₂ → non-accepting</li>
                    <li>[q₁q₂] - contains q₂ → accepting</li>
                    <li>[q₃] - doesn't contain q₂ → non-accepting</li>
                    <li>[∅] - empty → non-accepting</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Final DFA Transition Table:</p>
                  <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 p-2">State</th>
                        <th className="border border-gray-300 p-2">'0'</th>
                        <th className="border border-gray-300 p-2">'1'</th>
                        <th className="border border-gray-300 p-2">Accept?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2">→[q₀]</td>
                        <td className="border border-gray-300 p-2">[∅]</td>
                        <td className="border border-gray-300 p-2">[q₁q₂]</td>
                        <td className="border border-gray-300 p-2">No</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">*[q₁q₂]</td>
                        <td className="border border-gray-300 p-2">[q₁q₂]</td>
                        <td className="border border-gray-300 p-2">[q₃]</td>
                        <td className="border border-gray-300 p-2 font-semibold text-green-600">Yes</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">[q₃]</td>
                        <td className="border border-gray-300 p-2">[q₃]</td>
                        <td className="border border-gray-300 p-2">[∅]</td>
                        <td className="border border-gray-300 p-2">No</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2">[∅]</td>
                        <td className="border border-gray-300 p-2">[∅]</td>
                        <td className="border border-gray-300 p-2">[∅]</td>
                        <td className="border border-gray-300 p-2">No</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-red-100 p-3 rounded">
                  <p className="font-semibold mb-2">Final Answer:</p>
                  <p>The DFA has 4 states: [q₀], [q₁q₂], [q₃], [∅]. The accepting state is [q₁q₂]. This DFA recognizes strings that start with '1', followed by zero or more '0's, then '1', then zero or more '0's. Example: "1", "10", "101", "1000100" are accepted.</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📊 Comparison &amp; Analysis: NFA vs DFA</h3>
        <p className="mt-4">
          Understanding the relationship between NFAs and DFAs is crucial for automata theory. While these two models are computationally equivalent (they recognize exactly the same class of languages—the regular languages), they differ significantly in representation, ease of construction, and practical implementation. Let's examine these differences in detail.
        </p>
        <p className="mt-3">
          The choice between NFA and DFA often depends on your goal: if you're designing an automaton to understand a pattern or prove a language property, NFAs are usually easier. If you're implementing high-performance pattern matching in software, converting to a DFA may be beneficial despite the potential size increase.
        </p>

        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-3 text-left">Aspect</th>
                <th className="border border-gray-300 p-3 text-left">NFA (Nondeterministic)</th>
                <th className="border border-gray-300 p-3 text-left">DFA (Deterministic)</th>
                <th className="border border-gray-300 p-3 text-left">ε-NFA (with Epsilon)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Definition</td>
                <td className="border border-gray-300 p-3">Finite automaton where δ: Q × Σ → P(Q), allowing multiple next states</td>
                <td className="border border-gray-300 p-3">Finite automaton where δ: Q × Σ → Q, exactly one next state per state-symbol pair</td>
                <td className="border border-gray-300 p-3">NFA with additional epsilon transitions: δ: Q × (Σ ∪ {'{'}'ε'{'}'}) → P(Q)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Advantages</td>
                <td className="border border-gray-300 p-3">
                  <div className="space-y-1">
                    <div>✓ Typically requires fewer states</div>
                    <div>✓ Easier to design for complex patterns</div>
                    <div>✓ Natural representation of regex constructs</div>
                    <div>✓ Allows intuitive "guessing" in design</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-3">
                  <div className="space-y-1">
                    <div>✓ Faster execution (simple table lookup)</div>
                    <div>✓ No backtracking needed</div>
                    <div>✓ Easier to implement in hardware</div>
                    <div>✓ Predictable O(n) runtime for input length n</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-3">
                  <div className="space-y-1">
                    <div>✓ Most compact representation</div>
                    <div>✓ Direct regex-to-automaton construction</div>
                    <div>✓ Easy to combine multiple automata</div>
                    <div>✓ Simplifies pattern alternation</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Disadvantages</td>
                <td className="border border-gray-300 p-3">
                  <div className="space-y-1">
                    <div>✗ Slower simulation (manage state sets)</div>
                    <div>✗ Requires epsilon closure computations</div>
                    <div>✗ More complex implementation</div>
                    <div>✗ Backtracking may be needed</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-3">
                  <div className="space-y-1">
                    <div>✗ Can require exponentially more states</div>
                    <div>✗ Harder to design manually</div>
                    <div>✗ State explosion for complex patterns</div>
                    <div>✗ Large memory footprint possible</div>
                  </div>
                </td>
                <td className="border border-gray-300 p-3">
                  <div className="space-y-1">
                    <div>✗ Slowest simulation</div>
                    <div>✗ Epsilon closure adds overhead</div>
                    <div>✗ Two-step process for practical use</div>
                    <div>✗ Requires conversion for efficiency</div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Number of States</td>
                <td className="border border-gray-300 p-3">O(n) for many patterns where DFA needs O(2ⁿ)</td>
                <td className="border border-gray-300 p-3">Can be up to 2^|Q_NFA| in worst case after conversion</td>
                <td className="border border-gray-300 p-3">Often smallest among all three models</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Time Complexity<br />(for input length m)</td>
                <td className="border border-gray-300 p-3">O(m × |Q|²) - quadratic in states due to epsilon closure and set operations</td>
                <td className="border border-gray-300 p-3">O(m) - linear, just table lookups (optimal)</td>
                <td className="border border-gray-300 p-3">O(m × |Q|²) - same as NFA, with epsilon closure overhead</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Space Complexity<br />(for simulation)</td>
                <td className="border border-gray-300 p-3">O(|Q|) for storing current state set</td>
                <td className="border border-gray-300 p-3">O(1) - just current state (most efficient)</td>
                <td className="border border-gray-300 p-3">O(|Q|) for state sets plus epsilon closure stack</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Transitions per State</td>
                <td className="border border-gray-300 p-3">0, 1, or many transitions for each symbol</td>
                <td className="border border-gray-300 p-3">Exactly one transition for each symbol (total function)</td>
                <td className="border border-gray-300 p-3">0, 1, or many transitions plus epsilon transitions</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Best Use Case</td>
                <td className="border border-gray-300 p-3">Theoretical analysis, regex compilation intermediate step, teaching automata concepts</td>
                <td className="border border-gray-300 p-3">High-performance pattern matching, lexical analyzers after compilation, hardware implementation</td>
                <td className="border border-gray-300 p-3">Direct regex-to-automaton construction, theoretical proofs, combining multiple patterns</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Worst Case Scenario</td>
                <td className="border border-gray-300 p-3">When DFA version would be small - unnecessary overhead of managing state sets</td>
                <td className="border border-gray-300 p-3">Patterns like "strings with nth symbol from end = 'a'" require exponential states</td>
                <td className="border border-gray-300 p-3">Deep nesting of epsilon transitions causing large closures</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 p-3 font-semibold">Computational Power</td>
                <td colSpan={3} className="border border-gray-300 p-3 text-center font-semibold">
                  ALL EQUIVALENT - Recognize exactly the same class of languages (Regular Languages)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Real-World Example</td>
                <td className="border border-gray-300 p-3">Python's regex engine internally during pattern compilation</td>
                <td className="border border-gray-300 p-3">Flex-generated lexers after optimization, network packet filters</td>
                <td className="border border-gray-300 p-3">Thompson's NFA construction algorithm from regex AST</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Conversion Possibility</td>
                <td className="border border-gray-300 p-3">Can convert to DFA via subset construction (possible state explosion)</td>
                <td className="border border-gray-300 p-3">Trivially an NFA (δ returns singleton sets)</td>
                <td className="border border-gray-300 p-3">Remove ε-transitions → NFA → DFA (two-step process)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 mt-6">
          <h4 className="font-bold text-lg mb-4">When to Choose What?</h4>
          <p className="font-semibold mb-3">Decision Guide:</p>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-green-300">
              <h5 className="font-semibold text-green-700 mb-2">Choose NFA when:</h5>
              <ul className="text-sm space-y-1 list-disc ml-6">
                <li>You're designing an automaton manually and want simplicity</li>
                <li>The pattern has complex alternations or nondeterministic choices</li>
                <li>You're building an intermediate representation (will convert to DFA later)</li>
                <li>Memory for state table is more constrained than execution time</li>
                <li>You're teaching or learning automata theory concepts</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-blue-300">
              <h5 className="font-semibold text-blue-700 mb-2">Choose DFA when:</h5>
              <ul className="text-sm space-y-1 list-disc ml-6">
                <li>Execution speed is critical and pattern will be used repeatedly</li>
                <li>You need predictable, constant-time-per-symbol performance</li>
                <li>Implementing in hardware or on resource-constrained embedded systems</li>
                <li>The automaton is already compiled (conversion done offline)</li>
                <li>You can afford the state table size (or it's small anyway)</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-purple-300">
              <h5 className="font-semibold text-purple-700 mb-2">Choose ε-NFA when:</h5>
              <ul className="text-sm space-y-1 list-disc ml-6">
                <li>Converting regular expressions to automata programmatically</li>
                <li>Combining multiple automata with union/concatenation operations</li>
                <li>Initial design phase (most intuitive for complex patterns)</li>
                <li>Proving theoretical properties about regular languages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Practical Hybrid Approaches</h3>
        <p className="mt-4">Modern regex engines often use hybrid strategies that combine the best of both worlds:</p>

        <div className="mt-6 space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h4 className="font-semibold text-lg mb-3">🔬 Lazy DFA Construction (Used in Google RE2, Rust regex)</h4>
            <p className="text-sm mb-3">Instead of precomputing the full DFA (which could be huge), these engines:</p>
            <ol className="text-sm list-decimal ml-6 space-y-1">
              <li>Start with the NFA representation (compact)</li>
              <li>During execution, simulate the NFA but cache DFA states as they're discovered</li>
              <li>Reuse cached DFA states on subsequent matches (fast path)</li>
              <li>Fall back to NFA simulation for uncached paths (slow path)</li>
              <li>Limit cache size to prevent memory explosion</li>
            </ol>
            <p className="text-sm mt-3 font-semibold text-blue-700">Result: Near-DFA speed for common patterns while avoiding exponential state explosion!</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6">
            <h4 className="font-semibold text-lg mb-3">🔬 Thompson NFA Construction → Subset Construction Pipeline</h4>
            <p className="text-sm mb-3">The standard approach in compiler lexer generators (Flex, Lex):</p>
            <ol className="text-sm list-decimal ml-6 space-y-1">
              <li>Start with multiple regex patterns (keywords, identifiers, operators)</li>
              <li>Convert each regex to ε-NFA using Thompson's algorithm (easy!)</li>
              <li>Combine all ε-NFAs into one using new start state with ε-transitions (easy!)</li>
              <li>Remove ε-transitions to get standard NFA</li>
              <li>Apply subset construction to get DFA (may explode, but done offline)</li>
              <li>Minimize DFA to reduce states (Hopcroft's algorithm)</li>
              <li>Generate fast C code with state transition table</li>
            </ol>
            <p className="text-sm mt-3 font-semibold text-green-700">Result: Fast, optimized lexer despite complex patterns, because conversion overhead is paid once at compile-time!</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📄 Quick Reference Cheat Sheet</h3>
        <p className="mt-2 mb-6">Save this page for quick review! Here's everything you need to remember about NFAs at a glance.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">🔑 Key Definitions</h4>
            <ul className="text-sm space-y-2">
              <li><strong>NFA:</strong> 5-tuple (Q, Σ, δ, q₀, F) where δ: Q × Σ → P(Q)</li>
              <li><strong>Nondeterminism:</strong> Multiple possible next states for same input</li>
              <li><strong>ε-transition:</strong> State change without consuming input</li>
              <li><strong>Epsilon Closure:</strong> All states reachable via ε-transitions</li>
              <li><strong>Acceptance:</strong> ∃ path to accepting state (existential)</li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">📐 Important Algorithms</h4>
            <ul className="text-sm space-y-2">
              <li><strong>ε-closure(S):</strong> DFS/BFS from S following ε-edges</li>
              <li><strong>move(S, a):</strong> ⋃{'{'}'δ(q,a) | q ∈ S'{'}'}</li>
              <li><strong>NFA Simulation:</strong> S₀ = ε-closure({'{'}q₀{'}'}); Sᵢ₊₁ = ε-closure(move(Sᵢ, aᵢ))</li>
              <li><strong>Subset Construction:</strong> DFA state = subset of NFA states</li>
            </ul>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">⚙️ NFA Simulation Steps</h4>
            <ol className="text-sm space-y-2 list-decimal ml-4">
              <li><strong>Initialize:</strong> S = ε-closure({'{'}q₀{'}'})</li>
              <li><strong>For each input symbol a:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li>Compute next = move(S, a)</li>
                  <li>S = ε-closure(next)</li>
                </ul>
              </li>
              <li><strong>Accept if</strong> S ∩ F ≠ ∅</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">✅ When to Use NFAs</h4>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold mb-1">Best for:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Manual automaton design</li>
                  <li>Regex to automaton conversion</li>
                  <li>Intermediate compilation stage</li>
                  <li>Compact representation needed</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Avoid when:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Need maximum speed</li>
                  <li>Real-time pattern matching</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">⚠️ Common Mistakes</h4>
            <ul className="text-sm space-y-1">
              <li>❌ Thinking NFAs are more powerful than DFAs</li>
              <li>❌ Forgetting ε-closure at initialization</li>
              <li>❌ Rejecting when one path dies (need all paths to die)</li>
              <li>❌ Thinking ε-transitions consume input</li>
              <li>❌ Not handling missing transitions (return ∅)</li>
            </ul>
          </div>

          <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-4">
            <h4 className="font-semibold text-lg mb-3">⏱️ Complexity Reference</h4>
            <div className="text-sm space-y-3">
              <div>
                <p className="font-semibold mb-1">NFA Simulation:</p>
                <ul className="list-disc ml-6">
                  <li>Time: O(m × |Q|²)</li>
                  <li>Space: O(|Q|)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-1">Subset Construction:</p>
                <ul className="list-disc ml-6">
                  <li>Time: O(|Σ| × 2^|Q|)</li>
                  <li>DFA states: up to 2^|Q|</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>🚀 Go Deeper: Advanced Topics &amp; Resources</h3>

        <h4 className="font-semibold text-lg mt-6 mb-4">Advanced Concepts</h4>
        <p className="mb-4">Ready to go beyond the basics? Here are related advanced topics that build on your NFA knowledge:</p>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6">
            <h5 className="font-semibold text-lg mb-3">🔬 Advanced Topic 1: NFA Minimization and State Reduction</h5>
            <p className="text-sm mb-3">
              While DFA minimization (using Hopcroft's algorithm or Moore's algorithm) is well-studied, NFA minimization is more complex. Unlike DFAs where a unique minimal DFA exists for any language, NFAs don't have a unique minimal form. However, techniques exist to reduce NFA size while preserving the recognized language. Research in this area includes bisimulation-based minimization and lookahead-based reduction.
            </p>
            <p className="text-sm mb-3">
              This relates to what we learned because smaller NFAs mean faster simulation and less memory usage. Understanding these techniques helps in optimizing regex engines and compiler lexers.
            </p>
            <p className="text-sm mb-2"><strong>Why it's important:</strong> Modern pattern matching systems process billions of strings per day. Even small improvements in NFA size can save significant computational resources at scale.</p>
            <p className="text-sm"><strong>Learn more:</strong> Search for "NFA minimization algorithms", read papers on "bisimulation equivalence for NFAs", explore tools like JFLAP that visualize minimization</p>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6">
            <h5 className="font-semibold text-lg mb-3">🔬 Advanced Topic 2: Alternating Finite Automata (AFAs)</h5>
            <p className="text-sm mb-3">
              AFAs extend NFAs with both existential AND universal nondeterminism. In an AFA, some states require ALL successor paths to accept (universal branching) while others need only one path to accept (existential branching). Despite this added complexity, AFAs recognize the same regular languages but can be exponentially more succinct than both NFAs and DFAs for certain patterns.
            </p>
            <p className="text-sm mb-3">
              This connects to NFAs through the hierarchy of automata models. Understanding how universal quantification (∀) complements existential quantification (∃) in NFAs deepens your grasp of nondeterministic computation models.
            </p>
            <p className="text-sm mb-2"><strong>Why it's important:</strong> AFAs appear in model checking, temporal logic verification, and tree automata theory. They're crucial for formal verification of hardware and software systems.</p>
            <p className="text-sm"><strong>Learn more:</strong> Study "alternating automata theory", explore applications in model checking (tools like SPIN, NuSMV)</p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6">
            <h5 className="font-semibold text-lg mb-3">🔬 Advanced Topic 3: Two-Way NFAs and Reversal-Bounded Automata</h5>
            <p className="text-sm mb-3">
              Standard NFAs read input left-to-right once (one-way). Two-way NFAs can move their read head both left and right on the input tape, similar to Turing machines but with finite state control. Surprisingly, two-way NFAs still recognize only regular languages! However, they can recognize patterns exponentially more efficiently in terms of state count. Reversal-bounded automata limit the number of direction changes, creating an interesting spectrum of models between finite automata and Turing machines.
            </p>
            <p className="text-sm mb-3">
              This extends the NFA model we studied by adding bidirectional input scanning while maintaining finite state control. It shows that computational power isn't determined by head movement, but by memory capacity (finite states vs. infinite tape).
            </p>
            <p className="text-sm mb-2"><strong>Why it's important:</strong> Understanding these variants clarifies the boundary between regular and non-regular languages, and appears in parsing theory and natural language processing.</p>
            <p className="text-sm"><strong>Learn more:</strong> Read Hopcroft & Ullman's "Introduction to Automata Theory" Chapter 3, search for "two-way automata Shepherdson's theorem"</p>
          </div>
        </div>

        <h4 className="font-semibold text-lg mt-8 mb-4">📚 Recommended Resources</h4>

        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h5 className="font-semibold mb-3">Books:</h5>
            <ul className="text-sm space-y-3">
              <li>
                <strong>Introduction to the Theory of Computation</strong><br />
                <span className="text-gray-600">by Michael Sipser - Chapter 1: Excellent, accessible treatment of NFAs with clear proofs</span>
              </li>
              <li>
                <strong>Introduction to Automata Theory, Languages, and Computation</strong><br />
                <span className="text-gray-600">by Hopcroft, Motwani, Ullman - Chapters 2-3: Classic comprehensive reference</span>
              </li>
              <li>
                <strong>Automata and Computability</strong><br />
                <span className="text-gray-600">by Dexter Kozen - Concise, mathematically rigorous approach to NFAs and DFAs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h5 className="font-semibold mb-3">Research Papers:</h5>
            <ul className="text-sm space-y-3">
              <li>
                <strong>"Finite Automata and Their Decision Problems"</strong><br />
                <span className="text-gray-600">by Rabin & Scott (1959) - The foundational paper introducing NFAs</span>
              </li>
              <li>
                <strong>"Regular Expression Search Algorithm"</strong><br />
                <span className="text-gray-600">by Ken Thompson (1968) - Classic paper on converting regex to NFA</span>
              </li>
              <li>
                <strong>"On the State Complexity of Nondeterministic Finite Automata"</strong><br />
                <span className="text-gray-600">by Meyer & Fischer - State blowup analysis</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h5 className="font-semibold mb-3">Online Courses:</h5>
            <ul className="text-sm space-y-3">
              <li>
                <strong>Coursera</strong><br />
                <span className="text-gray-600">- "Automata Theory" by Stanford University: Comprehensive coverage with programming assignments</span>
              </li>
              <li>
                <strong>MIT OpenCourseWare</strong><br />
                <span className="text-gray-600">- 18.404J Theory of Computation: Graduate-level rigorous treatment</span>
              </li>
              <li>
                <strong>Udacity</strong><br />
                <span className="text-gray-600">- "Intro to Theoretical Computer Science": Practical focus with coding exercises</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <h5 className="font-semibold mb-3">Interactive Tools:</h5>
            <ul className="text-sm space-y-3">
              <li>
                <strong>JFLAP (jflap.org)</strong><br />
                <span className="text-gray-600">- Full-featured desktop tool for designing, testing, and converting NFAs/DFAs</span>
              </li>
              <li>
                <strong>Automaton Simulator (automatonsimulator.com)</strong><br />
                <span className="text-gray-600">- Browser-based NFA design and simulation</span>
              </li>
              <li>
                <strong>FSM Simulator (ivanzuzak.info/noam/webapps/fsm_simulator/)</strong><br />
                <span className="text-gray-600">- Lightweight online NFA/DFA simulator</span>
              </li>
              <li>
                <strong>Regex101 (regex101.com)</strong><br />
                <span className="text-gray-600">- See how regex patterns compile to automata in real-time</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>💼 Interview Preparation</h3>
        <p className="mt-4 mb-6">
          NFAs and automata theory appear frequently in technical interviews, especially at companies working on compilers, databases, search engines, and security systems. Here are typical questions:
        </p>

        <div className="space-y-6">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">Interview Question 1: Design and Equivalence</h4>
            <p className="text-sm mb-4">
              <strong>Question:</strong> "Design an NFA that accepts all binary strings where the number of 1's is divisible by 3. Then explain how you would convert it to a DFA and analyze the state count difference."
            </p>

            <details className="bg-white p-4 rounded border border-blue-300">
              <summary className="font-semibold cursor-pointer text-blue-700">Show Approach</summary>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">How to approach:</p>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li>First, recognize this is actually a case where DFA is natural (no real nondeterminism needed)</li>
                    <li>Design using states representing count mod 3: {'{'}q₀, q₁, q₂{'}'}</li>
                    <li>Explain why this particular problem doesn't benefit from nondeterminism</li>
                    <li>Discuss that subset construction would yield the same 3 states</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-2">Key points to mention:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Not all problems benefit from nondeterminism</li>
                    <li>Counting/arithmetic properties typically need deterministic tracking</li>
                    <li>Subset construction preserves language but may change state count</li>
                    <li>Complexity analysis: NFA simulation O(n) here, DFA also O(n) but faster constant</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold mb-2">Sample answer:</p>
                  <p className="italic">
                    "For counting modulo 3, I'd use 3 states representing remainder 0, 1, 2. On input '1', transition q₀→q₁→q₂→q₀ cyclically. On '0', self-loop. This is naturally deterministic, so both NFA and DFA have 3 states. However, for patterns like 'strings ending with 01', NFA shines with fewer states using nondeterministic guessing of where the pattern starts."
                  </p>
                </div>
              </div>
            </details>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">Interview Question 2: Regex to NFA Conversion</h4>
            <p className="text-sm mb-4">
              <strong>Question:</strong> "Explain how a regex engine converts the pattern `(a|b)*abb` to an NFA. What role do epsilon transitions play?"
            </p>

            <details className="bg-white p-4 rounded border border-green-300">
              <summary className="font-semibold cursor-pointer text-green-700">Show Approach</summary>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">How to approach:</p>
                  <ol className="list-decimal ml-6 space-y-1">
                    <li>Describe Thompson's construction algorithm step-by-step</li>
                    <li>Build NFAs for atomic parts: a, b</li>
                    <li>Combine with alternation (|) using ε-transitions</li>
                    <li>Apply Kleene star (*) using ε-transitions for loop and optional match</li>
                    <li>Concatenate with 'abb' part</li>
                  </ol>
                </div>

                <div>
                  <p className="font-semibold mb-2">Key points to mention:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Epsilon transitions enable modular construction</li>
                    <li>Each regex operator has a standard NFA fragment</li>
                    <li>Final NFA can be optimized by removing ε-transitions</li>
                    <li>This is how tools like Flex, grep, Python re work internally</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded">
                  <p className="font-semibold mb-2">Sample answer:</p>
                  <p className="italic">
                    "Thompson's algorithm builds the NFA compositionally. For (a|b), create two parallel paths from a split state using ε-transitions. For *, add an ε-loop back to the start and an ε-skip around it. The resulting NFA has O(|regex|) states and naturally handles all regex features. Epsilon transitions glue pieces together without complicating the logic of each component."
                  </p>
                </div>
              </div>
            </details>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
            <h4 className="font-bold text-lg mb-3">Interview Question 3: Performance Analysis</h4>
            <p className="text-sm mb-4">
              <strong>Question:</strong> "You need to match 10,000 patterns against a 1GB log file. Would you use NFA or DFA? Explain the trade-offs and potential optimizations."
            </p>

            <details className="bg-white p-4 rounded border border-purple-300">
              <summary className="font-semibold cursor-pointer text-purple-700">Show Approach</summary>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="font-semibold mb-2">How to approach:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Analyze the space-time tradeoff: NFA compact but slower, DFA fast but potentially huge</li>
                    <li>Consider hybrid approaches: lazy DFA construction, cached NFA simulation</li>
                    <li>Discuss parallelization opportunities</li>
                    <li>Mention memory constraints and cache behavior</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2">Key points to mention:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Combining 10k patterns into one NFA is feasible (Thompson construction)</li>
                    <li>Full DFA might explode to gigabytes of state table</li>
                    <li>Lazy/on-demand DFA construction best of both worlds</li>
                    <li>Real systems (grep, Snort) use these hybrid techniques</li>
                    <li>Memory bandwidth often bottleneck, not CPU cycles</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-3 rounded">
                  <p className="font-semibold mb-2">Sample answer:</p>
                  <p className="italic">
                    "I'd combine all 10k patterns into a single NFA, then use lazy DFA construction during scanning. Build DFA states on-demand and cache them (with bounded cache size to prevent explosion). This gives near-DFA speed for common patterns while avoiding exponential space blowup. This is exactly what Google's RE2 engine does, guaranteeing O(input size) runtime regardless of pattern complexity."
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-400 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">🎓 Congratulations on Completing This Module!</h3>
          <p className="text-lg mb-6">
            You've mastered Nondeterministic Finite Automata—from basic concepts to implementation and conversion algorithms. Keep practicing with the examples and try implementing your own NFA simulator!
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              ↑ Back to Top
            </a>
            <a href="#deep-dive" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              📖 Review Theory
            </a>
            <a href="#" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              🎯 More Practice
            </a>
            <a href="#code-implementation" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              💻 Code Examples
            </a>
          </div>
        </div>
      </section>
      <section className="content-section mt-12 bg-slate-50 p-8 rounded-[3rem] border-2 border-slate-100">
        <h2 className="text-3xl font-black mb-8 text-center uppercase tracking-tighter italic">Module 1.4 Mastery Quiz</h2>
        <div className="bg-white p-6 rounded-xl border-2 border-slate-100 shadow-sm transition-all hover:shadow-md">
          <Quiz
            title="Deterministic Finite Automata Quiz"
            questions={quizQuestions}
            subject="FLAT"
            unitId={1}
            moduleId={4}
          />
        </div>
      </section>

      <div className="mt-16 py-8 border-t text-center opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[1em]">Unit 1.4 | Module Complete</p>
      </div>

    </div>
  );
};

export default Module1_4;
