'use client';
import React, { useEffect, useRef } from 'react';
import Quiz from '../components/Quiz';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const module1Quiz = [
    {
      question: "What is the primary objective of career orientation programs?",
      options: ["To assign jobs to students", "To help students identify career goals and create roadmaps", "To teach technical skills only", "To conduct exams"],
      correctAnswer: 1,
      explanation: "Career orientation programs help students identify their career goals, understand their strengths, and create structured plans for skill development and learning."
    },
    {
      question: "Which component is essential in creating a career roadmap?",
      options: ["Only academic grades", "Setting milestones and timelines", "Avoiding challenges", "Ignoring personal interests"],
      correctAnswer: 1,
      explanation: "A career roadmap requires setting clear milestones and timelines to track progress toward career goals effectively."
    },
    {
      question: "What should be included in future plans and activities?",
      options: ["Only entertainment", "Academic excellence and skill development", "Avoiding community service", "Ignoring certifications"],
      correctAnswer: 1,
      explanation: "Future plans should include academic excellence, skill development, internships, certifications, networking, and community service through NSS activities."
    },
    {
      question: "Which skill is crucial for career success?",
      options: ["Avoiding teamwork", "Communication and leadership", "Working in isolation", "Ignoring feedback"],
      correctAnswer: 1,
      explanation: "Communication skills, leadership abilities, teamwork, problem-solving, and adaptability are crucial for career success."
    },
    {
      question: "What is the purpose of self-assessment in career planning?",
      options: ["To compare with others", "To understand personal strengths and interests", "To avoid challenges", "To limit options"],
      correctAnswer: 1,
      explanation: "Self-assessment helps students understand their personal strengths, weaknesses, interests, and talents to make informed career decisions."
    }
  ];

  const module2Quiz = [
    {
      question: "What is the main purpose of ice breaking activities?",
      options: ["To waste time", "To reduce anxiety and foster team bonding", "To create competition", "To test knowledge"],
      correctAnswer: 1,
      explanation: "Ice breaking activities help reduce anxiety, foster team bonding, encourage open communication, and create an inclusive atmosphere."
    },
    {
      question: "Which activity involves sharing two true statements and one false statement?",
      options: ["Human Bingo", "Two Truths and a Lie", "Speed Networking", "Name Game"],
      correctAnswer: 1,
      explanation: "Two Truths and a Lie is an ice breaking activity where participants share three statements about themselves - two true and one false."
    },
    {
      question: "What do students expect from NSS courses?",
      options: ["Only certificates", "Skill development and social impact", "No learning", "Avoiding community work"],
      correctAnswer: 1,
      explanation: "Students expect skill development, social impact opportunities, personal growth, networking, hands-on experience, and recognition from NSS courses."
    },
    {
      question: "Which type of talent falls under creative talents?",
      options: ["Data analysis", "Art, music, writing, design", "Programming only", "Management only"],
      correctAnswer: 1,
      explanation: "Creative talents include art, music, writing, and design, which involve artistic expression and innovation."
    },
    {
      question: "How can you develop your skills effectively?",
      options: ["Avoid practice", "Practice regularly and seek feedback", "Work alone always", "Ignore failures"],
      correctAnswer: 1,
      explanation: "Skills are developed through regular practice, seeking feedback, taking on challenges, learning from failures, and collaborating with others."
    }
  ];

  const module3Quiz = [
    {
      question: "Why are success stories important for students?",
      options: ["To create pressure", "To inspire and demonstrate that success is possible", "To discourage efforts", "To compare negatively"],
      correctAnswer: 1,
      explanation: "Success stories inspire students, provide real-life examples of achievement, demonstrate overcoming obstacles, and offer practical lessons."
    },
    {
      question: "Which movie depicts overcoming homelessness to achieve success?",
      options: ["3 Idiots", "The Pursuit of Happyness", "Dangal", "Lagaan"],
      correctAnswer: 1,
      explanation: "The Pursuit of Happyness is a biographical film about overcoming homelessness and adversity to achieve professional success."
    },
    {
      question: "What lesson does the movie 'Dangal' teach?",
      options: ["Avoiding sports", "Breaking gender barriers in sports", "Giving up easily", "Following only traditions"],
      correctAnswer: 1,
      explanation: "Dangal teaches about breaking gender barriers in sports, determination, and challenging societal norms."
    },
    {
      question: "Which key lesson is common in most success stories?",
      options: ["Giving up quickly", "Persistence and never giving up", "Avoiding hard work", "Limiting vision"],
      correctAnswer: 1,
      explanation: "Persistence and never giving up despite failures is a common lesson in success stories, along with vision, hard work, and resilience."
    },
    {
      question: "What should be included when creating a success story presentation?",
      options: ["Only achievements", "Background, challenges, turning points, and lessons", "Just photos", "No research"],
      correctAnswer: 1,
      explanation: "A success story presentation should include the person's background, challenges faced, key turning points, lessons learned, and actionable insights."
    }
  ];

  const module4Quiz = [
    {
      question: "What is the primary objective of talent shows?",
      options: ["To create competition only", "To encourage self-expression and build confidence", "To judge harshly", "To limit participation"],
      correctAnswer: 1,
      explanation: "Talent shows encourage self-expression, build confidence, celebrate diverse talents, and create a sense of community."
    },
    {
      question: "Which is India's national song?",
      options: ["Jana Gana Mana", "Vande Mataram", "Ae Mere Watan Ke Logo", "Maa Tujhe Salaam"],
      correctAnswer: 1,
      explanation: "Vande Mataram is the national song of India, while Jana Gana Mana is the national anthem."
    },
    {
      question: "What benefit does singing patriotic songs provide?",
      options: ["Creates division", "Develops sense of national identity and unity", "Promotes conflict", "Limits creativity"],
      correctAnswer: 1,
      explanation: "Singing patriotic songs develops a sense of national identity, promotes unity, preserves cultural heritage, and inspires civic responsibility."
    },
    {
      question: "Which theme is suitable for NSS painting competitions?",
      options: ["Only abstract art", "Environmental conservation and social issues", "Commercial products", "Personal portraits only"],
      correctAnswer: 1,
      explanation: "NSS painting themes include environmental conservation, social issues, national pride, community service, and sustainable living."
    },
    {
      question: "What should be considered when organizing a talent show?",
      options: ["Only one category", "Multiple categories, judging criteria, and recognition", "No planning needed", "Limiting participants"],
      correctAnswer: 1,
      explanation: "Organizing a talent show requires planning categories (singing, dancing, painting, etc.), setting judging criteria, promotion, and providing recognition."
    }
  ];

  const module5Quiz = [
    {
      question: "What is the importance of environmental literature?",
      options: ["Entertainment only", "Raises awareness and provides solutions for ecological issues", "No practical value", "Only for scientists"],
      correctAnswer: 1,
      explanation: "Environmental literature raises awareness about challenges, provides scientific understanding, inspires action, and offers sustainable solutions."
    },
    {
      question: "Which book exposed the harmful effects of pesticides?",
      options: ["The Lorax", "Silent Spring", "Walden", "The Sixth Extinction"],
      correctAnswer: 1,
      explanation: "Silent Spring by Rachel Carson exposed the harmful effects of pesticides on the environment and sparked the modern environmental movement."
    },
    {
      question: "What should be included in a book summary introduction?",
      options: ["Only personal opinions", "Book title, author, publication year, and theme overview", "Just the ending", "No context needed"],
      correctAnswer: 1,
      explanation: "A book summary introduction should include the book title, author, publication year, brief theme overview, and context/relevance."
    },
    {
      question: "Which environmental theme addresses species extinction?",
      options: ["Pollution only", "Biodiversity and conservation", "Energy only", "Water management only"],
      correctAnswer: 1,
      explanation: "Biodiversity and conservation themes address species extinction, habitat loss, and wildlife protection."
    },
    {
      question: "What is a key tip for writing environmental book summaries?",
      options: ["Copy directly from book", "Read actively, take notes, and use your own words", "Skip the analysis", "Ignore quotes"],
      correctAnswer: 1,
      explanation: "Effective book summaries require active reading, note-taking, using your own words, including relevant quotes, and connecting to real-world examples."
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
                <h1>Career Orientation & Future Planning</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students in career orientation session" className="content-image" />
                <p className="image-caption">Career orientation and planning session</p>
              </div>
              
              <h3>Conducting Orientation Programs for Students</h3>
              <p>Orientation programs are essential for helping students understand their future plans, activities, and creating a roadmap for their career journey.</p>
              
              <h4>Objectives of Career Orientation:</h4>
              <ul>
                <li><strong>Future Planning:</strong> Help students identify their career goals and aspirations</li>
                <li><strong>Activity Roadmap:</strong> Create a structured plan for skill development and learning</li>
                <li><strong>Self-Assessment:</strong> Understand personal strengths, weaknesses, and interests</li>
                <li><strong>Career Awareness:</strong> Explore various career options and opportunities</li>
                <li><strong>Goal Setting:</strong> Establish short-term and long-term career objectives</li>
              </ul>

              <h4>Components of Orientation Programs:</h4>
              <ol>
                <li><strong>Welcome Session:</strong> Introduction to NSS and its objectives</li>
                <li><strong>Career Counseling:</strong> One-on-one guidance sessions</li>
                <li><strong>Industry Insights:</strong> Guest lectures from professionals</li>
                <li><strong>Skill Assessment:</strong> Identifying core competencies</li>
                <li><strong>Action Plan Development:</strong> Creating personalized roadmaps</li>
              </ol>

              <h4>Creating a Career Roadmap:</h4>
              <p>A career roadmap is a strategic plan that outlines the steps needed to achieve career goals:</p>
              <div className="roadmap-image">
                <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Career roadmap planning" className="activity-image" />
                <p className="image-caption">Creating a strategic career roadmap</p>
              </div>
              <ul>
                <li>Define your career vision and mission</li>
                <li>Identify required skills and qualifications</li>
                <li>Set milestones and timelines</li>
                <li>Plan for continuous learning and development</li>
                <li>Build a professional network</li>
                <li>Prepare for challenges and setbacks</li>
              </ul>

              <div className="example-box">
                <h5>Activity: Create Your Career Roadmap</h5>
                <p>Steps to create your personal career roadmap:</p>
                <ol>
                  <li>Write down your career goal for the next 5 years</li>
                  <li>List the skills you need to develop</li>
                  <li>Identify resources and opportunities available</li>
                  <li>Set quarterly milestones</li>
                  <li>Review and adjust your plan regularly</li>
                </ol>
              </div>

              <h4>Future Plans and Activities:</h4>
              <ul>
                <li><strong>Academic Excellence:</strong> Focus on core subjects and specializations</li>
                <li><strong>Skill Development:</strong> Technical and soft skills training</li>
                <li><strong>Internships:</strong> Gain practical industry experience</li>
                <li><strong>Certifications:</strong> Pursue relevant professional certifications</li>
                <li><strong>Networking:</strong> Build connections with professionals and peers</li>
                <li><strong>Community Service:</strong> Participate in NSS activities and social work</li>
              </ul>

              <h4>Key Areas to Focus:</h4>
              <ul>
                <li>Communication skills and presentation abilities</li>
                <li>Leadership and teamwork capabilities</li>
                <li>Problem-solving and critical thinking</li>
                <li>Time management and organizational skills</li>
                <li>Adaptability and continuous learning mindset</li>
              </ul>
            </section>

            <Quiz title="Module 1.1: Career Orientation" questions={module1Quiz} subject="NSS" unitId={1} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Ice Breaking & Personal Skills →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.2</div>
              <div className="lesson-title-main">
                <h1>Ice Breaking & Personal Skills</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students participating in ice breaking activities" className="content-image" />
                <p className="image-caption">Ice breaking and team building activities</p>
              </div>
              
              <h3>Ice Breaking Sessions</h3>
              <p>Ice breaking activities help students feel comfortable, build connections, and create a positive learning environment.</p>
              
              <h4>Purpose of Ice Breaking:</h4>
              <ul>
                <li>Reduce anxiety and nervousness among participants</li>
                <li>Foster team bonding and collaboration</li>
                <li>Encourage open communication</li>
                <li>Create an inclusive and welcoming atmosphere</li>
                <li>Energize and engage participants</li>
              </ul>

              <h4>Popular Ice Breaking Activities:</h4>
              
              <h5>1. Two Truths and a Lie</h5>
              <p>Each participant shares three statements about themselves - two true and one false. Others guess which is the lie.</p>
              
              <h5>2. Human Bingo</h5>
              <p>Create bingo cards with characteristics or experiences. Participants find people who match each square.</p>
              
              <h5>3. Speed Networking</h5>
              <p>Participants pair up for quick 2-minute conversations, then rotate to meet new people.</p>
              
              <h5>4. Common Ground</h5>
              <p>Groups find things they all have in common, fostering connection and understanding.</p>
              
              <h5>5. Name Game</h5>
              <p>Creative ways to remember names while learning about each person's background.</p>

              <h4>Expectations from the Course:</h4>
              <p>Understanding what students expect helps tailor the NSS program effectively:</p>
              <ul>
                <li><strong>Skill Development:</strong> Learning new practical skills</li>
                <li><strong>Social Impact:</strong> Making a difference in the community</li>
                <li><strong>Personal Growth:</strong> Building confidence and leadership</li>
                <li><strong>Networking:</strong> Meeting like-minded individuals</li>
                <li><strong>Experience:</strong> Gaining hands-on community service experience</li>
                <li><strong>Recognition:</strong> Certificates and acknowledgment of contributions</li>
              </ul>

              <h4>Knowing Personal Talents and Skills:</h4>
              <p>Self-awareness is crucial for personal and professional development.</p>
              <div className="skills-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Personal skills development" className="activity-image" />
                <p className="image-caption">Identifying and developing personal talents</p>
              </div>

              <h5>Identifying Your Talents:</h5>
              <ul>
                <li><strong>Creative Talents:</strong> Art, music, writing, design</li>
                <li><strong>Analytical Skills:</strong> Problem-solving, research, data analysis</li>
                <li><strong>Social Skills:</strong> Communication, empathy, leadership</li>
                <li><strong>Technical Skills:</strong> Programming, engineering, technical expertise</li>
                <li><strong>Organizational Skills:</strong> Planning, coordination, management</li>
              </ul>

              <div className="example-box">
                <h5>Self-Assessment Exercise</h5>
                <p>Answer these questions to discover your talents:</p>
                <ul>
                  <li>What activities make you lose track of time?</li>
                  <li>What do people often ask for your help with?</li>
                  <li>What subjects or topics do you learn quickly?</li>
                  <li>What achievements are you most proud of?</li>
                  <li>What would you do if money wasn't a concern?</li>
                </ul>
              </div>

              <h4>Developing Your Skills:</h4>
              <ul>
                <li>Practice regularly and consistently</li>
                <li>Seek feedback from mentors and peers</li>
                <li>Take on challenging projects</li>
                <li>Learn from failures and mistakes</li>
                <li>Stay updated with latest trends</li>
                <li>Collaborate with others to learn new perspectives</li>
              </ul>

              <h4>Building a Personal Brand:</h4>
              <ul>
                <li>Identify your unique value proposition</li>
                <li>Showcase your skills through projects and portfolios</li>
                <li>Maintain a professional online presence</li>
                <li>Network and build meaningful relationships</li>
                <li>Continuously improve and adapt</li>
              </ul>
            </section>

            <Quiz title="Module 1.2: Ice Breaking & Personal Skills" questions={module2Quiz} subject="NSS" unitId={1} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Career Orientation & Future Planning</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Success Stories & Motivation →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.3</div>
              <div className="lesson-title-main">
                <h1>Success Stories & Motivation</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="data:image/jpeg;base64,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" alt="Success and achievement celebration" className="content-image" />
                <p className="image-caption">Celebrating success stories and achievements</p>
              </div>
              
              <h3>Displaying Success Stories</h3>
              <p>Success stories inspire and motivate students to pursue their dreams and overcome challenges.</p>
              
              <h4>Why Success Stories Matter:</h4>
              <ul>
                <li>Provide real-life examples of achievement</li>
                <li>Demonstrate that success is possible despite obstacles</li>
                <li>Offer practical lessons and strategies</li>
                <li>Build confidence and self-belief</li>
                <li>Create role models for students to emulate</li>
              </ul>

              <h4>Types of Success Stories to Share:</h4>
              
              <h5>1. Academic Success Stories</h5>
              <ul>
                <li>Students who overcame learning difficulties</li>
                <li>Scholarship recipients and their journeys</li>
                <li>Research achievements and innovations</li>
              </ul>

              <h5>2. Career Success Stories</h5>
              <ul>
                <li>Alumni who achieved professional excellence</li>
                <li>Entrepreneurs who built successful ventures</li>
                <li>Leaders making impact in their fields</li>
              </ul>

              <h5>3. Social Impact Stories</h5>
              <ul>
                <li>Individuals creating positive change in communities</li>
                <li>NGO founders and social workers</li>
                <li>Environmental activists and changemakers</li>
              </ul>

              <h4>Motivational Bio Pics (Biographical Pictures/Films):</h4>
              <p>Biographical films provide powerful visual storytelling of inspiring lives.</p>

              <h5>Recommended Motivational Bio Pics:</h5>
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvdtz4iiX4TYlSA62zqNQFzbK5k0Q_hwDVA&s" alt="The Pursuit of Happyness" className="movie-poster" />
                  <h6>The Pursuit of Happyness</h6>
                  <p>Overcoming homelessness to achieve success</p>
                </div>
                <div className="movie-card">
                  <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="3 Idiots" className="movie-poster" />
                  <h6>3 Idiots</h6>
                  <p>Following passion over societal pressure</p>
                </div>
                <div className="movie-card">
                  <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dangal" className="movie-poster" />
                  <h6>Dangal</h6>
                  <p>Breaking gender barriers in sports</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Inspirational Video: Success Stories</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Tuw8hxrFBH8?si=nZ8doSEJukMOiar5" 
                    title="Success Stories - Motivational Video"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <ul>
                <li><strong>Super 30:</strong> Education as a tool for social change</li>
                <li><strong>Pad Man:</strong> Social entrepreneurship and innovation</li>
                <li><strong>Mary Kom:</strong> Determination and perseverance in sports</li>
                <li><strong>Bhaag Milkha Bhaag:</strong> Overcoming trauma to achieve greatness</li>
              </ul>

              <h4>Award-Winning Movies on Societal Issues:</h4>
              
              <h5>Environmental Issues:</h5>
              <ul>
                <li><strong>An Inconvenient Truth:</strong> Climate change awareness</li>
                <li><strong>The Lorax:</strong> Environmental conservation</li>
                <li><strong>Kadvi Hawa:</strong> Impact of climate change on farmers</li>
              </ul>

              <h5>Social Justice:</h5>
              <ul>
                <li><strong>Article 15:</strong> Caste discrimination and justice</li>
                <li><strong>Taare Zameen Par:</strong> Learning disabilities and education</li>
                <li><strong>Pink:</strong> Women's rights and consent</li>
              </ul>

              <h5>Community Development:</h5>
              <ul>
                <li><strong>Swades:</strong> Rural development and social responsibility</li>
                <li><strong>Lagaan:</strong> Unity and collective action</li>
                <li><strong>Peepli Live:</strong> Rural issues and media</li>
              </ul>

              <div className="example-box">
                <h5>Activity: Create a Success Story Presentation</h5>
                <p>Steps to create an inspiring presentation:</p>
                <ol>
                  <li>Choose a person whose story resonates with you</li>
                  <li>Research their background and challenges</li>
                  <li>Identify key turning points in their journey</li>
                  <li>Extract lessons and actionable insights</li>
                  <li>Present in an engaging and visual format</li>
                  <li>Discuss how their story applies to your life</li>
                </ol>
              </div>

              <h4>Key Lessons from Success Stories:</h4>
              <ul>
                <li><strong>Persistence:</strong> Never give up despite failures</li>
                <li><strong>Vision:</strong> Have a clear goal and purpose</li>
                <li><strong>Hard Work:</strong> Success requires dedication and effort</li>
                <li><strong>Learning:</strong> Continuous improvement and adaptation</li>
                <li><strong>Resilience:</strong> Bounce back from setbacks</li>
                <li><strong>Innovation:</strong> Think differently and creatively</li>
                <li><strong>Service:</strong> Give back to society and community</li>
              </ul>

              <h4>Creating Your Own Success Story:</h4>
              <ul>
                <li>Set clear and achievable goals</li>
                <li>Develop a growth mindset</li>
                <li>Embrace challenges as opportunities</li>
                <li>Build a support network</li>
                <li>Document your journey and progress</li>
                <li>Inspire others through your actions</li>
              </ul>
            </section>

            <Quiz title="Module 1.3: Success Stories & Motivation" questions={module3Quiz} subject="NSS" unitId={1} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Ice Breaking & Personal Skills</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Talent Show Activities →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.4</div>
              <div className="lesson-title-main">
                <h1>Talent Show Activities</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students performing in talent show" className="content-image" />
                <p className="image-caption">Students showcasing their talents on stage</p>
              </div>
              
              <h3>Conducting Talent Shows</h3>
              <p>Talent shows provide a platform for students to showcase their abilities, build confidence, and celebrate diversity.</p>
              
              <h4>Objectives of Talent Shows:</h4>
              <ul>
                <li>Encourage self-expression and creativity</li>
                <li>Build confidence and stage presence</li>
                <li>Celebrate diverse talents and abilities</li>
                <li>Foster appreciation for arts and culture</li>
                <li>Create a sense of community and belonging</li>
                <li>Identify and nurture hidden talents</li>
              </ul>

              <h4>Singing Patriotic Songs:</h4>
              <p>Patriotic songs instill national pride, unity, and cultural awareness.</p>
              
              <div className="activity-gallery">
                <div className="activity-image">
                  <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Students singing patriotic songs" className="activity-photo" />
                  <p>Students performing patriotic songs</p>
                </div>
                <div className="activity-image">
                  <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Painting competition" className="activity-photo" />
                  <p>Art and painting competitions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Patriotic Songs Performance</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/R-sPdcvKV0s?si=P3DsxpiF3JH5qm51" 
                    title="Vande Mataram - Patriotic Song Performance"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <h5>Popular Patriotic Songs:</h5>
              <ul>
                <li><strong>Vande Mataram:</strong> National song of India</li>
                <li><strong>Jana Gana Mana:</strong> National anthem</li>
                <li><strong>Ae Mere Watan Ke Logo:</strong> Tribute to soldiers</li>
                <li><strong>Maa Tujhe Salaam:</strong> Celebrating motherland</li>
                <li><strong>Teri Mitti:</strong> Honoring sacrifice and service</li>
                <li><strong>Sandese Aate Hai:</strong> Military tribute</li>
              </ul>

              <h5>Benefits of Singing Patriotic Songs:</h5>
              <ul>
                <li>Develops sense of national identity</li>
                <li>Promotes unity and harmony</li>
                <li>Preserves cultural heritage</li>
                <li>Inspires civic responsibility</li>
                <li>Builds emotional connection with nation</li>
              </ul>

              <h4>Painting and Visual Arts:</h4>
              <p>Visual arts allow students to express ideas, emotions, and perspectives creatively.</p>

              <h5>Painting Themes for NSS:</h5>
              <ul>
                <li><strong>Environmental Conservation:</strong> Nature, wildlife, pollution</li>
                <li><strong>Social Issues:</strong> Education, health, equality</li>
                <li><strong>National Pride:</strong> Freedom fighters, monuments, culture</li>
                <li><strong>Community Service:</strong> Volunteering, helping others</li>
                <li><strong>Sustainable Living:</strong> Green energy, waste management</li>
              </ul>

              <h5>Types of Visual Art Activities:</h5>
              <ul>
                <li>Poster making competitions</li>
                <li>Mural painting projects</li>
                <li>Digital art and graphic design</li>
                <li>Photography exhibitions</li>
                <li>Sculpture and craft work</li>
              </ul>

              <div className="example-box">
                <h5>Activity: Organize a Talent Show</h5>
                <p>Steps to organize a successful talent show:</p>
                <ol>
                  <li><strong>Planning:</strong> Set date, venue, and theme</li>
                  <li><strong>Registration:</strong> Invite participants to sign up</li>
                  <li><strong>Categories:</strong> Singing, dancing, painting, poetry, drama</li>
                  <li><strong>Judging Criteria:</strong> Creativity, presentation, impact</li>
                  <li><strong>Promotion:</strong> Create posters and announcements</li>
                  <li><strong>Execution:</strong> Manage event logistics and flow</li>
                  <li><strong>Recognition:</strong> Award certificates and prizes</li>
                </ol>
              </div>

              <h4>Other Contribution Activities:</h4>
              
              <h5>1. Poetry and Creative Writing</h5>
              <ul>
                <li>Patriotic poetry recitation</li>
                <li>Essay writing on social themes</li>
                <li>Story writing competitions</li>
              </ul>

              <h5>2. Drama and Theatre</h5>
              <ul>
                <li>Street plays on social issues</li>
                <li>Historical dramatizations</li>
                <li>Awareness skits</li>
              </ul>

              <h5>3. Dance Performances</h5>
              <ul>
                <li>Folk dances celebrating culture</li>
                <li>Contemporary dance with messages</li>
                <li>Group choreography</li>
              </ul>

              <h5>4. Music and Instrumental</h5>
              <ul>
                <li>Classical music performances</li>
                <li>Instrumental renditions</li>
                <li>Fusion music projects</li>
              </ul>

              <h5>5. Public Speaking</h5>
              <ul>
                <li>Motivational speeches</li>
                <li>Debate competitions</li>
                <li>Storytelling sessions</li>
              </ul>

              <h4>Documenting Talent Show:</h4>
              <ul>
                <li>Photography and videography</li>
                <li>Social media coverage</li>
                <li>Creating highlight reels</li>
                <li>Participant testimonials</li>
                <li>Event reports and articles</li>
              </ul>

              <h4>Impact of Talent Shows:</h4>
              <ul>
                <li>Boosts self-esteem and confidence</li>
                <li>Develops performance skills</li>
                <li>Encourages peer appreciation</li>
                <li>Creates memorable experiences</li>
                <li>Builds community spirit</li>
                <li>Identifies future leaders and artists</li>
              </ul>
            </section>

            <Quiz title="Module 1.4: Talent Show Activities" questions={module4Quiz} subject="NSS" unitId={1} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Success Stories & Motivation</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Environmental Literature →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.5</div>
              <div className="lesson-title-main">
                <h1>Environmental Literature</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Environmental books and literature" className="content-image" />
                <p className="image-caption">Environmental literature and reading materials</p>
              </div>
              
              <h3>Writing Summary on Environmental Books</h3>
              <p>Reading and analyzing environmental literature helps develop awareness about ecological issues and sustainable practices.</p>
              
              <h4>Importance of Environmental Literature:</h4>
              <ul>
                <li>Raises awareness about environmental challenges</li>
                <li>Provides scientific understanding of ecological systems</li>
                <li>Inspires action and behavioral change</li>
                <li>Documents environmental history and movements</li>
                <li>Offers solutions and sustainable alternatives</li>
              </ul>

              <h4>Recommended Environmental Books:</h4>
              
              <h5>Classic Environmental Literature:</h5>
              <ul>
                <li><strong>Silent Spring by Rachel Carson:</strong> Impact of pesticides on environment</li>
                <li><strong>The Lorax by Dr. Seuss:</strong> Deforestation and conservation</li>
                <li><strong>A Sand County Almanac by Aldo Leopold:</strong> Land ethic and conservation</li>
                <li><strong>Walden by Henry David Thoreau:</strong> Simple living in nature</li>
              </ul>

              <h5>Contemporary Environmental Books:</h5>
              <div className="books-gallery">
                <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Environmental books collection" className="books-image" />
                <p className="image-caption">Collection of environmental literature and books</p>
              </div>
              <ul>
                <li><strong>The Sixth Extinction by Elizabeth Kolbert:</strong> Biodiversity loss</li>
                <li><strong>This Changes Everything by Naomi Klein:</strong> Climate change and capitalism</li>
                <li><strong>The Uninhabitable Earth by David Wallace-Wells:</strong> Climate crisis</li>
                <li><strong>Braiding Sweetgrass by Robin Wall Kimmerer:</strong> Indigenous wisdom and ecology</li>
              </ul>

              <h5>Indian Environmental Literature:</h5>
              <ul>
                <li><strong>The Chipko Movement by Vandana Shiva:</strong> Forest conservation</li>
                <li><strong>Ecology and Equity by Madhav Gadgil:</strong> Environmental justice</li>
                <li><strong>The Great Derangement by Amitav Ghosh:</strong> Climate change and culture</li>
                <li><strong>Green Wars by Ramachandra Guha:</strong> Environmental conflicts</li>
              </ul>

              <h4>How to Write an Effective Book Summary:</h4>
              
              <h5>Structure of a Book Summary:</h5>
              <ol>
                <li><strong>Introduction:</strong>
                  <ul>
                    <li>Book title, author, and publication year</li>
                    <li>Brief overview of the book's theme</li>
                    <li>Context and relevance</li>
                  </ul>
                </li>
                <li><strong>Main Content:</strong>
                  <ul>
                    <li>Key arguments and themes</li>
                    <li>Important facts and data</li>
                    <li>Case studies and examples</li>
                    <li>Author's perspective and solutions</li>
                  </ul>
                </li>
                <li><strong>Analysis:</strong>
                  <ul>
                    <li>Critical evaluation of ideas</li>
                    <li>Strengths and weaknesses</li>
                    <li>Relevance to current issues</li>
                  </ul>
                </li>
                <li><strong>Conclusion:</strong>
                  <ul>
                    <li>Personal reflections and insights</li>
                    <li>Practical applications</li>
                    <li>Call to action</li>
                  </ul>
                </li>
              </ol>

              <div className="example-box">
                <h5>Sample Book Summary Template</h5>
                <p><strong>Title:</strong> Silent Spring by Rachel Carson</p>
                <p><strong>Theme:</strong> The book exposes the harmful effects of pesticides on the environment and human health.</p>
                <p><strong>Key Points:</strong></p>
                <ul>
                  <li>DDT and other pesticides accumulate in food chains</li>
                  <li>Chemical pollution affects birds, fish, and wildlife</li>
                  <li>Need for alternative pest control methods</li>
                </ul>
                <p><strong>Impact:</strong> This book sparked the modern environmental movement and led to the ban of DDT.</p>
                <p><strong>Personal Reflection:</strong> The book teaches us to question the long-term consequences of our actions on nature.</p>
              </div>

              <h4>Key Environmental Themes to Explore:</h4>
              <ul>
                <li><strong>Climate Change:</strong> Global warming, carbon emissions, renewable energy</li>
                <li><strong>Biodiversity:</strong> Species extinction, habitat loss, conservation</li>
                <li><strong>Pollution:</strong> Air, water, soil contamination and solutions</li>
                <li><strong>Sustainability:</strong> Circular economy, green technology, eco-friendly practices</li>
                <li><strong>Environmental Justice:</strong> Equity in environmental protection</li>
                <li><strong>Conservation:</strong> Wildlife protection, forest preservation</li>
              </ul>

              <h4>Tips for Writing Environmental Book Summaries:</h4>
              <ul>
                <li>Read actively and take notes while reading</li>
                <li>Identify the main thesis and supporting arguments</li>
                <li>Use your own words to explain concepts</li>
                <li>Include relevant quotes to support points</li>
                <li>Connect book content to real-world examples</li>
                <li>Be objective while presenting author's views</li>
                <li>Add personal insights and critical thinking</li>
                <li>Keep summary concise (500-1000 words)</li>
              </ul>

              <h4>Learning Outcomes:</h4>
              <ul>
                <li>Develop critical reading and analytical skills</li>
                <li>Enhance environmental awareness and knowledge</li>
                <li>Improve writing and communication abilities</li>
                <li>Connect literature with real-world issues</li>
                <li>Inspire environmental action and advocacy</li>
              </ul>

              <h4>Assignment Guidelines:</h4>
              <ul>
                <li>Choose one environmental book from the recommended list or any other</li>
                <li>Read the book thoroughly and take detailed notes</li>
                <li>Write a comprehensive summary (800-1000 words)</li>
                <li>Include introduction, main content, analysis, and conclusion</li>
                <li>Submit typed document with proper formatting</li>
                <li>Be prepared to present key insights to the class</li>
              </ul>
            </section>

            <Quiz title="Module 1.5: Environmental Literature" questions={module5Quiz} subject="NSS" unitId={1} moduleId={5} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.goodreads.com/shelf/show/environmental" target="_blank" rel="noopener noreferrer">Environmental Books on Goodreads</a></li>
                <li><a href="https://www.nss.gov.in/" target="_blank" rel="noopener noreferrer">National Service Scheme Official Website</a></li>
                <li><a href="https://www.unep.org/" target="_blank" rel="noopener noreferrer">UN Environment Programme</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Talent Show Activities</button>
              {onBack && (
                <button onClick={onBack} className="next-module-btn">Back to Course →</button>
              )}
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