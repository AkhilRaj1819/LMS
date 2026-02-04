'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const module1Quiz = [
    {
      question: "What is the primary focus of linguistics?",
      options: [
        "The study of literature",
        "The scientific study of language and its structure",
        "The study of foreign languages",
        "The study of language teaching methods"
      ],
      correctAnswer: 1,
      explanation: "Linguistics is the scientific study of language and its structure, including phonetics, phonology, morphology, syntax, semantics, and pragmatics. It's not about literature or teaching methods, but about understanding how language works as a system."
    },
    {
      question: "Which of the following is NOT a core sub-field of linguistics?",
      options: ["Phonetics", "Phonology", "Morphology", "Literature"],
      correctAnswer: 3,
      explanation: "Literature is not a core sub-field of linguistics. The main branches are phonetics (speech sounds), phonology (sound patterns), morphology (word structure), syntax (sentence structure), semantics (meaning), and pragmatics (language use in context)."
    },
    {
      question: "What does phonetics study?",
      options: [
        "Sound patterns in specific languages",
        "The physical properties of speech sounds",
        "The meaning of words",
        "The structure of sentences"
      ],
      correctAnswer: 1,
      explanation: "Phonetics studies the physical properties of speech sounds - how they're produced (articulatory), their acoustic properties (acoustic), and how they're perceived (auditory). Phonology studies sound patterns, semantics studies meaning, and syntax studies sentence structure."
    },
    {
      question: "What is the difference between phonetics and phonology?",
      options: [
        "Phonetics studies sound systems, phonology studies individual sounds",
        "Phonetics studies physical properties, phonology studies functional aspects",
        "There is no difference",
        "Phonetics is about writing, phonology is about speaking"
      ],
      correctAnswer: 1,
      explanation: "Phonetics studies the physical properties of speech sounds (how they're made, what they sound like), while phonology studies how sounds function and pattern within specific languages (which sounds distinguish meaning, how they change in different contexts)."
    },
    {
      question: "What is morphology concerned with?",
      options: [
        "Sentence structure",
        "Word structure and formation",
        "Sound patterns",
        "Meaning in context"
      ],
      correctAnswer: 1,
      explanation: "Morphology studies word structure and formation - how morphemes (smallest meaningful units) combine to create words. Syntax studies sentence structure, phonology studies sound patterns, and pragmatics studies meaning in context."
    }
  ];

  const module2Quiz = [
    {
      question: "What is the International Phonetic Alphabet (IPA) used for?",
      options: [
        "Learning foreign languages",
        "Representing speech sounds precisely",
        "Writing poetry",
        "Teaching grammar"
      ],
      correctAnswer: 1,
      explanation: "The IPA provides a standardized way to represent speech sounds from all languages using one symbol per sound. This eliminates the ambiguity of regular spelling systems where the same letter can represent different sounds (like 'ough' in English)."
    },
    {
      question: "Which branch of phonetics studies sound production?",
      options: [
        "Acoustic Phonetics",
        "Auditory Phonetics",
        "Articulatory Phonetics",
        "Experimental Phonetics"
      ],
      correctAnswer: 2,
      explanation: "Articulatory phonetics studies how speech sounds are produced by the vocal organs (lungs, vocal cords, tongue, lips, etc.). Acoustic phonetics studies sound waves, and auditory phonetics studies how we perceive sounds."
    },
    {
      question: "What are the three main components of consonant classification?",
      options: [
        "Height, backness, roundedness",
        "Place, manner, voicing",
        "Stress, tone, intonation",
        "Onset, nucleus, coda"
      ],
      correctAnswer: 1,
      explanation: "Consonants are classified by: Place (where in the mouth), Manner (how air flows), and Voicing (whether vocal cords vibrate). Height, backness, and roundedness describe vowels. Stress, tone, and intonation are prosodic features."
    },
    {
      question: "Which vowel feature refers to tongue position from front to back?",
      options: ["Height", "Backness", "Roundedness", "Length"],
      correctAnswer: 1,
      explanation: "Backness refers to how far forward or back the tongue is positioned. Height refers to how high or low the tongue is, roundedness refers to lip shape, and length refers to vowel duration."
    },
    {
      question: "What does 'voicing' refer to in phonetics?",
      options: [
        "Speaking loudly",
        "Vocal fold vibration",
        "Articulation place",
        "Sound duration"
      ],
      correctAnswer: 1,
      explanation: "Voicing refers to whether the vocal folds (vocal cords) vibrate during sound production. Voiced sounds like /b/, /d/, /g/ have vibration; voiceless sounds like /p/, /t/, /k/ don't. You can feel this by putting your hand on your throat."
    }
  ];

  const module3Quiz = [
    {
      question: "What is a phoneme?",
      options: [
        "A specific speech sound",
        "An abstract sound unit that can distinguish meaning",
        "A letter of the alphabet",
        "A word"
      ],
      correctAnswer: 1,
      explanation: "A phoneme is an abstract mental representation of a sound that can distinguish meaning in a language. For example, /p/ and /b/ are different phonemes in English because they distinguish 'pat' from 'bat'. It's not the physical sound itself, but the mental category."
    },
    {
      question: "What are allophones?",
      options: [
        "Different phonemes",
        "Phonetic variants of the same phoneme",
        "Foreign sounds",
        "Silent letters"
      ],
      correctAnswer: 1,
      explanation: "Allophones are different pronunciations of the same phoneme that don't change word meaning. For example, the aspirated [pʰ] in 'pin' and unaspirated [p] in 'spin' are allophones of the phoneme /p/ - they sound different but don't create different words."
    },
    {
      question: "What is assimilation in phonology?",
      options: [
        "Sounds becoming more similar",
        "Sounds becoming less similar",
        "Sound deletion",
        "Sound insertion"
      ],
      correctAnswer: 0,
      explanation: "Assimilation is when sounds become more similar to neighboring sounds to make pronunciation easier. For example, 'input' is pronounced [ɪmpʊt] where /n/ becomes [m] to match the following bilabial /p/. This makes speech more fluid."
    },
    {
      question: "What are the three parts of syllable structure?",
      options: [
        "Beginning, middle, end",
        "Onset, nucleus, coda",
        "Consonant, vowel, consonant",
        "Prefix, root, suffix"
      ],
      correctAnswer: 1,
      explanation: "Syllables have three parts: Onset (initial consonant(s), optional), Nucleus (vowel or syllabic consonant, required), and Coda (final consonant(s), optional). In 'cat': /k/ is onset, /æ/ is nucleus, /t/ is coda."
    },
    {
      question: "What is prosody in phonology?",
      options: [
        "Sound patterns",
        "Stress, tone, and intonation patterns",
        "Vowel systems",
        "Consonant clusters"
      ],
      correctAnswer: 1,
      explanation: "Prosody refers to suprasegmental features like stress (syllable prominence), tone (pitch patterns that distinguish meaning), and intonation (pitch patterns across phrases). These features operate above individual sounds and affect meaning and emotion."
    }
  ];

  const module4Quiz = [
    {
      question: "What is a morpheme?",
      options: [
        "A sentence",
        "The smallest meaningful unit in a language",
        "A sound",
        "A word"
      ],
      correctAnswer: 1,
      explanation: "A morpheme is the smallest unit that carries meaning. For example, 'unhappiness' has three morphemes: 'un-' (not), 'happy' (feeling good), and '-ness' (state of being). You can't break these down further without losing meaning."
    },
    {
      question: "What is the difference between a free morpheme and a bound morpheme?",
      options: [
        "Free morphemes can stand alone, bound morphemes cannot",
        "Free morphemes are longer",
        "There is no difference",
        "Bound morphemes are more common"
      ],
      correctAnswer: 0,
      explanation: "Free morphemes can stand alone as complete words (like 'cat', 'run', 'happy'), while bound morphemes must attach to other morphemes (like '-s', 'un-', '-ing'). Bound morphemes include prefixes, suffixes, and other affixes."
    },
    {
      question: "Which type of morphology changes word class?",
      options: [
        "Inflectional morphology",
        "Derivational morphology",
        "Compounding",
        "Conversion"
      ],
      correctAnswer: 1,
      explanation: "Derivational morphology often changes word class and creates new words (teach → teacher, happy → happiness). Inflectional morphology only modifies words for grammar without changing class (cat → cats, walk → walked)."
    },
    {
      question: "What is compounding?",
      options: [
        "Adding prefixes",
        "Adding suffixes",
        "Combining two or more words",
        "Changing word class"
      ],
      correctAnswer: 2,
      explanation: "Compounding combines two or more free morphemes (complete words) to create new words, like 'bookshelf' (book + shelf), 'classroom' (class + room), or 'blackboard' (black + board). The result often has a specialized meaning."
    },
    {
      question: "Which is an example of inflectional morphology?",
      options: [
        "happy → happiness",
        "walk → walked",
        "teach → teacher",
        "possible → impossible"
      ],
      correctAnswer: 1,
      explanation: "'Walk → walked' is inflectional because it adds grammatical information (past tense) without changing the word class (both are verbs). The others are derivational: happiness (noun from adjective), teacher (noun from verb), impossible (negative adjective)."
    }
  ];

  const unitQuiz = [
    ...module1Quiz.slice(0, 2),
    ...module2Quiz.slice(0, 2),
    ...module3Quiz.slice(0, 2),
    ...module4Quiz.slice(0, 2),
    {
      question: "What does syntax study?",
      options: [
        "Meaning in language",
        "Sentence structure and word arrangement",
        "Sound systems",
        "Language change"
      ],
      correctAnswer: 1,
      explanation: "Syntax studies how words combine to form phrases and sentences, including word order rules, phrase structure, and grammatical relationships. It explains why 'The cat chased the mouse' is grammatical but 'Cat the mouse the chased' is not."
    },
    {
      question: "What does semantics study?",
      options: [
        "Sound patterns",
        "Meaning in language",
        "Sentence structure",
        "Language use in context"
      ],
      correctAnswer: 1,
      explanation: "Semantics studies meaning in language - how words, phrases, and sentences convey meaning. It includes lexical semantics (word meaning), compositional semantics (how meanings combine), and truth conditions. Pragmatics studies meaning in context."
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
                <h1>Overview of Linguistics and its Sub-fields</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Linguistics?</h3>
              <p>Imagine you're learning a new language or wondering why we say "I am" but "he is". Linguistics is the science that answers these questions! It's the systematic study of how human language works - from the sounds we make to the meanings we create.</p>
              
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/3yLXNzDUH58" 
                  title="Introduction to Linguistics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <h4>What Do Linguists Study?</h4>
              <ul>
                <li><strong>How we make sounds:</strong> Why "p" and "b" sound different</li>
                <li><strong>How we form words:</strong> Why "unhappiness" makes sense but "happyunness" doesn't</li>
                <li><strong>How we build sentences:</strong> Why "The cat chased the mouse" is correct but "Cat the mouse the chased" isn't</li>
                <li><strong>How we create meaning:</strong> Why "bank" can mean a financial institution or a river edge</li>
                <li><strong>How languages change:</strong> Why Shakespeare's English sounds different from ours</li>
                <li><strong>How we learn languages:</strong> Why children pick up languages so easily</li>
              </ul>

              <h4>Key Ideas About Language</h4>
              <ul>
                <li><strong>Language follows rules:</strong> Every language has patterns. In English, we say "two cats" not "cats two"</li>
                <li><strong>Words are arbitrary:</strong> There's no reason "dog" means dog - it's just what English speakers agreed on. That's why French says "chien" and Spanish says "perro"</li>
                <li><strong>Language is creative:</strong> You can make sentences you've never heard before, like "The purple elephant danced on Mars"</li>
                <li><strong>Language is structured:</strong> It has levels - sounds combine into words, words into sentences</li>
                <li><strong>Language changes:</strong> New words appear ("selfie", "google"), old words disappear</li>
                <li><strong>All humans can learn language:</strong> But each language is unique</li>
              </ul>

              <div className="theory-analysis">
                <h5>Linguistic Analysis Framework</h5>
                <p>Examine how different linguistic branches analyze the same phenomenon:</p>
                <div className="analysis-grid">
                  <div className="analysis-item">
                    <h6>Morphological Analysis</h6>
                    <p><strong>"unhappiness"</strong> → un- (negation) + happy (root) + -ness (nominalization)</p>
                    <p>Demonstrates derivational morphology and word formation processes</p>
                  </div>
                  <div className="analysis-item">
                    <h6>Phonological Analysis</h6>
                    <p><strong>/ʌnˈhæpɪnəs/</strong> → Shows stress placement and vowel reduction</p>
                    <p>Illustrates prosodic patterns and phonological processes</p>
                  </div>
                  <div className="analysis-item">
                    <h6>Semantic Analysis</h6>
                    <p><strong>Compositional meaning:</strong> [NOT [STATE OF BEING HAPPY]]</p>
                    <p>Demonstrates how morphemes contribute to overall word meaning</p>
                  </div>
                  <div className="analysis-item">
                    <h6>Syntactic Analysis</h6>
                    <p><strong>"Her unhappiness was evident"</strong> → [NP [Det Her] [N unhappiness]]</p>
                    <p>Shows how morphologically complex words function syntactically</p>
                  </div>
                </div>
              </div>

              <div className="linguistic-universals">
                <h5>Universal Properties of Human Language</h5>
                <div className="universals-grid">
                  <div className="universal-item">
                    <h6>Arbitrariness</h6>
                    <p>No inherent connection between form and meaning</p>
                    <div className="evidence">Cross-linguistic variation: water/agua/eau/mizu</div>
                  </div>
                  <div className="universal-item">
                    <h6>Productivity</h6>
                    <p>Infinite expression from finite elements</p>
                    <div className="evidence">Novel sentence generation and comprehension</div>
                  </div>
                  <div className="universal-item">
                    <h6>Displacement</h6>
                    <p>Reference to non-present entities and events</p>
                    <div className="evidence">Past/future tense, hypothetical scenarios</div>
                  </div>
                  <div className="universal-item">
                    <h6>Cultural Transmission</h6>
                    <p>Learned through social interaction</p>
                    <div className="evidence">Language acquisition in social contexts</div>
                  </div>
                </div>
              </div>

              <h4>Branches of Linguistics (What Linguists Focus On)</h4>
              
              <h5>1. Phonetics - The Sounds of Speech</h5>
              <ul>
                <li><strong>What it studies:</strong> How we physically make speech sounds</li>
                <li><strong>Example:</strong> When you say "p", you close your lips and release air. When you say "b", you do the same but your vocal cords vibrate</li>
                <li><strong>Why it matters:</strong> Helps with pronunciation, speech therapy, and understanding accents</li>
              </ul>

              <h5>2. Phonology - Sound Patterns</h5>
              <ul>
                <li><strong>What it studies:</strong> How sounds work in specific languages</li>
                <li><strong>Example:</strong> In English, "p" sounds different in "pin" (with a puff of air) vs "spin" (no puff), but we think of them as the same sound</li>
                <li><strong>Why it matters:</strong> Explains why some sound combinations are impossible in your language</li>
              </ul>

              <h5>3. Morphology - Word Structure</h5>
              <ul>
                <li><strong>What it studies:</strong> How words are built from smaller parts</li>
                <li><strong>Example:</strong> "unhappiness" = un (not) + happy + ness (state of being)</li>
                <li><strong>Why it matters:</strong> Helps you understand new words and learn vocabulary faster</li>
              </ul>

              <h5>4. Syntax - Sentence Structure</h5>
              <ul>
                <li><strong>What it studies:</strong> How words combine to form sentences</li>
                <li><strong>Example:</strong> "The dog bit the man" vs "The man bit the dog" - same words, different meaning!</li>
                <li><strong>Why it matters:</strong> Explains grammar rules and why sentences make sense</li>
              </ul>

              <h5>5. Semantics - Meaning</h5>
              <ul>
                <li><strong>What it studies:</strong> What words and sentences mean</li>
                <li><strong>Example:</strong> "Bachelor" means "unmarried man" - you can't be a married bachelor</li>
                <li><strong>Why it matters:</strong> Helps understand how we communicate ideas</li>
              </ul>

              <h5>6. Pragmatics - Language in Context</h5>
              <ul>
                <li><strong>What it studies:</strong> How we use language in real situations</li>
                <li><strong>Example:</strong> "Can you pass the salt?" is technically a yes/no question, but we understand it as a request</li>
                <li><strong>Why it matters:</strong> Explains how we understand implied meanings and social cues</li>
              </ul>

              <div className="example-box">
                <h5>Universal Features of All Languages</h5>
                <p>Despite thousands of different languages, they all share some features:</p>
                <ul>
                  <li><strong>All have vowels and consonants:</strong> Though the specific sounds differ</li>
                  <li><strong>All distinguish nouns and verbs:</strong> Things vs actions</li>
                  <li><strong>All can ask questions:</strong> And say "no"</li>
                  <li><strong>All can talk about time:</strong> Past, present, future</li>
                  <li><strong>All can be infinitely creative:</strong> You can always make a longer sentence</li>
                </ul>
              </div>

              <h4>Special Language Abilities</h4>
              <ul>
                <li><strong>Displacement:</strong> We can talk about things not here and now
                  <ul>
                    <li>Example: "Yesterday I saw a movie" (past)</li>
                    <li>Example: "Tomorrow I'll visit Paris" (future)</li>
                    <li>Example: "Unicorns don't exist" (imaginary)</li>
                  </ul>
                </li>
                <li><strong>Recursion:</strong> We can put sentences inside sentences forever
                  <ul>
                    <li>Example: "The cat that chased the mouse that ate the cheese that sat in the house..."</li>
                    <li>This is what makes human language so powerful!</li>
                  </ul>
                </li>
              </ul>
            </section>

            <Quiz title="Module 1.1 Quiz: Overview of Linguistics" questions={module1Quiz} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/what-linguistics" target="_blank" rel="noopener noreferrer">Linguistic Society of America - What is Linguistics?</a></li>
                <li><a href="https://www.sil.org/linguistics" target="_blank" rel="noopener noreferrer">SIL International - Linguistics Resources</a></li>
                <li><a href="https://www.cambridge.org/core/what-we-publish/textbooks/linguistics" target="_blank" rel="noopener noreferrer">Cambridge University Press - Linguistics Textbooks</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={onBack} className="prev-module-btn">← Back to Overview</button>
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Phonetics →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.2</div>
              <div className="lesson-title-main">
                <h1>Phonetics</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>What is Phonetics?</h3>
              <p>Have you ever wondered how we actually make the sounds when we speak? Or why "p" and "b" sound similar but different? Phonetics is the study of speech sounds - how we produce them, what they sound like physically, and how we hear them.</p>
              
              <p><strong>Think of it this way:</strong> When you say "pat" and "bat", your mouth does almost the same thing. The only difference? Your vocal cords vibrate for "b" but not for "p". Try it - put your hand on your throat and feel the difference!</p>
              
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/dfoRdKuPF9I" 
                  title="Introduction to Phonetics"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <h4>Three Ways to Study Speech Sounds</h4>
              
              <h5>1. Articulatory Phonetics - How We Make Sounds</h5>
              <ul>
                <li><strong>What it studies:</strong> The physical process of producing speech</li>
                <li><strong>Your speech organs:</strong>
                  <ul>
                    <li>Lungs (provide air)</li>
                    <li>Vocal cords (vibrate to make voice)</li>
                    <li>Tongue (most flexible articulator)</li>
                    <li>Lips, teeth, roof of mouth (shape the sounds)</li>
                  </ul>
                </li>
                <li><strong>Try this:</strong> Say "k" and "t". Notice how "k" is made in the back of your mouth, but "t" is made at the front?</li>
              </ul>

              <h5>2. Acoustic Phonetics - What Sounds Look Like</h5>
              <ul>
                <li><strong>What it studies:</strong> Sound waves and their physical properties</li>
                <li><strong>Key concepts:</strong>
                  <ul>
                    <li>Frequency = how high or low a sound is (pitch)</li>
                    <li>Amplitude = how loud a sound is</li>
                    <li>Duration = how long a sound lasts</li>
                  </ul>
                </li>
                <li><strong>Cool fact:</strong> Scientists can see your voice! They use spectrograms (like pictures of sound waves)</li>
              </ul>

              <h5>3. Auditory Phonetics - How We Hear Sounds</h5>
              <ul>
                <li><strong>What it studies:</strong> How our ears and brain process speech</li>
                <li><strong>Interesting fact:</strong> Your brain automatically groups similar sounds together, which is why you can understand different accents</li>
              </ul>

              <div className="example-box">
                <h5>The International Phonetic Alphabet (IPA)</h5>
                <p>English spelling is confusing! "Tough", "through", and "though" all have "ough" but sound different. The IPA solves this:</p>
                <ul>
                  <li><strong>One symbol = one sound</strong> (unlike English spelling)</li>
                  <li>"ship" = [ʃɪp] and "sheep" = [ʃip] - you can see the vowel difference!</li>
                  <li>Used by linguists worldwide</li>
                  <li>Covers sounds from ALL languages</li>
                </ul>
              </div>

              <h4>Understanding Consonants</h4>
              <p>Consonants are sounds where air is blocked or restricted. We classify them by THREE features:</p>
              
              <h5>Feature 1: WHERE in your mouth (Place of Articulation)</h5>
              <ul>
                <li><strong>Bilabial (both lips):</strong> p, b, m
                  <ul><li>Try it: "pat", "bat", "mat" - your lips come together</li></ul>
                </li>
                <li><strong>Labiodental (lip + teeth):</strong> f, v
                  <ul><li>Try it: "fat", "vat" - your top teeth touch your bottom lip</li></ul>
                </li>
                <li><strong>Alveolar (tongue + ridge behind teeth):</strong> t, d, s, z, n, l
                  <ul><li>Try it: "tap" - your tongue touches the bumpy ridge behind your teeth</li></ul>
                </li>
                <li><strong>Velar (tongue + soft palate):</strong> k, g
                  <ul><li>Try it: "cat", "gap" - made in the back of your mouth</li></ul>
                </li>
              </ul>

              <h5>Feature 2: HOW air flows (Manner of Articulation)</h5>
              <ul>
                <li><strong>Stops:</strong> Air completely blocked then released (p, t, k, b, d, g)
                  <ul><li>Like popping a balloon!</li></ul>
                </li>
                <li><strong>Fricatives:</strong> Air squeezed through narrow gap (f, s, sh, h, v, z)
                  <ul><li>Makes a hissing or buzzing sound</li></ul>
                </li>
                <li><strong>Nasals:</strong> Air goes through your nose (m, n, ng)
                  <ul><li>Try saying "m" while pinching your nose - you can't!</li></ul>
                </li>
                <li><strong>Liquids:</strong> Air flows around tongue (l, r)
                  <ul><li>These are the "smooth" consonants</li></ul>
                </li>
              </ul>

              <h5>Feature 3: Voice or No Voice (Voicing)</h5>
              <ul>
                <li><strong>Voiced:</strong> Vocal cords vibrate (b, d, g, v, z)
                  <ul><li>Put your hand on your throat - you'll feel buzzing!</li></ul>
                </li>
                <li><strong>Voiceless:</strong> No vibration (p, t, k, f, s)
                  <ul><li>Just air, no buzzing</li></ul>
                </li>
                <li><strong>Pairs:</strong> p/b, t/d, k/g, f/v, s/z - same mouth position, different voicing!</li>
              </ul>

              <h4>Understanding Vowels</h4>
              <p>Vowels are sounds where air flows freely. We classify them by tongue position:</p>
              
              <h5>Feature 1: Tongue Height (How high is your tongue?)</h5>
              <ul>
                <li><strong>High vowels:</strong> "beet" [i], "boot" [u]
                  <ul><li>Tongue is close to the roof of your mouth</li></ul>
                </li>
                <li><strong>Mid vowels:</strong> "bait" [e], "boat" [o]
                  <ul><li>Tongue is in the middle</li></ul>
                </li>
                <li><strong>Low vowels:</strong> "bat" [æ], "bot" [ɑ]
                  <ul><li>Tongue is low, mouth is open</li></ul>
                </li>
              </ul>

              <h5>Feature 2: Tongue Position (Front or Back?)</h5>
              <ul>
                <li><strong>Front vowels:</strong> "beet" [i], "bit" [ɪ]
                  <ul><li>Tongue pushed forward</li></ul>
                </li>
                <li><strong>Back vowels:</strong> "boot" [u], "boat" [o]
                  <ul><li>Tongue pulled back</li></ul>
                </li>
                <li><strong>Central vowels:</strong> "but" [ʌ], "about" [ə]
                  <ul><li>Tongue in neutral position</li></ul>
                </li>
              </ul>

              <h5>Feature 3: Lip Rounding</h5>
              <ul>
                <li><strong>Rounded:</strong> "boot" [u], "boat" [o]
                  <ul><li>Lips form a circle</li></ul>
                </li>
                <li><strong>Unrounded:</strong> "beet" [i], "bat" [æ]
                  <ul><li>Lips spread or neutral</li></ul>
                </li>
              </ul>

              <h5>Special Vowels</h5>
              <ul>
                <li><strong>Diphthongs:</strong> Two vowel sounds glide together
                  <ul>
                    <li>"boy" = [ɔɪ] (starts with "o", ends with "i")</li>
                    <li>"cow" = [aʊ] (starts with "a", ends with "u")</li>
                  </ul>
                </li>
              </ul>

              <div className="phonetic-analysis">
                <h5>Articulatory Analysis Framework</h5>
                <p>Systematic approach to analyzing speech sound production:</p>
                
                <div className="analysis-table">
                  <h6>Consonant Classification Matrix</h6>
                  <table>
                    <thead>
                      <tr><th>Sound</th><th>Place</th><th>Manner</th><th>Voicing</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>/p/</td><td>Bilabial</td><td>Stop</td><td>Voiceless</td><td>"pat" [pʰæt]</td></tr>
                      <tr><td>/b/</td><td>Bilabial</td><td>Stop</td><td>Voiced</td><td>"bat" [bæt]</td></tr>
                      <tr><td>/f/</td><td>Labiodental</td><td>Fricative</td><td>Voiceless</td><td>"fat" [fæt]</td></tr>
                      <tr><td>/v/</td><td>Labiodental</td><td>Fricative</td><td>Voiced</td><td>"vat" [væt]</td></tr>
                    </tbody>
                  </table>
                </div>

                <div className="vowel-space">
                  <h6>Vowel Classification System</h6>
                  <div className="vowel-chart">
                    <div className="vowel-row">
                      <span className="vowel-label">High:</span>
                      <span className="vowel-item">/i/ "beat"</span>
                      <span className="vowel-item">/ɪ/ "bit"</span>
                      <span className="vowel-item">/u/ "boot"</span>
                      <span className="vowel-item">/ʊ/ "book"</span>
                    </div>
                    <div className="vowel-row">
                      <span className="vowel-label">Mid:</span>
                      <span className="vowel-item">/e/ "bait"</span>
                      <span className="vowel-item">/ɛ/ "bet"</span>
                      <span className="vowel-item">/o/ "boat"</span>
                      <span className="vowel-item">/ɔ/ "bought"</span>
                    </div>
                    <div className="vowel-row">
                      <span className="vowel-label">Low:</span>
                      <span className="vowel-item">/æ/ "bat"</span>
                      <span class="vowel-item">/ɑ/ "bot"</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="transcription-practice">
                <h5>IPA Transcription Analysis</h5>
                <p>Systematic phonetic transcription demonstrates sound-symbol correspondence:</p>
                <div className="transcription-examples">
                  <div className="transcription-pair">
                    <span className="orthography">"thought"</span>
                    <span className="ipa">[θɔt]</span>
                    <span className="analysis">Shows /θ/ fricative, /ɔ/ back vowel</span>
                  </div>
                  <div className="transcription-pair">
                    <span className="orthography">"psychology"</span>
                    <span className="ipa">[saɪˈkɑlədʒi]</span>
                    <span className="analysis">Demonstrates silent letters, stress placement</span>
                  </div>
                  <div className="transcription-pair">
                    <span className="orthography">"strength"</span>
                    <span className="ipa">[strɛŋkθ]</span>
                    <span class="analysis">Complex consonant clusters, velar nasal</span>
                  </div>
                </div>
              </div>

              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/xMEFr7ghMTg" 
                  title="IPA Consonants"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </section>

            <Quiz title="Module 1.2 Quiz: Phonetics" questions={module2Quiz} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.internationalphoneticassociation.org/" target="_blank" rel="noopener noreferrer">International Phonetic Association</a></li>
                <li><a href="https://www.ipachart.com/" target="_blank" rel="noopener noreferrer">Interactive IPA Chart</a></li>
                <li><a href="https://www.phonetics.ucla.edu/" target="_blank" rel="noopener noreferrer">UCLA Phonetics Lab</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Overview of Linguistics</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Phonology →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.3</div>
              <div className="lesson-title-main">
                <h1>Phonology</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Phonology</h3>
              <p>Phonology is the study of sound systems in languages, examining how sounds function and pattern within particular linguistic systems. Unlike phonetics (which studies physical sounds), phonology studies abstract sound patterns.</p>
              
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/imH7hdOgxrU?si=xd3NUssdKe3v7xsh" 
                  title="Introduction to Phonology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <h4>Basic Phonological Concepts</h4>
              
              <h5>Phoneme</h5>
              <ul>
                <li><strong>Definition:</strong> Abstract sound unit that distinguishes meaning in a language</li>
                <li><strong>Mental representation:</strong> Exists in speakers' minds, not physical reality</li>
                <li><strong>Example:</strong> /p/ and /b/ are different phonemes in English ("pit" vs. "bit")</li>
                <li><strong>Language-specific:</strong> What counts as a phoneme varies by language</li>
                <li><strong>Notation:</strong> Written between slashes /p/</li>
              </ul>

              <h5>Allophone</h5>
              <ul>
                <li><strong>Definition:</strong> Phonetic variants of the same phoneme</li>
                <li><strong>Do not change meaning:</strong> Different pronunciations of same sound</li>
                <li><strong>Example:</strong> Aspirated [pʰ] in "pin" vs. unaspirated [p] in "spin"</li>
                <li><strong>Predictable:</strong> Distribution determined by phonological rules</li>
                <li><strong>Notation:</strong> Written in square brackets [pʰ]</li>
              </ul>

              <h5>Minimal Pairs</h5>
              <ul>
                <li><strong>Definition:</strong> Words differing by only one sound in the same position</li>
                <li><strong>Purpose:</strong> Used to identify phonemes</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>cat/bat (initial consonant)</li>
                    <li>ship/sheep (vowel)</li>
                    <li>light/right (initial consonant)</li>
                    <li>pin/bin/tin/din/sin (multiple minimal pairs)</li>
                  </ul>
                </li>
                <li><strong>Prove phonemic contrast:</strong> Show sounds are different phonemes</li>
              </ul>

              <h5>Complementary Distribution</h5>
              <ul>
                <li><strong>Definition:</strong> Allophones occur in mutually exclusive environments</li>
                <li><strong>Never in same context:</strong> Predictable where each appears</li>
                <li><strong>Example:</strong> [pʰ] only word-initially, [p] after /s/</li>
              </ul>

              <h5>Free Variation</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds that can be interchanged without changing meaning</li>
                <li><strong>Example:</strong> Flapped [r] vs. trilled [r] in some Spanish dialects</li>
              </ul>

              <h5>Distinctive Features</h5>
              <ul>
                <li><strong>Binary oppositions:</strong> [+voice] vs. [-voice]</li>
                <li><strong>Describe sounds:</strong> [+nasal], [+continuant], etc.</li>
                <li><strong>Minimal feature differences:</strong> /p/ and /b/ differ only in [voice]</li>
              </ul>

              <div className="example-box">
                <h5>Phoneme vs. Allophone Example</h5>
                <p>English /p/ phoneme has multiple allophones:</p>
                <ul>
                  <li>[pʰ] aspirated in "pin" (word-initial)</li>
                  <li>[p] unaspirated in "spin" (after /s/)</li>
                  <li>[pʺ] unreleased in "stop" (word-final)</li>
                  <li>All are the same phoneme /p/ but pronounced differently</li>
                </ul>
              </div>

              <h4>Phonological Processes</h4>
              
              <h5>Assimilation</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds become more similar to neighboring sounds</li>
                <li><strong>Nasal assimilation:</strong> "impossible" [ɪmpɑsəbl] - /n/ becomes [m] before /p/</li>
                <li><strong>Voicing assimilation:</strong> "cats" [kæts] vs. "dogs" [dɔgz]</li>
                <li><strong>Place assimilation:</strong> "input" - /n/ becomes [m] before bilabial</li>
                <li><strong>Purpose:</strong> Makes articulation easier and faster</li>
              </ul>

              <h5>Dissimilation</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds become less similar</li>
                <li><strong>Less common:</strong> Than assimilation</li>
                <li><strong>Example:</strong> "fifths" often pronounced without second [f]</li>
                <li><strong>Historical:</strong> Latin "peregrinus" → "pilgrim" (r...r → l...r)</li>
              </ul>

              <h5>Deletion/Elision</h5>
              <ul>
                <li><strong>Definition:</strong> Sound is removed</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"handbag" → [hænbæg] (d deleted)</li>
                    <li>"camera" → [kæmrə] (schwa deleted)</li>
                    <li>"probably" → [prɑbli] (schwa deleted)</li>
                  </ul>
                </li>
                <li><strong>Common in fast speech:</strong> Casual pronunciation</li>
              </ul>

              <h5>Insertion/Epenthesis</h5>
              <ul>
                <li><strong>Definition:</strong> Sound is added</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"warmth" → [wɔrmpθ] (p inserted)</li>
                    <li>"athlete" → [æθəlit] (schwa inserted)</li>
                    <li>"film" → [fɪləm] (schwa inserted)</li>
                  </ul>
                </li>
                <li><strong>Purpose:</strong> Breaks up difficult consonant clusters</li>
              </ul>

              <h5>Metathesis</h5>
              <ul>
                <li><strong>Definition:</strong> Sounds switch positions</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>"ask" → "aks" in some dialects</li>
                    <li>"comfortable" → "comfterble"</li>
                  </ul>
                </li>
                <li><strong>Historical:</strong> Old English "brid" → Modern English "bird"</li>
              </ul>

              <h5>Lenition (Weakening)</h5>
              <ul>
                <li><strong>Definition:</strong> Sound becomes weaker or less constricted</li>
                <li><strong>Example:</strong> Spanish "hablado" [aβlaðo] - stops become fricatives</li>
              </ul>

              <h4>Syllable Structure</h4>
              
              <h5>Components</h5>
              <ul>
                <li><strong>Onset:</strong> Initial consonant(s) - optional ("cat" = /k/)</li>
                <li><strong>Nucleus:</strong> Vowel or syllabic consonant - obligatory ("cat" = /æ/)</li>
                <li><strong>Coda:</strong> Final consonant(s) - optional ("cat" = /t/)</li>
                <li><strong>Rhyme:</strong> Nucleus + Coda together</li>
              </ul>

              <h5>Syllable Types</h5>
              <ul>
                <li><strong>Open syllable:</strong> Ends in vowel (CV) - "go" [goʊ]</li>
                <li><strong>Closed syllable:</strong> Ends in consonant (CVC) - "cat" [kæt]</li>
                <li><strong>Heavy syllable:</strong> Long vowel or coda - "beat", "cat"</li>
                <li><strong>Light syllable:</strong> Short vowel, no coda - "ba" in "baby"</li>
              </ul>

              <h5>Sonority Hierarchy</h5>
              <ul>
                <li><strong>Principle:</strong> Sounds arranged by sonority (resonance)</li>
                <li><strong>Hierarchy:</strong> Vowels &gt; Glides &gt; Liquids &gt; Nasals &gt; Fricatives &gt; Stops</li>
                <li><strong>Syllable peak:</strong> Most sonorous element (usually vowel)</li>
              </ul>

              <h5>Phonotactics</h5>
              <ul>
                <li><strong>Definition:</strong> Rules for permissible sound combinations</li>
                <li><strong>English examples:</strong>
                  <ul>
                    <li>Can start with /str/ ("street") but not /tsr/</li>
                    <li>Can end with /ŋk/ ("sink") but not /ŋg/</li>
                  </ul>
                </li>
                <li><strong>Language-specific:</strong> Varies across languages</li>
              </ul>

              <h4>Prosodic Features</h4>
              
              <h5>Stress</h5>
              <ul>
                <li><strong>Definition:</strong> Prominence given to syllables</li>
                <li><strong>Distinguishes meaning:</strong> REcord (noun) vs. reCORD (verb)</li>
                <li><strong>Marked by:</strong> Increased loudness, length, pitch</li>
                <li><strong>Primary and secondary:</strong> Different levels of stress</li>
              </ul>

              <h5>Tone</h5>
              <ul>
                <li><strong>Definition:</strong> Pitch patterns that distinguish meaning</li>
                <li><strong>Tonal languages:</strong> Mandarin Chinese, Thai, Yoruba, Vietnamese</li>
                <li><strong>Types:</strong> Level tones (high, mid, low), contour tones (rising, falling)</li>
                <li><strong>Example:</strong> Mandarin "ma" - high tone = "mother", rising = "hemp"</li>
              </ul>

              <h5>Intonation</h5>
              <ul>
                <li><strong>Definition:</strong> Pitch patterns across phrases/sentences</li>
                <li><strong>Functions:</strong> Indicates questions, statements, emotions</li>
                <li><strong>Rising intonation:</strong> Yes/no questions ("You're coming?↗")</li>
                <li><strong>Falling intonation:</strong> Statements ("I'm coming.↘")</li>
              </ul>

              <h5>Length/Duration</h5>
              <ul>
                <li><strong>Phonemic length:</strong> Long vs. short sounds distinguish meaning</li>
                <li><strong>Example:</strong> Finnish "tuli" (fire) vs. "tuuli" (wind)</li>
              </ul>

              <h5>Rhythm</h5>
              <ul>
                <li><strong>Stress-timed:</strong> English, German (stressed syllables at regular intervals)</li>
                <li><strong>Syllable-timed:</strong> Spanish, French (syllables at regular intervals)</li>
                <li><strong>Mora-timed:</strong> Japanese (morae at regular intervals)</li>
              </ul>

              <div className="example-box">
                <h5>Phonological Rules</h5>
                <p>Phonological rules describe systematic sound patterns:</p>
                <ul>
                  <li><strong>Rule format:</strong> A → B / C_D (A becomes B in context C_D)</li>
                  <li><strong>Example:</strong> Vowels → [+nasal] / _[+nasal] (vowels nasalized before nasal consonants)</li>
                  <li><strong>Productive:</strong> Apply to new words automatically</li>
                  <li><strong>Predictable:</strong> Follow consistent patterns</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 1.3 Quiz: Phonology" questions={module3Quiz} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.phon.ox.ac.uk/" target="_blank" rel="noopener noreferrer">Oxford Phonetics Laboratory</a></li>
                <li><a href="https://linguistics.stackexchange.com/" target="_blank" rel="noopener noreferrer">Linguistics Stack Exchange</a></li>
                <li><a href="https://www.sil.org/linguistics/phonology" target="_blank" rel="noopener noreferrer">SIL - Phonology Resources</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Phonetics</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Morphology →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.4</div>
              <div className="lesson-title-main">
                <h1>Morphology</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Morphology</h3>
              <p>Morphology is the study of word structure and the rules governing word formation in languages. It examines how morphemes (smallest meaningful units) combine to create words.</p>
              
              <div className="video-container">
                <iframe 
                  src="https://www.youtube.com/embed/93sK4jTGrss?si=mEgfddepgnl6QNZ4"
                  title="Introduction to Morphology"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              <h4>Basic Morphological Concepts</h4>
              
              <h5>Morpheme</h5>
              <ul>
                <li><strong>Definition:</strong> Smallest meaningful unit in language</li>
                <li><strong>Cannot be divided:</strong> Into smaller meaningful parts</li>
                <li><strong>Example:</strong> "unbreakable" = un + break + able (3 morphemes)</li>
                <li><strong>Carries meaning:</strong> Lexical or grammatical</li>
              </ul>

              <h5>Types of Morphemes</h5>
              <ul>
                <li><strong>Free morpheme:</strong> Can stand alone as a word
                  <ul>
                    <li>Examples: cat, run, happy, book, green</li>
                    <li>Can function independently</li>
                  </ul>
                </li>
                <li><strong>Bound morpheme:</strong> Must attach to other morphemes
                  <ul>
                    <li>Affixes: -s, -ed, un-, -ness, -ing</li>
                    <li>Cannot stand alone</li>
                  </ul>
                </li>
                <li><strong>Root:</strong> Core meaning element (break in "unbreakable")</li>
                <li><strong>Stem:</strong> Base to which affixes attach</li>
                <li><strong>Base:</strong> Form to which affixes attach</li>
              </ul>

              <h5>Allomorph</h5>
              <ul>
                <li><strong>Definition:</strong> Variant forms of the same morpheme</li>
                <li><strong>Example - Plural -s:</strong>
                  <ul>
                    <li>/s/ in "cats" [kæts]</li>
                    <li>/z/ in "dogs" [dɔgz]</li>
                    <li>/ɪz/ in "horses" [hɔrsɪz]</li>
                  </ul>
                </li>
                <li><strong>Phonologically conditioned:</strong> Environment determines which form</li>
                <li><strong>Same meaning:</strong> Different pronunciation</li>
              </ul>

              <div className="example-box">
                <h5>Morpheme Analysis Example</h5>
                <p>Analyze the word "unbelievably":</p>
                <ul>
                  <li><strong>un-:</strong> prefix (negative) - bound morpheme</li>
                  <li><strong>believe:</strong> root (verb) - free morpheme</li>
                  <li><strong>-able:</strong> suffix (adjective-forming) - bound morpheme</li>
                  <li><strong>-ly:</strong> suffix (adverb-forming) - bound morpheme</li>
                  <li><strong>Total:</strong> 4 morphemes (1 free + 3 bound)</li>
                  <li><strong>Process:</strong> believe → believable → unbelievable → unbelievably</li>
                </ul>
              </div>

              <h4>Word Formation Processes</h4>
              
              <h5>Derivational Morphology</h5>
              <ul>
                <li><strong>Creates new words:</strong> Or changes word class</li>
                <li><strong>Prefixation:</strong> Adding prefixes
                  <ul>
                    <li>un-happy, re-write, pre-view, dis-agree</li>
                    <li>Often changes meaning, not word class</li>
                  </ul>
                </li>
                <li><strong>Suffixation:</strong> Adding suffixes
                  <ul>
                    <li>teach-er (V→N), happi-ness (Adj→N), quick-ly (Adj→Adv)</li>
                    <li>Often changes word class</li>
                  </ul>
                </li>
                <li><strong>Infixation:</strong> Inserting within roots
                  <ul>
                    <li>Rare in English: fan-bloody-tastic</li>
                    <li>Common in Tagalog, Arabic</li>
                  </ul>
                </li>
                <li><strong>Changes meaning:</strong> And often word class</li>
              </ul>

              <h5>Inflectional Morphology</h5>
              <ul>
                <li><strong>Modifies word:</strong> For grammatical function</li>
                <li><strong>Does not change:</strong> Word class or core meaning</li>
                <li><strong>English inflections (only 8):</strong>
                  <ul>
                    <li><strong>Plural:</strong> cat → cats</li>
                    <li><strong>Possessive:</strong> cat → cat's</li>
                    <li><strong>3rd person singular:</strong> walk → walks</li>
                    <li><strong>Past tense:</strong> walk → walked</li>
                    <li><strong>Past participle:</strong> walk → walked</li>
                    <li><strong>Present participle:</strong> walk → walking</li>
                    <li><strong>Comparative:</strong> big → bigger</li>
                    <li><strong>Superlative:</strong> big → biggest</li>
                  </ul>
                </li>
              </ul>

              <h5>Compounding</h5>
              <ul>
                <li><strong>Definition:</strong> Combining two or more free morphemes</li>
                <li><strong>Types:</strong>
                  <ul>
                    <li><strong>Noun + Noun:</strong> bookshelf, classroom, football</li>
                    <li><strong>Adjective + Noun:</strong> blackboard, greenhouse, hotdog</li>
                    <li><strong>Verb + Noun:</strong> pickpocket, breakfast, crybaby</li>
                    <li><strong>Noun + Verb:</strong> babysit, skydive</li>
                    <li><strong>Adjective + Adjective:</strong> bittersweet, blue-green</li>
                  </ul>
                </li>
                <li><strong>Creates new lexical items:</strong> Often with specialized meaning</li>
                <li><strong>Stress pattern:</strong> Usually on first element (BLACKboard)</li>
              </ul>

              <h5>Conversion (Zero Derivation)</h5>
              <ul>
                <li><strong>Definition:</strong> Changing word class without adding affixes</li>
                <li><strong>Noun → Verb:</strong>
                  <ul>
                    <li>to email, to google, to text, to chair (a meeting)</li>
                  </ul>
                </li>
                <li><strong>Verb → Noun:</strong>
                  <ul>
                    <li>a walk, a run, a hit, a catch</li>
                  </ul>
                </li>
                <li><strong>Adjective → Verb:</strong>
                  <ul>
                    <li>to clean, to empty, to dirty</li>
                  </ul>
                </li>
                <li><strong>Very productive:</strong> In English</li>
              </ul>

              <h5>Back-formation</h5>
              <ul>
                <li><strong>Definition:</strong> Creating new word by removing apparent affix</li>
                <li><strong>Examples:</strong>
                  <ul>
                    <li>editor → edit (removed -or)</li>
                    <li>television → televise (removed -ion)</li>
                    <li>burglar → burgle (removed -ar)</li>
                    <li>enthusiasm → enthuse (removed -iasm)</li>
                  </ul>
                </li>
                <li><strong>Reverse process:</strong> Of normal derivation</li>
              </ul>

              <h5>Other Word Formation Processes</h5>
              <ul>
                <li><strong>Clipping:</strong> Shortening words (advertisement → ad, laboratory → lab)</li>
                <li><strong>Blending:</strong> Combining parts of words (breakfast + lunch → brunch, smoke + fog → smog)</li>
                <li><strong>Acronyms:</strong> Initial letters (NASA, radar, scuba)</li>
                <li><strong>Borrowing:</strong> Taking words from other languages (pizza, karate, safari)</li>
                <li><strong>Coinage:</strong> Creating entirely new words (Google, Xerox, Kodak)</li>
              </ul>

              <h4>Morphological Typology</h4>
              
              <h5>Isolating Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> One morpheme per word</li>
                <li><strong>Little to no inflection:</strong> Minimal bound morphemes</li>
                <li><strong>Examples:</strong> Mandarin Chinese, Vietnamese, Thai</li>
                <li><strong>Grammar:</strong> Expressed through word order and separate words</li>
                <li><strong>Example:</strong> Mandarin "wǒ kàn shū" (I see book) - each word = one morpheme</li>
              </ul>

              <h5>Agglutinating Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Multiple morphemes per word</li>
                <li><strong>Clear boundaries:</strong> Easy to segment morphemes</li>
                <li><strong>Examples:</strong> Turkish, Finnish, Japanese, Swahili</li>
                <li><strong>Each morpheme:</strong> Has one clear meaning/function</li>
                <li><strong>Example:</strong> Turkish "evlerimizden" = ev-ler-imiz-den (house-PL-our-from)</li>
              </ul>

              <h5>Fusional Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Multiple meanings per morpheme</li>
                <li><strong>Unclear boundaries:</strong> Morphemes fused together</li>
                <li><strong>Examples:</strong> Spanish, Russian, Latin, German</li>
                <li><strong>One affix:</strong> Expresses multiple grammatical categories</li>
                <li><strong>Example:</strong> Spanish "hablo" = habl-o (speak-1st.person.singular.present)</li>
              </ul>

              <h5>Polysynthetic Languages</h5>
              <ul>
                <li><strong>Characteristic:</strong> Highly complex words</li>
                <li><strong>Single word:</strong> Can express entire sentence</li>
                <li><strong>Examples:</strong> Inuktitut, Mohawk, Yup'ik</li>
                <li><strong>Incorporation:</strong> Extensive use of noun incorporation</li>
                <li><strong>Example:</strong> Inuktitut "tusaatsiarunnanngittualuujunga" (I can't hear very well)</li>
              </ul>

              <h4>Morphological Analysis Techniques</h4>
              <ul>
                <li><strong>Morphological parsing:</strong> Breaking words into morphemes</li>
                <li><strong>Segmentation:</strong> Identifying boundaries between morphemes</li>
                <li><strong>Identification:</strong> Recognizing morpheme types and functions</li>
                <li><strong>Pattern recognition:</strong> Finding systematic patterns</li>
                <li><strong>Morphophonemic alternations:</strong> Sound changes at morpheme boundaries</li>
                <li><strong>Cross-linguistic comparison:</strong> Comparing morphological systems</li>
              </ul>

              <h4>Applications of Morphology</h4>
              <ul>
                <li><strong>Language teaching:</strong> Understanding word structure aids learning</li>
                <li><strong>Computational linguistics:</strong> Natural language processing, spell checkers</li>
                <li><strong>Speech synthesis:</strong> Text-to-speech systems</li>
                <li><strong>Translation:</strong> Understanding word formation across languages</li>
                <li><strong>Language documentation:</strong> Describing endangered languages</li>
                <li><strong>Language disorders:</strong> Diagnosing morphological deficits</li>
                <li><strong>Lexicography:</strong> Dictionary making and word analysis</li>
              </ul>

              <div className="example-box">
                <h5>Concatenative vs. Non-concatenative Morphology</h5>
                <p><strong>Concatenative:</strong> Morphemes joined end-to-end (English)</p>
                <ul>
                  <li>un + happy = unhappy</li>
                  <li>walk + ed = walked</li>
                </ul>
                <p><strong>Non-concatenative:</strong> Internal changes (Arabic, Hebrew)</p>
                <ul>
                  <li>Arabic: k-t-b (root for "write")</li>
                  <li>kataba (he wrote), kutiba (it was written), kaatib (writer)</li>
                  <li>Vowel patterns inserted into consonant root</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 1.4 Quiz: Morphology" questions={module4Quiz} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.sil.org/linguistics/morphology" target="_blank" rel="noopener noreferrer">SIL - Morphology Resources</a></li>
                <li><a href="https://wals.info/" target="_blank" rel="noopener noreferrer">World Atlas of Language Structures</a></li>
                <li><a href="https://www.ethnologue.com/" target="_blank" rel="noopener noreferrer">Ethnologue - Languages of the World</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Phonology</button>
            </div>

            <Quiz title="Unit 1 Comprehensive Quiz" questions={unitQuiz} passingScore={75} />

            <div className="reference-section">
              <h3>Unit 1 Complete - Additional Resources</h3>
              <ul>
                <li><a href="https://www.cambridge.org/core/books/how-languages-work/" target="_blank" rel="noopener noreferrer">How Languages Work - Carol Genetti (Textbook)</a></li>
                <li><a href="https://www.linguisticsociety.org/resource/faq" target="_blank" rel="noopener noreferrer">Linguistic Society of America - FAQs</a></li>
                <li><a href="https://ocw.mit.edu/courses/linguistics-and-philosophy/" target="_blank" rel="noopener noreferrer">MIT OpenCourseWare - Linguistics</a></li>
                <li><a href="https://www.youtube.com/c/LingSpace" target="_blank" rel="noopener noreferrer">The Ling Space - YouTube Channel</a></li>
              </ul>
            </div>
          </div>
        );

      default:
        return <div>Module not found</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit1;
