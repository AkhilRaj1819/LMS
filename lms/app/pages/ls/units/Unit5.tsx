'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit5: React.FC<Unit5Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const module1Quiz = [
    { question: "What is the Sapir-Whorf hypothesis primarily concerned with?", options: ["The relationship between language and thought", "The origin of human language", "The structure of sentences", "The evolution of language"], correctAnswer: 0 },
    { question: "What does the term 'linguistic relativity' refer to?", options: ["The idea that language shapes thought and perception", "The study of language change over time", "The comparison of different languages", "The relationship between syntax and semantics"], correctAnswer: 0 },
    { question: "What is linguistic determinism?", options: ["The idea that thought determines language", "The idea that language determines thought", "The process of language learning", "The evolution of language structure"], correctAnswer: 1 },
    { question: "Which of the following is an example of cultural transmission through language?", options: ["Learning grammar rules", "Passing down stories and traditions", "Pronunciation practice", "Vocabulary memorization"], correctAnswer: 1 },
    { question: "What are taboo expressions in language?", options: ["Technical terms", "Words or topics avoided in certain cultural contexts", "Foreign words", "Archaic language forms"], correctAnswer: 1 }
  ];

  const module2Quiz = [
    { question: "Which of the following is an example of gendered language use?", options: ["Using different registers in formal vs informal contexts", "Differences in speech patterns between men and women", "Using different languages in multilingual communities", "Regional dialect variations"], correctAnswer: 1 },
    { question: "What does 'performative gender' mean in linguistics?", options: ["Acting in plays", "Gender is constructed through repeated language use", "Performing well in language tests", "Gender-specific vocabulary"], correctAnswer: 1 },
    { question: "What is indexicality in relation to gender?", options: ["Alphabetical ordering", "Linguistic forms that signal social meanings like gender", "Grammar rules", "Pronunciation guides"], correctAnswer: 1 },
    { question: "What is a common finding about conversational styles and gender?", options: ["No differences exist", "Men tend to interrupt more in mixed-gender conversations", "Women never use formal language", "Gender has no effect on language"], correctAnswer: 1 },
    { question: "What is non-binary language use?", options: ["Using only two languages", "Language that challenges traditional gender categories", "Binary code in computers", "Using yes/no questions"], correctAnswer: 1 }
  ];

  const module3Quiz = [
    { question: "What is 'language ideology'?", options: ["Political views on language policy", "Beliefs and attitudes about language varieties and their speakers", "A method of language teaching", "The study of language change"], correctAnswer: 1 },
    { question: "What does 'discourse and dominance' refer to?", options: ["Speaking loudly", "How powerful groups use language to maintain control", "Dominating conversations", "Public speaking skills"], correctAnswer: 1 },
    { question: "What is 'gatekeeping' in language?", options: ["Guarding gates", "Controlling access to opportunities through language requirements", "Language barriers", "Grammar rules"], correctAnswer: 1 },
    { question: "What is 'counter-discourse'?", options: ["Counting words", "Language used to resist dominant ideologies", "Opposite meanings", "Reverse translation"], correctAnswer: 1 },
    { question: "What is language revitalization?", options: ["Making language more vital", "Efforts to restore endangered languages to active use", "Language exercises", "Vocabulary expansion"], correctAnswer: 1 }
  ];

  const module4Quiz = [
    { question: "What is 'code-switching' in global contexts?", options: ["Changing the subject", "Alternating between different languages or varieties within a conversation", "Switching codes", "Programming languages"], correctAnswer: 1 },
    { question: "What is 'linguistic landscape'?", options: ["The geographical distribution of languages", "The visibility and salience of languages on public signs in a given territory", "The structure of language families", "The evolution of language over time"], correctAnswer: 1 },
    { question: "What are 'World Englishes'?", options: ["English spoken worldwide", "Varieties of English that have developed in different regions", "International English standards", "English textbooks"], correctAnswer: 1 },
    { question: "What is language endangerment in globalization?", options: ["Dangerous languages", "Languages at risk of disappearing due to global pressures", "Difficult languages", "Language complexity"], correctAnswer: 1 },
    { question: "What is English as a lingua franca?", options: ["English in France", "English used as a common language between speakers of different native languages", "British English", "American English"], correctAnswer: 1 }
  ];

  const module5Quiz = [
    { question: "What is 'ethnographic research' in linguistics?", options: ["Studying ethnic groups", "Observing language use in natural cultural contexts", "Laboratory experiments", "Grammar analysis"], correctAnswer: 1 },
    { question: "What is 'corpus linguistics'?", options: ["Study of dead languages", "Study of language using large collections of texts", "Study of body language", "Study of corporate language"], correctAnswer: 1 },
    { question: "What is 'discourse analysis'?", options: ["Analyzing grammar mistakes", "Studying language use beyond the sentence level", "Speech therapy", "Pronunciation practice"], correctAnswer: 1 },
    { question: "What is the Universal Grammar debate about?", options: ["Creating a universal language", "Whether humans have innate language knowledge", "Grammar rules for all languages", "International grammar standards"], correctAnswer: 1 },
    { question: "What are neurolinguistic methods?", options: ["Studying neurons", "Using brain imaging to study language processing", "Nerve studies", "Medical linguistics"], correctAnswer: 1 }
  ];

  const unitQuiz = [
    { question: "What is the Sapir-Whorf hypothesis primarily concerned with?", options: ["The relationship between language and thought", "The origin of human language", "The structure of sentences", "The evolution of language"], correctAnswer: 0 },
    { question: "What does 'linguistic relativity' refer to?", options: ["The idea that language shapes thought and perception", "The study of language change over time", "The comparison of different languages", "The relationship between syntax and semantics"], correctAnswer: 0 },
    { question: "What is 'performative gender' in linguistics?", options: ["Acting in plays", "Gender is constructed through repeated language use", "Performing well in language tests", "Gender-specific vocabulary"], correctAnswer: 1 },
    { question: "What is 'language ideology'?", options: ["Political views on language policy", "Beliefs and attitudes about language varieties and their speakers", "A method of language teaching", "The study of language change"], correctAnswer: 1 },
    { question: "What does 'discourse and dominance' refer to?", options: ["Speaking loudly", "How powerful groups use language to maintain control", "Dominating conversations", "Public speaking skills"], correctAnswer: 1 },
    { question: "What is English as a lingua franca?", options: ["English in France", "English used as a common language between speakers of different native languages", "British English", "American English"], correctAnswer: 1 },
    { question: "What are 'World Englishes'?", options: ["English spoken worldwide", "Varieties of English that have developed in different regions", "International English standards", "English textbooks"], correctAnswer: 1 },
    { question: "What is 'corpus linguistics'?", options: ["Study of dead languages", "Study of language using large collections of texts", "Study of body language", "Study of corporate language"], correctAnswer: 1 },
    { question: "What is 'ethnographic research' in linguistics?", options: ["Studying ethnic groups", "Observing language use in natural cultural contexts", "Laboratory experiments", "Grammar analysis"], correctAnswer: 1 },
    { question: "What is the Universal Grammar debate about?", options: ["Creating a universal language", "Whether humans have innate language knowledge", "Grammar rules for all languages", "International grammar standards"], correctAnswer: 1 }
  ];

  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.1</div>
              <div className="lesson-title-main">
                <h1>Language and Culture</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language: The Mirror of Culture</h3>
              <p>Ever wondered why some languages have dozens of words for snow, while others have just one? Or why certain concepts exist in one language but not another? Welcome to the fascinating world of language and culture!</p>
              
              <p>Language and culture are inseparable - language reflects cultural values, transmits cultural knowledge, and even shapes how we think about the world.</p>

           
                <iframe width="560" height="315" src="https://www.youtube.com/embed/PAhZLMEY4TU?si=NYKdTH6O9Yq_Xi8m" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
          

              <h4>Understanding Language-Culture Relationships</h4>
              <p>Language and culture are intimately connected in multiple ways:</p>
              
              <ul>
                <li><strong>Language as cultural vehicle:</strong> Transmits cultural knowledge across generations</li>
                <li><strong>Culture shapes language:</strong> Cultural needs create linguistic structures</li>
                <li><strong>Language shapes thought:</strong> May influence how we perceive reality</li>
                <li><strong>Identity marker:</strong> Language signals cultural membership</li>
              </ul>

              <h4>Cultural Aspects of Language</h4>
              
              <h5>1. Language as Cultural Transmission</h5>
              <div className="example-box">
                <p>Language is the primary way cultures pass down knowledge, values, and traditions:</p>
                <ul>
                  <li><strong>Oral traditions:</strong> Stories, myths, legends passed through generations</li>
                  <li><strong>Proverbs:</strong> "A stitch in time saves nine" (English - value of prevention)</li>
                  <li><strong>Idioms:</strong> "It's raining cats and dogs" (cultural-specific expressions)</li>
                  <li><strong>Rituals:</strong> Wedding vows, religious ceremonies use special language</li>
                </ul>
              </div>

              <h5>2. Worldview and Linguistic Relativity</h5>
              <p>Does the language you speak affect how you think? This is the core question of linguistic relativity!</p>
              
              <div className="example-box">
                <h5>The Sapir-Whorf Hypothesis</h5>
                <p>Proposed by Edward Sapir and Benjamin Lee Whorf, this hypothesis has two versions:</p>
                
                <h6>Strong Version (Linguistic Determinism)</h6>
                <ul>
                  <li><strong>Claim:</strong> Language determines thought completely</li>
                  <li><strong>Example:</strong> If your language has no word for "blue," you can't perceive blue</li>
                  <li><strong>Status:</strong> Largely rejected - too extreme</li>
                </ul>

                <h6>Weak Version (Linguistic Relativity)</h6>
                <ul>
                  <li><strong>Claim:</strong> Language influences thought and perception</li>
                  <li><strong>Example:</strong> Your language affects how easily you think about certain concepts</li>
                  <li><strong>Status:</strong> Supported by research - more accepted</li>
                </ul>
              </div>

              <h5>Evidence for Linguistic Relativity</h5>
              
              <div className="example-box">
                <h6>Color Perception Studies</h6>
                <ul>
                  <li><strong>Russian:</strong> Has separate words for light blue (goluboy) and dark blue (siniy)</li>
                  <li><strong>Finding:</strong> Russian speakers distinguish these shades faster than English speakers</li>
                  <li><strong>Implication:</strong> Language categories affect perception speed</li>
                </ul>
              </div>

              <div className="example-box">
                <h6>Spatial Concepts</h6>
                <ul>
                  <li><strong>English:</strong> Uses egocentric terms (left, right, front, back)</li>
                  <li><strong>Guugu Yimithirr (Australian):</strong> Uses cardinal directions (north, south, east, west)</li>
                  <li><strong>Example:</strong> "The cup is north of the plate" instead of "to the left of"</li>
                  <li><strong>Result:</strong> Guugu Yimithirr speakers have exceptional orientation skills</li>
                </ul>
              </div>

              <div className="example-box">
                <h6>Time Concepts</h6>
                <ul>
                  <li><strong>English:</strong> Time flows horizontally (past behind, future ahead)</li>
                  <li><strong>Mandarin:</strong> Also uses vertical metaphors (past above, future below)</li>
                  <li><strong>Aymara (Andes):</strong> Past is in front (visible), future behind (unknown)</li>
                  <li><strong>Impact:</strong> Affects how speakers gesture and think about time</li>
                </ul>
              </div>

              <h5>3. Cultural Values Embedded in Language</h5>
              
              <div className="example-box">
                <h6>Lexical Specialization</h6>
                <p>Cultures develop rich vocabulary for important concepts:</p>
                <ul>
                  <li><strong>Arabic:</strong> Hundreds of words for camels (cultural importance)</li>
                  <li><strong>Inuit:</strong> Multiple words for snow types (environmental necessity)</li>
                  <li><strong>English:</strong> Extensive technology vocabulary (cultural focus)</li>
                  <li><strong>Sanskrit:</strong> Rich philosophical and spiritual terminology</li>
                </ul>
              </div>

              <div className="example-box">
                <h6>Grammatical Encoding</h6>
                <p>Grammar can reflect cultural priorities:</p>
                <ul>
                  <li><strong>Japanese:</strong> Complex honorific system (respect hierarchy)</li>
                  <li><strong>Korean:</strong> Seven levels of politeness (social relationships)</li>
                  <li><strong>Turkish:</strong> Evidentiality markers (source of information)</li>
                  <li><strong>Hopi:</strong> No tense system like English (different time concept)</li>
                </ul>
              </div>

              <h5>4. Taboo and Euphemistic Expressions</h5>
              <p>Every culture has topics that are avoided or discussed indirectly:</p>
              
              <ul>
                <li><strong>Death:</strong> "Passed away," "departed," "no longer with us"</li>
                <li><strong>Body functions:</strong> "Restroom," "powder room" instead of "toilet"</li>
                <li><strong>Sex:</strong> Various euphemisms across cultures</li>
                <li><strong>Money:</strong> Some cultures avoid direct discussion</li>
                <li><strong>Names:</strong> Some cultures avoid saying names of deceased</li>
              </ul>

              <h5>5. Ritual and Ceremonial Language</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Religious:</strong> Latin in Catholic mass, Sanskrit in Hindu rituals</li>
                  <li><strong>Legal:</strong> "Objection, Your Honor!" - formal courtroom language</li>
                  <li><strong>Weddings:</strong> "I do" - performative speech acts</li>
                  <li><strong>Greetings:</strong> "Namaste" (India), "Salaam" (Arabic) - cultural meaning</li>
                </ul>
              </div>

              <h4>Linguistic Aspects of Culture</h4>

              <h5>Discourse Patterns Reflecting Cultural Norms</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Direct vs. Indirect:</strong> Western cultures more direct, Asian cultures more indirect</li>
                  <li><strong>Turn-taking:</strong> Some cultures allow overlap, others require silence</li>
                  <li><strong>Storytelling:</strong> Linear (Western) vs. circular (Native American)</li>
                  <li><strong>Argumentation:</strong> Confrontational (US) vs. harmony-seeking (Japan)</li>
                </ul>
              </div>

              <h5>Politeness Systems and Cultural Values</h5>
              <p>Politeness varies dramatically across cultures:</p>
              
              <ul>
                <li><strong>Positive politeness:</strong> Emphasizing closeness (solidarity)</li>
                <li><strong>Negative politeness:</strong> Respecting distance (deference)</li>
                <li><strong>Japanese:</strong> Elaborate honorific system</li>
                <li><strong>English:</strong> "Please," "thank you," indirect requests</li>
                <li><strong>German:</strong> Formal "Sie" vs. informal "du"</li>
              </ul>

              <h5>Language and Cultural Identity</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Heritage language:</strong> Connects to ancestral culture</li>
                  <li><strong>Language loss:</strong> Can mean cultural identity loss</li>
                  <li><strong>Language revival:</strong> Hebrew, Māori, Welsh - reclaiming identity</li>
                  <li><strong>Code-switching:</strong> Navigating multiple cultural identities</li>
                </ul>
              </div>

              <h4>Other Theoretical Approaches</h4>

              <h5>Anthropological Linguistics</h5>
              <ul>
                <li><strong>Focus:</strong> Language in cultural context</li>
                <li><strong>Methods:</strong> Ethnographic fieldwork</li>
                <li><strong>Studies:</strong> How language reflects and shapes culture</li>
              </ul>

              <h5>Ethnolinguistics</h5>
              <ul>
                <li><strong>Focus:</strong> Relationship between language and ethnic groups</li>
                <li><strong>Studies:</strong> Cultural concepts encoded in language</li>
                <li><strong>Example:</strong> How different cultures categorize nature</li>
              </ul>

              <h5>Sociocultural Theory</h5>
              <ul>
                <li><strong>Vygotsky:</strong> Language as cultural tool for thinking</li>
                <li><strong>Social interaction:</strong> Language learned through cultural participation</li>
                <li><strong>Mediation:</strong> Language mediates between individual and culture</li>
              </ul>

              <div className="example-box">
                <h5>Real-World Examples</h5>
                <ul>
                  <li><strong>Eskimo-Aleut languages:</strong> Rich vocabulary for ice and snow conditions</li>
                  <li><strong>Pirahã (Amazon):</strong> No number words, no recursion - challenges universal grammar</li>
                  <li><strong>Dyirbal (Australia):</strong> Noun classes based on cultural beliefs</li>
                  <li><strong>Hopi:</strong> Time concepts different from European languages</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Think About It!</h5>
                <ul>
                  <li>What cultural values are reflected in your native language?</li>
                  <li>Are there concepts in your language that don't exist in English?</li>
                  <li>How does your language express politeness and respect?</li>
                  <li>What taboo topics exist in your culture, and how is language used around them?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 5.1 Quiz" questions={module1Quiz} />

            <div className="navigation-buttons">
              <button onClick={onBack} className="prev-module-btn">← Back to Overview</button>
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Language & Gender →</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.2</div>
              <div className="lesson-title-main">
                <h1>Language and Gender</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>How Gender Shapes Language (and Vice Versa!)</h3>
              <p>Do men and women speak differently? How does language construct gender identity? Can language be sexist? Let's explore the complex relationship between language and gender!</p>

             
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OPbMFt0sCbI?si=rAT2ScdAf2yR1eln" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
            

              <h4>Understanding Language-Gender Relationships</h4>
              <p>The relationship between language and gender involves:</p>
              <ul>
                <li><strong>Biological sex:</strong> Male, female, intersex</li>
                <li><strong>Social gender:</strong> Masculine, feminine, non-binary identities</li>
                <li><strong>Gender roles:</strong> Culturally expected behaviors</li>
                <li><strong>Gender expression:</strong> How gender is performed through language</li>
              </ul>

              <h4>Gender Differences in Language Use</h4>

              <h5>1. Vocabulary and Lexical Choices</h5>
              <div className="example-box">
                <p>Research has found some tendencies (but remember: these are generalizations, not rules!):</p>
                <ul>
                  <li><strong>Color terms:</strong> Women may use more specific color words (mauve, teal)</li>
                  <li><strong>Intensifiers:</strong> Women: "so beautiful," Men: "really cool"</li>
                  <li><strong>Adjectives:</strong> Women may use more evaluative adjectives (lovely, adorable)</li>
                  <li><strong>Swearing:</strong> Historically more associated with men, but changing</li>
                </ul>
              </div>

              <h5>2. Speech Patterns and Prosody</h5>
              <ul>
                <li><strong>Pitch:</strong> Women typically have higher pitch (biological), but range varies culturally</li>
                <li><strong>Intonation:</strong> Women may use more varied intonation patterns</li>
                <li><strong>Tag questions:</strong> "It's nice, isn't it?" - once thought more feminine</li>
                <li><strong>Hedges:</strong> "I think," "maybe," "sort of" - politeness strategies</li>
              </ul>

              <h5>3. Conversational Styles</h5>
              
              <div className="example-box">
                <h6>Deborah Tannen's Research</h6>
                <p>Linguist Deborah Tannen identified different conversational styles:</p>
                
                <ul>
                  <li><strong>Women's style (rapport-talk):</strong>
                    <ul>
                      <li>Focus on building connections</li>
                      <li>Collaborative conversation</li>
                      <li>Supportive responses</li>
                      <li>Sharing experiences</li>
                    </ul>
                  </li>
                  <li><strong>Men's style (report-talk):</strong>
                    <ul>
                      <li>Focus on information exchange</li>
                      <li>Competitive conversation</li>
                      <li>Problem-solving oriented</li>
                      <li>Establishing status</li>
                    </ul>
                  </li>
                </ul>
                <p><strong>Important:</strong> These are tendencies, not absolutes! Individual variation is huge.</p>
              </div>

              <h5>4. Interrupting and Overlapping</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Research finding:</strong> Men tend to interrupt women more in mixed-gender conversations</li>
                  <li><strong>Power dynamic:</strong> Interruption can signal dominance</li>
                  <li><strong>Cooperative overlap:</strong> Women may overlap to show support</li>
                  <li><strong>Context matters:</strong> Professional vs. casual settings differ</li>
                </ul>
              </div>

              <h5>5. Topic Preferences</h5>
              <ul>
                <li><strong>Stereotypical view:</strong> Women talk about people, men about things</li>
                <li><strong>Reality:</strong> Topics vary by context, interest, and individual</li>
                <li><strong>Research shows:</strong> Both genders discuss wide range of topics</li>
                <li><strong>Myth busted:</strong> Women don't talk more than men overall!</li>
              </ul>

              <h4>Gender Construction Through Language</h4>

              <h5>1. Performative Aspects of Gender</h5>
              <p>Judith Butler's theory: Gender is not something you are, but something you do!</p>
              
              <div className="example-box">
                <ul>
                  <li><strong>Gender performance:</strong> We "do" gender through repeated actions, including language</li>
                  <li><strong>Not fixed:</strong> Gender identity is fluid and constructed</li>
                  <li><strong>Language role:</strong> Speech is a key way we perform gender</li>
                  <li><strong>Example:</strong> Using "masculine" or "feminine" speech styles</li>
                </ul>
              </div>

              <h5>2. Indexicality of Gender Markers</h5>
              <p>Certain linguistic features index (signal) gender:</p>
              
              <ul>
                <li><strong>Phonetic features:</strong> Pitch, voice quality</li>
                <li><strong>Lexical choices:</strong> Word selection</li>
                <li><strong>Grammatical forms:</strong> In some languages, verb endings differ by speaker gender</li>
                <li><strong>Discourse patterns:</strong> Conversational style</li>
              </ul>

              <div className="example-box">
                <h6>Japanese Gender Markers</h6>
                <ul>
                  <li><strong>Women:</strong> Use "atashi" (I), sentence-final "wa," "no"</li>
                  <li><strong>Men:</strong> Use "ore" or "boku" (I), sentence-final "zo," "ze"</li>
                  <li><strong>Changing:</strong> Younger generations mixing these markers</li>
                </ul>
              </div>

              <h5>3. Gendered Speech Acts</h5>
              <ul>
                <li><strong>Compliments:</strong> Women give and receive more compliments</li>
                <li><strong>Apologies:</strong> Women may apologize more (politeness strategy)</li>
                <li><strong>Directives:</strong> Men may use more direct commands</li>
                <li><strong>Requests:</strong> Women may use more indirect forms</li>
              </ul>

              <h5>4. Gender Identity Expression</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Transgender individuals:</strong> May adopt speech patterns of identified gender</li>
                  <li><strong>Voice training:</strong> Changing pitch, resonance, intonation</li>
                  <li><strong>Lexical choices:</strong> Adopting gendered vocabulary</li>
                  <li><strong>Identity affirmation:</strong> Language as tool for gender expression</li>
                </ul>
              </div>

              <h5>5. Challenging Gender Norms</h5>
              <p>Language can reinforce or challenge gender stereotypes:</p>
              
              <ul>
                <li><strong>Gender-neutral language:</strong> "Firefighter" not "fireman"</li>
                <li><strong>Singular "they":</strong> Gender-neutral pronoun</li>
                <li><strong>Ms.:</strong> Title not indicating marital status</li>
                <li><strong>Challenging binaries:</strong> Recognizing non-binary identities</li>
              </ul>

              <h5>6. Non-Binary Language Use</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Pronouns:</strong> They/them, ze/zir, xe/xem</li>
                  <li><strong>Titles:</strong> Mx. instead of Mr./Ms.</li>
                  <li><strong>Terms:</strong> "Sibling" instead of brother/sister</li>
                  <li><strong>Challenge:</strong> Many languages have grammatical gender</li>
                </ul>
              </div>

              <h4>Sexism in Language</h4>

              <h5>Generic Masculine</h5>
              <ul>
                <li><strong>Problem:</strong> Using "he" or "man" to refer to all people</li>
                <li><strong>Example:</strong> "Each student should bring his book"</li>
                <li><strong>Solution:</strong> "Each student should bring their book"</li>
                <li><strong>Impact:</strong> Generic masculine makes women less visible</li>
              </ul>

              <h5>Semantic Derogation</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Pattern:</strong> Female terms acquire negative meanings</li>
                  <li><strong>Examples:</strong>
                    <ul>
                      <li>"Master" vs. "Mistress" (neutral vs. negative)</li>
                      <li>"Bachelor" vs. "Spinster" (positive vs. negative)</li>
                      <li>"Sir" vs. "Madam" (respect vs. brothel keeper)</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <h5>Marked vs. Unmarked Terms</h5>
              <ul>
                <li><strong>Unmarked (default):</strong> Doctor, poet, actor</li>
                <li><strong>Marked (specified):</strong> Female doctor, poetess, actress</li>
                <li><strong>Problem:</strong> Implies male is the norm</li>
                <li><strong>Change:</strong> Moving toward gender-neutral terms</li>
              </ul>

              <h4>Language Reform and Gender</h4>

              <div className="example-box">
                <h5>Strategies for Gender-Inclusive Language</h5>
                <ul>
                  <li><strong>Use plural:</strong> "Students should bring their books"</li>
                  <li><strong>Eliminate pronoun:</strong> "The student should bring a book"</li>
                  <li><strong>Use "they":</strong> Singular they is now widely accepted</li>
                  <li><strong>Alternate pronouns:</strong> Use he and she alternately</li>
                  <li><strong>Gender-neutral terms:</strong> Chair (not chairman), server (not waitress)</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Critical Thinking Questions</h5>
                <ul>
                  <li>Do you notice gender differences in how you and your friends speak?</li>
                  <li>How does your language encode gender grammatically?</li>
                  <li>What gender-neutral language changes have you observed?</li>
                  <li>How can language be used to promote gender equality?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 5.2 Quiz" questions={module2Quiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Language & Culture</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Language & Power →</button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.3</div>
              <div className="lesson-title-main">
                <h1>Language and Power</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language: The Tool of Power and Resistance</h3>
              <p>Who decides what's "proper" English? Why do some accents have more prestige? How can language be used to control or liberate? Welcome to the politics of language!</p>

             
                <iframe 
                  src="https://www.youtube.com/embed/hrbIGlIQzok?si=ms27WJ9eDF44aALf" 
                  title="Language and Power"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
           

              <h4>Understanding Language-Power Relationships</h4>
              <p>Language and power are intrinsically linked. Those with institutional power often control language policies and practices, while language can also be a tool of resistance and empowerment.</p>

              <h4>Power in Language</h4>

              <h5>1. Discourse and Dominance</h5>
              <div className="example-box">
                <p>Powerful groups use discourse to maintain and legitimize their dominance:</p>
                <ul>
                  <li><strong>Political discourse:</strong> Framing issues to favor certain viewpoints</li>
                  <li><strong>Media discourse:</strong> Controlling narratives and representations</li>
                  <li><strong>Institutional discourse:</strong> Legal, medical, educational language excludes outsiders</li>
                  <li><strong>Example:</strong> "Illegal immigrant" vs. "Undocumented worker" - different framings</li>
                </ul>
              </div>

              <h5>2. Language Ideology</h5>
              <p>Beliefs and attitudes about language varieties and their speakers:</p>
              
              <ul>
                <li><strong>Standard language ideology:</strong> Belief that one variety is inherently better</li>
                <li><strong>Linguistic prejudice:</strong> Judging people by their language variety</li>
                <li><strong>Accent discrimination:</strong> Denying opportunities based on accent</li>
                <li><strong>Reality:</strong> All varieties are linguistically equal; prestige is social, not linguistic</li>
              </ul>

              <div className="example-box">
                <h6>Standard Language Myths</h6>
                <ul>
                  <li><strong>Myth 1:</strong> Standard language is more logical or correct</li>
                  <li><strong>Reality:</strong> All varieties have systematic grammar</li>
                  <li><strong>Myth 2:</strong> Non-standard varieties are corrupted versions</li>
                  <li><strong>Reality:</strong> They evolved naturally with their own rules</li>
                  <li><strong>Myth 3:</strong> Everyone should speak the standard</li>
                  <li><strong>Reality:</strong> Linguistic diversity is natural and valuable</li>
                </ul>
              </div>

              <h5>3. Gatekeeping and Access</h5>
              <p>Language requirements control access to opportunities:</p>
              
              <div className="example-box">
                <ul>
                  <li><strong>Education:</strong> Standard language required for academic success</li>
                  <li><strong>Employment:</strong> "Professional" language expected in workplace</li>
                  <li><strong>Legal system:</strong> Complex legal language excludes non-experts</li>
                  <li><strong>Healthcare:</strong> Medical jargon creates barriers</li>
                  <li><strong>Result:</strong> Language becomes a tool of social stratification</li>
                </ul>
              </div>

              <h5>4. Language Policy as Power</h5>
              <p>Governments use language policy to exercise power:</p>
              
              <ul>
                <li><strong>Official language laws:</strong> Privilege certain languages</li>
                <li><strong>Education policy:</strong> Which languages taught in schools</li>
                <li><strong>Linguistic imperialism:</strong> Imposing dominant language on minorities</li>
                <li><strong>Language suppression:</strong> Historical bans on minority languages</li>
              </ul>

              <div className="example-box">
                <h6>Historical Examples</h6>
                <ul>
                  <li><strong>Ireland:</strong> English imposed, Irish suppressed under British rule</li>
                  <li><strong>Native Americans:</strong> Forced to speak English in boarding schools</li>
                  <li><strong>France:</strong> Regional languages suppressed to promote French unity</li>
                  <li><strong>Soviet Union:</strong> Russian imposed on minority populations</li>
                </ul>
              </div>

              <h5>5. Media and Language Control</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Representation:</strong> Who gets to speak in media?</li>
                  <li><strong>Framing:</strong> How issues are presented linguistically</li>
                  <li><strong>Silencing:</strong> Whose voices are excluded?</li>
                  <li><strong>Standardization:</strong> Media promotes standard varieties</li>
                  <li><strong>Example:</strong> News anchors speak standard English, reinforcing its prestige</li>
                </ul>
              </div>

              <h4>Language as Resistance</h4>

              <h5>1. Counter-Discourse</h5>
              <p>Challenging dominant narratives through alternative language use:</p>
              
              <div className="example-box">
                <ul>
                  <li><strong>Reclaiming terms:</strong> "Queer," "Black" - taking back derogatory terms</li>
                  <li><strong>Alternative framing:</strong> "Pro-choice" vs. "Pro-life" - competing frames</li>
                  <li><strong>Protest language:</strong> Slogans, chants challenging power</li>
                  <li><strong>Social media:</strong> Hashtags like #BlackLivesMatter create counter-narratives</li>
                </ul>
              </div>

              <h5>2. Language Revitalization</h5>
              <p>Reclaiming endangered languages as act of resistance:</p>
              
              <ul>
                <li><strong>Indigenous languages:</strong> Reviving languages suppressed by colonizers</li>
                <li><strong>Māori (New Zealand):</strong> Language nests (kōhanga reo) for children</li>
                <li><strong>Welsh:</strong> Successful revitalization through education policy</li>
                <li><strong>Hawaiian:</strong> Immersion schools bringing language back</li>
                <li><strong>Meaning:</strong> Language revival = cultural survival and resistance</li>
              </ul>

              <h5>3. Code-Switching as Resistance</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Strategic use:</strong> Switching to assert identity</li>
                  <li><strong>Solidarity:</strong> Using heritage language to build community</li>
                  <li><strong>Exclusion:</strong> Switching to exclude outsiders from conversation</li>
                  <li><strong>Resistance:</strong> Refusing to speak only the dominant language</li>
                </ul>
              </div>

              <h5>4. Subversive Language Use</h5>
              <p>Using language creatively to challenge authority:</p>
              
              <ul>
                <li><strong>Slang:</strong> Youth slang resists adult norms</li>
                <li><strong>Humor:</strong> Jokes and satire critique power</li>
                <li><strong>Parody:</strong> Mocking official discourse</li>
                <li><strong>Coded language:</strong> Secret communication to evade surveillance</li>
              </ul>

              <h5>5. Community Language Maintenance</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Heritage language schools:</strong> Teaching community languages</li>
                  <li><strong>Ethnic media:</strong> Newspapers, radio in minority languages</li>
                  <li><strong>Religious institutions:</strong> Maintaining language through worship</li>
                  <li><strong>Family transmission:</strong> Speaking heritage language at home</li>
                  <li><strong>Resistance:</strong> Against linguistic assimilation pressure</li>
                </ul>
              </div>

              <h5>6. Activism Through Language</h5>
              <p>Using language strategically for social change:</p>
              
              <ul>
                <li><strong>Language rights movements:</strong> Demanding recognition for minority languages</li>
                <li><strong>Inclusive language campaigns:</strong> Promoting gender-neutral, anti-racist language</li>
                <li><strong>Plain language movement:</strong> Making official language accessible</li>
                <li><strong>Linguistic human rights:</strong> Right to use one's own language</li>
              </ul>

              <h4>Critical Discourse Analysis (CDA)</h4>
              <p>A method for analyzing how discourse constructs and maintains power relations:</p>
              
              <div className="example-box">
                <h5>Key Principles of CDA</h5>
                <ul>
                  <li><strong>Language is social practice:</strong> Not neutral, but shaped by power</li>
                  <li><strong>Discourse shapes reality:</strong> How we talk affects how we think</li>
                  <li><strong>Power relations:</strong> Discourse maintains or challenges inequality</li>
                  <li><strong>Ideology:</strong> Beliefs embedded in language use</li>
                  <li><strong>Critical approach:</strong> Exposing hidden power dynamics</li>
                </ul>
              </div>

              <h4>Real-World Examples</h4>

              <div className="example-box">
                <h5>Political Language</h5>
                <ul>
                  <li><strong>"War on Terror":</strong> Frames conflict in specific way</li>
                  <li><strong>"Climate change" vs. "Global warming":</strong> Different implications</li>
                  <li><strong>"Tax relief":</strong> Frames taxes as burden</li>
                  <li><strong>"Undocumented" vs. "Illegal":</strong> Humanizing vs. criminalizing</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Workplace Power</h5>
                <ul>
                  <li><strong>Formal language:</strong> Maintains professional hierarchy</li>
                  <li><strong>Jargon:</strong> Excludes outsiders, marks expertise</li>
                  <li><strong>Interruptions:</strong> Bosses interrupt more than subordinates</li>
                  <li><strong>Directives:</strong> "Do this" (boss) vs. "Could you...?" (subordinate)</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Think About It!</h5>
                <ul>
                  <li>What language varieties have prestige in your society? Why?</li>
                  <li>Have you experienced or witnessed language-based discrimination?</li>
                  <li>How do you use language differently with people of different status?</li>
                  <li>Can you think of examples of language being used for resistance?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 5.3 Quiz" questions={module3Quiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Language & Gender</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Language & Globalization →</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.4</div>
              <div className="lesson-title-main">
                <h1>Language and Globalization</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Language in a Globalized World</h3>
              <p>English everywhere! Languages dying! New varieties emerging! Globalization is transforming the linguistic landscape of our world. Let's explore how!</p>

           
                <iframe 
                  src="https://www.youtube.com/embed/VQRjouwKDlU" 
                  title="Language and Globalization"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                   style={{width: '550px', height: '325px'}}
                ></iframe>
         

              <h4>Understanding Language in Global Contexts</h4>
              <p>Globalization has profound effects on language use, including the spread of certain languages, language endangerment, and the emergence of new varieties adapted for global communication.</p>

              <h4>Globalization Effects on Language</h4>

              <h5>1. Language Spread and Diffusion</h5>
              <div className="example-box">
                <p>Certain languages spread globally due to economic, political, and cultural power:</p>
                <ul>
                  <li><strong>English:</strong> Global lingua franca due to British colonialism and US economic power</li>
                  <li><strong>Spanish:</strong> Spreading due to Latin American population growth</li>
                  <li><strong>Mandarin Chinese:</strong> Growing with China's economic rise</li>
                  <li><strong>Arabic:</strong> Spread through religion and oil wealth</li>
                  <li><strong>Mechanisms:</strong> Trade, migration, media, internet, education</li>
                </ul>
              </div>

              <h5>2. Language Endangerment</h5>
              <p>Globalization threatens linguistic diversity:</p>
              
              <div className="example-box">
                <ul>
                  <li><strong>Statistics:</strong> A language dies every 2 weeks</li>
                  <li><strong>At risk:</strong> About 40% of 7,000+ world languages</li>
                  <li><strong>Causes:</strong> Economic pressure, urbanization, education in dominant languages</li>
                  <li><strong>Loss:</strong> Cultural knowledge, unique worldviews disappear</li>
                  <li><strong>Example:</strong> Many indigenous languages have fewer than 1,000 speakers</li>
                </ul>
              </div>

              <h5>3. English as Lingua Franca (ELF)</h5>
              <p>English used as common language between non-native speakers:</p>
              
              <ul>
                <li><strong>Global reach:</strong> 1.5 billion English speakers, most non-native</li>
                <li><strong>Functions:</strong> International business, science, aviation, internet</li>
                <li><strong>Characteristics:</strong> Simplified grammar, varied pronunciation</li>
                <li><strong>Ownership:</strong> No longer "belongs" to native speakers</li>
                <li><strong>Example:</strong> Japanese and Brazilian businesspeople using English</li>
              </ul>

              <h5>4. World Englishes</h5>
              <div className="example-box">
                <p>English has diversified into many distinct varieties worldwide:</p>
                
                <h6>Kachru's Three Circles Model</h6>
                <ul>
                  <li><strong>Inner Circle:</strong> Native English countries (US, UK, Australia, Canada)</li>
                  <li><strong>Outer Circle:</strong> Former colonies where English is official (India, Nigeria, Singapore)</li>
                  <li><strong>Expanding Circle:</strong> Countries learning English as foreign language (China, Japan, Brazil)</li>
                </ul>

                <h6>Examples of World Englishes</h6>
                <ul>
                  <li><strong>Indian English:</strong> "I am doing" (present continuous for habitual), "only" as emphasis</li>
                  <li><strong>Singapore English (Singlish):</strong> "Can lah!" (particles from Chinese)</li>
                  <li><strong>Nigerian English:</strong> Unique idioms and expressions</li>
                  <li><strong>Philippine English:</strong> Spanish-influenced vocabulary</li>
                </ul>
              </div>

              <h5>5. Code-Switching in Global Contexts</h5>
              <p>Multilingual speakers navigate global and local identities:</p>
              
              <ul>
                <li><strong>Translanguaging:</strong> Fluid use of multiple languages</li>
                <li><strong>Global-local mix:</strong> English + heritage language</li>
                <li><strong>Example:</strong> "Let's meet at the mall para mag-shopping" (English + Tagalog)</li>
                <li><strong>Identity:</strong> Expressing both global and local belonging</li>
              </ul>

              <h5>6. Language and Migration</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Diaspora communities:</strong> Maintain heritage languages abroad</li>
                  <li><strong>Language shift:</strong> Immigrants adopt dominant language</li>
                  <li><strong>Heritage language loss:</strong> Second generation often loses fluency</li>
                  <li><strong>New varieties:</strong> Immigrant languages influence local varieties</li>
                  <li><strong>Example:</strong> Spanglish in US, Hinglish in UK</li>
                </ul>
              </div>

              <h4>Global Language Issues</h4>

              <h5>1. Language Rights and Policies</h5>
              <p>Balancing global communication with linguistic diversity:</p>
              
              <ul>
                <li><strong>Linguistic human rights:</strong> Right to use one's own language</li>
                <li><strong>Official language policies:</strong> Which languages recognized by state?</li>
                <li><strong>Education policy:</strong> Mother tongue vs. global language instruction</li>
                <li><strong>Tensions:</strong> Economic opportunity vs. cultural preservation</li>
              </ul>

              <div className="example-box">
                <h6>Policy Approaches</h6>
                <ul>
                  <li><strong>Multilingual:</strong> Switzerland (4 official languages), India (22 scheduled languages)</li>
                  <li><strong>Bilingual:</strong> Canada (English and French)</li>
                  <li><strong>Monolingual:</strong> France (French only, officially)</li>
                  <li><strong>No official language:</strong> United States (de facto English)</li>
                </ul>
              </div>

              <h5>2. Minority Language Maintenance</h5>
              <p>Strategies to preserve linguistic diversity:</p>
              
              <div className="example-box">
                <ul>
                  <li><strong>Language nests:</strong> Immersion programs for children (Māori kōhanga reo)</li>
                  <li><strong>Bilingual education:</strong> Teaching in both majority and minority languages</li>
                  <li><strong>Media support:</strong> TV, radio, internet in minority languages</li>
                  <li><strong>Documentation:</strong> Recording endangered languages</li>
                  <li><strong>Technology:</strong> Apps, online resources for language learning</li>
                </ul>
              </div>

              <h5>3. International Communication</h5>
              <p>Challenges and solutions for global communication:</p>
              
              <ul>
                <li><strong>Translation:</strong> Essential for international relations, business</li>
                <li><strong>Interpretation:</strong> Simultaneous (UN) and consecutive</li>
                <li><strong>Machine translation:</strong> Google Translate, DeepL improving</li>
                <li><strong>Challenges:</strong> Cultural nuances, idioms, context</li>
                <li><strong>Localization:</strong> Adapting content for local markets</li>
              </ul>

              <h5>4. Technology and Language Spread</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Internet:</strong> 60% of websites in English (but decreasing)</li>
                  <li><strong>Social media:</strong> Accelerates language change and spread</li>
                  <li><strong>Mobile technology:</strong> Makes global languages accessible</li>
                  <li><strong>Digital divide:</strong> Languages without digital presence disadvantaged</li>
                  <li><strong>Language technology:</strong> Spell-check, predictive text favor major languages</li>
                </ul>
              </div>

              <h5>5. Cultural Homogenization vs. Heterogenization</h5>
              <p>Two competing trends in globalization:</p>
              
              <div className="example-box">
                <h6>Homogenization (Convergence)</h6>
                <ul>
                  <li><strong>Trend:</strong> Global culture becoming more similar</li>
                  <li><strong>Language:</strong> English dominance, language loss</li>
                  <li><strong>Example:</strong> Global brands, Hollywood, pop music</li>
                  <li><strong>Concern:</strong> Loss of cultural and linguistic diversity</li>
                </ul>

                <h6>Heterogenization (Divergence)</h6>
                <ul>
                  <li><strong>Trend:</strong> Local cultures adapting global influences</li>
                  <li><strong>Language:</strong> New varieties emerging (World Englishes)</li>
                  <li><strong>Example:</strong> Bollywood, K-pop, local adaptations of global brands</li>
                  <li><strong>Reality:</strong> Glocalization - global + local</li>
                </ul>
              </div>

              <h4>Linguistic Landscape</h4>
              <p>The visibility of languages on public signs in a territory:</p>
              
              <ul>
                <li><strong>What it includes:</strong> Street signs, billboards, shop signs, graffiti</li>
                <li><strong>Reveals:</strong> Language policies, power relations, multilingualism</li>
                <li><strong>Example:</strong> Bilingual signs in Quebec (French and English)</li>
                <li><strong>Globalization effect:</strong> English appearing on signs worldwide</li>
              </ul>

              <h4>Superdiversity and Metrolingualism</h4>
              
              <div className="example-box">
                <h5>Superdiversity</h5>
                <ul>
                  <li><strong>Concept:</strong> Complex, layered diversity in urban contexts</li>
                  <li><strong>Beyond ethnicity:</strong> Multiple dimensions of difference</li>
                  <li><strong>Language:</strong> Unprecedented linguistic diversity in cities</li>
                  <li><strong>Example:</strong> London has 300+ languages spoken</li>
                </ul>

                <h5>Metrolingualism</h5>
                <ul>
                  <li><strong>Concept:</strong> Creative language mixing in urban contexts</li>
                  <li><strong>Fluid practices:</strong> Not fixed code-switching but creative blending</li>
                  <li><strong>Urban youth:</strong> Creating new multilingual styles</li>
                  <li><strong>Example:</strong> London Multicultural English, Berlin Kiezdeutsch</li>
                </ul>
              </div>

              <h4>The Future of Languages</h4>
              
              <div className="example-box">
                <h5>Predictions</h5>
                <ul>
                  <li><strong>Pessimistic:</strong> 50-90% of languages will die by 2100</li>
                  <li><strong>Optimistic:</strong> Technology enables language maintenance</li>
                  <li><strong>Likely:</strong> Continued dominance of major languages, but also new varieties</li>
                  <li><strong>Hope:</strong> Growing awareness of linguistic diversity value</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Critical Questions</h5>
                <ul>
                  <li>Is linguistic diversity worth preserving? Why?</li>
                  <li>Should everyone learn English for global communication?</li>
                  <li>How can we balance economic opportunity with cultural preservation?</li>
                  <li>What role should technology play in language maintenance?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 5.4 Quiz" questions={module4Quiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Language & Power</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Research Methods →</button>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.5</div>
              <div className="lesson-title-main">
                <h1>Research Methods in Linguistics & Future of Linguistics</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>How Do We Study Language?</h3>
              <p>From recording conversations to brain scans, linguists use diverse methods to understand language. Let's explore the tools of linguistic research and where the field is heading!</p>

            
                <iframe width="560" height="315" src="https://www.youtube.com/embed/E6588DlZW-c?si=RwKn14mCOy_wOIe0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                ></iframe>
             

              <h4>Understanding Linguistic Research Methodologies</h4>
              <p>Linguistic research employs various methodological approaches depending on the research question and theoretical framework. Researchers use both qualitative and quantitative methods.</p>

              <h4>Qualitative Research Methods</h4>

              <h5>1. Ethnographic Approaches</h5>
              <div className="example-box">
                <ul>
                  <li><strong>What it is:</strong> Studying language in natural cultural contexts</li>
                  <li><strong>Method:</strong> Long-term immersion in community</li>
                  <li><strong>Data:</strong> Observations, recordings, field notes</li>
                  <li><strong>Goal:</strong> Understanding language use in social context</li>
                  <li><strong>Example:</strong> Living with a community to document endangered language</li>
                </ul>
              </div>

              <h5>2. Participant Observation</h5>
              <ul>
                <li><strong>Researcher role:</strong> Participating while observing</li>
                <li><strong>Advantage:</strong> Insider perspective on language use</li>
                <li><strong>Challenge:</strong> Maintaining objectivity</li>
                <li><strong>Example:</strong> Joining a workplace to study professional discourse</li>
              </ul>

              <h5>3. Interviews and Narratives</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Sociolinguistic interviews:</strong> Eliciting natural speech</li>
                  <li><strong>Life histories:</strong> Understanding language and identity</li>
                  <li><strong>Focus groups:</strong> Group discussions on language attitudes</li>
                  <li><strong>Narrative analysis:</strong> How people tell their stories</li>
                </ul>
              </div>

              <h5>4. Discourse Analysis</h5>
              <p>Analyzing language use beyond the sentence level:</p>
              <ul>
                <li><strong>Conversation analysis:</strong> Turn-taking, repair, sequence organization</li>
                <li><strong>Critical discourse analysis:</strong> Power and ideology in discourse</li>
                <li><strong>Narrative analysis:</strong> Story structure and function</li>
                <li><strong>Multimodal analysis:</strong> Language + gesture, gaze, etc.</li>
              </ul>

              <h5>5. Case Study Methodology</h5>
              <ul>
                <li><strong>In-depth study:</strong> Single individual or small group</li>
                <li><strong>Rich data:</strong> Detailed, contextualized information</li>
                <li><strong>Example:</strong> Language development of bilingual child</li>
              </ul>

              <h4>Quantitative Research Methods</h4>

              <h5>1. Statistical Analysis</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Descriptive statistics:</strong> Frequency, mean, distribution</li>
                  <li><strong>Inferential statistics:</strong> Testing hypotheses, finding patterns</li>
                  <li><strong>Regression analysis:</strong> Predicting language variables</li>
                  <li><strong>Example:</strong> Analyzing correlation between age and language change</li>
                </ul>
              </div>

              <h5>2. Corpus Linguistics</h5>
              <p>Studying language using large collections of texts:</p>
              
              <ul>
                <li><strong>Corpora:</strong> British National Corpus, COCA (Corpus of Contemporary American English)</li>
                <li><strong>Tools:</strong> Concordancers, frequency analyzers</li>
                <li><strong>Applications:</strong> Dictionary making, grammar description, language teaching</li>
                <li><strong>Advantage:</strong> Real language use, large-scale patterns</li>
              </ul>

              <h5>3. Experimental Design</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Controlled experiments:</strong> Manipulating variables</li>
                  <li><strong>Psycholinguistic experiments:</strong> Reaction time, eye-tracking</li>
                  <li><strong>Perception experiments:</strong> How people perceive sounds, accents</li>
                  <li><strong>Example:</strong> Testing if bilinguals process languages differently</li>
                </ul>
              </div>

              <h5>4. Surveys and Questionnaires</h5>
              <ul>
                <li><strong>Language attitudes:</strong> What people think about language varieties</li>
                <li><strong>Self-reported use:</strong> How people say they use language</li>
                <li><strong>Large samples:</strong> Can reach many participants</li>
                <li><strong>Limitation:</strong> Self-report may differ from actual behavior</li>
              </ul>

              <h5>5. Acoustic Analysis</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Tools:</strong> Praat, spectrograms</li>
                  <li><strong>Measures:</strong> Pitch, formants, duration, intensity</li>
                  <li><strong>Applications:</strong> Phonetics, speech pathology, forensics</li>
                  <li><strong>Example:</strong> Analyzing vowel shifts in dialect change</li>
                </ul>
              </div>

              <h5>6. Neurolinguistic Methods</h5>
              <p>Using brain imaging to study language processing:</p>
              
              <ul>
                <li><strong>fMRI:</strong> Functional Magnetic Resonance Imaging - brain activity</li>
                <li><strong>EEG/ERP:</strong> Electrical brain activity, millisecond precision</li>
                <li><strong>MEG:</strong> Magnetoencephalography - magnetic fields</li>
                <li><strong>Applications:</strong> Language processing, bilingualism, disorders</li>
              </ul>

              <h4>Specific Research Techniques</h4>

              <h5>Data Collection Methods</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Naturalistic observation:</strong> Recording spontaneous speech</li>
                  <li><strong>Elicitation tasks:</strong> Picture naming, sentence completion</li>
                  <li><strong>Think-aloud protocols:</strong> Participants verbalize thoughts</li>
                  <li><strong>Role-play:</strong> Simulating real-world situations</li>
                  <li><strong>Matched-guise technique:</strong> Testing language attitudes</li>
                </ul>
              </div>

              <h4>Current Debates in Linguistics</h4>

              <h5>Theoretical Debates</h5>
              
              <div className="example-box">
                <h6>1. Universal Grammar Debate</h6>
                <ul>
                  <li><strong>Chomsky's view:</strong> Humans have innate language faculty</li>
                  <li><strong>Usage-based view:</strong> Language learned from input, no special faculty</li>
                  <li><strong>Evidence for:</strong> Poverty of stimulus, language universals</li>
                  <li><strong>Evidence against:</strong> Cross-linguistic diversity, usage patterns</li>
                </ul>

                <h6>2. Nativist vs. Usage-Based Approaches</h6>
                <ul>
                  <li><strong>Nativist:</strong> Language is innate, domain-specific</li>
                  <li><strong>Usage-based:</strong> Language emerges from use, domain-general cognition</li>
                  <li><strong>Debate:</strong> Nature vs. nurture in language acquisition</li>
                </ul>

                <h6>3. Modularity of Mind</h6>
                <ul>
                  <li><strong>Modular view:</strong> Language is separate mental module</li>
                  <li><strong>Integrated view:</strong> Language integrated with other cognition</li>
                  <li><strong>Question:</strong> Is language special or just another cognitive ability?</li>
                </ul>
              </div>

              <h5>Social and Political Issues</h5>
              <ul>
                <li><strong>Language rights:</strong> Should minority languages be protected?</li>
                <li><strong>Endangered languages:</strong> How to prioritize documentation efforts?</li>
                <li><strong>Standard language ideology:</strong> Should linguists challenge prescriptivism?</li>
                <li><strong>Language and education:</strong> Mother tongue vs. dominant language instruction</li>
                <li><strong>Technology impact:</strong> Is technology helping or hurting languages?</li>
              </ul>

              <h5>Methodological Debates</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Quantitative vs. qualitative:</strong> Which approach is better?</li>
                  <li><strong>Experimental vs. corpus:</strong> Lab control vs. natural data</li>
                  <li><strong>Native speaker intuitions:</strong> Are they reliable data?</li>
                  <li><strong>Cross-linguistic generalizations:</strong> Can we make universal claims?</li>
                  <li><strong>Fieldwork ethics:</strong> How to work respectfully with communities?</li>
                </ul>
              </div>

              <h4>The Future of Linguistics</h4>

              <h5>Technological Advances</h5>
              <div className="example-box">
                <ul>
                  <li><strong>AI and linguistics:</strong> Machine learning for language analysis</li>
                  <li><strong>Computational approaches:</strong> Big data, automated analysis</li>
                  <li><strong>Neuroimaging:</strong> Better understanding of brain and language</li>
                  <li><strong>Digital humanities:</strong> Analyzing historical texts at scale</li>
                  <li><strong>Mobile technology:</strong> New ways to collect data</li>
                </ul>
              </div>

              <h5>Interdisciplinary Connections</h5>
              <ul>
                <li><strong>Neurolinguistics:</strong> Brain science + linguistics</li>
                <li><strong>Psycholinguistics:</strong> Psychology + linguistics</li>
                <li><strong>Sociolinguistics:</strong> Sociology + linguistics</li>
                <li><strong>Computational linguistics:</strong> Computer science + linguistics</li>
                <li><strong>Applied linguistics:</strong> Solving real-world problems</li>
              </ul>

              <h5>Future Challenges</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Language endangerment:</strong> Documenting before languages die</li>
                  <li><strong>Globalization effects:</strong> Understanding language change</li>
                  <li><strong>Technology impact:</strong> How AI affects language</li>
                  <li><strong>Funding:</strong> Securing resources for research</li>
                  <li><strong>Public understanding:</strong> Communicating linguistics to public</li>
                </ul>
              </div>

              <h5>Future Opportunities</h5>
              <ul>
                <li><strong>New methodologies:</strong> Innovative research techniques</li>
                <li><strong>Interdisciplinary work:</strong> Collaboration across fields</li>
                <li><strong>Community-based research:</strong> Working with language communities</li>
                <li><strong>Technology applications:</strong> NLP, speech recognition, translation</li>
                <li><strong>Policy influence:</strong> Informing language policy decisions</li>
                <li><strong>Global communication:</strong> Understanding multilingual world</li>
              </ul>

              <div className="example-box">
                <h5>Career Paths in Linguistics</h5>
                <ul>
                  <li><strong>Academia:</strong> Teaching and research at universities</li>
                  <li><strong>Technology:</strong> NLP, speech recognition, AI companies</li>
                  <li><strong>Language teaching:</strong> ESL/EFL, curriculum development</li>
                  <li><strong>Translation/Interpretation:</strong> Professional language services</li>
                  <li><strong>Speech pathology:</strong> Treating language disorders</li>
                  <li><strong>Forensic linguistics:</strong> Legal applications</li>
                  <li><strong>Lexicography:</strong> Dictionary making</li>
                  <li><strong>Language policy:</strong> Government and NGO work</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Final Reflections</h5>
                <ul>
                  <li>What research method would you use to study your own language use?</li>
                  <li>Which current debate in linguistics interests you most?</li>
                  <li>How do you think technology will change language in the future?</li>
                  <li>What role should linguists play in society?</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 5.5 Quiz" questions={module5Quiz} />
            <Quiz title="Unit 5 Comprehensive Quiz" questions={unitQuiz} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Language & Globalization</button>
              <button onClick={onBack} className="next-module-btn">Back to Overview →</button>
            </div>
          </div>
        );
      default:
        return <div>Module {currentModule} - Content coming soon</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit5;
