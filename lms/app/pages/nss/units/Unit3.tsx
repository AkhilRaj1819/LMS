'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule }) => {
  const module1Quiz = [
    {
      question: "What is the primary objective of one-day village camps?",
      options: ["Tourism", "Understand rural life and provide assistance", "Entertainment", "Shopping"],
      correctAnswer: 1,
      explanation: "One-day village camps aim to understand rural life and challenges, build community connections, provide immediate assistance, and develop social responsibility among students."
    },
    {
      question: "Who should be contacted first when planning a village camp?",
      options: ["Random villagers", "Sarpanch or village head", "City officials", "No one"],
      correctAnswer: 1,
      explanation: "The Sarpanch or village head is the primary contact for obtaining permissions and understanding village needs before conducting camps."
    },
    {
      question: "What time should a typical one-day camp start?",
      options: ["Afternoon", "Evening", "Early morning (7-9 AM)", "Night"],
      correctAnswer: 2,
      explanation: "One-day camps typically start early morning (7-9 AM) to maximize productive hours and complete activities before evening departure."
    },
    {
      question: "Which team is responsible for photos, videos, and reports?",
      options: ["Logistics team", "Documentation team", "Activity leaders", "Communication team"],
      correctAnswer: 1,
      explanation: "The documentation team is responsible for capturing photos, videos, and preparing reports of camp activities."
    },
    {
      question: "What should be done after completing a village camp?",
      options: ["Forget about it", "Compile feedback and prepare reports", "Never return", "Ignore villagers"],
      correctAnswer: 1,
      explanation: "Post-camp activities include compiling feedback, preparing detailed reports, sharing experiences, planning follow-ups, and thanking village leaders."
    }
  ];

  const module2Quiz = [
    {
      question: "What is the main purpose of village surveys?",
      options: ["Entertainment", "Identify problems and assess needs", "Waste time", "Tourism"],
      correctAnswer: 1,
      explanation: "Village surveys help identify real problems, understand demographics, assess resources, prioritize interventions, and establish baseline data for effective community development."
    },
    {
      question: "Which survey method involves door-to-door questionnaires?",
      options: ["Focus groups", "Household surveys", "Observation only", "Interviews only"],
      correctAnswer: 1,
      explanation: "Household surveys involve door-to-door questionnaires to collect detailed information from individual families about their needs and challenges."
    },
    {
      question: "What is a common rural problem identified through surveys?",
      options: ["Too much water", "Water scarcity and poor sanitation", "Excessive wealth", "Too many jobs"],
      correctAnswer: 1,
      explanation: "Common rural problems include water scarcity, poor sanitation, limited healthcare access, education gaps, unemployment, and agricultural challenges."
    },
    {
      question: "How can problems be addressed through media?",
      options: ["Ignore them", "Write articles and create awareness campaigns", "Hide information", "Avoid publicity"],
      correctAnswer: 1,
      explanation: "Problems can be addressed through media by writing articles, creating social media campaigns, contacting TV/radio stations, and documenting issues through videos."
    },
    {
      question: "Who should be consulted for health-related village problems?",
      options: ["Only students", "Doctors and health experts", "No one", "Politicians only"],
      correctAnswer: 1,
      explanation: "Health-related problems should be addressed by consulting doctors, health professionals, and involving relevant medical experts for proper solutions."
    }
  ];

  const module3Quiz = [
    {
      question: "What is a key topic in general health awareness?",
      options: ["Ignoring hygiene", "Personal hygiene and nutrition", "Avoiding doctors", "Skipping meals"],
      correctAnswer: 1,
      explanation: "General health awareness covers personal hygiene, nutrition, sanitation, disease prevention, vaccination, and first aid basics."
    },
    {
      question: "Which is a warning sign of mental health issues?",
      options: ["Regular exercise", "Persistent sadness and withdrawal", "Good sleep", "Healthy eating"],
      correctAnswer: 1,
      explanation: "Mental health warning signs include persistent sadness, withdrawal from activities, sleep/appetite changes, difficulty concentrating, and extreme mood swings."
    },
    {
      question: "How is HIV NOT transmitted?",
      options: ["Blood transfusion", "Hugging and sharing food", "Sexual contact", "Mother to child"],
      correctAnswer: 1,
      explanation: "HIV is NOT spread through hugging, shaking hands, sharing food, or mosquito bites. It spreads through blood, sexual contact, and mother-to-child transmission."
    },
    {
      question: "What is an important component of spiritual health?",
      options: ["Stress and anxiety", "Inner peace and meditation", "Isolation", "Negativity"],
      correctAnswer: 1,
      explanation: "Spiritual health components include inner peace through meditation, finding purpose and meaning, values and ethics, community connection, and gratitude practices."
    },
    {
      question: "Who should be invited as resource persons for health programs?",
      options: ["Only students", "Doctors, psychologists, and nutritionists", "No experts needed", "Random people"],
      correctAnswer: 1,
      explanation: "Health programs should involve doctors, nurses, psychologists, counselors, nutritionists, yoga instructors, and social workers as resource persons."
    }
  ];

  const module4Quiz = [
    {
      question: "What is a fundamental consumer right in India?",
      options: ["Right to be exploited", "Right to safety and information", "No rights", "Right to overpay"],
      correctAnswer: 1,
      explanation: "Consumer rights include right to safety, information, choice, be heard, redressal, and consumer education as per Consumer Protection Act."
    },
    {
      question: "What does MRP stand for?",
      options: ["Minimum Retail Price", "Maximum Retail Price", "Market Rate Price", "Monthly Rate Price"],
      correctAnswer: 1,
      explanation: "MRP stands for Maximum Retail Price - the maximum price at which a product can be sold, including all taxes, and sellers cannot charge above it."
    },
    {
      question: "Which forum handles consumer complaints up to ₹1 crore?",
      options: ["National Commission", "District Forum", "State Commission", "Supreme Court"],
      correctAnswer: 1,
      explanation: "District Forum handles consumer complaints up to ₹1 crore, State Commission handles ₹1-10 crore, and National Commission handles above ₹10 crore."
    },
    {
      question: "What is the National Consumer Helpline number?",
      options: ["100", "1800-11-4000", "911", "1234"],
      correctAnswer: 1,
      explanation: "The National Consumer Helpline number is 1800-11-4000, providing assistance for consumer complaints and grievances."
    },
    {
      question: "What should consumers always ask for when purchasing?",
      options: ["Nothing", "Bills and receipts", "Discounts only", "Free items"],
      correctAnswer: 1,
      explanation: "Consumers should always ask for bills and receipts as proof of purchase, which are essential for warranty claims and filing complaints."
    }
  ];

  const module5Quiz = [
    {
      question: "What is a benefit of collaborating with NGOs?",
      options: ["No benefits", "Access to expertise and wider impact", "More problems", "Waste of time"],
      correctAnswer: 1,
      explanation: "Collaboration with NGOs provides access to expertise, wider reach, resource sharing, sustainability of initiatives, and learning opportunities for students."
    },
    {
      question: "What document formalizes partnership between NSS and NGOs?",
      options: ["Verbal agreement", "MoU (Memorandum of Understanding)", "No document needed", "Email only"],
      correctAnswer: 1,
      explanation: "An MoU (Memorandum of Understanding) is signed to formalize partnerships, defining roles, responsibilities, and terms of collaboration."
    },
    {
      question: "Which is an example of a collaborative education program?",
      options: ["Ignoring children", "Remedial classes for underprivileged children", "Closing schools", "No programs"],
      correctAnswer: 1,
      explanation: "Collaborative education programs include remedial classes, digital literacy, career guidance, scholarship distribution, and library setup in villages."
    },
    {
      question: "What should be checked when identifying partner organizations?",
      options: ["Nothing", "Registration, credibility, and track record", "Only name", "Random selection"],
      correctAnswer: 1,
      explanation: "When identifying partners, check their registration, credibility, track record, alignment with NSS objectives, and visit their ongoing projects."
    },
    {
      question: "What is essential for sustaining partnerships?",
      options: ["Ignoring partners", "Regular communication and mutual respect", "No contact", "Competition"],
      correctAnswer: 1,
      explanation: "Sustaining partnerships requires regular communication, mutual respect and trust, transparent operations, shared credit, and long-term commitment."
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
                <h1>One Day Special Camp in Village</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="NSS students in village camp" className="content-image" />
                <p className="image-caption">NSS volunteers conducting village outreach programs</p>
              </div>
              
              <h3>Conducting Village Camps</h3>
              <p>One-day special camps provide opportunities for students to engage directly with rural communities and understand ground realities.</p>
              
              <h4>Objectives:</h4>
              <ul>
                <li>Understand rural life and challenges</li>
                <li>Build connection with community</li>
                <li>Provide immediate assistance and services</li>
                <li>Develop empathy and social responsibility</li>
                <li>Apply academic knowledge practically</li>
              </ul>

              <h4>Pre-Camp Planning:</h4>
              <ol>
                <li><strong>Village Selection:</strong> Choose accessible village with identified needs</li>
                <li><strong>Contact Leaders:</strong> Meet sarpanch, village head, local authorities</li>
                <li><strong>Permission:</strong> Obtain necessary approvals</li>
                <li><strong>Survey:</strong> Preliminary visit to assess needs</li>
                <li><strong>Team Formation:</strong> Assign roles and responsibilities</li>
                <li><strong>Resource Planning:</strong> Arrange materials, transport, food</li>
              </ol>

              <h4>Contacting Village Leaders:</h4>
              <ul>
                <li><strong>Sarpanch/Village Head:</strong> Primary contact for permissions</li>
                <li><strong>Anganwadi Workers:</strong> Health and child welfare information</li>
                <li><strong>School Teachers:</strong> Education-related activities</li>
                <li><strong>Youth Groups:</strong> Local volunteers and support</li>
                <li><strong>Self-Help Groups:</strong> Women empowerment initiatives</li>
              </ul>

              <div className="example-box">
                <h5>Sample Camp Schedule</h5>
                <p><strong>7:00 AM:</strong> Departure from campus</p>
                <p><strong>9:00 AM:</strong> Arrival and meeting with village leaders</p>
                <p><strong>10:00 AM:</strong> Inauguration and activity commencement</p>
                <p><strong>12:00 PM:</strong> Lunch break</p>
                <p><strong>1:00 PM:</strong> Continue activities</p>
                <p><strong>4:00 PM:</strong> Feedback session with villagers</p>
                <p><strong>5:00 PM:</strong> Departure</p>
              </div>

              <h4>Camp Activities:</h4>
              <ul>
                <li>Health check-up camps</li>
                <li>Awareness programs</li>
                <li>Cleanliness drives</li>
                <li>Educational activities for children</li>
                <li>Tree plantation</li>
                <li>Distribution of materials</li>
                <li>Cultural programs</li>
              </ul>

              <h4>Team Roles:</h4>
              <ul>
                <li><strong>Coordinator:</strong> Overall management</li>
                <li><strong>Documentation Team:</strong> Photos, videos, reports</li>
                <li><strong>Activity Leaders:</strong> Manage specific programs</li>
                <li><strong>Logistics Team:</strong> Arrange materials and transport</li>
                <li><strong>Communication Team:</strong> Liaison with villagers</li>
              </ul>

              <h4>Safety and Guidelines:</h4>
              <ul>
                <li>Carry first aid kit</li>
                <li>Maintain discipline and respect</li>
                <li>Follow local customs and traditions</li>
                <li>Stay hydrated and protected from sun</li>
                <li>Keep emergency contacts handy</li>
              </ul>

              <h4>Post-Camp Activities:</h4>
              <ul>
                <li>Compile feedback and observations</li>
                <li>Prepare detailed report</li>
                <li>Share photos and experiences</li>
                <li>Plan follow-up activities</li>
                <li>Thank village leaders formally</li>
              </ul>
            </section>

            <Quiz title="Module 3.1: Village Camp" questions={module1Quiz} subject="NSS" unitId={3} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Village Survey & Problem Identification →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.2</div>
              <div className="lesson-title-main">
                <h1>Village Survey & Problem Identification</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Conducting Village Surveys</h3>
              <p>Systematic surveys help identify real problems and needs of rural communities for effective intervention.</p>
              
              <h4>Survey Objectives:</h4>
              <ul>
                <li>Understand demographic profile</li>
                <li>Identify key problems and challenges</li>
                <li>Assess available resources</li>
                <li>Prioritize intervention areas</li>
                <li>Establish baseline data</li>
              </ul>

              <h4>Village Survey Activities:</h4>
              
              <div className="survey-gallery">
                <div className="survey-image">
                  <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Students conducting village survey" className="survey-photo" />
                  <p>NSS volunteers conducting village survey</p>
                </div>
                <div className="survey-image">
                  <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Community interaction" className="survey-photo" />
                  <p>Interacting with village community</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Village Development Through NSS</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/0aoParwdiHo?si=CpYBEpQjUB2VAmC9"
                    title="NSS Village Development Activities"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h4>Survey Areas:</h4>
              
              <h5>1. Demographics</h5>
              <ul>
                <li>Total population and households</li>
                <li>Age and gender distribution</li>
                <li>Literacy rates</li>
                <li>Occupation patterns</li>
              </ul>

              <h5>2. Infrastructure</h5>
              <ul>
                <li>Roads and connectivity</li>
                <li>Water supply and sanitation</li>
                <li>Electricity availability</li>
                <li>Schools and health centers</li>
              </ul>

              <h5>3. Health and Sanitation</h5>
              <ul>
                <li>Common diseases</li>
                <li>Healthcare access</li>
                <li>Toilet facilities</li>
                <li>Waste management practices</li>
              </ul>

              <h5>4. Education</h5>
              <ul>
                <li>School enrollment rates</li>
                <li>Dropout rates</li>
                <li>Quality of education</li>
                <li>Adult literacy programs</li>
              </ul>

              <h5>5. Livelihood</h5>
              <ul>
                <li>Primary occupations</li>
                <li>Income levels</li>
                <li>Employment opportunities</li>
                <li>Skill development needs</li>
              </ul>

              <h4>Survey Methods:</h4>
              <ul>
                <li><strong>Household Surveys:</strong> Door-to-door questionnaires</li>
                <li><strong>Focus Group Discussions:</strong> Group conversations</li>
                <li><strong>Key Informant Interviews:</strong> Village leaders, teachers</li>
                <li><strong>Observation:</strong> Direct observation of conditions</li>
                <li><strong>Participatory Methods:</strong> Community mapping, transect walks</li>
              </ul>

              <div className="example-box">
                <h5>Sample Survey Questions</h5>
                <ul>
                  <li>How many members in your household?</li>
                  <li>What is your primary source of income?</li>
                  <li>Do you have access to clean drinking water?</li>
                  <li>Are children attending school regularly?</li>
                  <li>What are the major problems in the village?</li>
                </ul>
              </div>

              <h4>Problem Identification:</h4>
              <p>Common rural problems identified through surveys:</p>
              <ul>
                <li><strong>Water Scarcity:</strong> Inadequate drinking water supply</li>
                <li><strong>Poor Sanitation:</strong> Lack of toilets, open defecation</li>
                <li><strong>Health Issues:</strong> Limited healthcare access</li>
                <li><strong>Education Gaps:</strong> Low enrollment, poor infrastructure</li>
                <li><strong>Unemployment:</strong> Limited job opportunities</li>
                <li><strong>Agricultural Problems:</strong> Irrigation, market access</li>
              </ul>

              <h4>Helping Solve Problems:</h4>
              
              <h5>Via Media:</h5>
              <ul>
                <li>Write articles in newspapers</li>
                <li>Create social media campaigns</li>
                <li>Contact local TV/radio stations</li>
                <li>Document issues through videos</li>
                <li>Raise awareness through blogs</li>
              </ul>

              <h5>Via Authorities:</h5>
              <ul>
                <li>Submit reports to district administration</li>
                <li>Meet local MLAs/MPs</li>
                <li>Approach relevant government departments</li>
                <li>File RTI applications if needed</li>
                <li>Coordinate with panchayat officials</li>
              </ul>

              <h5>Via Experts:</h5>
              <ul>
                <li>Consult doctors for health issues</li>
                <li>Involve engineers for infrastructure</li>
                <li>Engage agricultural experts</li>
                <li>Seek legal advice when needed</li>
                <li>Connect with NGOs working in the area</li>
              </ul>

              <h4>Documentation:</h4>
              <ul>
                <li>Prepare detailed survey report</li>
                <li>Include photographs and evidence</li>
                <li>Create problem priority matrix</li>
                <li>Develop action plan</li>
                <li>Share with stakeholders</li>
              </ul>
            </section>

            <Quiz title="Module 3.2: Village Survey" questions={module2Quiz} subject="NSS" unitId={3} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Village Camp</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Health Awareness Programs →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.3</div>
              <div className="lesson-title-main">
                <h1>Health Awareness Programs</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Conducting Health Awareness</h3>
              <p>Health awareness programs educate communities about various health issues and promote healthy lifestyles.</p>
              
              <h4>General Health Awareness</h4>
              
              <h5>Topics to Cover:</h5>
              <ul>
                <li><strong>Personal Hygiene:</strong> Handwashing, bathing, dental care</li>
                <li><strong>Nutrition:</strong> Balanced diet, malnutrition prevention</li>
                <li><strong>Sanitation:</strong> Clean water, toilet usage, waste disposal</li>
                <li><strong>Common Diseases:</strong> Prevention and treatment</li>
                <li><strong>Vaccination:</strong> Importance of immunization</li>
                <li><strong>First Aid:</strong> Basic emergency response</li>
              </ul>

              <h5>Activities:</h5>
              <ul>
                <li>Health check-up camps</li>
                <li>Demonstrations on handwashing</li>
                <li>Distribution of hygiene kits</li>
                <li>Screening for common diseases</li>
                <li>Nutrition counseling sessions</li>
              </ul>

              <h4>Health Awareness Campaign Photos:</h4>
              
              <div className="health-gallery">
                <div className="health-image">
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Health checkup camp" className="health-photo" />
                  <p>Free health checkup camp in village</p>
                </div>
                <div className="health-image">
                  <img src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hygiene demonstration" className="health-photo" />
                  <p>Handwashing demonstration</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Mental Health Awareness</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/GfCWUX9gnDc?si=N3i6EiNWFNGOITQb"
                    title="Mental Health Awareness for Students"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h4>Mental Health Awareness</h4>
              
              <h5>Key Topics:</h5>
              <ul>
                <li><strong>Stress Management:</strong> Coping techniques</li>
                <li><strong>Depression & Anxiety:</strong> Recognition and support</li>
                <li><strong>Emotional Well-being:</strong> Self-care practices</li>
                <li><strong>Stigma Reduction:</strong> Normalizing mental health discussions</li>
                <li><strong>Help-seeking Behavior:</strong> When and where to get help</li>
              </ul>

              <h5>Activities:</h5>
              <ul>
                <li>Awareness sessions on mental health</li>
                <li>Stress relief workshops</li>
                <li>Counseling services</li>
                <li>Meditation and yoga sessions</li>
                <li>Peer support groups</li>
              </ul>

              <div className="example-box">
                <h5>Mental Health Warning Signs</h5>
                <ul>
                  <li>Persistent sadness or hopelessness</li>
                  <li>Withdrawal from social activities</li>
                  <li>Changes in sleep or appetite</li>
                  <li>Difficulty concentrating</li>
                  <li>Extreme mood swings</li>
                </ul>
                <p><strong>Action:</strong> Encourage professional help and provide support resources.</p>
              </div>

              <h4>Spiritual Health</h4>
              
              <h5>Components:</h5>
              <ul>
                <li><strong>Inner Peace:</strong> Meditation and mindfulness</li>
                <li><strong>Purpose & Meaning:</strong> Finding life direction</li>
                <li><strong>Values & Ethics:</strong> Moral development</li>
                <li><strong>Connection:</strong> Community and relationships</li>
                <li><strong>Gratitude:</strong> Positive thinking practices</li>
              </ul>

              <h5>Activities:</h5>
              <ul>
                <li>Yoga and meditation sessions</li>
                <li>Spiritual discourse and discussions</li>
                <li>Value education programs</li>
                <li>Community prayer meetings</li>
                <li>Gratitude journaling workshops</li>
              </ul>

              <h4>HIV/AIDS Awareness</h4>
              
              <h5>Key Messages:</h5>
              <ul>
                <li><strong>Transmission:</strong> How HIV spreads (blood, sexual contact, mother-to-child)</li>
                <li><strong>Prevention:</strong> Safe practices, condom use, blood safety</li>
                <li><strong>Testing:</strong> Importance of knowing status</li>
                <li><strong>Treatment:</strong> Antiretroviral therapy (ART)</li>
                <li><strong>Stigma Reduction:</strong> HIV+ people deserve respect and support</li>
                <li><strong>Myths:</strong> Cannot spread through casual contact, sharing food</li>
              </ul>

              <h5>Activities:</h5>
              <ul>
                <li>Awareness sessions in schools and colleges</li>
                <li>Distribution of informational materials</li>
                <li>Street plays on HIV/AIDS</li>
                <li>Free testing camps</li>
                <li>Counseling services</li>
              </ul>

              <div className="example-box">
                <h5>HIV/AIDS Facts</h5>
                <ul>
                  <li>HIV is NOT spread by: Hugging, shaking hands, sharing food, mosquito bites</li>
                  <li>Early detection and treatment can lead to normal life expectancy</li>
                  <li>Prevention is possible through safe practices</li>
                  <li>Confidential testing is available at government centers</li>
                </ul>
              </div>

              <h4>Program Implementation:</h4>
              <ol>
                <li>Identify target audience</li>
                <li>Prepare educational materials</li>
                <li>Invite health professionals</li>
                <li>Conduct interactive sessions</li>
                <li>Distribute information pamphlets</li>
                <li>Follow-up and evaluation</li>
              </ol>

              <h4>Resource Persons:</h4>
              <ul>
                <li>Doctors and nurses</li>
                <li>Psychologists and counselors</li>
                <li>Nutritionists</li>
                <li>Yoga instructors</li>
                <li>Social workers</li>
                <li>NGO representatives</li>
              </ul>
            </section>

            <Quiz title="Module 3.3: Health Awareness" questions={module3Quiz} subject="NSS" unitId={3} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Village Survey</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Consumer Awareness →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.4</div>
              <div className="lesson-title-main">
                <h1>Consumer Awareness Programs</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Consumer Rights</h3>
              <p>Consumer awareness empowers people to make informed decisions and protect themselves from exploitation.</p>
              
              <h4>Consumer Rights in India:</h4>
              <ul>
                <li><strong>Right to Safety:</strong> Protection against hazardous goods</li>
                <li><strong>Right to Information:</strong> Complete product information</li>
                <li><strong>Right to Choose:</strong> Access to variety of products</li>
                <li><strong>Right to be Heard:</strong> Voice concerns and complaints</li>
                <li><strong>Right to Redressal:</strong> Compensation for defective products</li>
                <li><strong>Right to Consumer Education:</strong> Awareness about rights</li>
              </ul>

              <h4>Consumer Protection Act, 2019:</h4>
              <p>Key provisions of the Act:</p>
              <ul>
                <li>Establishes Consumer Protection Councils</li>
                <li>Creates Consumer Disputes Redressal Commissions</li>
                <li>Covers e-commerce transactions</li>
                <li>Provides for product liability</li>
                <li>Addresses unfair trade practices</li>
                <li>Protects against misleading advertisements</li>
              </ul>

              <h4>Common Consumer Problems:</h4>
              <ul>
                <li><strong>Defective Products:</strong> Poor quality, manufacturing defects</li>
                <li><strong>Overcharging:</strong> MRP violations, hidden charges</li>
                <li><strong>False Advertising:</strong> Misleading claims</li>
                <li><strong>Poor Service:</strong> Delayed or substandard service</li>
                <li><strong>Adulteration:</strong> Food and medicine contamination</li>
                <li><strong>Warranty Issues:</strong> Denial of warranty claims</li>
              </ul>

              <div className="example-box">
                <h5>How to File a Consumer Complaint</h5>
                <ol>
                  <li>Gather evidence (bills, receipts, photos)</li>
                  <li>Contact seller/manufacturer first</li>
                  <li>If unresolved, file complaint at Consumer Forum</li>
                  <li>Choose appropriate forum based on claim amount:
                    <ul>
                      <li>District Forum: Up to ₹1 crore</li>
                      <li>State Commission: ₹1-10 crore</li>
                      <li>National Commission: Above ₹10 crore</li>
                    </ul>
                  </li>
                  <li>File online through e-Daakhil portal</li>
                </ol>
              </div>

              <h4>Legal Provisions to Explain:</h4>
              
              <h5>1. MRP (Maximum Retail Price)</h5>
              <ul>
                <li>Mandatory on packaged goods</li>
                <li>Cannot charge above MRP</li>
                <li>Includes all taxes</li>
              </ul>

              <h5>2. Product Standards</h5>
              <ul>
                <li>ISI mark for quality standards</li>
                <li>AGMARK for agricultural products</li>
                <li>FPO mark for food products</li>
                <li>Hallmark for gold jewelry</li>
              </ul>

              <h5>3. Warranty and Guarantee</h5>
              <ul>
                <li>Manufacturer's commitment to quality</li>
                <li>Free repair/replacement during period</li>
                <li>Keep warranty cards and bills</li>
              </ul>

              <h5>4. Return and Refund Policies</h5>
              <ul>
                <li>Right to return defective products</li>
                <li>Refund or replacement options</li>
                <li>Time limits for returns</li>
              </ul>

              <h4>Smart Consumer Practices:</h4>
              <ul>
                <li>Always ask for bills and receipts</li>
                <li>Check MRP before purchasing</li>
                <li>Read product labels carefully</li>
                <li>Verify quality marks and certifications</li>
                <li>Compare prices and quality</li>
                <li>Be aware of expiry dates</li>
                <li>Avoid impulse buying</li>
              </ul>

              <h4>Awareness Activities:</h4>
              <ul>
                <li>Organize consumer awareness camps</li>
                <li>Distribute pamphlets on consumer rights</li>
                <li>Conduct workshops on legal provisions</li>
                <li>Street plays on consumer exploitation</li>
                <li>Quiz competitions on consumer laws</li>
                <li>Display posters in markets</li>
              </ul>

              <h4>Important Helplines:</h4>
              <ul>
                <li><strong>National Consumer Helpline:</strong> 1800-11-4000</li>
                <li><strong>Food Safety Helpline:</strong> 1800-11-2100</li>
                <li><strong>Cyber Crime Helpline:</strong> 1930</li>
              </ul>

              <h4>Online Consumer Protection:</h4>
              <ul>
                <li>Verify website authenticity</li>
                <li>Use secure payment gateways</li>
                <li>Read terms and conditions</li>
                <li>Check return/refund policies</li>
                <li>Save transaction records</li>
                <li>Report fraudulent websites</li>
              </ul>
            </section>

            <Quiz title="Module 3.4: Consumer Awareness" questions={module4Quiz} subject="NSS" unitId={3} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Health Awareness</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Collaboration Programs →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.5</div>
              <div className="lesson-title-main">
                <h1>Collaboration with NGOs & Charities</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Partnering with Organizations</h3>
              <p>Collaboration with NGOs and local charities amplifies impact and provides access to expertise and resources.</p>
              
              <h4>Benefits of Collaboration:</h4>
              <ul>
                <li>Access to expertise and experience</li>
                <li>Wider reach and impact</li>
                <li>Resource sharing and support</li>
                <li>Sustainability of initiatives</li>
                <li>Learning opportunities for students</li>
                <li>Credibility and trust in community</li>
              </ul>

              <h4>Types of Organizations to Partner:</h4>
              
              <h5>1. Local NGOs</h5>
              <ul>
                <li>Community development organizations</li>
                <li>Education-focused NGOs</li>
                <li>Health and sanitation groups</li>
                <li>Women empowerment organizations</li>
                <li>Environmental NGOs</li>
              </ul>

              <h5>2. Charitable Trusts</h5>
              <ul>
                <li>Religious charitable organizations</li>
                <li>Corporate social responsibility (CSR) initiatives</li>
                <li>Philanthropic foundations</li>
                <li>Community welfare trusts</li>
              </ul>

              <h5>3. Government Programs</h5>
              <ul>
                <li>Swachh Bharat Mission</li>
                <li>Beti Bachao Beti Padhao</li>
                <li>National Health Mission</li>
                <li>Skill India programs</li>
                <li>Digital India initiatives</li>
              </ul>

              <h4>How to Identify Partner Organizations:</h4>
              <ul>
                <li>Research NGOs working in target area</li>
                <li>Check registration and credibility</li>
                <li>Assess their track record</li>
                <li>Evaluate alignment with NSS objectives</li>
                <li>Visit their ongoing projects</li>
                <li>Speak with beneficiaries</li>
              </ul>

              <div className="example-box">
                <h5>Steps to Establish Partnership</h5>
                <ol>
                  <li>Identify potential partner organizations</li>
                  <li>Initiate contact through formal letter</li>
                  <li>Schedule meeting to discuss collaboration</li>
                  <li>Define roles and responsibilities</li>
                  <li>Sign MoU (Memorandum of Understanding)</li>
                  <li>Plan joint activities and timeline</li>
                  <li>Execute programs collaboratively</li>
                  <li>Regular review and feedback</li>
                </ol>
              </div>

              <h4>Collaborative Program Ideas:</h4>
              
              <h5>Education Programs:</h5>
              <ul>
                <li>Remedial classes for underprivileged children</li>
                <li>Digital literacy programs</li>
                <li>Career guidance sessions</li>
                <li>Scholarship distribution</li>
                <li>Library setup in villages</li>
              </ul>

              <h5>Health Programs:</h5>
              <ul>
                <li>Medical camps with health NGOs</li>
                <li>Vaccination drives</li>
                <li>Nutrition programs for children</li>
                <li>Sanitation awareness campaigns</li>
                <li>Blood donation camps</li>
              </ul>

              <h5>Livelihood Programs:</h5>
              <ul>
                <li>Skill development workshops</li>
                <li>Self-help group formation</li>
                <li>Microfinance awareness</li>
                <li>Entrepreneurship training</li>
                <li>Market linkage support</li>
              </ul>

              <h5>Environmental Programs:</h5>
              <ul>
                <li>Tree plantation drives</li>
                <li>Waste management projects</li>
                <li>Water conservation initiatives</li>
                <li>Renewable energy promotion</li>
                <li>Wildlife conservation awareness</li>
              </ul>

              <h4>Student Roles in Collaboration:</h4>
              <ul>
                <li><strong>Volunteers:</strong> Participate in NGO activities</li>
                <li><strong>Interns:</strong> Work on specific projects</li>
                <li><strong>Trainers:</strong> Conduct workshops and sessions</li>
                <li><strong>Researchers:</strong> Collect data and prepare reports</li>
                <li><strong>Advocates:</strong> Raise awareness and mobilize support</li>
              </ul>

              <h4>Documentation and Reporting:</h4>
              <ul>
                <li>Maintain activity logs</li>
                <li>Document impact through photos and videos</li>
                <li>Collect beneficiary testimonials</li>
                <li>Prepare joint reports</li>
                <li>Share success stories</li>
                <li>Acknowledge partner contributions</li>
              </ul>

              <h4>Sustaining Partnerships:</h4>
              <ul>
                <li>Regular communication and meetings</li>
                <li>Mutual respect and trust</li>
                <li>Transparent operations</li>
                <li>Shared credit for achievements</li>
                <li>Long-term commitment</li>
                <li>Flexibility and adaptability</li>
              </ul>

              <h4>Notable NGOs in India:</h4>
              <ul>
                <li><strong>CRY (Child Rights and You):</strong> Child welfare</li>
                <li><strong>Pratham:</strong> Education</li>
                <li><strong>Goonj:</strong> Disaster relief and development</li>
                <li><strong>Akshaya Patra:</strong> Mid-day meal program</li>
                <li><strong>Smile Foundation:</strong> Education and healthcare</li>
                <li><strong>Helpage India:</strong> Elderly care</li>
              </ul>

              <h4>Evaluation of Partnership:</h4>
              <ul>
                <li>Assess achievement of objectives</li>
                <li>Measure impact on beneficiaries</li>
                <li>Review resource utilization</li>
                <li>Identify challenges and learnings</li>
                <li>Plan for future collaboration</li>
              </ul>
            </section>

            <Quiz title="Module 3.5: NGO Collaboration" questions={module5Quiz} subject="NSS" unitId={3} moduleId={5} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.nss.gov.in/" target="_blank" rel="noopener noreferrer">NSS Official Website</a></li>
                <li><a href="https://consumeraffairs.nic.in/" target="_blank" rel="noopener noreferrer">Department of Consumer Affairs</a></li>
                <li><a href="https://www.nhp.gov.in/" target="_blank" rel="noopener noreferrer">National Health Portal</a></li>
                <li><a href="https://naco.gov.in/" target="_blank" rel="noopener noreferrer">National AIDS Control Organisation</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Consumer Awareness</button>
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