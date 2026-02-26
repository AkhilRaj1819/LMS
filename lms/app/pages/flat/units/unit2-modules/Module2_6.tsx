'use client';
import React from 'react';

const Module2_6: React.FC = () => {
    return (
        <div className="module-content">
            {/* Lesson Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.6</div>
                <div className="lesson-title-main">
                    <h1>⚖️ Equivalence and Minimization of Finite Automata</h1>
                </div>
            </div>

            {/* Learning Objectives */}
            <section className="content-section">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-semibold">🎯 What You'll Master - Learning Objectives</p>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Apply the table-filling algorithm to determine state equivalence and minimize DFAs by merging indistinguishable states</li>
                        <li>State and apply the Myhill-Nerode theorem to prove regularity of languages and determine the minimal number of states required</li>
                        <li>Construct the quotient DFA from equivalence classes and prove that the minimal DFA is unique up to isomorphism</li>
                        <li>Prove that two DFAs are equivalent by showing they accept the same language using distinguishability arguments</li>
                        <li>Analyze the time and space complexity of DFA minimization algorithms and apply them to real-world pattern matching problems</li>
                    </ul>
                </div>
            </section>

            {/* Why This Topic Matters */}
            <section className="content-section">
                <h3>🔥 Why This Topic Matters</h3>
                <p>
                    Imagine you're designing a lexical analyzer for a compiler that recognizes keywords, identifiers, and operators. Your initial DFA might have 50 states, but after careful analysis, you discover that 20 of those states are redundant—they behave identically for all possible inputs. By eliminating these redundant states, you reduce memory usage by 40% and improve processing speed significantly.
                </p>
                <p className="mt-2">
                    DFA minimization is not just an academic exercise—it's a fundamental optimization technique with real-world applications. In hardware design, minimizing a finite state machine reduces the number of flip-flops needed. In software, it reduces the memory footprint of pattern matching algorithms used in grep, regular expression engines, and network packet filters. The Myhill-Nerode theorem, which underlies minimization, also provides a powerful tool for proving that certain languages are not regular.
                </p>
                <p className="mt-2">
                    Understanding equivalence and minimization is essential for anyone working with formal languages, compiler design, or digital logic. These concepts appear frequently in competitive exams (GATE, GRE CS), technical interviews at top tech companies, and advanced computer science courses. Mastering them will give you a deeper understanding of the fundamental limits of computation.
                </p>

                <h4 className="mt-4 font-semibold">💡 Real-World Applications:</h4>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Compiler lexical analyzers (lex/flex tools use minimized DFAs for token recognition)</li>
                    <li>Network intrusion detection systems (Snort, Suricata use optimized pattern matching)</li>
                    <li>Hardware finite state machines (FPGA designs benefit from reduced state count)</li>
                    <li>Regular expression engines (grep, Perl, Python's re module apply minimization)</li>
                </ul>
            </section>

            {/* Deep Dive */}
            <section className="content-section">
                <h3>📖 Deep Dive: Understanding the Concept</h3>
                
                <h4 className="mt-4 font-semibold">Definition & Fundamentals</h4>
                <p>
                    Two states p and q in a DFA are called <strong>equivalent</strong> (or indistinguishable) if for every input string w ∈ Σ*, the transitions from both states on w lead to either both accepting states or both non-accepting states. Formally:
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                    <p className="font-semibold">Definition: State Equivalence</p>
                    <p className="mt-2">States p and q are equivalent (written p ≡ q) if for all w ∈ Σ*:</p>
                    <p className="text-center mt-2 text-lg">δ̂(p, w) ∈ F ⟺ δ̂(q, w) ∈ F</p>
                </div>

                <p className="mt-4">
                    If there exists any string w that distinguishes p from q (i.e., one leads to acceptance and the other to rejection), we say p and q are <strong>distinguishable</strong>. The string w is called a <strong>distinguishing string</strong>.
                </p>

                <p className="mt-2">
                    The goal of DFA minimization is to construct an equivalent DFA with the smallest possible number of states. Remarkably, for any regular language, this minimal DFA is unique (up to renaming of states). This uniqueness is guaranteed by the Myhill-Nerode theorem, which provides both a characterization of regular languages and an algorithmic foundation for minimization.
                </p>

                <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
                <ul className="list-disc ml-6 space-y-1">
                    <li><strong>Equivalent States:</strong> States that behave identically on all input strings (accept/reject the same suffixes)</li>
                    <li><strong>Distinguishable States:</strong> States for which there exists at least one string leading to different acceptance outcomes</li>
                    <li><strong>Minimal DFA:</strong> A DFA with the smallest possible number of states that recognizes a given language</li>
                    <li><strong>Unreachable States:</strong> States that cannot be reached from the initial state on any input</li>
                    <li><strong>Dead State:</strong> A non-accepting state from which no accepting state is reachable</li>
                    <li><strong>Quotient DFA:</strong> The DFA formed by merging equivalent states into equivalence classes</li>
                </ul>

                <div className="flex flex-col items-center my-6">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
                        <h4 className="text-center font-bold text-lg mb-4">Concept: State Equivalence</h4>
                        <svg width="700" height="400" viewBox="0 0 700 400" className="mx-auto">
                            <defs>
                                <marker id="arrowEquiv" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                                </marker>
                            </defs>

                            {/* State p */}
                            <circle cx="150" cy="150" r="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" />
                            <text x="150" y="145" textAnchor="middle" fontSize="18" fontWeight="bold">State p</text>
                            <text x="150" y="165" textAnchor="middle" fontSize="14" fill="#3b82f6">p</text>

                            {/* State q */}
                            <circle cx="550" cy="150" r="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" />
                            <text x="550" y="145" textAnchor="middle" fontSize="18" fontWeight="bold">State q</text>
                            <text x="550" y="165" textAnchor="middle" fontSize="14" fill="#3b82f6">q</text>

                            {/* Equivalence symbol */}
                            <text x="350" y="160" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#16a34a">≡</text>

                            {/* Arrow from p with w */}
                            <line x1="150" y1="200" x2="150" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowEquiv)" />
                            <text x="170" y="240" fontSize="16" fontWeight="bold" fill="#3b82f6">w</text>

                            {/* Arrow from q with w */}
                            <line x1="550" y1="200" x2="550" y2="280" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowEquiv)" />
                            <text x="570" y="240" fontSize="16" fontWeight="bold" fill="#3b82f6">w</text>

                            {/* Result for p */}
                            <rect x="80" y="290" width="140" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="150" y="315" textAnchor="middle" fontSize="13" fontWeight="bold">δ̂(p, w) ∈ F</text>
                            <text x="150" y="335" textAnchor="middle" fontSize="11">Accept/Reject</text>

                            {/* Result for q */}
                            <rect x="480" y="290" width="140" height="60" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="550" y="315" textAnchor="middle" fontSize="13" fontWeight="bold">δ̂(q, w) ∈ F</text>
                            <text x="550" y="335" textAnchor="middle" fontSize="11">Accept/Reject</text>

                            {/* Equivalence condition */}
                            <rect x="150" y="360" width="400" height="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="350" y="380" textAnchor="middle" fontSize="13" fontWeight="bold">Both accept or both reject for ALL strings w</text>
                        </svg>
                        <p className="text-center text-sm text-gray-600 mt-4">Figure 1: Two states p and q are equivalent if they accept/reject the same set of suffixes.</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="content-section">
                <h3>How DFA Minimization Works: The Table-Filling Algorithm</h3>
                <p>
                    The most practical algorithm for DFA minimization is the <strong>Table-Filling Algorithm</strong> (also called the partition refinement or Myhill-Nerode construction). This algorithm systematically identifies distinguishable state pairs through an iterative process.
                </p>
                <p className="mt-2">
                    <strong>The Core Idea:</strong> We maintain a table of all state pairs. Initially, we mark pairs where one state is accepting and the other is not—these are immediately distinguishable (by the empty string ε). Then we iteratively mark additional pairs: if states p and q transition to already-marked distinguishable states on some input symbol, then p and q are also distinguishable.
                </p>

                <div className="flex flex-col items-center my-6">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
                        <h4 className="text-center font-bold text-lg mb-4">Table-Filling Algorithm Flowchart</h4>
                        <svg width="600" height="900" viewBox="0 0 600 900" className="mx-auto">
                            <defs>
                                <marker id="arrowTable" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                                </marker>
                            </defs>

                            {/* Start */}
                            <ellipse cx="300" cy="30" rx="100" ry="25" fill="#10b981" stroke="#065f46" strokeWidth="2" />
                            <text x="300" y="37" textAnchor="middle" fill="white" fontWeight="bold">Start: DFA M</text>

                            {/* Remove Unreachable */}
                            <rect x="200" y="80" width="200" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
                            <text x="300" y="100" textAnchor="middle" fontSize="13" fontWeight="bold">Remove Unreachable</text>
                            <text x="300" y="118" textAnchor="middle" fontSize="13" fontWeight="bold">States</text>
                            <line x1="300" y1="55" x2="300" y2="80" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />

                            {/* Create Table */}
                            <rect x="200" y="160" width="200" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
                            <text x="300" y="180" textAnchor="middle" fontSize="13" fontWeight="bold">Create Table of</text>
                            <text x="300" y="198" textAnchor="middle" fontSize="13" fontWeight="bold">State Pairs</text>
                            <line x1="300" y1="130" x2="300" y2="160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />

                            {/* Mark Final-NonFinal */}
                            <rect x="200" y="240" width="200" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="300" y="260" textAnchor="middle" fontSize="13" fontWeight="bold">Mark Final-NonFinal</text>
                            <text x="300" y="278" textAnchor="middle" fontSize="13" fontWeight="bold">Pairs</text>
                            <line x1="300" y1="210" x2="300" y2="240" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />

                            {/* Decision: Any Unmarked Pairs? */}
                            <path d="M 300 320 L 400 380 L 300 440 L 200 380 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
                            <text x="300" y="375" textAnchor="middle" fontSize="12" fontWeight="bold">Any Unmarked</text>
                            <text x="300" y="390" textAnchor="middle" fontSize="12" fontWeight="bold">Pairs?</text>
                            <line x1="300" y1="290" x2="300" y2="320" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />

                            {/* No - Merge */}
                            <rect x="200" y="770" width="200" height="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="300" y="790" textAnchor="middle" fontSize="13" fontWeight="bold">Merge Unmarked</text>
                            <text x="300" y="808" textAnchor="middle" fontSize="13" fontWeight="bold">Pairs</text>
                            <line x1="200" y1="380" x2="100" y2="380" stroke="#374151" strokeWidth="2" />
                            <line x1="100" y1="380" x2="100" y2="795" stroke="#374151" strokeWidth="2" />
                            <line x1="100" y1="795" x2="200" y2="795" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />
                            <text x="150" y="375" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

                            {/* Yes - Check Each Pair */}
                            <rect x="200" y="490" width="200" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
                            <text x="300" y="510" textAnchor="middle" fontSize="13" fontWeight="bold">Check Each</text>
                            <text x="300" y="528" textAnchor="middle" fontSize="13" fontWeight="bold">Unmarked Pair</text>
                            <line x1="300" y1="440" x2="300" y2="490" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />
                            <text x="310" y="465" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

                            {/* Decision: Transitions Lead to Marked? */}
                            <path d="M 300 570 L 400 630 L 300 690 L 200 630 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
                            <text x="300" y="620" textAnchor="middle" fontSize="11" fontWeight="bold">Transitions Lead</text>
                            <text x="300" y="635" textAnchor="middle" fontSize="11" fontWeight="bold">to Marked?</text>
                            <line x1="300" y1="540" x2="300" y2="570" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />

                            {/* Yes - Mark This Pair */}
                            <rect x="440" y="605" width="140" height="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                            <text x="510" y="625" textAnchor="middle" fontSize="12" fontWeight="bold">Mark This Pair</text>
                            <text x="510" y="643" textAnchor="middle" fontSize="12" fontWeight="bold">as Distinguishable</text>
                            <line x1="400" y1="630" x2="440" y2="630" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />
                            <text x="420" y="625" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

                            {/* Loop back */}
                            <line x1="510" y1="655" x2="510" y2="380" stroke="#374151" strokeWidth="2" />
                            <line x1="510" y1="380" x2="400" y2="380" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />

                            {/* No - Continue */}
                            <line x1="300" y1="690" x2="300" y2="720" stroke="#374151" strokeWidth="2" />
                            <line x1="300" y1="720" x2="450" y2="720" stroke="#374151" strokeWidth="2" />
                            <line x1="450" y1="720" x2="450" y2="380" stroke="#374151" strokeWidth="2" />
                            <line x1="450" y1="380" x2="400" y2="380" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />
                            <text x="310" y="710" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

                            {/* Construct Minimized DFA */}
                            <rect x="200" y="840" width="200" height="50" fill="#dcfce7" stroke="#16a34a" strokeWidth="2" rx="5" />
                            <text x="300" y="860" textAnchor="middle" fontSize="13" fontWeight="bold">Construct Minimized</text>
                            <text x="300" y="878" textAnchor="middle" fontSize="13" fontWeight="bold">DFA</text>
                            <line x1="300" y1="820" x2="300" y2="840" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowTable)" />

                            {/* End */}
                            <ellipse cx="300" cy="870" rx="60" ry="25" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
                            <text x="300" y="877" textAnchor="middle" fill="white" fontWeight="bold">End</text>
                        </svg>
                        <p className="text-center text-sm text-gray-600 mt-4">Figure 2: The iterative table-filling algorithm for DFA minimization.</p>
                    </div>
                </div>

                <div className="space-y-4 mt-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h4 className="font-semibold">Step 1: Remove Unreachable States</h4>
                        <p className="text-sm mt-2">First, eliminate any states that cannot be reached from the initial state. These states don't affect the language recognized.</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <h4 className="font-semibold">Step 2: Initialize the Table</h4>
                        <p className="text-sm mt-2">Create a triangular table with all state pairs (p, q) where p &lt; q. Mark pairs where one state is in F and the other is not.</p>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                        <h4 className="font-semibold">Step 3: Iterative Marking</h4>
                        <p className="text-sm mt-2">For each unmarked pair (p, q), check all input symbols a. If (δ(p,a), δ(q,a)) is marked, then mark (p, q).</p>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                        <h4 className="font-semibold">Step 4: Repeat</h4>
                        <p className="text-sm mt-2">Continue Step 3 until no new pairs can be marked in a complete pass.</p>
                    </div>

                    <div className="bg-pink-50 border-l-4 border-pink-500 p-4">
                        <h4 className="font-semibold">Step 5: Merge Equivalent States</h4>
                        <p className="text-sm mt-2">All unmarked pairs represent equivalent states. Merge each equivalence class into a single state in the minimized DFA.</p>
                    </div>
                </div>
            </section>

            {/* Myhill-Nerode Theorem */}
            <section className="content-section">
                <h3>The Myhill-Nerode Theorem</h3>
                <p>
                    The Myhill-Nerode theorem is one of the most elegant and powerful results in automata theory. It provides a complete characterization of regular languages and establishes the theoretical foundation for DFA minimization.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                    <p className="font-semibold">Myhill-Nerode Theorem</p>
                    <p className="mt-2">For a language L ⊆ Σ*, the following are equivalent:</p>
                    <ol className="list-decimal ml-6 mt-2 space-y-1">
                        <li>L is regular (recognized by some DFA)</li>
                        <li>The set of equivalence classes of the relation ≡<sub>L</sub> is finite</li>
                        <li>There exists a DFA with exactly |Σ*/≡<sub>L</sub>| states that recognizes L</li>
                    </ol>
                    <p className="mt-2">Furthermore, this DFA is the unique minimal DFA (up to isomorphism) for L.</p>
                </div>

                <p className="mt-4">
                    The relation ≡<sub>L</sub> (Myhill-Nerode equivalence) is defined as: x ≡<sub>L</sub> y if and only if for all z ∈ Σ*, xz ∈ L ⟺ yz ∈ L. In other words, two strings are equivalent if they can be followed by exactly the same set of suffixes to produce strings in L.
                </p>

                <p className="mt-2">
                    The theorem tells us that the number of equivalence classes equals the minimum number of states needed. This gives us both a way to prove languages non-regular (show infinitely many equivalence classes) and a way to construct the minimal DFA (each equivalence class becomes one state).
                </p>
            </section>

            {/* Quotient Construction */}
            <section className="content-section">
                <h3>The Quotient Construction</h3>

                <div className="flex flex-col items-center my-6">
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-5xl">
                        <h4 className="text-center font-bold text-lg mb-4">Quotient Construction: Merging Equivalent States</h4>
                        <svg width="900" height="400" viewBox="0 0 900 400" className="mx-auto">
                            <defs>
                                <marker id="arrowQuot" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                                </marker>
                            </defs>

                            {/* Original DFA */}
                            <text x="150" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">Original DFA</text>

                            {/* States in original DFA */}
                            <circle cx="80" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                            <text x="80" y="105" textAnchor="middle" fontSize="14" fontWeight="bold">q₀</text>

                            <circle cx="220" cy="100" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                            <text x="220" y="105" textAnchor="middle" fontSize="14" fontWeight="bold">q₁</text>

                            <circle cx="150" cy="200" r="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                            <text x="150" y="205" textAnchor="middle" fontSize="14" fontWeight="bold">q₂</text>

                            <circle cx="150" cy="300" r="30" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                            <text x="150" y="305" textAnchor="middle" fontSize="14" fontWeight="bold">q₃</text>

                            <circle cx="80" cy="300" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                            <text x="80" y="305" textAnchor="middle" fontSize="14" fontWeight="bold">q₄</text>

                            {/* Equivalence classes */}
                            <rect x="40" y="60" width="210" height="270" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" rx="10" />
                            <text x="150" y="350" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3b82f6">Class A: {'{'}q₀, q₁, q₄{'}'}</text>

                            <rect x="120" y="170" width="80" height="160" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5,5" rx="10" />
                            <text x="160" y="365" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f59e0b">Class B: {'{'}q₂, q₃{'}'}</text>

                            {/* Merge arrow */}
                            <text x="450" y="200" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#16a34a">Merge →</text>

                            {/* Minimized DFA */}
                            <text x="750" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">Minimized DFA</text>

                            {/* State A */}
                            <circle cx="650" cy="150" r="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="3" />
                            <text x="650" y="145" textAnchor="middle" fontSize="18" fontWeight="bold">A</text>
                            <text x="650" y="165" textAnchor="middle" fontSize="11">{'{'}q₀,q₁,q₄{'}'}</text>

                            {/* State B */}
                            <circle cx="850" cy="250" r="50" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" />
                            <text x="850" y="245" textAnchor="middle" fontSize="18" fontWeight="bold">B</text>
                            <text x="850" y="265" textAnchor="middle" fontSize="11">{'{'}q₂,q₃{'}'}</text>

                            {/* Transitions */}
                            <path d="M 690 170 Q 750 210 810 240" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowQuot)" />
                            <text x="750" y="200" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3b82f6">0,1</text>

                            {/* Self loop on A */}
                            <path d="M 620 120 Q 600 90 650 90 Q 700 90 680 120" fill="none" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowQuot)" />
                            <text x="650" y="75" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#3b82f6">...</text>

                            {/* Self loop on B */}
                            <path d="M 880 280 Q 910 310 850 310 Q 790 310 820 280" fill="none" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowQuot)" />
                            <text x="850" y="335" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#f59e0b">...</text>
                        </svg>
                        <p className="text-center text-sm text-gray-600 mt-4">Figure 3: Merging equivalent states into equivalence classes to form the minimized DFA.</p>
                    </div>
                </div>
            </section>

            {/* Key Components */}
            <section className="content-section">
                <h3>Key Components & Architecture</h3>

                <div className="space-y-4 mt-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h4 className="font-semibold">Component 1: The Equivalence Relation</h4>
                        <p className="text-sm mt-2">The foundation of minimization is the equivalence relation on states. This relation partitions the state set into disjoint equivalence classes. Two states are in the same class if and only if they are indistinguishable. The relation is reflexive (every state is equivalent to itself), symmetric (if p ≡ q then q ≡ p), and transitive (if p ≡ q and q ≡ r then p ≡ r).</p>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <h4 className="font-semibold">Component 2: The Distinguishability Relation</h4>
                        <p className="text-sm mt-2">This is the complement of equivalence. We say p is distinguishable from q with string w if exactly one of δ̂(p, w) and δ̂(q, w) is accepting. The table-filling algorithm computes the reflexive, symmetric closure of this relation.</p>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                        <h4 className="font-semibold">Component 3: The Quotient DFA</h4>
                        <p className="text-sm mt-2">Given a DFA M = (Q, Σ, δ, q₀, F) and the equivalence relation ≡, the quotient DFA M/≡ = (Q/≡, Σ, δ', [q₀], F') is defined by:</p>
                        <ul className="list-disc ml-6 mt-2 text-sm">
                            <li>Q/≡ = {'{'}[q] : q ∈ Q{'}'} (equivalence classes as states)</li>
                            <li>δ'([q], a) = [δ(q, a)] (well-defined by equivalence)</li>
                            <li>F' = {'{'}[q] : q ∈ F{'}'} (equivalence classes containing final states)</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                        <h4 className="font-semibold">Component 4: Uniqueness and Isomorphism</h4>
                        <p className="text-sm mt-2">The Myhill-Nerode theorem guarantees that the minimal DFA is unique up to isomorphism. Two DFAs are isomorphic if there exists a bijection between their states that preserves the initial state, final states, and transitions. This means any two minimal DFAs for the same language are essentially the same machine with different state labels.</p>
                    </div>
                </div>
            </section>

            {/* Common Misconceptions */}
            <section className="content-section">
                <h3>⚠️ Common Misconceptions</h3>

                <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #1: "NFA minimization is the same as DFA minimization."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> NFAs do not have unique minimal forms. A regular language can have multiple non-isomorphic minimal NFAs. The uniqueness property only holds for DFAs.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #2: "The minimal DFA always has fewer transitions than the original."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> While states are reduced, transitions may actually increase in some cases. The primary optimization is in state count, which affects memory usage in implementations.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #3: "Two DFAs are equivalent if they have the same number of states."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> Equivalence depends on recognizing the same language, not on structural similarity. Two DFAs with different numbers of states can be equivalent, and two with the same number can recognize different languages.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">Misconception #4: "The table-filling algorithm marks all distinguishable pairs in one pass."</h4>
                        <p className="text-sm mt-2"><strong>Reality:</strong> The algorithm is iterative. A pair might not be marked in early passes but becomes distinguishable once its successor pairs are marked. Multiple passes are often needed.</p>
                    </div>
                </div>
            </section>

            {/* Video Resources */}
            <section className="content-section">
                <h3>Learn Through Videos</h3>
                <p>Watch these carefully selected videos to reinforce your understanding with visual explanations and step-by-step demonstrations.</p>

                <div className="space-y-6 mt-4">
                    <div>
                        <h4 className="font-semibold mb-2">📚 DFA Minimization - Table Filling Method</h4>
                        <p className="text-sm mb-2">Neso Academy - 15 minutes</p>
                        <p className="text-sm mb-2"><strong>What you'll learn:</strong> Complete walkthrough of the table-filling algorithm with clear visual demonstrations of marking distinguishable state pairs.</p>
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rGxyc-CJGRk?si=Ac8cM-p-2FKx_UkV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">🎬 Myhill-Nerode Theorem Explained</h4>
                        <p className="text-sm mb-2">Gate Smashers - 12 minutes</p>
                        <p className="text-sm mb-2"><strong>What you'll learn:</strong> The theoretical foundation of DFA minimization, equivalence classes, and how to prove languages non-regular.</p>
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/UiXkJUTkp44?si=BqB0pFduUAeFkjfr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">💻 DFA Equivalence and Minimization Examples</h4>
                        <p className="text-sm mb-2">Jenny's Lectures CS IT - 18 minutes</p>
                        <p className="text-sm mb-2"><strong>What you'll learn:</strong> Multiple worked examples showing how to minimize DFAs and prove equivalence between different automata.</p>
                        <div className="flex justify-center">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/0XaGAkY09Wc?si=XkOECAVxA5VDR-ft" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Worked Examples */}
            <section className="content-section">
                <h3>Worked Examples: Minimization in Action</h3>

                <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                        <h4 className="font-semibold text-lg">Example 1: Basic DFA Minimization</h4>
                        <p className="mt-2"><strong>📝 Problem Statement</strong></p>
                        <p className="text-sm mt-1">Minimize the following DFA with states {'{'}A, B, C, D, E, F{'}'}, alphabet {'{'}0, 1{'}'}, initial state A, and final states {'{'}C, E{'}'}:</p>
                        <div className="overflow-x-auto mt-2">
                            <table className="min-w-full border-collapse border border-gray-300 text-xs">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-300 p-2">State</th>
                                        <th className="border border-gray-300 p-2">0</th>
                                        <th className="border border-gray-300 p-2">1</th>
                                        <th className="border border-gray-300 p-2">Final?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td className="border border-gray-300 p-2">A</td><td className="border border-gray-300 p-2">B</td><td className="border border-gray-300 p-2">C</td><td className="border border-gray-300 p-2">No</td></tr>
                                    <tr className="bg-gray-50"><td className="border border-gray-300 p-2">B</td><td className="border border-gray-300 p-2">A</td><td className="border border-gray-300 p-2">D</td><td className="border border-gray-300 p-2">No</td></tr>
                                    <tr><td className="border border-gray-300 p-2">C</td><td className="border border-gray-300 p-2">E</td><td className="border border-gray-300 p-2">F</td><td className="border border-gray-300 p-2">Yes</td></tr>
                                    <tr className="bg-gray-50"><td className="border border-gray-300 p-2">D</td><td className="border border-gray-300 p-2">E</td><td className="border border-gray-300 p-2">F</td><td className="border border-gray-300 p-2">No</td></tr>
                                    <tr><td className="border border-gray-300 p-2">E</td><td className="border border-gray-300 p-2">E</td><td className="border border-gray-300 p-2">F</td><td className="border border-gray-300 p-2">Yes</td></tr>
                                    <tr className="bg-gray-50"><td className="border border-gray-300 p-2">F</td><td className="border border-gray-300 p-2">F</td><td className="border border-gray-300 p-2">F</td><td className="border border-gray-300 p-2">No</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-blue-600">🔍 Step-by-Step Solution</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Step 1:</strong> Remove unreachable states. All states are reachable from A, so we keep all 6 states.</p>
                                <p><strong>Step 2:</strong> Initialize the table. Create pairs and mark Final-NonFinal pairs: (A,C), (A,E), (B,C), (B,E), (D,C), (D,E), (F,C), (F,E) are all marked (distinguishable by ε).</p>
                                <p><strong>Step 3:</strong> First pass. Check unmarked pairs:</p>
                                <ul className="list-disc ml-6 text-xs">
                                    <li>(A,B): δ(A,0)=B, δ(B,0)=A (unmarked); δ(A,1)=C, δ(B,1)=D. C is final, D is not → (C,D) marked! Mark (A,B).</li>
                                    <li>(A,D): δ(A,0)=B, δ(D,0)=E. (B,E) is marked. Mark (A,D).</li>
                                    <li>(C,E): δ(C,0)=E, δ(E,0)=E; δ(C,1)=F, δ(E,1)=F. Both transitions go to same states. Unmarked - equivalent!</li>
                                </ul>
                                <p><strong>Step 4:</strong> Second pass. Check remaining unmarked pairs: (B,F) and (C,E).</p>
                                <p><strong>Step 5:</strong> Merge equivalent states. Only (C,E) remains unmarked. Merge C and E into a single state [CE].</p>
                                <p className="mt-2"><strong>✅ Minimized DFA:</strong></p>
                                <p>States: {'{'}A, B, D, F, [CE]{'}'}</p>
                                <p>Final states: {'{'}[CE]{'}'}</p>
                                <p><strong>States reduced from 6 to 5.</strong></p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <h4 className="font-semibold text-lg">Example 2: Using Myhill-Nerode to Prove Non-Regularity</h4>
                        <p className="mt-2"><strong>📝 Problem Statement</strong></p>
                        <p className="text-sm mt-1">Prove that the language L = {'{'}0ⁿ1ⁿ : n ≥ 0{'}'} is not regular using the Myhill-Nerode theorem.</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-green-600">🔍 Proof</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Step 1:</strong> Understand the goal. By Myhill-Nerode, if L is regular, then ≡<sub>L</sub> has finitely many equivalence classes. We'll show infinitely many equivalence classes exist.</p>
                                <p><strong>Step 2:</strong> Consider strings of the form 0ⁿ. For any i ≠ j, consider strings 0ⁱ and 0ʲ.</p>
                                <p><strong>Step 3:</strong> Find a distinguishing extension. Take z = 1ⁱ. Then:</p>
                                <ul className="list-disc ml-6">
                                    <li>0ⁱ · 1ⁱ = 0ⁱ1ⁱ ∈ L</li>
                                    <li>0ʲ · 1ⁱ = 0ʲ1ⁱ ∉ L (since i ≠ j)</li>
                                </ul>
                                <p><strong>Step 4:</strong> Conclude distinguishability. For every i ≠ j, the string 1ⁱ distinguishes 0ⁱ from 0ʲ. Therefore, each 0ⁱ is in a different equivalence class.</p>
                                <p><strong>Step 5:</strong> Final conclusion. Since there are infinitely many strings 0ⁿ (one for each n ≥ 0), there are infinitely many equivalence classes. By Myhill-Nerode, L is not regular.</p>
                                <p className="mt-2"><strong>💡 Key Insight:</strong> The Myhill-Nerode theorem provides a general technique for proving non-regularity: find an infinite set of pairwise distinguishable strings. This is often easier than using the pumping lemma!</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h4 className="font-semibold text-lg">Example 3: DFA Equivalence Testing</h4>
                        <p className="mt-2"><strong>📝 Problem Statement</strong></p>
                        <p className="text-sm mt-1">Determine if the following two DFAs are equivalent (recognize the same language).</p>
                        <p className="text-sm mt-2"><strong>DFA M₁:</strong> States {'{'}p, q{'}'}, Σ = {'{'}0,1{'}'}, p₀ = p, F = {'{'}q{'}'}</p>
                        <ul className="list-disc ml-6 text-xs">
                            <li>δ(p,0) = p, δ(p,1) = q</li>
                            <li>δ(q,0) = q, δ(q,1) = q</li>
                        </ul>
                        <p className="text-sm mt-2"><strong>DFA M₂:</strong> States {'{'}a, b, c{'}'}, Σ = {'{'}0,1{'}'}, q₀ = a, F = {'{'}b, c{'}'}</p>
                        <ul className="list-disc ml-6 text-xs">
                            <li>δ(a,0) = a, δ(a,1) = b</li>
                            <li>δ(b,0) = c, δ(b,1) = b</li>
                            <li>δ(c,0) = c, δ(c,1) = c</li>
                        </ul>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-yellow-600">🔍 Solution</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Step 1:</strong> Apply the product construction. Create pairs (state from M₁, state from M₂) and check if initial pair is equivalent.</p>
                                <p><strong>Step 2:</strong> Check initial pair (p, a). Both are non-accepting, so potentially equivalent.</p>
                                <p><strong>Step 3:</strong> Check transitions from (p, a).</p>
                                <ul className="list-disc ml-6 text-xs">
                                    <li>On 0: (δ(p,0), δ(a,0)) = (p, a) - same pair</li>
                                    <li>On 1: (δ(p,1), δ(a,1)) = (q, b) - need to check</li>
                                </ul>
                                <p><strong>Step 4:</strong> Check pair (q, b). q ∈ F₁, b ∈ F₂ - both accepting! Potentially equivalent.</p>
                                <p><strong>Step 5:</strong> Check pair (q, c). Both accepting. Transitions: (q, c) on 0→(q,c), on 1→(q,c). Self-loop, no new pairs.</p>
                                <p><strong>Step 6:</strong> Conclusion. All reachable pairs have matching acceptance. The DFAs are equivalent.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Code Implementation */}
            <section className="content-section">
                <h3>💻 Code Implementation</h3>
                <p className="mb-4">Here's a complete Python implementation of the table-filling algorithm for DFA minimization. This code is fully functional and can be used to minimize any DFA.</p>

                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <p className="text-sm font-semibold mb-2">DFA Minimization - Table Filling Algorithm</p>
                    <pre className="text-sm">
                        <code>{`# ============================================
# DFA Minimization using Table-Filling Algorithm
# Language: Python 3
# Description: Minimizes a DFA by merging equivalent states
# ============================================

class DFA:
    def __init__(self, states, alphabet, transitions, start, finals):
        self.states = states        # Set of state names
        self.alphabet = alphabet    # Set of input symbols
        self.trans = transitions    # Dict: (state, symbol) -> state
        self.start = start          # Initial state
        self.finals = finals        # Set of final states
    
    def delta(self, state, symbol):
        """Transition function"""
        return self.trans.get((state, symbol), None)
    
    def get_reachable_states(self):
        """Remove unreachable states using BFS"""
        reachable = {self.start}
        queue = [self.start]
        
        while queue:
            state = queue.pop(0)
            for a in self.alphabet:
                next_state = self.delta(state, a)
                if next_state and next_state not in reachable:
                    reachable.add(next_state)
                    queue.append(next_state)
        return reachable
    
    def minimize(self):
        """Minimize DFA using table-filling algorithm"""
        # Step 1: Keep only reachable states
        reachable = self.get_reachable_states()
        states = list(reachable)
        n = len(states)
        
        # Step 2: Initialize distinguishability table
        table = [[False] * n for _ in range(n)]
        
        # Step 3: Mark Final-NonFinal pairs
        for i in range(n):
            for j in range(i + 1, n):
                if (states[i] in self.finals) != (states[j] in self.finals):
                    table[i][j] = table[j][i] = True
        
        # Step 4: Iteratively mark distinguishable pairs
        changed = True
        while changed:
            changed = False
            for i in range(n):
                for j in range(i + 1, n):
                    if not table[i][j]:
                        for a in self.alphabet:
                            next_i = states.index(self.delta(states[i], a))
                            next_j = states.index(self.delta(states[j], a))
                            if table[next_i][next_j]:
                                table[i][j] = table[j][i] = True
                                changed = True
                                break
        
        # Step 5: Build equivalence classes
        equiv_classes = []
        visited = [False] * n
        
        for i in range(n):
            if not visited[i]:
                equiv_class = [states[i]]
                visited[i] = True
                for j in range(i + 1, n):
                    if not table[i][j]:
                        equiv_class.append(states[j])
                        visited[j] = True
                equiv_classes.append(equiv_class)
        
        # Step 6: Build minimized DFA
        new_states = [tuple(sorted(cls)) for cls in equiv_classes]
        new_start = next(s for s in new_states if self.start in s)
        new_finals = {s for s in new_states if any(q in self.finals for q in s)}
        
        new_trans = {}
        for cls in equiv_classes:
            rep = cls[0]
            new_state = tuple(sorted(cls))
            for a in self.alphabet:
                next_state = self.delta(rep, a)
                for target_cls in equiv_classes:
                    if next_state in target_cls:
                        new_trans[(new_state, a)] = tuple(sorted(target_cls))
                        break
        
        return DFA(set(new_states), self.alphabet, new_trans, new_start, new_finals)

# Example Usage
if __name__ == "__main__":
    dfa = DFA(
        states={'A', 'B', 'C', 'D', 'E'},
        alphabet={'0', '1'},
        transitions={
            ('A', '0'): 'B', ('A', '1'): 'C',
            ('B', '0'): 'A', ('B', '1'): 'D',
            ('C', '0'): 'E', ('C', '1'): 'E',
            ('D', '0'): 'E', ('D', '1'): 'E',
            ('E', '0'): 'E', ('E', '1'): 'E',
        },
        start='A',
        finals={'C', 'E'}
    )
    
    minimized = dfa.minimize()
    print(f"States reduced from {len(dfa.states)} to {len(minimized.states)}")`}</code>
                    </pre>
                </div>

                <div className="mt-4 bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold">⏱️ Complexity Analysis:</h4>
                    <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                        <li><strong>Time Complexity:</strong> O(n² × |Σ|) where n is the number of states and |Σ| is the alphabet size</li>
                        <li><strong>Space Complexity:</strong> O(n²) for the distinguishability table</li>
                        <li><strong>Best Case:</strong> O(n²) - when all states are immediately distinguishable</li>
                        <li><strong>Worst Case:</strong> O(n² × |Σ| × iterations) - when many passes are needed</li>
                        <li><strong>Average Case:</strong> O(n² × |Σ|) - typically converges in few iterations</li>
                    </ul>
                </div>

                <div className="mt-4 bg-red-50 p-4 rounded">
                    <h4 className="font-semibold">⚠️ Common Implementation Mistakes:</h4>
                    <div className="space-y-3 mt-2 text-sm">
                        <div>
                            <p><strong>Mistake #1: Forgetting to remove unreachable states first</strong></p>
                            <p className="text-xs mt-1"><strong>Wrong:</strong> Running the algorithm on all states including unreachable ones.</p>
                            <p className="text-xs"><strong>Correct:</strong> Always perform BFS/DFS from the start state first.</p>
                        </div>
                        <div>
                            <p><strong>Mistake #2: Not iterating until convergence</strong></p>
                            <p className="text-xs mt-1"><strong>Wrong:</strong> Making only one pass through the table.</p>
                            <p className="text-xs"><strong>Correct:</strong> Continue iterating until no new marks are added in a complete pass.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interview Preparation */}
            <section className="content-section">
                <h3>Interview Preparation</h3>

                <div className="space-y-6">
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                        <h4 className="font-semibold text-lg">Interview Question 1: Design a minimal DFA for strings ending in '01'</h4>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-indigo-600">Show Approach</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>How to approach:</strong> States represent the suffix seen so far: q₀ (no relevant suffix), q₁ (ends in 0), q₂ (ends in 01, accepting).</p>
                                <p><strong>Transitions:</strong></p>
                                <ul className="list-disc ml-6">
                                    <li>From q₀: 0→q₁, 1→q₀</li>
                                    <li>From q₁: 0→q₁, 1→q₂</li>
                                    <li>From q₂: 0→q₁, 1→q₀</li>
                                </ul>
                                <p><strong>Verify minimality:</strong> All 3 states are distinguishable (q₀ by ε, q₁ by 1, q₂ by ε).</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4">
                        <h4 className="font-semibold text-lg">Interview Question 2: Prove that minimal DFA is unique</h4>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-indigo-600">Show Approach</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>How to approach:</strong> Use Myhill-Nerode. The equivalence classes of ≡L are uniquely determined by L. Each minimal DFA must have exactly one state per equivalence class, with transitions determined by the equivalence relation.</p>
                                <p><strong>Key insight:</strong> Any two minimal DFAs have a bijection between states preserving structure—hence isomorphic.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* University Exam Practice */}
            <section className="content-section">
                <h3>📝 University Exam Practice</h3>

                <div className="space-y-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h4 className="font-semibold text-lg">Question 1: Short Answer (5 marks)</h4>
                        <p className="mt-2 text-sm">"Define state equivalence in a DFA and explain why the relation is an equivalence relation."</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-blue-600">Show Marking Scheme & Model Answer</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Marking Scheme:</strong></p>
                                <ul className="list-disc ml-6 text-xs">
                                    <li>Definition of state equivalence: 2 marks</li>
                                    <li>Reflexive property: 1 mark</li>
                                    <li>Symmetric property: 1 mark</li>
                                    <li>Transitive property: 1 mark</li>
                                </ul>
                                <p className="mt-2"><strong>Model Answer:</strong></p>
                                <p>Two states p and q are equivalent (p ≡ q) if for all strings w ∈ Σ*, δ̂(p,w) ∈ F ⟺ δ̂(q,w) ∈ F.</p>
                                <p>This is an equivalence relation because:</p>
                                <ul className="list-disc ml-6">
                                    <li><strong>Reflexive:</strong> Every state p is equivalent to itself (p ≡ p)</li>
                                    <li><strong>Symmetric:</strong> If p ≡ q, then q ≡ p</li>
                                    <li><strong>Transitive:</strong> If p ≡ q and q ≡ r, then p ≡ r</li>
                                </ul>
                            </div>
                        </details>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <h4 className="font-semibold text-lg">Question 2: Problem Solving (10 marks)</h4>
                        <p className="mt-2 text-sm">"Minimize the following DFA using the table-filling algorithm. Show all steps of your work."</p>
                        <p className="mt-2 text-sm"><strong>States:</strong> {'{'}A, B, C, D, E{'}'}, <strong>Initial:</strong> A, <strong>Final:</strong> {'{'}C, E{'}'}</p>
                        <p className="text-sm"><strong>Transitions:</strong> δ(A,0)=B, δ(A,1)=C, δ(B,0)=A, δ(B,1)=D, δ(C,0)=E, δ(C,1)=E, δ(D,0)=E, δ(D,1)=E, δ(E,0)=E, δ(E,1)=E</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-green-600">Show Marking Scheme & Complete Solution</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Marking Scheme:</strong></p>
                                <ul className="list-disc ml-6 text-xs">
                                    <li>Initial marking (Final-NonFinal): 2 marks</li>
                                    <li>First pass through table: 3 marks</li>
                                    <li>Second pass (if needed): 2 marks</li>
                                    <li>Correct identification of equivalent states: 2 marks</li>
                                    <li>Correct minimized DFA: 1 mark</li>
                                </ul>
                                <p className="mt-2"><strong>Complete Solution:</strong></p>
                                <p><strong>Initial marking:</strong> Mark (A,C), (A,E), (B,C), (B,E), (D,C), (D,E) - all Final-NonFinal pairs.</p>
                                <p><strong>First pass:</strong></p>
                                <ul className="list-disc ml-6 text-xs">
                                    <li>(A,B): δ(A,0)=B, δ(B,0)=A (unmarked); δ(A,1)=C, δ(B,1)=D. (C,D): C∈F, D∉F → marked. So mark (A,B).</li>
                                    <li>(A,D): δ(A,0)=B, δ(D,0)=E. (B,E) marked. Mark (A,D).</li>
                                    <li>(B,D): δ(B,0)=A, δ(D,0)=E. (A,E) marked. Mark (B,D).</li>
                                    <li>(C,E): δ(C,0)=E, δ(E,0)=E; δ(C,1)=E, δ(E,1)=E. Unmarked!</li>
                                </ul>
                                <p><strong>Result:</strong> C ≡ E. Merge to get 4-state minimized DFA.</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                        <h4 className="font-semibold text-lg">Question 3: Proof (15 marks)</h4>
                        <p className="mt-2 text-sm">"State and prove the Myhill-Nerode theorem. Use it to prove that L = {'{'}aⁿbⁿ : n ≥ 0{'}'} is not regular."</p>
                        <details className="mt-3">
                            <summary className="cursor-pointer font-semibold text-purple-600">Show Marking Scheme & Model Answer</summary>
                            <div className="mt-3 text-sm space-y-2">
                                <p><strong>Marking Scheme:</strong></p>
                                <ul className="list-disc ml-6 text-xs">
                                    <li>Correct statement of theorem: 3 marks</li>
                                    <li>Proof sketch (→ direction): 4 marks</li>
                                    <li>Proof sketch (← direction): 4 marks</li>
                                    <li>Correct application to {'{'}aⁿbⁿ{'}'}: 4 marks</li>
                                </ul>
                                <p className="mt-2"><strong>Model Answer:</strong></p>
                                <p><strong>Theorem:</strong> L is regular ⟺ ≡L has finitely many equivalence classes.</p>
                                <p><strong>Proof (→):</strong> If L is regular, some DFA M recognizes it. States of minimal DFA correspond to equivalence classes of ≡L, so finitely many classes.</p>
                                <p><strong>Proof (←):</strong> If ≡L has k equivalence classes, construct DFA with k states (one per class). Transitions and final states are well-defined.</p>
                                <p><strong>Application:</strong> For L = {'{'}aⁿbⁿ{'}'}, consider S = {'{'}aⁿ : n ≥ 0{'}'}. For i ≠ j, aⁱ and aʲ are distinguished by bⁱ (aⁱbⁱ ∈ L but aʲbⁱ ∉ L). Infinitely many classes → L not regular.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            {/* Common Pitfalls */}
            <section className="content-section">
                <h3>Common Pitfalls & How to Avoid Them</h3>

                <div className="space-y-4">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #1: Confusing state equivalence with state equality</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> Assume equivalent states must be identical or have identical transitions.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> Equivalent states can have different transitions as long as those transitions lead to equivalent states.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Remember: p ≡ q means they behave the same on all suffixes, not that they are the same state.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #2: Forgetting to check all input symbols</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> In the table-filling algorithm, only check one input symbol instead of all.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> States might be equivalent on some symbols but distinguishable on others.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Always check transitions on ALL symbols in the alphabet for each unmarked pair.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #3: Stopping the algorithm too early</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> Make only one pass through the table and declare remaining unmarked pairs equivalent.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> New distinguishable pairs may be discovered in later passes as more pairs get marked.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Continue iterating until a complete pass makes no new marks.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <h4 className="font-semibold">🚫 Pitfall #4: Using Myhill-Nerode incorrectly for non-regularity proofs</h4>
                        <p className="text-sm mt-2"><strong>What students do wrong:</strong> Show some strings are distinguishable, but not infinitely many.</p>
                        <p className="text-sm mt-2"><strong>Why it's wrong:</strong> Finitely many distinguishable strings doesn't prove non-regularity—you need infinitely many equivalence classes.</p>
                        <p className="text-sm mt-2"><strong>✅ How to avoid it:</strong> Find an infinite family of pairwise distinguishable strings (like {'{'}0ⁿ : n ≥ 0{'}'}).</p>
                    </div>
                </div>

                <div className="mt-6 bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold">💡 Exam Tips:</h4>
                    <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                        <li><strong>Table-filling:</strong> Always show all passes, not just the final result</li>
                        <li><strong>Myhill-Nerode proofs:</strong> Clearly identify the infinite set of distinguishable strings</li>
                        <li><strong>Equivalence testing:</strong> Use the product construction systematically</li>
                        <li><strong>Minimization:</strong> Remember to remove unreachable states first</li>
                        <li><strong>Time management:</strong> For large DFAs, look for patterns rather than checking every pair</li>
                    </ul>
                </div>
            </section>

            {/* Quick Reference */}
            <section className="content-section">
                <h3>📄 Quick Reference Cheat Sheet</h3>
                <p>Save this section for quick review! Here's everything you need to remember at a glance.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white border p-4 rounded">
                        <h4 className="font-semibold text-blue-600">Key Definitions</h4>
                        <ul className="text-sm space-y-1 mt-2">
                            <li><strong>State Equivalence:</strong> p ≡ q ⟺ ∀w ∈ Σ*, δ̂(p,w) ∈ F ⟺ δ̂(q,w) ∈ F</li>
                            <li><strong>k-Equivalence:</strong> p ≡ₖ q ⟺ equivalent on strings of length ≤ k</li>
                            <li><strong>Myhill-Nerode:</strong> L regular ⟺ ≡L has finite index</li>
                        </ul>
                    </div>

                    <div className="bg-white border p-4 rounded">
                        <h4 className="font-semibold text-green-600">Table-Filling Algorithm</h4>
                        <ol className="text-sm space-y-1 mt-2 list-decimal ml-4">
                            <li>Mark all (p,q) where p ∈ F, q ∉ F</li>
                            <li>For unmarked (p,q), check δ(p,a), δ(q,a) for all a</li>
                            <li>If any pair is marked, mark (p,q)</li>
                            <li>Repeat until no changes</li>
                            <li>Unmarked pairs are equivalent</li>
                        </ol>
                    </div>

                    <div className="bg-white border p-4 rounded">
                        <h4 className="font-semibold text-purple-600">Complexity</h4>
                        <ul className="text-sm space-y-1 mt-2">
                            <li><strong>Time:</strong> O(n² × |Σ|)</li>
                            <li><strong>Space:</strong> O(n²)</li>
                            <li><strong>Hopcroft's:</strong> O(n log n)</li>
                        </ul>
                    </div>

                    <div className="bg-white border p-4 rounded">
                        <h4 className="font-semibold text-orange-600">Common Exam Questions</h4>
                        <ul className="text-sm space-y-1 mt-2">
                            <li>✓ Minimize given DFA</li>
                            <li>✓ Prove language non-regular</li>
                            <li>✓ Test state equivalence</li>
                            <li>✓ Find minimal DFA for pattern</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Advanced Topics */}
            <section className="content-section">
                <h3>🚀 Go Deeper: Advanced Topics & Resources</h3>

                <h4 className="mt-4 font-semibold">Advanced Concepts</h4>
                <div className="space-y-4 mt-4">
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                        <h4 className="font-semibold">🔬 Advanced Topic 1: Hopcroft's Algorithm</h4>
                        <p className="text-sm mt-2">Hopcroft's algorithm achieves O(n log n) time complexity by using a partition refinement approach with sophisticated data structures. Instead of checking all pairs, it maintains a partition of states and refines it based on splitting blocks. This is the algorithm used in production compiler tools.</p>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                        <h4 className="font-semibold">🔬 Advanced Topic 2: Brzozowski's Algorithm</h4>
                        <p className="text-sm mt-2">Brzozowski's algorithm uses a remarkably simple approach: reverse the DFA, determinize (subset construction), reverse again, and determinize once more. The result is the minimal DFA. While elegant, this can have exponential worst-case complexity.</p>
                    </div>

                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
                        <h4 className="font-semibold">🔬 Advanced Topic 3: NFA Minimization</h4>
                        <p className="text-sm mt-2">Unlike DFAs, NFAs do not have unique minimal forms. Finding a minimal NFA for a regular language is PSPACE-complete (much harder than DFA minimization). This is why practical tools typically convert to DFA first, then minimize.</p>
                    </div>
                </div>

                <h4 className="mt-6 font-semibold">📚 Recommended Resources</h4>
                <div className="mt-4 space-y-3">
                    <div>
                        <p className="font-semibold text-sm">Books:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                            <li>"Introduction to the Theory of Computation" by Michael Sipser - Chapter 1.4 (The standard reference)</li>
                            <li>"Automata Theory, Languages, and Computation" by Hopcroft, Motwani, Ullman - Chapter 4</li>
                            <li>"Introduction to Automata Theory, Languages, and Computation" by Hopcroft & Ullman</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Online Resources:</p>
                        <ul className="list-disc ml-6 text-sm space-y-1">
                            <li>JFLAP (jflap.org) - Interactive DFA minimization tool</li>
                            <li>Automata Tutor - Practice problems with instant feedback</li>
                            <li>CS Stack Exchange - Theory of Computation Q&A</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Module2_6;
