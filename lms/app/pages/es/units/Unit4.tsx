'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit4Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit4: React.FC<Unit4Props> = ({ currentModule, setCurrentModule }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.1</div>
              <div className="lesson-title-main">
                <h1>Air Pollution: Definition, Causes, Effects and Control</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Air Pollution: When the Atmosphere Gets Corrupted 🌫️</h3>
              <div className="theory-box">
                <p>Hey future engineers! 👋 Think of air pollution like malware in your computer's system - harmful substances get into the atmosphere and mess up everything! Just like how a virus can slow down your laptop, air pollutants can seriously damage our health and the environment. Understanding air pollution is crucial because as engineers, you'll be designing solutions to clean up this mess! 💨</p>
                
                <div className="performance-metrics">
                  <h4>Air Pollution Stats That'll Shock You 📊</h4>
                  <ul>
                    <li><strong>Global Impact:</strong> 7 million premature deaths annually due to air pollution</li>
                    <li><strong>Economic Cost:</strong> $2.9 trillion in health and productivity losses globally</li>
                    <li><strong>Delhi AQI:</strong> Often exceeds 400+ (hazardous level is 300+)</li>
                    <li><strong>Tech Opportunity:</strong> Air quality monitoring market worth $5.5 billion by 2025</li>
                  </ul>
                </div>
              </div>
              
              <h4>Understanding Air Pollution 🔍</h4>
              <p>Air pollution is the presence of substances in the atmosphere that are harmful to the health of humans and other living beings, or cause damage to the climate or to materials.</p>
              
              <h5>Causes of Air Pollution 🏭</h5>
              <div className="example-box">
                <p>Think of pollution sources like different types of malware - each has its own way of corrupting the system!</p>
                <ul>
                  <li><strong>Industrial emissions:</strong> Factories releasing chemicals (like spamware flooding your system)</li>
                  <li><strong>Vehicular exhaust:</strong> Cars, trucks, bikes emitting gases (like background processes eating CPU)</li>
                  <li><strong>Fossil fuel combustion:</strong> Power plants burning coal/oil (like overclocking without cooling)</li>
                  <li><strong>Construction activities:</strong> Dust and particulates (like temporary files cluttering storage)</li>
                  <li><strong>Agricultural burning:</strong> Crop residue fires (like deleting files improperly)</li>
                  <li><strong>Natural sources:</strong> Volcanoes, wildfires (like hardware failures - rare but devastating)</li>
                </ul>
              </div>

              <h5>Effects of Air Pollution 💀</h5>
              <div className="example-box">
                <p>Air pollution effects are like system crashes - they affect everything from individual "users" to the entire "network"!</p>
                <ul>
                  <li><strong>Respiratory diseases:</strong> Asthma, bronchitis (like corrupted lung "software")</li>
                  <li><strong>Cardiovascular problems:</strong> Heart disease, strokes (system-wide failures)</li>
                  <li><strong>Acid rain formation:</strong> Damages buildings and crops (corrupting external systems)</li>
                  <li><strong>Ozone layer depletion:</strong> UV radiation increase (security vulnerabilities)</li>
                  <li><strong>Global warming:</strong> Climate change acceleration (system overheating)</li>
                  <li><strong>Crop damage:</strong> Reduced agricultural productivity (application failures)</li>
                </ul>
              </div>

              <h4>Control Measures for Air Pollution 🛡️</h4>
              
              <h5>Technological Solutions - The Engineering Approach 🔧</h5>
              <div className="example-box">
                <p>These are like antivirus software and system optimizations - technical fixes to clean up the mess!</p>
                <ul>
                  <li><strong>Scrubbers and filters:</strong> Industrial "antivirus" systems removing pollutants</li>
                  <li><strong>Catalytic converters:</strong> Vehicle "cleanup utilities" reducing emissions</li>
                  <li><strong>Electrostatic precipitators:</strong> "Spam filters" for particulate matter</li>
                  <li><strong>Flue gas desulfurization:</strong> Removing sulfur compounds from emissions</li>
                  <li><strong>Advanced emission control:</strong> Next-gen pollution control technologies</li>
                  <li><strong>Renewable energy adoption:</strong> Switching to "cleaner operating systems"</li>
                </ul>
              </div>

              <h5>Administrative Measures - The Policy Framework 📋</h5>
              <div className="example-box">
                <p>Like system administration and user policies - rules and regulations to prevent pollution!</p>
                <ul>
                  <li><strong>Emission standards:</strong> Setting "performance benchmarks" for polluters</li>
                  <li><strong>Vehicle inspection programs:</strong> Regular "system health checks"</li>
                  <li><strong>Industrial zoning:</strong> Separating polluting industries from residential areas</li>
                  <li><strong>Environmental Impact Assessment:</strong> "Security audits" before new projects</li>
                  <li><strong>Green belt development:</strong> Natural "firewalls" around cities</li>
                  <li><strong>Public transportation:</strong> Shared resources to reduce individual emissions</li>
                </ul>
              </div>

              <h4>Engineering Career Opportunities 🚀</h4>
              
              <div className="career-opportunities">
                <h5>Software Engineering Applications 💻</h5>
                <ul>
                  <li><strong>Air Quality Apps:</strong> Real-time monitoring and alert systems</li>
                  <li><strong>Emission Tracking:</strong> IoT systems for industrial emission monitoring</li>
                  <li><strong>Smart Traffic Management:</strong> AI to optimize traffic flow and reduce emissions</li>
                  <li><strong>Pollution Prediction Models:</strong> Machine learning for air quality forecasting</li>
                </ul>

                <h5>Hardware Engineering Solutions ⚙️</h5>
                <ul>
                  <li><strong>Air Quality Sensors:</strong> Low-cost, accurate pollution monitoring devices</li>
                  <li><strong>Emission Control Systems:</strong> Advanced filtration and treatment equipment</li>
                  <li><strong>Electric Vehicle Technology:</strong> Clean transportation solutions</li>
                  <li><strong>Renewable Energy Systems:</strong> Solar, wind power to replace fossil fuels</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Air Pollution Causes and Effects</h4>
              <p>Understanding air pollution sources, impacts, and control measures.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/e6rglsLy1Ys"
                title="Air Pollution Overview"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Water Pollution →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.2</div>
              <div className="lesson-title-main">
                <h1>Water Pollution: Definition, Causes, Effects and Control</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Water Pollution: When H₂O Gets Hacked 💧</h3>
              <div className="theory-box">
                <p>Imagine if someone injected malicious code into your database - that's exactly what water pollution is! 🗄️ Clean water is like a perfectly functioning database, but when harmful substances get in, the whole system becomes corrupted and dangerous to use. As engineers, understanding water pollution is crucial because you'll be designing the "firewalls" and "cleanup utilities" to protect this vital resource!</p>
                
                <div className="performance-metrics">
                  <h4>Water Pollution Reality Check 📊</h4>
                  <ul>
                    <li><strong>Global Crisis:</strong> 2 billion people lack safely managed drinking water</li>
                    <li><strong>Disease Burden:</strong> 3.4 million deaths annually from water-related diseases</li>
                    <li><strong>Economic Impact:</strong> $260 billion lost annually due to water pollution</li>
                    <li><strong>Tech Market:</strong> Water treatment technology market worth $674 billion by 2030</li>
                  </ul>
                </div>
              </div>
              
              <h4>Understanding Water Pollution 🔍</h4>
              <p>Water pollution occurs when harmful substances—often chemicals or microorganisms—contaminate water bodies, making the water toxic to humans and the environment.</p>
              
              <h5>Causes of Water Pollution 🏭</h5>
              <div className="example-box">
                <p>Water pollution sources are like different attack vectors on a network - each one finds a way to compromise the system!</p>
                <ul>
                  <li><strong>Industrial waste discharge:</strong> Factories dumping chemicals (like SQL injection attacks)</li>
                  <li><strong>Domestic sewage:</strong> Untreated household wastewater (like unfiltered user input)</li>
                  <li><strong>Agricultural runoff:</strong> Fertilizers and pesticides washing into water (like malware spreading)</li>
                  <li><strong>Oil spills:</strong> Petroleum contamination (like system-wide corruption)</li>
                  <li><strong>Plastic waste dumping:</strong> Non-biodegradable pollution (like memory leaks)</li>
                  <li><strong>Natural causes:</strong> Algal blooms, erosion (like hardware degradation)</li>
                </ul>
              </div>

              <h5>Effects of Water Pollution 💀</h5>
              <div className="example-box">
                <p>Water pollution effects cascade through systems like a virus spreading through a network!</p>
                <ul>
                  <li><strong>Waterborne diseases:</strong> Cholera, typhoid, hepatitis (like malware infections)</li>
                  <li><strong>Aquatic ecosystem destruction:</strong> Fish kills, habitat loss (database corruption)</li>
                  <li><strong>Bioaccumulation:</strong> Toxins concentrating in food chains (like data corruption propagating)</li>
                  <li><strong>Eutrophication:</strong> Algae blooms depleting oxygen (like resource exhaustion attacks)</li>
                  <li><strong>Species extinction:</strong> Aquatic organisms dying (like system crashes)</li>
                  <li><strong>Drinking water contamination:</strong> Unsafe water supplies (compromised user access)</li>
                </ul>
              </div>

              <h4>Control Measures for Water Pollution 🛡️</h4>
              
              <h5>Waste Treatment Solutions - The Technical Fixes 🔧</h5>
              <div className="example-box">
                <p>These are like sophisticated antivirus and cleanup programs for water systems!</p>
                <ul>
                  <li><strong>Sewage Treatment Plants (STPs):</strong> Municipal wastewater "debugging centers"</li>
                  <li><strong>Effluent Treatment Plants (ETPs):</strong> Industrial waste "malware removal systems"</li>
                  <li><strong>Waste minimization:</strong> Reducing pollution at source (like secure coding practices)</li>
                  <li><strong>Zero liquid discharge:</strong> Complete water recycling (like closed-loop systems)</li>
                  <li><strong>Bioremediation:</strong> Using microorganisms to clean water (like biological antivirus)</li>
                  <li><strong>Constructed wetlands:</strong> Natural treatment systems (like organic security solutions)</li>
                </ul>
              </div>

              <h5>Regulatory and Management Measures 📋</h5>
              <div className="example-box">
                <p>Like system administration policies and security protocols for water protection!</p>
                <ul>
                  <li><strong>Water Pollution Control Act:</strong> Legal framework for water protection</li>
                  <li><strong>Water quality standards:</strong> Setting "performance benchmarks" for water bodies</li>
                  <li><strong>Regular monitoring:</strong> Continuous "system health checks"</li>
                  <li><strong>Public awareness:</strong> User education about water conservation</li>
                  <li><strong>Watershed management:</strong> Protecting entire water "networks"</li>
                  <li><strong>Storm water management:</strong> Controlling urban runoff pollution</li>
                </ul>
              </div>

              <h4>Engineering Solutions for Water Treatment 💡</h4>
              
              <div className="career-opportunities">
                <h5>Advanced Treatment Technologies 🔬</h5>
                <ul>
                  <li><strong>Membrane filtration:</strong> Reverse osmosis, ultrafiltration systems</li>
                  <li><strong>Advanced oxidation:</strong> Breaking down persistent pollutants</li>
                  <li><strong>Electrochemical treatment:</strong> Using electricity to remove contaminants</li>
                  <li><strong>Nanotechnology:</strong> Nano-materials for water purification</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
                <ul>
                  <li><strong>Water Treatment Engineers:</strong> Designing purification systems</li>
                  <li><strong>Environmental Monitoring:</strong> IoT systems for water quality tracking</li>
                  <li><strong>Wastewater Management:</strong> Smart systems for sewage treatment</li>
                  <li><strong>Water Resource Planning:</strong> AI for optimal water distribution</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Water Pollution and Control</h4>
              <p>Examining water pollution sources and treatment technologies.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/Om42Lppkd9w"
                title="Water Pollution Control"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Air Pollution</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Soil Pollution →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.3</div>
              <div className="lesson-title-main">
                <h1>Soil Pollution and Noise Pollution</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Soil Pollution: When the Foundation Gets Corrupted 🌱</h3>
              <div className="theory-box">
                <p>Think of soil as the motherboard of our ecosystem - everything depends on it! 🖥️ When soil gets polluted, it's like having a corrupted motherboard that affects every component connected to it. As engineers, you need to understand soil pollution because contaminated land affects everything from food production to groundwater quality. Plus, cleaning up contaminated sites is a huge engineering challenge!</p>
                
                <div className="performance-metrics">
                  <h4>Soil Pollution Facts 📊</h4>
                  <ul>
                    <li><strong>Global Impact:</strong> 33% of Earth's soil is degraded or polluted</li>
                    <li><strong>Food Security:</strong> Soil pollution affects 3.2 billion people globally</li>
                    <li><strong>Economic Cost:</strong> $10.6 trillion lost annually due to soil degradation</li>
                    <li><strong>Remediation Market:</strong> Soil remediation technology worth $26 billion by 2025</li>
                  </ul>
                </div>
              </div>
              
              <h4>Understanding Soil Pollution 🔍</h4>
              <p>Soil pollution is the contamination of soil by harmful chemicals and substances that affect soil fertility, groundwater quality, and plant and animal health.</p>
              
              <h5>Causes of Soil Pollution 🏭</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Industrial waste disposal:</strong> Chemicals dumped on land (like corrupted system files)</li>
                  <li><strong>Excessive fertilizers/pesticides:</strong> Chemical overload (like too many background processes)</li>
                  <li><strong>Household waste:</strong> Improper garbage disposal (like temp files accumulating)</li>
                  <li><strong>Underground tank leakage:</strong> Fuel contamination (like memory leaks)</li>
                  <li><strong>Atmospheric deposition:</strong> Pollutants settling from air (like malware downloads)</li>
                  <li><strong>Mining activities:</strong> Heavy metal contamination (like hardware damage)</li>
                </ul>
              </div>

              <h5>Effects of Soil Pollution 💀</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Reduced fertility:</strong> Poor crop yields (like system performance degradation)</li>
                  <li><strong>Groundwater contamination:</strong> Pollutants leaching into water (like data corruption spreading)</li>
                  <li><strong>Biodiversity loss:</strong> Soil organisms dying (like system crashes)</li>
                  <li><strong>Food chain contamination:</strong> Toxins in crops (like infected files)</li>
                  <li><strong>Health hazards:</strong> Cancer, neurological disorders (like system failures)</li>
                </ul>
              </div>

              <h4>Soil Remediation Techniques 🛠️</h4>
              
              <div className="example-box">
                <h5>Engineering Solutions</h5>
                <ul>
                  <li><strong>Soil washing:</strong> Physical cleaning (like disk cleanup utilities)</li>
                  <li><strong>Bioremediation:</strong> Using microorganisms (like biological antivirus)</li>
                  <li><strong>Phytoremediation:</strong> Plants absorbing pollutants (like natural system repair)</li>
                  <li><strong>Soil vapor extraction:</strong> Removing volatile compounds (like cache clearing)</li>
                  <li><strong>Chemical treatment:</strong> Neutralizing contaminants (like malware removal)</li>
                  <li><strong>Thermal treatment:</strong> High-temperature cleanup (like system reformatting)</li>
                </ul>
              </div>

              <h3>Noise Pollution: When the Environment Gets Too Loud 🔊</h3>
              
              <h4>Understanding Noise Pollution 🎵</h4>
              <p>Noise pollution is like having too many applications running with sound notifications - it overwhelms the system and affects performance!</p>
              
              <h5>Causes of Noise Pollution 📢</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Transportation:</strong> Traffic, aircraft, trains (like system fan noise)</li>
                  <li><strong>Industrial machinery:</strong> Factory equipment (like server room noise)</li>
                  <li><strong>Construction activities:</strong> Building work (like system updates)</li>
                  <li><strong>Domestic sources:</strong> Appliances, music (like notification sounds)</li>
                  <li><strong>Recreational activities:</strong> Concerts, parties (like gaming audio)</li>
                </ul>
              </div>

              <h5>Effects of Noise Pollution 😵</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Hearing loss:</strong> Permanent auditory damage (like speaker damage)</li>
                  <li><strong>Sleep disturbances:</strong> Insomnia, fatigue (like system not entering sleep mode)</li>
                  <li><strong>Stress and anxiety:</strong> Mental health issues (like system instability)</li>
                  <li><strong>Communication interference:</strong> Difficulty in conversation (like network interference)</li>
                  <li><strong>Wildlife disturbance:</strong> Animal behavior changes (like disrupted processes)</li>
                </ul>
              </div>

              <h4>Control Measures 🛡️</h4>
              
              <div className="example-box">
                <h5>Engineering Controls</h5>
                <ul>
                  <li><strong>Sound insulation:</strong> Noise barriers (like soundproofing)</li>
                  <li><strong>Quieter equipment:</strong> Low-noise machinery design</li>
                  <li><strong>Vibration dampening:</strong> Reducing mechanical noise</li>
                  <li><strong>Urban planning:</strong> Zoning for noise control</li>
                </ul>
              </div>

              <h4>Engineering Career Opportunities 🚀</h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications 💻</h5>
                <ul>
                  <li><strong>Soil Monitoring Systems:</strong> IoT sensors for contamination detection</li>
                  <li><strong>Remediation Equipment:</strong> Advanced cleanup technologies</li>
                  <li><strong>Noise Mapping:</strong> Apps for urban noise monitoring</li>
                  <li><strong>Acoustic Engineering:</strong> Designing quieter systems and spaces</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Soil and Noise Pollution</h4>
              <p>Understanding soil contamination and noise pollution impacts.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Soil and Noise Pollution"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Water Pollution</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Nuclear Hazards →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.4</div>
              <div className="lesson-title-main">
                <h1>Nuclear Hazards and Solid Waste Management</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Nuclear Hazards: When Atoms Go Rogue ☢️</h3>
              <div className="theory-box">
                <p>Nuclear hazards are like the ultimate system security threat - invisible, potentially catastrophic, and requiring extreme safety protocols! ⚡ Think of radioactive materials as highly volatile code that can corrupt everything it touches. As engineers, understanding nuclear safety is crucial because you might work with radiation in medical devices, power plants, or research facilities.</p>
                
                <div className="performance-metrics">
                  <h4>Nuclear Reality Check 📊</h4>
                  <ul>
                    <li><strong>Global Nuclear Power:</strong> 440 reactors in 30 countries generating 10% of electricity</li>
                    <li><strong>Medical Applications:</strong> 40 million nuclear medicine procedures annually</li>
                    <li><strong>Waste Challenge:</strong> 370,000 tons of nuclear waste worldwide</li>
                    <li><strong>Safety Record:</strong> Only 3 major accidents in 60+ years of nuclear power</li>
                  </ul>
                </div>
              </div>
              
              <h4>Understanding Nuclear Hazards 🔍</h4>
              <p>Nuclear hazards refer to the potential dangers associated with radioactive materials and nuclear energy, including radiation exposure, contamination, and accidents at nuclear facilities.</p>
              
              <h5>Causes of Nuclear Hazards ⚠️</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Power plant accidents:</strong> Reactor malfunctions (like critical system failures)</li>
                  <li><strong>Nuclear weapons testing:</strong> Atmospheric contamination (like malware spreading)</li>
                  <li><strong>Improper material handling:</strong> Safety protocol violations (like security breaches)</li>
                  <li><strong>Waste disposal issues:</strong> Long-term storage problems (like data retention challenges)</li>
                  <li><strong>Transportation accidents:</strong> Radioactive material spills (like data transmission errors)</li>
                  <li><strong>Medical/industrial sources:</strong> Equipment malfunction or misuse</li>
                </ul>
              </div>

              <h5>Effects of Nuclear Hazards 💀</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Radiation sickness:</strong> Acute exposure effects (like system crashes)</li>
                  <li><strong>Cancer development:</strong> Long-term health impacts (like corrupted files)</li>
                  <li><strong>Genetic mutations:</strong> DNA damage (like code corruption)</li>
                  <li><strong>Environmental contamination:</strong> Long-lasting pollution (like persistent malware)</li>
                  <li><strong>Food chain contamination:</strong> Radioactive bioaccumulation</li>
                  <li><strong>Psychological trauma:</strong> Fear and anxiety in affected populations</li>
                </ul>
              </div>

              <h4>Nuclear Safety and Control Measures 🛡️</h4>
              
              <div className="example-box">
                <h5>Safety and Prevention</h5>
                <ul>
                  <li><strong>Stringent safety protocols:</strong> Multiple redundant safety systems</li>
                  <li><strong>Regular inspections:</strong> Continuous monitoring and maintenance</li>
                  <li><strong>Emergency preparedness:</strong> Disaster response plans</li>
                  <li><strong>Personnel training:</strong> Specialized safety education</li>
                  <li><strong>Containment systems:</strong> Multiple barriers to prevent release</li>
                  <li><strong>International standards:</strong> Global safety compliance</li>
                </ul>
              </div>

              <h3>Solid Waste Management: Dealing with Digital and Physical Trash 🗑️</h3>
              
              <h4>Understanding Solid Waste Management 📦</h4>
              <p>Solid waste management is like managing your computer's storage - you need to organize, clean up, and dispose of unnecessary files efficiently!</p>
              
              <h5>Types of Solid Waste 🏠🏭</h5>
              <div className="example-box">
                <h6>Urban Solid Waste</h6>
                <ul>
                  <li><strong>Household waste:</strong> Food scraps, paper, plastic (like user-generated files)</li>
                  <li><strong>Commercial waste:</strong> Office and shop waste (like business data)</li>
                  <li><strong>Construction debris:</strong> Building materials (like installation files)</li>
                  <li><strong>E-waste:</strong> Electronic devices (like obsolete hardware)</li>
                  <li><strong>Biomedical waste:</strong> Healthcare facility waste (like sensitive data)</li>
                </ul>

                <h6>Industrial Solid Waste</h6>
                <ul>
                  <li><strong>Manufacturing byproducts:</strong> Production waste (like compilation artifacts)</li>
                  <li><strong>Chemical waste:</strong> Hazardous materials (like corrupted system files)</li>
                  <li><strong>Process sludge:</strong> Treatment residues (like cache files)</li>
                  <li><strong>Packaging waste:</strong> Containers and wrapping (like temporary files)</li>
                </ul>
              </div>

              <h4>Effects of Poor Waste Management 💀</h4>
              
              <div className="example-box">
                <h5>Environmental and Health Effects</h5>
                <ul>
                  <li><strong>Soil contamination:</strong> Landfill leachate (like file system corruption)</li>
                  <li><strong>Water pollution:</strong> Groundwater contamination (like database corruption)</li>
                  <li><strong>Air pollution:</strong> Methane emissions from dumps (like memory leaks)</li>
                  <li><strong>Disease spread:</strong> Vector breeding in waste (like virus propagation)</li>
                  <li><strong>Aesthetic degradation:</strong> Ugly, smelly environments (like cluttered interfaces)</li>
                </ul>
              </div>

              <h4>Waste Management Solutions 🔄</h4>
              
              <div className="example-box">
                <h5>The Waste Management Hierarchy</h5>
                <ul>
                  <li><strong>Reduce:</strong> Minimize waste generation (like efficient coding)</li>
                  <li><strong>Reuse:</strong> Extend product lifecycle (like code reusability)</li>
                  <li><strong>Recycle:</strong> Convert waste to new products (like refactoring)</li>
                  <li><strong>Recover:</strong> Extract energy from waste (like optimizing performance)</li>
                  <li><strong>Dispose:</strong> Safe final disposal (like secure data deletion)</li>
                </ul>
              </div>

              <h4>Engineering Career Opportunities 🚀</h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications 💻</h5>
                <ul>
                  <li><strong>Nuclear Safety Systems:</strong> Advanced monitoring and control systems</li>
                  <li><strong>Waste Tracking Apps:</strong> IoT systems for waste collection optimization</li>
                  <li><strong>Recycling Technology:</strong> Automated sorting and processing systems</li>
                  <li><strong>Radiation Monitoring:</strong> Real-time detection and alert systems</li>
                </ul>

                <h5>Career Paths 🎯</h5>
                <ul>
                  <li><strong>Nuclear Engineers:</strong> Designing safer nuclear systems</li>
                  <li><strong>Waste Management Engineers:</strong> Optimizing collection and disposal</li>
                  <li><strong>Environmental Remediation:</strong> Cleaning up contaminated sites</li>
                  <li><strong>Safety System Designers:</strong> Creating fail-safe mechanisms</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Nuclear Safety and Waste Management</h4>
              <p>Understanding nuclear hazards and solid waste management strategies.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Nuclear and Waste Management"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Soil & Noise Pollution</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Disaster Management →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.5</div>
              <div className="lesson-title-main">
                <h1>Unit 4 Quiz</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Disaster Management: System Recovery and Business Continuity 🚨</h3>
              <div className="theory-box">
                <p>Disaster management is like IT disaster recovery planning on a massive scale! 💻 Just like how you need backup systems, recovery protocols, and emergency procedures for your servers, we need similar strategies for natural disasters. As engineers, you'll be designing early warning systems, resilient infrastructure, and emergency response technologies!</p>
                
                <div className="performance-metrics">
                  <h4>Disaster Impact Statistics 📊</h4>
                  <ul>
                    <li><strong>Global Impact:</strong> 350-500 natural disasters annually affecting 200+ million people</li>
                    <li><strong>Economic Loss:</strong> $280-300 billion annually in disaster damages</li>
                    <li><strong>Technology Market:</strong> Disaster management systems worth $432 billion by 2030</li>
                    <li><strong>Early Warning Success:</strong> Can reduce disaster losses by 30-50%</li>
                  </ul>
                </div>
              </div>
              
              <h4>Understanding Natural Disasters 🌪️</h4>
              <p>Disaster management involves systematic organization of resources and responsibilities for dealing with all aspects of emergencies, particularly preparedness, response, and recovery.</p>
              
              <h5>Flood Management - Overflow Protection 🌊</h5>
              <div className="example-box">
                <p>Floods are like buffer overflow attacks - too much input overwhelms the system's capacity!</p>
                <ul>
                  <li><strong>Early warning systems:</strong> Real-time monitoring (like system alerts)</li>
                  <li><strong>Flood control structures:</strong> Dams, embankments (like firewalls)</li>
                  <li><strong>Drainage improvement:</strong> Better water flow management (like optimizing data flow)</li>
                  <li><strong>Floodplain zoning:</strong> Smart land use planning (like network segmentation)</li>
                  <li><strong>Evacuation planning:</strong> Emergency response protocols (like disaster recovery procedures)</li>
                  <li><strong>Post-flood rehabilitation:</strong> System restoration and recovery</li>
                </ul>
              </div>

              <h5>Earthquake Preparedness - System Stability 🏗️</h5>
              <div className="example-box">
                <p>Earthquakes are like sudden hardware failures - you need robust systems that can handle the shock!</p>
                <ul>
                  <li><strong>Building codes:</strong> Seismic-resistant construction (like fault-tolerant design)</li>
                  <li><strong>Retrofitting:</strong> Upgrading existing structures (like system updates)</li>
                  <li><strong>Emergency drills:</strong> Regular practice and training (like backup testing)</li>
                  <li><strong>Search and rescue:</strong> Rapid response capabilities (like system recovery teams)</li>
                  <li><strong>Medical preparedness:</strong> Emergency healthcare systems (like system health monitoring)</li>
                  <li><strong>Public education:</strong> Community awareness programs (like user training)</li>
                </ul>
              </div>

              <h5>Cyclone Management - Storm Protection 🌀</h5>
              <div className="example-box">
                <p>Cyclones are like coordinated cyber attacks - powerful, predictable patterns that require comprehensive defense!</p>
                <ul>
                  <li><strong>Early warning systems:</strong> Weather prediction and alerts (like threat detection)</li>
                  <li><strong>Evacuation systems:</strong> Moving people to safety (like data migration)</li>
                  <li><strong>Cyclone shelters:</strong> Safe buildings and structures (like secure data centers)</li>
                  <li><strong>Coastal protection:</strong> Mangroves and barriers (like perimeter security)</li>
                  <li><strong>Emergency supplies:</strong> Relief distribution systems (like backup resources)</li>
                  <li><strong>Weather monitoring:</strong> Continuous surveillance (like network monitoring)</li>
                </ul>
              </div>

              <h5>Landslide Prevention - Slope Stability 🏔️</h5>
              <div className="example-box">
                <p>Landslides are like cascading system failures - one component fails and brings down everything connected!</p>
                <ul>
                  <li><strong>Slope stabilization:</strong> Engineering solutions (like system hardening)</li>
                  <li><strong>Drainage control:</strong> Water management (like preventing resource leaks)</li>
                  <li><strong>Vegetation cover:</strong> Natural reinforcement (like organic security measures)</li>
                  <li><strong>Early warning systems:</strong> Monitoring unstable slopes (like performance monitoring)</li>
                  <li><strong>Construction restrictions:</strong> Avoiding vulnerable areas (like security zones)</li>
                  <li><strong>Geotechnical studies:</strong> Understanding ground conditions (like system analysis)</li>
                </ul>
              </div>

              <h4>Integrated Disaster Management 🎯</h4>
              
              <div className="example-box">
                <h5>Modern Disaster Management Approaches</h5>
                <ul>
                  <li><strong>Disaster Risk Reduction (DRR):</strong> Proactive risk management strategies</li>
                  <li><strong>Community-based management:</strong> Local participation in disaster preparedness</li>
                  <li><strong>Multi-hazard approach:</strong> Comprehensive planning for multiple disaster types</li>
                  <li><strong>Agency coordination:</strong> Integrated response from multiple organizations</li>
                  <li><strong>Technology integration:</strong> GIS, remote sensing, AI for disaster management</li>
                  <li><strong>International cooperation:</strong> Global sharing of resources and expertise</li>
                </ul>
              </div>

              <h4>Engineering Applications in Disaster Management 🔧</h4>
              
              <div className="career-opportunities">
                <h5>Technology Solutions 💻</h5>
                <ul>
                  <li><strong>Early Warning Systems:</strong> IoT sensors and AI for disaster prediction</li>
                  <li><strong>Emergency Communication:</strong> Resilient communication networks</li>
                  <li><strong>Disaster Simulation:</strong> VR/AR training for emergency responders</li>
                  <li><strong>Resource Management:</strong> Apps for coordinating relief efforts</li>
                  <li><strong>Damage Assessment:</strong> Drones and satellite imagery for rapid evaluation</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
                <ul>
                  <li><strong>Disaster Management Engineers:</strong> Designing resilient infrastructure</li>
                  <li><strong>Emergency Systems Developers:</strong> Creating disaster response technologies</li>
                  <li><strong>Risk Assessment Specialists:</strong> Using data science for disaster prediction</li>
                  <li><strong>Resilient Infrastructure Designers:</strong> Building disaster-resistant systems</li>
                  <li><strong>Emergency Communication Engineers:</strong> Ensuring connectivity during disasters</li>
                </ul>
              </div>

              <h4>The Bottom Line 💡</h4>
              <p>Disaster management is increasingly becoming a technology-driven field. From AI-powered early warning systems to IoT-based monitoring networks, engineers are at the forefront of making communities more resilient to natural disasters. Understanding disaster management gives you insight into one of the most critical applications of engineering - literally saving lives and protecting communities!</p>
            </section>

            <div className="video-embed">
              <h4>Disaster Management</h4>
              <p>Understanding disaster preparedness, response, and recovery strategies.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/BLF3yhcKKEc"
                title="Disaster Management"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Nuclear Hazards</button>
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