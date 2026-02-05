'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const unitQuiz = [
    {
      question: "What is an alphabet in formal language theory?",
      options: [
        "A set of letters from A to Z",
        "A finite non-empty set of symbols",
        "A collection of words",
        "A type of grammar"
      ],
      correctAnswer: 1,
      explanation: "An alphabet (Sigma) is a finite non-empty set of symbols that serves as the basic building blocks for constructing strings and languages."
    },
    {
      question: "What is the length of the empty string (epsilon)?",
      options: ["1", "0", "Undefined", "Infinity"],
      correctAnswer: 1,
      explanation: "The empty string epsilon has length 0, denoted as |epsilon| = 0. It is the unique string containing no symbols."
    },
    {
      question: "What is the result of L* (Kleene star) when L = {a}?",
      options: [
        "Only {a}",
        "{epsilon, a}",
        "{epsilon, a, aa, aaa, ...}",
        "Empty set"
      ],
      correctAnswer: 2,
      explanation: "Kleene star L* represents zero or more concatenations of strings from L, resulting in {epsilon, a, aa, aaa, aaaa, ...}."
    },
    {
      question: "In a DFA, how many next states can exist for a given state and input symbol?",
      options: ["Zero", "Exactly one", "One or more", "Any number"],
      correctAnswer: 1,
      explanation: "In a Deterministic Finite Automaton (DFA), the transition function delta: Q × Sigma → Q maps each (state, symbol) pair to exactly one next state."
    },
    {
      question: "What is the main difference between DFA and NFA?",
      options: [
        "DFA is faster than NFA",
        "NFA can have multiple transitions for same input, DFA cannot",
        "DFA accepts more languages than NFA",
        "NFA requires more states than DFA"
      ],
      correctAnswer: 1,
      explanation: "NFA allows multiple transitions (including epsilon transitions) for the same state-symbol pair, while DFA requires exactly one transition. However, they are equivalent in expressive power."
    },
    {
      question: "What does a double circle represent in a transition diagram?",
      options: [
        "Start state",
        "Accept/Final state",
        "Intermediate state",
        "Error state"
      ],
      correctAnswer: 1,
      explanation: "In transition diagrams, double circles denote accepting or final states. A string is accepted if processing ends in one of these states."
    },
    {
      question: "What is the concatenation of L1 = {a, b} and L2 = {1, 2}?",
      options: [
        "{a, b, 1, 2}",
        "{a1, a2, b1, b2}",
        "{ab, 12}",
        "{a, b, ab, 1, 2, 12}"
      ],
      correctAnswer: 1,
      explanation: "Concatenation L1L2 creates all strings formed by joining each string from L1 with each string from L2: {a1, a2, b1, b2}."
    },
    {
      question: "Which component is NOT part of the 5-tuple definition of a finite automaton?",
      options: [
        "Set of states (Q)",
        "Transition function (delta)",
        "Output alphabet",
        "Initial state (q0)"
      ],
      correctAnswer: 2,
      explanation: "A finite automaton is defined as M = (Q, Sigma, delta, q0, F). It does not have an output alphabet - it only accepts or rejects strings."
    }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.1</div>
              <div className="lesson-title-main">
                <h1>Alphabets and Strings</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Foundational Mathematical Framework</h3>
              <p>Formal languages constitute the mathematical foundation of theoretical computer science, providing rigorous models for computation, communication, and information processing. These mathematical structures enable us to analyze computational complexity, design efficient algorithms, and understand the fundamental limits of computation.</p>
              
              <div className="theory-box">
                <h5>Mathematical Rigor in Computer Science</h5>
                <p>The study of formal languages bridges pure mathematics and practical computing:</p>
                <ul>
                  <li><strong>Computational Models:</strong> Abstract machines for problem-solving and algorithm analysis</li>
                  <li><strong>Language Hierarchies:</strong> Classification of computational complexity classes</li>
                  <li><strong>Decidability Theory:</strong> Fundamental limits of algorithmic computation</li>
                  <li><strong>Complexity Analysis:</strong> Resource requirements and efficiency bounds</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Introduction to Formal Languages</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/O3NU5dLDU2Q?si=vQuc-Fbc6DysYWRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{width: '400px', height: '225px'}}></iframe>
                </div>
              </div>

              <h4>Fundamental Mathematical Definitions</h4>
              <div className="definition-box">
                <h6>Core Concepts with Formal Notation</h6>
                <ul>
                  <li><strong>Symbol:</strong> An indivisible atomic unit of information from a finite set</li>
                  <li><strong>Alphabet (Sigma):</strong> A finite non-empty set of symbols</li>
                  <li><strong>String/Word:</strong> A finite sequence of symbols from an alphabet</li>
                  <li><strong>Empty String (epsilon):</strong> The unique string of length zero</li>
                  <li><strong>String Length (|w|):</strong> Number of symbols in string w</li>
                  <li><strong>Language (L):</strong> Any subset of strings over alphabet Sigma*</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Symbols and Alphabets" className="movie-poster" />
                  <h6>Symbols & Alphabets</h6>
                  <p>Basic building blocks of formal languages</p>
                </div>
                <div className="movie-card">
                  <img src="https://i.pinimg.com/736x/98/7e/e3/987ee35bb4c73a4bd91d94a597d142d1.jpg" alt="Strings and Words" className="movie-poster" />
                  <h6>Strings & Words</h6>
                  <p>Sequences of symbols forming meaningful units</p>
                </div>
                <div className="movie-card">
                  <img src="https://prepwithharshita.com/wp-content/uploads/2024/01/Structure-of-Language.png" alt="Formal Languages" className="movie-poster" />
                  <h6>Formal Languages</h6>
                  <p>Sets of strings with defined structure</p>
                </div>
              </div>

              <div className="formal-analysis">
                <h5>Mathematical Foundation and Notation</h5>
                <div className="notation-grid">
                  <div className="notation-item">
                    <h6>Symbol (s)</h6>
                    <p><strong>Definition:</strong> An indivisible atomic unit from a finite set</p>
                    <p><strong>Examples:</strong> 0, 1, a, b, +, -, (, )</p>
                    <p><strong>Properties:</strong> Atomic, indivisible, finite cardinality</p>
                  </div>
                  <div className="notation-item">
                    <h6>Alphabet (Sigma)</h6>
                    <p><strong>Definition:</strong> Sigma = s1, s2, sn where n greater than or equal to 1</p>
                    <p><strong>Examples:</strong> Sigma = 0,1 or Sigma = a,b,c or Sigma = +,-,*,/</p>
                    <p><strong>Constraints:</strong> Finite, non-empty, well-defined</p>
                  </div>
                  <div className="notation-item">
                    <h6>String (w)</h6>
                    <p><strong>Definition:</strong> w = s1s2sk where si in Sigma</p>
                    <p><strong>Length:</strong> |w| = k (number of symbols)</p>
                    <p><strong>Empty String:</strong> epsilon with |epsilon| = 0</p>
                  </div>
                  <div className="notation-item">
                    <h6>Language (L)</h6>
                    <p><strong>Definition:</strong> L subset of Sigma* (subset of all possible strings)</p>
                    <p><strong>Cardinality:</strong> |L| can be finite or infinite</p>
                    <p><strong>Examples:</strong> L = epsilon or L = Sigma* or L = empty set</p>
                  </div>
                </div>
              </div>

              <h4>String Operations and Properties</h4>
              <div className="definition-box">
                <h6>Fundamental String Operations</h6>
                <ul>
                  <li><strong>Concatenation:</strong> w1w2 = joining strings w1 and w2</li>
                  <li><strong>Length:</strong> |w| = number of symbols in string w</li>
                  <li><strong>Reverse:</strong> wR = string w written backwards</li>
                  <li><strong>Substring:</strong> Any contiguous sequence within a string</li>
                  <li><strong>Prefix:</strong> Initial substring of a string</li>
                  <li><strong>Suffix:</strong> Final substring of a string</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Practical Examples and Applications</h5>
                <div className="example-details">
                  <h6>Binary Alphabet Example</h6>
                  <p><strong>Alphabet:</strong> Sigma = {0, 1}</p>
                  <p><strong>Strings:</strong> epsilon, 0, 1, 00, 01, 10, 11, 000, 001, and so on</p>
                  <p><strong>Language:</strong> L = w in Sigma* where w has equal 0s and 1s</p>
                  
                  <h6>Programming Language Tokens</h6>
                  <p><strong>Alphabet:</strong> Sigma = a-z, A-Z, 0-9, +, -, *, /, =, etc</p>
                  <p><strong>Identifiers:</strong> L = w where w starts with letter, followed by letters/digits</p>
                  <p><strong>Numbers:</strong> L = w where w is sequence of digits</p>
                  
                  <h6>Natural Language Processing</h6>
                  <p><strong>Alphabet:</strong> Sigma = a-z, space, punctuation</p>
                  <p><strong>Words:</strong> Sequences of letters</p>
                  <p><strong>Sentences:</strong> Structured sequences following grammar rules</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Language Operations →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.2</div>
              <div className="lesson-title-main">
                <h1>Language Operations</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Algebraic Structure of Language Operations</h3>
              <p>Language operations form an algebraic system with well-defined properties, closure conditions, and hierarchical relationships fundamental to formal language theory. These operations enable the construction of complex languages from simpler components and provide the mathematical foundation for language recognition and generation.</p>
              
              <div className="theory-box">
                <h5>Algebraic Properties and Closure</h5>
                <p>The set of all languages over an alphabet forms various algebraic structures:</p>
                <ul>
                  <li><strong>Boolean Algebra:</strong> Under union, intersection, and complement operations</li>
                  <li><strong>Monoid Structure:</strong> Under concatenation with empty string as identity element</li>
                  <li><strong>Kleene Algebra:</strong> Complete algebraic system with star operation</li>
                  <li><strong>Lattice Properties:</strong> Partial ordering under language inclusion relation</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Language Operations and Closure Properties</h6>
                <div className="video-container">
                  <iframe width="560" height="315" style={{width: '400px', height: '225px'}} src="https://www.youtube.com/embed/UoFrOT7T7ns?si=LXp350-XZILA4lca" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>

              <h4>Fundamental Language Operations</h4>
              <div className="definition-box">
                <h6>Set-Theoretic Operations</h6>
                <ul>
                  <li><strong>Union (L1 U L2):</strong> All strings that belong to either language</li>
                  <li><strong>Intersection (L1 ∩ L2):</strong> All strings that belong to both languages</li>
                  <li><strong>Complement (L'):</strong> All strings that do not belong to language L</li>
                  <li><strong>Difference (L1 - L2):</strong> All strings in L1 but not in L2</li>
                  <li><strong>Symmetric Difference:</strong> Strings in either language but not both</li>
                </ul>
              </div>
              
              <div className="definition-box">
                <h6>Concatenation-Based Operations</h6>
                <ul>
                  <li><strong>Concatenation (L1L2):</strong> All strings formed by joining strings from two languages</li>
                  <li><strong>Kleene Star (L*):</strong> Union of language powers Li for i from 0 to infinity</li>
                  <li><strong>Kleene Plus (L+):</strong> Union of language powers Li for i from 1 to infinity</li>
                  <li><strong>Reversal (LR):</strong> All reversed strings from language L</li>
                  <li><strong>Quotient (L1/L2):</strong> Strings x such that xy in L1 for some y in L2</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Union and Intersection" className="movie-poster" />
                  <h6>Set Operations</h6>
                  <p>Union, intersection, and complement</p>
                </div>
                <div className="movie-card">
                  <img src="https://i.pinimg.com/1200x/cf/ba/46/cfba46adbea0a91576390cdedf5c3858.jpg" alt="Concatenation" className="movie-poster" />
                  <h6>Concatenation</h6>
                  <p>Joining languages and strings</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAACeCAMAAABzT/1mAAABvFBMVEX///+Xl5f8/PwAAACTk5P///zx8fGLi4v09PT39/ft7e2CgoKHh4fc3Nz5+fmOjo6cnJzOzs7l5eXV1dW4uLioqKi+vr55eXnHx8ebm5vh4eGxsbGkpKRzc3PR0dGysrJoaGjb49sqcSphYWF7gxr/9tz///cAWwDx///12qA3dzfp7ulRUVEATwD/5rKJqIn//u+5qUhrjEjLwH4AZADb9P/f0JdcXFx/oX0aaxr/8swAXACh1+tIgEjp9vb18+jn4sdtkF1opotQgjkgeUlnfQBKf0SMxM49pq2n0M3h6Nfe7OnEs2pbtMba0qRTsLIAgX86bwAAckJYiFZQnpmfo13B6vmIizK10cJPeRZtijvt6MlYilmMvsAHZCbMw4REiWMmiHWwsIO24+bKyaAAdmtkkGQeYi2Im0RwsraBj1FZlYmhpViw3Olagj2em1qiv64AclZ3rqAhZBxVbgCyv4JpeyKRzMiVkzkAkZhjpKEHc1lPlE+zsFgjbgAzMzMdHR0APQBLn2+RjAAAVCk0YwCooTb//tlBQUHEzb3FwaEAfYF1uc8AVBx+jS08cB2euYur4v2WvblXdAB/ErLRAAAQcUlEQVR4nO2diXvTRhbAR7ItyZIPWZdlW06c2HHuEMhBbAKBNiwlpYYSAoGkISxpWgpsgYU2C0uPpRSyB+y2//DOyIdkW7It2Y7N1/l9OWxJHo/fvPfmaWY8DwAMBoPBYDAYDAaDwWAwGAwG8wHCsBTZ6zp8sAQJmuZo2qv6e12TDxGRkwX9AatwSouvWRmCnAG+teJ/u6tsz5g5e279o5Yu7E9kImQ8keiQ/ZUmxkfX1z9eXZg9v7q+/qcLdlfNfdJCUfnRi2uZv7X0rp3Hh9r/05I+fFp9rrr19WdZdMlk1VXeapWLR1sS4DiSzKXPZk8slA5kKxVYKSpk4Qsov8srQ02LghXzz11p5U27wMjn2+vrP1wAx6+ur69fqz63cd387AbSktlzC9mhE5sLxuGEVHm4on/8ON3K+45fGRo6e3N59tbFkv1undveXv8C1ejm9voOfOfbl+Hv8Prn95oV5duYOP2+Z/LbHYMWcAccXy7XRvdI6FH+eUUX/nwXyu/7NSifwnOwN2/yNmzUKGv8S/2fMtjC+47v7N8cvQhm3+3ub+/fNZ/xTfpWzi8XJt7vTNyb+xt489VYk6IW70yO9U7/Tl8cWvv6Gjh+r2Q+2W+2t7fvo1MPHoJCbv8vd2D9v4WfcGNi/f1DKO8zZzcfGa9P6pZXNPzxK7P6owDT/H2h/c5+fQEY9rv18cTEBNK12ROn9z9fzk7OXZs8MwcPnL/eqBzI7cebezd7Jr/3+yemn4yB46v7+7r5VPCdX4CuxXd2eOHZRG5i4u7BBbAI5XrjofkifwBkv9s9N6/3AOM7H+/n/g2A2kInPA4dfv6v103+bxKC9Pr2NTDydBn5Pvh7BeQfN9M/37P9J1v3W/7EnQXZ7xz0exX7zX4H9QDpnO/mAlSK0/vDCyuT33w/mYU6iC4+qJJfQgRb0Mwv6d3fOHRbW8MLgGrBAyL5gUt3sud3JiaGn5vPbH0+MQwdMshCYc6tfjz/fWc+aJeA9giymQuG/ADSA9TD+qDhPPhCF4huvwf3kGr4vquSHwd/t/aWfijKDxpR9h28NNz8TgRJB7o6cqWsdgYrk2eypSPZsUYRYFBNhLlAmPB6iTAM32VVPPo7oJFVKJ6ZnYXjueHh4RdVprIB/d/88HAO+h8GxiTf/P396l1d3iZS6MXHNjeq5edlu15vUebCckRgK8FSiGIHZC+nRbr+1lX49GBuMpQtq51B/hrShRBTqiLjm4SPFqvDiRQAL2FPUAxfx0evg8JXsD1iQncrPeDlEoLlraKflQK02ic34hsP6w7N7i9UPU9B8/0ht/rsS2Tb41dv5a6iWKSr+kfJUalh+ZTC8d03gBbw1Tdx7SHUU2SpkI8BKx/Bkz5KV9Zw9+ok0OFg86viXq6Fq/oASS0/Khg3sWzX5MfQrao2w3N9oYPNSJYf+Er/YewsdcuHa5wDx0rR3j7xg40IULUHAiTXnXoHU6KzF8STqCH7Ww3JqZoDUY+n1THAxgwkZDmhGJ8+5kKdNBrIqeJDSkHlRfpOJUXd2QmSLMuDSD+g/Dzt+24lSSeCrF9Q+WTR4zHJATflCCc9P0KPQvHJmBJnqKAUTrUyunGUSIRAJzVV8LMwpo2qJ3/S2rYYJaUaT6hw1A+C6Vo/0Rqq3pq02W8OpOQ2q9dZmKmYKahRptruPEKpGgdAJQm3PbrknfJMJZH0SFXmeVn3oJGTLQwQHRVyFLkURtF4bTCuH+DaK5A6Wa9qMc19eYoXIKULKEHSP5BIorCGnOqbToVDw89SmlAFQEW0VAwKM55qbQrEGiZldVTh3ZYnQWslk4bJ+jkC/k33iQA5aBDslOGtBGR7TKqNXi5tbVu8y05dDKAGrZJWBFWvNmzoDTLUPjVZfQg2rxC1ub45MbsYL+rKZ5HQuwjJmoPUVPW8Q89AlVBrXbsK74kVyfL6Fkq0HXoVXHUhcgSEknXWgOpN9MENMjQEtrZxofAS0K5d9nBhe7/U4JQtDOzLaAtByYrpzrNnxGPWfiQgANFdjBWqUr/8z+ZZ8biLIhVVr2Q9J2F79DyICYRM4y/AsBIK+uyAqy5EVc3PXv5j2jTaSLqIi6CMiGLo7MuMQnbL5UHBBnseRkMLSFeezPxsrLWAdZZduRfCHPpln/7vlXllB+HYgP00IEsa7cugKamDyjQnbIxe9yCCBiii8uzBP76qKIuoADHhtDgkcc4cOc78Mnb7S9Nz58NiAg/ipcBRlx8o/FKe4Un11gEi5YefR6nY28jr65mKsrBhwHqdFsl5wmSV+/v1E/Bm2jSFEFFrX9K0lhJqSp2i/Iz2iBbnDntF0DMVTAjAGCpYfDF2qWIcUA6hxuGGRtTCT3k8PwZMl7yZXvaHXpkWYAmO9S+oArH0It+N3aWlc6cqK0Vk/adrBL11H9BMjPN4PG9JYNxVZe6B/GhlpUVC/3EG53krmoW+eCoHMa1+GWhP/+4fHh7eqqyQ4nqtfx4eKp9W9vdQdsxK5nL5dBiQjsNdmiCBeeT61Wfwz+xrowdRHOtfXKv0skX7hTpdOpXqrf8TT8bBoAgGy3dbc7nh3PD78lIVKox+HIJEFzb63/y0rs0vjR6EdzyrTNGAKdWjKL+R0bL8kr2VH/qwMEYWSuNKvvPF2pW8PWx0d9GVZNz9/vOO/i8/UXEKgfrrm0GT5SbxZe5NTk5ulFt4QAKs6yGdTsHpZoCYKSpLObzS4kBxONdThCXcnbMjIYJIcbzetzEBuV9efJLUK9ljYAzAFyvxz+LysUIxvg9xra0BtKDBfbPmIiJHURRnMfIv8pWm7yGqBEirWsgRIFjedTbH/r6ZctVdEnEQr7d7Mm2e+e8dKSjD+pH1IGx0r9sVRLarBtyNN6HxMLXO0aUY64Y/aiJQeLHadhS4on24g4laDzwoLrwfKQgsj26UiKoyqShsimRfDOCjVTre6glVEWoQ09p3GCwZsAx84lHa+ZBs6K3H8xNagyBGTb2ZgkayY52Z42+bFHTOksnm/Bq67+Xa6dpUul4DI1CnFc6xx9I8nqT+/RRGCyhxWFU2KOsTXl634+OdhkwG0XBBOCL4AcmKfGAADfq2NzQuJmvFrzcKCEmc4mRUMcJJSbQUQkPfj2IGeJrw0nKQRMP3fdB3lOGQ+bIqQRPh8CDqNcRou4GV31vV/SjR8o1bSAnILXZMbIKT/LovRi5FMvkTlq9b89RTlKrWjNNaB5boCAQniRQJ/EKECFQpXZAIqE0/PqPS3uJa8tJL4XM17ocngkqglfWXR0poMKANCCFkv4MdWznLiLLXS3hjSp2+Mao3IDWQQRyKSKkTMavysDivJvaV7pURJALVLhE8mu//MqIWDiQidX5CiAwGaL4/RdRvUILCewMczcsJSUnIfJgLQG2NY9k5wk+xrABhWcrfd0sjMX8EZjebfcEQ04j8L1h+7ZB/vHa42etKfMDkc7ljN//V61p8uOTRrEtmufmFGEvyL+Cfl5ebXoexRv+C/69Nd+nA2JAf/Xd5shjjgvzO1z//527z6zAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwmCMnPwz5iPQ9gP9yFmusCs/rj2EMZq74J1cOPvO9e1iXJkSncK3+GMZgBu1g9wDKr7w+bet1LjePlM737Ifc/bHC7q2d+iwRmDIzo7lcbnXBl5nPzZ/SM/n4IejblCvHzmQzy4Wdu4WmCZL+wMxcIbfeXwfZdw/9DIO+YLRyCNHTfZ3977n55UVov6/+1+NK9jHIfhcfj2Ur9juyBPkNPtjaffTpgS6/DF57assM+mLCwWWQ+e3w0aOL5jOF1c2N6QuFU08e3OlR3T4ERvSMjsfO7B2D/FZ1au/Yo72LZzf3nmD3h8FgMBj3qBof06SOJe4bkGFxiY5tcUcpWiymKT3fstuGRJqWBD9gI1qK7oAIlRQ3GGQAJcrJTuSR8/MovwdJCgqR5tvJ7dElEmlTbqRQONlmK6tp84Y2fKrdHVnCUVOTCknHGzt3GSZdsxuTP9nO7lahaO3OwVwbyW8AENPICZCqRhCanpgznu6rDXzYdP2eM7LL3RsByv1Sb/+K3U7vNy7YnDBQ0Q5SYjSgBAEZVDh9I7joEeeIbYRF/gxgm+5n5bvp6WsNb1f8SasdgII2ArzR9FvbqhclPjApMI/kSbvKxdYV0tb+WLPc3+/Xz8DI64afOWrd+yjWJvzt30evNhy8QIl4hGRVmXG0c2N/7N4I8dr5EqtdYwHIru01lF/CbltF68SbB/f03Of2REOAqk0GRaYY4O917ocSgm1nZpnu5/ap1Y8ayc9+j1rr7VK/KaaEt0VRABmtcwhMtD92rwU12UsLx8wfxSLR7ezT643tVza2+QyhcW7TKcvdk2H/UbjfoHpQUFb5xNGeu73PHgRhzErmezpv7g6t0v0cPF7avWnfZ5LGTse+zOj8/Pyukf4mZLX7+bfDS68bfPNdTOipeHSye0tLv5UtOcq4zC/TYaoyCsw8fnbF9NQq3U/2cHPs7Ke2xQWNyK82XY11tpqhtUP70vSEOWWNHvl9d/Pw1mqpPaBgWfchVucIm83310/eVO0i4TzdT8LQidp0NdC2nd8LRyt79mcz+tz1u3J79EH2IB7GUOZ0F7PTD4E52woYdBRkDSpVGdKK8psz6V/E2U1NgAX+AGBK8itc1TVvZahUYc4PbPa5PjI4T8BvTvez+KU+02QciDiK8jVPkjUlaPZlVpf2TelqYIfuLCHMjx6ZigG2FDfO3anupWMU8B7NQIJdIpy6dD+vru7vn5g2da5CMtYwh051Qp20B+0VXcGXeX54ePi1Kbgj0w6KI2I/eTxvJcCW9ha/VBMlKgyQejwQw3mmgib9ezN98fBw6J3Z4Bzq39tIlf5Vp6tBGyI7qt6PnmRQM/Tvha5/vsnSO/BHpn+2hLUq/zen56lZNPUgztKdyeGQuTsqyi8/ashPdJb3O62iZIpUqYVHcrr/K+yUOmDo/7g+2G6UNkb6nuobiPmeGvuIxRwNpKJPI5v733uTQ0MPXpj6X8cBG2nKkfbyzhkA1n4vryDj+iOANqX7GSouzloz4jHn6X5Eo4v1fXsa8sS04stF+hEvU0lyM7sxvL2eK09VB2XA9MMwaqOUPoLzFBr+BiInXcRrMOQxbtBXhoYqrUGzDqOrbtEg3Q/vYu6nwWsGXYx5IplbDRAFif4wX2hxtkPrrItsXY1yNKdcFAcSEX2wpQYy6Uepj/oC23Q/YVfTcJqdVfGu0okhBYzXOU40Rtsf6gcAU5+cW0dyl9ySjFrv/y66Sh5efF2keiiX4mAbBfph9EVHtLRT0TaNehMEy7DMepKlFQYTNelalCi0GLlPrBcxYPGJVbfiQ4mW6jVQbMPaEtBDkxIni1BsrFjMHsQ7C8W7TDBZYwwk0U5mRqFudlFz3xoApW2CDULG5TBBhOW4nj2oT3JXlSGJgKmzIAejrny9gcyZC1CSbc7WsgHepNIUH+iXuTcDlo8mBlgSMHGFDrQ/M0PJnBxhQ8AvqF5nKausCYZRNiJYrihxthOGvSUUT6BhIy3SmfwppCCh0Spe7Vw2IlQ9WezXBVgYDAaDwWAwGAwGU8P/AXMi0HZ8tU9TAAAAAElFTkSuQmCC" alt="Kleene Star" className="movie-poster" />
                  <h6>Kleene Operations</h6>
                  <p>Star and plus operations</p>
                </div>
              </div>

              <div className="table-container">
                <h6>Comprehensive Operation Properties</h6>
                <table>
                  <thead>
                    <tr>
                      <th>Operation</th>
                      <th>Notation</th>
                      <th>Formal Definition</th>
                      <th>Key Properties</th>
                      <th>Complexity</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Union</td>
                      <td>L1 U L2</td>
                      <td>Strings in L1 or L2</td>
                      <td>Commutative, Associative, Idempotent</td>
                      <td>O(|L1| + |L2|)</td>
                    </tr>
                    <tr>
                      <td>Concatenation</td>
                      <td>L1L2</td>
                      <td>Strings from L1 joined with strings from L2</td>
                      <td>Associative, Non-commutative</td>
                      <td>O(|L1| × |L2|)</td>
                    </tr>
                    <tr>
                      <td>Kleene Star</td>
                      <td>L*</td>
                      <td>Union of Li for i from 0 to infinity</td>
                      <td>L* = epsilon U LL*, and (L*)* = L*</td>
                      <td>Infinite (if L not equal to empty and L not equal to epsilon)</td>
                    </tr>
                    <tr>
                      <td>Intersection</td>
                      <td>L1 ∩ L2</td>
                      <td>Strings in L1 and L2</td>
                      <td>Commutative, Associative</td>
                      <td>O(min(|L1|, |L2|))</td>
                    </tr>
                    <tr>
                      <td>Complement</td>
                      <td>L'</td>
                      <td>All strings minus L</td>
                      <td>Involution: (L')' = L</td>
                      <td>Infinite (if L is finite)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <h5>Advanced Operation Examples</h5>
                <div className="operation-examples">
                  <h6>Concatenation Example</h6>
                  <p><strong>L1 = {'{'}a, ab{'}'}, L2 = {'{'}b, bb{'}'}</strong></p>
                  <p><strong>L1L2 = {'{'}ab, abb, abb, abbb{'}'}</strong></p>
                  
                  <h6>Kleene Star Example</h6>
                  <p><strong>L = {'{'}a, b{'}'}</strong></p>
                  <p><strong>L* = epsilon, a, b, aa, ab, ba, bb, aaa, and so on</strong></p>
                  
                  <h6>Practical Application</h6>
                  <p><strong>Identifiers:</strong> L = Letter followed by Letter U Digit*</p>
                  <p><strong>Comments:</strong> L = /* followed by Any Character* followed by */</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Alphabets and Strings</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Finite State Machines →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.3</div>
              <div className="lesson-title-main">
                <h1>Finite State Machines</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Formal Mathematical Model of Computation</h3>
              <p>A finite automaton represents a fundamental computational model that captures algorithmic processing with bounded memory. The formal definition establishes a rigorous mathematical framework for analyzing computational capabilities and serves as the foundation for understanding more complex computational models.</p>
              
              <div className="theory-box">
                <h5>Theoretical Foundations of Finite State Computation</h5>
                <p>Finite automata serve as the cornerstone of computational theory, providing:</p>
                <ul>
                  <li><strong>Computational Completeness:</strong> Characterizing regular language recognition capabilities</li>
                  <li><strong>Decidability Framework:</strong> Establishing algorithmic solvability boundaries</li>
                  <li><strong>Complexity Hierarchy:</strong> Foundation for Chomsky hierarchy classification</li>
                  <li><strong>Hardware Abstraction:</strong> Mathematical model for digital circuit behavior</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Finite State Machines and Automata</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/Qa6csfkK7_I?si=-O8E96gfOzOqURdv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{width: '400px', height: '225px'}}></iframe>
                </div>
              </div>

              <h4>Rigorous Mathematical Definition</h4>
              <div className="definition-box">
                <h6>Finite Automaton 5-Tuple: M = (Q, Sigma, delta, q0, F)</h6>
                <ul>
                  <li><strong>Q:</strong> Finite set of states, non-empty</li>
                  <li><strong>Sigma:</strong> Finite input alphabet, non-empty, disjoint from Q</li>
                  <li><strong>delta:</strong> Transition function: Q × Sigma → Q</li>
                  <li><strong>q0:</strong> Initial state, q0 in Q</li>
                  <li><strong>F:</strong> Set of accepting states, F subset of Q</li>
                </ul>
              </div>
              
              <div className="definition-box">
                <h6>Extended Transition Function</h6>
                <p>Recursive definition for string processing:</p>
                <ul>
                  <li><strong>Base Case:</strong> delta_hat(q, epsilon) = q</li>
                  <li><strong>Inductive Step:</strong> delta_hat(q, wa) = delta(delta_hat(q, w), a)</li>
                  <li><strong>Language Acceptance:</strong> L(M) = {'{'}w | delta_hat(q0, w) in F{'}'}</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="FSM Components" className="movie-poster" />
                  <h6>FSM Components</h6>
                  <p>States, transitions, and acceptance</p>
                </div>
                <div className="movie-card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRRWcX9uKTevwEuuASHD1xLrRhRnGBEQtCA&s" alt="Transition Function" className="movie-poster" />
                  <h6>Transition Function</h6>
                  <p>State change mechanism</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAzFBMVEXp6erb5d/////f5uLs7O0lKy7w8PEAAADLy8vIyMjS0tLy8vMWHiHo6OkAERYcIybd3d6Nj5BqbW+enp68vb7h4eIPGR0ACxGzs7QAgShKT0wJFBnO2tKsrq4AFQw0OzdjZ2VOUlSoqat3enhbYF07Qj4iKyYTHxiVl5Z8f4BBR0Q+QkVnbGkeKCIAEAAsNC8ACAAAAAtVWVsyNzo7kVC3zr0YhjcMGhJFSUtfYmR4e31vp3ynxK4sjESTupyItJJLmF1mo3OtyLTE1cmtyyScAAANOUlEQVR4nO2baWPauBZAPczl2pYwSFgGx9QsZonNWmCahLR9M339///pXdlAIE3yGmiSdqrzIV7k9aDlSlYsy2AwGAwGg8FgMBgMBoPBYPj5Ac8D0Eu98tYP88vxx8eri78+gQWf/rq4+vjnWz/OLwZ8/Pzpw8eL//C/L/7+8Onqb5P/ngVYAQL/z8XXi08c8E9j73m8K7j65/N27a0f6JcCr64uiKvPnz9vV/CtH+lXAr78oxvcD1efLj6AZ8FfH03xfQ7vLr688/579YV/+fzBe/flyhTeZwFfP1OZ/WhZ3kda/vXVZL7nAdbXD3/kYfO7D18tY+/ZANxfMRgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDIa3A06ZAYv4vafBdx/5S7GbAAaO9J44DB+cJ4a+jDPUbh5KD4KD26iu233qBr8mEMbFi+PUVo9PpRM+eygR5dQfIEAss/ibWYx0xTtfEC7cy3/VVD3UWYoPxhyAU9EKXFrqwghFSaOd+qh8FZgdciqpuN2Vo9eSNJQoxu3hsD0W24OLBV29f+nppZVfwZ2ywcuUXniTGZSi34li7i86kVJROFDJSrDIn46ngmx1h9M40rkRw2g4FThcRF0+7ccD/bhJppG5Py2qO1OI8ahPf+hgBiD6w8gH0md53ZUIaCvGF6v7kIXO69eqOOiEfdtR43HK4tloqNJrwS5nUs4iFIuR7M9mIVjA5lm4iHg26vs8WowG2qiMNNPtM4NoSw6ck57kfZZEC+F1hknWTnn/Eqdtxbv6Ru4ZOeTJUyFutpbpq/vj0ZABE3wQcYwvU8T0UrBrybm8FMm10kutz7VlEDjI2iHn0Ujkj8kLds+v2iHl0dVg4I0Hlue0/bDteta0g/1Feh3j9kYnPiYgD0TAty0T/Ur8nimY1Mrl5qs3SsAG9kgi6UOI2y7k+to+aWwL2Q5yKzqr+aN55KBDGzyKcmXoT/tEtst9bO5zlsTTkegs5vPra5mOLufzS9vrLy77fHujEzMfsnqlWW3WMlZUtZvNRh77wxvS1zjHxEl4jrCS90mR+9rqSF+e+1Kd+yxBOa97rfXxvb50qtnps2A8DDiHYcSH3RIHYcVzxinP8P5CXodoOXpPcpI/TJYkh6g0Q90GpdVao36sD9xysxG/euGFaBb685hPZ5LF862+udY3Z8FilGazUVF4++5ghmI+8Hf6LNy3vNsXmC2k7MwY99/LeNwW3mIcZ7Ys6j6X042SeXyKPnCXpK5RrdDfJUVO3K+Ua7dct7QA23+XpgCCedza7QE4jECLeBReoG2GoL/oSGoluwtFMRnp6wi2SAD9BUM2WHST67BoeRcRhTQJuRs8Enkg63c6fUFvkowXA5Zfc5gCZh3LW41ZfqOTnhHrOu+FjmxQ/rvFQGW1cm2jFANPER4GoQOM1qhhCvQeQCfxVbB9TBRx6rto6ZTg6Tud8nAAeYchj/tok6qpYgmCnoCH7TyMhjw8pCRaPlZEdFyX/+h4GPfpK1IzA9sbnYBuFiq6Wd+QxjVntrZZa9k+CrvVsgO/Yidc2q3lBqmYtFpNsWo2GtVakt8OZaNVaTRXolJtndXyPxfRplhwvHjzPhZMyFZd/6YeAayZ14PlBumrUkpWLTdIHxXoOoJDe8qToqZc6rqQ16v5Ru1mXS5XX1MfqKFtj50372PlhbeyUkXcQl0fXQnWmnahr6yb3GN9tVazmRv0qJfYzJucpj7ndfVR6QuChwcJXhVwtYJatUxxi86CIldFcSDk+sqtyvJY39q1RJ18VRVwnRMbkjHZenV9PwsYNipF3LLSQxaYFi2vVehbK8+jGu5OX4PaCcB1XrxZSy90vS4rv6s+ajzlOo9bahXyV+jT7Z3W19Ch4JG+iq6tOZX4SsqVznS6vc2P/U316UbclWUSWOvxe/qaIm/s7+vTFSY11yHpm+TOvN+38GoAPR24NINn6ctzXx47BI3fVB/UqY9LQRw45KIldnXfd+nTdV8r1JFn8rvqw16lVll71P+m0tvUgxVk4iagEPD/6kO+1jVmiKjt/ab6EgpcarVNr+i0UTyqA5ld3Pe0Pkx049xYNhuvH/f9LOBG12C1mg6R81Z0XbvrdTytz8JVo+h1rF+71/HzALLSogKse65Fx+OGOrVL3edtNOytvmWjmvd5G41moa/aWOpBQa/epFNbE/bb5j6SEcTyNkud3XAzuInvuxCkvp/moyigfN8PwRK0x893hLSi8lEOl05NwNL6HvxQ+DwOR71+nR8j/64HR5tQhDRHO+72bHcEhF4DHbgUBf285/Dvxiw9/3suB09s3U984npv8iURN5VaQ+pOm26uKz8g8zkMOOoeI+deh+uPuhb/ZihO3G2De/ibBezoOE8djmeBOi4dwcGnIWDqDWoe9HWntx6qbNtsn31BGbNosEiQDaMs4mo4lDhkqo/FcHYBl9lOC6bJ9GCQVkSHDrCrpgei47h/6I9PDz7o4FQ9MX/hxQA9oFVrtHSPuXV+2c31dSjfwdjl8Rg6VqmrnMHKyycL+Dsyu769FfZ5ePDevH90NY8f6LPQ6R9kRvTVkT556oe2cwCxLiKXcq2lfsCnJK1vymEorjkEYzHqdrshX6X5ZxbcwX2x+4B7Tx8e68PsMLsFXno3ugpsEE4Pprc4/OEZMi8MeHLdqraatTr7ER/icn0IHW8QQzrGccDTQPXH9z5g31XzkMjDOVE4PbrYNIsPDPn+YeEVjqof3jfpv824P1rMVU7Af8hvB75iGcIgEN2VP+VUbn2Yeko++tMAO/o+dexZCHF06FHtAtZx4pt9NfmR3yghb2Zx+yEsn7ODp82KfO6NX/4Whn8R8DKc8BT3dz100MMJj5/y0oByDjnecp5KTJ468ZnRMzDXdcXRF797sXveCVa6Yf0mYY/3BjUvKx1yvFV6KtF/6sRn6sP6slyzb9ztPEw9fyW2Pdht6UNATKpru46Y6IQ8t+7mvhRH6Vk6pHe/s0jX0yJ+tLJDnqmPBy+jr8dB3NoOWVGpwpB5ckmhKASJz0SYj05l64AnduhllVChckRMf0iR7iaimybUBU2XiQLX1dOdFARhQEno+P4PiQUfo3hvSynru/Qxmz+mr58fzZQ4TR910G9W3OvZvdrGTkS5Ntlwt9HoNTe2yA+54QjCY5RQ55Ob5rrUyqgrP6EMWbdX66ayKKWHqxWnYyfI7JWdcmn3buzkBf3l7yztKLLlKfqQBbu0ONVXuuxep6fpox5gE2TT4XjbTHhoWwjrnseDdUXrA2Xf6H4SJi0P+U3F8XiZAll+c0t5ks6hK+jCyzcbOua2h8LeBFScFee+fXY/+PHztRO58Eolof3lvuLF9SC408ei64461Dcd8p2+sD1uZ9u0ICqVwPZKAR1ykj6Il8HklrKhsBMe2wEwm7qwmDTzyBydrGZvgPQFJK3Orb2+zYrns8hIHxzoU4iyEsZxYp805XCvjiqDUHwbGsBOH3/vHGaw+JJh2ua7zcAO0c2PKPRRBoN97hvFpWAI27QRLylSWOq4p+njsoLrvGu01efaunYLt/o4cmX7PKlqfbd4p69X58VX9nv6ALPaqtdbrc4ZBgIVe0GUMlccvxP176HQJ97zEvP9xOe5hXFS4qVOvNMnu7SZTXf62nHbuyu86aV/l0/7bike0DJSJzUdKKqSbyaIVHC1PguDpZ7yV2/kdZ+sk7+W5EXh1fp6G464vuVZDYGHKerCi7drOmVV6IPERs4DdUY8g2nfj4IoY/2xHncWewLZ00MnWp+NJSbTvl3oGy5Gs1En2UuhzVlnr2/W9g/rPiZn3d2RKiuFp+qbqFhWV/Sb2qswrTUTVLaMqeaXYb2S6yMVWXhLgvKECelDn1I3y1sulhvl2xm1FllCVeRteNvs0QblOW8yCcNy75zM53ddwesO7yudxVW4J7PTQp8ugjonRYWFSIsJ9oU31Ua8XQFlc7Ut6rk+Sftstk2DRcnp0PKSPVuf7N3c1HUVhe5qvWKTEEDebBD9yToLb4rCG/bWKz2xSlLFV9dlXKf6tAZss55Q3kC/t/IwvllLWUcx0RFMcLteZ2cF0x5LIz4lfW4RUO7A0NPVTJ5t7Bip/WKFBXcei/5srw8upfD3iqjui9+zu8I7l90F3zUyHShdxzy5fHbLSxUb57v/A9v+lxjq/+vI5wBvhyW3/weWJxTfinYT17dThItT8g095zS/3MnThXcPlvbViGeZmN5/pX3TQW87tO1oZ6jkdKMM71peqx9N2W5LUF5Mp/uWl+rMeC+6JMMS67wfsufr+3kB5QvwYmo6Hkzehnac3/m645mdNme62/z36Nv1Ah95oR/a5/036nuan2LI4JeFutyHHG+5TyWGT5349nP1X4mfY7jUYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPhSf40nIH1h+EMjL6zMPrOwug7C6PvLIy+szD6zsLoOwuj7yyMvrMw+s7C6DuL/wFYjUNWYx1VVwAAAABJRU5ErkJggg==" alt="String Processing" className="movie-poster" />
                  <h6>String Processing</h6>
                  <p>Sequential symbol consumption</p>
                </div>
              </div>

              <h4>Formal String Acceptance Protocol</h4>
              <div className="algorithm-box">
                <h6>Acceptance Algorithm</h6>
                <p><strong>Input:</strong> String w = a1a2...an</p>
                <p><strong>Process:</strong></p>
                <ol>
                  <li><strong>Initialize:</strong> current_state = q0</li>
                  <li><strong>For i = 1 to n:</strong>
                    <ul>
                      <li>current_state = delta(current_state, ai)</li>
                      <li>If delta undefined, reject immediately</li>
                    </ul>
                  </li>
                  <li><strong>Decision:</strong> Accept if current_state in F</li>
                </ol>
                
                <h6>Mathematical Formulation</h6>
                <p><strong>Acceptance Condition:</strong> w in L(M) iff delta_hat(q0, w) in F</p>
                <p><strong>Rejection Condition:</strong> w not in L(M) iff delta_hat(q0, w) not in F</p>
              </div>

              <div className="example-box">
                <h5>Complete FSM Example</h5>
                <div className="fsm-example">
                  <h6>Language: Strings ending with "01"</h6>
                  <p><strong>Formal Definition:</strong></p>
                  <ul>
                    <li><strong>Q = q0, q1, q2</strong></li>
                    <li><strong>Sigma = 0, 1</strong></li>
                    <li><strong>q0 = q0 (start state)</strong></li>
                    <li><strong>F = q2 (accept state)</strong></li>
                  </ul>
                  
                  <h6>Transition Function delta:</h6>
                  <ul>
                    <li>delta(q0, 0) = q1, delta(q0, 1) = q0</li>
                    <li>delta(q1, 0) = q1, delta(q1, 1) = q2</li>
                    <li>delta(q2, 0) = q1, delta(q2, 1) = q0</li>
                  </ul>
                  
                  <h6>String Processing Example:</h6>
                  <p><strong>Input: "1001"</strong></p>
                  <p>q0 →1 q0 →0 q1 →0 q1 →1 q2 in F ✓ ACCEPT</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Language Operations</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">DFA and NFA →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.4</div>
              <div className="lesson-title-main">
                <h1>DFA and NFA</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Comparative Analysis of Deterministic vs Non-Deterministic Computation</h3>
              <p>The distinction between deterministic and non-deterministic finite automata represents a fundamental dichotomy in computational theory, illustrating different paradigms while maintaining equivalent expressive power. This comparison reveals deep insights into the nature of computation and algorithm design.</p>
              
              <div className="theory-box">
                <h5>Computational Paradigms and Equivalence</h5>
                <p>DFA and NFA represent different computational models with profound theoretical implications:</p>
                <ul>
                  <li><strong>Deterministic Computation:</strong> Single execution path, predictable behavior</li>
                  <li><strong>Non-deterministic Computation:</strong> Multiple simultaneous execution paths</li>
                  <li><strong>Expressive Equivalence:</strong> Both recognize exactly the regular languages</li>
                  <li><strong>Complexity Trade-offs:</strong> Space vs. time, design vs. execution efficiency</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>DFA vs NFA: Deterministic and Non-Deterministic Automata</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BCgIAQelwo8?si=D52aAHKzsZ6NaOmY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>

              <h4>Deterministic Finite Automata (DFA) - Rigorous Analysis</h4>
              <div className="definition-box">
                <h6>Mathematical Definition: DFA</h6>
                <ul>
                  <li><strong>Deterministic Constraint:</strong> delta: Q × Sigma → Q (function, not relation)</li>
                  <li><strong>Unique Transitions:</strong> For each (q, a) pair, exactly one next state</li>
                  <li><strong>Complete Specification:</strong> delta defined for all (q, a) in Q × Sigma</li>
                  <li><strong>Computation Path:</strong> Unique sequence of states for input string</li>
                  <li><strong>Acceptance:</strong> String accepted if computation ends in accept state</li>
                </ul>
              </div>

              <h4>Non-Deterministic Finite Automata (NFA) - Advanced Theory</h4>
              <div className="definition-box">
                <h6>Mathematical Definition: NFA</h6>
                <ul>
                  <li><strong>Non-deterministic Constraint:</strong> delta: Q × Sigma → P(Q) (power set)</li>
                  <li><strong>Multiple Transitions:</strong> For each (q, a) pair, set of possible next states</li>
                  <li><strong>Epsilon-Transitions:</strong> delta: Q × (Sigma U {"ε"}) → P(Q) allowed</li>
                  <li><strong>Computation Tree:</strong> Multiple simultaneous execution paths</li>
                  <li><strong>Existential Acceptance:</strong> Accept if any computation path reaches accept state</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="DFA Structure" className="movie-poster" />
                  <h6>DFA Structure</h6>
                  <p>Deterministic state transitions</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="NFA Structure" className="movie-poster" />
                  <h6>NFA Structure</h6>
                  <p>Non-deterministic choices</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Equivalence Proof" className="movie-poster" />
                  <h6>Equivalence Proof</h6>
                  <p>Subset construction algorithm</p>
                </div>
              </div>

              <h4>Theoretical Equivalence and Conversion Algorithms</h4>
              <div className="equivalence-theorem">
                <h6>Fundamental Equivalence Theorem</h6>
                <p><strong>Theorem:</strong> For every NFA N, there exists a DFA D such that L(N) = L(D)</p>
                <p><strong>Proof Technique:</strong> Subset construction (powerset construction)</p>
                
                <h6>Subset Construction Algorithm</h6>
                <ol>
                  <li><strong>State Mapping:</strong> Each DFA state corresponds to subset of NFA states</li>
                  <li><strong>Initial State:</strong> epsilon-closure of NFA start state</li>
                  <li><strong>Transition Construction:</strong> epsilon-closure of union of transitions</li>
                  <li><strong>Accepting States:</strong> Subsets containing at least one NFA accept state</li>
                </ol>
              </div>

              <div className="example-box">
                <h5>Comprehensive Comparison Example</h5>
                <div className="comparison-example">
                  <h6>Language: Strings containing "ab" as substring</h6>
                  
                  <h6>NFA Design (3 states)</h6>
                  <ul>
                    <li>q0: Start state, self-loop on a,b, transition on 'a' to q1</li>
                    <li>q1: After reading 'a', transition on 'b' to q2</li>
                    <li>q2: Accept state, self-loop on a,b</li>
                  </ul>
                  
                  <h6>Equivalent DFA (4 states after subset construction)</h6>
                  <ul>
                    <li>State complexity: NFA has 3 states, DFA has 4 states</li>
                    <li>Design complexity: NFA easier to design intuitively</li>
                    <li>Implementation: DFA more efficient for execution</li>
                  </ul>
                  
                  <h6>Complexity Analysis</h6>
                  <p><strong>Space:</strong> DFA may require 2^n states for n-state NFA</p>
                  <p><strong>Time:</strong> DFA: O(n), NFA simulation: O(n·m) where m = |Q|</p>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Finite State Machines</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Transition Diagrams →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.5</div>
              <div className="lesson-title-main">
                <h1>Transition Diagrams</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Graphical Representation and Computational Visualization</h3>
              <p>Transition diagrams serve as the primary visual language for representing finite automata, providing intuitive graphical notation that bridges abstract mathematical definitions with concrete computational implementations. These diagrams enable efficient design, analysis, and communication of automata-based solutions.</p>
              
              <div className="theory-box">
                <h5>Graph-Theoretic Foundation of Automata Representation</h5>
                <p>Transition diagrams are directed labeled graphs with specific semantic interpretations:</p>
                <ul>
                  <li><strong>Graph Structure:</strong> Vertices represent states, edges represent transitions</li>
                  <li><strong>Semantic Mapping:</strong> Graph elements correspond to automaton components</li>
                  <li><strong>Visual Computation:</strong> Path traversal represents string processing</li>
                  <li><strong>Design Methodology:</strong> Systematic construction from language specifications</li>
                </ul>
              </div>

              <div className="video-section">
                <h6>Transition Diagrams and State Machines</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/oaD7zcjGU28?si=gXOTl-6Uokoeh-ka" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
              </div>

              <h4>Formal Diagram Specification and Conventions</h4>
              <div className="diagram-specification">
                <h6>Standard Graphical Elements</h6>
                <ul>
                  <li><strong>Vertices (States):</strong> Circles representing automaton states</li>
                  <li><strong>Directed Edges:</strong> Labeled arrows representing transitions</li>
                  <li><strong>Initial State Marker:</strong> Unlabeled incoming arrow to start state</li>
                  <li><strong>Accepting State Marker:</strong> Double circles for accept states</li>
                  <li><strong>Edge Labels:</strong> Input symbols or epsilon for epsilon transitions</li>
                  <li><strong>Multiple Labels:</strong> Comma-separated symbols for same transition</li>
                </ul>
              </div>

              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Transition Diagram" className="movie-poster" />
                  <h6>Transition Diagrams</h6>
                  <p>Visual representation of automata</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="State Notation" className="movie-poster" />
                  <h6>State Notation</h6>
                  <p>Standard symbols and conventions</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Path Traversal" className="movie-poster" />
                  <h6>Path Traversal</h6>
                  <p>String processing visualization</p>
                </div>
              </div>

              <h4>Advanced Language Recognition Algorithms</h4>
              <div className="recognition-algorithms">
                <h6>String Acceptance Algorithm (Detailed)</h6>
                <p><strong>Input:</strong> DFA M and string w</p>
                <p><strong>Algorithm:</strong></p>
                <pre>
function ACCEPT(M, w):
    current_state = start_state
    for i = 1 to length(w) do:
        if delta(current_state, w[i]) is undefined then:
            return REJECT
        current_state = delta(current_state, w[i])
    return (current_state in F) ? ACCEPT : REJECT
                </pre>
              </div>

              <h4>Design Patterns and Construction Techniques</h4>
              <div className="design-patterns">
                <h6>Common Automata Design Patterns</h6>
                <ul>
                  <li><strong>Counting Patterns:</strong> Modular arithmetic for counting occurrences</li>
                  <li><strong>Substring Detection:</strong> State progression for pattern matching</li>
                  <li><strong>Prefix/Suffix Recognition:</strong> Linear state chains</li>
                  <li><strong>Alternation Patterns:</strong> Parallel paths for OR conditions</li>
                  <li><strong>Repetition Patterns:</strong> Self-loops for Kleene star operations</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Complete Design Example</h5>
                <div className="design-example">
                  <h6>Problem: Binary strings with even number of 1s</h6>
                  
                  <h6>Design Process</h6>
                  <ol>
                    <li><strong>Identify Pattern:</strong> Count 1s modulo 2</li>
                    <li><strong>State Design:</strong> q0 (even 1s), q1 (odd 1s)</li>
                    <li><strong>Transitions:</strong> Toggle on '1', stay on '0'</li>
                    <li><strong>Acceptance:</strong> F = q0</li>
                  </ol>
                  
                  <h6>Transition Diagram</h6>
                  <pre>
    0
  ↻ q0 ⇄ q1 ↺
     1   1  0
  (start,accept)
                  </pre>
                  
                  <h6>Verification</h6>
                  <ul>
                    <li>"00": q0 → q0 → q0 ✓ (0 ones, even)</li>
                    <li>"101": q0 → q1 → q1 → q0 ✓ (2 ones, even)</li>
                    <li>"11": q0 → q1 → q0 ✓ (2 ones, even)</li>
                    <li>"1": q0 → q1 ✗ (1 one, odd)</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← DFA and NFA</button>
              <button onClick={() => setCurrentModule(6)} className="next-module-btn">Unit 1 Quiz →</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.6</div>
              <div className="lesson-title-main">
                <h1>Unit 1 Quiz</h1>
              </div>
            </div>
            
            <Quiz title="Unit 1 Comprehensive Quiz: Introduction to Formal Languages" questions={unitQuiz} passingScore={70} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(5)} className="prev-module-btn">← Transition Diagrams</button>
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

export default Unit1;