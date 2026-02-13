'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  // Quiz for Module 2: DFA and NFA Equivalence
  const dfaNfaEquivalenceQuiz = [
    {
      question: "What is the main theorem established in this module?",
      options: [
        "DFA is more powerful than NFA",
        "DFA and NFA recognize exactly the same class of languages",
        "NFA can only accept finite languages",
        "DFA requires fewer states than NFA"
      ],
      correctAnswer: 1,
      explanation: "The fundamental theorem states that for every NFA, there exists an equivalent DFA that accepts the same language, and vice versa. Both models are equivalent in expressive power."
    },
    {
      question: "What does the term 'equivalence' mean for DFA and NFA?",
      options: [
        "They have the same number of states",
        "They recognize exactly the same language",
        "They use the same transition function",
        "They have identical state diagrams"
      ],
      correctAnswer: 1,
      explanation: "Two automata are equivalent if they accept exactly the same set of strings, regardless of their internal structure or number of states."
    },
    {
      question: "What is the subset construction algorithm?",
      options: [
        "An algorithm to minimize states in a DFA",
        "A method to convert NFA to an equivalent DFA",
        "A technique to add epsilon-transitions",
        "A process to combine multiple NFAs"
      ],
      correctAnswer: 1,
      explanation: "Subset construction (powerset construction) systematically builds a DFA from an NFA where each DFA state represents a subset of NFA states."
    },
    {
      question: "Why is every DFA also an NFA?",
      options: [
        "DFA has only one transition per state-symbol pair",
        "Singleton sets are valid sets in the NFA transition definition",
        "Both use the same alphabet",
        "Both start from the same initial state"
      ],
      correctAnswer: 1,
      explanation: "In NFA definition, transition function maps to sets of states. DFA transitions map to single states, which are singleton sets (valid in NFA definition)."
    },
    {
      question: "What is the design advantage of DFA/NFA equivalence?",
      options: [
        "Design flexibility is lost",
        "Can design NFA and convert to DFA for implementation",
        "Only has benefits for theoretical study",
        "Makes implementation more difficult"
      ],
      correctAnswer: 1,
      explanation: "Designers can create intuitive NFA designs and then convert them to equivalent DFAs for practical implementation, combining design simplicity with implementation efficiency."
    }
  ];

  // Quiz for Module 3: NFA to DFA Conversion
  const nfaToDfaQuiz = [
    {
      question: "What does each state in the converted DFA represent?",
      options: [
        "A single state from the original NFA",
        "A subset of states from the original NFA",
        "Multiple copies of NFA states",
        "A compressed version of the NFA"
      ],
      correctAnswer: 1,
      explanation: "In subset construction, each DFA state corresponds to a set (subset) of NFA states, allowing the DFA to track all possible NFA states simultaneously."
    },
    {
      question: "What is the starting state of the converted DFA?",
      options: [
        "The same as the NFA starting state",
        "The epsilon-closure of the NFA starting state",
        "A newly created universal state",
        "The set of all NFA states"
      ],
      correctAnswer: 1,
      explanation: "The initial DFA state is the epsilon-closure of the NFA's initial state, representing all NFA states reachable via epsilon-transitions from the start."
    },
    {
      question: "When is a DFA state marked as accepting after conversion?",
      options: [
        "When it contains the NFA start state",
        "When it contains at least one NFA accepting state",
        "When it contains all NFA states",
        "When it has the maximum number of states"
      ],
      correctAnswer: 1,
      explanation: "A DFA state is accepting if the subset it represents contains at least one accepting state from the original NFA."
    },
    {
      question: "How many states can the converted DFA have in the worst case?",
      options: [
        "n states for an n-state NFA",
        "2n states for an n-state NFA",
        "2^n states for an n-state NFA",
        "n^n states for an n-state NFA"
      ],
      correctAnswer: 2,
      explanation: "In the worst case, the converted DFA has 2^n states because each subset of n NFA states can potentially become a DFA state."
    },
    {
      question: "What is the main advantage of converting NFA to DFA?",
      options: [
        "Fewer states in the automaton",
        "Deterministic behavior for implementation (exactly one transition per input)",
        "Faster creation of the automaton",
        "Simpler visual representation"
      ],
      correctAnswer: 1,
      explanation: "The main advantage is that DFA's deterministic nature (one transition per state-symbol pair) makes it directly implementable in software, avoiding exponential search trees."
    }
  ];

  // Quiz for Module 4: NFA with Epsilon-Transitions
  const epsilonTransitionsQuiz = [
    {
      question: "What is an epsilon-transition in NFA?",
      options: [
        "A transition that reads the first symbol",
        "A transition that occurs without consuming any input",
        "A transition to multiple states simultaneously",
        "A forbidden transition type"
      ],
      correctAnswer: 1,
      explanation: "Epsilon-transitions allow the automaton to change states without reading any input symbol, denoted by 'epsilon' or 'lambda', enabling more flexible state designs."
    },
    {
      question: "What is epsilon-closure of a state?",
      options: [
        "The state itself",
        "The set of all states reachable via epsilon-transitions",
        "The accepting states only",
        "The start state"
      ],
      correctAnswer: 1,
      explanation: "Epsilon-closure(q) is the set of all states reachable from state q by following zero or more epsilon-transitions."
    },
    {
      question: "How does epsilon-closure affect transitions on regular symbols?",
      options: [
        "It has no effect",
        "Consider epsilon-closures when computing transitions",
        "It prevents transitions",
        "It only applies to accepting states"
      ],
      correctAnswer: 1,
      explanation: "When computing transitions, we must include epsilon-closure: after transitioning on a symbol, we must also include all states reachable via epsilon-transitions from the resulting state."
    },
    {
      question: "Can epsilon-transitions be removed without changing the language?",
      options: [
        "No, they are essential",
        "Yes, by converting to NFA without epsilon",
        "Only for certain languages",
        "Only in the case of cyclic epsilon-paths"
      ],
      correctAnswer: 1,
      explanation: "Yes, any NFA with epsilon-transitions can be converted to an equivalent NFA without epsilon-transitions by using epsilon-closure in transition definitions."
    },
    {
      question: "What advantage does epsilon-NFA provide?",
      options: [
        "Greater expressive power than standard NFA",
        "More compact representation of certain automata",
        "Faster execution of automaton",
        "Fewer states overall"
      ],
      correctAnswer: 1,
      explanation: "Epsilon-NFAs provide more efficient/compact representations for certain languages, allowing cleaner design patterns even though expressive power remains the same."
    }
  ];

  // Quiz for Module 5: Automata Minimization  
  const minimizationQuiz = [
    {
      question: "What is the goal of automata minimization?",
      options: [
        "To make the automaton faster",
        "To reduce the number of states while preserving the language",
        "To simplify the transition function",
        "To increase the alphabet size"
      ],
      correctAnswer: 1,
      explanation: "Minimization aims to find the DFA with the fewest states that recognizes the same language, creating the minimal automaton."
    },
    {
      question: "What are equivalent states in an automaton?",
      options: [
        "States with the same name",
        "States that behave identically for all possible input strings",
        "States that have transitions to the same next state",
        "States that are both accepting or both non-accepting"
      ],
      correctAnswer: 1,
      explanation: "Two states are equivalent if from either state, the same set of strings lead to acceptance, meaning they can be merged without changing language recognition."
    },
    {
      question: "What does the Myhill-Nerode theorem establish?",
      options: [
        "DFA is more powerful than NFA",
        "The foundation for automata minimization and equivalence",
        "The rules for epsilon-transitions",
        "The complexity of language recognition"
      ],
      correctAnswer: 1,
      explanation: "Myhill-Nerode theorem provides the theoretical basis for minimization: it relates language properties to automaton structure and equivalence of states."
    },
    {
      question: "What is the initial partition in the minimization algorithm?",
      options: [
        "All states in one partition",
        "Accepting states vs. non-accepting states",
        "States grouped by transition behavior",
        "Random partition of states"
      ],
      correctAnswer: 1,
      explanation: "Partition refinement begins by separating accepting from non-accepting states, as they clearly behave differently (lead to acceptance vs. rejection)."
    },
    {
      question: "When does the minimization algorithm terminate?",
      options: [
        "After processing all states once",
        "When no partition is split further",
        "After a fixed number of iterations",
        "When only accepting states remain"
      ],
      correctAnswer: 1,
      explanation: "The algorithm continues refining partitions until no further splitting is possible, meaning all states within each partition behave identically."
    }
  ];
  
  const unitQuiz = [
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
      question: "What is the main theoretical result about DFA and NFA?",
      options: [
        "DFA is more powerful than NFA",
        "NFA is more powerful than DFA",
        "DFA and NFA are equivalent in expressive power",
        "They recognize different language classes"
      ],
      correctAnswer: 2,
      explanation: "DFA and NFA are equivalent in expressive power - both recognize exactly the regular languages. Any language accepted by an NFA can be accepted by some DFA, and vice versa."
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
      explanation: "In subset construction (powerset construction), each DFA state corresponds to a subset of NFA states, allowing the DFA to simulate all possible NFA computations simultaneously."
    },
    {
      question: "What is an epsilon-transition?",
      options: [
        "A transition that requires two input symbols",
        "A transition without consuming any input symbol",
        "A transition to the start state",
        "A transition that rejects the string"
      ],
      correctAnswer: 1,
      explanation: "An epsilon-transition (ε-transition) allows the automaton to change states without reading any input symbol, providing additional flexibility in NFA design."
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
      explanation: "The epsilon-closure of a state is the set of all states reachable from that state using only epsilon-transitions (including the state itself)."
    },
    {
      question: "What is the goal of automata minimization?",
      options: [
        "To reduce the alphabet size",
        "To reduce the number of states while preserving the language",
        "To convert NFA to DFA",
        "To eliminate accepting states"
      ],
      correctAnswer: 1,
      explanation: "Minimization aims to reduce the number of states in an automaton to the minimum possible while still recognizing the same language, creating the most efficient representation."
    },
    {
      question: "According to the Myhill-Nerode theorem, when are two states equivalent?",
      options: [
        "When they have the same label",
        "When they behave identically for all future inputs",
        "When they are both accepting states",
        "When they have the same number of transitions"
      ],
      correctAnswer: 1,
      explanation: "Two states are equivalent if they cannot be distinguished by any future input string - they lead to the same acceptance/rejection behavior for all possible continuations."
    },
    {
      question: "In the worst case, how many states might a DFA have when converted from an n-state NFA?",
      options: [
        "n states",
        "n^2 states",
        "2^n states",
        "n! states"
      ],
      correctAnswer: 2,
      explanation: "In the worst case, subset construction can produce a DFA with 2^n states from an n-state NFA, since each DFA state represents a subset of NFA states and there are 2^n possible subsets."
    }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.1</div>
              <div className="lesson-title-main">
                <h1>Acceptance of Languages</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language Acceptance Mechanisms</h3>
              <p>Language acceptance is the fundamental concept of how finite automata determine whether a given string belongs to a specific language. The automaton processes the input string symbol by symbol and decides acceptance based on its final state.</p>
              
              <div className="theory-box">
                <h5>Core Acceptance Concepts</h5>
                <p>Understanding how automata make acceptance decisions:</p>
                <ul>
                  <li><strong>Accept State:</strong> Designated final state that signals acceptance when reached</li>
                  <li><strong>Rejected String:</strong> String that causes automaton to end in non-accepting state</li>
                  <li><strong>Accepted String:</strong> String that causes automaton to end in accepting state</li>
                  <li><strong>Language Accepted:</strong> Set of all strings accepted by the automaton L(M)</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEhUSEhIVFRUSFhASFxUYEhUXGhUXFhUWFxcYGBYZHyggGBoxGxgVITEhJSkrLi4uFyAzODMsNyguLisBCgoKDg0OGxAQGy8mICYvNSs2LTcvKy0wNS82LS4tLy0rLS41LS81LjI3LSsvKzErLS8rLy0wKy0tKystKy0tK//AABEIAL4BCgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAEAQAAICAQMCAwYDBwIDCAMAAAECAxEABBIhEzEFIkEGFDJRYXEjgZEVQqGxwdHwM1IHFvEkNENiktLh4lNyc//EABkBAQEBAQEBAAAAAAAAAAAAAAADAQIFBP/EAC0RAQEAAgECBAQFBQEAAAAAAAABAhEDEjEhUcHwE0GBkQUyYbHRBCOh4fFx/9oADAMBAAIRAxEAPwD7TjGM1hjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGcniur6EMkpVmCKWIQAtQ7kA8cDnn5YZbqbrrxnz3WeN6iAK0PXcvHKxEsummG0IT1lETkpRo1wpuu+W3gfiJE8aE6p+urEb59NKnlG4yVExKDiuKXzAZj58f6nG5dOnrMnIyc19KMYxgMYxgM5fEtWYYzIIpJSNv4cShnNkDgMQOLs89hnVjA874F7WprHKrp9RGoaSMySJGqCRDRjsOTvviq9MvmnUGiygjuNwscX2+3OeE1fgDR+Ga1ZysTLqNZr4pNwOwrJ1YXsXR4qu/Jyk1XhrFPD5p4Fmn1+sl1csL0oYNA2yLzWABEFG1uLsHuTlejG9nO6+rGZdu7cu3vu3Cv17ZLzKoBZlAPYlgL+198+Yf8maroRnoqEXWavVe4q8DCOOVAsaL1Q0LMpDGiK/ENUcz8R9jpuhpxHpneSKPUoqSyaGaOPqylwkkciBQopeYqKjyiwMdGPmbr6cT65XeMeOQ6SEzyNaWqjZTF2ZgoVQDybI+3rWVvtb4RNqdAIECGQe7M8e4pHKI2VpIgf3VIBAv6XnlJvYiWWPUMNJFCs2p0MsOl3REQJHtXUMCvkUuoNqvcCszHHG9622vpGi1HUjWTayb1DbX27lv0baSL+xIyu9m/aSDxBZGgLVE5jO4AEirV1om0Ycg+ua/afQSnRtptEqoZAmnBFIsMTUrsosdksALzZFZ5qL2Q12nkPS1EbrNpH0LMkI0/QCRsNNKF6jdQqxI4ogH1xMcbO5bXvVmU3TKdvxeYeX7/LB1CUG3rtPAO4UfsfXPmq+yMx0SQL4dDC8LaFpQJo68QWEt1EZlFgEkMC/qaPa82+Meys0pgkTQLHEkeojOjRtGTG0jg9VRKphsrwa8w9Cec3ox82br6K86rwzKKruwHft3zlPjEHvHuvUHW6Ym2UfgLbB5q23f7t361WfMtb4GzamTT+6Lq5E8M0kQEs0ZaJyZED9RgFYjm2FNxx3OXWj9k5tPrNLOdPFqa0mm08khKAx6mIi9Sd/L+UAWPNS46MZ8zb3qzKbplO34qYeX7/LJjlVuFYE0DQIPB7HjPmHgvshq0lEh00cR9210Egj91jRmkQdPYIlDNGSBzIWYEenrv0vsNNGkIhRIJG8Mn0s0qsAfeHVNpYry3IPmF1x9MdGPmbr6OJ0IJDrS9zuFD7n0yJp9qFwC4CswCUS9C6XmiT2HOfN5vZKZ9IkcXh8WmaGTSPKiyQN74IlkU2SpQ0zBx1QbJNgUM9d7FeFtpdOyMjx7pZZRG7QnZvokKIFCKt2do7EnObjJO7ZWjw72yWedtOuj1geNolk3RRgQ9UWhkqQkCufXjPRrMpBIZSBdkEECu9n0zyEvs7qGn8XZSIxrotLHBJv/AHk07RsTt8y+YgX+Yyj0PsZL7vOj6WVDJDpoTGk2iRZTFKr7lEcYViBu5l+IHafmOrjjfmyWvfa7xqCHpdSVR15BDGRbBnIJAtbocHk0B88y0viId5UKFBGyKrsybZd62ClG/pzWfPpfY6dtPEzaLTu8GsE3R2aaJ5tOYwrpIYwId5YKSB5SEW+RnTr/AGS1Ex1H4Cqk+r8KmEe9OIoYkWVeDXFEUO/pjox8zdfQhMu3duXaLttwoV357ZkkgbsQarsQe/Iz5f7QezfusOpJWCLTftDSapIXcJDNGsYVom2giMFhfmFeUZcf8Lgre+yxxxxxSahOmIjcVLEoYRNtUMoPFgAWDXGZcJ07lN+L3WMYybpz6XQxRFjHFGhbliiKpb70OcaXQxRFjHFGhbliiKpb70Oc6MYZ0zyMnIycNRjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBjGMBgYxgMYxgMYxgMnIycCMYxgMYyv8Z62z8AEsRIvBQUWRgjHfxQbaT6/Q4FhjKB5tfuoRpt6kgslOUtNhrdwNvU9bsKTxwd2sbVqYWTYQiEzWyqHdhtHzpVNueRxVE9sC5xlE0utrypfksbhCDvuSw22QgcdPbtscndXcaPetaxKbdrLtuhEDtCoxClnppLYL22cnkGsD0mMoRJriW8qihYsR0zgSWqkPewkRgM1GibA9Mll1u6PyLtLHqk7OBcfwU9lK6tE01hbHoQvM1zzrGNzsFH1Pf7fPNmVfhydeVp2+BLjjB7cfE3+f0yPLyXGzHHvfdqnHhLu3tPem9PFoT2kH6MP5jO0HKvQeOafUFVjDHqXtuF1BHTSQG2A4KOpHz59QQN+jBjZovT40+3qP8/rmTLPGzr1d+Xh61tmGUvT7/Z24xjLpGMYwGMZXeMyMQsKfHMSt/JR8R/Q/wA8ny8k48Ll738o748OvLpbZPFYVNGQWPkGP8QKzfp9SkgtGBr9f0POcUmv0+nddNTF9qkARM3dZCoLAVuPSkoepHzIvDrrKi6iEHylwQUKEhHZHBUgHup5+XI9MnvmxnVlq/pJf59HeuO3U2tcZCtYBHYgEfnlV4x42NNJGjLYcMxO42AHjTyrtO4+ftY7et5eXaK2xnn4/aqM89NwCFIJaNbJMljzMAABH8V1ZA70Dv1Xjwj6bmMmOSITAgkuNzxIq9MCu8qWd3FHNFzjPOze1kYFrG/YMdxRaB07zg1us/CFI+bcXxeWq9rYoldmjk/DEjEXENyoZwSpZwO8ElKSD2470HoMYOMBjGMBk5GTgRjGMBnLr9KZNlEjZIrmndbAux5T5vTg8Z1YwPMnw7xAx7W1CFik6swYp5mhCoVIjsfiW3fgHj5Z2tpNQY5RIQ9yxyIoYEmNZVdoySqiyoK0eOeT3JucYHntX4Zq2DBZlXzIVPUlN9N55EJAA22zQhhZBWMqbBrOpfD3EqtyR13msyMwRDpjHtAbtcjE0OPXvxlvjAYxjAxZq5+Xf7ZXeEuYZH07djckR+ankr/P+OWeV40pkDCVQ67iY64Kr9+PSsjy8dyszx7z/M+cV485Jccu197R4f4BDp9vTD+T4d0jNQEYiC+Y/CEUAD7nuSTnp5N7tJ6C0T6/M/5/TNaeFRD9xj92H987407cUBwAPTEmednXNSfrv+C3DGXpu2QycVisskYxWYSzKtbmC3wLIF/a8DPKzxbcu2ZeWgJJH+5Gq/5fz+WWeYuvqP8AqPlk+Xj+Jhcfe/k748+jLbjfwuGeRNUN+7alEOwU7VkCEpdFh1ZO47kX8K1jNGIY49PEK8qxqP8AaiiuT9hV/fMX8JiJvpsPoGAH6XxmTaQop6ChXNeZjfHy9cnrmynTZJ+u/wDTv+3jdy2/pr/btiFCh2UBR+XGZV6/LIj7D7DMs+jWvBJjsHyH6fnkkf2ycYYjaPkPT0+XbNGs0Ucy7ZFtflbC+CCDtIsUTYPBvOjGAxjGAxjGAycjJwIxjGAxjKfxj3rqJ7vyu1t3+nt3blrduO6qv4Qfy74FxjKNp9YzrUO1CUsFowygSC7KyGzt9B/G6XVBN4j+GGjjJIUuwC8ExxFht6nYOZgKP7q2a5YPQ4yp8Km1TOBPEFXpsSbThw9AeVjdpz2rLbAYxlJ43qneWPSQsVaTzyOO6RDvR9Ce3/XCfLyTjx3fdXErcVfPb9czqsopPB/D13WUGwqr3qD5Wb4Q1twT6A982wg6WZYrPRl4SyTscfu2eaP9focxnXnPzyfffpFxlL41p1kmiV7ICTvtU0XK7SFH1/tl1nB4poIpaaSx0wzbgxXaOCTx9sWbfXwZzDPduu/7PJePaURCIhTG7h98e4ttKmrBJPB5I5yo6h+f+frntm8E07Ded7XYve7Hg0QfXggjNb+FQqpCK1G7sP8AKrFjg0Tkc+PLxy09f+n/ABHixxmF3b5147e31/z88p/+I3s1qGn953CSN4lcAtzEscNutHivKzCu5b59/o0Xg+mPdWB//ds6PHvDo9TA0JJAZOnx3A9CCfUZmHLOLxtiH9bzYc9mMlmtvAf8GvGJzK+lJLwiMyiyT0irKoC/JTu+H5ix639bzzHsX7OweHRsqsWeUgu7AWQLCqK7KLJ+5Oeny/xcOS7xu3lXG49zFYyj8W1DzTppImK2OpMwNFY/RQfQn+o+ualy8kwm/p9Vyhqx9f58/wB8zyp/5Z0g/wDD9a/1H7/L4u+RpWOnm6JJMUguKyTtI7pZ9P7j5nDJnnPzyfffpFvjGMKmMYwGMYwGMYwGTkZOBGMYwGVniulneSJoXVVjJZgWcBy1L5gvDAIZCAeNxU8bbyzyq8Y8LeZlZJmjIUodpYEgyRv3B44Qi6vzfkQ5m02t28SqD02AJdCFk2v5m/BG5dxShxW09/hzT7prm3KZaod9wUG1cgKRGSDZjBaz8J455zk9n5Wu9SzWKBYyEg9GSJjQeu7q1V+6fmNuvXeEahQojmle6B/FcbXO25CTIDXB8oscnynAyOm1zPKBqFBChlXchon3nbuHRtUJ6HFsfwm577ug6XW7kqZQoclwaO5dyEbR0xtG0SDaST5h5uLzDxfwJp2fzKoMomDFdxB936BAHoRQYEH94jjvmcHgNMWkdZLnGp5j7P5g1Ek8V0wPls+uBcRyhlDKQwYBgQeCCLFHKVJxBr7YeXVoio/+14+Nn0uwfuRln4bA0cdNW4tLIQOQOpI8m0H1rdV/TNfiXh6TLsewLDqy90ceoPp/8nCPNhllJce8u/f02pdX7IOwlVZ4wJWlq9OSyxzSzSzKWEgJY9Z0DrtKqzAcncLLxd97xQKAWLJITXwKh7j5eo/X55zaldRGNza8VYH/AHeO+foBnfotEELMXMkklBpCAOB6ADgDgYsZbln4dNn29LXeGvnMJkDAqwtWDKRdWCKI4zYM1zglWCkBirBSewavKT9LzZ3XaTpV2CNRSgkgfFySSfiv1JzUNAv+Kn/tzZKrbAOd3rTbj345G2+M5gr/APm/X/75SOazfSENa1X37Zgy0aPpm9IWBFtf5t/fNeo+I/l/LPI/EOHHGTOf+Ps4eXLK6rUcstP8IytIyygWlAPoBnH4dj43I5/yxmTlJpJujr5FYCtWsbxv8zGoUpf8fz+uXmcHiXh6TKFa12sHR17ow9R/n8hnqvP5sMspLj3l36Wfa154+xbhAokiBUrR6fDMqOnvDqQQ853Am+DtonnLvxOTqTRRKLKuszH/AGqp4/M/2+eckK6hmZRrwdho/wDZ4x/T6HLHRaIJuO4u8hBeQgC69ABwB9B/bFl7G8s/Dps+3pa7g18/pnmF9np06dTbyrS7iN8ViYwvKdyvuFyRuxo95e1Cs9RjCzz6eAyqBWpck2ZPPKokPFHytcZu2O2txoGxm7V+CM4RhJtlSERGUCnYh4mY7+62Edb7jqE5dYwPOS+z0zCjqXbhaLPIaI07wk0GA7vu7HcRzmrxbwjVBH6M0rNJ1doEzr02brlH3dQEKN8Q2jjyfD6j1GMAcYxgMnIycCMYxgMYxgMYJzXBMsi7kZXU/vKwYfqOMDZjIvmvXg160exr8j+mS3HJ4A5J+WAxjGBjIgYUexwjWP5/fMsp9RqpJZzp4G2bQGll2htpPwqoPF9r/wDjOscbk4zzmMXGRWVa+F6heffGP3iUj+edHhetMqsHAWSM7XUfP5j6HNuGpuXbMeTd1lNfb0dlYrJxnCiKz5V7X+1mq02tnijddimPaCimriRjz37k98+rZReI+yGi1EjTSwbneizdWUXShRwrADgDsMpx/C3/AHcdz7tls7PmfhXtprJtXpomkUI8+mVgsajcDIoIsgkcfLPtOec03sL4fFIkqaenjZZFbrTmmUgqaL0eQO+W/iuvXTxNI3NcKv8AuY9h/noDnWc4rZjw46+kjnLPUuWVdmQTWVMfh+qkAd9SY2YAlFjFLf7t3zhpJNOyLLJ1I3O3eVClG9LruP7frnw/Ky36pfF143Gyefh/K0iWuaonk/f/ADjM8Zya3xBIjTbuFaRiFsIg4LsfQfx4PHBqSzrxlf8AtvT8DqgEkAWGF2aDcj4L43/DfF5j+3tPQYOWB21tjkN7gCKpeTtIau+0g9iDgWWMrx41B6vRBAraSbLKoUbQQWt08os+deOcDxqAlQr7i+zbQNEO0aghjwR+LHdHjcMCwxjGAxjGAycjJwIxjGAxjGBp1umEsbxNYWRXQkVdMCDV8evrxlFqNJBqQsjapD1EZ1cdNTsFEtH6qKFMebFg0AKvdbGHjdSGIZHUhSAxBBBCkkAH5GxnmIJtCFJ6kke9FdoyWcgOxdLI3Hdu1BYKGJ/EFigKDp/ZWkDb+rEFAR6BiAVdzFCp/dXfIWvsWo9++jT+D6Qbl94iO5ihWoQAZIIlAjHZWKKrEi928/SterTSFmcySo/UjYyGIsS8MgZ2AC3yukPmrYAt13GdLabS1IYzIzQKGK2y7/hUAM60wZ9MnmU1adwCbC60mqiCoqyxHtGu1kALKB5VAPeq8o7Z0QTK43IyspumVgwNcHkcZ54abTojNsm2Qo0JK0RL0+nC0S/vFt8SKOFJK8Gic6dFq44BsiRmX/s0hkJjAddQ3TRxt5Pw+qjhD9LC8BHF553wQP7rqlhoau9TZav9YhumTf7t1+jZ6FlvjKnUaORJveIApcrsliJ2h67MD6Ht39PzymGrLj5pcksymc8derg0ker6kB26hUEsliSSJiISrACQq5tt1EcP5aHlNkWSke9nb6RfiH0uxt/Oq/Kshddqzx7qo+pmWh96yNLoZI6AZWZmLzE/vX2A/j+v5Z1MemXd/wAubl8SzU7ePbX7rYYzDqD14+/9+2UnjU7zzpo4mK7h1J2BorF/tv0J/qPQnJ447q66Myg1uW/luGbMqx7L6QdoR/65P/dmrTj3WYRC+jL/AKYJJ2OO6gn0P9R9c3pl7C5yk8bZevpDJ/p75B9BJS9Pd+YOXJcff6DnK3xHQtPujehE68cWyv6N/h+nrm8Vky3U+bG5YanvXi4PHYtaZZej1Qux9jK0ezb0GAUIXU9fr7TZobeNwzfbDRH3oEN+IK3WT+I3SPLNTEbGI3NVkWazYmp1kYCGBJdoA6glA3V6kHkHMuhLMyPOqokZ3CMNuLN6E1x+X986xw6bu2feJ58nXjcZLu+cv/Fho72IG+IIm777Rf8AG8rPHNXAkkCTKCZWZAd+2ltAbWx1FMjQrs5+K6pTlug+fc8nK/xfVtDTBA6hZWZQhZ2EaGQKnNWSKAPqRkr41eTU0p4JdJGgcxSnpoJi7MpZUCl0un5U0SI1sXyVF5Emu0gHGnltUKhb2U0aSqFouKfZA4D12Qebtm1PGlO0LpowfKwJZdoWTUCGRlKqaWiW3Gr+XesNL4kgCudKqmSJF3HyIAEiLKwIPST8YAAXZFH0OY1MniOjjZj0HtCH42keQyuZAvUoEHSPZoMemo54GZrPpI3SoHu9iUNwCo8S7woc7V3pEDwGO0cGs2Sa9dqSpGirLDDMQUXnrMiF3IFlURiW+j8kDnMIfFd8ioIE8wlk6vScoZlaQRuDtApo4may108dWDeB6TGVvhWrd2IeuYtLNQFbTL1AyD6fhg82bY+lAWWAxjGAycjJwIxjGAxjGAzj/ZUNV0wAVVKFjyqFA7etKovvSgemdmMDj/ZUH/4k5viuOVdTQ9OHccf7z880Q+BxL1viPvA2MCQKXdI21doFcyvz35u75yzxgcb+FwsSWjVi1E7gCCdwa9va9yqxoclQfTJ/ZsVABAoXo0F4FQsXjXj90MbA/pxnXjAZiyA+mZYwMemPlkgV2ycYENlDDP7vr23AbNasex67PGoXZ+Y/iRl/nD4n4ek67JLqw6svDIw9QfT/AK51hZO487q/ZXUsmrRJYo/eC/P4rGYFp3HVI2mNvxIktS/lirsQq3OvcvJDAKLKUlkYDhQny71Zv+HzzV+z9Tf/AH9q/wD4L/fO3RaFY9x3M7yVvkYUTXoPQD6D+2dSTHx2O1DeZEYxkxh0x8skIB6ZljAYxjAXmvUQLINrqGHBoi+R2ObMYGCxKKpQNo2rQHlHHA+Q4HH0GZ3jGBAUCyAASbPHc0BZ+fAA/LJxjAYxjAZORk4EYxjAYxjAYxjAYxjAYxjAYxjAppvaOJJJI2DAxkLYANkruA78WN5F9+m3y52r4/CTVt/4lHYwDbBJur7dKQfl9RfBrfF4BM0EunViZNnaNt3lga23VR/EU0fRLvsMr4/ENKzF/d1cagx2G6bliTqeNp4ADxN5jfeuAOAum9o4gCdshIeWKgt20ZkO2yQLKxlufQj1zP8A5giHfdfU6PCk3IXVQgPHm8yn5Ue/Bzl0ut000wjOnTe3VjJZIrFB2kFfEyEmQbgKJLD55xL4xGjKX00ZJgXUbggDC2llWIeXzMGjQAA7ixLAeU0F1H47CyyPuIWKMTMWUr5Cm+xfJ4/jY7g1hpvH4nRXp/MI7AAba7tsERZSV37wV4JFjvyLrxrh0nkSCFCNOZnoWd8DbWhIKC1DIygmiPkMvpPD4iSTFGSQykmNSSGJLAmuxJJP1JwOL9vw7zGN5cFV2iM3uIQ7fofOnehyfkaxi9ooWAID7WMYVthoiQxBG+YUmVBzz3sUCc6pvCIHABhjobOOmtEJ8KkVyo447cD5Zsbw6EkEwxkghgemtggKAQa4NKgv/wAo+QwOGP2igZC/nCovUcmNvw06ayBmHcAqyn1781Rqw0WqWZN63VsORRBUkH+I7jjIOgisHpR2vY9NePKF4448qqv2UD0zbDCqKFRQqjsqgACzfAH1wM8YxgMYxgMYxgMYxgMYxgMnIycCMZNYrAjGTWKwIxk1isCMZNYrAjGTWKwIxk1isCLxeTWKwNB0qb+pXmqrs/Kr23V1xdXXHbNkaBRSgAWzUBXLEsx49SSSfqczrFYGEiBhTAEWDRFiwQQf1AP5Zlk1isCMZNYrAjGTWKwIxk1isCMZNYrAjGTWKwIxk1isCMZNYrAjJxWKwP/Z" alt="Acceptance Process" className="movie-poster" />
                  <h6>Acceptance Process</h6>
                  <p>Step-by-step string processing</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Accept vs Reject" className="movie-poster" />
                  <h6>Accept vs Reject</h6>
                  <p>Decision making in automata</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Language Recognition" className="movie-poster" />
                  <h6>Language Recognition</h6>
                  <p>Automata as language recognizers</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Finite Automata Acceptance of Languages</h6>
                <div className="video-container">
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/kfCZlZTVm4Q?si=38wZ5V1nKkldygRb" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>                </div>
              </div>

              <h4>Acceptance Process Steps</h4>
              <div className="algorithm-box">
                <h6>Step-by-Step Process</h6>
                <ol>
                  <li><strong>Start:</strong> Begin in the initial state q0</li>
                  <li><strong>Read:</strong> Read the first symbol of the input string</li>
                  <li><strong>Transition:</strong> Follow transition corresponding to current state and input symbol</li>
                  <li><strong>Move:</strong> Move to next state according to transition function</li>
                  <li><strong>Repeat:</strong> Repeat steps 2-4 for each subsequent symbol</li>
                  <li><strong>Check:</strong> After processing all symbols, check if current state is accepting</li>
                </ol>
              </div>

              <h4>Acceptance Criteria</h4>
              <div className="definition-box">
                <h6>Decision Rules</h6>
                <ul>
                  <li><strong>Accept:</strong> If final state is in F (set of accepting states)</li>
                  <li><strong>Reject:</strong> If final state is not in F</li>
                  <li><strong>Language:</strong> L(M) = all strings w such that extended_transition(q0, w) is in F</li>
                  <li><strong>Decision:</strong> Every string is either accepted or rejected</li>
                  <li><strong>Empty String:</strong> May be accepted if start state is also accept state</li>
                  <li><strong>Complete Processing:</strong> Must process entire input string before decision</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Acceptance Example: Binary Strings Ending in "01"</h5>
                <div className="example-details">
                  <h6>Automaton Design</h6>
                  <p><strong>States:</strong> q0 (start), q1 (read 0), q2 (accept - found "01")</p>
                  <p><strong>Alphabet:</strong> 0, 1</p>
                  <p><strong>Accept States:</strong> q2</p>
                  
                  <h6>Sample String Processing</h6>
                  <p><strong>String "101":</strong></p>
                  <ul>
                    <li>Start: q0</li>
                    <li>Read '1': q0 → q0 (stay in start)</li>
                    <li>Read '0': q0 → q1 (move to intermediate)</li>
                    <li>Read '1': q1 → q2 (move to accept)</li>
                    <li>Result: ACCEPT (ended in q2)</li>
                  </ul>
                  
                  <p><strong>String "10":</strong></p>
                  <ul>
                    <li>Start: q0</li>
                    <li>Read '1': q0 → q0</li>
                    <li>Read '0': q0 → q1</li>
                    <li>Result: REJECT (ended in q1, not accepting)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h3>Module 1 Quiz: Test Your Understanding</h3>
              <Quiz 
                title="Acceptance of Languages Quiz" 
                questions={[
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
                    question: "In a DFA, what happens when processing a string symbol by symbol?",
                    options: [
                      "Multiple transitions can be taken simultaneously",
                      "Exactly one transition is taken for each symbol",
                      "No transition is needed for some symbols",
                      "The automaton can skip symbols"
                    ],
                    correctAnswer: 1,
                    explanation: "In a DFA, for each state and input symbol, there is exactly one transition to follow, making the process deterministic."
                  },
                  {
                    question: "What is the language L(M) of an automaton M?",
                    options: [
                      "The set of all possible strings",
                      "The set of all states in the automaton",
                      "The set of all strings accepted by the automaton",
                      "The set of all transitions in the automaton"
                    ],
                    correctAnswer: 2,
                    explanation: "L(M) represents the language accepted by automaton M, which is the set of all strings that lead to an accepting state."
                  },
                  {
                    question: "What is the initial state of an automaton called?",
                    options: [
                      "Accept state",
                      "Start state or initial state",
                      "Final state",
                      "Transition state"
                    ],
                    correctAnswer: 1,
                    explanation: "The initial state (often denoted q0) is where the automaton begins processing any input string."
                  },
                  {
                    question: "Can an automaton have multiple accepting states?",
                    options: [
                      "No, only one accepting state is allowed",
                      "Yes, an automaton can have multiple accepting states",
                      "Only NFAs can have multiple accepting states",
                      "Only DFAs can have multiple accepting states"
                    ],
                    correctAnswer: 1,
                    explanation: "Both DFAs and NFAs can have multiple accepting states. A string is accepted if it ends in any one of these accepting states."
                  },
                  {
                    question: "What happens if a DFA processes a string and ends in a non-accepting state?",
                    options: [
                      "The string is accepted",
                      "The string is rejected",
                      "The automaton restarts",
                      "An error occurs"
                    ],
                    correctAnswer: 1,
                    explanation: "If the final state after processing all input symbols is not in the set of accepting states, the string is rejected."
                  },
                  {
                    question: "In the context of language acceptance, what is a 'run' of an automaton?",
                    options: [
                      "The speed at which the automaton processes input",
                      "The sequence of states visited while processing a string",
                      "The number of accepting states",
                      "The total number of transitions"
                    ],
                    correctAnswer: 1,
                    explanation: "A run is the sequence of states that the automaton goes through while processing an input string from start to finish."
                  },
                  {
                    question: "What is the extended transition function δ* used for?",
                    options: [
                      "To process single symbols only",
                      "To process entire strings of symbols",
                      "To add new states to the automaton",
                      "To remove transitions from the automaton"
                    ],
                    correctAnswer: 1,
                    explanation: "The extended transition function δ* extends the basic transition function to process complete strings rather than just single symbols."
                  }
                ]} 
                subject="flat" 
                unitId={2} 
                moduleId={1} 
              />
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">DFA and NFA Equivalence →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Equivalence of DFA and NFA</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Equivalence Between Deterministic and Non-Deterministic Automata</h3>
              <p>The fundamental theorem establishing that DFAs and NFAs recognize exactly the same class of languages, despite their different computational models.</p>
              
              <div className="theory-box">
                <h5>Key Equivalence Points</h5>
                <p>Understanding the theoretical foundation of DFA-NFA equivalence:</p>
                <ul>
                  <li><strong>Theorem:</strong> For every NFA, there exists an equivalent DFA that accepts the same language</li>
                  <li><strong>Subset Construction:</strong> Method to convert NFA to equivalent DFA by considering sets of states</li>
                  <li><strong>Power of States:</strong> DFA simulates all possible moves of NFA simultaneously</li>
                  <li><strong>Language Preservation:</strong> Both accept exactly the same set of strings</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="DFA NFA Equivalence" className="movie-poster" />
                  <h6>DFA-NFA Equivalence</h6>
                  <p>Theoretical foundation of equivalence</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Subset Construction" className="movie-poster" />
                  <h6>Subset Construction</h6>
                  <p>Converting NFA to DFA</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Regular Languages" className="movie-poster" />
                  <h6>Regular Languages</h6>
                  <p>Both models recognize regular languages</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>DFA and NFA Equivalence</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/LkyNl1CFJv4?si=VjjVgI2SVmPLsXPm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Practical Implications</h4>
              <div className="advantages-box">
                <h6>Design and Implementation Benefits</h6>
                <ul>
                  <li><strong>Design Flexibility:</strong> Design NFA, convert to DFA for implementation</li>
                  <li><strong>Recognition Power:</strong> Both accept exactly regular languages</li>
                  <li><strong>Implementation:</strong> DFA preferred for actual systems due to efficiency</li>
                  <li><strong>Expressive Equivalence:</strong> Neither model can accept languages the other cannot</li>
                </ul>
              </div>

              <h4>Proof Outline of Equivalence</h4>
              <div className="definition-box">
                <h6>Forward Direction</h6>
                <p><strong>Every DFA is already an NFA (trivial inclusion)</strong></p>
                <ul>
                  <li>DFA transition function: maps state-symbol pairs to single states</li>
                  <li>NFA transition function: maps state-symbol pairs to sets of states</li>
                  <li>Every singleton set is a valid set in power set</li>
                  <li>Therefore, every DFA is automatically an NFA</li>
                </ul>
                
                <h6>Reverse Direction</h6>
                <p><strong>Every NFA can be converted to an equivalent DFA</strong></p>
                <ul>
                  <li>Use subset construction algorithm</li>
                  <li>Each DFA state corresponds to a set of NFA states</li>
                  <li>Transitions simulate all possible NFA moves</li>
                  <li>Acceptance conditions preserved through construction</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Equivalence Demonstration</h5>
                <div className="equivalence-example">
                  <h6>NFA Example</h6>
                  <p><strong>Language:</strong> Strings containing "ab" as substring</p>
                  <p><strong>NFA States:</strong> q0 (start), q1 (read 'a'), q2 (accept - found "ab")</p>
                  <p><strong>NFA Transitions:</strong></p>
                  <ul>
                    <li>q0 on 'a': go to q0, q1 (non-deterministic choice)</li>
                    <li>q0 on 'b': go to q0</li>
                    <li>q1 on 'b': go to q2</li>
                    <li>q2 on 'a','b': go to q2 (trap in accept state)</li>
                  </ul>
                  
                  <h6>Equivalent DFA</h6>
                  <p><strong>DFA States:</strong> S0 = q0, S1 = q0,q1, S2 = q0,q1,q2</p>
                  <p><strong>DFA Transitions:</strong></p>
                  <ul>
                    <li>S0 on 'a': go to S1 (simulates q0→q0,q1)</li>
                    <li>S0 on 'b': go to S0 (simulates q0→q0)</li>
                    <li>S1 on 'a': go to S1 (simulates multiple paths)</li>
                    <li>S1 on 'b': go to S2 (simulates reaching accept state)</li>
                  </ul>
                  
                  <p><strong>Result:</strong> Both automata accept exactly the same language</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h3>Module 2 Quiz: Test Your Understanding</h3>
              <Quiz 
                title="DFA and NFA Equivalence Quiz" 
                questions={dfaNfaEquivalenceQuiz}
                subject="flat" 
                unitId={2} 
                moduleId={2} 
              />
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Acceptance of Languages</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">NFA to DFA Conversion →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Conversion of NFA to DFA</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Subset Construction Algorithm</h3>
              <p>The conversion from NFA to DFA uses the subset construction method where each DFA state corresponds to a set of NFA states, enabling systematic transformation while preserving language recognition.</p>
              
              <div className="theory-box">
                <h5>Algorithm Foundation</h5>
                <p>The subset construction algorithm systematically builds a DFA that simulates all possible computations of the NFA:</p>
                <ul>
                  <li><strong>State Mapping:</strong> Each DFA state represents a subset of NFA states</li>
                  <li><strong>Parallel Simulation:</strong> DFA tracks all possible NFA states simultaneously</li>
                  <li><strong>Deterministic Behavior:</strong> Eliminates non-determinism through state sets</li>
                  <li><strong>Language Preservation:</strong> Maintains exact same acceptance behavior</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6BO0ho8u2EjtJr-sefZACmm5oUd2a6pcrQ&s" alt="NFA to DFA Conversion" className="movie-poster" />
                  <h6>NFA to DFA Conversion</h6>
                  <p>Subset construction process</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABPlBMVEXy8vPn6Ojz8/T19fbU6dXD48b3qbXq6+v39/j18/bK28K2trfG38vJ3MqhoaLF5sinuqmvybIAAADCwsPamaTFmZ/BwcLOzs/5z83V1db6p7Te3t/Jysryo6++3sGoqKmvvLHZ79qTk5TKk5u617Gbm5ynuKiNnI/Ojpi21bnIqq+5vrqhuqPEkZnppa/JpKnc5dizrKW1pZ/S4My1x7bp3t7Gu73E2b2XppjftbThraruuretrqKcrJ2AgICzxbRub3BGMTWEkYVPUFB8fH2ca3NBTEN/WF4oKChfYGE6OzxVY1eivaWUrJZGUkhjRUqveIFrfW25f4irjJGUZm2qxaIWFhatz6EuMDDenptKSkuJn4uxnKA0JikgISIvNzFMNjljc2VxT1RxfHKMpoSLtZU8lVV0q4Ieij9aoW1nItwcAAAW80lEQVR4nO2djWObRpbAgXE9o0wBG1w4MtgUWiT74ri5VrfV7VWyKyuJ5Y/ESbPebNOmSXzpbv7/f+BmBhgGCcnIRrbj1UuMEYzezPx48/0YK8pCFrKQhSxkIQtZyEIWspCFLGQhC7mbAjO56YR8jtL4+7ep/P2mk3IFAdpsArS6Iv52KZVva9J4AwJ8uyC+MXLBDor3MayJ3zg+phgBIIdRNC35zW6Jw+0RYNMES4JGPgPFLVxArjoPfIgJZQOwa/MzwP+5iED2G9MfetDooZ7I6xJgg6mfFegWLoC54EOYyaGB0J4XRL0g7kXBAEfGENpBFERGEJAgGto9egAXa75GSXGxJy5/VkB2JcNHP7OT+eDTePsbqBoaEGO4FyFKbhC7vZ5mR0qv5xox7gV70WCA9+qqeuuRBBcyegGSPivI3T9MrqT4UPR63wPzwkfrPSpIo1WxpxJCNEKgCyEhqkoUQjyi2KrnAh+43u3EZ+3J+DRoDQyLg0vw0QB4+BbND5+4CjT6n/UH2H/WLaCX+Cd2RwO3q+wKa9sv4iMDiCxufgk+QDxknM3R+j5TKcensDbOUnPro+ZgWU6t1te492Mm9Si8CZmAT0G+Vaz7kDc4qNX6FKlz9NnKBHzU9jCS8KFoD3kW7djWiO8uSIbr16GMD3iWdWBFUt3nW6+tYa2F905Iig/Yafcua3l9KkSq+5CKbTbcXRTegohuMih81kS2sm4zQAnn+lre/xFSj8KbkIsGbdr8Bm1//Y9U/lqPwpsQYBdpaM4IHegXLmhzxlfsGLPaIp9yyQ+3RoBn+4kEya/so5CRC3ZtMcv4tHTQpqm0f86mV/iEC4KKQlR24iEAkM+u+reMXzYTFYBqUlvEEj5NpQLZlEHPNdzIj+KIRG4cR1jtediOHMNx/WiADS8a3LIZv1RQcM0Ryvj4hJWzHwAUecFer+f17L1eFAcxUXvKIXZJEOEhGgz3BmCBL5FC4WXFlZZMBTiMlUdsQgLiup6tGLbrBq5rx8RwfKwazu0qvJmg2mbhK0p50wFYJcdmVkAyya2h9JTVgHwKuv6UoDoE16FmhkTfmo4LinENEtSgw5jBgME//jeVf8wPTRVBQQ12U4vMspCj/beQmx1Fo+CWtEazrYPla8fzSk81+Uzx3RZBxm3BFyif1WxWNhAoGQ8U8jH3vlIxIUWnDvnDvNMxkwB7U5JTeWhKxz7Sp3mXbtRZyaWLJ/l4ON6t4gf8+8tC7q9JE5BFZws06jpQe0JWzFy2iBy1L31Q3FuGbz3Ht/yNPGwozNuNeV7UnpAV8wshWySZcdWkqJP44c3iA8VpL/pox/HR3hf7lS5/J+OA68K3tZHjQyoEeToIn7a7WXx0PM36pj4b/tl0BOiTBN/67y8FPuQc7PNZRpZsMHjLl3tqxwfY4r/G3MeYS4CCEnzmsyMzw4eCwwPu1MGiRvv7v948Pjab48RBgF1sREGkeL6bWN/jxzm+ARw6abI1aGhnuSnWJ8BVCCIqi8e3VQB6KMF3LOHDCnebSR6jTw5Y4m4YXwx7GJMgxj0YDQLVs8fxKQhaUFgfOhvMw/oQjo3YcSKXTcn1eihK8W3n+Gh5fStKAX2oQ+3G8QHXVonrEeJAhxAfQdUfwwfIgZsR02CErDwPNSYEO26M7SAeGIYR4xzfM4EP2JatZlGj1+A1u3jjTQebCNOSXxQPGMeHhoeHdlbngL3DuVgfE6QCDSoAAkjtKsW3+kaq+6KeSAfCQyNfcr81UtZxQakb49xbXo33TTQ+vElbXtOUWt6SdHwG+LJbN97vK4n61uG7L8nmYtQxmwDvPyX5zebvFPjJEUsvGPjzXl8BD2RxJLGxLX0it2tCBhTmepPHrar8pPh+wdwTksSNR95qGE3H7aJXJsC9uRJyayYeLy/AvblZoVsz7X15WeC7kizwXUkW+K4kwLs5F667gI/Mu488WRb4riS033dTUdclC3xXkgW+K8k149MKA7SSQdtkucZUcgGoikA88Vb9KdbUwvxAJM8PjMqIjzm5Zn7AMSpJPOlGVL9dAkygJAqcIsSThcy5lWa2kniFaHxdkO2FcDVRadniE8SS0ivOgQBHrb6TSXEmZr74UOwABSoYKAAGACLbgFesmDWKz1dUBLVEqQaRY8z2kgvHnWzlwugrCDmXfUuG4WNTWImRaMnS8eVUlarvkQjHOAhw4PSiSFUcUgO+IMZUXxA7sd2Legp0ZqqBADFUBKBHaK59FSLNsK+Ez/E8+uMoKjFcHypxjfNdKPJibNCcRgHNaazYPaUOfAag+oIoin2qFDm9mdzpgRPYBn2ghhoYvSDCAMb2VfAFtKImzkCNAzwwDARrLM+aqipQpZUxQQQqKlCJcsWaX6Pmy7bbYkpVwKp8qnSm7beAg/1e7OIARzF9rBj13EvPvzN82HZwYGPDoI/C8JVhnWsK2atdKH1lBIGSTtWUtI9N5KOGkiqSlM6UJA26lLoHFU9VieYpikv8itY3PomPpYyh5J2NmRJzQXyje0kJH0NHOp+ceOB9J60ifS1JwWFxtudNs9looAZ/IJr8dAqtatk3CzmYdF7jiznoK2kN8qF0vuPlVjhl4bSwiLn2hbSQ+CD//owrmKizLeQ4khxbvwnEw6YnZTrllUz5fFUVqUGkxp40xZevgD+UVsN3+HQodz4cfVdZlsIS+jf5IvYX5oPce3HG9XPwtZTx/5LStyztE6aUzjdK6+hmUzpfTcoPz039+NZlfDs5Pk1hUVXAty7hMzdMgY/2KdFl8AlXjCI+P3HX5Nqq4TM3cnwaUtFc8FmPc3xPf/59PcWnKW/ZziEX43tpreX4nv3xwkzxAe/tawddCp95sm3m+E5PBT5AklHhRHzmWd/M8Jlv/vhjI8MH9g9ZburHdyrhO13+eS3DBz33sAq+5CsJvo2+aQl8xIujS+J78SzH9+rD89MMHxpi7lo4Gd/Jixxf33x2bCb4NGir1tzxLb98JwovQMPBrPhoxoX1Kcg9uKz1rUr4lpc/CHx0nPkrqIqPqjkzhfWh4Zys75VkfdZmVniBtw+tWfGZ7482sroPBYE7rAPf6fO87iPkkAGoZn3b1mpW92lkD83H+jZf5vhePf2QFV76oIdOJXyvdvLCe/T+KMOnqUO2Hd/l8D3J8T22nr4Uhfd1dKZOxbf9Jsf34v1RVnjpAJVtFjgHfMtyy7uct7yJw+GMHRfTzFtejU+eXqrl3VjN8a1tbq5l+DTFJlObjqzNTgovT03acUlyUy++5Wn4uEzHl+O//0093eYE3xeTOi7pHiyX6fdx7fXiW8/loXS+4yliXledgs/eXBPycFWSQJrznW0SZ6TbnEvabUZTus0buTSl81UipqkVr0Z8wPWniBslt6cN2NVcoDomTnJjttnSB/nIeTf4ThLujMldMn279JFOy4zITp2bUUxdpUIBumjGRZk6cU4VXOJF7kISRmd0xELbzLnJsnNt3pMIX9HO57HUcPll3uv27gALfFeRu4bvmt0Tro5vDm7IC3xX03lpi75+fFds5P/N8dlXfMNkge9KCm4bvuv1F7pr+IJ5vPI5yb2GjfWJOK/KsTjqMNCkAckltBVHMrOrmwc+DRJJPFKQwBc3qjYiBW8xxZjoTFYpJ9r4KFpVo5JrVVKHqu0BVy2bQqkh/4klb5K41YoMMipu1xdVei8E9SpuAVghdSia7JMouS3OWDVk0wIXSEXPocqb/HmVXimsrK5C6qrpUmf1iKhUIWgV3f6q1usV38isqq4ivosVaWSB7wq6LsAHcmcFvmIPrhMfyA/14tOuC5/LNhdXaHeEHmid53mgFB/7K3rcn5VCBomfS1kCEy9a7vmabJOEJqVRS/Y01wA90C/ZSgk+Lfez5orZ36ErVwf4Hn5p8thy/ji+MQffUjfnpMeTLGqx7ToQmIZPI5Fru7FtENuPgsBGdoTK8CHs+cAhWCHEwb6KggiV4QNeRIBG+FKI76oABLg8v8DHMcHYsFXf6PmGQrAz3nRoauTRh8peGNEIhhSdMeFpAEwc2iU1VKI4gechHI2lDrgGBBr0IQXkMAff2CnRRdPOOlD0y0AJEEQk9i7ApwwDhW/Xru4ZMfLi0sKLjIjm1+95RuQOogipE/D5htcLsN9T4ziOophGPyG/bgQjrAYRGSrxwCCqX4IPkIhQbThygwBHLNbeBHz0cXqR48U4jtVo0FPAuEcxCjBz8KXPPY57NDeIdrzGdQE3MII4CAwSBHtUqUZtZRo+GPPNxUmA6RG7COPSwkuvu07g0OTRFBgYUdCl+OzA7xm2Hwe9yIgCBwQT8GnEhi7V6Rke21lMUw0yXngZvj3DcQyjZ2D6n9n8BHwYI2w42Bg4gWEECMdjqUOB4/diP4jpMYoMB+KypAE3VmPDDmIcOYMoJjSNUzsu2ebi2c7iAJU3HXyUxodtgFeDtByUZoTavqZqANLBBj1ocNIgl/3pOO6uy2Nmq+dlTQcbiqgKV8QOCtQmqBPbl3J/U4UvH41ECD0VQgKBB7mDLyCwRJcGmWe3ChVPISptETRvYt0njWQLZ8iTF67KQrHTRiPZdWZEG38MjQY7bQDuTVvQpowOonOVhOsbTVwDFFyiabDyxMmaAE9dYzRUoijZnD5x9LXLdDWyreobybOFXuk6HvAffpXKL1+Nn331W7IN1V/K7sViv9UH6QMEbq6tKe7GI9roM8+V/CSC5Ru4drLEPSjRIaXgL0lvxxdRdcsS1+GRojyiVr5RrND1MPujUyXJkU4fjDZFdurtcH/5m/vCq0J4QNz/LsVXdu8nseb/dfbs/PVM3dqGuPu9+PJXKT5PBFtvi2Dbuftxlrjcr+CnPFqeAv6T4RNOIKvrIqrvxVebYESX5N28KcKnuuyyUHnKvgYT8C0vf7M8fjaGT773k5k6/sj4srtrPwqvoDJ8IlhbKEn8eDbML3J8D8zUs0fCl7vcCHwbqQMQxSfufZ95BeX4Ml25w5C5mYVfF/hEKOHXxL9QzGgB34dXGZid5x8yRM/fbRbxbYpQy6dP1xN85smTN+YIvsRpjOIzt46YTxjH9+H5+ii+p09TfObqk2dZIp88OTEL+Mwj5lPL8W2++5DiW/+ZeQ7K+MwX22aKb4clIMF3dLQl4zNfvMlobLznzpoM34d3awV8NDlbKT7zzRPmx0a/YG4/eWFOwLf5IQOzufZ8LUW09uplEd86d25m99afMsdJjm/7+MkovtOnGb43W2cpvvWXXFsB39qHDN/xxrOt1Ci2aA6L+LZfCHzLP6+n1seTWcDXf5Hhe7xmpfi2tl+cmDI+vr0pp3FycrRqJvg2H5+OWN+zLTO1vhfMG5N/YXX1ycX4ljefZ2eU0UjhfZfho6a5mRXe/vtRfC9ficKbJJdZ3w57xBPw0cy8N1Oj2Or3J+JLvV2Z9a192BzBdyLwUbYpPnPryWoB3+qRKIsbTzLrW/7wcgTfkcBnHm2nKTNPnlWwPutpan07vz8fxfezwPeOeZpy6zt688cYPmF9J9bJRoJv7R1/GEV8zzPrO7Her5qJ9f3xbNT6GNoE32Pr6U6Cb+33nyfj27TSwmuuPnv/phyfuWq92Urwrf/+9PGo9a2m+MxntC5JvvD+xR+T6r71tQzf+traemZ97GIB36kIdXqaWd/GydYovrXNDN/qdoYvuTjSdOxk1rexsTW56WD3Enzr6zsTmw4al8DHXldIrG+V1VxS07GxnVnf1vZJim95fXO06VjdyJqO4+PjzPqONyZZXyJ1dFz4XsT3E3xTOy6Zkp2845L3FKZ3XB6OdjbkjosIVWfHJT8dx5c7gYqzl7lnaNZtLgm1FguX0a+zbrMvnEpf5g6lv4lv/JLhE8E2myJYR5x1hfWJS3Ee7S/iLMMnQm3nPq2/5XrTbnNJRKsvR3U5ZaHy069Hu836l1Nlq8FD3Su7pwv5sZFoa/xQdjeP4tskXOPRVlkwIVtp4ho/luiQ5F6S5R/KQuXX/sYjbWyVxTSm615ZqPGMZtK4tzRVkvDVQjF808MJfF9MD5Y92x+nq0uyXC3SxrcX6KqWUXD78YWV8IXV8IXT8IX5SSV8YTm+MCwJ223rMr5Qji6RJruiN4v4SlTpu+yi3gwlfFKw5PTLbvapWcCnh0sh/aHXs6+0u2F7Se+HOb5QTwOKUF0agoZcCvsSPnolTEIlGQ47tDwuUWXheSjwsVvp7SyTeYZLC2/Y6VCVSbgvw5U0z82lroRP77fp1/UURxoiXOnoYSss4Ntt0YDd3ZBVFe1dnuZdPez0aSwSvjZTR0Oyfx0aSGfaWq2lsNUPd/8m4eu2dvV2q6V3d3c7K62w3W2Hu+2wr4cSvrDVoYH6Hb2lt9rnSyxMV186pw+iFXYEvrDf3V1qn3f0DgtFNdGks6egU7UtYX16f1enedXpv76ur7DsUXUtmskWTWCp9YX9la7e6jSb/W631aQZ7fbbYXtlSYChodqtdqfTaXb6nVa/S7PRb4ZNCoflo2h9NGCz1Wq3zrvn592VcIWq6tBHTMn0JXx6i8bWT0L1aSY64Qo1AhohzU/7/7Qcn04jpXdbne55q9nm+Fh2CviW9Fafpl/vt86bnWaoiwDtDuUorK/d6i+xlNEMdJscHw3SCsOmLuPrdNoMQvO8z3K5S8PQx7VE7Wu3S/GVWl+3v9vtd1Y6HUpml+LQWbltLjVl6+u2WuedZqvb79MUhF+29ZDaS5OldMT6upRLp9vttDotWsxY8aDW1x+1PgrlvEWfVqfVbemp9VH97DkXrK/d0jstatHd5i61G16D7O6yEiLja1ODohGysHqHlzvKpttcau1SMML6mjTUSqvDDEFvcU2tpaXOin7OGOX4aNI63d1ms0lNL2Rh9NYSBU7LygTr46lnlYf+JTukBb3T3pWsbynJIz+kQfRuyC50wpGmI6s4RPWmN5fG6r4sVF4HMjZtnvVC3cdqqiScCNxmVW5bbjp4dSbXfew2r8N2pbovzJWloXQRKq/7ElV5xZ0GYT/6DC0vj6NCyxte3PJmqZna8ubN4N3puKRxX5CPm+33VcvCtxfouhQ+7dG9qfJDo3qoi8PdS8PBC4Jlz/YCdY+06pE2fqhD1w8jTYeiNabLLKHYElq1cBWDXRCrNkvi6tS1kIUsZCELWchCFrKQhSxkIQu51TJ1n5WFXCBTt8dfyEWilLy9uZDKssB3JRnHR02S/ybZR3FD4aGhuKIU9/Qq2eHrDkmSbTiSyTF8JIoMFta1kk3ZfJx8DUK8rx7QM68XEcjfdti3+VsPmdoYSmjvmkD947EKH338SAqXR/FBz+rt76u+TwJoe4EH9371KBYHex5+qzKkVvTroepA1VHe4sBXIA5USAJHcSwHuvQL15ela5U/V//556N/HX/8VMjgGD5iAQrCov8V6/XQ8g7fxhBG1tDawwcMn2rFUPEtRbXUw7M9C0eHw0PVGryOYmvoWz3rjvJ7ROXTnx/psWB+JfgsC2MLeRSfj17jaE9TVctBvQSfCt19K3I5vgOMomHwNvLis2jPIpZGLRffTXqNf3369OlPfvgo57AEH9QU/FZj+GztEEdDRYVnAdjLrK8HHcu1aCFXD2K0t+fjyArO3CCmX/QCbNl3kh/8+OnR8Z/tP3X9X/pUfBSLCrGV4nsdONYAwsA6ONvDZ9z6hmdnPW3fOqT43h5YbmAd7sPDQytQXlOqv57d0cILjz/9k8D2p0/61LpPVT1+gPS/R2ESSAizSY92ZDx+D3qsLXH5J/Z3R4jL2mlqluxL/PedFN6pgKNdi5J+n/gNx67CRFF6Nw0BxY273vcbl8Wo40qywHcl+X8J070CxxngqQAAAABJRU5ErkJggg==" alt="State Subsets" className="movie-poster" />
                  <h6>State Subsets</h6>
                  <p>DFA states as NFA state sets</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Epsilon Closure" className="movie-poster" />
                  <h6>Epsilon Closure</h6>
                  <p>Handling epsilon transitions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>NFA to DFA Conversion</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/6aOtnyL40X8?si=K0-pwVzeKPsOiZZq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Algorithm Steps</h4>
              <div className="algorithm-box">
                <h6>Subset Construction Process</h6>
                <ol>
                  <li><strong>Initialize:</strong> Create start state as epsilon-closure of NFA start state</li>
                  <li><strong>Process States:</strong> For each unmarked state in DFA, find transitions for each input symbol</li>
                  <li><strong>Compute Closures:</strong> Compute epsilon-closures for resulting sets of states</li>
                  <li><strong>Add States:</strong> Add new states and transitions to DFA</li>
                  <li><strong>Mark Processed:</strong> Mark the current state as processed</li>
                  <li><strong>Repeat:</strong> Continue until no new unmarked states remain</li>
                </ol>
              </div>

              <h4>Acceptance Criteria</h4>
              <div className="definition-box">
                <h6>DFA State Classification</h6>
                <ul>
                  <li><strong>Accepting State:</strong> DFA state is accepting if it contains at least one accepting NFA state</li>
                  <li><strong>Formal Rule:</strong> Any set containing an accept state becomes DFA accept state</li>
                  <li><strong>Non-accepting:</strong> No accept states in set means DFA reject state</li>
                  <li><strong>Mathematical:</strong> S is accepting if S intersect F is not empty</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Step-by-Step Conversion Example</h5>
                <div className="conversion-example">
                  <h6>NFA Specification</h6>
                  <p><strong>States:</strong> q0, q1, q2</p>
                  <p><strong>Alphabet:</strong> a, b</p>
                  <p><strong>Start:</strong> q0</p>
                  <p><strong>Accept:</strong> q2</p>
                  
                  <h6>NFA Transitions</h6>
                  <ul>
                    <li>transition(q0, a) = q0, q1</li>
                    <li>transition(q0, b) = q0</li>
                    <li>transition(q1, a) = empty</li>
                    <li>transition(q1, b) = q2</li>
                    <li>transition(q2, a) = empty</li>
                    <li>transition(q2, b) = empty</li>
                  </ul>
                  
                  <h6>DFA Construction Process</h6>
                  <p><strong>Step 1:</strong> Start state = q0</p>
                  <p><strong>Step 2:</strong> From q0 on 'a': q0, q1</p>
                  <p><strong>Step 3:</strong> From q0 on 'b': q0</p>
                  <p><strong>Step 4:</strong> From q0,q1 on 'a': q0, q1</p>
                  <p><strong>Step 5:</strong> From q0,q1 on 'b': q0, q2</p>
                  <p><strong>Continue...</strong> until all states processed</p>
                  
                  <h6>Resulting DFA States</h6>
                  <ul>
                    <li>S0 = q0 (start, non-accepting)</li>
                    <li>S1 = q0,q1 (non-accepting)</li>
                    <li>S2 = q0,q2 (accepting - contains q2)</li>
                  </ul>
                  
                  <p><strong>Result:</strong> DFA accepts same language as original NFA</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h3>Module 3 Quiz: Test Your Understanding</h3>
              <Quiz 
                title="NFA to DFA Conversion Quiz" 
                questions={nfaToDfaQuiz}
                subject="flat" 
                unitId={2} 
                moduleId={3} 
              />
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← DFA and NFA Equivalence</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Epsilon Transitions →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.4</div>
              <div className="lesson-title-main">
                <h1>NFA with Epsilon-Transitions</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Definition and Significance</h3>
              <p>An NFA with epsilon-transitions can make transitions without consuming input symbols, providing additional flexibility in language specification and automata design.</p>
              
              <div className="theory-box">
                <h5>Epsilon-Transition Concepts</h5>
                <p>Understanding the power and applications of epsilon-moves:</p>
                <ul>
                  <li><strong>Epsilon-move:</strong> Transition on empty string that changes state without reading input</li>
                  <li><strong>Significance:</strong> Provides additional flexibility in language specification</li>
                  <li><strong>Epsilon-closure:</strong> Set of all states reachable from given state via epsilon-transitions</li>
                  <li><strong>Power Enhancement:</strong> Makes NFA design more intuitive for complex languages</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Epsilon NFA" className="movie-poster" />
                  <h6>Epsilon-NFA</h6>
                  <p>NFAs with epsilon transitions</p>
                </div>
                <div className="movie-card">
                  <img src="https://www.tutorialspoint.com/assets/questions/media/53118/epsilon_closure.jpg" alt="Epsilon Closure" className="movie-poster" />
                  <h6>Epsilon Closure</h6>
                  <p>Computing reachable states</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/jpeg;base64,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" alt="Epsilon Elimination" className="movie-poster" />
                  <h6>Epsilon Elimination</h6>
                  <p>Converting to standard NFA</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Epsilon Transitions in NFA</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/84oNUttWlN4?si=Zn-6bkl7eJJwTJ8K" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Epsilon-Closure Computation</h4>
              <div className="algorithm-box">
                <h6>Epsilon-Closure Algorithm</h6>
                <p><strong>Input:</strong> Set of states S</p>
                <p><strong>Output:</strong> Epsilon-Closure(S)</p>
                <pre>
