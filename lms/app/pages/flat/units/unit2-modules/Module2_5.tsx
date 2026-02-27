
'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';


const Module2_5: React.FC = () => {
    return (
        <div className="module-content">
            {/* Lesson Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.5</div>
                <div className="lesson-title-main">
                    <h1>⚖️ Decision Properties of Regular Languages</h1>
                </div>
            </div>

            {/* Learning Objectives */}
            <section className="content-section">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-semibold">🎯 What You'll Master - Learning Objectives</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Apply decision algorithms to determine if a given string belongs to a regular language (Membership Problem)</li>
                        <li>Design and analyze algorithms to test whether a regular language is empty, finite, or infinite (Emptiness and Finiteness Problems)</li>
                        <li>Implement procedures to check equivalence between two regular languages using minimization and state comparison techniques</li>
                        <li>Evaluate containment relationships between regular languages (Subset and Equality Testing)</li>
                        <li>Construct minimized DFAs using state equivalence and partition refinement algorithms</li>
                    </ul>
                </div>
            </section>

            {/* Why This Topic Matters */}
            <section className="content-section">
                <h3>🔥 Why This Topic Matters</h3>
                <p>
                    Imagine you're a compiler designer building a lexical analyzer that needs to recognize valid tokens in a programming language. How do you verify that your finite automaton correctly accepts all valid identifiers and rejects invalid ones? Or consider you're developing a network protocol that must validate packet formats against a specification—how can you algorithmically prove that your implementation matches the specification exactly?
                </p>
                <p className="mt-2">
                    Decision properties of regular languages provide the theoretical foundation and practical algorithms to answer these critical questions. They allow us to mechanically verify properties of regular languages without guesswork or exhaustive testing. These algorithms are not just theoretical curiosities—they form the backbone of compiler construction, formal verification, network protocol analysis, and software testing tools used in industry every day.
                </p>
                <p className="mt-2">
                    Understanding decision properties is essential for GATE exams, technical interviews at top tech companies, and research in formal methods. The algorithms you'll learn—reachability analysis, state minimization, equivalence testing—are fundamental tools that appear repeatedly in advanced computer science courses and real-world applications.
                </p>

                <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Compiler Design:</strong> Lexical analyzer verification and token validation (Lex, Flex tools)</li>
                    <li><strong>Formal Verification:</strong> Proving correctness of hardware circuits and communication protocols</li>
                    <li><strong>Software Testing:</strong> Generating test cases that cover all states in a specification</li>
                    <li><strong>Network Security:</strong> Verifying firewall rules and intrusion detection patterns</li>
                    <li><strong>Database Query Optimization:</strong> Checking equivalence of regular path queries</li>
                </ul>
            </section>

            {/* Deep Dive */}
            <section className="content-section">
                <h3>📖 Deep Dive: Understanding the Concept</h3>
                
                <h4 className="mt-4 font-semibold">Definition & Fundamentals</h4>
                <p>
                    Decision properties are algorithmic procedures that answer yes/no questions about formal languages. For regular languages, these decision problems are particularly important because they are <strong>decidable</strong>—meaning there exist algorithms that always terminate with a correct answer. This is in contrast to more complex language classes (like context-free or recursively enumerable languages) where many decision problems are undecidable.
                </p>
                <p className="mt-2">
                    Think of decision properties as diagnostic tools for regular languages. Just as a doctor uses various tests to diagnose a patient's condition, we use decision algorithms to diagnose properties of languages. The key insight is that because regular languages have multiple equivalent representations (DFA, NFA, Regular Expression, Regular Grammar), we can choose the most convenient representation for each decision problem.
                </p>
                <p className="mt-2">
                    The fundamental decision problems for regular languages include:
                </p>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Membership:</strong> Given a string w and language L, is w ∈ L?</li>
                    <li><strong>Emptiness:</strong> Is L = ∅ (does the language contain any strings)?</li>
                    <li><strong>Finiteness:</strong> Is L finite or infinite?</li>
                    <li><strong>Equivalence:</strong> Given L₁ and L₂, is L₁ = L₂?</li>
                    <li><strong>Containment:</strong> Is L₁ ⊆ L₂?</li>
                </ul>

                <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Decidable Problem:</strong> A problem for which an algorithm exists that always halts with a correct yes/no answer</li>
                    <li><strong>Reachable State:</strong> A state that can be reached from the start state by some input string</li>
                    <li><strong>Product Automaton:</strong> A DFA constructed from two DFAs that simulates both simultaneously</li>
                    <li><strong>State Equivalence:</strong> Two states are equivalent if they cannot be distinguished by any input string</li>
                    <li><strong>Distinguishing String:</strong> An input string that causes two states to lead to different acceptance outcomes</li>
                    <li><strong>Myhill-Nerode Theorem:</strong> Characterizes regular languages by the number of equivalence classes of indistinguishable strings</li>
                </ul>
            </section>

            {/* Decision Problems Hierarchy */}
            <section className="content-section">
                <h3>How It Works: The Mechanism Explained</h3>

                <div className="flex flex-col items-center my-6">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-5xl">
                        <h4 className="text-center font-bold text-lg mb-4">Decision Problems Hierarchy</h4>
                        <svg width="900" height="400" viewBox="0 0 900 400" className="mx-auto">
                            <defs>
                                <marker id="arrowDecision" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                                </marker>
                            </defs>

                            {/* Root Node */}
                            <rect x="350" y="20" width="200" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" rx="5" />
                            <text x="450" y="50" textAnchor="middle" fontSize="16" fontWeight="bold">Decision Properties</text>

                            {/* Level 1 - Five Problems */}
                            <rect x="50" y="120" width="140" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="120" y="150" textAnchor="middle" fontSize="14" fontWeight="bold">Membership</text>

                            <rect x="220" y="120" width="140" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="290" y="150" textAnchor="middle" fontSize="14" fontWeight="bold">Emptiness</text>

                            <rect x="390" y="120" width="140" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="460" y="150" textAnchor="middle" fontSize="14" fontWeight="bold">Finiteness</text>

                            <rect x="560" y="120" width="140" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="630" y="150" textAnchor="middle" fontSize="14" fontWeight="bold">Equivalence</text>

                            <rect x="730" y="120" width="140" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="800" y="150" textAnchor="middle" fontSize="14" fontWeight="bold">Containment</text>

                            {/* Arrows from root to problems */}
                            <line x1="450" y1="70" x2="120" y2="120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="450" y1="70" x2="290" y2="120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="450" y1="70" x2="460" y2="120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="450" y1="70" x2="630" y2="120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="450" y1="70" x2="800" y2="120" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowDecision)" />

                            {/* Level 2 - Solutions */}
                            <rect x="30" y="220" width="180" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="120" y="245" textAnchor="middle" fontSize="13" fontWeight="bold">Simulate DFA</text>
                            <text x="120" y="265" textAnchor="middle" fontSize="11">O(|w|) time</text>

                            <rect x="200" y="220" width="180" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="290" y="245" textAnchor="middle" fontSize="13" fontWeight="bold">Reachability</text>
                            <text x="290" y="265" textAnchor="middle" fontSize="13" fontWeight="bold">Analysis</text>

                            <rect x="370" y="220" width="180" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="460" y="245" textAnchor="middle" fontSize="13" fontWeight="bold">Cycle Detection</text>
                            <text x="460" y="265" textAnchor="middle" fontSize="11">O(|Q| × |Σ|)</text>

                            <rect x="540" y="220" width="180" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="630" y="245" textAnchor="middle" fontSize="13" fontWeight="bold">Minimization +</text>
                            <text x="630" y="265" textAnchor="middle" fontSize="13" fontWeight="bold">Comparison</text>

                            <rect x="710" y="220" width="180" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="800" y="245" textAnchor="middle" fontSize="13" fontWeight="bold">L₁ ∩ L₂' = ∅</text>
                            <text x="800" y="265" textAnchor="middle" fontSize="11">Product automaton</text>

                            {/* Arrows to solutions */}
                            <line x1="120" y1="170" x2="120" y2="220" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="290" y1="170" x2="290" y2="220" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="460" y1="170" x2="460" y2="220" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="630" y1="170" x2="630" y2="220" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowDecision)" />
                            <line x1="800" y1="170" x2="800" y2="220" stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrowDecision)" />

                            {/* Complexity annotations */}
                            <rect x="250" y="330" width="400" height="50" fill="#f3f4f6" stroke="#9ca3af" strokeWidth="1" rx="5" />
                            <text x="450" y="350" textAnchor="middle" fontSize="12" fontWeight="bold">All decision problems for regular languages are</text>
                            <text x="450" y="368" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#16a34a">DECIDABLE with polynomial time complexity</text>
                        </svg>
                        <p className="text-center text-sm text-gray-600 mt-4">Figure 1: Decision problems for regular languages and their solution approaches</p>
                    </div>
                </div>
            </section>

            {/* Membership Problem */}
            <section className="content-section">
                <h3>The Membership Problem</h3>
                <p>
                    The Membership Problem asks: Given a DFA D and a string w, does D accept w? This is the most fundamental decision problem and has a straightforward solution.
                </p>
                <p className="mt-2">
                    <strong>Algorithm:</strong> Simulate the DFA on input w starting from the initial state. For each symbol in w, follow the corresponding transition. After processing all symbols, check if the current state is an accepting state.
                </p>
                <p className="mt-2">
                    <strong>Time Complexity:</strong> O(|w|) — linear in the length of the input string. This is optimal since we must examine each character.
                </p>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-4">
                    <p className="text-sm font-semibold mb-2">Membership Algorithm</p>
                    <pre className="text-sm">
                        <code>{`function Membership(DFA D, string w):
    // Start at initial state
    state ← D.initial_state
    
    // Process each symbol in the input
    for each symbol c in w:
        if transition exists from state on c:
            state ← D.transition[state][c]
        else:
            return false  // No transition = reject
    
    // Check if final state is accepting
    return state ∈ D.accepting_states`}</code>
                    </pre>
                </div>
            </section>

            {/* Emptiness Problem */}
            <section className="content-section">
                <h3>The Emptiness Problem</h3>
                <p>
                    The Emptiness Problem asks: Is the language recognized by a DFA empty? In other words, does the DFA accept any string at all?
                </p>
                <p className="mt-2">
                    <strong>Key Insight:</strong> A DFA accepts at least one string if and only if there exists a path from the initial state to some accepting state. This reduces to a reachability problem in a directed graph.
                </p>
                <p className="mt-2">
                    <strong>Algorithm:</strong> Perform a graph traversal (BFS or DFS) starting from the initial state. If we can reach any accepting state, the language is non-empty; otherwise, it's empty.
                </p>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-4">
                    <p className="text-sm font-semibold mb-2">Emptiness Algorithm</p>
                    <pre className="text-sm">
                        <code>{`function IsEmpty(DFA D):
    // BFS/DFS to find reachable states
    visited ← empty set
    queue ← [D.initial_state]
    
    while queue is not empty:
        state ← queue.dequeue()
        
        // Check if we found an accepting state
        if state ∈ D.accepting_states:
            return false  // Language is NOT empty
        
        // Explore all transitions
        for each symbol c in D.alphabet:
            next_state ← D.transition[state][c]
            if next_state ∉ visited:
                visited.add(next_state)
                queue.enqueue(next_state)
    
    return true  // No accepting state reachable`}</code>
                    </pre>
                </div>

                <p className="mt-4">
                    <strong>Time Complexity:</strong> O(|Q| × |Σ|) where |Q| is the number of states and |Σ| is the alphabet size. We visit each state at most once and examine all outgoing transitions.
                </p>
            </section>

            {/* Finiteness Problem */}
            <section className="content-section">
                <h3>The Finiteness Problem</h3>
                <p>
                    The Finiteness Problem asks: Is the language recognized by a DFA finite or infinite?
                </p>
                <p className="mt-2">
                    <strong>Key Insight:</strong> A regular language is infinite if and only if its DFA accepts some string that passes through a cycle (loop) on the way to an accepting state. If all paths to accepting states are simple paths (no cycles), the language is finite.
                </p>
                <p className="mt-2">
                    <strong>Algorithm:</strong> First, remove all states that cannot reach an accepting state (they're irrelevant). Then, check if there's a cycle among the remaining reachable states. If a cycle exists, the language is infinite.
                </p>

                <div className="flex flex-col items-center my-6">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
                        <h4 className="text-center font-bold text-lg mb-4">Finiteness Detection</h4>
                        <svg width="700" height="500" viewBox="0 0 700 500" className="mx-auto">
                            <defs>
                                <marker id="arrowFlow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                                </marker>
                            </defs>

                            {/* Start */}
                            <ellipse cx="350" cy="40" rx="60" ry="25" fill="#10b981" stroke="#065f46" strokeWidth="2" />
                            <text x="350" y="47" textAnchor="middle" fill="white" fontWeight="bold">Start</text>

                            {/* Decision 1: Reachable from start? */}
                            <path d="M 350 90 L 430 140 L 350 190 L 270 140 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
                            <text x="350" y="135" textAnchor="middle" fontSize="12" fontWeight="bold">Reachable from</text>
                            <text x="350" y="150" textAnchor="middle" fontSize="12" fontWeight="bold">start?</text>
                            <line x1="350" y1="65" x2="350" y2="90" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowFlow)" />

                            {/* No path - Ignore State */}
                            <rect x="500" y="115" width="140" height="50" fill="#fecaca" stroke="#dc2626" strokeWidth="2" rx="5" />
                            <text x="570" y="145" textAnchor="middle" fontSize="13" fontWeight="bold">Ignore State</text>
                            <line x1="430" y1="140" x2="500" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                            <text x="465" y="135" fontSize="12" fontWeight="bold" fill="#dc2626">No</text>

                            {/* Decision 2: Can reach accepting? */}
                            <path d="M 350 240 L 430 290 L 350 340 L 270 290 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
                            <text x="350" y="285" textAnchor="middle" fontSize="12" fontWeight="bold">Can reach</text>
                            <text x="350" y="300" textAnchor="middle" fontSize="12" fontWeight="bold">accepting?</text>
                            <line x1="350" y1="190" x2="350" y2="240" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                            <text x="360" y="215" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

                            {/* No path - Ignore State */}
                            <line x1="430" y1="290" x2="570" y2="165" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                            <text x="500" y="225" fontSize="12" fontWeight="bold" fill="#dc2626">No</text>

                            {/* Decision 3: Has cycle? */}
                            <path d="M 350 390 L 430 440 L 350 490 L 270 440 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
                            <text x="350" y="445" textAnchor="middle" fontSize="12" fontWeight="bold">Has cycle?</text>
                            <line x1="350" y1="340" x2="350" y2="390" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                            <text x="360" y="365" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

                            {/* INFINITE */}
                            <rect x="480" y="415" width="160" height="50" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="560" y="435" textAnchor="middle" fontSize="13" fontWeight="bold">INFINITE</text>
                            <text x="560" y="453" textAnchor="middle" fontSize="13" fontWeight="bold">Language</text>
                            <line x1="430" y1="440" x2="480" y2="440" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                            <text x="455" y="435" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

                            {/* FINITE */}
                            <rect x="60" y="415" width="160" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
                            <text x="140" y="435" textAnchor="middle" fontSize="13" fontWeight="bold">FINITE</text>
                            <text x="140" y="453" textAnchor="middle" fontSize="13" fontWeight="bold">Language</text>
                            <line x1="270" y1="440" x2="220" y2="440" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowFlow)" />
                            <text x="245" y="435" fontSize="12" fontWeight="bold" fill="#dc2626">No</text>
                        </svg>
                        <p className="text-center text-sm text-gray-600 mt-4">Figure 2: Decision flow for finiteness problem</p>
                    </div>
                </div>
            </section>

            {/* Equivalence Problem */}
            <section className="content-section">
                <h3>The Equivalence Problem</h3>
                <p>
                    The Equivalence Problem asks: Given two DFAs D₁ and D₂, do they recognize the same language?
                </p>
                <p className="mt-2">
                    <strong>Key Insight:</strong> Two DFAs are equivalent if and only if their minimized forms are isomorphic (identical up to state renaming). Alternatively, we can use the product construction to build a DFA that recognizes the symmetric difference of the two languages—if this language is empty, the original DFAs are equivalent.
                </p>

                <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="font-semibold">Algorithm (Using Minimization):</p>
                    <ol className="list-decimal ml-6 mt-2 text-sm space-y-1">
                        <li>Minimize both DFAs using state equivalence partitioning</li>
                        <li>Check if the minimized DFAs are isomorphic (same structure)</li>
                    </ol>
                </div>

                <div className="mt-4 bg-green-50 p-4 rounded">
                    <p className="font-semibold">Algorithm (Using Product Construction):</p>
                    <ol className="list-decimal ml-6 mt-2 text-sm space-y-1">
                        <li>Construct DFA D that accepts (L₁ ∩ L₂') ∪ (L₁' ∩ L₂) (symmetric difference)</li>
                        <li>Test if L(D) = ∅ using the emptiness algorithm</li>
                    </ol>
                </div>

                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="font-semibold">⚠️ Important Note:</p>
                    <p className="text-sm mt-2">The minimization approach is more efficient in practice. The table-filling algorithm for DFA minimization runs in O(|Q|² × |Σ|) time, while the product construction creates a DFA with |Q₁| × |Q₂| states.</p>
                </div>
            </section>

            {/* DFA Minimization */}
            <section className="content-section">
                <h3>DFA Minimization: The Table-Filling Algorithm</h3>
                <p>
                    DFA minimization is crucial for equivalence testing. The table-filling algorithm (also known as the Myhill-Nerode algorithm) identifies and merges equivalent states.
                </p>
                <p className="mt-2">
                    <strong>Definition:</strong> Two states p and q are distinguishable if there exists a string w such that exactly one of δ(p, w) and δ(q, w) is an accepting state.
                </p>

                <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="font-semibold">Algorithm:</p>
                    <ol className="list-decimal ml-6 mt-2 text-sm space-y-1">
                        <li>Initialize: Mark all pairs (accepting, non-accepting) as distinguishable</li>
                        <li>Iterate: For each unmarked pair (p, q), check if any input symbol leads to a marked pair. If so, mark (p, q) as distinguishable.</li>
                        <li>Repeat until no new pairs are marked</li>
                        <li>Merge all unmarked pairs (these are equivalent states)</li>
                    </ol>
                </div>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mt-4">
                    <p className="text-sm font-semibold mb-2">Table-Filling Algorithm</p>
                    <pre className="text-sm">
                        <code>{`function MinimizeDFA(DFA D):
    // Initialize table
    for each pair (p, q) where p < q:
        if p ∈ F xor q ∈ F:  // One accepting, one not
            table[p][q] ← MARKED
        else:
            table[p][q] ← UNMARKED
    
    // Iteratively mark distinguishable pairs
    changed ← true
    while changed:
        changed ← false
        for each unmarked pair (p, q):
            for each symbol a in Σ:
                p_next ← δ(p, a)
                q_next ← δ(q, a)
                if table[p_next][q_next] is MARKED:
                    table[p][q] ← MARKED
                    changed ← true
    
    // Merge equivalent (unmarked) states
    return construct_minimized_DFA(D, table)`}</code>
                    </pre>
                </div>
            </section>

            {/* Common Misconceptions */}
            <section className="content-section">
                <h3>⚠️ Common Misconceptions</h3>

                <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #1: "Two DFAs are equivalent if they have the same number of states."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> The number of states is irrelevant. Two DFAs can have different numbers of states but recognize the same language. Equivalence depends on the languages recognized, not the structure. Only minimized DFAs with the same number of states might be equivalent.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #2: "If a DFA has cycles, its language is always infinite."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> A cycle only makes the language infinite if it's on a path to an accepting state. Cycles in "dead" portions of the DFA (states that cannot reach accepting states) don't affect finiteness.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #3: "The complement of a regular language is not regular."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> Regular languages are closed under complement. Given a DFA for language L, simply swap accepting and non-accepting states to get a DFA for L'.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #4: "DFA minimization always produces a unique result regardless of the algorithm used."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> While the number of states in the minimal DFA is unique (by the Myhill-Nerode theorem), the actual structure may have variations due to state renaming. However, all minimal DFAs for the same language are isomorphic.</p>
                    </div>
                </div>
            </section>

            {/* Video Resources */}
            <section className="content-section">
                <h3>Learn Through Videos</h3>
                <p>Watch these carefully selected videos to reinforce your understanding with visual explanations and animations.</p>

                <div className="space-y-6 mt-4">
                    <div>
                        <h4 className="font-semibold mb-2">📚 Decision Properties of Regular Languages</h4>
                        <p className="text-sm mb-2">Neso Academy - 15 minutes</p>
                        <p className="text-sm mb-2"><strong>What you'll learn:</strong> Comprehensive overview of membership, emptiness, finiteness, and equivalence problems with clear examples.</p>
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/k0oTpJNFJ6A?si=eJktPFVDbjxjMguf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">🎬 DFA Minimization Algorithm</h4>
                        <p className="text-sm mb-2">Gate Smashers - 12 minutes</p>
                        <p className="text-sm mb-2"><strong>What you'll learn:</strong> Step-by-step table-filling algorithm with worked examples and optimization techniques.</p>
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rGxyc-CJGRk?si=uPRxxiASqhHTlx05" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">💻 Myhill-Nerode Theorem Explained</h4>
                        <p className="text-sm mb-2">Computer Science - 18 minutes</p>
                        <p className="text-sm mb-2"><strong>What you'll learn:</strong> Deep dive into the theoretical foundation of DFA minimization and state equivalence.</p>
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/UiXkJUTkp44?si=gb5Y5nFtzGf4xUwX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">💧 Equivalence of Regular Languages</h4>
                        <p className="text-sm mb-2">Abdul Bari - 14 minutes</p>
                        <p className="text-sm mb-2"><strong>What you'll learn:</strong> Product construction method and practical algorithms for testing language equivalence.</p>
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/nX4JrcHgpZY?si=7lYw-jNX7ufq7KZH" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Worked Examples */}
            <section className="content-section">
                <h3>See It In Action: Worked Examples</h3>

                <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h4 className="font-semibold text-lg">Worked Example 1: Membership Testing</h4>
                        <p className="mt-2"><strong>📝 Problem Statement</strong></p>
                        <p className="text-sm mt-1">Given the DFA below and string w = "abba", determine if w ∈ L(D).</p>
                        <p className="text-sm mt-2"><strong>DFA Specification:</strong></p>
                        <ul className="list-disc ml-6 text-sm">
                            <li>States: Q = {'{'}q₀, q₁, q₂{'}'}</li>
                            <li>Alphabet: Σ = {'{'}a, b{'}'}</li>
                            <li>Initial state: q₀</li>
                            <li>Accepting states: F = {'{'}q₂{'}'}</li>
                            <li>Transitions: δ(q₀, a) = q₁, δ(q₀, b) = q₀, δ(q₁, a) = q₁, δ(q₁, b) = q₂, δ(q₂, a) = q₁, δ(q₂, b) = q₀</li>
                        </ul>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-blue-600">🔍 Step-by-Step Solution</summary>
                            <div className="mt-3 text-sm space-y-1">
                                <p><strong>Step 1:</strong> Start at initial state q₀</p>
                                <p><strong>Step 2:</strong> Read 'a': δ(q₀, a) = q₁. Current state: q₁</p>
                                <p><strong>Step 3:</strong> Read 'b': δ(q₁, b) = q₂. Current state: q₂</p>
                                <p><strong>Step 4:</strong> Read 'b': δ(q₂, b) = q₀. Current state: q₀</p>
                                <p><strong>Step 5:</strong> Read 'a': δ(q₀, a) = q₁. Current state: q₁</p>
                                <p><strong>Step 6:</strong> String exhausted. Final state: q₁</p>
                                <p className="mt-2"><strong>✅ Final Answer:</strong> q₁ ∉ F, therefore w = "abba" ∉ L(D). The DFA rejects this string.</p>
                                <p className="mt-2"><strong>💡 Key Insights:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>The DFA processes exactly |w| = 4 transitions—one per symbol</li>
                                    <li>Each transition is deterministic (exactly one next state per symbol)</li>
                                    <li>The acceptance depends only on the final state, not the path taken</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <h4 className="font-semibold text-lg">Worked Example 2: Emptiness Testing</h4>
                        <p className="mt-2"><strong>📝 Problem Statement</strong></p>
                        <p className="text-sm mt-1">Determine if the language of the following DFA is empty.</p>
                        <p className="text-sm mt-2">DFA with accepting state q₂ (green)</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-green-600">🔍 Step-by-Step Solution</summary>
                            <div className="mt-3 text-sm space-y-1">
                                <p><strong>Step 1:</strong> Start BFS from initial state q₀</p>
                                <p><strong>Step 2:</strong> From q₀: can reach q₀ (on 'b') and q₁ (on 'a')</p>
                                <p><strong>Step 3:</strong> From q₁: can reach q₁ (on 'a') and q₂ (on 'b')</p>
                                <p><strong>Step 4:</strong> q₂ is an accepting state!</p>
                                <p className="mt-2"><strong>✅ Final Answer:</strong> Accepting state q₂ is reachable from q₀ via path q₀ → q₁ → q₂ on input "ab". Therefore, L(D) ≠ ∅. The language is NOT empty.</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold text-lg">Worked Example 3: DFA Minimization</h4>
                        <p className="mt-2"><strong>📝 Problem Statement</strong></p>
                        <p className="text-sm mt-1">Minimize the following DFA using the table-filling algorithm.</p>
                        <p className="text-sm mt-2">DFA with accepting states D and F (green)</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-yellow-600">🔍 Step-by-Step Solution</summary>
                            <div className="mt-3 text-sm space-y-1">
                                <p><strong>Step 1 - Initialize:</strong> Mark pairs where one state is accepting and other is not: (A,D), (A,F), (B,D), (B,F), (C,D), (C,F), (E,D), (E,F) are all MARKED</p>
                                <p><strong>Step 2 - Check (A,B):</strong> On '0': A→B, B→A (both unmarked). On '1': A→C, B→D. Since (C,D) is MARKED, mark (A,B)</p>
                                <p><strong>Step 3 - Check (A,C):</strong> On '0': A→B, C→E. On '1': A→C, C→A. Both pairs (B,E) and (C,A) unmarked for now.</p>
                                <p><strong>Step 4 - Check (A,E):</strong> On '0': A→B, E→E. On '1': A→C, E→F. Since (C,F) is MARKED, mark (A,E)</p>
                                <p><strong>Step 5 - Check (B,C):</strong> On '0': B→A, C→E. Since (A,E) now MARKED, mark (B,C)</p>
                                <p><strong>Step 6 - Check (B,E):</strong> On '0': B→A, E→E. Since (A,E) MARKED, mark (B,E)</p>
                                <p><strong>Step 7 - Check (C,E):</strong> On '0': C→E, E→E. On '1': C→A, E→F. Since (A,F) MARKED, mark (C,E)</p>
                                <p><strong>Step 8 - Check (D,F):</strong> Both are accepting states. On '0': D→E, F→F. On '1': D→F, F→F. Need to check (E,F)—MARKED, so mark (D,F)</p>
                                <p className="mt-2"><strong>✅ Final Answer:</strong> After complete analysis, no pairs remain unmarked. All states are distinguishable. The DFA is already minimal with 6 states.</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                        <h4 className="font-semibold text-lg">Worked Example 4: Equivalence Testing</h4>
                        <p className="mt-2"><strong>📝 Problem Statement</strong></p>
                        <p className="text-sm mt-1">Determine if the following two DFAs are equivalent.</p>
                        <p className="text-sm mt-2"><strong>DFA D₁:</strong> States {'{'}A,B{'}'}, A initial, B accepting, δ(A,0)=B, δ(A,1)=A, δ(B,0)=B, δ(B,1)=B</p>
                        <p className="text-sm mt-2"><strong>DFA D₂:</strong> States {'{'}P,Q,R{'}'}, P initial, Q accepting, δ(P,0)=Q, δ(P,1)=P, δ(Q,0)=R, δ(Q,1)=Q, δ(R,0)=R, δ(R,1)=R</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-purple-600">🔍 Step-by-Step Solution (Product Construction)</summary>
                            <div className="mt-3 text-sm space-y-1">
                                <p><strong>Step 1:</strong> Build product automaton with states {'{'}(A,P), (A,Q), (A,R), (B,P), (B,Q), (B,R){'}'}</p>
                                <p><strong>Step 2:</strong> Initial state: (A,P). Accepting states where exactly one component accepts: {'{'}(A,Q), (B,P), (B,R){'}'}</p>
                                <p><strong>Step 3:</strong> Check reachability from (A,P): (A,P) →(0)→ (B,Q) →(0)→ (B,R) →(0)→ (B,R). State (B,R) is accepting!</p>
                                <p className="mt-2"><strong>✅ Final Answer:</strong> Since an accepting state in the product automaton is reachable, the symmetric difference is non-empty. Therefore, L(D₁) ≠ L(D₂). The DFAs are NOT equivalent.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Code Implementation */}
            <section className="content-section">
                <h3>💻 Code Implementation</h3>
                <p className="mb-4">This section provides complete, working implementations of decision property algorithms in Python. These implementations are designed for clarity and educational value.</p>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <p className="text-sm font-semibold mb-2">Decision Properties Implementation</p>
                    <pre className="text-sm">
                        <code>{`# ============================================
# Decision Properties of Regular Languages
# Complete Implementation in Python
# ============================================

from collections import deque, defaultdict

class DFA:
    def __init__(self, states, alphabet, transitions, initial, accepting):
        self.states = states
        self.alphabet = alphabet
        self.transitions = transitions  # dict: (state, symbol) -> state
        self.initial = initial
        self.accepting = set(accepting)
    
    def membership(self, w):
        """Test if string w is in L(D) - O(|w|)"""
        state = self.initial
        for c in w:
            state = self.transitions.get((state, c))
            if state is None:
                return False
        return state in self.accepting
    
    def is_empty(self):
        """Test if L(D) is empty - O(|Q|×|Σ|)"""
        visited = set()
        queue = deque([self.initial])
        
        while queue:
            state = queue.popleft()
            if state in self.accepting:
                return False  # Found accepting state
            if state in visited:
                continue
            visited.add(state)
            
            for c in self.alphabet:
                next_state = self.transitions.get((state, c))
                if next_state and next_state not in visited:
                    queue.append(next_state)
        
        return True  # No accepting state reachable
    
    def is_finite(self):
        """Test if L(D) is finite - O(|Q|×|Σ|)"""
        # Find states that can reach accepting states
        useful = set()
        for acc in self.accepting:
            useful.add(acc)
        
        changed = True
        while changed:
            changed = False
            for (s, c), t in self.transitions.items():
                if t in useful and s not in useful:
                    useful.add(s)
                    changed = True
        
        # Check for cycles among useful states
        def has_cycle(start):
            visited, rec_stack = set(), set()
            
            def dfs(u):
                visited.add(u)
                rec_stack.add(u)
                for c in self.alphabet:
                    v = self.transitions.get((u, c))
                    if v in useful:
                        if v not in visited:
                            if dfs(v):
                                return True
                        elif v in rec_stack:
                            return True
                rec_stack.remove(u)
                return False
            
            return dfs(start)
        
        return not has_cycle(self.initial)

# Example usage
if __name__ == "__main__":
    # DFA that accepts strings ending with '01'
    dfa = DFA(
        states={'q0', 'q1', 'q2'},
        alphabet={'0', '1'},
        transitions={
            ('q0', '0'): 'q1', ('q0', '1'): 'q0',
            ('q1', '0'): 'q1', ('q1', '1'): 'q2',
            ('q2', '0'): 'q1', ('q2', '1'): 'q0'
        },
        initial='q0',
        accepting={'q2'}
    )
    
    # Test membership
    print(f"'101' in L(D): {dfa.membership('101')}")  # True
    print(f"'111' in L(D): {dfa.membership('111')}")  # False
    
    # Test emptiness
    print(f"L(D) empty: {dfa.is_empty()}")  # False
    
    # Test finiteness
    print(f"L(D) finite: {dfa.is_finite()}")  # False (infinite)`}</code>
                    </pre>
                </div>

                <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-semibold">💡 Optimization Tips:</h4>
                    <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                        <li>Use adjacency lists instead of dictionaries for faster transition lookups in large DFAs</li>
                        <li>For repeated queries on the same DFA, cache reachability results</li>
                        <li>Bit manipulation can speed up state set operations for DFAs with many states</li>
                        <li>Tarjan's algorithm is more efficient than naive DFS for cycle detection</li>
                    </ul>
                </div>
            </section>

            {/* Problem-Solving Practice */}
            <section className="content-section">
                <h3>📚 Problem-Solving Practice</h3>

                <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h4 className="font-semibold text-lg">📘 Easy Problem</h4>
                        <p className="mt-2"><strong>Problem:</strong> Given a DFA with 5 states where the only accepting state is unreachable from the initial state, what is the language of this DFA?</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-blue-600">Show Solution</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Solution:</strong></p>
                                <p><strong>Step 1:</strong> The accepting state is unreachable from the initial state</p>
                                <p><strong>Step 2:</strong> By definition, no string can lead to the accepting state</p>
                                <p><strong>Step 3:</strong> Therefore, no string is accepted by this DFA</p>
                                <p className="mt-2"><strong>Final Answer:</strong> L(D) = ∅ (the empty language). The DFA accepts no strings.</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold text-lg">📙 Medium Problem</h4>
                        <p className="mt-2"><strong>Problem:</strong> A DFA has states {'{'}A, B, C, D{'}'} with A as initial and D as the only accepting state. Transitions: δ(A,0)=B, δ(A,1)=A, δ(B,0)=C, δ(B,1)=A, δ(C,0)=D, δ(C,1)=B, δ(D,0)=D, δ(D,1)=C. Is the language finite or infinite?</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-yellow-600">Show Solution</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Solution:</strong></p>
                                <p><strong>Step 1:</strong> Identify accepting state: D</p>
                                <p><strong>Step 2:</strong> Check if D is reachable: A →(0)→ B →(0)→ C →(0)→ D. Yes!</p>
                                <p><strong>Step 3:</strong> Check for cycles among useful states: D has a self-loop on '0' (δ(D,0)=D)</p>
                                <p><strong>Step 4:</strong> Since D (accepting) has a self-loop and is reachable, the language is infinite</p>
                                <p className="mt-2"><strong>Final Answer:</strong> The language is INFINITE. Strings like "000", "0000", "00000", etc. are all accepted (loop at D allows arbitrary extension).</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <h4 className="font-semibold text-lg">📕 Hard Problem</h4>
                        <p className="mt-2"><strong>Problem:</strong> Given two DFAs D₁ and D₂ with n₁ and n₂ states respectively, what is the maximum number of states in the product automaton used for equivalence testing? What is the time complexity of the equivalence test?</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-red-600">Show Solution</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Solution:</strong></p>
                                <p><strong>Step 1:</strong> The product automaton has states that are pairs (q₁, q₂) where q₁ ∈ Q₁ and q₂ ∈ Q₂</p>
                                <p><strong>Step 2:</strong> Maximum states = |Q₁| × |Q₂| = n₁ × n₂</p>
                                <p><strong>Step 3:</strong> For equivalence, we test emptiness of the product automaton</p>
                                <p><strong>Step 4:</strong> Emptiness testing is O(|Q| × |Σ|) = O(n₁ × n₂ × |Σ|)</p>
                                <p className="mt-2"><strong>Final Answer:</strong> Maximum states in product automaton: n₁ × n₂. Time complexity of equivalence test: O(n₁ × n₂ × |Σ|).</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Common Pitfalls */}
            <section className="content-section">
                <h3>Common Pitfalls & How to Avoid Them</h3>
                <p>Learn from common mistakes students make when learning this topic. Understanding these pitfalls will help you avoid them in exams and practical applications.</p>

                <div className="space-y-4 mt-4">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #1: Confusing "reachable" with "useful" in finiteness testing</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> Check for cycles among all reachable states, not just those that can reach accepting states.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> Cycles in "dead" states (that cannot reach accepting states) don't contribute to infinite languages.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> First compute "useful" states (those that can reach accepting states), then check for cycles only among useful states.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #2: Forgetting to check both directions in equivalence</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> Only check if L₁ ⊆ L₂ but forget to verify L₂ ⊆ L₁.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> Equivalence requires both subset relationships. L₁ ⊆ L₂ alone doesn't guarantee L₁ = L₂.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Use symmetric difference: L₁ = L₂ iff (L₁ ∩ L₂') ∪ (L₁' ∩ L₂) = ∅.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #3: Assuming all accepting states must be equivalent</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> Think that all accepting states can be merged during minimization.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> Accepting states may have different future behaviors. Two accepting states are only equivalent if all continuations lead to the same acceptance pattern.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Apply the table-filling algorithm systematically. Don't make assumptions—let the algorithm determine equivalence.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #4: Confusing DFA minimization with NFA conversion</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> Try to apply DFA minimization techniques directly to NFAs.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> NFA minimization is more complex. The table-filling algorithm assumes deterministic transitions.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Always convert NFA to DFA first (using subset construction), then minimize.</p>
                    </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold">💡 Exam Tips:</h4>
                    <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                        <li><strong>Complexity questions:</strong> Memorize the time complexities: Membership O(|w|), Emptiness O(|Q|×|Σ|), Minimization O(|Q|²×|Σ|)</li>
                        <li><strong>Minimization problems:</strong> Create the table systematically. Mark (accepting, non-accepting) pairs first, then propagate.</li>
                        <li><strong>Finiteness testing:</strong> Remember: cycle + reachable from start + can reach accepting = infinite</li>
                        <li><strong>Equivalence testing:</strong> Product construction or minimization + comparison both work</li>
                        <li><strong>Proof questions:</strong> Use the Myhill-Nerode theorem for theoretical questions about minimality</li>
                    </ul>
                </div>
            </section>

            {/* Quick Reference */}
            <section className="content-section">
                <h3>📄 Quick Reference Cheat Sheet</h3>
                <p>Save this page for quick review! Here's everything you need to remember at a glance.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">🔑 Key Definitions</h4>
                        <ul className="text-sm space-y-1">
                            <li><strong>Decidable:</strong> Algorithm exists that always halts with correct answer</li>
                            <li><strong>Reachable state:</strong> Can be reached from initial state</li>
                            <li><strong>Useful state:</strong> Can reach an accepting state</li>
                            <li><strong>Equivalent states:</strong> No distinguishing string exists</li>
                            <li><strong>Symmetric difference:</strong> (L₁ - L₂) ∪ (L₂ - L₁)</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">📐 Time Complexities</h4>
                        <ul className="text-sm space-y-1">
                            <li><strong>Membership:</strong> O(|w|)</li>
                            <li><strong>Emptiness:</strong> O(|Q| × |Σ|)</li>
                            <li><strong>Finiteness:</strong> O(|Q| × |Σ|)</li>
                            <li><strong>Equivalence:</strong> O(|Q₁| × |Q₂| × |Σ|)</li>
                            <li><strong>Minimization:</strong> O(|Q|² × |Σ|)</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">⚙️ Decision Algorithms</h4>
                        <ul className="text-sm space-y-1">
                            <li><strong>Membership:</strong> Simulate DFA on input</li>
                            <li><strong>Emptiness:</strong> BFS/DFS from initial state</li>
                            <li><strong>Finiteness:</strong> Check for cycles in useful states</li>
                            <li><strong>Equivalence:</strong> Product automaton + emptiness</li>
                            <li><strong>Containment:</strong> L₁ ∩ L₂' = ∅ test</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">✅ Minimization Steps</h4>
                        <ol className="list-decimal ml-4 text-sm space-y-1">
                            <li>Remove unreachable states</li>
                            <li>Mark (accepting, non-accepting) pairs</li>
                            <li>Iteratively mark distinguishable pairs</li>
                            <li>Merge unmarked (equivalent) states</li>
                            <li>Update transitions</li>
                        </ol>
                    </div>

                    <div className="bg-red-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">⚠️ Common Mistakes</h4>
                        <ul className="text-sm space-y-1">
                            <li>❌ Checking cycles in dead states</li>
                            <li>❌ Forgetting L₂ ⊆ L₁ in equivalence</li>
                            <li>❌ Assuming all accepting states merge</li>
                            <li>❌ Confusing reachable vs useful</li>
                        </ul>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded">
                        <h4 className="font-semibold mb-2">🎯 Key Theorems</h4>
                        <ul className="text-sm space-y-1">
                            <li><strong>Myhill-Nerode:</strong> Minimal DFA is unique</li>
                            <li><strong>Closure:</strong> Regular languages closed under all Boolean operations</li>
                            <li><strong>Pumping Lemma:</strong> For proving non-regularity</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Advanced Topics */}
            <section className="content-section">
                <h3>Go Deeper: Advanced Topics & Resources</h3>

                <h4 className="mt-4 font-semibold">Advanced Concepts</h4>

                <div className="space-y-4 mt-4">
                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                        <h4 className="font-semibold">🔬 Advanced Topic 1: Hopcroft's Algorithm for DFA Minimization</h4>
                        <p className="text-sm mt-2">Hopcroft's algorithm achieves O(|Q| log |Q| × |Σ|) time complexity for DFA minimization, improving on the O(|Q|² × |Σ|) table-filling algorithm. It uses a partition refinement approach that processes only the necessary state pairs. This is the algorithm used in production compiler tools like Lex and Flex.</p>
                        <p className="text-sm mt-2"><strong>Learn more:</strong> Search "Hopcroft DFA minimization algorithm"</p>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                        <h4 className="font-semibold">🔬 Advanced Topic 2: Learning DFAs from Examples (Angluin's L* Algorithm)</h4>
                        <p className="text-sm mt-2">What if we don't have a DFA but only examples of strings that should/shouldn't be accepted? Angluin's L* algorithm learns the minimal DFA for a regular language using membership queries and equivalence queries. This has applications in software verification and specification mining.</p>
                        <p className="text-sm mt-2"><strong>Learn more:</strong> Search "Angluin L* algorithm learning DFA"</p>
                    </div>

                    <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
                        <h4 className="font-semibold">🔬 Advanced Topic 3: Succinctness of Different Representations</h4>
                        <p className="text-sm mt-2">While DFAs, NFAs, and regular expressions all describe regular languages, they differ dramatically in succinctness. There exist languages where the minimal NFA has n states but the minimal DFA requires 2^n states. Similarly, some regular expressions convert to exponentially larger DFAs.</p>
                        <p className="text-sm mt-2"><strong>Learn more:</strong> Search "regular language succinctness DFA NFA blowup"</p>
                    </div>
                </div>

                <h4 className="mt-6 font-semibold">📚 Recommended Resources</h4>

                <div className="mt-4 bg-blue-50 p-4 rounded">
                    <p className="font-semibold">Textbooks:</p>
                    <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                        <li>"Introduction to the Theory of Computation" by Michael Sipser - Chapter 1: Regular Languages</li>
                        <li>"Automata Theory, Languages, and Computation" by Hopcroft, Motwani, Ullman - Chapter 4: Properties of Regular Languages</li>
                        <li>"Elements of the Theory of Computation" by Lewis and Papadimitriou</li>
                    </ul>
                </div>

                <div className="mt-4 bg-green-50 p-4 rounded">
                    <p className="font-semibold">Online Courses:</p>
                    <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                        <li><strong>Coursera:</strong> "Automata Theory" by Stanford (Jeff Ullman)</li>
                        <li><strong>MIT OCW:</strong> 6.045J Automata, Computability, and Complexity</li>
                        <li><strong>Neso Academy:</strong> Theory of Computation playlist on YouTube</li>
                    </ul>
                </div>
            </section>

            {/* Interview Preparation */}
            <section className="content-section">
                <h3>💼 Interview Preparation</h3>

                <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h4 className="font-semibold">Interview Question 1:</h4>
                        <p className="mt-2">"How would you test if two regular expressions are equivalent?"</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-blue-600">Show Approach</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>How to approach:</strong> Convert both regexes to DFAs, minimize them, then compare.</p>
                                <p><strong>Key points to mention:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>Regular expressions → NFAs (Thompson's construction)</li>
                                    <li>NFAs → DFAs (subset construction)</li>
                                    <li>Minimize DFAs (table-filling algorithm)</li>
                                    <li>Check isomorphism of minimized DFAs</li>
                                    <li>Mention complexity at each step</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <h4 className="font-semibold">Interview Question 2:</h4>
                        <p className="mt-2">"Design an algorithm to find the shortest string accepted by a DFA."</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-green-600">Show Approach</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>How to approach:</strong> Use BFS on the state graph.</p>
                                <p><strong>Key points:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>BFS from initial state until reaching an accepting state</li>
                                    <li>Track path to reconstruct the string</li>
                                    <li>Time complexity: O(|Q| × |Σ|)</li>
                                    <li>If no accepting state reachable, language is empty</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* University Exam Practice */}
            <section className="content-section">
                <h3>📝 University Exam Practice</h3>
                <p>Practice with these university-style exam questions. These reflect the format and difficulty of actual exams.</p>

                <div className="space-y-6 mt-4">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h4 className="font-semibold">Question 1: Short Answer (5 marks) - [Time: 7 minutes]</h4>
                        <p className="mt-2">Define the emptiness problem for regular languages and describe an algorithm to solve it. What is its time complexity?</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-blue-600">Show Marking Scheme & Model Answer</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Marking Scheme:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>Definition of emptiness problem: 1 mark</li>
                                    <li>Algorithm description (BFS/DFS): 2 marks</li>
                                    <li>Correctness explanation: 1 mark</li>
                                    <li>Time complexity: 1 mark</li>
                                </ul>
                                <p className="mt-2"><strong>Model Answer:</strong></p>
                                <p><strong>Definition:</strong> The emptiness problem asks whether a given DFA accepts any strings at all (i.e., whether L(D) = ∅).</p>
                                <p><strong>Algorithm:</strong> Perform BFS or DFS from the initial state. If any accepting state is reachable, the language is non-empty; otherwise, it's empty.</p>
                                <p><strong>Correctness:</strong> A DFA accepts a string iff there's a path from the initial state to an accepting state. Reachability analysis finds such paths.</p>
                                <p><strong>Complexity:</strong> O(|Q| × |Σ|) where |Q| is the number of states and |Σ| is the alphabet size.</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold">Question 2: Problem Solving (10 marks) - [Time: 15 minutes]</h4>
                        <p className="mt-2">Minimize the following DFA using the table-filling algorithm. Show all steps clearly.</p>
                        <p className="text-sm mt-2">States: {'{'}A, B, C, D{'}'}, Initial: A, Accepting: {'{'}C, D{'}'}</p>
                        <p className="text-sm">Transitions: δ(A,0)=B, δ(A,1)=A, δ(B,0)=C, δ(B,1)=D, δ(C,0)=C, δ(C,1)=A, δ(D,0)=B, δ(D,1)=D</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-yellow-600">Show Marking Scheme & Complete Solution</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Marking Scheme:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>Initial marking (accepting vs non-accepting): 2 marks</li>
                                    <li>Iterative marking steps: 5 marks</li>
                                    <li>Final equivalent state identification: 2 marks</li>
                                    <li>Minimized DFA construction: 1 mark</li>
                                </ul>
                                <p className="mt-2"><strong>Complete Solution:</strong></p>
                                <p><strong>Step 1 - Initialize:</strong> Mark (A,C), (A,D), (B,C), (B,D) as accepting/non-accepting pairs.</p>
                                <p><strong>Step 2 - Check remaining pairs:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>(A,B): On 0→(B,C) marked, so mark (A,B)</li>
                                    <li>(C,D): On 0→(C,B), on 1→(A,D) marked, so mark (C,D)</li>
                                </ul>
                                <p><strong>Result:</strong> All pairs marked. No states are equivalent. The DFA is already minimal.</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <h4 className="font-semibold">Question 3: Analytical (15 marks) - [Time: 20 minutes]</h4>
                        <p className="mt-2">Prove that the equivalence problem for regular languages is decidable. Describe two different approaches and compare their time complexities.</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-red-600">Show Marking Scheme & Model Answer</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Marking Scheme:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>Proof that equivalence is decidable: 3 marks</li>
                                    <li>Approach 1 (minimization + comparison): 4 marks</li>
                                    <li>Approach 2 (product construction): 4 marks</li>
                                    <li>Complexity analysis: 3 marks</li>
                                    <li>Comparison: 1 mark</li>
                                </ul>
                                <p className="mt-2"><strong>Model Answer:</strong></p>
                                <p><strong>Proof of decidability:</strong> Given DFAs D₁ and D₂, we can construct a DFA for L(D₁) ⊕ L(D₂) (symmetric difference). L(D₁) = L(D₂) iff this language is empty. Since emptiness is decidable, equivalence is decidable.</p>
                                <p><strong>Approach 1 - Minimization:</strong> Minimize both DFAs. If minimized forms are isomorphic (same structure, possibly renamed states), languages are equal. Complexity: O(|Q₁|² × |Σ|) + O(|Q₂|² × |Σ|) for minimization.</p>
                                <p><strong>Approach 2 - Product Construction:</strong> Build DFA for (L₁ ∩ L₂') ∪ (L₁' ∩ L₂). Test emptiness. Complexity: O(|Q₁| × |Q₂| × |Σ|).</p>
                                <p><strong>Comparison:</strong> Product construction is simpler to implement. Minimization is more efficient when DFAs are large and very different.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* MCQ Practice */}
            <section className="content-section" id="quiz">
                <h3>MCQ Practice</h3>
                <Quiz 
                    title="MCQ Practice: Decision Properties"
                    subject="Theory of Computation"
                    unitId={2}
                    moduleId={5}
                    questions={[
                        {
                            question: "Which decision problem for regular languages is solved by checking if an accepting state is reachable from the initial state?",
                            options: ["Membership", "Emptiness", "Finiteness", "Equivalence"],
                            correctAnswer: 1,
                            explanation: "The Emptiness Problem is solved by determining if any accepting state is reachable from the start state using graph traversal (BFS/DFS)."
                        },
                        {
                            question: "What is the time complexity of testing membership of a string w in a language represented by a DFA?",
                            options: ["O(1)", "O(|w|)", "O(|Q|)", "O(|Q| * |Σ|)"],
                            correctAnswer: 1,
                            explanation: "Membership testing in a DFA involves simulating the transitions for each character in the string, which takes O(|w|) time."
                        },
                        {
                            question: "A regular language is infinite if and only if its minimized DFA contains a cycle that is:",
                            options: ["Anywhere in the machine", "Only at the start state", "Among reachable states that can also reach an accepting state", "Only between two accepting states"],
                            correctAnswer: 2,
                            explanation: "A cycle must be 'useful'—it must be reachable from the start and lead to an accepting state—for the language to be infinite."
                        },
                        {
                            question: "Which algorithm is commonly used to test the equivalence of two regular languages using symmetric difference?",
                            options: ["Table-filling algorithm", "Powersets construction", "Product construction", "Myhill-Nerode theorem"],
                            correctAnswer: 2,
                            explanation: "The Product Construction can be used to build a DFA that accepts the symmetric difference of two languages. If that DFA's language is empty, the original languages are equivalent."
                        },
                        {
                            question: "The problem of determining if a regular language contains a specific number of strings is:",
                            options: ["Undecidable", "Decidable in exponential time", "Decidable in polynomial time", "Decidable only for small alphabets"],
                            correctAnswer: 2,
                            explanation: "All standard decision problems for regular languages, including counting or properties like emptiness/finiteness, are decidable in polynomial time."
                        }
                    ]}
                />
            </section>
        </div>

    );
};

export default Module2_5;
