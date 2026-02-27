'use client';
import React, { useState } from 'react';

import Quiz from '../../components/Quiz';

const Module1_8 = () => {
  const [inputString, setInputString] = useState('abc');
  const [simulationResult, setSimulationResult] = useState<any>(null);
  const [selectedPreset, setSelectedPreset] = useState('');

  const epsilonNFA = {
    states: ['q0', 'q1', 'q2', 'q3'],
    alphabet: ['a', 'b', 'c'],
    transitions: {
      'q0,a': ['q0'],
      'q0,ε': ['q1'],
      'q1,b': ['q1'],
      'q1,ε': ['q2'],
      'q2,c': ['q2'],
      'q2,ε': ['q3']
    },
    start: 'q0',
    accept: ['q3']
  };

  const epsilonClosure = (states: string[]): string[] => {
    const closure = new Set(states);
    const stack = [...states];
    
    while (stack.length > 0) {
      const state = stack.pop()!;
      const key = `${state},ε`;
      const targets = epsilonNFA.transitions[key as keyof typeof epsilonNFA.transitions] || [];
      
      for (const target of targets) {
        if (!closure.has(target)) {
          closure.add(target);
          stack.push(target);
        }
      }
    }
    
    return Array.from(closure).sort();
  };

  const move = (states: string[], symbol: string): string[] => {
    const result = new Set<string>();
    
    for (const state of states) {
      const key = `${state},${symbol}`;
      const targets = epsilonNFA.transitions[key as keyof typeof epsilonNFA.transitions] || [];
      targets.forEach(t => result.add(t));
    }
    
    return Array.from(result);
  };

  const simulate = () => {
    const steps = [];
    let current = epsilonClosure([epsilonNFA.start]);
    
    steps.push({
      type: 'init',
      closure: current
    });
    
    for (const symbol of inputString) {
      if (!epsilonNFA.alphabet.includes(symbol)) {
        setSimulationResult({ error: `Invalid symbol '${symbol}'` });
        return;
      }
      
      const moved = move(current, symbol);
      current = epsilonClosure(moved);
      
      steps.push({
        type: 'read',
        symbol,
        moved,
        closure: current
      });
      
      if (current.length === 0) break;
    }
    
    const accepted = current.some(s => epsilonNFA.accept.includes(s));
    
    setSimulationResult({
      steps,
      final: current,
      accepted
    });
  };

  const presets = [
    { label: 'Empty string', value: '' },
    { label: 'abc', value: 'abc' },
    { label: 'aabbc', value: 'aabbc' },
    { label: 'bba (reject)', value: 'bba' }
  ];

  return (
    <div className="lesson-content max-w-4xl mx-auto">
      <div className="lesson-header mb-8">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
          Module 1.8
        </span>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Finite Automata with ε-Transitions
        </h1>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Objectives</h2>
        <p className="mb-4">By the end of this module, you will be able to:</p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Define an ε-NFA formally as a 5-tuple and distinguish it from NFA and DFA by the role of epsilon (ε) transitions in its transition function.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Compute the epsilon closure (ε-closure) of any set of states in an ε-NFA by systematically following all epsilon paths without consuming input symbols.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Simulate the computation of an ε-NFA on a given input string step-by-step, determining acceptance or rejection using epsilon closure at each stage.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Convert any ε-NFA into an equivalent NFA (without ε-transitions) and subsequently into a minimal DFA using the modified subset construction algorithm.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Apply the equivalence between ε-NFAs and regular expressions to explain Thompson's construction as the canonical proof that every regex corresponds to an ε-NFA.</span>
          </li>
        </ul>
      </div>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction &amp; Motivation</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Why Epsilon Transitions?</h3>
        <p className="mb-4">
          Imagine you are writing a computer program and you reach a decision point where you can jump directly to the next section without doing anything — no input required, just a free "skip." This is essentially what an epsilon transition does in a finite automaton. An ε-transition (also written as a λ-transition or ε-move) allows an automaton to change its state without reading any input symbol.
        </p>
        
        <p className="mb-4">
          While this might seem like a strange concept — why would an automaton move without consuming input? — epsilon transitions are extraordinarily useful for two main reasons:
        </p>
        
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li><strong>Simplification of construction:</strong> When building an automaton from a specification (like a regular expression), epsilon transitions let you compose simpler automata into complex ones naturally, without worrying about how they "glue" together. Thompson's construction (from Module 1.7) relies entirely on this.</li>
          <li><strong>Theoretical elegance:</strong> ε-transitions make it easier to prove theorems about automata and regular languages. The proof that regular expressions and finite automata are equivalent is clearest when stated through ε-NFAs.</li>
        </ul>
        
        <p className="mb-6">
          Importantly — and this is the fundamental theorem of this module — ε-NFAs are no more powerful than NFAs or DFAs. Every language recognized by an ε-NFA is regular, and for every ε-NFA there exists an equivalent DFA. The "free moves" add convenience, not computational power.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Key Insight: Power vs. Convenience</h4>
          <p>
            Adding ε-transitions to an NFA does NOT increase its computational power. Every ε-NFA accepts a regular language. However, ε-transitions dramatically simplify the construction and understanding of automata. This is a recurring theme in theory of computation: different models at the same power level have different engineering trade-offs.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Real-World Analogies</h3>
        
        <p className="mb-4">
          <strong>The "free teleport" analogy:</strong> In a city map (automaton), streets are transitions labeled with input symbols. An epsilon transition is like a teleporter: you can instantly move from one location to another without traveling (consuming input). You might be simultaneously in many possible locations, just like an NFA is in multiple states.
        </p>
        
        <p className="mb-4">
          <strong>The compiler analogy:</strong> In compiler design, a lexical analyzer must recognize tokens like numbers, identifiers, and keywords. Each token type has its own automaton. Epsilon transitions let us combine these mini-automata into one big automaton without creating complicated merge logic. The combined automaton can "jump" between token recognition modes for free.
        </p>

        <div className="my-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Automata_theory.svg/600px-Automata_theory.svg.png" 
            alt="Automata theory hierarchy" 
            className="mx-auto max-w-full h-auto"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            The automata theory hierarchy. ε-NFA, NFA, and DFA all sit at the same level — they all recognize exactly the class of regular languages.
          </p>
        </div>

        <div className="my-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/DFAexample.svg/600px-DFAexample.svg.png" 
            alt="Example of finite automaton" 
            className="mx-auto max-w-full h-auto"
          />
          <p className="text-center text-sm text-gray-600 mt-2">
            A finite automaton diagram. In an ε-NFA, some transition arrows are labeled ε (the empty string) instead of alphabet symbols.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Historical Context</h3>
        <p className="mb-4">
          Epsilon transitions were formalized alongside the development of formal language theory by Rabin and Scott (1959) and Kleene (1951). They appear naturally as soon as one tries to convert regular expressions into automata — Thompson's 1968 algorithm, which is the standard industrial method for compiling regex into NFA, produces an ε-NFA. Every modern regex engine (Python's re, Java's Pattern, Go's regexp) internally works by first converting your pattern into an ε-NFA.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Video Lectures</h3>
        
        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Epsilon NFA — Introduction (Neso Academy)</h4>
          <p className="mb-3">Clear introduction to ε-transitions, why they exist, and how they differ from ordinary NFA transitions.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/84oNUttWlN4?si=5z3SJ4OzD0N6Gsy1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mx-auto"></iframe>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Epsilon Closure — Gate Smashers</h4>
          <p className="mb-3">Detailed explanation of epsilon closure computation with step-by-step examples. Essential for GATE preparation.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8KZxmOIbBGA?si=OrMJeuVOJrSQEVxW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mx-auto"></iframe>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Formal Definition of ε-NFA</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">The 5-Tuple</h3>
        <p className="mb-4">An epsilon-NFA (ε-NFA) is defined as a 5-tuple M = (Q, Σ, δ, q0, F) where:</p>
        
        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-3">Definition: ε-NFA (Epsilon Non-Deterministic Finite Automaton)</h4>
          <ul className="space-y-2">
            <li><strong>Q</strong> — a finite, non-empty set of states</li>
            <li><strong>Σ</strong> — a finite set called the input alphabet (does NOT include ε)</li>
            <li><strong>δ : Q × (Σ ∪ {'{'} ε {'}'}) → 2<sup>Q</sup></strong> — the transition function; maps a state and a symbol (or ε) to a set of next states</li>
            <li><strong>q<sub>0</sub> ∈ Q</strong> — the start state</li>
            <li><strong>F ⊆ Q</strong> — the set of accepting states (final states)</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">The Critical Difference: The Transition Function</h3>
        <p className="mb-4">The key difference between an NFA and an ε-NFA is the domain of the transition function δ:</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Automaton Type</th>
                <th className="px-4 py-2 border">Transition Function Domain</th>
                <th className="px-4 py-2 border">Can use ε?</th>
                <th className="px-4 py-2 border">Output</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">DFA</td>
                <td className="px-4 py-2 border">Q × Σ → Q</td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">Single state</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">NFA</td>
                <td className="px-4 py-2 border">Q × Σ → 2<sup>Q</sup></td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">Set of states</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">ε-NFA</td>
                <td className="px-4 py-2 border">Q × (Σ ∪ {'{'} ε {'}'}) → 2<sup>Q</sup></td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">Set of states</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          In an ε-NFA, at any state q, the automaton may spontaneously move to any state in δ(q, ε) without reading any input symbol. This can happen repeatedly — the automaton might take many ε-transitions in sequence before reading the next character.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Transition Table Representation</h3>
        <p className="mb-4">
          An ε-NFA is often represented as a transition table where one column is labeled ε. Consider the following example ε-NFA that accepts strings of the form: a*, b*, or (ab)* — i.e., it accepts any string that is zero-or-more a's, OR zero-or-more b's, OR alternating ab.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-3">Example ε-NFA: Accepting a* + b* (strings of only a's or only b's)</h4>
          <p className="mb-3">States: {'{'} q0, q1, q2 {'}'}, Alphabet: {'{'} a, b {'}'}, Start: q0, Accept: {'{'} q1, q2 {'}'}</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 border">State</th>
                  <th className="px-4 py-2 border">a</th>
                  <th className="px-4 py-2 border">b</th>
                  <th className="px-4 py-2 border">ε</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">q<sub>0</sub> (start)</td>
                  <td className="px-4 py-2 border">∅</td>
                  <td className="px-4 py-2 border">∅</td>
                  <td className="px-4 py-2 border">{'{'} q<sub>1</sub>, q<sub>2</sub> {'}'}</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">q<sub>1</sub> (accept)</td>
                  <td className="px-4 py-2 border">{'{'} q<sub>1</sub> {'}'}</td>
                  <td className="px-4 py-2 border">∅</td>
                  <td className="px-4 py-2 border">∅</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">q<sub>2</sub> (accept)</td>
                  <td className="px-4 py-2 border">∅</td>
                  <td className="px-4 py-2 border">{'{'} q<sub>2</sub> {'}'}</td>
                  <td className="px-4 py-2 border">∅</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-3">
            From q<sub>0</sub>, the automaton can jump (for free, via ε) to either q<sub>1</sub> (which then accepts any number of a's) or q<sub>2</sub> (which accepts any number of b's).
          </p>
        </div>

        <div className="my-6 p-6 bg-white border border-gray-300 rounded">
          <div className="text-center mb-4">
            <svg width="400" height="200" className="mx-auto">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
                </marker>
                <marker id="arrowhead-purple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#9333ea" />
                </marker>
              </defs>
              
              <circle cx="80" cy="100" r="30" fill="white" stroke="#6366f1" strokeWidth="2" />
              <text x="80" y="105" textAnchor="middle" fontSize="16" fontWeight="bold">q₀</text>
              <text x="20" y="105" fontSize="14" fill="#6366f1">Start</text>
              
              <circle cx="220" cy="50" r="30" fill="white" stroke="#6366f1" strokeWidth="2" />
              <circle cx="220" cy="50" r="35" fill="none" stroke="#6366f1" strokeWidth="2" />
              <text x="220" y="55" textAnchor="middle" fontSize="16" fontWeight="bold">q₁</text>
              <text x="220" y="25" textAnchor="middle" fontSize="12" fill="#6366f1">Accept (a's)</text>
              
              <circle cx="220" cy="150" r="30" fill="white" stroke="#6366f1" strokeWidth="2" />
              <circle cx="220" cy="150" r="35" fill="none" stroke="#6366f1" strokeWidth="2" />
              <text x="220" y="155" textAnchor="middle" fontSize="16" fontWeight="bold">q₂</text>
              <text x="220" y="180" textAnchor="middle" fontSize="12" fill="#6366f1">Accept (b's)</text>
              
              <line x1="110" y1="85" x2="190" y2="60" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-purple)" />
              <text x="150" y="65" fontSize="14" fill="#9333ea">ε</text>
              
              <line x1="110" y1="115" x2="190" y2="140" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-purple)" />
              <text x="150" y="135" fontSize="14" fill="#9333ea">ε</text>
              
              <path d="M 240 30 Q 280 20, 280 50 Q 280 80, 240 70" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="285" y="50" fontSize="14" fill="#6366f1">a</text>
              
              <path d="M 240 170 Q 280 180, 280 150 Q 280 120, 240 130" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <text x="285" y="150" fontSize="14" fill="#6366f1">b</text>
            </svg>
          </div>
          
          <div className="text-sm text-gray-700">
            <p className="font-semibold mb-2">Legend</p>
            <ul className="space-y-1">
              <li><span className="text-purple-600">━━━</span> ε-transition</li>
              <li><span className="text-blue-600">━━━</span> Input 'a'</li>
              <li><span className="text-blue-600">━━━</span> Input 'b'</li>
            </ul>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Figure 1: ε-NFA for the language a* + b*. Dashed purple arrows are ε-transitions — free moves requiring no input.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Epsilon Closure (ε-closure)</h2>
        <p className="mb-6">
          The epsilon closure is the most important concept for understanding how ε-NFAs work. It answers the question: "Starting from state q, which states can the automaton reach by taking only ε-transitions (any number of them)?"
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-3">Definition: Epsilon Closure (ε-closure)</h4>
          <p className="mb-3">
            The epsilon closure of a state q, written ε-closure(q) or ECLOSE(q), is the set of all states reachable from q by following zero or more ε-transitions:
          </p>
          <p className="text-center mb-3 font-mono bg-white p-3 rounded">
            ε-closure(q) = {'{'}p ∈ Q : p is reachable from q via zero or more ε-transitions{'}'}
          </p>
          <p className="mb-2">
            <strong>Note:</strong> q itself is always in ε-closure(q) (zero transitions = stay in same state).
          </p>
          <p className="font-mono">
            For a set of states S: ε-closure(S) = ⋃<sub>q ∈ S</sub> ε-closure(q)
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Algorithm for Computing ε-closure</h3>
        <p className="mb-4">
          The epsilon closure is computed using a simple reachability algorithm (essentially a BFS or DFS on the graph of ε-transitions):
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded mb-6 overflow-x-auto">
          <pre className="text-sm">
{`ALGORITHM Epsilon_Closure(state_set S):
    closure = S              // Start: every state in S is reachable
    stack = copy of S        // States to explore
    
    WHILE stack is not empty:
        q = pop(stack)
        FOR each state p in δ(q, ε):    // Follow one ε-transition from q
            IF p not in closure:
                closure = closure ∪ {p}
                push(p) onto stack
    
    RETURN closure`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Worked Example: Computing ε-closure</h3>
        <p className="mb-4 font-semibold">Example: Compute ε-closure for the following ε-NFA</p>
        <p className="mb-4">ε-NFA: States {'{'}q0, q1, q2, q3, q4{'}'}, ε-transitions: q0→q1, q0→q2, q1→q3, q2→q4</p>

        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
              <div>
                <p className="font-semibold mb-2">ε-closure({'{'}q0{'}'}):</p>
                <p>Start with {'{'}q0{'}'}. From q0, follow ε to q1 and q2. From q1, follow ε to q3. From q2, follow ε to q4. From q3, q4 — no ε transitions.</p>
                <p className="mt-2 font-semibold">Result: {'{'}q0, q1, q2, q3, q4{'}'}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
              <div>
                <p className="font-semibold mb-2">ε-closure({'{'}q1{'}'}):</p>
                <p>Start with {'{'}q1{'}'}. From q1, follow ε to q3. From q3 — no ε transitions.</p>
                <p className="mt-2 font-semibold">Result: {'{'}q1, q3{'}'}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
              <div>
                <p className="font-semibold mb-2">ε-closure({'{'}q2{'}'}):</p>
                <p>Start with {'{'}q2{'}'}. From q2, follow ε to q4. From q4 — no ε transitions.</p>
                <p className="mt-2 font-semibold">Result: {'{'}q2, q4{'}'}</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <div className="flex items-start">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
              <div>
                <p className="font-semibold mb-2">ε-closure({'{'}q3{'}'}):</p>
                <p>Start with {'{'}q3{'}'}. No outgoing ε-transitions.</p>
                <p className="mt-2 font-semibold">Result: {'{'}q3{'}'}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-6 p-6 bg-white border border-gray-300 rounded">
          <p className="font-semibold mb-4">ε-transition graph (only ε edges shown)</p>
          <div className="text-center mb-4">
            <svg width="500" height="150" className="mx-auto">
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#9333ea" />
                </marker>
              </defs>
              
              <circle cx="50" cy="75" r="25" fill="white" stroke="#6366f1" strokeWidth="2" />
              <text x="50" y="80" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>
              <text x="50" y="110" textAnchor="middle" fontSize="10" fill="#6366f1">start</text>
              
              <circle cx="180" cy="40" r="25" fill="white" stroke="#22c55e" strokeWidth="2" />
              <circle cx="180" cy="40" r="30" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="180" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">q₁</text>
              
              <circle cx="180" cy="110" r="25" fill="white" stroke="#6366f1" strokeWidth="2" />
              <text x="180" y="115" textAnchor="middle" fontSize="14" fontWeight="bold">q₂</text>
              
              <circle cx="320" cy="40" r="25" fill="white" stroke="#22c55e" strokeWidth="2" />
              <circle cx="320" cy="40" r="30" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="320" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">q₃</text>
              
              <circle cx="320" cy="110" r="25" fill="white" stroke="#6366f1" strokeWidth="2" />
              <text x="320" y="115" textAnchor="middle" fontSize="14" fontWeight="bold">q₄</text>
              
              <line x1="75" y1="65" x2="155" y2="48" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <text x="115" y="50" fontSize="12" fill="#9333ea">ε</text>
              
              <line x1="75" y1="85" x2="155" y2="102" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <text x="115" y="100" fontSize="12" fill="#9333ea">ε</text>
              
              <line x1="205" y1="40" x2="295" y2="40" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <text x="250" y="35" fontSize="12" fill="#9333ea">ε</text>
              
              <line x1="205" y1="110" x2="295" y2="110" stroke="#9333ea" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <text x="250" y="105" fontSize="12" fill="#9333ea">ε</text>
            </svg>
          </div>
          
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-2">ε-closure</p>
            <ul className="space-y-1 text-sm">
              <li>{'{'}q₀{'}'}: all 5</li>
              <li>{'{'}q₁{'}'}: {'{'}q₁,q₃{'}'}</li>
              <li>{'{'}q₂{'}'}: {'{'}q₂,q₄{'}'}</li>
              <li>{'{'}q₃{'}'}: {'{'}q₃{'}'}</li>
              <li>{'{'}q₄{'}'}: {'{'}q₄{'}'}</li>
            </ul>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Figure 2: The ε-transition graph. Green double-circled states are accepting. The ε-closure of q₀ is the entire state set because all states are reachable via ε-paths.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Epsilon Closure &amp; NFA→DFA Conversion</h4>
          <p className="mb-3">Step-by-step epsilon closure computation and how it drives the NFA-to-DFA subset construction. Ideal for exam preparation.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jN8zvENdjBg?si=eo2OqHpTSHUE86q0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mx-auto"></iframe>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Computation in ε-NFA</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Extended Transition Function</h3>
        <p className="mb-4">
          Just as we defined the extended transition function δ* for NFA (to process entire strings), we define δ* for ε-NFA. The key difference is that after every transition (including at the start), we take the epsilon closure.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-3">Definition: Extended Transition Function for ε-NFA</h4>
          <p className="mb-3">Define δ*(S, w) = the set of states reachable from set S on string w, accounting for ε-transitions:</p>
          <ul className="space-y-2">
            <li><strong>Base case:</strong> δ*(S, ε) = ε-closure(S)</li>
            <li><strong>Inductive step:</strong> δ*(S, wa) = ε-closure( ⋃<sub>q ∈ δ*(S,w)</sub> δ(q, a) ) for symbol a ∈ Σ</li>
          </ul>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Step-by-Step Computation</h3>
        <p className="mb-4">To simulate an ε-NFA on input string w = a<sub>1</sub>a<sub>2</sub>...a<sub>n</sub>:</p>

        <div className="space-y-3 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p><strong>Initialize:</strong> Current states = ε-closure({'{'} q<sub>0</sub> {'}'})</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="mb-2"><strong>For each symbol a<sub>i</sub>:</strong></p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Move states = ⋃<sub>q in current</sub> δ(q, a<sub>i</sub>)</li>
              <li>Current states = ε-closure(Move states)</li>
            </ul>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p><strong>Accept</strong> if Current states ∩ F ≠ ∅</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p><strong>Reject</strong> if Current states ∩ F = ∅</p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Critical Note: ε-closure at START</h4>
          <p>
            Don't forget to take the ε-closure of the start state before reading any input! The automaton might already be in additional states due to ε-transitions from q<sub>0</sub>. This is the step most students miss.
          </p>
        </div>

        <div className="my-6 p-6 bg-white border border-gray-300 rounded">
          <div className="text-center mb-4">
            <svg width="500" height="550" className="mx-auto">
              <defs>
                <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
                </marker>
              </defs>
              
              <rect x="125" y="20" width="250" height="50" rx="25" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="250" y="50" textAnchor="middle" fontSize="14" fontWeight="bold">Start: current = ε-closure({'{'} q₀ {'}'})</text>
              
              <line x1="250" y1="70" x2="250" y2="90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              
              <rect x="100" y="90" width="300" height="50" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="250" y="120" textAnchor="middle" fontSize="14">Read next symbol a from input</text>
              
              <line x1="250" y1="140" x2="250" y2="160" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              
              <rect x="80" y="160" width="340" height="50" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="250" y="190" textAnchor="middle" fontSize="14">move = ∪{'{'} δ(q, a) : q ∈ current {'}'}</text>
              
              <line x1="250" y1="210" x2="250" y2="230" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              
              <rect x="80" y="230" width="340" height="50" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="250" y="260" textAnchor="middle" fontSize="14">current = ε-closure(move)</text>
              
              <line x1="250" y1="280" x2="250" y2="310" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              
              <rect x="175" y="310" width="150" height="50" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="250" y="340" textAnchor="middle" fontSize="14" fontWeight="bold">More input?</text>
              
              <line x1="175" y1="335" x2="60" y2="335" stroke="#6366f1" strokeWidth="2" />
              <line x1="60" y1="335" x2="60" y2="115" stroke="#6366f1" strokeWidth="2" />
              <line x1="60" y1="115" x2="100" y2="115" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              <text x="90" y="330" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6366f1">Yes</text>
              
              <line x1="250" y1="360" x2="250" y2="390" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              <text x="270" y="380" textAnchor="start" fontSize="12" fontWeight="bold" fill="#6366f1">No</text>
              
              <rect x="175" y="390" width="150" height="50" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="250" y="420" textAnchor="middle" fontSize="14" fontWeight="bold">current ∩ F ≠ ∅?</text>
              
              <line x1="325" y1="415" x2="380" y2="415" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              <text x="345" y="410" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#22c55e">Yes</text>
              
              <rect x="380" y="395" width="70" height="40" rx="5" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
              <text x="415" y="410" textAnchor="middle" fontSize="20">✅</text>
              <text x="415" y="428" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#22c55e">ACCEPT</text>
              
              <line x1="250" y1="440" x2="250" y2="480" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead3)" />
              <text x="270" y="465" textAnchor="start" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>
              
              <rect x="215" y="480" width="70" height="40" rx="5" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
              <text x="250" y="495" textAnchor="middle" fontSize="20">❌</text>
              <text x="250" y="513" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ef4444">REJECT</text>
            </svg>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Worked Examples</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Comprehensive Example: ε-NFA for (a+b)*abb</h3>
        <p className="mb-4">Consider the following ε-NFA designed to accept all strings over {'{'} a,b {'}'} that end with "abb":</p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">State</th>
                <th className="px-4 py-2 border">a</th>
                <th className="px-4 py-2 border">b</th>
                <th className="px-4 py-2 border">ε</th>
                <th className="px-4 py-2 border">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">→q<sub>0</sub></td>
                <td className="px-4 py-2 border">{'{'} q<sub>0</sub>, q<sub>1</sub> {'}'}</td>
                <td className="px-4 py-2 border">{'{'} q<sub>0</sub> {'}'}</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">Start state (loops on a,b)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">q<sub>1</sub></td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">{'{'} q<sub>2</sub> {'}'}</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">Seen 'a' of abb</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">q<sub>2</sub></td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">{'{'} q<sub>3</sub> {'}'}</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">Seen 'ab' of abb</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">*q<sub>3</sub></td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">Accept — seen 'abb'</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6 text-sm text-gray-600">Note: This NFA has no ε-transitions, but let's trace through it to show the method, then we'll add epsilon transitions in the next example.</p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Example with ε-Transitions: Accepting a*b*c*</h3>
        <p className="mb-4 font-semibold">Example: ε-NFA for the language a*b*c* (zero or more a's, then b's, then c's)</p>
        <p className="mb-4">States: {'{'} q0, q1, q2, q3 {'}'} | Alphabet: {'{'} a, b, c {'}'} | Start: q0 | Accept: {'{'} q3 {'}'}</p>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">State</th>
                <th className="px-4 py-2 border">a</th>
                <th className="px-4 py-2 border">b</th>
                <th className="px-4 py-2 border">c</th>
                <th className="px-4 py-2 border">ε</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">q<sub>0</sub></td>
                <td className="px-4 py-2 border">{'{'} q<sub>0</sub> {'}'}</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">{'{'} q<sub>1</sub> {'}'}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">q<sub>1</sub></td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">{'{'} q<sub>1</sub> {'}'}</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">{'{'} q<sub>2</sub> {'}'}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">q<sub>2</sub></td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">{'{'} q<sub>2</sub> {'}'}</td>
                <td className="px-4 py-2 border">{'{'} q<sub>3</sub> {'}'}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">*q<sub>3</sub></td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-4 font-semibold">Trace on input "abc":</p>
        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">Init</p>
            <p>Current = ε-closure({'{'} q<sub>0</sub> {'}'}) = {'{'} q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub>, q<sub>3</sub> {'}'} (q<sub>0</sub>→ε→q<sub>1</sub>→ε→q<sub>2</sub>→ε→q<sub>3</sub>)</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">a</p>
            <p>Move({'{'} q<sub>0</sub>,q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}, a) = δ(q<sub>0</sub>,a) = {'{'} q<sub>0</sub> {'}'}. Then ε-closure({'{'} q<sub>0</sub> {'}'}) = {'{'} q<sub>0</sub>,q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">b</p>
            <p>Move({'{'} q<sub>0</sub>,q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}, b) = δ(q<sub>1</sub>,b) = {'{'} q<sub>1</sub> {'}'}. Then ε-closure({'{'} q<sub>1</sub> {'}'}) = {'{'} q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">c</p>
            <p>Move({'{'} q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}, c) = δ(q<sub>2</sub>,c) = {'{'} q<sub>2</sub> {'}'}. Then ε-closure({'{'} q<sub>2</sub> {'}'}) = {'{'} q<sub>2</sub>,q<sub>3</sub> {'}'}</p>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="font-semibold mb-2">End</p>
            <p>Current = {'{'} q<sub>2</sub>, q<sub>3</sub> {'}'}. q<sub>3</sub> ∈ F. ACCEPT "abc" ✅</p>
          </div>
        </div>

        <p className="mb-4 font-semibold">Trace on input "bba" (should be rejected — b's before a's):</p>
        <div className="space-y-4 mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">Init</p>
            <p>Current = ε-closure({'{'} q<sub>0</sub> {'}'}) = {'{'} q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub>, q<sub>3</sub> {'}'}</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">b</p>
            <p>Move = δ(q<sub>1</sub>,b) = {'{'} q<sub>1</sub> {'}'}. ε-closure({'{'} q<sub>1</sub> {'}'}) = {'{'} q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">b</p>
            <p>Move = δ(q<sub>1</sub>,b) = {'{'} q<sub>1</sub> {'}'}. ε-closure = {'{'} q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}</p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-semibold mb-2">a</p>
            <p>Move({'{'} q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}, a) = ∅ (none of q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> have 'a' transitions). ε-closure(∅) = ∅</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="font-semibold mb-2">End</p>
            <p>Current = ∅. No accepting states. REJECT "bba" ❌</p>
          </div>
        </div>

        <div className="my-6 p-6 bg-white border border-gray-300 rounded">
          <p className="font-semibold mb-4">ε-NFA for a*b*c*</p>
          <div className="text-center mb-4">
            <svg width="600" height="150" className="mx-auto">
              <defs>
                <marker id="arrowhead4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
                </marker>
                <marker id="arrowhead-purple2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#9333ea" />
                </marker>
              </defs>
              
              <circle cx="80" cy="75" r="30" fill="white" stroke="#6366f1" strokeWidth="2" />
              <text x="80" y="80" textAnchor="middle" fontSize="16" fontWeight="bold">q₀</text>
              <text x="80" y="120" textAnchor="middle" fontSize="12" fill="#6366f1">a* phase</text>
              
              <circle cx="230" cy="75" r="30" fill="white" stroke="#6366f1" strokeWidth="2" />
              <text x="230" y="80" textAnchor="middle" fontSize="16" fontWeight="bold">q₁</text>
              <text x="230" y="120" textAnchor="middle" fontSize="12" fill="#6366f1">b* phase</text>
              
              <circle cx="380" cy="75" r="30" fill="white" stroke="#6366f1" strokeWidth="2" />
              <text x="380" y="80" textAnchor="middle" fontSize="16" fontWeight="bold">q₂</text>
              <text x="380" y="120" textAnchor="middle" fontSize="12" fill="#6366f1">c* phase</text>
              
              <circle cx="530" cy="75" r="30" fill="white" stroke="#22c55e" strokeWidth="2" />
              <circle cx="530" cy="75" r="35" fill="none" stroke="#22c55e" strokeWidth="2" />
              <text x="530" y="80" textAnchor="middle" fontSize="16" fontWeight="bold">q₃</text>
              <text x="530" y="120" textAnchor="middle" fontSize="12" fill="#22c55e">accept</text>
              
              <path d="M 60 50 Q 40 30, 60 30 Q 80 30, 100 50" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead4)" />
              <text x="80" y="25" textAnchor="middle" fontSize="14" fill="#6366f1">a</text>
              
              <line x1="110" y1="75" x2="200" y2="75" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-purple2)" />
              <text x="155" y="70" fontSize="14" fill="#9333ea">ε</text>
              
              <path d="M 210 50 Q 190 30, 210 30 Q 230 30, 250 50" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead4)" />
              <text x="230" y="25" textAnchor="middle" fontSize="14" fill="#6366f1">b</text>
              
              <line x1="260" y1="75" x2="350" y2="75" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-purple2)" />
              <text x="305" y="70" fontSize="14" fill="#9333ea">ε</text>
              
              <path d="M 360 50 Q 340 30, 360 30 Q 380 30, 400 50" fill="none" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead4)" />
              <text x="380" y="25" textAnchor="middle" fontSize="14" fill="#6366f1">c</text>
              
              <line x1="410" y1="75" x2="495" y2="75" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead-purple2)" />
              <text x="452" y="70" fontSize="14" fill="#9333ea">ε</text>
            </svg>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Figure 3: ε-NFA for a*b*c*. The ε-transitions (dashed purple) allow transitioning between phases without consuming input — capturing the "end of a's, start of b's" moment.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Removing ε-Transitions: Subset Construction</h2>
        <p className="mb-6">
          Every ε-NFA can be converted into an equivalent NFA (without ε-transitions) and then into a DFA. The conversion uses a modified subset construction that incorporates epsilon closures.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-3">Algorithm: ε-NFA to DFA Conversion</h4>
          <p className="mb-3">Given ε-NFA M = (Q, Σ, δ, q<sub>0</sub>, F), construct DFA M' = (Q', Σ, δ', q<sub>0</sub>', F') as follows:</p>
          <div className="bg-white p-4 rounded space-y-2">
            <p><strong>q<sub>0</sub>' = ε-closure({'{'} q<sub>0</sub> {'}'})</strong></p>
            <p><strong>For each DFA state S</strong> (a set of ε-NFA states) <strong>and each symbol a ∈ Σ:</strong></p>
            <p className="ml-4">δ'(S, a) = ε-closure( ⋃<sub>q ∈ S</sub> δ(q, a) )</p>
            <p><strong>Q'</strong> = all sets of states reachable from q<sub>0</sub>'</p>
            <p><strong>F'</strong> = {'{'} S ∈ Q' : S ∩ F ≠ ∅ {'}'}</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Full Conversion Example</h3>
        <p className="mb-4 font-semibold">Convert: ε-NFA for a*b*c* to DFA</p>

        <p className="mb-3 font-semibold">Step 1: Compute all ε-closures</p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">State</th>
                <th className="px-4 py-2 border">ε-closure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">q<sub>0</sub></td>
                <td className="px-4 py-2 border">{'{'} q<sub>0</sub>, q<sub>1</sub>, q<sub>2</sub>, q<sub>3</sub> {'}'}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">q<sub>1</sub></td>
                <td className="px-4 py-2 border">{'{'} q<sub>1</sub>, q<sub>2</sub>, q<sub>3</sub> {'}'}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">q<sub>2</sub></td>
                <td className="px-4 py-2 border">{'{'} q<sub>2</sub>, q<sub>3</sub> {'}'}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">q<sub>3</sub></td>
                <td className="px-4 py-2 border">{'{'} q<sub>3</sub> {'}'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6"><strong>Step 2:</strong> DFA start state = ε-closure({'{'} q<sub>0</sub> {'}'}) = {'{'} q<sub>0</sub>,q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'} — call it A</p>

        <p className="mb-3 font-semibold">Step 3: Compute transitions for each DFA state</p>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">DFA State</th>
                <th className="px-4 py-2 border">Represents</th>
                <th className="px-4 py-2 border">On a</th>
                <th className="px-4 py-2 border">On b</th>
                <th className="px-4 py-2 border">On c</th>
                <th className="px-4 py-2 border">Accept?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">A (start)</td>
                <td className="px-4 py-2 border">{'{'} q<sub>0</sub>,q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}</td>
                <td className="px-4 py-2 border">B</td>
                <td className="px-4 py-2 border">C</td>
                <td className="px-4 py-2 border">D</td>
                <td className="px-4 py-2 border">Yes (q<sub>3</sub> ∈ F)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">B</td>
                <td className="px-4 py-2 border">{'{'} q<sub>0</sub>,q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}</td>
                <td className="px-4 py-2 border">B</td>
                <td className="px-4 py-2 border">C</td>
                <td className="px-4 py-2 border">D</td>
                <td className="px-4 py-2 border">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">C</td>
                <td className="px-4 py-2 border">{'{'} q<sub>1</sub>,q<sub>2</sub>,q<sub>3</sub> {'}'}</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">C</td>
                <td className="px-4 py-2 border">D</td>
                <td className="px-4 py-2 border">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">D</td>
                <td className="px-4 py-2 border">{'{'} q<sub>2</sub>,q<sub>3</sub> {'}'}</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">D</td>
                <td className="px-4 py-2 border">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Dead</td>
                <td className="px-4 py-2 border">∅</td>
                <td className="px-4 py-2 border">Dead</td>
                <td className="px-4 py-2 border">Dead</td>
                <td className="px-4 py-2 border">Dead</td>
                <td className="px-4 py-2 border">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Key Observation:</h4>
          <p>
            A and B represent the same set! So they merge into one DFA state. The resulting DFA has only 4 states (A=B, C, D, Dead), compared to the ε-NFA's 4 states. In general, the DFA from subset construction can have up to 2<sup>n</sup> states for an n-state ε-NFA.
          </p>
        </div>

        <details className="mb-6 bg-gray-50 border border-gray-300 rounded p-4">
          <summary className="cursor-pointer font-semibold text-lg text-gray-900 mb-2">Proof Sketch: Why ε-NFA and DFA Accept Same Language — Click to expand ▼</summary>
          <div className="mt-4 space-y-3">
            <p className="font-semibold">Claim: For any ε-NFA M, the DFA M' constructed above satisfies L(M') = L(M).</p>
            <p className="font-semibold">Proof by induction on |w|:</p>
            <div className="ml-4 space-y-3">
              <p>
                <strong>Base case (w = ε):</strong> M accepts ε iff some accepting state is in ε-closure({'{'} q<sub>0</sub> {'}'}). M' accepts ε iff its start state q<sub>0</sub>' = ε-closure({'{'} q<sub>0</sub> {'}'}) contains an accepting state. ✓
              </p>
              <p>
                <strong>Inductive step:</strong> Assume for all strings of length n, δ*(q<sub>0</sub>, w) in M equals δ'*(q<sub>0</sub>', w) in M'. For string wa: δ*(q<sub>0</sub>, wa) = ε-closure(⋃ δ(q, a) for q in δ*(q<sub>0</sub>, w)) = δ'(δ'*(q<sub>0</sub>', w), a) = δ'*(q<sub>0</sub>', wa). ✓
              </p>
            </div>
            <p>
              Since the set of states reached on any string w is identical in both automata, and accepting conditions are the same (contain an F-state), L(M) = L(M'). □
            </p>
          </div>
        </details>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Equivalence: ε-NFA = NFA = DFA</h2>
        <p className="mb-6">
          One of the most important theorems in automata theory is the equivalence of DFA, NFA, and ε-NFA. All three models recognize exactly the same class of languages — the regular languages. This is proven through a chain of constructions:
        </p>

        <div className="my-6 p-6 bg-white border border-gray-300 rounded">
          <div className="text-center mb-4">
            <svg width="600" height="300" className="mx-auto">
              <defs>
                <marker id="arrowhead5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
                </marker>
              </defs>
              
              <rect x="50" y="50" width="100" height="60" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="100" y="85" textAnchor="middle" fontSize="18" fontWeight="bold">DFA</text>
              
              <rect x="250" y="50" width="100" height="60" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="300" y="85" textAnchor="middle" fontSize="18" fontWeight="bold">NFA</text>
              
              <rect x="450" y="50" width="100" height="60" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="500" y="85" textAnchor="middle" fontSize="18" fontWeight="bold">ε-NFA</text>
              
              <line x1="150" y1="80" x2="250" y2="80" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead5)" />
              <text x="200" y="70" textAnchor="middle" fontSize="12">Trivially an NFA</text>
              <text x="200" y="100" textAnchor="middle" fontSize="11">(determinism is a</text>
              <text x="200" y="113" textAnchor="middle" fontSize="11">special case)</text>
              
              <line x1="350" y1="80" x2="450" y2="80" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead5)" />
              <text x="400" y="70" textAnchor="middle" fontSize="12">Add ε-column</text>
              <text x="400" y="100" textAnchor="middle" fontSize="11">(all empty)</text>
              
              <path d="M 500 110 Q 500 180, 300 180 Q 100 180, 100 110" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead5)" fill="none" />
              <text x="300" y="200" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#22c55e">Subset construction with ε-closure</text>
              
              <path d="M 300 110 Q 300 150, 100 150 Q 100 130, 100 110" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead5)" fill="none" />
              <text x="200" y="165" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#22c55e">Subset construction</text>
              
              <rect x="150" y="230" width="300" height="50" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
              <text x="300" y="250" textAnchor="middle" fontSize="14" fontWeight="bold">All three accept exactly</text>
              <text x="300" y="268" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#22c55e">Regular Languages</text>
            </svg>
          </div>
        </div>

        <div className="overflow-x-auto mb-6">
          <table className="min-w-full bg-white border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Property</th>
                <th className="px-4 py-2 border">DFA</th>
                <th className="px-4 py-2 border">NFA</th>
                <th className="px-4 py-2 border">ε-NFA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Transition per state per symbol</td>
                <td className="px-4 py-2 border">Exactly 1</td>
                <td className="px-4 py-2 border">0 or more</td>
                <td className="px-4 py-2 border">0 or more (+ ε moves)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Uses ε-transitions</td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Languages recognized</td>
                <td className="px-4 py-2 border">Regular</td>
                <td className="px-4 py-2 border">Regular</td>
                <td className="px-4 py-2 border">Regular</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Min states (worst case)</td>
                <td className="px-4 py-2 border">Can be exponentially larger than NFA</td>
                <td className="px-4 py-2 border">Compact</td>
                <td className="px-4 py-2 border">Very compact (Thompson's builds small NFAs)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Simulation complexity</td>
                <td className="px-4 py-2 border">O(|w|) time</td>
                <td className="px-4 py-2 border">O(|Q|·|w|)</td>
                <td className="px-4 py-2 border">O(|Q|<sup>2</sup>·|w|)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Best for</td>
                <td className="px-4 py-2 border">Fast matching (runtime)</td>
                <td className="px-4 py-2 border">Specification</td>
                <td className="px-4 py-2 border">Compilation (regex→automaton)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Used in</td>
                <td className="px-4 py-2 border">Lexers at runtime</td>
                <td className="px-4 py-2 border">Theoretical proofs</td>
                <td className="px-4 py-2 border">Regex compilation, Thompson's construction</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Automaton concept</h4>
          <img src="data:image/png;base64,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" alt="" />
          <p>
            All finite automaton variants (DFA, NFA, ε-NFA) are provably equivalent in language recognition power.
          </p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-2">Finite state machine</h4>
          <img src="data:image/png;base64,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" alt="" />
          <p>
            A typical finite state machine. ε-transitions add free edges to this graph without changing what languages the machine can recognize.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Connection with Regular Expressions</h2>
        <p className="mb-6">
          The deepest reason we study ε-NFAs is their perfect correspondence with regular expressions. Thompson's construction (covered in Module 1.7) builds an ε-NFA from any regular expression. The properties of the construction are:
        </p>

        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>For a regex with n symbols, the ε-NFA has at most 2n states.</li>
          <li>Each state has at most two outgoing ε-transitions.</li>
          <li>There is exactly one start state and one accept state.</li>
          <li>The accept state has no outgoing transitions.</li>
        </ul>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-6">
          <h4 className="text-lg font-bold text-gray-900 mb-3">Kleene's Theorem (Full Statement):</h4>
          <p className="mb-2">A language L is regular if and only if:</p>
          <ul className="list-none ml-4 space-y-1">
            <li>(a) L is accepted by some DFA, OR</li>
            <li>(b) L is accepted by some NFA, OR</li>
            <li>(c) L is accepted by some ε-NFA, OR</li>
            <li>(d) L is described by some regular expression.</li>
          </ul>
          <p className="mt-3">
            The four conditions are equivalent. This is proven by showing: regex → ε-NFA (Thompson's construction), ε-NFA → DFA (subset construction), DFA → regex (state elimination / Arden's lemma).
          </p>
        </div>

        <div className="my-6 p-6 bg-white border border-gray-300 rounded">
          <div className="text-center mb-4">
            <svg width="700" height="400" className="mx-auto">
              <defs>
                <marker id="arrowhead6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#6366f1" />
                </marker>
                <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#22c55e" />
                </marker>
              </defs>
              
              <rect x="50" y="50" width="150" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
              <text x="125" y="75" textAnchor="middle" fontSize="14" fontWeight="bold">Regular Expression</text>
              <text x="125" y="95" textAnchor="middle" fontSize="12">(e.g., (a+b)*abb)</text>
              
              <rect x="275" y="50" width="150" height="80" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="350" y="75" textAnchor="middle" fontSize="14" fontWeight="bold">ε-NFA</text>
              <text x="350" y="95" textAnchor="middle" fontSize="12">(Thompson's Construction)</text>
              <text x="350" y="115" textAnchor="middle" fontSize="11" fill="#6366f1">≤ 2n states</text>
              
              <rect x="500" y="50" width="150" height="80" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="575" y="85" textAnchor="middle" fontSize="14" fontWeight="bold">NFA</text>
              <text x="575" y="105" textAnchor="middle" fontSize="12">(Remove ε-transitions)</text>
              
              <rect x="275" y="200" width="150" height="80" rx="10" fill="#dbeafe" stroke="#6366f1" strokeWidth="2" />
              <text x="350" y="225" textAnchor="middle" fontSize="14" fontWeight="bold">DFA</text>
              <text x="350" y="245" textAnchor="middle" fontSize="12">(Subset Construction)</text>
              <text x="350" y="265" textAnchor="middle" fontSize="11" fill="#6366f1">less than or equal to 2<tspan baselineShift="super" fontSize="9">n</tspan> states</text>
              
              <rect x="500" y="200" width="150" height="80" rx="10" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" />
              <text x="575" y="230" textAnchor="middle" fontSize="14" fontWeight="bold">Minimized DFA</text>
              <text x="575" y="250" textAnchor="middle" fontSize="12">(Hopcroft's Algorithm)</text>
              
              <line x1="200" y1="90" x2="275" y2="90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead6)" />
              <text x="237" y="80" textAnchor="middle" fontSize="11" fontWeight="bold">Regex → ε-NFA</text>
              
              <line x1="425" y1="90" x2="500" y2="90" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead6)" />
              <text x="462" y="80" textAnchor="middle" fontSize="11" fontWeight="bold">ε-NFA → NFA</text>
              <text x="462" y="110" textAnchor="middle" fontSize="10">(ε-closure method)</text>
              
              <line x1="575" y1="130" x2="575" y2="200" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead6)" />
              <text x="600" y="165" textAnchor="start" fontSize="11" fontWeight="bold">NFA → DFA</text>
              <text x="600" y="178" textAnchor="start" fontSize="10">(Subset construction)</text>
              
              <line x1="500" y1="240" x2="425" y2="240" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrowhead6)" />
              <text x="462" y="230" textAnchor="middle" fontSize="11" fontWeight="bold">DFA → min DFA</text>
              
              <path d="M 275 240 Q 125 240, 125 130" stroke="#22c55e" strokeWidth="2" markerEnd="url(#arrowhead-green)" fill="none" />
              <text x="180" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#22c55e">State elimination</text>
              <text x="180" y="213" textAnchor="middle" fontSize="10" fill="#22c55e">(Arden's Lemma)</text>
            </svg>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Python Implementation</h2>
        <p className="mb-6">
          The following is a complete, working Python implementation of an ε-NFA simulator. It computes epsilon closures, simulates computation on input strings, and can convert an ε-NFA to a DFA using the subset construction.
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded mb-6 overflow-x-auto">
          <pre className="text-sm">
{`# ============================================================
# Epsilon-NFA Simulator and ε-NFA to DFA Converter
# Theory of Computation — Module 1.8
# ============================================================

from collections import defaultdict, deque

class EpsilonNFA:
    """
    A complete implementation of an epsilon-NFA.
    Supports epsilon closure computation, string acceptance,
    and conversion to DFA via subset construction.
    """

    EPSILON = 'ε'

    def __init__(self, states, alphabet, transitions, start_state, accept_states):
        """
        Args:
            states: set of state names (e.g., {'q0', 'q1', 'q2'})
            alphabet: set of input symbols (NOT including ε)
            transitions: dict mapping (state, symbol) -> set of states
                         Use symbol='ε' for epsilon transitions
            start_state: single start state
            accept_states: set of accepting states
        """
        self.states = frozenset(states)
        self.alphabet = frozenset(alphabet)
        self.transitions = defaultdict(set)
        for (state, sym), targets in transitions.items():
            self.transitions[(state, sym)] = set(targets)
        self.start_state = start_state
        self.accept_states = frozenset(accept_states)

    def epsilon_closure(self, state_set):
        """
        Compute ε-closure(S): all states reachable from any state in S
        via zero or more ε-transitions.
        Uses BFS for correctness and efficiency.
        """
        closure = set(state_set)
        queue = deque(state_set)

        while queue:
            state = queue.popleft()
            # Follow all ε-transitions from current state
            epsilon_targets = self.transitions.get((state, self.EPSILON), set())
            for target in epsilon_targets:
                if target not in closure:
                    closure.add(target)
                    queue.append(target)

        return frozenset(closure)

    def move(self, state_set, symbol):
        """
        Compute MOVE(S, a): states reachable from S by reading symbol 'a'.
        Does NOT include ε-transitions here — call epsilon_closure after.
        """
        result = set()
        for state in state_set:
            result.update(self.transitions.get((state, symbol), set()))
        return result

    def extended_delta(self, state_set, string):
        """
        Compute δ*(S, w): set of states reached from S on string w.
        Accounts for ε-closures at every step.
        """
        # Step 1: Take ε-closure of initial state set
        current = self.epsilon_closure(state_set)

        for symbol in string:
            if symbol not in self.alphabet:
                raise ValueError(f"Symbol '{symbol}' not in alphabet {self.alphabet}")
            # Step 2: Move on symbol
            moved = self.move(current, symbol)
            # Step 3: Take ε-closure of result
            current = self.epsilon_closure(moved)

            if not current:
                return frozenset()  # Dead — no states reachable

        return current

    def accepts(self, string, verbose=False):
        """
        Returns True if the ε-NFA accepts the given string.
        If verbose=True, prints each step of the computation.
        """
        current = self.epsilon_closure({self.start_state})

        if verbose:
            print(f"  [INIT] ε-closure({{{self.start_state}}}) = {set(current)}")

        for i, symbol in enumerate(string):
            moved = self.move(current, symbol)
            current = self.epsilon_closure(moved)

            if verbose:
                print(f"  [READ '{symbol}'] move={set(moved)}, ε-closure={set(current)}")

            if not current:
                if verbose:
                    print("  [DEAD] No states reachable. REJECT.")
                return False

        accepted = bool(current & self.accept_states)
        if verbose:
            print(f"  [END] Current={set(current)}, Accept={set(self.accept_states)}")
            print(f"  → {'ACCEPT ✅' if accepted else 'REJECT ❌'}")
        return accepted

    def to_dfa(self):
        """
        Convert ε-NFA to equivalent DFA using modified subset construction.
        Returns a dict representing the DFA transition table.
        """
        dfa_states = {}
        dfa_transitions = {}
        dfa_accept = set()
        worklist = deque()

        # DFA start state is ε-closure of ε-NFA start state
        start = self.epsilon_closure({self.start_state})
        dfa_states[start] = f"D{len(dfa_states)}"
        worklist.append(start)

        if start & self.accept_states:
            dfa_accept.add(dfa_states[start])

        while worklist:
            nfa_set = worklist.popleft()
            dfa_name = dfa_states[nfa_set]
            dfa_transitions[dfa_name] = {}

            for symbol in self.alphabet:
                # Compute next DFA state
                moved = self.move(nfa_set, symbol)
                next_set = self.epsilon_closure(moved)

                if next_set not in dfa_states:
                    dfa_states[next_set] = f"D{len(dfa_states)}"
                    worklist.append(next_set)
                    if next_set & self.accept_states:
                        dfa_accept.add(dfa_states[next_set])

                dfa_transitions[dfa_name][symbol] = dfa_states[next_set]

        return {
            'start': dfa_states[start],
            'transitions': dfa_transitions,
            'accept': dfa_accept,
            'state_map': {v: set(k) for k, v in dfa_states.items()}
        }


# ============================================================
# Demo: ε-NFA for a*b*c* (from worked example in Section 6)
# ============================================================
if __name__ == '__main__':
    nfa = EpsilonNFA(
        states={'q0', 'q1', 'q2', 'q3'},
        alphabet={'a', 'b', 'c'},
        transitions={
            ('q0', 'a'): {'q0'},
            ('q0', 'ε'): {'q1'},
            ('q1', 'b'): {'q1'},
            ('q1', 'ε'): {'q2'},
            ('q2', 'c'): {'q2'},
            ('q2', 'ε'): {'q3'},
        },
        start_state='q0',
        accept_states={'q3'}
    )

    test_strings = ['', 'a', 'b', 'c', 'abc', 'aabbc', 'bba', 'cb', 'aaa', 'bbbccc']

    print("=== ε-NFA Simulation for a*b*c* ===")
    for s in test_strings:
        result = nfa.accepts(s)
        print(f"  '{s}': {'ACCEPT' if result else 'REJECT'}")

    print("\n=== Verbose trace for 'abc' ===")
    nfa.accepts('abc', verbose=True)

    print("\n=== Convert to DFA ===")
    dfa = nfa.to_dfa()
    print(f"DFA start: {dfa['start']}")
    print(f"DFA accept states: {dfa['accept']}")
    for state, trans in dfa['transitions'].items():
        print(f"  {state}: {trans} (NFA states: {dfa['state_map'][state]})")`}
          </pre>
        </div>

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Expected Output</h3>
        <div className="bg-gray-100 p-4 rounded mb-6 overflow-x-auto">
          <pre className="text-sm">
{`=== ε-NFA Simulation for a*b*c* ===
  '': ACCEPT
  'a': ACCEPT
  'b': ACCEPT
  'c': ACCEPT
  'abc': ACCEPT
  'aabbc': ACCEPT
  'bba': REJECT
  'cb': REJECT
  'aaa': ACCEPT
  'bbbccc': ACCEPT

=== Verbose trace for 'abc' ===
  [INIT] ε-closure({q0}) = {'q0', 'q1', 'q2', 'q3'}
  [READ 'a'] move={'q0'}, ε-closure={'q0', 'q1', 'q2', 'q3'}
  [READ 'b'] move={'q1'}, ε-closure={'q1', 'q2', 'q3'}
  [READ 'c'] move={'q2'}, ε-closure={'q2', 'q3'}
  [END] Current={'q2', 'q3'}, Accept={'q3'}
  → ACCEPT ✅`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive ε-NFA Simulator</h2>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">▶ Live ε-NFA Simulator</h3>
          <p className="mb-4">Test the a*b*c* epsilon-NFA interactively. Enter any string of a, b, c to see step-by-step computation.</p>
          
          <div className="bg-white p-4 rounded space-y-4">
            <div>
              <label className="block font-semibold mb-2">Input String (use a, b, c):</label>
              <input 
                type="text" 
                value={inputString} 
                onChange={(e) => setInputString(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded" 
              />
            </div>
            
            <div>
              <label className="block font-semibold mb-2">Choose Preset:</label>
              <select 
                value={selectedPreset}
                onChange={(e) => {
                  setSelectedPreset(e.target.value);
                  setInputString(e.target.value);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              >
                <option value="">-- Select preset --</option>
                {presets.map((preset, i) => (
                  <option key={i} value={preset.value}>{preset.label}</option>
                ))}
              </select>
            </div>
            
            <button 
              onClick={simulate}
              className="bg-blue-500 text-white px-6 py-2 rounded font-semibold hover:bg-blue-600"
            >
              ▶ Simulate
            </button>
          </div>
        </div>

        {simulationResult && !simulationResult.error && (
          <div className="bg-gray-50 border border-gray-300 rounded p-6 mb-6">
            <h4 className="text-lg font-bold text-gray-900 mb-3">ε-NFA for a*b*c* | Input: "{inputString}"</h4>
            <div className="space-y-2 text-sm font-mono">
              {simulationResult.steps.map((step: any, i: number) => (
                <div key={i}>
                  {step.type === 'init' ? (
                    <>
                      <p><strong>INIT:</strong></p>
                      <p className="ml-4">ε-closure({'{'} q0 {'}'}) = {'{'} {step.closure.join(', ')} {'}'}</p>
                    </>
                  ) : (
                    <>
                      <p><strong>READ '{step.symbol}':</strong></p>
                      <p className="ml-4">move = {'{'} {step.moved.join(', ') || '∅'} {'}'}, ε-closure = {'{'} {step.closure.join(', ') || '∅'} {'}'}</p>
                    </>
                  )}
                </div>
              ))}
              <p className="mt-4"><strong>Final states:</strong> {'{'} {simulationResult.final.join(', ') || '∅'} {'}'}</p>
              <p><strong>Accept states:</strong> {'{'} q3 {'}'}</p>
              <p><strong>Intersection:</strong> {'{'} {simulationResult.final.filter((s: string) => s === 'q3').join(', ') || '∅'} {'}'}</p>
              <p className={`${simulationResult.accepted ? 'text-green-600' : 'text-red-600'} font-bold mt-2`}>
                → {simulationResult.accepted ? 'ACCEPT ✅' : 'REJECT ❌'} "{inputString}" {simulationResult.accepted ? 'is in' : 'is not in'} a*b*c*
              </p>
            </div>
          </div>
        )}

        {simulationResult?.error && (
          <div className="bg-red-50 border border-red-300 rounded p-6 mb-6">
            <p className="text-red-600 font-semibold">Error: {simulationResult.error}</p>
          </div>
        )}

        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Build Your Own ε-NFA (Specification Guide)</h3>
        <p className="mb-4">The simulator above uses the fixed a*b*c* ε-NFA. To understand how to specify your own:</p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded mb-6 overflow-x-auto">
          <pre className="text-sm">
{`# ε-NFA Specification Format
states = {q0, q1, q2, q3}
alphabet = {a, b, c}  # Do NOT include ε here
start_state = q0
accept_states = {q3}

# Transitions: (state, symbol) -> {set of next states}
# Use 'ε' as symbol for epsilon transitions
transitions = {
    (q0, 'a') -> {q0},  # loop on 'a'
    (q0, ε ) -> {q1},  # free jump to q1
    (q1, 'b') -> {q1},  # loop on 'b'
    (q1, ε ) -> {q2},  # free jump to q2
    (q2, 'c') -> {q2},  # loop on 'c'
    (q2, ε ) -> {q3},  # free jump to accept
}`}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">MCQ Practice</h2>
        <p className="mb-6 text-gray-700">Test your understanding of ε-NFAs and their conversion to NFAs/DFAs.</p>
        
        <Quiz 
          title="MCQ Practice: ε-NFAs and Finite Automata"
          subject="Theory of Computation"
          unitId={1}
          moduleId={8}
          questions={[
            {
              question: "What does the epsilon (ε) symbol represent in a finite automaton?",
              options: [
                "A specific character in the input alphabet",
                "The end of the input string",
                "An empty string transition that requires no input consumption",
                "A state that cannot be reached"
              ],
              correctAnswer: 2,
              explanation: "In automata theory, ε (epsilon) represents the empty string. An ε-transition allows an automaton to change states without reading any character from the input alphabet."
            },
            {
              question: "How is the ε-closure of a state q defined?",
              options: [
                "The set of all states reachable from q by reading exactly one ε",
                "The set of all states reachable from q by reading zero or more ε-transitions",
                "The set of all states that can reach q via ε-transitions",
                "The set of states reachable from q using any symbol from the alphabet"
              ],
              correctAnswer: 1,
              explanation: "The ε-closure(q) is the set of all states p such that there is a path from q to p consisting entirely of ε-transitions. It always includes q itself."
            },
            {
              question: "Which of the following is true regarding the computational power of ε-NFAs compared to standard NFAs and DFAs?",
              options: [
                "ε-NFAs are strictly more powerful than DFAs",
                "ε-NFAs are less powerful than NFAs",
                "ε-NFAs, NFAs, and DFAs all recognize the same class of languages (Regular Languages)",
                "ε-NFAs can recognize some Context-Free Languages that DFAs cannot"
              ],
              correctAnswer: 2,
              explanation: "While ε-NFAs are more convenient for constructing automata (like in Thompson's construction), they do not increase computational power. They all recognize the same class of languages: regular languages."
            },
            {
              question: "In the conversion of an ε-NFA to a DFA, what is the start state of the resulting DFA?",
              options: [
                "The start state of the ε-NFA",
                "The ε-closure of the start state of the ε-NFA",
                "The set of all accept states of the ε-NFA",
                "The empty set"
              ],
              correctAnswer: 1,
              explanation: "In the subset construction for ε-NFAs, the start state of the corresponding DFA is the ε-closure of the original start state, ensuring all initially reachable states are accounted for."
            },
            {
              question: "What is the maximum number of states a DFA can have if it is converted from an ε-NFA with 'n' states?",
              options: [
                "n",
                "n^2",
                "2^n",
                "2n"
              ],
              correctAnswer: 2,
              explanation: "Like a standard NFA, an ε-NFA with n states can be converted into a DFA with at most 2^n states, since the DFA states represent subsets of the original state set."
            },
            {
              question: "If state q is an accepting state in an ε-NFA, which states in the converted DFA will also be accepting?",
              options: [
                "Only the state {q}",
                "Any DFA state (subset) that contains q",
                "Any DFA state that is reachable from q",
                "No states; the DFA must be minimized first"
              ],
              correctAnswer: 1,
              explanation: "In the subset construction, a state in the DFA (which is a subset of the ε-NFA's states) is an accepting state if it contains at least one accepting state from the original ε-NFA."
            },
            {
              question: "Which well-known algorithm uses ε-NFAs as an intermediate step to convert Regular Expressions to NFAs?",
              options: [
                "Dijkstra's Algorithm",
                "Thompson's Construction",
                "Subset Construction",
                "Kruskal's Algorithm"
              ],
              correctAnswer: 1,
              explanation: "Thompson's Construction is the canonical algorithm for converting a regular expression into an equivalent ε-NFA using inductive building blocks for union, concatenation, and Kleene star."
            }
          ]}
        />
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Exam-Oriented Questions</h2>
        
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Short Answer Questions</h3>

        <div className="mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-3">
            <p className="font-semibold mb-2">[3 marks]</p>
            <p className="font-semibold">Q1. Define an ε-NFA formally as a 5-tuple. How does its transition function differ from that of a standard NFA?</p>
          </div>
          <details className="bg-gray-50 border border-gray-300 rounded p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Hide Model Answer</summary>
            <div className="mt-4 space-y-3">
              <p>
                <strong>Answer:</strong> An ε-NFA is M = (Q, Σ, δ, q<sub>0</sub>, F) where Q is a finite set of states, Σ is the input alphabet, q<sub>0</sub> ∈ Q is the start state, and F ⊆ Q is the set of accepting states.
              </p>
              <p>
                <strong>Key difference:</strong> The transition function of an ε-NFA has domain Q × (Σ ∪ {'{'} ε {'}'}), mapping each (state, symbol-or-epsilon) pair to a set of states: δ : Q × (Σ ∪ {'{'} ε {'}'}) → 2<sup>Q</sup>.
              </p>
              <p>
                In contrast, a standard NFA's transition function is δ : Q × Σ → 2<sup>Q</sup> — it does not accept ε as an input symbol. The addition of ε as a valid input to δ is what allows spontaneous state changes without consuming input.
              </p>
            </div>
          </details>
        </div>

        <div className="mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-3">
            <p className="font-semibold mb-2">[4 marks]</p>
            <p className="font-semibold">Q2. Given the ε-NFA with states {'{'} p, q, r, s {'}'}, ε-transitions: p→q, q→r, r→s, compute ε-closure({'{'} p {'}'}) and ε-closure({'{'} q, s {'}'})</p>
          </div>
          <details className="bg-gray-50 border border-gray-300 rounded p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Hide Model Answer</summary>
            <div className="mt-4 space-y-3">
              <p className="font-semibold">ε-closure({'{'} p {'}'})</p>
              <p>Start with {'{'} p {'}'}. From p, follow ε→q. From q, follow ε→r. From r, follow ε→s. From s, no ε-transitions.</p>
              <p className="font-semibold">Answer: ε-closure({'{'} p {'}'}) = {'{'} p, q, r, s {'}'}</p>
              
              <p className="font-semibold mt-4">ε-closure({'{'} q, s {'}'})</p>
              <p>Start with {'{'} q, s {'}'}. From q, follow ε→r. From r, follow ε→s (already in set). From s, no ε-transitions.</p>
              <p className="font-semibold">Answer: ε-closure({'{'} q, s {'}'}) = {'{'} q, r, s {'}'}</p>
            </div>
          </details>
        </div>

        <div className="mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-3">
            <p className="font-semibold mb-2">[6 marks]</p>
            <p className="font-semibold">Q3. Consider the ε-NFA for a*b*: states {'{'} q0, q1, q2 {'}'}, ε-transitions q0→q1 and q1→q2; 'a' loop at q0, 'b' loop at q1; q2 is accepting. Simulate the computation on input "aab" and determine if it is accepted.</p>
          </div>
          <details className="bg-gray-50 border border-gray-300 rounded p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Hide Model Answer</summary>
            <div className="mt-4 space-y-3">
              <p>Transition table: δ(q0,a)={'{'} q0 {'}'}, δ(q1,b)={'{'} q1 {'}'}, δ(q0,ε)={'{'} q1 {'}'}, δ(q1,ε)={'{'} q2 {'}'}</p>
              
              <p><strong>Step 1 (Init):</strong> current = ε-closure({'{'} q0 {'}'}) = {'{'} q0, q1, q2 {'}'} (q0→q1→q2)</p>
              <p><strong>Step 2 (read 'a'):</strong> move = δ(q0, a) = {'{'} q0 {'}'}. ε-closure({'{'} q0 {'}'}) = {'{'} q0, q1, q2 {'}'}</p>
              <p><strong>Step 3 (read 'a'):</strong> move = δ(q0, a) = {'{'} q0 {'}'}. ε-closure({'{'} q0 {'}'}) = {'{'} q0, q1, q2 {'}'}</p>
              <p><strong>Step 4 (read 'b'):</strong> move = δ(q1, b) = {'{'} q1 {'}'}. ε-closure({'{'} q1 {'}'}) = {'{'} q1, q2 {'}'}</p>
              <p><strong>Final:</strong> Current = {'{'} q1, q2 {'}'}. q2 ∈ F. ACCEPT "aab" ✅</p>
              
              <p className="text-sm text-gray-600 mt-3">
                <strong>Note:</strong> At every step, the epsilon closure keeps q2 in the current set (since q1→q2 is an ε-transition), making q2 "continuously available" as long as we've already passed through q1.
              </p>
            </div>
          </details>
        </div>

        <div className="mb-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-3">
            <p className="font-semibold mb-2">[8 marks]</p>
            <p className="font-semibold">Q4. State and prove Kleene's theorem. Your answer should include: (a) what the theorem states, (b) the direction "regular expression → ε-NFA" (Thompson's construction approach), and (c) the direction "ε-NFA → DFA".</p>
          </div>
          <details className="bg-gray-50 border border-gray-300 rounded p-4">
            <summary className="cursor-pointer font-semibold text-gray-900">Hide Model Answer</summary>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-semibold">(a) Kleene's Theorem [2 marks]:</p>
                <p>A language L is regular if and only if there exists a regular expression R such that L = L(R). Equivalently, the class of languages recognized by finite automata (DFA, NFA, ε-NFA) is exactly the class of languages described by regular expressions.</p>
              </div>
              
              <div>
                <p className="font-semibold">(b) Regex → ε-NFA (Thompson's Construction) [3 marks]:</p>
                <p>We prove by structural induction on the regex R:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Base: For ∅, ε, or symbol a ∈ Σ, build a 2-state ε-NFA.</li>
                  <li>Union: For R+S, add new start/accept states with ε-transitions to/from sub-NFAs.</li>
                  <li>Concatenation: For RS, connect accept of R to start of S via ε.</li>
                  <li>Kleene star: For R*, add new start/accept states and back-edge ε for looping.</li>
                </ul>
                <p className="mt-2">Each construction preserves L(M) = L(R). Result: every regex gives an ε-NFA.</p>
              </div>
              
              <div>
                <p className="font-semibold">(c) ε-NFA → DFA (Subset Construction) [3 marks]:</p>
                <p>Given ε-NFA M = (Q, Σ, δ, q<sub>0</sub>, F), construct DFA M' = (Q', Σ, δ', q<sub>0</sub>', F'):</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>q<sub>0</sub>' = ε-closure({'{'} q<sub>0</sub> {'}'})</li>
                  <li>δ'(S, a) = ε-closure(⋃<sub>q∈S</sub> δ(q, a)) for each symbol a</li>
                  <li>Q' = all sets reachable from q<sub>0</sub>' (at most 2<sup>|Q|</sup> states)</li>
                  <li>F' = {'{'} S ∈ Q' : S ∩ F ≠ ∅ {'}'}</li>
                </ul>
                <p className="mt-2">By induction on |w|, δ'*(q<sub>0</sub>', w) = ε-closure(δ*(q<sub>0</sub>, w)), so L(M') = L(M). QED.</p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Reference Cheat Sheet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-300 rounded p-4">
            <h4 className="font-bold text-gray-900 mb-3">Key Definitions</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>ε-NFA:</strong> NFA + ε-transitions</li>
              <li><strong>ε-closure(S):</strong> states reachable by ε from S</li>
              <li><strong>MOVE(S, a):</strong> states reachable from S on symbol a</li>
              <li><strong>Thompson's:</strong> regex → ε-NFA (max 2n states)</li>
              <li><strong>Subset construction:</strong> ε-NFA → DFA</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-300 rounded p-4">
            <h4 className="font-bold text-gray-900 mb-3">Computation Steps</h4>
            <ol className="space-y-2 text-sm list-decimal list-inside">
              <li>current = ε-closure({'{'} q<sub>0</sub> {'}'})</li>
              <li>For each symbol a in w:
                <ul className="ml-6 mt-1 space-y-1">
                  <li>move = MOVE(current, a)</li>
                  <li>current = ε-closure(move)</li>
                </ul>
              </li>
              <li>Accept if current ∩ F ≠ ∅</li>
            </ol>
          </div>
          
          <div className="bg-purple-50 border border-purple-300 rounded p-4">
            <h4 className="font-bold text-gray-900 mb-3">DFA Conversion</h4>
            <ul className="space-y-2 text-sm">
              <li><strong>DFA start</strong> = ε-closure({'{'} q<sub>0</sub> {'}'})</li>
              <li><strong>δ'(S, a)</strong> = ε-closure(MOVE(S, a))</li>
              <li><strong>DFA accept</strong> = any set containing an F-state</li>
              <li><strong>At most 2<sup>n</sup></strong> DFA states for n-state ε-NFA</li>
            </ul>
          </div>
          
          <div className="bg-red-50 border border-red-300 rounded p-4">
            <h4 className="font-bold text-gray-900 mb-3">Common Mistakes</h4>
            <ul className="space-y-2 text-sm">
              <li>❌ Forgetting ε-closure at start</li>
              <li>❌ Not taking ε-closure after each symbol</li>
              <li>❌ Thinking ε-NFA is more powerful than DFA</li>
              <li>❌ Missing ε-closure when computing ε-closure(S) — it's transitive!</li>
            </ul>
          </div>


        </div>
      </section>
    </div>
  );
};

export default Module1_8;