'use client';
import React from 'react';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule }) => {
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
                  <img src="/images/pursuit-of-happyness.jpg" alt="The Pursuit of Happyness" className="movie-poster" />
                  <h6>The Pursuit of Happyness</h6>
                  <p>Overcoming homelessness to achieve success</p>
                </div>
                <div className="movie-card">
                  <img src="/images/3-idiots.jpg" alt="3 Idiots" className="movie-poster" />
                  <h6>3 Idiots</h6>
                  <p>Following passion over societal pressure</p>
                </div>
                <div className="movie-card">
                  <img src="/images/dangal.jpg" alt="Dangal" className="movie-poster" />
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
                    src="https://www.youtube.com/embed/gxAaO2rsdIs" 
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
                  <img src="/images/talent-show-singing.jpg" alt="Students singing patriotic songs" className="activity-photo" />
                  <p>Students performing patriotic songs</p>
                </div>
                <div className="activity-image">
                  <img src="/images/talent-show-painting.jpg" alt="Painting competition" className="activity-photo" />
                  <p>Art and painting competitions</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Patriotic Songs Performance</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/esMnme69t2M" 
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
