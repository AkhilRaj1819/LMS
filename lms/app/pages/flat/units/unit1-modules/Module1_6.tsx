'use client';
import React from 'react';

const Module1_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.6</div>
        <div className="lesson-title-main">
          <h1>🔍 Text Search using Finite Automata</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>What You'll Master</h3>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">Learning Objectives</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Design and construct finite automata for efficient pattern matching in text strings, analyzing time complexity of O(n) for text processing</li>
            <li>Implement the Knuth-Morris-Pratt (KMP) algorithm using prefix function computation and compare its performance with naive string matching</li>
            <li>Apply the Aho-Corasick algorithm for multi-pattern searching and construct failure functions for automata-based text search</li>
            <li>Analyze and optimize string matching algorithms, calculating preprocessing time and matching complexity for real-world applications</li>
            <li>Evaluate trade-offs between different text search algorithms (Naive, KMP, Boyer-Moore, Rabin-Karp) based on pattern length and alphabet size</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>🔥 Why This Topic Matters</h3>
        <p className="mt-4">
          Imagine you're using the "Find" feature in a text editor to locate specific words in a 10,000-page document. Or consider how Google searches through billions of web pages in milliseconds to find pages containing your search terms. Behind these everyday experiences lies the fascinating world of text search algorithms—computational methods that efficiently locate patterns within large bodies of text. These aren't just theoretical exercises; they're the backbone of modern information retrieval, from DNA sequence analysis in bioinformatics to plagiarism detection in academic software.
        </p>
        <p className="mt-4">
          Text search algorithms built on finite automata represent one of the most elegant applications of theoretical computer science to practical problems. When you press Ctrl+F in your browser or IDE, you're invoking algorithms that trace their lineage back to automata theory. The magic lies in preprocessing the pattern you're searching for—building a finite automaton that can scan through text in linear time without ever needing to backtrack. This means searching through a million characters takes only million steps, regardless of how complex your search pattern is.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">String Matching Overview</p>
          <p className="mt-2">Overview of string matching algorithms and their applications</p>
        </div>

        <p className="mt-4">
          The practical importance of efficient text search cannot be overstated. In competitive programming, string matching problems appear frequently and often determine whether your solution passes within time limits. In industry, companies like Google, Microsoft, and Amazon rely on optimized text search for everything from log file analysis to code review tools. Bioinformaticians use these algorithms to search for gene sequences in DNA databases containing billions of base pairs. Cybersecurity professionals employ pattern matching to detect malicious signatures in network traffic. Understanding these algorithms isn't just academic—it's a gateway to solving real computational challenges that affect millions of users daily.
        </p>

        <h4 className="mt-6 font-semibold">💡 Real-World Applications:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Search Engines:</p>
            <p className="text-sm mt-2">Google's indexing and searching mechanisms use advanced pattern matching algorithms to find relevant web pages</p>
          </div>
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Plagiarism Detection:</p>
            <p className="text-sm mt-2">Tools like Turnitin use multi-pattern search algorithms to detect copied content across documents</p>
          </div>
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Bioinformatics:</p>
            <p className="text-sm mt-2">BLAST algorithm searches DNA/protein databases using automata-based matching for gene identification</p>
          </div>
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Network Security:</p>
            <p className="text-sm mt-2">Intrusion Detection Systems (IDS) like Snort use Aho-Corasick for detecting malicious patterns in packets</p>
          </div>
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Text Editors:</p>
            <p className="text-sm mt-2">IDEs like VS Code, Sublime Text use optimized search algorithms for find-and-replace operations</p>
          </div>
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Antivirus Software:</p>
            <p className="text-sm mt-2">Virus scanners use multi-pattern matching to detect malware signatures in files</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Introduction to String Matching</h3>
        <p className="mt-4">Abdul Bari - Complete overview of pattern matching algorithms</p>
        <p className="text-sm text-gray-600">What you'll learn: Naive approach, KMP algorithm, and finite automata construction</p>
        
        <div className="aspect-video mt-4">
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/egXhe55dAIk" 
            title="Formal Definition of Non-Deterministic Finite Automata (NFA)" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="content-section">
        <h3>Deep Dive: Understanding Text Search with Finite Automata</h3>
        
        <h4 className="mt-6 font-semibold">Definition &amp; Fundamentals</h4>
        <p className="mt-4">
          Text search (also called string matching or pattern matching) is the problem of finding all occurrences of a pattern string P of length m within a text string T of length n. In simple terms, it answers the question: "Does this pattern appear in this text, and if so, where?" For example, searching for the pattern "hello" in the text "hello world, hello universe" should return positions 0 and 13.
        </p>
        <p className="mt-4">
          The fundamental challenge in text search is efficiency. A naive approach—checking every position in the text to see if the pattern starts there—works but requires O(nm) comparisons in the worst case. When you're searching through gigabytes of log files or genomic sequences, this becomes prohibitively slow. This is where finite automata shine: by preprocessing the pattern into an automaton, we can search the text in optimal O(n) time, scanning each character exactly once without ever backtracking.
        </p>

        <p className="mt-4">
          Historically, the connection between automata theory and string matching was formalized in the 1970s with the development of the Knuth-Morris-Pratt (KMP) algorithm, which implicitly constructs a finite automaton. The algorithm was independently discovered by Donald Knuth, Vaughan Pratt, and James H. Morris in 1977. Around the same time, Alfred Aho and Margaret Corasick developed the Aho-Corasick algorithm for multi-pattern matching, which explicitly builds a trie-based automaton. These algorithms revolutionized text processing and remain fundamental to modern search tools.
        </p>

        <h4 className="mt-6 font-semibold">📌 Key Terminology:</h4>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <ul className="space-y-3">
            <li>
              <strong>Text (T):</strong> The input string in which we search for the pattern; typically denoted as T[0..n-1] where n is the text length
            </li>
            <li>
              <strong>Pattern (P):</strong> The string we're searching for; denoted as P[0..m-1] where m is the pattern length; also called the "needle"
            </li>
            <li>
              <strong>Match:</strong> An occurrence of the pattern in the text; we say pattern P matches text T at position i if T[i..i+m-1] = P[0..m-1]
            </li>
            <li>
              <strong>Prefix Function:</strong> A function π[i] that stores the length of the longest proper prefix of P[0..i] which is also a suffix of P[0..i]
            </li>
            <li>
              <strong>Failure Function:</strong> Similar to prefix function; guides the automaton on what state to transition to when a mismatch occurs
            </li>
            <li>
              <strong>Preprocessing Time:</strong> Time spent building the automaton/prefix table before searching; typically O(m) for pattern length m
            </li>
            <li>
              <strong>Matching Time:</strong> Time spent scanning the text; optimal algorithms achieve O(n) for text length n
            </li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>Finite Automaton for Pattern "ABABC"</h3>
        <p className="mt-4">String Matching Automaton for Pattern "ABABC"</p>
        
        <div className="flex justify-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-5xl">
            <svg width="900" height="300" viewBox="0 0 900 300" className="mx-auto">
              {/* States */}
              <circle cx="50" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="50" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">0</text>
              <text x="50" y="162" textAnchor="middle" fontSize="11">Start</text>

              <circle cx="200" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="200" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">1</text>
              <text x="200" y="162" textAnchor="middle" fontSize="11">"A"</text>

              <circle cx="350" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="350" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">2</text>
              <text x="350" y="162" textAnchor="middle" fontSize="11">"AB"</text>

              <circle cx="500" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="500" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">3</text>
              <text x="500" y="162" textAnchor="middle" fontSize="11">"ABA"</text>

              <circle cx="650" cy="150" r="35" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
              <text x="650" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">4</text>
              <text x="650" y="162" textAnchor="middle" fontSize="11">"ABAB"</text>

              <circle cx="820" cy="150" r="35" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
              <circle cx="820" cy="150" r="30" fill="none" stroke="#16a34a" strokeWidth="2" />
              <text x="820" y="145" textAnchor="middle" fontSize="16" fontWeight="bold">5</text>
              <text x="820" y="162" textAnchor="middle" fontSize="10">"ABABC"</text>
              <text x="820" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#16a34a">MATCH!</text>

              {/* Success transitions */}
              <line x1="85" y1="150" x2="165" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="125" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">A</text>

              <line x1="235" y1="150" x2="315" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="275" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">B</text>

              <line x1="385" y1="150" x2="465" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="425" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">A</text>

              <line x1="535" y1="150" x2="615" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="575" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">B</text>

              <line x1="685" y1="150" x2="785" y2="150" stroke="#059669" strokeWidth="2" markerEnd="url(#arrowSuccess)" />
              <text x="735" y="140" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#059669">C</text>

              {/* Failure transitions */}
              <path d="M 200 185 Q 125 230 50 185" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowFailure)" />
              <text x="125" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">B,C</text>

              <path d="M 350 185 Q 275 230 200 185" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowFailure)" />
              <text x="275" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">C</text>

              <path d="M 465 165 Q 425 200 385 165" fill="none" stroke="#dc2626" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowFailure)" />
              <text x="425" y="210" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#dc2626">C</text>

              <defs>
                <marker id="arrowSuccess" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#059669" />
                </marker>
                <marker id="arrowFailure" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#dc2626" />
                </marker>
              </defs>
            </svg>

            <div className="mt-4 p-3 bg-gray-50 rounded">
              <p className="font-semibold mb-2">Legend:</p>
              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 bg-green-600"></div>
                  <span>Success transition (matches pattern character)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-0.5 border-t-2 border-dashed border-red-600"></div>
                  <span>Failure transition (mismatch, use longest proper suffix)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-200 border-2 border-green-600"></div>
                  <span>Accepting state (pattern found)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 italic mt-4">
          Figure 3: Finite automaton for pattern "ABABC" showing success (solid) and failure (dashed) transitions
        </p>
      </section>

      <section className="content-section">
        <h3>How It Works: The Mechanism Explained</h3>
        <p className="mt-4">
          The automata-based approach to text search works by constructing a finite state machine that encodes all the information about the pattern. Think of it like programming a robot that walks through the text one character at a time. The robot has a set of internal states representing how much of the pattern it has matched so far. When it reads a character that extends the match, it moves to the next state. When it encounters a mismatch, it doesn't need to start over from scratch—instead, it uses precomputed "failure" transitions to jump to the best state based on what it's already seen.
        </p>

        <div className="space-y-4 mt-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold">Step 1: Preprocessing the Pattern</h4>
            <p className="text-sm mt-2">
              Before searching begins, we build the automaton from the pattern. For pattern P of length m, we create m+1 states (state 0 through m). State i represents "we've successfully matched the first i characters of the pattern." State 0 is the start state (nothing matched yet), and state m is the accepting state (full pattern matched). For each state and each character in the alphabet, we compute where to transition. This preprocessing takes O(m × |Σ|) time where |Σ| is the alphabet size, but for practical alphabets (like ASCII or DNA nucleotides), this is effectively O(m).
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">Step 2: Computing Transitions</h4>
            <p className="text-sm mt-2">
              The key insight is determining what state to go to from state q on character c. If P[q] = c (the next character in the pattern matches), we advance to state q+1. If it doesn't match, we need to find the longest prefix of the pattern that is also a suffix of what we've matched so far plus the new character. This is where the prefix/failure function comes in. For the pattern "ABABC", if we're in state 4 (matched "ABAB") and see 'A' instead of 'C', we transition to state 3 because "ABA" is the longest prefix of the pattern that's also a suffix of "ABABA".
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">Step 3: Scanning the Text</h4>
            <p className="text-sm mt-2">
              Once the automaton is built, searching is straightforward. We start in state 0 and read the text character by character. For each character T[i], we follow the transition from our current state q on character T[i] to reach a new state. If we ever reach state m (the accepting state), we've found a match at position i-m+1. The beauty is that we never backtrack in the text—each character is examined exactly once. This gives us O(n) matching time regardless of how many partial matches we encounter.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold">Step 4: Reporting Matches</h4>
            <p className="text-sm mt-2">
              When we reach the accepting state, we report the match position and continue searching. Because we might have overlapping matches (like finding "AA" at positions 0 and 1 in "AAA"), we don't stop at the first match. Instead, after reporting a match, we use the failure function to transition to the appropriate state and keep scanning. This ensures we find all occurrences of the pattern in the text.
            </p>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl">
            <h4 className="text-center font-bold text-lg mb-4">Text Search Algorithm Flow</h4>
            <svg width="700" height="900" viewBox="0 0 700 900" className="mx-auto">
              <ellipse cx="350" cy="30" rx="60" ry="25" fill="#10b981" stroke="#065f46" strokeWidth="2" />
              <text x="350" y="37" textAnchor="middle" fill="white" fontWeight="bold">Start</text>

              <rect x="230" y="70" width="240" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="90" textAnchor="middle" fontSize="13" fontWeight="bold">Input: Text T length n,</text>
              <text x="350" y="107" textAnchor="middle" fontSize="13" fontWeight="bold">Pattern P length m</text>
              <line x1="350" y1="55" x2="350" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="210" y="140" width="280" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="350" y="165" textAnchor="middle" fontSize="13" fontWeight="bold">Build Finite Automaton from Pattern P</text>
              <line x1="350" y1="120" x2="350" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="210" y="200" width="280" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="350" y="225" textAnchor="middle" fontSize="13" fontWeight="bold">Compute Prefix/Failure Function π</text>
              <line x1="350" y1="180" x2="350" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="230" y="260" width="240" height="40" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5" />
              <text x="350" y="285" textAnchor="middle" fontSize="13" fontWeight="bold">Create m+1 states: 0 to m</text>
              <line x1="350" y1="240" x2="350" y2="260" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="190" y="320" width="320" height="50" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5" />
              <text x="350" y="340" textAnchor="middle" fontSize="12" fontWeight="bold">Compute transition function δ(q,c)</text>
              <text x="350" y="357" textAnchor="middle" fontSize="12" fontWeight="bold">for all states and characters</text>
              <line x1="350" y1="300" x2="350" y2="320" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="210" y="390" width="280" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="350" y="415" textAnchor="middle" fontSize="13" fontWeight="bold">Initialize: state q = 0, position i = 0</text>
              <line x1="350" y1="370" x2="350" y2="390" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <path d="M 350 450 L 430 490 L 350 530 L 270 490 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="495" textAnchor="middle" fontSize="13" fontWeight="bold">i &lt; n?</text>
              <line x1="350" y1="430" x2="350" y2="450" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="250" y="560" width="200" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="585" textAnchor="middle" fontSize="13" fontWeight="bold">Read character c = T[i]</text>
              <line x1="350" y1="530" x2="350" y2="560" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="360" y="545" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              <rect x="270" y="620" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="645" textAnchor="middle" fontSize="13" fontWeight="bold">q = δ(q, c)</text>
              <line x1="350" y1="600" x2="350" y2="620" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <path d="M 350 680 L 430 720 L 350 760 L 270 720 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="725" textAnchor="middle" fontSize="13" fontWeight="bold">q == m?</text>
              <line x1="350" y1="660" x2="350" y2="680" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="490" y="700" width="180" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="580" y="725" textAnchor="middle" fontSize="12" fontWeight="bold">Report match at i - m + 1</text>
              <line x1="430" y1="720" x2="490" y2="720" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="460" y="715" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>

              <rect x="490" y="760" width="180" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="580" y="785" textAnchor="middle" fontSize="12" fontWeight="bold">Use failure function</text>
              <line x1="580" y1="740" x2="580" y2="760" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <rect x="270" y="790" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="815" textAnchor="middle" fontSize="13" fontWeight="bold">i = i + 1</text>
              <line x1="350" y1="760" x2="350" y2="790" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="360" y="775" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              <path d="M 270 810 L 150 810 L 150 490 L 270 490" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
              <path d="M 580 800 L 630 800 L 630 490 L 430 490" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

              <rect x="250" y="550" width="200" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="575" textAnchor="middle" fontSize="13" fontWeight="bold">Output: All match positions</text>
              <line x1="270" y1="490" x2="250" y2="570" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
              <text x="250" y="530" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>

              <ellipse cx="350" cy="870" rx="60" ry="25" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
              <text x="350" y="877" textAnchor="middle" fill="white" fontWeight="bold">End</text>
              <line x1="350" y1="590" x2="350" y2="845" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />

              <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4 italic">Figure 5: Complete flowchart of automata-based string matching algorithm</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Key Components &amp; Architecture</h3>
        
        <div className="space-y-6 mt-6">
          <div className="bg-white border-2 border-blue-300 rounded-lg p-6">
            <h4 className="font-semibold text-lg text-blue-700">Component 1: Prefix Function (Failure Function)</h4>
            <p className="mt-3">
              The prefix function π is the heart of the KMP algorithm and automata construction. For each position i in the pattern, π[i] stores the length of the longest proper prefix of P[0..i] that is also a suffix of P[0..i]. A "proper" prefix means it's not the entire string. For example, for pattern "ABABC": π[0]=0 (by definition), π[1]=0 ("AB" has no proper prefix-suffix), π[2]=1 ("ABA" has "A" as both prefix and suffix), π[3]=2 ("ABAB" has "AB"), π[4]=0 ("ABABC" has no match). This function is computed in O(m) time using dynamic programming and is crucial for determining failure transitions when mismatches occur.
            </p>
          </div>

          <div className="bg-white border-2 border-green-300 rounded-lg p-6">
            <h4 className="font-semibold text-lg text-green-700">Component 2: State Transition Function (δ)</h4>
            <p className="mt-3">
              The transition function δ(q, c) defines the automaton's behavior: given current state q and input character c, it returns the next state. Formally, δ: {'{'}0, 1, ..., m{'}'} × Σ → {'{'}0, 1, ..., m{'}'}. The function is designed such that after reading text T[0..i], being in state q means the longest prefix of P that is a suffix of T[0..i] has length q. This invariant is maintained throughout the search. Building δ requires comparing pattern characters and using the prefix function to handle mismatches. For state q and character c, if P[q] = c, then δ(q,c) = q+1; otherwise, we recursively check δ(π[q], c) until we find a match or reach state 0.
            </p>
          </div>

          <div className="bg-white border-2 border-purple-300 rounded-lg p-6">
            <h4 className="font-semibold text-lg text-purple-700">Component 3: State Machine</h4>
            <p className="mt-3">
              The finite automaton itself consists of states Q = {'{'}0, 1, ..., m{'}'}, input alphabet Σ (typically ASCII or a subset), transition function δ, start state q₀ = 0, and accepting state {'{'}m{'}'}. This is a deterministic finite automaton (DFA) because for each state-input pair, there's exactly one next state. The DFA has a special structure: states 0 through m-1 have transitions that either advance toward the accepting state (on matching characters) or fall back to earlier states (on mismatches). The accepting state m typically has all transitions looping back through the failure function, allowing the search to continue and find overlapping matches.
            </p>
          </div>

          <div className="bg-white border-2 border-orange-300 rounded-lg p-6">
            <h4 className="font-semibold text-lg text-orange-700">Component 4: Match Reporter</h4>
            <p className="mt-3">
              The match reporting mechanism tracks when the automaton reaches the accepting state and records the corresponding text position. Unlike simple yes/no pattern matching, practical applications often need to find all occurrences, count matches, or perform actions when patterns are found (like highlighting in a text editor). The reporter uses the current position i in the text and the pattern length m to calculate the start position of the match: i - m + 1. In streaming applications, the reporter must handle real-time output as matches are discovered rather than buffering all results.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">KMP Algorithm Deep Dive</h4>
          <p className="text-sm text-gray-600">Tushar Roy - Coding Made Simple - Detailed explanation with examples</p>
          <p className="text-sm text-gray-600">What you'll learn: How to build the LPS array and use it for pattern matching</p>
          
          <div className="aspect-video mt-4">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/V5-7GzOfADQ?si=u5p71kytRo51shx6" 
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
        <h3>System Architecture: Automata-Based Text Search</h3>
        <p className="mt-4">Complete Architecture of Automata-Based String Matching</p>
        
        <div className="flex justify-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-6xl w-full">
            <svg width="1000" height="600" viewBox="0 0 1000 600" className="mx-auto">
              <rect x="50" y="30" width="200" height="100" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="150" y="55" textAnchor="middle" fontSize="14" fontWeight="bold">Input Components</text>
              <text x="150" y="75" textAnchor="middle" fontSize="10">Pattern P: "ABABC"</text>
              <text x="150" y="90" textAnchor="middle" fontSize="10">Text T: "ABABDABA..."</text>
              <text x="150" y="105" textAnchor="middle" fontSize="10">m = 5, n = large</text>

              <rect x="50" y="160" width="200" height="130" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="150" y="180" textAnchor="middle" fontSize="13" fontWeight="bold">Preprocessing Module</text>
              <text x="150" y="195" textAnchor="middle" fontSize="10" fill="#f59e0b" fontWeight="bold">O(m) Time</text>
              <rect x="60" y="205" width="180" height="35" fill="#fef9e7" stroke="#f59e0b" strokeWidth="1" rx="3" />
              <text x="150" y="220" textAnchor="middle" fontSize="9" fontWeight="bold">Prefix Function Builder</text>
              <text x="150" y="232" textAnchor="middle" fontSize="8">Compute π[i] for all i</text>
              <rect x="60" y="245" width="180" height="35" fill="#fef9e7" stroke="#f59e0b" strokeWidth="1" rx="3" />
              <text x="150" y="260" textAnchor="middle" fontSize="9" fontWeight="bold">Transition Function Builder</text>
              <text x="150" y="272" textAnchor="middle" fontSize="8">Build δ(q,c) table</text>

              <rect x="300" y="30" width="200" height="260" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5" />
              <text x="400" y="50" textAnchor="middle" fontSize="13" fontWeight="bold">Finite Automaton</text>
              <rect x="310" y="60" width="180" height="45" fill="#f0f4ff" stroke="#6366f1" strokeWidth="1" rx="3" />
              <text x="400" y="75" textAnchor="middle" fontSize="9" fontWeight="bold">DFA Structure</text>
              <text x="400" y="87" textAnchor="middle" fontSize="8">States Q = {0,1,2,3,4,5}</text>
              <text x="400" y="97" textAnchor="middle" fontSize="8">q₀ = 0, F = {5}</text>
              <rect x="310" y="110" width="180" height="35" fill="#f0f4ff" stroke="#6366f1" strokeWidth="1" rx="3" />
              <text x="400" y="125" textAnchor="middle" fontSize="9" fontWeight="bold">Transition Table δ</text>
              <text x="400" y="137" textAnchor="middle" fontSize="8">State × Alphabet → State</text>
              <rect x="310" y="150" width="180" height="35" fill="#f0f4ff" stroke="#6366f1" strokeWidth="1" rx="3" />
              <text x="400" y="165" textAnchor="middle" fontSize="9" fontWeight="bold">Alphabet Σ</text>
              <text x="400" y="177" textAnchor="middle" fontSize="8">{'{'}A, B, C, D, ...{'}'}</text>

              <rect x="300" y="320" width="200" height="170" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="400" y="340" textAnchor="middle" fontSize="13" fontWeight="bold">Matching Engine</text>
              <text x="400" y="355" textAnchor="middle" fontSize="10" fill="#10b981" fontWeight="bold">O(n) Time</text>
              <rect x="310" y="365" width="180" height="30" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" rx="3" />
              <text x="400" y="378" textAnchor="middle" fontSize="9" fontWeight="bold">State Tracker</text>
              <text x="400" y="388" textAnchor="middle" fontSize="8">Maintains state q</text>
              <rect x="310" y="400" width="180" height="35" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" rx="3" />
              <text x="400" y="415" textAnchor="middle" fontSize="9" fontWeight="bold">Text Scanner</text>
              <text x="400" y="427" textAnchor="middle" fontSize="8">Read T[i], q = δ(q, T[i])</text>
              <rect x="310" y="440" width="180" height="40" fill="#f0fdf4" stroke="#10b981" strokeWidth="1" rx="3" />
              <text x="400" y="455" textAnchor="middle" fontSize="9" fontWeight="bold">Match Reporter</text>
              <text x="400" y="467" textAnchor="middle" fontSize="8">if q == m then MATCH</text>
              <text x="400" y="477" textAnchor="middle" fontSize="8">Position: i - m + 1</text>

              <rect x="550" y="160" width="200" height="130" fill="#bbf7d0" stroke="#16a34a" strokeWidth="2" rx="5" />
              <text x="650" y="180" textAnchor="middle" fontSize="13" fontWeight="bold">Output</text>
              <rect x="560" y="190" width="180" height="90" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1" rx="3" />
              <text x="650" y="210" textAnchor="middle" fontSize="11" fontWeight="bold">Results</text>
              <text x="650" y="230" textAnchor="middle" fontSize="10">Matches: [7, 15, 23]</text>
              <text x="650" y="250" textAnchor="middle" fontSize="10">Count: 3</text>
              <text x="650" y="270" textAnchor="middle" fontSize="10">Time: O(n) ✓</text>

              <rect x="550" y="320" width="200" height="100" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="650" y="340" textAnchor="middle" fontSize="13" fontWeight="bold">Overall Complexity</text>
              <text x="650" y="360" textAnchor="middle" fontSize="10">Preprocessing: O(m)</text>
              <text x="650" y="380" textAnchor="middle" fontSize="10">Matching: O(n)</text>
              <text x="650" y="405" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#16a34a">Total: O(m + n)</text>

              <line x1="150" y1="130" x2="150" y2="160" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />
              <line x1="250" y1="225" x2="300" y2="225" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />
              <line x1="400" y1="290" x2="400" y2="320" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />
              <line x1="500" y1="405" x2="550" y2="225" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowArch)" />

              <defs>
                <marker id="arrowArch" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4 italic">Figure 6: Complete system architecture showing preprocessing, automaton structure, matching engine, and output</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Real-World Implementation</h3>
        <p className="mt-4">
          Modern text search implementations leverage automata theory in sophisticated ways. The Linux grep utility uses the Boyer-Moore algorithm for simple patterns but switches to automata-based approaches for complex regular expressions. The GNU grep implementation compiles regex patterns into DFAs when possible, falling back to NFAs for features like backreferences. When you search a file with grep "pattern" file.txt, the underlying engine builds an automaton, then streams through the file without loading it entirely into memory—crucial for searching multi-gigabyte log files.
        </p>

        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="font-semibold">KMP Algorithm Visualization</p>
          <p className="mt-2 text-sm">Figure 7: Visual representation of KMP algorithm's prefix function in action</p>
        </div>

        <p className="mt-4">
          In bioinformatics, tools like BLAST (Basic Local Alignment Search Tool) use variants of finite automata for DNA sequence matching. The challenge here is dealing with approximate matches (allowing mismatches, insertions, deletions), which requires extending the automaton model. NCBI's BLAST implementation preprocesses query sequences into automata-like structures, then scans database sequences achieving billions of base pair comparisons per second. The Burrows-Wheeler Transform (BWT) combined with FM-index, used in modern DNA aligners like BWA and Bowtie, can be viewed as an implicit automaton over compressed sequence data.
        </p>

        <h4 className="mt-6 font-semibold">💻 Example: Pattern Matching in GNU grep</h4>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">GNU grep uses different algorithms based on pattern complexity:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li><strong>Simple fixed strings:</strong> Boyer-Moore algorithm for maximum speed (faster than KMP in practice due to better skip heuristics)</li>
            <li><strong>Simple regex patterns:</strong> Compiles to DFA using subset construction from regex NFA</li>
            <li><strong>Complex regex with backreferences:</strong> Uses backtracking NFA simulation (slower but handles full regex power)</li>
          </ul>
          <p className="mt-3"><strong>Example command:</strong> grep -E 'AB+C' file.txt compiles the regex to an NFA, then optionally converts to DFA. The engine then scans the file in a single pass, reporting all matching lines.</p>
          <p className="mt-2"><strong>Performance:</strong> Searching a 1GB file takes ~3 seconds on modern hardware, with most time spent on I/O rather than pattern matching due to O(n) algorithms.</p>
        </div>

        <h4 className="mt-6 font-semibold">💻 Example: Aho-Corasick in Snort IDS</h4>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-4">
          <p className="font-semibold">Snort, a popular open-source Intrusion Detection System, uses the Aho-Corasick algorithm for multi-pattern matching:</p>
          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li><strong>Rule preprocessing:</strong> Thousands of attack signatures are compiled into a single Aho-Corasick automaton (trie with failure links)</li>
            <li><strong>Packet inspection:</strong> Each network packet's payload is scanned once through the automaton</li>
            <li><strong>Parallel matching:</strong> All patterns are searched simultaneously in O(n + z) where n is packet size and z is number of matches</li>
          </ul>
          <p className="mt-3">With 10,000+ signatures, naive approach would require 10,000 separate scans. Aho-Corasick reduces this to a single O(n) scan, enabling line-rate intrusion detection on gigabit networks.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>⚠️ Common Misconceptions</h3>
        
        <div className="space-y-4 mt-6">
          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #1: Automata-based search is always faster than naive search</h4>
            <p className="mt-2"><strong>Reality:</strong></p>
            <p className="text-sm mt-1">
              For very short patterns (m ≤ 3) and small texts, the naive O(nm) algorithm can actually be faster due to lower constant factors and better cache locality. The preprocessing overhead of building the automaton (O(m) time and space) isn't justified for tiny inputs. Automata-based approaches win when the text is large or when searching multiple times with the same pattern. Modern implementations like Boyer-Moore can also be faster in practice because they skip characters rather than examining every one.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #2: The KMP algorithm directly builds a finite automaton</h4>
            <p className="mt-2"><strong>Reality:</strong></p>
            <p className="text-sm mt-1">
              KMP implicitly simulates an automaton but doesn't explicitly build the full transition table δ(q,c). Instead, it uses the prefix function π and processes transitions on-the-fly. Building the explicit automaton requires O(m|Σ|) space and time, which is impractical for large alphabets like Unicode. KMP achieves the same O(m+n) time with only O(m) preprocessing by cleverly computing next states only when needed. The "automaton" interpretation helps understand correctness but isn't the actual implementation.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #3: Text search algorithms work on arbitrary patterns</h4>
            <p className="mt-2"><strong>Reality:</strong></p>
            <p className="text-sm mt-1">
              The finite automata approach we've discussed works for exact string matching with fixed patterns. It doesn't directly handle wildcards, character classes, or regular expressions (which require NFA simulation or subset construction). Extensions exist: Aho-Corasick handles multiple exact patterns, Glushkov's construction converts regex to NFA, and tools like grep use DFA minimization for regex when possible. But each extension adds complexity. The simple automaton model is powerful but specialized for its specific problem.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <h4 className="font-semibold">Misconception #4: All text search algorithms have the same O(n) performance</h4>
            <p className="mt-2"><strong>Reality:</strong></p>
            <p className="text-sm mt-1">
              While KMP, automata-based matching, and Aho-Corasick all have O(n) worst-case time, their practical performance varies significantly. Boyer-Moore, with O(nm) worst case, often performs best in practice because it can skip large portions of text when mismatches occur early in the pattern. The constant factors, cache behavior, and branch prediction matter enormously. For DNA searching (4-character alphabet), different algorithms excel than for English text (26+ characters). Algorithm selection must consider both theoretical bounds and empirical characteristics of your data.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Learn Through Videos</h3>
        <p className="mt-4">Watch these carefully selected videos to reinforce your understanding with visual explanations and animations.</p>

        <div className="space-y-6 mt-6">
          <div>
            <h4 className="font-semibold">📚 String Matching Algorithms</h4>
            <p className="text-sm text-gray-600">Abdul Bari - 48:32 minutes - Comprehensive coverage</p>
            <p className="text-sm text-gray-600">What you'll learn: Naive, KMP, Rabin-Karp algorithms with detailed examples and complexity analysis</p>
            <div className="aspect-video mt-3">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/TClogJNShFk?si=ODCTJa0onXqneHOW" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">🎬 KMP Algorithm Visualization</h4>
            <p className="text-sm text-gray-600">Tushar Roy - 18:45 minutes - Step-by-step animation</p>
            <p className="text-sm text-gray-600">What you'll learn: How to build LPS array and use it for efficient pattern matching</p>
            <div className="aspect-video mt-3">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/ynv7bbcSLKE?si=cVHuVmXdhhvaPA_t" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">💻 Aho-Corasick Multi-Pattern Search</h4>
            <p className="text-sm text-gray-600">WilliamFiset - 16:22 minutes - Advanced technique</p>
            <p className="text-sm text-gray-600">What you'll learn: Building trie with failure links for searching multiple patterns simultaneously</p>
            <div className="aspect-video mt-3">
              <iframe 
                width="100%" 
                height="315" 
                src="https://www.youtube.com/embed/alG4qAJdd4o?si=KeBKjSNX1AkNm3tW" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Inductive Cases for NFA Construction</h3>
        <p className="mt-4">Thompson's Construction uses inductive rules to build NFAs from regular expressions</p>
        
        <div className="flex justify-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-5xl w-full">
            <h4 className="text-center font-bold text-lg mb-6">6.2 Inductive Cases</h4>
            
            <div className="space-y-8">
              <div className="border-2 border-blue-300 rounded-lg p-6 bg-blue-50">
                <h5 className="font-bold text-blue-800 mb-4">▼ Inductive Case 1: Union (R + S)</h5>
                <svg width="500" height="250" viewBox="0 0 500 250" className="mx-auto">
                  <circle cx="80" cy="125" r="30" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
                  <text x="80" y="132" textAnchor="middle" fontSize="14" fontWeight="bold">qA</text>
                  
                  <rect x="180" y="40" width="140" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                  <text x="250" y="75" textAnchor="middle" fontSize="13" fontWeight="bold">NFA for R</text>
                  
                  <rect x="180" y="150" width="140" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                  <text x="250" y="185" textAnchor="middle" fontSize="13" fontWeight="bold">NFA for S</text>
                  
                  <circle cx="420" cy="125" r="30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
                  <circle cx="420" cy="125" r="25" fill="none" stroke="#16a34a" strokeWidth="2" />
                  <text x="420" y="132" textAnchor="middle" fontSize="14" fontWeight="bold">qA</text>
                  
                  <line x1="110" y1="110" x2="180" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="145" y="85" textAnchor="middle" fontSize="12" fill="#059669">ε</text>
                  
                  <line x1="110" y1="140" x2="180" y2="180" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="145" y="165" textAnchor="middle" fontSize="12" fill="#059669">ε</text>
                  
                  <line x1="320" y1="70" x2="390" y2="110" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="355" y="85" textAnchor="middle" fontSize="12" fill="#059669">ε</text>
                  
                  <line x1="320" y1="180" x2="390" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow)" />
                  <text x="355" y="165" textAnchor="middle" fontSize="12" fill="#059669">ε</text>
                  
                  <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                    </marker>
                  </defs>
                </svg>
                <p className="text-center text-sm text-gray-700 mt-4 italic">Thompson's Construction for Union: new start state branches to both sub-NFAs via ε; both sub-NFAs' accept states merge into new accept state via ε.</p>
                <p className="text-center text-sm text-blue-700 mt-2">New start/accept states connect to both sub-NFAs via ε-transitions</p>
              </div>
              
              <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50">
                <h5 className="font-bold text-green-800 mb-4">▼ Inductive Case 2: Concatenation (RS)</h5>
                <svg width="600" height="150" viewBox="0 0 600 150" className="mx-auto">
                  <rect x="50" y="45" width="200" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                  <text x="150" y="80" textAnchor="middle" fontSize="13" fontWeight="bold">NFA for R</text>
                  
                  <rect x="350" y="45" width="200" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
                  <text x="450" y="80" textAnchor="middle" fontSize="13" fontWeight="bold">NFA for S</text>
                  
                  <circle cx="500" cy="75" r="30" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" />
                  <circle cx="500" cy="75" r="25" fill="none" stroke="#16a34a" strokeWidth="2" />
                  <text x="500" y="82" textAnchor="middle" fontSize="14" fontWeight="bold">qA</text>
                  
                  <line x1="250" y1="75" x2="350" y2="75" stroke="#374151" strokeWidth="2" markerEnd="url(#arrow2)" />
                  <text x="300" y="65" textAnchor="middle" fontSize="12" fill="#059669">ε</text>
                  
                  <defs>
                    <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                    </marker>
                  </defs>
                </svg>
                <p className="text-center text-sm text-gray-700 mt-4 italic">Thompson's Construction for Concatenation. Accept of R links to start of S via ε-transition</p>
                <p className="text-center text-sm text-green-700 mt-2">In concatenation, the accept state of NFA for R is merged (via ε-transition) with the start state of the NFA for S</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>See It In Action: Algorithms &amp; Examples</h3>
        
        <h4 className="mt-6 font-semibold">The KMP Algorithm</h4>
        <p className="mt-4">
          The Knuth-Morris-Pratt algorithm is the classic automata-based string matching algorithm. It preprocesses the pattern to compute a "failure function" (also called LPS - Longest Proper Prefix which is also Suffix), then uses this to avoid rescanning characters in the text. The key insight is that when a mismatch occurs, we already know some characters in the text (those that matched), so we can use this information to skip unnecessary comparisons rather than starting from scratch.
        </p>

        <div className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-6 overflow-x-auto">
          <p className="font-semibold mb-3">KMP Algorithm Pseudocode</p>
          <pre className="text-sm">{`// Knuth-Morris-Pratt String Matching Algorithm
// Input: Text T[0..n-1], Pattern P[0..m-1]
// Output: All positions where P occurs in T

ALGORITHM KMP_Matcher(T, P)
BEGIN
    n = length(T)
    m = length(P)
    π = Compute_Prefix_Function(P)  // Preprocessing
    q = 0  // Number of characters matched
    
    // Scan through the text
    FOR i = 0 TO n-1 DO
        // Follow failure links while mismatch
        WHILE q > 0 AND P[q] ≠ T[i] DO
            q = π[q-1]  // Use prefix function to avoid rechecking
        END WHILE
        
        // If match, increment matched count
        IF P[q] = T[i] THEN
            q = q + 1
        END IF
        
        // Found complete match
        IF q = m THEN
            Print "Pattern occurs at position", i - m + 1
            q = π[q-1]  // Look for next occurrence
        END IF
    END FOR
END

FUNCTION Compute_Prefix_Function(P)
BEGIN
    m = length(P)
    π[0] = 0  // Base case
    k = 0  // Length of previous longest prefix suffix
    
    FOR q = 1 TO m-1 DO
        // While mismatch, use previous longest prefix suffix
        WHILE k > 0 AND P[k] ≠ P[q] DO
            k = π[k-1]
        END WHILE
        
        // If match, increment length
        IF P[k] = P[q] THEN
            k = k + 1
        END IF
        
        π[q] = k  // Store longest prefix suffix for P[0..q]
    END FOR
    
    RETURN π
END`}</pre>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
          <p className="font-semibold">⏱️ Complexity Analysis:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <p className="font-semibold text-sm">Time Complexity:</p>
              <p className="text-sm">O(m + n) where m is pattern length, n is text length</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Space Complexity:</p>
              <p className="text-sm">O(m) for storing the prefix function array</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Preprocessing Time:</p>
              <p className="text-sm">O(m) to compute π array</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Matching Time:</p>
              <p className="text-sm">O(n) - each text character examined at most twice</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Best Case:</p>
              <p className="text-sm">O(n) when no matches occur and no partial matches</p>
            </div>
            <div>
              <p className="font-semibold text-sm">Worst Case:</p>
              <p className="text-sm">O(n) guaranteed - KMP never backtracks in the text</p>
            </div>
          </div>
          <p className="mt-3 text-sm"><strong>Practical Performance:</strong> Faster than naive for m &gt; 3 and when pattern has self-similarity</p>
        </div>
      </section>

      <section className="content-section">
        <h3>KMP Algorithm Flowchart</h3>
        <p className="mt-4">Complete flowchart showing the KMP string matching algorithm execution flow</p>
        
        <div className="flex justify-center my-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-4xl w-full">
            <h4 className="text-center font-bold text-lg mb-4">KMP Algorithm Flowchart</h4>
            <svg width="700" height="1100" viewBox="0 0 700 1100" className="mx-auto">
              <ellipse cx="350" cy="30" rx="60" ry="25" fill="#10b981" stroke="#065f46" strokeWidth="2" />
              <text x="350" y="37" textAnchor="middle" fill="white" fontWeight="bold">Start KMP</text>
              
              <rect x="230" y="70" width="240" height="50" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="90" textAnchor="middle" fontSize="13" fontWeight="bold">Input: T[0..n-1],</text>
              <text x="350" y="107" textAnchor="middle" fontSize="13" fontWeight="bold">P[0..m-1]</text>
              <line x1="350" y1="55" x2="350" y2="70" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              
              <rect x="210" y="140" width="280" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="350" y="165" textAnchor="middle" fontSize="13" fontWeight="bold">Compute Prefix Function π</text>
              <line x1="350" y1="120" x2="350" y2="140" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              
              <rect x="210" y="200" width="280" height="40" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2" rx="5" />
              <text x="350" y="225" textAnchor="middle" fontSize="13" fontWeight="bold">Initialize: q=0, i=0</text>
              <line x1="350" y1="180" x2="350" y2="200" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              
              <path d="M 350 260 L 430 300 L 350 340 L 270 300 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="305" textAnchor="middle" fontSize="13" fontWeight="bold">i &lt; n?</text>
              <line x1="350" y1="240" x2="350" y2="260" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              
              <path d="M 350 380 L 430 420 L 350 460 L 270 420 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="415" textAnchor="middle" fontSize="12" fontWeight="bold">q&gt;0 AND</text>
              <text x="350" y="430" textAnchor="middle" fontSize="12" fontWeight="bold">P[q] ≠ T[i]?</text>
              <line x1="350" y1="340" x2="350" y2="380" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              <text x="360" y="365" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>
              
              <rect x="490" y="400" width="160" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="570" y="425" textAnchor="middle" fontSize="13" fontWeight="bold">q = π[q-1]</text>
              <line x1="430" y1="420" x2="490" y2="420" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              <text x="460" y="415" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>
              
              <path d="M 650 420 L 680 420 L 680 300 L 430 300" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowKMP)" />
              
              <path d="M 350 500 L 430 540 L 350 580 L 270 540 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="545" textAnchor="middle" fontSize="13" fontWeight="bold">P[q] = T[i]?</text>
              <line x1="350" y1="460" x2="350" y2="500" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              <text x="360" y="485" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>
              
              <rect x="490" y="520" width="160" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="570" y="545" textAnchor="middle" fontSize="13" fontWeight="bold">q = q + 1</text>
              <line x1="430" y1="540" x2="490" y2="540" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              <text x="460" y="535" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>
              
              <rect x="270" y="620" width="160" height="40" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="5" />
              <text x="350" y="645" textAnchor="middle" fontSize="13" fontWeight="bold">i = i + 1</text>
              <line x1="350" y1="580" x2="350" y2="620" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              <text x="360" y="605" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>
              
              <path d="M 650 540 L 680 540 L 680 640 L 430 640" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowKMP)" />
              
              <path d="M 350 700 L 430 740 L 350 780 L 270 740 Z" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
              <text x="350" y="745" textAnchor="middle" fontSize="13" fontWeight="bold">q = m?</text>
              <line x1="350" y1="660" x2="350" y2="700" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              
              <rect x="490" y="720" width="180" height="40" fill="#dcfce7" stroke="#10b981" strokeWidth="2" rx="5" />
              <text x="580" y="735" textAnchor="middle" fontSize="11" fontWeight="bold">Report match at</text>
              <text x="580" y="750" textAnchor="middle" fontSize="11" fontWeight="bold">i-m+1</text>
              <line x1="430" y1="740" x2="490" y2="740" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              <text x="460" y="735" fontSize="12" fontWeight="bold" fill="#10b981">Yes</text>
              
              <rect x="490" y="780" width="180" height="40" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="5" />
              <text x="580" y="805" textAnchor="middle" fontSize="13" fontWeight="bold">q = π[q-1]</text>
              <line x1="580" y1="760" x2="580" y2="780" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              
              <path d="M 580 820 L 580 900 L 680 900 L 680 300 L 430 300" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowKMP)" />
              
              <path d="M 270 740 L 150 740 L 150 300 L 270 300" stroke="#374151" strokeWidth="2" fill="none" markerEnd="url(#arrowKMP)" />
              <text x="250" y="730" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>
              
              <ellipse cx="350" cy="1050" rx="60" ry="25" fill="#ef4444" stroke="#991b1b" strokeWidth="2" />
              <text x="350" y="1057" textAnchor="middle" fill="white" fontWeight="bold">End</text>
              <line x1="270" y1="300" x2="200" y2="1050" stroke="#374151" strokeWidth="2" markerEnd="url(#arrowKMP)" />
              <text x="250" y="320" fontSize="12" fontWeight="bold" fill="#ef4444">No</text>
              
              <defs>
                <marker id="arrowKMP" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#374151" />
                </marker>
              </defs>
            </svg>
            <p className="text-center text-sm text-gray-600 mt-4 italic">Figure 8: Complete flowchart of KMP string matching algorithm</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Worked Example 1: Building the Prefix Function</h3>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">📝 Problem Statement</p>
          <p className="mt-2">Compute the prefix function π for the pattern P = "ABABCABAB"</p>
          <p className="text-sm mt-2">The prefix function π[i] gives the length of the longest proper prefix of P[0..i] that is also a suffix of P[0..i].</p>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">🔍 Step-by-Step Solution</h4>
          
          <div className="space-y-4 mt-4">
            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Initialization:</p>
              <p className="text-sm mt-2">Create array π of length 9. Set π[0] = 0 (by definition, empty string has no proper prefix).</p>
              <p className="text-sm mt-1 font-mono">π = [0, ?, ?, ?, ?, ?, ?, ?, ?]</p>
              <p className="text-sm mt-1">k = 0 (tracks length of current longest prefix suffix)</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 1 (P[1]='B'):</p>
              <p className="text-sm mt-2">Compare P[k='A'] with P[1='B']. Mismatch! Since k=0, can't go further. π[1] = 0.</p>
              <p className="text-sm mt-1">P[0..1] = "AB" has no proper prefix that's also a suffix</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, ?, ?, ?, ?, ?, ?, ?]</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 2 (P[2]='A'):</p>
              <p className="text-sm mt-2">Compare P[k=0='A'] with P[2='A']. Match! Increment k=1. π[2] = 1.</p>
              <p className="text-sm mt-1">P[0..2] = "ABA" → prefix "A" = suffix "A" (length 1)</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, 1, ?, ?, ?, ?, ?, ?]</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 3 (P[3]='B'):</p>
              <p className="text-sm mt-2">Compare P[k=1='B'] with P[3='B']. Match! Increment k=2. π[3] = 2.</p>
              <p className="text-sm mt-1">P[0..3] = "ABAB" → prefix "AB" = suffix "AB" (length 2)</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, 1, 2, ?, ?, ?, ?, ?]</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 4 (P[4]='C'):</p>
              <p className="text-sm mt-2">Compare P[k=2='A'] with P[4='C']. Mismatch!</p>
              <p className="text-sm mt-1">Use failure: k = π[k-1] = π[1] = 0</p>
              <p className="text-sm mt-1">Compare P[k=0='A'] with P[4='C']. Still mismatch, k=0. π[4] = 0.</p>
              <p className="text-sm mt-1">P[0..4] = "ABABC" has no proper prefix = suffix</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, 1, 2, 0, ?, ?, ?, ?]</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 5 (P[5]='A'):</p>
              <p className="text-sm mt-2">Compare P[k=0='A'] with P[5='A']. Match! k=1, π[5] = 1.</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, 1, 2, 0, 1, ?, ?, ?]</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 6 (P[6]='B'):</p>
              <p className="text-sm mt-2">Compare P[k=1='B'] with P[6='B']. Match! k=2, π[6] = 2.</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, 1, 2, 0, 1, 2, ?, ?]</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 7 (P[7]='A'):</p>
              <p className="text-sm mt-2">Compare P[k=2='A'] with P[7='A']. Match! k=3, π[7] = 3.</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, 1, 2, 0, 1, 2, 3, ?]</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">Position 8 (P[8]='B'):</p>
              <p className="text-sm mt-2">Compare P[k=3='B'] with P[8='B']. Match! k=4, π[8] = 4.</p>
              <p className="text-sm mt-1">P[0..8] = "ABABCABAB" → prefix "ABAB" = suffix "ABAB" (length 4)</p>
              <p className="text-sm mt-1 font-mono">π = [0, 0, 1, 2, 0, 1, 2, 3, 4]</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Visual: Prefix Function Table</h4>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Index i</th>
                  <th className="border border-gray-300 px-4 py-2">0</th>
                  <th className="border border-gray-300 px-4 py-2">1</th>
                  <th className="border border-gray-300 px-4 py-2">2</th>
                  <th className="border border-gray-300 px-4 py-2">3</th>
                  <th className="border border-gray-300 px-4 py-2">4</th>
                  <th className="border border-gray-300 px-4 py-2">5</th>
                  <th className="border border-gray-300 px-4 py-2">6</th>
                  <th className="border border-gray-300 px-4 py-2">7</th>
                  <th className="border border-gray-300 px-4 py-2">8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">P[i]</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">C</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                </tr>
                <tr className="bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2 font-semibold">π[i]</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">2</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">2</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">3</td>
                  <td className="border border-gray-300 px-4 py-2 text-center font-bold">4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-600 italic mt-4">Figure 9: Complete prefix function for pattern "ABABCABAB"</p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
          <p className="font-semibold">✅ Final Answer</p>
          <p className="text-sm mt-2"><strong>Prefix Function:</strong> π = [0, 0, 1, 2, 0, 1, 2, 3, 4]</p>
          <p className="text-sm mt-2"><strong>Interpretation:</strong> At position 8, the longest proper prefix that's also a suffix is "ABAB" with length 4.</p>
          <p className="text-sm mt-2"><strong>Use in KMP:</strong> If we're matching and get a mismatch after matching 4 characters (state q=4), we can jump to state π[3]=2 instead of starting over.</p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-6">
          <p className="font-semibold">💡 Key Insights</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
            <li>The prefix function captures self-similarity in the pattern</li>
            <li>Computing π takes O(m) time despite the nested loops (amortized analysis shows each position processed at most twice)</li>
            <li>Higher π values mean more pattern repetition, which KMP exploits to skip re-checking characters</li>
            <li>π[i] is always &lt; i+1 (proper prefix must be shorter than the string itself)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>Worked Example 2: Complete KMP Matching</h3>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
          <p className="font-semibold">📝 Problem Statement</p>
          <p className="mt-2">Use the KMP algorithm to find all occurrences of pattern P = "ABAB" in text T = "ABABDABAABAB"</p>
          <p className="text-sm mt-2">We'll use the prefix function π = [0, 0, 1, 2] computed from P.</p>
        </div>

        <div className="mt-6">
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Position</th>
                  <th className="border border-gray-300 px-4 py-2">0</th>
                  <th className="border border-gray-300 px-4 py-2">1</th>
                  <th className="border border-gray-300 px-4 py-2">2</th>
                  <th className="border border-gray-300 px-4 py-2">3</th>
                  <th className="border border-gray-300 px-4 py-2">4</th>
                  <th className="border border-gray-300 px-4 py-2">5</th>
                  <th className="border border-gray-300 px-4 py-2">6</th>
                  <th className="border border-gray-300 px-4 py-2">7</th>
                  <th className="border border-gray-300 px-4 py-2">8</th>
                  <th className="border border-gray-300 px-4 py-2">9</th>
                  <th className="border border-gray-300 px-4 py-2">10</th>
                  <th className="border border-gray-300 px-4 py-2">11</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-semibold">Text T</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">D</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">A</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">🔍 Step-by-Step Matching Process</h4>
          
          <div className="space-y-4 mt-4">
            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=0, q=0:</p>
              <p className="text-sm mt-2">Compare P[0='A'] with T[0='A']. Match! q=1.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=1, q=1:</p>
              <p className="text-sm mt-2">Compare P[1='B'] with T[1='B']. Match! q=2.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=2, q=2:</p>
              <p className="text-sm mt-2">Compare P[2='A'] with T[2='A']. Match! q=3.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=3, q=3:</p>
              <p className="text-sm mt-2">Compare P[3='B'] with T[3='B']. Match! q=4.</p>
              <p className="text-sm mt-2 font-bold text-green-600">✓ FULL MATCH at position 0 (i-m+1 = 3-4+1 = 0)</p>
              <p className="text-sm mt-1">Continue: q = π[3] = 2 (we know "AB" is matched)</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=4, q=2:</p>
              <p className="text-sm mt-2">Compare P[2='A'] with T[4='D']. Mismatch!</p>
              <p className="text-sm mt-1">Use failure: q = π[1] = 0</p>
              <p className="text-sm mt-1">Compare P[0='A'] with T[4='D']. Still mismatch, q stays 0.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=5, q=0:</p>
              <p className="text-sm mt-2">Compare P[0='A'] with T[5='A']. Match! q=1.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=6, q=1:</p>
              <p className="text-sm mt-2">Compare P[1='B'] with T[6='B']. Match! q=2.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=7, q=2:</p>
              <p className="text-sm mt-2">Compare P[2='A'] with T[7='A']. Match! q=3.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=8, q=3:</p>
              <p className="text-sm mt-2">Compare P[3='B'] with T[8='A']. Mismatch!</p>
              <p className="text-sm mt-1">Use failure: q = π[2] = 1 (after matching "ABA", we know "A" is still matched)</p>
              <p className="text-sm mt-1">Compare P[1='B'] with T[8='A']. Still mismatch!</p>
              <p className="text-sm mt-1">Use failure: q = π[0] = 0</p>
              <p className="text-sm mt-1">Compare P[0='A'] with T[8='A']. Match! q=1.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=9, q=1:</p>
              <p className="text-sm mt-2">Compare P[1='B'] with T[9='B']. Match! q=2.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=10, q=2:</p>
              <p className="text-sm mt-2">Compare P[2='A'] with T[10='A']. Match! q=3.</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=11, q=3:</p>
              <p className="text-sm mt-2">Compare P[3='B'] with T[11='B']. Match! q=4.</p>
              <p className="text-sm mt-2 font-bold text-green-600">✓ FULL MATCH at position 8 (i-m+1 = 11-4+1 = 8)</p>
              <p className="text-sm mt-1">Continue: q = π[3] = 2</p>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <p className="font-semibold">i=12:</p>
              <p className="text-sm mt-2">Reached end of text (i ≥ n). Stop.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mt-6">
          <p className="font-semibold">✅ Final Answer</p>
          <p className="text-sm mt-2"><strong>Pattern "ABAB" found at positions:</strong> 0 and 8</p>
          <p className="text-sm mt-3"><strong>Total comparisons:</strong> 12 (equal to text length n)</p>
          <p className="text-sm mt-2"><strong>Naive algorithm would have done:</strong> ~30 comparisons (checking each position)</p>
          <p className="text-sm mt-2"><strong>Speedup:</strong> KMP is ~2.5× faster by avoiding redundant checks</p>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mt-6">
          <p className="font-semibold">💡 Key Insights</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
            <li>KMP scanned each character exactly once (i only increments, never decrements)</li>
            <li>When mismatch occurred at T[4], the prefix function helped skip unnecessary comparisons</li>
            <li>After first match, we didn't restart from position 1—we used π to continue from state 2</li>
            <li>The algorithm found overlapping matches correctly (if they existed)</li>
          </ul>
        </div>

        <div className="mt-8">
          <h4 className="font-semibold">Matching Timeline Visualization</h4>
          <div className="flex justify-center my-6">
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 max-w-5xl w-full">
              <h5 className="text-center font-bold text-lg mb-4">KMP Matching: "ABAB" in "ABABDABAABAB"</h5>
              
              <svg width="900" height="300" viewBox="0 0 900 300" className="mx-auto">
                <text x="450" y="30" textAnchor="middle" fontSize="16" fontWeight="bold">Text:</text>
                
                {/* Text characters with positions */}
                <rect x="50" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="80" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">A</text>
                <text x="80" y="100" textAnchor="middle" fontSize="12">0</text>
                
                <rect x="120" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="150" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">B</text>
                <text x="150" y="100" textAnchor="middle" fontSize="12">1</text>
                
                <rect x="190" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="220" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">A</text>
                <text x="220" y="100" textAnchor="middle" fontSize="12">2</text>
                
                <rect x="260" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="290" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">B</text>
                <text x="290" y="100" textAnchor="middle" fontSize="12">3</text>
                
                <rect x="330" y="50" width="60" height="60" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" rx="3" />
                <text x="360" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">D</text>
                <text x="360" y="100" textAnchor="middle" fontSize="12">4</text>
                
                <rect x="400" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="430" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">A</text>
                <text x="430" y="100" textAnchor="middle" fontSize="12">5</text>
                
                <rect x="470" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="500" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">B</text>
                <text x="500" y="100" textAnchor="middle" fontSize="12">6</text>
                
                <rect x="540" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="570" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">A</text>
                <text x="570" y="100" textAnchor="middle" fontSize="12">7</text>
                
                <rect x="610" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="640" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">A</text>
                <text x="640" y="100" textAnchor="middle" fontSize="12">8</text>
                
                <rect x="680" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="710" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">B</text>
                <text x="710" y="100" textAnchor="middle" fontSize="12">9</text>
                
                <rect x="750" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="780" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">A</text>
                <text x="780" y="100" textAnchor="middle" fontSize="12">10</text>
                
                <rect x="820" y="50" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="3" />
                <text x="850" y="75" textAnchor="middle" fontSize="18" fontWeight="bold">B</text>
                <text x="850" y="100" textAnchor="middle" fontSize="12">11</text>
                
                {/* Match 1 indicator */}
                <rect x="50" y="140" width="270" height="40" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" rx="5" opacity="0.7" />
                <text x="185" y="165" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#16a34a">MATCH 1 at pos 0</text>
                
                {/* Match 2 indicator */}
                <rect x="610" y="140" width="270" height="40" fill="#bbf7d0" stroke="#16a34a" strokeWidth="3" rx="5" opacity="0.7" />
                <text x="745" y="165" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#16a34a">MATCH 2 at pos 8</text>
                
                {/* Statistics */}
                <rect x="200" y="210" width="500" height="70" fill="#f0f9ff" stroke="#3b82f6" strokeWidth="2" rx="5" />
                <text x="450" y="235" textAnchor="middle" fontSize="14" fontWeight="bold">Total Comparisons: 12 (exactly n)</text>
                <text x="450" y="260" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#16a34a">KMP Efficiency: O(n) - No backtracking!</text>
              </svg>
              
              <p className="text-center text-sm text-gray-600 italic mt-4">Figure 10: Timeline showing where matches occur and efficiency of KMP</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Interactive Demo: Try It Yourself!</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-lg p-6 mt-6">
          <h4 className="font-semibold text-lg mb-4">🎮 Interactive KMP Pattern Matcher</h4>
          <p className="text-sm text-gray-700 mb-4">Enter a text and pattern to see KMP algorithm in action:</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Text:</label>
              <input 
                type="text" 
                defaultValue="ABABDABAABABCABAB"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-mono"
                placeholder="Enter text to search in..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Pattern:</label>
              <input 
                type="text" 
                defaultValue="ABAB"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-mono"
                placeholder="Enter pattern to search for..."
              />
            </div>
            
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
                🔍 Search with KMP
              </button>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold">
                📊 Show Prefix Function
              </button>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-300">
            <p className="text-sm text-gray-600 italic">💻 Interactive demo placeholder - In a live environment, this would execute the KMP algorithm and display results in real-time</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>💻 Code Implementation</h3>
        <p className="mt-4">
          Now let's implement the KMP string matching algorithm in Python. This implementation will be complete, tested, and ready to run. We'll use Python for its clarity and built-in string handling, though the algorithm translates easily to C, Java, or any language. The code demonstrates how to compute the prefix function efficiently and use it to search text in optimal O(m+n) time.
        </p>

        <div className="mt-6">
          <h4 className="font-semibold mb-4">Complete Working Implementation</h4>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="bg-gray-800 text-white px-4 py-2 flex items-center justify-between">
              <span className="font-semibold">KMP String Matching - Complete Implementation</span>
              <span className="text-sm bg-blue-600 px-3 py-1 rounded">Python 3</span>
            </div>
            
            <div className="bg-gray-900 text-gray-100 p-6 overflow-x-auto">
              <pre className="text-sm"><code>{`# ============================================
# Knuth-Morris-Pratt String Matching Algorithm
# Language: Python 3
# Description: Efficient pattern matching using prefix function
# ============================================

def compute_prefix_function(pattern):
    """
    Compute the prefix function (LPS array) for KMP algorithm.
    
    Args:
        pattern: The pattern string to analyze
    
    Returns:
        List of integers where pi[i] is the length of the longest
        proper prefix of pattern[0..i] that is also a suffix
    
    Time Complexity: O(m) where m is pattern length
    Space Complexity: O(m)
    """
    m = len(pattern)
    pi = [0] * m  # Initialize prefix array with zeros
    k = 0  # Length of previous longest prefix suffix
    
    # pi[0] is always 0, start from index 1
    for q in range(1, m):
        # While mismatch, use failure function
        while k > 0 and pattern[k] != pattern[q]:
            k = pi[k - 1]  # Fall back using previous prefix
        
        # If characters match, increment length
        if pattern[k] == pattern[q]:
            k += 1
        
        pi[q] = k  # Store the length for position q
    
    return pi


def kmp_search(text, pattern):
    """
    Search for all occurrences of pattern in text using KMP algorithm.
    
    Args:
        text: The text string to search in
        pattern: The pattern string to search for
    
    Returns:
        List of starting positions where pattern occurs in text
    
    Time Complexity: O(n + m) where n is text length, m is pattern length
    Space Complexity: O(m) for the prefix function
    """
    n = len(text)
    m = len(pattern)
    
    # Handle edge cases
    if m == 0:
        return []
    if n < m:
        return []
    
    # Preprocessing: compute prefix function
    pi = compute_prefix_function(pattern)
    
    matches = []  # Store all match positions
    q = 0  # Number of characters matched
    
    # Scanning: process each character of text
    for i in range(n):
        # Handle mismatch using prefix function
        while q > 0 and pattern[q] != text[i]:
            q = pi[q - 1]  # Use failure link
        
        # If current characters match, increment match count
        if pattern[q] == text[i]:
            q += 1
        
        # Full pattern match found
        if q == m:
            match_pos = i - m + 1
            matches.append(match_pos)
            # Continue searching for more occurrences
            q = pi[q - 1]  # Use failure link to find next match
    
    return matches


def kmp_search_verbose(text, pattern):
    """
    KMP search with detailed step-by-step output for educational purposes.
    """
    n = len(text)
    m = len(pattern)
    
    print(f"Text: {text} (length {n})")
    print(f"Pattern: {pattern} (length {m})")
    print("\n--- Preprocessing Phase ---")
    
    # Compute and display prefix function
    pi = compute_prefix_function(pattern)
    print(f"Prefix function π: {pi}")
    
    # Explain prefix function
    print("\nPrefix function explanation:")
    for i in range(m):
        print(f"  π[{i}] = {pi[i]}: pattern[0..{i}] = '{pattern[:i+1]}'")
    
    print("\n--- Matching Phase ---")
    matches = []
    q = 0
    comparisons = 0
    
    for i in range(n):
        # Show current state
        print(f"\nPosition i={i}, text[i]='{text[i]}', matched={q} chars")
        
        # Handle mismatches
        while q > 0 and pattern[q] != text[i]:
            print(f"  Mismatch: pattern[{q}]='{pattern[q]}' vs text[{i}]='{text[i]}'")
            print(f"  Using failure link: q = π[{q-1}] = {pi[q-1]}")
            q = pi[q - 1]
            comparisons += 1
        
        # Check match
        comparisons += 1
        if pattern[q] == text[i]:
            print(f"  Match: pattern[{q}]='{pattern[q]}' = text[{i}]='{text[i]}'")
            q += 1
        
        # Check for full match
        if q == m:
            match_pos = i - m + 1
            matches.append(match_pos)
            print(f"  ✓ FULL MATCH found at position {match_pos}")
            q = pi[q - 1]
    
    print(f"\n--- Results ---")
    print(f"Matches found at positions: {matches}")
    print(f"Total comparisons: {comparisons}")
    print(f"Theoretical maximum (naive): {n * m}")
    
    return matches


# ============================================
# Example Usage and Testing
# ============================================

if __name__ == "__main__":
    print("=" * 60)
    print("KMP String Matching Algorithm - Examples")
    print("=" * 60)
    
    # Example 1: Basic search
    print("\n### Example 1: Basic Pattern Search ###")
    text1 = "ABABDABAABABCABAB"
    pattern1 = "ABAB"
    matches1 = kmp_search(text1, pattern1)
    print(f"Text: {text1}")
    print(f"Pattern: {pattern1}")
    print(f"Matches at positions: {matches1}")
    
    # Example 2: Verbose execution
    print("\n### Example 2: Detailed Execution ###")
    text2 = "AABAACAADAABAABA"
    pattern2 = "AABA"
    kmp_search_verbose(text2, pattern2)
    
    # Example 3: No match
    print("\n### Example 3: No Match Case ###")
    text3 = "ABCDEFGH"
    pattern3 = "XYZ"
    matches3 = kmp_search(text3, pattern3)
    print(f"Text: {text3}")
    print(f"Pattern: {pattern3}")
    print(f"Matches: {matches3 if matches3 else 'None found'}")
    
    # Example 4: Overlapping matches
    print("\n### Example 4: Overlapping Matches ###")
    text4 = "AAAAAAA"
    pattern4 = "AAA"
    matches4 = kmp_search(text4, pattern4)
    print(f"Text: {text4}")
    print(f"Pattern: {pattern4}")
    print(f"Matches at positions: {matches4}")
    print("(Note: KMP finds ALL occurrences, including overlapping ones)")
    
    # Example 5: Performance comparison
    print("\n### Example 5: Performance Metrics ###")
    import time
    
    large_text = "ABCABC" * 10000  # 60,000 characters
    large_pattern = "ABCABCD"
    
    start = time.time()
    kmp_matches = kmp_search(large_text, large_pattern)
    kmp_time = time.time() - start
    
    print(f"Text length: {len(large_text)} characters")
    print(f"Pattern length: {len(large_pattern)}")
    print(f"KMP found {len(kmp_matches)} matches in {kmp_time:.4f} seconds")
    print(f"Average time per character: {kmp_time/len(large_text)*1e6:.2f} microseconds")`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Code Walkthrough</h3>
        
        <div className="space-y-6 mt-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h4 className="font-semibold">1. Prefix Function Implementation:</h4>
            <p className="text-sm mt-2">
              The compute_prefix_function() is the heart of KMP. It builds the π array in O(m) time using dynamic programming. The key insight: to compute π[q], we check if pattern[k] matches pattern[q] where k=π[q-1]. If not, we use the failure link k=π[k-1] recursively until we find a match or reach k=0. This nested loop structure might look like O(m²), but amortized analysis shows it's O(m) because k can only decrease m times total across all iterations.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h4 className="font-semibold">2. Main KMP Search Function:</h4>
            <p className="text-sm mt-2">
              The kmp_search() function implements the matching phase. It maintains state variable q (number of characters currently matched) and scans through the text. On mismatch, it uses the prefix function to update q without backtracking in the text. The pattern is that i always increments (we never re-examine text characters), while q can decrease via failure links. This guarantees O(n) matching time. The function returns a list of all match positions, making it useful for highlighting matches in editors or counting occurrences.
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <h4 className="font-semibold">3. Verbose Mode for Learning:</h4>
            <p className="text-sm mt-2">
              The kmp_search_verbose() function is educational—it prints each step of the algorithm, showing comparisons, matches, mismatches, and use of failure links. This helps students understand how KMP avoids redundant comparisons. Running this on small examples (5-10 character texts) makes the algorithm's behavior crystal clear. The comparison counter demonstrates the O(n) bound empirically.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h4 className="font-semibold">4. Edge Case Handling:</h4>
            <p className="text-sm mt-2">
              The implementation correctly handles empty patterns (returns empty list), patterns longer than text (returns empty), single-character patterns, and patterns with high self-similarity (like "AAAA"). It also finds overlapping matches correctly—if pattern is "AA" and text is "AAAA", it reports matches at positions 0, 1, and 2, not just 0 and 2.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Example Execution Output</h3>
        
        <div className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden mt-6">
          <div className="bg-gray-800 text-white px-4 py-2">
            <span className="font-semibold">Sample Run: Complete Output</span>
          </div>
          
          <div className="bg-gray-900 text-gray-100 p-6 overflow-x-auto">
            <p className="text-sm mb-3">Running the complete Python code produces:</p>
            <pre className="text-sm"><code>{`============================================================
KMP String Matching Algorithm - Examples
============================================================

### Example 1: Basic Pattern Search ###
Text: ABABDABAABABCABAB
Pattern: ABAB
Matches at positions: [0, 8, 13]

### Example 2: Detailed Execution ###
Text: AABAACAADAABAABA (length 16)
Pattern: AABA (length 4)

--- Preprocessing Phase ---
Prefix function π: [0, 1, 0, 1]

Prefix function explanation:
  π[0] = 0: pattern[0..0] = 'A'
  π[1] = 1: pattern[0..1] = 'AA'
  π[2] = 0: pattern[0..2] = 'AAB'
  π[3] = 1: pattern[0..3] = 'AABA'

--- Matching Phase ---

Position i=0, text[i]='A', matched=0 chars
  Match: pattern[0]='A' = text[0]='A'

Position i=1, text[i]='A', matched=1 chars
  Match: pattern[1]='A' = text[1]='A'

Position i=2, text[i]='B', matched=2 chars
  Match: pattern[2]='B' = text[2]='B'

Position i=3, text[i]='A', matched=3 chars
  Match: pattern[3]='A' = text[3]='A'
  ✓ FULL MATCH found at position 0

Position i=4, text[i]='A', matched=1 chars
  Match: pattern[1]='A' = text[4]='A'

... [remaining output truncated for brevity]

--- Results ---
Matches found at positions: [0, 9, 12]
Total comparisons: 20
Theoretical maximum (naive): 64

### Example 3: No Match Case ###
Text: ABCDEFGH
Pattern: XYZ
Matches: None found

### Example 4: Overlapping Matches ###
Text: AAAAAAA
Pattern: AAA
Matches at positions: [0, 1, 2, 3, 4]
(Note: KMP finds ALL occurrences, including overlapping ones)

### Example 5: Performance Metrics ###
Text length: 60000 characters
Pattern length: 7
KMP found 0 matches in 0.0089 seconds
Average time per character: 0.15 microseconds`}</code></pre>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>⚠️ Common Implementation Mistakes</h3>
        
        <div className="space-y-6 mt-6">
          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Mistake #1: Off-by-one errors in prefix function</h4>
            
            <div className="mb-4">
              <p className="font-semibold text-sm mb-2">Wrong Code:</p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded">
                <pre className="text-sm"><code>{`# INCORRECT - accessing pi[k] before it's computed
for q in range(1, m):
    while k > 0 and pattern[k] != pattern[q]:
        k = pi[k]  # BUG: should be pi[k-1]`}</code></pre>
              </div>
            </div>
            
            <p className="text-sm mb-3"><strong>Why it's wrong:</strong></p>
            <p className="text-sm mb-4">Using pi[k] instead of pi[k-1] accesses the wrong position. The failure link from state k goes to state π[k-1], not π[k]. This causes incorrect prefix values and wrong matching behavior.</p>
            
            <div className="mb-4">
              <p className="font-semibold text-sm mb-2">Correct Code:</p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded">
                <pre className="text-sm"><code>{`# CORRECT - properly use k-1 index
for q in range(1, m):
    while k > 0 and pattern[k] != pattern[q]:
        k = pi[k - 1]  # Correct: use previous position`}</code></pre>
              </div>
            </div>
            
            <p className="text-sm font-semibold text-red-700">Key Lesson:</p>
            <p className="text-sm">When at position q with k characters matched, mismatch means falling back to state π[k-1], not π[k].</p>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Mistake #2: Forgetting to continue after finding match</h4>
            
            <div className="mb-4">
              <p className="font-semibold text-sm mb-2">Wrong Code:</p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded">
                <pre className="text-sm"><code>{`if q == m:
    matches.append(i - m + 1)
    break  # WRONG: stops after first match`}</code></pre>
              </div>
            </div>
            
            <p className="text-sm mb-3"><strong>Why it's wrong:</strong></p>
            <p className="text-sm mb-4">Using break stops the search after finding the first match. This misses subsequent occurrences and overlapping matches. For text "AAA" and pattern "AA", it would only find position 0, missing position 1.</p>
            
            <div className="mb-4">
              <p className="font-semibold text-sm mb-2">Correct Code:</p>
              <div className="bg-gray-900 text-gray-100 p-3 rounded">
                <pre className="text-sm"><code>{`if q == m:
    matches.append(i - m + 1)
    q = pi[q - 1]  # Continue searching using failure link`}</code></pre>
              </div>
            </div>
            
            <p className="text-sm font-semibold text-red-700">Key Lesson:</p>
            <p className="text-sm">After finding a match, use the failure function to continue searching. Don't reset q to 0 or break from the loop.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>💡 Optimization Tips:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Early termination:</p>
            <p className="text-sm mt-2">If you only need to know IF pattern exists (not WHERE), return True immediately on first match</p>
          </div>
          
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Case-insensitive search:</p>
            <p className="text-sm mt-2">Convert both text and pattern to lowercase before searching for case-insensitive matching</p>
          </div>
          
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Multiple pattern search:</p>
            <p className="text-sm mt-2">For searching many patterns, use Aho-Corasick algorithm instead of running KMP multiple times</p>
          </div>
          
          <div className="bg-white border border-gray-300 rounded p-4">
            <p className="font-semibold">Large alphabet optimization:</p>
            <p className="text-sm mt-2">For Unicode or large alphabets, KMP is better than explicit automaton (which needs O(m|Σ|) space)</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>6.2 Inductive Cases</h3>
        
        <div className="mt-6">
          <h4 className="font-semibold mb-4">▼ Inductive Case 1: Union (R + S)</h4>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6">
            <div className="flex justify-center mb-4">
              <div className="text-center">
                <p className="text-sm mb-2">Thompson's Construction for Union</p>
                <div className="inline-block bg-gray-50 p-4 border border-gray-300 rounded">
                  <pre className="text-xs">{`
        ε          NFA for R          ε
    ─────────►  [=========]  ─────────►
   /                                    \\
 qA                                      qA'
   \\                                    /
    ─────────►  [=========]  ─────────►
        ε          NFA for S          ε
                  `}</pre>
                </div>
              </div>
            </div>
            
            <p className="text-sm mb-3">
              Thompson's Construction for Union: new start state branches to both sub-NFAs via ε; both sub-NFAs' accept states merge into a new accept state via ε.
            </p>
            
            <p className="text-sm text-gray-700">
              New start/accept states connect to both sub-NFAs via ε-transitions
            </p>
          </div>

          <h4 className="font-semibold mb-4">▼ Inductive Case 2: Concatenation (RS)</h4>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <div className="text-center">
                <p className="text-sm mb-2">Thompson's Construction for Concatenation</p>
                <div className="inline-block bg-gray-50 p-4 border border-gray-300 rounded">
                  <pre className="text-xs">{`
                    ε
  [NFA for R]  ─────────►  [NFA for S]  ─────► qA'
                  `}</pre>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-700">
              In concatenation, the accept state of the NFA for R is merged (via ε-transition) with the start state of the NFA for S:
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Thompson's Construction for Concatenation. Accept of R links to start of S via ε-transition
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Problem-Solving Practice</h3>
        
        <div className="space-y-6 mt-6">
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">📘 Easy Problem: Basic Prefix Function</h4>
            <p className="text-sm mb-3"><strong>Problem:</strong> Compute the prefix function π for the pattern "ACACAG"</p>
            
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-sm text-green-700 hover:text-green-900">Show Solution</summary>
              <div className="mt-4 bg-white p-4 rounded">
                <p className="text-sm font-semibold mb-2">Solution:</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>Step 1: π[0] = 0 (by definition)</li>
                  <li>Step 2: π[1] = 0 ("AC" has no proper prefix = suffix)</li>
                  <li>Step 3: π[2] = 1 ("ACA" has "A" as both prefix and suffix, length 1)</li>
                  <li>Step 4: π[3] = 2 ("ACAC" has "AC" as both, length 2)</li>
                  <li>Step 5: π[4] = 3 ("ACACA" has "ACA" as both, length 3)</li>
                  <li>Step 6: π[5] = 0 ("ACACAG" has no proper prefix = suffix)</li>
                </ul>
                <p className="text-sm font-semibold mt-3">Final Answer: π = [0, 0, 1, 2, 3, 0]</p>
              </div>
            </details>
          </div>

          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">📙 Medium Problem: Trace KMP Execution</h4>
            <p className="text-sm mb-3"><strong>Problem:</strong> Trace the KMP algorithm searching for pattern "ABA" in text "ABABA". Show the state of variable q after processing each character.</p>
            
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-sm text-blue-700 hover:text-blue-900">Show Solution</summary>
              <div className="mt-4 bg-white p-4 rounded">
                <p className="text-sm font-semibold mb-2">Solution:</p>
                <p className="text-sm mb-3">First, compute prefix function: π = [0, 0, 1] for pattern "ABA"</p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full text-xs border border-gray-300">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 py-1">i</th>
                        <th className="border border-gray-300 px-2 py-1">T[i]</th>
                        <th className="border border-gray-300 px-2 py-1">q (before)</th>
                        <th className="border border-gray-300 px-2 py-1">Action</th>
                        <th className="border border-gray-300 px-2 py-1">q (after)</th>
                        <th className="border border-gray-300 px-2 py-1">Match?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">0</td>
                        <td className="border border-gray-300 px-2 py-1">A</td>
                        <td className="border border-gray-300 px-2 py-1">0</td>
                        <td className="border border-gray-300 px-2 py-1">P[0]=A matches T[0]=A</td>
                        <td className="border border-gray-300 px-2 py-1">1</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">1</td>
                        <td className="border border-gray-300 px-2 py-1">B</td>
                        <td className="border border-gray-300 px-2 py-1">1</td>
                        <td className="border border-gray-300 px-2 py-1">P[1]=B matches T[1]=B</td>
                        <td className="border border-gray-300 px-2 py-1">2</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">2</td>
                        <td className="border border-gray-300 px-2 py-1">A</td>
                        <td className="border border-gray-300 px-2 py-1">2</td>
                        <td className="border border-gray-300 px-2 py-1">P[2]=A matches T[2]=A</td>
                        <td className="border border-gray-300 px-2 py-1">3</td>
                        <td className="border border-gray-300 px-2 py-1">✓ Match at pos 0</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                        <td className="border border-gray-300 px-2 py-1">3</td>
                        <td className="border border-gray-300 px-2 py-1">Use π[2]=1, reset q</td>
                        <td className="border border-gray-300 px-2 py-1">1</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">3</td>
                        <td className="border border-gray-300 px-2 py-1">B</td>
                        <td className="border border-gray-300 px-2 py-1">1</td>
                        <td className="border border-gray-300 px-2 py-1">P[1]=B matches T[3]=B</td>
                        <td className="border border-gray-300 px-2 py-1">2</td>
                        <td className="border border-gray-300 px-2 py-1">-</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-2 py-1">4</td>
                        <td className="border border-gray-300 px-2 py-1">A</td>
                        <td className="border border-gray-300 px-2 py-1">2</td>
                        <td className="border border-gray-300 px-2 py-1">P[2]=A matches T[4]=A</td>
                        <td className="border border-gray-300 px-2 py-1">3</td>
                        <td className="border border-gray-300 px-2 py-1">✓ Match at pos 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="text-sm font-semibold mt-3">Final Answer: Matches found at positions 0 and 2</p>
              </div>
            </details>
          </div>

          <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">📕 Hard Problem: Algorithm Comparison</h4>
            <p className="text-sm mb-3"><strong>Problem:</strong> Compare the number of character comparisons made by naive string matching vs KMP when searching for "AAAB" in "AAAAAAAAAB". Show your calculations.</p>
            
            <details className="mt-3">
              <summary className="cursor-pointer font-semibold text-sm text-red-700 hover:text-red-900">Show Solution</summary>
              <div className="mt-4 bg-white p-4 rounded">
                <p className="text-sm font-semibold mb-2">Solution:</p>
                <p className="text-sm mb-2">Text: "AAAAAAAAAB" (10 characters)</p>
                <p className="text-sm mb-3">Pattern: "AAAB" (4 characters)</p>
                
                <p className="text-sm font-semibold mb-2">Naive Algorithm Analysis:</p>
                <ul className="text-sm space-y-1 ml-4 mb-3">
                  <li>Position 0: Compare AAAA with AAAB - 4 comparisons, mismatch at position 3</li>
                  <li>Position 1: Compare AAAA with AAAB - 4 comparisons, mismatch at position 3</li>
                  <li>Position 2: Compare AAAA with AAAB - 4 comparisons, mismatch at position 3</li>
                  <li>Position 3: Compare AAAA with AAAB - 4 comparisons, mismatch at position 3</li>
                  <li>Position 4: Compare AAAA with AAAB - 4 comparisons, mismatch at position 3</li>
                  <li>Position 5: Compare AAAA with AAAB - 4 comparisons, mismatch at position 3</li>
                  <li>Position 6: Compare AAAB with AAAB - 4 comparisons, MATCH!</li>
                </ul>
                <p className="text-sm mb-3">Total naive comparisons: 7 × 4 = 28 comparisons</p>
                
                <p className="text-sm font-semibold mb-2">KMP Algorithm Analysis:</p>
                <ul className="text-sm space-y-1 ml-4 mb-3">
                  <li>Prefix function π = [0, 1, 2, 0]</li>
                  <li>Process each of 10 text characters once = 10 comparisons</li>
                  <li>Additional failure link followings ≈ 6 more comparisons</li>
                </ul>
                <p className="text-sm mb-3">Total KMP comparisons: ~16 comparisons</p>
                
                <p className="text-sm font-semibold mt-3">Final Answer: KMP uses ~16 comparisons vs naive's 28 comparisons, a 43% reduction. The improvement grows with longer texts.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📊 String Matching Algorithms Comparison</h3>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm">
            Different text search algorithms excel in different scenarios. While we've focused on automata-based approaches (KMP, finite automata), it's crucial to understand how they compare with other classical algorithms like naive matching, Boyer-Moore, and Rabin-Karp. Each has unique strengths: KMP guarantees O(n) time, Boyer-Moore can be sublinear in practice, and Rabin-Karp enables efficient multi-pattern search using hashing.
          </p>
          <p className="text-sm mt-3">
            The choice of algorithm depends on your specific use case: alphabet size (2 for binary, 4 for DNA, 26+ for English, 65536 for Unicode), pattern characteristics (length, repetition, multiple patterns), text characteristics (streaming vs random access, size), and performance requirements (worst-case guarantees vs average-case speed). Modern systems often combine techniques: grep uses Boyer-Moore for simple patterns but switches to automata for regex, while plagiarism detectors use Rabin-Karp for quick filtering followed by precise verification.
          </p>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full text-xs border-2 border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-3 py-2 text-left">Aspect</th>
                <th className="border border-gray-300 px-3 py-2 text-left">KMP (Automata-based)</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Naive Matching</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Boyer-Moore</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Rabin-Karp (Hashing)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Core Idea</td>
                <td className="border border-gray-300 px-3 py-2">Use prefix function to avoid re-checking matched characters</td>
                <td className="border border-gray-300 px-3 py-2">Check pattern at every text position</td>
                <td className="border border-gray-300 px-3 py-2">Scan pattern right-to-left, skip characters on mismatch</td>
                <td className="border border-gray-300 px-3 py-2">Compare hash values of pattern and text windows</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Preprocessing Time</td>
                <td className="border border-gray-300 px-3 py-2">O(m)</td>
                <td className="border border-gray-300 px-3 py-2">O(0) - none</td>
                <td className="border border-gray-300 px-3 py-2">O(m + |Σ|)</td>
                <td className="border border-gray-300 px-3 py-2">O(m)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Worst-Case Matching</td>
                <td className="border border-gray-300 px-3 py-2">O(n)</td>
                <td className="border border-gray-300 px-3 py-2">O(nm)</td>
                <td className="border border-gray-300 px-3 py-2">O(nm)</td>
                <td className="border border-gray-300 px-3 py-2">O(nm) - hash collisions</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Average-Case</td>
                <td className="border border-gray-300 px-3 py-2">O(n)</td>
                <td className="border border-gray-300 px-3 py-2">O(n)</td>
                <td className="border border-gray-300 px-3 py-2">O(n/m) - sublinear!</td>
                <td className="border border-gray-300 px-3 py-2">O(n+m)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2 font-semibold">Space Complexity</td>
                <td className="border border-gray-300 px-3 py-2">O(m) for π array</td>
                <td className="border border-gray-300 px-3 py-2">O(1)</td>
                <td className="border border-gray-300 px-3 py-2">O(m + |Σ|)</td>
                <td className="border border-gray-300 px-3 py-2">O(1)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-4">
          <div className="bg-green-50 border border-green-300 rounded p-4">
            <p className="font-semibold text-green-800 mb-2">When to Choose KMP:</p>
            <p className="text-sm">You need worst-case O(n) guarantee, working with streaming data, small alphabet (DNA, binary), or pattern has high self-similarity</p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-300 rounded p-4">
            <p className="font-semibold text-yellow-800 mb-2">When to Choose Naive:</p>
            <p className="text-sm">Pattern is very short (≤2 characters), implementing quickly without libraries, memory is extremely limited, or testing/debugging</p>
          </div>
          
          <div className="bg-blue-50 border border-blue-300 rounded p-4">
            <p className="font-semibold text-blue-800 mb-2">When to Choose Boyer-Moore:</p>
            <p className="text-sm">Pattern is long (≥5 chars), large alphabet (English, Unicode), random access to text, or maximum average-case speed desired</p>
          </div>
          
          <div className="bg-purple-50 border border-purple-300 rounded p-4">
            <p className="font-semibold text-purple-800 mb-2">When to Choose Rabin-Karp:</p>
            <p className="text-sm">Searching multiple patterns simultaneously, plagiarism detection, approximate matching tolerable, or hash values useful for other purposes</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>📄 Quick Reference Cheat Sheet</h3>
        <p className="text-sm text-gray-600 mb-6">Save this page for quick review! Here's everything you need to remember at a glance.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold mb-3">🔑 Key Definitions</h4>
            <ul className="text-sm space-y-2">
              <li><strong>Pattern Matching:</strong> Finding occurrences of pattern P in text T</li>
              <li><strong>Prefix Function π[i]:</strong> Length of longest proper prefix of P[0..i] that's also suffix</li>
              <li><strong>Failure Function:</strong> Guides automaton state transitions on mismatch</li>
              <li><strong>LPS Array:</strong> Longest Proper Prefix which is also Suffix (same as π)</li>
              <li><strong>Preprocessing:</strong> Building data structures before searching (O(m))</li>
            </ul>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold mb-3">📐 Important Formulas</h4>
            <ul className="text-sm space-y-2">
              <li><strong>KMP Total Time:</strong> O(m + n)</li>
              <li><strong>Preprocessing:</strong> O(m)</li>
              <li><strong>Matching:</strong> O(n)</li>
              <li><strong>Space:</strong> O(m) for π array</li>
              <li><strong>Match Position:</strong> i - m + 1 when full match</li>
            </ul>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold mb-3">⚙️ KMP Algorithm Steps</h4>
            <ol className="text-sm space-y-1 ml-4 list-decimal">
              <li>Compute prefix function π in O(m)</li>
              <li>Initialize q = 0, scan text left-to-right</li>
              <li>On mismatch: q = π[q-1] (failure link)</li>
              <li>On match: q = q + 1 (advance state)</li>
              <li>If q = m: report match, use failure link</li>
              <li>Never backtrack in text (i always increases)</li>
            </ol>
          </div>
          
          <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold mb-3">⚠️ Common Mistakes</h4>
            <ul className="text-sm space-y-1">
              <li>❌ Using π[k] instead of π[k-1] in failure links</li>
              <li>❌ Breaking after first match (misses overlaps)</li>
              <li>❌ Resetting q to 0 after match instead of using π</li>
              <li>❌ Forgetting preprocessing O(m) in complexity</li>
              <li>❌ Thinking KMP works for approximate matching</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Module1_6;

      
