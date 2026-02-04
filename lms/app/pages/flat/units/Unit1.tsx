'use client';
import React from 'react';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.1</div>
              <div className="lesson-title-main">
                <h1>Alphabets and Strings</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Foundational Mathematical Framework</h3>
              <p>Formal languages constitute the mathematical foundation of theoretical computer science, providing rigorous models for computation, communication, and information processing. These mathematical structures enable us to analyze computational complexity, design efficient algorithms, and understand the fundamental limits of computation.</p>
              
              <div className="theory-box">
                <h5>Mathematical Rigor in Computer Science</h5>
                <p>The study of formal languages bridges pure mathematics and practical computing:</p>
                <ul>
                  <li><strong>Computational Models:</strong> Abstract machines for problem-solving and algorithm analysis</li>
                  <li><strong>Language Hierarchies:</strong> Classification of computational complexity classes</li>
                  <li><strong>Decidability Theory:</strong> Fundamental limits of algorithmic computation</li>
                  <li><strong>Complexity Analysis:</strong> Resource requirements and efficiency bounds</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Introduction to Formal Languages</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/58N2N7zJGrQ" 
                    title="Introduction to Formal Languages"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Fundamental Mathematical Definitions</h4>
              <div className="definition-box">
                <h6>Core Concepts with Formal Notation</h6>
                <ul>
                  <li><strong>Symbol:</strong> An indivisible atomic unit of information from a finite set</li>
                  <li><strong>Alphabet (Sigma):</strong> A finite non-empty set of symbols</li>
                  <li><strong>String/Word:</strong> A finite sequence of symbols from an alphabet</li>
                  <li><strong>Empty String (epsilon):</strong> The unique string of length zero</li>
                  <li><strong>String Length (|w|):</strong> Number of symbols in string w</li>
                  <li><strong>Language (L):</strong> Any subset of strings over alphabet Sigma*</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/symbols-alphabets.jpg" alt="Symbols and Alphabets" className="movie-poster" />
                  <h6>Symbols & Alphabets</h6>
                  <p>Basic building blocks of formal languages</p>
                </div>
                <div className="movie-card">
                  <img src="/images/strings-words.jpg" alt="Strings and Words" className="movie-poster" />
                  <h6>Strings & Words</h6>
                  <p>Sequences of symbols forming meaningful units</p>
                </div>
                <div className="movie-card">
                  <img src="/images/formal-languages.jpg" alt="Formal Languages" className="movie-poster" />
                  <h6>Formal Languages</h6>
                  <p>Sets of strings with defined structure</p>
                </div>
              </div>

              <div className="formal-analysis">
                <h5>Mathematical Foundation and Notation</h5>
                <div className="notation-grid">
                  <div className="notation-item">
                    <h6>Symbol (s)</h6>
                    <p><strong>Definition:</strong> An indivisible atomic unit from a finite set</p>
                    <p><strong>Examples:</strong> 0, 1, a, b, +, -, (, )</p>
                    <p><strong>Properties:</strong> Atomic, indivisible, finite cardinality</p>
                  </div>
                  <div className="notation-item">
                    <h6>Alphabet (Sigma)</h6>
                    <p><strong>Definition:</strong> Sigma = s1, s2, sn where n greater than or equal to 1</p>
                    <p><strong>Examples:</strong> Sigma = 0,1 or Sigma = a,b,c or Sigma = +,-,*,/</p>
                    <p><strong>Constraints:</strong> Finite, non-empty, well-defined</p>
                  </div>
                  <div className="notation-item">
                    <h6>String (w)</h6>
                    <p><strong>Definition:</strong> w = s1s2sk where si in Sigma</p>
                    <p><strong>Length:</strong> |w| = k (number of symbols)</p>
                    <p><strong>Empty String:</strong> epsilon with |epsilon| = 0</p>
                  </div>
                  <div className="notation-item">
                    <h6>Language (L)</h6>
                    <p><strong>Definition:</strong> L subset of Sigma* (subset of all possible strings)</p>
                    <p><strong>Cardinality:</strong> |L| can be finite or infinite</p>
                    <p><strong>Examples:</strong> L = epsilon or L = Sigma* or L = empty set</p>
                  </div>
                </div>
              </div>

              <h4>String Operations and Properties</h4>
              <div className="definition-box">
                <h6>Fundamental String Operations</h6>
                <ul>
                  <li><strong>Concatenation:</strong> w1w2 = joining strings w1 and w2</li>
                  <li><strong>Length:</strong> |w| = number of symbols in string w</li>
                  <li><strong>Reverse:</strong> wR = string w written backwards</li>
                  <li><strong>Substring:</strong> Any contiguous sequence within a string</li>
                  <li><strong>Prefix:</strong> Initial substring of a string</li>
                  <li><strong>Suffix:</strong> Final substring of a string</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Practical Examples and Applications</h5>
                <div className="example-details">
                  <h6>Binary Alphabet Example</h6>
                  <p><strong>Alphabet:</strong> Sigma = {0, 1}</p>
                  <p><strong>Strings:</strong> epsilon, 0, 1, 00, 01, 10, 11, 000, 001, and so on</p>
                  <p><strong>Language:</strong> L = w in Sigma* where w has equal 0s and 1s</p>
                  
                  <h6>Programming Language Tokens</h6>
                  <p><strong>Alphabet:</strong> Sigma = a-z, A-Z, 0-9, +, -, *, /, =, etc</p>
                  <p><strong>Identifiers:</strong> L = w where w starts with letter, followed by letters/digits</p>
                  <p><strong>Numbers:</strong> L = w where w is sequence of digits</p>
                  
                  <h6>Natural Language Processing</h6>
                  <p><strong>Alphabet:</strong> Sigma = a-z, space, punctuation</p>
                  <p><strong>Words:</strong> Sequences of letters</p>
                  <p><strong>Sentences:</strong> Structured sequences following grammar rules</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Language Operations →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.2</div>
              <div className="lesson-title-main">
                <h1>Language Operations</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Algebraic Structure of Language Operations</h3>
              <p>Language operations form an algebraic system with well-defined properties, closure conditions, and hierarchical relationships fundamental to formal language theory. These operations enable the construction of complex languages from simpler components and provide the mathematical foundation for language recognition and generation.</p>
              
              <div className="theory-box">
                <h5>Algebraic Properties and Closure</h5>
                <p>The set of all languages over an alphabet forms various algebraic structures:</p>
                <ul>
                  <li><strong>Boolean Algebra:</strong> Under union, intersection, and complement operations</li>
                  <li><strong>Monoid Structure:</strong> Under concatenation with empty string as identity element</li>
                  <li><strong>Kleene Algebra:</strong> Complete algebraic system with star operation</li>
                  <li><strong>Lattice Properties:</strong> Partial ordering under language inclusion relation</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Language Operations and Closure Properties</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/HyUK5RAJg1c" 
                    title="Language Operations"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Fundamental Language Operations</h4>
              <div className="definition-box">
                <h6>Set-Theoretic Operations</h6>
                <ul>
                  <li><strong>Union (L1 U L2):</strong> All strings that belong to either language</li>
                  <li><strong>Intersection (L1 ∩ L2):</strong> All strings that belong to both languages</li>
                  <li><strong>Complement (L'):</strong> All strings that do not belong to language L</li>
                  <li><strong>Difference (L1 - L2):</strong> All strings in L1 but not in L2</li>
                  <li><strong>Symmetric Difference:</strong> Strings in either language but not both</li>
                </ul>
              </div>
              
              <div className="definition-box">
                <h6>Concatenation-Based Operations</h6>
                <ul>
                  <li><strong>Concatenation (L1L2):</strong> All strings formed by joining strings from two languages</li>
                  <li><strong>Kleene Star (L*):</strong> Union of language powers Li for i from 0 to infinity</li>
                  <li><strong>Kleene Plus (L+):</strong> Union of language powers Li for i from 1 to infinity</li>
                  <li><strong>Reversal (LR):</strong> All reversed strings from language L</li>
                  <li><strong>Quotient (L1/L2):</strong> Strings x such that xy in L1 for some y in L2</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/union-intersection.jpg" alt="Union and Intersection" className="movie-poster" />
                  <h6>Set Operations</h6>
                  <p>Union, intersection, and complement</p>
                </div>
                <div className="movie-card">
                  <img src="/images/concatenation.jpg" alt="Concatenation" className="movie-poster" />
                  <h6>Concatenation</h6>
                  <p>Joining languages and strings</p>
                </div>
                <div className="movie-card">
                  <img src="/images/kleene-star.jpg" alt="Kleene Star" className="movie-poster" />
                  <h6>Kleene Operations</h6>
                  <p>Star and plus operations</p>
                </div>
              </div>

              <div className="table-container">
                <h6>Comprehensive Operation Properties</h6>
                <table>
                  <thead>
                    <tr>
                      <th>Operation</th>
                      <th>Notation</th>
                      <th>Formal Definition</th>
                      <th>Key Properties</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Union</td>
                      <td>L1 U L2</td>
                      <td>Strings in L1 or L2</td>
                      <td>Commutative, Associative, Idempotent</td>
                      <td>O(|L1| + |L2|)</td>
                    </tr>
                    <tr>
                      <td>Concatenation</td>
                      <td>L1L2</td>
                      <td>Strings from L1 joined with strings from L2</td>
                      <td>Associative, Non-commutative</td>
                      <td>O(|L1| × |L2|)</td>
                    </tr>
                    <tr>
                      <td>Kleene Star</td>
                      <td>L*</td>
                      <td>Union of Li for i from 0 to infinity</td>
                      <td>L* = epsilon U LL*, and (L*)* = L*</td>
                      <td>Infinite (if L not equal to empty and L not equal to epsilon)</td>
                    </tr>
                    <tr>
                      <td>Intersection</td>
                      <td>L1 ∩ L2</td>
                      <td>Strings in L1 and L2</td>
                      <td>Commutative, Associative</td>
                      <td>O(min(|L1|, |L2|))</td>
                    </tr>
                    <tr>
                      <td>Complement</td>
                      <td>L'</td>
                      <td>All strings minus L</td>
                      <td>Involution: (L')' = L</td>
                      <td>Infinite (if L is finite)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <h5>Advanced Operation Examples</h5>
                <div className="operation-examples">
                  <h6>Concatenation Example</h6>
                  <p><strong>L1 = {'{'}a, ab{'}'}, L2 = {'{'}b, bb{'}'}</strong></p>
                  <p><strong>L1L2 = {'{'}ab, abb, abb, abbb{'}'}</strong></p>
                  
                  <h6>Kleene Star Example</h6>
                  <p><strong>L = {'{'}a, b{'}'}</strong></p>
                  <p><strong>L* = epsilon, a, b, aa, ab, ba, bb, aaa, and so on</strong></p>
                  
                  <h6>Practical Application</h6>
                  <p><strong>Identifiers:</strong> L = Letter followed by Letter U Digit*</p>
                  <p><strong>Comments:</strong> L = /* followed by Any Character* followed by */</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Alphabets and Strings</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Finite State Machines →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.3</div>
              <div className="lesson-title-main">
                <h1>Finite State Machines</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Formal Mathematical Model of Computation</h3>
              <p>A finite automaton represents a fundamental computational model that captures algorithmic processing with bounded memory. The formal definition establishes a rigorous mathematical framework for analyzing computational capabilities and serves as the foundation for understanding more complex computational models.</p>
              
              <div className="theory-box">
                <h5>Theoretical Foundations of Finite State Computation</h5>
                <p>Finite automata serve as the cornerstone of computational theory, providing:</p>
                <ul>
                  <li><strong>Computational Completeness:</strong> Characterizing regular language recognition capabilities</li>
                  <li><strong>Decidability Framework:</strong> Establishing algorithmic solvability boundaries</li>
                  <li><strong>Complexity Hierarchy:</strong> Foundation for Chomsky hierarchy classification</li>
                  <li><strong>Hardware Abstraction:</strong> Mathematical model for digital circuit behavior</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Finite State Machines and Automata</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/Qa6csfkK7_I" 
                    title="Finite State Machines"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Rigorous Mathematical Definition</h4>
              <div className="definition-box">
                <h6>Finite Automaton 5-Tuple: M = (Q, Sigma, delta, q0, F)</h6>
                <ul>
                  <li><strong>Q:</strong> Finite set of states, non-empty</li>
                  <li><strong>Sigma:</strong> Finite input alphabet, non-empty, disjoint from Q</li>
                  <li><strong>delta:</strong> Transition function: Q × Sigma → Q</li>
                  <li><strong>q0:</strong> Initial state, q0 in Q</li>
                  <li><strong>F:</strong> Set of accepting states, F subset of Q</li>
                </ul>
              </div>
              
              <div className="definition-box">
                <h6>Extended Transition Function</h6>
                <p>Recursive definition for string processing:</p>
                <ul>
                  <li><strong>Base Case:</strong> delta_hat(q, epsilon) = q</li>
                  <li><strong>Inductive Step:</strong> delta_hat(q, wa) = delta(delta_hat(q, w), a)</li>
                  <li><strong>Language Acceptance:</strong> L(M) = {'{'}w | delta_hat(q0, w) in F{'}'}</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/fsm-components.jpg" alt="FSM Components" className="movie-poster" />
                  <h6>FSM Components</h6>
                  <p>States, transitions, and acceptance</p>
                </div>
                <div className="movie-card">
                  <img src="/images/transition-function.jpg" alt="Transition Function" className="movie-poster" />
                  <h6>Transition Function</h6>
                  <p>State change mechanism</p>
                </div>
                <div className="movie-card">
                  <img src="/images/string-processing.jpg" alt="String Processing" className="movie-poster" />
                  <h6>String Processing</h6>
                  <p>Sequential symbol consumption</p>
                </div>
              </div>

              <h4>Formal String Acceptance Protocol</h4>
              <div className="algorithm-box">
                <h6>Acceptance Algorithm</h6>
                <p><strong>Input:</strong> String w = a1a2...an</p>
                <p><strong>Process:</strong></p>
                <ol>
                  <li><strong>Initialize:</strong> current_state = q0</li>
                  <li><strong>For i = 1 to n:</strong>
                    <ul>
                      <li>current_state = delta(current_state, ai)</li>
                      <li>If delta undefined, reject immediately</li>
                    </ul>
                  </li>
                  <li><strong>Decision:</strong> Accept if current_state in F</li>
                </ol>
                
                <h6>Mathematical Formulation</h6>
                <p><strong>Acceptance Condition:</strong> w in L(M) iff delta_hat(q0, w) in F</p>
                <p><strong>Rejection Condition:</strong> w not in L(M) iff delta_hat(q0, w) not in F</p>
              </div>

              <div className="example-box">
                <h5>Complete FSM Example</h5>
                <div className="fsm-example">
                  <h6>Language: Strings ending with "01"</h6>
                  <p><strong>Formal Definition:</strong></p>
                  <ul>
                    <li><strong>Q = q0, q1, q2</strong></li>
                    <li><strong>Sigma = 0, 1</strong></li>
                    <li><strong>q0 = q0 (start state)</strong></li>
                    <li><strong>F = q2 (accept state)</strong></li>
                  </ul>
                  
                  <h6>Transition Function delta:</h6>
                  <ul>
                    <li>delta(q0, 0) = q1, delta(q0, 1) = q0</li>
                    <li>delta(q1, 0) = q1, delta(q1, 1) = q2</li>
                    <li>delta(q2, 0) = q1, delta(q2, 1) = q0</li>
                  </ul>
                  
                  <h6>String Processing Example:</h6>
                  <p><strong>Input: "1001"</strong></p>
                  <p>q0 →1 q0 →0 q1 →0 q1 →1 q2 in F ✓ ACCEPT</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Language Operations</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">DFA and NFA →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.4</div>
              <div className="lesson-title-main">
                <h1>DFA and NFA</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Comparative Analysis of Deterministic vs Non-Deterministic Computation</h3>
              <p>The distinction between deterministic and non-deterministic finite automata represents a fundamental dichotomy in computational theory, illustrating different paradigms while maintaining equivalent expressive power. This comparison reveals deep insights into the nature of computation and algorithm design.</p>
              
              <div className="theory-box">
                <h5>Computational Paradigms and Equivalence</h5>
                <p>DFA and NFA represent different computational models with profound theoretical implications:</p>
                <ul>
                  <li><strong>Deterministic Computation:</strong> Single execution path, predictable behavior</li>
                  <li><strong>Non-deterministic Computation:</strong> Multiple simultaneous execution paths</li>
                  <li><strong>Expressive Equivalence:</strong> Both recognize exactly the regular languages</li>
                  <li><strong>Complexity Trade-offs:</strong> Space vs. time, design vs. execution efficiency</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>DFA vs NFA: Deterministic and Non-Deterministic Automata</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/40i4PKpM0cI" 
                    title="DFA vs NFA"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Deterministic Finite Automata (DFA) - Rigorous Analysis</h4>
              <div className="definition-box">
                <h6>Mathematical Definition: DFA</h6>
                <ul>
                  <li><strong>Deterministic Constraint:</strong> delta: Q × Sigma → Q (function, not relation)</li>
                  <li><strong>Unique Transitions:</strong> For each (q, a) pair, exactly one next state</li>
                  <li><strong>Complete Specification:</strong> delta defined for all (q, a) in Q × Sigma</li>
                  <li><strong>Computation Path:</strong> Unique sequence of states for input string</li>
                  <li><strong>Acceptance:</strong> String accepted if computation ends in accept state</li>
                </ul>
              </div>

              <h4>Non-Deterministic Finite Automata (NFA) - Advanced Theory</h4>
              <div className="definition-box">
                <h6>Mathematical Definition: NFA</h6>
                <ul>
                  <li><strong>Non-deterministic Constraint:</strong> delta: Q × Sigma → P(Q) (power set)</li>
                  <li><strong>Multiple Transitions:</strong> For each (q, a) pair, set of possible next states</li>
                  <li><strong>Epsilon-Transitions:</strong> delta: Q × (Sigma U {"ε"}) → P(Q) allowed</li>
                  <li><strong>Computation Tree:</strong> Multiple simultaneous execution paths</li>
                  <li><strong>Existential Acceptance:</strong> Accept if any computation path reaches accept state</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/dfa-structure.jpg" alt="DFA Structure" className="movie-poster" />
                  <h6>DFA Structure</h6>
                  <p>Deterministic state transitions</p>
                </div>
                <div className="movie-card">
                  <img src="/images/nfa-structure.jpg" alt="NFA Structure" className="movie-poster" />
                  <h6>NFA Structure</h6>
                  <p>Non-deterministic choices</p>
                </div>
                <div className="movie-card">
                  <img src="/images/equivalence-proof.jpg" alt="Equivalence Proof" className="movie-poster" />
                  <h6>Equivalence Proof</h6>
                  <p>Subset construction algorithm</p>
                </div>
              </div>

              <h4>Theoretical Equivalence and Conversion Algorithms</h4>
              <div className="equivalence-theorem">
                <h6>Fundamental Equivalence Theorem</h6>
                <p><strong>Theorem:</strong> For every NFA N, there exists a DFA D such that L(N) = L(D)</p>
                <p><strong>Proof Technique:</strong> Subset construction (powerset construction)</p>
                
                <h6>Subset Construction Algorithm</h6>
                <ol>
                  <li><strong>State Mapping:</strong> Each DFA state corresponds to subset of NFA states</li>
                  <li><strong>Initial State:</strong> epsilon-closure of NFA start state</li>
                  <li><strong>Transition Construction:</strong> epsilon-closure of union of transitions</li>
                  <li><strong>Accepting States:</strong> Subsets containing at least one NFA accept state</li>
                </ol>
              </div>

              <div className="example-box">
                <h5>Comprehensive Comparison Example</h5>
                <div className="comparison-example">
                  <h6>Language: Strings containing "ab" as substring</h6>
                  
                  <h6>NFA Design (3 states)</h6>
                  <ul>
                    <li>q0: Start state, self-loop on a,b, transition on 'a' to q1</li>
                    <li>q1: After reading 'a', transition on 'b' to q2</li>
                    <li>q2: Accept state, self-loop on a,b</li>
                  </ul>
                  
                  <h6>Equivalent DFA (4 states after subset construction)</h6>
                  <ul>
                    <li>State complexity: NFA has 3 states, DFA has 4 states</li>
                    <li>Design complexity: NFA easier to design intuitively</li>
                    <li>Implementation: DFA more efficient for execution</li>
                  </ul>
                  
                  <h6>Complexity Analysis</h6>
                  <p><strong>Space:</strong> DFA may require 2^n states for n-state NFA</p>
                  <p><strong>Time:</strong> DFA: O(n), NFA simulation: O(n·m) where m = |Q|</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Finite State Machines</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Transition Diagrams →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.5</div>
              <div className="lesson-title-main">
                <h1>Transition Diagrams</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Graphical Representation and Computational Visualization</h3>
              <p>Transition diagrams serve as the primary visual language for representing finite automata, providing intuitive graphical notation that bridges abstract mathematical definitions with concrete computational implementations. These diagrams enable efficient design, analysis, and communication of automata-based solutions.</p>
              
              <div className="theory-box">
                <h5>Graph-Theoretic Foundation of Automata Representation</h5>
                <p>Transition diagrams are directed labeled graphs with specific semantic interpretations:</p>
                <ul>
                  <li><strong>Graph Structure:</strong> Vertices represent states, edges represent transitions</li>
                  <li><strong>Semantic Mapping:</strong> Graph elements correspond to automaton components</li>
                  <li><strong>Visual Computation:</strong> Path traversal represents string processing</li>
                  <li><strong>Design Methodology:</strong> Systematic construction from language specifications</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Transition Diagrams and State Machines</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/Qa6csfkK7_I" 
                    title="Transition Diagrams"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Formal Diagram Specification and Conventions</h4>
              <div className="diagram-specification">
                <h6>Standard Graphical Elements</h6>
                <ul>
                  <li><strong>Vertices (States):</strong> Circles representing automaton states</li>
                  <li><strong>Directed Edges:</strong> Labeled arrows representing transitions</li>
                  <li><strong>Initial State Marker:</strong> Unlabeled incoming arrow to start state</li>
                  <li><strong>Accepting State Marker:</strong> Double circles for accept states</li>
                  <li><strong>Edge Labels:</strong> Input symbols or epsilon for epsilon transitions</li>
                  <li><strong>Multiple Labels:</strong> Comma-separated symbols for same transition</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/transition-diagram.jpg" alt="Transition Diagram" className="movie-poster" />
                  <h6>Transition Diagrams</h6>
                  <p>Visual representation of automata</p>
                </div>
                <div className="movie-card">
                  <img src="/images/state-notation.jpg" alt="State Notation" className="movie-poster" />
                  <h6>State Notation</h6>
                  <p>Standard symbols and conventions</p>
                </div>
                <div className="movie-card">
                  <img src="/images/path-traversal.jpg" alt="Path Traversal" className="movie-poster" />
                  <h6>Path Traversal</h6>
                  <p>String processing visualization</p>
                </div>
              </div>

              <h4>Advanced Language Recognition Algorithms</h4>
              <div className="recognition-algorithms">
                <h6>String Acceptance Algorithm (Detailed)</h6>
                <p><strong>Input:</strong> DFA M and string w</p>
                <p><strong>Algorithm:</strong></p>
                <pre>
function ACCEPT(M, w):
    current_state = start_state
    for i = 1 to length(w) do:
        if delta(current_state, w[i]) is undefined then:
            return REJECT
        current_state = delta(current_state, w[i])
    return (current_state in F) ? ACCEPT : REJECT
                </pre>
              </div>

              <h4>Design Patterns and Construction Techniques</h4>
              <div className="design-patterns">
                <h6>Common Automata Design Patterns</h6>
                <ul>
                  <li><strong>Counting Patterns:</strong> Modular arithmetic for counting occurrences</li>
                  <li><strong>Substring Detection:</strong> State progression for pattern matching</li>
                  <li><strong>Prefix/Suffix Recognition:</strong> Linear state chains</li>
                  <li><strong>Alternation Patterns:</strong> Parallel paths for OR conditions</li>
                  <li><strong>Repetition Patterns:</strong> Self-loops for Kleene star operations</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Complete Design Example</h5>
                <div className="design-example">
                  <h6>Problem: Binary strings with even number of 1s</h6>
                  
                  <h6>Design Process</h6>
                  <ol>
                    <li><strong>Identify Pattern:</strong> Count 1s modulo 2</li>
                    <li><strong>State Design:</strong> q0 (even 1s), q1 (odd 1s)</li>
                    <li><strong>Transitions:</strong> Toggle on '1', stay on '0'</li>
                    <li><strong>Acceptance:</strong> F = q0</li>
                  </ol>
                  
                  <h6>Transition Diagram</h6>
                  <pre>
    0
  ↻ q0 ⇄ q1 ↺
     1   1  0
  (start,accept)
                  </pre>
                  
                  <h6>Verification</h6>
                  <ul>
                    <li>"00": q0 → q0 → q0 ✓ (0 ones, even)</li>
                    <li>"101": q0 → q1 → q1 → q0 ✓ (2 ones, even)</li>
                    <li>"11": q0 → q1 → q0 ✓ (2 ones, even)</li>
                    <li>"1": q0 → q1 ✗ (1 one, odd)</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← DFA and NFA</button>
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

export default Unit1;