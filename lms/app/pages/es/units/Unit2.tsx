'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.1</div>
              <div className="lesson-title-main">
                <h1>Renewable and Non-Renewable Energy Resources</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Energy Resources: Powering Our Digital World</h3>
              <div className="theory-box">
                <p>Hey future engineers! 👋 Let's talk about energy - the lifeblood of everything you'll build. Every time you charge your phone, run your laptop, or stream Netflix, you're tapping into our global energy system. Understanding energy resources isn't just environmental awareness - it's understanding the foundation of all technology!</p>
                
                <div className="performance-metrics">
                  <h4>Energy Facts That Matter to Engineers</h4>
                  <ul>
                    <li><strong>Data Centers:</strong> Use 1% of global electricity - that's where your apps live!</li>
                    <li><strong>Renewable Growth:</strong> Solar and wind now cheapest electricity sources</li>
                    <li><strong>Tech Industry Shift:</strong> Google, Apple, Microsoft all committed to 100% renewable energy</li>
                    <li><strong>Career Opportunities:</strong> Clean energy sector adding jobs 3x faster than overall economy</li>
                  </ul>
                </div>
              </div>
              
              <h4>Energy Resource Classification</h4>
              <p>Think of energy resources like software licenses - some are renewable (like open source), others are finite (like proprietary licenses with limited uses).</p>
              
              <h5>Renewable Energy Resources</h5>
              <div className="example-box">
                <h6>Solar Energy - Nature's Semiconductor</h6>
                <ul>
                  <li><strong>How it works:</strong> Photovoltaic cells convert sunlight directly to electricity</li>
                  <li><strong>Efficiency gains:</strong> Panel efficiency doubled in 20 years, costs dropped 90%</li>
                  <li><strong>Engineering applications:</strong> Powers satellites, remote sensors, IoT devices</li>
                  <li><strong>Career opportunities:</strong> Smart inverters, energy storage, grid integration</li>
                </ul>
              </div>

              <div className="example-box">
                <h6>Wind Energy - Kinetic to Electrical Conversion</h6>
                <ul>
                  <li><strong>Process:</strong> Kinetic energy → rotational motion → electrical generation</li>
                  <li><strong>Smart technology:</strong> Modern turbines use AI for optimal positioning</li>
                  <li><strong>Offshore potential:</strong> Floating wind farms in deep waters</li>
                  <li><strong>Grid integration:</strong> Variable output requires smart grid solutions</li>
                </ul>
              </div>

              <div className="example-box">
                <h6>Other Renewable Sources</h6>
                <ul>
                  <li><strong>Hydropower:</strong> Most reliable renewable - like guaranteed server uptime</li>
                  <li><strong>Geothermal:</strong> Tapping Earth's internal heat for consistent power</li>
                  <li><strong>Biomass:</strong> Organic matter converted to energy</li>
                  <li><strong>Tidal/Wave:</strong> Ocean movements generating electricity</li>
                </ul>
              </div>

              <h5>Non-Renewable Energy Resources</h5>
              <p>Non-renewables are like legacy systems - they've powered our development so far, but come with technical debt (environmental costs).</p>
              
              <div className="example-box">
                <h6>Fossil Fuels - The Legacy Energy System</h6>
                <ul>
                  <li><strong>Coal:</strong> Like running on old hardware - works but inefficient and polluting</li>
                  <li><strong>Oil:</strong> Essential for transportation and petrochemicals (your plastic devices!)</li>
                  <li><strong>Natural Gas:</strong> The "transition fuel" - cleaner than coal but still emits CO₂</li>
                </ul>
              </div>

              <div className="example-box">
                <h6>Nuclear Energy - High-Density Power</h6>
                <ul>
                  <li><strong>Energy density:</strong> 1 uranium pellet = 1 ton of coal (incredible efficiency!)</li>
                  <li><strong>Baseload power:</strong> Provides consistent electricity 24/7</li>
                  <li><strong>Safety systems:</strong> Multiple redundant safety mechanisms</li>
                  <li><strong>Waste challenge:</strong> Long-term storage solutions needed</li>
                </ul>
              </div>

              <h4>Energy Resource Comparisons</h4>
              
              <div className="comparison-table">
                <h5>Advantages of Renewables</h5>
                <ul>
                  <li><strong>Sustainable supply:</strong> Won't run out like fossil fuels</li>
                  <li><strong>Low environmental impact:</strong> Minimal pollution during operation</li>
                  <li><strong>Reduced emissions:</strong> Help combat climate change</li>
                  <li><strong>Energy independence:</strong> Reduce reliance on imports</li>
                  <li><strong>Job creation:</strong> Growing green tech sector</li>
                </ul>

                <h5>Challenges of Renewables</h5>
                <ul>
                  <li><strong>Intermittency:</strong> Sun doesn't always shine, wind doesn't always blow</li>
                  <li><strong>Storage issues:</strong> Need better battery technology</li>
                  <li><strong>High initial costs:</strong> Large upfront investment required</li>
                  <li><strong>Geographic limitations:</strong> Not all areas suitable for all types</li>
                  <li><strong>Grid integration:</strong> Existing infrastructure needs upgrades</li>
                </ul>

                <h5>Non-Renewable Issues</h5>
                <ul>
                  <li><strong>Finite supply:</strong> Will eventually run out</li>
                  <li><strong>Environmental damage:</strong> Pollution, climate change</li>
                  <li><strong>Price volatility:</strong> Costs fluctuate with supply/demand</li>
                  <li><strong>Geopolitical tensions:</strong> Dependence on other countries</li>
                </ul>
              </div>

              <h4>What This Means for Your Engineering Career</h4>
              
              <div className="career-opportunities">
                <h5>Software Engineers</h5>
                <ul>
                  <li><strong>Energy Management Apps:</strong> Optimize building and device energy usage</li>
                  <li><strong>Smart Grid Software:</strong> Balance supply and demand in real-time</li>
                  <li><strong>IoT Energy Solutions:</strong> Connected devices for energy monitoring</li>
                  <li><strong>Predictive Analytics:</strong> Forecast energy patterns and optimize systems</li>
                </ul>

                <h5>Hardware Engineers</h5>
                <ul>
                  <li><strong>Power Electronics:</strong> Inverters, converters, charging systems</li>
                  <li><strong>Energy Harvesting:</strong> Capture energy from ambient sources</li>
                  <li><strong>Efficient Processors:</strong> Low-power chip design</li>
                  <li><strong>Sensor Networks:</strong> Monitor and control energy systems</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Renewable Energy Revolution</h4>
              <p>See how renewable energy is transforming the global energy landscape.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/PLBK1ux5b7U?si=mWIp1BOJujIMC8Az" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Forest Resources →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Forest Resources: Use and Over-exploitation</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Forest Resources: Nature's Multi-Purpose Infrastructure</h3>
              <div className="theory-box">
                <p>Think of forests as nature's data centers - they're complex systems providing multiple services simultaneously! Just like a server hosts websites, processes data, and stores information, forests provide timber, regulate climate, purify water, and support biodiversity all at once. But unlike your backup systems, we can't just restore forests from a snapshot when they're gone! 😅</p>
                
                <div className="performance-metrics">
                  <h4>Forest Stats That Impact Your World</h4>
                  <ul>
                    <li><strong>Paper Products:</strong> Your notebooks, packaging, and toilet paper all come from forests</li>
                    <li><strong>Carbon Storage:</strong> Forests store 861 billion tons of carbon - climate regulation at scale!</li>
                    <li><strong>Oxygen Production:</strong> One large tree produces enough O₂ for 2 people per day</li>
                    <li><strong>Economic Value:</strong> $150 billion annual global timber trade</li>
                  </ul>
                </div>
              </div>
              
              <h4>Forest Resource Management</h4>
              <p>Forests provide multiple ecological services and resources, but over-exploitation and deforestation pose significant threats to environmental stability and biodiversity.</p>
              
              <h5>Direct Forest Uses</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Timber production:</strong> Construction materials, furniture (your desk!)</li>
                  <li><strong>Fuelwood:</strong> Cooking and heating in rural areas</li>
                  <li><strong>Fodder:</strong> Livestock feed from forest plants</li>
                  <li><strong>Medicinal plants:</strong> 25% of pharmaceuticals come from forest compounds</li>
                  <li><strong>Edible products:</strong> Fruits, nuts, mushrooms, honey</li>
                  <li><strong>Industrial materials:</strong> Resins, gums, latex for manufacturing</li>
                </ul>
              </div>

              <h5>Indirect Forest Services</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Climate regulation:</strong> Natural air conditioning systems</li>
                  <li><strong>Carbon sequestration:</strong> Removing CO₂ from atmosphere</li>
                  <li><strong>Watershed protection:</strong> Natural water filtration and flood control</li>
                  <li><strong>Soil conservation:</strong> Root systems prevent erosion</li>
                  <li><strong>Biodiversity conservation:</strong> 80% of terrestrial species live in forests</li>
                  <li><strong>Air purification:</strong> Filtering pollutants and producing oxygen</li>
                </ul>
              </div>

              <h4>Deforestation and Over-exploitation</h4>
              
              <h5>Causes of Deforestation</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Agricultural expansion:</strong> Cattle ranching, crop farming (80% of deforestation)</li>
                  <li><strong>Logging:</strong> Timber and wood products for construction</li>
                  <li><strong>Infrastructure development:</strong> Roads, dams, urban settlements</li>
                  <li><strong>Population growth:</strong> More people need more space and resources</li>
                  <li><strong>Forest fires:</strong> Both natural and human-caused</li>
                  <li><strong>Shifting cultivation:</strong> Slash-and-burn agriculture practices</li>
                </ul>
              </div>

              <h5>Effects of Deforestation</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Biodiversity loss:</strong> Species extinction and habitat destruction</li>
                  <li><strong>Climate change acceleration:</strong> Less CO₂ absorption, more emissions</li>
                  <li><strong>Soil erosion:</strong> Without tree roots, topsoil washes away</li>
                  <li><strong>Disrupted water cycles:</strong> Changes in rainfall patterns</li>
                  <li><strong>Increased flooding:</strong> No trees to absorb excess water</li>
                  <li><strong>Loss of indigenous cultures:</strong> Forest communities displaced</li>
                </ul>
              </div>

              <h4>Case Studies of Deforestation</h4>
              
              <div className="case-study">
                <h5>Amazon Rainforest - The World's Largest Natural Database</h5>
                <ul>
                  <li><strong>Annual deforestation rate:</strong> ~10,000 km² (size of Qatar!)</li>
                  <li><strong>Primary drivers:</strong> Cattle ranching (80%) and soy farming</li>
                  <li><strong>Impact:</strong> Biodiversity loss, global climate effects</li>
                  <li><strong>Conservation efforts:</strong> Protected areas, satellite monitoring</li>
                  <li><strong>Tech solutions:</strong> AI detection, blockchain certification</li>
                </ul>
              </div>

              <div className="case-study">
                <h5>Indonesian Forests - Palm Oil Expansion</h5>
                <ul>
                  <li><strong>Major cause:</strong> Palm oil plantation expansion</li>
                  <li><strong>Issues:</strong> Orangutan habitat loss, forest fires</li>
                  <li><strong>Consequences:</strong> Regional haze, species endangerment</li>
                  <li><strong>Response:</strong> Moratoriums, sustainable certification schemes</li>
                </ul>
              </div>

              <div className="case-study">
                <h5>African Deforestation - Population Pressure</h5>
                <ul>
                  <li><strong>Rate:</strong> ~4 million hectares lost annually</li>
                  <li><strong>Factors:</strong> Population pressure, fuelwood demand</li>
                  <li><strong>Effects:</strong> Desertification, increased poverty</li>
                  <li><strong>Initiatives:</strong> Great Green Wall project across Sahel</li>
                </ul>
              </div>

              <h4>Engineering Solutions for Forest Conservation</h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications 💻</h5>
                <ul>
                  <li><strong>Satellite Monitoring:</strong> Real-time deforestation alerts using AI</li>
                  <li><strong>Drone Surveillance:</strong> Automated forest health monitoring</li>
                  <li><strong>Blockchain Tracking:</strong> Supply chain transparency for timber</li>
                  <li><strong>IoT Sensors:</strong> Monitoring soil moisture, tree health, wildlife</li>
                  <li><strong>Mobile Apps:</strong> Forest monitoring and reporting systems</li>
                </ul>

                <h5>Career Opportunities for Engineers </h5>
                <ul>
                  <li><strong>Software Engineers:</strong> Forest monitoring apps, AI detection systems</li>
                  <li><strong>Hardware Engineers:</strong> Environmental sensors, drone technology</li>
                  <li><strong>Data Scientists:</strong> Satellite data analysis, predictive modeling</li>
                  <li><strong>Environmental Engineers:</strong> Sustainable forestry systems</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Deforestation and Technology Solutions</h4>
              <p>See how technology is being used to monitor and combat deforestation.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/S_GuLdbMveQ?si=O-Ufn4Zm4j6M4YR-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Energy Resources</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Water Resources →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Water Resources Management</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Water Resources: The Ultimate Shared Resource</h3>
              <div className="theory-box">
                <p>Water is like bandwidth for life - everyone needs it, there's never enough where you need it most, and managing it efficiently is crucial for everything to work!  As engineers, you'll encounter water in manufacturing (chip production needs ultra-pure water), cooling systems (data centers use millions of gallons), and even in making your devices. Understanding water isn't just environmental awareness - it's understanding a critical constraint in almost every engineering system!</p>
                
                <div className="performance-metrics">
                  <h4>Water Facts That Affect Your Engineering World</h4>
                  <ul>
                    <li><strong>Chip Manufacturing:</strong> Making one computer chip requires 8-10 gallons of ultra-pure water</li>
                    <li><strong>Data Center Cooling:</strong> Google uses 450 million gallons annually for server cooling</li>
                    <li><strong>Global Scarcity:</strong> 2 billion people lack safely managed drinking water</li>
                    <li><strong>Economic Impact:</strong> Water scarcity could cost global economy $14 trillion by 2050</li>
                  </ul>
                </div>
              </div>
              
              <h4>Water Resource Management</h4>
              <p>Water is essential for all life forms. Proper management of both surface and groundwater resources is critical for sustainable development and environmental health.</p>
              
              <h5>Surface Water Resources</h5>
              <div className="example-box">
                <p>Surface water is like the visible internet - you can see it and easily access it, but it's highly variable and can get congested!</p>
                <ul>
                  <li><strong>Rivers:</strong> Primary source for irrigation and domestic use</li>
                  <li><strong>Lakes:</strong> Natural reservoirs and recreation areas</li>
                  <li><strong>Reservoirs:</strong> Artificial storage for water security</li>
                  <li><strong>Wetlands:</strong> Natural filters and biodiversity hotspots</li>
                  <li><strong>Streams and creeks:</strong> Local water sources</li>
                </ul>
              </div>

              <h5>Groundwater Resources</h5>
              <div className="example-box">
                <p>Groundwater is like the dark web of water - massive, hidden, often more reliable than surface sources, but harder to monitor and protect!</p>
                <ul>
                  <li><strong>Aquifers:</strong> Underground water-bearing formations</li>
                  <li><strong>Wells:</strong> Access points for groundwater extraction</li>
                  <li><strong>Springs:</strong> Natural outlets of groundwater</li>
                  <li><strong>Artesian wells:</strong> Pressurized groundwater sources</li>
                  <li><strong>Confined and unconfined aquifers:</strong> Different storage types</li>
                </ul>
              </div>

              <h4>Over-Utilization of Water Resources</h4>
              
              <h5>Causes of Over-Utilization</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Agriculture:</strong> Irrigation consumes 70% of freshwater globally</li>
                  <li><strong>Industrial growth:</strong> Manufacturing and processing needs</li>
                  <li><strong>Urbanization:</strong> Growing cities with higher demand</li>
                  <li><strong>Population growth:</strong> More people requiring water</li>
                  <li><strong>Climate change:</strong> Altered precipitation patterns</li>
                </ul>
              </div>

              <h5>Consequences of Over-Utilization</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Water scarcity:</strong> Shortage of adequate supplies</li>
                  <li><strong>Groundwater depletion:</strong> Falling water tables</li>
                  <li><strong>Quality deterioration:</strong> Contamination from pollutants</li>
                  <li><strong>Salinization:</strong> Salt accumulation in soil and water</li>
                  <li><strong>Conflicts:</strong> Competition over water resources</li>
                </ul>
              </div>

              <h4>Floods, Drought, Conflicts over Water, Dams</h4>
              
              <h5>Floods: When the System Gets Overwhelmed</h5>
              <div className="example-box">
                <p>Floods are like DDoS attacks on infrastructure - too much input overwhelms the system's capacity!</p>
                <ul>
                  <li><strong>Causes:</strong> Excessive rainfall, dam failures, deforestation, poor drainage</li>
                  <li><strong>Impacts:</strong> Property damage, displacement, crop loss, supply chain disruption</li>
                  <li><strong>Prevention:</strong> Early warning systems, flood management infrastructure</li>
                  <li><strong>Management:</strong> Flood control structures, zoning regulations</li>
                  <li><strong>Types:</strong> Riverine, flash, coastal, urban flooding</li>
                </ul>
              </div>

              <h5>Drought: When the System Runs Out of Resources</h5>
              <div className="example-box">
                <p>Droughts are like running out of memory - everything slows down and eventually crashes!</p>
                <ul>
                  <li><strong>Causes:</strong> Low rainfall, high evaporation, over-extraction</li>
                  <li><strong>Impacts:</strong> Crop failure, water restrictions, increased energy costs</li>
                  <li><strong>Mitigation:</strong> Water conservation, drought-resistant crops</li>
                  <li><strong>Management:</strong> Rainwater harvesting, water recycling</li>
                  <li><strong>Types:</strong> Meteorological, agricultural, hydrological drought</li>
                </ul>
              </div>

              <h4>Water Conflicts and Dam Projects</h4>
              
              <h5>Water Conflicts</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Inter-state disputes:</strong> Cauvery, Krishna, Godavari waters in India</li>
                  <li><strong>International conflicts:</strong> Indus, Ganges, Nile rivers</li>
                  <li><strong>Urban-rural conflicts:</strong> Competing water needs</li>
                  <li><strong>Agricultural-industrial conflicts:</strong> Different usage priorities</li>
                  <li><strong>Environmental vs. developmental:</strong> Conservation vs. utilization</li>
                </ul>
              </div>

              <h5>Dam Benefits and Problems</h5>
              <div className="comparison-table">
                <h6>Dam Benefits</h6>
                <ul>
                  <li><strong>Irrigation:</strong> Supporting agriculture and food security</li>
                  <li><strong>Power generation:</strong> Hydroelectricity production</li>
                  <li><strong>Flood control:</strong> Regulating water flow</li>
                  <li><strong>Water supply:</strong> Municipal and industrial needs</li>
                  <li><strong>Recreation:</strong> Tourism and water sports</li>
                </ul>

                <h6>Dam Problems</h6>
                <ul>
                  <li><strong>Displacement:</strong> Submergence of villages and communities</li>
                  <li><strong>Ecological disruption:</strong> River ecosystem changes</li>
                  <li><strong>Sediment trapping:</strong> Reduced downstream fertility</li>
                  <li><strong>Seismic risks:</strong> Reservoir-induced earthquakes</li>
                  <li><strong>High costs:</strong> Construction and maintenance expenses</li>
                </ul>
              </div>

              <h4>Engineering Solutions for Water Management</h4>
              
              <div className="career-opportunities">
                <h5>Smart Water Systems</h5>
                <ul>
                  <li><strong>IoT Sensors:</strong> Real-time monitoring of water quality and flow</li>
                  <li><strong>Smart Meters:</strong> Detecting leaks and optimizing usage</li>
                  <li><strong>Predictive Analytics:</strong> Forecasting demand and preventing shortages</li>
                  <li><strong>Automated Treatment:</strong> AI-controlled water treatment processes</li>
                </ul>

                <h5>Career Opportunities for Engineers</h5>
                <ul>
                  <li><strong>Software Engineers:</strong> Water management apps, leak detection algorithms</li>
                  <li><strong>Hardware Engineers:</strong> Water sensors, treatment equipment</li>
                  <li><strong>Environmental Engineers:</strong> Water treatment and distribution systems</li>
                  <li><strong>Data Scientists:</strong> Water usage pattern analysis and optimization</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Water Scarcity and Technology Solutions</h4>
              <p>Explore how technology is addressing global water challenges.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/5zyxsOMw634?si=K4iyIwP8e1PaHOdX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Forest Resources</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Mineral Resources →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.4</div>
              <div className="lesson-title-main">
                <h1>Mineral Resources and Environmental Effects</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Mineral Resources: The Raw Materials of Technology </h3>
              <div className="theory-box">
                <p>Every device you use - your smartphone, laptop, car, even the building you're sitting in - exists because we can extract and process minerals from the Earth! As engineers, you're essentially mineral transformation specialists, turning raw materials into useful products. But here's the catch: mining these materials often creates environmental problems that future engineers (like you) will need to solve.</p>
                
                <div className="performance-metrics">
                  <h4>Minerals in Your Tech World</h4>
                  <ul>
                    <li><strong>Smartphone Components:</strong> Contains 60+ different minerals including rare earth elements</li>
                    <li><strong>Electric Vehicle Batteries:</strong> Require lithium, cobalt, nickel - mining hotspots worldwide</li>
                    <li><strong>Solar Panels:</strong> Need high-purity silicon, silver, and rare earth elements</li>
                    <li><strong>Data Centers:</strong> Massive amounts of copper, aluminum, and rare earth magnets</li>
                  </ul>
                </div>
              </div>
              
              <h4>Mineral Resource Classification</h4>
              <p>Mineral resources are naturally occurring inorganic substances with economic value. They are essential for industrial development but their extraction and use have significant environmental impacts.</p>
              
              <h5>Classification of Minerals</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Energy Minerals:</strong> Coal, petroleum, uranium</li>
                  <li><strong>Metallic Minerals:</strong> Iron ore, bauxite, copper</li>
                  <li><strong>Non-metallic Minerals:</strong> Limestone, mica, salt</li>
                  <li><strong>Minor Minerals:</strong> Sand, gravel, clay</li>
                  <li><strong>Industrial Minerals:</strong> Gypsum, phosphates</li>
                </ul>
              </div>

              <h5>Uses of Mineral Resources</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Construction:</strong> Building materials and infrastructure</li>
                  <li><strong>Manufacturing:</strong> Raw materials for industries</li>
                  <li><strong>Energy Production:</strong> Fuel for power generation</li>
                  <li><strong>Technology:</strong> Components for electronics</li>
                  <li><strong>Agriculture:</strong> Fertilizers and soil amendments</li>
                </ul>
              </div>

              <h4>Environmental Effects of Mining</h4>
              
              <h5>Direct Environmental Impacts </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Land degradation:</strong> Soil removal and landscape alteration</li>
                  <li><strong>Deforestation:</strong> Clearing vegetation for mining sites</li>
                  <li><strong>Water contamination:</strong> Acid mine drainage and heavy metals</li>
                  <li><strong>Air pollution:</strong> Dust and toxic gas emissions</li>
                  <li><strong>Soil contamination:</strong> Heavy metal accumulation</li>
                </ul>
              </div>

              <h5>Indirect Environmental Impacts </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Biodiversity loss:</strong> Habitat destruction and fragmentation</li>
                  <li><strong>Climate change:</strong> Greenhouse gas emissions</li>
                  <li><strong>Human health:</strong> Exposure to toxic substances</li>
                  <li><strong>Social disruption:</strong> Displacement of communities</li>
                  <li><strong>Water table disruption:</strong> Affecting groundwater</li>
                </ul>
              </div>

              <h4>Case Studies of Mining Impacts </h4>
              
              <div className="case-study">
                <h5>Jharia Coalfields - The Underground Inferno</h5>
                <ul>
                  <li><strong>Location:</strong> Jharkhand, India</li>
                  <li><strong>Issue:</strong> Underground coal fires burning since 1916</li>
                  <li><strong>Environmental impact:</strong> Air pollution, land subsidence</li>
                  <li><strong>Social impact:</strong> Displacement of 0.4 million people</li>
                </ul>
              </div>

              <div className="case-study">
                <h5>Kudremukh Iron Ore - Biodiversity vs Development </h5>
                <ul>
                  <li><strong>Location:</strong> Karnataka, India</li>
                  <li><strong>Issue:</strong> Environmental degradation in Western Ghats</li>
                  <li><strong>Impact:</strong> Deforestation, water pollution</li>
                  <li><strong>Outcome:</strong> Supreme Court ordered closure in 2006</li>
                </ul>
              </div>

              <div className="case-study">
                <h5>Bauxite Mining - Tribal Rights vs Mining</h5>
                <ul>
                  <li><strong>Location:</strong> Niyamgiri Hills, Odisha</li>
                  <li><strong>Issue:</strong> Displacement of Dongria Kondh tribe</li>
                  <li><strong>Environmental concern:</strong> Biodiversity loss</li>
                  <li><strong>Result:</strong> Tribal rights protected, mining stopped</li>
                </ul>
              </div>

              <h4>Engineering Solutions for Sustainable Mining</h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications </h5>
                <ul>
                  <li><strong>Precision Mining:</strong> GPS and AI to minimize environmental footprint</li>
                  <li><strong>Automated Equipment:</strong> Reduces human exposure to hazards</li>
                  <li><strong>Real-time Monitoring:</strong> IoT sensors track environmental parameters</li>
                  <li><strong>Drone Surveillance:</strong> Monitor rehabilitation and detect problems</li>
                </ul>

                <h5>Career Opportunities for Engineers </h5>
                <ul>
                  <li><strong>Software Engineers:</strong> Mining automation, environmental monitoring apps</li>
                  <li><strong>Hardware Engineers:</strong> Cleaner extraction equipment, environmental sensors</li>
                  <li><strong>Environmental Engineers:</strong> Waste reduction, bioremediation systems</li>
                  <li><strong>Data Scientists:</strong> Predictive maintenance, supply chain tracking</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Environmental Impact of Mining</h4>
              <p>Understand the environmental challenges of mineral extraction.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/ynN39sfqT8w?si=D9zVaaWoAssu3Ulg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Water Resources</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Food Resources →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.5</div>
              <div className="lesson-title-main">
                <h1>Unit 2 Quiz</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Food Resources: Feeding the World Through Technology</h3>
              <div className="theory-box">
                <p>Food security might seem unrelated to engineering, but it's actually one of the biggest tech challenges of our time! From precision agriculture using IoT sensors to lab-grown meat using biotechnology, engineers are revolutionizing how we produce, distribute, and consume food. Understanding food systems helps you see opportunities where technology can solve real-world problems that affect billions of people.</p>
                
                <div className="performance-metrics">
                  <h4>Food System Stats That Matter </h4>
                  <ul>
                    <li><strong>Global Challenge:</strong> Need to feed 9.7 billion people by 2050 with 70% more food</li>
                    <li><strong>Tech Opportunity:</strong> AgTech market growing 22% annually, worth $22 billion</li>
                    <li><strong>Waste Problem:</strong> 30-40% of food produced is wasted - massive efficiency opportunity</li>
                    <li><strong>Climate Impact:</strong> Agriculture causes 24% of greenhouse gas emissions</li>
                  </ul>
                </div>
              </div>
              
              <h4>World Food Problems </h4>
              
              <h5>Changes Caused by Agriculture and Overgrazing</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Malnutrition:</strong> Undernutrition and micronutrient deficiencies</li>
                  <li><strong>Food insecurity:</strong> Limited access to sufficient nutritious food</li>
                  <li><strong>Population growth:</strong> Increasing demand for food</li>
                  <li><strong>Climate change:</strong> Impacts on agricultural productivity</li>
                  <li><strong>Food waste:</strong> 30-40% of food produced is wasted</li>
                </ul>
              </div>

              <h4>Effects of Modern Agriculture </h4>
              
              <h5>Benefits and Problems </h5>
              <div className="comparison-table">
                <h6>Benefits </h6>
                <ul>
                  <li><strong>Increased yield:</strong> Higher crop productivity</li>
                  <li><strong>Food security:</strong> Reduced hunger in many regions</li>
                  <li><strong>Efficiency:</strong> Mechanization and improved techniques</li>
                  <li><strong>Export potential:</strong> Economic benefits from trade</li>
                </ul>

                <h6>Problems </h6>
                <ul>
                  <li><strong>Chemical dependency:</strong> Reliance on fertilizers and pesticides</li>
                  <li><strong>Environmental damage:</strong> Pollution and ecosystem disruption</li>
                  <li><strong>Social issues:</strong> Farmer debt and distress</li>
                  <li><strong>Health risks:</strong> Exposure to chemicals</li>
                </ul>
              </div>

              <h4>Fertilizer-Pesticide Problems </h4>
              
              <h5>Fertilizer Issues </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Eutrophication:</strong> Excess nutrients in water bodies</li>
                  <li><strong>Soil acidification:</strong> pH reduction over time</li>
                  <li><strong>Nitrate contamination:</strong> Groundwater pollution</li>
                  <li><strong>Dependency:</strong> Reduced soil natural fertility</li>
                  <li><strong>Cost burden:</strong> Increasing input expenses</li>
                </ul>
              </div>

              <h5>Pesticide Issues </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Bioaccumulation:</strong> Concentration in food chains</li>
                  <li><strong>Resistance development:</strong> Pest immunity</li>
                  <li><strong>Non-target effects:</strong> Harm to beneficial organisms</li>
                  <li><strong>Human health impacts:</strong> Chronic poisoning</li>
                  <li><strong>Environmental persistence:</strong> Long-term contamination</li>
                </ul>
              </div>

              <h4>Water Logging, Salinity </h4>
              
              <div className="example-box">
                <ul>
                  <li><strong>Water logging:</strong> Excessive irrigation raising water table</li>
                  <li><strong>Capillary rise:</strong> Bringing salts to surface</li>
                  <li><strong>Salinity:</strong> Salt accumulation in soil</li>
                  <li><strong>Reduced productivity:</strong> Crop yield decline</li>
                  <li><strong>Land abandonment:</strong> Unusable agricultural land</li>
                </ul>
              </div>

              <h4>Technology Solutions: Engineering the Future of Food</h4>
              
              <div className="career-opportunities">
                <h5>Precision Agriculture </h5>
                <ul>
                  <li><strong>GPS-Guided Equipment:</strong> Precise planting, fertilizing, harvesting</li>
                  <li><strong>Soil Sensors:</strong> Real-time monitoring of moisture, nutrients, pH</li>
                  <li><strong>Drone Surveillance:</strong> Crop health monitoring, pest detection</li>
                  <li><strong>Variable Rate Application:</strong> Apply inputs only where needed</li>
                </ul>

                <h5>Career Opportunities for Engineers </h5>
                <ul>
                  <li><strong>Software Engineers:</strong> Farm management software, AI for agriculture</li>
                  <li><strong>Hardware Engineers:</strong> Agricultural sensors, autonomous equipment</li>
                  <li><strong>Biotechnology Engineers:</strong> Alternative protein sources, genetic engineering</li>
                  <li><strong>Environmental Engineers:</strong> Sustainable farming systems, waste reduction</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Future of Agriculture Technology</h4>
              <p>Explore how technology is revolutionizing agriculture.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/Qmla9NLFBvU?si=iaUV3-S0OQAxt7pU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Mineral Resources</button>
            </div>
          </div>
        );

      default:
        return <div>Module not found</div>;
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit2;