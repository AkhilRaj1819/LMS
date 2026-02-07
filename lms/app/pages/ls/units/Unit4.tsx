'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit4Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit4: React.FC<Unit4Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const module1Quiz = [
    { question: "What is the primary focus of sociolinguistics?", options: ["The study of language structure", "The study of the relationship between language and society", "The study of language acquisition", "The study of language change over time"], correctAnswer: 1, explanation: "" },
    { question: "What is a sociolect?", options: ["A regional variety of language", "A social variety of language associated with a particular social group", "A formal register of language", "A dead language"], correctAnswer: 1, explanation: "" },
    { question: "What is code-switching?", options: ["Changing the subject of conversation", "Alternating between different languages or varieties within a conversation", "Correcting grammatical errors", "Using formal language in informal settings"], correctAnswer: 1, explanation: "" },
    { question: "Which demographic factor is NOT typically considered in sociolinguistic studies?", options: ["Geographic region", "Social class", "Hair color", "Age"], correctAnswer: 2, explanation: "" },
    { question: "What is a speech community?", options: ["A group of people who speak the same language", "A group of people who share linguistic norms and rules", "A group of professional speakers", "A group of language teachers"], correctAnswer: 1, explanation: "" }
  ];

  const module2Quiz = [
    { question: "What is status planning in language planning?", options: ["Standardizing the language structure", "Determining the functions and prestige of a language", "Teaching the language to children", "Translating literature"], correctAnswer: 1, explanation: "" },
    { question: "What is language endangerment?", options: ["When a language is difficult to learn", "When a language is at risk of falling out of use", "When a language has many rules", "When a language is changing rapidly"], correctAnswer: 1, explanation: "" },
    { question: "What is the Communicative Language Teaching approach?", options: ["Focus on grammar rules", "Focus on meaningful communication in the target language", "Focus on translation", "Focus on rote memorization"], correctAnswer: 1, explanation: "" },
    { question: "What is language loyalty in sociolinguistics?", options: ["Faithfulness to grammar rules", "Attachment to a heritage language despite pressure to shift", "Love for all languages", "Loyalty to language teachers"], correctAnswer: 1, explanation: "" },
    { question: "What is subtractive bilingualism?", options: ["Learning two languages simultaneously", "Gaining a second language at the cost of losing the first", "Learning languages through subtraction", "Learning math in a second language"], correctAnswer: 1, explanation: "" }
  ];

  const module3Quiz = [
    { question: "What is the difference between code-switching and code-mixing?", options: ["Code-switching happens between sentences, code-mixing within sentences", "Code-switching is conscious, code-mixing is unconscious", "They are the same thing", "Code-switching is formal, code-mixing is informal"], correctAnswer: 0, explanation: "" },
    { question: "What is ethnography of communication?", options: ["The study of communication in its cultural context", "The study of communication technology", "The study of animal communication", "The study of written communication"], correctAnswer: 0, explanation: "" },
    { question: "What is Critical Discourse Analysis?", options: ["Analyzing grammar mistakes", "Examining how discourse structures and ideologies shape social reality", "Studying sentence structure", "Transcribing conversations"], correctAnswer: 1, explanation: "" },
    { question: "What is the difference between a pidgin and a creole?", options: ["There is no difference", "A pidgin is simplified, a creole is complex", "A creole is a native language, a pidgin is not", "A pidgin develops from language contact, a creole is inherited"], correctAnswer: 2, explanation: "" },
    { question: "What is the focus of applied linguistics?", options: ["Theoretical language study", "Solving real-world language-related problems", "Historical language study", "Language documentation"], correctAnswer: 1, explanation: "" }
  ];

  const module4Quiz = [
    { question: "What is Natural Language Processing (NLP)?", options: ["Processing natural foods", "Computer processing and analysis of human language", "Natural ways of learning language", "Processing language naturally without technology"], correctAnswer: 1, explanation: "" },
    { question: "What is machine translation?", options: ["Translation done by machines in factories", "Automatic translation of text from one language to another by computers", "Translation of technical manuals", "Mechanical writing"], correctAnswer: 1, explanation: "" },
    { question: "What is a speech recognition system?", options: ["A system that recognizes famous speeches", "Technology that converts spoken language into text", "A system for recognizing speech patterns", "A method for teaching speech"], correctAnswer: 1, explanation: "" },
    { question: "What is corpus linguistics?", options: ["Study of dead languages", "Study of language using large collections of texts", "Study of body language", "Study of corporate language"], correctAnswer: 1, explanation: "" },
    { question: "What is language documentation in the digital age?", options: ["Printing language textbooks", "Using digital tools to record and preserve endangered languages", "Creating language certificates", "Writing language reports"], correctAnswer: 1, explanation: "" }
  ];

  const unitQuiz = [
    { question: "What is the primary focus of sociolinguistics?", options: ["The study of language structure", "The study of the relationship between language and society", "The study of language acquisition", "The study of language change over time"], correctAnswer: 1, explanation: "" },
    { question: "What is code-switching?", options: ["Changing the subject of conversation", "Alternating between different languages or varieties within a conversation", "Correcting grammatical errors", "Using formal language in informal settings"], correctAnswer: 1, explanation: "" },
    { question: "What is status planning in language planning?", options: ["Standardizing the language structure", "Determining the functions and prestige of a language", "Teaching the language to children", "Translating literature"], correctAnswer: 1, explanation: "" },
    { question: "What is language endangerment?", options: ["When a language is difficult to learn", "When a language is at risk of falling out of use", "When a language has many rules", "When a language is changing rapidly"], correctAnswer: 1, explanation: "" },
    { question: "What is Critical Discourse Analysis?", options: ["Analyzing grammar mistakes", "Examining how discourse structures and ideologies shape social reality", "Studying sentence structure", "Transcribing conversations"], correctAnswer: 1, explanation: "" },
    { question: "What is the difference between a pidgin and a creole?", options: ["There is no difference", "A pidgin is simplified, a creole is complex", "A creole is a native language, a pidgin is not", "A pidgin develops from language contact, a creole is inherited"], correctAnswer: 2, explanation: "" },
    { question: "What is Natural Language Processing (NLP)?", options: ["Processing natural foods", "Computer processing and analysis of human language", "Natural ways of learning language", "Processing language naturally without technology"], correctAnswer: 1, explanation: "" },
    { question: "What is machine translation?", options: ["Translation done by machines in factories", "Automatic translation of text from one language to another by computers", "Translation of technical manuals", "Mechanical writing"], correctAnswer: 1, explanation: "" },
    { question: "What is subtractive bilingualism?", options: ["Learning two languages simultaneously", "Gaining a second language at the cost of losing the first", "Learning languages through subtraction", "Learning math in a second language"], correctAnswer: 1, explanation: "" },
    { question: "What is corpus linguistics?", options: ["Study of dead languages", "Study of language using large collections of texts", "Study of body language", "Study of corporate language"], correctAnswer: 1, explanation: "" }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.1</div>
              <div className="lesson-title-main">
                <h1>Sociolinguistics and Language Variation</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language Meets Society!</h3>
              <p>Have you ever noticed that you speak differently with your friends than with your professors? Or that people from different regions have different accents? That's sociolinguistics in action!</p>
              
              <p>Sociolinguistics studies the fascinating relationship between language and society - how social factors like age, gender, class, and region influence the way we speak.</p>
              
              
                <iframe width="560" height="315" src="https://www.youtube.com/embed/of4XzrbkknM?si=IPi2K2yORkjzczbU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
             

              <h4>What is Sociolinguistics?</h4>
              <p>Sociolinguistics examines how language varies and changes in social contexts. It answers questions like:</p>
              
              <ul>
                <li>Why do people from different regions speak differently?</li>
                <li>How does your social class affect your language?</li>
                <li>Why do men and women sometimes use language differently?</li>
                <li>How do bilingual speakers switch between languages?</li>
                <li>What makes a language "standard" or "non-standard"?</li>
              </ul>

              <h4>Language Variation - Why We All Speak Differently</h4>
              
              <h5>Types of Language Variation</h5>
              
              <div className="example-box">
                <h5>1. Regional Variation (Dialects)</h5>
                <p>Different geographic areas have different ways of speaking:</p>
                <ul>
                  <li><strong>American English:</strong> "I'm gonna go to the store"</li>
                  <li><strong>British English:</strong> "I'm going to the shop"</li>
                  <li><strong>Indian English:</strong> "I'm going to the shop only"</li>
                  <li><strong>Same language, different flavors!</strong></li>
                </ul>
              </div>

              <div className="example-box">
                <h5>2. Social Variation (Sociolects)</h5>
                <p>Your social group affects how you speak:</p>
                <ul>
                  <li><strong>Working class:</strong> Might use more vernacular forms</li>
                  <li><strong>Upper class:</strong> Might use more standard forms</li>
                  <li><strong>Youth:</strong> Use current slang ("That's fire!", "No cap")</li>
                  <li><strong>Older generation:</strong> Use older expressions ("That's groovy!")</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>3. Stylistic Variation (Registers)</h5>
                <p>You change your language based on the situation:</p>
                <ul>
                  <li><strong>Formal (job interview):</strong> "I would be delighted to join your organization"</li>
                  <li><strong>Casual (friends):</strong> "Yeah, I'd love to work there!"</li>
                  <li><strong>Intimate (family):</strong> "Gonna take that job!"</li>
                </ul>
              </div>

              <h4>Social Factors Affecting Language</h4>
              
              <h5>1. Geographic Region</h5>
              <ul>
                <li><strong>Accent:</strong> How you pronounce words</li>
                <li><strong>Vocabulary:</strong> "Soda" vs "pop" vs "coke" (all mean soft drink!)</li>
                <li><strong>Grammar:</strong> "You guys" vs "Y'all" vs "Yinz"</li>
              </ul>

              <h5>2. Social Class</h5>
              <ul>
                <li><strong>Pronunciation:</strong> Dropping 'h' sounds, 'g' in -ing</li>
                <li><strong>Vocabulary:</strong> Formal vs informal words</li>
                <li><strong>Grammar:</strong> "I don't have any" vs "I ain't got none"</li>
                <li><strong>Both are systematic, neither is "wrong"!</strong></li>
              </ul>

              <h5>3. Age</h5>
              <ul>
                <li><strong>Teenagers:</strong> Create and use new slang constantly</li>
                <li><strong>Adults:</strong> More conservative language use</li>
                <li><strong>Elderly:</strong> May use older forms that sound "outdated"</li>
                <li><strong>Example:</strong> "Cool" (1950s) → "Rad" (1980s) → "Lit" (2010s) → "Fire" (2020s)</li>
              </ul>

              <h5>4. Gender</h5>
              <ul>
                <li><strong>Stereotypes exist:</strong> But individual variation is huge!</li>
                <li><strong>Research shows:</strong> Women often use more standard forms in formal contexts</li>
                <li><strong>Men might:</strong> Use more vernacular forms to show solidarity</li>
                <li><strong>Important:</strong> These are tendencies, not rules!</li>
              </ul>

              <h5>5. Ethnicity</h5>
              <ul>
                <li><strong>Ethnic dialects:</strong> African American Vernacular English (AAVE), Chicano English</li>
                <li><strong>Systematic grammar:</strong> Not "broken" English, but rule-governed varieties</li>
                <li><strong>Identity marker:</strong> Shows group membership and pride</li>
              </ul>

              <h4>Speech Communities</h4>
              <p>A speech community is a group of people who share linguistic norms and rules for using language.</p>
              
              <ul>
                <li><strong>Not just location:</strong> Can be based on profession, hobby, identity</li>
                <li><strong>Examples:</strong> Doctors, gamers, skaters, lawyers</li>
                <li><strong>Shared norms:</strong> How to speak, what's appropriate, special vocabulary</li>
                <li><strong>Membership:</strong> Shown through language use</li>
              </ul>

              <h4>Standard vs. Non-Standard Language</h4>
              
              <h5>Standard Language</h5>
              <ul>
                <li><strong>What it is:</strong> The variety considered "correct" or "proper"</li>
                <li><strong>Used in:</strong> Education, government, media, formal writing</li>
                <li><strong>Has prestige:</strong> Associated with power and education</li>
                <li><strong>Important:</strong> It's a social construct, not linguistically superior!</li>
              </ul>

              <h5>Non-Standard/Vernacular Varieties</h5>
              <ul>
                <li><strong>What they are:</strong> Regional or social dialects</li>
                <li><strong>Equally complex:</strong> Have systematic grammar rules</li>
                <li><strong>Stigmatized:</strong> Often unfairly considered "incorrect"</li>
                <li><strong>Identity:</strong> Important for community and cultural identity</li>
              </ul>

              <h4>Code-Switching - Language Gymnastics!</h4>
              <p>Code-switching is alternating between different languages or varieties in a single conversation.</p>
              
              <div className="example-box">
                <h5>Examples of Code-Switching</h5>
                <ul>
                  <li><strong>Spanish-English:</strong> "Voy a ir al store porque necesito milk" (I'm going to the store because I need milk)</li>
                  <li><strong>Formal-Informal:</strong> "The meeting was productive [formal], but man, it was boring [informal]"</li>
                  <li><strong>Standard-Dialect:</strong> Switching between standard English and AAVE</li>
                </ul>
              </div>

              <h5>Why Do People Code-Switch?</h5>
              <ul>
                <li><strong>Fill lexical gaps:</strong> Word exists in one language but not the other</li>
                <li><strong>Express identity:</strong> Show membership in multiple communities</li>
                <li><strong>Emphasize a point:</strong> Switch for dramatic effect</li>
                <li><strong>Accommodate audience:</strong> Match the language of your listener</li>
                <li><strong>Quote someone:</strong> Use their language/dialect</li>
              </ul>

              <h5>Code-Switching vs. Code-Mixing</h5>
              <ul>
                <li><strong>Code-switching:</strong> Alternating between sentences or clauses</li>
                <li><strong>Code-mixing:</strong> Mixing within a single sentence or phrase</li>
                <li><strong>Both are skilled:</strong> Require knowledge of both codes!</li>
              </ul>

              <h4>Language Attitudes and Ideologies</h4>
              <p>People have strong feelings about language!</p>
              
              <ul>
                <li><strong>Prescriptivism:</strong> "There's only one correct way to speak"</li>
                <li><strong>Descriptivism:</strong> "All varieties are valid; let's describe how people actually speak"</li>
                <li><strong>Language prejudice:</strong> Judging people by how they speak</li>
                <li><strong>Linguistic discrimination:</strong> Denying opportunities based on language variety</li>
              </ul>

              <div className="example-box">
                <h5>Try It Yourself!</h5>
                <p>Observe your own language variation:</p>
                <ul>
                  <li>How do you speak differently with friends vs. professors?</li>
                  <li>What slang do you use that your parents don't understand?</li>
                  <li>Do you code-switch? When and why?</li>
                  <li>What accent or dialect features do you have from your region?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 4.1 Quiz" questions={module1Quiz} subject="LS" unitId={4} moduleId={1} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/resource/sociolinguistics" target="_blank" rel="noopener noreferrer">Linguistic Society - Sociolinguistics</a></li>
                <li><a href="https://www.britannica.com/science/sociolinguistics" target="_blank" rel="noopener noreferrer">Encyclopedia Britannica - Sociolinguistics</a></li>
                <li><a href="https://www.thoughtco.com/sociolinguistics-1692116" target="_blank" rel="noopener noreferrer">Introduction to Sociolinguistics</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={onBack} className="prev-module-btn">← Back to Overview</button>
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Language Policy →</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.2</div>
              <div className="lesson-title-main">
                <h1>Language Policy and Planning</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Who Decides How We Should Speak?</h3>
              <p>Should English be the official language? Should schools teach in minority languages? How do we save endangered languages? These are questions of language policy and planning!</p>
              
             
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mvkRT0_Un_4?si=Ykwfz6ppnjCJ65Xd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
              

              <h4>Language Planning - Three Types</h4>
              
              <div className="example-box">
                <h5>1. Status Planning</h5>
                <ul>
                  <li><strong>Official language:</strong> Making a language official (e.g., Hindi and English in India)</li>
                  <li><strong>National language:</strong> Symbol of national identity</li>
                  <li><strong>Example:</strong> After independence, many African countries chose between colonial and indigenous languages</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>2. Corpus Planning</h5>
                <ul>
                  <li><strong>Standardization:</strong> Creating standard spelling, grammar</li>
                  <li><strong>Modernization:</strong> Creating new words for modern concepts</li>
                  <li><strong>Example:</strong> Hebrew was revived and modernized for modern Israel</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>3. Acquisition Planning</h5>
                <ul>
                  <li><strong>Education:</strong> Teaching language in schools</li>
                  <li><strong>Literacy programs:</strong> Teaching reading and writing</li>
                  <li><strong>Example:</strong> French immersion programs in Canada</li>
                </ul>
              </div>

              <h4>Language Endangerment</h4>
              <ul>
                <li><strong>Crisis:</strong> A language dies every 2 weeks</li>
                <li><strong>At risk:</strong> About 40% of 7,000 world languages</li>
                <li><strong>Causes:</strong> Globalization, urbanization, economic pressure</li>
              </ul>

              <h5>Revitalization Success Stories</h5>
              <div className="example-box">
                <h5>Hebrew</h5>
                <ul>
                  <li>Was dead for 2,000 years</li>
                  <li>Revived in late 1800s/early 1900s</li>
                  <li>Now native language of millions in Israel</li>
                </ul>
              </div>

              <h4>Applied Linguistics</h4>
              <ul>
                <li><strong>Language teaching:</strong> How to teach effectively</li>
                <li><strong>Language testing:</strong> TOEFL, IELTS assessment</li>
                <li><strong>Translation:</strong> Accurate and natural translation</li>
                <li><strong>Speech therapy:</strong> Helping with language disorders</li>
              </ul>

              <div className="example-box">
                <h5>Communicative Language Teaching (CLT)</h5>
                <ul>
                  <li><strong>Focus:</strong> Real communication, not just grammar</li>
                  <li><strong>Activities:</strong> Role-plays, discussions</li>
                  <li><strong>Goal:</strong> Fluency in real situations</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 4.2 Quiz" questions={module2Quiz} subject="LS" unitId={4} moduleId={2} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/resource/language-policy" target="_blank" rel="noopener noreferrer">Linguistic Society - Language Policy</a></li>
                <li><a href="https://www.endangeredlanguages.com/" target="_blank" rel="noopener noreferrer">Endangered Languages Project</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Sociolinguistics</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Language & Identity →</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.3</div>
              <div className="lesson-title-main">
                <h1>Language and Identity</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language is Who You Are!</h3>
              <p>Your language isn't just how you communicate - it's part of your identity! The way you speak tells others where you're from, what groups you belong to, and who you are.</p>
              
              
                <iframe width="560" height="315" src="https://www.youtube.com/embed/SP0bAQ8J6C0?si=6ObEuNBrb6pb-WpG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
              

              <h4>Language as Identity Marker</h4>
              <ul>
                <li><strong>Regional identity:</strong> Your accent shows where you're from</li>
                <li><strong>Social identity:</strong> Your language shows your social group</li>
                <li><strong>Ethnic identity:</strong> Heritage language connects you to culture</li>
                <li><strong>Professional identity:</strong> Jargon shows your profession</li>
              </ul>

              <h4>Multilingualism and Identity</h4>
              <div className="example-box">
                <h5>Types of Bilingualism</h5>
                <ul>
                  <li><strong>Additive:</strong> Adding L2 while maintaining L1</li>
                  <li><strong>Subtractive:</strong> Gaining L2 at cost of losing L1</li>
                  <li><strong>Balanced:</strong> Equal proficiency in both</li>
                </ul>
              </div>

              <h4>Discourse Analysis</h4>
              <p>How language constructs social meaning and identity.</p>
              <ul>
                <li><strong>Critical Discourse Analysis:</strong> How discourse shapes social reality</li>
                <li><strong>Conversation Analysis:</strong> Patterns in everyday talk</li>
                <li><strong>Narrative Analysis:</strong> How people tell their stories</li>
              </ul>

              <h4>Ethnography of Communication</h4>
              <ul>
                <li><strong>Focus:</strong> Communication in cultural context</li>
                <li><strong>Studies:</strong> How different cultures use language</li>
                <li><strong>Example:</strong> Politeness varies across cultures</li>
              </ul>
            </section>

            <Quiz title="Module 4.3 Quiz" questions={module3Quiz} subject="LS" unitId={4} moduleId={3} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/resource/language-and-identity" target="_blank" rel="noopener noreferrer">Language and Identity</a></li>
                <li><a href="https://www.thoughtco.com/discourse-analysis-1690462" target="_blank" rel="noopener noreferrer">Discourse Analysis</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Language Policy</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Language & Technology →</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.4</div>
              <div className="lesson-title-main">
                <h1>Language and Technology</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language in the Digital Age!</h3>
              <p>From Siri to Google Translate, technology is transforming how we use and study language. Welcome to computational linguistics!</p>
              
             
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CPfU5XSIzmc?si=b-mkpS6D0yeiM8jp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
              

              <h4>Natural Language Processing (NLP)</h4>
              <p>Teaching computers to understand and process human language.</p>
              
              <div className="example-box">
                <h5>NLP Applications</h5>
                <ul>
                  <li><strong>Machine Translation:</strong> Google Translate, DeepL</li>
                  <li><strong>Speech Recognition:</strong> Siri, Alexa, Google Assistant</li>
                  <li><strong>Text-to-Speech:</strong> Screen readers, GPS navigation</li>
                  <li><strong>Sentiment Analysis:</strong> Analyzing opinions in reviews</li>
                  <li><strong>Chatbots:</strong> Customer service automation</li>
                </ul>
              </div>

              <h4>Machine Translation</h4>
              <ul>
                <li><strong>Rule-based:</strong> Using grammar rules (older method)</li>
                <li><strong>Statistical:</strong> Learning from parallel texts</li>
                <li><strong>Neural:</strong> Deep learning (current state-of-art)</li>
                <li><strong>Challenges:</strong> Idioms, context, cultural nuances</li>
              </ul>

              <h4>Speech Technology</h4>
              <div className="example-box">
                <h5>Speech Recognition</h5>
                <ul>
                  <li><strong>Converts:</strong> Spoken language to text</li>
                  <li><strong>Uses:</strong> Voice assistants, dictation, accessibility</li>
                  <li><strong>Challenges:</strong> Accents, background noise, homophones</li>
                </ul>
              </div>

              <h4>Corpus Linguistics</h4>
              <ul>
                <li><strong>What it is:</strong> Studying language using large text collections</li>
                <li><strong>Corpora:</strong> British National Corpus, Google Books</li>
                <li><strong>Applications:</strong> Dictionary making, language teaching, research</li>
              </ul>

              <h4>Language Documentation</h4>
              <ul>
                <li><strong>Digital tools:</strong> Recording and preserving endangered languages</li>
                <li><strong>Online archives:</strong> Making languages accessible worldwide</li>
                <li><strong>Apps:</strong> Language learning and revitalization</li>
              </ul>

              <h4>Social Media and Language</h4>
              <ul>
                <li><strong>New forms:</strong> Emojis, hashtags, internet slang</li>
                <li><strong>Language change:</strong> Accelerated by online communication</li>
                <li><strong>Global English:</strong> Emergence of internet English varieties</li>
              </ul>

              <div className="example-box">
                <h5>Try It Yourself!</h5>
                <ul>
                  <li>Test Google Translate with idioms - does it work?</li>
                  <li>Try voice recognition with different accents</li>
                  <li>Analyze your own text messages - what linguistic features do you use?</li>
                </ul>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Language & Identity</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Unit 4 Quiz →</button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.5</div>
              <div className="lesson-title-main">
                <h1>Unit 4 Comprehensive Assessment</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Test Your Knowledge of Unit 4</h3>
              <p>This comprehensive quiz covers all topics from Unit 4: Sociolinguistics. It includes questions from:</p>
              <ul>
                <li><strong>Module 4.1:</strong> Sociolinguistics and Language Variation</li>
                <li><strong>Module 4.2:</strong> Language Policy and Planning</li>
                <li><strong>Module 4.3:</strong> Language and Identity</li>
                <li><strong>Module 4.4:</strong> Language and Technology</li>
              </ul>
              <p>Take your time and demonstrate your understanding of sociolinguistics and applied linguistics!</p>
            </section>

            <Quiz title="Unit 4 Comprehensive Quiz" questions={unitQuiz} subject="LS" unitId={4} moduleId={5} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.linguisticsociety.org/resource/computational-linguistics" target="_blank" rel="noopener noreferrer">Computational Linguistics</a></li>
                <li><a href="https://www.nltk.org/" target="_blank" rel="noopener noreferrer">Natural Language Toolkit</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Language & Technology</button>
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

export default Unit4;