1. Initialize closure = S
2. Initialize stack with all states in S
3. While stack is not empty:
   - Pop state q from stack
   - For each state r such that transition(q, epsilon) = r:
     - If r not in closure:
       - Add r to closure
       - Push r onto stack
4. Return closure
                </pre>
              </div>

              <h4>Conversion to NFA without Epsilon-Transitions</h4>
              <div className="definition-box">
                <h6>Conversion Steps</h6>
                <ul>
                  <li><strong>Compute Closures:</strong> Compute epsilon-closure for each state in epsilon-NFA</li>
                  <li><strong>Adjust Transitions:</strong> For each state-symbol pair, find all reachable states including via epsilon-transitions</li>
                  <li><strong>Update Function:</strong> Adjust transitions to account for epsilon-moves</li>
                  <li><strong>Update Accept States:</strong> Update accept states based on epsilon-closures</li>
                  <li><strong>Create New Function:</strong> Create new transition function without epsilon-symbols</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Epsilon-NFA Conversion Example</h5>
                <div className="epsilon-example">
                  <h6>Original Epsilon-NFA</h6>
                  <p><strong>States:</strong> q0, q1, q2, q3</p>
                  <p><strong>Alphabet:</strong> a, b</p>
                  <p><strong>Start:</strong> q0</p>
                  <p><strong>Accept:</strong> q3</p>
                  
                  <h6>Epsilon-NFA Transitions</h6>
                  <ul>
                    <li>transition(q0, a) = q1</li>
                    <li>transition(q1, epsilon) = q2</li>
                    <li>transition(q2, b) = q3</li>
                    <li>transition(q0, epsilon) = q2</li>
                  </ul>
                  
                  <h6>Epsilon-Closures</h6>
                  <ul>
                    <li>ECLOSE(q0) = q0, q2</li>
                    <li>ECLOSE(q1) = q1, q2</li>
                    <li>ECLOSE(q2) = q2</li>
                    <li>ECLOSE(q3) = q3</li>
                  </ul>
                  
                  <h6>Converted NFA (without epsilon)</h6>
                  <p><strong>New Transitions:</strong></p>
                  <ul>
                    <li>transition(q0, a) = ECLOSE(q1) = q1, q2</li>
                    <li>transition(q0, b) = ECLOSE(q3) = q3 (via q0→q2→q3)</li>
                    <li>transition(q1, b) = ECLOSE(q3) = q3 (via q1→q2→q3)</li>
                    <li>transition(q2, b) = q3</li>
                  </ul>
                  
                  <p><strong>Key Considerations:</strong></p>
                  <ul>
                    <li>Preserve language acceptance</li>
                    <li>Maintain all reachable states</li>
                    <li>Handle composite transitions</li>
                    <li>Ensure equivalent behavior</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h3>Module 4 Quiz: Test Your Understanding</h3>
              <Quiz 
                title="Epsilon-Transitions Quiz" 
                questions={epsilonTransitionsQuiz}
                subject="flat" 
                unitId={2} 
                moduleId={4} 
              />
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← NFA to DFA Conversion</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Automata Minimization →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.5</div>
              <div className="lesson-title-main">
                <h1>Minimization of Finite Automata</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Optimization and Equivalence</h3>
              <p>Minimization reduces the number of states in an automaton while preserving its language recognition capability, creating the most efficient representation possible.</p>
              
              <div className="theory-box">
                <h5>Minimization Principles</h5>
                <p>Understanding the theoretical foundation of automata optimization:</p>
                <ul>
                  <li><strong>Reachability:</strong> Remove unreachable states from start state</li>
                  <li><strong>Equivalence Classes:</strong> Group equivalent states together</li>
                  <li><strong>Partition Refinement:</strong> Iteratively refine partitions based on behavior</li>
                  <li><strong>Construction:</strong> Build minimized automaton from final partitions</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Automata Minimization" className="movie-poster" />
                  <h6>Automata Minimization</h6>
                  <p>Reducing states while preserving language</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Partition Refinement" className="movie-poster" />
                  <h6>Partition Refinement</h6>
                  <p>Iterative state grouping process</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Myhill-Nerode" className="movie-poster" />
                  <h6>Myhill-Nerode Theorem</h6>
                  <p>Theoretical foundation for minimization</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Automata Minimization</h6>
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/rGxyc-CJGRk?si=cEY1ZzKFpkNGbBuf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              </div>

              <h4>Myhill-Nerode Theorem</h4>
              <div className="definition-box">
                <h6>Theoretical Foundation</h6>
                <p>The Myhill-Nerode theorem provides the mathematical basis for minimization:</p>
                <ul>
                  <li><strong>State Equivalence:</strong> States are equivalent if they behave identically for all future inputs</li>
                  <li><strong>Minimal Automaton:</strong> Has the fewest possible states for the language</li>
                  <li><strong>Uniqueness:</strong> The minimal automaton is unique up to state renaming</li>
                  <li><strong>Equivalence Classes:</strong> Number of classes equals number of states in minimal automaton</li>
                </ul>
              </div>

              <h4>Minimization Algorithm (Partition Refinement)</h4>
              <div className="algorithm-box">
                <h6>Partition Refinement Steps</h6>
                <ol>
                  <li><strong>Initial Partition:</strong> Separate accepting vs non-accepting states</li>
                  <li><strong>Check Partitions:</strong> For each partition, check if states have same transitions to other partitions</li>
                  <li><strong>Split Partitions:</strong> If not, split the partition based on different behaviors</li>
                  <li><strong>Repeat Process:</strong> Continue until no more splits occur</li>
                  <li><strong>Build Automaton:</strong> Each final partition becomes a state in minimized automaton</li>
                </ol>
              </div>

              <h4>State Equivalence</h4>
              <div className="definition-box">
                <h6>Equivalence Criteria</h6>
                <p>Two states p and q are equivalent if:</p>
                <ul>
                  <li><strong>Same Type:</strong> Both accepting or both non-accepting</li>
                  <li><strong>Same Transitions:</strong> For each input symbol a, transition(p,a) and transition(q,a) are equivalent</li>
                  <li><strong>Equivalence Relation:</strong> This creates an equivalence relation on states</li>
                  <li><strong>Transitive Property:</strong> If p equivalent to q and q equivalent to r, then p equivalent to r</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Minimization Example</h5>
                <div className="minimization-example">
                  <h6>Original DFA</h6>
                  <p><strong>States:</strong> q0, q1, q2, q3, q4</p>
                  <p><strong>Alphabet:</strong> a, b</p>
                  <p><strong>Start:</strong> q0</p>
                  <p><strong>Accept:</strong> q2, q4</p>
                  
                  <h6>Initial Partition</h6>
                  <p><strong>Partition 1:</strong> q0, q1, q3 (non-accepting)</p>
                  <p><strong>Partition 2:</strong> q2, q4 (accepting)</p>
                  
                  <h6>Refinement Process</h6>
                  <p><strong>Iteration 1:</strong> Check if states in each partition behave similarly</p>
                  <ul>
                    <li>q0 on 'a' goes to accepting state, q1 on 'a' goes to non-accepting</li>
                    <li>Split Partition 1: q0 | q1, q3</li>
                  </ul>
                  
                  <p><strong>Iteration 2:</strong> Continue refinement</p>
                  <ul>
                    <li>Check q1 and q3 behavior</li>
                    <li>If they behave differently, split further</li>
                  </ul>
                  
                  <h6>Final Minimized Automaton</h6>
                  <p><strong>Minimized States:</strong> 3 states (reduced from 5)</p>
                  <p><strong>State Mapping:</strong></p>
                  <ul>
                    <li>New State 0: q0</li>
                    <li>New State 1: q1, q3 (equivalent states merged)</li>
                    <li>New State 2: q2, q4 (equivalent accepting states merged)</li>
                  </ul>
                  
                  <p><strong>Result:</strong> Minimized automaton accepts same language with fewer states</p>
                </div>
              </div>
            </section>

            <section className="content-section">
              <h3>Module 5 Quiz: Test Your Understanding</h3>
              <Quiz 
                title="Automata Minimization Quiz" 
                questions={minimizationQuiz}
                subject="flat" 
                unitId={2} 
                moduleId={5} 
              />
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Epsilon Transitions</button>
              <button onClick={() => setCurrentModule(6)} className="next-module-btn">Unit 2 Quiz →</button>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.6</div>
              <div className="lesson-title-main">
                <h1>Module 1 Quiz: Acceptance of Languages</h1>
              </div>
            </div>
            
            <Quiz 
              title="Module 1 Quiz: Acceptance of Languages" 
              questions={[
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
                  question: "In a DFA, what happens when processing a string symbol by symbol?",
                  options: [
                    "Multiple transitions can be taken simultaneously",
                    "Exactly one transition is taken for each symbol",
                    "No transition is needed for some symbols",
                    "The automaton can skip symbols"
                  ],
                  correctAnswer: 1,
                  explanation: "In a DFA, for each state and input symbol, there is exactly one transition to follow, making the process deterministic."
                },
                {
                  question: "What is the language L(M) of an automaton M?",
                  options: [
                    "The set of all possible strings",
                    "The set of all states in the automaton",
                    "The set of all strings accepted by the automaton",
                    "The set of all transitions in the automaton"
                  ],
                  correctAnswer: 2,
                  explanation: "L(M) represents the language accepted by automaton M, which is the set of all strings that lead to an accepting state."
                },
                {
                  question: "What is the initial state of an automaton called?",
                  options: [
                    "Accept state",
                    "Start state or initial state",
                    "Final state",
                    "Transition state"
                  ],
                  correctAnswer: 1,
                  explanation: "The initial state (often denoted q0) is where the automaton begins processing any input string."
                },
                {
                  question: "Can an automaton have multiple accepting states?",
                  options: [
                    "No, only one accepting state is allowed",
                    "Yes, an automaton can have multiple accepting states",
                    "Only NFAs can have multiple accepting states",
                    "Only DFAs can have multiple accepting states"
                  ],
                  correctAnswer: 1,
                  explanation: "Both DFAs and NFAs can have multiple accepting states. A string is accepted if it ends in any one of these accepting states."
                },
                {
                  question: "What happens if a DFA processes a string and ends in a non-accepting state?",
                  options: [
                    "The string is accepted",
                    "The string is rejected",
                    "The automaton restarts",
                    "An error occurs"
                  ],
                  correctAnswer: 1,
                  explanation: "If the final state after processing all input symbols is not in the set of accepting states, the string is rejected."
                },
                {
                  question: "In the context of language acceptance, what is a 'run' of an automaton?",
                  options: [
                    "The speed at which the automaton processes input",
                    "The sequence of states visited while processing a string",
                    "The number of accepting states",
                    "The total number of transitions"
                  ],
                  correctAnswer: 1,
                  explanation: "A run is the sequence of states that the automaton goes through while processing an input string from start to finish."
                },
                {
                  question: "What is the extended transition function δ* used for?",
                  options: [
                    "To process single symbols only",
                    "To process entire strings of symbols",
                    "To add new states to the automaton",
                    "To remove transitions from the automaton"
                  ],
                  correctAnswer: 1,
                  explanation: "The extended transition function δ* extends the basic transition function to process complete strings rather than just single symbols."
                }
              ]} 
              subject="flat" 
              unitId={2} 
              moduleId={1} 
            />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Back to Module</button>
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Next Module →</button>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.7</div>
              <div className="lesson-title-main">
                <h1>Unit 2 Comprehensive Quiz</h1>
              </div>
            </div>
            
            <Quiz title="Unit 2 Comprehensive Quiz: Finite Automata" questions={unitQuiz} subject="flat" unitId={2} moduleId={7} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(5)} className="prev-module-btn">← Automata Minimization</button>
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

export default Unit2;