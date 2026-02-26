'use client';
import React, { useState } from 'react';

const Module2_3: React.FC = () => {
    const [showSolution, setShowSolution] = useState<Record<string, boolean>>({});

    const toggleSolution = (id: string) => {
        setShowSolution(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="module-content">
            {/* Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge font-bold">2.3</div>
                <div className="lesson-title-main">
                    <h1>Proving Languages Not to be Regular</h1>
                    <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-2: Regular Languages | Level: Expert Comprehensive</p>
                </div>
            </div>

            {/* What You'll Master */}
            <section className="content-section">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 text-indigo-900">📋 What You&apos;ll Master</h3>
                    <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-6">Learning Objectives</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "State the Pumping Lemma for regular languages precisely and identify all its conditions and constraints",
                            "Apply the Pumping Lemma as an adversarial game to construct rigorous proofs that specific languages are not regular",
                            "Use closure properties of regular languages as an alternative proof technique for non-regularity",
                            "Apply the Myhill–Nerode theorem to establish a language's non-regularity by demonstrating infinitely many distinguishable equivalence classes",
                            "Analyze and compare multiple proof strategies, selecting the most appropriate method for a given language"
                        ].map((obj, i) => (
                            <div key={i} className="flex gap-3 items-start bg-white p-4 rounded-xl border border-indigo-100">
                                <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                                <p className="text-sm text-gray-700 leading-relaxed">{obj}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Topic Matters */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🔥 Why This Topic Matters</h3>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-6">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Imagine you are a security engineer and someone hands you a specification saying: &quot;Our authentication system uses a finite automaton to validate inputs.&quot; Should you trust it? What if the system needs to match balanced parentheses, or ensure that the number of login attempts equals the number of logout events? If you know that such languages are not regular, you immediately know the claim is false — no DFA or NFA can do the job, no matter how many states it has.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Proving that a language is not regular is one of the most intellectually powerful skills in theoretical computer science. It tells us precisely where finite automata run out of memory. Since DFAs have a fixed number of states, they cannot &quot;count&quot; arbitrarily or &quot;remember&quot; unbounded history. Languages that require such capabilities lie strictly outside the regular class.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        This topic is a cornerstone of the Theory of Computation curriculum and appears heavily in university exams, GATE, and technical interviews at companies like Google, Microsoft, and Amazon. Mastering it means you can reason rigorously about what computers can and cannot do — the foundation of computational thinking.
                    </p>
                </div>

                <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
                    <p className="text-xs font-black text-slate-600 uppercase tracking-widest mb-4">💡 Real-World Applications:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { title: "Compiler Design", desc: "Proving that nested structures (like balanced braces) cannot be handled by lexers (which use DFAs), justifying the need for parsers (CFGs)" },
                            { title: "Protocol Verification", desc: "Showing that certain network protocol properties require pushdown automata or Turing machines, not just FSMs" },
                            { title: "Security Analysis", desc: "Demonstrating that certain input validation requirements exceed the power of regex-based filters, motivating stronger parsing solutions" },
                            { title: "Database Theory", desc: "Establishing which query patterns cannot be expressed as regular languages, guiding query optimization strategies" }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                                <p className="font-bold text-slate-800 mb-2">{item.title}:</p>
                                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deep Dive */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📖 Deep Dive: Regular Languages and Their Limits</h3>
                
                <div className="space-y-8">
                    <div>
                        <h4 className="text-lg font-bold text-indigo-700 mb-3">What Makes a Language Regular?</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            A language L over an alphabet Σ is called <strong>regular</strong> if and only if it can be recognized by a Deterministic Finite Automaton (DFA). Equivalently, it can be described by a regular expression, accepted by a nondeterministic finite automaton (NFA), or generated by a right-linear (or left-linear) grammar. These are all equivalent characterizations — they define exactly the same class of languages.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            The key intuition is that a DFA has a <strong>finite amount of memory</strong>: its memory is encoded entirely in the current state. If a DFA has n states, it can only &quot;remember&quot; one of n possible situations. This finite memory is both its strength (simplicity, efficiency) and its fundamental limitation.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r-lg">
                            <p className="text-sm text-blue-900 italic">
                                When we say a language is <strong>not regular</strong>, we mean: no DFA of any finite size can recognize it. Not a 10-state DFA, not a 10-million-state DFA — none. This is a profound negative result that requires proof.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 rounded-2xl p-8">
                        <p className="text-xs font-black text-slate-600 uppercase tracking-widest mb-4">📌 Key Terminology:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { term: "Regular Language", def: "A language recognized by some DFA (equivalently: NFA, regex, or right-linear grammar)" },
                                { term: "Pumping Lemma", def: "A necessary condition all regular languages must satisfy; used to prove non-regularity by contradiction" },
                                { term: "Pumping Length (p)", def: "The minimum number of states in any DFA for language L; the threshold beyond which pumping applies" },
                                { term: "Pumping", def: "Repeating (or deleting) a middle segment of a long string while keeping it in the language" },
                                { term: "Myhill–Nerode Theorem", def: "A necessary and sufficient condition for regularity based on equivalence classes of strings" },
                                { term: "Distinguishable Strings", def: "Two strings x, y are distinguishable w.r.t. L if there exists z such that exactly one of xz, yz is in L" },
                                { term: "Closure Properties", def: "Regular languages are closed under union, concatenation, star, complement, intersection — used in indirect proofs" },
                                { term: "Contradiction", def: "The logical technique underlying pumping lemma proofs — assume regularity, derive impossibility" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-3 rounded-lg border border-slate-200">
                                    <p className="font-bold text-slate-800 text-sm mb-1">{item.term}</p>
                                    <p className="text-xs text-slate-600 leading-relaxed">{item.def}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-indigo-700 mb-3">Why DFAs Cannot Count Arbitrarily</h4>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Consider the language L = {'{aⁿbⁿ | n ≥ 0}'}, the set of strings with equal numbers of a's followed by equal numbers of b's. To accept this language, an automaton would need to <strong>count</strong> the a's and then verify the same count in b's. But a DFA can only remember which state it's in — and if there are only k states, after seeing more than k a's, the DFA must revisit a state. At that point it has "forgotten" the exact count, and can no longer match the b's correctly.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            This <strong>counting argument</strong> is the conceptual heart of the Pumping Lemma. The formal lemma makes it precise: if a string is long enough to force a state repetition (by the Pigeonhole Principle), then the substring between the repeated states can be "pumped" (repeated or removed) without leaving the language — but for many languages, pumping breaks membership, proving they're not regular.
                        </p>
                    </div>
                </div>
            </section>

            {/* Flowchart: Why DFA Cannot Accept {aⁿbⁿ} */}
            <section className="content-section">
                <div className="bg-white border-2 border-red-200 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-xl font-bold text-red-800 mb-6 text-center">Why a DFA Cannot Accept {'{aⁿbⁿ | n ≥ 0}'}</h3>
                    <p className="text-sm text-red-700 font-bold mb-8 text-center">Finite Memory Problem: DFA with k states cannot distinguish aᵏ from aᵏ⁺¹</p>
                    
                    {/* SVG Flowchart */}
                    <svg viewBox="0 0 800 600" className="w-full h-auto mb-6">
                        <text x="400" y="30" textAnchor="middle" fill="#1f2937" fontSize="16" fontWeight="bold">DFA run on "aaaa..."</text>
                        
                        <circle cx="100" cy="100" r="30" fill="#bbf7d0" stroke="#15803d" strokeWidth="2" />
                        <text x="100" y="105" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">q₀</text>
                        <text x="100" y="145" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">start</text>
                        
                        <circle cx="250" cy="100" r="30" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
                        <text x="250" y="105" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">q₁</text>
                        <text x="250" y="145" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">seen 'a'</text>
                        
                        <circle cx="400" cy="100" r="30" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
                        <text x="400" y="105" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">q₂</text>
                        <text x="400" y="145" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">seen 'aa'</text>
                        
                        <text x="500" y="105" textAnchor="middle" fill="#4b5563" fontSize="24" fontWeight="bold">···</text>
                        
                        <circle cx="600" cy="100" r="30" fill="#fecaca" stroke="#b91c1c" strokeWidth="2" />
                        <text x="600" y="105" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">qₖ</text>
                        <text x="600" y="145" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">trapped!</text>
                        
                        <path d="M 130 100 L 220 100" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <text x="175" y="90" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">a</text>
                        
                        <path d="M 280 100 L 370 100" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <text x="325" y="90" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">a</text>
                        
                        <path d="M 430 100 L 470 100" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <text x="450" y="90" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">a</text>
                        
                        <path d="M 530 100 L 570 100" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                        <text x="550" y="90" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">a</text>
                        
                        <path d="M 600 130 Q 650 180 600 230 Q 550 180 600 130" stroke="#b91c1c" strokeWidth="2" fill="none" strokeDasharray="5,5" markerEnd="url(#arrowhead-red)" />
                        <text x="680" y="180" textAnchor="middle" fill="#991b1b" fontSize="12" fontWeight="bold">state repeats!</text>
                        
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
                            </marker>
                            <marker id="arrowhead-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#b91c1c" />
                            </marker>
                        </defs>
                        
                        <rect x="150" y="280" width="500" height="120" rx="15" fill="#fef9c3" stroke="#a16207" strokeWidth="2" />
                        <text x="400" y="310" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="900">🐦 Pigeonhole Principle</text>
                        <text x="400" y="340" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="600">After k+1 steps reading 'a',</text>
                        <text x="400" y="365" textAnchor="middle" fill="#1f2937" fontSize="14" fontWeight="600">some state qᵢ must repeat.</text>
                        <text x="400" y="390" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">DFA forgets the exact count!</text>
                        
                        <rect x="50" y="450" width="700" height="80" rx="15" fill="#fee2e2" stroke="#b91c1c" strokeWidth="2" />
                        <text x="400" y="475" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">Any DFA for {'{aⁿbⁿ}'} would need INFINITELY many states — impossible for a finite automaton!</text>
                        <text x="400" y="505" textAnchor="middle" fill="#7f1d1d" fontSize="16" fontWeight="900">Therefore, {'{aⁿbⁿ | n ≥ 0}'} is NOT regular.</text>
                    </svg>
                    
                    <p className="text-xs text-center text-gray-500 italic mt-4">Figure 1: The fundamental memory limitation of DFAs — they cannot count arbitrarily high</p>
                </div>
            </section>

            {/* Overview of Proof Methods */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Overview of Proof Methods</h3>
                <p className="text-gray-700 leading-relaxed mb-6">There are three main approaches to prove a language is not regular. Each has different strengths depending on the language in question:</p>
                
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-3 text-left font-bold">Method</th>
                                <th className="border border-gray-300 p-3 text-left font-bold">When to Use</th>
                                <th className="border border-gray-300 p-3 text-left font-bold">Difficulty</th>
                                <th className="border border-gray-300 p-3 text-left font-bold">Key Insight</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-3 font-bold text-indigo-700">Pumping Lemma</td>
                                <td className="border border-gray-300 p-3">Most general cases; default first attempt</td>
                                <td className="border border-gray-300 p-3">Medium</td>
                                <td className="border border-gray-300 p-3">Long strings can be "pumped" — if pumping breaks membership, not regular</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3 font-bold text-green-700">Closure Properties</td>
                                <td className="border border-gray-300 p-3">When L intersected/complemented with a known regular language gives a non-regular language</td>
                                <td className="border border-gray-300 p-3">Easy–Medium</td>
                                <td className="border border-gray-300 p-3">Regular languages are closed; if operations on L yield non-regular, L isn't regular</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3 font-bold text-purple-700">Myhill–Nerode Theorem</td>
                                <td className="border border-gray-300 p-3">When you need a necessary AND sufficient condition; rigorous classification</td>
                                <td className="border border-gray-300 p-3">Hard</td>
                                <td className="border border-gray-300 p-3">Infinitely many distinguishable strings → infinitely many states needed → not regular</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* The Pumping Lemma */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🔁 The Pumping Lemma — The Main Weapon</h3>
                
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-3xl p-10 shadow-xl mb-8">
                    <h4 className="text-xl font-bold text-indigo-900 mb-6 text-center">Statement of the Pumping Lemma</h4>
                    <div className="bg-white border-2 border-indigo-200 rounded-2xl p-8">
                        <p className="text-sm font-black text-indigo-800 uppercase tracking-widest mb-4 text-center">Pumping Lemma for Regular Languages</p>
                        <div className="space-y-4 text-gray-800">
                            <p className="leading-relaxed">If L is a regular language, then there exists an integer <strong>p ≥ 1</strong> (the "pumping length") such that every string <strong>s ∈ L</strong> with <strong>|s| ≥ p</strong> can be written as <strong>s = xyz</strong>, where:</p>
                            <div className="bg-indigo-50 p-6 rounded-xl space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                                    <p className="font-mono font-bold text-indigo-900">|y| ≥ 1 <span className="font-sans font-normal text-gray-600 ml-4">(y is non-empty)</span></p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                                    <p className="font-mono font-bold text-indigo-900">|xy| ≤ p <span className="font-sans font-normal text-gray-600 ml-4">(x and y together are at most p characters)</span></p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                                    <p className="font-mono font-bold text-indigo-900">∀ i ≥ 0, xy<sup>i</sup>z ∈ L <span className="font-sans font-normal text-gray-600 ml-4">(pumping y any number of times stays in L)</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
                    <p className="text-sm font-black text-yellow-900 uppercase tracking-widest mb-4">⚠️ Critical Understanding — What the Lemma Says vs. Does NOT Say:</p>
                    <div className="space-y-3 text-sm">
                        <p className="text-green-800">✅ The lemma says: If L is regular, THEN the pumping property holds.</p>
                        <p className="text-red-800">❌ It does NOT say: If the pumping property holds, then L is regular. (The converse is FALSE!)</p>
                        <p className="text-green-800">✅ To prove L is NOT regular, we use the <strong>contrapositive</strong>: If the pumping property FAILS, then L is NOT regular.</p>
                        <p className="text-yellow-900 font-bold">⚠️ The pumping lemma is a NECESSARY condition, not a sufficient one. Some non-regular languages satisfy it!</p>
                    </div>
                </div>
            </section>

            {/* Adversarial Game Framework */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Adversarial Game Framework</h3>
                <p className="text-gray-700 leading-relaxed mb-6">The pumping lemma proof is best understood as a two-player game between you (the prover) and an adversary. Understanding this game structure prevents many common mistakes:</p>
                
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-3xl p-10 shadow-xl">
                    <h4 className="text-xl font-bold text-slate-900 mb-6 text-center">The Pumping Lemma Proof Game</h4>
                    
                    {/* SVG Game Flow */}
                    <svg viewBox="0 0 600 800" className="w-full h-auto">
                        <defs>
                            <marker id="arrow-game" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
                            </marker>
                            <marker id="arrow-game-green" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#15803d" />
                            </marker>
                            <marker id="arrow-game-red" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#b91c1c" />
                            </marker>
                        </defs>
                        
                        <rect x="200" y="20" width="200" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" strokeWidth="2" />
                        <text x="300" y="45" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">🎮 GAME START</text>
                        <text x="300" y="65" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">Goal: Prove L is NOT regular</text>
                        
                        <path d="M 300 80 L 300 110" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrow-game)" />
                        
                        <rect x="150" y="110" width="300" height="70" rx="10" fill="#fecaca" stroke="#b91c1c" strokeWidth="2" />
                        <text x="300" y="135" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">👹 ADVERSARY&apos;S MOVE 1</text>
                        <text x="300" y="155" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">Adversary chooses pumping length p</text>
                        <text x="300" y="170" textAnchor="middle" fill="#4b5563" fontSize="11" fontStyle="italic">(We don&apos;t know p in advance!)</text>
                        
                        <path d="M 300 180 L 300 210" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrow-game)" />
                        
                        <rect x="150" y="210" width="300" height="70" rx="10" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
                        <text x="300" y="235" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">🧠 YOUR MOVE 1</text>
                        <text x="300" y="255" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">You choose string s ∈ L with |s| ≥ p</text>
                        <text x="300" y="270" textAnchor="middle" fill="#4b5563" fontSize="11" fontStyle="italic">(Must work for ANY p the adversary picks)</text>
                        
                        <path d="M 300 280 L 300 310" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrow-game)" />
                        
                        <rect x="150" y="310" width="300" height="80" rx="10" fill="#fecaca" stroke="#b91c1c" strokeWidth="2" />
                        <text x="300" y="335" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">👹 ADVERSARY&apos;S MOVE 2</text>
                        <text x="300" y="355" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">Adversary splits s = xyz</text>
                        <text x="300" y="370" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">satisfying |y|≥1 and |xy|≤p</text>
                        <text x="300" y="385" textAnchor="middle" fill="#4b5563" fontSize="11" fontStyle="italic">(Adversary picks the split to make your life hard)</text>
                        
                        <path d="M 300 390 L 300 420" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrow-game)" />
                        
                        <rect x="150" y="420" width="300" height="70" rx="10" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
                        <text x="300" y="445" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">🧠 YOUR MOVE 2</text>
                        <text x="300" y="465" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">You choose pumping exponent i ≥ 0</text>
                        <text x="300" y="480" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">such that xy<tspan baseline-shift="super" fontSize="9">i</tspan>z ∉ L</text>
                        
                        <path d="M 300 490 L 300 520" stroke="#4b5563" strokeWidth="2" fill="none" markerEnd="url(#arrow-game)" />
                        
                        <polygon points="300,520 400,570 300,620 200,570" fill="#fef9c3" stroke="#a16207" strokeWidth="2" />
                        <text x="300" y="565" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">Does xy<tspan baseline-shift="super" fontSize="9">i</tspan>z ∉ L</text>
                        <text x="300" y="580" textAnchor="middle" fill="#111827" fontSize="12" fontWeight="bold">for your chosen i?</text>
                        
                        <path d="M 400 570 L 480 570 L 480 680" stroke="#15803d" strokeWidth="2" fill="none" markerEnd="url(#arrow-game-green)" />
                        <text x="440" y="565" textAnchor="middle" fill="#15803d" fontSize="12" fontWeight="bold">✅ YES</text>
                        
                        <rect x="400" y="680" width="150" height="60" rx="10" fill="#bbf7d0" stroke="#15803d" strokeWidth="2" />
                        <text x="475" y="705" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">🏆 YOU WIN!</text>
                        <text x="475" y="725" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">L is NOT regular</text>
                        
                        <path d="M 200 570 L 120 570 L 120 680" stroke="#b91c1c" strokeWidth="2" fill="none" markerEnd="url(#arrow-game-red)" />
                        <text x="160" y="565" textAnchor="middle" fill="#b91c1c" fontSize="12" fontWeight="bold">❌ NO</text>
                        
                        <rect x="50" y="680" width="140" height="60" rx="10" fill="#fecaca" stroke="#b91c1c" strokeWidth="2" />
                        <text x="120" y="705" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">😞 YOU LOSE!</text>
                        <text x="120" y="725" textAnchor="middle" fill="#374151" fontSize="12" fontWeight="600">Choose a better string s</text>
                    </svg>
                    
                    <p className="text-xs text-center text-gray-500 italic mt-6">Figure 2: The pumping lemma proof as an adversarial two-player game</p>
                </div>
            </section>

            {/* Proof Template */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Proof Template</h3>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-10 shadow-xl">
                    <h4 className="text-xl font-bold text-purple-900 mb-6 text-center">📋 Universal Proof Template for Pumping Lemma</h4>
                    
                    <div className="space-y-6">
                        {[
                            { num: 1, text: "Assume for contradiction that L is regular. Then by the Pumping Lemma, there exists a pumping length p ≥ 1." },
                            { num: 2, text: "Choose a specific string s ∈ L with |s| ≥ p. [Your choice — must depend on p but work for any value of p. Typically use p as the exponent: s = aᵖbᵖ or similar.]" },
                            { num: 3, text: "Analyze all possible splits s = xyz satisfying conditions (1) and (2): |y| ≥ 1, |xy| ≤ p. Characterize what y can look like based on these constraints. [This is where you use |xy| ≤ p to limit where y can lie in s.]" },
                            { num: 4, text: "For each possible form of y, choose an i (usually i = 0 or i = 2) and show that xyⁱz ∉ L. Explain precisely why the pumped string fails membership in L." },
                            { num: 5, text: "Conclude contradiction: Since xyⁱz ∉ L for our chosen i, the Pumping Lemma's condition (3) is violated. This contradicts our assumption. Therefore, L is NOT regular. □" }
                        ].map((step) => (
                            <div key={step.num} className="flex gap-4 items-start bg-white p-6 rounded-xl border-2 border-purple-200">
                                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center text-lg font-bold shrink-0">{step.num}</div>
                                <p className="text-sm text-gray-700 leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visualizing xyz Decomposition */}
            <section className="content-section">
                <div className="bg-white border-2 border-cyan-200 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-xl font-bold text-cyan-800 mb-6 text-center">Visualizing the xyz Decomposition</h3>
                    <p className="text-sm text-cyan-700 font-bold mb-8 text-center">Decomposition of s = xyz in the DFA Run</p>
                    
                    <svg viewBox="0 0 800 650" className="w-full h-auto mb-6">
                        <defs>
                            <marker id="arrow-xyz" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
                            </marker>
                            <marker id="arrow-loop" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
                            </marker>
                        </defs>
                        
                        <rect x="50" y="50" width="700" height="120" rx="10" fill="#f0f9ff" stroke="#0891b2" strokeWidth="2" />
                        
                        <rect x="70" y="80" width="180" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                        <text x="160" y="115" textAnchor="middle" fill="#1e40af" fontSize="24" fontWeight="bold">x</text>
                        
                        <rect x="270" y="80" width="180" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="360" y="115" textAnchor="middle" fill="#92400e" fontSize="24" fontWeight="bold">y</text>
                        
                        <rect x="470" y="80" width="260" height="60" rx="8" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
                        <text x="600" y="115" textAnchor="middle" fill="#065f46" fontSize="24" fontWeight="bold">z</text>
                        
                        <text x="360" y="35" textAnchor="middle" fill="#0891b2" fontSize="14" fontWeight="bold">|xy| ≤ p (within first p chars)</text>
                        <path d="M 70 40 L 450 40" stroke="#0891b2" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <circle cx="70" cy="40" r="4" fill="#0891b2" />
                        <circle cx="450" cy="40" r="4" fill="#0891b2" />
                        
                        <text x="360" y="190" textAnchor="middle" fill="#92400e" fontSize="14" fontWeight="bold">|y| ≥ 1</text>
                        <path d="M 270 180 L 450 180" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                        <circle cx="270" cy="180" r="4" fill="#f59e0b" />
                        <circle cx="450" cy="180" r="4" fill="#f59e0b" />
                        
                        <text x="400" y="240" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">DFA States During Run:</text>
                        
                        <circle cx="100" cy="320" r="35" fill="#bbf7d0" stroke="#15803d" strokeWidth="3" />
                        <text x="100" y="328" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">q₀</text>
                        <text x="100" y="375" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="600">x processed</text>
                        
                        <circle cx="280" cy="320" r="35" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" />
                        <text x="280" y="328" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">qᵢ</text>
                        
                        <circle cx="460" cy="320" r="35" fill="#fef3c7" stroke="#f59e0b" strokeWidth="3" />
                        <text x="460" y="328" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">qᵢ</text>
                        
                        <circle cx="640" cy="320" r="35" fill="#d1fae5" stroke="#10b981" strokeWidth="3" />
                        <text x="640" y="328" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">qⱼ</text>
                        <text x="640" y="375" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="600">z processed</text>
                        
                        <path d="M 135 320 L 245 320" stroke="#4b5563" strokeWidth="3" fill="none" markerEnd="url(#arrow-xyz)" />
                        <path d="M 315 320 L 425 320" stroke="#4b5563" strokeWidth="3" fill="none" markerEnd="url(#arrow-xyz)" />
                        <path d="M 495 320 L 605 320" stroke="#4b5563" strokeWidth="3" fill="none" markerEnd="url(#arrow-xyz)" />
                        
                        <path d="M 280 285 Q 370 220 460 285" stroke="#dc2626" strokeWidth="3" fill="none" strokeDasharray="8,4" markerEnd="url(#arrow-loop)" />
                        <text x="370" y="250" textAnchor="middle" fill="#dc2626" fontSize="16" fontWeight="bold">y loops back!</text>
                        
                        <rect x="50" y="420" width="700" height="80" rx="15" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="400" y="450" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="900">REPEATED state → pumping!</text>
                        <text x="400" y="480" textAnchor="middle" fill="#78350f" fontSize="15" fontWeight="600">The segment y can be repeated (pumped) or deleted,</text>
                        <text x="400" y="500" textAnchor="middle" fill="#78350f" fontSize="15" fontWeight="600">and the DFA will still reach the same state qᵢ!</text>
                        
                        <rect x="50" y="530" width="700" height="80" rx="15" fill="#e0f2fe" stroke="#0891b2" strokeWidth="2" />
                        <text x="400" y="560" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">Key Insight: State qᵢ appears twice in the run!</text>
                        <text x="400" y="585" textAnchor="middle" fill="#0c4a6e" fontSize="14" fontWeight="600">This means we can pump y (repeat it 0, 1, 2, ... times)</text>
                        <text x="400" y="605" textAnchor="middle" fill="#0c4a6e" fontSize="14" fontWeight="600">and still follow a valid path in the DFA.</text>
                    </svg>
                    
                    <p className="text-xs text-center text-gray-500 italic mt-4">Figure 3: The xyz decomposition corresponds to a repeated state in the DFA — the segment y can be looped</p>
                </div>
            </section>

            {/* Choosing the Right String */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choosing the Right String s</h3>
                <p className="text-gray-700 leading-relaxed mb-6">The choice of string s is the most critical decision in the proof. A good choice makes the analysis clean; a bad choice makes it impossible. Here are the key principles:</p>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-10 shadow-xl">
                    <h4 className="text-xl font-bold text-green-900 mb-6">✅ Principles for Choosing s:</h4>
                    <div className="space-y-4">
                        {[
                            { title: "Use p as a parameter:", desc: "Since p is unknown, define s in terms of p (e.g., s = aᵖbᵖ, s = aᵖ²)" },
                            { title: "Make the \"counting\" visible:", desc: "Strings where equal numbers matter (like aⁿbⁿ) expose the DFA's inability to count" },
                            { title: "Ensure pumping breaks membership:", desc: "After adding copies of y, the resulting string should clearly leave L" },
                            { title: "Keep it simple:", desc: "The simplest string that satisfies |s| ≥ p and reveals the language's structure is best" },
                            { title: "Use i=0 (delete y) or i=2 (double y):", desc: "These are the most commonly productive choices for showing pumped strings leave L" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-xl border-2 border-green-200">
                                <p className="font-bold text-green-800 mb-2">{item.title}</p>
                                <p className="text-sm text-gray-700">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Worked Examples */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📝 Worked Examples — Classic Proofs</h3>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-3xl p-10 shadow-xl">
                    <h4 className="text-xl font-bold text-blue-900 mb-4">🔵 Example 1: L = {'{aⁿbⁿ | n ≥ 0}'} — The Classic Non-Regular Language</h4>
                    
                    <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-6">
                        <p className="font-bold text-blue-800 mb-3">Language: L = {'{aⁿbⁿ | n ≥ 0}'} — equal numbers of a's followed by b's</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-semibold text-green-700 mb-2">Examples in L:</p>
                                <p className="text-gray-700">ε, ab, aabb, aaabbb, aaaabbbb</p>
                            </div>
                            <div>
                                <p className="font-semibold text-red-700 mb-2">Examples NOT in L:</p>
                                <p className="text-gray-700">ab², a²b, aba, aab</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-8">
                        <h5 className="text-lg font-bold text-indigo-900 mb-6 text-center">📝 Complete Proof by Pumping Lemma</h5>
                        
                        <div className="space-y-6">
                            <div className="bg-white p-5 rounded-xl border-2 border-indigo-200">
                                <p className="font-bold text-indigo-800 mb-2">Assumption:</p>
                                <p className="text-gray-700">Assume for contradiction that L is regular. Let p be the pumping length guaranteed by the Pumping Lemma.</p>
                            </div>
                            
                            <div className="bg-white p-5 rounded-xl border-2 border-indigo-200">
                                <p className="font-bold text-indigo-800 mb-2">Choose s:</p>
                                <p className="text-gray-700 mb-2">Let s = aᵖbᵖ. Then s ∈ L (since it has equal a's and b's) and |s| = 2p ≥ p. ✓</p>
                            </div>
                            
                            <div className="bg-white p-5 rounded-xl border-2 border-indigo-200">
                                <p className="font-bold text-indigo-800 mb-2">Analyze splits s = xyz:</p>
                                <p className="text-gray-700 mb-3">By condition |xy| ≤ p, both x and y lie entirely within the first p characters (which are all a's). So x = aʲ for some j ≥ 0, y = aᵏ for some k ≥ 1 (since |y| ≥ 1), and z = aᵖ⁻ʲ⁻ᵏbᵖ.</p>
                                <p className="text-gray-700 font-mono bg-gray-50 p-3 rounded">Thus: x = aʲ, y = aᵏ (k ≥ 1), z = aᵖ⁻ʲ⁻ᵏbᵖ</p>
                            </div>
                            
                            <div className="bg-white p-5 rounded-xl border-2 border-indigo-200">
                                <p className="font-bold text-indigo-800 mb-2">Pump with i = 2:</p>
                                <p className="text-gray-700 mb-2">xy²z = aʲ · (aᵏ)² · aᵖ⁻ʲ⁻ᵏbᵖ = aʲ⁺²ᵏ⁺ᵖ⁻ʲ⁻ᵏbᵖ = aᵖ⁺ᵏbᵖ.</p>
                                <p className="text-gray-700">Since k ≥ 1, this string has p+k a's but only p b's. Since p+k ≠ p, this string is NOT in L. ✗</p>
                            </div>
                            
                            <div className="bg-white p-5 rounded-xl border-2 border-red-200">
                                <p className="font-bold text-red-800 mb-2">Contradiction:</p>
                                <p className="text-gray-700 mb-3">Condition (3) of the Pumping Lemma says xy²z ∈ L, but we showed xy²z ∉ L. Contradiction! Our assumption was wrong.</p>
                                <p className="text-lg font-bold text-red-900 text-center">∴ L = {'{aⁿbⁿ | n ≥ 0}'} is NOT regular. ∎</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pumping Visualization */}
            <section className="content-section">
                <div className="bg-white border-2 border-purple-200 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-xl font-bold text-purple-800 mb-6 text-center">Visualizing the Pumping — Why Pumping Breaks Membership</h3>
                    
                    <svg viewBox="0 0 800 700" className="w-full h-auto mb-6">
                        <defs>
                            <marker id="arrow-pump" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
                            </marker>
                        </defs>
                        
                        <text x="400" y="30" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">Original: s = aᵖbᵖ ∈ L</text>
                        
                        <rect x="50" y="60" width="700" height="150" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="3" />
                        
                        <rect x="80" y="90" width="100" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                        <text x="130" y="125" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">x = aʲ</text>
                        
                        <rect x="200" y="90" width="100" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="250" y="125" textAnchor="middle" fill="#92400e" fontSize="16" fontWeight="bold">y = aᵏ</text>
                        
                        <rect x="320" y="90" width="180" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                        <text x="410" y="125" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">aᵖ⁻ʲ⁻ᵏ</text>
                        
                        <rect x="520" y="90" width="180" height="60" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
                        <text x="610" y="125" textAnchor="middle" fill="#991b1b" fontSize="16" fontWeight="bold">bᵖ</text>
                        
                        <text x="300" y="180" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="bold">p a's total</text>
                        <path d="M 80 170 L 500 170" stroke="#15803d" strokeWidth="2" strokeDasharray="5,5" />
                        
                        <text x="610" y="180" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">p b's total</text>
                        <path d="M 520 170 L 700 170" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" />
                        
                        <text x="750" y="125" textAnchor="middle" fill="#15803d" fontSize="20" fontWeight="bold">✓</text>
                        <text x="400" y="200" textAnchor="middle" fill="#15803d" fontSize="14" fontWeight="bold">→ BALANCED ✓</text>
                        
                        <path d="M 400 220 L 400 270" stroke="#7c3aed" strokeWidth="3" markerEnd="url(#arrow-pump)" />
                        <text x="450" y="250" textAnchor="start" fill="#7c3aed" fontSize="16" fontWeight="bold">Pump i=2</text>
                        
                        <text x="400" y="310" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">After pump i=2: xy²z = aᵖ⁺ᵏbᵖ ∉ L (unbalanced!)</text>
                        
                        <rect x="50" y="340" width="700" height="150" rx="10" fill="#fef2f2" stroke="#dc2626" strokeWidth="3" />
                        
                        <rect x="80" y="370" width="100" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                        <text x="130" y="405" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">x = aʲ</text>
                        
                        <rect x="200" y="370" width="100" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="250" y="405" textAnchor="middle" fill="#92400e" fontSize="16" fontWeight="bold">y = aᵏ</text>
                        
                        <rect x="320" y="370" width="100" height="60" rx="8" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="370" y="405" textAnchor="middle" fill="#92400e" fontSize="16" fontWeight="bold">y = aᵏ</text>
                        
                        <rect x="440" y="370" width="120" height="60" rx="8" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                        <text x="500" y="405" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">aᵖ⁻ʲ⁻ᵏ</text>
                        
                        <rect x="580" y="370" width="120" height="60" rx="8" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
                        <text x="640" y="405" textAnchor="middle" fill="#991b1b" fontSize="16" fontWeight="bold">bᵖ</text>
                        
                        <text x="310" y="460" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">p+k a's (k≥1 EXTRA)</text>
                        <path d="M 80 450 L 560 450" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" />
                        
                        <text x="640" y="460" textAnchor="middle" fill="#dc2626" fontSize="14" fontWeight="bold">still p b's</text>
                        <path d="M 580 450 L 700 450" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" />
                        
                        <text x="400" y="480" textAnchor="middle" fill="#dc2626" fontSize="20" fontWeight="bold">≠</text>
                        
                        <rect x="50" y="530" width="700" height="120" rx="15" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="400" y="565" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="900">Key Insight: Pumping adds extra a's but not extra b's</text>
                        <text x="400" y="595" textAnchor="middle" fill="#78350f" fontSize="15" fontWeight="600">The balance required for membership in L is destroyed!</text>
                        <text x="400" y="625" textAnchor="middle" fill="#78350f" fontSize="15" fontWeight="600">This proves the pumping property fails, so L is NOT regular.</text>
                    </svg>
                    
                    <p className="text-xs text-center text-gray-500 italic mt-4">Figure 4: Pumping adds extra a's but not extra b's, destroying the balance required for membership</p>
                </div>
            </section>

            {/* More Examples */}
            <section className="content-section">
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-yellow-900 mb-4">🟡 Example 2: L = {'{aⁿ | n is a perfect square}'} — A Tricky Length-Based Language</h4>
                        <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 mb-6">
                            <p className="font-bold text-yellow-800 mb-3">Language: L = {'{aⁿ | n = k² for some k ≥ 0}'}</p>
                            <p className="text-sm text-gray-700 mb-2"><strong>Examples in L:</strong> ε (0²=0), a (1²=1), aaaa (2²=4), aaaaaaaaa (3²=9), a¹⁶ (4²=16)</p>
                            <p className="text-sm text-gray-700"><strong>Key Property:</strong> The gaps between consecutive squares grow: 1, 3, 5, 7, 9, ... (consecutive squares differ by 2k+1)</p>
                        </div>
                        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-8">
                            <h5 className="text-lg font-bold text-amber-900 mb-6 text-center">📝 Complete Proof</h5>
                            <div className="space-y-4 text-sm">
                                <p className="text-gray-700"><strong>Assumption:</strong> Suppose L is regular. Let p be the pumping length.</p>
                                <p className="text-gray-700"><strong>Choose s:</strong> Let s = aᵖ². Then s ∈ L (since p² is a perfect square) and |s| = p² ≥ p. ✓</p>
                                <p className="text-gray-700"><strong>Analyze splits:</strong> Write s = xyz with |y| ≥ 1 and |xy| ≤ p. Then y = aᵏ for some 1 ≤ k ≤ p.</p>
                                <p className="text-gray-700"><strong>Pump with i = 2:</strong> xy²z = aᵖ²⁺ᵏ. For this to be in L, p²+k must be a perfect square. The next perfect square after p² is (p+1)² = p²+2p+1. We need p²+k = (p+1)², i.e., k = 2p+1. But k ≤ p &lt; 2p+1 for p ≥ 1. Contradiction! So xy²z ∉ L.</p>
                                <p className="text-lg font-bold text-amber-900 text-center mt-4">∴ L = {'{aⁿ | n is a perfect square}'} is NOT regular. ∎</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-orange-900 mb-4">🟠 Example 3: L = {'{0ⁿ1ⁿ0ⁿ | n ≥ 1}'} — Triple Synchronization</h4>
                        <div className="bg-white border-2 border-orange-200 rounded-2xl p-6 mb-6">
                            <p className="font-bold text-orange-800 mb-3">Language: L = {'{0ⁿ1ⁿ0ⁿ | n ≥ 1}'} — equal blocks of 0s, 1s, and 0s</p>
                            <p className="text-sm text-gray-700"><strong>Examples in L:</strong> 010, 001100, 000111000</p>
                        </div>
                        <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-8">
                            <h5 className="text-lg font-bold text-red-900 mb-6 text-center">📝 Complete Proof</h5>
                            <div className="space-y-4 text-sm">
                                <p className="text-gray-700">Assume L is regular. Let p be the pumping length.</p>
                                <p className="text-gray-700"><strong>Choose s:</strong> Let s = 0ᵖ1ᵖ0ᵖ ∈ L with |s| = 3p ≥ p.</p>
                                <p className="text-gray-700"><strong>Analyze splits:</strong> Since |xy| ≤ p and the first p characters are all 0's, x and y consist entirely of 0's. So x = 0ʲ, y = 0ᵏ (k ≥ 1), z = 0ᵖ⁻ʲ⁻ᵏ1ᵖ0ᵖ.</p>
                                <p className="text-gray-700"><strong>Pump with i = 0 (delete y):</strong> xy⁰z = xz = 0ᵖ⁻ᵏ1ᵖ0ᵖ. This has p-k zeros, then p ones, then p zeros. Since k ≥ 1, we have p-k &lt; p ≠ p, so the three blocks are NOT all equal. Thus xy⁰z ∉ L. Contradiction!</p>
                                <p className="text-lg font-bold text-red-900 text-center mt-4">∴ L = {'{0ⁿ1ⁿ0ⁿ | n ≥ 1}'} is NOT regular. ∎</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-green-900 mb-4">🟢 Example 4: Using Closure Properties — L = {'{w ∈ {a,b}* | #a(w) = #b(w)}'}</h4>
                        <div className="bg-white border-2 border-green-200 rounded-2xl p-6 mb-6">
                            <p className="font-bold text-green-800 mb-3">Language: Strings with equal numbers of a's and b's</p>
                            <p className="text-sm text-gray-700"><strong>Strategy:</strong> Intersect with a known regular language to produce a known non-regular language</p>
                        </div>
                        <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8">
                            <h5 className="text-lg font-bold text-emerald-900 mb-6 text-center">📝 Proof via Closure Properties</h5>
                            <div className="space-y-4 text-sm">
                                <p className="text-gray-700"><strong>1.</strong> Assume for contradiction that L = {'{w | #a(w) = #b(w)}'} is regular.</p>
                                <p className="text-gray-700"><strong>2.</strong> Construct a regular language: The language R = a*b* is clearly regular (it has a simple DFA/regex).</p>
                                <p className="text-gray-700"><strong>3.</strong> Apply closure under intersection: Since regular languages are closed under intersection, L ∩ R must also be regular (if L is regular).</p>
                                <p className="text-gray-700"><strong>4.</strong> Compute the intersection: L ∩ R = {'{w ∈ a*b* | #a(w) = #b(w)}'} = {'{aⁿbⁿ | n ≥ 0}'}. (A string with only a's then b's has equal a's and b's iff it's of the form aⁿbⁿ.)</p>
                                <p className="text-gray-700"><strong>5.</strong> Derive contradiction: But we proved in Example 1 that {'{aⁿbⁿ}'} is NOT regular. So L ∩ R is not regular, contradicting step 3. Therefore, L cannot be regular.</p>
                                <p className="text-lg font-bold text-emerald-900 text-center mt-4">∴ L = {'{w | #a(w) = #b(w)}'} is NOT regular. ∎</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-purple-900 mb-4">🔴 Example 5: Myhill–Nerode Theorem — L = {'{aⁿbⁿ | n ≥ 0}'} Revisited</h4>
                        <div className="bg-pink-50 border-2 border-pink-300 rounded-2xl p-8">
                            <h5 className="text-lg font-bold text-pink-900 mb-6 text-center">📝 Proof via Myhill–Nerode</h5>
                            <div className="space-y-4 text-sm">
                                <p className="text-gray-700"><strong>Strategy:</strong> Show infinitely many distinct equivalence classes of strings under the indistinguishability relation ≡_L.</p>
                                <p className="text-gray-700"><strong>Define distinguishability:</strong> Two strings x and y are L-distinguishable if there exists z such that exactly one of xz, yz is in L.</p>
                                <p className="text-gray-700"><strong>Construct infinite distinguishable set:</strong> Consider the strings {'{aⁱ | i ≥ 0}'}. For any i ≠ j (say i &lt; j), take z = bⁱ. Then: aⁱz = aⁱbⁱ ∈ L (equal a's and b's) ✓, but aʲz = aʲbⁱ ∉ L (j ≠ i, unequal counts) ✗.</p>
                                <p className="text-gray-700"><strong>Conclude:</strong> The strings a⁰, a¹, a², a³, ... are pairwise L-distinguishable. Thus there are infinitely many equivalence classes under ≡_L.</p>
                                <p className="text-gray-700"><strong>Apply Myhill–Nerode:</strong> By the Myhill–Nerode theorem, L is regular if and only if ≡_L has finitely many equivalence classes. Since we have infinitely many, L is NOT regular.</p>
                                <p className="text-lg font-bold text-purple-900 text-center mt-4">∴ L = {'{aⁿbⁿ | n ≥ 0}'} is NOT regular (by Myhill–Nerode). ∎</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Myhill-Nerode Diagram */}
            <section className="content-section">
                <div className="bg-white border-2 border-indigo-200 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-xl font-bold text-indigo-800 mb-6 text-center">Myhill–Nerode: Infinite Equivalence Classes</h3>
                    <p className="text-sm text-indigo-700 font-bold mb-8 text-center">Each aⁱ defines a different equivalence class — infinitely many classes → not regular</p>
                    
                    <svg viewBox="0 0 900 500" className="w-full h-auto mb-6">
                        <defs>
                            <marker id="arrow-mn" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
                            </marker>
                        </defs>
                        
                        <rect x="50" y="50" width="150" height="120" rx="10" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                        <text x="125" y="80" textAnchor="middle" fill="#4f46e5" fontSize="16" fontWeight="bold">[ε]</text>
                        <text x="125" y="105" textAnchor="middle" fill="#111827" fontSize="14">a⁰ = ε</text>
                        <text x="125" y="130" textAnchor="middle" fill="#15803d" fontSize="12">z=ε → ε∈L ✓</text>
                        
                        <rect x="230" y="50" width="150" height="120" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                        <text x="305" y="80" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">[a]</text>
                        <text x="305" y="105" textAnchor="middle" fill="#111827" fontSize="14">a¹</text>
                        <text x="305" y="130" textAnchor="middle" fill="#15803d" fontSize="12">z=b → ab∈L ✓</text>
                        
                        <rect x="410" y="50" width="150" height="120" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="485" y="80" textAnchor="middle" fill="#f59e0b" fontSize="16" fontWeight="bold">[aa]</text>
                        <text x="485" y="105" textAnchor="middle" fill="#111827" fontSize="14">a²</text>
                        <text x="485" y="130" textAnchor="middle" fill="#15803d" fontSize="12">z=bb → aabb∈L ✓</text>
                        
                        <rect x="590" y="50" width="150" height="120" rx="10" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
                        <text x="665" y="80" textAnchor="middle" fill="#dc2626" fontSize="16" fontWeight="bold">[aaa]</text>
                        <text x="665" y="105" textAnchor="middle" fill="#111827" fontSize="14">a³</text>
                        <text x="665" y="130" textAnchor="middle" fill="#15803d" fontSize="12">z=bbb → aaabbb∈L ✓</text>
                        
                        <text x="780" y="110" textAnchor="middle" fill="#4b5563" fontSize="32" fontWeight="bold">···</text>
                        
                        <rect x="50" y="200" width="800" height="100" rx="15" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="450" y="235" textAnchor="middle" fill="#111827" fontSize="20" fontWeight="900">∞ classes!</text>
                        <text x="450" y="265" textAnchor="middle" fill="#78350f" fontSize="16" fontWeight="600">Each aⁱ requires a distinct state to remember the count</text>
                        <text x="450" y="290" textAnchor="middle" fill="#78350f" fontSize="16" fontWeight="600">No finite automaton can have infinitely many states!</text>
                        
                        <rect x="50" y="330" width="800" height="120" rx="15" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                        <text x="450" y="365" textAnchor="middle" fill="#4f46e5" fontSize="20" fontWeight="900">Myhill–Nerode:</text>
                        <text x="450" y="395" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">∞ classes ⟹ ∞ states needed ⟹ NOT regular!</text>
                        <text x="450" y="425" textAnchor="middle" fill="#4b5563" fontSize="14">This is a necessary AND sufficient condition for non-regularity</text>
                    </svg>
                    
                    <p className="text-xs text-center text-gray-500 italic mt-4">Figure 5: Each aⁱ falls in a distinct equivalence class, requiring infinitely many DFA states</p>
                </div>
            </section>

            {/* Video Resources */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🎥 Video Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-lg">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dikEDuepOtI?si=Ekfn6IwOhB07H9XB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg"></iframe>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-lg">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/Ty9tpikilAo?si=1gFvn-cx55VQ5c-d" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg"></iframe>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-lg">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/UiXkJUTkp44?si=zlUhChCmq8exid5z" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg"></iframe>
                    </div>
                    <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 shadow-lg">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/UoFrOT7T7ns?si=YRo1pXi-dle4bwut" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg"></iframe>
                    </div>
                </div>
            </section>

            {/* Other Methods */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Other Methods: Closure Properties & Myhill–Nerode</h3>
                
                <div className="space-y-8">
                    <div>
                        <h4 className="text-xl font-bold text-green-700 mb-4">Method 2: Closure Properties (Indirect Proof)</h4>
                        <p className="text-gray-700 leading-relaxed mb-6">Regular languages are closed under the following operations: union, intersection, complement, concatenation, Kleene star, reversal, homomorphism, and inverse homomorphism. This means if you apply these operations to regular languages, you always get regular languages. We can flip this: if applying an operation to L and a known-regular language produces a known-non-regular language, then L cannot be regular.</p>
                        
                        <div className="bg-white border-2 border-green-200 rounded-3xl p-10 shadow-xl mb-8">
                            <h5 className="text-lg font-bold text-green-800 mb-6 text-center">Closure Properties Strategy</h5>
                            <svg viewBox="0 0 800 400" className="w-full h-auto mb-6">
                                <defs>
                                    <marker id="arrow-closure" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
                                    </marker>
                                </defs>
                                
                                <rect x="50" y="50" width="200" height="80" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                                <text x="150" y="85" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">L = language to test</text>
                                <text x="150" y="110" textAnchor="middle" fill="#3b82f6" fontSize="14">(assume regular)</text>
                                
                                <path d="M 250 90 L 320 90" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-closure)" />
                                <text x="285" y="80" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">∩ with regular R</text>
                                
                                <rect x="320" y="50" width="180" height="80" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                                <text x="410" y="95" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">L ∩ R</text>
                                
                                <path d="M 500 90 L 570 90" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-closure)" />
                                <text x="535" y="80" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">simplifies to</text>
                                
                                <rect x="570" y="50" width="180" height="80" rx="10" fill="#fecaca" stroke="#dc2626" strokeWidth="2" />
                                <text x="660" y="80" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">Known non-regular</text>
                                <text x="660" y="105" textAnchor="middle" fill="#111827" fontSize="14" fontWeight="bold">language M</text>
                                
                                <path d="M 660 130 L 660 180" stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrow-closure)" />
                                <text x="700" y="160" textAnchor="start" fill="#dc2626" fontSize="16" fontWeight="bold">contradiction!</text>
                                
                                <rect x="500" y="180" width="320" height="80" rx="15" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" />
                                <text x="660" y="230" textAnchor="middle" fill="#111827" fontSize="20" fontWeight="900">∴ L is NOT regular</text>
                            </svg>
                            <p className="text-xs text-center text-gray-500 italic">Figure 6: The closure-property proof strategy — reduce to a known non-regular language</p>
                        </div>
                        
                        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
                            <h5 className="text-lg font-bold text-green-800 mb-4">💡 Common Closure Property Tricks</h5>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-green-100">
                                        <tr>
                                            <th className="border border-gray-300 p-3 text-left font-bold">If L is regular, then...</th>
                                            <th className="border border-gray-300 p-3 text-left font-bold">So if this is NOT regular, then L is NOT regular</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 p-3">L ∩ a*b* is regular</td>
                                            <td className="border border-gray-300 p-3">If L ∩ a*b* = {'{aⁿbⁿ}'}, L is not regular</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-3">L̄ (complement of L) is regular</td>
                                            <td className="border border-gray-300 p-3">If L̄ is provably not regular (by pumping lemma), then L is not regular</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-3">L ∩ a*b*c* is regular</td>
                                            <td className="border border-gray-300 p-3">If L ∩ a*b*c* = {'{aⁿbⁿcⁿ}'}, L is not regular</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-3">h(L) is regular for any homomorphism h</td>
                                            <td className="border border-gray-300 p-3">If applying h(L) = {'{aⁿbⁿ}'}, L is not regular</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 p-3">L · R is regular for regular R</td>
                                            <td className="border border-gray-300 p-3">Can sometimes derive contradiction from concatenation</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-xl font-bold text-purple-700 mb-4">Method 3: The Myhill–Nerode Theorem</h4>
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-10 shadow-xl mb-6">
                            <h5 className="text-lg font-bold text-purple-900 mb-4 text-center">Myhill–Nerode Theorem (Statement)</h5>
                            <div className="bg-white border-2 border-purple-200 rounded-2xl p-6">
                                <p className="text-center text-gray-800 mb-4 text-lg">A language L is <strong>regular</strong> if and only if the equivalence relation ≡_L has <strong>finitely many equivalence classes</strong>.</p>
                                <p className="text-center text-gray-700 font-mono bg-gray-50 p-4 rounded">where:   x ≡_L y   iff   ∀z ∈ Σ*, (xz ∈ L ↔ yz ∈ L)</p>
                                <p className="text-center text-indigo-700 font-bold mt-4">The number of equivalence classes = minimum number of states in any DFA for L</p>
                            </div>
                        </div>
                        
                        <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
                            <h5 className="text-lg font-bold text-purple-800 mb-4">📌 How to Use Myhill–Nerode to Prove Non-Regularity:</h5>
                            <div className="space-y-4">
                                {[
                                    { step: "Step 1:", text: "Find an infinite set S = {s₁, s₂, s₃, ...} of strings where any two are L-distinguishable" },
                                    { step: "Step 2:", text: "For each pair sᵢ ≠ sⱼ, find a \"distinguishing string\" z such that exactly one of sᵢz, sⱼz is in L" },
                                    { step: "Step 3:", text: "Conclude that |S| equivalence classes are needed, and since |S| is infinite, the language is not regular" }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white p-4 rounded-xl border-2 border-purple-200">
                                        <span className="font-bold text-purple-700">{item.step}</span>
                                        <span className="text-gray-700 ml-2">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Decision Tree */}
            <section className="content-section">
                <div className="bg-white border-2 border-slate-200 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Comparison of All Three Proof Methods</h3>
                    <svg viewBox="0 0 900 600" className="w-full h-auto mb-6">
                        <defs>
                            <marker id="arrow-tree" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#4b5563" />
                            </marker>
                        </defs>
                        
                        <rect x="250" y="20" width="400" height="60" rx="10" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
                        <text x="450" y="55" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="bold">Language L to prove non-regular</text>
                        
                        <path d="M 450 80 L 450 120" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-tree)" />
                        
                        <polygon points="450,120 550,170 450,220 350,170" fill="#e0e7ff" stroke="#4f46e5" strokeWidth="2" />
                        <text x="450" y="175" textAnchor="middle" fill="#111827" fontSize="16" fontWeight="bold">Which method?</text>
                        
                        <path d="M 350 170 L 150 250" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-tree)" />
                        <path d="M 450 220 L 450 280" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-tree)" />
                        <path d="M 550 170 L 750 250" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-tree)" />
                        
                        <rect x="50" y="250" width="200" height="120" rx="10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                        <text x="150" y="280" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">Pumping Lemma</text>
                        <text x="150" y="305" textAnchor="middle" fill="#111827" fontSize="13">Best for most languages</text>
                        <text x="150" y="330" textAnchor="middle" fill="#4b5563" fontSize="11">Find s, analyze xyz splits,</text>
                        <text x="150" y="350" textAnchor="middle" fill="#4b5563" fontSize="11">pump to get contradiction</text>
                        
                        <rect x="350" y="280" width="200" height="120" rx="10" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
                        <text x="450" y="310" textAnchor="middle" fill="#10b981" fontSize="16" fontWeight="bold">Closure Properties</text>
                        <text x="450" y="335" textAnchor="middle" fill="#111827" fontSize="13">Best when L can be</text>
                        <text x="450" y="355" textAnchor="middle" fill="#111827" fontSize="13">intersected/complemented</text>
                        <text x="450" y="375" textAnchor="middle" fill="#4b5563" fontSize="11">with a regular language</text>
                        <text x="450" y="390" textAnchor="middle" fill="#4b5563" fontSize="11">to yield known non-regular L</text>
                        
                        <rect x="650" y="250" width="200" height="120" rx="10" fill="#fae8ff" stroke="#a855f7" strokeWidth="2" />
                        <text x="750" y="280" textAnchor="middle" fill="#a855f7" fontSize="16" fontWeight="bold">Myhill–Nerode</text>
                        <text x="750" y="305" textAnchor="middle" fill="#111827" fontSize="13">Best for rigorous proof,</text>
                        <text x="750" y="325" textAnchor="middle" fill="#111827" fontSize="13">gives exact DFA size.</text>
                        <text x="750" y="345" textAnchor="middle" fill="#4b5563" fontSize="11">Find infinite set of</text>
                        <text x="750" y="360" textAnchor="middle" fill="#4b5563" fontSize="11">pairwise distinguishable strings</text>
                        
                        <path d="M 150 370 L 150 450 L 450 450" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-tree)" />
                        <path d="M 450 400 L 450 450" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-tree)" />
                        <path d="M 750 370 L 750 450 L 450 450" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow-tree)" />
                        
                        <rect x="250" y="450" width="400" height="80" rx="15" fill="#bbf7d0" stroke="#15803d" strokeWidth="3" />
                        <text x="450" y="500" textAnchor="middle" fill="#111827" fontSize="24" fontWeight="900">✅ L is NOT regular</text>
                    </svg>
                    <p className="text-xs text-center text-gray-500 italic">Figure 7: Decision tree for selecting the right proof method</p>
                </div>
            </section>

            {/* Gallery */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Non-Regular Languages Gallery</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border border-gray-300 p-3 text-left font-bold">Language</th>
                                <th className="border border-gray-300 p-3 text-left font-bold">Alphabet</th>
                                <th className="border border-gray-300 p-3 text-left font-bold">Why Not Regular</th>
                                <th className="border border-gray-300 p-3 text-left font-bold">Best Proof Method</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { lang: "{aⁿbⁿ | n ≥ 0}", alpha: "{a,b}", why: "Needs to count and match", method: "Pumping Lemma" },
                                { lang: "{aⁿbⁿcⁿ | n ≥ 0}", alpha: "{a,b,c}", why: "Triple synchronization", method: "Pumping Lemma" },
                                { lang: "{wwᴿ | w ∈ {a,b}*}", alpha: "{a,b}", why: "Palindromes — needs unbounded matching", method: "Pumping Lemma" },
                                { lang: "{ww | w ∈ {a,b}*}", alpha: "{a,b}", why: "Copy language — needs unbounded memory", method: "Pumping Lemma" },
                                { lang: "{aᵖ | p is prime}", alpha: "{a}", why: "Primes have no simple pattern", method: "Pumping Lemma (i·p trick)" },
                                { lang: "{aⁿ | n is a perfect square}", alpha: "{a}", why: "Gaps between squares grow", method: "Pumping Lemma" },
                                { lang: "{w | #a(w) = #b(w)}", alpha: "{a,b}", why: "Equal character counts", method: "Closure Properties" },
                                { lang: "{balanced parentheses}", alpha: "{(,)}", why: "Nesting requires stack", method: "Myhill–Nerode / Pumping" }
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="border border-gray-300 p-3 font-mono text-indigo-700">{row.lang}</td>
                                    <td className="border border-gray-300 p-3 font-mono">{row.alpha}</td>
                                    <td className="border border-gray-300 p-3">{row.why}</td>
                                    <td className="border border-gray-300 p-3 font-semibold text-green-700">{row.method}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Primes Example */}
            <section className="content-section">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Special Case: {'{aᵖ | p is prime}'}</h3>
                    <div className="bg-white border-2 border-red-200 rounded-2xl p-8">
                        <h4 className="text-lg font-bold text-red-800 mb-6 text-center">📝 Proof that L = {'{aᵖ | p is prime}'} is NOT Regular</h4>
                        <div className="space-y-4 text-sm">
                            <p className="text-gray-700"><strong>1.</strong> Assume L is regular. Let p be the pumping length.</p>
                            <p className="text-gray-700"><strong>2.</strong> Choose s = aᵐ where m is prime and m ≥ p+2. (Such a prime exists by Euclid's theorem.) Then s ∈ L and |s| = m ≥ p. ✓</p>
                            <p className="text-gray-700"><strong>3.</strong> Analyze split: s = xyz with |y| ≥ 1 and |xy| ≤ p. Let |y| = k where 1 ≤ k ≤ p.</p>
                            <p className="text-gray-700"><strong>4.</strong> Pump with i = m+1: xy<sup>m+1</sup>z has length m - k + (m+1)k = m - k + mk + k = m + mk = m(1+k).</p>
                            <p className="text-gray-700"><strong>5.</strong> Since m ≥ 2 and k ≥ 1, we have 1+k ≥ 2, so m(1+k) is composite (a product of two integers each ≥ 2). Therefore xy<sup>m+1</sup>z ∉ L. ✗</p>
                            <p className="text-gray-700"><strong>6.</strong> Contradiction! Our assumption was wrong.</p>
                            <p className="text-lg font-bold text-red-900 text-center mt-4">∴ L = {'{aᵖ | p is prime}'} is NOT regular. ∎</p>
                        </div>
                        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 mt-6">
                            <p className="font-bold text-red-800 mb-2">Key Insight:</p>
                            <p className="text-gray-700">For i = m+1, the pumped string has length m + mk = m(1+k), which is composite (divisible by m ≥ 2 and 1+k ≥ 2). Therefore the pumped string is NOT in L.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem-Solving Practice */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Problem-Solving Practice</h3>
                
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-blue-900 mb-4">📘 Easy Problem — Prove or Disprove</h4>
                        <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-4">
                            <p className="font-bold text-blue-800 mb-2">Problem:</p>
                            <p className="text-gray-700">Is L = {'{aⁿb²ⁿ | n ≥ 0}'} regular? Prove your answer.</p>
                        </div>
                        <button onClick={() => toggleSolution('easy1')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition mb-4">
                            {showSolution['easy1'] ? 'Hide Solution' : 'Show Solution'}
                        </button>
                        {showSolution['easy1'] && (
                            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
                                <h5 className="text-lg font-bold text-blue-800 mb-4">Solution: L is NOT regular</h5>
                                <div className="space-y-3 text-sm">
                                    <p className="text-gray-700"><strong>1.</strong> Assume L is regular. Let p be the pumping length.</p>
                                    <p className="text-gray-700"><strong>2.</strong> Choose s = aᵖb²ᵖ. Then s ∈ L and |s| = 3p ≥ p. ✓</p>
                                    <p className="text-gray-700"><strong>3.</strong> Since |xy| ≤ p and the first p chars are all a's, we have y = aᵏ for 1 ≤ k ≤ p.</p>
                                    <p className="text-gray-700"><strong>4.</strong> Pump with i = 2: xy²z = aᵖ⁺ᵏb²ᵖ. For this to be in L, we need 2(p+k) = 2p, i.e., k = 0. But k ≥ 1. Contradiction!</p>
                                    <p className="text-gray-700"><strong>5.</strong> Alternatively: pump with i = 0: xy⁰z = aᵖ⁻ᵏb²ᵖ. For L membership: 2(p-k) = 2p → k = 0. Contradiction!</p>
                                    <p className="text-lg font-bold text-blue-900 text-center mt-4">Final Answer: L = {'{aⁿb²ⁿ | n ≥ 0}'} is NOT regular. ∎</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-yellow-900 mb-4">📙 Medium Problem</h4>
                        <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6 mb-4">
                            <p className="font-bold text-yellow-800 mb-2">Problem:</p>
                            <p className="text-gray-700">Prove that L = {'{ww | w ∈ {a,b}*}'} (the copy language) is not regular.</p>
                        </div>
                        <button onClick={() => toggleSolution('medium1')} className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-700 transition mb-4">
                            {showSolution['medium1'] ? 'Hide Solution' : 'Show Solution'}
                        </button>
                        {showSolution['medium1'] && (
                            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
                                <h5 className="text-lg font-bold text-yellow-800 mb-4">Solution</h5>
                                <div className="space-y-3 text-sm">
                                    <p className="text-gray-700"><strong>1.</strong> Assume L is regular. Let p be the pumping length.</p>
                                    <p className="text-gray-700"><strong>2.</strong> Choose s = aᵖbaᵖb ∈ L (here w = aᵖb, so ww = aᵖbaᵖb). |s| = 2p+2 ≥ p. ✓</p>
                                    <p className="text-gray-700"><strong>3.</strong> Since |xy| ≤ p and the first p characters are all a's, y = aᵏ for 1 ≤ k ≤ p.</p>
                                    <p className="text-gray-700"><strong>4.</strong> Consider xy²z = aᵖ⁺ᵏbaᵖb. For this to equal ww for some w, the two halves must be identical. The string has length 2p+k+2. For this to be even, k must be even. But k can be odd — so for odd k, xy²z has odd length and thus cannot be ww. ✗</p>
                                    <p className="text-gray-700"><strong>5.</strong> For even k, more careful analysis: the string aᵖ⁺ᵏbaᵖb = ww requires the midpoint split to give equal halves. The 'b' at position p+k+1 and the 'b' at position 2p+k+2 must align, which forces p+k = p, i.e., k = 0. Contradiction since k ≥ 1.</p>
                                    <p className="text-lg font-bold text-yellow-900 text-center mt-4">Final Answer: L = {'{ww | w ∈ {a,b}*}'} is NOT regular. ∎</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-red-900 mb-4">📕 Hard Problem — GATE Level</h4>
                        <div className="bg-white border-2 border-red-200 rounded-2xl p-6 mb-4">
                            <p className="font-bold text-red-800 mb-2">Problem:</p>
                            <p className="text-gray-700">Let L₁ = {'{aⁿbᵐ | n ≠ m}'} and L₂ = {'{aⁿbⁿ | n ≥ 0}'}. Prove that L₁ is not regular using the closure property and the known non-regularity of L₂.</p>
                        </div>
                        <button onClick={() => toggleSolution('hard1')} className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition mb-4">
                            {showSolution['hard1'] ? 'Hide Solution' : 'Show Solution'}
                        </button>
                        {showSolution['hard1'] && (
                            <div className="bg-red-50 border-2 border-red-300 rounded-2xl p-6">
                                <h5 className="text-lg font-bold text-red-800 mb-4">Solution: Using Complement and Closure</h5>
                                <div className="space-y-3 text-sm">
                                    <p className="text-gray-700"><strong>Note:</strong> L₁ = {'{aⁿbᵐ | n ≠ m}'} and L₂ = {'{aⁿbⁿ | n ≥ 0}'} = complement of L₁ within a*b*.</p>
                                    <p className="text-gray-700"><strong>1.</strong> Assume for contradiction that L₁ is regular.</p>
                                    <p className="text-gray-700"><strong>2.</strong> Since regular languages are closed under complement, L̄₁ is also regular.</p>
                                    <p className="text-gray-700"><strong>3.</strong> Now, L̄₁ ∩ a*b* = {'{aⁿbᵐ | n = m}'} ∪ {'{strings not in a*b*}'} intersected with a*b* = {'{aⁿbⁿ | n ≥ 0}'} = L₂.</p>
                                    <p className="text-gray-700"><strong>4.</strong> Since a*b* is regular and if L₁ is regular, then L̄₁ is regular, and L̄₁ ∩ a*b* must be regular. But L̄₁ ∩ a*b* = {'{aⁿbⁿ | n ≥ 0}'} = L₂, which is known to be non-regular. CONTRADICTION!</p>
                                    <p className="text-gray-700"><strong>5.</strong> Therefore our assumption was wrong: L₁ is NOT regular.</p>
                                    <div className="bg-red-100 border-2 border-red-300 rounded-xl p-4 mt-4">
                                        <p className="font-bold text-red-800 mb-2">Key Insight:</p>
                                        <p className="text-gray-700">L₁ is the complement of L₂ restricted to a*b*. Since L₂ is not regular, and regular languages are closed under complement and intersection, L₁ cannot be regular either.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Lab Exercise */}
            <section className="content-section">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-2xl font-bold text-purple-900 mb-6">🛠️ Lab Exercise</h3>
                    <h4 className="text-xl font-bold text-purple-800 mb-4">Build a "Pumping Lemma Proof Checker"</h4>
                    
                    <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-6">
                        <p className="text-sm font-black text-purple-600 uppercase tracking-widest mb-4">📋 Objective:</p>
                        <p className="text-gray-700 mb-4">Write a Python program that, given a specific language (represented as a membership function) and a candidate string s and decomposition (x, y, z), automatically verifies whether pumping breaks membership in the language. This builds intuition for the pumping game.</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-purple-50 p-4 rounded-xl">
                                <p className="font-bold text-purple-800 mb-2">⏱️ Estimated Time:</p>
                                <p className="text-gray-700">45–60 minutes</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl">
                                <p className="font-bold text-purple-800 mb-2">🎯 Learning Goals:</p>
                                <ul className="text-gray-700 list-disc list-inside space-y-1">
                                    <li>Translate abstract pumping lemma to code</li>
                                    <li>Practice identifying breaking i values</li>
                                    <li>Understand adversarial structure</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-6 mb-6">
                        <p className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-4">📝 Instructions:</p>
                        <ol className="space-y-3 text-sm">
                            {[
                                { num: 1, text: "Define Language Functions: Implement Python functions that return True/False for membership in target languages (e.g., is_in_an_bn, is_in_prime_power, is_in_ww)" },
                                { num: 2, text: "Implement the Verifier: Write verify_pumping(lang, x, y, z, p) that checks all i from 0 to 2p+5 and reports which i values produce strings outside the language" },
                                { num: 3, text: "Test Decompositions: For L = {aⁿbⁿ}, try s = \"aaabbb\" with splits (aa, a, bbb), (a, aa, bbb), and (ε, aaa, bbb). Observe which i values break membership." },
                                { num: 4, text: "Enumerate All Valid Splits: Write a function that, given s and p, enumerates ALL valid splits s = xyz satisfying |y| ≥ 1 and |xy| ≤ p" },
                                { num: 5, text: "Find Breaking i: For each valid split, find the smallest i ≥ 0 where xyⁱz ∉ L. If one exists for every split, print \"NON-REGULAR PROOF FOUND\"" },
                                { num: 6, text: "Test Multiple Languages: Run on L = {aⁿbⁿ}, L = {wwᴿ}, L = {primes as unary a's}, and a regular language like L = {a*b*} (where pumping should always succeed)" },
                                { num: 7, text: "Output Report: For each language, print whether all splits can be broken, and provide the witness i for each split" }
                            ].map((step) => (
                                <li key={step.num} className="flex gap-3 items-start">
                                    <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">{step.num}</span>
                                    <p className="text-gray-700">{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                    
                    <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-6 mb-6">
                        <p className="text-sm font-black text-slate-600 uppercase tracking-widest mb-4">📦 Starter Code Sketch (Python):</p>
                        <pre className="bg-slate-900 text-green-400 p-6 rounded-xl overflow-x-auto text-xs font-mono">
{`def is_in_an_bn(s):
    n = len(s) // 2
    return s == 'a'*n + 'b'*n

def all_valid_splits(s, p):
    # Returns all (x,y,z) with |y|>=1, |xy|<=p
    ...

def verify_all_splits(lang_fn, s, p, max_i=20):
    # For each valid split, try i=0..max_i
    ...`}
                        </pre>
                    </div>
                    
                    <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 mb-6">
                        <p className="text-sm font-black text-green-600 uppercase tracking-widest mb-4">✅ Expected Output:</p>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-700 font-mono bg-white p-3 rounded">For L = {'{aⁿbⁿ}'}: "Language appears NON-REGULAR: found breaking i for all 3 valid splits of s='aaabbb' with p=3"</p>
                            <p className="text-gray-700 font-mono bg-white p-3 rounded">For L = a*b*: "All splits have pumping that stays in L — pumping property holds (consistent with regularity)"</p>
                        </div>
                    </div>
                    
                    <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
                        <p className="text-sm font-black text-yellow-600 uppercase tracking-widest mb-4">🎓 Grading Rubric:</p>
                        <div className="space-y-2 text-sm">
                            {[
                                { item: "Correct language membership functions (3 languages)", points: "30 points" },
                                { item: "Correct split enumeration with proper conditions", points: "25 points" },
                                { item: "Correct pumping verification loop", points: "25 points" },
                                { item: "Clear output with breaking i values shown", points: "10 points" },
                                { item: "Tests both regular and non-regular languages", points: "10 points" }
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between items-center bg-white p-3 rounded">
                                    <span className="text-gray-700">{row.item}</span>
                                    <span className="font-bold text-yellow-800">{row.points}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Quiz Section */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📝 Quiz Questions</h3>
                
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-indigo-900 mb-4">Quiz Q9: Numerical (Show your work)</h4>
                        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 mb-4">
                            <p className="text-gray-700 mb-4">Suppose a DFA M has exactly 5 states. What is the pumping length p guaranteed by the Pumping Lemma? If s = "aaaaaa" (six a's) ∈ L(M), what can you conclude about any valid decomposition s = xyz?</p>
                        </div>
                        <button onClick={() => toggleSolution('quiz9')} className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition mb-4">
                            {showSolution['quiz9'] ? 'Hide Answer' : 'Show Answer'}
                        </button>
                        {showSolution['quiz9'] && (
                            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-6">
                                <h5 className="text-lg font-bold text-indigo-800 mb-4">Answer:</h5>
                                <div className="space-y-4 text-sm">
                                    <p className="text-gray-700">The pumping length <strong>p = 5</strong> (number of states).</p>
                                    <p className="text-gray-700">For s = "aaaaaa" with |s| = 6 ≥ p = 5: By the Pigeonhole Principle, reading the first 5 characters visits 6 configurations (states), so some state must repeat. Thus there MUST exist a valid decomposition s = xyz with |y| ≥ 1 and |xy| ≤ 5. Moreover, xy<sup>i</sup>z ∈ L(M) for all i ≥ 0 (since L(M) is regular — the loop in the DFA can be traversed any number of times).</p>
                                    <div className="bg-indigo-100 border-2 border-indigo-300 rounded-xl p-4 mt-4">
                                        <p className="font-bold text-indigo-800 mb-2">Conclusion:</p>
                                        <p className="text-gray-700">For any valid split with |y| = k ≤ 5, all strings aaa...a (removing or repeating k a's) are also in L(M).</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 border-2 border-pink-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-pink-900 mb-4">Quiz Q10: Short Answer</h4>
                        <div className="bg-white border-2 border-pink-200 rounded-2xl p-6 mb-4">
                            <p className="text-gray-700">Explain in 3–4 sentences why the pumping lemma cannot be used to PROVE a language IS regular, and give an example of a non-regular language that satisfies the pumping property.</p>
                        </div>
                        <button onClick={() => toggleSolution('quiz10')} className="bg-pink-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-pink-700 transition mb-4">
                            {showSolution['quiz10'] ? 'Hide Model Answer' : 'Show Model Answer'}
                        </button>
                        {showSolution['quiz10'] && (
                            <div className="bg-pink-50 border-2 border-pink-300 rounded-2xl p-6">
                                <h5 className="text-lg font-bold text-pink-800 mb-4">Model Answer:</h5>
                                <div className="space-y-4 text-sm">
                                    <p className="text-gray-700">The Pumping Lemma states that regularity implies the pumping property (a one-directional implication). The converse — pumping property implies regularity — is logically not guaranteed, since the lemma's proof only works in one direction. A counterexample is the language L = {'{aⁱbʲcᵏ | i = 0 or j = k}'}, which is not regular (it cannot be expressed as a regular expression or accepted by any DFA), yet it can be shown to satisfy the pumping property for all strings of sufficient length. To prove regularity, one must instead construct a DFA, NFA, or regular expression explicitly, or use the Myhill–Nerode theorem which provides a biconditional characterization.</p>
                                    <div className="bg-pink-100 border-2 border-pink-300 rounded-xl p-4 mt-4">
                                        <p className="font-bold text-pink-800 mb-2">Key Points to Include:</p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Pumping lemma is a necessary (not sufficient) condition</li>
                                            <li>Converse is false — some non-regular languages satisfy pumping</li>
                                            <li>Myhill–Nerode gives the biconditional (necessary AND sufficient) condition</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Common Pitfalls */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Pitfalls & How to Avoid Them</h3>
                
                <div className="space-y-6">
                    {[
                        { icon: "🚫", title: "Pitfall #1: Choosing s that depends on the adversary's split", wrong: '"Let p be the pumping length. Choose s = aˣbˣ where x = |y|..." (You don\'t know |y| yet when choosing s!)', reality: "You choose s BEFORE the adversary splits it. s must depend only on p, not on x, y, or z.", fix: "Always express s using p as the only parameter: s = aᵖbᵖ, s = aᵖ²⁺ᵖ, etc." },
                        { icon: "🚫", title: "Pitfall #2: Forgetting to handle ALL valid splits", wrong: '"The adversary might choose y = aᵏ for k = 1, which breaks when pumped i=2."', reality: "You must show that for EVERY valid split (every valid choice of x, y, z), there exists some i that breaks membership. You can't just consider one split.", fix: 'Say "for ANY valid split s = xyz with |y| ≥ 1 and |xy| ≤ p, we have y = aᵏ for 1 ≤ k ≤ p (by constraint analysis), and then pumping with i = 2 gives..." This handles all splits at once.' },
                        { icon: "🚫", title: "Pitfall #3: Using the Pumping Lemma to prove a language IS regular", wrong: '"Since all pumpings of all strings in L stay in L, L must be regular."', reality: "The Pumping Lemma is a one-way implication: regular → pumping. The converse is false.", fix: "To prove regularity, build a DFA/NFA/regex explicitly. The Pumping Lemma is ONLY useful for proving non-regularity." },
                        { icon: "🚫", title: "Pitfall #4: Choosing a string s NOT in L", wrong: '"Let s = aᵖ⁺¹bᵖ" (this has one extra \'a\', so s ∉ {aⁿbⁿ}).', reality: "The Pumping Lemma only applies to strings INSIDE L. If s ∉ L, the lemma says nothing.", fix: 'Always verify s ∈ L before proceeding. State explicitly why s ∈ L (e.g., "s = aᵖbᵖ ∈ L since it has p a\'s and p b\'s").' },
                        { icon: "🚫", title: "Pitfall #5: Incorrect constraint on y's position", wrong: '"y could be anywhere in s, including spanning the middle."', reality: "|xy| ≤ p means xy (x concatenated with y) has total length at most p. So y ends at position ≤ p. This restricts y to the first p characters of s.", fix: "Always explicitly use |xy| ≤ p to determine which part of s y can lie in. For s = aᵖbᵖ, this forces y to be in the a-block." }
                    ].map((pitfall, i) => (
                        <div key={i} className="bg-white border-2 border-red-200 rounded-2xl p-6 shadow-lg">
                            <h4 className="text-lg font-bold text-red-800 mb-4">{pitfall.icon} {pitfall.title}</h4>
                            <div className="space-y-3">
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                    <p className="text-sm font-bold text-red-700 mb-1">Wrong:</p>
                                    <p className="text-sm text-gray-700">{pitfall.wrong}</p>
                                </div>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                                    <p className="text-sm font-bold text-yellow-700 mb-1">Reality:</p>
                                    <p className="text-sm text-gray-700">{pitfall.reality}</p>
                                </div>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                    <p className="text-sm font-bold text-green-700 mb-1">✅ Fix:</p>
                                    <p className="text-sm text-gray-700">{pitfall.fix}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-8 mt-8">
                    <h4 className="text-xl font-bold text-blue-900 mb-4">💡 Exam Tips:</h4>
                    <ul className="space-y-2 text-sm">
                        {[
                            "Always state the three conditions of the Pumping Lemma explicitly at the start of each proof",
                            "Justify your choice of s — state why s ∈ L and why |s| ≥ p",
                            "Use the constraint |xy| ≤ p to limit where y can be and characterize its form",
                            "For i = 0 or i = 2 — always compute the exact length/form of xyⁱz and explain clearly why it's not in L",
                            'End with "contradiction" and "therefore L is not regular" — examiners award marks for the conclusion',
                            "If the pumping lemma seems hard, try closure properties first — intersect with a*b* or a*b*c*"
                        ].map((tip, i) => (
                            <li key={i} className="flex gap-3 items-start">
                                <span className="text-blue-600 font-bold">•</span>
                                <span className="text-gray-700">{tip}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Quick Reference */}
            <section className="content-section">
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-slate-300 rounded-3xl p-10 shadow-xl">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">📄 Quick Reference Cheat Sheet</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white border-2 border-blue-200 rounded-2xl p-6">
                            <h4 className="text-lg font-bold text-blue-800 mb-4">🔑 Pumping Lemma Conditions</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="font-mono text-indigo-700">|y| ≥ 1: <span className="font-sans text-gray-700">y is non-empty</span></li>
                                <li className="font-mono text-indigo-700">|xy| ≤ p: <span className="font-sans text-gray-700">y is within first p chars</span></li>
                                <li className="font-mono text-indigo-700">∀i ≥ 0: xy<sup>i</sup>z ∈ L: <span className="font-sans text-gray-700">all pumpings in L</span></li>
                                <li className="font-mono text-indigo-700">p: <span className="font-sans text-gray-700">number of DFA states</span></li>
                                <li className="font-mono text-indigo-700">Use i=0 or i=2: <span className="font-sans text-gray-700">most useful pumping values</span></li>
                            </ul>
                        </div>
                        
                        <div className="bg-white border-2 border-purple-200 rounded-2xl p-6">
                            <h4 className="text-lg font-bold text-purple-800 mb-4">📐 Proof Template (Quick)</h4>
                            <ol className="space-y-2 text-sm list-decimal list-inside">
                                <li className="text-gray-700">Assume L regular, get length p</li>
                                <li className="text-gray-700">Choose s ∈ L, |s| ≥ p (uses p)</li>
                                <li className="text-gray-700">Analyze valid splits using |xy| ≤ p</li>
                                <li className="text-gray-700">Find i where xy<sup>i</sup>z ∉ L</li>
                                <li className="text-gray-700">State contradiction → L not regular</li>
                            </ol>
                        </div>
                        
                        <div className="bg-white border-2 border-green-200 rounded-2xl p-6">
                            <h4 className="text-lg font-bold text-green-800 mb-4">⚙️ Three Proof Methods</h4>
                            <ul className="space-y-2 text-sm">
                                <li className="text-gray-700"><strong className="text-indigo-700">Pumping Lemma:</strong> General-purpose, default choice</li>
                                <li className="text-gray-700"><strong className="text-green-700">Closure Props:</strong> Intersect with regular L, get known non-regular</li>
                                <li className="text-gray-700"><strong className="text-purple-700">Myhill–Nerode:</strong> Show ∞ distinguishable strings → ∞ classes</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white border-2 border-red-200 rounded-2xl p-6">
                            <h4 className="text-lg font-bold text-red-800 mb-4">❌ Classic Non-Regular Languages</h4>
                            <ul className="space-y-1 text-xs font-mono">
                                <li className="text-gray-700">{'{aⁿbⁿ | n ≥ 0}'}</li>
                                <li className="text-gray-700">{'{aⁿbⁿcⁿ | n ≥ 0}'}</li>
                                <li className="text-gray-700">{'{wwᴿ}'} palindromes</li>
                                <li className="text-gray-700">{'{ww}'} copy language</li>
                                <li className="text-gray-700">{'{aᵖ | p prime}'}</li>
                                <li className="text-gray-700">{'{aⁿ | n = k²}'}</li>
                                <li className="text-gray-700">{'{w | #a(w) = #b(w)}'}</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white border-2 border-yellow-200 rounded-2xl p-6">
                            <h4 className="text-lg font-bold text-yellow-800 mb-4">⚠️ Common Mistakes</h4>
                            <ul className="space-y-1 text-sm">
                                <li className="text-red-700">❌ Choosing s ∉ L</li>
                                <li className="text-red-700">❌ Not handling ALL splits</li>
                                <li className="text-red-700">❌ Using PL to prove regularity</li>
                                <li className="text-red-700">❌ Ignoring |xy| ≤ p constraint</li>
                                <li className="text-red-700">❌ y that spans alphabet boundary</li>
                            </ul>
                        </div>
                        
                        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6">
                            <h4 className="text-lg font-bold text-indigo-800 mb-4">🔁 Myhill–Nerode Key</h4>
                            <div className="space-y-2 text-xs">
                                <p className="font-mono text-gray-700">x ≡_L y iff ∀z: (xz∈L ↔ yz∈L)</p>
                                <p className="text-gray-700"><strong>Distinguishable:</strong> ∃z: exactly one of xz, yz ∈ L</p>
                                <p className="text-gray-700"><strong>Proof idea:</strong> show {'{sᵢ | i≥0}'} pairwise distinguishable</p>
                                <p className="text-gray-700"><strong>Conclusion:</strong> ∞ classes → not regular</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* University Exam Practice */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">University Exam Practice</h3>
                
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-blue-900 mb-4">Question 1: Short Answer (5 marks) — Time: 8 minutes</h4>
                        <div className="bg-white border-2 border-blue-200 rounded-2xl p-6 mb-4">
                            <p className="text-gray-700">State the Pumping Lemma for regular languages. What is its primary use in formal language theory?</p>
                        </div>
                        <button onClick={() => toggleSolution('exam1')} className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition mb-4">
                            {showSolution['exam1'] ? 'Hide Marking Scheme & Model Answer' : 'Show Marking Scheme & Model Answer'}
                        </button>
                        {showSolution['exam1'] && (
                            <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6">
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-blue-800 mb-3">Marking Scheme:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="text-gray-700">• Correct statement with all three conditions (|y|≥1, |xy|≤p, ∀i≥0 xyⁱz∈L): <strong>3 marks</strong></li>
                                        <li className="text-gray-700">• Mention of pumping length p and its relation to DFA states: <strong>1 mark</strong></li>
                                        <li className="text-gray-700">• Correct statement of primary use (proving non-regularity by contradiction): <strong>1 mark</strong></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-blue-800 mb-3">Model Answer:</h5>
                                    <div className="space-y-3 text-sm">
                                        <p className="text-gray-700"><strong>Pumping Lemma Statement:</strong> If L is a regular language, then there exists an integer p ≥ 1 (the pumping length) such that for every string s ∈ L with |s| ≥ p, s can be written as s = xyz satisfying three conditions: (1) |y| ≥ 1, (2) |xy| ≤ p, and (3) for all i ≥ 0, xyⁱz ∈ L. The pumping length p corresponds to the number of states in the minimum DFA accepting L.</p>
                                        <p className="text-gray-700"><strong>Primary Use:</strong> The Pumping Lemma is used to prove that specific languages are NOT regular, via proof by contradiction: assuming regularity, obtaining p, choosing a strategic string s ∈ L, and showing some pumping exits L, contradicting condition (3).</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-green-900 mb-4">Question 2: Proof Problem (10 marks) — Time: 15 minutes</h4>
                        <div className="bg-white border-2 border-green-200 rounded-2xl p-6 mb-4">
                            <p className="text-gray-700">Prove that the language L = {'{aⁿbᵐ | n > m}'} is not regular. Show all steps clearly.</p>
                        </div>
                        <button onClick={() => toggleSolution('exam2')} className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition mb-4">
                            {showSolution['exam2'] ? 'Hide Complete Solution' : 'Show Complete Solution'}
                        </button>
                        {showSolution['exam2'] && (
                            <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6">
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-green-800 mb-3">Marking Scheme:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="text-gray-700">• Correct assumption and mention of pumping length p: <strong>1 mark</strong></li>
                                        <li className="text-gray-700">• Correct choice of s ∈ L with |s| ≥ p: <strong>2 marks</strong></li>
                                        <li className="text-gray-700">• Correct analysis of all valid splits using |xy| ≤ p: <strong>3 marks</strong></li>
                                        <li className="text-gray-700">• Correct identification of breaking i and showing xyⁱz ∉ L: <strong>3 marks</strong></li>
                                        <li className="text-gray-700">• Clear contradiction and conclusion: <strong>1 mark</strong></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-green-800 mb-3">Complete Solution:</h5>
                                    <div className="space-y-3 text-sm">
                                        <p className="text-gray-700"><strong>1.</strong> Assume for contradiction that L = {'{aⁿbᵐ | n &gt; m}'} is regular. Let p be the pumping length.</p>
                                        <p className="text-gray-700"><strong>2. Choose s:</strong> Let s = aᵖ⁺¹bᵖ. Then s ∈ L (since p+1 &gt; p) and |s| = 2p+1 ≥ p. ✓</p>
                                        <p className="text-gray-700"><strong>3. Analyze splits:</strong> Since |xy| ≤ p and the first p+1 characters are all a's, both x and y lie within this a-block. So x = aʲ and y = aᵏ for some j ≥ 0, k ≥ 1, j+k ≤ p.</p>
                                        <p className="text-gray-700"><strong>4. Consider i = 0:</strong> xy⁰z = xz = aᵖ⁺¹⁻ᵏbᵖ. For membership in L we need p+1-k &gt; p, i.e., 1 &gt; k. But k ≥ 1, so k = 1 would need 1 &gt; 1 (false) and k &gt; 1 gives negative a-excess. So xy⁰z ∉ L iff p+1-k ≤ p, i.e., k ≥ 1. Since k ≥ 1 always, xy⁰z = aᵖ⁺¹⁻ᵏbᵖ has at most p a's and p b's, meaning n' = p+1-k ≤ p, so n' &gt; p fails. xy⁰z ∉ L. ✗</p>
                                        <p className="text-gray-700"><strong>5. Contradiction!</strong></p>
                                        <p className="text-lg font-bold text-green-900 text-center mt-4">Conclusion: Since xy⁰z ∉ L for any valid split, Pumping Lemma condition (3) is violated. Contradiction. Therefore L = {'{aⁿbᵐ | n &gt; m}'} is NOT regular. ∎</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-purple-900 mb-4">Question 3: Compare & Analyse (15 marks) — Time: 22 minutes</h4>
                        <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-4">
                            <p className="text-gray-700">Compare the Pumping Lemma and the Myhill–Nerode theorem as tools for proving non-regularity. Discuss: (a) the logical structure of each approach, (b) what each provides (necessary vs. sufficient conditions), and (c) give one example where you would prefer Myhill–Nerode over the Pumping Lemma.</p>
                        </div>
                        <button onClick={() => toggleSolution('exam3')} className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition mb-4">
                            {showSolution['exam3'] ? 'Hide Marking Scheme & Model Answer' : 'Show Marking Scheme & Model Answer'}
                        </button>
                        {showSolution['exam3'] && (
                            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
                                <div className="mb-6">
                                    <h5 className="text-lg font-bold text-purple-800 mb-3">Marking Scheme:</h5>
                                    <ul className="space-y-2 text-sm">
                                        <li className="text-gray-700">• Logical structure of Pumping Lemma proof: <strong>3 marks</strong></li>
                                        <li className="text-gray-700">• Logical structure of Myhill–Nerode proof: <strong>3 marks</strong></li>
                                        <li className="text-gray-700">• Necessary vs. sufficient distinction with correct explanation: <strong>4 marks</strong></li>
                                        <li className="text-gray-700">• Example of language with preference for Myhill–Nerode, with justification: <strong>3 marks</strong></li>
                                        <li className="text-gray-700">• Clarity and correct technical language throughout: <strong>2 marks</strong></li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-purple-800 mb-3">Model Answer:</h5>
                                    <div className="space-y-4 text-sm">
                                        <div>
                                            <p className="font-bold text-purple-700 mb-2">(a) Logical Structure:</p>
                                            <p className="text-gray-700 mb-2">The <strong>Pumping Lemma</strong> proof proceeds by contradiction: assume L is regular, obtain pumping length p (= #DFA states), choose a strategic s ∈ L, analyze all valid splits s = xyz under constraints |y| ≥ 1 and |xy| ≤ p, and exhibit a pumping exponent i where xyⁱz ∉ L, contradicting condition (3). It is an adversarial argument — you choose s, the adversary chooses the split, you choose i.</p>
                                            <p className="text-gray-700">The <strong>Myhill–Nerode</strong> proof is direct: construct an infinite set S = {'{s₁, s₂, ...}'} of strings pairwise distinguishable with respect to L (∀i≠j, ∃z such that exactly one of sᵢz, sⱼz ∈ L). Since the equivalence relation ≡_L has infinitely many classes and the minimum DFA for a regular language has exactly as many states as ≡_L classes, no finite DFA can exist. No contradiction is needed — it is a direct proof of infinite state requirement.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-purple-700 mb-2">(b) Necessary vs. Sufficient:</p>
                                            <p className="text-gray-700">The Pumping Lemma gives only a NECESSARY condition for regularity — every regular language satisfies it, but some non-regular languages satisfy it too. Crucially, it cannot prove regularity. The Myhill–Nerode theorem gives a NECESSARY AND SUFFICIENT condition: L is regular ↔ ≡_L has finitely many classes. This makes it a complete characterization, usable both to prove regularity (finitely many classes → construct minimum DFA) and non-regularity (infinitely many → no finite DFA possible).</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-purple-700 mb-2">(c) Example Preference:</p>
                                            <p className="text-gray-700">For the language L = {'{aⁱbʲ | gcd(i,j) = 1}'}, Myhill–Nerode is preferable: it is easier to exhibit an infinite set of pairwise distinguishable strings (choose aᵖ for each prime p, distinguishable via z = bᵖ) than to navigate the complex pumping analysis for this number-theoretic language. Moreover, since the Pumping Lemma cannot rule out certain edge cases for number-theoretic languages, Myhill–Nerode provides a cleaner, complete proof.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Interview Preparation */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Interview Preparation</h3>
                
                <div className="space-y-8">
                    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-indigo-900 mb-4">Interview Question 1:</h4>
                        <div className="bg-white border-2 border-indigo-200 rounded-2xl p-6 mb-4">
                            <p className="text-gray-700 italic">"Can you explain why regular expressions cannot match balanced parentheses, and what computation model would be needed?"</p>
                        </div>
                        <button onClick={() => toggleSolution('interview1')} className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition mb-4">
                            {showSolution['interview1'] ? 'Hide Approach' : 'Show Approach'}
                        </button>
                        {showSolution['interview1'] && (
                            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-2xl p-6">
                                <div className="mb-4">
                                    <h5 className="text-lg font-bold text-indigo-800 mb-2">How to approach:</h5>
                                    <p className="text-sm text-gray-700">Explain using the Pumping Lemma at a high level (no need for formal proof in an interview), then connect to computation models.</p>
                                </div>
                                <div>
                                    <h5 className="text-lg font-bold text-indigo-800 mb-2">Sample Answer:</h5>
                                    <p className="text-sm text-gray-700 leading-relaxed">"Regular expressions correspond to finite automata, which have fixed memory. Balanced parentheses like '((()))' require counting the nesting depth, which can be arbitrarily large. A finite automaton has only n states, so it can only track n different nesting levels. By the Pumping Lemma, any DFA for this language would have to produce the same behavior for two different nesting depths, but these require different behavior to close correctly. Formally, the language {'{(ⁿ)ⁿ | n ≥ 0}'} can be proven non-regular by the Pumping Lemma. You'd need a pushdown automaton (which models a stack) to match parentheses — corresponding to context-free grammars, which are used in actual parsers like LALR(1) parsers in compiler front-ends."</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-3xl p-10 shadow-xl">
                        <h4 className="text-xl font-bold text-purple-900 mb-4">Interview Question 2:</h4>
                        <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 mb-4">
                            <p className="text-gray-700 italic">"In your regex library, a user writes a regex to validate that an XML tag opens and closes with the same name. Is this possible with standard POSIX regex? Why or why not?"</p>
                        </div>
                        <button onClick={() => toggleSolution('interview2')} className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition mb-4">
                            {showSolution['interview2'] ? 'Hide Approach' : 'Show Approach'}
                        </button>
                        {showSolution['interview2'] && (
                            <div className="bg-purple-50 border-2 border-purple-300 rounded-2xl p-6">
                                <h5 className="text-lg font-bold text-purple-800 mb-3">Sample Answer:</h5>
                                <p className="text-sm text-gray-700 leading-relaxed">"Standard POSIX extended regex (ERE) cannot do this — it's beyond the power of regular languages. Matching &lt;tag&gt;...&lt;/tag&gt; requires remembering what 'tag' was, which is an arbitrary string. This is essentially a string equality check on an unbounded domain, which the Myhill–Nerode theorem shows requires infinitely many DFA states (one per possible tag name). However, PCRE (Perl-Compatible Regular Expressions) includes backreferences like \1, which go beyond regular languages and allow such matching. Backreferences make the matcher non-regular, closer to a context-sensitive grammar. This is why validating XML/HTML with real-world regex libraries (PCRE) works for simple cases but is theoretically ad hoc — proper XML validation requires a parser."</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Learning Resources */}
            <section className="content-section">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Resources & Practice Problems</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {[
                        { icon: "📗", title: "GeeksforGeeks", desc: "Pumping Lemma articles, solved examples, GATE questions", link: "Pumping Lemma Guide", color: "green" },
                        { icon: "📘", title: "JavaTpoint", desc: "TOC notes with diagrams and step-by-step proofs", link: "Pumping Lemma", color: "blue" },
                        { icon: "📙", title: "TutorialsPoint", desc: "Complete TOC tutorial series including formal proofs", link: "Automata Theory", color: "orange" },
                        { icon: "📕", title: "MIT OpenCourseWare", desc: "Lecture notes and problem sets from MIT 18.404", link: "Theory of Computation", color: "red" },
                        { icon: "🎓", title: "Stanford CS154", desc: "Automata theory slides, problem sets, proofs", link: "Automata Theory", color: "purple" },
                        { icon: "📚", title: "SIPSER Textbook", desc: '"Introduction to the Theory of Computation" — Chapter 1.4', link: "Buy/Find Book", color: "indigo" }
                    ].map((resource, i) => (
                        <div key={i} className={`bg-white border-2 border-${resource.color}-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition`}>
                            <div className="text-3xl mb-3">{resource.icon}</div>
                            <h4 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h4>
                            <p className="text-sm text-gray-600 mb-4">{resource.desc}</p>
                            <a href="#" className={`text-${resource.color}-600 font-semibold text-sm hover:underline`}>→ {resource.link}</a>
                        </div>
                    ))}
                </div>
                
                <div className="bg-gradient-to-br from-slate-50 to-gray-100 border-2 border-slate-300 rounded-3xl p-10 shadow-xl">
                    <h4 className="text-2xl font-bold text-slate-900 mb-6">🏋️ Practice Problems by Difficulty</h4>
                    
                    <div className="space-y-8">
                        <div>
                            <h5 className="text-xl font-bold text-green-700 mb-4">🟢 Easy Problems</h5>
                            <div className="space-y-4">
                                {[
                                    { title: "Prove {aⁿbᵐ | n < m} is not regular", hint: "Use pumping lemma with s = aᵖbᵖ⁺¹. The analysis is nearly identical to {aⁿbⁿ}.", tags: ["GATE Practice", "GeeksforGeeks"] },
                                    { title: "Prove {0ⁿ1ⁿ | n ≥ 1} is not regular", hint: "Direct analog of {aⁿbⁿ} with 0's and 1's. Choose s = 0ᵖ1ᵖ.", tags: ["Standard TOC"] },
                                    { title: "Show L = {a} is regular (no pumping lemma needed)", hint: "Build a 3-state DFA. This tests understanding of when NOT to use the pumping lemma.", tags: ["Conceptual"] },
                                    { title: "Prove {aⁿ | n ≥ 0 and n is even} is regular", hint: "Build a 2-state DFA alternating between even/odd states. Regular expression: (aa)*.", tags: ["Conceptual"] }
                                ].map((prob, i) => (
                                    <div key={i} className="bg-white border-2 border-green-200 rounded-xl p-5">
                                        <p className="font-bold text-gray-900 mb-2">{prob.title}</p>
                                        <p className="text-sm text-gray-600 mb-3">{prob.hint}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {prob.tags.map((tag, j) => (
                                                <span key={j} className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h5 className="text-xl font-bold text-yellow-700 mb-4">🟡 Medium Problems</h5>
                            <div className="space-y-4">
                                {[
                                    { title: "Prove {w ∈ {a,b}* | w = wᴿ} (palindromes) is not regular", hint: "Choose s = aᵖbaᵖ. The key: after pumping, the middle 'b' is no longer centered.", tags: ["HackerRank", "GATE 2018"] },
                                    { title: "Prove {ww | w ∈ {a,b}*} is not regular", hint: 'Choose s = aᵖbaᵖb. Show that pumping breaks the "two equal halves" structure.', tags: ["TOC Standard"] },
                                    { title: "Prove {aⁿbᵐcⁿ | n, m ≥ 0} is not regular", hint: "The a-count must equal the c-count but b's are unrestricted. Use s = aᵖbᵖcᵖ and pumping lemma.", tags: ["Intermediate"] },
                                    { title: "Prove {w | #a(w) > #b(w)} is not regular using closure properties", hint: "Hint: intersect with a*b* to get {aⁿbᵐ | n > m}, then apply pumping lemma to this.", tags: ["Closure Props"] },
                                    { title: "Myhill–Nerode proof for {0ⁿ1ⁿ | n ≥ 0}", hint: "Show 0⁰, 0¹, 0², ... are pairwise distinguishable using z = 1ⁱ as witness.", tags: ["Myhill–Nerode"] }
                                ].map((prob, i) => (
                                    <div key={i} className="bg-white border-2 border-yellow-200 rounded-xl p-5">
                                        <p className="font-bold text-gray-900 mb-2">{prob.title}</p>
                                        <p className="text-sm text-gray-600 mb-3">{prob.hint}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {prob.tags.map((tag, j) => (
                                                <span key={j} className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h5 className="text-xl font-bold text-red-700 mb-4">🔴 Hard Problems</h5>
                            <div className="space-y-4">
                                {[
                                    { title: "Prove {aⁿ | n is a perfect square} is not regular using the gap argument", hint: "The key insight: consecutive perfect squares grow farther apart, and pumping adds a fixed amount that eventually lands between consecutive squares.", tags: ["GATE Level", "Advanced TOC"] },
                                    { title: "Prove {aⁱbʲ | i/j ∈ Q is rational with specific denominator} is not regular", hint: "Number-theoretic languages. Requires careful analysis of pumping effects on integer ratios.", tags: ["Research-Level"] },
                                    { title: "Show L = {w | w contains equal occurrences of 'ab' and 'ba' as substrings} — regular or not?", hint: "Surprisingly, this IS regular! Prove it by constructing a DFA that tracks the running difference between #ab and #ba substrings (which is always 0 or ±1).", tags: ["Trick Question", "Competition"] },
                                    { title: "GATE 2014: Which of these is/are NOT regular? (Multi-select)", hint: 'Search "GATE 2014 CS regular language question" — involves multiple languages to classify. Requires systematic analysis of each.', tags: ["GATE 2014", "GeeksforGeeks GATE"] }
                                ].map((prob, i) => (
                                    <div key={i} className="bg-white border-2 border-red-200 rounded-xl p-5">
                                        <p className="font-bold text-gray-900 mb-2">{prob.title}</p>
                                        <p className="text-sm text-gray-600 mb-3">{prob.hint}</p>
                                        <div className="flex gap-2 flex-wrap">
                                            {prob.tags.map((tag, j) => (
                                                <span key={j} className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="mt-16 py-8 border-t text-center">
                <p className="text-sm text-gray-600 mb-2">✨ End of Module 2.3: Proving Languages Not to be Regular ✨</p>
                <p className="text-xs text-gray-500">Continue to the next module to explore Context-Free Languages and Pushdown Automata</p>
            </div>
        </div>
    );
};

export default Module2_3;
