'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const unitQuiz = [
    {
      question: "What is a regular expression?",
      options: [
        "A type of finite automaton",
        "A notation for describing regular languages",
        "A programming language",
        "A type of grammar"
      ],
      correctAnswer: 1,
      explanation: "A regular expression is a notation for describing regular sets/languages using special symbols and operators like union, concatenation, and Kleene star."
    },
    {
      question: "Which operation has the highest precedence in regular expressions?",
      options: [
        "Union (+)",
        "Concatenation (·)",
        "Kleene star (*)",
        "All have equal precedence"
      ],
      correctAnswer: 2,
      explanation: "Kleene star (*) has the highest precedence, followed by concatenation (·), and then union (+) has the lowest precedence."
    },
    {
      question: "What does the regular expression (a+b)* represent?",
      options: [
        "Only strings 'a' and 'b'",
        "All strings over alphabet {a, b}",
        "Strings with equal a's and b's",
        "Empty string only"
      ],
      correctAnswer: 1,
      explanation: "(a+b)* represents all possible strings (including empty string) that can be formed using symbols 'a' and 'b', which is the set of all strings over alphabet {a, b}."
    },
    {
      question: "What is Thompson's construction used for?",
      options: [
        "Converting DFA to NFA",
        "Converting regular expression to NFA",
        "Minimizing automata",
        "Converting NFA to DFA"
      ],
      correctAnswer: 1,
      explanation: "Thompson's construction is an algorithm that converts a regular expression into an equivalent NFA with epsilon-transitions."
    },
    {
      question: "What does the Pumping Lemma help prove?",
      options: [
        "A language is regular",
        "A language is not regular",
        "Two languages are equivalent",
        "An automaton is minimal"
      ],
      correctAnswer: 1,
      explanation: "The Pumping Lemma is used to prove that certain languages are NOT regular by showing they fail to satisfy the necessary conditions that all regular languages must meet."
    },
    {
      question: "In the Pumping Lemma, what must be true about the middle part 'y'?",
      options: [
        "|y| = 0 (y can be empty)",
        "|y| ≥ 1 (y must be non-empty)",
        "|y| ≤ p (y length at most p)",
        "|y| = p (y length exactly p)"
      ],
      correctAnswer: 1,
      explanation: "In the Pumping Lemma decomposition w = xyz, the middle part y must be non-empty (|y| ≥ 1), ensuring there's actually something to pump."
    },
    {
      question: "What is a right-linear grammar?",
      options: [
        "Grammar with productions A → aB or A → a",
        "Grammar with productions A → Ba or A → a",
        "Grammar with no restrictions",
        "Grammar that generates context-free languages"
      ],
      correctAnswer: 0,
      explanation: "A right-linear grammar has productions where the non-terminal appears on the RIGHT side: A → aB or A → a or A → ε. These grammars generate regular languages."
    },
    {
      question: "Which of the following languages is NOT regular?",
      options: [
        "All strings over {a,b}",
        "Strings ending with 'ab'",
        "a^n b^n where n ≥ 0",
        "Strings with even number of a's"
      ],
      correctAnswer: 2,
      explanation: "The language a^n b^n (equal numbers of a's and b's) is not regular, as can be proven using the Pumping Lemma. The other languages are all regular."
    }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.1</div>
              <div className="lesson-title-main">
                <h1>Regular Expressions and Languages</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Introduction to Regular Languages</h3>
              <p>Regular languages are formal languages that can be described by regular expressions or recognized by finite automata. They form the most basic class of languages in the Chomsky hierarchy and are fundamental to formal language theory and practical applications.</p>
              
              <div className="theory-box">
                <h5>Regular Sets and Regular Expressions</h5>
                <p>Understanding the fundamental concepts of regular languages:</p>
                <ul>
                  <li><strong>Regular Set:</strong> A formal language that can be accepted by a finite automaton</li>
                  <li><strong>Regular Expression:</strong> A notation for describing regular sets using special symbols and operators</li>
                  <li><strong>Equivalence:</strong> Every regular expression defines a regular language, and every regular language can be expressed by a regular expression</li>
                  <li><strong>Base Cases:</strong> ∅ (empty set), ε (empty string), and single symbols are regular expressions</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/regular-expressions.jpg" alt="Regular Expressions" className="movie-poster" />
                  <h6>Regular Expressions</h6>
                  <p>Pattern matching notation</p>
                </div>
                <div className="movie-card">
                  <img src="/images/regular-languages.jpg" alt="Regular Languages" className="movie-poster" />
                  <h6>Regular Languages</h6>
                  <p>Languages recognized by finite automata</p>
                </div>
                <div className="movie-card">
                  <img src="/images/chomsky-hierarchy.jpg" alt="Chomsky Hierarchy" className="movie-poster" />
                  <h6>Chomsky Hierarchy</h6>
                  <p>Classification of formal languages</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Regular Expressions and Operations</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/GK_vRtHJZu4" 
                    title="Regular Expressions and Operations"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Fundamental Properties</h4>
              <div className="definition-box">
                <h6>Core Characteristics</h6>
                <ul>
                  <li><strong>Recursive Definition:</strong> Complex expressions are built from simpler ones using operations</li>
                  <li><strong>Closure:</strong> Regular languages are closed under union, concatenation, and Kleene star operations</li>
                  <li><strong>Finite Representation:</strong> Infinite languages can be represented by finite expressions</li>
                  <li><strong>Computational Equivalence:</strong> Regular expressions ≡ Finite Automata ≡ Regular Grammars</li>
                </ul>
              </div>

              <h4>Base Cases and Building Blocks</h4>
              <ul>
                <li><strong>Empty Set (∅):</strong> Represents no strings, the language containing no elements</li>
                <li><strong>Empty String (ε):</strong> Represents the language containing only the empty string</li>
                <li><strong>Single Symbols:</strong> Each symbol 'a' in the alphabet represents the language containing 'a'</li>
                <li><strong>Atomic Expressions:</strong> These form the foundation for more complex expressions</li>
              </ul>

              <div className="example-box">
                <h5>Regular Expression Examples</h5>
                <div className="example-details">
                  <h6>Simple Expressions</h6>
                  <ul>
                    <li><strong>a:</strong> Language containing only string "a"</li>
                    <li><strong>ε:</strong> Language containing only empty string</li>
                    <li><strong>∅:</strong> Empty language - contains no strings</li>
                  </ul>
                  
                  <h6>Complex Expressions</h6>
                  <ul>
                    <li><strong>(a+b)*:</strong> All strings over alphabet containing a and b</li>
                    <li><strong>a*b*:</strong> Zero or more a's followed by zero or more b's</li>
                    <li><strong>(ab)*:</strong> Zero or more repetitions of "ab"</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Regular Expression Operations →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.2</div>
              <div className="lesson-title-main">
                <h1>Operations on Regular Expressions</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Fundamental Regular Expression Operations</h3>
              <p>Regular expressions are built using three fundamental operations: union, concatenation, and Kleene star. These operations have specific precedence rules and algebraic properties.</p>
              
              <div className="theory-box">
                <h5>Operation Precedence and Associativity</h5>
                <p>Understanding operator precedence is crucial for correct interpretation:</p>
                <ul>
                  <li><strong>Kleene Star (*):</strong> Highest precedence, right associative</li>
                  <li><strong>Concatenation (·):</strong> Medium precedence, left associative</li>
                  <li><strong>Union (+):</strong> Lowest precedence, left associative</li>
                  <li><strong>Parentheses:</strong> Override default precedence</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/union-operation.jpg" alt="Union Operation" className="movie-poster" />
                  <h6>Union Operation</h6>
                  <p>OR operation between expressions</p>
                </div>
                <div className="movie-card">
                  <img src="/images/concatenation-op.jpg" alt="Concatenation" className="movie-poster" />
                  <h6>Concatenation</h6>
                  <p>Sequential combination of expressions</p>
                </div>
                <div className="movie-card">
                  <img src="/images/kleene-star-op.jpg" alt="Kleene Star" className="movie-poster" />
                  <h6>Kleene Star</h6>
                  <p>Zero or more repetitions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Regular Expression Operations Tutorial</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/79wmmDyTRRo" 
                    title="Regular Expression Operations"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Union (OR) Operation</h4>
              <div className="definition-box">
                <h6>Union Properties</h6>
                <ul>
                  <li><strong>Notation:</strong> r₁ + r₂ or r₁ | r₂</li>
                  <li><strong>Meaning:</strong> Strings matching r₁ OR r₂</li>
                  <li><strong>Example:</strong> (a + b) matches "a" or "b"</li>
                  <li><strong>Precedence:</strong> Lowest among the three operations</li>
                </ul>
              </div>

              <h4>Concatenation Operation</h4>
              <div className="definition-box">
                <h6>Concatenation Properties</h6>
                <ul>
                  <li><strong>Notation:</strong> r₁r₂ or r₁·r₂</li>
                  <li><strong>Meaning:</strong> String from r₁ followed by string from r₂</li>
                  <li><strong>Example:</strong> ab matches "ab"</li>
                  <li><strong>Precedence:</strong> Medium precedence</li>
                </ul>
              </div>

              <h4>Kleene Star (*) Operation</h4>
              <div className="definition-box">
                <h6>Kleene Star Properties</h6>
                <ul>
                  <li><strong>Notation:</strong> r* or r⁺ (one or more)</li>
                  <li><strong>Meaning:</strong> Zero or more repetitions of r</li>
                  <li><strong>Example:</strong> a* matches ε, "a", "aa", "aaa", ...</li>
                  <li><strong>Precedence:</strong> Highest among the three operations</li>
                </ul>
              </div>

              <h4>Identity and Algebraic Rules</h4>
              <div className="table-container">
                <h6>Algebraic Properties</h6>
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Rule</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Identity for Union</td>
                      <td>r + ∅ = r</td>
                      <td>Empty set is identity for union</td>
                    </tr>
                    <tr>
                      <td>Identity for Concatenation</td>
                      <td>r·ε = r</td>
                      <td>Empty string is identity for concatenation</td>
                    </tr>
                    <tr>
                      <td>Annihilation</td>
                      <td>r·∅ = ∅</td>
                      <td>Concatenation with empty set gives empty set</td>
                    </tr>
                    <tr>
                      <td>Star of Empty Set</td>
                      <td>∅* = ε</td>
                      <td>Star of empty set is empty string</td>
                    </tr>
                    <tr>
                      <td>Idempotent</td>
                      <td>r + r = r</td>
                      <td>Union with self equals self</td>
                    </tr>
                    <tr>
                      <td>Commutative</td>
                      <td>r + s = s + r</td>
                      <td>Union is commutative</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <h5>Complex Expression Examples</h5>
                <div className="expression-examples">
                  <h6>Practical Examples</h6>
                  <ul>
                    <li><strong>(a+b)*abb:</strong> All strings ending with "abb"</li>
                    <li><strong>a*b*:</strong> Zero or more a's followed by zero or more b's</li>
                    <li><strong>(ab)*:</strong> Even-length strings alternating a and b</li>
                    <li><strong>a*+b*:</strong> Strings of all a's or all b's</li>
                  </ul>
                  
                  <h6>Recursive Definitions</h6>
                  <ul>
                    <li><strong>r* = ε + rr*:</strong> Recursive definition of Kleene star</li>
                    <li><strong>(r*)* = r*:</strong> Star operation is idempotent</li>
                    <li><strong>r⁺ = rr*:</strong> One or more repetitions</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Regular Expressions</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Applications and Conversions →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.3</div>
              <div className="lesson-title-main">
                <h1>Applications and Conversions</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Practical Applications of Regular Expressions</h3>
              <p>Regular expressions have widespread applications in computer science, from text processing and compiler design to data validation and programming languages.</p>
              
              <div className="theory-box">
                <h5>Application Domains</h5>
                <p>Regular expressions are essential tools across multiple domains:</p>
                <ul>
                  <li><strong>Text Processing:</strong> Pattern matching, search and replace operations</li>
                  <li><strong>Compiler Design:</strong> Lexical analysis and tokenization</li>
                  <li><strong>Data Validation:</strong> Input format verification</li>
                  <li><strong>Programming Languages:</strong> Built-in regex support</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/text-processing.jpg" alt="Text Processing" className="movie-poster" />
                  <h6>Text Processing</h6>
                  <p>Pattern matching in text files</p>
                </div>
                <div className="movie-card">
                  <img src="/images/compiler-lexer.jpg" alt="Compiler Lexer" className="movie-poster" />
                  <h6>Lexical Analysis</h6>
                  <p>Tokenization in compilers</p>
                </div>
                <div className="movie-card">
                  <img src="/images/data-validation.jpg" alt="Data Validation" className="movie-poster" />
                  <h6>Data Validation</h6>
                  <p>Input format verification</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Thompson's Construction Method</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/gLBE5QAYXp8" 
                    title="Thompson's Construction"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Text Processing Applications</h4>
              <ul>
                <li><strong>Pattern Matching:</strong> Finding specific patterns in text files</li>
                <li><strong>Search and Replace:</strong> Sophisticated text replacement operations</li>
                <li><strong>Text Validation:</strong> Checking format compliance</li>
                <li><strong>Command-Line Tools:</strong> grep, sed, awk utilities</li>
              </ul>

              <h4>Compiler Design Applications</h4>
              <ul>
                <li><strong>Lexical Analysis:</strong> Breaking source code into tokens</li>
                <li><strong>Identifier Recognition:</strong> Validating variable names</li>
                <li><strong>Number Parsing:</strong> Recognizing numeric literals</li>
                <li><strong>Scanner Generation:</strong> Automated lexer creation</li>
              </ul>

              <h4>Thompson's Construction Algorithm</h4>
              <div className="algorithm-box">
                <h6>Converting Regular Expressions to NFA</h6>
                <p>Thompson's construction converts a regular expression to an equivalent NFA with ε-transitions:</p>
                
                <h6>Base Cases</h6>
                <ul>
                  <li><strong>For ε:</strong> Single transition on ε from start to accept</li>
                  <li><strong>For symbol a:</strong> Single transition on a from start to accept</li>
                  <li><strong>Single state:</strong> Each base case has one start and one accept state</li>
                </ul>
                
                <h6>Recursive Construction</h6>
                <ul>
                  <li><strong>Union r|s:</strong> New start with ε to both, merge accepts with ε</li>
                  <li><strong>Concatenation rs:</strong> Connect accept of r to start of s with ε</li>
                  <li><strong>Kleene Star r*:</strong> Add ε-loops and bypass paths</li>
                </ul>
              </div>

              <h4>State Elimination Method</h4>
              <div className="algorithm-box">
                <h6>Converting Automata to Regular Expressions</h6>
                <p>State elimination systematically removes states to derive regular expressions:</p>
                
                <ol>
                  <li><strong>For each state q to eliminate:</strong> Consider all paths through q</li>
                  <li><strong>For each pair (i,j):</strong> Replace path i→q→j with direct transition</li>
                  <li><strong>Combine expressions:</strong> Use union and concatenation</li>
                  <li><strong>Continue elimination:</strong> Until only start and accept remain</li>
                </ol>
              </div>

              <div className="example-box">
                <h5>Thompson's Construction Examples</h5>
                <div className="construction-examples">
                  <h6>Base Case: Symbol 'a'</h6>
                  <pre>
{`[start] --a--> [accept]`}
                  </pre>
                  
                  <h6>Union (r|s)</h6>
                  <pre>
{`[new_start] --ε--> [r_start] ... [r_accept] --ε--> [new_accept]
           \--ε--> [s_start] ... [s_accept] --ε--/`}
                  </pre>
                  
                  <h6>Concatenation (rs)</h6>
                  <pre>
{`[r_start] ... [r_accept] --ε--> [s_start] ... [s_accept]`}
                  </pre>
                  
                  <h6>Kleene Star (r*)</h6>
                  <pre>
{`[start] --ε--> [r_start] ... [r_accept] --ε--> [accept]
   ^                                        |
   +----------------ε-----------------------+`}
                  </pre>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Regular Expression Operations</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Pumping Lemma →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.4</div>
              <div className="lesson-title-main">
                <h1>Pumping Lemma for Regular Languages</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Theoretical Foundation for Non-Regularity</h3>
              <p>The Pumping Lemma provides a powerful tool for proving that certain languages are not regular by establishing necessary conditions that all regular languages must satisfy.</p>
              
              <div className="theory-box">
                <h5>Pumping Lemma Statement</h5>
                <p>If L is a regular language, then there exists a positive integer p (pumping length) such that every string w in L with |w| ≥ p can be written as w = xyz where:</p>
                <ul>
                  <li><strong>|xy| ≤ p:</strong> First two parts combined have length at most p</li>
                  <li><strong>|y| ≥ 1:</strong> y is not empty (middle part must exist)</li>
                  <li><strong>For all i ≥ 0:</strong> xy^iz is in L (pumping y any number of times keeps string in language)</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/pumping-lemma.jpg" alt="Pumping Lemma" className="movie-poster" />
                  <h6>Pumping Lemma</h6>
                  <p>Tool for proving non-regularity</p>
                </div>
                <div className="movie-card">
                  <img src="/images/proof-contradiction.jpg" alt="Proof by Contradiction" className="movie-poster" />
                  <h6>Proof by Contradiction</h6>
                  <p>Standard proof technique</p>
                </div>
                <div className="movie-card">
                  <img src="/images/non-regular-languages.jpg" alt="Non-Regular Languages" className="movie-poster" />
                  <h6>Non-Regular Languages</h6>
                  <p>Languages that fail pumping lemma</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Pumping Lemma for Regular Languages</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/QQYgCxu988s" 
                    title="Pumping Lemma"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Application and Proof by Contradiction</h4>
              <div className="algorithm-box">
                <h6>Proof Strategy for Non-Regularity</h6>
                <ol>
                  <li><strong>Assume L is regular:</strong> Start with assumption that language is regular</li>
                  <li><strong>Let p be pumping length:</strong> Use the pumping lemma's guaranteed value</li>
                  <li><strong>Choose string w ∈ L:</strong> Select w with |w| ≥ p that depends on p</li>
                  <li><strong>Show w = xyz cannot satisfy condition 3:</strong> For some i, xy^iz ∉ L</li>
                  <li><strong>Contradiction:</strong> Therefore L is not regular</li>
                </ol>
              </div>

              <h4>Key Insights and Intuition</h4>
              <div className="definition-box">
                <h6>Why the Pumping Lemma Works</h6>
                <ul>
                  <li><strong>Finite Memory:</strong> Finite automata have limited states</li>
                  <li><strong>Pigeonhole Principle:</strong> Long strings must revisit states</li>
                  <li><strong>Cycle Detection:</strong> Repeated states create pumpable loops</li>
                  <li><strong>Necessary Condition:</strong> All regular languages must satisfy this property</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Classic Example: a^n b^n where n ≥ 0</h5>
                <div className="proof-example">
                  <h6>Proving Non-Regularity</h6>
                  <p><strong>Language:</strong> a^n b^n where n ≥ 0 - equal numbers of a's and b's</p>
                  
                  <h6>Proof Steps</h6>
                  <ol>
                    <li><strong>Assume regular:</strong> Suppose L is regular with pumping length p</li>
                    <li><strong>Choose string:</strong> w = a^p b^p (clearly in L and |w| = 2p ≥ p)</li>
                    <li><strong>Analyze decomposition:</strong> w = xyz where |xy| ≤ p and |y| ≥ 1</li>
                    <li><strong>Key observation:</strong> Since |xy| ≤ p, y consists only of a's</li>
                    <li><strong>Pumping test:</strong> xy^2z = a^(p+|y|) b^p has more a's than b's</li>
                    <li><strong>Contradiction:</strong> xy^2z ∉ L, violating pumping lemma</li>
                    <li><strong>Conclusion:</strong> L is not regular</li>
                  </ol>
                  
                  <h6>Why This Works</h6>
                  <ul>
                    <li>Any y in the first p symbols must contain only a's</li>
                    <li>Pumping y changes the ratio of a's to b's</li>
                    <li>Result is no longer in the language</li>
                    <li>This contradicts the pumping lemma requirement</li>
                  </ul>
                </div>
              </div>

              <h4>Common Non-Regular Languages</h4>
              <ul>
                <li><strong>a^n b^n where n ≥ 0:</strong> Equal numbers of a's and b's</li>
                <li><strong>ww where w ∈ (a,b)*:</strong> Strings that are concatenation of identical halves</li>
                <li><strong>a^p where p is prime:</strong> Strings of a's with prime length</li>
                <li><strong>a^n b^m c^n where n,m ≥ 0:</strong> Matching first and third parts</li>
              </ul>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Applications and Conversions</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Regular Grammars →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.5</div>
              <div className="lesson-title-main">
                <h1>Regular Grammars</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Definition and Types of Regular Grammars</h3>
              <p>Regular grammars are context-free grammars with restricted production rules that generate exactly the regular languages, providing another characterization of this fundamental language class.</p>
              
              <div className="theory-box">
                <h5>Regular Grammar Characteristics</h5>
                <p>Understanding the structure and significance of regular grammars:</p>
                <ul>
                  <li><strong>Regular Grammar:</strong> Context-free grammar with production rules restricted to specific forms</li>
                  <li><strong>Right-Linear:</strong> All productions have form A → aB or A → a or A → ε</li>
                  <li><strong>Left-Linear:</strong> All productions have form A → Ba or A → a or A → ε</li>
                  <li><strong>Equivalence:</strong> Regular grammars ≡ Finite Automata ≡ Regular Expressions</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/regular-grammars.jpg" alt="Regular Grammars" className="movie-poster" />
                  <h6>Regular Grammars</h6>
                  <p>Restricted production rules</p>
                </div>
                <div className="movie-card">
                  <img src="/images/right-linear.jpg" alt="Right-Linear Grammar" className="movie-poster" />
                  <h6>Right-Linear</h6>
                  <p>Non-terminal on right side</p>
                </div>
                <div className="movie-card">
                  <img src="/images/left-linear.jpg" alt="Left-Linear Grammar" className="movie-poster" />
                  <h6>Left-Linear</h6>
                  <p>Non-terminal on left side</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Regular Grammars and Types</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/79wmmDyTRRo" 
                    title="Regular Grammars"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Right-Linear Grammar</h4>
              <div className="definition-box">
                <h6>Right-Linear Production Rules</h6>
                <p>Productions have the form: A → aB | a | ε</p>
                <ul>
                  <li><strong>Form:</strong> Non-terminal appears on the RIGHT of production</li>
                  <li><strong>Processing:</strong> Represents left-to-right string processing</li>
                  <li><strong>Mapping:</strong> Naturally corresponds to DFA transitions</li>
                  <li><strong>State Correspondence:</strong> Each non-terminal represents a state</li>
                </ul>
              </div>

              <h4>Left-Linear Grammar</h4>
              <div className="definition-box">
                <h6>Left-Linear Production Rules</h6>
                <p>Productions have the form: A → Ba | a | ε</p>
                <ul>
                  <li><strong>Form:</strong> Non-terminal appears on the LEFT of production</li>
                  <li><strong>Processing:</strong> Represents right-to-left string processing</li>
                  <li><strong>Conversion:</strong> Can be converted to equivalent right-linear</li>
                  <li><strong>Equivalence:</strong> Generate same languages as right-linear grammars</li>
                </ul>
              </div>

              <h4>Equivalence with Finite Automata</h4>
              <div className="algorithm-box">
                <h6>Grammar to Automata Conversion</h6>
                <ul>
                  <li><strong>Each non-terminal:</strong> Becomes a DFA state</li>
                  <li><strong>Start symbol:</strong> Becomes start state</li>
                  <li><strong>Productions A → a:</strong> Create transitions labeled 'a'</li>
                  <li><strong>Productions A → ε:</strong> Make state accepting</li>
                </ul>
                
                <h6>Automata to Grammar Conversion</h6>
                <ul>
                  <li><strong>Each state:</strong> Becomes a non-terminal</li>
                  <li><strong>Start state:</strong> Becomes start symbol</li>
                  <li><strong>Transitions:</strong> Become productions</li>
                  <li><strong>Accept states:</strong> Generate ε productions</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Grammar Examples and Conversions</h5>
                <div className="grammar-examples">
                  <h6>Right-Linear Grammar Example</h6>
                  <p><strong>Grammar:</strong></p>
                  <ul>
                    <li>S → aS | a</li>
                    <li>Language: a, aa, aaa, ... = a⁺</li>
                  </ul>
                  
                  <h6>Left-Linear Grammar Example</h6>
                  <p><strong>Grammar:</strong></p>
                  <ul>
                    <li>S → Sa | b</li>
                    <li>Language: b, ab, aab, aaab, ... = a*b</li>
                  </ul>
                  
                  <h6>Conversion Example</h6>
                  <p><strong>Left-Linear to Right-Linear:</strong></p>
                  <ul>
                    <li><strong>Original:</strong> S → Sa | b</li>
                    <li><strong>Converted:</strong> S → bA, A → aA | ε</li>
                    <li><strong>Result:</strong> Both generate language a*b</li>
                  </ul>
                  
                  <h6>Finite Automaton Correspondence</h6>
                  <p><strong>For grammar S → aS | a:</strong></p>
                  <ul>
                    <li>State S corresponds to both start and intermediate state</li>
                    <li>Transition on 'a' loops back to S</li>
                    <li>Production S → a makes S accepting</li>
                    <li>Resulting DFA accepts a⁺</li>
                  </ul>
                </div>
              </div>

              <h4>Properties and Restrictions</h4>
              <ul>
                <li><strong>Restricted Form:</strong> Only single non-terminal allowed in specific position</li>
                <li><strong>Linear Structure:</strong> Productions maintain linear (non-branching) structure</li>
                <li><strong>Regular Language Generation:</strong> Can only generate regular languages</li>
                <li><strong>Computational Equivalence:</strong> Same power as finite automata and regular expressions</li>
              </ul>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Pumping Lemma</button>
              <button onClick={() => setCurrentModule(6)} className="next-module-btn">Unit 3 Quiz →</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.6</div>
              <div className="lesson-title-main">
                <h1>Unit 3 Quiz</h1>
              </div>
            </div>
            
            <Quiz title="Unit 3 Comprehensive Quiz: Regular Languages" questions={unitQuiz} passingScore={70} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(5)} className="prev-module-btn">← Regular Grammars</button>
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

export default Unit3;