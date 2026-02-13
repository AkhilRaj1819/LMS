'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit5: React.FC<Unit5Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const module1Quiz = [
    {
      question: "What are the four levels of the Chomsky Hierarchy?",
      options: [
        "Regular, Context-Free, Context-Sensitive, Unrestricted",
        "Type-0, Type-1, Type-2, Type-3",
        "DFA, PDA, LBA, TM",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "The Chomsky Hierarchy has four levels: Type-3 (Regular), Type-2 (Context-Free), Type-1 (Context-Sensitive), and Type-0 (Unrestricted), recognized by FA, PDA, LBA, and TM respectively."
    },
    {
      question: "Which automaton recognizes Type-2 (Context-Free) languages?",
      options: [
        "Finite Automaton",
        "Pushdown Automaton",
        "Linear Bounded Automaton",
        "Turing Machine"
      ],
      correctAnswer: 1,
      explanation: "Type-2 (Context-Free) languages are recognized by Pushdown Automata (PDA), which have a stack for memory."
    },
    {
      question: "What is the relationship between language classes in Chomsky Hierarchy?",
      options: [
        "Type-3 ⊃ Type-2 ⊃ Type-1 ⊃ Type-0",
        "Type-3 ⊂ Type-2 ⊂ Type-1 ⊂ Type-0",
        "All types are equal",
        "No subset relationship exists"
      ],
      correctAnswer: 1,
      explanation: "Each level is a proper subset of the next: Type-3 ⊂ Type-2 ⊂ Type-1 ⊂ Type-0, with increasing computational power."
    },
    {
      question: "Which language class is most restrictive?",
      options: [
        "Unrestricted (Type-0)",
        "Context-Sensitive (Type-1)",
        "Context-Free (Type-2)",
        "Regular (Type-3)"
      ],
      correctAnswer: 3,
      explanation: "Regular languages (Type-3) are the most restrictive, recognized by finite automata with no additional memory."
    },
    {
      question: "What type of grammar has productions of form α → β where α contains at least one non-terminal?",
      options: [
        "Regular Grammar",
        "Context-Free Grammar",
        "Context-Sensitive Grammar",
        "Unrestricted Grammar"
      ],
      correctAnswer: 3,
      explanation: "Unrestricted (Type-0) grammars have the most general production form α → β where α must contain at least one non-terminal."
    }
  ];

  const module2Quiz = [
    {
      question: "What is a Turing Machine?",
      options: [
        "A finite automaton with a stack",
        "A finite automaton with an infinite tape",
        "A pushdown automaton with two stacks",
        "A linear bounded automaton"
      ],
      correctAnswer: 1,
      explanation: "A Turing Machine is a finite automaton augmented with an infinite tape that can be read from and written to, providing unlimited memory for computation."
    },
    {
      question: "What does the transition function δ of a TM return?",
      options: [
        "Only the next state",
        "Next state and symbol to write",
        "Next state, symbol to write, and direction to move",
        "Only the direction to move"
      ],
      correctAnswer: 2,
      explanation: "The TM transition function δ: Q × Γ → Q × Γ × {L,R} returns the next state, symbol to write, and direction (Left or Right) to move the head."
    },
    {
      question: "What is the Church-Turing Thesis?",
      options: [
        "All problems are computable",
        "Turing Machines capture the notion of effective computability",
        "The Halting Problem is decidable",
        "All languages are context-free"
      ],
      correctAnswer: 1,
      explanation: "The Church-Turing Thesis states that Turing Machines (and equivalent models) capture the intuitive notion of what can be effectively computed by any algorithmic process."
    },
    {
      question: "Which component is NOT part of a Turing Machine?",
      options: [
        "Infinite tape",
        "Read/write head",
        "Stack",
        "Finite control unit"
      ],
      correctAnswer: 2,
      explanation: "A Turing Machine has an infinite tape, read/write head, and finite control unit, but does NOT have a stack (that's a PDA component)."
    },
    {
      question: "What language class do Turing Machines recognize?",
      options: [
        "Regular languages",
        "Context-free languages",
        "Context-sensitive languages",
        "Recursively enumerable languages"
      ],
      correctAnswer: 3,
      explanation: "Turing Machines recognize recursively enumerable (Type-0) languages, the most general class in the Chomsky Hierarchy."
    }
  ];

  const module3Quiz = [
    {
      question: "What is the Post Correspondence Problem (PCP)?",
      options: [
        "A decidable problem about string matching",
        "An undecidable problem about finding matching sequences",
        "A problem about context-free languages",
        "A problem about regular expressions"
      ],
      correctAnswer: 1,
      explanation: "The Post Correspondence Problem is a fundamental undecidable problem that asks whether a sequence of domino tiles can be arranged so the top and bottom strings match."
    },
    {
      question: "In PCP, what are we trying to match?",
      options: [
        "Two different alphabets",
        "Top and bottom strings of domino sequence",
        "Left and right sides of tiles",
        "Input and output strings"
      ],
      correctAnswer: 1,
      explanation: "In PCP, we try to find a sequence of dominoes where concatenating the top strings equals concatenating the bottom strings."
    },
    {
      question: "What is Modified PCP?",
      options: [
        "PCP with only two dominoes",
        "PCP where first domino must be domino 1",
        "PCP with infinite dominoes",
        "PCP with only binary strings"
      ],
      correctAnswer: 1,
      explanation: "Modified PCP is a variant where the first domino in the sequence must be domino 1, and it's also undecidable."
    },
    {
      question: "Who introduced the Post Correspondence Problem?",
      options: [
        "Alan Turing",
        "Emil Post",
        "Alonzo Church",
        "Kurt Gödel"
      ],
      correctAnswer: 1,
      explanation: "The Post Correspondence Problem was introduced by Emil Post in 1946 as a fundamental undecidable problem."
    },
    {
      question: "Why is PCP important in computability theory?",
      options: [
        "It's the easiest problem to solve",
        "It's used to prove other problems undecidable via reduction",
        "It's the only undecidable problem",
        "It can solve the Halting Problem"
      ],
      correctAnswer: 1,
      explanation: "PCP is important because it's used as a source problem for reductions to prove many other problems undecidable."
    }
  ];

  const module4Quiz = [
    {
      question: "What is a decidable problem?",
      options: [
        "A problem that can be solved in polynomial time",
        "A problem for which an algorithm exists that always halts with correct answer",
        "A problem that can be solved by a finite automaton",
        "A problem that has no solution"
      ],
      correctAnswer: 1,
      explanation: "A decidable (recursive) problem is one for which there exists an algorithm that always terminates and gives the correct yes/no answer for all instances."
    },
    {
      question: "Which of the following is decidable?",
      options: [
        "Halting Problem",
        "Post Correspondence Problem",
        "DFA emptiness problem",
        "CFG equivalence problem"
      ],
      correctAnswer: 2,
      explanation: "The DFA emptiness problem (determining if L(M) = ∅) is decidable and can be solved by checking if any final state is reachable from the start state."
    },
    {
      question: "What is the relationship between decidable and semi-decidable languages?",
      options: [
        "They are the same",
        "All decidable languages are semi-decidable",
        "All semi-decidable languages are decidable",
        "They have no relationship"
      ],
      correctAnswer: 1,
      explanation: "All decidable (recursive) languages are semi-decidable (recursively enumerable), but not all semi-decidable languages are decidable."
    },
    {
      question: "Which CFG problem is decidable?",
      options: [
        "CFG equivalence",
        "CFG universality",
        "CFG membership",
        "CFG ambiguity"
      ],
      correctAnswer: 2,
      explanation: "CFG membership (is string w in L(G)?) is decidable using the CYK algorithm, while equivalence, universality, and ambiguity are undecidable."
    },
    {
      question: "Are decidable languages closed under complement?",
      options: [
        "Yes, always",
        "No, never",
        "Only for regular languages",
        "Only for context-free languages"
      ],
      correctAnswer: 0,
      explanation: "Decidable (recursive) languages are closed under complement - if L is decidable, then L̄ is also decidable."
    }
  ];

  const module5Quiz = [
    {
      question: "What is the Halting Problem?",
      options: [
        "Determining if a TM accepts a string",
        "Determining if a TM halts on a given input",
        "Determining if a language is regular",
        "Determining if a grammar is ambiguous"
      ],
      correctAnswer: 1,
      explanation: "The Halting Problem asks: given a Turing Machine M and input w, does M halt on w? This problem is undecidable, proven by Alan Turing using diagonalization."
    },
    {
      question: "What does Rice's Theorem state?",
      options: [
        "All problems are decidable",
        "Any non-trivial property of RE languages is undecidable",
        "The Halting Problem is decidable",
        "All context-free languages are decidable"
      ],
      correctAnswer: 1,
      explanation: "Rice's Theorem states that any non-trivial semantic property of recursively enumerable languages is undecidable, meaning we cannot algorithmically determine most properties of programs."
    },
    {
      question: "What proof technique is used to prove the Halting Problem undecidable?",
      options: [
        "Induction",
        "Diagonalization",
        "Contradiction only",
        "Direct proof"
      ],
      correctAnswer: 1,
      explanation: "The Halting Problem is proven undecidable using diagonalization, a technique that constructs a self-referential contradiction."
    },
    {
      question: "Which problem is undecidable?",
      options: [
        "DFA emptiness",
        "CFG membership",
        "CFG equivalence",
        "Regular expression equivalence"
      ],
      correctAnswer: 2,
      explanation: "CFG equivalence (do two CFGs generate the same language?) is undecidable, while DFA emptiness and CFG membership are decidable."
    },
    {
      question: "How do we typically prove a new problem is undecidable?",
      options: [
        "By solving it directly",
        "By reduction from a known undecidable problem",
        "By showing it's in NP",
        "By finding a polynomial algorithm"
      ],
      correctAnswer: 1,
      explanation: "We prove a problem undecidable by reducing a known undecidable problem (like Halting Problem or PCP) to it."
    }
  ];

  const unitQuiz = [
    {
      question: "What are the four levels of the Chomsky Hierarchy?",
      options: [
        "Regular, Context-Free, Context-Sensitive, Unrestricted",
        "Type-0, Type-1, Type-2, Type-3",
        "DFA, PDA, LBA, TM",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "The Chomsky Hierarchy has four levels: Type-3 (Regular), Type-2 (Context-Free), Type-1 (Context-Sensitive), and Type-0 (Unrestricted), recognized by FA, PDA, LBA, and TM respectively."
    },
    {
      question: "What is a Turing Machine?",
      options: [
        "A finite automaton with a stack",
        "A finite automaton with an infinite tape",
        "A pushdown automaton with two stacks",
        "A linear bounded automaton"
      ],
      correctAnswer: 1,
      explanation: "A Turing Machine is a finite automaton augmented with an infinite tape that can be read from and written to, providing unlimited memory for computation."
    },
    {
      question: "What is the Post Correspondence Problem (PCP)?",
      options: [
        "A decidable problem about string matching",
        "An undecidable problem about finding matching sequences",
        "A problem about context-free languages",
        "A problem about regular expressions"
      ],
      correctAnswer: 1,
      explanation: "The Post Correspondence Problem is a fundamental undecidable problem that asks whether a sequence of domino tiles can be arranged so the top and bottom strings match."
    },
    {
      question: "What is a decidable problem?",
      options: [
        "A problem that can be solved in polynomial time",
        "A problem for which an algorithm exists that always halts with correct answer",
        "A problem that can be solved by a finite automaton",
        "A problem that has no solution"
      ],
      correctAnswer: 1,
      explanation: "A decidable (recursive) problem is one for which there exists an algorithm that always terminates and gives the correct yes/no answer for all instances."
    },
    {
      question: "What is the Halting Problem?",
      options: [
        "Determining if a TM accepts a string",
        "Determining if a TM halts on a given input",
        "Determining if a language is regular",
        "Determining if a grammar is ambiguous"
      ],
      correctAnswer: 1,
      explanation: "The Halting Problem asks: given a Turing Machine M and input w, does M halt on w? This problem is undecidable, proven by Alan Turing using diagonalization."
    }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.1</div>
              <div className="lesson-title-main">
                <h1>Chomsky Hierarchy of Languages</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Classification of Formal Grammars</h3>
              <p>The Chomsky Hierarchy is a classification system for formal grammars and languages, developed by linguist Noam Chomsky. It organizes grammars and languages into four distinct levels based on their generative power and the complexity of their rules.</p>
              
              <div className="theory-box">
                <h5>Four Levels of the Chomsky Hierarchy</h5>
                <p>Understanding the classification of formal languages:</p>
                <ul>
                  <li><strong>Type-0 (Unrestricted):</strong> Recognized by Turing Machines, most general form</li>
                  <li><strong>Type-1 (Context Sensitive):</strong> Recognized by Linear Bounded Automata</li>
                  <li><strong>Type-2 (Context-Free):</strong> Recognized by Pushdown Automata</li>
                  <li><strong>Type-3 (Regular):</strong> Recognized by Finite Automata, most restrictive</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Language Inclusion" className="movie-poster" />
                  <h6>Language Inclusion</h6>
                  <p>Subset relationships between language classes</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Automata Hierarchy" className="movie-poster" />
                  <h6>Automata Hierarchy</h6>
                  <p>Corresponding computational models</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Chomsky Hierarchy Explained</h6>
                <div className="video-container">
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/b4ThUo3epeA?si=XcxLW02z22VI930Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>                </div>
              </div>

              <h4>Language Inclusion Hierarchy</h4>
              <div className="definition-box">
                <h6>Subset Relationships</h6>
                <ul>
                  <li><strong>Type-3 ⊂ Type-2 ⊂ Type-1 ⊂ Type-0:</strong> Each level contains all previous levels</li>
                  <li><strong>Regular ⊂ Context-Free ⊂ Context Sensitive ⊂ Recursively Enumerable</strong></li>
                  <li><strong>Proper Subsets:</strong> Each inclusion is strict (proper subset)</li>
                  <li><strong>Increasing Power:</strong> Higher levels can generate more complex languages</li>
                </ul>
              </div>

              <h4>Type-0: Unrestricted Grammars</h4>
              <ul>
                <li><strong>Production Form:</strong> α → β where α contains at least one non-terminal</li>
                <li><strong>Recognition:</strong> Turing machines</li>
                <li><strong>Language Class:</strong> Recursively enumerable languages</li>
                <li><strong>Closure Properties:</strong> Closed under union, concatenation, Kleene star</li>
              </ul>

              <div className="example-box">
                <h5>Hierarchy Examples</h5>
                <div className="hierarchy-examples">
                  <h6>Type-3 (Regular)</h6>
                  <p><strong>Language:</strong> (a+b)* - All strings over alphabet containing a and b</p>
                  <p><strong>Production:</strong> A → aB | a (right-linear form)</p>
                  
                  <h6>Type-2 (Context-Free)</h6>
                  <p><strong>Language:</strong> a^n b^n where n ≥ 1 - Equal number of a's and b's</p>
                  <p><strong>Production:</strong> S → aSb | ab</p>
                  
                  <h6>Type-1 (Context Sensitive)</h6>
                  <p><strong>Language:</strong> a^n b^n c^n where n ≥ 1 - Equal a's, b's, and c's</p>
                  <p><strong>Production:</strong> αAβ → αγβ where |γ| ≥ |A|</p>
                  
                  <h6>Type-0 (Unrestricted)</h6>
                  <p><strong>Language:</strong> Any recursively enumerable language</p>
                  <p><strong>Production:</strong> α → β (most general form)</p>
                </div>
              </div>

              <h4>Key Properties of Each Level</h4>
              <div className="definition-box">
                <h6>Computational Characteristics</h6>
                <ul>
                  <li><strong>Type-3:</strong> Finite memory, regular expressions, closed under all Boolean operations</li>
                  <li><strong>Type-2:</strong> Stack memory, pushdown automata, not closed under intersection</li>
                  <li><strong>Type-1:</strong> Linear bounded memory, length non-decreasing productions</li>
                  <li><strong>Type-0:</strong> Unlimited memory, Turing complete, most expressive</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 1 Quiz: Chomsky Hierarchy" questions={module1Quiz} subject="FLAT" unitId={5} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Turing Machine Definition →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.2</div>
              <div className="lesson-title-main">
                <h1>Turing Machine: Definition and Model</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Formal Definition of Turing Machine</h3>
              <p>A Turing Machine is the most powerful computational model in the automata hierarchy. It extends finite automata with an infinite tape that can be read from and written to, providing unlimited memory for computation.</p>
              
              <div className="theory-box">
                <h5>Turing Machine Components</h5>
                <p>A Turing Machine is a 7-tuple M = (Q, Σ, Γ, δ, q₀, B, F) where:</p>
                <ul>
                  <li><strong>Q:</strong> Finite set of states</li>
                  <li><strong>Σ:</strong> Input alphabet (does not contain blank symbol B)</li>
                  <li><strong>Γ:</strong> Tape alphabet, Σ ⊆ Γ and B ∈ Γ</li>
                  <li><strong>δ:</strong> Transition function: Q × Γ → Q × Γ × {'{'}L,R{'}'}</li>
                  <li><strong>q₀:</strong> Initial state (q₀ ∈ Q)</li>
                  <li><strong>B:</strong> Blank symbol (B ∈ Γ - Σ)</li>
                  <li><strong>F:</strong> Set of final/accepting states (F ⊆ Q)</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Turing Machine Model" className="movie-poster" />
                  <h6>TM Model</h6>
                  <p>Components and structure</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="TM Tape" className="movie-poster" />
                  <h6>Infinite Tape</h6>
                  <p>Read/write memory model</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="TM Transitions" className="movie-poster" />
                  <h6>TM Transitions</h6>
                  <p>State changes and tape operations</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Turing Machine Basics</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/fQY69m8R_b4?si=9odXD-X9P-Z0LUV0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Turing Machine Components</h4>
              <div className="definition-box">
                <h6>Physical Components</h6>
                <ul>
                  <li><strong>Finite Control Unit:</strong> Processor that maintains current state</li>
                  <li><strong>Infinite Tape:</strong> Linear array of cells extending infinitely in both directions</li>
                  <li><strong>Read/Write Head:</strong> Points to current cell, can read and write symbols</li>
                  <li><strong>Transition Function:</strong> Determines next action based on current state and symbol</li>
                </ul>
              </div>

              <h4>Operational Characteristics</h4>
              <ul>
                <li><strong>Universal:</strong> Can simulate any algorithm that can be computed</li>
                <li><strong>Unbounded Memory:</strong> Infinite tape provides unlimited storage</li>
                <li><strong>Deterministic:</strong> Each configuration has at most one successor</li>
                <li><strong>Halting:</strong> May enter final state, reject, or loop indefinitely</li>
              </ul>

              <div className="example-box">
                <h5>TM Operation Example</h5>
                <div className="tm-operation">
                  <h6>Transition Function Format</h6>
                  <p><strong>δ(q, a) = (p, b, D)</strong></p>
                  <ul>
                    <li><strong>q:</strong> Current state</li>
                    <li><strong>a:</strong> Symbol currently under head</li>
                    <li><strong>p:</strong> Next state to transition to</li>
                    <li><strong>b:</strong> Symbol to write at current position</li>
                    <li><strong>D:</strong> Direction to move head (L for left, R for right)</li>
                  </ul>
                  
                  <h6>Example Transition</h6>
                  <p><strong>δ(q₀, 0) = (q₁, 1, R)</strong></p>
                  <p>From state q₀, reading symbol 0, go to state q₁, write 1, move right</p>
                </div>
              </div>

              <h4>Computational Power</h4>
              <div className="definition-box">
                <h6>Theoretical Significance</h6>
                <ul>
                  <li><strong>Church-Turing Thesis:</strong> Captures the notion of effective computability</li>
                  <li><strong>Equivalent Models:</strong> λ-calculus, μ-recursive functions, RAM machines</li>
                  <li><strong>Language Recognition:</strong> Recognizes recursively enumerable languages</li>
                  <li><strong>Decision Problems:</strong> Decides recursive languages</li>
                </ul>
              </div>

              <h4>Types of Turing Machine Variants</h4>
              <ul>
                <li><strong>Multi-tape TM:</strong> Multiple tapes for efficiency</li>
                <li><strong>Non-deterministic TM:</strong> Multiple possible transitions</li>
                <li><strong>Universal TM:</strong> Can simulate any other TM</li>
                <li><strong>Linear Bounded Automaton:</strong> Tape limited to input length</li>
              </ul>
            </section>

            <Quiz title="Module 2 Quiz: Turing Machine" questions={module2Quiz} subject="FLAT" unitId={5} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Chomsky Hierarchy</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Post Correspondence Problem →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.3</div>
              <div className="lesson-title-main">
                <h1>Post Correspondence Problem (PCP)</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Definition and Significance</h3>
              <p>The Post Correspondence Problem is a fundamental undecidable problem introduced by Emil Post in 1946. It serves as a cornerstone for proving the undecidability of many other computational problems.</p>
              
              <div className="theory-box">
                <h5>PCP Problem Statement</h5>
                <p>Given a finite collection of domino tiles, determine if there exists a sequence that matches:</p>
                <ul>
                  <li><strong>Instance:</strong> Finite collection of ordered pairs (A₁,B₁), (A₂,B₂), ..., (Aₖ,Bₖ)</li>
                  <li><strong>Solution:</strong> Sequence of indices i₁, i₂, ..., iₘ such that Aᵢ₁Aᵢ₂...Aᵢₘ = Bᵢ₁Bᵢ₂...Bᵢₘ</li>
                  <li><strong>Decision Problem:</strong> Does the given instance have a solution?</li>
                  <li><strong>Result:</strong> Undecidable - no algorithm exists to solve all instances</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="PCP Dominoes" className="movie-poster" />
                  <h6>PCP Dominoes</h6>
                  <p>String pairs as domino tiles</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="PCP Solution" className="movie-poster" />
                  <h6>PCP Solution</h6>
                  <p>Matching top and bottom strings</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Undecidability" className="movie-poster" />
                  <h6>Undecidability</h6>
                  <p>Fundamental computational limits</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Post Correspondence Problem</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/c83h0BSz6ic?si=ft4I9GAjykuircxo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>PCP Example with Solution</h4>
              <div className="example-box">
                <h5>Solvable PCP Instance</h5>
                <div className="pcp-example">
                  <h6>Domino Collection:</h6>
                  <ul>
                    <li><strong>Domino 1:</strong> (1, 101)</li>
                    <li><strong>Domino 2:</strong> (10, 00)</li>
                    <li><strong>Domino 3:</strong> (011, 11)</li>
                  </ul>
                  
                  <h6>Solution Sequence: 1, 3, 2</h6>
                  <p><strong>Top string:</strong> 1 + 011 + 10 = 101110</p>
                  <p><strong>Bottom string:</strong> 101 + 11 + 00 = 101110</p>
                  <p><strong>Result:</strong> Both strings are equal, so this is a valid solution!</p>
                </div>
              </div>

              <h4>Modified PCP</h4>
              <div className="definition-box">
                <h6>Variant of PCP</h6>
                <ul>
                  <li><strong>Constraint:</strong> The first domino in the sequence must be domino 1</li>
                  <li><strong>Relationship:</strong> PCP reduces to Modified PCP</li>
                  <li><strong>Undecidability:</strong> Modified PCP is also undecidable</li>
                  <li><strong>Proof Technique:</strong> Used in reductions to prove other problems undecidable</li>
                </ul>
              </div>

              <h4>Applications and Reductions</h4>
              <ul>
                <li><strong>Proving Undecidability:</strong> Many problems reduced from PCP</li>
                <li><strong>Context-Free Languages:</strong> Emptiness of intersection of CFLs</li>
                <li><strong>Language Theory:</strong> Universality of context-free grammars</li>
                <li><strong>Formal Systems:</strong> Validity of logical formulas</li>
              </ul>

              <div className="algorithm-box">
                <h6>PCP Reduction Strategy</h6>
                <p>To prove a problem P is undecidable using PCP:</p>
                <ol>
                  <li><strong>Assume:</strong> Problem P is decidable</li>
                  <li><strong>Construct:</strong> Algorithm that uses P to solve PCP</li>
                  <li><strong>Contradiction:</strong> This would make PCP decidable</li>
                  <li><strong>Conclusion:</strong> Problem P must be undecidable</li>
                </ol>
              </div>

              <h4>Significance in Computability Theory</h4>
              <div className="definition-box">
                <h6>Theoretical Importance</h6>
                <ul>
                  <li><strong>Fundamental Problem:</strong> One of the first proven undecidable problems</li>
                  <li><strong>Reduction Source:</strong> Used to prove undecidability of many other problems</li>
                  <li><strong>Computational Limits:</strong> Demonstrates inherent limitations of computation</li>
                  <li><strong>Practical Impact:</strong> Shows some problems have no algorithmic solutions</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 3 Quiz: Post Correspondence Problem" questions={module3Quiz} subject="FLAT" unitId={5} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Turing Machine Definition</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Decidable Problems →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.4</div>
              <div className="lesson-title-main">
                <h1>Decidable Problems</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Classification of Computational Problems</h3>
              <p>Problems in computer science can be classified based on whether there exists an algorithm to solve them. Decidable problems have algorithmic solutions that always terminate with correct answers.</p>
              
              <div className="theory-box">
                <h5>Decidable vs Undecidable Problems</h5>
                <p>Understanding the fundamental classification of computational problems:</p>
                <ul>
                  <li><strong>Decidable (Recursive):</strong> Algorithm exists that always halts with correct answer</li>
                  <li><strong>Semi-decidable (RE):</strong> Algorithm accepts 'yes' instances but may loop on 'no' instances</li>
                  <li><strong>Undecidable:</strong> No algorithm exists to solve all instances</li>
                  <li><strong>Co-RE:</strong> Complement of recursively enumerable languages</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Decidable Problems" className="movie-poster" />
                  <h6>Decidable Problems</h6>
                  <p>Problems with algorithmic solutions</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Language Hierarchy" className="movie-poster" />
                  <h6>Language Hierarchy</h6>
                  <p>Recursive and RE language classes</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Decision Procedures" className="movie-poster" />
                  <h6>Decision Procedures</h6>
                  <p>Algorithms that always terminate</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Decidability and Undecidability</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/JfX7VK7ocRU?si=FQGQWJssI6ZLgwDa" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Examples of Decidable Problems</h4>
              <div className="definition-box">
                <h6>Finite Automata Problems</h6>
                <ul>
                  <li><strong>Membership:</strong> Is string w in language L(M)?</li>
                  <li><strong>Emptiness:</strong> Is L(M) = ∅?</li>
                  <li><strong>Equivalence:</strong> Do two FAs recognize the same language?</li>
                  <li><strong>Finiteness:</strong> Is L(M) finite?</li>
                </ul>
              </div>

              <div className="definition-box">
                <h6>Context-Free Grammar Problems</h6>
                <ul>
                  <li><strong>Membership:</strong> Is string w in L(G) for CFG G?</li>
                  <li><strong>Emptiness:</strong> Is L(G) = ∅?</li>
                  <li><strong>Finiteness:</strong> Is L(G) finite?</li>
                  <li><strong>CYK Algorithm:</strong> Polynomial-time parsing for CNF grammars</li>
                </ul>
              </div>

              <h4>Closure Properties of Decidable Languages</h4>
              <ul>
                <li><strong>Union:</strong> If L₁ and L₂ are decidable, then L₁ ∪ L₂ is decidable</li>
                <li><strong>Intersection:</strong> If L₁ and L₂ are decidable, then L₁ ∩ L₂ is decidable</li>
                <li><strong>Complement:</strong> If L is decidable, then L̄ is decidable</li>
                <li><strong>Concatenation:</strong> If L₁ and L₂ are decidable, then L₁L₂ is decidable</li>
              </ul>

              <div className="example-box">
                <h5>Decidability Examples</h5>
                <div className="decidability-examples">
                  <h6>Regular Language Emptiness</h6>
                  <p><strong>Problem:</strong> Given DFA M, is L(M) = ∅?</p>
                  <p><strong>Algorithm:</strong> Check if any final state is reachable from start state</p>
                  <p><strong>Complexity:</strong> O(n) where n is number of states</p>
                  
                  <h6>CFG Membership (CYK Algorithm)</h6>
                  <p><strong>Problem:</strong> Given CFG G in CNF and string w, is w ∈ L(G)?</p>
                  <p><strong>Algorithm:</strong> Dynamic programming approach</p>
                  <p><strong>Complexity:</strong> O(n³|G|) where n is string length</p>
                </div>
              </div>

              <h4>Semi-decidable (Recursively Enumerable) Problems</h4>
              <div className="definition-box">
                <h6>RE Language Properties</h6>
                <ul>
                  <li><strong>Recognition:</strong> TM accepts all strings in language</li>
                  <li><strong>Halting:</strong> May not halt on strings not in language</li>
                  <li><strong>Enumeration:</strong> Can enumerate all strings in language</li>
                  <li><strong>Closure:</strong> Closed under union, intersection, concatenation</li>
                </ul>
              </div>

              <h4>Relationship Between Language Classes</h4>
              <div className="algorithm-box">
                <h6>Language Class Hierarchy</h6>
                <ul>
                  <li><strong>Recursive ⊂ Recursively Enumerable:</strong> All decidable languages are semi-decidable</li>
                  <li><strong>RE ∩ Co-RE = Recursive:</strong> A language is decidable iff both it and its complement are RE</li>
                  <li><strong>Proper Inclusion:</strong> There exist RE languages that are not recursive</li>
                  <li><strong>Complement Closure:</strong> Recursive languages closed under complement, RE languages are not</li>
                </ul>
              </div>

              <h4>Practical Implications</h4>
              <ul>
                <li><strong>Algorithm Design:</strong> Knowing decidability helps in choosing approaches</li>
                <li><strong>Compiler Construction:</strong> Parsing algorithms rely on decidable problems</li>
                <li><strong>Verification:</strong> Program verification often involves decidable subproblems</li>
                <li><strong>Optimization:</strong> Many optimization problems are decidable with efficient algorithms</li>
              </ul>
            </section>

            <Quiz title="Module 4 Quiz: Decidable Problems" questions={module4Quiz} subject="FLAT" unitId={5} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Post Correspondence Problem</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Undecidable Problems →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.5</div>
              <div className="lesson-title-main">
                <h1>Undecidable Problems</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>The Halting Problem and Undecidability</h3>
              <p>Undecidable problems represent fundamental limitations of computation. The most famous example is the Halting Problem, proven undecidable by Alan Turing using a diagonal argument technique.</p>
              
              <div className="theory-box">
                <h5>The Halting Problem</h5>
                <p>The canonical example of an undecidable problem:</p>
                <ul>
                  <li><strong>Problem Statement:</strong> Given a Turing Machine M and input w, does M halt on w?</li>
                  <li><strong>Proof Method:</strong> Proof by contradiction using diagonalization</li>
                  <li><strong>Significance:</strong> Shows inherent limits of algorithmic computation</li>
                  <li><strong>Applications:</strong> Used to prove other problems undecidable via reduction</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAACUCAMAAAAUEUq5AAABsFBMVEX////+/////v/+/v65y9Xg5OrEy9X///zU5ep8fHz7///e5ekAAAClpaXn5+eVprmysrKPj4+CgoL///mIiIirq6v29vbv7++ZmZn0//++vr7y8vL///bR0dHHx8fb29tjY2Pi4uJ0dHSdnZ0rKytVVVXDw8M7OzsaGhpsbGwMDAz//+6mm5Lp9P8AABQAJjulpK01NTVdXV1BQUFLS0sAAB8SAACFlKeYpLywpZhxeoHu5tM0PEHT0MmYpa7Bt7BMRjlucoXi2b4AFDaulopEUF7o5t0AJkIUAA6glXUZHiw4JxTbxLaJdF0kLzpxY0sdFgkyS2QOPFzu08BAWXmRgXZZZnx/k7E7ITTExNsOOEm9uprI3O+Jc2dacI95X0gzFzMPFx8QMFOhvsygjHdSZ49me6hRZ3VcPjQoLz8zJSEgGihRSkHp2NTP2OO2sKl+j5kMGTE3Wmo/RVJKPSrDrJaCn6r04ce01NnOu8GLeH8AADEyIxM+NEFNIxQmNUtMHStaV3M3EBaJi6J2aHZVXWN8i4y8moaqn4qFcFCegG9ig5JuWVIvDwA4HAD32cg0Nk89AAAWn0lEQVR4nO2djWPTVpLAn95z8hzl2bEj27Icf8b5xARIoKTEBJYU3IUm/dht6O1C4LbQLwo0bChtaW/Zu157belt/+WbGclfiWUpwU7PiQYIji3J8s+jeTPz5o0Y1zXOpKZpLBBbZOsvyMX+60c47qwLwfRweDQcSC9F54wtDwfSUxkbAq0d0zTpqdpHWHr+4UNDcMgx3dD58eRat5a6DpolYGxBu8hl04hqcDELqUnp065KHKBCo0RVchLtmAoOSYaOQCSXkmuy+RL8iqT0rD84uC3ThtECvK4DVgPGr+MrQsIfAaqGVLlovgC/CvCRhPR5IKaBcoZsqqj5x1O4EEITQqIBBAwM8YK2Nl6XqKigwr4PiDuERhlaAA30FC+D4yZMoC3Vjaw0LqyYKUvjBly1BteaMIzqyoTmOPQ+BLW7ThWv/uMGFdWKnbxooX5l5aq6dFktMGZIZvzhCkuO6qivsJlce2OUASCD9JfrMMCh5ZV2dLDnoEBVMIcqbMPZMQuuUKuMq9es2lAhp1dOvhmuZvTa6GrOqqyGq39cHpW13GMYcIy10/iwoDNjNTekZQsTuVFL5wIAd+LFkeIxpgoelMaA6vUbU+pS7S11bV3pG29PqTH5zvJ9depM9eHcDSBTWTttXn5XnRqTV8+rG6HKH86dfy2kocE0OlJlx5sqCVJ9Tzt5Tbv8J/ZnZW28zzZvsq0PKv/2F3b/7dj8Xy2eXTtdezjGbn24ev4227qTPXcpe/dj+EIEy/IOY1hAFQzr1Wv6/TvswjX98p80pPoBu49UjX//C9v42/jIj0j1zerTe0hV3Za/3Kk8vCfvfgxBA5dGJ8fg2FMVQs/+9J51/yOkeuu0jlQ/ZpufsLsfGJ9+lll9MF98ZmnZtTeiJ+eWHoxlty5Ofx6qPLw4fSqko03tGG4de6rg3mdXM/rqsAY/azHdPAOP2eoMu/xYVpNh+SiSDEEkX4tZ4nJyWJfZL5KPWfXhpdiwzimEDajuFQ6DuMBAXxq2Y6mTW6QhGLi2BfzTQZ85juu0Of6U1cUQ/MSooXPi5NhT1UDlhKYLQ2AeRGLUKpwcAAWougFxEoZdsCHXIYoFWyqzpQmEb8AzgQXoJJRHgWEHAIH/aVBsSrwwyaIDxiy6tNKAcIvRVqDIUpNAnnOBEVmngx57qo5w1hzLNRzD8J/AYBbUU7Rs1rILZ25TLgHVDiIQJv5g9T/7lIDqHiGOov2ZfUpAda+QcopcpLio1InZ8Ux030cIqO4R1MxoeXF6PFOKmtFcsni2mBONV3xJQLVNbG6pkbn5XBNhNDY1nWNsl1noJgHVNkFwqbSKT7AGRPovMzdv2kOYLwmotglQK8zOl4ilaFz2iDoxG/NvAgKq7SLSKlNX04au0q+5qbhvHyug2iKCmbPTpo2zSbD+SBTPRX26rwHVhoBG5qfK3ZClT5SYL9saUK0LwErOZbrbzozK+cIaUG1KYoqGKTdo+EJ+zteYFVCtS2pyOkVMXaHhiwXAGlD1J4ArNT2ZcoYp163wR0HFmOeIFVBlhMtcHN+dU3GRgkp62taAKklpKu0zIkUjkPfaNKCKEl2MdxunWoRsq8p5bHV0qLacd6fCh25iqjTbk1R1Edwoc6LQ3bAONFW7MppLJnVd6lhzyqh2DBWqY/3TLnEGndJUZJ9vnFGlrrmWgaaKxXtY/8ipCE1i2a5d1ijbZ5hcBLFEUyw66z387JbkotlNtQebKtdB7AponNMXEoXZtY/eeyPK+Ih5Iu336m/syNj4tOjyVQw4Vc50nVFxtOSgtUJjVD0KH8PPuhGgMqVUme0jc1rfj80Xu7i2g02VcVs5DcZ0bk/pY/ETFkVLN6yi9WFJKbVk7ltXMWpYSnQ5rd5QFfv8tnsgWMcjuWDycpxVvjhjcSl0WoYjNDAL7phEQ+AQEaB6IuNkpvfz1oKZc0nmxLdO9UBzg55RPcheryQCy3RAMWVVhWrqNj5l21RpgEvg7gK0fnwxfTZdYPs+ffsQ5olY+5PNxz2jOjE9cqgyTliRXvaXT+LXrMrVqSsL2Z+mti2deBuuhpWYTBQykfjIyNJIJJMz2T652gYjFSnG0ngq8cgMHqPlEL2iysz9+nyvKCOMKvTAtZLVd5+EjOsXc/Mva+cvbY+isuLCM5cd8cOb6XgyZxIFsxBLjxf29964Yykej+XALwNJRXNwjNZ4q5dUxSGKQ5UDQGFsvGdV7oKF3GEn/7a8oBsG6+xZOdoEQMzW35koExNf6mrraS5RNnc9HxvJNH7pHdXyQfY7uCBVhnV6mmD3/25VNi7mZsKlC6tqGJebucQANERl4nuLUSaS6ZQvK0BQzXgkted5lsqMl5y6l4GmSk4qk2zz75asbii1nH1HXbHIE+h8lugRxWMdXgDtG+8aLbVuWhgpdXgaDct4xn6TgaaKS/VwLTSWSpMZpRWTOlVIdzYBTIx0mnlCJuZk1IcNgF0ziQ75LcfHitghxYBT1WltI3fKdQ0D16ILKdxjq0SuDqBVyFKbk7sv6w4i2EykY9LQKRvIRPArGmyqEKTSX9AOiYsgkS4uTGOO77pHYt0m8woJj7kThBkd6bYBY+UcG3Bd1XRGgQDHhQ+YEJDOumnm0pqilOg218eS+U6K3NwC/3kq9KQ54LqK5lTSeMWRKkb/3NVPxZOMl7rOoKYSngmBWKbrFjhTkB50zwp9fbj2BZLlgqwBo4GqkxeAHlE3JDgQ5bu8I6lqwkuZGQNneLCpMgOGK0PDNCunZeXOwnLZ2bdKlrpYVTSaE2WPSel8bO8GbcBQWSODTtURj5O2E1RgAFJ1ImApqltKbS/gCl+B1tl+vkt2j4iVmwGExitfvKt2QhqlzQ2tMT6m4owdCardxQ5xMQBoZPw4rzy9llt9cNNCY2G3q0HBcuBuZRbp5lilsS/VpcKmCoPLDFS5QxX2TovjQNXJfzIRb1y+nK2p28z4UllfhHFKsd5TKdZlOMNX4o1Xucx++onFsm/dG8pYuKjQadMC75NIHQ0L0F3Q1sVS9qXpYNXk2qkwk+tq4UIYwgfOHesY6xpfCVJDW7jI/mPbEtmnz4YyOtcM0SQHhmZQqY7va+ucOptJiXjj8tblVyrEjM0n+mYYr387yiVd7TrEN3WVceMu6GpN3SvEGcc2WLy+1QBTnU4kxhO7JR1zkbhS6lwy0pj247Ly6ZPEpLonH36N7gPOJOIr6S4pFtwgnapHq6De6+qHxOIL9s0VC0sSmuQG2K4WkdVuquMukpgHqovlZrYPLljj8nj5+ZP8w681AxjYGTx0R7t5tKzcoA7eMSvEx5Pnt4GqaC5phUFxgKnuZ7RCC7CYnGCRUp2JFHZDgG/iI2Gt7gOAv5r2DhMaVO3mANGVb1YsexLS2SyaHmR/tcPndyEiWC6CqftCuelZ4ep/20vFrmpSI4c218HJbzkMYB9vTiBg1xX8Mp5f0iWnNI/9Anx3bVQ1atqGT6GnwakrU8OVo5NxfUMfVDn6dXRoLgxGpgyzzthKgtfDTKE3hmMPGenIsCMR0aj2dWZWqA4D/tKif0mxmL16fSTV1V2Fl2INZZW6JqgrI82gkzKSO4wZnFaqQtOJKuUocJoCmzJjgwG7x1jrOvm9J+5BFSHaPQyRqjS4pCYH1NdAYFdOnZIkRFVKH1VS+7MAjoCyCrdKHjiNmUyH59vFxPd1Kx+gA2MGp5Uqdh7ENKWBBXWYYtOp3whOZDLqfWe4Tgf7okqZOs6ApqRWcuDi4RdH3Tc5RY3w7WN2z0//6ANRZfFcy6q/3R8hNeIjbZ1Lu9dkOGnrdqpwSWArV1Ap0hjdkMwus/HudemLKmqrTQy+PaBpJMM6sgXvkTRWormhq9FH99iDUAWek+7LUcW82enp3RKJ2bFahwPAc3kyvO26ilUfYGUMLLYznDowKmHE8rBu9WDeVEHb8epfPRdm658tUI/YirotC3pl8iUYOLokiLZOBSieH+5gugrDTdRF01Jxj1JfEtgiEnEpyoDnZsbF7hkWUJUKthSU8A+oUptXO6ema7L7ZemPKhjS9c+A6msLhpSWnlWPq6fC2dWvmYCvUzOyUk9xMqo+KvoORBU+d5RKKpr1UfXHEzRN6H0EHLHsHEtdY0VjAkEky/U0Q4OqBh7XrSf4UMPRA4ctA7tjym+GdYqVX4UqOjBEdW47svntwgWlbjzOqtB3Sq1uvWT/WlJPwtktcNVvyyy8kezYeadNDkgVcyxlweoVIY2yu4zPiWs6RIEKKuo7Nw6SG68vLWylCjbt1ouwWajlFlgtWshZRmFU1oaqv14ZxYJb5l5l402VqnaR6vkf5h++sVBZzf3HMujq2pvhClD9x4/ZB2PZ8zOTVyzyUvqmq6RUucTMhH3SjoUV+fEY81fEau+TysTzKeZ8S84xcmmIM8ReXZXMuPVi4fL5WfXS2HywqD4wisvG9Y++UeqmjsVL4AO4v5mnrtp+6voiWgDrwoMptWwg1YUsUP1nqPLw9cpbc9ceU5Gkn1DkgKOV7RblE5FCyomRUqVkImM2ZvR9HIOq32KJciGVcg6RKkUSyahjDFgLVe11bBYOVNenwusvzJP/yW6drk0iVfb8e91C+6q7rw3xQ5XcJzg62tWNndgDoHq7qrZrmy/Zf4UqT8eqpyLgFDiLJjw/3YGo2pc+mddYupyOx+ORcjpScDxNvwbAQZcqz5fT5Xg8DUfCuZum3u6xq0B1Z2Hthbl5k916Mzq5zX6+w5EqTrnzV6KKc0tC1hKjbH1loTY+EollJ8Ps5IqZTLLxXDaeX5sdmT+1ILNa/yxA+zmnRGF20imz3G+lZSmfPovrg0BPU3v3bberoJ/hy0T16udL777Ur55a+u4j/f6pbRyhwQQIN6yeVKnfM5yNxFJzRt4TRht4Exh6ACd2S80vvWfRXRB83Gji1alSOqU4XWpVMr/7FeZgZC267tOeXRHVmFXKpGqxytX/zsQsmY1lCsN6JTKM5QwwVh2cKg51EFlh/3iB5fsc+56D64+RK87lC25UZiKxBQznpJ8W8j2gSldzWeXZfhcGYUEGUM242oxWqhq4qFgKAjFVZfOmbn869FgpxUIRwcGpYldNKTDGsLtz4g0PsEEkPAV8DYjqsgzZC3xf0bcooPWc7eu+cCK+f11NFWfVlPsubVGAtDMg0tCM6JBm38hBYudGnN11vzCFnyjAroPC4EkaqLHopmF3Q5r3xeQPxB7YW5JRgu0wqNZ9+OjSObd4y01K0yPmfNr99TaqdPsGAxtkUgyADdq5nTTj9gKxTlQpK8m8KtjtiFUTWHEOHhqlVPArxJ6ymv0GmDPDyOPwqNqnj32BqGbFXxSAc4sncN2r6f5NtGVX8JNiOhcLmCVGmADDwFobo2sSIKemYqkJz9gKwwC8uAVmNXXqGktJP65hBYqgawNNjd71zerSM6qIKTc1kvJpBTARoPL1yXAX2UWV0sc4eWAYlAxhtoqCpU26LiYZL4LlPpvurqu4aE/Sbd+o0zHmwVA9jWwU/S3yETjeB+qwqTrG1Zw8W/CprKnJ2ZLjNbhuv2uGheHnx5IBGp7QC9Ipha2xvNv0ZSwyiVQjHlTBphrr4yHLqJzcHqVEOmimztZuLADK9UuWwepLJHRxqFQdOEnlb4ooOjc54ezlb7QCnaTsP0Ozx7lBqWoN8/XdF9vm1XTeMw+AmdMN9a2VXVPfhuxyc4x/13Ycqoxu2iXtdIEPrL2iajNFdS1O5exnuiltWdUzKN30ut0HoNkqGTWpELR6cZTRPZ9Qr7BUXHTMWoFVyuNJeVEFR3RjcidkbFz58HFtdnH6MasuXRxeW9xeHGNfrrDN9PQPYVkrLl6ywLp6X4q9sqtNEbGphOlyZTuqGZ2eLvhxF1qpUo93xip3n9GcSm0mhWO3Tk9SGs94BX8VzebGj9sr0Qe5Nx9XVvPzd7JPV2Lfr53/MX1j9H/e17ZuxD7drjzdnvn8a909hmtKz6lidfrkHKX4Opb90zBV9ufaNqm+joXL62+pzE9Kvf/o/M5O9Y3a1q9KhbJfgt18RrMsnT6sY2I8I1bw2X5+VlDbO5XTj6tw3DuPcPEpWIBHs2Gg+s4y++Vl5Ty+lWV0S+U60nuqqIOFs7MznUIt/D1/YinayMd2l7Y5Vs7u7wxnsr8uW7+pe6m10+bzndLWndTDcvlbynt2NHdO+tfLAqBl/vml/FTdq9wIX5jNz39k/u927szaZ0T1GttaZhsvK//azs+ErS7JsYb0wQKQ7zozfS7TYf5azCzN5lrSqd2lNbsCn6UWX7wkfx1jvynLWDtde/49u39HbqkbYxpOaRmuM8o+dBW+ko1tdvLtcO1GrvpULd3kl0+o4fWLQHX0KlDdZpsv2eqiUo/Bxfs9qKIg18y5s43llPWpk8z0XKxrrUC7tM9bsasnEy/k3WuhR2rBWHtSe34FqJpPz8SGqZ+B60pGH1RxADSccgrN7uJB9QmYs9KouAa/N1qGhjGy54n3h6othRE1W845ZEUpNqmK3pUCrbLLB/iqOB9mj5YumT8syOrKROSMvDBWfadYPBXS8W6FB8+v4gCEa864EDrdPdKgFX3oGnNJq9AwsYpDokbLJjxPvI9UQSNTucTSucXpYrF49uz0fMz0mdOuSztVmkKxFRJv8Ui3dmFramUSB2ZMsLp9Wk+qhrDLYDitOJP0H07jorsmqR8Npq0EFbbw35eqM9UiooU8SK40UX/Wv7RRxUiKpv85fX6Jt37hsrKajgzRcOPu8PiZueZ6FssNACMMfVQLhLM28E3ib6SkBhoBji/9XnaVROwe6D0iqb3SHrEyugsWrri1xyUstPB1A2hfNYGaXTlrV8c5D+1FfNI5l3ppbS9GK5ynwQwjl/DNScoaHVqjngGutPQQTDvaZVxCaJga77ZssMdyhKmiuab1wpjGwa4hh3dv9KNLlXEn9jCoaZhxmI26jjBVmTItXZqWgdO2suN9U/slA0y1U7AuYqb9SDCtcl090796LaxlsdBQ85MI65UMMNWOMq8STlMUWbl+7cPRr56EWS2Tt6gm5tBObmCpFmPJTnJOqbkELeHllevfP39WOx1em1ucW7G0gKoPWcIqqb0yiwurZvBa1yr37zzayZ8Ob71kj1SY0TzRIcnAUnW1AEsz+D9wBaos/utfkepvKuwvZ9MjOUpUMc6Mz9TX/2lZoFr97nR4/dTZqRWL4oHDOrmjRtU+GRQ9uzrMsqszllyNhSwpsDXTYZ3ckaLqpJjry8yoJwvOa+J8Lt4E+NCGq6NEtT5NXy/N1aiVMN7lF+NV1qV5aK/lSFHdJZyqEHBFo6bj8k5d7/9p1d/5qFLFZXOoqlSNQ6VyAVVP8ZO11uwGE7qdtw38VW/xQRXTgFTeQSs4eZBf9RYf+VWDZsroHy5sCqh6ix9dtRcY2Q7VoRFFOcpUfz8JqPZDAqr9kIBqP6RHVD2rgnsuHXsE/X+RAb63xT4X9B2m9I5qwoweopiTx4GqSEUOV2aOAdVA2iSg2g8JqPZDAqr9kIBqPySg2g8JqPZDAqr9kIBqPySg2g8JqPZDAqr9kIBqPySg2g8JqPZDAqr9kIBqPySg2g8JqPZDaKVno0uYn7aHgXgLLeywOy9ZSNVPe55AvIRuAxAa4vX7sBxaOfKRFuw1CVQl05dDw8OhQHonY6Crxujo0NDoEP4MpAdSGgrrgtH6eenvjl2BeAmn21mJ/wMjkSY/eRCD9QAAAABJRU5ErkJggg==" alt="Halting Problem" className="movie-poster" />
                  <h6>Halting Problem</h6>
                  <p>The fundamental undecidable problem</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Diagonalization" className="movie-poster" />
                  <h6>Diagonalization</h6>
                  <p>Proof technique for undecidability</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Reduction Proofs" className="movie-poster" />
                  <h6>Reduction Proofs</h6>
                  <p>Proving undecidability via reductions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Halting Problem Proof</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/_eM0-KfAmhQ?si=sFU3BveXQd1lNUon" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Proof of Halting Problem Undecidability</h4>
              <div className="algorithm-box">
                <h6>Diagonalization Proof</h6>
                <ol>
                  <li><strong>Assume:</strong> Halting problem is decidable by TM H</li>
                  <li><strong>H(M,w):</strong> Returns "halt" if M halts on w, "loop" otherwise</li>
                  <li><strong>Construct K:</strong> TM that calls H(K,K) and does the opposite</li>
                  <li><strong>If K halts on K:</strong> Then H says it doesn't (contradiction)</li>
                  <li><strong>If K loops on K:</strong> Then H says it halts (contradiction)</li>
                  <li><strong>Conclusion:</strong> H cannot exist, so halting problem is undecidable</li>
                </ol>
              </div>

              <h4>Examples of Undecidable Problems</h4>
              <div className="definition-box">
                <h6>Classic Undecidable Problems</h6>
                <ul>
                  <li><strong>Halting Problem:</strong> Does TM M halt on input w?</li>
                  <li><strong>Post Correspondence Problem:</strong> Does PCP instance have solution?</li>
                  <li><strong>Hilbert's 10th Problem:</strong> Solvability of Diophantine equations</li>
                  <li><strong>Tiling Problem:</strong> Can Wang tiles tile the plane?</li>
                </ul>
              </div>

              <div className="definition-box">
                <h6>Language-Theoretic Undecidable Problems</h6>
                <ul>
                  <li><strong>Emptiness of CFG Intersection:</strong> Is L(G₁) ∩ L(G₂) = ∅?</li>
                  <li><strong>CFG Equivalence:</strong> Do two CFGs generate the same language?</li>
                  <li><strong>CFG Universality:</strong> Does CFG generate all strings over alphabet?</li>
                  <li><strong>Ambiguity of CFG:</strong> Is a given CFG ambiguous?</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Reduction Example: CFG Emptiness Intersection</h5>
                <div className="reduction-example">
                  <h6>Problem:</h6>
                  <p>Given two context-free grammars G₁ and G₂, is L(G₁) ∩ L(G₂) = ∅?</p>
                  
                  <h6>Proof of Undecidability:</h6>
                  <ol>
                    <li><strong>Reduce from PCP:</strong> Given PCP instance P</li>
                    <li><strong>Construct G₁:</strong> Generates strings corresponding to top sequences</li>
                    <li><strong>Construct G₂:</strong> Generates strings corresponding to bottom sequences</li>
                    <li><strong>Key Insight:</strong> L(G₁) ∩ L(G₂) ≠ ∅ iff P has a solution</li>
                    <li><strong>Conclusion:</strong> If intersection emptiness were decidable, PCP would be decidable</li>
                  </ol>
                </div>
              </div>

              <h4>Rice's Theorem</h4>
              <div className="definition-box">
                <h6>General Undecidability Result</h6>
                <p>Rice's Theorem states that any non-trivial property of recursively enumerable languages is undecidable:</p>
                <ul>
                  <li><strong>Non-trivial Property:</strong> Some RE languages have it, some don't</li>
                  <li><strong>Examples:</strong> Emptiness, finiteness, regularity of TM languages</li>
                  <li><strong>Implication:</strong> Cannot algorithmically determine semantic properties of programs</li>
                  <li><strong>Exceptions:</strong> Syntactic properties (like program length) may be decidable</li>
                </ul>
              </div>

              <h4>Practical Implications</h4>
              <ul>
                <li><strong>Program Analysis:</strong> Many program properties cannot be automatically verified</li>
                <li><strong>Compiler Optimization:</strong> Some optimizations cannot be fully automated</li>
                <li><strong>Software Verification:</strong> Complete automatic verification is impossible</li>
                <li><strong>Artificial Intelligence:</strong> Some AI problems have no algorithmic solutions</li>
              </ul>

              <div className="algorithm-box">
                <h6>Proving Undecidability Strategy</h6>
                <ol>
                  <li><strong>Choose Known Undecidable Problem:</strong> Usually Halting Problem or PCP</li>
                  <li><strong>Assume Target Problem Decidable:</strong> Suppose algorithm A exists</li>
                  <li><strong>Construct Reduction:</strong> Use A to solve known undecidable problem</li>
                  <li><strong>Derive Contradiction:</strong> This would make known problem decidable</li>
                  <li><strong>Conclude:</strong> Target problem must be undecidable</li>
                </ol>
              </div>
            </section>

            <Quiz title="Module 5 Quiz: Undecidable Problems" questions={module5Quiz} subject="FLAT" unitId={5} moduleId={5} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Decidable Problems</button>
              <button onClick={() => setCurrentModule(6)} className="next-module-btn">Unit 5 Quiz →</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.6</div>
              <div className="lesson-title-main">
                <h1>Unit 5 Quiz</h1>
              </div>
            </div>
            
            <Quiz title="Unit 5 Comprehensive Quiz: Turing Machines and Computability" questions={unitQuiz} subject="FLAT" unitId={5} moduleId={10} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(5)} className="prev-module-btn">← Undecidable Problems</button>
              {onBack && (
                <button onClick={onBack} className="next-module-btn">Back to Course →</button>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="module-content">
            <h2>Select a module to begin</h2>
          </div>
        );
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit5;
