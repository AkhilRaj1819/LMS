'use client';
import React, { useState } from 'react';

const RegexTester = () => {
  const [pattern, setPattern] = useState('\\b[A-Z][a-z]+\\b');
  const [flags, setFlags] = useState({ g: true, i: false, m: false });
  const [testText, setTestText] = useState('Hello World. My Name Is Alice. she said.');
  const [result, setResult] = useState('');
  const [matchCount, setMatchCount] = useState(0);

  const testRegex = () => {
    try {
      const flagStr = (flags.g ? 'g' : '') + (flags.i ? 'i' : '') + (flags.m ? 'm' : '');
      const regex = new RegExp(pattern, flagStr);
      const matches = testText.match(regex);
      
      if (matches) {
        let highlighted = testText;
        matches.forEach(match => {
          highlighted = highlighted.replace(match, `<mark class="bg-yellow-300">${match}</mark>`);
        });
        setResult(highlighted);
        setMatchCount(matches.length);
      } else {
        setResult(testText);
        setMatchCount(0);
      }
    } catch (e) {
      setResult('Invalid regex pattern');
      setMatchCount(0);
    }
  };

  const loadPattern = (newPattern: string) => {
    setPattern(newPattern);
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 mt-4">
      <h4 className="font-semibold text-lg mb-4">Live Regex Tester</h4>
      
      <div className="space-y-4">
        <div>
          <label className="block font-semibold mb-2">Regular Expression Pattern:</label>
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 font-mono"
          />
          <div className="flex gap-4 mt-2">
            <label className="flex items-center">
              <input type="checkbox" checked={flags.g} onChange={(e) => setFlags({...flags, g: e.target.checked})} className="mr-2" />
              Global (g)
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={flags.i} onChange={(e) => setFlags({...flags, i: e.target.checked})} className="mr-2" />
              Case-insensitive (i)
            </label>
            <label className="flex items-center">
              <input type="checkbox" checked={flags.m} onChange={(e) => setFlags({...flags, m: e.target.checked})} className="mr-2" />
              Multiline (m)
            </label>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Test Text:</label>
          <textarea
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 h-24"
          />
        </div>

        <button
          onClick={testRegex}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          ▶ Test Regex
        </button>

        {result && (
          <div>
            <label className="block font-semibold mb-2">Result:</label>
            <div className="border border-gray-300 rounded p-3 bg-gray-50" dangerouslySetInnerHTML={{__html: result}} />
            <p className="text-sm text-gray-600 mt-2">Matches: {matchCount} {matchCount === 1 ? 'match' : 'matches'}</p>
          </div>
        )}

        <div>
          <p className="font-semibold mb-2">Quick Pattern Reference:</p>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => loadPattern('[0-9]+')} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">Integers</button>
            <button onClick={() => loadPattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">Email</button>
            <button onClick={() => loadPattern('\\b[A-Z][a-z]+\\b')} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">Capitalized Words</button>
            <button onClick={() => loadPattern('\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b')} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">IP Address</button>
            <button onClick={() => loadPattern('#[0-9A-Fa-f]{6}')} className="px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300">Hex Color</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Module1_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.7</div>
        <div className="lesson-title-main">
          <h1>📝 Regular Expressions</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Table of Contents</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Learning Objectives</li>
          <li>Introduction to Regular Expressions</li>
          <li>Formal Definition &amp; Syntax</li>
          <li>Core Operations: Union, Concatenation, Kleene Star</li>
          <li>Worked Examples &amp; Pattern Construction</li>
          <li>Regular Expressions to NFA (Thompson&#39;s Construction)</li>
          <li>NFA/DFA to Regular Expression (Arden&#39;s Lemma)</li>
          <li>Algebraic Laws &amp; Identities</li>
          <li>Real-World Applications</li>
          <li>Python Implementation</li>
          <li>Interactive Regex Tester</li>
          <li>MCQ Practice</li>
          <li>Exam-Oriented Questions</li>
        </ul>
      </section>

      <section className="content-section">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
          <p className="font-semibold">🎯 Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Define Regular Expressions Formally: State the inductive definition of a regular expression over an alphabet Σ and identify base cases and inductive steps</li>
            <li>Apply Core Operations: Construct regular expressions using union (+), concatenation (juxtaposition), and Kleene star (*) to describe given languages</li>
            <li>Convert Between Models: Transform a regular expression into an equivalent NFA (Thompson&#39;s Construction) and vice versa, proving equivalence with finite automata</li>
            <li>Apply Algebraic Laws: Simplify and manipulate regular expressions using identities such as commutativity of union, associativity, and Kleene star properties</li>
            <li>Solve Real-World Problems: Design regular expressions for lexical analysis, input validation, and text processing tasks encountered in software development</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>Introduction to Regular Expressions</h3>
        <p>
          Regular expressions (regex or regexp) are one of the most powerful and elegant ideas in computer science. 
          At their heart, a regular expression is a finite symbolic description of a (potentially infinite) set of strings. 
          Where a finite automaton describes a language procedurally — telling you step by step how to recognize a string — 
          a regular expression describes a language declaratively, as a mathematical formula.
        </p>
        <p className="mt-4">
          The theory of regular expressions was developed by mathematician Stephen Cole Kleene in the 1950s as part of his 
          work on the theory of nerve nets and finite automata. Kleene proved the fundamental theorem that links regular 
          expressions, NFAs, and DFAs: they are all equivalent in expressive power. That is, every language that can be 
          described by a regular expression can be recognized by some finite automaton, and vice versa. These languages are 
          called regular languages.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Why Regular Expressions Matter</p>
          <p className="mt-2">
            Regular expressions appear in virtually every programming language and operating system: Python&#39;s re module, 
            JavaScript&#39;s built-in regex, grep in Unix, lexical analyzers (like lex/flex), database query systems, and 
            security tools. Understanding the theory behind them gives you deep insight into both their power and their limitations.
          </p>
        </div>

        <h4 className="mt-6 font-semibold">2.1 Intuitive Meaning</h4>
        <p className="mt-4">
          Think of a regular expression as a blueprint or template for strings. The regex <code className="bg-gray-100 px-2 py-1 rounded">ab*c</code> describes 
          all strings that begin with &#39;a&#39;, end with &#39;c&#39;, and have zero or more &#39;b&#39; characters in between: 
          &quot;ac&quot;, &quot;abc&quot;, &quot;abbc&quot;, &quot;abbbc&quot;, and so on — an infinite set, described by three symbols.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Regular expression to automaton</p>
          <p className="mt-2">A regular expression corresponds to a finite automaton — the fundamental Kleene theorem.</p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Chomsky Hierarchy showing Regular Languages</p>
          <p className="mt-2">
            Regular languages (Type-3) sit at the bottom of the Chomsky hierarchy — the most restricted, but also the most 
            computationally efficient class.
          </p>
        </div>

        <h4 className="mt-6 font-semibold">2.2 Historical Context</h4>
        <p className="mt-4">
          Regular expressions were introduced by Kleene in 1951 to describe McCulloch–Pitts neural nets. Ken Thompson later 
          implemented them in the QED text editor in the 1960s, which led directly to their integration in the Unix tool grep 
          (Global Regular Expression Print). The POSIX standard later formalized extended regular expressions (ERE), and today 
          virtually every computing language includes regex support.
        </p>
        <p className="mt-4">
          The power of regular expressions lies in three primitive operations: union (choosing between alternatives), 
          concatenation (sequential composition), and Kleene closure (repetition). These three operations, when applied to 
          basic symbols, can describe any regular language.
        </p>

        <h4 className="mt-6 font-semibold">2.3 Video Lecture: Introduction</h4>
        
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-semibold">Regular Expressions — Introduction</p>
            <p className="text-sm text-gray-600">Neso Academy • Covers definition, notation, and first examples of regular expressions in Theory of Computation.</p>
          </div>

          <div>
            <p className="font-semibold">Regular Expressions — Gate Smashers</p>
            <p className="text-sm text-gray-600">Gate Smashers • Exam-focused coverage of regular expression syntax and language construction with worked examples.</p>
          </div>

          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/4C7ZQJDoK-g?si=X07aJ_mCNyZtVK0M" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>

          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/LQ6pHeMG6Fc?si=gpggfVY58CrQ9wWe" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>3. Formal Definition &amp; Syntax</h3>
        
        <h4 className="mt-4 font-semibold">3.1 Inductive Definition</h4>
        <p className="mt-4">Let Σ be a finite alphabet. A regular expression over Σ is defined inductively as follows:</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Definition: Regular Expression (Formal)</p>
          <p className="mt-3 font-semibold">Basis (Atomic Regular Expressions):</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>∅ is a regular expression, denoting the empty language (no strings).</li>
            <li>ε is a regular expression, denoting the language {'{'}ε{'}'} (the set containing only the empty string).</li>
            <li>For each symbol a ∈ Σ, a is a regular expression, denoting the language {'{'}a{'}'} (the set containing the single-character string &quot;a&quot;).</li>
          </ul>

          <p className="mt-3 font-semibold">Inductive Step: If R and S are regular expressions, then:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>(R + S) is a regular expression denoting L(R) ∪ L(S) — Union</li>
            <li>(RS) is a regular expression denoting L(R) · L(S) — Concatenation</li>
            <li>(R*) is a regular expression denoting L(R)* — Kleene closure</li>
            <li>(R) is a regular expression denoting L(R) — Parenthesisation</li>
          </ul>

          <p className="mt-3">Nothing else is a regular expression.</p>
        </div>

        <h4 className="mt-6 font-semibold">3.2 Language of a Regular Expression</h4>
        <p className="mt-4">We write L(R) to denote the language described by regular expression R. For example:</p>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Regular Expression R</th>
                <th className="border border-gray-300 px-4 py-2">Language L(R)</th>
                <th className="border border-gray-300 px-4 py-2">Example Strings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">∅</td>
                <td className="border border-gray-300 px-4 py-2">∅ (empty set)</td>
                <td className="border border-gray-300 px-4 py-2">none</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ε</td>
                <td className="border border-gray-300 px-4 py-2">{'{'}ε{'}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;&quot;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">a</td>
                <td className="border border-gray-300 px-4 py-2">{'{"a"}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;a&quot;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">a + b</td>
                <td className="border border-gray-300 px-4 py-2">{'{"a", "b"}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;a&quot;, &quot;b&quot;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ab</td>
                <td className="border border-gray-300 px-4 py-2">{'{"ab"}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;ab&quot;</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">a*</td>
                <td className="border border-gray-300 px-4 py-2">{'{'}ε, &quot;a&quot;, &quot;aa&quot;, &quot;aaa&quot;, ...{'}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;&quot;, &quot;a&quot;, &quot;aa&quot;, ...</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">(a+b)*</td>
                <td className="border border-gray-300 px-4 py-2">Σ* (all strings over {'{'}a,b{'}'})</td>
                <td className="border border-gray-300 px-4 py-2">&quot;&quot;, &quot;a&quot;, &quot;b&quot;, &quot;ab&quot;, &quot;ba&quot;, ...</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">a*b*</td>
                <td className="border border-gray-300 px-4 py-2">{'{'}a<sup>i</sup>b<sup>j</sup> : i,j ≥ 0{'}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;&quot;, &quot;a&quot;, &quot;b&quot;, &quot;ab&quot;, &quot;aab&quot;, ...</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">(ab)*</td>
                <td className="border border-gray-300 px-4 py-2">{'{'}(ab)<sup>n</sup> : n ≥ 0{'}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;&quot;, &quot;ab&quot;, &quot;abab&quot;, ...</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">a+</td>
                <td className="border border-gray-300 px-4 py-2">{'{'}a<sup>n</sup> : n ≥ 1{'}'}</td>
                <td className="border border-gray-300 px-4 py-2">&quot;a&quot;, &quot;aa&quot;, &quot;aaa&quot;, ...</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="mt-6 font-semibold">3.3 Operator Precedence</h4>
        <p className="mt-4">To avoid excessive parentheses, we use the following precedence rules (highest to lowest):</p>

        <div className="bg-white border border-gray-300 rounded-lg p-6 mt-4">
          <p className="text-center font-semibold text-lg mb-6">Operator Precedence in Regular Expressions</p>
          <div className="flex justify-center">
            <svg width="400" height="300" viewBox="0 0 400 300" className="border border-gray-200 rounded">
              {/* Highest - Kleene Star */}
              <rect x="100" y="30" width="200" height="60" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" rx="5"/>
              <text x="200" y="55" textAnchor="middle" fontSize="16" fontWeight="bold">Kleene Star ( * )</text>
              <text x="200" y="75" textAnchor="middle" fontSize="14" fill="#dc2626">Highest</text>
              
              {/* Arrow down */}
              <line x1="200" y1="90" x2="200" y2="110" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Middle - Concatenation */}
              <rect x="100" y="120" width="200" height="60" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="5"/>
              <text x="200" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">Concatenation</text>
              <text x="200" y="165" textAnchor="middle" fontSize="14" fill="#eab308">Middle</text>
              
              {/* Arrow down */}
              <line x1="200" y1="180" x2="200" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              
              {/* Lowest - Union */}
              <rect x="100" y="210" width="200" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
              <text x="200" y="235" textAnchor="middle" fontSize="16" fontWeight="bold">Union ( + )</text>
              <text x="200" y="255" textAnchor="middle" fontSize="14" fill="#3b82f6">Lowest</text>
              
              {/* Arrow marker definition */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
            </svg>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">Kleene star binds tightest, union binds loosest. Use parentheses to override.</p>
        </div>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Precedence (High to Low):</p>
          <ol className="list-decimal ml-6 mt-2 space-y-2">
            <li><strong>Kleene Star (*)</strong> — highest precedence, applies to the immediately preceding expression</li>
            <li><strong>Concatenation (juxtaposition)</strong> — applied left to right</li>
            <li><strong>Union (+)</strong> — lowest precedence</li>
          </ol>
          <p className="mt-3"><strong>Example:</strong> ab* + c means (a(b*)) + c, not a(b+c)* or anything else.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>4. Core Operations</h3>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 w-20">Symbol</th>
                <th className="border border-gray-300 px-4 py-2">Operation</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center font-bold text-lg">+</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Union (Alternation)</td>
                <td className="border border-gray-300 px-4 py-2">R + S matches any string in L(R) OR L(S). Also written as R | S.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center font-bold text-lg">·</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Concatenation</td>
                <td className="border border-gray-300 px-4 py-2">RS matches any string formed by a string from L(R) followed by one from L(S).</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center font-bold text-lg">*</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Kleene Star (Closure)</td>
                <td className="border border-gray-300 px-4 py-2">R* matches ε, or any number of strings from L(R) concatenated together (including zero).</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center font-bold text-lg">+</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Kleene Plus</td>
                <td className="border border-gray-300 px-4 py-2">R+ means RR* — one or more repetitions of R. (Derived, not primitive.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center font-bold text-lg">?</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Optional</td>
                <td className="border border-gray-300 px-4 py-2">R? means R + ε — zero or one occurrence of R. (Derived, not primitive.)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center font-bold text-lg">( )</td>
                <td className="border border-gray-300 px-4 py-2 font-semibold">Grouping</td>
                <td className="border border-gray-300 px-4 py-2">Parentheses override precedence and group sub-expressions for clarity.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="mt-6 font-semibold">4.1 Union in Detail</h4>
        <p className="mt-4">The union (or alternation) of two regular expressions R and S, written R + S (or R | S), is the set of strings that are in either L(R) or L(S), or both. Formally:</p>
        <div className="bg-gray-50 p-4 rounded mt-2">
          <p className="text-center font-mono">L(R + S) = L(R) ∪ L(S)</p>
        </div>
        <p className="mt-4"><strong>Example:</strong> The regular expression cat + dog describes the language {'{"cat", "dog"}'}. The expression 0 + 1 + 2 + ... + 9 describes any single decimal digit.</p>

        <h4 className="mt-6 font-semibold">4.2 Concatenation in Detail</h4>
        <p className="mt-4">The concatenation of R and S, written RS (or R · S), is the set of all strings formed by taking a string from L(R) and appending a string from L(S):</p>
        <div className="bg-gray-50 p-4 rounded mt-2">
          <p className="text-center font-mono">L(RS) = L(R) · L(S) = {'{'}xy : x ∈ L(R), y ∈ L(S){'}'}</p>
        </div>
        <p className="mt-4"><strong>Example:</strong> (a + b)(c + d) gives {'{"ac", "ad", "bc", "bd"}'} — every possible pairing of one character from {'{'}a,b{'}'} with one from {'{'}c,d{'}'}.</p>

        <h4 className="mt-6 font-semibold">4.3 Kleene Star in Detail</h4>
        <p className="mt-4">The Kleene star (or Kleene closure) of R, written R*, is the set of all strings formed by concatenating zero or more strings from L(R):</p>
        <div className="bg-gray-50 p-4 rounded mt-2">
          <p className="text-center font-mono">L(R*) = L(R)<sup>0</sup> ∪ L(R)<sup>1</sup> ∪ L(R)<sup>2</sup> ∪ ... = ⋃<sub>i≥0</sub> L(R)<sup>i</sup></p>
          <p className="text-center text-sm mt-2">where L(R)<sup>0</sup> = {'{'}ε{'}'}, L(R)<sup>i+1</sup> = L(R)<sup>i</sup> · L(R)</p>
        </div>
        <p className="mt-4">The Kleene star always includes ε (the empty string), because concatenating zero copies yields the empty string. This is a common source of confusion: a* does match the empty string!</p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
          <p className="font-semibold">Common Mistake: Kleene Star and Empty String</p>
          <p className="mt-2">Students often forget that R* always matches ε. If you want &quot;one or more&quot; repetitions, use R+ (Kleene plus), which is equivalent to RR* and does not match the empty string.</p>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 mt-4">
          <p className="text-center font-semibold text-lg mb-4">Language of a* = {'{'}ε, a, aa, aaa, ...{'}'}</p>
          <div className="flex justify-center">
            <svg width="500" height="250" viewBox="0 0 500 250">
              <defs>
                <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
              
              {/* Left column - strings */}
              <rect x="50" y="20" width="120" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
              <text x="110" y="45" textAnchor="middle" fontSize="18" fontWeight="bold">ε</text>
              
              <rect x="50" y="70" width="120" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
              <text x="110" y="95" textAnchor="middle" fontSize="18" fontWeight="bold">a</text>
              
              <rect x="50" y="120" width="120" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
              <text x="110" y="145" textAnchor="middle" fontSize="18" fontWeight="bold">aa</text>
              
              <rect x="50" y="170" width="120" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
              <text x="110" y="195" textAnchor="middle" fontSize="18" fontWeight="bold">aaa</text>
              
              <text x="110" y="230" textAnchor="middle" fontSize="20" fontWeight="bold">...</text>
              
              {/* Arrows */}
              <line x1="170" y1="40" x2="280" y2="40" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)"/>
              <line x1="170" y1="90" x2="280" y2="90" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)"/>
              <line x1="170" y1="140" x2="280" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)"/>
              <line x1="170" y1="190" x2="280" y2="190" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow3)"/>
              
              {/* Right column - notation */}
              <rect x="290" y="20" width="160" height="40" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="5"/>
              <text x="370" y="45" textAnchor="middle" fontSize="16" fontWeight="bold">a<tspan baselineShift="super" fontSize="12">0</tspan> (0 copies)</text>
              
              <rect x="290" y="70" width="160" height="40" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="5"/>
              <text x="370" y="95" textAnchor="middle" fontSize="16" fontWeight="bold">a<tspan baselineShift="super" fontSize="12">1</tspan> (1 copy)</text>
              
              <rect x="290" y="120" width="160" height="40" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="5"/>
              <text x="370" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">a<tspan baselineShift="super" fontSize="12">2</tspan> (2 copies)</text>
              
              <rect x="290" y="170" width="160" height="40" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="5"/>
              <text x="370" y="195" textAnchor="middle" fontSize="16" fontWeight="bold">a<tspan baselineShift="super" fontSize="12">3</tspan> (3 copies)</text>
              
              <text x="370" y="230" textAnchor="middle" fontSize="20" fontWeight="bold">...</text>
            </svg>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">The Kleene star of &#39;a&#39; generates all strings of zero or more a&#39;s, including the empty string ε.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>5. Worked Examples &amp; Pattern Construction</h3>
        <p className="mt-4">Building regular expressions requires practice. The key skill is translating an English description of a language into the symbolic form of a regex. Below are systematic worked examples.</p>

        <h4 className="mt-6 font-semibold">5.1 Strings over {'{'}a, b{'}'} ending in &#39;b&#39;</h4>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Example 1: L = {'{'}w ∈ {'{'}a,b{'}'}* : w ends with &#39;b&#39;{'}'}</p>
          <ol className="list-decimal ml-6 mt-3 space-y-2">
            <li>Any string over {'{'}a,b{'}'} is described by (a + b)*.</li>
            <li>We need the string to end with &#39;b&#39;, so we append a mandatory &#39;b&#39;.</li>
            <li><strong>Answer:</strong> (a + b)*b</li>
            <li><strong>Matches:</strong> &quot;b&quot;, &quot;ab&quot;, &quot;aab&quot;, &quot;bab&quot;, &quot;abb&quot;, ... <strong>Does not match:</strong> &quot;a&quot;, &quot;ba&quot;, &quot;&quot;</li>
          </ol>
        </div>

        <h4 className="mt-6 font-semibold">5.2 Strings containing exactly two a&#39;s</h4>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Example 2: L = {'{'}w ∈ {'{'}a,b{'}'}* : w contains exactly two a&#39;s{'}'}</p>
          <ol className="list-decimal ml-6 mt-3 space-y-2">
            <li>We need exactly two &#39;a&#39; characters, surrounded by any number of &#39;b&#39;s.</li>
            <li>Between, before, and after the a&#39;s, we can have zero or more b&#39;s: b*.</li>
            <li><strong>Answer:</strong> b*ab*ab*</li>
            <li><strong>Matches:</strong> &quot;aa&quot;, &quot;baa&quot;, &quot;aab&quot;, &quot;bab&quot;, &quot;babb&quot;, &quot;baab&quot;, &quot;bbabbabb&quot;, ... <strong>Does not match:</strong> &quot;a&quot;, &quot;aaa&quot;, &quot;bba&quot;</li>
          </ol>
        </div>

        <h4 className="mt-6 font-semibold">5.3 Strings of even length over {'{'}a, b{'}'}</h4>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Example 3: L = {'{'}w ∈ {'{'}a,b{'}'}* : |w| is even{'}'}</p>
          <ol className="list-decimal ml-6 mt-3 space-y-2">
            <li>An even-length string consists of pairs of characters.</li>
            <li>Each pair can be any two characters: (a+b)(a+b) = one pair.</li>
            <li>Zero or more pairs gives: <strong>Answer:</strong> ((a+b)(a+b))*</li>
            <li><strong>Matches:</strong> &quot;&quot;, &quot;aa&quot;, &quot;ab&quot;, &quot;ba&quot;, &quot;bb&quot;, &quot;aaaa&quot;, &quot;abab&quot;, ... <strong>Does not match:</strong> &quot;a&quot;, &quot;aba&quot;, &quot;b&quot;</li>
          </ol>
        </div>

        <h4 className="mt-6 font-semibold">5.4 Binary strings divisible by 3</h4>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Example 4: Binary strings whose numeric value is divisible by 3</p>
          <ol className="list-decimal ml-6 mt-3 space-y-2">
            <li>Build a DFA with 3 states (remainders 0, 1, 2 mod 3). State q0 is start and accept.</li>
            <li>Transitions: from q0: 0→q0, 1→q1. From q1: 0→q2, 1→q0. From q2: 0→q1, 1→q2.</li>
            <li>Converting this DFA to a regex using Arden&#39;s lemma gives: <strong>Answer:</strong> 0* + (0*10*1(0 + 10*1)*10*) (simplified form)</li>
            <li><strong>Matches:</strong> &quot;0&quot; (=0), &quot;11&quot; (=3), &quot;110&quot; (=6), &quot;1001&quot; (=9), ...</li>
          </ol>
        </div>

        <h4 className="mt-6 font-semibold">5.5 Email Address Validation (Simplified)</h4>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">Example 5: Simplified email pattern</p>
          <ol className="list-decimal ml-6 mt-3 space-y-2">
            <li>Email has format: username@domain.tld</li>
            <li>Username: one or more alphanumeric chars or dots/underscores: [a-zA-Z0-9._]+</li>
            <li>Domain: [a-zA-Z0-9]+, then literal dot, then TLD: [a-zA-Z]{'{'}2,4{'}'}</li>
            <li><strong>Answer:</strong> [a-zA-Z0-9._]+ @ [a-zA-Z0-9]+ \. [a-zA-Z]{'{'}2,4{'}'}</li>
          </ol>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <p className="font-semibold">Pattern matching example</p>
          <p className="mt-2">Pattern matching is used in bioinformatics to search DNA sequences — a natural application of regular expressions.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Finite state machine for regular expression</p>
          <p className="mt-2">Every regular expression corresponds to a finite state machine — the fundamental link between algebra and automata.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>6. Regular Expressions to NFA: Thompson&#39;s Construction</h3>
        <p className="mt-4">One direction of the Kleene theorem is proven by Thompson&#39;s Construction (1968). Given any regular expression, we systematically build an NFA (with ε-transitions) that accepts exactly the same language. The construction is inductive, mirroring the inductive definition of regular expressions.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Key Property of Thompson&#39;s NFAs:</p>
          <p className="mt-2">Each NFA fragment has exactly one start state and one accept state. This makes composition via ε-transitions clean and predictable.</p>
        </div>

        <h4 className="mt-6 font-semibold">6.1 Base Cases</h4>

        <div className="bg-white border border-gray-300 rounded-lg p-6 mt-4">
          <p className="text-center font-semibold text-lg mb-6">Thompson&#39;s Construction — Base Cases</p>
          
          <div className="space-y-8">
            {/* NFA for epsilon */}
            <div>
              <p className="font-semibold mb-3">RE = ε</p>
              <svg width="300" height="80" viewBox="0 0 300 80" className="mx-auto">
                <defs>
                  <marker id="arrow4" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                  </marker>
                </defs>
                <circle cx="50" cy="40" r="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                <text x="50" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">q0</text>
                <line x1="20" y1="40" x2="25" y2="40" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow4)"/>
                <path d="M 75 40 Q 150 20, 225 40" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow4)"/>
                <text x="150" y="25" textAnchor="middle" fontSize="14" fontWeight="bold">ε</text>
                <circle cx="250" cy="40" r="25" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
                <circle cx="250" cy="40" r="20" fill="none" stroke="#22c55e" strokeWidth="2"/>
                <text x="250" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">q1</text>
              </svg>
              <p className="text-center text-sm text-gray-600 mt-2">NFA for ε</p>
            </div>

            {/* NFA for single symbol */}
            <div>
              <p className="font-semibold mb-3">RE = a (single symbol)</p>
              <svg width="300" height="80" viewBox="0 0 300 80" className="mx-auto">
                <circle cx="50" cy="40" r="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                <text x="50" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">q0</text>
                <line x1="20" y1="40" x2="25" y2="40" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow4)"/>
                <line x1="75" y1="40" x2="225" y2="40" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow4)"/>
                <text x="150" y="30" textAnchor="middle" fontSize="14" fontWeight="bold">a</text>
                <circle cx="250" cy="40" r="25" fill="#dcfce7" stroke="#22c55e" strokeWidth="2"/>
                <circle cx="250" cy="40" r="20" fill="none" stroke="#22c55e" strokeWidth="2"/>
                <text x="250" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">q1</text>
              </svg>
              <p className="text-center text-sm text-gray-600 mt-2">NFA for single symbol</p>
            </div>

            {/* NFA for empty set */}
            <div>
              <p className="font-semibold mb-3">RE = ∅</p>
              <svg width="300" height="80" viewBox="0 0 300 80" className="mx-auto">
                <circle cx="150" cy="40" r="25" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                <text x="150" y="45" textAnchor="middle" fontSize="14" fontWeight="bold">q0</text>
                <line x="120" y1="40" x2="125" y2="40" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow4)"/>
              </svg>
              <p className="text-center text-sm text-gray-600 mt-2">NFA for ∅ (no accept)</p>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-600 mt-6">Base case NFAs for ε, a single symbol, and ∅.</p>
        </div>

        <h4 className="mt-6 font-semibold">6.2 Inductive Cases</h4>

        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">Inductive Case 1: Union (R + S)</summary>
          <div className="p-4">
            <div className="flex justify-center">
              <svg width="600" height="280" viewBox="0 0 600 280">
                <defs>
                  <marker id="arrow5" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                  </marker>
                </defs>
                
                {/* Start arrow */}
                <line x1="30" y1="140" x2="70" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow5)"/>
                
                {/* Start state */}
                <circle cx="100" cy="140" r="28" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2"/>
                <text x="100" y="146" textAnchor="middle" fontSize="16" fontWeight="bold">qA</text>
                
                {/* Upper branch to R */}
                <line x1="125" y1="125" x2="200" y2="80" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow5)"/>
                <text x="155" y="95" textAnchor="middle" fontSize="14">ε</text>
                
                {/* NFA for R */}
                <rect x="210" y="50" width="140" height="60" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="8"/>
                <text x="280" y="85" textAnchor="middle" fontSize="16" fontWeight="bold">NFA for R</text>
                
                {/* Upper branch from R to accept */}
                <line x1="350" y1="80" x2="425" y2="125" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow5)"/>
                <text x="395" y="95" textAnchor="middle" fontSize="14">ε</text>
                
                {/* Lower branch to S */}
                <line x1="125" y1="155" x2="200" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow5)"/>
                <text x="155" y="185" textAnchor="middle" fontSize="14">ε</text>
                
                {/* NFA for S */}
                <rect x="210" y="170" width="140" height="60" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="8"/>
                <text x="280" y="205" textAnchor="middle" fontSize="16" fontWeight="bold">NFA for S</text>
                
                {/* Lower branch from S to accept */}
                <line x1="350" y1="200" x2="425" y2="155" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow5)"/>
                <text x="395" y="185" textAnchor="middle" fontSize="14">ε</text>
                
                {/* Accept state */}
                <circle cx="460" cy="140" r="28" fill="#dcfce7" stroke="#22c55e" strokeWidth="3"/>
                <circle cx="460" cy="140" r="22" fill="none" stroke="#22c55e" strokeWidth="2"/>
                <text x="460" y="146" textAnchor="middle" fontSize="16" fontWeight="bold">qA</text>
              </svg>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">Thompson's Construction for Union: new start state branches to both sub-NFAs via ε; both sub-NFAs' accept states merge into a new accept state via ε.</p>
            <p className="text-center text-sm mt-2">New start/accept states connect to both sub-NFAs via ε-transitions</p>
          </div>
        </details>

        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">Inductive Case 2: Concatenation (RS)</summary>
          <div className="p-4">
            <p className="mb-4">In concatenation, the accept state of the NFA for R is merged (via ε-transition) with the start state of the NFA for S:</p>
            <div className="flex justify-center">
              <svg width="600" height="140" viewBox="0 0 600 140">
                <defs>
                  <marker id="arrow6" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                  </marker>
                </defs>
                
                {/* Start arrow */}
                <line x1="30" y1="70" x2="70" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow6)"/>
                
                {/* NFA for R */}
                <rect x="80" y="40" width="160" height="60" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="8"/>
                <text x="160" y="75" textAnchor="middle" fontSize="16" fontWeight="bold">NFA for R</text>
                
                {/* Epsilon transition */}
                <line x1="240" y1="70" x2="320" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow6)"/>
                <text x="280" y="60" textAnchor="middle" fontSize="14">ε</text>
                
                {/* NFA for S */}
                <rect x="330" y="40" width="160" height="60" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="8"/>
                <text x="410" y="75" textAnchor="middle" fontSize="16" fontWeight="bold">NFA for S</text>
                
                {/* Accept state */}
                <circle cx="540" cy="70" r="28" fill="#dcfce7" stroke="#22c55e" strokeWidth="3"/>
                <circle cx="540" cy="70" r="22" fill="none" stroke="#22c55e" strokeWidth="2"/>
                <text x="540" y="76" textAnchor="middle" fontSize="16" fontWeight="bold">qA</text>
                
                {/* Arrow to accept */}
                <line x1="490" y1="70" x2="512" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow6)"/>
              </svg>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">Thompson's Construction for Concatenation. Accept of R links to start of S via ε-transition</p>
          </div>
        </details>

        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">Inductive Case 3: Kleene Star (R*)</summary>
          <div className="p-4">
            <p className="mb-4">For Kleene star, we add a new start/accept state and a back-edge ε-transition:</p>
            <div className="flex justify-center">
              <svg width="600" height="220" viewBox="0 0 600 220">
                <defs>
                  <marker id="arrow7" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                  </marker>
                </defs>
                
                {/* Start arrow */}
                <line x1="30" y1="110" x2="70" y2="110" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow7)"/>
                
                {/* Start/Accept state (left) */}
                <circle cx="100" cy="110" r="28" fill="#dcfce7" stroke="#22c55e" strokeWidth="3"/>
                <circle cx="100" cy="110" r="22" fill="none" stroke="#22c55e" strokeWidth="2"/>
                <text x="100" y="116" textAnchor="middle" fontSize="16" fontWeight="bold">qA</text>
                
                {/* Epsilon to R */}
                <line x1="128" y1="110" x2="200" y2="110" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow7)"/>
                <text x="164" y="100" textAnchor="middle" fontSize="14">ε</text>
                
                {/* NFA for R */}
                <rect x="210" y="80" width="160" height="60" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="8"/>
                <text x="290" y="115" textAnchor="middle" fontSize="16" fontWeight="bold">NFA for R</text>
                
                {/* Epsilon from R to accept */}
                <line x1="370" y1="110" x2="442" y2="110" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow7)"/>
                <text x="406" y="100" textAnchor="middle" fontSize="14">ε</text>
                
                {/* Accept state (right) */}
                <circle cx="470" cy="110" r="28" fill="#dcfce7" stroke="#22c55e" strokeWidth="3"/>
                <circle cx="470" cy="110" r="22" fill="none" stroke="#22c55e" strokeWidth="2"/>
                <text x="470" y="116" textAnchor="middle" fontSize="16" fontWeight="bold">qA</text>
                
                {/* Back edge (loop) */}
                <path d="M 290 80 Q 290 30, 100 82" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow7)"/>
                <text x="200" y="45" textAnchor="middle" fontSize="14">ε (back edge)</text>
                
                {/* Skip edge (bottom) */}
                <path d="M 100 138 Q 100 190, 470 138" fill="none" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow7)"/>
                <text x="285" y="180" textAnchor="middle" fontSize="14">ε (skip for zero)</text>
              </svg>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">Thompson's Construction for Kleene Star: new start/accept state can skip or loop back via ε-transitions.</p>
          </div>
        </details>

        <h4 className="mt-6 font-semibold">6.3 Video: Thompson&#39;s Construction</h4>
        
        <div className="mt-4">
          <p className="font-semibold">Regular Expression → NFA (Thompson&#39;s Construction)</p>
          <p className="text-sm text-gray-600">Detailed walkthrough of building NFA from a regular expression using Thompson&#39;s algorithm with ε-transitions.</p>
          
          <div className="aspect-video mt-3">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/YGjEoND31YU?si=EJ2aPIbhNr97EPAP" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>7. NFA/DFA to Regular Expression: Arden&#39;s Lemma</h3>
        <p className="mt-4">The other direction — converting a finite automaton back into a regular expression — uses Arden&#39;s Lemma (also called the state elimination method or equation method). This converts the automaton into a system of linear equations and solves it.</p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Arden&#39;s Lemma</p>
          <p className="mt-2">If L = PL + Q, where P does not contain ε, then the unique solution is:</p>
          <p className="text-center font-mono text-lg mt-3 mb-3">L = P*Q</p>
          <p className="text-sm">This is the fundamental equation for solving regular expression systems. Think of it as the &quot;regular language&quot; analogue of the algebraic solution to X = aX + b ⇒ X = a*b.</p>
        </div>

        <h4 className="mt-6 font-semibold">7.1 State Elimination Method</h4>
        <p className="mt-4">The state elimination method converts a DFA/NFA to a regular expression by systematically eliminating internal states one by one, updating the transition labels to be regular expressions that capture the eliminated state&#39;s contribution.</p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold mb-3">Example: DFA with 2 states over {'{'}a, b{'}'}, accepts strings ending in &#39;a&#39;</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>States: q0 (start), q1 (accept). Transitions: q0 --a--&gt; q1, q0 --b--&gt; q0, q1 --a--&gt; q1, q1 --b--&gt; q0.</li>
            <li>Write equations: L(q0) = bL(q0) + aL(q1) + ε, L(q1) = aL(q1) + bL(q0).</li>
            <li>Apply Arden&#39;s Lemma to L(q1): L(q1) = a*bL(q0).</li>
            <li>Substitute into L(q0): L(q0) = bL(q0) + aa*bL(q0) + ε = (b + aa*b)L(q0) + ε.</li>
            <li>Apply Arden&#39;s: L(q0) = (b + aa*b)*.</li>
            <li><strong>Final Answer:</strong> (a + b)*a — any string over {'{'}a,b{'}'} ending with &#39;a&#39;.</li>
          </ol>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-6 mt-4">
          <p className="text-center font-semibold text-lg mb-6">State Elimination Steps</p>
          <div className="flex justify-center">
            <svg width="600" height="400" viewBox="0 0 600 400">
              <defs>
                <marker id="arrow8" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
              
              {/* Step 1 */}
              <rect x="50" y="30" width="200" height="70" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5"/>
              <text x="150" y="55" textAnchor="middle" fontSize="14" fontWeight="bold">Step 1: Write DFA Equations</text>
              <text x="150" y="75" textAnchor="middle" fontSize="12">L(q0) = bL(q0) + aL(q1) + ε</text>
              <text x="150" y="90" textAnchor="middle" fontSize="12">L(q1) = aL(q1) + bL(q0)</text>
              
              {/* Arrow down */}
              <line x1="150" y1="100" x2="150" y2="120" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow8)"/>
              
              {/* Step 2 */}
              <rect x="50" y="130" width="200" height="50" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="5"/>
              <text x="150" y="150" textAnchor="middle" fontSize="14" fontWeight="bold">Step 2: Apply Arden's to L(q1)</text>
              <text x="150" y="168" textAnchor="middle" fontSize="12">L(q1) = a*bL(q0)</text>
              
              {/* Arrow down */}
              <line x1="150" y1="180" x2="150" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow8)"/>
              
              {/* Step 3 */}
              <rect x="50" y="210" width="200" height="50" fill="#fef3c7" stroke="#eab308" strokeWidth="2" rx="5"/>
              <text x="150" y="230" textAnchor="middle" fontSize="14" fontWeight="bold">Step 3: Substitute into L(q0)</text>
              <text x="150" y="248" textAnchor="middle" fontSize="12">L(q0) = (b + aa*b)*</text>
              
              {/* Arrow down */}
              <line x1="150" y1="260" x2="150" y2="280" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow8)"/>
              
              {/* Step 4 */}
              <rect x="50" y="290" width="200" height="50" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" rx="5"/>
              <text x="150" y="310" textAnchor="middle" fontSize="14" fontWeight="bold">Step 4: Final Regex</text>
              <text x="150" y="328" textAnchor="middle" fontSize="16" fontWeight="bold">RE = (a+b)*a</text>
              
              {/* Right side - visual representation */}
              <text x="400" y="50" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#3b82f6">Equations</text>
              <rect x="320" y="70" width="160" height="40" fill="#f0f9ff" stroke="#3b82f6" strokeWidth="1" rx="3"/>
              <text x="400" y="90" textAnchor="middle" fontSize="11">L(q0) = bL(q0) + aL(q1) + ε</text>
              <text x="400" y="103" textAnchor="middle" fontSize="11">L(q1) = aL(q1) + bL(q0)</text>
              
              <text x="400" y="150" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#eab308">Apply Arden's</text>
              <rect x="320" y="165" width="160" height="25" fill="#fefce8" stroke="#eab308" strokeWidth="1" rx="3"/>
              <text x="400" y="182" textAnchor="middle" fontSize="11">L(q1) = a*bL(q0)</text>
              
              <text x="400" y="230" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#eab308">Substitute</text>
              <rect x="320" y="245" width="160" height="25" fill="#fefce8" stroke="#eab308" strokeWidth="1" rx="3"/>
              <text x="400" y="262" textAnchor="middle" fontSize="11">L(q0) = (b + aa*b)*</text>
              
              <text x="400" y="310" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#22c55e">Result</text>
              <rect x="320" y="325" width="160" height="25" fill="#f0fdf4" stroke="#22c55e" strokeWidth="1" rx="3"/>
              <text x="400" y="342" textAnchor="middle" fontSize="12" fontWeight="bold">(a+b)*a</text>
            </svg>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">Step-by-step application of Arden's Lemma to convert DFA to regular expression</p>
        </div>
      </section>

      <section className="content-section">
        <h3>8. Algebraic Laws &amp; Identities</h3>
        <p className="mt-4">Regular expressions satisfy a rich set of algebraic laws. These laws are essential for simplifying expressions and proving equivalences. Unlike ordinary algebra, however, regular expression algebra has some surprising properties — for instance, union is commutative but concatenation is not.</p>

        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Identity</th>
                <th className="border border-gray-300 px-4 py-2">Law</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">R + S = S + R</td>
                <td className="border border-gray-300 px-4 py-2">L(R) ∪ L(S) = L(S) ∪ L(R)</td>
                <td className="border border-gray-300 px-4 py-2">Commutativity of Union</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">(R+S)+T = R+(S+T)</td>
                <td className="border border-gray-300 px-4 py-2">Associative</td>
                <td className="border border-gray-300 px-4 py-2">Associativity of Union</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">(RS)T = R(ST)</td>
                <td className="border border-gray-300 px-4 py-2">Associative</td>
                <td className="border border-gray-300 px-4 py-2">Associativity of Concatenation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">R+∅ = R</td>
                <td className="border border-gray-300 px-4 py-2">∅ is identity for +</td>
                <td className="border border-gray-300 px-4 py-2">Identity of Union</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">R∅ = ∅</td>
                <td className="border border-gray-300 px-4 py-2">∅ is annihilator for ·</td>
                <td className="border border-gray-300 px-4 py-2">Annihilation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">εR = Rε = R</td>
                <td className="border border-gray-300 px-4 py-2">ε is identity for ·</td>
                <td className="border border-gray-300 px-4 py-2">Identity of Concatenation</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">R+R = R</td>
                <td className="border border-gray-300 px-4 py-2">Idempotent</td>
                <td className="border border-gray-300 px-4 py-2">Idempotency of Union</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">R(S+T) = RS + RT</td>
                <td className="border border-gray-300 px-4 py-2">Left distributive</td>
                <td className="border border-gray-300 px-4 py-2">Distributivity</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">(R+S)T = RT + ST</td>
                <td className="border border-gray-300 px-4 py-2">Right distributive</td>
                <td className="border border-gray-300 px-4 py-2">Distributivity</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">(R*)* = R*</td>
                <td className="border border-gray-300 px-4 py-2">Idempotent star</td>
                <td className="border border-gray-300 px-4 py-2">Kleene Star Idempotency</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">∅* = ε</td>
                <td className="border border-gray-300 px-4 py-2">Zero reps</td>
                <td className="border border-gray-300 px-4 py-2">Special Case</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">ε* = ε</td>
                <td className="border border-gray-300 px-4 py-2">Identity</td>
                <td className="border border-gray-300 px-4 py-2">Special Case</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">R+ = RR*</td>
                <td className="border border-gray-300 px-4 py-2">Kleene Plus</td>
                <td className="border border-gray-300 px-4 py-2">Derived Operator</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">R? = R + ε</td>
                <td className="border border-gray-300 px-4 py-2">Optional</td>
                <td className="border border-gray-300 px-4 py-2">Derived Operator</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
          <p className="font-semibold">What Doesn&#39;t Hold in Regular Algebra:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Concatenation is <strong>NOT</strong> commutative: ab ≠ ba in general</li>
            <li>There is <strong>NO</strong> subtraction or complement operation in basic regular expressions</li>
            <li>The equation R* = 1 + RR* holds, but R* = R + RR* does NOT in general</li>
          </ul>
        </div>

        <h4 className="mt-6 font-semibold">8.1 Topic Complexity Overview</h4>
        <div className="bg-white border border-gray-300 rounded-lg p-6 mt-4">
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Syntax/Definition</span>
                <span className="text-sm font-semibold">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-red-500 h-4 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Pattern Building</span>
                <span className="text-sm font-semibold">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-orange-500 h-4 rounded-full" style={{width: '80%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Algebraic Laws</span>
                <span className="text-sm font-semibold">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-yellow-500 h-4 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Thompson&#39;s NFA</span>
                <span className="text-sm font-semibold">70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Arden&#39;s Lemma</span>
                <span className="text-sm font-semibold">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>9. Real-World Applications</h3>

        <h4 className="mt-4 font-semibold">9.1 Lexical Analysis (Compilers)</h4>
        <p className="mt-4">The first phase of a compiler is lexical analysis (lexing or tokenization), which converts raw source code text into a stream of tokens. Tokens — keywords, identifiers, literals, operators — are described by regular expressions. Tools like lex and flex take a specification file full of regular expressions and automatically generate a fast lexer by converting the regex to a minimized DFA.</p>

        <h4 className="mt-6 font-semibold">9.2 Pattern Matching and Search</h4>
        <p className="mt-4">The Unix tool grep (Global Regular Expression Print) uses NFAs to search for patterns in files. Modern implementations like ripgrep use sophisticated NFA/DFA conversion algorithms for blazing-fast search over millions of lines of code. Regular expressions in grep, sed, and awk are the backbone of Unix text processing.</p>

        <h4 className="mt-6 font-semibold">9.3 Input Validation</h4>
        <p className="mt-4">Regular expressions are the standard tool for validating input formats: email addresses, phone numbers, postal codes, IP addresses, credit card numbers, URLs, and passwords. Every modern web framework — Django, Rails, Laravel, Express — has built-in regex validation support.</p>

        <h4 className="mt-6 font-semibold">9.4 Security and Intrusion Detection</h4>
        <p className="mt-4">Network security tools use regular expressions to detect attack signatures in network traffic. Snort and Suricata (Intrusion Detection Systems) use regex-like patterns called rules to identify malicious payloads. Web Application Firewalls (WAFs) use regex to detect SQL injection and XSS attempts.</p>

        <h4 className="mt-6 font-semibold">9.5 DNA Sequence Analysis</h4>
        <p className="mt-4">In bioinformatics, regular expressions describe patterns in DNA and protein sequences. The PROSITE database uses a specialized regex-like notation to describe protein sequence motifs. For example, the C2H2 zinc finger domain signature is described by a pattern like C-x(2,4)-C-x(3)-[LIVMFYWC]-x(8)-H-x(3,5)-H.</p>
      </section>

      <section className="content-section">
        <h3>10. Python Implementation</h3>
        <p className="mt-4">Python's built-in re module provides a full regular expression engine. Below is a comprehensive implementation demonstrating the theory concepts: regex matching, building an NFA simulation via Thompson's construction, and demonstrating the equivalence between regex and automata.</p>

        <h4 className="mt-6 font-semibold">10.1 Python re Module — Core Usage</h4>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
          <pre className="text-sm">{`import re

# Regular Expression Operations in Python
# Theory of Computation — Regular Languages

def demonstrate_regex_operations():
    """Demonstrates the three fundamental regex operations."""
    text = "The quick brown fox jumps over the lazy dog"

    # 1. Union (alternation): matches 'cat' OR 'dog'
    pattern_union = re.compile(r'cat|dog')
    print("Union 'cat|dog':", pattern_union.findall(text))
    # Output: ['dog']

    # 2. Concatenation: matches 'quick' followed by space and 'brown'
    pattern_concat = re.compile(r'quick brown')
    print("Concat 'quick brown':", pattern_concat.findall(text))
    # Output: ['quick brown']

    # 3. Kleene star: matches 'o' followed by zero or more 'o's
    pattern_star = re.compile(r'[a-z]+')
    words = pattern_star.findall(text)
    print("All words:", words[:5], "...")

def regex_match_examples():
    """Examples of matching common patterns."""
    examples = [
        (r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$', "test@example.com", "Email"),
        (r'^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$', "2024-03-15", "ISO Date"),
        (r'^\\+?(\\d[\\s-]?){10,14}$', "+1 800 555 0100", "Phone"),
        (r'^(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)(\\.(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)){3}$', "192.168.1.1", "IPv4"),
    ]
    for pattern, string, name in examples:
        match = re.match(pattern, string)
        print(f"{name}: '{string}' -> {'MATCH' if match else 'NO MATCH'}")

class SimpleNFA:
    """
    A simple NFA implementation via Python's re module.
    Demonstrates that Python's regex engine IS an NFA simulator.
    """
    def __init__(self, pattern):
        self.pattern = pattern
        self.regex = re.compile(pattern)

    def accepts(self, string):
        """Returns True if the regex matches the full string."""
        return bool(self.regex.fullmatch(string))

    def find_all(self, text):
        """Finds all non-overlapping matches in text."""
        return self.regex.findall(text)

    def find_positions(self, text):
        """Returns (start, end, match) tuples for all matches."""
        return [(m.start(), m.end(), m.group()) for m in self.regex.finditer(text)]`}</pre>
        </div>

        <h4 className="mt-6 font-semibold">10.2 Thompson's Construction Implementation</h4>
        <p className="mt-4">This implementation builds NFA states and transitions from a regular expression using Thompson's algorithm:</p>
        
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
          <pre className="text-sm">{`class RegexToNFA:
    """
    Implements Thompson's Construction algorithm.
    Builds NFA states and transitions from a regular expression.
    (Simplified version for educational purposes.)
    """
    def __init__(self):
        self.state_count = 0
        self.transitions = {}
        self.epsilon = 'ε'

    def new_state(self):
        """Create a new unique state."""
        s = f'q{self.state_count}'
        self.state_count += 1
        return s

    def add_transition(self, from_state, symbol, to_state):
        if (from_state, symbol) not in self.transitions:
            self.transitions[(from_state, symbol)] = []
        self.transitions[(from_state, symbol)].append(to_state)

    def build_symbol(self, symbol):
        """Base case: NFA for a single symbol."""
        start = self.new_state()
        accept = self.new_state()
        self.add_transition(start, symbol, accept)
        return start, accept

    def build_epsilon(self):
        """Base case: NFA for epsilon."""
        start = self.new_state()
        accept = self.new_state()
        self.add_transition(start, self.epsilon, accept)
        return start, accept

    def build_union(self, nfa_r, nfa_s):
        """Inductive case: NFA for R + S."""
        r_start, r_accept = nfa_r
        s_start, s_accept = nfa_s
        new_start = self.new_state()
        new_accept = self.new_state()
        self.add_transition(new_start, self.epsilon, r_start)
        self.add_transition(new_start, self.epsilon, s_start)
        self.add_transition(r_accept, self.epsilon, new_accept)
        self.add_transition(s_accept, self.epsilon, new_accept)
        return new_start, new_accept

    def build_concat(self, nfa_r, nfa_s):
        """Inductive case: NFA for RS."""
        r_start, r_accept = nfa_r
        s_start, s_accept = nfa_s
        self.add_transition(r_accept, self.epsilon, s_start)
        return r_start, s_accept

    def build_star(self, nfa_r):
        """Inductive case: NFA for R*."""
        r_start, r_accept = nfa_r
        new_start = self.new_state()
        new_accept = self.new_state()
        self.add_transition(new_start, self.epsilon, r_start)
        self.add_transition(new_start, self.epsilon, new_accept)
        self.add_transition(r_accept, self.epsilon, new_accept)
        self.add_transition(r_accept, self.epsilon, r_start)
        return new_start, new_accept

# Demo: Build NFA for regex (a+b)*abb using Thompson's
def build_nfa_for_a_plus_b_star_abb():
    builder = RegexToNFA()

    # Build NFA for 'a'
    nfa_a = builder.build_symbol('a')
    # Build NFA for 'b'
    nfa_b = builder.build_symbol('b')
    # Union: a + b
    nfa_aOrB = builder.build_union(nfa_a, nfa_b)
    # Kleene star: (a+b)*
    nfa_star = builder.build_star(nfa_aOrB)
    # Build 'a', 'b', 'b' for the suffix 'abb'
    nfa_a2 = builder.build_symbol('a')
    nfa_b2 = builder.build_symbol('b')
    nfa_b3 = builder.build_symbol('b')
    # Concatenate: (a+b)* . a . b . b
    nfa_final = builder.build_concat(
        builder.build_concat(
            builder.build_concat(nfa_star, nfa_a2), nfa_b2
        ), nfa_b3
    )
    start, accept = nfa_final
    print(f"NFA for (a+b)*abb:")
    print(f"  Start state: {start}")
    print(f"  Accept state: {accept}")
    print(f"  Total states: {builder.state_count}")
    print(f"  Transitions: {len(builder.transitions)}")

if __name__ == '__main__':
    demonstrate_regex_operations()
    regex_match_examples()
    build_nfa_for_a_plus_b_star_abb()`}</pre>
        </div>

        <h4 className="mt-6 font-semibold">10.3 Advanced Pattern Techniques</h4>
        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-4 overflow-x-auto">
          <pre className="text-sm">{`import re

# Advanced Regex Techniques

# Non-capturing groups: (?:...)
pattern_nc = re.compile(r'(?:ab)+')
print(pattern_nc.findall("ababab"))  # ['ababab']

# Named groups: (?P<name>...)
date_re = re.compile(r'(?P<year>\\d{4})-(?P<month>\\d{2})-(?P<day>\\d{2})')
m = date_re.search("Date: 2024-03-15")
if m:
    print(m.group('year'), m.group('month'), m.group('day'))

# Lookahead assertion: (?=...)
pattern_la = re.compile(r'foo(?=bar)')
print(pattern_la.findall("foobar foobaz"))  # ['foo']

# Lookbehind assertion: (?<=...)
pattern_lb = re.compile(r'(?<=foo)bar')
print(pattern_lb.findall("foobar bazbar"))  # ['bar']

# Substitution with backreferences
text = "2024-03-15"
reformatted = re.sub(r'(\\d{4})-(\\d{2})-(\\d{2})', r'\\3/\\2/\\1', text)
print(reformatted)  # 15/03/2024

# Greedy vs. Non-Greedy
html = "<b>bold</b> and <i>italic</i>"
greedy = re.findall(r'<.*>', html)     # Greedy: matches whole string
non_greedy = re.findall(r'<.*?>', html)  # Non-greedy: matches each tag
print("Greedy:", greedy)
print("Non-greedy:", non_greedy)`}</pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Key Takeaways from Implementation</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Thompson's Construction builds NFAs compositionally using ε-transitions</li>
            <li>Each regex operation (union, concat, star) has a corresponding NFA construction pattern</li>
            <li>Python's re module implements an optimized NFA/DFA hybrid engine</li>
            <li>Advanced features like lookahead/lookbehind extend beyond pure regular languages</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>11. Interactive Regular Expression Tester</h3>
        <p className="mt-4">Use this interactive tool to test regular expressions against text. Type a pattern and test text to see matches highlighted in real time.</p>

        <RegexTester />
      </section>

      <section className="content-section">
        <h3>13. Exam-Oriented Questions</h3>
        
        <h4 className="mt-6 font-semibold">Section A: Short Answer</h4>
        
        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">[2 marks] Q1. Write a regular expression for the set of all binary strings that start with &#39;1&#39; and end with &#39;0&#39;.</summary>
          <div className="p-4 bg-white">
            <p className="font-semibold text-green-700">Answer: 1(0+1)*0</p>
            <p className="mt-3"><strong>Explanation:</strong> The string must begin with &#39;1&#39; (mandatory first character), followed by zero or more characters from {'{'}0,1{'}'} (any binary content in the middle), and must end with &#39;0&#39; (mandatory last character). Note: this does match &quot;10&quot; (1, then empty middle, then 0). The minimum-length match is &quot;10&quot;. For strings of length 1 (just &quot;1&quot; or &quot;0&quot;), neither matches since both start and end constraints cannot be satisfied simultaneously by a single character.</p>
          </div>
        </details>

        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">[3 marks] Q2. Give a regular expression for the language of all strings over {'{'}a, b{'}'} that do NOT contain the substring &quot;aa&quot;.</summary>
          <div className="p-4 bg-white">
            <p className="font-semibold text-green-700">Answer: b*(ab+)*a? or equivalently (b + ab)*a?</p>
            <p className="mt-3"><strong>Explanation:</strong> To avoid &quot;aa&quot;, any occurrence of &#39;a&#39; must be immediately followed by &#39;b&#39; or be the last character. We can have any number of b&#39;s at the start (b*), then any number of &quot;ab&quot; groups ((ab)*), then optionally a final &#39;a&#39; (a?). This generates all strings without consecutive a&#39;s. The rewriting as (b + ab)*a? is cleaner: at each step we can add any number of b&#39;s or an a followed immediately by b, then optionally end with a single a.</p>
          </div>
        </details>

        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">[4 marks] Q3. Convert the NFA with states {'{'}q0, q1, q2{'}'}, start state q0, accept state q2, and transitions: q0 --a--&gt; q1, q1 --b--&gt; q2, q1 --a--&gt; q1, to a regular expression using state elimination.</summary>
          <div className="p-4 bg-white">
            <p className="font-semibold mb-3">Step-by-step answer:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li>
                <strong>Write language equations:</strong>
                <div className="bg-gray-50 p-2 rounded mt-1 font-mono text-sm">
                  L(q0) = aL(q1)<br/>
                  L(q1) = aL(q1) + bL(q2)<br/>
                  L(q2) = ε (accept state)
                </div>
              </li>
              <li>
                <strong>Substitute L(q2) = ε into L(q1):</strong>
                <div className="bg-gray-50 p-2 rounded mt-1 font-mono text-sm">
                  L(q1) = aL(q1) + b
                </div>
              </li>
              <li>
                <strong>Apply Arden&#39;s Lemma to L(q1):</strong> L = PL + Q where P = a, Q = b:
                <div className="bg-gray-50 p-2 rounded mt-1 font-mono text-sm">
                  L(q1) = a*b
                </div>
              </li>
              <li>
                <strong>Substitute back into L(q0):</strong>
                <div className="bg-gray-50 p-2 rounded mt-1 font-mono text-sm">
                  L(q0) = a · a*b = aa*b = a+b
                </div>
              </li>
            </ol>
            <p className="mt-4 font-semibold text-green-700">Final Answer: a+b (one or more a&#39;s followed by exactly one b)</p>
            <p className="mt-2"><strong>Example matches:</strong> &quot;ab&quot;, &quot;aab&quot;, &quot;aaab&quot;, ...</p>
          </div>
        </details>

        <h4 className="mt-8 font-semibold">Section B: Long Answer</h4>

        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">[8 marks] Q4. (a) State Kleene&#39;s theorem. (b) Using Thompson&#39;s construction, build an NFA for the regular expression ab* + b. (c) What language does this NFA accept?</summary>
          <div className="p-4 bg-white">
            <div className="mb-6">
              <p className="font-semibold text-blue-700">(a) Kleene&#39;s Theorem [2 marks]:</p>
              <p className="mt-2">A language L is a regular language if and only if there exists a regular expression R such that L = L(R). Equivalently, the class of regular languages is exactly the class of languages accepted by finite automata (DFA/NFA). This establishes the equivalence between three models: regular expressions, NFAs, and DFAs.</p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-blue-700">(b) Thompson&#39;s Construction for ab* + b [4 marks]:</p>
              <ol className="list-decimal ml-6 mt-2 space-y-2">
                <li><strong>Step 1:</strong> NFA for &#39;a&#39;: q0 --a--&gt; q1</li>
                <li><strong>Step 2:</strong> NFA for &#39;b&#39;: q2 --b--&gt; q3</li>
                <li><strong>Step 3:</strong> NFA for b*: new start qS&#39; --ε--&gt; q2, q3 --ε--&gt; new accept qA&#39;, qS&#39; --ε--&gt; qA&#39;, q3 --ε--&gt; q2 (loop)</li>
                <li><strong>Step 4:</strong> Concatenate &#39;a&#39; and b*: q1 --ε--&gt; qS&#39;</li>
                <li><strong>Step 5:</strong> NFA for &#39;b&#39; (second): q4 --b--&gt; q5</li>
                <li><strong>Step 6:</strong> Union: new start qS --ε--&gt; q0, qS --ε--&gt; q4; new accept qA; qA&#39; --ε--&gt; qA, q5 --ε--&gt; qA</li>
              </ol>
              <p className="mt-3"><strong>Total states:</strong> 10 (ε-NFA from Thompson&#39;s)</p>
            </div>

            <div>
              <p className="font-semibold text-blue-700">(c) Language [2 marks]:</p>
              <div className="bg-gray-50 p-3 rounded mt-2">
                <p className="font-mono">L(ab* + b) = L(ab*) ∪ L(b)</p>
                <p className="font-mono mt-1">= {'{'}ab<sup>n</sup> : n ≥ 0{'}'} ∪ {'{"b"}'}</p>
                <p className="font-mono mt-1">= {'{"a", "ab", "abb", "abbb", ..., "b"}'}</p>
              </div>
              <p className="mt-3"><strong>In words:</strong> all strings of the form &quot;a&quot; followed by zero or more &quot;b&quot;s, plus the single string &quot;b&quot;.</p>
            </div>
          </div>
        </details>

        <details className="mt-4 border border-gray-300 rounded-lg">
          <summary className="cursor-pointer p-4 font-semibold bg-gray-50 hover:bg-gray-100">[6 marks] Q5. Prove or disprove: The language L = {'{'}a<sup>n</sup>b<sup>n</sup> : n ≥ 0{'}'} is regular by attempting to construct a regular expression for it.</summary>
          <div className="p-4 bg-white">
            <p className="font-semibold text-red-700 mb-3">Answer: L is NOT regular [6 marks].</p>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
              <p className="font-semibold">Proof using Pumping Lemma:</p>
              <ol className="list-decimal ml-6 mt-3 space-y-3">
                <li>
                  <strong>Assume for contradiction</strong> that L = {'{'}a<sup>n</sup>b<sup>n</sup>{'}'} is regular. Then there exists a pumping length p ≥ 1.
                </li>
                <li>
                  <strong>Choose the string</strong> s = a<sup>p</sup>b<sup>p</sup> ∈ L, with |s| = 2p ≥ p.
                </li>
                <li>
                  <strong>By the Pumping Lemma,</strong> we can write s = xyz where:
                  <ul className="list-disc ml-6 mt-2">
                    <li>|xy| ≤ p (so x and y are entirely within the a-prefix)</li>
                    <li>|y| ≥ 1 (y is non-empty)</li>
                    <li>xy<sup>i</sup>z ∈ L for all i ≥ 0</li>
                  </ul>
                </li>
                <li>
                  <strong>Since |xy| ≤ p</strong> and the first p characters of s are all a&#39;s, y must consist entirely of a&#39;s. Let y = a<sup>k</sup> for some k ≥ 1.
                </li>
                <li>
                  <strong>Now pump up:</strong> xy<sup>2</sup>z = a<sup>p+k</sup>b<sup>p</sup>. This has more a&#39;s than b&#39;s, so it is NOT in L.
                </li>
                <li>
                  <strong>This contradicts</strong> the Pumping Lemma, so our assumption was wrong.
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
              <p className="font-semibold">Conclusion:</p>
              <p className="mt-2">L = {'{'}a<sup>n</sup>b<sup>n</sup>{'}'} is NOT a regular language, and therefore NO regular expression can describe it. It requires a pushdown automaton (context-free grammar).</p>
            </div>
          </div>
        </details>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
          <p className="font-semibold">💡 Exam Tips</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Always show your work step-by-step for Thompson&#39;s Construction and Arden&#39;s Lemma</li>
            <li>When proving non-regularity, clearly state the pumping length and choice of string</li>
            <li>Practice converting between NFAs, DFAs, and regular expressions</li>
            <li>Remember: Kleene star always includes ε (empty string)</li>
            <li>For pattern construction, break down the problem into smaller parts</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Module1_7;
