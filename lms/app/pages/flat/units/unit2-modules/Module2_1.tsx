'use client';
import React, { useState, useEffect } from 'react';

const Module2_1: React.FC = () => {
    // State for Interactive Playground (Section 12)
    const [regexStr, setRegexStr] = useState('[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}');
    const [testStr, setTestStr] = useState(`Contact us: alice@example.com, bob@company.org, bad@, @invalid
Phone: (555) 867-5309, 800-555-1234
Date: 2024-03-15, invalid: 2024-13-45
IP: 192.168.1.1, 10.0.0.1, 999.999.0.0`);
    const [flags, setFlags] = useState({ g: true, i: true, m: false, s: false });
    const [resultHtml, setResultHtml] = useState<string>('');
    const [matchCount, setMatchCount] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // MCQ State
    const [mcqAnswers, setMcqAnswers] = useState<Record<number, number | null>>({});
    const [mcqResults, setMcqResults] = useState<Record<number, boolean | null>>({});

    // Exam Question State
    const [showModelAnswer, setShowModelAnswer] = useState<Record<number, boolean>>({});

    const loadPattern = (pattern: string, test: string) => {
        setRegexStr(pattern);
        setTestStr(test);
    };

    const checkMcq = (qId: number, selected: number, correct: number) => {
        setMcqAnswers({ ...mcqAnswers, [qId]: selected });
        setMcqResults({ ...mcqResults, [qId]: selected === correct });
    };

    const toggleAnswer = (id: number) => {
        setShowModelAnswer(prev => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        try {
            setError(null);
            const flagStr = (flags.g ? 'g' : '') + (flags.i ? 'i' : '') + (flags.m ? 'm' : '') + (flags.s ? 's' : '');
            const re = new RegExp(regexStr, flagStr);
            let count = 0;

            const escapedText = testStr.replace(/[&<>"']/g, (m) => ({
                '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
            }[m] || m));

            let html = escapedText;
            if (flags.g) {
                html = escapedText.replace(re, (match) => {
                    count++;
                    return `<span class="bg-yellow-300 text-black px-1 rounded font-bold border-b border-yellow-600">${match}</span>`;
                });
            } else {
                const m = testStr.match(re);
                if (m) {
                    count = 1;
                    html = escapedText.replace(re, `<span class="bg-yellow-300 text-black px-1 rounded font-bold border-b border-yellow-600">${m[0]}</span>`);
                }
            }

            setResultHtml(html);
            setMatchCount(count);
        } catch (e: any) {
            setError(e.message);
            setResultHtml(testStr);
            setMatchCount(0);
        }
    }, [regexStr, testStr, flags]);

    return (
        <div className="module-content">
            {/* 1. Header */}
            <div className="lesson-header">
                <div className="lesson-number-badge">2.1</div>
                <div className="lesson-title-main">
                    <h1>🔍 Regular Expressions: Theory & Applications</h1>
                    <p className="text-sm mt-2">Subject: Theory of Computation | Unit: Unit-2: Regular Languages and Context Free Languages | Level: Expert Comprehensive Module</p>
                </div>
            </div>

            {/* 📋 Table of Contents */}
            <section className="content-section">
                <div className="bg-slate-50 border-2 border-slate-200 p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 opacity-5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:opacity-10 transition-opacity"></div>
                    <div className="font-black text-slate-400 mb-6 border-b border-slate-100 pb-3 uppercase tracking-[0.4em] text-[10px] flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        <span className="ml-2">📋 NAVIGATION</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 relative z-10">
                        <ol className="list-decimal ml-6 space-y-2 text-xs text-indigo-600 font-black italic">
                            {["Learning Objectives", "Introduction & Motivation", "Formal Review", "Extended Regex Syntax", "Lexical Analysis", "Text Search & Grep", "Input Validation"].map(t => (
                                <li key={t}><a href={`#${t.toLowerCase().split(' ')[0]}`} className="hover:text-slate-900 transition-colors border-b border-transparent hover:border-indigo-200">{t}</a></li>
                            ))}
                        </ol>
                        <ol className="list-decimal ml-6 space-y-2 text-xs text-indigo-600 font-black italic" start={8}>
                            {["Security & Network", "NLP & Bioinformatics", "Pattern Library", "Python & JS Implementation", "Interactive Playground", "MCQ Practice", "Exam Questions"].map(t => (
                                <li key={t}><a href={`#${t.toLowerCase().split(' ')[0]}`} className="hover:text-slate-900 transition-colors border-b border-transparent hover:border-indigo-200">{t}</a></li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* 1. Learning Objectives */}
            <section className="content-section" id="objectives">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="font-semibold text-blue-900 mb-2">🎯 Learning Objectives</p>
                    <ul className="list-disc ml-6 space-y-1 text-sm text-blue-800">
                        <li><strong>Recall & Extend:</strong> State the formal definition of regular expressions and correctly apply extended metacharacter syntax (character classes, quantifiers, anchors, groups) used in POSIX and PCRE standards.</li>
                        <li><strong>Design:</strong> Construct correct regular expressions for real-world pattern-matching problems including email validation, IP addresses, phone numbers, dates, URLs, and log parsing.</li>
                        <li><strong>Apply to Compilation:</strong> Explain how lexical analyzers (lex/flex) use regular expressions to tokenize source code, and trace tokenization of a given source snippet.</li>
                        <li><strong>Apply to Security:</strong> Describe how intrusion detection systems (IDS/WAF) use regex patterns to detect SQL injection, XSS, and other attack signatures in network traffic.</li>
                        <li><strong>Analyze & Evaluate:</strong> Compare greedy vs. lazy quantifiers, identify catastrophic backtracking risks (ReDoS), and optimize regular expressions for correctness and performance.</li>
                    </ul>
                </div>
            </section>

            {/* 2. Introduction & Motivation */}
            <section className="content-section" id="introduction">
                <h3>2. Introduction & Motivation</h3>
                
                <h4 className="text-lg font-bold mt-4 mb-2">2.1 From Theory to Practice</h4>
                <p>In Unit 1, we studied regular expressions as a purely mathematical tool — a concise notation for describing regular languages, proven equivalent to finite automata by Kleene's theorem. In Unit 2, we shift perspective: <strong>regular expressions are one of the most widely deployed technologies in software engineering today</strong>. Every time you use a search function, fill out a web form, compile code, scan network traffic, or process a log file, regular expressions are almost certainly at work behind the scenes.</p>

                <p className="mt-4">Understanding <em>both</em> the theory and the applications is what separates a computer scientist from a programmer. The theory tells you what is possible and what is not (regularity), while the application knowledge tells you how to efficiently implement those possibilities in real systems.</p>

                <div className="bg-green-50 border-l-4 border-green-500 p-5 my-6">
                    <p className="font-bold text-green-900 mb-3">📊 Regex by the Numbers</p>
                    <ul className="space-y-2 text-sm text-green-800">
                        <li>• Over <strong>1 billion</strong> regex evaluations happen per second across Google Search infrastructure.</li>
                        <li>• Python's <code className="bg-green-100 px-1 rounded">re</code> module is used in <strong>over 60%</strong> of all Python projects on GitHub.</li>
                        <li>• The <code className="bg-green-100 px-1 rounded">grep</code> tool executes <strong>trillions</strong> of regex matches daily across Unix/Linux systems worldwide.</li>
                        <li>• OWASP lists regex-based input validation as a critical defense for preventing <strong>SQLi, XSS, and path traversal</strong> attacks.</li>
                        <li>• Modern compilers use regex-generated DFAs that run in <strong>O(n)</strong> time to tokenize millions of lines of source code per second.</li>
                    </ul>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">2.2 The Regex Ecosystem</h4>
                <p className="mb-4">Regular expressions exist in multiple "dialects" or standards. The core theory is the same, but the syntax varies across platforms. Understanding the landscape helps you use the right tool:</p>
                
                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Standard</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Full Name</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Used In</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Key Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>BRE</strong></td>
                                <td className="border border-slate-300 p-3">Basic Regular Expressions</td>
                                <td className="border border-slate-300 p-3">Traditional <code>grep</code>, <code>sed</code>, <code>vi</code></td>
                                <td className="border border-slate-300 p-3">Minimal metacharacters; <code>\(</code> <code>\{'{'}</code> must be escaped</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>ERE</strong></td>
                                <td className="border border-slate-300 p-3">Extended Regular Expressions</td>
                                <td className="border border-slate-300 p-3"><code>grep -E</code>, <code>awk</code>, POSIX</td>
                                <td className="border border-slate-300 p-3">Adds <code>+</code>, <code>?</code>, <code>|</code>, <code>()</code> without escaping</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>PCRE</strong></td>
                                <td className="border border-slate-300 p-3">Perl Compatible Regular Expressions</td>
                                <td className="border border-slate-300 p-3">Perl, PHP, Python <code>re</code>, Java, Ruby, .NET</td>
                                <td className="border border-slate-300 p-3">Lookahead, lookbehind, non-capturing groups, named groups, backreferences</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>RE2</strong></td>
                                <td className="border border-slate-300 p-3">Google's regex library</td>
                                <td className="border border-slate-300 p-3">Go, RE2 library, Rust <code>regex</code></td>
                                <td className="border border-slate-300 p-3">Guarantees linear-time O(n) matching; no backreferences</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>JavaScript</strong></td>
                                <td className="border border-slate-300 p-3">ECMAScript regex</td>
                                <td className="border border-slate-300 p-3">Node.js, browsers</td>
                                <td className="border border-slate-300 p-3">PCRE-like; <code>/pattern/flags</code> literal syntax; named groups (ES2018)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="aspect-video rounded mb-3 overflow-hidden">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/528Jc3q86F8?si=PkYag_pt3vG8BCEL" 
                                title="Regular Expressions - Computerphile" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <h5 className="font-bold text-sm mb-1">Regular Expressions — Computerphile</h5>
                        <p className="text-xs text-slate-600">Excellent conceptual overview of why regular expressions exist, how they work, and where they are used in real software. Great starting point.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <div className="aspect-video rounded mb-3 overflow-hidden">
                            <iframe 
                                width="100%" 
                                height="100%" 
                                src="https://www.youtube.com/embed/sXQxhojSdZM?si=Eo0_Rgtxu8uTRBcQ" 
                                title="Regex in 100 Seconds - Fireship" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                        <h5 className="font-bold text-sm mb-1">Regex in 100 Seconds — Fireship</h5>
                        <p className="text-xs text-slate-600">Fast-paced visual overview of regex syntax and common use cases. Perfect for a quick refresher before diving into applications.</p>
                    </div>
                </div>
            </section>

            {/* 3. Formal Review */}
            <section className="content-section" id="formal">
                <h3>3. Formal Review of Regular Expressions</h3>
                
                <h4 className="text-lg font-bold mt-4 mb-2">3.1 The Three Primitive Operations (Theoretical Basis)</h4>
                <p className="mb-4">Recall from Unit 1 that every regular expression is built from three fundamental operations over an alphabet Σ:</p>

                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Operation</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Notation</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Language</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Example</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Matches</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>Union</strong></td>
                                <td className="border border-slate-300 p-3"><code>R + S</code> or <code>R|S</code></td>
                                <td className="border border-slate-300 p-3">L(R) ∪ L(S)</td>
                                <td className="border border-slate-300 p-3"><code>cat|dog</code></td>
                                <td className="border border-slate-300 p-3">"cat", "dog"</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>Concatenation</strong></td>
                                <td className="border border-slate-300 p-3"><code>RS</code></td>
                                <td className="border border-slate-300 p-3">L(R) · L(S)</td>
                                <td className="border border-slate-300 p-3"><code>ab</code></td>
                                <td className="border border-slate-300 p-3">"ab"</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><strong>Kleene Star</strong></td>
                                <td className="border border-slate-300 p-3"><code>R*</code></td>
                                <td className="border border-slate-300 p-3">L(R)*</td>
                                <td className="border border-slate-300 p-3"><code>a*</code></td>
                                <td className="border border-slate-300 p-3">"", "a", "aa", …</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><em>Derived: Plus</em></td>
                                <td className="border border-slate-300 p-3"><code>R+</code> = <code>RR*</code></td>
                                <td className="border border-slate-300 p-3">L(R)+ (no empty)</td>
                                <td className="border border-slate-300 p-3"><code>a+</code></td>
                                <td className="border border-slate-300 p-3">"a", "aa", "aaa", …</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><em>Derived: Optional</em></td>
                                <td className="border border-slate-300 p-3"><code>R?</code> = <code>R|ε</code></td>
                                <td className="border border-slate-300 p-3">L(R) ∪ {'{'}{'}'}ε{'}'}</td>
                                <td className="border border-slate-300 p-3"><code>colou?r</code></td>
                                <td className="border border-slate-300 p-3">"color", "colour"</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">3.2 Key Algebraic Identities</h4>
                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Identity</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Law</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>R|S = S|R</code></td>
                                <td className="border border-slate-300 p-3">Union is commutative</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>R|∅ = R</code></td>
                                <td className="border border-slate-300 p-3">∅ is identity for union</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>R∅ = ∅</code></td>
                                <td className="border border-slate-300 p-3">∅ annihilates concatenation</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>εR = Rε = R</code></td>
                                <td className="border border-slate-300 p-3">ε is identity for concatenation</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>(R*)* = R*</code></td>
                                <td className="border border-slate-300 p-3">Star is idempotent</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>R(S|T) = RS|RT</code></td>
                                <td className="border border-slate-300 p-3">Distributivity</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>(R|S)* = (R*S*)* = (R*|S*)*</code></td>
                                <td className="border border-slate-300 p-3">Star distributes over union</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3"><code>∅* = ε</code></td>
                                <td className="border border-slate-300 p-3">Zero iterations = empty string</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-10 my-8">
                    <h5 className="text-center font-bold text-blue-900 mb-8 text-lg">🔄 Regex Compilation Pipeline</h5>
                    
                    <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
                        <div className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-center shadow-lg">
                            Regular Expression R
                        </div>
                        
                        <div className="text-sm text-gray-600">↓ Thompson's Construction</div>
                        
                        <div className="bg-indigo-100 border-2 border-indigo-400 px-8 py-3 rounded-lg font-bold text-center">
                            ε-NFA (≤2n states)
                        </div>
                        
                        <div className="text-sm text-gray-600">↓ ε-closure + Subset Construction</div>
                        
                        <div className="bg-indigo-100 border-2 border-indigo-400 px-8 py-3 rounded-lg font-bold text-center">
                            NFA → DFA
                        </div>
                        
                        <div className="text-sm text-gray-600">↓ Hopcroft's Algorithm</div>
                        
                        <div className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold text-center shadow-lg">
                            Minimized DFA
                        </div>
                        
                        <div className="text-sm text-gray-600">↓ O(n) matching</div>
                        
                        <div className="bg-orange-500 text-white px-8 py-3 rounded-lg font-bold text-center shadow-lg">
                            Fast Pattern Matching
                        </div>
                    </div>
                    
                    <div className="mt-6 text-center text-sm text-gray-600 italic">
                        ↻ State Elimination / Arden's Lemma: Minimized DFA → Regular Expression R
                    </div>
                </div>
            </section>

            {/* 4. Extended Regex Syntax */}
            <section className="content-section" id="extended">
                <h3>4. Extended Regex Syntax (POSIX & PCRE)</h3>
                <p className="mb-4">Modern regex engines extend the basic three-operation theory with powerful metacharacters and constructs. Understanding these is essential for practical applications. All extensions below are <em>syntactic sugar</em> — they can be expressed in pure theoretical regex, but the shorthand makes real-world patterns readable.</p>

                <h4 className="text-lg font-bold mt-6 mb-3">4.1 Metacharacter Reference</h4>
                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Metachar</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Meaning</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Example</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Matches</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['.', 'Any character (except newline)', 'a.c', '"abc", "aXc", "a1c"'],
                                ['^', 'Start of string/line', '^Hello', '"Hello world" (at start)'],
                                ['$', 'End of string/line', 'world$', '"Hello world" (at end)'],
                                ['\\b', 'Word boundary', '\\bcat\\b', '"cat" not in "concatenate"'],
                                ['\\d', 'Digit [0-9]', '\\d+', '"123", "42"'],
                                ['\\w', 'Word char [a-zA-Z0-9_]', '\\w+', '"hello", "var_1"'],
                                ['\\s', 'Whitespace', '\\s+', 'spaces, tabs, newlines'],
                                ['[abc]', 'Character class', '[aeiou]', 'any vowel'],
                                ['[^abc]', 'Negated class', '[^0-9]', 'any non-digit'],
                                ['[a-z]', 'Range', '[a-zA-Z]', 'any letter'],
                                ['{n}', 'Exactly n times', '\\d{4}', '"2024"'],
                                ['{n,m}', 'Between n and m times', '\\d{2,4}', '"12", "123", "1234"'],
                                ['{n,}', 'At least n times', '\\w{3,}', '"abc", "hello"'],
                                ['(R)', 'Capturing group', '(ab)+', '"ab", "abab"'],
                                ['(?:R)', 'Non-capturing group', '(?:ab)+', '"ab", "abab" (no capture)'],
                                ['(?P<name>R)', 'Named group (Python)', '(?P<year>\\d{4})', 'named capture "year"'],
                                ['R(?=S)', 'Positive lookahead', '\\d+(?= USD)', 'digits before " USD"'],
                                ['R(?!S)', 'Negative lookahead', '\\d+(?! USD)', 'digits NOT before " USD"'],
                                ['(?<=S)R', 'Positive lookbehind', '(?<=\\$)\\d+', 'digits after "$"'],
                                ['R*?', 'Lazy (non-greedy) star', '<.*?>', 'shortest tag match'],
                                ['\\1', 'Backreference to group 1', '(\\w+) \\1', '"the the", "hello hello"']
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="border border-slate-300 p-3"><code>{row[0]}</code></td>
                                    <td className="border border-slate-300 p-3">{row[1]}</td>
                                    <td className="border border-slate-300 p-3"><code>{row[2]}</code></td>
                                    <td className="border border-slate-300 p-3">{row[3]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">4.2 Greedy vs. Lazy Quantifiers</h4>
                <p className="mb-4">One of the most important practical distinctions in regex is between <strong>greedy</strong> and <strong>lazy</strong> (non-greedy) quantifiers. This directly affects what gets matched:</p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-4">
                    <p className="font-bold text-blue-900 mb-3">Greedy vs. Lazy — Side by Side</p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-300 text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="border border-slate-300 p-3 text-left font-bold">Quantifier</th>
                                    <th className="border border-slate-300 p-3 text-left font-bold">Type</th>
                                    <th className="border border-slate-300 p-3 text-left font-bold">Behavior</th>
                                    <th className="border border-slate-300 p-3 text-left font-bold">Result</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-3"><code>&lt;.*&gt;</code></td>
                                    <td className="border border-slate-300 p-3">Greedy</td>
                                    <td className="border border-slate-300 p-3">Match as much as possible</td>
                                    <td className="border border-slate-300 p-3"><code>&lt;b&gt;bold&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt;</code> (entire string!)</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-3"><code>&lt;.*?&gt;</code></td>
                                    <td className="border border-slate-300 p-3">Lazy</td>
                                    <td className="border border-slate-300 p-3">Match as little as possible</td>
                                    <td className="border border-slate-300 p-3"><code>&lt;b&gt;</code>, <code>&lt;/b&gt;</code>, <code>&lt;i&gt;</code>, <code>&lt;/i&gt;</code> (each tag separately)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">4.3 Catastrophic Backtracking (ReDoS)</h4>
                <p className="mb-4">A critical performance issue in practice is <strong>catastrophic backtracking</strong> — when a regex causes the engine to explore exponentially many paths. This is the basis of <strong>ReDoS (Regular Expression Denial of Service)</strong> attacks.</p>

                <div className="bg-red-50 border-l-4 border-red-500 p-5 my-4">
                    <p className="font-bold text-red-900 mb-2">⚠️ ReDoS Vulnerability Example</p>
                    <p className="text-sm text-red-800 mb-3">The pattern <code className="bg-red-100 px-1 rounded">^(a+)+$</code> on the input "aaaaaaaaaa!" causes the NFA-based engine to explore O(2<sup>n</sup>) paths because of ambiguous groupings. Real attacks have crashed production servers (e.g., Cloudflare 2019 outage caused partly by a catastrophic regex).</p>
                    <p className="text-sm text-red-800"><strong>Prevention:</strong> (1) Use RE2-based engines (Go, Rust) that guarantee O(n) matching. (2) Avoid nested quantifiers like <code className="bg-red-100 px-1 rounded">(a+)+</code>. (3) Test with long adversarial inputs. (4) Use atomic groups or possessive quantifiers where available.</p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 my-6">
                    <div className="aspect-video rounded mb-3 overflow-hidden">
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/QW68DCQtH7k?si=GT6YssHw2YcYvkZl"
                            title="Catastrophic Backtracking & ReDoS" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                    <h5 className="font-bold text-sm mb-1">Catastrophic Backtracking & ReDoS</h5>
                    <p className="text-xs text-slate-600">Visual explanation of how nested quantifiers cause exponential backtracking and how to prevent ReDoS vulnerabilities in production code.</p>
                </div>
            </section>

            {/* 5. Lexical Analysis */}
            <section className="content-section" id="app-lexical">
                <h3>5. Application: Lexical Analysis in Compilers</h3>
                <p className="mb-4"><strong>Lexical analysis</strong> (lexing or tokenization) is the first phase of every compiler and interpreter. It converts raw source code — a stream of characters — into a stream of meaningful <em>tokens</em> (keywords, identifiers, literals, operators, punctuation). Every token type is described by a regular expression, and the lexer is effectively an NFA/DFA driven by those patterns.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <img src="data:image/png;base64,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" alt="Compiler phases" className="w-full rounded mb-3" loading="lazy" />
                        <p className="text-xs text-slate-600">Compiler pipeline: Lexical analysis is Phase 1, converting source code into tokens using regex-based DFAs.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Automata_theory.svg/400px-Automata_theory.svg.png" alt="DFA for lexing" className="w-full rounded mb-3" loading="lazy" />
                        <p className="text-xs text-slate-600">The lexer compiles all token regexes into one combined DFA for efficient O(n) scanning of source code.</p>
                    </div>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">5.1 Token Types and Their Regex Patterns</h4>
                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Token Type</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Regular Expression</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Example Lexemes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Keyword', 'if|else|while|for|return|int|float|void', 'if, while, return'],
                                ['Identifier', '[a-zA-Z_][a-zA-Z0-9_]*', 'x, myVar, _count'],
                                ['Integer literal', '[0-9]+', '42, 0, 100'],
                                ['Float literal', '[0-9]+\\.[0-9]+([eE][+-]?[0-9]+)?', '3.14, 1.5e-10'],
                                ['String literal', '"([^"\\\\]|\\\\.)*"', '"hello", "say \\"hi\\""'],
                                ['Arithmetic op', '[+\\-*/]', '+, -, *, /'],
                                ['Comparison op', '==|!=|<=|>=|<|>', '==, !=, <='],
                                ['Assignment', '=', '='],
                                ['Delimiter', '[(){};,]', '(, ), ;'],
                                ['Whitespace', '[ \\t\\n\\r]+', 'spaces, tabs, newlines (usually discarded)'],
                                ['Line comment', '//[^\\n]*', '// this is a comment'],
                                ['Block comment', '/\\*([^*]|\\*+[^*/])*\\*+/', '/* block */']
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="border border-slate-300 p-3">{row[0]}</td>
                                    <td className="border border-slate-300 p-3"><code>{row[1]}</code></td>
                                    <td className="border border-slate-300 p-3"><code>{row[2]}</code></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">5.2 How a Lexer Works</h4>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-4">
                    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                        <div className="bg-green-100 border-2 border-green-500 rounded-lg p-3 text-center min-w-[120px]">
                            <div className="font-bold text-green-900">Source Code</div>
                            <div className="text-xs text-slate-600">(character stream)</div>
                        </div>
                        <div className="text-2xl text-blue-600">→</div>
                        <div className="bg-white border-2 border-blue-300 rounded-lg p-3 text-center min-w-[120px]">
                            <div className="font-bold text-blue-900">Lexer / Scanner</div>
                        </div>
                        <div className="text-2xl text-blue-600">→</div>
                        <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-3 text-center min-w-[120px]">
                            <div className="font-bold text-blue-900">Token Stream</div>
                            <div className="text-xs text-slate-600">(type + lexeme)</div>
                        </div>
                        <div className="text-2xl text-blue-600">→</div>
                        <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-3 text-center min-w-[120px]">
                            <div className="font-bold text-yellow-900">Parser</div>
                            <div className="text-xs text-slate-600">(Syntax Analysis)</div>
                        </div>
                    </div>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">5.3 Tokenization Example</h4>
                <div className="bg-green-50 border-l-4 border-green-500 p-5 my-4">
                    <p className="font-bold text-green-900 mb-3">Tokenizing: <code>int x = a + 42;</code></p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-slate-300 text-sm">
                            <thead className="bg-slate-100">
                                <tr>
                                    <th className="border border-slate-300 p-3 text-left font-bold">Lexeme</th>
                                    <th className="border border-slate-300 p-3 text-left font-bold">Token Type</th>
                                    <th className="border border-slate-300 p-3 text-left font-bold">Matching Regex</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['int', 'KEYWORD', 'if|else|while|int|…'],
                                    ['x', 'IDENTIFIER', '[a-zA-Z_][a-zA-Z0-9_]*'],
                                    ['=', 'ASSIGN', '='],
                                    ['a', 'IDENTIFIER', '[a-zA-Z_][a-zA-Z0-9_]*'],
                                    ['+', 'ARITH_OP', '[+\\-*/]'],
                                    ['42', 'INT_LITERAL', '[0-9]+'],
                                    [';', 'SEMICOLON', '[(){};,]']
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="border border-slate-300 p-3"><code>{row[0]}</code></td>
                                        <td className="border border-slate-300 p-3">{row[1]}</td>
                                        <td className="border border-slate-300 p-3"><code>{row[2]}</code></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">5.4 Flex/Lex Specification</h4>
                <pre className="bg-slate-900 text-slate-200 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Example Flex (lex) specification file */
/* Each rule: regex { action } */

%{
#include "tokens.h"
%}

%%
/* Keywords — must come BEFORE identifier rule */
"if"          { return TOK_IF; }
"else"        { return TOK_ELSE; }
"while"       { return TOK_WHILE; }
"int"         { return TOK_INT; }
"float"       { return TOK_FLOAT; }
"return"      { return TOK_RETURN; }

/* Identifiers */
[a-zA-Z_][a-zA-Z0-9_]*   { yylval.str = strdup(yytext); return TOK_ID; }

/* Numeric literals */
[0-9]+                    { yylval.ival = atoi(yytext); return TOK_INT_LIT; }
[0-9]+\.[0-9]+            { yylval.fval = atof(yytext); return TOK_FLOAT_LIT; }

/* String literal */
\"([^"\\]|\\.)*\"        { yylval.str = strdup(yytext); return TOK_STRING; }

/* Operators */
[+\-*/]                   { return yytext[0]; }
"=="                      { return TOK_EQ; }
"!="                      { return TOK_NEQ; }
"<="                      { return TOK_LEQ; }
">="                      { return TOK_GEQ; }

/* Whitespace — skip */
[ \t\n\r]+                { /* discard */ }

/* Line comments — skip */
\/\/[^\n]*                { /* discard */ }

/* Default: single char */
.                         { return yytext[0]; }
%%`}
                </pre>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 my-4">
                    <p className="font-bold text-blue-900 mb-2">📌 Flex Implementation Detail:</p>
                    <p className="text-sm text-blue-800">Flex compiles all the regex rules into a <em>single</em> combined DFA using the subset construction. At runtime, the lexer runs this DFA in O(n) time — n being the length of the source file. The "longest match" rule (maximal munch) resolves ambiguity: if two patterns match, the longer lexeme wins. If lengths are equal, the earlier rule wins (hence keywords before identifiers).</p>
                </div>
            </section>

            {/* 6. Text Search & grep */}
            <section className="content-section" id="app-search">
                <h3>6. Application: Text Search & grep</h3>
                <p className="mb-4">The Unix tool <code className="bg-slate-100 px-1 rounded">grep</code> (Global Regular Expression Print) is one of the oldest and most heavily used applications of regular expression theory. It searches files for lines matching a given pattern and prints those lines. Modern variants (<code>egrep</code>, <code>grep -E</code>, <code>ripgrep</code>, <code>ag</code>) support full ERE/PCRE syntax.</p>

                <h4 className="text-lg font-bold mt-6 mb-3">6.1 grep Command Reference</h4>
                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Command</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">What It Does</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["grep 'pattern' file", 'Basic search (BRE)', "grep 'error' log.txt"],
                                ["grep -E 'pattern'", 'Extended regex (ERE)', "grep -E '\\d{3}-\\d{4}' data.txt"],
                                ["grep -P 'pattern'", 'Perl regex (PCRE)', "grep -P '(?<=@)\\w+' emails.txt"],
                                ['grep -i', 'Case insensitive', "grep -i 'error' log.txt"],
                                ['grep -v', 'Invert match (non-matching lines)', "grep -v '#' config.ini"],
                                ['grep -r', 'Recursive directory search', "grep -r 'TODO' src/"],
                                ['grep -n', 'Show line numbers', "grep -n 'panic' main.go"],
                                ['grep -c', 'Count matching lines', "grep -c 'ERROR' system.log"],
                                ['grep -o', 'Print only matched parts', "grep -o '\\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}\\b'"],
                                ['grep -l', 'List files with matches', "grep -rl 'password' /etc/"]
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="border border-slate-300 p-3"><code>{row[0]}</code></td>
                                    <td className="border border-slate-300 p-3">{row[1]}</td>
                                    <td className="border border-slate-300 p-3"><code>{row[2]}</code></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">6.2 Real-World grep Examples</h4>
                <pre className="bg-slate-900 text-slate-200 p-4 rounded-lg overflow-x-auto text-sm">
{`# Find all TODO comments in a Python project
grep -rn 'TODO\\|FIXME\\|HACK' src/ --include='*.py'

# Extract all IP addresses from a log file
grep -oE '\\b([0-9]{1,3}\\.){3}[0-9]{1,3}\\b' access.log

# Find lines with HTTP 4xx or 5xx errors
grep -E '" [45][0-9]{2} ' access.log

# Extract all email addresses from a text file
grep -oE '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}' contacts.txt

# Find Python function definitions
grep -En '^def [a-zA-Z_][a-zA-Z0-9_]*\\(' *.py

# Search for potential SQL injection patterns in logs
grep -iE "(union|select|insert|update|delete|drop).+(from|into|table)" web.log

# Find lines NOT starting with # (ignore comments)
grep -v '^#' /etc/hosts

# Find duplicate consecutive words (using backreference)
grep -E '\\b(\\w+)\\s+\\1\\b' document.txt

# Count distinct IP addresses making requests
grep -oE '^[0-9.]+' access.log | sort | uniq -c | sort -rn | head -10`}
                </pre>

                <h4 className="text-lg font-bold mt-6 mb-3">6.3 ripgrep — Modern High-Performance Search</h4>
                <p className="mb-4"><code className="bg-slate-100 px-1 rounded">ripgrep</code> (<code>rg</code>) is a modern replacement for grep written in Rust that uses the RE2-based <code>regex</code> crate. It guarantees O(n) matching (no catastrophic backtracking), respects <code>.gitignore</code> by default, and is often 10–100x faster than GNU grep on large codebases. GitHub code search, VS Code's "Find in Files", and many IDEs use ripgrep internally.</p>

                <pre className="bg-slate-900 text-slate-200 p-4 rounded-lg overflow-x-auto text-sm">
{`# ripgrep — same patterns, much faster
rg 'TODO|FIXME' src/
rg --type py '^class \\w+' .
rg '\\d{4}-\\d{2}-\\d{2}' --glob '*.log'  # dates in log files`}
                </pre>
            </section>

            {/* 7. Input Validation */}
            <section className="content-section" id="app-validation">
                <h3>7. Application: Input Validation</h3>
                <p className="mb-4">Input validation is one of the most important security practices in software development. Regular expressions are the standard tool for validating that user-provided data conforms to expected formats before it is processed or stored. OWASP (Open Web Application Security Project) recommends allowlist-based regex validation as a primary defense against injection attacks.</p>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 my-4">
                    <p className="font-bold text-yellow-900 mb-2">⚠️ Security Principle: Never Trust User Input</p>
                    <p className="text-sm text-yellow-800">Always validate inputs on the <em>server side</em>, even if you validate on the client side. Client-side validation (JavaScript regex) can be bypassed. Server-side regex validation is the authoritative defense.</p>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">7.1 Common Validation Patterns with Explanations</h4>

                {[
                    { icon: '📧', title: 'Email Address (RFC 5322 simplified)', pattern: '^[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$', desc: 'Local part: alphanumeric + special chars. @ symbol. Domain: alphanumeric + dots/hyphens. TLD: 2+ letters.', matches: 'user@example.com, first.last@company.org', rejects: '@domain.com, user@, plain' },
                    { icon: '📱', title: 'US Phone Number (flexible format)', pattern: '^\\+?1?\\s*\\(?(\\d{3})\\)?[\\s.\\-]?(\\d{3})[\\s.\\-]?(\\d{4})$', desc: 'Optional country code +1. Area code (with/without parens). Separator: space, dot, or hyphen (optional).', matches: '(555) 867-5309, 555.867.5309, +1-555-867-5309, 5558675309' },
                    { icon: '🌐', title: 'IPv4 Address', pattern: '^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$', desc: 'Each octet: 0-255 (handles leading zeros carefully). Four octets separated by dots.', matches: '192.168.1.1, 10.0.0.1, 255.255.255.0', rejects: '256.1.1.1, 192.168.1' },
                    { icon: '📅', title: 'ISO 8601 Date (YYYY-MM-DD)', pattern: '^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$', desc: 'Year: 4 digits. Month: 01-12. Day: 01-31 (note: does not enforce month-day validity, use logic for that).', matches: '2024-03-15, 1990-12-31', rejects: '2024-13-01, 2024-3-5, 24-03-15' },
                    { icon: '🔗', title: 'URL (http/https)', pattern: '^https?://[a-zA-Z0-9\\-._~:/?#\\[\\]@!$&\'()*+,;=%]+$', desc: 'Protocol: http or https. Followed by ://. Then RFC 3986 allowed URL characters.', matches: 'https://example.com, http://site.org/path?q=1#sec' },
                    { icon: '🔑', title: 'Strong Password', pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*]).{8,}$', desc: 'Lookaheads enforce: at least one lowercase, one uppercase, one digit, one special char. Min 8 chars total.', matches: 'MyP@ss1!', rejects: 'password, PASSWORD1, mypass!' },
                    { icon: '🏬', title: 'Credit Card (Luhn structure)', pattern: '^(?:4\\d{12}(?:\\d{3})?|5[1-5]\\d{14}|3[47]\\d{13}|6011\\d{12})$', desc: 'Visa (4...), Mastercard (51-55...), Amex (34,37...), Discover (6011...). Does not validate Luhn checksum (use code for that).', matches: '4111111111111111 (Visa) | Use Luhn algorithm for full validation' },
                    { icon: '🗂️', title: 'Filename (safe, no path traversal)', pattern: '^[a-zA-Z0-9][a-zA-Z0-9._\\-]{0,253}[a-zA-Z0-9]$', desc: 'No slashes, no dots at start/end (prevents ../traversal). Safe characters only. Max 255 chars.', matches: 'report_2024.pdf', rejects: '../etc/passwd, .hidden, file/name' }
                ].map((item, i) => (
                    <div key={i} className="bg-white border-2 border-slate-200 rounded-lg p-5 my-4 shadow-sm">
                        <h5 className="font-bold text-slate-800 mb-2">{item.icon} {item.title}</h5>
                        <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-sm mb-2 overflow-x-auto">{item.pattern}</div>
                        <p className="text-sm text-slate-600 mb-2">{item.desc}</p>
                        <p className="text-xs text-slate-500">
                            {item.matches && <span>✅ Matches: {item.matches}</span>}
                            {item.rejects && <span> | ❌ Rejects: {item.rejects}</span>}
                        </p>
                    </div>
                ))}

                <details className="bg-slate-50 border border-slate-300 rounded-lg p-4 my-6">
                    <summary className="font-bold text-slate-800 cursor-pointer">📋 More Validation Patterns (Postal, UUID, Hex Color, JWT, etc.) — Click to expand</summary>
                    <div className="mt-4 space-y-3">
                        {[
                            { icon: '🎨', title: 'Hex Color Code', pattern: '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$', example: '✅ #FF5733, #fff | ❌ #GG1234, #12345' },
                            { icon: '🆔', title: 'UUID v4', pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', example: '✅ 550e8400-e29b-41d4-a716-446655440000' },
                            { icon: '🇮🇳', title: 'Indian Mobile Number', pattern: '^(\\+91|91|0)?[6-9]\\d{9}$', example: '✅ +919876543210, 09876543210, 9876543210' },
                            { icon: '📮', title: 'US Zip Code', pattern: '^\\d{5}(-\\d{4})?$', example: '✅ 12345, 12345-6789 | ❌ 1234, ABCDE' },
                            { icon: '🔐', title: 'JWT Token', pattern: '^[A-Za-z0-9\\-_]+\\.[A-Za-z0-9\\-_]+\\.[A-Za-z0-9\\-_]+$', example: '✅ Three base64url segments separated by dots' },
                            { icon: '🖥️', title: 'MAC Address', pattern: '^([0-9A-Fa-f]{2}[:\\-]){5}[0-9A-Fa-f]{2}$', example: '✅ 00:1A:2B:3C:4D:5E, 00-1A-2B-3C-4D-5E' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded p-3">
                                <h6 className="font-bold text-sm text-slate-800 mb-1">{item.icon} {item.title}</h6>
                                <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-xs mb-1 overflow-x-auto">{item.pattern}</div>
                                <p className="text-xs text-slate-500">{item.example}</p>
                            </div>
                        ))}
                    </div>
                </details>
            </section>

            {/* 8. Network Security & IDS */}
            <section className="content-section" id="app-security">
                <h3>8. Application: Network Security & IDS</h3>
                <p className="mb-4">Intrusion Detection Systems (IDS) and Web Application Firewalls (WAF) use regular expressions as <strong>signature patterns</strong> to detect malicious payloads in network traffic. Tools like <strong>Snort</strong>, <strong>Suricata</strong>, and <strong>ModSecurity</strong> maintain libraries of thousands of regex rules that match known attack patterns.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <img src="data:image/png;base64,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" alt="IDS Network" className="w-full rounded mb-3" loading="lazy" />
                        <p className="text-xs text-slate-600">An IDS sits on the network and inspects every packet, matching content against regex attack signatures in real time.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Automata_theory.svg/300px-Automata_theory.svg.png" alt="OWASP" className="w-full rounded mb-3" loading="lazy" />
                        <p className="text-xs text-slate-600">OWASP defines the top 10 web vulnerabilities — regex-based WAF rules protect against SQLi, XSS, and path traversal.</p>
                    </div>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">8.1 SQL Injection Detection</h4>
                <div className="bg-red-50 border-2 border-red-400 rounded-lg p-5 my-4">
                    <h5 className="font-bold text-red-900 mb-2">🚨 SQL Injection — Basic Detection Pattern</h5>
                    <div className="bg-slate-900 text-red-400 p-3 rounded font-mono text-sm mb-2 overflow-x-auto">(?i)(UNION\s+SELECT|INSERT\s+INTO|DROP\s+TABLE|DELETE\s+FROM|EXEC\s*\(|EXECUTE\s*\()</div>
                    <p className="text-sm text-red-800 mb-2">Case-insensitive match for common SQLi keywords. The (?i) flag enables case-insensitive matching.</p>
                    <p className="text-xs text-red-700">🚨 Flags: "' UNION SELECT * FROM users--", "'; DROP TABLE students;--"</p>
                </div>

                <div className="bg-red-50 border-2 border-red-400 rounded-lg p-5 my-4">
                    <h5 className="font-bold text-red-900 mb-2">🚨 SQL Injection — Comment & Quote Bypass</h5>
                    <div className="bg-slate-900 text-red-400 p-3 rounded font-mono text-sm mb-2 overflow-x-auto">(?:'|--|#|\/\*|xp_|sp_|0x[0-9a-f]+|CHAR\s*\(|ASCII\s*\()</div>
                    <p className="text-sm text-red-800 mb-2">Detects SQL comment injection (--, #, /*), hex encoding (0x...), and dangerous stored procedures (xp_, sp_).</p>
                    <p className="text-xs text-red-700">🚨 Flags: "' OR '1'='1'--", "0x61646d696e" (hex for "admin")</p>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">8.2 XSS Detection</h4>
                <div className="bg-red-50 border-2 border-red-400 rounded-lg p-5 my-4">
                    <h5 className="font-bold text-red-900 mb-2">🚨 Cross-Site Scripting (XSS) Pattern</h5>
                    <div className="bg-slate-900 text-red-400 p-3 rounded font-mono text-sm mb-2 overflow-x-auto">(?i)(&lt;script[\s\S]*?&gt;|javascript\s*:|on\w+\s*=\s*["']?[^"']*["']?|&lt;iframe|eval\s*\()</div>
                    <p className="text-sm text-red-800 mb-2">Detects &lt;script&gt; tags, javascript: URLs, inline event handlers (onclick=...), iframes, and eval().</p>
                    <p className="text-xs text-red-700">🚨 Flags: "&lt;script&gt;alert(1)&lt;/script&gt;", "&lt;img onerror='steal()'&gt;", "javascript:void(0)"</p>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">8.3 Path Traversal Detection</h4>
                <div className="bg-red-50 border-2 border-red-400 rounded-lg p-5 my-4">
                    <h5 className="font-bold text-red-900 mb-2">🚨 Path Traversal (Directory Traversal)</h5>
                    <div className="bg-slate-900 text-red-400 p-3 rounded font-mono text-sm mb-2 overflow-x-auto">(?:\.\.[/\\]){'{1,}'}|(?:%2e%2e[/\\%2f%5c])</div>
                    <p className="text-sm text-red-800 mb-2">Detects ../ and ..\\ sequences (raw and URL-encoded) used to escape the web root.</p>
                    <p className="text-xs text-red-700">🚨 Flags: "../../etc/passwd", "%2e%2e%2fetc%2fpasswd"</p>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">8.4 Snort Rule Example</h4>
                <pre className="bg-slate-900 text-slate-200 p-4 rounded-lg overflow-x-auto text-sm">
{`/* Snort IDS rule using regex (pcre keyword) */
alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS $HTTP_PORTS (
    msg:"SQL INJECTION attempt detected";
    flow:to_server,established;
    content:"GET";
    http_method;
    pcre:"/(\UNION\.*\SELECT\|\DROP\.*\TABLE\)/Ui";
    /* U=HTTP URI, i=case-insensitive */
    classtype:web-application-attack;
    sid:1000001;
    rev:1;
)

/* Suricata rule for XSS in HTTP body */
alert http $EXTERNAL_NET any -> $HTTP_SERVERS any (
    msg:"XSS attempt in POST body";
    flow:to_server,established;
    http.request_body;
    pcre:"/<script[\\s\\S]*?>/i";
    classtype:web-application-attack;
    sid:1000002;
    rev:1;
)`}
                </pre>
            </section>

            {/* 9. NLP & Bioinformatics */}
            <section className="content-section" id="app-nlp">
                <h3>9. Application: NLP & Bioinformatics</h3>

                <h4 className="text-lg font-bold mt-6 mb-3">9.1 Natural Language Processing (NLP)</h4>
                <p className="mb-4">In Natural Language Processing, regular expressions serve as the first layer of text preprocessing — tokenization, normalization, and feature extraction — before more complex ML models are applied. <strong>SpaCy</strong>, <strong>NLTK</strong>, and <strong>Stanford NLP</strong> all use regex internally for tokenization rules.</p>

                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">NLP Task</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Regular Expression</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Purpose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Sentence splitting', '(?<=[.!?])\\s+(?=[A-Z])', 'Split on punctuation followed by capital letter'],
                                ['Word tokenization', '\\b\\w+\\b', 'Extract word tokens'],
                                ['Hashtag extraction', '#[A-Za-z]\\w*', 'Find Twitter/social hashtags'],
                                ['Mention extraction', '@[A-Za-z]\\w*', 'Find @mentions'],
                                ['URL removal', 'https?://\\S+', 'Strip URLs from text'],
                                ['Number normalization', '\\b\\d+([,\\d]*\\.?\\d*)\\b', 'Find all numeric expressions'],
                                ['Negation patterns', '\\b(not|no|never|neither|nor)\\b', 'Detect negation for sentiment'],
                                ['Date expressions', '\\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\\.?\\s+\\d{1,2},?\\s+\\d{4}\\b', 'Find human-readable dates']
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="border border-slate-300 p-3">{row[0]}</td>
                                    <td className="border border-slate-300 p-3"><code>{row[1]}</code></td>
                                    <td className="border border-slate-300 p-3">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">9.2 Bioinformatics — DNA/Protein Pattern Matching</h4>
                <p className="mb-4">In bioinformatics, DNA sequences are strings over {'{A, C, G, T}'} and protein sequences over the 20-letter amino acid alphabet. Regular expressions describe biologically significant motifs — short recurring patterns that often correspond to functional sites in the genome or protein.</p>

                <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse border border-slate-300 text-sm">
                        <thead className="bg-slate-100">
                            <tr>
                                <th className="border border-slate-300 p-3 text-left font-bold">Biological Pattern</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Regex</th>
                                <th className="border border-slate-300 p-3 text-left font-bold">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['Start codon', 'ATG', 'Methionine — begins every protein'],
                                ['Stop codons', 'TAA|TAG|TGA', 'Terminates translation'],
                                ['Open Reading Frame', 'ATG([ACGT]{3})*?(TAA|TAG|TGA)', 'Potential protein-coding region'],
                                ['CpG dinucleotide', 'CG', 'Methylation site; epigenetics'],
                                ['TATA Box (promoter)', 'TATA[AT]A[AT]', 'Core promoter element'],
                                ['Restriction site EcoRI', 'GAATTC', 'Recognition site for EcoRI enzyme'],
                                ['Zinc finger motif (simplified)', 'C.{2}C.{3}[LIVMFYWC].{8}H.{3,5}H', 'DNA-binding protein domain'],
                                ['N-glycosylation site', 'N[^P][ST][^P]', 'PROSITE PS00001 — glycosylation motif']
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td className="border border-slate-300 p-3">{row[0]}</td>
                                    <td className="border border-slate-300 p-3"><code>{row[1]}</code></td>
                                    <td className="border border-slate-300 p-3">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <pre className="bg-slate-900 text-slate-200 p-4 rounded-lg overflow-x-auto text-sm">
{`# Bioinformatics: Find all ORFs (Open Reading Frames) in a DNA sequence
import re

dna = "ATGATCTAGTGAATGCCCTAGATGAAATGATGAAATAATGA"

# Find all start codons
starts = [m.start() for m in re.finditer(r'ATG', dna)]
print(f"Start codons at positions: {starts}")

# Find Open Reading Frames (ATG ... stop codon)
orf_pattern = re.compile(r'ATG(?:[ACGT]{3})*?(?:TAA|TAG|TGA)')
orfs = orf_pattern.findall(dna)
print(f"ORFs found: {orfs}")

# Find all CpG dinucleotides and their positions
cpg_pattern = re.compile(r'CG')
cpg_sites = [(m.start(), m.group()) for m in cpg_pattern.finditer(dna)]
print(f"CpG sites: {cpg_sites}")

# Find N-glycosylation sites in a protein sequence
protein = "MAKTAGNSTFQREQLNSTAQIIQNLTK"
glyco = re.findall(r'N[^P][ST][^P]', protein)
print(f"Glycosylation sites: {glyco}")`}
                </pre>
            </section>

            {/* 10. Pattern Library */}
            <section className="content-section" id="pattern-library">
                <h3>10. Pattern Library — 30+ Real-World Patterns</h3>
                <p className="mb-4">A curated library of production-ready regular expressions organized by category. Click any badge to load into the interactive tester in Section 12.</p>

                <h4 className="text-lg font-bold mt-6 mb-3">10.1 Web & Network</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: 'IPv6 Address', pattern: '^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$', example: '✅ 2001:0db8:85a3:0000:0000:8a2e:0370:7334' },
                        { title: 'HTTP Method', pattern: '^(GET|POST|PUT|DELETE|PATCH|HEAD|OPTIONS|TRACE|CONNECT)$', example: '✅ GET, POST, PUT | ❌ get, FETCH' },
                        { title: 'HTTP Status Code', pattern: '^[1-5]\\d{2}$', example: '✅ 200, 404, 500 | ❌ 099, 600' },
                        { title: 'Domain Name', pattern: '^(?:[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,}$', example: '✅ example.com, sub.domain.org | ❌ -invalid.com' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                            <h5 className="font-bold text-slate-800 mb-2">{item.title}</h5>
                            <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-xs mb-2 overflow-x-auto">{item.pattern}</div>
                            <p className="text-xs text-slate-500">{item.example}</p>
                        </div>
                    ))}
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">10.2 Log Parsing</h4>
                <div className="space-y-4">
                    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                        <h5 className="font-bold text-slate-800 mb-2">Apache/Nginx Combined Log Format</h5>
                        <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-xs mb-2 overflow-x-auto">^(\S+)\s\S+\s(\S+)\s\[([^\]]+)\]\s"(\S+)\s(\S+)\s\S+"\s(\d{3})\s(\d+|-)</div>
                        <p className="text-sm text-slate-600 mb-1">Groups: (1) IP, (2) user, (3) timestamp, (4) method, (5) path, (6) status, (7) bytes</p>
                        <p className="text-xs text-slate-500">✅ 192.168.1.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /index.html HTTP/1.1" 200 2326</p>
                    </div>
                    {[
                        { title: 'ISO 8601 Timestamp', pattern: '\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[+-]\\d{2}:\\d{2})', example: '✅ 2024-03-15T14:30:00Z, 2024-03-15T14:30:00.123+05:30' },
                        { title: 'Log Level Extraction', pattern: '(?:^|\\s)(DEBUG|INFO|WARN(?:ING)?|ERROR|FATAL|CRITICAL)(?:\\s|:)', example: '✅ "[2024-03-15] ERROR: Connection refused"' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                            <h5 className="font-bold text-slate-800 mb-2">{item.title}</h5>
                            <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-xs mb-2 overflow-x-auto">{item.pattern}</div>
                            <p className="text-xs text-slate-500">{item.example}</p>
                        </div>
                    ))}
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">10.3 Programming & Code</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: 'Python Function Definition', pattern: '^def\\s+([a-zA-Z_]\\w*)\\s*\\(([^)]*)\\)\\s*(?:->\\s*\\w+\\s*)?:', example: '✅ def hello(name: str) -> None:' },
                        { title: 'Java/C++ Class Declaration', pattern: '^(?:public|private|protected|abstract|final)?\\s*class\\s+([A-Z]\\w*)', example: '✅ public class MyClass, abstract class Base' },
                        { title: 'SQL SELECT Statement', pattern: '(?i)^\\s*SELECT\\s+(.+?)\\s+FROM\\s+(\\w+)(?:\\s+WHERE\\s+(.+))?$', example: '✅ SELECT name, age FROM users WHERE age > 18' },
                        { title: 'Environment Variable', pattern: '^[A-Z_][A-Z0-9_]*=', example: '✅ DATABASE_URL=, API_KEY=, PORT= | ❌ 1VAR=, lowercase=' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                            <h5 className="font-bold text-slate-800 mb-2">{item.title}</h5>
                            <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-xs mb-2 overflow-x-auto">{item.pattern}</div>
                            <p className="text-xs text-slate-500">{item.example}</p>
                        </div>
                    ))}
                </div>

                <h4 className="text-lg font-bold mt-6 mb-3">10.4 Finance & Documents</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { title: 'Currency Amount (USD)', pattern: '^\\$?\\d{1,3}(?:,\\d{3})*(?:\\.\\d{2})?$', example: '✅ $1,234.56, 9999.99, $42 | ❌ $1234.567, abc' },
                        { title: 'Indian PAN Card', pattern: '^[A-Z]{5}[0-9]{4}[A-Z]$', example: '✅ ABCDE1234F | ❌ abcde1234f, ABCD1234FG' },
                        { title: 'IBAN (International Bank Account)', pattern: '^[A-Z]{2}\\d{2}[A-Z0-9]{1,30}$', example: '✅ GB29NWBK60161331926819, DE89370400440532013000' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                            <h5 className="font-bold text-slate-800 mb-2">{item.title}</h5>
                            <div className="bg-slate-900 text-green-400 p-2 rounded font-mono text-xs mb-2 overflow-x-auto">{item.pattern}</div>
                            <p className="text-xs text-slate-500">{item.example}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 11. Implementation */}
            <section className="content-section" id="implementation">
                <h3>11. Python & JavaScript Implementation</h3>

                <h4 className="font-semibold text-lg">11.1 Python — Comprehensive Regex Toolkit</h4>
                <p className="text-sm mb-4">Python's <code>re</code> module provides efficient compiled pattern matching with backreferencing and named groups.</p>
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl mb-12 relative group">
                    <div className="absolute top-0 right-0 p-6 text-[10px] text-slate-300 uppercase font-black tracking-[0.3em]">PYTHON TOOLKIT</div>
                    <div className="flex bg-white px-8 py-4 border-b border-slate-100 justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div> python_toolkit.py</span>
                        <span className="flex gap-1.5 opacity-30"><span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span><span className="w-1.5 h-1.5 bg-slate-200 rounded-full"></span><span className="w-1.5 h-1.5 bg-slate-100 rounded-full"></span></span>
                    </div>
                    <pre className="p-8 px-10 text-[11px] font-mono leading-relaxed text-indigo-900 overflow-x-auto relative z-10">
                        {`import re
from typing import List, Dict

class InputValidator:
    """Production-ready input validation using RE patterns."""
    _patterns = {
        'email':    re.compile(r'^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
        'ipv4':     re.compile(r'^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$'),
        'pan':      re.compile(r'^[A-Z]{5}[0-9]{4}[A-Z]$'),
    }

    def validate(self, field: str, val: str) -> bool:
        return bool(self._patterns[field].fullmatch(val.strip()))

class Lexer:
    """Simple code tokenizer."""
    SPEC = [
        ('NUM',    r'\\d+'), 
        ('KW',     r'\\b(if|else|while)\\b'),
        ('ID',     r'[a-zA-Z_]\\w*'),
        ('SKIP',   r'[ \\s]+'),
        ('ERR',    r'.'),
    ]
    _master = re.compile('|'.join(f'(?P<{n}>{p})' for n,p in SPEC))

    def scan(self, code: str) -> List[tuple]:
        return [(mo.lastgroup, mo.group()) for mo in self._master.finditer(code) 
                if mo.lastgroup != 'SKIP']`}
                    </pre>
                </div>

                <h4 className="font-semibold text-lg">11.2 JavaScript — Browser-Side Regex</h4>
                <p className="text-sm mb-4">JavaScript environments use PCRE-lite engines. Note the <code>.groups</code> property for named capturing.</p>
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[2.5rem] overflow-hidden shadow-xl relative group">
                    <div className="absolute top-0 right-0 p-6 text-[10px] text-slate-300 uppercase font-black tracking-[0.3em]">JS / BROWSER</div>
                    <div className="flex bg-white px-8 py-4 border-b border-slate-100 justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> frontend.js</span>
                    </div>
                    <pre className="p-8 px-10 text-[11px] font-mono leading-relaxed text-slate-700 overflow-x-auto relative z-10">
                        {`// 1. Template substitution
const render = (template, data) => 
  template.replace(/\\{\\{\\s*(\\w+)\\s*\\}\\}/g, (_, k) => data[k] || '');

// 2. Extraction with Named Groups (ES2018+)
const logLine = '192.168.1.1 - [15/Mar/2024] "GET /api" 200';
const RE = /^(?<ip>\\S+)\\s-\\s\\[(?<date>.*?)\\]\\s"(?<req>.*)"\\s(?<status>\\d+)/;
const data = logLine.match(RE)?.groups;

// 3. Phone Format
const format = s => s.replace(/^(\\d{3})(\\d{3})(\\d{4})$/, '($1) $2-$3');`}
                    </pre>
                </div>
            </section>

            {/* 12. Interactive Regex Playground */}
            <section className="content-section" id="interactive">
                <h3>12. Interactive Regex Playground</h3>
                
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-8 my-6">
                    <h4 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                        <span className="text-2xl">▶</span> Live Regex Tester
                    </h4>
                    <p className="text-sm text-indigo-800 mb-6">Test any regular expression against any text. Matches are highlighted in yellow. Supports JavaScript regex syntax.</p>
                    
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Regular Expression:</label>
                            <input 
                                type="text" 
                                value={regexStr} 
                                onChange={(e) => setRegexStr(e.target.value)}
                                className="w-full p-3 border-2 border-indigo-300 rounded-lg font-mono text-sm focus:outline-none focus:border-indigo-500"
                                placeholder="Enter regex pattern..."
                            />
                            <div className="flex gap-4 mt-2">
                                {Object.entries({g: 'Global (g)', i: 'Ignore case (i)', m: 'Multiline (m)', s: 'DotAll (s)'}).map(([k, label]) => (
                                    <label key={k} className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            checked={flags[k as keyof typeof flags]} 
                                            onChange={(e) => setFlags({...flags, [k]: e.target.checked})}
                                            className="w-4 h-4"
                                        />
                                        {label}
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Test Text:</label>
                            <textarea 
                                value={testStr} 
                                onChange={(e) => setTestStr(e.target.value)}
                                className="w-full p-3 border-2 border-indigo-300 rounded-lg font-mono text-sm focus:outline-none focus:border-indigo-500"
                                rows={6}
                                placeholder="Enter text to test..."
                            />
                        </div>
                        
                        <div className="flex gap-3">
                            <button 
                                onClick={() => {/* trigger re-render */}}
                                className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center gap-2"
                            >
                                <span>▶</span> Test Regex
                            </button>
                            <button 
                                onClick={() => { setRegexStr(''); setTestStr(''); }}
                                className="px-6 py-2 bg-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-400 transition-colors flex items-center gap-2"
                            >
                                <span>✕</span> Clear
                            </button>
                        </div>
                        
                        {error && (
                            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4">
                                <p className="text-red-800 font-bold text-sm">❌ Regex Error: {error}</p>
                            </div>
                        )}
                        
                        <div className="bg-white border-2 border-slate-300 rounded-lg p-4">
                            <p className="text-sm font-bold text-slate-700 mb-2">Result ({matchCount} {matchCount === 1 ? 'match' : 'matches'}):</p>
                            <div 
                                className="p-3 bg-slate-50 rounded border border-slate-200 font-mono text-sm whitespace-pre-wrap break-words"
                                dangerouslySetInnerHTML={{ __html: resultHtml }}
                            />
                        </div>
                    </div>
                </div>

                <h4 className="text-lg font-bold mt-8 mb-4">12.1 Quick-Load Pattern Library</h4>
                <p className="text-sm mb-4">Click a badge to load the pattern and a relevant test string into the tester:</p>
                <div className="flex flex-wrap gap-2 mb-8">
                    {[
                        {icon: '📧', label: 'Email', pattern: '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}', test: 'Contact: alice@example.com, bob@test.org, invalid@'},
                        {icon: '🌐', label: 'IPv4', pattern: '\\b((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\b', test: 'Servers: 192.168.1.1, 10.0.0.1, 999.999.0.0 (invalid)'},
                        {icon: '📅', label: 'Date', pattern: '\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])', test: 'Dates: 2024-03-15, 2024-13-45 (invalid), 2023-12-31'},
                        {icon: '🔗', label: 'URL', pattern: 'https?://[a-zA-Z0-9\\-._~:/?#\\[\\]@!$&\'()*+,;=%]+', test: 'Links: https://example.com/path?q=1, http://test.org, ftp://invalid'},
                        {icon: '🎨', label: 'Hex Color', pattern: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\\b', test: 'Colors: #FF5733, #fff, #GG1234 (invalid), #12345 (invalid)'},
                        {icon: 'Aa', label: 'Capitalized', pattern: '\\b[A-Z][a-z]+\\b', test: 'Words: Hello World, this Is A Test, lowercase, UPPERCASE'},
                        {icon: '🔁', label: 'Duplicates', pattern: '\\b(\\w+)\\s+\\1\\b', test: 'Find: the the, hello hello world, no duplicates here'},
                        {icon: '💰', label: 'Numbers', pattern: '\\d+(?:,\\d{3})*(?:\\.\\d{2})?', test: 'Amounts: 1,234.56, 999, 42.00, invalid: 1,23.4'},
                        {icon: '🐍', label: 'Python def', pattern: 'def\\s+([a-zA-Z_]\\w*)\\s*\\(', test: 'def hello(name):\n    pass\ndef test_func():\n    return 42'},
                        {icon: '📋', label: 'Log Level', pattern: '\\b(DEBUG|INFO|WARN|ERROR|FATAL)\\b', test: '[2024-03-15] ERROR: Connection failed\n[2024-03-15] INFO: Server started'},
                        {icon: '🧬', label: 'DNA ORF', pattern: 'ATG(?:[ACGT]{3})*?(?:TAA|TAG|TGA)', test: 'ATGATCTAGTGAATGCCCTAGATGAAATGATGAAATAATGA'},
                        {icon: '🚨', label: 'SQLi', pattern: '(?i)(UNION\\s+SELECT|DROP\\s+TABLE|INSERT\\s+INTO)', test: "Input: ' UNION SELECT * FROM users--\nSafe: SELECT name FROM products"}
                    ].map((item, i) => (
                        <button
                            key={i}
                            onClick={() => loadPattern(item.pattern, item.test)}
                            className="px-4 py-2 bg-white border-2 border-indigo-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-400 transition-colors text-sm font-semibold flex items-center gap-2"
                        >
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>

                <h4 className="text-lg font-bold mt-8 mb-4">12.2 Regex Cheat Sheet — Quick Reference Card</h4>
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-300 rounded-xl p-6">
                    <h5 className="font-black text-slate-800 mb-4 text-center text-lg">📋 Regex Quick Reference</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <h6 className="font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Anchors</h6>
                            <div className="space-y-1 text-xs">
                                <div><code className="bg-indigo-100 px-1 rounded">^</code> — start of string/line</div>
                                <div><code className="bg-indigo-100 px-1 rounded">$</code> — end of string/line</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\b</code> — word boundary</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\B</code> — NOT word boundary</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\A</code> — start (no multiline)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\Z</code> — end (no multiline)</div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <h6 className="font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Character Classes</h6>
                            <div className="space-y-1 text-xs">
                                <div><code className="bg-indigo-100 px-1 rounded">\d</code> = [0-9]</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\D</code> = [^0-9]</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\w</code> = [a-zA-Z0-9_]</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\W</code> = [^a-zA-Z0-9_]</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\s</code> = [ \t\n\r\f\v]</div>
                                <div><code className="bg-indigo-100 px-1 rounded">.</code> = any except \n</div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <h6 className="font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Quantifiers</h6>
                            <div className="space-y-1 text-xs">
                                <div><code className="bg-indigo-100 px-1 rounded">*</code> — 0 or more (greedy)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">+</code> — 1 or more (greedy)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">?</code> — 0 or 1 (greedy)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">*?</code> — 0 or more (lazy)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">{'{n}'}</code> — exactly n</div>
                                <div><code className="bg-indigo-100 px-1 rounded">{'{n,m}'}</code> — n to m times</div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <h6 className="font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Groups &amp; Alternation</h6>
                            <div className="space-y-1 text-xs">
                                <div><code className="bg-indigo-100 px-1 rounded">(R)</code> — capturing group</div>
                                <div><code className="bg-indigo-100 px-1 rounded">(?:R)</code> — non-capturing</div>
                                <div><code className="bg-indigo-100 px-1 rounded">(?P&lt;n&gt;R)</code> — named group</div>
                                <div><code className="bg-indigo-100 px-1 rounded">\1, \2</code> — backreference</div>
                                <div><code className="bg-indigo-100 px-1 rounded">R|S</code> — union/alternation</div>
                                <div><code className="bg-indigo-100 px-1 rounded">[abc]</code> — character class</div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <h6 className="font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Lookahead / Lookbehind</h6>
                            <div className="space-y-1 text-xs">
                                <div><code className="bg-indigo-100 px-1 rounded">(?=R)</code> — positive lookahead</div>
                                <div><code className="bg-indigo-100 px-1 rounded">(?!R)</code> — negative lookahead</div>
                                <div><code className="bg-indigo-100 px-1 rounded">(?&lt;=R)</code> — pos. lookbehind</div>
                                <div><code className="bg-indigo-100 px-1 rounded">(?&lt;!R)</code> — neg. lookbehind</div>
                                <div className="text-slate-600 italic mt-2">These don't consume input</div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 border border-slate-200">
                            <h6 className="font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Common Flags</h6>
                            <div className="space-y-1 text-xs">
                                <div><code className="bg-indigo-100 px-1 rounded">g</code> — global (all matches)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">i</code> — case insensitive</div>
                                <div><code className="bg-indigo-100 px-1 rounded">m</code> — multiline (^,$ per line)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">s</code> — dotall (. matches \n)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">x</code> — verbose (ignore spaces)</div>
                                <div><code className="bg-indigo-100 px-1 rounded">u</code> — unicode</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 14. Exam-Oriented Questions */}
            <section className="content-section" id="exam">
                <h3>14. Exam-Oriented Questions</h3>
                <p className="mb-6 text-sm text-slate-700">Section A — Short Answer questions covering regex theory, applications, and practical implementation.</p>
                
                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border-l-4 border-indigo-400 pl-6 py-2">
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-gray-900 font-bold text-sm">Q1. Write a regular expression that matches all valid email addresses of the form local@domain.tld where the local part may contain letters, digits, dots, underscores, plus signs, or hyphens; the domain may contain letters and digits; and the TLD is 2–6 letters.</p>
                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-100 px-2 py-1 rounded whitespace-nowrap">[3 MARKS]</span>
                        </div>
                        <button onClick={() => toggleAnswer(101)} className="text-[11px] font-black text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider flex items-center gap-2 mb-2">
                            {showModelAnswer[101] ? '▼ Hide' : '▶ Show'} Model Answer
                        </button>
                        {showModelAnswer[101] && (
                            <div className="mt-3 p-5 bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-slate-200 rounded-lg">
                                <p className="text-xs font-bold text-slate-700 mb-2">Answer:</p>
                                <div className="bg-slate-900 text-green-400 p-3 rounded font-mono text-xs mb-4">^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.[a-zA-Z]{'{2,6}'}$</div>
                                <p className="text-xs font-bold text-slate-700 mb-2">Explanation of each part:</p>
                                <ul className="space-y-1 text-xs text-slate-600 ml-4">
                                    <li>• <code className="bg-slate-200 px-1 rounded">^</code> — anchor at start of string</li>
                                    <li>• <code className="bg-slate-200 px-1 rounded">[a-zA-Z0-9._%+\-]+</code> — local part: one or more allowed chars (letters, digits, ., _, %, +, -)</li>
                                    <li>• <code className="bg-slate-200 px-1 rounded">@</code> — literal @ symbol</li>
                                    <li>• <code className="bg-slate-200 px-1 rounded">[a-zA-Z0-9\-]+</code> — domain name: letters, digits, hyphens</li>
                                    <li>• <code className="bg-slate-200 px-1 rounded">(\.[a-zA-Z0-9\-]+)*</code> — optional subdomains (e.g., .co.uk)</li>
                                    <li>• <code className="bg-slate-200 px-1 rounded">\.[a-zA-Z]{'{2,6}'}</code> — TLD: dot then 2–6 letters</li>
                                    <li>• <code className="bg-slate-200 px-1 rounded">$</code> — anchor at end</li>
                                </ul>
                                <div className="mt-3 pt-3 border-t border-slate-300">
                                    <p className="text-xs text-green-700">✅ Matches: user@example.com, first.last@sub.domain.co.uk</p>
                                    <p className="text-xs text-red-700">❌ Rejects: @example.com, user@, user@@domain.com</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Q2 */}
                    <div className="border-l-4 border-indigo-400 pl-6 py-2">
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-gray-900 font-bold text-sm">Q2. Explain the difference between greedy and lazy quantifiers in regular expressions. Give one example where using the wrong type causes incorrect output.</p>
                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-100 px-2 py-1 rounded whitespace-nowrap">[4 MARKS]</span>
                        </div>
                        <button onClick={() => toggleAnswer(102)} className="text-[11px] font-black text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider flex items-center gap-2 mb-2">
                            {showModelAnswer[102] ? '▼ Hide' : '▶ Show'} Model Answer
                        </button>
                        {showModelAnswer[102] && (
                            <div className="mt-3 p-5 bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-slate-200 rounded-lg">
                                <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                                    <strong>Greedy quantifiers</strong> (*, +, ?, {'{n,m}'}) match as many characters as possible while still allowing the overall regex to match. They "consume" the maximum possible input before backing off if needed.
                                </p>
                                <p className="text-xs text-slate-700 mb-4 leading-relaxed">
                                    <strong>Lazy quantifiers</strong> (*?, +?, ??, {'{n,m}'}?) match as few characters as possible. They consume minimal input and expand only if necessary for the overall match.
                                </p>
                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-3">
                                    <p className="text-xs font-bold text-blue-900 mb-2">Example — HTML tag extraction:</p>
                                    <p className="text-xs text-blue-800 mb-2">Input: <code className="bg-white px-1 rounded">"&lt;b&gt;bold&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt;"</code></p>
                                    <p className="text-xs text-red-700 mb-1">❌ Greedy <code className="bg-white px-1 rounded">&lt;.*&gt;</code> matches the entire string from first &lt; to last &gt;, returning one match: <code className="bg-white px-1 rounded">"&lt;b&gt;bold&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt;"</code> — incorrect for tag extraction.</p>
                                    <p className="text-xs text-green-700">✅ Lazy <code className="bg-white px-1 rounded">&lt;.*?&gt;</code> matches each tag individually: <code className="bg-white px-1 rounded">&lt;b&gt;</code>, <code className="bg-white px-1 rounded">&lt;/b&gt;</code>, <code className="bg-white px-1 rounded">&lt;i&gt;</code>, <code className="bg-white px-1 rounded">&lt;/i&gt;</code> — correct behavior.</p>
                                </div>
                                <p className="text-xs text-slate-600 italic">Rule of thumb: Use lazy when you want the shortest possible match between two delimiters (e.g., inside quotes, HTML tags, parentheses).</p>
                            </div>
                        )}
                    </div>

                    {/* Q3 */}
                    <div className="border-l-4 border-indigo-400 pl-6 py-2">
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-gray-900 font-bold text-sm">Q3. A compiler's lexer uses the following token rules (in order): (1) keywords: if|while|return, (2) identifiers: [a-zA-Z_][a-zA-Z0-9_]*, (3) integers: [0-9]+. Tokenize the input: <code className="bg-slate-100 px-2 py-1 rounded">while x12 return 99</code> and list the token (type, lexeme) pairs.</p>
                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-100 px-2 py-1 rounded whitespace-nowrap">[5 MARKS]</span>
                        </div>
                        <button onClick={() => toggleAnswer(103)} className="text-[11px] font-black text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider flex items-center gap-2 mb-2">
                            {showModelAnswer[103] ? '▼ Hide' : '▶ Show'} Model Answer
                        </button>
                        {showModelAnswer[103] && (
                            <div className="mt-3 p-5 bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-slate-200 rounded-lg">
                                <p className="text-xs font-bold text-slate-700 mb-3">Tokenization of "while x12 return 99":</p>
                                <div className="overflow-x-auto mb-4">
                                    <table className="w-full border-collapse border border-slate-300 text-xs">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="border border-slate-300 p-2 text-left font-bold">Position</th>
                                                <th className="border border-slate-300 p-2 text-left font-bold">Lexeme</th>
                                                <th className="border border-slate-300 p-2 text-left font-bold">Token Type</th>
                                                <th className="border border-slate-300 p-2 text-left font-bold">Rule Applied</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-slate-300 p-2">1–5</td>
                                                <td className="border border-slate-300 p-2"><code className="bg-slate-200 px-1 rounded">while</code></td>
                                                <td className="border border-slate-300 p-2 font-bold text-blue-700">KEYWORD</td>
                                                <td className="border border-slate-300 p-2">Rule 1 (matches "while")</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-2">6</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">(space)</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">—</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">Discarded</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-2">7–9</td>
                                                <td className="border border-slate-300 p-2"><code className="bg-slate-200 px-1 rounded">x12</code></td>
                                                <td className="border border-slate-300 p-2 font-bold text-green-700">IDENTIFIER</td>
                                                <td className="border border-slate-300 p-2">Rule 2 (starts with letter, digits OK)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-2">10</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">(space)</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">—</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">Discarded</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-2">11–16</td>
                                                <td className="border border-slate-300 p-2"><code className="bg-slate-200 px-1 rounded">return</code></td>
                                                <td className="border border-slate-300 p-2 font-bold text-blue-700">KEYWORD</td>
                                                <td className="border border-slate-300 p-2">Rule 1 (matches "return"; before Rule 2)</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-2">17</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">(space)</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">—</td>
                                                <td className="border border-slate-300 p-2 text-slate-400">Discarded</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-slate-300 p-2">18–19</td>
                                                <td className="border border-slate-300 p-2"><code className="bg-slate-200 px-1 rounded">99</code></td>
                                                <td className="border border-slate-300 p-2 font-bold text-purple-700">INTEGER</td>
                                                <td className="border border-slate-300 p-2">Rule 3 (digits only)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bg-green-50 border-l-4 border-green-400 p-3 mb-3">
                                    <p className="text-xs font-bold text-green-900 mb-1">Output:</p>
                                    <code className="text-xs text-green-800">[(KEYWORD, "while"), (IDENTIFIER, "x12"), (KEYWORD, "return"), (INTEGER, "99")]</code>
                                </div>
                                <p className="text-xs text-slate-600 italic"><strong>Key point:</strong> "while" is matched as KEYWORD (Rule 1) not IDENTIFIER (Rule 2), because Rule 1 comes first in the flex spec — this is the "priority" or "first match" rule when pattern lengths are equal.</p>
                            </div>
                        )}
                    </div>

                    {/* Q4 */}
                    <div className="border-l-4 border-indigo-400 pl-6 py-2">
                        <div className="flex justify-between items-start mb-3">
                            <p className="text-gray-900 font-bold text-sm">Q4. (a) What is catastrophic backtracking in regex engines? (b) Give a specific example of a vulnerable pattern and an adversarial input that triggers it. (c) Describe two strategies to prevent ReDoS vulnerabilities.</p>
                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-100 px-2 py-1 rounded whitespace-nowrap">[6 MARKS]</span>
                        </div>
                        <button onClick={() => toggleAnswer(104)} className="text-[11px] font-black text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider flex items-center gap-2 mb-2">
                            {showModelAnswer[104] ? '▼ Hide' : '▶ Show'} Model Answer
                        </button>
                        {showModelAnswer[104] && (
                            <div className="mt-3 p-5 bg-gradient-to-br from-gray-50 to-slate-50 border-2 border-slate-200 rounded-lg">
                                <div className="mb-4">
                                    <p className="text-xs font-bold text-slate-700 mb-2">(a) Catastrophic Backtracking [2 marks]:</p>
                                    <p className="text-xs text-slate-700 leading-relaxed">
                                        Catastrophic backtracking occurs in NFA-based regex engines when a pattern — typically containing nested or overlapping quantifiers — causes the engine to explore an exponential number of matching paths before determining failure. The time complexity degrades from O(n) to O(2<sup>n</sup>) or worse, making the engine unusable on long inputs.
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-xs font-bold text-slate-700 mb-2">(b) Vulnerable Pattern &amp; Adversarial Input [2 marks]:</p>
                                    <div className="bg-red-50 border-l-4 border-red-400 p-3 mb-2">
                                        <p className="text-xs text-red-900 mb-1"><strong>Pattern:</strong> <code className="bg-white px-2 py-1 rounded">^(a+)+$</code></p>
                                        <p className="text-xs text-red-900 mb-2"><strong>Adversarial input:</strong> <code className="bg-white px-2 py-1 rounded">"aaaaaaaaaaaaaaaaaaaaaaaaaX"</code> (many a's followed by non-matching character)</p>
                                        <p className="text-xs text-red-800 leading-relaxed">
                                            <strong>Why vulnerable:</strong> The outer (a+)+ creates exponential ambiguity — "aaaa" can be matched as (a)(a)(a)(a), (aa)(a)(a), (a)(aa)(a), (aaa)(a), (a)(a)(aa), (aaaa), etc. The engine tries all 2<sup>n</sup> partitions before concluding failure. A 40-character input can take minutes to reject.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-700 mb-2">(c) Prevention Strategies [2 marks]:</p>
                                    <ul className="space-y-2 text-xs text-slate-700">
                                        <li className="bg-green-50 border-l-4 border-green-400 p-3">
                                            <strong>• Use RE2/automata-based engines:</strong> Go's regexp, Rust's regex crate, and Google's RE2 library guarantee O(n) matching by converting regex to DFA. They disallow backreferences (which prevent DFA construction) but prevent all catastrophic backtracking.
                                        </li>
                                        <li className="bg-green-50 border-l-4 border-green-400 p-3">
                                            <strong>• Avoid nested quantifiers:</strong> Rewrite patterns like (a+)+ as a+. Use atomic groups (?&gt;...) or possessive quantifiers (a++) where available, which prevent backtracking into the group. Also: test patterns with long adversarial inputs before deployment, and set regex timeout limits in production code.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-16 py-8 border-t text-center">
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em]">Unit 2.1 | Module Completed</p>
                </div>
            </section>

        </div>
    );
};

export default Module2_1;
