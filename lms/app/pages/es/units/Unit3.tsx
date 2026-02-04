'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.1</div>
              <div className="lesson-title-main">
                <h1>Definition: Genetic, Species and Ecosystem Diversity</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Biodiversity: Nature's Ultimate Database 🧬</h3>
              <div className="theory-box">
                <p>Hey future engineers! 👋 Think of biodiversity as nature's massive distributed database system - it's got three levels of organization, each more complex than the last. Just like how your code has different layers (functions, classes, modules), biodiversity has genetic, species, and ecosystem levels. And trust me, this "database" is way more sophisticated than anything we've built! 😄</p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity Stats That'll Blow Your Mind 📊</h4>
                  <ul>
                    <li><strong>Total Species:</strong> 8-10 million estimated (we've only cataloged 1.2 million!)</li>
                    <li><strong>Genetic Diversity:</strong> Humans share 99.9% DNA but that 0.1% creates all our differences</li>
                    <li><strong>Ecosystem Variety:</strong> From deep ocean trenches to mountain peaks</li>
                    <li><strong>Engineering Inspiration:</strong> Biomimicry has given us Velcro, airplane wings, and more!</li>
                  </ul>
                </div>
              </div>
              
              <h4>The Three Levels of Biodiversity 🏗️</h4>
              <p>Biodiversity refers to the variety of life on Earth and the natural patterns it forms. It encompasses three main levels of biological organization that are interconnected and essential for ecosystem functioning.</p>
              
              <h5>Genetic Diversity - The Source Code Level 💻</h5>
              <div className="example-box">
                <p>Think of genetic diversity as different versions of the same software - same basic function, but with unique features and capabilities!</p>
                <ul>
                  <li><strong>Variation in genes:</strong> Like different algorithms solving the same problem</li>
                  <li><strong>DNA sequence differences:</strong> The actual "code" variations between individuals</li>
                  <li><strong>Allelic variations:</strong> Different versions of the same gene (like software patches)</li>
                  <li><strong>Evolutionary foundation:</strong> Raw material for natural selection and adaptation</li>
                  <li><strong>Medical applications:</strong> Source of traits for breeding and pharmaceutical research</li>
                  <li><strong>Resilience buffer:</strong> Protection against diseases and environmental changes</li>
                </ul>
              </div>

              <h5>Species Diversity - The Application Level 🐾</h5>
              <div className="example-box">
                <p>Species diversity is like having different apps on your phone - each one specialized for specific tasks, but they all work together in the ecosystem!</p>
                <ul>
                  <li><strong>Species richness:</strong> Total number of different species (like counting apps)</li>
                  <li><strong>Species evenness:</strong> How evenly distributed the populations are</li>
                  <li><strong>Functional roles:</strong> Each species has specific "jobs" in the ecosystem</li>
                  <li><strong>Species interactions:</strong> How different species "communicate" and depend on each other</li>
                  <li><strong>Endemic species:</strong> Unique species found only in specific locations</li>
                  <li><strong>Rare species:</strong> The "limited edition" organisms with small populations</li>
                </ul>
              </div>

              <h5>Ecosystem Diversity - The System Architecture Level 🌍</h5>
              <div className="example-box">
                <p>Ecosystem diversity is like having different operating systems - each optimized for different environments and conditions!</p>
                <ul>
                  <li><strong>Habitat variety:</strong> Different "platforms" where life operates</li>
                  <li><strong>Ecological communities:</strong> Groups of species that work together</li>
                  <li><strong>System types:</strong> Marine, freshwater, terrestrial - like different network architectures</li>
                  <li><strong>Complex interactions:</strong> Food webs, nutrient cycles, energy flows</li>
                  <li><strong>Process diversity:</strong> Different ways ecosystems function and maintain themselves</li>
                  <li><strong>Environmental adaptation:</strong> How systems optimize for local conditions</li>
                </ul>
              </div>

              <h4>Why This Matters for Engineers 🔧</h4>
              
              <div className="career-opportunities">
                <h5>Biomimicry Applications 🦎</h5>
                <ul>
                  <li><strong>Structural Engineering:</strong> Honeycomb structures, bird wing aerodynamics</li>
                  <li><strong>Materials Science:</strong> Spider silk strength, gecko adhesion</li>
                  <li><strong>Robotics:</strong> Animal locomotion, swarm intelligence</li>
                  <li><strong>Algorithms:</strong> Ant colony optimization, genetic algorithms</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
                <ul>
                  <li><strong>Bioinformatics Engineers:</strong> Analyzing genetic databases and DNA sequences</li>
                  <li><strong>Environmental Sensors:</strong> IoT devices for biodiversity monitoring</li>
                  <li><strong>Conservation Technology:</strong> Apps and systems for species tracking</li>
                  <li><strong>Biotech Applications:</strong> Using biological processes in engineering</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Biodiversity and Conservation</h4>
              <p>Understanding the importance of biodiversity and conservation strategies.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/GK_vRtHJZu4"
                title="Biodiversity and Conservation"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Biodiversity Values →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.2</div>
              <div className="lesson-title-main">
                <h1>Value of Biodiversity</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Value of Biodiversity: Nature's Economic Engine 💰</h3>
              <div className="theory-box">
                <p>Alright engineers, let's talk business! 💼 Biodiversity isn't just pretty to look at - it's a massive economic powerhouse that drives industries worth trillions of dollars. From the medicines in your cabinet to the algorithms in your code, nature has been humanity's original R&D department. Understanding these values helps you see opportunities where biology meets technology!</p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity's Economic Impact 📈</h4>
                  <ul>
                    <li><strong>Pharmaceutical Industry:</strong> 25% of drugs come from plants - $40 billion market</li>
                    <li><strong>Agriculture:</strong> Genetic diversity in crops worth $115 billion annually</li>
                    <li><strong>Ecosystem Services:</strong> Valued at $125 trillion globally per year</li>
                    <li><strong>Biomimicry Market:</strong> Expected to reach $18 billion by 2030</li>
                  </ul>
                </div>
              </div>
              
              <h4>Economic and Non-Economic Values of Biodiversity 💎</h4>
              <p>Biodiversity provides numerous values that can be categorized into different types based on how humans interact with and benefit from biological diversity.</p>
              
              <h5>Consumptive Use Values - Direct Benefits 🍎</h5>
              <div className="example-box">
                <p>These are like open-source resources - directly used without going through markets!</p>
                <ul>
                  <li><strong>Wild foods:</strong> Fish, game, fruits, nuts (your sushi and trail mix!)</li>
                  <li><strong>Medicinal plants:</strong> Traditional remedies and pharmaceutical compounds</li>
                  <li><strong>Firewood and charcoal:</strong> Energy for cooking and heating</li>
                  <li><strong>Traditional materials:</strong> Natural fibers for clothing and shelter</li>
                  <li><strong>Fresh water:</strong> From natural sources and watersheds</li>
                </ul>
              </div>

              <h5>Productive Use Values - Commercial Applications 🏭</h5>
              <div className="example-box">
                <p>These are like commercial software - biological resources that generate revenue through markets!</p>
                <ul>
                  <li><strong>Timber and fisheries:</strong> Major global industries worth billions</li>
                  <li><strong>Agricultural products:</strong> Food crops and livestock</li>
                  <li><strong>Pharmaceutical compounds:</strong> Drug discovery from natural sources</li>
                  <li><strong>Industrial raw materials:</strong> Rubber, oils, fibers for manufacturing</li>
                  <li><strong>Genetic resources:</strong> Seeds and breeding stock for agriculture</li>
                  <li><strong>Biotechnology applications:</strong> Enzymes, microorganisms for industry</li>
                </ul>
              </div>

              <h5>Social Values - Cultural Operating System 👥</h5>
              <div className="example-box">
                <p>Like the cultural protocols that make human societies function!</p>
                <ul>
                  <li><strong>Cultural significance:</strong> Sacred species and traditional practices</li>
                  <li><strong>Traditional knowledge:</strong> Indigenous wisdom about nature's applications</li>
                  <li><strong>Recreation:</strong> Hiking, birdwatching, nature photography</li>
                  <li><strong>Education and research:</strong> Living laboratories for learning</li>
                  <li><strong>Community identity:</strong> Local species as symbols and heritage</li>
                  <li><strong>Traditional medicine:</strong> Time-tested healing systems</li>
                </ul>
              </div>

              <h4>Additional Biodiversity Values 🌟</h4>
              
              <h5>Ethical Values - The Moral Code 🤝</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Intrinsic rights:</strong> Species have a right to exist (like basic human rights)</li>
                  <li><strong>Moral obligations:</strong> Our responsibility to protect nature</li>
                  <li><strong>Stewardship duties:</strong> Taking care of what we've inherited</li>
                  <li><strong>Intergenerational equity:</strong> Preserving options for future generations</li>
                  <li><strong>Inherent worth:</strong> Value beyond human utility</li>
                </ul>
              </div>

              <h5>Aesthetic Values - Nature's User Interface 🎨</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Natural beauty:</strong> Landscapes that inspire and refresh</li>
                  <li><strong>Species appreciation:</strong> The wonder of seeing wildlife</li>
                  <li><strong>Artistic inspiration:</strong> Nature as muse for creativity</li>
                  <li><strong>Recreation settings:</strong> Beautiful places for relaxation</li>
                  <li><strong>Tourism attractions:</strong> Economic value of natural beauty</li>
                  <li><strong>Photography subjects:</strong> Instagram-worthy natural scenes! 📸</li>
                </ul>
              </div>

              <h5>Option Values - Future Potential 🔮</h5>
              <div className="example-box">
                <p>Like keeping your options open in software development - you never know what you might need!</p>
                <ul>
                  <li><strong>Unknown pharmaceuticals:</strong> Undiscovered medicines in nature</li>
                  <li><strong>Future biotechnology:</strong> New applications we haven't thought of yet</li>
                  <li><strong>Insurance value:</strong> Backup options for future challenges</li>
                  <li><strong>Preservation for posterity:</strong> Keeping doors open for future generations</li>
                  <li><strong>Unforeseen discoveries:</strong> The next big breakthrough might be biological</li>
                </ul>
              </div>

              <h4>Engineering Applications of Biodiversity Values 🔧</h4>
              
              <div className="career-opportunities">
                <h5>Tech Opportunities 💻</h5>
                <ul>
                  <li><strong>Bioprospecting Apps:</strong> AI to identify valuable compounds in nature</li>
                  <li><strong>Ecosystem Valuation:</strong> Software to calculate ecosystem service values</li>
                  <li><strong>Conservation Economics:</strong> Tools for cost-benefit analysis of protection</li>
                  <li><strong>Sustainable Supply Chains:</strong> Tracking biodiversity impact in products</li>
                </ul>

                <h5>Career Paths 🚀</h5>
                <ul>
                  <li><strong>Environmental Economists:</strong> Quantifying nature's economic value</li>
                  <li><strong>Biotech Entrepreneurs:</strong> Commercializing biological innovations</li>
                  <li><strong>Sustainability Engineers:</strong> Designing systems that preserve biodiversity value</li>
                  <li><strong>Conservation Technologists:</strong> Using tech to protect valuable ecosystems</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>India's Biodiversity Hotspots</h4>
              <p>Exploring India's exceptional biodiversity and conservation challenges.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="India's Biodiversity Hotspots"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Biodiversity Definition</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Biodiversity Hotspots →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.3</div>
              <div className="lesson-title-main">
                <h1>Biodiversity at Global, National and Local Levels</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Biodiversity Distribution: From Global to Local Scale 🌍</h3>
              <div className="theory-box">
                <p>Think of biodiversity distribution like network architecture - you've got global infrastructure, national networks, and local nodes, each with different characteristics and challenges! 🌐 Just like how internet traffic isn't evenly distributed (some servers get way more hits), biodiversity isn't spread evenly across the planet. Some places are like biological data centers - packed with incredible diversity!</p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity Distribution Facts 📊</h4>
                  <ul>
                    <li><strong>Tropical Bias:</strong> 50% of species in just 7% of Earth's land area</li>
                    <li><strong>Ocean Mystery:</strong> 80% of ocean species still undiscovered</li>
                    <li><strong>India's Density:</strong> 8% of global species in 2.4% of land area</li>
                    <li><strong>Hotspot Concentration:</strong> 36 hotspots contain 60% of plant species</li>
                  </ul>
                </div>
              </div>
              
              <h4>Biodiversity Distribution Across Scales 🔍</h4>
              <p>Biodiversity varies significantly across different spatial scales, with patterns of richness and endemism changing from global to national to local levels.</p>
              
              <h5>Global Biodiversity Patterns 🌎</h5>
              <div className="example-box">
                <p>The global scale is like looking at the entire internet - massive, complex, and with clear patterns!</p>
                <ul>
                  <li><strong>Species estimates:</strong> 8-10 million species worldwide (we've only cataloged 1.2 million!)</li>
                  <li><strong>Tropical dominance:</strong> Equatorial regions harbor the highest diversity</li>
                  <li><strong>Ocean exploration:</strong> Marine biodiversity largely unexplored (like the deep web!)</li>
                  <li><strong>Latitudinal gradient:</strong> Diversity decreases from equator to poles</li>
                  <li><strong>Biodiversity hotspots:</strong> 36 regions with exceptional species concentration</li>
                  <li><strong>Hidden diversity:</strong> Deep sea and soil ecosystems incredibly diverse</li>
                </ul>
              </div>

              <h5>National Biodiversity Patterns 🏛️</h5>
              <div className="example-box">
                <p>National level is like looking at country-specific internet domains - each has unique characteristics!</p>
                <ul>
                  <li><strong>Species inventories:</strong> Country-specific catalogs of biodiversity</li>
                  <li><strong>Endemic species:</strong> Unique species found only in specific countries</li>
                  <li><strong>Protected networks:</strong> National parks and conservation areas</li>
                  <li><strong>Threat assessments:</strong> Red lists of endangered species by country</li>
                  <li><strong>Conservation priorities:</strong> National strategies for biodiversity protection</li>
                  <li><strong>Biogeographic regions:</strong> Natural divisions within countries</li>
                </ul>
              </div>

              <h5>Local Biodiversity Patterns 🏘️</h5>
              <div className="example-box">
                <p>Local scale is like your neighborhood network - specific, manageable, but still complex!</p>
                <ul>
                  <li><strong>Habitat composition:</strong> Species mix in specific locations</li>
                  <li><strong>Community interactions:</strong> How local species interact and depend on each other</li>
                  <li><strong>Microhabitat diversity:</strong> Small-scale environmental variations</li>
                  <li><strong>Edge effects:</strong> How habitat boundaries affect species</li>
                  <li><strong>Urban vs. rural:</strong> Different biodiversity patterns in developed areas</li>
                  <li><strong>Management needs:</strong> Local conservation and restoration requirements</li>
                </ul>
              </div>

              <h4>India as a Mega-Diversity Nation 🇮🇳</h4>
              
              <h5>India's Exceptional Biodiversity 🏆</h5>
              <div className="example-box">
                <p>India is like a biological supercomputer - incredible processing power packed into a relatively small space!</p>
                <ul>
                  <li><strong>Mega-diverse status:</strong> One of only 17 mega-diverse countries globally</li>
                  <li><strong>Species density:</strong> 8% of world's species in 2.4% of land area</li>
                  <li><strong>Animal diversity:</strong> Over 91,000 animal species recorded</li>
                  <li><strong>Plant richness:</strong> Approximately 47,000 plant species</li>
                  <li><strong>Marine life:</strong> 12% of global fish species</li>
                  <li><strong>Vertebrate diversity:</strong> Significant percentages of global reptiles, birds, mammals</li>
                </ul>
              </div>

              <h5>India's Biogeographic Zones 🗺️</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Trans-Himalayan:</strong> Cold desert conditions (like high-altitude servers!)</li>
                  <li><strong>Himalayan:</strong> Mountain ecosystems with altitudinal gradients</li>
                  <li><strong>Indian Desert:</strong> Arid environments adapted to water scarcity</li>
                  <li><strong>Semi-Arid:</strong> Transitional drylands between desert and forest</li>
                  <li><strong>Western Ghats:</strong> Tropical biodiversity hotspot (India's Silicon Valley of biology!)</li>
                  <li><strong>Deccan Peninsula:</strong> Tropical dry forests and grasslands</li>
                </ul>
              </div>

              <h5>Endemic Richness in India 🌺</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Plant endemism:</strong> 33% of Indian flora found nowhere else</li>
                  <li><strong>Western Ghats:</strong> Exceptionally high levels of endemism</li>
                  <li><strong>Northeast India:</strong> Unique species in biodiversity hotspot</li>
                  <li><strong>Island endemics:</strong> Andaman and Nicobar Islands' unique species</li>
                  <li><strong>Threatened endemics:</strong> Many unique species under pressure</li>
                  <li><strong>Traditional knowledge:</strong> Indigenous communities' understanding of local species</li>
                </ul>
              </div>

              <h4>Engineering Applications 🔧</h4>
              
              <div className="career-opportunities">
                <h5>Technology Solutions 💻</h5>
                <ul>
                  <li><strong>Biodiversity Mapping:</strong> GIS and remote sensing for species distribution</li>
                  <li><strong>Citizen Science Apps:</strong> Crowdsourcing biodiversity data collection</li>
                  <li><strong>AI Species Identification:</strong> Machine learning for automated species recognition</li>
                  <li><strong>Conservation Prioritization:</strong> Algorithms to optimize protection efforts</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
                <ul>
                  <li><strong>Biodiversity Informatics:</strong> Managing and analyzing biological data</li>
                  <li><strong>Conservation Technology:</strong> Developing tools for biodiversity monitoring</li>
                  <li><strong>Environmental Consulting:</strong> Assessing biodiversity impacts of development</li>
                  <li><strong>Ecotourism Technology:</strong> Apps and systems for nature-based tourism</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>In-situ vs Ex-situ Conservation</h4>
              <p>Comparing different approaches to biodiversity conservation.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Conservation Methods"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Biodiversity Values</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Threats to Biodiversity →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.4</div>
              <div className="lesson-title-main">
                <h1>Threats to Biodiversity</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Threats to Biodiversity: System Vulnerabilities 🚨</h3>
              <div className="theory-box">
                <p>Alright engineers, time for some cybersecurity thinking! 🔒 Just like how computer systems face various threats (malware, DDoS attacks, data breaches), biodiversity faces multiple threats that can crash entire ecosystems. Understanding these threats is like doing a security audit on nature - we need to identify vulnerabilities and patch them before the whole system goes down!</p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity Threat Statistics 📊</h4>
                  <ul>
                    <li><strong>Extinction Rate:</strong> 1,000-10,000x faster than natural background rate</li>
                    <li><strong>Habitat Loss:</strong> Primary threat to 85% of endangered species</li>
                    <li><strong>Wildlife Trade:</strong> $20 billion illegal market annually</li>
                    <li><strong>Climate Impact:</strong> Could affect 1 million species by 2050</li>
                  </ul>
                </div>
              </div>
              
              <h4>Major Threats to Biodiversity 💀</h4>
              <p>Biodiversity faces unprecedented threats from human activities, with habitat destruction, direct exploitation, and human-wildlife conflicts being among the most pressing challenges.</p>
              
              <h5>Habitat Loss - The Ultimate System Crash 🏗️</h5>
              <div className="example-box">
                <p>Habitat loss is like deleting the operating system - everything else stops working!</p>
                <ul>
                  <li><strong>Deforestation:</strong> Clearing forests for agriculture and development</li>
                  <li><strong>Urbanization:</strong> Cities expanding into natural areas</li>
                  <li><strong>Infrastructure:</strong> Roads, dams, and buildings fragmenting habitats</li>
                  <li><strong>Agricultural conversion:</strong> Natural grasslands turned into croplands</li>
                  <li><strong>Wetland drainage:</strong> Filling and draining wetlands for development</li>
                  <li><strong>Fragmentation:</strong> Breaking continuous habitats into isolated patches</li>
                </ul>
              </div>

              <h5>Poaching of Wildlife - Unauthorized Access 🎯</h5>
              <div className="example-box">
                <p>Poaching is like hacking into protected systems - illegal access with devastating consequences!</p>
                <ul>
                  <li><strong>Illegal hunting:</strong> Killing animals for bushmeat and trophies</li>
                  <li><strong>Species trafficking:</strong> Smuggling endangered species across borders</li>
                  <li><strong>Traditional medicine:</strong> Harvesting animals for unproven remedies</li>
                  <li><strong>Exotic pet trade:</strong> Capturing wild animals for private collections</li>
                  <li><strong>Wildlife products:</strong> Ivory, rhino horn, tiger parts for black markets</li>
                  <li><strong>Criminal networks:</strong> Organized crime involved in wildlife trafficking</li>
                </ul>
              </div>

              <h5>Man-Wildlife Conflicts - System Incompatibility 🤝💥</h5>
              <div className="example-box">
                <p>Like software conflicts where two programs can't run together - humans and wildlife competing for the same resources!</p>
                <ul>
                  <li><strong>Resource competition:</strong> Both humans and animals need space and food</li>
                  <li><strong>Human-elephant conflicts:</strong> Elephants raiding crops, humans retaliating</li>
                  <li><strong>Predator attacks:</strong> Big cats and wolves attacking livestock</li>
                  <li><strong>Crop raiding:</strong> Wild animals eating farmers' crops</li>
                  <li><strong>Human casualties:</strong> People injured or killed by wildlife</li>
                  <li><strong>Retaliatory killings:</strong> Farmers killing animals that damage crops</li>
                </ul>
              </div>

              <h4>Additional Threats to Biodiversity ⚠️</h4>
              
              <h5>Climate Change Impacts - System Overheating 🌡️</h5>
              <div className="example-box">
                <p>Climate change is like your computer overheating - everything starts malfunctioning!</p>
                <ul>
                  <li><strong>Distribution shifts:</strong> Species forced to move to new areas</li>
                  <li><strong>Phenology changes:</strong> Timing of life events (like migration) disrupted</li>
                  <li><strong>Ocean acidification:</strong> Seawater becoming more acidic, affecting marine life</li>
                  <li><strong>Extreme weather:</strong> More frequent storms, droughts, and floods</li>
                  <li><strong>Ecosystem disruption:</strong> Food webs and relationships breaking down</li>
                  <li><strong>Sea level rise:</strong> Coastal habitats disappearing underwater</li>
                </ul>
              </div>

              <h5>Pollution Effects - System Contamination 🏭</h5>
              <div className="example-box">
                <p>Pollution is like malware - it spreads through systems and corrupts everything!</p>
                <ul>
                  <li><strong>Chemical contamination:</strong> Pesticides and industrial chemicals in ecosystems</li>
                  <li><strong>Plastic pollution:</strong> Microplastics in food chains, especially marine</li>
                  <li><strong>Heavy metals:</strong> Toxic metals accumulating in organisms</li>
                  <li><strong>Eutrophication:</strong> Excess nutrients causing algae blooms and dead zones</li>
                  <li><strong>Light and noise pollution:</strong> Disrupting animal behavior and navigation</li>
                  <li><strong>Radioactive contamination:</strong> Nuclear accidents affecting wildlife</li>
                </ul>
              </div>

              <h5>Invasive Species - Malicious Code Injection 👾</h5>
              <div className="example-box">
                <p>Invasive species are like computer viruses - they get into systems where they don't belong and cause chaos!</p>
                <ul>
                  <li><strong>Competitive displacement:</strong> Outcompeting native species for resources</li>
                  <li><strong>Predation pressure:</strong> Eating native species that have no defenses</li>
                  <li><strong>Disease transmission:</strong> Bringing new pathogens to naive populations</li>
                  <li><strong>Hybridization:</strong> Breeding with natives and diluting gene pools</li>
                  <li><strong>Ecosystem alteration:</strong> Changing how entire ecosystems function</li>
                  <li><strong>Facilitation:</strong> Making it easier for other invasives to establish</li>
                </ul>
              </div>

              <h4>Engineering Solutions to Biodiversity Threats 🛡️</h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications 💻</h5>
                <ul>
                  <li><strong>Anti-Poaching Tech:</strong> Drones, sensors, and AI for wildlife protection</li>
                  <li><strong>Conflict Mitigation:</strong> Early warning systems for human-wildlife conflicts</li>
                  <li><strong>Pollution Monitoring:</strong> Real-time sensors for environmental contamination</li>
                  <li><strong>Climate Adaptation:</strong> Modeling tools for species migration corridors</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
                <ul>
                  <li><strong>Conservation Technology:</strong> Developing tools to combat biodiversity threats</li>
                  <li><strong>Environmental Forensics:</strong> Using tech to investigate wildlife crimes</li>
                  <li><strong>Restoration Engineering:</strong> Designing systems to repair damaged ecosystems</li>
                  <li><strong>Sustainable Development:</strong> Creating human systems that don't threaten biodiversity</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Threats to Biodiversity</h4>
              <p>Understanding the major threats facing global biodiversity.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Biodiversity Threats"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Biodiversity Levels</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Conservation Strategies →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.5</div>
              <div className="lesson-title-main">
                <h1>Unit 3 Quiz</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Conservation of Biodiversity: System Backup and Recovery 💾</h3>
              <div className="theory-box">
                <p>Time for the most important part - conservation! 🛡️ Think of biodiversity conservation like IT disaster recovery planning. You need multiple backup strategies: some keep systems running in their original environment (in-situ), others create backup copies in secure locations (ex-situ). Just like how you wouldn't trust your important data to just one backup method, we can't rely on just one conservation approach!</p>
                
                <div className="performance-metrics">
                  <h4>Conservation Success Stories 📊</h4>
                  <ul>
                    <li><strong>Protected Areas:</strong> 18% of land surface now under protection</li>
                    <li><strong>Species Recovery:</strong> California condor: 27 → 500+ individuals</li>
                    <li><strong>Seed Banks:</strong> 2.5 billion seeds stored globally</li>
                    <li><strong>Reintroduction Success:</strong> Arabian oryx brought back from extinction</li>
                  </ul>
                </div>
              </div>
              
              <h4>Biodiversity Conservation Approaches 🎯</h4>
              <p>Conservation strategies are broadly classified into two categories: in-situ conservation which protects species in their natural habitats, and ex-situ conservation which involves protecting species outside their natural habitats.</p>
              
              <h5>In-situ Conservation - Live System Protection 🏞️</h5>
              <div className="example-box">
                <p>In-situ is like keeping your servers running in their original data center - maintaining all the connections and relationships!</p>
                <ul>
                  <li><strong>Natural habitat protection:</strong> Keeping species in their original "environment"</li>
                  <li><strong>Ecological relationships:</strong> Maintains all the natural "network connections"</li>
                  <li><strong>Evolutionary potential:</strong> Allows species to continue adapting and evolving</li>
                  <li><strong>Ecosystem protection:</strong> Protects entire biological "systems"</li>
                  <li><strong>Cost-effective:</strong> More economical for large areas</li>
                  <li><strong>Space requirements:</strong> Needs larger land areas to be effective</li>
                </ul>
              </div>

              <h5>Ex-situ Conservation - Backup and Recovery 🏛️</h5>
              <div className="example-box">
                <p>Ex-situ is like cloud backup - storing copies of important data in secure, controlled environments!</p>
                <ul>
                  <li><strong>Controlled environments:</strong> Protected spaces outside natural habitats</li>
                  <li><strong>Vulnerable species focus:</strong> Intensive care for species at risk</li>
                  <li><strong>Breeding programs:</strong> Managed reproduction to increase populations</li>
                  <li><strong>Genetic backup:</strong> Preserving genetic material for the future</li>
                  <li><strong>Intensive management:</strong> Close monitoring and care</li>
                  <li><strong>Behavioral concerns:</strong> May lose natural behaviors in captivity</li>
                </ul>
              </div>

              <h4>In-situ Conservation Methods 🌳</h4>
              
              <h5>Protected Area Systems 🏛️</h5>
              <div className="example-box">
                <ul>
                  <li><strong>National Parks:</strong> Strict protection zones (like high-security servers)</li>
                  <li><strong>Wildlife Sanctuaries:</strong> Species-specific protection areas</li>
                  <li><strong>Biosphere Reserves:</strong> Multi-use conservation with research and education</li>
                  <li><strong>Community Reserves:</strong> Locally managed conservation areas</li>
                  <li><strong>Conservation Reserves:</strong> Government-community partnerships</li>
                  <li><strong>Marine Protected Areas:</strong> Ocean conservation zones</li>
                </ul>
              </div>

              <h5>Legal Frameworks 📜</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Wildlife Protection Act, 1972:</strong> India's main wildlife law</li>
                  <li><strong>Forest Conservation Act, 1980:</strong> Protecting forest areas</li>
                  <li><strong>Environment Protection Act, 1986:</strong> Comprehensive environmental law</li>
                  <li><strong>Biodiversity Act, 2002:</strong> Specific biodiversity protection</li>
                  <li><strong>International agreements:</strong> CITES, CBD for global cooperation</li>
                  <li><strong>State laws:</strong> Regional conservation regulations</li>
                </ul>
              </div>

              <h5>Community-Based Conservation 👥</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Joint Forest Management:</strong> Communities managing forests with government</li>
                  <li><strong>Community Conserved Areas:</strong> Traditional conservation by local people</li>
                  <li><strong>Traditional Knowledge:</strong> Indigenous wisdom for conservation</li>
                  <li><strong>Alternative Livelihoods:</strong> Economic opportunities that support conservation</li>
                  <li><strong>Ecotourism:</strong> Tourism that benefits both people and nature</li>
                  <li><strong>Payment for Ecosystem Services:</strong> Paying communities for conservation</li>
                </ul>
              </div>

              <h4>Ex-situ Conservation Methods 🏢</h4>
              
              <h5>Living Collections 🦁</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Botanical Gardens:</strong> Plant conservation and research centers</li>
                  <li><strong>Zoological Parks:</strong> Animal conservation and breeding programs</li>
                  <li><strong>Gene Banks:</strong> Storing genetic material for future use</li>
                  <li><strong>Seed Banks:</strong> Long-term seed storage (nature's hard drives!)</li>
                  <li><strong>Microorganism Cultures:</strong> Preserving bacteria and fungi</li>
                  <li><strong>Breeding Centers:</strong> Captive breeding for population recovery</li>
                </ul>
              </div>

              <h5>Genetic Resource Banks 🧬</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Cryopreservation:</strong> Freezing gametes and embryos</li>
                  <li><strong>Embryo storage:</strong> Preserving early development stages</li>
                  <li><strong>DNA libraries:</strong> Genetic information storage</li>
                  <li><strong>Cell cultures:</strong> Living cell collections</li>
                  <li><strong>Genome sequencing:</strong> Digital genetic records</li>
                  <li><strong>Reproductive technology:</strong> Artificial breeding techniques</li>
                </ul>
              </div>

              <h5>Reintroduction Programs 🔄</h5>
              <div className="example-box">
                <ul>
                  <li><strong>Species recovery:</strong> Bringing species back to the wild</li>
                  <li><strong>Habitat restoration:</strong> Preparing environments before release</li>
                  <li><strong>Population monitoring:</strong> Tracking released animals and plants</li>
                  <li><strong>Genetic management:</strong> Maintaining genetic diversity in small populations</li>
                  <li><strong>Community involvement:</strong> Local support for reintroduction efforts</li>
                  <li><strong>Long-term care:</strong> Ongoing monitoring and support</li>
                </ul>
              </div>

              <h4>Engineering Applications in Conservation 🔧</h4>
              
              <div className="career-opportunities">
                <h5>Technology Solutions 💻</h5>
                <ul>
                  <li><strong>Conservation Drones:</strong> Monitoring wildlife and habitats</li>
                  <li><strong>Genetic Analysis:</strong> DNA barcoding and population genetics</li>
                  <li><strong>Tracking Systems:</strong> GPS and satellite monitoring of animals</li>
                  <li><strong>Habitat Modeling:</strong> AI for predicting suitable conservation areas</li>
                </ul>

                <h5>Career Opportunities 🚀</h5>
                <ul>
                  <li><strong>Conservation Technologist:</strong> Developing tools for species protection</li>
                  <li><strong>Wildlife Bioinformatics:</strong> Managing genetic data for conservation</li>
                  <li><strong>Restoration Engineer:</strong> Designing habitat restoration projects</li>
                  <li><strong>Conservation Data Scientist:</strong> Analyzing data to optimize protection efforts</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Conservation Success Stories</h4>
              <p>Learn about successful biodiversity conservation efforts around the world.</p>
              <iframe
                width="50%"
                height="300"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Conservation Success"
                allowFullScreen
              ></iframe>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Threats to Biodiversity</button>
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