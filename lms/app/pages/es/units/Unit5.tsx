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
      question: "What is the current global population?",
      options: ["6 billion", "7 billion", "8+ billion", "10 billion"],
      correctAnswer: 2,
      explanation: "The current global population is over 8 billion people and continues to grow, though at a slowing rate in many regions."
    },
    {
      question: "How many people are added to the global population annually?",
      options: ["25 million", "45 million", "67 million", "100 million"],
      correctAnswer: 2,
      explanation: "Approximately 67 million people are added to the global population annually, though this rate is gradually declining."
    },
    {
      question: "What is the projected peak global population?",
      options: ["9 billion", "10.4 billion", "12 billion", "15 billion"],
      correctAnswer: 1,
      explanation: "The global population is projected to peak at around 10.4 billion by the 2080s before potentially declining."
    },
    {
      question: "What is the primary cause of population explosion in developing countries?",
      options: ["High birth rates", "Declining death rates with improved healthcare", "Increased immigration", "Economic growth"],
      correctAnswer: 1,
      explanation: "Population explosion is primarily caused by declining death rates due to improved healthcare, sanitation, and nutrition, while birth rates remain high."
    },
    {
      question: "Which region has the highest population growth rate?",
      options: ["Europe", "East Asia", "Sub-Saharan Africa", "North America"],
      correctAnswer: 2,
      explanation: "Sub-Saharan Africa has the highest population growth rates globally, while Europe and East Asia have declining populations."
    }
  ];

  const module2Quiz = [
    {
      question: "Which factor is most effective in controlling population growth?",
      options: ["Government policies", "Economic development", "Women's education and empowerment", "Religious beliefs"],
      correctAnswer: 2,
      explanation: "Women's education and empowerment is the most effective factor in controlling population growth, as educated women tend to have fewer children and make informed reproductive choices."
    },
    {
      question: "By how much does each year of schooling reduce fertility?",
      options: ["0.1 children", "0.26 children", "0.5 children", "1 child"],
      correctAnswer: 1,
      explanation: "Research shows that each additional year of schooling for women reduces fertility by approximately 0.26 children on average."
    },
    {
      question: "How much can women's workforce participation boost GDP?",
      options: ["10%", "20%", "35%", "50%"],
      correctAnswer: 2,
      explanation: "Women's workforce participation can boost GDP by approximately 35%, demonstrating the significant economic impact of gender equality."
    },
    {
      question: "What is the reduction in child mortality for educated mothers?",
      options: ["20%", "35%", "50%", "75%"],
      correctAnswer: 2,
      explanation: "Educated mothers have approximately 50% lower child mortality rates compared to uneducated mothers, showing the health benefits of education."
    },
    {
      question: "Which UN Sustainable Development Goal focuses on gender equality?",
      options: ["SDG 3", "SDG 5", "SDG 8", "SDG 13"],
      correctAnswer: 1,
      explanation: "SDG 5 (Sustainable Development Goal 5) specifically focuses on achieving gender equality and empowering all women and girls."
    }
  ];

  const module3Quiz = [
    {
      question: "What is the main cause of global warming?",
      options: ["Solar radiation", "Volcanic eruptions", "Greenhouse gas emissions from human activities", "Natural climate cycles"],
      correctAnswer: 2,
      explanation: "Global warming is primarily caused by increased greenhouse gas emissions from human activities, particularly burning fossil fuels and deforestation."
    },
    {
      question: "By how much has global temperature increased since pre-industrial times?",
      options: ["0.5°C", "1.1°C", "2.0°C", "3.5°C"],
      correctAnswer: 1,
      explanation: "Global average temperature has increased by approximately 1.1°C since pre-industrial times, with significant environmental impacts."
    },
    {
      question: "What is the current atmospheric CO₂ level?",
      options: ["350 ppm", "380 ppm", "421 ppm", "500 ppm"],
      correctAnswer: 2,
      explanation: "Current atmospheric CO₂ levels are approximately 421 parts per million (ppm), the highest in over 3 million years."
    },
    {
      question: "What is the normal pH of rain?",
      options: ["4.5", "5.6", "7.0", "8.2"],
      correctAnswer: 1,
      explanation: "Normal rain has a pH of approximately 5.6 due to dissolved CO₂. Acid rain has a pH below 5.6, sometimes dropping to 4.2-4.4."
    },
    {
      question: "What chemicals primarily cause ozone layer depletion?",
      options: ["Carbon dioxide", "Methane", "CFCs (Chlorofluorocarbons)", "Nitrogen oxides"],
      correctAnswer: 2,
      explanation: "CFCs (Chlorofluorocarbons) are the primary chemicals causing ozone layer depletion, formerly used in refrigerants and aerosols."
    }
  ];

  const module4Quiz = [
    {
      question: "How can information technology help in environmental monitoring?",
      options: ["By replacing natural ecosystems", "Through real-time data collection using sensors and satellites", "By eliminating environmental protection", "By increasing industrial production"],
      correctAnswer: 1,
      explanation: "Information technology helps environmental monitoring through real-time data collection and analysis using IoT sensors, satellites, and advanced data processing systems."
    },
    {
      question: "What technology is used for global environmental surveillance?",
      options: ["Radio waves", "Satellite imagery", "Telephone networks", "Bluetooth"],
      correctAnswer: 1,
      explanation: "Satellite imagery provides global environmental surveillance, enabling monitoring of deforestation, climate change, pollution, and natural disasters."
    },
    {
      question: "What does GIS stand for in environmental applications?",
      options: ["Global Information System", "Geographic Information System", "General Internet Service", "Green Infrastructure System"],
      correctAnswer: 1,
      explanation: "GIS stands for Geographic Information System, used for spatial analysis and visualization of environmental data."
    },
    {
      question: "Which technology enables continuous pollution tracking?",
      options: ["Social media", "IoT sensors", "Email systems", "Video games"],
      correctAnswer: 1,
      explanation: "IoT (Internet of Things) sensors enable continuous, real-time pollution tracking for air quality, water quality, and other environmental parameters."
    },
    {
      question: "What role does AI play in environmental protection?",
      options: ["Replacing humans entirely", "Predictive modeling and pattern analysis", "Increasing pollution", "Eliminating wildlife"],
      correctAnswer: 1,
      explanation: "AI plays a crucial role in environmental protection through predictive modeling, pattern analysis, optimization of resource use, and early warning systems."
    }
  ];

  const module5Quiz = [
    {
      question: "What is the primary purpose of environmental field work?",
      options: ["Tourism", "Data collection and observation", "Entertainment", "Exercise"],
      correctAnswer: 1,
      explanation: "Environmental field work primarily involves data collection, direct observation, and hands-on study of ecosystems and environmental conditions."
    },
    {
      question: "Which tool is essential for field-based environmental monitoring?",
      options: ["Gaming console", "Portable sensors and measurement devices", "Television", "Microwave"],
      correctAnswer: 1,
      explanation: "Portable sensors and measurement devices are essential for field-based environmental monitoring, enabling on-site data collection."
    },
    {
      question: "What is the benefit of combining field work with IT systems?",
      options: ["Reduced accuracy", "Real-time data upload and analysis", "Increased costs only", "Slower processing"],
      correctAnswer: 1,
      explanation: "Combining field work with IT systems enables real-time data upload, immediate analysis, and faster decision-making for environmental management."
    },
    {
      question: "Which career combines environmental science with technology?",
      options: ["Traditional farming", "Environmental informatics", "Manual labor", "Retail management"],
      correctAnswer: 1,
      explanation: "Environmental informatics combines environmental science with information technology, creating careers in data analysis, monitoring systems, and environmental modeling."
    },
    {
      question: "What is the future trend in environmental monitoring?",
      options: ["Less technology use", "Manual methods only", "Integration of AI, IoT, and big data", "Elimination of monitoring"],
      correctAnswer: 2,
      explanation: "The future of environmental monitoring involves integration of AI, IoT sensors, big data analytics, and automated systems for comprehensive environmental management."
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
                <h1>Population Growth and Population Explosion</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Population Growth: When Users Multiply Exponentially</h3>
              <div className="theory-box">
                <p>Hey future engineers! Think of population growth like user growth on a platform - it starts slow, then suddenly explodes! Just like how Instagram went from 0 to 2 billion users, human population has grown from 1 billion in 1800 to over 8 billion today. Understanding population dynamics is crucial because more users (people) mean more demand for resources, infrastructure, and... well, everything you'll be designing!</p>
                
                <div className="performance-metrics">
                  <h4>Population Growth Stats</h4>
                  <ul>
                    <li><strong>Current Global Population:</strong> 8+ billion people (and counting!)</li>
                    <li><strong>Growth Rate:</strong> Adding 67 million people annually</li>
                    <li><strong>Projected Peak:</strong> 10.4 billion by 2080s</li>
                    <li><strong>Doubling Time:</strong> Took only 50 years to double from 3 to 6 billion</li>
                  </ul>
                </div>
              </div>
              
              <h4>Understanding Population Growth Patterns</h4>
              <p>Population growth refers to the change in the number of inhabitants during a specific period, determined by birth rates, death rates, immigration, and emigration.</p>
              
              <h5>Population Growth Models</h5>
              <div className="example-box">
                <p>Population growth follows predictable patterns, just like user adoption curves in tech!</p>
                <ul>
                  <li><strong>Exponential growth:</strong> J-shaped curve (like viral app downloads)</li>
                  <li><strong>Logistic growth:</strong> S-shaped curve (like platform maturity)</li>
                  <li><strong>Carrying capacity:</strong> Maximum sustainable population (like server capacity)</li>
                  <li><strong>Population momentum:</strong> Growth continues even when birth rates drop</li>
                  <li><strong>Doubling time:</strong> How long to double population size</li>
                  <li><strong>Population pyramids:</strong> Age structure visualization (like user demographics)</li>
                </ul>
              </div>

              <h5>Factors Affecting Growth</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Birth rates:</strong> New "user registrations" per year</li>
                  <li><strong>Death rates:</strong> "Account closures" due to mortality</li>
                  <li><strong>Migration patterns:</strong> People moving between "servers" (countries)</li>
                  <li><strong>Life expectancy:</strong> How long "users" stay active</li>
                  <li><strong>Age structure:</strong> Demographics of the "user base"</li>
                  <li><strong>Sex ratio:</strong> Gender distribution in population</li>
                </ul>
              </div>

              <h4>Global Population Trends</h4>
              
              <h5>Historical Growth Pattern</h5>
              <div className="example-box">
                <p>Human population growth is like the history of computing - slow start, then exponential acceleration!</p>
                <ul>
                  <li><strong>Pre-1800:</strong> Slow growth (like early computers - room-sized and rare)</li>
                  <li><strong>19th-20th centuries:</strong> Rapid increase (like PC revolution)</li>
                  <li><strong>Current status:</strong> Over 8 billion people (like smartphone ubiquity)</li>
                  <li><strong>Future projection:</strong> Peak around 10.4 billion (like market saturation)</li>
                  <li><strong>Demographic transition:</strong> Countries moving through growth phases</li>
                </ul>
              </div>

              <h5>Regional Variations</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Developing countries:</strong> High growth rates (like emerging markets)</li>
                  <li><strong>Developed countries:</strong> Low/negative growth (like mature markets)</li>
                  <li><strong>Urban vs rural:</strong> Cities growing faster (like cloud migration)</li>
                  <li><strong>Sub-Saharan Africa:</strong> Highest growth rates globally</li>
                  <li><strong>Europe/East Asia:</strong> Declining populations (like legacy systems)</li>
                  <li><strong>Asia:</strong> Largest absolute numbers (like dominant platforms)</li>
                </ul>
              </div>

              <h4>Population Explosion: When Growth Goes Viral</h4>
              
              <h5>Understanding Population Explosion</h5>
              <p>Population explosion is like a viral app going from 0 to millions of users overnight - rapid, overwhelming, and with massive infrastructure implications!</p>
              
              <div className="example-box">
                <h6>Causes of Population Explosion</h6>
                <ul>
                  <li><strong>Declining death rates:</strong> Better "system reliability" (healthcare)</li>
                  <li><strong>Medical advances:</strong> Improved "bug fixes" (disease treatment)</li>
                  <li><strong>Better sanitation:</strong> Cleaner "operating environment"</li>
                  <li><strong>Improved nutrition:</strong> Better "system resources" (food)</li>
                  <li><strong>Reduced infant mortality:</strong> Fewer "startup failures"</li>
                  <li><strong>Traditional beliefs:</strong> Cultural preference for large families</li>
                </ul>
              </div>

              <h5>Consequences of Population Explosion</h5>
              <div className="example-box">
                <h6>Environmental Consequences</h6>
                <ul>
                  <li><strong>Deforestation:</strong> Clearing land for housing (like server farms)</li>
                  <li><strong>Resource overexploitation:</strong> Exceeding sustainable limits</li>
                  <li><strong>Increased pollution:</strong> More users = more waste</li>
                  <li><strong>Biodiversity loss:</strong> Habitat destruction for development</li>
                  <li><strong>Climate change acceleration:</strong> Higher emissions</li>
                  <li><strong>Water scarcity:</strong> Demand exceeding supply</li>
                </ul>

                <h6>Social and Economic Consequences</h6>
                <ul>
                  <li><strong>Unemployment:</strong> More job seekers than opportunities</li>
                  <li><strong>Infrastructure strain:</strong> Systems overloaded</li>
                  <li><strong>Housing shortages:</strong> Demand exceeding supply</li>
                  <li><strong>Food security challenges:</strong> Feeding growing populations</li>
                  <li><strong>Increased poverty:</strong> Resources spread thin</li>
                  <li><strong>Resource conflicts:</strong> Competition for limited resources</li>
                </ul>
              </div>

              <h4>Engineering Implications</h4>
              
              <div className="career-opportunities">
                <h5>Technology Solutions</h5>
                <ul>
                  <li><strong>Smart Cities:</strong> IoT systems for efficient urban management</li>
                  <li><strong>Population Analytics:</strong> Big data for demographic planning</li>
                  <li><strong>Resource Optimization:</strong> AI for efficient resource allocation</li>
                  <li><strong>Infrastructure Scaling:</strong> Designing systems for population growth</li>
                </ul>

                <h5>Career Opportunities</h5>
                <ul>
                  <li><strong>Urban Planning Engineers:</strong> Designing sustainable cities</li>
                  <li><strong>Demographics Data Scientists:</strong> Population trend analysis</li>
                  <li><strong>Infrastructure Engineers:</strong> Scalable systems for growing populations</li>
                  <li><strong>Sustainability Engineers:</strong> Balancing growth with resources</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Population Growth and Environment</h4>
              <p>Understanding the relationship between population dynamics and environmental impacts.</p>
                          <iframe width="50%" height="300"  src="https://www.youtube.com/embed/QsBT5EQt348?si=RYi6bpG33chGIg3h&amp;start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>          </div>

            <Quiz title="Module 5.1: Population Growth" questions={module1Quiz} subject="ES" unitId={5} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Women Empowerment →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.2</div>
              <div className="lesson-title-main">
                <h1>Women Empowerment and Population Control</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Women Empowerment: The Ultimate Population Control Algorithm </h3>
              <div className="theory-box">
                <p>Here's something amazing - women's empowerment is like the most effective optimization algorithm for population control!  When women get education and opportunities, birth rates naturally decrease. It's not magic, it's data science! Countries that invested in women's education saw dramatic drops in fertility rates. As engineers, understanding this correlation helps you see how social solutions can be more effective than technical ones!</p>
                
                <div className="performance-metrics">
                  <h4>Women Empowerment Impact Stats </h4>
                  <ul>
                    <li><strong>Education Effect:</strong> Each year of schooling reduces fertility by 0.26 children</li>
                    <li><strong>Economic Impact:</strong> Women's workforce participation boosts GDP by 35%</li>
                    <li><strong>Health Outcomes:</strong> Educated mothers have 50% lower child mortality</li>
                    <li><strong>Decision Making:</strong> Empowered women delay marriage and childbearing</li>
                  </ul>
                </div>
              </div>
              
              <h4>Women Empowerment and Population Dynamics </h4>
              <p>Women empowerment plays a crucial role in controlling population growth and achieving sustainable development. Educated and empowered women tend to have fewer children and make informed reproductive choices.</p>
              
              <h5>The Correlation: Education → Empowerment → Population Control </h5>
              <div className="example-box">
                <p>It's like a perfectly designed feedback loop in programming!</p>
                <ul>
                  <li><strong>Education reduces fertility:</strong> Knowledge leads to informed choices</li>
                  <li><strong>Employment delays marriage:</strong> Career opportunities change priorities</li>
                  <li><strong>Healthcare access:</strong> Better maternal and child health outcomes</li>
                  <li><strong>Decision-making autonomy:</strong> Control over reproductive choices</li>
                  <li><strong>Financial independence:</strong> Economic security reduces family size needs</li>
                  <li><strong>Breaking traditional roles:</strong> Challenging gender stereotypes</li>
                </ul>
              </div>

              <h4>Strategies for Women Empowerment </h4>
              
              <div className="example-box">
                <h5>Education and Skills Development </h5>
                <ul>
                  <li><strong>Universal girls' education:</strong> Ensuring access to quality schooling</li>
                  <li><strong>Technical skills training:</strong> Preparing women for modern jobs</li>
                  <li><strong>Digital literacy programs:</strong> Tech skills for the digital economy</li>
                  <li><strong>Higher education access:</strong> University and professional education</li>
                  <li><strong>Lifelong learning:</strong> Continuous skill development</li>
                </ul>

                <h5>Economic Empowerment </h5>
                <ul>
                  <li><strong>Employment opportunities:</strong> Creating jobs for women</li>
                  <li><strong>Entrepreneurship support:</strong> Business development programs</li>
                  <li><strong>Access to credit:</strong> Financial services for women</li>
                  <li><strong>Property rights:</strong> Legal ownership of assets</li>
                  <li><strong>Equal pay initiatives:</strong> Closing gender wage gaps</li>
                </ul>

                <h5>Health and Rights </h5>
                <ul>
                  <li><strong>Reproductive healthcare:</strong> Family planning services</li>
                  <li><strong>Maternal health programs:</strong> Safe pregnancy and childbirth</li>
                  <li><strong>Legal rights protection:</strong> Anti-discrimination laws</li>
                  <li><strong>Political participation:</strong> Leadership and governance roles</li>
                </ul>
              </div>

              <h4>Global and National Initiatives </h4>
              
              <div className="example-box">
                <h5>International Frameworks </h5>
                <ul>
                  <li><strong>UN SDG 5:</strong> Gender Equality as global priority</li>
                  <li><strong>CEDAW:</strong> Convention eliminating discrimination against women</li>
                  <li><strong>Beijing Declaration:</strong> Platform for Action on women's rights</li>
                  <li><strong>ICPD:</strong> International Conference on Population and Development</li>
                  <li><strong>HeForShe campaign:</strong> Engaging men in gender equality</li>
                </ul>

                <h5>Indian National Programs </h5>
                <ul>
                  <li><strong>Beti Bachao Beti Padhao:</strong> Save and educate the girl child</li>
                  <li><strong>Sarva Shiksha Abhiyan:</strong> Universal elementary education</li>
                  <li><strong>Janani Suraksha Yojana:</strong> Safe motherhood program</li>
                  <li><strong>Self Help Groups (SHGs):</strong> Women's economic collectives</li>
                  <li><strong>Maternity Benefit Program:</strong> Financial support for mothers</li>
                </ul>
              </div>

              <h4>Technology and Women Empowerment </h4>
              
              <div className="career-opportunities">
                <h5>Tech Solutions for Empowerment </h5>
                <ul>
                  <li><strong>EdTech Platforms:</strong> Online education for women and girls</li>
                  <li><strong>Financial Inclusion Apps:</strong> Digital banking and microfinance</li>
                  <li><strong>Health Monitoring Systems:</strong> Maternal and reproductive health apps</li>
                  <li><strong>Skills Training Platforms:</strong> Online vocational education</li>
                  <li><strong>Safety Apps:</strong> Women's security and emergency response</li>
                </ul>

                <h5>Career Opportunities </h5>
                <ul>
                  <li><strong>Social Impact Engineers:</strong> Technology for social change</li>
                  <li><strong>EdTech Developers:</strong> Educational platforms and apps</li>
                  <li><strong>FinTech for Inclusion:</strong> Financial services for underserved populations</li>
                  <li><strong>Health Tech Specialists:</strong> Digital health solutions</li>
                  <li><strong>Data Scientists:</strong> Analyzing gender equality metrics</li>
                </ul>
              </div>

              <h4>The Engineering Perspective </h4>
              <p>Women's empowerment is like optimizing a complex system - when you improve one variable (education), it positively affects multiple other variables (health, economy, population). As engineers, you can design technologies that accelerate this optimization process and create scalable solutions for women's empowerment worldwide!</p>
            </section>

            <div className="video-embed">
              <h4>Women Empowerment and Demographics</h4>
              <p>Exploring how women's education and empowerment affect population trends.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/1EVGIPrV-oI?si=cLCq8Q_wXpaF1fGw&amp;start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Module 5.2: Women Empowerment" questions={module2Quiz} subject="ES" unitId={5} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Population Growth</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Environmental Issues →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.3</div>
              <div className="lesson-title-main">
                <h1>Environmental Issues: Global Warming, Acid Rain, Ozone Depletion</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Environmental Issues: When Earth's Systems Get Corrupted </h3>
              <div className="theory-box">
                <p>Think of Earth as a massive distributed system, and these environmental issues are like critical system failures!  Global warming is like overheating, acid rain is like corrosive data corruption, and ozone depletion is like a security vulnerability. As engineers, understanding these "bugs" in Earth's system helps you design solutions to patch them!</p>
                
                <div className="performance-metrics">
                  <h4>Environmental Crisis Stats </h4>
                  <ul>
                    <li><strong>Global Temperature:</strong> 1.1°C increase since pre-industrial times</li>
                    <li><strong>CO₂ Levels:</strong> 421 ppm (highest in 3+ million years)</li>
                    <li><strong>Ozone Hole:</strong> 24 million km² at peak (size of North America)</li>
                    <li><strong>Acid Rain pH:</strong> Can drop to 4.2-4.4 (normal rain is 5.6)</li>
                  </ul>
                </div>
              </div>
              
              <h4>Global Warming: Earth's Overheating Problem </h4>
              <p>Global warming refers to the long-term rise in Earth's average temperature, primarily caused by human activities that increase greenhouse gas concentrations.</p>
              
              <h5>Causes of Global Warming </h5>
              <div className="example-box">
                <p>Like a computer overheating from too many processes running simultaneously!</p>
                <ul>
                  <li><strong>Fossil fuel burning:</strong> Coal, oil, gas emissions (like CPU-intensive tasks)</li>
                  <li><strong>Deforestation:</strong> Removing natural "cooling systems"</li>
                  <li><strong>Industrial processes:</strong> Manufacturing emissions (like background processes)</li>
                  <li><strong>Agriculture:</strong> Methane from livestock (like memory leaks)</li>
                  <li><strong>Transportation:</strong> Vehicle emissions (like network traffic)</li>
                  <li><strong>Waste management:</strong> Landfill gases (like temp file accumulation)</li>
                </ul>
              </div>

              <h5>Effects of Global Warming </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Rising temperatures:</strong> Global average increase (like system overheating)</li>
                  <li><strong>Ice melting:</strong> Glaciers and ice sheets disappearing</li>
                  <li><strong>Sea level rise:</strong> Coastal flooding and erosion</li>
                  <li><strong>Extreme weather:</strong> More frequent storms, droughts, heatwaves</li>
                  <li><strong>Ecosystem disruption:</strong> Species migration and extinction</li>
                  <li><strong>Agricultural impacts:</strong> Crop yield changes and food security</li>
                </ul>
              </div>

              <h4>Acid Rain: Atmospheric Data Corruption </h4>
              <p>Acid rain is precipitation with elevated hydrogen ions (low pH), resulting from sulfur dioxide and nitrogen oxide emissions.</p>
              
              <h5>Formation Process </h5>
              <div className="example-box">
                <p>Like malicious code corrupting clean data as it travels through the network!</p>
                <ul>
                  <li><strong>Emission sources:</strong> Fossil fuel burning releases SO₂ and NOₓ</li>
                  <li><strong>Atmospheric reactions:</strong> Chemical processes in the "cloud"</li>
                  <li><strong>Acid formation:</strong> Sulfuric and nitric acids created</li>
                  <li><strong>Transport:</strong> Pollutants travel long distances</li>
                  <li><strong>Deposition:</strong> Falls as acidic precipitation</li>
                </ul>
              </div>

              <h5>Effects of Acid Rain </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Water acidification:</strong> Lakes and streams become acidic</li>
                  <li><strong>Forest damage:</strong> Tree death and ecosystem disruption</li>
                  <li><strong>Building corrosion:</strong> Monuments and structures deteriorating</li>
                  <li><strong>Soil acidification:</strong> Nutrient leaching and fertility loss</li>
                  <li><strong>Aquatic life impact:</strong> Fish kills and ecosystem collapse</li>
                  <li><strong>Human health:</strong> Respiratory problems from air pollution</li>
                </ul>
              </div>

              <h4>Ozone Layer Depletion: Earth's Security Breach </h4>
              <p>Ozone layer depletion is the gradual thinning of Earth's protective ozone layer, caused by human-made chemicals.</p>
              
              <h5>Causes of Ozone Depletion </h5>
              <div className="example-box">
                <p>Like malicious software attacking your antivirus protection!</p>
                <ul>
                  <li><strong>CFCs:</strong> Chlorofluorocarbons in refrigerants (like trojans)</li>
                  <li><strong>Halons:</strong> Fire extinguisher chemicals (like malware)</li>
                  <li><strong>Methyl chloroform:</strong> Industrial solvents (like spyware)</li>
                  <li><strong>Carbon tetrachloride:</strong> Cleaning agents (like viruses)</li>
                  <li><strong>Aircraft emissions:</strong> High-altitude NOₓ (like network attacks)</li>
                </ul>
              </div>

              <h5>Effects of Ozone Depletion </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Increased UV radiation:</strong> More harmful rays reaching Earth</li>
                  <li><strong>Skin cancer rates:</strong> Higher incidence of melanoma</li>
                  <li><strong>Eye damage:</strong> Cataracts and vision problems</li>
                  <li><strong>Immune suppression:</strong> Weakened disease resistance</li>
                  <li><strong>Crop damage:</strong> Reduced agricultural yields</li>
                  <li><strong>Marine ecosystem impact:</strong> Phytoplankton decline</li>
                </ul>
              </div>

              <h4>Engineering Solutions </h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications </h5>
                <ul>
                  <li><strong>Climate Monitoring:</strong> Satellite systems and IoT sensors</li>
                  <li><strong>Emission Control:</strong> Clean technology and carbon capture</li>
                  <li><strong>Renewable Energy:</strong> Solar, wind, and alternative power systems</li>
                  <li><strong>Environmental Modeling:</strong> AI for climate prediction and analysis</li>
                </ul>

                <h5>Career Opportunities </h5>
                <ul>
                  <li><strong>Climate Engineers:</strong> Designing carbon capture and storage systems</li>
                  <li><strong>Environmental Monitoring:</strong> Satellite and sensor system development</li>
                  <li><strong>Clean Technology:</strong> Renewable energy and emission control systems</li>
                  <li><strong>Climate Data Scientists:</strong> Analyzing environmental trends and patterns</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Global Environmental Issues</h4>
              <p>Examining global warming, acid rain, and ozone depletion.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/aTrWtFR_FrQ?si=fnUd72gFGqzQss88&amp;start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Module 5.3: Environmental Issues" questions={module3Quiz} subject="ES" unitId={5} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Women Empowerment</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">IT in Environment →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.4</div>
              <div className="lesson-title-main">
                <h1>Role of Information Technology in Environment and Human Health</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>IT in Environment: When Technology Becomes the Solution </h3>
              <div className="theory-box">
                <p>Plot twist!  While technology contributed to many environmental problems, it's also becoming our superhero for solving them! IT is like having a Swiss Army knife for environmental challenges - monitoring, predicting, optimizing, and automating solutions. As future engineers, you're not just building apps and systems, you're building the tools to save the planet!</p>
              </div>
              
              <h4>Information Technology Applications in Environment </h4>
              <p>Information technology plays an increasingly important role in environmental monitoring, management, and human health protection through advanced data collection, analysis, and communication systems.</p>
              
              <h5>Environmental Monitoring Systems </h5>
              <div className="example-box">
                <p>Like having a real-time dashboard for Planet Earth!</p>
                <ul>
                  <li><strong>Satellite imagery:</strong> Global environmental surveillance</li>
                  <li><strong>IoT sensors:</strong> Real-time data collection networks</li>
                  <li><strong>GIS mapping:</strong> Spatial analysis and visualization</li>
                  <li><strong>Weather stations:</strong> Automated climate monitoring</li>
                  <li><strong>Water quality sensors:</strong> Continuous pollution tracking</li>
                  <li><strong>Air quality networks:</strong> Urban pollution monitoring</li>
                </ul>
              </div>

              <h4>Engineering Career Opportunities in Environmental IT </h4>
              
              <div className="career-opportunities">
                <h5>Software Engineering Roles </h5>
                <ul>
                  <li><strong>Environmental Data Scientists:</strong> Analyzing climate and pollution data</li>
                  <li><strong>IoT Developers:</strong> Building sensor networks for environmental monitoring</li>
                  <li><strong>Mobile App Developers:</strong> Creating environmental awareness apps</li>
                  <li><strong>AI/ML Engineers:</strong> Developing predictive environmental models</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>IT in Environmental Health</h4>
              <p>Role of information technology in environmental monitoring and health protection.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/kMONRrLd-NU?si=ZsyQcTob0SARNXcp&amp;start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Module 5.4: IT in Environment" questions={module4Quiz} subject="ES" unitId={5} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Environmental Issues</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Field Work →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">5.5</div>
              <div className="lesson-title-main">
                <h1>Unit 5 Quiz</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Environmental Field Work: Hands-On Learning 🌿</h3>
              <div className="theory-box">
                <p>Field work is like beta testing in the real world - you take your knowledge out of the classroom and test it in actual environments! It's where theory meets practice, and you get to see environmental concepts in action.</p>
              </div>
              
              <h4>Importance of Field Work 🔬</h4>
              <div className="example-box">
                <ul>
                  <li><strong>Direct observation:</strong> See environmental processes firsthand</li>
                  <li><strong>Data collection:</strong> Gather real-world measurements and samples</li>
                  <li><strong>Skill development:</strong> Learn to use monitoring equipment</li>
                  <li><strong>Problem identification:</strong> Spot environmental issues in real settings</li>
                  <li><strong>Practical application:</strong> Apply classroom knowledge to real situations</li>
                </ul>
              </div>

              <h4>Modern Field Work Tools 📡</h4>
              <div className="example-box">
                <ul>
                  <li><strong>Mobile apps:</strong> Digital data collection and GPS mapping</li>
                  <li><strong>Portable sensors:</strong> Real-time environmental measurements</li>
                  <li><strong>Drones:</strong> Aerial surveys and monitoring</li>
                  <li><strong>Cloud storage:</strong> Instant data upload and sharing</li>
                  <li><strong>GIS integration:</strong> Mapping and spatial analysis</li>
                </ul>
              </div>
            </section>

            <Quiz title="Module 5.5: Field Work and Integration" questions={module5Quiz} subject="ES" unitId={5} moduleId={5} />

         

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← IT in Environment</button>
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