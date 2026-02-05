'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit5: React.FC<Unit5Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
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
      question: "What is the Church-Turing Thesis?",
      options: [
        "All problems are computable",
        "Turing Machines capture the notion of effective computability",
        "The Halting Problem is decidable",
        "All languages are context-free"
      ],
      correctAnswer: 1,
      explanation: "The Church-Turing Thesis states that Turing Machines (and equivalent models) capture the intuitive notion of what can be effectively computed by any algorithmic process."
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
                  <img src="/images/chomsky-hierarchy.jpg" alt="Chomsky Hierarchy" className="movie-poster" />
                  <h6>Chomsky Hierarchy</h6>
                  <p>Four levels of language classification</p>
                </div>
                <div className="movie-card">
                  <img src="/images/language-inclusion.jpg" alt="Language Inclusion" className="movie-poster" />
                  <h6>Language Inclusion</h6>
                  <p>Subset relationships between language classes</p>
                </div>
                <div className="movie-card">
                  <img src="/images/automata-hierarchy.jpg" alt="Automata Hierarchy" className="movie-poster" />
                  <h6>Automata Hierarchy</h6>
                  <p>Corresponding computational models</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Chomsky Hierarchy Explained</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/GK_vRtHJZu4" 
                    title="Chomsky Hierarchy Explained"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
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
                  <img src="/images/turing-machine-model.jpg" alt="Turing Machine Model" className="movie-poster" />
                  <h6>TM Model</h6>
                  <p>Components and structure</p>
                </div>
                <div className="movie-card">
                  <img src="/images/tm-tape.jpg" alt="TM Tape" className="movie-poster" />
                  <h6>Infinite Tape</h6>
                  <p>Read/write memory model</p>
                </div>
                <div className="movie-card">
                  <img src="/images/tm-transitions.jpg" alt="TM Transitions" className="movie-poster" />
                  <h6>TM Transitions</h6>
                  <p>State changes and tape operations</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Turing Machine Basics</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/79wmmDyTRRo" 
                    title="Turing Machine Basics"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
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
                  <img src="/images/pcp-dominoes.jpg" alt="PCP Dominoes" className="movie-poster" />
                  <h6>PCP Dominoes</h6>
                  <p>String pairs as domino tiles</p>
                </div>
                <div className="movie-card">
                  <img src="/images/pcp-solution.jpg" alt="PCP Solution" className="movie-poster" />
                  <h6>PCP Solution</h6>
                  <p>Matching top and bottom strings</p>
                </div>
                <div className="movie-card">
                  <img src="/images/undecidability.jpg" alt="Undecidability" className="movie-poster" />
                  <h6>Undecidability</h6>
                  <p>Fundamental computational limits</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Post Correspondence Problem</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/gLBE5QAYXp8" 
                    title="Post Correspondence Problem"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
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
                  <img src="/images/decidable-problems.jpg" alt="Decidable Problems" className="movie-poster" />
                  <h6>Decidable Problems</h6>
                  <p>Problems with algorithmic solutions</p>
                </div>
                <div className="movie-card">
                  <img src="/images/language-hierarchy.jpg" alt="Language Hierarchy" className="movie-poster" />
                  <h6>Language Hierarchy</h6>
                  <p>Recursive and RE language classes</p>
                </div>
                <div className="movie-card">
                  <img src="/images/decision-procedures.jpg" alt="Decision Procedures" className="movie-poster" />
                  <h6>Decision Procedures</h6>
                  <p>Algorithms that always terminate</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Decidability and Undecidability</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/QQYgCxu988s" 
                    title="Decidability and Undecidability"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
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
                  <img src="/images/halting-problem.jpg" alt="Halting Problem" className="movie-poster" />
                  <h6>Halting Problem</h6>
                  <p>The fundamental undecidable problem</p>
                </div>
                <div className="movie-card">
                  <img src="/images/diagonalization.jpg" alt="Diagonalization" className="movie-poster" />
                  <h6>Diagonalization</h6>
                  <p>Proof technique for undecidability</p>
                </div>
                <div className="movie-card">
                  <img src="/images/reduction-proofs.jpg" alt="Reduction Proofs" className="movie-poster" />
                  <h6>Reduction Proofs</h6>
                  <p>Proving undecidability via reductions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Halting Problem Proof</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/79wmmDyTRRo" 
                    title="Halting Problem Proof"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
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
            
            <Quiz title="Unit 5 Comprehensive Quiz: Turing Machines and Computability" questions={unitQuiz} passingScore={70} />

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