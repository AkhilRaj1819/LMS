'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const module1Quiz = [
    {
      question: "What is the primary focus of syntax in linguistics?",
      options: [
        "Study of meaning in language",
        "Study of sound systems",
        "Study of sentence structure and word arrangement",
        "Study of language acquisition"
      ],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a key component of phrase structure grammar?",
      options: [
        "Phonological rules",
        "Rewrite rules and phrase structure trees",
        "Semantic feature analysis",
        "Pragmatic inference"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the term 'constituency' refer to in syntax?",
      options: [
        "The meaning of individual words",
        "Groups of words that function as a unit",
        "The sound patterns of language",
        "The social context of language use"
      ],
      correctAnswer: 1
    },
    {
      question: "What is recursion in syntax?",
      options: [
        "Repeating the same word",
        "Embedding structures within structures",
        "Changing word order",
        "Adding prefixes"
      ],
      correctAnswer: 1
    },
    {
      question: "Which is a major phrasal category?",
      options: [
        "Noun Phrase (NP)",
        "Verb Phrase (VP)",
        "Prepositional Phrase (PP)",
        "All of the above"
      ],
      correctAnswer: 3
    }
  ];

  const module2Quiz = [
    {
      question: "What is the main concern of semantics in linguistics?",
      options: [
        "Sound production mechanisms",
        "Sentence formation rules",
        "Meaning and interpretation of linguistic expressions",
        "Language variation across communities"
      ],
      correctAnswer: 2
    },
    {
      question: "Which semantic relation exists between 'dog' and 'animal'?",
      options: ["Synonymy", "Antonymy", "Hyponymy", "Meronymy"],
      correctAnswer: 2
    },
    {
      question: "What does the compositionality principle state?",
      options: [
        "Meaning of whole is derived from parts",
        "Meaning comes from context only",
        "Words have fixed meanings",
        "Grammar determines meaning entirely"
      ],
      correctAnswer: 0
    },
    {
      question: "What are synonyms?",
      options: [
        "Words with opposite meanings",
        "Words with similar meanings",
        "Words that sound the same",
        "Words from the same category"
      ],
      correctAnswer: 1
    },
    {
      question: "What is polysemy?",
      options: [
        "Multiple words, one meaning",
        "One word, multiple related meanings",
        "Words that sound identical",
        "Words with no meaning"
      ],
      correctAnswer: 1
    }
  ];

  const module3Quiz = [
    {
      question: "Which word order type is most common among world languages?",
      options: [
        "SOV (Subject-Object-Verb)",
        "SVO (Subject-Verb-Object)",
        "VSO (Verb-Subject-Object)",
        "VOS (Verb-Object-Subject)"
      ],
      correctAnswer: 0
    },
    {
      question: "What is an isolating language?",
      options: [
        "Language with complex word structure",
        "Language with one morpheme per word",
        "Language with no grammar",
        "Language spoken in isolation"
      ],
      correctAnswer: 1
    },
    {
      question: "In language typology, what does 'alignment' refer to?",
      options: [
        "Word order patterns",
        "How languages mark grammatical relations",
        "Sound change processes",
        "Semantic categorization"
      ],
      correctAnswer: 1
    },
    {
      question: "Which language is an example of SOV word order?",
      options: ["English", "Japanese", "Arabic", "French"],
      correctAnswer: 1
    },
    {
      question: "What are Greenberg's universals?",
      options: [
        "Universal grammar rules",
        "Cross-linguistic patterns and tendencies",
        "English grammar rules",
        "Phonetic symbols"
      ],
      correctAnswer: 1
    }
  ];

  const unitQuiz = [
    ...module1Quiz.slice(0, 3),
    ...module2Quiz.slice(0, 3),
    ...module3Quiz.slice(0, 3),
    {
      question: "What is the difference between syntax and semantics?",
      options: [
        "Syntax deals with form, semantics with meaning",
        "Syntax deals with meaning, semantics with form",
        "Both deal with the same aspects",
        "Neither deals with language structure"
      ],
      correctAnswer: 0
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
                <h1>Syntax and Syntactic Structures</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Syntax?</h3>
              <p>Have you ever wondered why "The cat chased the mouse" makes sense, but "Cat the mouse the chased" doesn't? That's syntax! Syntax is the set of rules that determines how words combine to form grammatical sentences.</p>
              
              <p><strong>Think of it like building with blocks:</strong> You can't just throw blocks together randomly. There are rules about which blocks connect and in what order. Similarly, words must be arranged in specific patterns to make sense.</p>
              
              
                <iframe 
                  src="https://www.youtube.com/embed/tZTGglxxS7A?si=kYXwE5408XcFxEjw" 
                  title="Introduction to Syntax"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
            

              <h4>Why Syntax Matters</h4>
              <ul>
                <li><strong>Word order changes meaning:</strong> "The dog bit the man" vs "The man bit the dog"</li>
                <li><strong>Grammar makes communication clear:</strong> Without rules, we couldn't understand each other</li>
                <li><strong>Every language has syntax:</strong> But the rules differ across languages</li>
              </ul>

              <h4>Basic Building Blocks: Phrases</h4>
              <p>Sentences are made of smaller units called phrases. Think of phrases as teams of words that work together:</p>
              
              <h5>1. Noun Phrase (NP) - The "Thing" Team</h5>
              <ul>
                <li><strong>What it is:</strong> A group of words centered around a noun</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"the big dog" (article + adjective + noun)</li>
                    <li>"my friend" (possessive + noun)</li>
                    <li>"students in the class" (noun + prepositional phrase)</li>
                  </ul>
                </li>
                <li><strong>Job in sentence:</strong> Usually the subject or object</li>
              </ul>

              <h5>2. Verb Phrase (VP) - The "Action" Team</h5>
              <ul>
                <li><strong>What it is:</strong> A group of words centered around a verb</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"runs quickly" (verb + adverb)</li>
                    <li>"ate the pizza" (verb + noun phrase)</li>
                    <li>"is sleeping" (auxiliary + verb)</li>
                  </ul>
                </li>
                <li><strong>Job in sentence:</strong> Tells what the subject does</li>
              </ul>

              <h5>3. Prepositional Phrase (PP) - The "Location/Relation" Team</h5>
              <ul>
                <li><strong>What it is:</strong> Preposition + noun phrase</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"in the house" (location)</li>
                    <li>"after dinner" (time)</li>
                    <li>"with my friend" (accompaniment)</li>
                  </ul>
                </li>
                <li><strong>Job in sentence:</strong> Adds extra information</li>
              </ul>

              <div className="example-box">
                <h5>Sentence Breakdown Example</h5>
                <p>Let's break down: "The happy student read a book in the library"</p>
                <ul>
                  <li><strong>Noun Phrase 1 (Subject):</strong> "The happy student"</li>
                  <li><strong>Verb Phrase:</strong> "read a book in the library"</li>
                  <li><strong>Noun Phrase 2 (Object):</strong> "a book"</li>
                  <li><strong>Prepositional Phrase:</strong> "in the library"</li>
                </ul>
                <p>Structure: NP + VP (which contains another NP and PP)</p>
              </div>

              <h4>Sentence Patterns in English</h4>
              <p>English follows a basic pattern: <strong>Subject + Verb + Object (SVO)</strong></p>
              
              <ul>
                <li><strong>Subject:</strong> Who/what does the action ("The cat")</li>
                <li><strong>Verb:</strong> The action ("chased")</li>
                <li><strong>Object:</strong> Who/what receives the action ("the mouse")</li>
              </ul>

              <h5>Common Sentence Types:</h5>
              <ul>
                <li><strong>Simple:</strong> One subject + one verb
                  <ul><li>Example: "Birds fly."</li></ul>
                </li>
                <li><strong>Compound:</strong> Two simple sentences joined
                  <ul><li>Example: "Birds fly and fish swim."</li></ul>
                </li>
                <li><strong>Complex:</strong> Main clause + dependent clause
                  <ul><li>Example: "Birds fly when the weather is nice."</li></ul>
                </li>
              </ul>

              <h4>Recursion - The Magic of Infinite Sentences</h4>
              <p>Here's something amazing: You can keep adding to sentences forever!</p>
              
              <ul>
                <li>"The cat sat on the mat."</li>
                <li>"The cat that I saw sat on the mat."</li>
                <li>"The cat that I saw yesterday sat on the mat that was red."</li>
                <li>"The cat that I saw yesterday in the park sat on the mat that was red and soft."</li>
              </ul>
              
              <p><strong>This is recursion:</strong> Embedding phrases within phrases, creating potentially infinite sentences!</p>

              <h4>Constituency Tests - Proving Phrases Exist</h4>
              <p>How do we know words form a phrase? We use tests:</p>
              
              <h5>1. Substitution Test</h5>
              <ul>
                <li>Can you replace the group with one word?</li>
                <li>"The big dog" → "It" (Yes! It's a phrase)</li>
              </ul>

              <h5>2. Movement Test</h5>
              <ul>
                <li>Can you move the group together?</li>
                <li>"I saw [the big dog] yesterday" → "Yesterday, I saw [the big dog]"</li>
              </ul>

              <h5>3. Coordination Test</h5>
              <ul>
                <li>Can you join it with "and"?</li>
                <li>"[the big dog] and [the small cat]" (Yes! Both are phrases)</li>
              </ul>

              <div className="example-box">
                <h5>Try It Yourself!</h5>
                <p>Test if "very quickly" is a phrase in: "She ran very quickly"</p>
                <ul>
                  <li><strong>Substitution:</strong> "She ran fast" ✓</li>
                  <li><strong>Movement:</strong> "Very quickly, she ran" ✓</li>
                  <li><strong>Coordination:</strong> "She ran very quickly and quite slowly" ✓</li>
                  <li><strong>Result:</strong> Yes, it's a phrase!</li>
                </ul>
              </div>

              <h4>Grammatical Relations</h4>
              <ul>
                <li><strong>Subject:</strong> The doer ("John kicked the ball")</li>
                <li><strong>Direct Object:</strong> What's affected ("John kicked the ball")</li>
                <li><strong>Indirect Object:</strong> To/for whom ("John gave Mary the book")</li>
                <li><strong>Complement:</strong> Completes meaning ("She is happy")</li>
              </ul>

              <h4>Why Different Languages, Different Rules?</h4>
              <ul>
                <li><strong>English:</strong> Subject-Verb-Object ("I eat apples")</li>
                <li><strong>Japanese:</strong> Subject-Object-Verb ("I apples eat")</li>
                <li><strong>Arabic:</strong> Verb-Subject-Object ("Eat I apples")</li>
              </ul>
              <p>All are correct in their own languages! Syntax rules vary, but every language has them.</p>
            </section>

            <Quiz title="Module 2.1 Quiz" questions={module1Quiz} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.thoughtco.com/syntax-grammar-1692182" target="_blank" rel="noopener noreferrer">Introduction to Syntax</a></li>
                <li><a href="https://www.linguisticsociety.org/resource/syntax" target="_blank" rel="noopener noreferrer">Linguistic Society - Syntax Resources</a></li>
                <li><a href="https://plato.stanford.edu/entries/syntax/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia - Syntax</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={onBack} className="prev-module-btn">← Back to Overview</button>
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Semantics →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Semantics and Semantic Structures</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Semantics?</h3>
              <p>Ever wonder why "bank" can mean a financial institution OR the side of a river? Or why "I'm fine" can mean you're okay OR you're actually upset? That's semantics - the study of meaning in language!</p>
              
              <p><strong>Simple definition:</strong> Semantics is about what words and sentences MEAN, not just what they look like or sound like.</p>
              
              
                <iframe 
                  src="https://www.youtube.com/embed/6geQjY8b7sA?si=m65NZ_9EzFu-hJzK" 
                  title="Introduction to Semantics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
            

              <h4>Types of Meaning</h4>
              
              <h5>1. Lexical Meaning - Word Meaning</h5>
              <ul>
                <li><strong>What it is:</strong> The dictionary definition of a word</li>
                <li><strong>Example:</strong> "dog" = a four-legged domestic animal</li>
                <li><strong>Stays relatively stable</strong> across contexts</li>
              </ul>

              <h5>2. Compositional Meaning - Sentence Meaning</h5>
              <ul>
                <li><strong>What it is:</strong> Meaning built from combining words</li>
                <li><strong>Example:</strong> "big" + "dog" = large canine</li>
                <li><strong>The whole = sum of parts</strong> (usually!)</li>
              </ul>

              <div className="example-box">
                <h5>Compositionality Principle</h5>
                <p>The meaning of a sentence comes from:</p>
                <ul>
                  <li>The meanings of individual words</li>
                  <li>How those words are combined</li>
                </ul>
                <p><strong>Example:</strong> "The cat chased the mouse"</p>
                <ul>
                  <li>We know what "cat", "chased", and "mouse" mean</li>
                  <li>We combine them using syntax rules</li>
                  <li>Result: We understand the whole sentence!</li>
                </ul>
              </div>

              <h4>Semantic Relations - How Words Relate</h4>
              
              <h5>1. Synonymy - Same Meaning</h5>
              <ul>
                <li><strong>Definition:</strong> Words with similar/same meanings</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>big / large</li>
                    <li>happy / joyful</li>
                    <li>start / begin</li>
                  </ul>
                </li>
                <li><strong>Note:</strong> Perfect synonyms are rare! Usually slight differences exist</li>
              </ul>

              <h5>2. Antonymy - Opposite Meaning</h5>
              <ul>
                <li><strong>Definition:</strong> Words with opposite meanings</li>
                <li><strong>Types:</strong>
                  <ul>
                    <li><strong>Gradable:</strong> hot/cold (can be very hot, quite cold)</li>
                    <li><strong>Complementary:</strong> alive/dead (no middle ground)</li>
                    <li><strong>Relational:</strong> parent/child (defined by relationship)</li>
                  </ul>
                </li>
              </ul>

              <h5>3. Hyponymy - Category Relations</h5>
              <ul>
                <li><strong>Definition:</strong> "Is a type of" relationship</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"dog" is a hyponym of "animal" (dog IS A TYPE OF animal)</li>
                    <li>"rose" is a hyponym of "flower"</li>
                    <li>"car" is a hyponym of "vehicle"</li>
                  </ul>
                </li>
                <li><strong>Hypernym:</strong> The general category (animal, flower, vehicle)</li>
                <li><strong>Hyponym:</strong> The specific type (dog, rose, car)</li>
              </ul>

              <h5>4. Meronymy - Part-Whole Relations</h5>
              <ul>
                <li><strong>Definition:</strong> "Is a part of" relationship</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"wheel" is a meronym of "car" (wheel IS PART OF car)</li>
                    <li>"finger" is a meronym of "hand"</li>
                    <li>"chapter" is a meronym of "book"</li>
                  </ul>
                </li>
              </ul>

              <div className="example-box">
                <h5>Practice: Identify the Relation</h5>
                <ul>
                  <li><strong>happy / sad:</strong> Antonymy (opposites)</li>
                  <li><strong>car / vehicle:</strong> Hyponymy (car is a type of vehicle)</li>
                  <li><strong>door / house:</strong> Meronymy (door is part of house)</li>
                  <li><strong>begin / start:</strong> Synonymy (same meaning)</li>
                </ul>
              </div>

              <h4>Polysemy vs Homonymy</h4>
              
              <h5>Polysemy - One Word, Related Meanings</h5>
              <ul>
                <li><strong>Definition:</strong> One word with multiple RELATED meanings</li>
                <li><strong>Example: "head"</strong>
                  <ul>
                    <li>Body part ("my head hurts")</li>
                    <li>Leader ("head of department")</li>
                    <li>Top part ("head of the bed")</li>
                  </ul>
                </li>
                <li><strong>All meanings connected</strong> to the original sense</li>
              </ul>

              <h5>Homonymy - Same Sound, Unrelated Meanings</h5>
              <ul>
                <li><strong>Definition:</strong> Words that sound the same but have UNRELATED meanings</li>
                <li><strong>Example: "bank"</strong>
                  <ul>
                    <li>Financial institution</li>
                    <li>Side of a river</li>
                  </ul>
                </li>
                <li><strong>Example: "bat"</strong>
                  <ul>
                    <li>Flying mammal</li>
                    <li>Sports equipment</li>
                  </ul>
                </li>
                <li><strong>Meanings are NOT connected</strong> - just coincidence!</li>
              </ul>

              <h4>Sense vs Reference</h4>
              
              <h5>Sense - The Concept</h5>
              <ul>
                <li><strong>What it is:</strong> The mental concept or meaning</li>
                <li><strong>Example:</strong> "dog" = four-legged domestic canine</li>
                <li><strong>Abstract and general</strong></li>
              </ul>

              <h5>Reference - The Real Thing</h5>
              <ul>
                <li><strong>What it is:</strong> The actual object in the world</li>
                <li><strong>Example:</strong> "my dog Buddy" = specific dog</li>
                <li><strong>Concrete and specific</strong></li>
              </ul>

              <div className="example-box">
                <h5>Sense vs Reference Example</h5>
                <p>Consider: "The President of the United States"</p>
                <ul>
                  <li><strong>Sense:</strong> The leader of the US government (concept)</li>
                  <li><strong>Reference:</strong> Changes over time (different people)</li>
                  <li>Same sense, different reference in 2020 vs 2024!</li>
                </ul>
              </div>

              <h4>Semantic Features</h4>
              <p>Words can be broken down into smaller meaning components:</p>
              
              <ul>
                <li><strong>"man":</strong> [+human] [+adult] [+male]</li>
                <li><strong>"woman":</strong> [+human] [+adult] [-male]</li>
                <li><strong>"boy":</strong> [+human] [-adult] [+male]</li>
                <li><strong>"dog":</strong> [-human] [+animate] [+four-legged]</li>
              </ul>

              <p>This helps explain why some combinations make sense and others don't:</p>
              <ul>
                <li>"The man is pregnant" (odd - men don't have [+can be pregnant])</li>
                <li>"The rock is sleeping" (odd - rocks aren't [+animate])</li>
              </ul>

              <h4>Thematic Roles - Who Does What</h4>
              <p>In a sentence, nouns play different roles:</p>
              
              <ul>
                <li><strong>Agent:</strong> The doer ("John kicked the ball")</li>
                <li><strong>Patient/Theme:</strong> What's affected ("John kicked the ball")</li>
                <li><strong>Experiencer:</strong> Who experiences ("Mary heard the noise")</li>
                <li><strong>Instrument:</strong> Tool used ("She cut it with a knife")</li>
                <li><strong>Location:</strong> Where it happens ("They met in Paris")</li>
                <li><strong>Goal:</strong> Destination ("He went to school")</li>
              </ul>

              <h4>Entailment and Presupposition</h4>
              
              <h5>Entailment - Logical Consequence</h5>
              <ul>
                <li><strong>Definition:</strong> If A is true, B must be true</li>
                <li><strong>Example:</strong> "John killed the spider" entails "The spider died"</li>
                <li><strong>Can't be:</strong> "John killed the spider, but it didn't die"</li>
              </ul>

              <h5>Presupposition - Background Assumption</h5>
              <ul>
                <li><strong>Definition:</strong> What must be true for the sentence to make sense</li>
                <li><strong>Example:</strong> "John stopped smoking"</li>
                <li><strong>Presupposes:</strong> John used to smoke</li>
                <li><strong>Stays true even in negative:</strong> "John didn't stop smoking" still presupposes he smoked</li>
              </ul>
            </section>

            <Quiz title="Module 2.2 Quiz" questions={module2Quiz} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://plato.stanford.edu/entries/semantics/" target="_blank" rel="noopener noreferrer">Stanford Encyclopedia - Semantics</a></li>
                <li><a href="https://www.linguisticsociety.org/resource/semantics" target="_blank" rel="noopener noreferrer">Linguistic Society - Semantics</a></li>
                <li><a href="https://www.thoughtco.com/semantics-linguistics-1692080" target="_blank" rel="noopener noreferrer">Introduction to Semantics</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Syntax</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Language Typology →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Language Typology</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Language Typology?</h3>
              <p>Imagine you're a language detective trying to group the world's 7,000+ languages into categories. That's language typology! It's the study of how languages are similar and different in their structure.</p>
              
              <p><strong>Why it matters:</strong> By comparing languages, we discover universal patterns in human language and understand what makes each language unique.</p>
              
              
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2_nsXrTr7bA?si=xrL0uUqLktyPz_v-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
             

              <h4>Word Order Typology - How Languages Arrange Words</h4>
              <p>Different languages put Subject (S), Verb (V), and Object (O) in different orders:</p>
              
              <h5>1. SVO - Subject-Verb-Object (42% of languages)</h5>
              <ul>
                <li><strong>Pattern:</strong> Who + Does + What</li>
                <li><strong>Example (English):</strong> "I eat apples"</li>
                <li><strong>Languages:</strong> English, French, Spanish, Mandarin, Russian</li>
                <li><strong>Most common</strong> in European languages</li>
              </ul>

              <h5>2. SOV - Subject-Object-Verb (45% of languages)</h5>
              <ul>
                <li><strong>Pattern:</strong> Who + What + Does</li>
                <li><strong>Example (Japanese):</strong> "I apples eat" (Watashi wa ringo wo taberu)</li>
                <li><strong>Languages:</strong> Japanese, Korean, Turkish, Hindi, Persian</li>
                <li><strong>Actually most common</strong> worldwide!</li>
              </ul>

              <h5>3. VSO - Verb-Subject-Object (9% of languages)</h5>
              <ul>
                <li><strong>Pattern:</strong> Does + Who + What</li>
                <li><strong>Example (Irish):</strong> "Eat I apples"</li>
                <li><strong>Languages:</strong> Irish, Welsh, Arabic, Filipino</li>
                <li><strong>Less common</strong> but still significant</li>
              </ul>

              <h5>4. Other Orders (Very Rare)</h5>
              <ul>
                <li><strong>VOS:</strong> Verb-Object-Subject (Malagasy, Fijian)</li>
                <li><strong>OVS:</strong> Object-Verb-Subject (some Amazonian languages)</li>
                <li><strong>OSV:</strong> Object-Subject-Verb (extremely rare)</li>
              </ul>

              <div className="example-box">
                <h5>Same Sentence, Different Orders</h5>
                <p>"The cat chased the mouse" in different word orders:</p>
                <ul>
                  <li><strong>English (SVO):</strong> The cat chased the mouse</li>
                  <li><strong>Japanese (SOV):</strong> The cat the mouse chased</li>
                  <li><strong>Arabic (VSO):</strong> Chased the cat the mouse</li>
                </ul>
                <p>All mean the same thing, just different arrangements!</p>
              </div>

              <h4>Morphological Typology - How Languages Build Words</h4>
              <p>Remember morphology from Unit 1? Languages differ in how they use morphemes:</p>
              
              <h5>1. Isolating (Analytic) Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> One morpheme = one word</li>
                <li><strong>No inflections:</strong> Words don't change form</li>
                <li><strong>Example (Mandarin):</strong> "wǒ kàn shū" (I see book) - each word is one morpheme</li>
                <li><strong>Languages:</strong> Mandarin, Vietnamese, Thai</li>
                <li><strong>Grammar shown by:</strong> Word order and separate words</li>
              </ul>

              <h5>2. Agglutinating Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Words built by sticking morphemes together</li>
                <li><strong>Clear boundaries:</strong> Easy to see where each morpheme starts/ends</li>
                <li><strong>Example (Turkish):</strong> "evlerimizden" = ev-ler-imiz-den (house-plural-our-from)</li>
                <li><strong>Languages:</strong> Turkish, Finnish, Japanese, Swahili</li>
                <li><strong>Like LEGO:</strong> Each piece has one clear function</li>
              </ul>

              <h5>3. Fusional (Inflectional) Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Morphemes fused together</li>
                <li><strong>One affix = multiple meanings:</strong> Hard to separate</li>
                <li><strong>Example (Spanish):</strong> "hablo" = habl-o (speak-1st.person.singular.present)</li>
                <li><strong>Languages:</strong> Spanish, Russian, Latin, German</li>
                <li><strong>Complex:</strong> One ending shows person, number, tense all at once</li>
              </ul>

              <h5>4. Polysynthetic Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Extremely complex words</li>
                <li><strong>One word = whole sentence:</strong> Incorporates many elements</li>
                <li><strong>Example (Inuktitut):</strong> "tusaatsiarunnanngittualuujunga" (I can't hear very well)</li>
                <li><strong>Languages:</strong> Inuktitut, Mohawk, Yup'ik</li>
                <li><strong>Amazing:</strong> What takes us a sentence, they say in one word!</li>
              </ul>

              <div className="example-box">
                <h5>Comparing Morphological Types</h5>
                <p>"I am going to the houses" in different language types:</p>
                <ul>
                  <li><strong>Isolating (Mandarin):</strong> wǒ qù fángzi (I go house) - 3 separate words</li>
                  <li><strong>Agglutinating (Turkish):</strong> evlere gidiyorum (house-plural-to go-I-present)</li>
                  <li><strong>Fusional (Spanish):</strong> voy a las casas (go-1sg to the-fem-pl house-pl)</li>
                  <li><strong>Polysynthetic:</strong> Might be one very long word!</li>
                </ul>
              </div>

              <h4>Alignment Systems - Marking Subjects and Objects</h4>
              <p>Languages mark who does what in different ways:</p>
              
              <h5>Nominative-Accusative System</h5>
              <ul>
                <li><strong>How it works:</strong> Subject marked same way, object marked differently</li>
                <li><strong>Example (English):</strong>
                  <ul>
                    <li>"He (nominative) sees her (accusative)"</li>
                    <li>"He (nominative) runs"</li>
                  </ul>
                </li>
                <li><strong>Most common:</strong> English, Spanish, Japanese</li>
              </ul>

              <h5>Ergative-Absolutive System</h5>
              <ul>
                <li><strong>How it works:</strong> Object and intransitive subject marked same</li>
                <li><strong>Different from English!</strong> Groups subjects differently</li>
                <li><strong>Languages:</strong> Basque, Georgian, many Australian languages</li>
              </ul>

              <h4>Greenberg's Universals - Patterns Across Languages</h4>
              <p>Linguist Joseph Greenberg found patterns that hold across many languages:</p>
              
              <ul>
                <li><strong>Universal 1:</strong> All languages have vowels and consonants</li>
                <li><strong>Universal 2:</strong> If a language has VSO order, it usually has prepositions (not postpositions)</li>
                <li><strong>Universal 17:</strong> If a language has dominant SOV order, it tends to have postpositions</li>
                <li><strong>Universal 45:</strong> If there are gender distinctions in pronouns, male vs female is always one of them</li>
              </ul>

              <p><strong>Why this matters:</strong> Shows that despite diversity, human languages follow certain patterns!</p>

              <h4>Head-Directionality Parameter</h4>
              <p>Where does the main word (head) go in a phrase?</p>
              
              <ul>
                <li><strong>Head-initial:</strong> Head comes first
                  <ul>
                    <li>English: "eat apples" (verb before object)</li>
                    <li>English: "in the house" (preposition before noun)</li>
                  </ul>
                </li>
                <li><strong>Head-final:</strong> Head comes last
                  <ul>
                    <li>Japanese: "apples eat" (object before verb)</li>
                    <li>Japanese: "house in" (noun before postposition)</li>
                  </ul>
                </li>
              </ul>

              <p><strong>Interesting:</strong> Languages tend to be consistent - if verb comes after object, prepositions often come after nouns too!</p>

              <h4>Why Languages Differ</h4>
              <ul>
                <li><strong>Historical change:</strong> Languages evolve over time</li>
                <li><strong>Language contact:</strong> Borrowing from neighboring languages</li>
                <li><strong>Geographic isolation:</strong> Separated groups develop differently</li>
                <li><strong>Cognitive constraints:</strong> But all fit human brain capabilities</li>
              </ul>

              <div className="example-box">
                <h5>Fun Fact: Language Families</h5>
                <p>Languages that share a common ancestor form families:</p>
                <ul>
                  <li><strong>Indo-European:</strong> English, Spanish, Hindi, Russian (3 billion speakers!)</li>
                  <li><strong>Sino-Tibetan:</strong> Mandarin, Cantonese, Tibetan</li>
                  <li><strong>Niger-Congo:</strong> Swahili, Yoruba, Zulu</li>
                  <li><strong>Austronesian:</strong> Indonesian, Tagalog, Hawaiian</li>
                </ul>
                <p>Languages in the same family often share typological features!</p>
              </div>
            </section>

            <Quiz title="Module 2.3 Quiz" questions={module3Quiz} />
            
            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://wals.info/" target="_blank" rel="noopener noreferrer">World Atlas of Language Structures</a></li>
                <li><a href="https://www.ethnologue.com/" target="_blank" rel="noopener noreferrer">Ethnologue - Languages of the World</a></li>
                <li><a href="https://www.linguisticsociety.org/resource/language-typology" target="_blank" rel="noopener noreferrer">Linguistic Society - Typology</a></li>
              </ul>
            </div>

            <Quiz title="Unit 2 Comprehensive Quiz" questions={unitQuiz} passingScore={75} />

            <div className="reference-section">
              <h3>Unit 2 Complete - Additional Resources</h3>
              <ul>
                <li><a href="https://www.cambridge.org/core/books/how-languages-work/" target="_blank" rel="noopener noreferrer">How Languages Work - Carol Genetti</a></li>
                <li><a href="https://ocw.mit.edu/courses/linguistics-and-philosophy/" target="_blank" rel="noopener noreferrer">MIT OpenCourseWare - Linguistics</a></li>
                <li><a href="https://www.youtube.com/c/LingSpace" target="_blank" rel="noopener noreferrer">The Ling Space - YouTube Channel</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Semantics</button>
            </div>
          </div>
        );

      default:
        return <div>Module not found</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit2;
