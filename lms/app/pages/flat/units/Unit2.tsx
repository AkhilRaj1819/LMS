'use client';
import React from 'react';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.1</div>
              <div className="lesson-title-main">
                <h1>Acceptance of Languages</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language Acceptance Mechanisms</h3>
              <p>Language acceptance is the fundamental concept of how finite automata determine whether a given string belongs to a specific language. The automaton processes the input string symbol by symbol and decides acceptance based on its final state.</p>
              
              <div className="theory-box">
                <h5>Core Acceptance Concepts</h5>
                <p>Understanding how automata make acceptance decisions:</p>
                <ul>
                  <li><strong>Accept State:</strong> Designated final state that signals acceptance when reached</li>
                  <li><strong>Rejected String:</strong> String that causes automaton to end in non-accepting state</li>
                  <li><strong>Accepted String:</strong> String that causes automaton to end in accepting state</li>
                  <li><strong>Language Accepted:</strong> Set of all strings accepted by the automaton L(M)</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/acceptance-process.jpg" alt="Acceptance Process" className="movie-poster" />
                  <h6>Acceptance Process</h6>
                  <p>Step-by-step string processing</p>
                </div>
                <div className="movie-card">
                  <img src="/images/accept-reject.jpg" alt="Accept vs Reject" className="movie-poster" />
                  <h6>Accept vs Reject</h6>
                  <p>Decision making in automata</p>
                </div>
                <div className="movie-card">
                  <img src="/images/language-recognition.jpg" alt="Language Recognition" className="movie-poster" />
                  <h6>Language Recognition</h6>
                  <p>Automata as language recognizers</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Finite Automata Acceptance of Languages</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/GK_vRtHJZu4" 
                    title="Finite Automata Acceptance"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Acceptance Process Steps</h4>
              <div className="algorithm-box">
                <h6>Step-by-Step Process</h6>
                <ol>
                  <li><strong>Start:</strong> Begin in the initial state q0</li>
                  <li><strong>Read:</strong> Read the first symbol of the input string</li>
                  <li><strong>Transition:</strong> Follow transition corresponding to current state and input symbol</li>
                  <li><strong>Move:</strong> Move to next state according to transition function</li>
                  <li><strong>Repeat:</strong> Repeat steps 2-4 for each subsequent symbol</li>
                  <li><strong>Check:</strong> After processing all symbols, check if current state is accepting</li>
                </ol>
              </div>

              <h4>Acceptance Criteria</h4>
              <div className="definition-box">
                <h6>Decision Rules</h6>
                <ul>
                  <li><strong>Accept:</strong> If final state is in F (set of accepting states)</li>
                  <li><strong>Reject:</strong> If final state is not in F</li>
                  <li><strong>Language:</strong> L(M) = all strings w such that extended_transition(q0, w) is in F</li>
                  <li><strong>Decision:</strong> Every string is either accepted or rejected</li>
                  <li><strong>Empty String:</strong> May be accepted if start state is also accept state</li>
                  <li><strong>Complete Processing:</strong> Must process entire input string before decision</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Acceptance Example: Binary Strings Ending in "01"</h5>
                <div className="example-details">
                  <h6>Automaton Design</h6>
                  <p><strong>States:</strong> q0 (start), q1 (read 0), q2 (accept - found "01")</p>
                  <p><strong>Alphabet:</strong> 0, 1</p>
                  <p><strong>Accept States:</strong> q2</p>
                  
                  <h6>Sample String Processing</h6>
                  <p><strong>String "101":</strong></p>
                  <ul>
                    <li>Start: q0</li>
                    <li>Read '1': q0 → q0 (stay in start)</li>
                    <li>Read '0': q0 → q1 (move to intermediate)</li>
                    <li>Read '1': q1 → q2 (move to accept)</li>
                    <li>Result: ACCEPT (ended in q2)</li>
                  </ul>
                  
                  <p><strong>String "10":</strong></p>
                  <ul>
                    <li>Start: q0</li>
                    <li>Read '1': q0 → q0</li>
                    <li>Read '0': q0 → q1</li>
                    <li>Result: REJECT (ended in q1, not accepting)</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">DFA and NFA Equivalence →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Equivalence of DFA and NFA</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Equivalence Between Deterministic and Non-Deterministic Automata</h3>
              <p>The fundamental theorem establishing that DFAs and NFAs recognize exactly the same class of languages, despite their different computational models.</p>
              
              <div className="theory-box">
                <h5>Key Equivalence Points</h5>
                <p>Understanding the theoretical foundation of DFA-NFA equivalence:</p>
                <ul>
                  <li><strong>Theorem:</strong> For every NFA, there exists an equivalent DFA that accepts the same language</li>
                  <li><strong>Subset Construction:</strong> Method to convert NFA to equivalent DFA by considering sets of states</li>
                  <li><strong>Power of States:</strong> DFA simulates all possible moves of NFA simultaneously</li>
                  <li><strong>Language Preservation:</strong> Both accept exactly the same set of strings</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/dfa-nfa-equiv.jpg" alt="DFA NFA Equivalence" className="movie-poster" />
                  <h6>DFA-NFA Equivalence</h6>
                  <p>Theoretical foundation of equivalence</p>
                </div>
                <div className="movie-card">
                  <img src="/images/subset-construction.jpg" alt="Subset Construction" className="movie-poster" />
                  <h6>Subset Construction</h6>
                  <p>Converting NFA to DFA</p>
                </div>
                <div className="movie-card">
                  <img src="/images/regular-languages.jpg" alt="Regular Languages" className="movie-poster" />
                  <h6>Regular Languages</h6>
                  <p>Both models recognize regular languages</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>DFA and NFA Equivalence</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/79wmmDyTRRo" 
                    title="DFA NFA Equivalence"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Practical Implications</h4>
              <div className="advantages-box">
                <h6>Design and Implementation Benefits</h6>
                <ul>
                  <li><strong>Design Flexibility:</strong> Design NFA, convert to DFA for implementation</li>
                  <li><strong>Recognition Power:</strong> Both accept exactly regular languages</li>
                  <li><strong>Implementation:</strong> DFA preferred for actual systems due to efficiency</li>
                  <li><strong>Expressive Equivalence:</strong> Neither model can accept languages the other cannot</li>
                </ul>
              </div>

              <h4>Proof Outline of Equivalence</h4>
              <div className="definition-box">
                <h6>Forward Direction</h6>
                <p><strong>Every DFA is already an NFA (trivial inclusion)</strong></p>
                <ul>
                  <li>DFA transition function: maps state-symbol pairs to single states</li>
                  <li>NFA transition function: maps state-symbol pairs to sets of states</li>
                  <li>Every singleton set is a valid set in power set</li>
                  <li>Therefore, every DFA is automatically an NFA</li>
                </ul>
                
                <h6>Reverse Direction</h6>
                <p><strong>Every NFA can be converted to an equivalent DFA</strong></p>
                <ul>
                  <li>Use subset construction algorithm</li>
                  <li>Each DFA state corresponds to a set of NFA states</li>
                  <li>Transitions simulate all possible NFA moves</li>
                  <li>Acceptance conditions preserved through construction</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Equivalence Demonstration</h5>
                <div className="equivalence-example">
                  <h6>NFA Example</h6>
                  <p><strong>Language:</strong> Strings containing "ab" as substring</p>
                  <p><strong>NFA States:</strong> q0 (start), q1 (read 'a'), q2 (accept - found "ab")</p>
                  <p><strong>NFA Transitions:</strong></p>
                  <ul>
                    <li>q0 on 'a': go to q0, q1 (non-deterministic choice)</li>
                    <li>q0 on 'b': go to q0</li>
                    <li>q1 on 'b': go to q2</li>
                    <li>q2 on 'a','b': go to q2 (trap in accept state)</li>
                  </ul>
                  
                  <h6>Equivalent DFA</h6>
                  <p><strong>DFA States:</strong> S0 = q0, S1 = q0,q1, S2 = q0,q1,q2</p>
                  <p><strong>DFA Transitions:</strong></p>
                  <ul>
                    <li>S0 on 'a': go to S1 (simulates q0→q0,q1)</li>
                    <li>S0 on 'b': go to S0 (simulates q0→q0)</li>
                    <li>S1 on 'a': go to S1 (simulates multiple paths)</li>
                    <li>S1 on 'b': go to S2 (simulates reaching accept state)</li>
                  </ul>
                  
                  <p><strong>Result:</strong> Both automata accept exactly the same language</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Acceptance of Languages</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">NFA to DFA Conversion →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Conversion of NFA to DFA</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Subset Construction Algorithm</h3>
              <p>The conversion from NFA to DFA uses the subset construction method where each DFA state corresponds to a set of NFA states, enabling systematic transformation while preserving language recognition.</p>
              
              <div className="theory-box">
                <h5>Algorithm Foundation</h5>
                <p>The subset construction algorithm systematically builds a DFA that simulates all possible computations of the NFA:</p>
                <ul>
                  <li><strong>State Mapping:</strong> Each DFA state represents a subset of NFA states</li>
                  <li><strong>Parallel Simulation:</strong> DFA tracks all possible NFA states simultaneously</li>
                  <li><strong>Deterministic Behavior:</strong> Eliminates non-determinism through state sets</li>
                  <li><strong>Language Preservation:</strong> Maintains exact same acceptance behavior</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/nfa-to-dfa.jpg" alt="NFA to DFA Conversion" className="movie-poster" />
                  <h6>NFA to DFA Conversion</h6>
                  <p>Subset construction process</p>
                </div>
                <div className="movie-card">
                  <img src="/images/state-subsets.jpg" alt="State Subsets" className="movie-poster" />
                  <h6>State Subsets</h6>
                  <p>DFA states as NFA state sets</p>
                </div>
                <div className="movie-card">
                  <img src="/images/epsilon-closure.jpg" alt="Epsilon Closure" className="movie-poster" />
                  <h6>Epsilon Closure</h6>
                  <p>Handling epsilon transitions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>NFA to DFA Conversion</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/gLBE5QAYXp8" 
                    title="NFA to DFA Conversion"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Algorithm Steps</h4>
              <div className="algorithm-box">
                <h6>Subset Construction Process</h6>
                <ol>
                  <li><strong>Initialize:</strong> Create start state as epsilon-closure of NFA start state</li>
                  <li><strong>Process States:</strong> For each unmarked state in DFA, find transitions for each input symbol</li>
                  <li><strong>Compute Closures:</strong> Compute epsilon-closures for resulting sets of states</li>
                  <li><strong>Add States:</strong> Add new states and transitions to DFA</li>
                  <li><strong>Mark Processed:</strong> Mark the current state as processed</li>
                  <li><strong>Repeat:</strong> Continue until no new unmarked states remain</li>
                </ol>
              </div>

              <h4>Acceptance Criteria</h4>
              <div className="definition-box">
                <h6>DFA State Classification</h6>
                <ul>
                  <li><strong>Accepting State:</strong> DFA state is accepting if it contains at least one accepting NFA state</li>
                  <li><strong>Formal Rule:</strong> Any set containing an accept state becomes DFA accept state</li>
                  <li><strong>Non-accepting:</strong> No accept states in set means DFA reject state</li>
                  <li><strong>Mathematical:</strong> S is accepting if S intersect F is not empty</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Step-by-Step Conversion Example</h5>
                <div className="conversion-example">
                  <h6>NFA Specification</h6>
                  <p><strong>States:</strong> q0, q1, q2</p>
                  <p><strong>Alphabet:</strong> a, b</p>
                  <p><strong>Start:</strong> q0</p>
                  <p><strong>Accept:</strong> q2</p>
                  
                  <h6>NFA Transitions</h6>
                  <ul>
                    <li>transition(q0, a) = q0, q1</li>
                    <li>transition(q0, b) = q0</li>
                    <li>transition(q1, a) = empty</li>
                    <li>transition(q1, b) = q2</li>
                    <li>transition(q2, a) = empty</li>
                    <li>transition(q2, b) = empty</li>
                  </ul>
                  
                  <h6>DFA Construction Process</h6>
                  <p><strong>Step 1:</strong> Start state = q0</p>
                  <p><strong>Step 2:</strong> From q0 on 'a': q0, q1</p>
                  <p><strong>Step 3:</strong> From q0 on 'b': q0</p>
                  <p><strong>Step 4:</strong> From q0,q1 on 'a': q0, q1</p>
                  <p><strong>Step 5:</strong> From q0,q1 on 'b': q0, q2</p>
                  <p><strong>Continue...</strong> until all states processed</p>
                  
                  <h6>Resulting DFA States</h6>
                  <ul>
                    <li>S0 = q0 (start, non-accepting)</li>
                    <li>S1 = q0,q1 (non-accepting)</li>
                    <li>S2 = q0,q2 (accepting - contains q2)</li>
                  </ul>
                  
                  <p><strong>Result:</strong> DFA accepts same language as original NFA</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← DFA and NFA Equivalence</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Epsilon Transitions →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.4</div>
              <div className="lesson-title-main">
                <h1>NFA with Epsilon-Transitions</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Definition and Significance</h3>
              <p>An NFA with epsilon-transitions can make transitions without consuming input symbols, providing additional flexibility in language specification and automata design.</p>
              
              <div className="theory-box">
                <h5>Epsilon-Transition Concepts</h5>
                <p>Understanding the power and applications of epsilon-moves:</p>
                <ul>
                  <li><strong>Epsilon-move:</strong> Transition on empty string that changes state without reading input</li>
                  <li><strong>Significance:</strong> Provides additional flexibility in language specification</li>
                  <li><strong>Epsilon-closure:</strong> Set of all states reachable from given state via epsilon-transitions</li>
                  <li><strong>Power Enhancement:</strong> Makes NFA design more intuitive for complex languages</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/epsilon-nfa.jpg" alt="Epsilon NFA" className="movie-poster" />
                  <h6>Epsilon-NFA</h6>
                  <p>NFAs with epsilon transitions</p>
                </div>
                <div className="movie-card">
                  <img src="/images/epsilon-closure-comp.jpg" alt="Epsilon Closure" className="movie-poster" />
                  <h6>Epsilon Closure</h6>
                  <p>Computing reachable states</p>
                </div>
                <div className="movie-card">
                  <img src="/images/epsilon-elimination.jpg" alt="Epsilon Elimination" className="movie-poster" />
                  <h6>Epsilon Elimination</h6>
                  <p>Converting to standard NFA</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Epsilon Transitions in NFA</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/QQYgCxu988s" 
                    title="Epsilon Transitions"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Epsilon-Closure Computation</h4>
              <div className="algorithm-box">
                <h6>Epsilon-Closure Algorithm</h6>
                <p><strong>Input:</strong> Set of states S</p>
                <p><strong>Output:</strong> Epsilon-Closure(S)</p>
                <pre>
