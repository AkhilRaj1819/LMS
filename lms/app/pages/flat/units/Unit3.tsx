'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const module1Quiz = [
    {
      question: "What is a regular expression?",
      options: [
        "A type of finite automaton",
        "A notation for describing regular languages",
        "A programming language",
        "A type of grammar"
      ],
      correctAnswer: 1,
      explanation: "A regular expression is a notation for describing regular sets/languages using special symbols and operators like union, concatenation, and Kleene star."
    },
    {
      question: "Which of the following is a base case in regular expressions?",
      options: [
        "Union operation",
        "Empty set (∅)",
        "Concatenation",
        "Kleene star"
      ],
      correctAnswer: 1,
      explanation: "The base cases in regular expressions are: empty set (∅), empty string (ε), and single symbols from the alphabet."
    },
    {
      question: "What does the regular expression (a+b)* represent?",
      options: [
        "Only strings 'a' and 'b'",
        "All strings over alphabet {a, b}",
        "Strings with equal a's and b's",
        "Empty string only"
      ],
      correctAnswer: 1,
      explanation: "(a+b)* represents all possible strings (including empty string) that can be formed using symbols 'a' and 'b', which is the set of all strings over alphabet {a, b}."
    }
  ];

  const module2Quiz = [
    {
      question: "Which operation has the highest precedence in regular expressions?",
      options: [
        "Union (+)",
        "Concatenation (·)",
        "Kleene star (*)",
        "All have equal precedence"
      ],
      correctAnswer: 2,
      explanation: "Kleene star (*) has the highest precedence, followed by concatenation (·), and then union (+) has the lowest precedence."
    },
    {
      question: "What is the identity element for concatenation?",
      options: [
        "Empty set (∅)",
        "Empty string (ε)",
        "Any symbol",
        "Kleene star"
      ],
      correctAnswer: 1,
      explanation: "The empty string (ε) is the identity element for concatenation: r·ε = r for any regular expression r."
    },
    {
      question: "What does r* equal according to recursive definition?",
      options: [
        "ε + r",
        "ε + rr*",
        "r + r*",
        "rr*"
      ],
      correctAnswer: 1,
      explanation: "The recursive definition of Kleene star is: r* = ε + rr*, meaning zero or more repetitions of r."
    }
  ];

  const module3Quiz = [
    {
      question: "What is Thompson's construction used for?",
      options: [
        "Converting DFA to NFA",
        "Converting regular expression to NFA",
        "Minimizing automata",
        "Converting NFA to DFA"
      ],
      correctAnswer: 1,
      explanation: "Thompson's construction is an algorithm that converts a regular expression into an equivalent NFA with epsilon-transitions."
    },
    {
      question: "In which domain are regular expressions commonly used?",
      options: [
        "Database design",
        "Lexical analysis in compilers",
        "Network routing",
        "Image processing"
      ],
      correctAnswer: 1,
      explanation: "Regular expressions are commonly used in lexical analysis for breaking source code into tokens during compilation."
    },
    {
      question: "What is the state elimination method used for?",
      options: [
        "Converting automata to regular expressions",
        "Minimizing DFA states",
        "Converting NFA to DFA",
        "Optimizing regular expressions"
      ],
      correctAnswer: 0,
      explanation: "State elimination method systematically removes states from an automaton to derive an equivalent regular expression."
    }
  ];

  const module4Quiz = [
    {
      question: "What does the Pumping Lemma help prove?",
      options: [
        "A language is regular",
        "A language is not regular",
        "Two languages are equivalent",
        "An automaton is minimal"
      ],
      correctAnswer: 1,
      explanation: "The Pumping Lemma is used to prove that certain languages are NOT regular by showing they fail to satisfy the necessary conditions that all regular languages must meet."
    },
    {
      question: "In the Pumping Lemma, what must be true about the middle part 'y'?",
      options: [
        "|y| = 0 (y can be empty)",
        "|y| ≥ 1 (y must be non-empty)",
        "|y| ≤ p (y length at most p)",
        "|y| = p (y length exactly p)"
      ],
      correctAnswer: 1,
      explanation: "In the Pumping Lemma decomposition w = xyz, the middle part y must be non-empty (|y| ≥ 1), ensuring there's actually something to pump."
    },
    {
      question: "Which of the following languages is NOT regular?",
      options: [
        "All strings over {a,b}",
        "Strings ending with 'ab'",
        "a^n b^n where n ≥ 0",
        "Strings with even number of a's"
      ],
      correctAnswer: 2,
      explanation: "The language a^n b^n (equal numbers of a's and b's) is not regular, as can be proven using the Pumping Lemma. The other languages are all regular."
    }
  ];

  const module5Quiz = [
    {
      question: "What is a right-linear grammar?",
      options: [
        "Grammar with productions A → aB or A → a",
        "Grammar with productions A → Ba or A → a",
        "Grammar with no restrictions",
        "Grammar that generates context-free languages"
      ],
      correctAnswer: 0,
      explanation: "A right-linear grammar has productions where the non-terminal appears on the RIGHT side: A → aB or A → a or A → ε. These grammars generate regular languages."
    },
    {
      question: "What is the relationship between regular grammars and finite automata?",
      options: [
        "They are unrelated",
        "They are computationally equivalent",
        "Grammars are more powerful",
        "Automata are more powerful"
      ],
      correctAnswer: 1,
      explanation: "Regular grammars and finite automata are computationally equivalent - they can generate/recognize exactly the same class of languages (regular languages)."
    },
    {
      question: "In converting a right-linear grammar to a DFA, what does each non-terminal become?",
      options: [
        "A transition",
        "A state",
        "An input symbol",
        "An accept condition"
      ],
      correctAnswer: 1,
      explanation: "When converting a right-linear grammar to a DFA, each non-terminal becomes a state in the automaton."
    }
  ];

  const unitQuiz = [
    {
      question: "What is a regular expression?",
      options: [
        "A type of finite automaton",
        "A notation for describing regular languages",
        "A programming language",
        "A type of grammar"
      ],
      correctAnswer: 1,
      explanation: "A regular expression is a notation for describing regular sets/languages using special symbols and operators like union, concatenation, and Kleene star."
    },
    {
      question: "Which operation has the highest precedence in regular expressions?",
      options: [
        "Union (+)",
        "Concatenation (·)",
        "Kleene star (*)",
        "All have equal precedence"
      ],
      correctAnswer: 2,
      explanation: "Kleene star (*) has the highest precedence, followed by concatenation (·), and then union (+) has the lowest precedence."
    },
    {
      question: "What does the regular expression (a+b)* represent?",
      options: [
        "Only strings 'a' and 'b'",
        "All strings over alphabet {a, b}",
        "Strings with equal a's and b's",
        "Empty string only"
      ],
      correctAnswer: 1,
      explanation: "(a+b)* represents all possible strings (including empty string) that can be formed using symbols 'a' and 'b', which is the set of all strings over alphabet {a, b}."
    },
    {
      question: "What is Thompson's construction used for?",
      options: [
        "Converting DFA to NFA",
        "Converting regular expression to NFA",
        "Minimizing automata",
        "Converting NFA to DFA"
      ],
      correctAnswer: 1,
      explanation: "Thompson's construction is an algorithm that converts a regular expression into an equivalent NFA with epsilon-transitions."
    },
    {
      question: "What does the Pumping Lemma help prove?",
      options: [
        "A language is regular",
        "A language is not regular",
        "Two languages are equivalent",
        "An automaton is minimal"
      ],
      correctAnswer: 1,
      explanation: "The Pumping Lemma is used to prove that certain languages are NOT regular by showing they fail to satisfy the necessary conditions that all regular languages must meet."
    },
    {
      question: "In the Pumping Lemma, what must be true about the middle part 'y'?",
      options: [
        "|y| = 0 (y can be empty)",
        "|y| ≥ 1 (y must be non-empty)",
        "|y| ≤ p (y length at most p)",
        "|y| = p (y length exactly p)"
      ],
      correctAnswer: 1,
      explanation: "In the Pumping Lemma decomposition w = xyz, the middle part y must be non-empty (|y| ≥ 1), ensuring there's actually something to pump."
    },
    {
      question: "What is a right-linear grammar?",
      options: [
        "Grammar with productions A → aB or A → a",
        "Grammar with productions A → Ba or A → a",
        "Grammar with no restrictions",
        "Grammar that generates context-free languages"
      ],
      correctAnswer: 0,
      explanation: "A right-linear grammar has productions where the non-terminal appears on the RIGHT side: A → aB or A → a or A → ε. These grammars generate regular languages."
    },
    {
      question: "Which of the following languages is NOT regular?",
      options: [
        "All strings over {a,b}",
        "Strings ending with 'ab'",
        "a^n b^n where n ≥ 0",
        "Strings with even number of a's"
      ],
      correctAnswer: 2,
      explanation: "The language a^n b^n (equal numbers of a's and b's) is not regular, as can be proven using the Pumping Lemma. The other languages are all regular."
    }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.1</div>
              <div className="lesson-title-main">
                <h1>Regular Expressions and Languages</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Introduction to Regular Languages</h3>
              <p>Regular languages are formal languages that can be described by regular expressions or recognized by finite automata. They form the most basic class of languages in the Chomsky hierarchy and are fundamental to formal language theory and practical applications.</p>
              
              <div className="theory-box">
                <h5>Regular Sets and Regular Expressions</h5>
                <p>Understanding the fundamental concepts of regular languages:</p>
                <ul>
                  <li><strong>Regular Set:</strong> A formal language that can be accepted by a finite automaton</li>
                  <li><strong>Regular Expression:</strong> A notation for describing regular sets using special symbols and operators</li>
                  <li><strong>Equivalence:</strong> Every regular expression defines a regular language, and every regular language can be expressed by a regular expression</li>
                  <li><strong>Base Cases:</strong> ∅ (empty set), ε (empty string), and single symbols are regular expressions</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Regular Expressions" className="movie-poster" />
                  <h6>Regular Expressions</h6>
                  <p>Pattern matching notation</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Regular Languages" className="movie-poster" />
                  <h6>Regular Languages</h6>
                  <p>Languages recognized by finite automata</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Chomsky Hierarchy" className="movie-poster" />
                  <h6>Chomsky Hierarchy</h6>
                  <p>Classification of formal languages</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Regular Expressions and Operations</h6>
                <div className="video-container">
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/4C7ZQJDoK-g?si=8fYIrsSGpVDV1o3Q"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>                </div>
              </div>

              <h4>Fundamental Properties</h4>
              <div className="definition-box">
                <h6>Core Characteristics</h6>
                <ul>
                  <li><strong>Recursive Definition:</strong> Complex expressions are built from simpler ones using operations</li>
                  <li><strong>Closure:</strong> Regular languages are closed under union, concatenation, and Kleene star operations</li>
                  <li><strong>Finite Representation:</strong> Infinite languages can be represented by finite expressions</li>
                  <li><strong>Computational Equivalence:</strong> Regular expressions ≡ Finite Automata ≡ Regular Grammars</li>
                </ul>
              </div>

              <h4>Base Cases and Building Blocks</h4>
              <ul>
                <li><strong>Empty Set (∅):</strong> Represents no strings, the language containing no elements</li>
                <li><strong>Empty String (ε):</strong> Represents the language containing only the empty string</li>
                <li><strong>Single Symbols:</strong> Each symbol 'a' in the alphabet represents the language containing 'a'</li>
                <li><strong>Atomic Expressions:</strong> These form the foundation for more complex expressions</li>
              </ul>

              <div className="example-box">
                <h5>Regular Expression Examples</h5>
                <div className="example-details">
                  <h6>Simple Expressions</h6>
                  <ul>
                    <li><strong>a:</strong> Language containing only string "a"</li>
                    <li><strong>ε:</strong> Language containing only empty string</li>
                    <li><strong>∅:</strong> Empty language - contains no strings</li>
                  </ul>
                  
                  <h6>Complex Expressions</h6>
                  <ul>
                    <li><strong>(a+b)*:</strong> All strings over alphabet containing a and b</li>
                    <li><strong>a*b*:</strong> Zero or more a's followed by zero or more b's</li>
                    <li><strong>(ab)*:</strong> Zero or more repetitions of "ab"</li>
                  </ul>
                </div>
              </div>
            </section>

            <Quiz title="Module 3.1 Quiz: Regular Expressions and Languages" questions={module1Quiz} subject="FLAT" unitId={3} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Regular Expression Operations →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.2</div>
              <div className="lesson-title-main">
                <h1>Operations on Regular Expressions</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Fundamental Regular Expression Operations</h3>
              <p>Regular expressions are built using three fundamental operations: union, concatenation, and Kleene star. These operations have specific precedence rules and algebraic properties.</p>
              
              <div className="theory-box">
                <h5>Operation Precedence and Associativity</h5>
                <p>Understanding operator precedence is crucial for correct interpretation:</p>
                <ul>
                  <li><strong>Kleene Star (*):</strong> Highest precedence, right associative</li>
                  <li><strong>Concatenation (·):</strong> Medium precedence, left associative</li>
                  <li><strong>Union (+):</strong> Lowest precedence, left associative</li>
                  <li><strong>Parentheses:</strong> Override default precedence</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Union Operation" className="movie-poster" />
                  <h6>Union Operation</h6>
                  <p>OR operation between expressions</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhAQDxAVFhUXFxcYFhYWFRgVGBUYFRYWFxYYFxYYHCggGBooHhcXIjEiJSkwLi4uFx8zODMwNygtLisBCgoKDg0OGxAQGysiICUtKy0tKy0rLS8tLS0rLS0rLS4tKy0rLS0tLy0tLS0tKy0tLS0tLi0tLS0tLSstLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAgQFAwYHAf/EAEUQAAIBAgMEBgcGAwYFBQAAAAECAwARBBIhBQYTMSJBUWFxgRQjMlKRobEHM0JywdFikvAkQ4Ky0uEWU6LC8RU0Y3Oz/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA6EQACAQIDBAkDAwMCBwAAAAAAAQIDEQQhMRJRcfATIjJBYYGRobEFwdEjM+EUQvFDUhUkNFNyc4L/2gAMAwEAAhEDEQA/AN3Jr5c6RCasQY5HCi5IA7SbVeEJTdoq78CrklmyM2Pi/wCan8wrpWCxH/bl6My6en/uXqOkqtqrA+BB+lZzpzg7TTXFWLqSlo7gTVUiRSasQITVkgITViBSakgQmrECk1YCE1ZIgUmpIEJqyRApNWIEJqQKTViBCasQKTUpECE1YCE1YgUmpIEJqyRApNWAhNSQKTViBCasQRb1U1OmE18qd4pNSQa/iniaeQYhjYCy87DQX5V9LQjXp4ODwyzeunjvPLqOnKvJVXktDX5X525dVe2r2zODgeYTFNHIrKbG4v3i+oPdWWIpRq03GRpSk4zTRu7Gvi0e4ITVkgITViBSakgQmrECk1YCE1ZIgUmpIEJqyRApNWIEJqQKTViBCasQKTUpECE1YCE1YgUmpIEJqyRApNWAhNSQKTViBCasBSaskQRL1UudLlkCgseQFz5V8tCDnJRjq8jvlJRV2a9iNuyXOQKB1XFz5619PS+i0Yx67bfhkjyp4+bfVSSK+faZJJaOIk8yUBJrshgowWzGc0v/ACZi8Q5O7jH0IOLxecWyIveq5T51tTo9G77Unxdykp7XclwRERukviPrV59lkR1R1uHZcbIrHNcgHn2jwr88liJRk0fSxpJopsZCY3KHq5HtHVXZSmpx2kYTjsuxHJrUoITViBSasBCaskQKTUkGGSZRzNbQpSloijmkYlxAP/mtXh2v8FVUTDif1enRePsNs9vVdgm4rA9lLC4hNSQITVgITViBSakgQmrJECk1YCE1JApNWIEJqwFJqyRAhNSQRb1Bc3/bT2hfyHxYCvE+lRTxUL+PwzoxbtRfPeajI9fXniknAbGnxGsSadp0H0rhxX1Ghh3szee5HRSwtSqrxRIfc7Ge6vxP+muT/jmF8fRfk3/oK3hz5EnZW5U3EUzZQoIOhve3iBXLi/r1Ho2qV22bUfp89pOeh0EWAAHICw8q+OnO7uz24xsUW3vbU930P+9ejgJXg14nNiVaSKomvQOUUmrJArsXtWNNAcx7uQ8TXdRwNSeclZHPOvGOmZl2Zs3H4rWKIhT+JgEQDtBbVvK9drw2Hhk8/MzjKrPQ2PCfZ9I1jicV4qgJ+DN/pqNuEexGxfoZPtMuMNuJg09oSP8Ame3+QCodSTLqjFE1N1MEOWHHmzn6tVNplujjuGO6+D/5A8iw+hqCdiO4wS7n4Q8lZfyuf+69Q0NhFdiNybaxTeTj9V/aqOBGwU2O3cnj9uLMPeTpfTUeYrNxkhslLNgTzQ37uuoVVd5DjuIL6aHStlmZiE1ZIgQmrAQmpIFJqxAhNWApNWSIEJqSBSasQRqqaHQ9oRcSN0HMjTxGo+Yr53B1VSrxm9E8+DyZ11obdNxNHma16+1WZ4R1vYsSpBGFFhavzjFTcq0nLefU0YpQSRLZq5HI2SMTNWTkXSMbNWTkXSNf2tPmew/CLefX/XdXuYCk4UrvvzPOxM9qeXcUm0topCNdWPJR9T2CvZwuDnXeWS3nFVrRp66ibI2PjNpm6DhwX1c3y6dnXIfDTTqr1oUaOF8Zc+nyct6lfwXPqdC2FuZhMLZsnFkH45ADY/wryX699ZVK85+B0woRh4mx1ibBQBQBQBQBQBQBQFftDY0M9yy2b3l0bz7fOqSpxlqDUdt7sMgJIzL76818R2fKuaUZ0s1mg4qWpp+OwbRHXUHkw5H9jXRSqxqaamEoOJDJrYoKTVkiBCasBSaskQITUkCk1YgQmrEEeqGh0omvlUj0CPNhY2N2jUntKgmuiFerBWjJpcWZypwk7tI2bZ7eqTw/WvFxEv1GehSXVR7OubrI8Db6Vzqrs9y8zVwuQFKMWVXe63v0j1VvN1IxjKUY2fgjJbLbSby8SmkxjgEtIwHXdjXsRw1NytGCvwOF1ZWzb9Sl2xtcQjImsh6vdvyJHb3V6+BwDrvallH54fk5K+IVPJal/ufuE0hGJ2iCb9JYTzPYZf8AR8eyvTq4iMF0dLJLnL8mNLDuT2qnPH8HSUQKAFAAAsANAAOQArgO451tzfvEQYjHRRyYVmgliSLCGOQ4nEh44mOR1k0N3IB4ZAy69dAbBPvlGLokEryiXERmIFAR6MnEZiWawQqYyD/8qUBRYb7QJwEnmwjmM7PjxbxxcMsgLvnkztIAUyKCFvm15aGwF9PvnEsjKIZWiSWKCScZMiSzhCilS4cj1kdyF0zjsNgPNm75xzTQQ+jzIJnxEUcjcPI0mFL8RbK5YaRsQSLdVAQt695cXhZ3ReFDCI0ZJp8PPLFK5L50eeFguGACrqwPtXtQDNvwUlxaSYVykM2GhVo2RzI2KEZXKMw09YpHd36ABn3y4UkiSQTM5xEGHWFVizJJNhBiMufiZWGhBa4AJ7BegHi36RxDkwmIaRhiGeMcLNCuEk4UxYmTK3TIACk37qA2HY+0FxMGHxKAhZo0kUNa4EihwDbS9jQEygKDbO7ySBmjUXPtJ+FvDsNctXD/AN1PJkp9zOabZ2U0BJAOS9teansb960w+IVTqyykYVKezmtCqJrsMhSaskQITUkCE1YgUmrAUmpII9VsXudKJr5U9AQmrJAlYTaJjGUi6/AiuavhFVzTszWnWcMiSdrJ2N8B+9cT+nVd69/wdH9VDcyFiMeDm4aBc3Nus/tXbRwbVukle2i7jnnXTvsq1zVd4Nr8HKiWze0b8lHV5318q+m+m4Dprzn2dOO/8Hl4nEbHVWpt32e7mFMuNxq3lbpRo3NL6h3B/Geofh8eXdisQrdHT0XNl4EYeg+3PU6FXAdgUBCwOy44ZMTKl807iR7m4zLGkYsOoZUWgKbZu7bem47G4hYwZkEKLGzt6sWDSOWC2kcLECFGghXpHqAbD7lYZImhzSsrYX0MlnBIgu9lBC8wHIB7AKAyPufhjJxLyZS8UrxCQiOSWAII5HX3hw00BAOUXBoDLhd1sPG2GZc94JZ5Uu348TxOJfTUesa3ZpQHm1t14sS8jtNOglUJKkcpVJVAIsym+XQkXWxI66AxHc3C53deIoZ8NIY1boB8Jk4JAIuNI0U66gedAZpt2MO0xxBz5zPHiPa04kUBw66W9nIeXbQFPtvc5rIcEFzXxWYyTywm2MbiSANErZkz65SAdBZl1uBsmwNn+i4XC4Ytm4MMcWa1s3DRUzWubXte1AT6AKAqdt7IWdSQBmtYg8nHYe/v/ocuIobXXhlJFk+56HJtu7LOHbS+Qk5SeYI5qe/+u2t8JiFWVn2lqc1WnsPwKomuwxFJqxAhNWApNSQITVkiDFWZodHJr5dI9AQmrECk1JAhNWIIm0saIULtr1Ae8TyH9dQNdOFw0q9RQXm9y59zOrUVOO0xvsz3aOLlOPxQuiscgI0kkB9r8q/X8tq+kxdWNGCo08svRfzzqcOGpOpLpJnXa8k9EKAKA0/0/HYqXaHo2IigXCyCJFkiziRljjlZpWzAqhz2GW1gCdeVAZMRviySyD0a8EU8OGmmEtmWWbh2KRZenGDLGC2YHU2BtQEWHf8Atlknwhjgb020iyiRs2BMhf1eQdFkiYg3vcEWtZiBM/4pxC4fjzYJY85h4AOKTLJxyAqs2XMrrfVVV76ZS2tgK6DfuWR8I4w6LA0OMecmRi6NgnCSCMZBmW9iL2LZtQuWxAeDf52iWVsCwLthRGBISrLi5BGt5GjUCVebJqNVs5BuAGbfqQRP/ZUE6TzQPE2Jsl4IxKzI4jLyAqyco9CdbDWgK/aG/M7pipY4+HAuEwWIjdJFE4OLc6FZInjGgIIsbZL3OfoAXJ319db0f+z+l+hcbidP0i+X7nL91n6ObNe+uW2tAG7m+TYqTCq+F4S4mKZ4m4oc3w7qkisuUZR0gQb69YFAbbQBQBQGv70bHWZGJGhHT7uxx3iuDEwlTl09PVa8/JdWktlnIMbhWiZkb8JIv29YPmLEV6tKrGpFSj3nBOLi7Mik1uVFJqSBCaskQFSDFWRodEJr5k7xSakgQmrECk1YGuy4J8biocHGxJZiCeeUAkyyfIqAfcI6xX02BSo0XVatz1V6Zvxd9UebWTqTUE+e9/Y7hgMGkEccMS5URQqjuH1PfXBOTlJyerPQjFRVkSKqSFAFAUe090sHiZHllibM4AlCSyxrMF0UTJGwWWw06QOmnLSgGk3VwbTDEGI5gyPlEkgiLxgLG7QhuGzqALMVuMo7BQDpuzhAIl4NxG0zICzML4nPxrgnpBuI+h0F9KAhruPgAhQRSc4yrceYyR8G/CEcpfPGq5msqkAZjQGWDc/BIUZYmGRpmUcWUqPSMvGXKXsY2KglCMt7m2poD3DbpYONFiVHKK8TqrzTSZDh2DQqmdzlRSNFGndQHk+5+CdzI0RzGV5SRLIuZpVRJAcrC6MsaAp7Jy6igMKbj4AJwxE+ThJCVM8xBjjkMkam765STlJ1A6I00oCZ/wAMYTj+k8I58/FtxJOHxcuXi8HNw+LbTPlv30A+B3dwsBwxijt6OsqxdJjlWYq0g1PSuVHO9raUBa0AUAUB4RfQ0auDm2/+x8gaVRcAWbvQnot4qTbwZq4sI3Rr9C9HnH8efykK8dqG2vM58TXtnAITVkiAqQFAYqyNDoRNfNHcITViBSasCNjcRkRmv1Hy05+Arow9HpJqPPDzM5y2Vcufsh2SMs+PKkcRikV9SI1PSN+0sLH/AOuvex02tmk3os+PPycuEgnepv04HRq847QoAoAoAoCpbeCHjNCqyuUdIndIndI5JArKrMB2OpJ5LmGYigIZ30wgQykyCPhyyJIY2CTJApeQxG3S6Klh7wBIuNaAc724cEoVmEgaNeEYmDnihzGwB0ZTkfpA2upHMUBc4SfiKHyMt79FxlYWNtRQGagCgCgCgCgCgCgCgCgK7bmEEkZuL2BuO1Tow+H0rhx1Nuntx1jnz8mlNq9n3nENp4IxM6Hmj5D3g3KN5gH+Xvr1sPWVWKlvV/yvJ/J59SGy2t2X4INdJmFAFAYqyNDfya+cO0UmrJAQmpSINe3hmZg6JqSyRKB1s1nb4jIPM1730uklKLfjJ8F1V77TOHFTbTS8F939jtuxdnrhoIMOvKNFW/aQNT5m586wqTc5uT7zshHZio7ibVCwUAUAUAUBRpsBkmlkhxTxxyyrNLEFQ5nVUUhXIuqMI1zDnzsRegKybcZXhGGfEyGGOKaLDplW8QmieC5bnIUjdlW9tDrmOtANtHckYi7YifiyEw+3DG0eSDiFI+CdCCZWJJJJNuoAUBsGxtnjDQpCMllvYRxrCgBJNhGui8+qgJtAFAFAFAFAFAFAFAFAeMLgg1DSaswcu3ywoDtEfaN7fxZsq/J44yT2Oa8/A7VOT3RdvS794ydvFE4hKXnz8pGhA19Eece0AUBirI0N9Jr55I7RCaskQYpZLW7yB+/yufKrwhtX8FfnzyKt2IGwYvSNo7OiINgTO3jZpRfwKqPO1fQ0I9HQqz4RXCOXvm/c4m9qrCPn65nba847woAoAoAoAoCrwmOlbESxMoEag5Gyt6w9DMAb2GS9j72YWtkYUAuAbEyrMs14yVsjCJUKkhgSPXSZiNDrbz6gK7FT41GmRLOglgHEZyrhXaLOEQREOLMdcw6+Vr0BBxO1sZLEGylGysSsatmjZsNiSYn5glWWPXQk81F1uBa4PEYjEOUaQxhTnORMuXWWMQuXuGPsvcW9kHkwoDYKAKAKAKAKAKAKAKAKA5z9q2Hy8GYcwSt+6RCD/k+dYYZJYqcHpKKl5p2K1/21Lc2vU5w7XJPaSfjXrxVlY4nqeVJAUBirI0N6Jr59I7BSasQR8X7LHsDEeOUj9a3odtLe0vdFJ6Er7Oo8+1ZyeUUGUd1zF+7fGvadlgo75Nt+/wDBzU88RLwR1muA7QoAoAoAoAoDBHjI2YIrqWOewvr6tgr6dxZQfzDtoDBHtaB1keGRZeGuZhEwkbkSBZTzNjbttQEWTeGNSc8UqorIjSFVCq8jBUUjNn1LLqFI6Q150Bkxm38PEcpkBNs1l1st4xcnkB61Dz5GgMq7Zw5y2mTXlr2Fl1905kcWOt0YcwaA8h2xFIyCImQNfpIMyrYIRmbquHUjtGooCwoAoAoAoAoAoAoAoDTvtPw5fCGwucyWA1JJkRRb+Y1z3UMXTk90k/JX+xFRXpSXD5OUYxbOe8K3hnUNb516tJ3h6r0djilqYa0KhQGKsjQ3gmvBOsQmrJEEXaJ9VJ+U/MV04VfrQ4opU7LLf7Lx/b9oH+BfmR+1erU/6OkYUf35nUa4TsCgCgCgCgCgK7BbOyT4idrdPKFUG4ACgM2oGVmyoCBp6teu9AZsDs9Ic2RpTmtfiTSzcr2txXbLz6rX07BQGIbHhEz4kxI0ptZ2VSyZVCgK+XMo0+ZoCuwO7CKkQd2DLmuEK5bNJE6JcrcqiwxIDoSqa6mgMzbtREueJJZ2DOt1sxWaSdPw3FnkPLmFUG+twLHBYFYs2Uk5ggN7fgUIOQ7BQEqgCgCgCgCgCgCgCgNf31lVIFd/ZWSJj4LNGT9K4cXBznCMdXtr1iy6aUW34fKONY6XOUkPNlue4hmX/tr2aMdhOO5/ZP7nnzd7MjVsUCgMVZGhupNeGkdQpNSQQtqS2jf8rfIE/pXZgobVWPFe7sZVXaLLr7NXy7Sxi+9CGHkYwfrXoPPBU3ubXyZ0ssRJeCOp1xHYFAFAFAFAFAVOBllbFYgM8vDAARHjAQnolmRxGLrqAAWJJzm1gDQDYOKd1mTEM65lyqwKKwuGBKlORGmtAVG0IsVDIwiM7ohGJvmL57WjkwwF9brmYL7xB1oDC0m0YkKKXaQKQfV5kP8AZTJxQxFy/pPQCZvZ/DpmoBsSuLDmMGcrxoSpCX4o9Ij4xkYKAiiNcwylQczaG2WgNnwGF4SLHnd7X6UjZ2NyTqx586AkUAUAUAUAUAUAUAUBqf2lN/Y3A5koB5yxj9a55Nf1VL/6fpET/al5fJx4tcDuFvmT+tewlZs888qQFAYqyNDcya8Q6RCasgRsdHnR17VYfFSP1row89ipF+K9mmZ1I7UWiRuVicm08I97iaFoye8KX+qqPOvUiv8Al6kHk4yvbjyzCLtWi96OyVwHcFAFAFAFAFARF2jGZjh7niZS1ijAELlzFWIs1s68j19xoD3D49JCyqsl155oZUB6uiXUBvK9AJDtaB42mEg4a6F2uq3sDa7W94DuNxzBFAEO1YXSGRZAUlNkYai+VmsSNF0U8+vTmQKASbbeHRYXeVUWWxjznISCM17NYjS178rigMuI2hGkkULZs0hIS0blSQrMQXAyroh5ns7RQEugCgCgCgCgCgCgCgNN+0ScBIlPvhj4Rq8x/wDzHxrhleWKsu6HvJqP3LTyp57/AIzORCvfPNPaAKAxVkaG4E14yR0ik1YgUmpsQU8Uhw3ClAP9mnDjtKZg1vO9q9ylNVKv/sj7o4prYin/ALX7HfY3DAMpuCAQe0HUGvNasekNQBQBQBQBQFfFseJZvSFzZ+n16esyZxbruY0OvLLpYXBAzYfZ8MZZoo0RmvdlUAnxNtdaA8wGzo4FMcQIUm+UsTqQAx11uSCxPWzMTqSSBh2nstZoBhhZU6AOhJyowNlIIIboix6uw0BNkhVstx7JuvcQCAfmaAwPgFMy4jM2YLk5i2UnMRYjS5te1r5VvyFAS6AKAKAKAKAKAKAKA5f9pW0LuIwfwMf52VAfDKko865MBHpa06vdtW8or8uLK4mWzFR8Pnlmg17hwhQBQGKsjQ24mvIR0CE1JApNWIIU4DMVPJ1yHxAzC3kW/lrsptxgpLWLv9n7peplJJuz78ufc6Z9mu0zNg0jc9OA8FvBfYPhlIHka1xcVt7UdJZ+pfDSbhZ6rI2uuY6AoAoAoAoDVZfTJJZhE0uUTBSbxBVjz4e+QHXMFMpuR73PoCgCPBY71vSdRnYIoaMDK+KxWZjbW/CaE3Oug/FmoCGYsbw5khEgnAjsWZGcKuFQRh7uAy8bjahrZg1wQTQGxbCvfEm1lMxKDqHq4+La2n3vFvbrzUBaUAUAUAUAUAUAUAUAUBhxcuRCevkPE1zYut0VJy9OJenHalY4ZvTi+LiZXvpoF/KosD5+1/irs+m0eiw0Y9/fxf408jjxM9qo2VVdxgFAFAYqyNDaya8k3FJq7i07MhO6uITU2BgxKkjTmLEeI1A/TzNbUnsyz0eT8+blJq6y1Lzcna4w+IBJtHMAr9x/Cx+ndc1aWXVeqy557yabzvvOsVU6AoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoAoDWd8NpiON+lYAEXHMEjUjvAvbvsOuvJryeIxEaUc1HXjzr4X3GyexTcmcanlLszEWub2HIDqA7gLAeFfSwjsxUeeWeU3d3EqxAUAUBirI0NrVSTYf1bUmvJlJRV2dCTbsjGTXoSp/p06nk/J5exxQqfqVKfmvNZ+4rNSVVJZZ69+WbeqJjTbefh3Z5JHhPfpVm3t3v1bq2fdfd3WRVLqWt1rP1t73YgUd3/m/61bqSSvbm9vte/qHtJu1+bfza3obzurttpl4MskpZFY9AFmOqhT0QSbajXS516qrbLuvz5cbG0ZN77Z87+F/wbDJPIRGJOILIwk4atfjARkWsNRq9vwkixooxztbXK+7PneXcpZbV9M7b8v58Bc8ub+84mc6WOTh2NtQMt7WOhvm05aUtG3da3nfn2F5X7738rfH8+Asccy2OaU2GHOtzcu+Wa4/L1cl5i1S3B7v7vjLnvKpTW/8At93n7eheVzHWKXFwtxc8hfU+VAeGVQLlhbtuOrnQC+kJ76/zCgHLjXUac9eV+VAKkytorAnuINAZKAKAKAKAKAKAKAjY7E8Nf4joP3rlxeIVGnfvenPgXpw2mci3o2p6VJIiH1UV8zdpv1dpZ7AflB5A1b6fhuggpz7ctF+eCzfFrWxhiKvSNpaLn5NXr2TjCgCgCgMVZGhuuzcpEykgMUIS+l+0ePKvnMd0inScU3FSvK3s+Czud+H2bTTedsivY19Ti1Gnh1T4fyz5/COVTEOpx/hEKXEOGICEr3dtr3v2dWl/Lr81RVtT1hJJ5OjZO2417dBft568vleyjHeQeCZybZCB2nuHX493ZVkkiGZdn7RngZJY7LIpFjbom46QIvqNbHXXu6llcJ2Z1XYu9JxcMkqYdwUQlxcMQ4W4VVW5a5vbTq7dKq42epupXJUW08SqgNhXkNzZhlTMARlYoxul8w0PutoLAFZbySZgcdJI1nwzxCxJLlTfUWy5CwN7nmQdOXZDRJPqAaHtLdqZ8RiT6KryS4mCaHGZowcPHEIbpcniAjhyWVAVbi6kXagG2Ru7Nmw2HxGGUwwTYyRnYxtHMuJeYxqsdy17S9LOoAKm16Ah4XcVuFgIhhsPHkbEtNmhilXp5hGSlwHNiADragHn3TniSTAwRs8Uj4AriGdOguDMAfigkMWIg0yqR0hytQF9u3u4mGxW0JhhooxJInBZEQHh+jwq4GUXUcRGNus60BstAFAFAFAFAFAY8RMqKWY6fXuFZ1asacdqRKTbsjQN79tSMRh4LmeUWAH92nWb9XXr1anqFebhodPN4mvlCPKXj473kXqycV0cNWaDj5FULBEQUQ3Zh/eSWsWH8I5L3XP4q96hGUm6s1ZvRblu4vWXjl3HnzaS2Y6L3fOhCrpMwoAoAoDFWRobBMG/AwHiuYfIj61xU5uDuvYvOEZq0ldGIRNzeQnwAUDy1PxJq0p7Tv8AOYjFRVkrGQmqpEiE1YgUmpIEJqyRBL2TtWXCyCWFrHkQeTDrVh2fSptclSad0db3e3ghxqZozZx7cZPSX917D+ulZtWOiMlItqgsFAUc+8aI0iNG/QmWInLJksVRi/EyZRYN7N+rvoCK298b8MwKHDPGhOddOJNho73QsDpOTa97rY2oDNPvOnqhGgvIVI4rcMZJIpZI3uob2uEwsQDob94DpvKvDVjDIJDkvFazDOsZv08vRHEUXIGulgbigGwu8StZWicOzFUUZfWWaYdEkgcoXY5raDS+lAY5N6ocjSIjlVsSzDILcKOd+euYRPmta11IuDQHn/E6hirREHiOoGYXZFKokiDrzSSRoBce3cnSgMk28qAlVRrqYxJmsBGJJ2h1IJubpIdLiyjXUUBL2VtPjmT1bIFyWzWBIdA4NgSOvtoCxoDDisSsYzOfAdZ7hWVWrGlHakSot6Gq7V2o7sFUAu18idSjrd7fhHzOgrxqk3XbnUyiubLxftrobrq5LU0/eLacUKyQQHNK+k8ulz2gsOv+EaAad1ejgcNUqyjVqZRXZj/H3eb18Tlr1IxTjHV6s1GveOEKAKAKAKAxVkaGwk1wGgpNWSAhNWIFJqSBCaskQKTVgITUpED4XFyQuskTlHXkwOv+47joatbuZF2s0dG3c+0COS0eMtG/Lif3bfm9w/LvHKs5U9xvGqnqbujAgEEEHUEagjuNZGxHbZ8RzXQG7iQ89XAAB/6Rpy0oDAuxYAFGQkKwZczu+Uh43FizGwDRoQOQy0B7hdjwRFSkdiput2ZstlZAq5ibIFdgFHRGY2AoBZ9jxySSyS9Iuixi10KIpL9F1IYNmN7gi1lta1yA0mxoGFshHYVd1YdJmurqQym7vqDyYjkaA9j2Ph1FliUC97C4H3Qh5crcNQtuwUAibDwygBYQAIkhFibiOM3RQb3FjqCNbgG+lAexbFw63tHzyXJZmLcOR5VLEkljnd2udSWN70Bl2fs6KAMIlIva92ZybCw1Yk2AsAOoACgI2O2yidFOk3/SPE9fgK462MjDKOb9i8YXNU2jtdnkMaesmtrf2Il96Qj2R/CNT864OjlUXS1naPu/CK++iLOdnsx1+OJqu19uhA8WGcszfez9b9VktyUchbQdXbXqYbAubVSsrJdmG7jve/f37jlq17Jxg+L/AAa1XsHIFAFAFAFAFAYqyNC/JriSNBCasQKTUkCE1ZIgUmrAQmpSIEJqxApNWRArVaxBZbF3ixODPqZSF60PST+U8vEWPfUSgpalozcdDetl/aVC1hiYyh95OkviVPSHgM1Yui+42jXXebTs7eDCYi3BxEbH3c2VvNGsw+FZuElqjVTi9GWdVLBQBQBQEfEY6KP25FHcSL/DnVZTjHVgq8TvJGNI1LHtPRHz1+Vc08XFdlXLKJQ7T28xsJH58o0BJbwUat56CuVyq1uHovNk3jErpZyq8Sd+FGPwg9I9gZl6/wCFfieVZxgm9iktqW/u8k/l+iJcrLalkuecjVdsbaEoMcCcKMm7ABVzk+8F/evawuCdN7dV7Uu7V24XOKrWUlsxVl8lNXoGAUAUAUAUAUAUBirI0LwmuQuKTUkCE1ZIgUmrAQmpSIEJqxApNWIEJqQKTViBSaskQehQev46fOlwKy9v70TBMwW1Z4bcKZ1A6ldlHhYGqygpallJrQvsPvliut5PHPf/ADCuWVBrSRqqrJuH3smc2Mso/wASn/Kb/KsJ0pxV7/P4LxqXPcRt0cpMQzE6ZczOfDLWHRVpdz+xfpIrvK+XeAA5I4XZ72sRl18Bc1eOBbW1KSSKuvnZId9rOq+vdYz7qdOT4G4Q97fCqrCxk/005Le8l+X5E9K0us7fJVy7dZcww6ZL+05OeVvFzy+dq644FOzqu9tFpFeRk67XZy+StxOJeQguxNuWpNu3n19pOp6666dOMF1Vzz5GUpOWpgkcKCWNgOurtpZshK+SMWKmyxs69lxVZStG6JirysxsM5ZEY8yoJ8wKmLvFMiSs2jLViAoAoAoAoDFWRoXRNcpYQmrIgUmrAQmpSIFJqxAhNWsQITUgUmrECk1ZIg8qQFAFAFAeUB7c2tfTs6vhUWV7gaKQoQymxHI9nhUSipKzJTtmhcbtV40ZgTrobGxYn3n9ojxNZShCKu1fd/jRF4Xk7XsQZWnUFvVkDUqA3Lrsf9qs3NK+QSg3bMMRjrRrIg9oga9V73+lJVOqpIRp9ZpkyVrBj2An4CtHoUWpWYqZpMPn019rn71hasZScqdzaMVGpYyy5uA2fL7Ita/Kw5366l36N3Kq22rHmHebhpkVAAotmJu1gOVuVIueyrISUNp3Mse0FMRlItbQjv7BUqotnaIdN7WyKZJ7Z8qduTW9vHtpepa+XAWhe2fEZ9oKI1kAvc2A79efwo6i2dpBU3tbIuIknQFzwyBzUZuXcb/pSTmlfIRUG7ZkqCTOqsOsA/GtIu6uUas7HlZly3JrnRIpNWAhNSkQKTViBCasQITUgUmrECk1ZIg8qQFAFAFAFAFAFAFAQNtfd/4hWVbsmtHtEvEsArk8rH6VpJ2TM4q7RTMpGGjv79/K5rm0pLidOtR8C5nPQb8p+ldL0OZaoqx/7Ty/76w/0ud5v/q87iXifuD+QfQVeX7fkZx7fmZ8D93H+VfoKvDsorPtMpspOHYjqkufDl+tc1v0/M6L/qeReCQWzX0te/dzrqurXOazvYo1QjDpfrlBHhYj9K5bfpridN/1HwLjaH3cn5W+ldFTss54dpHmz/uo/wAo+lKfZRM+0x6qSWpNYkiE1KRApNWIEJqxAhNSBSasQKTVkiDypAUAUAUAUAUAUAUAUBA2193/AIhWVbsmtHtGQ7Oj7Db3cxy/C9T0USvSSJDxKwykC3K1XaTViqbTuQsRg4kRi17AGwLG1+qwvWUoRiszSM5SeRlwEPqUVhzGoPfc/rVoR6iTKzfXbQ64RQpTXKeosTbuHZUqCtYhzd7maNAoCjkAAPKrJWViG75iQ4dUBVRobkg68+fOoUUlZEuTbuzD/wCnx8ulb3cxy/C9V6KJPSSM02HVwFYaAggDTly5VZxTVmQpNO6HlQMCp5EWPnUtXVmQnZ3PIowoCjkBYUSsrIN3dxazLlmaxApqxAhqyAhqyIFNSQKasQLVgFAFAFAFAFAFAFAFAFAQNtfd/wCIVlW7JrR7RPrUyCgNfxf34/MPrXJP9w6oftmwV1nKFAFAFAFAFAFAFAYqyND/2Q==" alt="Concatenation" className="movie-poster" />
                  <h6>Concatenation</h6>
                  <p>Sequential combination of expressions</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Kleene Star" className="movie-poster" />
                  <h6>Kleene Star</h6>
                  <p>Zero or more repetitions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Regular Expression Operations Tutorial</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/4C7ZQJDoK-g?si=whl3i0-ddHVAYYOK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Union (OR) Operation</h4>
              <div className="definition-box">
                <h6>Union Properties</h6>
                <ul>
                  <li><strong>Notation:</strong> r₁ + r₂ or r₁ | r₂</li>
                  <li><strong>Meaning:</strong> Strings matching r₁ OR r₂</li>
                  <li><strong>Example:</strong> (a + b) matches "a" or "b"</li>
                  <li><strong>Precedence:</strong> Lowest among the three operations</li>
                </ul>
              </div>

              <h4>Concatenation Operation</h4>
              <div className="definition-box">
                <h6>Concatenation Properties</h6>
                <ul>
                  <li><strong>Notation:</strong> r₁r₂ or r₁·r₂</li>
                  <li><strong>Meaning:</strong> String from r₁ followed by string from r₂</li>
                  <li><strong>Example:</strong> ab matches "ab"</li>
                  <li><strong>Precedence:</strong> Medium precedence</li>
                </ul>
              </div>

              <h4>Kleene Star (*) Operation</h4>
              <div className="definition-box">
                <h6>Kleene Star Properties</h6>
                <ul>
                  <li><strong>Notation:</strong> r* or r⁺ (one or more)</li>
                  <li><strong>Meaning:</strong> Zero or more repetitions of r</li>
                  <li><strong>Example:</strong> a* matches ε, "a", "aa", "aaa", ...</li>
                  <li><strong>Precedence:</strong> Highest among the three operations</li>
                </ul>
              </div>

              <h4>Identity and Algebraic Rules</h4>
              <div className="table-container">
                <h6>Algebraic Properties</h6>
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Rule</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Identity for Union</td>
                      <td>r + ∅ = r</td>
                      <td>Empty set is identity for union</td>
                    </tr>
                    <tr>
                      <td>Identity for Concatenation</td>
                      <td>r·ε = r</td>
                      <td>Empty string is identity for concatenation</td>
                    </tr>
                    <tr>
                      <td>Annihilation</td>
                      <td>r·∅ = ∅</td>
                      <td>Concatenation with empty set gives empty set</td>
                    </tr>
                    <tr>
                      <td>Star of Empty Set</td>
                      <td>∅* = ε</td>
                      <td>Star of empty set is empty string</td>
                    </tr>
                    <tr>
                      <td>Idempotent</td>
                      <td>r + r = r</td>
                      <td>Union with self equals self</td>
                    </tr>
                    <tr>
                      <td>Commutative</td>
                      <td>r + s = s + r</td>
                      <td>Union is commutative</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="example-box">
                <h5>Complex Expression Examples</h5>
                <div className="expression-examples">
                  <h6>Practical Examples</h6>
                  <ul>
                    <li><strong>(a+b)*abb:</strong> All strings ending with "abb"</li>
                    <li><strong>a*b*:</strong> Zero or more a's followed by zero or more b's</li>
                    <li><strong>(ab)*:</strong> Even-length strings alternating a and b</li>
                    <li><strong>a*+b*:</strong> Strings of all a's or all b's</li>
                  </ul>
                  
                  <h6>Recursive Definitions</h6>
                  <ul>
                    <li><strong>r* = ε + rr*:</strong> Recursive definition of Kleene star</li>
                    <li><strong>(r*)* = r*:</strong> Star operation is idempotent</li>
                    <li><strong>r⁺ = rr*:</strong> One or more repetitions</li>
                  </ul>
                </div>
              </div>
            </section>

            <Quiz title="Module 3.2 Quiz: Regular Expression Operations" questions={module2Quiz} subject="FLAT" unitId={3} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Regular Expressions</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Applications and Conversions →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.3</div>
              <div className="lesson-title-main">
                <h1>Applications and Conversions</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Practical Applications of Regular Expressions</h3>
              <p>Regular expressions have widespread applications in computer science, from text processing and compiler design to data validation and programming languages.</p>
              
              <div className="theory-box">
                <h5>Application Domains</h5>
                <p>Regular expressions are essential tools across multiple domains:</p>
                <ul>
                  <li><strong>Text Processing:</strong> Pattern matching, search and replace operations</li>
                  <li><strong>Compiler Design:</strong> Lexical analysis and tokenization</li>
                  <li><strong>Data Validation:</strong> Input format verification</li>
                  <li><strong>Programming Languages:</strong> Built-in regex support</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Text Processing" className="movie-poster" />
                  <h6>Text Processing</h6>
                  <p>Pattern matching in text files</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Compiler Lexer" className="movie-poster" />
                  <h6>Lexical Analysis</h6>
                  <p>Tokenization in compilers</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Data Validation" className="movie-poster" />
                  <h6>Data Validation</h6>
                  <p>Input format verification</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Thompson's Construction Method</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/YGjEoND31YU?si=uvEfrCri30O-AODe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Text Processing Applications</h4>
              <ul>
                <li><strong>Pattern Matching:</strong> Finding specific patterns in text files</li>
                <li><strong>Search and Replace:</strong> Sophisticated text replacement operations</li>
                <li><strong>Text Validation:</strong> Checking format compliance</li>
                <li><strong>Command-Line Tools:</strong> grep, sed, awk utilities</li>
              </ul>

              <h4>Compiler Design Applications</h4>
              <ul>
                <li><strong>Lexical Analysis:</strong> Breaking source code into tokens</li>
                <li><strong>Identifier Recognition:</strong> Validating variable names</li>
                <li><strong>Number Parsing:</strong> Recognizing numeric literals</li>
                <li><strong>Scanner Generation:</strong> Automated lexer creation</li>
              </ul>

              <h4>Thompson's Construction Algorithm</h4>
              <div className="algorithm-box">
                <h6>Converting Regular Expressions to NFA</h6>
                <p>Thompson's construction converts a regular expression to an equivalent NFA with ε-transitions:</p>
                
                <h6>Base Cases</h6>
                <ul>
                  <li><strong>For ε:</strong> Single transition on ε from start to accept</li>
                  <li><strong>For symbol a:</strong> Single transition on a from start to accept</li>
                  <li><strong>Single state:</strong> Each base case has one start and one accept state</li>
                </ul>
                
                <h6>Recursive Construction</h6>
                <ul>
                  <li><strong>Union r|s:</strong> New start with ε to both, merge accepts with ε</li>
                  <li><strong>Concatenation rs:</strong> Connect accept of r to start of s with ε</li>
                  <li><strong>Kleene Star r*:</strong> Add ε-loops and bypass paths</li>
                </ul>
              </div>

              <h4>State Elimination Method</h4>
              <div className="algorithm-box">
                <h6>Converting Automata to Regular Expressions</h6>
                <p>State elimination systematically removes states to derive regular expressions:</p>
                
                <ol>
                  <li><strong>For each state q to eliminate:</strong> Consider all paths through q</li>
                  <li><strong>For each pair (i,j):</strong> Replace path i→q→j with direct transition</li>
                  <li><strong>Combine expressions:</strong> Use union and concatenation</li>
                  <li><strong>Continue elimination:</strong> Until only start and accept remain</li>
                </ol>
              </div>

              <div className="example-box">
                <h5>Thompson's Construction Examples</h5>
                <div className="construction-examples">
                  <h6>Base Case: Symbol 'a'</h6>
                  <pre>
{`[start] --a--> [accept]`}
                  </pre>
                  
                  <h6>Union (r|s)</h6>
                  <pre>
{`[new_start] --ε--> [r_start] ... [r_accept] --ε--> [new_accept]
           \--ε--> [s_start] ... [s_accept] --ε--/`}
                  </pre>
                  
                  <h6>Concatenation (rs)</h6>
                  <pre>
{`[r_start] ... [r_accept] --ε--> [s_start] ... [s_accept]`}
                  </pre>
                  
                  <h6>Kleene Star (r*)</h6>
                  <pre>
{`[start] --ε--> [r_start] ... [r_accept] --ε--> [accept]
   ^                                        |
   +----------------ε-----------------------+`}
                  </pre>
                </div>
              </div>
            </section>

            <Quiz title="Module 3.3 Quiz: Applications and Conversions" questions={module3Quiz} subject="FLAT" unitId={3} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Regular Expression Operations</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Pumping Lemma →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.4</div>
              <div className="lesson-title-main">
                <h1>Pumping Lemma for Regular Languages</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Theoretical Foundation for Non-Regularity</h3>
              <p>The Pumping Lemma provides a powerful tool for proving that certain languages are not regular by establishing necessary conditions that all regular languages must satisfy.</p>
              
              <div className="theory-box">
                <h5>Pumping Lemma Statement</h5>
                <p>If L is a regular language, then there exists a positive integer p (pumping length) such that every string w in L with |w| ≥ p can be written as w = xyz where:</p>
                <ul>
                  <li><strong>|xy| ≤ p:</strong> First two parts combined have length at most p</li>
                  <li><strong>|y| ≥ 1:</strong> y is not empty (middle part must exist)</li>
                  <li><strong>For all i ≥ 0:</strong> xy^iz is in L (pumping y any number of times keeps string in language)</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Pumping Lemma" className="movie-poster" />
                  <h6>Pumping Lemma</h6>
                  <p>Tool for proving non-regularity</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Proof by Contradiction" className="movie-poster" />
                  <h6>Proof by Contradiction</h6>
                  <p>Standard proof technique</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Non-Regular Languages" className="movie-poster" />
                  <h6>Non-Regular Languages</h6>
                  <p>Languages that fail pumping lemma</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Pumping Lemma for Regular Languages</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BKIUSHYpq_Y?si=_895K7WtuvDYqsYA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Application and Proof by Contradiction</h4>
              <div className="algorithm-box">
                <h6>Proof Strategy for Non-Regularity</h6>
                <ol>
                  <li><strong>Assume L is regular:</strong> Start with assumption that language is regular</li>
                  <li><strong>Let p be pumping length:</strong> Use the pumping lemma's guaranteed value</li>
                  <li><strong>Choose string w ∈ L:</strong> Select w with |w| ≥ p that depends on p</li>
                  <li><strong>Show w = xyz cannot satisfy condition 3:</strong> For some i, xy^iz ∉ L</li>
                  <li><strong>Contradiction:</strong> Therefore L is not regular</li>
                </ol>
              </div>

              <h4>Key Insights and Intuition</h4>
              <div className="definition-box">
                <h6>Why the Pumping Lemma Works</h6>
                <ul>
                  <li><strong>Finite Memory:</strong> Finite automata have limited states</li>
                  <li><strong>Pigeonhole Principle:</strong> Long strings must revisit states</li>
                  <li><strong>Cycle Detection:</strong> Repeated states create pumpable loops</li>
                  <li><strong>Necessary Condition:</strong> All regular languages must satisfy this property</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Classic Example: a^n b^n where n ≥ 0</h5>
                <div className="proof-example">
                  <h6>Proving Non-Regularity</h6>
                  <p><strong>Language:</strong> a^n b^n where n ≥ 0 - equal numbers of a's and b's</p>
                  
                  <h6>Proof Steps</h6>
                  <ol>
                    <li><strong>Assume regular:</strong> Suppose L is regular with pumping length p</li>
                    <li><strong>Choose string:</strong> w = a^p b^p (clearly in L and |w| = 2p ≥ p)</li>
                    <li><strong>Analyze decomposition:</strong> w = xyz where |xy| ≤ p and |y| ≥ 1</li>
                    <li><strong>Key observation:</strong> Since |xy| ≤ p, y consists only of a's</li>
                    <li><strong>Pumping test:</strong> xy^2z = a^(p+|y|) b^p has more a's than b's</li>
                    <li><strong>Contradiction:</strong> xy^2z ∉ L, violating pumping lemma</li>
                    <li><strong>Conclusion:</strong> L is not regular</li>
                  </ol>
                  
                  <h6>Why This Works</h6>
                  <ul>
                    <li>Any y in the first p symbols must contain only a's</li>
                    <li>Pumping y changes the ratio of a's to b's</li>
                    <li>Result is no longer in the language</li>
                    <li>This contradicts the pumping lemma requirement</li>
                  </ul>
                </div>
              </div>

              <h4>Common Non-Regular Languages</h4>
              <ul>
                <li><strong>a^n b^n where n ≥ 0:</strong> Equal numbers of a's and b's</li>
                <li><strong>ww where w ∈ (a,b)*:</strong> Strings that are concatenation of identical halves</li>
                <li><strong>a^p where p is prime:</strong> Strings of a's with prime length</li>
                <li><strong>a^n b^m c^n where n,m ≥ 0:</strong> Matching first and third parts</li>
              </ul>
            </section>

            <Quiz title="Module 3.4 Quiz: Pumping Lemma" questions={module4Quiz} subject="FLAT" unitId={3} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Applications and Conversions</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Regular Grammars →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.5</div>
              <div className="lesson-title-main">
                <h1>Regular Grammars</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Definition and Types of Regular Grammars</h3>
              <p>Regular grammars are context-free grammars with restricted production rules that generate exactly the regular languages, providing another characterization of this fundamental language class.</p>
              
              <div className="theory-box">
                <h5>Regular Grammar Characteristics</h5>
                <p>Understanding the structure and significance of regular grammars:</p>
                <ul>
                  <li><strong>Regular Grammar:</strong> Context-free grammar with production rules restricted to specific forms</li>
                  <li><strong>Right-Linear:</strong> All productions have form A → aB or A → a or A → ε</li>
                  <li><strong>Left-Linear:</strong> All productions have form A → Ba or A → a or A → ε</li>
                  <li><strong>Equivalence:</strong> Regular grammars ≡ Finite Automata ≡ Regular Expressions</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACTCAMAAAAN4ao8AAAA9lBMVEX///8AAAD39/cAVwAAWwAAYgDc3Nz8/PwAYAD09PT9//0AXQD6+vrx+PHv7++SkpKMjIzm5uYAZQCtra2+vr7b5tt2pnb2+vbW1tafn5+2trbPz89IikgUdhTM4cyIrohLhksATAA1NTVeXl49PT3I18ihwKHl7uUdHR0lJSVra2ulpaV4eHghcyEAbgAAUgARERG+1r5/f39ISEhhYWFwcHBAQEA4gTgsLCyctpyty61nmmdql2prnmt7ontWVlaxxbGTtpNbjlspdCmXuJc3eTcVbRValFqJrolDjUMARQCoyahel157rXu/0r9UhlQwdjAkfiQMIKIvAAALBElEQVR4nO2deVviyhLGE0jCZoAEwhoWUTY17AIXFwZUOHNczsz3/zI3QecIGqDT6ermcvP7Q8FHKKh0V1Un9XY4zsPDw8PDw4MIaZmV5bCcZmUaHvnhtMTI9P2pfryOfVMjv9hYThciQY2NaXjCN4tUcMLE9KRditwxsUyBtLjU1FSYhellqz4yqAT3MP3vN2t3uaVYp26X44rqPVeL1GiYKs27NMysES5H/pkbwoyyWYvHyNP8KbikkLmKqjCCt7JBVy3f3t6qD/TzcrqwMC3/Eihkrpk4UovwZta5F7pm9EkJtOeJeUTbKS5s5i74zJVu6UXxL3Az65zc3Vu/qrdUwtwGs1srqJ+k7sGnSrc948p0EuQn4Y1fR2l5GXn8ofup1pLJ6Pvvi8EJTbMmUub9d66hAFvSjKDgjwR1YDPrJPjL9wdJ/oqiWROp0X9/oIwrUVhTj8JzOi0vRWqZKxDjY38eJ/nrAC27K3PT0MfDaKUJOmLTv1UrtE4Eapmrx2c/n+T4Hi27lrEz379PlOYwtON/XfNx0ixNqZQMnfG59edJeo6N8fH1p7Ch4E/iSCTgbKzh6/P5zb8kNr8tHGvh5x2p0/fZ/6t7Mo2PFBLnaThWGo+lr3+j41jfxeY8WX2aRh8oFGQ6lT/Ru8cnYWysITXsksXlesAFInRh9/Xy/BlIoZfjLz5nQvz7ASVMkj+zHR+XX2cocZTzTsbu75nPAoEgCf5i7XCdXAGP2Bw/2BLPYn8KWiCk86atW60Re0G80It/nX+woeBb3lgjC+rYPD/dmvnz61OWCN/casX2vO2/kmCXW2GDkBl+dhRU5pqP5IgNDWwGZ+AaasTapeMN4OqRxJ7FsulYcskraudWq2q3j++uzdmm43UCUNE9y8f3jMccuUJPaja/1ZErfAOIUKBUEA4XSHQ/6SEUcbm9rkckMz63d6s5sqZbPO4C6byCMAsCANE9MEAKLwkyhV5+V9UWmpIOBXm+j7YQJx7do/0O2jsScay5Gtj1PZVhhegZtCQ/QDy/cXJGdsRGKzzqEMm6X/Nd7juDFO2TDAX70vE6AaLRPd8Yog8Q146N7x/ySsXBB9pDzFFO8E15Yoc0z587OQ/obs3nu0J5uVIhFAqQ0vHGC6bIU3cPCf7aWVkac1FBB6ZoqUFqIKaaPZw5XkaFhmSu6F06X0bhL02UYQMxfinNoRvH1n9Y/SRKv+M8XIb6HVeh4Meb9dPpPFmB61il2UEeC5KrM2jV02fOKpNxPBTtu6q2Tn9aP4c4wTLQw1p4JTtOJrfUceHYqv9ZLrJpivYvw0WqTSZJ3tnlnMzW06X7qQr6aFFmoiAQRuXF6I2evSzfc3jaJrN+WdgZVaHcnQVTmK92hSBOugsVvk0onF7lxSzG9eT8xvUEJ1T9NU4u6zgD9mQFnlkLvxlfSwJOl0nAkeXq31YKyWOlOrxXcav4yqXnI5x+7FH79PRUxW809OscV8NqAH1sm6YjN4hpwfqKYS6AV21LmIGg6k+FNWOOk7l0sTapuWjIFVoyp0dwjmgtmJpMXtqIh7QqvKb0Rwwzbqi2C79beF3Dumj+eMT3a9to/W5jRfZaxEx3WvsV7b+rkUJK91Nu4K2XtNornmt08e7uxnjBTjylbjc1wSrxasHy3d1TC3GoV/0zTv7FpubBQRdHIyN4x0AqUwsao5E6QhwOLlJI6h+TF8raPF2sy3ItwkAqU4tMZLlaKKMN9qq/xMlPWONVj9zc3KgG3aGji2Zd2GVR+67ia914Qvu+Vf/i9QVPKaWLsqWWoSta0SPL5dygbHRFLfL0snwSEI+opj/fjPCk07q5dOmWR3RDc2q5LC/vGbiV65ZNy7czxJwXkLGl/rqoqqqAWHeQIi2n02kmwtkwLcu62DWLFjpa0v8ndNFcLRdFNrLrI0YP1n78mAveeCXM0gyv6gL1RIQHKlqxWNTYLNR8OdpKxH9JEu+jOgDyH9coJLqCOc7qsPy4xtkHl3jS51O5luevqVqWKo2PU6nK+fjYHLt+0Z+iYI6zLh1/dqIo4zGwdpYymy1ONEXJm63ySsVRBxImATBR3hc7X1ucCPZR7yHBX29c01ea56Da2RVZ3IuHzrARPNASJX9vlZeaZPqodtEb0xiw0alNiyahPurdnHwXBsFqZz+I0/CrVLHtuaXgWN+V7UXnjJt2HyRiTXi/5sfn9rUNgT7q3UTPtrTKm46FjX/ZDrhfdyjXgB2rDLe2PJJXIm6S5aH9muCvts85N+2+e5GaW4VBMNrZNS6h/ZrdXU8BOjbP93ctrYgqEb+RgPWrbTreoAelnU3yg925ibB2dpMcD5kYt6TjDYAcm9h/boeYEtGGJKRfo1MU5RqIdjaGspwDXJpA+hVR8AAhSkYSBkFW0Hk4v0qNHel4A9JyaN8ANbaAbesD59c96XidE7KiZNtV8xagKugMlF+TjvrsiQnmTKRhw8HFFqD9kiQgvzpUrvnIbTmRbziTU8JU0AqMX5HS8TqBPiHtbLKzfRsde0C29VF4iFORiOl4ndDUyezdSu7LSWwUILb1UXiil9FudasP8grng/qGvPt1ZZKPY6wfY+T38iDs13nB6kjIY31MhcCoUfBiZYL4pFXIbQlgMTfeXmdsmj2011c85QEICsECx2SutnRhxOLrvQmG7j+cO8MoZEPLPFjlZm0Wt9zRZnXtgdFNlGwg7dffMrpIagP5Pxb4ndzyZN5Sn7BeWrMs18hOMoXsOY95q84V2zh6By2iPjy0ROy20fvgc32EN15bwsODESTbWUnar/5Ud4l1exZNvJFlTfyNaTisq8Uu5ngtqLJcv2kR3TNfIVsT3+rLxQJLV/ru1yB25ukaRvkFUUX0hZVf8URwW4mSXR3X6+EintROs9qcIwt8nV69mE5rWHO5IKqq6H/GtmxHtENnq/i9aKo+m6VU2ve0siios9nryCAaB6IN2E2akdFES7L20qZ8TyuLgspZNygiegfRaBN+u3YkzPhar2uGn4EkuaDW6/UUWVV8tEGh+QwFLSIIQhtVZ0mUlmW5rRM9or5LuE23HSFPTLos7jXJrSwXPR3b/wbh+jusP8eRUU+1rMpR/ElZ+XPkpF8Ws64VYBjUN18IRClpHb4TIn5euy7otRUs9gTYJDqFvoXNVnoXpN9R8y8eDJMF/h5BpFDGzErpi3PS71hX9aJspS32WxpFK8xK6esK8besqeKDiYs9rUgRHTLz69WY/Hu+Pd5bPLL3a5+WUu4bvSYryxRg6Nd4h5VlCoSmNLXIG8R4VpYp4PkVBt8Z5ftOf5I9Zr+eDJj59fKY/Rq4oLuJxhqJo/brNfHVJCq5Y/Yrd8XMr0nPryAct197A1aW855fQThuv8bPWFn2/ApDnoC04XCJT1ldYwNTBx4EceA9V7aTAVFbHQox8N2XtpEhqwo6MGJ9VrMxQ1YVdGDE4Ldh28Jx+zXr6m6WbsiQVVsdGNkt25fBI5EXch4QWbK3DnfAcfv1kqFfAbbuORgSzLZoPnK/krzTvSMkqM3RDoIckZ0dcFAORRUEQn7AKg5EB8ccBzw8PDw8YHj7WbD4SfkeoSZaamW5xV4MAEBXNFIWJeqSJ9kQ7yzLd+zFKwAUCto71LfdKamTd8vsxQAAiKrgt2hRjwP3wcjK8imLDX/AMQqT4grq4/Uv9fXd8lGO11p7/lfJhP6+Zprwa2W5RD9j0qA7L1u80JfqaqmV5aejrAdMZAsmm+GtLMvMNUEeHh4eR8x/AS4U9WMGK7TAAAAAAElFTkSuQmCC" alt="Regular Grammars" className="movie-poster" />
                  <h6>Regular Grammars</h6>
                  <p>Restricted production rules</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Right-Linear Grammar" className="movie-poster" />
                  <h6>Right-Linear</h6>
                  <p>Non-terminal on right side</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Left-Linear Grammar" className="movie-poster" />
                  <h6>Left-Linear</h6>
                  <p>Non-terminal on left side</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Regular Grammars and Types</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/_mlAjDjBns8?si=PQXDuQYutgfYrhNG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Right-Linear Grammar</h4>
              <div className="definition-box">
                <h6>Right-Linear Production Rules</h6>
                <p>Productions have the form: A → aB | a | ε</p>
                <ul>
                  <li><strong>Form:</strong> Non-terminal appears on the RIGHT of production</li>
                  <li><strong>Processing:</strong> Represents left-to-right string processing</li>
                  <li><strong>Mapping:</strong> Naturally corresponds to DFA transitions</li>
                  <li><strong>State Correspondence:</strong> Each non-terminal represents a state</li>
                </ul>
              </div>

              <h4>Left-Linear Grammar</h4>
              <div className="definition-box">
                <h6>Left-Linear Production Rules</h6>
                <p>Productions have the form: A → Ba | a | ε</p>
                <ul>
                  <li><strong>Form:</strong> Non-terminal appears on the LEFT of production</li>
                  <li><strong>Processing:</strong> Represents right-to-left string processing</li>
                  <li><strong>Conversion:</strong> Can be converted to equivalent right-linear</li>
                  <li><strong>Equivalence:</strong> Generate same languages as right-linear grammars</li>
                </ul>
              </div>

              <h4>Equivalence with Finite Automata</h4>
              <div className="algorithm-box">
                <h6>Grammar to Automata Conversion</h6>
                <ul>
                  <li><strong>Each non-terminal:</strong> Becomes a DFA state</li>
                  <li><strong>Start symbol:</strong> Becomes start state</li>
                  <li><strong>Productions A → a:</strong> Create transitions labeled 'a'</li>
                  <li><strong>Productions A → ε:</strong> Make state accepting</li>
                </ul>
                
                <h6>Automata to Grammar Conversion</h6>
                <ul>
                  <li><strong>Each state:</strong> Becomes a non-terminal</li>
                  <li><strong>Start state:</strong> Becomes start symbol</li>
                  <li><strong>Transitions:</strong> Become productions</li>
                  <li><strong>Accept states:</strong> Generate ε productions</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Grammar Examples and Conversions</h5>
                <div className="grammar-examples">
                  <h6>Right-Linear Grammar Example</h6>
                  <p><strong>Grammar:</strong></p>
                  <ul>
                    <li>S → aS | a</li>
                    <li>Language: a, aa, aaa, ... = a⁺</li>
                  </ul>
                  
                  <h6>Left-Linear Grammar Example</h6>
                  <p><strong>Grammar:</strong></p>
                  <ul>
                    <li>S → Sa | b</li>
                    <li>Language: b, ab, aab, aaab, ... = a*b</li>
                  </ul>
                  
                  <h6>Conversion Example</h6>
                  <p><strong>Left-Linear to Right-Linear:</strong></p>
                  <ul>
                    <li><strong>Original:</strong> S → Sa | b</li>
                    <li><strong>Converted:</strong> S → bA, A → aA | ε</li>
                    <li><strong>Result:</strong> Both generate language a*b</li>
                  </ul>
                  
                  <h6>Finite Automaton Correspondence</h6>
                  <p><strong>For grammar S → aS | a:</strong></p>
                  <ul>
                    <li>State S corresponds to both start and intermediate state</li>
                    <li>Transition on 'a' loops back to S</li>
                    <li>Production S → a makes S accepting</li>
                    <li>Resulting DFA accepts a⁺</li>
                  </ul>
                </div>
              </div>

              <h4>Properties and Restrictions</h4>
              <ul>
                <li><strong>Restricted Form:</strong> Only single non-terminal allowed in specific position</li>
                <li><strong>Linear Structure:</strong> Productions maintain linear (non-branching) structure</li>
                <li><strong>Regular Language Generation:</strong> Can only generate regular languages</li>
                <li><strong>Computational Equivalence:</strong> Same power as finite automata and regular expressions</li>
              </ul>
            </section>

            <Quiz title="Module 3.5 Quiz: Regular Grammars" questions={module5Quiz} subject="FLAT" unitId={3} moduleId={5} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Pumping Lemma</button>
              <button onClick={() => setCurrentModule(6)} className="next-module-btn">Unit 3 Quiz →</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.6</div>
              <div className="lesson-title-main">
                <h1>Unit 3 Quiz</h1>
              </div>
            </div>
            
            <Quiz title="Unit 3 Comprehensive Quiz: Regular Languages" questions={unitQuiz} subject="FLAT" unitId={3} moduleId={8} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(5)} className="prev-module-btn">← Regular Grammars</button>
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

export default Unit3;