'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit5: React.FC<Unit5Props> = ({ currentModule, setCurrentModule }) => {
  const module1Quiz = [
    {
      question: "What is the purpose of digital environmental awareness campaigns?",
      options: ["Waste time", "Spread awareness and inspire action", "Create confusion", "Ignore environment"],
      correctAnswer: 1,
      explanation: "Digital environmental awareness campaigns use social media and digital platforms to spread awareness about environmental issues and inspire people to take action."
    },
    {
      question: "Which platform is best for visual environmental content?",
      options: ["Email only", "Instagram with stories and reels", "Fax", "Telephone"],
      correctAnswer: 1,
      explanation: "Instagram is ideal for visual environmental content through photos, stories, reels, and infographics that engage audiences effectively."
    },
    {
      question: "What is an effective environmental hashtag?",
      options: ["#WasteMore", "#ClimateAction", "#IgnoreNature", "#PollutionGood"],
      correctAnswer: 1,
      explanation: "#ClimateAction is an effective hashtag that promotes environmental awareness and connects people working on climate issues globally."
    },
    {
      question: "Which tool can be used to create environmental graphics?",
      options: ["Canva", "Calculator", "Notepad", "Paint only"],
      correctAnswer: 0,
      explanation: "Canva is a user-friendly design tool perfect for creating environmental graphics, posters, and infographics for awareness campaigns."
    },
    {
      question: "How should campaign impact be measured?",
      options: ["Never measure", "Track reach, engagement, and behavioral changes", "Ignore results", "Only count likes"],
      correctAnswer: 1,
      explanation: "Campaign impact should be measured through reach, impressions, engagement (likes, shares, comments), follower growth, and reported behavioral changes."
    }
  ];

  const module2Quiz = [
    {
      question: "What does zero-waste philosophy encourage?",
      options: ["Create more waste", "Reuse all products with no trash to landfills", "Burn everything", "Ignore waste"],
      correctAnswer: 1,
      explanation: "Zero-waste philosophy encourages redesigning resource life cycles so all products are reused, with no trash sent to landfills or incinerators."
    },
    {
      question: "What are the 5 R's of zero-waste?",
      options: ["Run, Race, Rest, Relax, Repeat", "Refuse, Reduce, Reuse, Recycle, Rot", "Read, Write, Review, Revise, Remember", "Random words"],
      correctAnswer: 1,
      explanation: "The 5 R's of zero-waste are: Refuse (say no to unnecessary items), Reduce (minimize consumption), Reuse (use again), Recycle (process materials), and Rot (compost organic waste)."
    },
    {
      question: "What should be included in a zero-waste kit?",
      options: ["Plastic bags", "Reusable water bottle and cloth bags", "Disposable items", "Single-use plastics"],
      correctAnswer: 1,
      explanation: "A zero-waste kit includes reusable water bottle, cloth shopping bags, steel/bamboo straws, reusable food containers, cloth napkins, and reusable cutlery."
    },
    {
      question: "What is the first step in zero-waste living?",
      options: ["Buy more", "Refuse unnecessary items", "Accept all freebies", "Use more plastic"],
      correctAnswer: 1,
      explanation: "The first step in zero-waste living is to Refuse - say no to single-use plastics, unnecessary packaging, disposable items, and unwanted freebies."
    },
    {
      question: "What is a benefit of zero-waste living?",
      options: ["Increases waste", "Reduces landfill waste and saves money", "Creates pollution", "Wastes resources"],
      correctAnswer: 1,
      explanation: "Zero-waste living reduces landfill waste, conserves natural resources, saves money long-term, reduces pollution, and promotes mindful consumption."
    }
  ];

  const module3Quiz = [
    {
      question: "What is the Women Helpline number in India?",
      options: ["100", "181", "911", "1234"],
      correctAnswer: 1,
      explanation: "The Women Helpline number in India is 181, providing 24/7 support for women in distress and emergency situations."
    },
    {
      question: "What does POSH Act stand for?",
      options: ["Public Office Safety Handbook", "Prevention of Sexual Harassment at Workplace", "Police Officer Safety Handbook", "Private Office Security Handbook"],
      correctAnswer: 1,
      explanation: "POSH Act stands for Prevention of Sexual Harassment at Workplace, providing legal framework to prevent and address workplace harassment."
    },
    {
      question: "What is an important aspect of adolescent health?",
      options: ["Ignoring nutrition", "Menstrual hygiene and balanced diet", "Avoiding exercise", "Skipping sleep"],
      correctAnswer: 1,
      explanation: "Important aspects of adolescent health include menstrual hygiene, balanced nutrition with iron supplements, regular exercise, and adequate sleep."
    },
    {
      question: "What should women do if facing harassment?",
      options: ["Stay silent", "Speak up and report to authorities", "Ignore it", "Blame themselves"],
      correctAnswer: 1,
      explanation: "Women facing harassment should speak up, document incidents, report to authorities, seek support from trusted people, and know their legal rights."
    },
    {
      question: "What is population education about?",
      options: ["Ignoring family planning", "Family planning and responsible parenthood", "Increasing population", "Avoiding education"],
      correctAnswer: 1,
      explanation: "Population education covers family planning, contraception methods, responsible parenthood, understanding population dynamics, gender equality, and child rights."
    }
  ];

  const module4Quiz = [
    {
      question: "What is the Cyber Crime Helpline number?",
      options: ["100", "181", "1930", "108"],
      correctAnswer: 2,
      explanation: "The Cyber Crime Helpline number in India is 1930, where citizens can report cybercrimes and seek assistance."
    },
    {
      question: "What is cyberbullying?",
      options: ["Helping online", "Harassment or threats online", "Making friends", "Sharing knowledge"],
      correctAnswer: 1,
      explanation: "Cyberbullying is harassment, threats, or humiliation conducted online through trolling, doxing, impersonation, or exclusion, causing emotional harm."
    },
    {
      question: "What should you do if cyberbullied?",
      options: ["Respond angrily", "Block, document, and report", "Delete everything", "Ignore and suffer"],
      correctAnswer: 1,
      explanation: "If cyberbullied, don't respond, document evidence with screenshots, block the bully, report to platform and authorities, and seek support from trusted adults."
    },
    {
      question: "What is the 20-20-20 rule for screen time?",
      options: ["Work 20 hours", "Every 20 min, look 20 feet away for 20 sec", "Sleep 20 hours", "Use phone 20 hours"],
      correctAnswer: 1,
      explanation: "The 20-20-20 rule for healthy screen time: Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain."
    },
    {
      question: "What is digital footprint?",
      options: ["Shoe size", "Trace of online activity", "Walking distance", "Physical footprint"],
      correctAnswer: 1,
      explanation: "Digital footprint is the trace of your online activity - everything you post, share, or do online leaves a permanent record that can affect your future."
    }
  ];

  const module5Quiz = [
    {
      question: "How many elements are in digital citizenship?",
      options: ["3", "5", "9", "12"],
      correctAnswer: 2,
      explanation: "There are 9 elements of digital citizenship: Access, Commerce, Communication, Literacy, Etiquette, Law, Rights & Responsibilities, Health & Wellness, and Security."
    },
    {
      question: "What is digital etiquette?",
      options: ["Ignoring others", "Standards of online behavior and netiquette", "Being rude online", "Spamming"],
      correctAnswer: 1,
      explanation: "Digital etiquette refers to standards of online behavior, netiquette rules, and respectful online interactions with others."
    },
    {
      question: "What does AUP stand for in schools?",
      options: ["Always Use Phones", "Acceptable Use Policy", "Avoid Using Programs", "All Users Participate"],
      correctAnswer: 1,
      explanation: "AUP stands for Acceptable Use Policy, which outlines rules and guidelines for appropriate use of technology and internet in schools."
    },
    {
      question: "What is a key component of digital literacy?",
      options: ["Believing everything online", "Evaluating online information critically", "Sharing without thinking", "Ignoring sources"],
      correctAnswer: 1,
      explanation: "Digital literacy includes teaching and learning with technology, evaluating online information critically, and using digital tools effectively and responsibly."
    },
    {
      question: "What should students pledge as digital citizens?",
      options: ["Use technology irresponsibly", "Use technology responsibly and ethically", "Cyberbully others", "Share private information"],
      correctAnswer: 1,
      explanation: "Digital citizens should pledge to use technology responsibly and ethically, respect others, protect privacy, think critically, be kind, and balance digital and real-world life."
    }
  ];
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.1</div>
              <div className="lesson-title-main">
                <h1>Digital Environmental Awareness</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Digital environmental awareness campaign" className="content-image" />
                <p className="image-caption">Using digital platforms for environmental awareness</p>
              </div>
              
              <h3>Digital Environmental Awareness Activities</h3>
              <p>Using social media and digital platforms to spread environmental awareness and inspire action.</p>
              
              <h4>Digital Awareness Campaign Examples:</h4>
              
              <div className="digital-gallery">
                <div className="digital-image">
                  <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Social media environmental campaign" className="digital-photo" />
                  <p>Environmental awareness on social media</p>
                </div>
                <div className="digital-image">
                  <img src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Environmental infographic" className="digital-photo" />
                  <p>Digital infographics for awareness</p>
                </div>
              </div>
              
              <h4>Social Media Platforms for Awareness:</h4>
              <ul>
                <li><strong>Facebook:</strong> Create pages, groups, events</li>
                <li><strong>Instagram:</strong> Visual content, stories, reels</li>
                <li><strong>Twitter:</strong> Quick updates, hashtags, trends</li>
                <li><strong>YouTube:</strong> Educational videos, documentaries</li>
                <li><strong>LinkedIn:</strong> Professional environmental content</li>
                <li><strong>WhatsApp:</strong> Group messaging, status updates</li>
              </ul>

              <h4>Content Ideas:</h4>
              
              <h5>1. Educational Posts</h5>
              <ul>
                <li>Environmental facts and statistics</li>
                <li>Climate change information</li>
                <li>Wildlife conservation updates</li>
                <li>Pollution data and impacts</li>
                <li>Sustainable living tips</li>
              </ul>

              <h5>2. Visual Content</h5>
              <ul>
                <li>Infographics on environmental issues</li>
                <li>Before/after images of cleanup drives</li>
                <li>Videos of tree plantation activities</li>
                <li>Photo stories of environmental projects</li>
                <li>Animated explainer videos</li>
              </ul>

              <h5>3. Interactive Content</h5>
              <ul>
                <li>Polls on environmental topics</li>
                <li>Quizzes about sustainability</li>
                <li>Challenges (plastic-free week)</li>
                <li>Live Q&A sessions with experts</li>
                <li>User-generated content campaigns</li>
              </ul>

              <div className="example-box">
                <h5>Digital Campaign Plan</h5>
                <p><strong>Campaign:</strong> #GoGreenChallenge</p>
                <p><strong>Duration:</strong> 1 month</p>
                <p><strong>Activities:</strong></p>
                <ul>
                  <li>Week 1: Share daily eco-tips</li>
                  <li>Week 2: Post photos of green actions</li>
                  <li>Week 3: Video testimonials</li>
                  <li>Week 4: Impact summary and winners</li>
                </ul>
              </div>

              <h4>Effective Hashtags:</h4>
              <ul>
                <li>#ClimateAction</li>
                <li>#SaveEnvironment</li>
                <li>#GoGreen</li>
                <li>#SustainableLiving</li>
                <li>#ZeroWaste</li>
                <li>#PlantTrees</li>
                <li>#EcoFriendly</li>
              </ul>

              <h4>Digital Tools:</h4>
              <ul>
                <li><strong>Canva:</strong> Create graphics and posters</li>
                <li><strong>Adobe Spark:</strong> Video creation</li>
                <li><strong>Hootsuite:</strong> Schedule posts</li>
                <li><strong>Google Forms:</strong> Surveys and feedback</li>
                <li><strong>Zoom:</strong> Virtual awareness sessions</li>
              </ul>

              <h4>Measuring Impact:</h4>
              <ul>
                <li>Reach and impressions</li>
                <li>Engagement (likes, shares, comments)</li>
                <li>Follower growth</li>
                <li>Website traffic</li>
                <li>Behavioral changes reported</li>
              </ul>

              <h4>Best Practices:</h4>
              <ul>
                <li>Post consistently and regularly</li>
                <li>Use high-quality visuals</li>
                <li>Keep messages clear and concise</li>
                <li>Engage with audience comments</li>
                <li>Collaborate with influencers</li>
                <li>Share success stories</li>
              </ul>
            </section>

            <Quiz title="Module 5.1: Digital Environmental Awareness" questions={module1Quiz} subject="NSS" unitId={5} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Zero-Waste Day →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.2</div>
              <div className="lesson-title-main">
                <h1>Organizing Zero-Waste Day</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Zero-Waste Day Initiative</h3>
              <p>Zero-waste day promotes waste reduction and encourages sustainable consumption patterns.</p>
              
              <h4>What is Zero-Waste?</h4>
              <p>Zero-waste is a philosophy that encourages redesigning resource life cycles so all products are reused, with no trash sent to landfills.</p>
              
              <h4>Planning Zero-Waste Day:</h4>
              <ol>
                <li><strong>Set Date:</strong> Choose appropriate day</li>
                <li><strong>Create Awareness:</strong> Announce through posters, social media</li>
                <li><strong>Guidelines:</strong> Share zero-waste practices</li>
                <li><strong>Preparation:</strong> Arrange reusable items</li>
                <li><strong>Monitoring:</strong> Track waste generation</li>
                <li><strong>Evaluation:</strong> Measure success</li>
              </ol>

              <h4>Zero-Waste Practices:</h4>
              
              <h5>Refuse:</h5>
              <ul>
                <li>Say no to single-use plastics</li>
                <li>Decline unnecessary packaging</li>
                <li>Refuse disposable items</li>
                <li>Avoid freebies and giveaways</li>
              </ul>

              <h5>Reduce:</h5>
              <ul>
                <li>Minimize consumption</li>
                <li>Buy only what's needed</li>
                <li>Choose quality over quantity</li>
                <li>Reduce paper usage</li>
              </ul>

              <h5>Reuse:</h5>
              <ul>
                <li>Use reusable bags and bottles</li>
                <li>Repurpose containers</li>
                <li>Donate unused items</li>
                <li>Repair instead of replace</li>
              </ul>

              <h5>Recycle:</h5>
              <ul>
                <li>Segregate waste properly</li>
                <li>Send recyclables to facilities</li>
                <li>Compost organic waste</li>
                <li>Upcycle creatively</li>
              </ul>

              <h5>Rot:</h5>
              <ul>
                <li>Compost food scraps</li>
                <li>Use biodegradable products</li>
                <li>Create nutrient-rich soil</li>
              </ul>

              <div className="example-box">
                <h5>Zero-Waste Day Checklist</h5>
                <ul>
                  <li>Bring reusable water bottle</li>
                  <li>Pack lunch in reusable containers</li>
                  <li>Use cloth napkins instead of paper</li>
                  <li>Carry reusable shopping bags</li>
                  <li>Avoid packaged snacks</li>
                  <li>Use digital notes instead of paper</li>
                  <li>Compost food waste</li>
                </ul>
              </div>

              <h4>Campus Activities:</h4>
              <ul>
                <li><strong>Plastic-Free Cafeteria:</strong> Use steel plates, no plastic</li>
                <li><strong>Waste Audit:</strong> Measure waste generated</li>
                <li><strong>Swap Meet:</strong> Exchange reusable items</li>
                <li><strong>Workshops:</strong> DIY reusable products</li>
                <li><strong>Competitions:</strong> Zero-waste lunch challenge</li>
              </ul>

              <h4>Zero-Waste Kit:</h4>
              <ul>
                <li>Reusable water bottle</li>
                <li>Cloth shopping bags</li>
                <li>Steel/bamboo straws</li>
                <li>Reusable food containers</li>
                <li>Cloth napkins</li>
                <li>Handkerchief</li>
                <li>Reusable cutlery</li>
              </ul>

              <h4>Challenges and Solutions:</h4>
              <ul>
                <li><strong>Convenience:</strong> Plan ahead, keep reusables handy</li>
                <li><strong>Cost:</strong> Long-term savings outweigh initial investment</li>
                <li><strong>Availability:</strong> Support zero-waste stores</li>
                <li><strong>Habits:</strong> Start small, build gradually</li>
              </ul>

              <h4>Benefits:</h4>
              <ul>
                <li>Reduces landfill waste</li>
                <li>Conserves natural resources</li>
                <li>Saves money</li>
                <li>Reduces pollution</li>
                <li>Promotes mindful consumption</li>
              </ul>
            </section>

            <Quiz title="Module 5.2: Zero-Waste Day" questions={module2Quiz} subject="NSS" unitId={5} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Digital Awareness</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Women Empowerment →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.3</div>
              <div className="lesson-title-main">
                <h1>Women Empowerment Programs</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Women Empowerment Initiatives</h3>
              <p>Programs focused on women's rights, safety, health, and overall empowerment.</p>
              
              <h4>Sexual Abuse Awareness:</h4>
              
              <h5>Understanding Sexual Abuse:</h5>
              <ul>
                <li><strong>Definition:</strong> Any unwanted sexual activity or behavior</li>
                <li><strong>Forms:</strong> Harassment, assault, exploitation, trafficking</li>
                <li><strong>Impact:</strong> Physical, psychological, emotional trauma</li>
              </ul>

              <h5>Prevention Strategies:</h5>
              <ul>
                <li>Education about consent and boundaries</li>
                <li>Self-defense training</li>
                <li>Awareness about safe spaces</li>
                <li>Bystander intervention training</li>
                <li>Creating support systems</li>
              </ul>

              <h5>Legal Provisions:</h5>
              <ul>
                <li><strong>POSH Act:</strong> Prevention of Sexual Harassment at Workplace</li>
                <li><strong>IPC Sections:</strong> 354 (Assault), 375 (Rape), 509 (Insult)</li>
                <li><strong>POCSO Act:</strong> Protection of Children from Sexual Offences</li>
                <li><strong>Nirbhaya Act:</strong> Stricter punishments for sexual crimes</li>
              </ul>

              <h5>Support Resources:</h5>
              <ul>
                <li><strong>Women Helpline:</strong> 181</li>
                <li><strong>Police:</strong> 100</li>
                <li><strong>Ambulance:</strong> 108</li>
                <li><strong>One Stop Centers:</strong> Integrated support services</li>
                <li><strong>Counseling Services:</strong> Psychological support</li>
              </ul>

              <div className="example-box">
                <h5>Safety Tips for Women</h5>
                <ul>
                  <li>Trust your instincts</li>
                  <li>Stay alert in public places</li>
                  <li>Share location with trusted contacts</li>
                  <li>Avoid isolated areas at night</li>
                  <li>Keep emergency numbers handy</li>
                  <li>Learn basic self-defense</li>
                  <li>Speak up against harassment</li>
                </ul>
              </div>

              <h4>Adolescent Health:</h4>
              
              <h5>Physical Health:</h5>
              <ul>
                <li><strong>Nutrition:</strong> Balanced diet, iron supplements</li>
                <li><strong>Menstrual Hygiene:</strong> Proper sanitation, products</li>
                <li><strong>Exercise:</strong> Regular physical activity</li>
                <li><strong>Sleep:</strong> Adequate rest and recovery</li>
              </ul>

              <h5>Mental Health:</h5>
              <ul>
                <li>Managing stress and anxiety</li>
                <li>Building self-esteem</li>
                <li>Peer pressure management</li>
                <li>Emotional regulation</li>
                <li>Seeking help when needed</li>
              </ul>

              <h5>Reproductive Health:</h5>
              <ul>
                <li>Understanding body changes</li>
                <li>Menstrual health education</li>
                <li>Safe practices and hygiene</li>
                <li>Access to healthcare</li>
              </ul>

              <h4>Population Education:</h4>
              <ul>
                <li><strong>Family Planning:</strong> Contraception methods, spacing</li>
                <li><strong>Responsible Parenthood:</strong> Planning family size</li>
                <li><strong>Population Dynamics:</strong> Understanding growth impacts</li>
                <li><strong>Gender Equality:</strong> Equal opportunities for all</li>
                <li><strong>Child Rights:</strong> Every child's right to care</li>
              </ul>

              <h4>Empowerment Activities:</h4>
              <ul>
                <li>Self-defense workshops</li>
                <li>Legal awareness sessions</li>
                <li>Health camps for women</li>
                <li>Skill development programs</li>
                <li>Leadership training</li>
                <li>Financial literacy workshops</li>
                <li>Entrepreneurship support</li>
              </ul>

              <h4>Creating Safe Spaces:</h4>
              <ul>
                <li>Establish complaint mechanisms</li>
                <li>Form Internal Complaints Committees</li>
                <li>Ensure adequate lighting and security</li>
                <li>Provide safe transportation</li>
                <li>Create awareness about rights</li>
              </ul>

              <h4>Breaking Stereotypes:</h4>
              <ul>
                <li>Challenge gender roles</li>
                <li>Promote equal opportunities</li>
                <li>Encourage women in leadership</li>
                <li>Support career aspirations</li>
                <li>Celebrate women achievers</li>
              </ul>
            </section>

            <Quiz title="Module 5.3: Women Empowerment" questions={module3Quiz} subject="NSS" unitId={5} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Zero-Waste Day</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Internet Safety →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.4</div>
              <div className="lesson-title-main">
                <h1>Internet Safety & Cyber Wellness</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Internet Safety Programs</h3>
              <p>Educating students about safe and responsible internet usage.</p>
              
              <h4>Cyber Safety Education:</h4>
              
              <div className="cyber-gallery">
                <div className="cyber-image">
                  <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cyber safety workshop" className="cyber-photo" />
                  <p>Students learning about internet safety</p>
                </div>
                <div className="cyber-image">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Digital citizenship class" className="cyber-photo" />
                  <p>Digital citizenship education</p>
                </div>
              </div>
              
              <h4>Internet Safety Basics:</h4>
              <ul>
                <li><strong>Privacy Protection:</strong> Guard personal information</li>
                <li><strong>Strong Passwords:</strong> Use complex, unique passwords</li>
                <li><strong>Secure Browsing:</strong> Look for HTTPS, avoid suspicious sites</li>
                <li><strong>Software Updates:</strong> Keep systems and apps updated</li>
                <li><strong>Antivirus Protection:</strong> Install and maintain security software</li>
              </ul>

              <h4>Cyber Threats:</h4>
              
              <h5>1. Cyberbullying</h5>
              <ul>
                <li><strong>Definition:</strong> Harassment, threats, or humiliation online</li>
                <li><strong>Forms:</strong> Trolling, doxing, impersonation, exclusion</li>
                <li><strong>Impact:</strong> Anxiety, depression, low self-esteem</li>
                <li><strong>Prevention:</strong> Block bullies, report abuse, seek support</li>
              </ul>

              <h5>2. Online Predators</h5>
              <ul>
                <li>Strangers seeking to exploit children</li>
                <li>Grooming tactics and manipulation</li>
                <li>Never share personal details with strangers</li>
                <li>Report suspicious behavior</li>
              </ul>

              <h5>3. Phishing and Scams</h5>
              <ul>
                <li>Fake emails requesting information</li>
                <li>Fraudulent websites mimicking legitimate ones</li>
                <li>Lottery scams and fake offers</li>
                <li>Verify before clicking links</li>
              </ul>

              <h5>4. Identity Theft</h5>
              <ul>
                <li>Stealing personal information</li>
                <li>Unauthorized use of accounts</li>
                <li>Financial fraud</li>
                <li>Monitor accounts regularly</li>
              </ul>

              <div className="example-box">
                <h5>Cyberbullying Response Steps</h5>
                <ol>
                  <li><strong>Don't Respond:</strong> Avoid engaging with bully</li>
                  <li><strong>Document:</strong> Take screenshots as evidence</li>
                  <li><strong>Block:</strong> Block the bully on all platforms</li>
                  <li><strong>Report:</strong> Report to platform and authorities</li>
                  <li><strong>Seek Support:</strong> Talk to trusted adults</li>
                  <li><strong>Self-Care:</strong> Take breaks from social media</li>
                </ol>
              </div>

              <h4>Digital Wellness:</h4>
              
              <h5>Healthy Screen Time:</h5>
              <ul>
                <li>Set time limits for device usage</li>
                <li>Take regular breaks (20-20-20 rule)</li>
                <li>Avoid screens before bedtime</li>
                <li>Balance online and offline activities</li>
              </ul>

              <h5>Social Media Wellness:</h5>
              <ul>
                <li>Curate positive feed</li>
                <li>Unfollow negative accounts</li>
                <li>Limit comparison with others</li>
                <li>Practice digital detox</li>
                <li>Be mindful of what you share</li>
              </ul>

              <h4>Responsible Digital Citizenship:</h4>
              <ul>
                <li><strong>Think Before Posting:</strong> Consider impact of content</li>
                <li><strong>Respect Others:</strong> No hate speech or harassment</li>
                <li><strong>Verify Information:</strong> Check facts before sharing</li>
                <li><strong>Give Credit:</strong> Respect intellectual property</li>
                <li><strong>Be Kind:</strong> Spread positivity online</li>
              </ul>

              <h4>Privacy Settings:</h4>
              <ul>
                <li>Review and adjust privacy settings regularly</li>
                <li>Limit who can see your posts</li>
                <li>Control location sharing</li>
                <li>Manage app permissions</li>
                <li>Use two-factor authentication</li>
              </ul>

              <h4>School Programs:</h4>
              <ul>
                <li>Conduct internet safety workshops</li>
                <li>Invite cyber experts for talks</li>
                <li>Create awareness posters</li>
                <li>Organize cyber safety week</li>
                <li>Distribute safety guidelines</li>
                <li>Parent awareness sessions</li>
              </ul>

              <h4>Reporting Mechanisms:</h4>
              <ul>
                <li><strong>Cyber Crime Helpline:</strong> 1930</li>
                <li><strong>National Cyber Crime Portal:</strong> cybercrime.gov.in</li>
                <li><strong>Platform Reporting:</strong> Use in-app report features</li>
                <li><strong>Local Police:</strong> File FIR for serious crimes</li>
              </ul>

              <h4>Digital Footprint:</h4>
              <ul>
                <li>Everything online leaves a trace</li>
                <li>Future employers may check social media</li>
                <li>Delete inappropriate content</li>
                <li>Build positive online presence</li>
                <li>Google yourself periodically</li>
              </ul>
            </section>

            <Quiz title="Module 5.4: Internet Safety" questions={module4Quiz} subject="NSS" unitId={5} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Women Empowerment</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Digital Citizenship →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.5</div>
              <div className="lesson-title-main">
                <h1>Digital Citizenship Activities in Schools</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Promoting Digital Citizenship</h3>
              <p>Teaching students to be responsible, ethical, and safe digital citizens.</p>
              
              <h4>Nine Elements of Digital Citizenship:</h4>
              
              <h5>1. Digital Access</h5>
              <ul>
                <li>Equal access to technology for all</li>
                <li>Bridging digital divide</li>
                <li>Providing resources to underserved</li>
              </ul>

              <h5>2. Digital Commerce</h5>
              <ul>
                <li>Safe online buying and selling</li>
                <li>Understanding e-commerce</li>
                <li>Recognizing online scams</li>
              </ul>

              <h5>3. Digital Communication</h5>
              <ul>
                <li>Appropriate online communication</li>
                <li>Email and messaging etiquette</li>
                <li>Video conferencing norms</li>
              </ul>

              <h5>4. Digital Literacy</h5>
              <ul>
                <li>Teaching and learning with technology</li>
                <li>Evaluating online information</li>
                <li>Using digital tools effectively</li>
              </ul>

              <h5>5. Digital Etiquette</h5>
              <ul>
                <li>Standards of online behavior</li>
                <li>Netiquette rules</li>
                <li>Respectful online interactions</li>
              </ul>

              <h5>6. Digital Law</h5>
              <ul>
                <li>Understanding cyber laws</li>
                <li>Copyright and intellectual property</li>
                <li>Consequences of illegal activities</li>
              </ul>

              <h5>7. Digital Rights & Responsibilities</h5>
              <ul>
                <li>Freedom of speech online</li>
                <li>Privacy rights</li>
                <li>Responsibility for actions</li>
              </ul>

              <h5>8. Digital Health & Wellness</h5>
              <ul>
                <li>Physical and mental well-being</li>
                <li>Managing screen time</li>
                <li>Ergonomics and posture</li>
              </ul>

              <h5>9. Digital Security</h5>
              <ul>
                <li>Protecting devices and data</li>
                <li>Using security measures</li>
                <li>Backing up information</li>
              </ul>

              <div className="example-box">
                <h5>Digital Citizenship Pledge</h5>
                <p>I pledge to:</p>
                <ul>
                  <li>Use technology responsibly and ethically</li>
                  <li>Respect others online and offline</li>
                  <li>Protect my privacy and security</li>
                  <li>Think critically about online information</li>
                  <li>Be kind and supportive in digital spaces</li>
                  <li>Report inappropriate content and behavior</li>
                  <li>Balance my digital and real-world life</li>
                </ul>
              </div>

              <h4>School Activities:</h4>
              
              <h5>1. Digital Citizenship Week</h5>
              <ul>
                <li>Daily themes on different aspects</li>
                <li>Guest speakers and workshops</li>
                <li>Interactive activities and games</li>
                <li>Poster and video competitions</li>
              </ul>

              <h5>2. Peer Education Programs</h5>
              <ul>
                <li>Train student ambassadors</li>
                <li>Peer-to-peer learning sessions</li>
                <li>Student-led campaigns</li>
              </ul>

              <h5>3. Parent Workshops</h5>
              <ul>
                <li>Educate parents about digital safety</li>
                <li>Parental control tools</li>
                <li>Monitoring without invading privacy</li>
                <li>Open communication strategies</li>
              </ul>

              <h5>4. Curriculum Integration</h5>
              <ul>
                <li>Include digital citizenship in lessons</li>
                <li>Project-based learning activities</li>
                <li>Real-world case studies</li>
                <li>Critical thinking exercises</li>
              </ul>

              <h4>Classroom Activities:</h4>
              <ul>
                <li><strong>Scenario Discussions:</strong> Analyze digital dilemmas</li>
                <li><strong>Role Playing:</strong> Practice appropriate responses</li>
                <li><strong>Create PSAs:</strong> Public service announcements</li>
                <li><strong>Digital Portfolio:</strong> Showcase positive digital presence</li>
                <li><strong>Fact-Checking Exercises:</strong> Verify online information</li>
              </ul>

              <h4>Assessment Methods:</h4>
              <ul>
                <li>Digital citizenship quizzes</li>
                <li>Reflection journals</li>
                <li>Project presentations</li>
                <li>Peer evaluations</li>
                <li>Behavioral observations</li>
              </ul>

              <h4>Creating School Policies:</h4>
              <ul>
                <li>Acceptable Use Policy (AUP)</li>
                <li>Social media guidelines</li>
                <li>Device usage rules</li>
                <li>Consequences for violations</li>
                <li>Support systems for issues</li>
              </ul>

              <h4>Resources for Teachers:</h4>
              <ul>
                <li>Common Sense Media</li>
                <li>Digital Citizenship Institute</li>
                <li>Google's Be Internet Awesome</li>
                <li>Microsoft Digital Literacy</li>
                <li>UNESCO Digital Citizenship Education</li>
              </ul>

              <h4>Long-term Goals:</h4>
              <ul>
                <li>Develop critical thinking skills</li>
                <li>Foster empathy and respect</li>
                <li>Promote ethical technology use</li>
                <li>Build resilience against online threats</li>
                <li>Create positive digital communities</li>
              </ul>

              <h4>Measuring Success:</h4>
              <ul>
                <li>Reduction in cyberbullying incidents</li>
                <li>Increased reporting of issues</li>
                <li>Improved online behavior</li>
                <li>Student feedback and surveys</li>
                <li>Parent satisfaction</li>
              </ul>
            </section>

            <Quiz title="Module 5.5: Digital Citizenship" questions={module5Quiz} subject="NSS" unitId={5} moduleId={5} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.nss.gov.in/" target="_blank" rel="noopener noreferrer">NSS Official Website</a></li>
                <li><a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer">National Cyber Crime Portal</a></li>
                <li><a href="https://wcd.nic.in/" target="_blank" rel="noopener noreferrer">Ministry of Women and Child Development</a></li>
                <li><a href="https://www.commonsense.org/" target="_blank" rel="noopener noreferrer">Common Sense Media</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Internet Safety</button>
            </div>
          </div>
        );

      default:
        return <div>Module not found</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit5;