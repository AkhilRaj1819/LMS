# FLAT Subject - Quiz Addition Template

## Instructions
Add these quiz arrays and Quiz components to each Unit file following the pattern from Unit1.

---

## UNIT 2 - Finite Automata

### Module 1: Acceptance of Languages Quiz
```tsx
const acceptanceOfLanguagesQuiz = [
  {
    question: "What determines if a string is accepted by a finite automaton?",
    options: [
      "The length of the string",
      "Whether the final state after processing is an accepting state",
      "The number of transitions taken",
      "The alphabet used"
    ],
    correctAnswer: 1,
    explanation: "A string is accepted if, after processing all symbols, the automaton ends in a state that belongs to the set of accepting states F."
  },
  {
    question: "What is the language L(M) of an automaton M?",
    options: [
      "All possible strings over the alphabet",
      "The set of all strings accepted by M",
      "The set of states in M",
      "The transition function of M"
    ],
    correctAnswer: 1,
    explanation: "L(M) is the language recognized by automaton M, consisting of all strings that M accepts."
  },
  {
    question: "If a string causes the automaton to end in a non-accepting state, what happens?",
    options: [
      "The string is accepted",
      "The string is rejected",
      "The automaton restarts",
      "An error occurs"
    ],
    correctAnswer: 1,
    explanation: "A string is rejected if processing ends in any state that is not in the set of accepting states F."
  },
  {
    question: "What is an accepting state in a finite automaton?",
    options: [
      "The initial state",
      "A state with no outgoing transitions",
      "A designated final state that signals acceptance",
      "Any state in the automaton"
    ],
    correctAnswer: 2,
    explanation: "An accepting state (or final state) is a designated state that, when reached after processing input, indicates the string is accepted."
  },
  {
    question: "Can an automaton have multiple accepting states?",
    options: [
      "No, only one accepting state is allowed",
      "Yes, the set F can contain multiple accepting states",
      "Only in NFAs, not in DFAs",
      "Only if the alphabet has more than two symbols"
    ],
    correctAnswer: 1,
    explanation: "An automaton can have multiple accepting states. The set F of accepting states can contain zero, one, or multiple states."
  }
];

// Add in case 1, before navigation buttons:
<Quiz 
  title="Acceptance of Languages Quiz"
  questions={acceptanceOfLanguagesQuiz}
  subject="FLAT"
  unitId={2}
  moduleId={1}
/>
```

### Module 2: Epsilon Transitions Quiz
```tsx
const epsilonTransitionsQuiz = [
  {
    question: "What is an epsilon-transition?",
    options: [
      "A transition that requires two input symbols",
      "A transition without consuming any input symbol",
      "A transition to the start state",
      "A transition that rejects the string"
    ],
    correctAnswer: 1,
    explanation: "An epsilon-transition allows the automaton to change states without reading any input symbol."
  },
  {
    question: "What is the epsilon-closure of a state?",
    options: [
      "All states reachable via epsilon-transitions",
      "All accepting states",
      "All states with outgoing transitions",
      "The start state only"
    ],
    correctAnswer: 0,
    explanation: "The epsilon-closure of a state is the set of all states reachable from that state using only epsilon-transitions."
  },
  {
    question: "Can a DFA have epsilon-transitions?",
    options: [
      "Yes, all automata can have epsilon-transitions",
      "No, only NFAs can have epsilon-transitions",
      "Only if the alphabet is empty",
      "Yes, but only from accepting states"
    ],
    correctAnswer: 1,
    explanation: "By definition, DFAs cannot have epsilon-transitions. Only NFAs can have epsilon-transitions."
  },
  {
    question: "How do epsilon-transitions affect NFA computation?",
    options: [
      "They make the NFA deterministic",
      "They allow multiple simultaneous states without input",
      "They reduce the number of states needed",
      "They eliminate the need for accepting states"
    ],
    correctAnswer: 1,
    explanation: "Epsilon-transitions allow the NFA to be in multiple states simultaneously without consuming input."
  },
  {
    question: "When converting NFA with epsilon-transitions to DFA, what must be computed?",
    options: [
      "Only the transition function",
      "Epsilon-closures of all states",
      "The alphabet size",
      "The number of accepting states"
    ],
    correctAnswer: 1,
    explanation: "When converting NFA-ε to DFA, we must compute epsilon-closures to determine which states are reachable without input."
  }
];

// Add in case 2, before navigation buttons:
<Quiz 
  title="Epsilon Transitions Quiz"
  questions={epsilonTransitionsQuiz}
  subject="FLAT"
  unitId={2}
  moduleId={2}
/>
```

