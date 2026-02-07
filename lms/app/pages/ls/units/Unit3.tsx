'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const module1Quiz = [
    { question: "What is the critical period hypothesis in language acquisition?", options: ["Language can only be acquired before puberty", "Language acquisition happens most efficiently during a specific developmental window", "Language can only be acquired in early childhood", "Language acquisition is not time-dependent"], correctAnswer: 1 },
    { question: "According to Chomsky's theory, what is the Language Acquisition Device (LAD)?", options: ["A computer program for language learning", "An innate biological mechanism for language acquisition", "A teaching methodology", "A diagnostic tool for language disorders"], correctAnswer: 1 },
    { question: "Which stage of first language acquisition typically occurs between 12-18 months?", options: ["Babbling stage", "Two-word stage", "Telegraphic speech", "One-word stage (holophrases)"], correctAnswer: 3 },
    { question: "What is meant by Universal Grammar according to generative linguists?", options: ["A single global language", "Innate principles and parameters that constrain language structure", "A teaching methodology for multilingual education", "A computer translation system"], correctAnswer: 1 },
    { question: "What is 'interlanguage' in second language acquisition?", options: ["A language that serves as a lingua franca", "Learner's developing linguistic system between L1 and L2", "A formal international language", "A constructed language for international communication"], correctAnswer: 1 }
  ];

  const module2Quiz = [
    { question: "What is 'borrowing' in language contact situations?", options: ["Lending grammatical structures", "Adopting words or structures from another language", "Sharing language learning resources", "Teaching language to others"], correctAnswer: 1 },
    { question: "What is a 'creole' language?", options: ["A dead language", "A pidgin that has become the native language of a community", "A constructed language", "A regional dialect"], correctAnswer: 1 },
    { question: "What is 'grammaticalization'?", options: ["The process of making language more grammatically complex", "Lexical items developing into grammatical markers", "The process of teaching grammar", "The systematic study of grammar"], correctAnswer: 1 },
    { question: "What is 'substrate influence' in language change?", options: ["Influence from a previously spoken language in a region", "Influence from a dominant language on a minority language", "Influence from a second language on first language", "Influence from written language on spoken language"], correctAnswer: 0 },
    { question: "Which of the following is NOT a type of language change?", options: ["Semantic change", "Syntactic change", "Pragmatic change", "All of the above are types of language change"], correctAnswer: 3 }
  ];

  const module3Quiz = [
    { question: "What is the 'comparative method' in historical linguistics?", options: ["Comparing different language teaching methods", "Systematic procedure for reconstructing proto-languages", "Comparing grammar across unrelated languages", "Method for comparing translation quality"], correctAnswer: 1 },
    { question: "What is 'sound change' in historical linguistics?", options: ["Change in volume of speech", "Regular alteration of phonemes over time", "Change in accent patterns", "Variation in speech sounds"], correctAnswer: 1 },
    { question: "Which language family does English belong to?", options: ["Sino-Tibetan", "Indo-European", "Afro-Asiatic", "Niger-Congo"], correctAnswer: 1 },
    { question: "What is the 'wave model' in historical linguistics?", options: ["A model of sound waves in speech production", "Model describing how innovations spread geographically", "A model for understanding language families", "A computational model of language processing"], correctAnswer: 1 },
    { question: "What is 'metathesis' in sound change?", options: ["Sound weakening", "Sound strengthening", "Sound reordering", "Sound insertion"], correctAnswer: 2 }
  ];

  const unitQuiz = [
    { question: "What is the difference between language acquisition and language learning?", options: ["No difference, they are synonymous", "Acquisition is subconscious, learning is conscious", "Acquisition applies to L1, learning to L2", "Both b and c"], correctAnswer: 3 },
    { question: "What is the typical sequence of second language acquisition stages?", options: ["Silent period → Early production → Speech emergence → Intermediate fluency → Advanced fluency", "Intermediate fluency → Early production → Silent period → Speech emergence", "Speech emergence → Silent period → Intermediate fluency → Early production", "Silent period → Intermediate fluency → Early production → Speech emergence"], correctAnswer: 0 },
    { question: "Which theoretical approach emphasizes Universal Grammar?", options: ["Empiricist theories", "Nativist theories", "Cognitive approaches", "Usage-based approaches"], correctAnswer: 1 },
    { question: "What happens during the 'babbling' stage of L1 acquisition?", options: ["Children produce their first words", "Children combine two words", "Children produce repetitive syllables like 'bababa'", "Children use complete sentences"], correctAnswer: 2 },
    { question: "What is 'code-switching' in language contact?", options: ["Changing language teaching methods", "Alternating between languages in conversation", "Translating between languages", "Learning a new language"], correctAnswer: 1 },
    { question: "Which language family includes Hindi and Persian?", options: ["Germanic", "Romance", "Indo-Iranian", "Slavic"], correctAnswer: 2 },
    { question: "What is 'fossilization' in second language acquisition?", options: ["Learning ancient languages", "Permanent retention of incorrect linguistic features", "Memorizing vocabulary", "Studying historical linguistics"], correctAnswer: 1 },
    { question: "What is 'assimilation' in sound change?", options: ["Sounds becoming similar to nearby sounds", "Sounds becoming different", "Sound reordering", "Sound deletion"], correctAnswer: 0 },
    { question: "Which is the largest language family by number of speakers?", options: ["Sino-Tibetan", "Niger-Congo", "Indo-European", "Austronesian"], correctAnswer: 2 },
    { question: "What is a 'proto-language'?", options: ["The first language ever spoken", "A reconstructed ancestral language", "A primitive language", "A language without grammar"], correctAnswer: 1 }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.1</div>
              <div className="lesson-title-main">
                <h1>First and Second Language Acquisition</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>How Do We Learn Language?</h3>
              <p>Think about it: babies go from crying to speaking full sentences in just a few years, without formal lessons! How does this magic happen? And why is learning a second language as an adult so much harder?</p>
              
              <p>Language acquisition is one of the most fascinating abilities humans have. Let's explore how we acquire our first language (L1) and additional languages (L2).</p>
              
             
                <iframe 
                  src="https://www.youtube.com/embed/Ccsf0yX7ECg?si=mOkqudif2VtWr5Q9" 
                  title="Language Acquisition"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
             

              <h4>First Language Acquisition (L1) - Your Mother Tongue</h4>
              <p>First language acquisition is the natural, unconscious process by which children learn their native language. It's automatic, universal, and happens without formal instruction!</p>
              
              <h5>The Amazing Journey: Stages of L1 Acquisition</h5>
              
              <div className="example-box">
                <h5>Birth to 6 Months: Crying and Cooing</h5>
                <ul>
                  <li><strong>What happens:</strong> Babies cry (their first communication!) and start making cooing sounds like "ooooh" and "aaaah"</li>
                  <li><strong>Why it matters:</strong> They're learning to control their vocal cords</li>
                  <li><strong>Fun fact:</strong> Babies can distinguish sounds from ALL languages at this stage!</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>6-12 Months: Babbling</h5>
                <ul>
                  <li><strong>What happens:</strong> "bababa", "dadada", "mamama" - repetitive syllables</li>
                  <li><strong>Why it matters:</strong> Practicing the sounds of their language</li>
                  <li><strong>Universal:</strong> Babies all over the world babble, even deaf babies (with their hands!)</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>12-18 Months: One-Word Stage (Holophrases)</h5>
                <ul>
                  <li><strong>What happens:</strong> First real words! "Mama", "Dada", "milk", "no"</li>
                  <li><strong>One word = whole sentence:</strong> "Milk!" might mean "I want milk" or "That's milk" or "Give me milk"</li>
                  <li><strong>Vocabulary:</strong> About 50 words by 18 months</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>18-24 Months: Two-Word Stage</h5>
                <ul>
                  <li><strong>What happens:</strong> Combining words! "Mommy go", "want cookie", "big dog"</li>
                  <li><strong>Grammar emerges:</strong> Word order matters now</li>
                  <li><strong>Vocabulary explosion:</strong> Learning 10+ new words per day!</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>24-30 Months: Telegraphic Speech</h5>
                <ul>
                  <li><strong>What happens:</strong> "Daddy go work", "Me want cookie now"</li>
                  <li><strong>Like a telegram:</strong> Only essential words, no "the", "is", "a"</li>
                  <li><strong>Meaning is clear:</strong> Despite missing words</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>30+ Months: Complex Grammar</h5>
                <ul>
                  <li><strong>What happens:</strong> Full sentences with proper grammar</li>
                  <li><strong>Cute errors:</strong> "I goed to park" (overgeneralization of rules!)</li>
                  <li><strong>By age 5:</strong> Most children have mastered basic grammar of their language</li>
                </ul>
              </div>

              <h4>The Critical Period Hypothesis - Is There a Deadline?</h4>
              <p>Imagine trying to learn a language after a certain age becomes much harder. That's the critical period hypothesis!</p>
              
              <ul>
                <li><strong>The idea:</strong> There's an optimal window (birth to puberty) for language acquisition</li>
                <li><strong>Evidence:</strong> Children who learn languages before puberty achieve native-like fluency more easily</li>
                <li><strong>After puberty:</strong> Still possible to learn, but harder to achieve native pronunciation and intuitive grammar</li>
                <li><strong>Brain plasticity:</strong> Young brains are more flexible for language learning</li>
              </ul>

              <div className="example-box">
                <h5>Real-World Example: Genie</h5>
                <p>A tragic case study: Genie was isolated from language until age 13. Despite intensive training, she never fully acquired language, supporting the critical period hypothesis.</p>
              </div>

              <h4>Second Language Acquisition (L2) - Learning Another Language</h4>
              <p>Learning a second language is different from acquiring your first. It's usually more conscious, requires effort, and is influenced by your L1.</p>
              
              <h5>L2 Acquisition Stages</h5>
              
              <ul>
                <li><strong>1. Silent Period:</strong> Listening and absorbing, not speaking much (like babies!)</li>
                <li><strong>2. Early Production:</strong> Simple words and phrases, lots of errors</li>
                <li><strong>3. Speech Emergence:</strong> Longer sentences, still making mistakes</li>
                <li><strong>4. Intermediate Fluency:</strong> More complex sentences, fewer errors</li>
                <li><strong>5. Advanced Fluency:</strong> Near-native proficiency (takes 5-7 years!)</li>
              </ul>

              <h4>Key Concepts in L2 Acquisition</h4>
              
              <h5>Interlanguage - Your Personal In-Between Language</h5>
              <ul>
                <li><strong>What it is:</strong> The developing language system between your L1 and target L2</li>
                <li><strong>Example:</strong> Spanish speaker learning English might say "I have 20 years" (from Spanish "Tengo 20 años")</li>
                <li><strong>It evolves:</strong> Gets closer to L2 over time</li>
                <li><strong>Unique to you:</strong> Everyone's interlanguage is different</li>
              </ul>

              <h5>Transfer - Your L1 Influences Your L2</h5>
              <ul>
                <li><strong>Positive transfer:</strong> When L1 helps (Spanish "hospital" → English "hospital")</li>
                <li><strong>Negative transfer (interference):</strong> When L1 causes errors (French speakers saying "I am 20 years" instead of "I am 20 years old")</li>
              </ul>

              <h5>Fossilization - When Errors Stick</h5>
              <ul>
                <li><strong>What it is:</strong> Permanent retention of incorrect features</li>
                <li><strong>Example:</strong> Always saying "He go" instead of "He goes" even after years</li>
                <li><strong>Why it happens:</strong> Lack of correction, communication success despite errors</li>
              </ul>

              <h4>Theories of Language Acquisition</h4>
              
              <h5>1. Nativist Theory (Chomsky) - We're Born for Language</h5>
              <ul>
                <li><strong>Main idea:</strong> Humans have an innate Language Acquisition Device (LAD)</li>
                <li><strong>Universal Grammar:</strong> All languages share deep structural principles</li>
                <li><strong>Evidence:</strong> Children acquire complex grammar without explicit teaching</li>
                <li><strong>Analogy:</strong> Like birds are born knowing how to build nests, humans are born knowing language structure</li>
              </ul>

              <h5>2. Empiricist Theory - Learning from Experience</h5>
              <ul>
                <li><strong>Main idea:</strong> Language is learned through imitation and reinforcement</li>
                <li><strong>Input matters:</strong> Quality and quantity of language exposure</li>
                <li><strong>Child-directed speech:</strong> "Baby talk" helps learning</li>
                <li><strong>Problem:</strong> Doesn't explain how children produce novel sentences they've never heard</li>
              </ul>

              <h5>3. Cognitive Approach - General Learning Mechanisms</h5>
              <ul>
                <li><strong>Main idea:</strong> Language uses the same learning mechanisms as other skills</li>
                <li><strong>Pattern recognition:</strong> Children detect statistical patterns in input</li>
                <li><strong>Memory and attention:</strong> General cognitive abilities support language learning</li>
              </ul>

              <h4>Acquisition vs. Learning - Krashen's Distinction</h4>
              
              <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
                <thead>
                  <tr style={{backgroundColor: '#7CB342', color: 'white'}}>
                    <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Acquisition</th>
                    <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Learning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Subconscious process</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Conscious process</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Natural, like L1</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Formal instruction</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Focus on meaning</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Focus on form/rules</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Implicit knowledge</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Explicit knowledge</td>
                  </tr>
                </tbody>
              </table>

              <div className="example-box">
                <h5>Try It Yourself!</h5>
                <p>Think about your own language learning experience:</p>
                <ul>
                  <li>Can you remember learning your first language? (Probably not - it was acquisition!)</li>
                  <li>If you're learning English as L2, what errors do you make due to L1 transfer?</li>
                  <li>Do you learn better through conversation (acquisition) or textbooks (learning)?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 3.1 Quiz" questions={module1Quiz} subject="LS" unitId={3} moduleId={1} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/resource/faq-how-do-we-learn-language" target="_blank" rel="noopener noreferrer">Linguistic Society - How We Learn Language</a></li>
                <li><a href="https://www.simplypsychology.org/language-acquisition.html" target="_blank" rel="noopener noreferrer">Language Acquisition Theories</a></li>
                <li><a href="https://www.teachingenglish.org.uk/article/second-language-acquisition" target="_blank" rel="noopener noreferrer">Second Language Acquisition</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={onBack} className="prev-module-btn">← Back to Overview</button>
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Language Change →</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.2</div>
              <div className="lesson-title-main">
                <h1>Language Change and Language Contact</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Languages Are Always Changing!</h3>
              <p>Did you know that Shakespeare's English from 400 years ago sounds almost like a foreign language to us today? Or that "nice" used to mean "foolish"? Languages are living, breathing entities that constantly evolve!</p>
              
              <p>Let's explore how and why languages change, and what happens when different languages come into contact.</p>
              
             
                <iframe 
                  src="https://www.youtube.com/embed/UmvOgW6iV2s?si=NCBq2_ns8vXKZteX" 
                  title="Language Change"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
             

              <h4>Types of Language Change</h4>
              
              <h5>1. Phonological Change - Sounds Shift</h5>
              <p>The way we pronounce words changes over time.</p>
              
              <div className="example-box">
                <h5>The Great Vowel Shift (1400-1700)</h5>
                <ul>
                  <li><strong>Before:</strong> "bite" was pronounced like "beet"</li>
                  <li><strong>Before:</strong> "meet" was pronounced like "mate"</li>
                  <li><strong>Result:</strong> English vowels shifted dramatically, which is why English spelling seems weird today!</li>
                </ul>
              </div>

              <ul>
                <li><strong>Modern example:</strong> Many Americans now pronounce "caught" and "cot" the same way (they used to be different!)</li>
                <li><strong>Another example:</strong> "Often" - the 't' was silent, now many people pronounce it</li>
              </ul>

              <h5>2. Morphological Change - Word Structure Evolves</h5>
              <ul>
                <li><strong>Old English:</strong> Had complex case endings like Latin</li>
                <li><strong>Modern English:</strong> Lost most case endings, relies on word order</li>
                <li><strong>Example:</strong> Old English "stānas" (stones) → Modern English "stones" (simpler!)</li>
              </ul>

              <h5>3. Syntactic Change - Sentence Structure Shifts</h5>
              <div className="example-box">
                <h5>Word Order Changes</h5>
                <ul>
                  <li><strong>Old English:</strong> "Him the book gave I" (SOV order possible)</li>
                  <li><strong>Modern English:</strong> "I gave him the book" (strict SVO order)</li>
                </ul>
              </div>

              <h5>4. Semantic Change - Meanings Evolve</h5>
              <p>This is fascinating! Words change meaning over time:</p>
              
              <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
                <thead>
                  <tr style={{backgroundColor: '#7CB342', color: 'white'}}>
                    <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Word</th>
                    <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Old Meaning</th>
                    <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Modern Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Nice</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Foolish, silly</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Pleasant, agreeable</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Awful</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Full of awe, inspiring</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Very bad, terrible</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Gay</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Happy, cheerful</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Homosexual</td>
                  </tr>
                  <tr>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Meat</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Any food</td>
                    <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Animal flesh</td>
                  </tr>
                </tbody>
              </table>

              <h5>5. Lexical Change - Vocabulary Updates</h5>
              <ul>
                <li><strong>New words:</strong> "selfie", "google", "tweet", "emoji" (didn't exist 20 years ago!)</li>
                <li><strong>Lost words:</strong> "thou", "thee", "wherefore" (rarely used now)</li>
                <li><strong>Borrowed words:</strong> "pizza" (Italian), "karaoke" (Japanese), "safari" (Swahili)</li>
              </ul>

              <h4>Why Do Languages Change?</h4>
              
              <h5>Internal Causes - From Within the Language</h5>
              <ul>
                <li><strong>Ease of articulation:</strong> Sounds become easier to pronounce ("going to" → "gonna")</li>
                <li><strong>Analogy:</strong> Irregular forms become regular ("dived" replacing "dove")</li>
                <li><strong>Reanalysis:</strong> Misunderstanding structure ("a napron" → "an apron")</li>
              </ul>

              <h5>External Causes - From Outside Influences</h5>
              <ul>
                <li><strong>Language contact:</strong> Borrowing from other languages</li>
                <li><strong>Social factors:</strong> Prestige, fashion, identity</li>
                <li><strong>Technology:</strong> New inventions need new words</li>
                <li><strong>Cultural change:</strong> New concepts need new expressions</li>
              </ul>

              <h4>Language Contact - When Languages Meet</h4>
              <p>What happens when speakers of different languages interact? Magic! Languages influence each other in fascinating ways.</p>
              
              <h5>Types of Language Contact Situations</h5>
              
              <div className="example-box">
                <h5>1. Borrowing - Taking Words from Other Languages</h5>
                <p>English is a champion borrower!</p>
                <ul>
                  <li><strong>From French:</strong> "restaurant", "ballet", "entrepreneur"</li>
                  <li><strong>From Spanish:</strong> "patio", "plaza", "tornado"</li>
                  <li><strong>From Hindi:</strong> "jungle", "shampoo", "bungalow"</li>
                  <li><strong>From Arabic:</strong> "algebra", "coffee", "sugar"</li>
                </ul>
                <p>Over 80% of English vocabulary comes from other languages!</p>
              </div>

              <div className="example-box">
                <h5>2. Code-Switching - Alternating Between Languages</h5>
                <p>Bilingual speakers often switch between languages mid-conversation:</p>
                <ul>
                  <li><strong>Example (Spanish-English):</strong> "Voy al store para comprar milk" (I'm going to the store to buy milk)</li>
                  <li><strong>Not random:</strong> Follows grammatical rules</li>
                  <li><strong>Shows competence:</strong> Not a sign of confusion, but of skill!</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>3. Pidgins - Simplified Contact Languages</h5>
                <ul>
                  <li><strong>What they are:</strong> Simplified languages for basic communication</li>
                  <li><strong>No native speakers:</strong> Used only for trade, work</li>
                  <li><strong>Simple grammar:</strong> Reduced vocabulary, basic structure</li>
                  <li><strong>Example:</strong> Tok Pisin in Papua New Guinea</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>4. Creoles - Pidgins That Grow Up</h5>
                <ul>
                  <li><strong>What they are:</strong> Pidgins that become native languages</li>
                  <li><strong>Full languages:</strong> Complex grammar, rich vocabulary</li>
                  <li><strong>Examples:</strong> Haitian Creole, Jamaican Patois, Gullah</li>
                  <li><strong>How it happens:</strong> Children grow up speaking the pidgin, expanding it into a full language</li>
                </ul>
              </div>

              <h5>5. Language Shift - Replacing One Language</h5>
              <ul>
                <li><strong>What it is:</strong> Community gradually stops using one language, adopts another</li>
                <li><strong>Example:</strong> Many immigrant families: Grandparents speak L1, parents bilingual, children speak only L2</li>
                <li><strong>Causes:</strong> Prestige, economic opportunity, social pressure</li>
              </ul>

              <h4>Substrate and Superstrate Influence</h4>
              
              <h5>Substrate Influence - The Language Below</h5>
              <ul>
                <li><strong>Definition:</strong> Influence from the language originally spoken in a region</li>
                <li><strong>Example:</strong> Celtic languages influenced English pronunciation in Britain</li>
                <li><strong>Example:</strong> Native American languages gave English words like "moose", "skunk", "tomato"</li>
              </ul>

              <h5>Superstrate Influence - The Language Above</h5>
              <ul>
                <li><strong>Definition:</strong> Influence from a dominant or prestige language</li>
                <li><strong>Example:</strong> Norman French influenced English after 1066 conquest</li>
                <li><strong>Result:</strong> English has French words for "fancy" things (beef, pork, mutton) but Germanic words for animals (cow, pig, sheep)</li>
              </ul>

              <h4>Grammaticalization - Words Becoming Grammar</h4>
              <p>Sometimes regular words gradually turn into grammatical markers. It's like words getting a promotion!</p>
              
              <div className="example-box">
                <h5>Examples of Grammaticalization</h5>
                <ul>
                  <li><strong>"going to" → "gonna":</strong> Future marker
                    <ul>
                      <li>Stage 1: "I am going to the store" (movement verb)</li>
                      <li>Stage 2: "I am going to buy milk" (future intention)</li>
                      <li>Stage 3: "I'm gonna buy milk" (pure future marker)</li>
                    </ul>
                  </li>
                  <li><strong>"will":</strong> Used to mean "want" ("What will you?"), now a future marker</li>
                  <li><strong>"have":</strong> Possession verb became perfect tense marker ("I have eaten")</li>
                </ul>
              </div>

              <h4>Sound Change Processes</h4>
              
              <ul>
                <li><strong>Assimilation:</strong> Sounds become more similar ("input" → "imput" in fast speech)</li>
                <li><strong>Dissimilation:</strong> Sounds become different (Latin "peregrinus" → English "pilgrim")</li>
                <li><strong>Lenition:</strong> Sounds weaken (Spanish "vida" from Latin "vita" - t → d)</li>
                <li><strong>Fortition:</strong> Sounds strengthen (opposite of lenition)</li>
                <li><strong>Metathesis:</strong> Sounds swap positions ("ask" was "aks" in Old English)</li>
                <li><strong>Epenthesis:</strong> Sound insertion ("athlete" → "ath-uh-lete")</li>
              </ul>

              <div className="example-box">
                <h5>Try It Yourself!</h5>
                <p>Observe language change in action:</p>
                <ul>
                  <li>What new words have you heard recently that didn't exist 5 years ago?</li>
                  <li>Do you pronounce words differently from your parents or grandparents?</li>
                  <li>What words from other languages do you use in daily conversation?</li>
                  <li>If you're bilingual, do you code-switch? When and why?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 3.2 Quiz" questions={module2Quiz} subject="LS" unitId={3} moduleId={2} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/resource/language-change" target="_blank" rel="noopener noreferrer">Linguistic Society - Language Change</a></li>
                <li><a href="https://www.britannica.com/topic/language-change" target="_blank" rel="noopener noreferrer">Encyclopedia Britannica - Language Change</a></li>
                <li><a href="https://www.thoughtco.com/language-contact-1691097" target="_blank" rel="noopener noreferrer">Language Contact Phenomena</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Language Acquisition</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Historical Linguistics →</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.3</div>
              <div className="lesson-title-main">
                <h1>Historical Linguistics</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Detective Work: Uncovering Language History</h3>
              <p>Imagine being a detective, but instead of solving crimes, you're solving the mystery of how languages are related and how they evolved over thousands of years. That's historical linguistics!</p>
              
              <p>Historical linguists are like archaeologists of language - they dig through old texts, compare languages, and reconstruct languages that haven't been spoken for millennia.</p>
              
         
                <iframe 
                  src="https://www.youtube.com/embed/YEaSxhcns7Y?si=teX8vXKZNCBq2_ns" 
                  title="Historical Linguistics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
             

              <h4>What is Historical Linguistics?</h4>
              <p>Historical linguistics studies how languages change over time and how languages are related to each other.</p>
              
              <h5>Main Goals</h5>
              <ul>
                <li><strong>Reconstruct proto-languages:</strong> Figure out what ancient "parent" languages looked like</li>
                <li><strong>Establish relationships:</strong> Determine which languages are related (like family trees!)</li>
                <li><strong>Understand change mechanisms:</strong> Discover why and how languages change</li>
                <li><strong>Document language families:</strong> Group related languages together</li>
                <li><strong>Preserve endangered languages:</strong> Record languages before they disappear</li>
              </ul>

              <h4>The Comparative Method - The Main Tool</h4>
              <p>This is the systematic procedure for reconstructing proto-languages and establishing genetic relationships. Think of it as linguistic DNA testing!</p>
              
              <h5>Steps of the Comparative Method</h5>
              
              <div className="example-box">
                <h5>Step 1: Collect Cognates</h5>
                <p>Cognates are words in different languages that come from the same ancestral word.</p>
                <ul>
                  <li><strong>English:</strong> father</li>
                  <li><strong>German:</strong> Vater</li>
                  <li><strong>Latin:</strong> pater</li>
                  <li><strong>Sanskrit:</strong> pitā</li>
                  <li><strong>Conclusion:</strong> These are cognates! They share a common ancestor.</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Step 2: Identify Sound Correspondences</h5>
                <p>Look for regular patterns in how sounds differ between languages.</p>
                <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
                  <thead>
                    <tr style={{backgroundColor: '#7CB342', color: 'white'}}>
                      <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>English</th>
                      <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>German</th>
                      <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Pattern</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>father</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Vater</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>f ↔ v</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>foot</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Fuß</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>f ↔ f</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>fish</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Fisch</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>f ↔ f</td>
                    </tr>
                  </tbody>
                </table>
                <p>Regular correspondences show genetic relationship!</p>
              </div>

              <div className="example-box">
                <h5>Step 3: Reconstruct the Proto-Form</h5>
                <p>Based on correspondences, reconstruct the original form in the parent language.</p>
                <ul>
                  <li><strong>English:</strong> father</li>
                  <li><strong>German:</strong> Vater</li>
                  <li><strong>Latin:</strong> pater</li>
                  <li><strong>Reconstructed Proto-Indo-European:</strong> *pətēr (the * means reconstructed)</li>
                </ul>
              </div>

              <h4>Language Families - The Family Tree of Languages</h4>
              <p>Just like you have a family tree, languages have family trees too! Languages that descended from a common ancestor form a language family.</p>
              
              <h5>Major Language Families of the World</h5>
              
              <div className="example-box">
                <h5>1. Indo-European Family (Largest by speakers - 3+ billion)</h5>
                <p>Covers most of Europe, Iran, and India</p>
                <ul>
                  <li><strong>Germanic Branch:</strong> English, German, Dutch, Swedish, Norwegian
                    <ul>
                      <li>West Germanic: English, German, Dutch</li>
                      <li>North Germanic: Swedish, Norwegian, Danish</li>
                    </ul>
                  </li>
                  <li><strong>Romance Branch:</strong> Spanish, French, Italian, Portuguese, Romanian
                    <ul>
                      <li>All descended from Latin!</li>
                    </ul>
                  </li>
                  <li><strong>Slavic Branch:</strong> Russian, Polish, Czech, Serbian, Bulgarian</li>
                  <li><strong>Indo-Iranian Branch:</strong> Hindi, Urdu, Persian, Bengali, Punjabi
                    <ul>
                      <li>Largest branch by speakers!</li>
                    </ul>
                  </li>
                  <li><strong>Celtic Branch:</strong> Irish, Welsh, Scottish Gaelic, Breton</li>
                  <li><strong>Greek Branch:</strong> Greek (ancient and modern)</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>2. Sino-Tibetan Family (1.3+ billion speakers)</h5>
                <ul>
                  <li><strong>Chinese Branch:</strong> Mandarin, Cantonese, Wu, Min
                    <ul>
                      <li>Mandarin alone: 900+ million speakers!</li>
                    </ul>
                  </li>
                  <li><strong>Tibeto-Burman Branch:</strong> Tibetan, Burmese</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>3. Niger-Congo Family (500+ million speakers)</h5>
                <ul>
                  <li><strong>Bantu languages:</strong> Swahili, Zulu, Xhosa, Shona</li>
                  <li><strong>Other branches:</strong> Yoruba, Igbo, Fulani</li>
                  <li><strong>Largest family:</strong> By number of languages (1,500+)!</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>4. Afro-Asiatic Family (300+ million speakers)</h5>
                <ul>
                  <li><strong>Semitic Branch:</strong> Arabic, Hebrew, Amharic</li>
                  <li><strong>Ancient languages:</strong> Ancient Egyptian, Akkadian</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>5. Austronesian Family (300+ million speakers)</h5>
                <ul>
                  <li><strong>Languages:</strong> Malay/Indonesian, Tagalog, Javanese, Hawaiian, Maori</li>
                  <li><strong>Spread:</strong> From Madagascar to Easter Island - huge geographic range!</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>6. Dravidian Family (220+ million speakers)</h5>
                <ul>
                  <li><strong>Languages:</strong> Tamil, Telugu, Kannada, Malayalam</li>
                  <li><strong>Location:</strong> Southern India and Sri Lanka</li>
                </ul>
              </div>

              <h4>Proto-Indo-European (PIE) - The Mother of Many Languages</h4>
              <p>Proto-Indo-European is the reconstructed ancestor of the Indo-European family. It was never written down, but linguists have reconstructed it!</p>
              
              <ul>
                <li><strong>When:</strong> Spoken around 4500-2500 BCE</li>
                <li><strong>Where:</strong> Probably the Pontic-Caspian steppe (modern Ukraine/Russia)</li>
                <li><strong>Speakers:</strong> Possibly nomadic pastoralists</li>
                <li><strong>Evidence:</strong> Reconstructed words for "horse", "wheel", "sheep" suggest their lifestyle</li>
              </ul>

              <div className="example-box">
                <h5>PIE Word Reconstruction Example</h5>
                <p>The word for "three" across Indo-European languages:</p>
                <ul>
                  <li><strong>English:</strong> three</li>
                  <li><strong>German:</strong> drei</li>
                  <li><strong>Latin:</strong> trēs</li>
                  <li><strong>Greek:</strong> treîs</li>
                  <li><strong>Sanskrit:</strong> trayáḥ</li>
                  <li><strong>Russian:</strong> tri</li>
                  <li><strong>Reconstructed PIE:</strong> *tréyes</li>
                </ul>
                <p>See the pattern? All related!</p>
              </div>

              <h4>Internal Reconstruction</h4>
              <p>Sometimes we can reconstruct earlier stages of a language by looking at patterns within that language alone.</p>
              
              <div className="example-box">
                <h5>Example: English Plural Formation</h5>
                <ul>
                  <li><strong>Regular:</strong> cat/cats, dog/dogs, book/books</li>
                  <li><strong>Irregular:</strong> foot/feet, goose/geese, mouse/mice</li>
                  <li><strong>Why irregular?</strong> Old English had a suffix that changed the vowel (umlaut)</li>
                  <li><strong>Reconstruction:</strong> "feet" comes from *fōti (foot + i suffix caused vowel change)</li>
                </ul>
              </div>

              <h4>Sound Correspondences - The Key to Relationships</h4>
              <p>Regular sound correspondences are the smoking gun that proves languages are related.</p>
              
              <div className="example-box">
                <h5>Grimm's Law - A Famous Sound Change</h5>
                <p>Describes how Germanic languages changed sounds from PIE:</p>
                <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
                  <thead>
                    <tr style={{backgroundColor: '#7CB342', color: 'white'}}>
                      <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>PIE</th>
                      <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Germanic</th>
                      <th style={{padding: '0.75rem', border: '1px solid #ddd'}}>Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>*p</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>f</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Latin pater → English father</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>*t</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>th</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Latin trēs → English three</td>
                    </tr>
                    <tr>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>*k</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>h</td>
                      <td style={{padding: '0.75rem', border: '1px solid #ddd'}}>Latin cord- → English heart</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4>The Wave Model vs. Tree Model</h4>
              
              <h5>Tree Model (Traditional)</h5>
              <ul>
                <li><strong>Idea:</strong> Languages split cleanly like branches on a tree</li>
                <li><strong>Good for:</strong> Showing genetic relationships</li>
                <li><strong>Problem:</strong> Doesn't show contact between branches</li>
              </ul>

              <h5>Wave Model (Alternative)</h5>
              <ul>
                <li><strong>Idea:</strong> Innovations spread like waves from a center</li>
                <li><strong>Good for:</strong> Showing gradual spread of changes</li>
                <li><strong>Better represents:</strong> Dialect continua and language contact</li>
              </ul>

              <h4>Dating Language Change</h4>
              
              <h5>Glottochronology - Linguistic Dating</h5>
              <ul>
                <li><strong>Idea:</strong> Languages change at a constant rate (like carbon dating!)</li>
                <li><strong>Method:</strong> Compare core vocabulary to estimate divergence time</li>
                <li><strong>Problem:</strong> Change rate isn't actually constant</li>
                <li><strong>Status:</strong> Controversial but interesting</li>
              </ul>

              <h4>Endangered Languages - A Race Against Time</h4>
              <p>Historical linguistics isn't just about the past - it's also about preserving languages for the future.</p>
              
              <ul>
                <li><strong>Crisis:</strong> A language dies every 2 weeks</li>
                <li><strong>At risk:</strong> About 40% of world's 7,000 languages</li>
                <li><strong>Why it matters:</strong> Each language contains unique knowledge, culture, and ways of thinking</li>
                <li><strong>What linguists do:</strong> Document, record, and help revitalize endangered languages</li>
              </ul>

              <div className="example-box">
                <h5>Try It Yourself!</h5>
                <p>Be a historical linguist:</p>
                <ul>
                  <li>Compare words for "mother" in different languages you know. Do you see patterns?</li>
                  <li>Look at old English texts (like Shakespeare). What words or grammar have changed?</li>
                  <li>Research your own language's family tree. What languages is it related to?</li>
                  <li>Find cognates between English and another language you know</li>
                </ul>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Language Change</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Unit 3 Quiz →</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.4</div>
              <div className="lesson-title-main">
                <h1>Unit 3 Comprehensive Assessment</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Test Your Knowledge of Unit 3</h3>
              <p>This comprehensive quiz covers all topics from Unit 3: Language Acquisition. It includes questions from:</p>
              <ul>
                <li><strong>Module 3.1:</strong> First and Second Language Acquisition</li>
                <li><strong>Module 3.2:</strong> Language Change and Language Contact</li>
                <li><strong>Module 3.3:</strong> Historical Linguistics</li>
              </ul>
              <p>Take your time and demonstrate your understanding of language acquisition, change, and history!</p>
            </section>

            <Quiz title="Unit 3 Comprehensive Quiz" questions={unitQuiz} subject="LS" unitId={3} moduleId={4} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/resource/historical-linguistics" target="_blank" rel="noopener noreferrer">Linguistic Society - Historical Linguistics</a></li>
                <li><a href="https://www.britannica.com/science/historical-linguistics" target="_blank" rel="noopener noreferrer">Encyclopedia Britannica - Historical Linguistics</a></li>
                <li><a href="https://www.ethnologue.com/guides/how-many-languages" target="_blank" rel="noopener noreferrer">Ethnologue - Language Families</a></li>
                <li><a href="https://www.endangeredlanguages.com/" target="_blank" rel="noopener noreferrer">Endangered Languages Project</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Historical Linguistics</button>
              <button onClick={onBack} className="next-module-btn">Back to Overview →</button>
            </div>
          </div>
        );
      default:
        return <div>Module not found</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit3;



