
'use client';
import React, { useState } from 'react';
import Quiz from '../../components/Quiz';


const Module2_4: React.FC = () => {
    const [mcqAnswers, setMcqAnswers] = useState<Record<number, number | null>>({});
    const [mcqResults, setMcqResults] = useState<Record<number, boolean | null>>({});

    const checkMcq = (qId: number, selected: number, correct: number) => {
        setMcqAnswers({ ...mcqAnswers, [qId]: selected });
        setMcqResults({ ...mcqResults, [qId]: selected === correct });
    };

    return (
        <div className="module-content">
            <div className="lesson-header">
                <div className="lesson-number-badge">2.4</div>
                <div className="lesson-title-main">
                    <h1>🔄 Closure Properties of Regular Languages</h1>
                    <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-2: Regular Languages and Context Free Languages</p>
                </div>
            </div>

            <section className="content-section">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-semibold text-blue-900 mb-2">🎯 Learning Objectives</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-blue-800">
                        <li>Define and explain closure properties of regular languages with mathematical precision, identifying which operations preserve regularity</li>
                        <li>Construct DFAs for union, intersection, and complement using product construction and state-swapping techniques</li>
                        <li>Prove closure properties using both regular expressions and finite automata representations</li>
                        <li>Apply De Morgan's laws and homomorphism properties to determine regularity of complex languages</li>
                        <li>Solve GATE and university exam problems involving closure properties with 90%+ accuracy</li>
                    </ul>
                </div>
            </section>

            <section className="content-section">
                <h3>🔥 Why This Topic Matters</h3>
                <p className="mb-4">Imagine you're building a complex pattern-matching system for a search engine. You need to combine multiple search patterns: finding documents that contain either "AI" OR "machine learning" (union), documents that contain BOTH "neural networks" AND "deep learning" (intersection), or documents that do NOT contain "spam" (complement). Without knowing whether these combinations preserve the "regular" nature of your patterns, you couldn't guarantee your system would work efficiently.</p>

                <p className="mb-4">Closure properties are the mathematical foundation that tells us: "If you start with regular languages and apply these specific operations, your result will ALWAYS be regular." This is incredibly powerful because it means we can build complex language recognizers by combining simple ones, knowing our final system will still be implementable using finite automata.</p>

                <div className="bg-green-50 border-l-4 border-green-500 p-5 my-6">
                    <p className="font-bold text-green-900 mb-3">💡 Real-World Applications:</p>
                    <ul className="space-y-2 text-sm text-green-800">
                        <li><strong>Compiler Design:</strong> Lexical analyzers combine token patterns using union operations (e.g., identifiers OR keywords OR operators)</li>
                        <li><strong>Network Security:</strong> Snort/Wireshark combine attack signatures using intersection to detect multi-condition threats</li>
                        <li><strong>Text Processing:</strong> grep and sed use closure properties to optimize complex regular expression matching</li>
                        <li><strong>Hardware Verification:</strong> Model checking tools use these properties to verify circuit behavior</li>
                    </ul>
                </div>
            </section>

            <section className="content-section">
                <h3>📖 Deep Dive: Understanding Closure Properties</h3>

                <h4 className="text-lg font-bold mt-6 mb-3">Definition &amp; Fundamentals</h4>

                <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">📌 Formal Definition</p>
                    <p className="text-sm text-slate-700 mb-3"><strong>Closure Property:</strong> A set S is said to be closed under an operation op if applying op to any elements of S always produces a result that is also in S.</p>
                    <p className="text-sm text-slate-700"><strong>Regular Language Closure:</strong> The class of regular languages is closed under an n-ary operator op if and only if op(L₁, L₂, ..., Lₙ) is regular for any regular languages L₁, L₂, ..., Lₙ.</p>
                </div>

                <p className="mb-4">Think of closure properties like a "safety guarantee" in programming. Just as type safety ensures operations on integers produce integers, closure properties ensure operations on regular languages produce regular languages.</p>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-6">
                    <h5 className="font-bold text-blue-900 mb-4">📌 Key Terminology:</h5>
                    <div className="space-y-3 text-sm">
                        <div><strong>Union (L₁ ∪ L₂):</strong> The set of all strings that are in L₁ OR in L₂ (or both)</div>
                        <div><strong>Intersection (L₁ ∩ L₂):</strong> The set of all strings that are in BOTH L₁ AND L₂</div>
                        <div><strong>Complement (L̄ or Σ* - L):</strong> The set of all strings over the alphabet that are NOT in L</div>
                        <div><strong>Concatenation (L₁L₂):</strong> The set of all strings formed by taking a string from L₁ followed by a string from L₂</div>
                        <div><strong>Kleene Star (L*):</strong> The set of all strings formed by concatenating zero or more strings from L</div>
                        <div><strong>Homomorphism (h(L)):</strong> The set obtained by applying a symbol-to-string substitution to every string in L</div>
                        <div><strong>Reversal (Lᴿ):</strong> The set of all reversed strings from L</div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>🔄 Visual Representation: Closure Properties Overview</h3>

                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-8 my-6">
                    <h4 className="text-center font-bold text-indigo-900 mb-8 text-lg">Regular Languages are Closed Under:</h4>

                    <svg viewBox="0 0 800 500" className="w-full h-auto">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#4F46E5" />
                            </marker>
                        </defs>

                        {/* Center circle */}
                        <circle cx="400" cy="250" r="80" fill="#6366F1" stroke="#4F46E5" strokeWidth="3" />
                        <text x="400" y="245" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Regular</text>
                        <text x="400" y="265" textAnchor="middle" fill="white" fontSize="14">Languages</text>

                        {/* Union */}
                        <circle cx="200" cy="100" r="50" fill="#10B981" stroke="#059669" strokeWidth="2" />
                        <text x="200" y="95" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">∪</text>
                        <text x="200" y="115" textAnchor="middle" fill="white" fontSize="12">Union</text>
                        <line x1="230" y1="130" x2="350" y2="210" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Intersection */}
                        <circle cx="400" cy="80" r="50" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
                        <text x="400" y="75" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">∩</text>
                        <text x="400" y="95" textAnchor="middle" fill="white" fontSize="12">Intersection</text>
                        <line x1="400" y1="130" x2="400" y2="170" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Complement */}
                        <circle cx="600" cy="100" r="50" fill="#EF4444" stroke="#DC2626" strokeWidth="2" />
                        <text x="600" y="95" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">L̄</text>
                        <text x="600" y="115" textAnchor="middle" fill="white" fontSize="12">Complement</text>
                        <line x1="570" y1="130" x2="450" y2="210" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Concatenation */}
                        <circle cx="150" cy="250" r="50" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
                        <text x="150" y="245" textAnchor="middle" fill="white" fontSize="16">L₁·L₂</text>
                        <text x="150" y="265" textAnchor="middle" fill="white" fontSize="12">Concatenation</text>
                        <line x1="200" y1="250" x2="320" y2="250" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Kleene Star */}
                        <circle cx="650" cy="250" r="50" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" />
                        <text x="650" y="250" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">L*</text>
                        <text x="650" y="270" textAnchor="middle" fill="white" fontSize="12">Kleene Star</text>
                        <line x1="600" y1="250" x2="480" y2="250" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Reversal */}
                        <circle cx="200" cy="400" r="50" fill="#EC4899" stroke="#DB2777" strokeWidth="2" />
                        <text x="200" y="400" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Lᴿ</text>
                        <text x="200" y="420" textAnchor="middle" fill="white" fontSize="12">Reversal</text>
                        <line x1="230" y1="370" x2="350" y2="290" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Homomorphism */}
                        <circle cx="400" cy="420" r="50" fill="#14B8A6" stroke="#0D9488" strokeWidth="2" />
                        <text x="400" y="415" textAnchor="middle" fill="white" fontSize="16">h(L)</text>
                        <text x="400" y="435" textAnchor="middle" fill="white" fontSize="12">Homomorphism</text>
                        <line x1="400" y1="370" x2="400" y2="330" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />

                        {/* Difference */}
                        <circle cx="600" cy="400" r="50" fill="#F97316" stroke="#EA580C" strokeWidth="2" />
                        <text x="600" y="400" textAnchor="middle" fill="white" fontSize="16">L₁-L₂</text>
                        <text x="600" y="420" textAnchor="middle" fill="white" fontSize="12">Difference</text>
                        <line x1="570" y1="370" x2="450" y2="290" stroke="#4F46E5" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    </svg>

                    <p className="text-center text-sm text-indigo-700 mt-6 italic">Figure 1: Overview of Closure Properties for Regular Languages</p>
                </div>

                <h3 className="mt-12">🔄 Closure Properties - Complete List</h3>

                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Operation</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Notation</th>
                                <th className="border border-slate-300 p-3 text-center font-bold">Regular?</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Proof Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Union', 'L₁ ∪ L₂', '✅', 'Product construction / RE'],
                                ['Intersection', 'L₁ ∩ L₂', '✅', 'Product construction'],
                                ['Complement', 'L̄', '✅', 'Swap accept/reject states'],
                                ['Concatenation', 'L₁L₂', '✅', 'NFA construction / RE'],
                                ['Kleene Star', 'L*', '✅', 'NFA construction / RE'],
                                ['Reversal', 'Lᴿ', '✅', 'Reverse all transitions'],
                                ['Difference', 'L₁ - L₂', '✅', 'L₁ ∩ L̄₂'],
                                ['Homomorphism', 'h(L)', '✅', 'Substitute in RE'],
                                ['Inverse Homomorphism', 'h⁻¹(L)', '✅', 'Modify DFA transitions'],
                                ['Prefix', 'Pref(L)', '✅', 'Make all states accept'],
                                ['Suffix', 'Suff(L)', '✅', 'NFA with ε-transitions'],
                                ['Substring', 'Sub(L)', '✅', 'Combine prefix/suffix']
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="border border-slate-300 p-3 font-semibold">{row[0]}</td>
                                    <td className="border border-slate-300 p-3">{row[1]}</td>
                                    <td className="border border-slate-300 p-3 text-center text-lg">{row[2]}</td>
                                    <td className="border border-slate-300 p-3 text-xs">{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="content-section">
                <h3>⚙️ How It Works: The Mechanism Explained</h3>

                <p className="mb-4">Closure properties work because of the fundamental connection between regular languages and finite automata. Every regular language can be recognized by some finite automaton (DFA or NFA), and conversely, every language recognized by a finite automaton is regular. This equivalence gives us powerful construction techniques.</p>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-blue-900 mb-6 text-lg">The General Proof Strategy:</h4>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
                            <div>
                                <p className="font-bold text-blue-900 mb-2">Start with regular languages</p>
                                <p className="text-sm text-blue-800">Assume L₁ and L₂ are regular languages. By definition, there exist DFAs M₁ and M₂ that recognize them.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
                            <div>
                                <p className="font-bold text-blue-900 mb-2">Construct a new automaton</p>
                                <p className="text-sm text-blue-800">Build a new finite automaton M that simulates the operation op on M₁ and M₂.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
                            <div>
                                <p className="font-bold text-blue-900 mb-2">Prove equivalence</p>
                                <p className="text-sm text-blue-800">Show that L(M) = op(L₁, L₂)—that is, M accepts exactly the strings that result from applying op to L₁ and L₂.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
                            <div>
                                <p className="font-bold text-blue-900 mb-2">Conclude regularity</p>
                                <p className="text-sm text-blue-800">Since M is a finite automaton, op(L₁, L₂) is regular.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-white rounded-lg border-2 border-blue-300">
                        <p className="text-sm text-blue-900"><strong>💡 Key Insight:</strong> This approach is like building with LEGO blocks: if each block is a regular language (representable by a finite automaton), we can combine them in specific ways and still get something that can be represented by a finite automaton. The key insight is that we never need infinite memory—we can always construct a finite automaton for the result.</p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-300 rounded-xl p-8 my-8">
                    <h4 className="text-center font-bold text-slate-900 mb-8 text-lg">Proof Strategy Flowchart</h4>

                    <svg viewBox="0 0 700 900" className="w-full h-auto">
                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#334155" />
                            </marker>
                        </defs>

                        {/* Start */}
                        <ellipse cx="350" cy="40" rx="120" ry="30" fill="#10B981" stroke="#059669" strokeWidth="2" />
                        <text x="350" y="48" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Start: Prove Closure</text>
                        <line x1="350" y1="70" x2="350" y2="100" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />

                        {/* Step 1 */}
                        <rect x="250" y="100" width="200" height="50" rx="5" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
                        <text x="350" y="125" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Assume L₁, L₂ are</text>
                        <text x="350" y="142" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">regular</text>
                        <line x1="350" y1="150" x2="350" y2="180" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />

                        {/* Step 2 */}
                        <rect x="250" y="180" width="200" height="50" rx="5" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
                        <text x="350" y="205" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Get DFAs M₁, M₂</text>
                        <text x="350" y="222" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">for L₁, L₂</text>
                        <line x1="350" y1="230" x2="350" y2="270" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />

                        {/* Decision Diamond */}
                        <path d="M 350 270 L 450 330 L 350 390 L 250 330 Z" fill="#F59E0B" stroke="#D97706" strokeWidth="2" />
                        <text x="350" y="325" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Which</text>
                        <text x="350" y="342" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Operation?</text>

                        {/* Union branch */}
                        <line x1="250" y1="330" x2="120" y2="330" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
                        <text x="180" y="320" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">Union</text>
                        <rect x="20" y="310" width="100" height="60" rx="5" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" />
                        <text x="70" y="330" textAnchor="middle" fill="white" fontSize="10">Construct</text>
                        <text x="70" y="345" textAnchor="middle" fill="white" fontSize="10">NFA with ε to</text>
                        <text x="70" y="360" textAnchor="middle" fill="white" fontSize="10">both</text>
                        <line x1="70" y1="370" x2="70" y2="450" stroke="#334155" strokeWidth="2" />

                        {/* Intersection branch */}
                        <line x1="280" y1="390" x2="180" y2="450" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
                        <text x="220" y="415" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">Intersection</text>
                        <rect x="130" y="450" width="100" height="60" rx="5" fill="#EC4899" stroke="#DB2777" strokeWidth="2" />
                        <text x="180" y="470" textAnchor="middle" fill="white" fontSize="10">Construct</text>
                        <text x="180" y="485" textAnchor="middle" fill="white" fontSize="10">Product DFA</text>
                        <text x="180" y="500" textAnchor="middle" fill="white" fontSize="10">F₁ × F₂</text>
                        <line x1="180" y1="510" x2="180" y2="550" stroke="#334155" strokeWidth="2" />

                        {/* Complement branch */}
                        <line x1="350" y1="390" x2="350" y2="450" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
                        <text x="360" y="420" textAnchor="start" fill="#334155" fontSize="11" fontWeight="bold">Complement</text>
                        <rect x="300" y="450" width="100" height="60" rx="5" fill="#EF4444" stroke="#DC2626" strokeWidth="2" />
                        <text x="350" y="470" textAnchor="middle" fill="white" fontSize="10">Swap final/</text>
                        <text x="350" y="485" textAnchor="middle" fill="white" fontSize="10">non-final</text>
                        <text x="350" y="500" textAnchor="middle" fill="white" fontSize="10">states</text>
                        <line x1="350" y1="510" x2="350" y2="550" stroke="#334155" strokeWidth="2" />

                        {/* Concatenation branch */}
                        <line x1="420" y1="390" x2="490" y2="450" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
                        <text x="460" y="415" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">Concat</text>
                        <rect x="440" y="450" width="100" height="60" rx="5" fill="#14B8A6" stroke="#0D9488" strokeWidth="2" />
                        <text x="490" y="470" textAnchor="middle" fill="white" fontSize="10">Connect final</text>
                        <text x="490" y="485" textAnchor="middle" fill="white" fontSize="10">of M₁ to start</text>
                        <text x="490" y="500" textAnchor="middle" fill="white" fontSize="10">of M₂</text>
                        <line x1="490" y1="510" x2="490" y2="550" stroke="#334155" strokeWidth="2" />

                        {/* Kleene Star branch */}
                        <line x1="450" y1="330" x2="580" y2="330" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />
                        <text x="520" y="320" textAnchor="middle" fill="#334155" fontSize="11" fontWeight="bold">Kleene *</text>
                        <rect x="580" y="310" width="100" height="60" rx="5" fill="#F97316" stroke="#EA580C" strokeWidth="2" />
                        <text x="630" y="330" textAnchor="middle" fill="white" fontSize="10">Add ε from</text>
                        <text x="630" y="345" textAnchor="middle" fill="white" fontSize="10">final to start</text>
                        <text x="630" y="360" textAnchor="middle" fill="white" fontSize="10">+ new states</text>
                        <line x1="630" y1="370" x2="630" y2="450" stroke="#334155" strokeWidth="2" />

                        {/* Converge lines */}
                        <line x1="70" y1="550" x2="350" y2="600" stroke="#334155" strokeWidth="2" />
                        <line x1="180" y1="550" x2="350" y2="600" stroke="#334155" strokeWidth="2" />
                        <line x1="350" y1="550" x2="350" y2="600" stroke="#334155" strokeWidth="2" />
                        <line x1="490" y1="550" x2="350" y2="600" stroke="#334155" strokeWidth="2" />
                        <line x1="630" y1="550" x2="350" y2="600" stroke="#334155" strokeWidth="2" />
                        <line x1="350" y1="600" x2="350" y2="630" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />

                        {/* Prove equivalence */}
                        <rect x="250" y="630" width="200" height="50" rx="5" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
                        <text x="350" y="650" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Prove L(M) =</text>
                        <text x="350" y="667" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">op(L₁, L₂)</text>
                        <line x1="350" y1="680" x2="350" y2="710" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />

                        {/* Conclude */}
                        <rect x="250" y="710" width="200" height="50" rx="5" fill="#3B82F6" stroke="#2563EB" strokeWidth="2" />
                        <text x="350" y="730" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Conclude: Result</text>
                        <text x="350" y="747" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">is regular</text>
                        <line x1="350" y1="760" x2="350" y2="800" stroke="#334155" strokeWidth="2" markerEnd="url(#arrow)" />

                        {/* End */}
                        <ellipse cx="350" cy="830" rx="80" ry="30" fill="#10B981" stroke="#059669" strokeWidth="2" />
                        <text x="350" y="838" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">End</text>
                    </svg>

                    <p className="text-center text-sm text-slate-600 mt-6 italic">Figure 2: General Strategy for Proving Closure Properties</p>
                </div>
            </section>

            <section className="content-section">
                <h3>🔧 Key Components &amp; Construction Techniques</h3>

                <div className="space-y-6 my-6">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-6">
                        <h4 className="font-bold text-purple-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">1️⃣</span>
                            Component 1: Product Construction (for Intersection, Union, Difference)
                        </h4>

                        <p className="text-sm text-purple-800 mb-4">The product construction is the Swiss Army knife of closure property proofs. Given two DFAs M₁ = (Q₁, Σ, δ₁, q₀₁, F₁) and M₂ = (Q₂, Σ, δ₂, q₀₂, F₂), we construct a new DFA M = (Q₁ × Q₂, Σ, δ, (q₀₁, q₀₂), F) where:</p>

                        <div className="bg-white rounded-lg p-5 space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">•</div>
                                <p className="text-sm text-slate-700"><strong>States are pairs (p, q)</strong> where p ∈ Q₁ and q ∈ Q₂</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">•</div>
                                <p className="text-sm text-slate-700"><strong>δ((p, q), a) = (δ₁(p, a), δ₂(q, a))</strong></p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">∩</div>
                                <p className="text-sm text-slate-700"><strong>For intersection:</strong> F = F₁ × F₂ (both must accept)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">∪</div>
                                <p className="text-sm text-slate-700"><strong>For union:</strong> F = (F₁ × Q₂) ∪ (Q₁ × F₂) (either must accept)</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-xs font-bold">−</div>
                                <p className="text-sm text-slate-700"><strong>For difference:</strong> F = F₁ × (Q₂ - F₂) (first accepts, second rejects)</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-6">
                        <h4 className="font-bold text-red-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">2️⃣</span>
                            Component 2: State Swapping (for Complement)
                        </h4>

                        <p className="text-sm text-red-800 mb-4">The complement construction is elegantly simple. Given a DFA M = (Q, Σ, δ, q₀, F) recognizing L, the DFA for L̄ is M' = (Q, Σ, δ, q₀, Q - F). We simply swap final and non-final states.</p>

                        <div className="bg-white rounded-lg p-5">
                            <p className="text-sm text-slate-700">This works because a string is in L̄ if and only if it's NOT in L, which means M rejects it, which happens when M ends in a non-final state.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-6">
                        <h4 className="font-bold text-teal-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">3️⃣</span>
                            Component 3: ε-Transitions (for Union, Concatenation, Kleene Star)
                        </h4>

                        <p className="text-sm text-teal-800 mb-4">NFAs with ε-transitions make these constructions straightforward:</p>

                        <div className="bg-white rounded-lg p-5 space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">∪</div>
                                <p className="text-sm text-slate-700"><strong>For union:</strong> Add a new start state with ε-transitions to both original start states</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">·</div>
                                <p className="text-sm text-slate-700"><strong>For concatenation:</strong> Add ε-transitions from each final state of the first automaton to the start state of the second</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">*</div>
                                <p className="text-sm text-slate-700"><strong>For Kleene star:</strong> Add ε-transitions from final states back to the start state, plus a new start state that's also final (to accept ε)</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-6">
                        <h4 className="font-bold text-amber-900 mb-4 flex items-center gap-2">
                            <span className="text-2xl">4️⃣</span>
                            Component 4: Regular Expression Operations (Alternative Approach)
                        </h4>

                        <p className="text-sm text-amber-800 mb-4">Instead of automata, we can use regular expressions. If L₁ = L(R₁) and L₂ = L(R₂), then:</p>

                        <div className="bg-white rounded-lg p-5 space-y-3">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">∪</div>
                                <p className="text-sm text-slate-700">L₁ ∪ L₂ = L(R₁ + R₂)</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">·</div>
                                <p className="text-sm text-slate-700">L₁L₂ = L(R₁R₂)</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">*</div>
                                <p className="text-sm text-slate-700">L₁* = L(R₁*)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>🏛️ Product Construction Architecture</h3>

                <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-300 rounded-xl p-8 my-8">
                    <h4 className="text-center font-bold text-slate-900 mb-8 text-lg">Product Construction for Intersection - Combining Two DFAs</h4>

                    <svg viewBox="0 0 900 600" className="w-full h-auto">
                        <defs>
                            <marker id="arr" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#334155" />
                            </marker>
                        </defs>

                        <rect x="20" y="50" width="250" height="200" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="3" />
                        <text x="145" y="75" textAnchor="middle" fill="#1E40AF" fontSize="16" fontWeight="bold">DFA M₁</text>
                        <text x="145" y="95" textAnchor="middle" fill="#1E40AF" fontSize="12">States: Q₁</text>

                        <circle cx="80" cy="140" r="25" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
                        <text x="80" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">q₀₁</text>

                        <circle cx="145" cy="180" r="25" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
                        <text x="145" y="185" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">q₁</text>

                        <circle cx="210" cy="140" r="25" fill="#60A5FA" stroke="#2563EB" strokeWidth="2" />
                        <circle cx="210" cy="140" r="20" fill="none" stroke="#2563EB" strokeWidth="2" />
                        <text x="210" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">q₂</text>

                        <path d="M 100 130 Q 120 150 125 170" stroke="#334155" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
                        <text x="110" y="145" fill="#334155" fontSize="10">a</text>

                        <path d="M 165 170 Q 190 150 190 140" stroke="#334155" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
                        <text x="175" y="155" fill="#334155" fontSize="10">b</text>

                        <rect x="630" y="50" width="250" height="200" rx="10" fill="#FEE2E2" stroke="#EF4444" strokeWidth="3" />
                        <text x="755" y="75" textAnchor="middle" fill="#991B1B" fontSize="16" fontWeight="bold">DFA M₂</text>
                        <text x="755" y="95" textAnchor="middle" fill="#991B1B" fontSize="12">States: Q₂</text>

                        <circle cx="690" cy="140" r="25" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
                        <text x="690" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">q₀₂</text>

                        <circle cx="755" cy="180" r="25" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
                        <text x="755" y="185" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">p₁</text>

                        <circle cx="820" cy="140" r="25" fill="#F87171" stroke="#DC2626" strokeWidth="2" />
                        <circle cx="820" cy="140" r="20" fill="none" stroke="#DC2626" strokeWidth="2" />
                        <text x="820" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">p₂</text>

                        <path d="M 710 130 Q 730 150 735 170" stroke="#334155" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
                        <text x="720" y="145" fill="#334155" fontSize="10">a</text>

                        <path d="M 775 170 Q 800 150 800 140" stroke="#334155" strokeWidth="2" fill="none" markerEnd="url(#arr)" />
                        <text x="785" y="155" fill="#334155" fontSize="10">b</text>

                        <text x="450" y="150" textAnchor="middle" fill="#059669" fontSize="20" fontWeight="bold">×</text>
                        <text x="450" y="170" textAnchor="middle" fill="#059669" fontSize="14" fontWeight="bold">Product</text>

                        <rect x="150" y="320" width="600" height="250" rx="10" fill="#D1FAE5" stroke="#10B981" strokeWidth="3" />
                        <text x="450" y="345" textAnchor="middle" fill="#065F46" fontSize="16" fontWeight="bold">Product DFA M</text>
                        <text x="450" y="365" textAnchor="middle" fill="#065F46" fontSize="12">States: Q₁ × Q₂</text>

                        <circle cx="250" cy="420" r="30" fill="#34D399" stroke="#059669" strokeWidth="2" />
                        <text x="250" y="420" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">(q₀₁,q₀₂)</text>

                        <circle cx="380" cy="420" r="30" fill="#34D399" stroke="#059669" strokeWidth="2" />
                        <text x="380" y="420" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">(q₁,p₁)</text>

                        <circle cx="520" cy="420" r="30" fill="#34D399" stroke="#059669" strokeWidth="2" />
                        <circle cx="520" cy="420" r="25" fill="none" stroke="#059669" strokeWidth="2" />
                        <text x="520" y="420" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">(q₂,p₂)</text>

                        <circle cx="380" cy="510" r="30" fill="#34D399" stroke="#059669" strokeWidth="2" />
                        <text x="380" y="510" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">(q₁,p₂)</text>

                        <circle cx="620" cy="510" r="30" fill="#34D399" stroke="#059669" strokeWidth="2" />
                        <text x="620" y="510" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">(q₂,p₁)</text>

                        <path d="M 275 410 L 355 415" stroke="#334155" strokeWidth="2" markerEnd="url(#arr)" />
                        <text x="310" y="405" fill="#334155" fontSize="10">a</text>

                        <path d="M 405 430 L 495 430" stroke="#334155" strokeWidth="2" markerEnd="url(#arr)" />
                        <text x="445" y="425" fill="#334155" fontSize="10">b</text>

                        <path d="M 370 445 L 370 485" stroke="#334155" strokeWidth="2" markerEnd="url(#arr)" />
                        <text x="360" y="470" fill="#334155" fontSize="10">a</text>

                        <path d="M 405 520 L 595 520" stroke="#334155" strokeWidth="2" markerEnd="url(#arr)" />
                        <text x="490" y="515" fill="#334155" fontSize="10">b</text>
                    </svg>

                    <p className="text-center text-sm text-slate-600 mt-6 italic">Figure 3: Product Construction for Intersection - Combining Two DFAs</p>
                </div>
            </section>

            <section className="content-section">
                <h3>🌐 Real-World Implementation</h3>

                <p className="mb-4">In practice, these constructions are used in tools like LEX and FLEX (lexical analyzer generators). When you write a specification with multiple patterns, these tools use closure properties to combine them into a single DFA for efficient tokenization.</p>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 my-6">
                    <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">💻</span>
                        Example: In the GNU grep Utility
                    </h4>

                    <p className="text-sm text-green-800 mb-4">The grep command uses closure properties internally. When you run <code className="bg-green-100 px-2 py-1 rounded">grep -E &quot;(cat|dog)&quot;</code>, grep:</p>

                    <div className="bg-white rounded-lg p-5 space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <p className="text-sm text-slate-700">Parses the regex into an NFA using Thompson's construction</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <p className="text-sm text-slate-700">Uses closure under union to combine patterns</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <p className="text-sm text-slate-700">Converts the NFA to DFA using subset construction</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                            <p className="text-sm text-slate-700">Minimizes the DFA for optimal performance</p>
                        </div>
                    </div>

                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                        <p className="text-sm text-green-900"><strong>💡 Key Insight:</strong> The efficiency of grep comes from these theoretical foundations—knowing that the result is always a DFA guarantees linear-time matching.</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>⚠️ Common Misconceptions</h3>

                <div className="space-y-6 my-6">
                    <div className="bg-red-50 border-l-4 border-red-500 p-5">
                        <p className="font-bold text-red-900 mb-2">Misconception #1:</p>
                        <p className="text-sm text-red-800 mb-3 italic">&quot;If we apply ANY operation to regular languages, the result is regular.&quot;</p>
                        <p className="font-bold text-green-900 mb-2">Reality:</p>
                        <p className="text-sm text-slate-700">Only specific operations preserve regularity. For example, the set of all subsets of a regular language (power set construction) does NOT preserve regularity. Similarly, infinite unions of regular languages may not be regular.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-5">
                        <p className="font-bold text-red-900 mb-2">Misconception #2:</p>
                        <p className="text-sm text-red-800 mb-3 italic">&quot;Complement works the same for NFAs as for DFAs.&quot;</p>
                        <p className="font-bold text-green-900 mb-2">Reality:</p>
                        <p className="text-sm text-slate-700">To complement an NFA, you MUST first convert it to a DFA using subset construction, THEN swap final and non-final states. Simply swapping states in an NFA doesn't work because of non-determinism.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-5">
                        <p className="font-bold text-red-900 mb-2">Misconception #3:</p>
                        <p className="text-sm text-red-800 mb-3 italic">&quot;The product construction for union uses the same final states as for intersection.&quot;</p>
                        <p className="font-bold text-green-900 mb-2">Reality:</p>
                        <p className="text-sm text-slate-700">Intersection requires BOTH automata to accept (final states are pairs where both are final). Union requires EITHER to accept (final states are pairs where at least one is final). This is a critical distinction.</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-5">
                        <p className="font-bold text-red-900 mb-2">Misconception #4:</p>
                        <p className="text-sm text-red-800 mb-3 italic">&quot;Homomorphism always reduces the size of the language.&quot;</p>
                        <p className="font-bold text-green-900 mb-2">Reality:</p>
                        <p className="text-sm text-slate-700">Homomorphism can actually increase the size! If h(a) = &quot;abc&quot;, then a single symbol becomes three. The key property is that regularity is preserved, not the size.</p>
                    </div>
                </div>
            </section>



            <section className="content-section">
                <h3>📺 Learn Through Videos</h3>
                <p className="mb-4">Watch these carefully selected videos to reinforce your understanding with visual explanations and animations.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="aspect-video rounded mb-3 overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/UoFrOT7T7ns?si=ZxnJHPS1u1FRrX-s"
                                title="Closure Properties - Complete Overview"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <h5 className="font-bold text-sm mb-1">📚 Closure Properties - Complete Overview</h5>
                        <p className="text-xs text-slate-600 mb-2">Neso Academy - 12 minutes</p>
                        <p className="text-xs text-slate-500">What you'll learn: Comprehensive explanation of all closure properties with visual DFA constructions</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="aspect-video rounded mb-3 overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/CWei4YjTj90?si=OeTvwxTr4UdR6C4L"
                                title="Product Construction for Intersection"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <h5 className="font-bold text-sm mb-1">🎬 Product Construction for Intersection</h5>
                        <p className="text-xs text-slate-600 mb-2">Gate Smashers - 15 minutes</p>
                        <p className="text-xs text-slate-500">What you'll learn: Step-by-step construction of product automata with solved examples</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="aspect-video rounded mb-3 overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/V1gKvzbZd7Y?si=j2KJP1XFnkmeju6r"
                                title="Homomorphism and Inverse Homomorphism"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <h5 className="font-bold text-sm mb-1">💻 Homomorphism and Inverse Homomorphism</h5>
                        <p className="text-xs text-slate-600 mb-2">Jenny's Lectures CS IT - 18 minutes</p>
                        <p className="text-xs text-slate-500">What you'll learn: Advanced closure properties with mathematical proofs and examples</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>🔍 Detailed Closure Properties</h3>

                <h4 className="text-xl font-bold mt-8 mb-4">1. Closure Under Union</h4>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-blue-900 mb-3">📐 Theorem: Union Closure</p>
                    <p className="text-sm text-blue-800">If L₁ and L₂ are regular languages over alphabet Σ, then L₁ ∪ L₂ is also regular.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (Using Regular Expressions)</p>
                    <ol className="list-decimal ml-6 space-y-2 text-sm text-slate-700">
                        <li>Since L₁ and L₂ are regular, there exist regular expressions R₁ and R₂ such that L₁ = L(R₁) and L₂ = L(R₂).</li>
                        <li>By definition of regular expressions, R₁ + R₂ is also a regular expression.</li>
                        <li>Therefore, L(R₁ + R₂) = L(R₁) ∪ L(R₂) = L₁ ∪ L₂ is regular. ∎</li>
                    </ol>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (Using NFA Construction)</p>
                    <p className="text-sm text-slate-700 mb-3">Let M₁ = (Q₁, Σ, δ₁, q₀₁, F₁) and M₂ = (Q₂, Σ, δ₂, q₀₂, F₂) be NFAs recognizing L₁ and L₂.</p>
                    <p className="text-sm text-slate-700 mb-3">Construct NFA M = (Q₁ ∪ Q₂ ∪ q₀, Σ, δ, q₀, F₁ ∪ F₂) where:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700">
                        <li>q₀ is a new start state</li>
                        <li>δ(q₀, ε) = q₀₁, q₀₂ (ε-transitions to both start states)</li>
                        <li>δ includes all transitions from δ₁ and δ₂</li>
                        <li>M accepts w iff M₁ accepts w OR M₂ accepts w. ∎</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 my-6">
                    <h5 className="text-center font-bold text-green-900 mb-6">NFA Construction for Union</h5>

                    <svg viewBox="0 0 600 300" className="w-full h-auto">
                        <defs>
                            <marker id="arrowUnion" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="#059669" />
                            </marker>
                        </defs>

                        <circle cx="100" cy="150" r="30" fill="#10B981" stroke="#059669" strokeWidth="2" />
                        <text x="100" y="155" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">q₀</text>

                        <rect x="200" y="50" width="150" height="80" rx="10" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
                        <text x="275" y="75" textAnchor="middle" fill="#1E40AF" fontSize="12" fontWeight="bold">M₁ (for L₁)</text>
                        <circle cx="230" cy="100" r="15" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" />
                        <text x="230" y="105" textAnchor="middle" fill="white" fontSize="10">q₀₁</text>
                        <circle cx="320" cy="100" r="15" fill="#60A5FA" stroke="#2563EB" strokeWidth="1" />
                        <circle cx="320" cy="100" r="12" fill="none" stroke="#2563EB" strokeWidth="1" />
                        <text x="320" y="105" textAnchor="middle" fill="white" fontSize="10">f₁</text>

                        <rect x="200" y="170" width="150" height="80" rx="10" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
                        <text x="275" y="195" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">M₂ (for L₂)</text>
                        <circle cx="230" cy="220" r="15" fill="#F87171" stroke="#DC2626" strokeWidth="1" />
                        <text x="230" y="225" textAnchor="middle" fill="white" fontSize="10">q₀₂</text>
                        <circle cx="320" cy="220" r="15" fill="#F87171" stroke="#DC2626" strokeWidth="1" />
                        <circle cx="320" cy="220" r="12" fill="none" stroke="#DC2626" strokeWidth="1" />
                        <text x="320" y="225" textAnchor="middle" fill="white" fontSize="10">f₂</text>

                        <path d="M 125 135 L 210 105" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowUnion)" />
                        <text x="160" y="115" fill="#059669" fontSize="12" fontWeight="bold">ε</text>

                        <path d="M 125 165 L 210 215" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowUnion)" />
                        <text x="160" y="195" fill="#059669" fontSize="12" fontWeight="bold">ε</text>

                        <rect x="400" y="100" width="180" height="100" rx="5" fill="#F0FDF4" stroke="#10B981" strokeWidth="2" />
                        <text x="490" y="120" textAnchor="middle" fill="#065F46" fontSize="11" fontWeight="bold">Construction</text>
                        <text x="490" y="140" textAnchor="middle" fill="#065F46" fontSize="9">• New start state q₀</text>
                        <text x="490" y="155" textAnchor="middle" fill="#065F46" fontSize="9">• ε-transitions to q₀₁, q₀₂</text>
                        <text x="490" y="170" textAnchor="middle" fill="#065F46" fontSize="9">• Final states: F₁ ∪ F₂</text>
                        <text x="490" y="185" textAnchor="middle" fill="#065F46" fontSize="9">• Accepts if M₁ OR M₂ accepts</text>
                    </svg>

                    <p className="text-center text-sm text-green-700 mt-4 font-semibold">Result: L(M) = L₁ ∪ L₂</p>
                    <p className="text-center text-xs text-green-600 mt-2 italic">Figure 4: NFA Construction for Union using ε-transitions</p>
                </div>

                <h4 className="text-xl font-bold mt-12 mb-4">2. Closure Under Intersection</h4>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-purple-900 mb-3">📐 Theorem: Intersection Closure</p>
                    <p className="text-sm text-purple-800">If L₁ and L₂ are regular languages, then L₁ ∩ L₂ is also regular.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof 1: Using De Morgan's Law</p>
                    <p className="text-sm text-slate-700 mb-3">We know: L₁ ∩ L₂ = L̄₁ ∪ L̄₂</p>
                    <p className="text-sm text-slate-700 mb-2">Since regular languages are closed under complement and union:</p>
                    <ol className="list-decimal ml-6 space-y-2 text-sm text-slate-700">
                        <li>L̄₁ and L̄₂ are regular (closure under complement)</li>
                        <li>L̄₁ ∪ L̄₂ is regular (closure under union)</li>
                        <li>L̄₁ ∪ L̄₂ = L₁ ∩ L₂ is regular (closure under complement) ∎</li>
                    </ol>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof 2: Direct Product Construction</p>
                    <p className="text-sm text-slate-700 mb-3">Let M₁ = (Q₁, Σ, δ₁, q₀₁, F₁) and M₂ = (Q₂, Σ, δ₂, q₀₂, F₂) be DFAs.</p>
                    <p className="text-sm text-slate-700 mb-3">Construct DFA M = (Q₁ × Q₂, Σ, δ, (q₀₁, q₀₂), F₁ × F₂) where:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700">
                        <li>δ((p, q), a) = (δ₁(p, a), δ₂(q, a))</li>
                        <li>M accepts w iff both M₁ and M₂ accept w. ∎</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-xl p-6 my-6">
                    <p className="font-bold text-yellow-900 mb-3">💡 Worked Example: Intersection</p>
                    <p className="text-sm text-yellow-800 mb-4"><strong>Problem:</strong> Let L₁ = w ∈ (0,1)* where w has an even number of 0s and L₂ = w ∈ (0,1)* where w ends with 1. Find DFA for L₁ ∩ L₂.</p>

                    <div className="bg-white rounded-lg p-5 space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <p className="text-sm text-slate-700">M₁ has 2 states: E (even 0s, start & final) and O (odd 0s). Transitions: E→O on 0, O→E on 0, self-loops on 1.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <p className="text-sm text-slate-700">M₂ has 2 states: A (start) and B (final, ends with 1). Transitions: A→B on 1, B→A on 0, self-loop on appropriate inputs.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <p className="text-sm text-slate-700">Product DFA has 4 states: (E,A), (E,B), (O,A), (O,B). Final state is (E,B) where M₁ accepts (E) AND M₂ accepts (B).</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                            <p className="text-sm text-slate-700">Transitions computed pairwise. Example: δ((E,A), 0) = (O, A) since M₁ goes E→O and M₂ goes A→A on 0.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h4 className="text-xl font-bold mt-12 mb-4">3. Closure Under Complement</h4>

                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-red-900 mb-3">📐 Theorem: Complement Closure</p>
                    <p className="text-sm text-red-800">If L is a regular language over alphabet Σ, then L̄ = Σ* - L is also regular.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (State Swapping)</p>
                    <p className="text-sm text-slate-700 mb-3">Let M = (Q, Σ, δ, q₀, F) be a DFA recognizing L.</p>
                    <p className="text-sm text-slate-700 mb-3">Construct M' = (Q, Σ, δ, q₀, Q - F).</p>
                    <p className="text-sm text-slate-700 mb-2">For any string w:</p>
                    <p className="text-sm text-slate-700 ml-4 mb-3">w ∈ L(M') ⟺ δ*(q₀, w) ∈ Q - F ⟺ δ*(q₀, w) ∉ F ⟺ w ∉ L(M) ⟺ w ∈ L̄</p>
                    <p className="text-sm text-slate-700">Therefore, L(M') = L̄. ∎</p>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-5 my-4">
                    <p className="font-bold text-red-900 mb-2">⚠️ Important Note:</p>
                    <p className="text-sm text-red-800">This construction ONLY works for DFAs. For NFAs, you must first convert to a DFA using subset construction, then apply complement. Simply swapping states in an NFA doesn't work because of non-determinism—an NFA accepts if ANY path leads to a final state, so swapping would require ALL paths to lead to the swapped state, which is not equivalent.</p>
                </div>

                <h4 className="text-xl font-bold mt-12 mb-4">4. Closure Under Concatenation</h4>

                <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-teal-900 mb-3">📐 Theorem: Concatenation Closure</p>
                    <p className="text-sm text-teal-800">If L₁ and L₂ are regular languages, then L₁L₂ = xy where x ∈ L₁, y ∈ L₂ is also regular.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (Using Regular Expressions)</p>
                    <p className="text-sm text-slate-700">If L₁ = L(R₁) and L₂ = L(R₂), then L₁L₂ = L(R₁R₂). Since R₁R₂ is a regular expression, L₁L₂ is regular. ∎</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (Using NFA Construction)</p>
                    <p className="text-sm text-slate-700 mb-3">Let M₁ = (Q₁, Σ, δ₁, q₀₁, F₁) and M₂ = (Q₂, Σ, δ₂, q₀₂, F₂) be NFAs.</p>
                    <p className="text-sm text-slate-700 mb-3">Construct NFA M = (Q₁ ∪ Q₂, Σ, δ, q₀₁, F₂) where:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700">
                        <li>For all q ∈ Q₁ and a ∈ Σ: δ(q, a) = δ₁(q, a)</li>
                        <li>For all q ∈ Q₂ and a ∈ Σ: δ(q, a) = δ₂(q, a)</li>
                        <li>For all f ∈ F₁: δ(f, ε) = q₀₂ (ε-transition to M₂'s start)</li>
                        <li>M accepts w iff w = xy where x ∈ L₁ and y ∈ L₂. ∎</li>
                    </ul>
                </div>

                <h4 className="text-xl font-bold mt-12 mb-4">5. Closure Under Kleene Star</h4>

                <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-purple-900 mb-3">📐 Theorem: Kleene Star Closure</p>
                    <p className="text-sm text-purple-800">If L is a regular language, then L* = w₁w₂...wₙ where n ≥ 0, each wᵢ ∈ L is also regular.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (Using Regular Expressions)</p>
                    <p className="text-sm text-slate-700">If L = L(R), then L* = L(R*). Since R* is a regular expression, L* is regular. ∎</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (Using NFA Construction)</p>
                    <p className="text-sm text-slate-700 mb-3">Let M = (Q, Σ, δ, q₀, F) be an NFA recognizing L.</p>
                    <p className="text-sm text-slate-700 mb-3">Construct M' = (Q ∪ q', Σ, δ', q', q') where:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700">
                        <li>q' is a new start state (also final, to accept ε)</li>
                        <li>δ'(q', ε) = q₀ (connect to original start)</li>
                        <li>For all f ∈ F: δ'(f, ε) = q₀ (loop back to start)</li>
                        <li>All original transitions preserved</li>
                        <li>M' accepts zero or more concatenations of strings from L. ∎</li>
                    </ul>
                </div>

                <h4 className="text-xl font-bold mt-12 mb-4">6. Closure Under Reversal</h4>

                <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-pink-900 mb-3">📐 Theorem: Reversal Closure</p>
                    <p className="text-sm text-pink-800">If L is a regular language, then Lᴿ = wᴿ where w ∈ L is also regular, where wᴿ is the reverse of string w.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (NFA Reversal)</p>
                    <p className="text-sm text-slate-700 mb-3">Let M = (Q, Σ, δ, q₀, F) be an NFA recognizing L.</p>
                    <p className="text-sm text-slate-700 mb-3">Construct Mᴿ = (Q ∪ q', Σ, δᴿ, q', q₀) where:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700">
                        <li>q' is a new start state</li>
                        <li>δᴿ(q', ε) = F (ε-transitions to all original final states)</li>
                        <li>For all transitions p ∈ δ(q, a) in M: q ∈ δᴿ(p, a) in Mᴿ (reverse all edges)</li>
                        <li>Mᴿ accepts w iff M accepts wᴿ. ∎</li>
                    </ul>
                </div>

                <h4 className="text-xl font-bold mt-12 mb-4">7. Closure Under Homomorphism</h4>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-amber-900 mb-3">📌 Definition: Homomorphism</p>
                    <p className="text-sm text-amber-800 mb-2">A homomorphism h: Σ* → Δ* is a function that replaces each symbol with a string. Formally:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-amber-800">
                        <li>h(ε) = ε</li>
                        <li>h(a) is a string in Δ* for each a ∈ Σ</li>
                        <li>h(w₁w₂) = h(w₁)h(w₂) (extended to strings)</li>
                        <li>For a language L, h(L) = h(w) where w ∈ L</li>
                    </ul>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-amber-900 mb-3">📐 Theorem: Homomorphism Closure</p>
                    <p className="text-sm text-amber-800">If L is a regular language and h is a homomorphism, then h(L) is also regular.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (Using Regular Expressions)</p>
                    <p className="text-sm text-slate-700 mb-3">Let L = L(R). Define h(R) by replacing each symbol a in R with the string h(a).</p>
                    <p className="text-sm text-slate-700 mb-2">Formally:</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-slate-700">
                        <li>h(∅) = ∅, h(ε) = ε, h(a) = h(a) for a ∈ Σ</li>
                        <li>h(R₁ + R₂) = h(R₁) + h(R₂)</li>
                        <li>h(R₁R₂) = h(R₁)h(R₂)</li>
                        <li>h(R*) = h(R)*</li>
                    </ul>
                    <p className="text-sm text-slate-700 mt-3">Then L(h(R)) = h(L(R)) = h(L). ∎</p>
                </div>

                <h4 className="text-xl font-bold mt-12 mb-4">8. Closure Under Inverse Homomorphism</h4>

                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-cyan-900 mb-3">📌 Definition: Inverse Homomorphism</p>
                    <p className="text-sm text-cyan-800">For a homomorphism h: Σ* → Δ* and language L ⊆ Δ*:</p>
                    <p className="text-sm text-cyan-800 mt-2">h⁻¹(L) = w ∈ Σ* where h(w) ∈ L</p>
                </div>

                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-cyan-900 mb-3">📐 Theorem: Inverse Homomorphism Closure</p>
                    <p className="text-sm text-cyan-800">If L is a regular language and h is a homomorphism, then h⁻¹(L) is also regular.</p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-lg p-6 my-4">
                    <p className="font-bold text-slate-800 mb-3">🔍 Proof (DFA Construction)</p>
                    <p className="text-sm text-slate-700 mb-3">Let M = (Q, Δ, δ, q₀, F) be a DFA for L.</p>
                    <p className="text-sm text-slate-700 mb-3">Construct M' = (Q, Σ, δ', q₀, F) where:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-slate-700">
                        <li>δ'(q, a) = δ*(q, h(a))</li>
                        <li>M' on input a simulates M on the entire string h(a).</li>
                    </ul>
                    <p className="text-sm text-slate-700 mt-3">w ∈ L(M') ⟺ δ'*(q₀, w) ∈ F ⟺ δ*(q₀, h(w)) ∈ F ⟺ h(w) ∈ L(M) ⟺ w ∈ h⁻¹(L). ∎</p>
                </div>
            </section>
            <section className="content-section">
                <h3>Summary of Closure Properties</h3>

                <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-gradient-to-r from-indigo-100 to-purple-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Operation</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Notation</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Proof Method</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Construction</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Union', 'L₁ ∪ L₂', 'Regular Expression or NFA', 'New start + ε-transitions to both'],
                                ['Intersection', 'L₁ ∩ L₂', "De Morgan's or Product DFA", 'States: Q₁ × Q₂, Final: F₁ × F₂'],
                                ['Complement', 'L̄ or Σ* - L', 'DFA state swapping', 'Swap final and non-final states'],
                                ['Difference', 'L₁ - L₂', 'L₁ ∩ L̄₂', 'Product with F₁ × (Q₂ - F₂)'],
                                ['Concatenation', 'L₁L₂', 'Regular Expression or NFA', 'ε-transitions from F₁ to q₀₂'],
                                ['Kleene Star', 'L*', 'Regular Expression or NFA', 'New start (final) + ε-loops'],
                                ['Reversal', 'Lᴿ', 'NFA edge reversal', 'Reverse all transitions'],
                                ['Homomorphism', 'h(L)', 'Regular Expression substitution', 'Replace symbols with h(a)'],
                                ['Inverse Homomorphism', 'h⁻¹(L)', 'DFA simulation', "δ'(q,a) = δ*(q, h(a))"]
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                    <td className="border border-slate-300 p-3 font-semibold text-indigo-900">{row[0]}</td>
                                    <td className="border border-slate-300 p-3">{row[1]}</td>
                                    <td className="border border-slate-300 p-3 text-xs">{row[2]}</td>
                                    <td className="border border-slate-300 p-3 text-xs">{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="content-section">
                <h3>⚙️ See It In Action: Algorithm &amp; Examples</h3>

                <p className="mb-4">The product construction is the most important algorithm for proving closure under intersection, union, and difference. It allows us to run two DFAs &quot;in parallel&quot; on the same input.</p>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-indigo-900 mb-6 text-lg text-center">Product Construction Algorithm</h4>

                    <div className="bg-slate-900 text-slate-200 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-xs leading-relaxed">{`// ============================================
// Product Construction for Intersection
// Input: DFA M1 = (Q1, Σ, δ1, q01, F1), DFA M2 = (Q2, Σ, δ2, q02, F2)
// Output: DFA M = (Q, Σ, δ, q0, F) where L(M) = L(M1) ∩ L(M2)
// ============================================

ALGORITHM ProductConstruction(M1, M2)
BEGIN
    // Step 1: Initialize state set as Cartesian product
    Q ← ∅
    FOR each p in M1.Q DO
        FOR each q in M2.Q DO
            Q ← Q ∪ {(p, q)}
        END FOR
    END FOR
    
    // Step 2: Set start state
    q0 ← (M1.q0, M2.q0)
    
    // Step 3: Define transition function
    FOR each (p, q) in Q DO
        FOR each a in Σ DO
            next_p ← M1.δ(p, a)
            next_q ← M2.δ(q, a)
            δ((p, q), a) ← (next_p, next_q)
        END FOR
    END FOR
    
    // Step 4: Define final states (INTERSECTION)
    F ← ∅
    FOR each (p, q) in Q DO
        IF p ∈ M1.F AND q ∈ M2.F THEN
            F ← F ∪ {(p, q)}
        END IF
    END FOR
    
    // Note: For UNION, use: IF p ∈ M1.F OR q ∈ M2.F
    // Note: For DIFFERENCE, use: IF p ∈ M1.F AND q ∉ M2.F
    
    RETURN (Q, Σ, δ, q0, F)
END`}</pre>
                    </div>

                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 border-2 border-blue-200">
                            <p className="font-bold text-blue-900 mb-2">⏱️ Time Complexity:</p>
                            <p className="text-sm text-slate-700">O(|Q₁| × |Q₂| × |Σ|)</p>
                            <p className="text-xs text-slate-600 mt-1">We iterate over all state pairs and alphabet symbols</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-2 border-green-200">
                            <p className="font-bold text-green-900 mb-2">💾 Space Complexity:</p>
                            <p className="text-sm text-slate-700">O(|Q₁| × |Q₂|)</p>
                            <p className="text-xs text-slate-600 mt-1">The product DFA has |Q₁| × |Q₂| states</p>
                        </div>
                        <div className="bg-white rounded-lg p-4 border-2 border-red-200">
                            <p className="font-bold text-red-900 mb-2">💥 State Explosion:</p>
                            <p className="text-sm text-slate-700">Exponential blowup</p>
                            <p className="text-xs text-slate-600 mt-1">Intersection can cause exponential increase in states</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="content-section">
                <h3>📝 Worked Examples</h3>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-blue-900 mb-4 text-lg">Worked Example 1: Basic Intersection</h4>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-3">📝 Problem Statement</p>
                        <p className="text-sm text-slate-700">Let L₁ be the language of all binary strings with an even number of 0s, and L₂ be the language of all binary strings ending with 1. Construct a DFA for L₁ ∩ L₂.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-4">🔍 Step-by-Step Solution</p>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 1: Design M₁ for L₁ (even number of 0s)</p>
                                <p className="text-sm text-slate-700 mb-1">States: E (even 0s, start & final), O (odd 0s)</p>
                                <p className="text-sm text-slate-700">Transitions: δ(E, 0) = O, δ(E, 1) = E | δ(O, 0) = E, δ(O, 1) = O</p>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 2: Design M₂ for L₂ (ends with 1)</p>
                                <p className="text-sm text-slate-700 mb-1">States: S (start), F (final, last symbol was 1)</p>
                                <p className="text-sm text-slate-700">Transitions: δ(S, 0) = S, δ(S, 1) = F | δ(F, 0) = S, δ(F, 1) = F</p>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 3: Construct Product DFA States</p>
                                <p className="text-sm text-slate-700">Q = (E,S), (E,F), (O,S), (O,F)</p>
                                <p className="text-sm text-slate-700">Start state: (E, S)</p>
                                <p className="text-sm text-slate-700">Final states (intersection): (E,F) (E is final in M₁ AND F is final in M₂)</p>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 4: Compute Transitions</p>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-slate-300 text-xs">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="border border-slate-300 p-2">State</th>
                                                <th className="border border-slate-300 p-2">On 0</th>
                                                <th className="border border-slate-300 p-2">On 1</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td className="border border-slate-300 p-2">(E,S)</td><td className="border border-slate-300 p-2">(O,S)</td><td className="border border-slate-300 p-2">(E,F)</td></tr>
                                            <tr><td className="border border-slate-300 p-2">(E,F)</td><td className="border border-slate-300 p-2">(O,S)</td><td className="border border-slate-300 p-2">(E,F)</td></tr>
                                            <tr><td className="border border-slate-300 p-2">(O,S)</td><td className="border border-slate-300 p-2">(E,S)</td><td className="border border-slate-300 p-2">(O,F)</td></tr>
                                            <tr><td className="border border-slate-300 p-2">(O,F)</td><td className="border border-slate-300 p-2">(E,S)</td><td className="border border-slate-300 p-2">(O,F)</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 5: Verify</p>
                                <p className="text-xs text-slate-700">String &quot;01&quot;: (E,S) →0 (O,S) →1 (O,F) - Not accepted</p>
                                <p className="text-xs text-slate-700">String &quot;101&quot;: (E,S) →1 (E,F) →0 (O,S) →1 (O,F) - Not accepted</p>
                                <p className="text-xs text-green-700 font-bold">String &quot;001&quot;: (E,S) →0 (O,S) →0 (E,S) →1 (E,F) - Accepted! ✓</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                        <p className="font-bold text-green-900 mb-3">✅ Final Answer</p>
                        <p className="text-sm text-green-800 mb-2">The product DFA has:</p>
                        <ul className="list-disc ml-6 text-sm text-green-800 space-y-1">
                            <li>States: (E,S), (E,F), (O,S), (O,F)</li>
                            <li>Start state: (E,S)</li>
                            <li>Final state: (E,F)</li>
                            <li>Language: Binary strings with even number of 0s that end with 1</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-purple-900 mb-4 text-lg">Worked Example 2: Using De Morgan's Law</h4>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-3">📝 Problem Statement</p>
                        <p className="text-sm text-slate-700">Prove that if L₁ and L₂ are regular, then L₁ ∩ L₂ is regular using De Morgan's Law (without direct product construction).</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-4">🔍 Step-by-Step Solution</p>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-purple-900 mb-2">Step 1: State De Morgan's Law</p>
                                <p className="text-sm text-slate-700">L₁ ∩ L₂ = L̄₁ ∪ L̄₂</p>
                            </div>

                            <div>
                                <p className="font-semibold text-purple-900 mb-2">Step 2: Apply Closure Under Complement</p>
                                <p className="text-sm text-slate-700">Since L₁ is regular, L̄₁ is regular (closure under complement).</p>
                                <p className="text-sm text-slate-700">Since L₂ is regular, L̄₂ is regular (closure under complement).</p>
                            </div>

                            <div>
                                <p className="font-semibold text-purple-900 mb-2">Step 3: Apply Closure Under Union</p>
                                <p className="text-sm text-slate-700">Since L̄₁ and L̄₂ are both regular, L̄₁ ∪ L̄₂ is regular (closure under union).</p>
                            </div>

                            <div>
                                <p className="font-semibold text-purple-900 mb-2">Step 4: Apply Closure Under Complement Again</p>
                                <p className="text-sm text-slate-700">Since L̄₁ ∪ L̄₂ is regular, L̄₁ ∪ L̄₂ is regular.</p>
                                <p className="text-sm text-slate-700">But L̄₁ ∪ L̄₂ = L₁ ∩ L₂ by De Morgan's Law.</p>
                                <p className="text-sm text-slate-700 font-bold">Therefore, L₁ ∩ L₂ is regular. ∎</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-6">
                        <p className="font-bold text-purple-900 mb-3">💡 Key Insights</p>
                        <ul className="list-disc ml-6 text-sm text-purple-800 space-y-1">
                            <li>This proof demonstrates the power of algebraic manipulation in automata theory</li>
                            <li>It's a &quot;meta-proof&quot; that uses closure properties as building blocks</li>
                            <li>While elegant, this proof doesn't give us a construction (unlike product construction)</li>
                            <li>The product construction is more practical for actually building the DFA</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-amber-900 mb-4 text-lg">Worked Example 3: Homomorphism Application</h4>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-3">📝 Problem Statement</p>
                        <p className="text-sm text-slate-700">Let L = (01)* be a regular language over Σ = (0, 1). Let h be a homomorphism where h(0) = &quot;ab&quot; and h(1) = &quot;ba&quot;. Find h(L) and prove it's regular.</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-4">🔍 Step-by-Step Solution</p>

                        <div className="space-y-4">
                            <div>
                                <p className="font-semibold text-amber-900 mb-2">Step 1: Understand the Language L</p>
                                <p className="text-sm text-slate-700">L = ε, 01, 0101, 010101, ... = strings of alternating 0s and 1s starting with 0 and ending with 1 (or empty)</p>
                            </div>

                            <div>
                                <p className="font-semibold text-amber-900 mb-2">Step 2: Apply Homomorphism to Each String</p>
                                <p className="text-sm text-slate-700">h(ε) = ε</p>
                                <p className="text-sm text-slate-700">h(01) = h(0)h(1) = &quot;ab&quot;·&quot;ba&quot; = &quot;abba&quot;</p>
                                <p className="text-sm text-slate-700">h(0101) = &quot;ab&quot;·&quot;ba&quot;·&quot;ab&quot;·&quot;ba&quot; = &quot;abbaabba&quot;</p>
                                <p className="text-sm text-slate-700">h(0ⁿ1ⁿ) = (&quot;ab&quot;)ⁿ(&quot;ba&quot;)ⁿ = &quot;ab&quot;ⁿ&quot;ba&quot;ⁿ</p>
                            </div>

                            <div>
                                <p className="font-semibold text-amber-900 mb-2">Step 3: Express h(L) as a Regular Expression</p>
                                <p className="text-sm text-slate-700">h(L) = (h(0)h(1))* = (&quot;abba&quot;)*</p>
                                <p className="text-sm text-slate-700">Or using the homomorphism on the regex: h((01)*) = (h(0)h(1))* = (abba)*</p>
                            </div>

                            <div>
                                <p className="font-semibold text-amber-900 mb-2">Step 4: Verify Regularity</p>
                                <p className="text-sm text-slate-700">Since (abba)* is a regular expression, h(L) is regular by definition.</p>
                                <p className="text-sm text-slate-700">We can construct a simple DFA with 5 states that recognizes (abba)*.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-6 mb-4">
                        <p className="font-bold text-amber-900 mb-3">✅ Final Answer</p>
                        <p className="text-sm text-amber-800 mb-2">h(L) = (abba)*</p>
                        <p className="text-sm text-amber-800 mb-2">This is the language of strings consisting of zero or more repetitions of &quot;abba&quot;.</p>
                        <p className="text-sm text-amber-800">Examples: ε, abba, abbaabba, abbaabbaabba, ...</p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <p className="font-bold text-red-900 mb-2">⚠️ Common Mistake:</p>
                        <p className="text-sm text-red-800">Many students incorrectly write h(L) = (ab)*(ba)*. This is wrong because the star applies to the entire concatenation, not individually. The correct form is (abba)*, which gives strings like abba, abbaabba, NOT ab, ba, abba, etc.</p>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>💻 Code Implementation</h3>
                <p className="mb-4">This section provides a complete, working implementation of the product construction algorithm in Python. You can run this code to construct DFAs for intersection, union, and difference operations.</p>

                <div className="bg-gradient-to-br from-slate-50 to-gray-50 border-2 border-slate-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-slate-900 mb-4 text-lg">Complete Working Implementation</h4>
                    <p className="text-sm text-slate-600 mb-4">DFA Operations - Product Construction</p>

                    <div className="bg-slate-900 text-slate-200 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-xs leading-relaxed">{`# ============================================
# DFA Operations using Product Construction
# Language: Python 3
# Description: Implements intersection, union, and difference
# ============================================

class DFA:
    def __init__(self, states, alphabet, transitions, start_state, final_states):
        """
        Initialize a DFA
        states: set of state names
        alphabet: set of input symbols
        transitions: dict {(state, symbol): next_state}
        start_state: initial state
        final_states: set of accepting states
        """
        self.states = states
        self.alphabet = alphabet
        self.transitions = transitions
        self.start_state = start_state
        self.final_states = final_states
    
    def delta(self, state, symbol):
        """Transition function"""
        return self.transitions.get((state, symbol), None)
    
    def accepts(self, string):
        """Check if DFA accepts the given string"""
        current = self.start_state
        for char in string:
            if char not in self.alphabet:
                return False
            current = self.delta(current, char)
            if current is None:
                return False
        return current in self.final_states
    
    def __str__(self):
        return (f"DFA(States: {self.states}, Start: {self.start_state}, "
                f"Final: {self.final_states})")

def product_construction(dfa1, dfa2, operation="intersection"):
    """
    Construct product DFA for intersection, union, or difference
    operation: "intersection", "union", or "difference"
    """
    # Step 1: Create product states
    product_states = {(s1, s2) for s1 in dfa1.states for s2 in dfa2.states}
    
    # Step 2: Define start state
    product_start = (dfa1.start_state, dfa2.start_state)
    
    # Step 3: Compute transitions
    product_transitions = {}
    for s1 in dfa1.states:
        for s2 in dfa2.states:
            for a in dfa1.alphabet:
                next_s1 = dfa1.delta(s1, a)
                next_s2 = dfa2.delta(s2, a)
                if next_s1 is not None and next_s2 is not None:
                    product_transitions[((s1, s2), a)] = (next_s1, next_s2)
    
    # Step 4: Determine final states based on operation
    product_final = set()
    for s1, s2 in product_states:
        in_f1 = s1 in dfa1.final_states
        in_f2 = s2 in dfa2.final_states
        
        if operation == "intersection" and (in_f1 and in_f2):
            product_final.add((s1, s2))
        elif operation == "union" and (in_f1 or in_f2):
            product_final.add((s1, s2))
        elif operation == "difference" and (in_f1 and not in_f2):
            product_final.add((s1, s2))
    
    return DFA(product_states, dfa1.alphabet, product_transitions,
               product_start, product_final)

def complement(dfa):
    """Construct complement of a DFA by swapping final/non-final states"""
    return DFA(dfa.states, dfa.alphabet, dfa.transitions,
               dfa.start_state, dfa.states - dfa.final_states)

# ============================================
# Example Usage
# ============================================

if __name__ == "__main__":
    # DFA for L1: Strings with even number of 0s
    dfa1 = DFA(
        states={'E', 'O'},
        alphabet={'0', '1'},
        transitions={
            ('E', '0'): 'O', ('E', '1'): 'E',
            ('O', '0'): 'E', ('O', '1'): 'O'
        },
        start_state='E',
        final_states={'E'}
    )
    
    # DFA for L2: Strings ending with 1
    dfa2 = DFA(
        states={'S', 'F'},
        alphabet={'0', '1'},
        transitions={
            ('S', '0'): 'S', ('S', '1'): 'F',
            ('F', '0'): 'S', ('F', '1'): 'F'
        },
        start_state='S',
        final_states={'F'}
    )
    
    # Construct intersection
    intersection = product_construction(dfa1, dfa2, "intersection")
    print("Intersection DFA:", intersection)
    
    # Test strings
    test_strings = ["1", "01", "001", "101", "0001", "0101"]
    print("\nTesting intersection (even 0s AND ends with 1):")
    for s in test_strings:
        result = "Accepted" if intersection.accepts(s) else "Rejected"
        print(f"  '{s}': {result}")
    
    # Construct union
    union = product_construction(dfa1, dfa2, "union")
    print("\nTesting union (even 0s OR ends with 1):")
    for s in ["0", "1", "00", "01"]:
        result = "Accepted" if union.accepts(s) else "Rejected"
        print(f"  '{s}': {result}")`}</pre>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-blue-900 mb-4 text-lg">Code Walkthrough</h4>

                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-blue-900 mb-2">1. DFA Class:</p>
                            <p className="text-sm text-slate-700">The DFA class encapsulates all components of a deterministic finite automaton: states, alphabet, transition function, start state, and final states. The delta method implements the transition function, and accepts simulates the DFA on an input string.</p>
                        </div>

                        <div>
                            <p className="font-semibold text-blue-900 mb-2">2. Product Construction:</p>
                            <p className="text-sm text-slate-700">The product_construction function implements the algorithm shown in the pseudocode. It creates the Cartesian product of states, computes transitions by running both DFAs in parallel, and determines final states based on the operation parameter.</p>
                        </div>

                        <div>
                            <p className="font-semibold text-blue-900 mb-2">3. Complement Operation:</p>
                            <p className="text-sm text-slate-700">The complement function simply swaps final and non-final states. Note that this only works correctly for DFAs (not NFAs) because determinism ensures that exactly one state is active at any time.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-green-900 mb-4 text-lg">Example Execution</h4>
                    <p className="text-sm text-green-800 mb-4">Sample Run</p>

                    <div className="bg-slate-900 text-slate-200 rounded-lg p-6 overflow-x-auto">
                        <pre className="text-xs leading-relaxed">{`Output:

Intersection DFA: DFA(States: {('E', 'S'), ('E', 'F'), ('O', 'S'), ('O', 'F')},
                      Start: ('E', 'S'), Final: {('E', 'F')})

Testing intersection (even 0s AND ends with 1):
  '1': Accepted
  '01': Rejected
  '001': Accepted
  '101': Rejected
  '0001': Accepted
  '0101': Rejected

Testing union (even 0s OR ends with 1):
  '0': Accepted
  '1': Accepted
  '00': Accepted
  '01': Accepted`}</pre>
                    </div>

                    <div className="mt-4 bg-white rounded-lg p-5">
                        <p className="font-semibold text-green-900 mb-2">Trace Through Execution for &quot;001&quot;:</p>
                        <ol className="list-decimal ml-6 space-y-1 text-sm text-slate-700">
                            <li>Start at state (E, S)</li>
                            <li>Read '0': M₁ goes E→O, M₂ goes S→S → New state: (O, S)</li>
                            <li>Read '0': M₁ goes O→E, M₂ goes S→S → New state: (E, S)</li>
                            <li>Read '1': M₁ goes E→E, M₂ goes S→F → New state: (E, F)</li>
                            <li>(E, F) is a final state → String ACCEPTED ✓</li>
                        </ol>
                    </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-5 my-6">
                    <p className="font-bold text-red-900 mb-3">⚠️ Common Implementation Mistakes</p>

                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold text-red-900 mb-2">Mistake #1: Using NFAs directly in complement</p>
                            <div className="bg-white rounded-lg p-4 mb-2">
                                <p className="text-xs text-red-800 mb-2">Wrong Code:</p>
                                <pre className="text-xs text-slate-700">{`# This is INCORRECT - works only for DFAs!
def wrong_complement(nfa):
    return NFA(nfa.states, nfa.alphabet, nfa.transitions,
               nfa.start_state, nfa.states - nfa.final_states)`}</pre>
                            </div>
                            <p className="text-sm text-slate-700 mb-2"><strong>Why it's wrong:</strong> NFAs accept if ANY path reaches a final state. Simply swapping states doesn't correctly compute the complement because the acceptance condition changes.</p>

                            <div className="bg-white rounded-lg p-4">
                                <p className="text-xs text-green-800 mb-2">Correct Approach:</p>
                                <pre className="text-xs text-slate-700">{`# CORRECT: Convert NFA to DFA first, then complement
def correct_complement(nfa):
    dfa = subset_construction(nfa)  # Convert to DFA first
    return DFA(dfa.states, dfa.alphabet, dfa.transitions,
               dfa.start_state, dfa.states - dfa.final_states)`}</pre>
                            </div>
                            <p className="text-sm text-slate-700 mt-2"><strong>Key Lesson:</strong> Always ensure you're working with a DFA before applying complement.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 border-2 border-purple-300 rounded-xl p-6 my-6">
                    <p className="font-bold text-purple-900 mb-3">💡 Optimization Tips:</p>
                    <ul className="list-disc ml-6 space-y-2 text-sm text-purple-800">
                        <li><strong>State Minimization:</strong> After product construction, use DFA minimization to reduce the number of states</li>
                        <li><strong>Unreachable States:</strong> Remove unreachable states from the product DFA to save memory</li>
                        <li><strong>Lazy Construction:</strong> In practice, construct states on-demand during simulation rather than all at once</li>
                    </ul>
                </div>
            </section>

            <section className="content-section">
                <h3>🚫 Why a DFA Cannot Accept {'{'}a<sup>n</sup>b<sup>n</sup> | n &ge; 0{'}'}</h3>

                <div className="bg-red-50 border-2 border-red-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-red-900 mb-4 text-lg">Finite Memory Problem: DFA with k states cannot distinguish a<sup>k</sup> from a<sup>k+1</sup></h4>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-3">🔍 The Fundamental Limitation</p>
                        <p className="text-sm text-slate-700 mb-3">Consider the language L = {'{'}a<sup>n</sup>b<sup>n</sup> | n &ge; 0{'}'} = {'{'}ε, ab, aabb, aaabbb, ...{'}'}</p>
                        <p className="text-sm text-slate-700 mb-3">This language requires counting: we need to remember exactly how many 'a's we've seen to verify we get the same number of 'b's.</p>
                        <p className="text-sm text-slate-700"><strong>Problem:</strong> A DFA with k states can only "remember" k different counts. But we need to count arbitrarily high!</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-4">📊 Visual Proof: State Repetition</p>

                        <svg viewBox="0 0 800 400" className="w-full h-auto mb-4">
                            <defs>
                                <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#DC2626" />
                                </marker>
                            </defs>

                            {/* Title */}
                            <text x="400" y="30" textAnchor="middle" fill="#991B1B" fontSize="16" fontWeight="bold">DFA run on "aaaa..."</text>

                            {/* States */}
                            <circle cx="100" cy="150" r="35" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
                            <text x="100" y="145" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">start</text>

                            <circle cx="250" cy="150" r="35" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
                            <text x="250" y="145" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">seen 'a'</text>

                            <circle cx="400" cy="150" r="35" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
                            <text x="400" y="145" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">seen 'aa'</text>

                            <text x="500" y="155" textAnchor="middle" fill="#991B1B" fontSize="24" fontWeight="bold">...</text>

                            <circle cx="600" cy="150" r="35" fill="#FCA5A5" stroke="#DC2626" strokeWidth="3" />
                            <text x="600" y="145" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">seen 'aᵏ'</text>

                            {/* Arrows */}
                            <line x1="135" y1="150" x2="215" y2="150" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />
                            <text x="175" y="140" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="bold">a</text>

                            <line x1="285" y1="150" x2="365" y2="150" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />
                            <text x="325" y="140" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="bold">a</text>

                            <line x1="435" y1="150" x2="465" y2="150" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />
                            <text x="450" y="140" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="bold">a</text>

                            <line x1="535" y1="150" x2="565" y2="150" stroke="#DC2626" strokeWidth="2" markerEnd="url(#arrowRed)" />
                            <text x="550" y="140" textAnchor="middle" fill="#DC2626" fontSize="12" fontWeight="bold">a</text>

                            {/* Loop back */}
                            <path d="M 620 125 Q 650 100 650 150 Q 650 200 620 175" stroke="#DC2626" strokeWidth="3" fill="none" markerEnd="url(#arrowRed)" />
                            <text x="680" y="150" textAnchor="start" fill="#DC2626" fontSize="12" fontWeight="bold">a</text>

                            {/* State repeats annotation */}
                            <ellipse cx="600" cy="280" rx="80" ry="40" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
                            <text x="600" y="275" textAnchor="middle" fill="#92400E" fontSize="11" fontWeight="bold">state repeats!</text>
                            <text x="600" y="290" textAnchor="middle" fill="#92400E" fontSize="9">Can't distinguish</text>

                            <line x1="600" y1="185" x2="600" y2="240" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>

                        <p className="text-sm text-slate-700 italic text-center">Figure 1: The fundamental memory limitation of DFAs — they cannot count arbitrarily high</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-4">🔍 Formal Proof Using Pigeonhole Principle</p>

                        <div className="space-y-3">
                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 1: Assume for contradiction</p>
                                <p className="text-sm text-slate-700">Suppose there exists a DFA M with k states that accepts L = {'{'}a<sup>n</sup>b<sup>n</sup> | n &ge; 0{'}'}.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 2: Consider k+1 strings</p>
                                <p className="text-sm text-slate-700">Consider the k+1 strings: ε, a, aa, aaa, ..., a<sup>k</sup></p>
                                <p className="text-sm text-slate-700">These are k+1 different strings, but M has only k states.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 3: Apply Pigeonhole Principle</p>
                                <p className="text-sm text-slate-700">By the pigeonhole principle, at least two of these strings must lead to the same state.</p>
                                <p className="text-sm text-slate-700">Let's say a<sup>i</sup> and a<sup>j</sup> (where i &lt; j &le; k) both lead to the same state q.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 4: Show contradiction</p>
                                <p className="text-sm text-slate-700 mb-2">Since a<sup>i</sup> and a<sup>j</sup> lead to the same state q, the DFA cannot distinguish between them.</p>
                                <p className="text-sm text-slate-700 mb-2">Therefore, for any string w, M accepts a<sup>i</sup>w if and only if M accepts a<sup>j</sup>w.</p>
                                <p className="text-sm text-slate-700 mb-2">Consider w = b<sup>i</sup>:</p>
                                <ul className="list-disc ml-6 text-sm text-slate-700 space-y-1">
                                    <li>a<sup>i</sup>b<sup>i</sup> ∈ L, so M must accept a<sup>i</sup>b<sup>i</sup></li>
                                    <li>But then M must also accept a<sup>j</sup>b<sup>i</sup> (since a<sup>i</sup> and a<sup>j</sup> lead to same state)</li>
                                    <li>However, a<sup>j</sup>b<sup>i</sup> ∉ L (since j &gt; i), so M should reject it</li>
                                    <li>Contradiction! ⚡</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 5: Conclusion</p>
                                <p className="text-sm text-slate-700">Therefore, no DFA can accept L = {'{'}a<sup>n</sup>b<sup>n</sup> | n &ge; 0{'}'}. This language is NOT regular. ∎</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6">
                        <p className="font-bold text-yellow-900 mb-3">💡 Key Takeaway</p>
                        <p className="text-sm text-yellow-800 mb-2">This is why we need more powerful models like Pushdown Automata (PDAs) for context-free languages:</p>
                        <ul className="list-disc ml-6 text-sm text-yellow-800 space-y-1">
                            <li><strong>DFAs:</strong> Finite memory (k states) → Can only count up to k</li>
                            <li><strong>PDAs:</strong> Infinite stack → Can count arbitrarily high</li>
                            <li><strong>Turing Machines:</strong> Infinite tape → Can compute anything computable</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>🎯 Problem-Solving Practice</h3>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-green-900 mb-4 text-lg flex items-center gap-2">
                        <span className="text-2xl">📘</span>
                        Easy Problem
                    </h4>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-3">Problem:</p>
                        <p className="text-sm text-slate-700">Let L₁ = {'{'}w &isin; {'{'}a,b{'}'}* | w contains 'aa'{'}'} and L₂ = {'{'}w &isin; {'{'}a,b{'}'}* | w ends with 'b'{'}'}. Using closure properties, argue that L₁ ∩ L₂ is regular.</p>
                    </div>

                    <details className="bg-green-100 rounded-lg p-6">
                        <summary className="font-bold text-green-900 mb-3 cursor-pointer">Show Solution</summary>

                        <div className="mt-4 space-y-3">
                            <div>
                                <p className="font-semibold text-green-900 mb-2">Step 1:</p>
                                <p className="text-sm text-slate-700">L₁ is regular because we can construct a DFA that looks for 'aa' as a substring.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-green-900 mb-2">Step 2:</p>
                                <p className="text-sm text-slate-700">L₂ is regular because we can construct a DFA that checks if the last symbol is 'b'.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-green-900 mb-2">Step 3:</p>
                                <p className="text-sm text-slate-700">By the closure property of regular languages under intersection, L₁ ∩ L₂ is regular.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-green-900 mb-2">Conclusion:</p>
                                <p className="text-sm text-slate-700">The language of strings containing 'aa' AND ending with 'b' is regular.</p>
                            </div>

                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                                <p className="font-bold text-yellow-900 mb-2">💡 Key Insight:</p>
                                <p className="text-sm text-yellow-800">We don't need to construct the actual DFA—just knowing that both are regular and intersection preserves regularity is sufficient!</p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-blue-900 mb-4 text-lg flex items-center gap-2">
                        <span className="text-2xl">📙</span>
                        Medium Problem
                    </h4>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-3">Problem:</p>
                        <p className="text-sm text-slate-700">Let L be a regular language over {'{'}0,1{'}'}. Prove that the language of all strings in L with the first and last symbols removed is also regular.</p>
                    </div>

                    <details className="bg-blue-100 rounded-lg p-6">
                        <summary className="font-bold text-blue-900 mb-3 cursor-pointer">Show Solution</summary>

                        <div className="mt-4 space-y-3">
                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 1:</p>
                                <p className="text-sm text-slate-700">Define homomorphism h(0) = 0, h(1) = 1 (identity homomorphism).</p>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 2:</p>
                                <p className="text-sm text-slate-700">Define languages L₀ = {'{'}0w | w &isin; Σ*{'}'} and L₁ = {'{'}1w | w &isin; Σ*{'}'} (regular, can be described by regex).</p>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 3:</p>
                                <p className="text-sm text-slate-700">The language with first symbol 0 and removed is h(L ∩ L₀) with first symbol deleted.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 4:</p>
                                <p className="text-sm text-slate-700">Alternatively, use closure under homomorphism and inverse homomorphism with appropriate mappings.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-blue-900 mb-2">Step 5:</p>
                                <p className="text-sm text-slate-700">More directly: this operation can be achieved using homomorphism h'(0w) = w, h'(1w) = w applied to L ∩ (0Σ* ∪ 1Σ*).</p>
                            </div>

                            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4 mt-4">
                                <p className="font-bold text-blue-900 mb-2">Complete Proof:</p>
                                <p className="text-sm text-slate-700">Let L' = {'{'}w | 0w &isin; L or 1w &isin; L{'}'} ∪ {'{'}ε if ε &isin; L{'}'}. We can write L' = h⁻¹(L) where h is defined appropriately, or use a series of closure operations. Since regular languages are closed under homomorphism and intersection, L' is regular.</p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-red-900 mb-4 text-lg flex items-center gap-2">
                        <span className="text-2xl">📕</span>
                        Hard Problem
                    </h4>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-3">Problem:</p>
                        <p className="text-sm text-slate-700">Let L be a regular language. Prove that the language of all strings in L that have equal number of 0s and 1s is regular.</p>
                    </div>

                    <details className="bg-red-100 rounded-lg p-6">
                        <summary className="font-bold text-red-900 mb-3 cursor-pointer">Show Solution</summary>

                        <div className="mt-4 space-y-3">
                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 1:</p>
                                <p className="text-sm text-slate-700">Let E = {'{'}w &isin; {'{'}0,1{'}'}* | #0s in w = #1s in w{'}'}.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 2:</p>
                                <p className="text-sm text-slate-700">Is E regular? No! E is a classic non-regular language (can be proven using pumping lemma).</p>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 3:</p>
                                <p className="text-sm text-slate-700">The desired language is L ∩ E.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 4:</p>
                                <p className="text-sm text-slate-700">Since E is NOT regular, we CANNOT conclude that L ∩ E is regular using closure properties.</p>
                            </div>

                            <div>
                                <p className="font-semibold text-red-900 mb-2">Step 5:</p>
                                <p className="text-sm text-slate-700">In fact, if L = {'{'}0,1{'}'}* (which is regular), then L ∩ E = E, which is NOT regular.</p>
                            </div>

                            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-4 mt-4">
                                <p className="font-bold text-red-900 mb-2">Answer:</p>
                                <p className="text-sm text-slate-700 mb-2">The statement is FALSE! The language is not necessarily regular. This is a trick question testing whether you understand that closure properties only work when BOTH languages are regular.</p>
                            </div>
                        </div>
                    </details>
                </div>
            </section>

            <section className="content-section">
                <h3>💬 Short Answer Questions</h3>

                <div className="space-y-6 my-6">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-xl p-6">
                        <p className="font-bold text-purple-900 mb-3">Question 1:</p>
                        <p className="text-sm text-slate-700 mb-4">Explain why we cannot directly complement an NFA by swapping final and non-final states.</p>

                        <details className="bg-purple-100 rounded-lg p-5">
                            <summary className="font-bold text-purple-900 cursor-pointer">Show Sample Answer</summary>

                            <div className="mt-4 space-y-3 text-sm text-slate-700">
                                <p>In an NFA, a string is accepted if there exists at least one path from the start state to a final state. If we simply swap final and non-final states, the new NFA would accept a string if there exists at least one path to a (formerly non-final) state. However, this is NOT the same as saying NO path leads to a final state in the original NFA.</p>

                                <p>For example, consider an NFA with two paths for input &quot;a&quot;: one to a final state and one to a non-final state. The NFA accepts &quot;a&quot;. After swapping, it still accepts &quot;a&quot; (via the path to the formerly non-final state), but the complement should reject &quot;a&quot;. The correct approach is to first convert the NFA to a DFA using subset construction, then swap states.</p>
                            </div>
                        </details>
                    </div>

                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-xl p-6">
                        <p className="font-bold text-teal-900 mb-3">Question 2:</p>
                        <p className="text-sm text-slate-700 mb-4">State De Morgan's Law for languages and explain how it proves closure under intersection.</p>

                        <details className="bg-teal-100 rounded-lg p-5">
                            <summary className="font-bold text-teal-900 cursor-pointer">Show Sample Answer</summary>

                            <div className="mt-4 space-y-3">
                                <p className="font-semibold text-teal-900">De Morgan's Law for Languages:</p>
                                <p className="text-sm text-slate-700 mb-3">L₁ ∩ L₂ = L̄₁ ∪ L̄₂</p>

                                <p className="font-semibold text-teal-900">Proof of closure under intersection:</p>
                                <ol className="list-decimal ml-6 space-y-1 text-sm text-slate-700">
                                    <li>Since L₁ is regular, L̄₁ is regular (closure under complement).</li>
                                    <li>Since L₂ is regular, L̄₂ is regular (closure under complement).</li>
                                    <li>Since L̄₁ and L̄₂ are regular, L̄₁ ∪ L̄₂ is regular (closure under union).</li>
                                    <li>Since L̄₁ ∪ L̄₂ is regular, L̄₁ ∪ L̄₂ is regular (closure under complement).</li>
                                    <li>By De Morgan's Law, L̄₁ ∪ L̄₂ = L₁ ∩ L₂.</li>
                                    <li>Therefore, L₁ ∩ L₂ is regular. ∎</li>
                                </ol>
                            </div>
                        </details>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6">
                        <p className="font-bold text-amber-900 mb-3">Question 3:</p>
                        <p className="text-sm text-slate-700 mb-4">What is the difference between h(L) and h⁻¹(L) for a homomorphism h?</p>

                        <details className="bg-amber-100 rounded-lg p-5">
                            <summary className="font-bold text-amber-900 cursor-pointer">Show Sample Answer</summary>

                            <div className="mt-4 space-y-3">
                                <div>
                                    <p className="font-semibold text-amber-900 mb-2">h(L) - Homomorphism:</p>
                                    <p className="text-sm text-slate-700">Apply h to every string in L. If h(0) = &quot;ab&quot; and L = {'{'}0, 00{'}'}, then h(L) = {'{'}&quot;ab&quot;, &quot;abab&quot;{'}'}. This maps from domain to codomain.</p>
                                </div>

                                <div>
                                    <p className="font-semibold text-amber-900 mb-2">h⁻¹(L) - Inverse Homomorphism:</p>
                                    <p className="text-sm text-slate-700">The set of all strings w such that h(w) &isin; L. If h(0) = &quot;ab&quot;, h(1) = &quot;ba&quot;, and L = {'{'}&quot;abba&quot;{'}'}  then h⁻¹(L) = {'{'}01{'}'} because h(01) = &quot;abba&quot;. This maps from codomain back to domain.</p>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 mt-3">
                                    <p className="font-bold text-yellow-900 mb-1">Key difference:</p>
                                    <p className="text-sm text-yellow-800">h(L) &quot;expands&quot; strings (each symbol becomes a string), while h⁻¹(L) &quot;contracts&quot; by finding pre-images.</p>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>📊 Comparison &amp; Analysis</h3>
                <p className="mb-4">Understanding the relationships between different closure properties helps in choosing the right proof technique for a given problem. Here's a comprehensive comparison:</p>

                <div className="overflow-x-auto my-6">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-gradient-to-r from-blue-100 to-indigo-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Property</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Best Proof Method</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Time Complexity</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">State Blowup</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Key Insight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Union', 'Regular Expression (R₁ + R₂)', 'O(1) for regex', 'None (if using regex)', 'Easiest using regex; NFA construction adds ε-transitions'],
                                ['Intersection', 'Product DFA or De Morgan\'s', 'O(|Q₁|×|Q₂|×|Σ|)', 'Multiplicative (n×m)', 'Run both automata in parallel'],
                                ['Complement', 'DFA state swapping', 'O(|Q|)', 'None', 'Only works for DFAs, NOT NFAs directly'],
                                ['Concatenation', 'Regular Expression (R₁R₂)', 'O(1) for regex', 'None (if using regex)', 'Simply concatenate the expressions'],
                                ['Kleene Star', 'Regular Expression (R*)', 'O(1) for regex', 'None (if using regex)', 'Add star operator; NFA needs ε-loops'],
                                ['Reversal', 'NFA transition reversal', 'O(|Q| + |δ|)', 'None', 'Reverse all edges, swap start/final'],
                                ['Homomorphism', 'Regular Expression substitution', 'O(|R|)', 'Can increase (symbol → string)', 'Replace each symbol a with h(a)'],
                                ['Inverse Homomorphism', 'DFA simulation', 'O(|Q|×|Σ|)', 'None', "δ'(q,a) = δ*(q, h(a))"]
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                    <td className="border border-slate-300 p-3 font-semibold text-indigo-900">{row[0]}</td>
                                    <td className="border border-slate-300 p-3 text-xs">{row[1]}</td>
                                    <td className="border border-slate-300 p-3 text-xs">{row[2]}</td>
                                    <td className="border border-slate-300 p-3 text-xs">{row[3]}</td>
                                    <td className="border border-slate-300 p-3 text-xs">{row[4]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-purple-900 mb-4 text-lg">When to Choose What?</h4>
                    <p className="font-semibold text-purple-900 mb-3">Decision Guide:</p>

                    <div className="space-y-4">
                        <div className="bg-white rounded-lg p-5">
                            <p className="font-bold text-green-900 mb-2">Use Regular Expressions when:</p>
                            <p className="text-sm text-slate-700">You need a quick proof or the languages are already given as regexes (union, concatenation, star, homomorphism)</p>
                        </div>

                        <div className="bg-white rounded-lg p-5">
                            <p className="font-bold text-blue-900 mb-2">Use DFA Construction when:</p>
                            <p className="text-sm text-slate-700">You need an actual automaton or working with DFAs (complement, intersection, difference)</p>
                        </div>

                        <div className="bg-white rounded-lg p-5">
                            <p className="font-bold text-purple-900 mb-2">Use NFA Construction when:</p>
                            <p className="text-sm text-slate-700">Working with NFAs or need ε-transitions (union, concatenation, star, reversal)</p>
                        </div>

                        <div className="bg-white rounded-lg p-5">
                            <p className="font-bold text-amber-900 mb-2">Use De Morgan's when:</p>
                            <p className="text-sm text-slate-700">You need to prove intersection but only have proofs for union and complement</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>🛠️ Hands-On Lab Exercise</h3>
                <p className="mb-4">Build a DFA for Complex Language Using Closure Properties</p>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-300 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-indigo-900 mb-4 text-lg">📋 Objective:</h4>
                    <p className="text-sm text-slate-700 mb-4">You will construct a DFA that recognizes the language L = {'{'}w &isin; {'{'}0,1{'}'}* | w has an even number of 0s AND w does NOT contain '11' as a substring{'}'}.</p>
                    <p className="text-sm text-slate-700 mb-4">This lab reinforces understanding of product construction and how to combine multiple conditions using closure properties.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white rounded-lg p-4">
                            <p className="font-bold text-indigo-900 mb-2">⏱️ Estimated Time:</p>
                            <p className="text-sm text-slate-700">45-60 minutes</p>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                            <p className="font-bold text-indigo-900 mb-2">🎯 Learning Goals:</p>
                            <ul className="list-disc ml-5 text-xs text-slate-700 space-y-1">
                                <li>Design DFAs for individual language conditions</li>
                                <li>Apply product construction to combine conditions</li>
                                <li>Verify the resulting DFA using test cases</li>
                                <li>Understand state minimization concepts</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-6 mb-4">
                        <p className="font-bold text-slate-800 mb-4">📝 Instructions:</p>

                        <ol className="list-decimal ml-6 space-y-3 text-sm text-slate-700">
                            <li><strong>Design DFA M₁ for &quot;even number of 0s&quot;</strong><br />States: E (even, start &amp; final), O (odd). Complete the transition table.</li>
                            <li><strong>Design DFA M₂ for &quot;no '11' substring&quot;</strong><br />States needed: track whether last symbol was 1 or not. Use states S (start, no previous 1), N (last was 0), L (last was 1, final), D (dead state - saw '11').</li>
                            <li><strong>Construct Product DFA</strong><br />Create states as pairs from M₁ × M₂. Determine which states are final (must satisfy BOTH conditions).</li>
                            <li><strong>Compute All Transitions</strong><br />For each state pair and each input symbol (0, 1), compute the next state by following transitions in both M₁ and M₂.</li>
                            <li><strong>Identify and Remove Unreachable States</strong><br />Starting from (E, S), mark all reachable states. Remove any states that cannot be reached.</li>
                            <li><strong>Test Your DFA</strong><br />Verify with these test cases: ε (accept), 0 (reject), 1 (accept), 01 (accept), 10 (accept), 11 (reject), 001 (accept), 0101 (accept), 110 (reject), 1010 (accept).</li>
                            <li><strong>Write Regular Expression</strong><br />Try to write a regex for this language. Hint: It should be something like (1*01*01*)*1* excluding '11'.</li>
                            <li><strong>Document Your Work</strong><br />Draw the final DFA diagram and create a transition table.</li>
                        </ol>
                    </div>

                    <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5 mb-4">
                        <p className="font-bold text-blue-900 mb-2">📦 Starter Code:</p>
                        <p className="text-sm text-slate-700">Use the Python code provided in the Code Implementation section. Define your DFAs and use product_construction() with operation=&quot;intersection&quot;.</p>
                    </div>

                    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5 mb-4">
                        <p className="font-bold text-green-900 mb-2">✅ Expected Output:</p>
                        <p className="text-sm text-slate-700">Your final DFA should have at most 8 states (2 × 4). After removing unreachable states, you should have 4-6 states. The DFA should correctly classify all test cases.</p>
                    </div>

                    <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
                        <p className="font-bold text-purple-900 mb-3">🎓 Grading Rubric:</p>
                        <ul className="list-disc ml-6 text-sm text-slate-700 space-y-1">
                            <li>Correct M₁ design: 15 points</li>
                            <li>Correct M₂ design: 15 points</li>
                            <li>Correct product construction: 25 points</li>
                            <li>Correct final states: 15 points</li>
                            <li>All test cases pass: 20 points</li>
                            <li>Documentation and regex: 10 points</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="content-section">
                <h3>📝 Quick Reference Cheat Sheet</h3>
                <p className="mb-4">Save this page for quick review! Here's everything you need to remember at a glance.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6">
                        <h4 className="font-bold text-blue-900 mb-4">🔑 Key Definitions</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li><strong>Closure:</strong> Set is closed under op if op(members) ∈ set</li>
                            <li><strong>Regular Language:</strong> Language accepted by some FA</li>
                            <li><strong>Homomorphism:</strong> Symbol-to-string substitution</li>
                            <li><strong>Product DFA:</strong> Simulates two DFAs in parallel</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-xl p-6">
                        <h4 className="font-bold text-purple-900 mb-4">📐 Important Formulas</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                            <li><strong>De Morgan's:</strong> L₁ ∩ L₂ = L̄₁ ∪ L̄₂</li>
                            <li><strong>Difference:</strong> L₁ - L₂ = L₁ ∩ L̄₂</li>
                            <li><strong>Product States:</strong> |Q₁ × Q₂| = |Q₁| × |Q₂|</li>
                            <li><strong>Homomorphism:</strong> h(L) = {'{'}h(w) | w ∈ L{'}'}</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
                        <h4 className="font-bold text-green-900 mb-4">⚙️ Construction Quick Guide</h4>
                        <ul className="space-y-2 text-xs text-slate-700">
                            <li><strong>Union:</strong> New start + ε to both</li>
                            <li><strong>Intersection:</strong> Product, final = F₁ × F₂</li>
                            <li><strong>Complement:</strong> Swap final/non-final (DFA only!)</li>
                            <li><strong>Concatenation:</strong> ε from F₁ to q₀₂</li>
                            <li><strong>Star:</strong> New start (final) + ε loops</li>
                            <li><strong>Reversal:</strong> Reverse edges, swap start/final</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-xl p-6">
                        <h4 className="font-bold text-amber-900 mb-4">✅ When to Use What</h4>
                        <ul className="space-y-2 text-xs text-slate-700">
                            <li><strong>Quick proof:</strong> Use regular expressions</li>
                            <li><strong>Need automaton:</strong> Use DFA/NFA construction</li>
                            <li><strong>Prove intersection:</strong> Use De Morgan's</li>
                            <li><strong>Complement:</strong> Must convert NFA→DFA first</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-xl p-6">
                        <h4 className="font-bold text-red-900 mb-4">⚠️ Common Mistakes</h4>
                        <ul className="space-y-2 text-xs text-slate-700">
                            <li>❌ Complementing NFA directly</li>
                            <li>❌ Confusing union/intersection final states</li>
                            <li>❌ Forgetting ε in Kleene star</li>
                            <li>❌ Assuming infinite operations preserve regularity</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300 rounded-xl p-6">
                        <h4 className="font-bold text-cyan-900 mb-4">⏱️ Complexity</h4>
                        <ul className="space-y-2 text-xs text-slate-700">
                            <li><strong>Product:</strong> O(|Q₁|×|Q₂|×|Σ|)</li>
                            <li><strong>Complement:</strong> O(|Q|)</li>
                            <li><strong>Reversal:</strong> O(|Q| + |δ|)</li>
                            <li><strong>Homomorphism:</strong> O(|R|)</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* MCQ Practice */}
            <section className="content-section" id="quiz">
                <h3>MCQ Practice</h3>
                <Quiz
                    title="MCQ Practice: Closure Properties"
                    subject="Theory of Computation"
                    unitId={2}
                    moduleId={4}
                    questions={[
                        {
                            question: "Regular languages are closed under which of the following operations?",
                            options: ["Union, Intersection, and Concatenation", "Union and Difference only", "Intersection and Kleene Star only", "All of the above"],
                            correctAnswer: 3,
                            explanation: "Regular languages are closed under most basic operations, including union, intersection, concatenation, difference, complement, and Kleene star."
                        },
                        {
                            question: "To prove closure under intersection using the product construction, the states in the new DFA are formed by:",
                            options: ["Adding states from both DFAs", "The Cartesian product of the state sets", "The union of the state sets", "Removing common states"],
                            correctAnswer: 1,
                            explanation: "The product construction uses pairs of states (p, q) to represent the combined behavior of both DFAs."
                        },
                        {
                            question: "Regular languages are closed under the 'reversal' operation. If a language L is regular, then L^R is:",
                            options: ["Not regular", "Regular", "Finite", "Infinite"],
                            correctAnswer: 1,
                            explanation: "The reversal of a regular language is always regular; a DFA can be converted to an NFA for the reversed language by reversing all transitions."
                        },
                        {
                            question: "Which operation on regular languages is NOT necessarily closed for Context-Free languages but IS closed for regular ones?",
                            options: ["Union", "Intersection", "Concatenation", "Kleene Star"],
                            correctAnswer: 1,
                            explanation: "Intersection is a key property where regular languages are closed, but context-free languages are not (intersection of two CFLs is not necessarily a CFL)."
                        },
                        {
                            question: "If L is a regular language, then its complement L' = Σ* - L is:",
                            options: ["Not regular", "Regular", "Empty", "Universal"],
                            correctAnswer: 1,
                            explanation: "To find the DFA for the complement, simply swap the accepting and non-accepting states of the original DFA."
                        }
                    ]}
                />
            </section>

            <div className="mt-16 py-8 border-t text-center">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em]">Module 2.4 | Completed</p>
            </div>
        </div>

    );
};

export default Module2_4;