### Module 3: NFA to DFA Conversion Quiz
```tsx
const nfaToDfaConversionQuiz = [
  {
    question: "What is the subset construction algorithm used for?",
    options: [
      "Converting DFA to NFA",
      "Converting NFA to DFA",
      "Minimizing DFA",
      "Creating epsilon-transitions"
    ],
    correctAnswer: 1,
    explanation: "Subset construction (powerset construction) converts an NFA to an equivalent DFA."
  },
  {
    question: "In subset construction, what does each DFA state represent?",
    options: [
      "A single NFA state",
      "A subset of NFA states",
      "A transition function",
      "An input symbol"
    ],
    correctAnswer: 1,
    explanation: "Each DFA state corresponds to a subset of NFA states, representing all possible states the NFA could be in."
  },
  {
    question: "What is the maximum number of states in the resulting DFA from an n-state NFA?",
    options: [
      "n states",
      "2n states",
      "2^n states",
      "n^2 states"
    ],
    correctAnswer: 2,
    explanation: "In the worst case, the DFA can have 2^n states since each state represents a subset of NFA states."
  },
  {
    question: "Are DFA and NFA equivalent in expressive power?",
    options: [
      "No, DFA is more powerful",
      "No, NFA is more powerful",
      "Yes, they recognize the same class of languages",
      "It depends on the language"
    ],
    correctAnswer: 2,
    explanation: "DFA and NFA are equivalent - both recognize exactly the regular languages."
  },
  {
    question: "What is the initial state of the DFA in subset construction?",
    options: [
      "The NFA's start state",
      "Epsilon-closure of the NFA's start state",
      "The empty set",
      "All NFA states"
    ],
    correctAnswer: 1,
    explanation: "The DFA's initial state is the epsilon-closure of the NFA's start state."
  }
];

// Add in case 3, before navigation buttons:
<Quiz 
  title="NFA to DFA Conversion Quiz"
  questions={nfaToDfaConversionQuiz}
  subject="FLAT"
  unitId={2}
  moduleId={3}
/>
```

### Module 4: Minimization Quiz
```tsx
const minimizationQuiz = [
  {
    question: "What is the goal of DFA minimization?",
    options: [
      "To reduce the alphabet size",
      "To reduce the number of states while preserving the language",
      "To convert DFA to NFA",
      "To eliminate accepting states"
    ],
    correctAnswer: 1,
    explanation: "Minimization aims to reduce the number of states to the minimum possible while still recognizing the same language."
  },
  {
    question: "When are two states considered equivalent?",
    options: [
      "When they have the same label",
      "When they behave identically for all future inputs",
      "When they are both accepting states",
      "When they have the same number of transitions"
    ],
    correctAnswer: 1,
    explanation: "Two states are equivalent if they cannot be distinguished by any future input string."
  },
  {
    question: "What is the first step in DFA minimization?",
    options: [
      "Remove unreachable states",
      "Merge all accepting states",
      "Remove all transitions",
      "Add epsilon-transitions"
    ],
    correctAnswer: 0,
    explanation: "The first step is to remove states that are unreachable from the start state."
  },
  {
    question: "What does the Myhill-Nerode theorem state?",
    options: [
      "All DFAs can be minimized",
      "The minimal DFA is unique up to isomorphism",
      "NFAs are more efficient than DFAs",
      "Epsilon-transitions are necessary"
    ],
    correctAnswer: 1,
    explanation: "The Myhill-Nerode theorem states that the minimal DFA for a language is unique up to isomorphism."
  },
  {
    question: "What is the partition refinement algorithm used for?",
    options: [
      "Converting NFA to DFA",
      "Finding equivalent states for minimization",
      "Adding new states",
      "Creating epsilon-transitions"
    ],
    correctAnswer: 1,
    explanation: "Partition refinement is used to identify equivalent states by iteratively refining partitions of states."
  }
];

// Add in case 4, before navigation buttons:
<Quiz 
  title="DFA Minimization Quiz"
  questions={minimizationQuiz}
  subject="FLAT"
  unitId={2}
  moduleId={4}
/>
```

