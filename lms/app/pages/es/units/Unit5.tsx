'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit5: React.FC<Unit5Props> = ({ currentModule, setCurrentModule }) => {
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
              <h3>Population Growth: When Users Multiply Exponentially 👥</h3>
              <div className="theory-box">
                <p>Hey future engineers! 👋 Think of population growth like user growth on a platform - it starts slow, then suddenly explodes! 📈 Just like how Instagram went from 0 to 2 billion users, human population has grown from 1 billion in 1800 to over 8 billion today. Understanding population dynamics is crucial because more users (people) mean more demand for resources, infrastructure, and... well, everything you'll be designing!</p>
                
                <div className="performance-metrics">
                  <h4>Population Growth Stats 📊</h4>
                  <ul>
                    <li><strong>Current Global Population:</strong> 8+ billion people (and counting!)</li>
                    <li><strong>Growth Rate:</strong> Adding 67 million people annually</li>
                    <li><strong>Projected Peak:</strong> 10.4 billion by 2080s</li>
                    <li><strong>Doubling Time:</strong> Took only 50 years to double from 3 to 6 billion</li>
                  </ul>
                </div>
              </div>
              
              <h4>Understanding Population Growth Patterns 📈</h4>
              <p>Population growth refers to the change in the number of inhabitants during a specific period, determined by birth rates, death rates, immigration, and emigration.</p>
              
              <h5>Population Growth Models 🔢</h5>
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

              <h5>Factors Affecting Growth 🎯</h5>
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

              <h4>Global Population Trends 🌍</h4>
              
              <h5>Historical Growth Pattern 📚</h5>
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

              <h5>Regional Variations 🗺️</h5>
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

              <h4>Population Explosion: When Growth Goes Viral 🚀</h4>
              
              <h5>Understanding Population Explosion 💥</h5>
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

              <h5>Consequences of Population Explosion ⚠️</h5>
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

              <h4>Engineering Implications 🔧</h4>
              
              <div className="career-opportunities">
                <h5>Technology Solutions 💻</h5>
                <ul>
                  <li><strong>Smart Cities:</strong> IoT systems for efficient urban management</li>
                  <li><strong>Population Analytics:</strong> Big data for demographic planning</li>
                  <li><strong>Resource Optimization:</strong> AI for efficient resource allocation</li>
                  <li><strong>Infrastructure Scaling:</strong> Designing systems for population growth</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
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
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/QsBT5EQt348"
                title="Population Growth"
                allowFullScreen
              ></iframe>
            </div>

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
              <h3>Women Empowerment: The Ultimate Population Control Algorithm 👩‍💻</h3>
              <div className="theory-box">
                <p>Here's something amazing - women's empowerment is like the most effective optimization algorithm for population control! 🎯 When women get education and opportunities, birth rates naturally decrease. It's not magic, it's data science! Countries that invested in women's education saw dramatic drops in fertility rates. As engineers, understanding this correlation helps you see how social solutions can be more effective than technical ones!</p>
                
                <div className="performance-metrics">
                  <h4>Women Empowerment Impact Stats 📊</h4>
                  <ul>
                    <li><strong>Education Effect:</strong> Each year of schooling reduces fertility by 0.26 children</li>
                    <li><strong>Economic Impact:</strong> Women's workforce participation boosts GDP by 35%</li>
                    <li><strong>Health Outcomes:</strong> Educated mothers have 50% lower child mortality</li>
                    <li><strong>Decision Making:</strong> Empowered women delay marriage and childbearing</li>
                  </ul>
                </div>
              </div>
              
              <h4>Women Empowerment and Population Dynamics 🔗</h4>
              <p>Women empowerment plays a crucial role in controlling population growth and achieving sustainable development. Educated and empowered women tend to have fewer children and make informed reproductive choices.</p>
              
              <h5>The Correlation: Education → Empowerment → Population Control 📈</h5>
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

              <h4>Strategies for Women Empowerment 🎯</h4>
              
              <div className="example-box">
                <h5>Education and Skills Development 🎓</h5>
                <ul>
                  <li><strong>Universal girls' education:</strong> Ensuring access to quality schooling</li>
                  <li><strong>Technical skills training:</strong> Preparing women for modern jobs</li>
                  <li><strong>Digital literacy programs:</strong> Tech skills for the digital economy</li>
                  <li><strong>Higher education access:</strong> University and professional education</li>
                  <li><strong>Lifelong learning:</strong> Continuous skill development</li>
                </ul>

                <h5>Economic Empowerment 💰</h5>
                <ul>
                  <li><strong>Employment opportunities:</strong> Creating jobs for women</li>
                  <li><strong>Entrepreneurship support:</strong> Business development programs</li>
                  <li><strong>Access to credit:</strong> Financial services for women</li>
                  <li><strong>Property rights:</strong> Legal ownership of assets</li>
                  <li><strong>Equal pay initiatives:</strong> Closing gender wage gaps</li>
                </ul>

                <h5>Health and Rights 🏥</h5>
                <ul>
                  <li><strong>Reproductive healthcare:</strong> Family planning services</li>
                  <li><strong>Maternal health programs:</strong> Safe pregnancy and childbirth</li>
                  <li><strong>Legal rights protection:</strong> Anti-discrimination laws</li>
                  <li><strong>Political participation:</strong> Leadership and governance roles</li>
                </ul>
              </div>

              <h4>Global and National Initiatives 🌍</h4>
              
              <div className="example-box">
                <h5>International Frameworks 🌐</h5>
                <ul>
                  <li><strong>UN SDG 5:</strong> Gender Equality as global priority</li>
                  <li><strong>CEDAW:</strong> Convention eliminating discrimination against women</li>
                  <li><strong>Beijing Declaration:</strong> Platform for Action on women's rights</li>
                  <li><strong>ICPD:</strong> International Conference on Population and Development</li>
                  <li><strong>HeForShe campaign:</strong> Engaging men in gender equality</li>
                </ul>

                <h5>Indian National Programs 🇮🇳</h5>
                <ul>
                  <li><strong>Beti Bachao Beti Padhao:</strong> Save and educate the girl child</li>
                  <li><strong>Sarva Shiksha Abhiyan:</strong> Universal elementary education</li>
                  <li><strong>Janani Suraksha Yojana:</strong> Safe motherhood program</li>
                  <li><strong>Self Help Groups (SHGs):</strong> Women's economic collectives</li>
                  <li><strong>Maternity Benefit Program:</strong> Financial support for mothers</li>
                </ul>
              </div>

              <h4>Technology and Women Empowerment 💻</h4>
              
              <div className="career-opportunities">
                <h5>Tech Solutions for Empowerment 🔧</h5>
                <ul>
                  <li><strong>EdTech Platforms:</strong> Online education for women and girls</li>
                  <li><strong>Financial Inclusion Apps:</strong> Digital banking and microfinance</li>
                  <li><strong>Health Monitoring Systems:</strong> Maternal and reproductive health apps</li>
                  <li><strong>Skills Training Platforms:</strong> Online vocational education</li>
                  <li><strong>Safety Apps:</strong> Women's security and emergency response</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
                <ul>
                  <li><strong>Social Impact Engineers:</strong> Technology for social change</li>
                  <li><strong>EdTech Developers:</strong> Educational platforms and apps</li>
                  <li><strong>FinTech for Inclusion:</strong> Financial services for underserved populations</li>
                  <li><strong>Health Tech Specialists:</strong> Digital health solutions</li>
                  <li><strong>Data Scientists:</strong> Analyzing gender equality metrics</li>
                </ul>
              </div>

              <h4>The Engineering Perspective 🔍</h4>
              <p>Women's empowerment is like optimizing a complex system - when you improve one variable (education), it positively affects multiple other variables (health, economy, population). As engineers, you can design technologies that accelerate this optimization process and create scalable solutions for women's empowerment worldwide!</p>
            </section>

            <div className="video-embed">
              <h4>Women Empowerment and Demographics</h4>
              <p>Exploring how women's education and empowerment affect population trends.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Women Empowerment"
                allowFullScreen
              ></iframe>
            </div>

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
              <h3>Environmental Issues: When Earth's Systems Get Corrupted 🌍</h3>
              <div className="theory-box">
                <p>Think of Earth as a massive distributed system, and these environmental issues are like critical system failures! 💻 Global warming is like overheating, acid rain is like corrosive data corruption, and ozone depletion is like a security vulnerability. As engineers, understanding these "bugs" in Earth's system helps you design solutions to patch them!</p>
                
                <div className="performance-metrics">
                  <h4>Environmental Crisis Stats 📊</h4>
                  <ul>
                    <li><strong>Global Temperature:</strong> 1.1°C increase since pre-industrial times</li>
                    <li><strong>CO₂ Levels:</strong> 421 ppm (highest in 3+ million years)</li>
                    <li><strong>Ozone Hole:</strong> 24 million km² at peak (size of North America)</li>
                    <li><strong>Acid Rain pH:</strong> Can drop to 4.2-4.4 (normal rain is 5.6)</li>
                  </ul>
                </div>
              </div>
              
              <h4>Global Warming: Earth's Overheating Problem 🌡️</h4>
              <p>Global warming refers to the long-term rise in Earth's average temperature, primarily caused by human activities that increase greenhouse gas concentrations.</p>
              
              <h5>Causes of Global Warming 🏭</h5>
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

              <h5>Effects of Global Warming 💀</h5>
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

              <h4>Acid Rain: Atmospheric Data Corruption 🌧️</h4>
              <p>Acid rain is precipitation with elevated hydrogen ions (low pH), resulting from sulfur dioxide and nitrogen oxide emissions.</p>
              
              <h5>Formation Process 🔄</h5>
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

              <h5>Effects of Acid Rain 💀</h5>
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

              <h4>Ozone Layer Depletion: Earth's Security Breach 🛡️</h4>
              <p>Ozone layer depletion is the gradual thinning of Earth's protective ozone layer, caused by human-made chemicals.</p>
              
              <h5>Causes of Ozone Depletion ⚠️</h5>
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

              <h5>Effects of Ozone Depletion 💀</h5>
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

              <h4>Engineering Solutions 🔧</h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications 💻</h5>
                <ul>
                  <li><strong>Climate Monitoring:</strong> Satellite systems and IoT sensors</li>
                  <li><strong>Emission Control:</strong> Clean technology and carbon capture</li>
                  <li><strong>Renewable Energy:</strong> Solar, wind, and alternative power systems</li>
                  <li><strong>Environmental Modeling:</strong> AI for climate prediction and analysis</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
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
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dcBRdlzoAZ4"
                title="Environmental Issues"
                allowFullScreen
              ></iframe>
            </div>

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
              <h3>IT in Environment: When Technology Becomes the Solution 💻🌱</h3>
              <div className="theory-box">
                <p>Plot twist! 🎭 While technology contributed to many environmental problems, it's also becoming our superhero for solving them! IT is like having a Swiss Army knife for environmental challenges - monitoring, predicting, optimizing, and automating solutions. As future engineers, you're not just building apps and systems, you're building the tools to save the planet!</p>
              </div>
              
              <h4>Information Technology Applications in Environment 🌍</h4>
              <p>Information technology plays an increasingly important role in environmental monitoring, management, and human health protection through advanced data collection, analysis, and communication systems.</p>
              
              <h5>Environmental Monitoring Systems 📶</h5>
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

              <h4>Engineering Career Opportunities in Environmental IT 🚀</h4>
              
              <div className="career-opportunities">
                <h5>Software Engineering Roles 💻</h5>
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
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="IT Environmental Applications"
                allowFullScreen
              ></iframe>
            </div>

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
              <h3>Field Work: Real-World Environmental Data Collection 🌿</h3>
              <div className="theory-box">
                <p>Time to get your hands dirty! 😄 Field work is like beta testing in the real world - you take your theoretical knowledge and test it against actual environmental conditions. It's where you become an environmental detective, documenting assets, investigating pollution, and collecting data that could influence policy decisions!</p>
              </div>
              
              <h4>Environmental Asset Documentation 📊</h4>
              <p>Field visits are essential for understanding and documenting local environmental assets such as rivers, forests, grasslands, hills, and mountains.</p>
              
              <h5>Documentation Process 📋</h5>
              <div className="example-box">
                <p>Like conducting a comprehensive system audit in the field!</p>
                <ul>
                  <li><strong>Pre-visit research:</strong> Background study and planning</li>
                  <li><strong>GPS mapping:</strong> Precise location documentation</li>
                  <li><strong>Photographic documentation:</strong> Visual evidence collection</li>
                  <li><strong>Species cataloging:</strong> Biodiversity inventory</li>
                  <li><strong>Parameter measurements:</strong> Environmental data collection</li>
                  <li><strong>Community interviews:</strong> Stakeholder input gathering</li>
                </ul>
              </div>

              <h4>Technology Integration in Field Work 📱</h4>
              
              <div className="career-opportunities">
                <h5>Digital Tools for Field Studies 🔧</h5>
                <ul>
                  <li><strong>GPS and GIS apps:</strong> Location mapping and spatial analysis</li>
                  <li><strong>Environmental sensors:</strong> Real-time parameter measurement</li>
                  <li><strong>Species identification apps:</strong> AI-powered biodiversity tools</li>
                  <li><strong>Data collection platforms:</strong> Digital forms and databases</li>
                  <li><strong>Drone technology:</strong> Aerial surveys and documentation</li>
                </ul>

                <h5>Career Applications 🚀</h5>
                <ul>
                  <li><strong>Environmental Consultants:</strong> Field assessment and reporting</li>
                  <li><strong>Ecological Surveyors:</strong> Biodiversity and habitat assessment</li>
                  <li><strong>Environmental Monitors:</strong> Pollution and compliance tracking</li>
                  <li><strong>Field Data Scientists:</strong> Environmental data collection and analysis</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Environmental Field Work Methods</h4>
              <p>Learn about field study techniques and environmental documentation.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Field Work Methods"
                allowFullScreen
              ></iframe>
            </div>

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