1. Initialize closure = S
2. Initialize stack with all states in S
3. While stack is not empty:
   - Pop state q from stack
   - For each state r such that transition(q, epsilon) = r:
     - If r not in closure:
       - Add r to closure
       - Push r onto stack
4. Return closure
                </pre>
              </div>

              <h4>Conversion to NFA without Epsilon-Transitions</h4>
              <div className="definition-box">
                <h6>Conversion Steps</h6>
                <ul>
                  <li><strong>Compute Closures:</strong> Compute epsilon-closure for each state in epsilon-NFA</li>
                  <li><strong>Adjust Transitions:</strong> For each state-symbol pair, find all reachable states including via epsilon-transitions</li>
                  <li><strong>Update Function:</strong> Adjust transitions to account for epsilon-moves</li>
                  <li><strong>Update Accept States:</strong> Update accept states based on epsilon-closures</li>
                  <li><strong>Create New Function:</strong> Create new transition function without epsilon-symbols</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Epsilon-NFA Conversion Example</h5>
                <div className="epsilon-example">
                  <h6>Original Epsilon-NFA</h6>
                  <p><strong>States:</strong> q0, q1, q2, q3</p>
                  <p><strong>Alphabet:</strong> a, b</p>
                  <p><strong>Start:</strong> q0</p>
                  <p><strong>Accept:</strong> q3</p>
                  
                  <h6>Epsilon-NFA Transitions</h6>
                  <ul>
                    <li>transition(q0, a) = q1</li>
                    <li>transition(q1, epsilon) = q2</li>
                    <li>transition(q2, b) = q3</li>
                    <li>transition(q0, epsilon) = q2</li>
                  </ul>
                  
                  <h6>Epsilon-Closures</h6>
                  <ul>
                    <li>ECLOSE(q0) = q0, q2</li>
                    <li>ECLOSE(q1) = q1, q2</li>
                    <li>ECLOSE(q2) = q2</li>
                    <li>ECLOSE(q3) = q3</li>
                  </ul>
                  
                  <h6>Converted NFA (without epsilon)</h6>
                  <p><strong>New Transitions:</strong></p>
                  <ul>
                    <li>transition(q0, a) = ECLOSE(q1) = q1, q2</li>
                    <li>transition(q0, b) = ECLOSE(q3) = q3 (via q0→q2→q3)</li>
                    <li>transition(q1, b) = ECLOSE(q3) = q3 (via q1→q2→q3)</li>
                    <li>transition(q2, b) = q3</li>
                  </ul>
                  
                  <p><strong>Key Considerations:</strong></p>
                  <ul>
                    <li>Preserve language acceptance</li>
                    <li>Maintain all reachable states</li>
                    <li>Handle composite transitions</li>
                    <li>Ensure equivalent behavior</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← NFA to DFA Conversion</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Automata Minimization →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.5</div>
              <div className="lesson-title-main">
                <h1>Minimization of Finite Automata</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Optimization and Equivalence</h3>
              <p>Minimization reduces the number of states in an automaton while preserving its language recognition capability, creating the most efficient representation possible.</p>
              
              <div className="theory-box">
                <h5>Minimization Principles</h5>
                <p>Understanding the theoretical foundation of automata optimization:</p>
                <ul>
                  <li><strong>Reachability:</strong> Remove unreachable states from start state</li>
                  <li><strong>Equivalence Classes:</strong> Group equivalent states together</li>
                  <li><strong>Partition Refinement:</strong> Iteratively refine partitions based on behavior</li>
                  <li><strong>Construction:</strong> Build minimized automaton from final partitions</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/minimization.jpg" alt="Automata Minimization" className="movie-poster" />
                  <h6>Automata Minimization</h6>
                  <p>Reducing states while preserving language</p>
                </div>
                <div className="movie-card">
                  <img src="/images/partition-refinement.jpg" alt="Partition Refinement" className="movie-poster" />
                  <h6>Partition Refinement</h6>
                  <p>Iterative state grouping process</p>
                </div>
                <div className="movie-card">
                  <img src="/images/myhill-nerode.jpg" alt="Myhill-Nerode" className="movie-poster" />
                  <h6>Myhill-Nerode Theorem</h6>
                  <p>Theoretical foundation for minimization</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Automata Minimization</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/79wmmDyTRRo" 
                    title="Automata Minimization"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Myhill-Nerode Theorem</h4>
              <div className="definition-box">
                <h6>Theoretical Foundation</h6>
                <p>The Myhill-Nerode theorem provides the mathematical basis for minimization:</p>
                <ul>
                  <li><strong>State Equivalence:</strong> States are equivalent if they behave identically for all future inputs</li>
                  <li><strong>Minimal Automaton:</strong> Has the fewest possible states for the language</li>
                  <li><strong>Uniqueness:</strong> The minimal automaton is unique up to state renaming</li>
                  <li><strong>Equivalence Classes:</strong> Number of classes equals number of states in minimal automaton</li>
                </ul>
              </div>

              <h4>Minimization Algorithm (Partition Refinement)</h4>
              <div className="algorithm-box">
                <h6>Partition Refinement Steps</h6>
                <ol>
                  <li><strong>Initial Partition:</strong> Separate accepting vs non-accepting states</li>
                  <li><strong>Check Partitions:</strong> For each partition, check if states have same transitions to other partitions</li>
                  <li><strong>Split Partitions:</strong> If not, split the partition based on different behaviors</li>
                  <li><strong>Repeat Process:</strong> Continue until no more splits occur</li>
                  <li><strong>Build Automaton:</strong> Each final partition becomes a state in minimized automaton</li>
                </ol>
              </div>

              <h4>State Equivalence</h4>
              <div className="definition-box">
                <h6>Equivalence Criteria</h6>
                <p>Two states p and q are equivalent if:</p>
                <ul>
                  <li><strong>Same Type:</strong> Both accepting or both non-accepting</li>
                  <li><strong>Same Transitions:</strong> For each input symbol a, transition(p,a) and transition(q,a) are equivalent</li>
                  <li><strong>Equivalence Relation:</strong> This creates an equivalence relation on states</li>
                  <li><strong>Transitive Property:</strong> If p equivalent to q and q equivalent to r, then p equivalent to r</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Minimization Example</h5>
                <div className="minimization-example">
                  <h6>Original DFA</h6>
                  <p><strong>States:</strong> q0, q1, q2, q3, q4</p>
                  <p><strong>Alphabet:</strong> a, b</p>
                  <p><strong>Start:</strong> q0</p>
                  <p><strong>Accept:</strong> q2, q4</p>
                  
                  <h6>Initial Partition</h6>
                  <p><strong>Partition 1:</strong> q0, q1, q3 (non-accepting)</p>
                  <p><strong>Partition 2:</strong> q2, q4 (accepting)</p>
                  
                  <h6>Refinement Process</h6>
                  <p><strong>Iteration 1:</strong> Check if states in each partition behave similarly</p>
                  <ul>
                    <li>q0 on 'a' goes to accepting state, q1 on 'a' goes to non-accepting</li>
                    <li>Split Partition 1: q0 | q1, q3</li>
                  </ul>
                  
                  <p><strong>Iteration 2:</strong> Continue refinement</p>
                  <ul>
                    <li>Check q1 and q3 behavior</li>
                    <li>If they behave differently, split further</li>
                  </ul>
                  
                  <h6>Final Minimized Automaton</h6>
                  <p><strong>Minimized States:</strong> 3 states (reduced from 5)</p>
                  <p><strong>State Mapping:</strong></p>
                  <ul>
                    <li>New State 0: q0</li>
                    <li>New State 1: q1, q3 (equivalent states merged)</li>
                    <li>New State 2: q2, q4 (equivalent accepting states merged)</li>
                  </ul>
                  
                  <p><strong>Result:</strong> Minimized automaton accepts same language with fewer states</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Epsilon Transitions</button>
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

export default Unit2;