### Module 5: Equivalence Quiz
```tsx
const equivalenceQuiz = [
  {
    question: "What does it mean for two automata to be equivalent?",
    options: [
      "They have the same number of states",
      "They recognize the same language",
      "They have the same transitions",
      "They have the same alphabet"
    ],
    correctAnswer: 1,
    explanation: "Two automata are equivalent if they recognize the same language, regardless of their structure."
  },
  {
    question: "How can we prove two DFAs are equivalent?",
    options: [
      "By comparing their state diagrams",
      "By showing they accept the same strings",
      "By counting their states",
      "By checking if they have the same alphabet"
    ],
    correctAnswer: 1,
    explanation: "Two DFAs are equivalent if they accept exactly the same set of strings."
  },
  {
    question: "What is the product construction used for?",
    options: [
      "Minimizing DFAs",
      "Testing equivalence of two DFAs",
      "Converting NFA to DFA",
      "Adding epsilon-transitions"
    ],
    correctAnswer: 1,
    explanation: "Product construction creates a combined automaton to test if two DFAs are equivalent."
  },
  {
    question: "If two minimal DFAs recognize the same language, what can we say about them?",
    options: [
      "They are identical",
      "They are isomorphic",
      "They have different alphabets",
      "They have different numbers of states"
    ],
    correctAnswer: 1,
    explanation: "Two minimal DFAs for the same language are isomorphic (structurally identical up to state renaming)."
  },
  {
    question: "What is the distinguishability criterion for states?",
    options: [
      "States with different labels",
      "States that lead to different acceptance for some string",
      "States with different numbers of transitions",
      "States in different positions"
    ],
    correctAnswer: 1,
    explanation: "Two states are distinguishable if there exists a string that leads to acceptance from one state but rejection from the other."
  }
];

// Add in case 5, before navigation buttons:
<Quiz 
  title="Automata Equivalence Quiz"
  questions={equivalenceQuiz}
  subject="FLAT"
  unitId={2}
  moduleId={5}
/>
```

### Module 6: Closure Properties Quiz
```tsx
const closurePropertiesQuiz = [
  {
    question: "What does it mean for regular languages to be closed under union?",
    options: [
      "The union of two regular languages is always regular",
      "Regular languages cannot be combined",
      "Union creates non-regular languages",
      "Only finite languages can be united"
    ],
    correctAnswer: 0,
    explanation: "Regular languages are closed under union, meaning the union of any two regular languages is also regular."
  },
  {
    question: "Are regular languages closed under intersection?",
    options: [
      "No, intersection creates non-regular languages",
      "Yes, the intersection of two regular languages is regular",
      "Only for finite languages",
      "Only for infinite languages"
    ],
    correctAnswer: 1,
    explanation: "Regular languages are closed under intersection. The intersection of two regular languages is also regular."
  },
  {
    question: "What is the complement of a regular language?",
    options: [
      "Always non-regular",
      "Always regular",
      "Sometimes regular",
      "Undefined"
    ],
    correctAnswer: 1,
    explanation: "Regular languages are closed under complement. The complement of a regular language is also regular."
  },
  {
    question: "How can we construct an automaton for the union of two languages?",
    options: [
      "By merging their start states",
      "By creating a new start state with epsilon-transitions to both",
      "By combining all their states",
      "By removing duplicate states"
    ],
    correctAnswer: 1,
    explanation: "For union, we create a new start state with epsilon-transitions to the start states of both automata."
  },
  {
    question: "Are regular languages closed under concatenation?",
    options: [
      "No, concatenation creates context-free languages",
      "Yes, concatenation of regular languages is regular",
      "Only for finite languages",
      "Only for languages over the same alphabet"
    ],
    correctAnswer: 1,
    explanation: "Regular languages are closed under concatenation. The concatenation of two regular languages is also regular."
  }
];

// Add in case 6, before navigation buttons:
<Quiz 
  title="Closure Properties Quiz"
  questions={closurePropertiesQuiz}
  subject="FLAT"
  unitId={2}
  moduleId={6}
/>
```

---

## HOW TO IMPLEMENT

For each module in Unit2.tsx:

1. **Add quiz arrays at the top** (after the unitQuiz array)
2. **Add Quiz component in each case** before the navigation buttons:

```tsx
case 1:
  return (
    <div className="module-content">
      {/* Module content here */}
      
      <Quiz 
        title="Acceptance of Languages Quiz"
        questions={acceptanceOfLanguagesQuiz}
        subject="FLAT"
        unitId={2}
        moduleId={1}
      />

      <div className="navigation-buttons">
        <button onClick={() => setCurrentModule(2)} className="next-module-btn">Next Module →</button>
      </div>
    </div>
  );
```

3. **Repeat for all modules** (cases 1-6)
4. **Apply same pattern to Units 3, 4, 5** with appropriate unitId

---

## IMPORTANT NOTES

- Each quiz must have 5 questions
- Questions must be specific to that submodule's content
- Use `subject="FLAT"` (uppercase)
- Use correct `unitId` (2, 3, 4, or 5)
- Use correct `moduleId` (1, 2, 3, etc.)
- Place Quiz component BEFORE navigation buttons
- Follow exact structure from Unit1

---

This template provides the complete pattern. Apply it to all remaining modules in Units 2-5.
