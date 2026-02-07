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
      question: "What are the three main levels of biodiversity?",
      options: ["Genetic, Species, and Ecosystem", "Plant, Animal, and Microbial", "Terrestrial, Aquatic, and Aerial", "Local, National, and Global"],
      correctAnswer: 0,
      explanation: "Biodiversity is organized into three hierarchical levels: genetic diversity (variation within species), species diversity (variety of different species), and ecosystem diversity (variety of habitats and ecological processes)."
    },
    {
      question: "What percentage of DNA do humans share, yet still show significant differences?",
      options: ["95%", "99.9%", "98%", "100%"],
      correctAnswer: 1,
      explanation: "Humans share 99.9% of their DNA, but the remaining 0.1% creates all the genetic diversity we see in human populations, demonstrating the power of genetic variation."
    },
    {
      question: "Which level of biodiversity is like 'source code' in software?",
      options: ["Ecosystem diversity", "Species diversity", "Genetic diversity", "Habitat diversity"],
      correctAnswer: 2,
      explanation: "Genetic diversity represents the fundamental 'code' level of biodiversity, containing the DNA variations that determine traits and enable adaptation, similar to source code in software."
    },
    {
      question: "How many species are estimated to exist globally?",
      options: ["1-2 million", "8-10 million", "20-30 million", "50 million"],
      correctAnswer: 1,
      explanation: "Scientists estimate 8-10 million species exist globally, though we've only cataloged about 1.2 million, meaning most of Earth's biodiversity remains undiscovered."
    },
    {
      question: "Which engineering field uses biomimicry to create innovations?",
      options: ["Only robotics", "Only materials science", "Multiple fields including robotics and materials", "None"],
      correctAnswer: 2,
      explanation: "Biomimicry is used across multiple engineering fields including robotics (animal locomotion), materials science (spider silk), structural engineering (honeycomb structures), and algorithms (genetic algorithms)."
    }
  ];

  const module2Quiz = [
    {
      question: "What percentage of drugs come from plant sources?",
      options: ["10%", "25%", "50%", "75%"],
      correctAnswer: 1,
      explanation: "Approximately 25% of pharmaceutical drugs are derived from plant sources, representing a $40 billion market and highlighting the medicinal value of biodiversity."
    },
    {
      question: "Which type of biodiversity value involves direct use without market transactions?",
      options: ["Productive use values", "Consumptive use values", "Social values", "Option values"],
      correctAnswer: 1,
      explanation: "Consumptive use values refer to direct benefits from biological resources used without going through markets, such as wild foods, medicinal plants, firewood, and fresh water."
    },
    {
      question: "What is the estimated annual value of global ecosystem services?",
      options: ["$25 trillion", "$50 trillion", "$125 trillion", "$200 trillion"],
      correctAnswer: 2,
      explanation: "Global ecosystem services are valued at approximately $125 trillion annually, demonstrating the enormous economic importance of biodiversity to human society."
    },
    {
      question: "Which biodiversity value represents potential future benefits we haven't discovered yet?",
      options: ["Aesthetic values", "Option values", "Social values", "Ethical values"],
      correctAnswer: 1,
      explanation: "Option values represent the potential for future discoveries and applications from biodiversity, like undiscovered medicines or biotechnology applications we haven't thought of yet."
    },
    {
      question: "What is the expected market size of biomimicry by 2030?",
      options: ["$5 billion", "$18 billion", "$50 billion", "$100 billion"],
      correctAnswer: 1,
      explanation: "The biomimicry market is expected to reach $18 billion by 2030, reflecting growing interest in nature-inspired engineering solutions."
    }
  ];

  const module3Quiz = [
    {
      question: "India is considered a mega-diverse country because it contains:",
      options: ["5% of world's species in 1% of land", "8% of world's species in 2.4% of land", "12% of world's species in 3% of land", "15% of world's species in 4% of land"],
      correctAnswer: 1,
      explanation: "India is one of 17 mega-diverse countries globally, containing approximately 8% of the world's known species in just 2.4% of the world's land area."
    },
    {
      question: "How many biodiversity hotspots exist globally?",
      options: ["12", "24", "36", "48"],
      correctAnswer: 2,
      explanation: "There are 36 biodiversity hotspots globally, regions with exceptional species concentration that contain approximately 60% of the world's plant species."
    },
    {
      question: "What percentage of ocean species remain undiscovered?",
      options: ["30%", "50%", "80%", "95%"],
      correctAnswer: 2,
      explanation: "Approximately 80% of ocean species remain undiscovered, making marine biodiversity one of the greatest unexplored frontiers on Earth."
    },
    {
      question: "What percentage of Indian flora is endemic (found nowhere else)?",
      options: ["10%", "33%", "50%", "75%"],
      correctAnswer: 1,
      explanation: "Approximately 33% of Indian flora is endemic, meaning these plant species are found nowhere else on Earth, highlighting India's unique biodiversity."
    },
    {
      question: "Which region shows the highest biodiversity globally?",
      options: ["Polar regions", "Temperate zones", "Equatorial/tropical regions", "Desert regions"],
      correctAnswer: 2,
      explanation: "Equatorial and tropical regions harbor the highest biodiversity, with 50% of species found in just 7% of Earth's land area near the equator."
    }
  ];

  const module4Quiz = [
    {
      question: "What is the primary threat to 85% of endangered species?",
      options: ["Climate change", "Pollution", "Habitat loss", "Invasive species"],
      correctAnswer: 2,
      explanation: "Habitat loss is the primary threat to 85% of endangered species, including deforestation, urbanization, agricultural conversion, and habitat fragmentation."
    },
    {
      question: "How much faster is the current extinction rate compared to natural background rate?",
      options: ["10-100x faster", "100-500x faster", "1,000-10,000x faster", "100,000x faster"],
      correctAnswer: 2,
      explanation: "The current extinction rate is 1,000-10,000 times faster than the natural background rate, indicating an unprecedented biodiversity crisis."
    },
    {
      question: "What is the estimated annual value of the illegal wildlife trade?",
      options: ["$2 billion", "$20 billion", "$50 billion", "$100 billion"],
      correctAnswer: 1,
      explanation: "The illegal wildlife trade is estimated at $20 billion annually, making it one of the most lucrative forms of organized crime globally."
    },
    {
      question: "Which threat to biodiversity is compared to 'malicious code injection'?",
      options: ["Pollution", "Climate change", "Invasive species", "Habitat loss"],
      correctAnswer: 2,
      explanation: "Invasive species are like malicious code injection - they enter ecosystems where they don't belong and cause chaos by outcompeting natives, spreading diseases, and altering ecosystem functions."
    },
    {
      question: "How many species could be affected by climate change by 2050?",
      options: ["100,000", "500,000", "1 million", "5 million"],
      correctAnswer: 2,
      explanation: "Climate change could affect approximately 1 million species by 2050 through habitat shifts, phenology changes, and ecosystem disruption."
    }
  ];

  const module5Quiz = [
    {
      question: "Which conservation approach maintains species in their natural habitats?",
      options: ["Ex-situ conservation", "In-situ conservation", "Captive breeding", "Seed banking"],
      correctAnswer: 1,
      explanation: "In-situ conservation protects species in their natural habitats, maintaining all ecological relationships, evolutionary potential, and ecosystem functions through national parks and wildlife sanctuaries."
    },
    {
      question: "What is an example of ex-situ conservation?",
      options: ["National parks", "Wildlife sanctuaries", "Zoos and botanical gardens", "Biosphere reserves"],
      correctAnswer: 2,
      explanation: "Ex-situ conservation involves protecting species outside their natural habitats, such as in zoos, botanical gardens, seed banks, and captive breeding programs."
    },
    {
      question: "Which technology helps combat poaching?",
      options: ["Virtual reality", "Drones and AI sensors", "3D printing", "Blockchain only"],
      correctAnswer: 1,
      explanation: "Drones equipped with sensors and AI are used for anti-poaching efforts, providing real-time surveillance and early detection of illegal activities in protected areas."
    },
    {
      question: "What is the main advantage of in-situ conservation over ex-situ?",
      options: ["Lower cost", "Maintains ecological relationships", "Easier to implement", "Better for tourism"],
      correctAnswer: 1,
      explanation: "In-situ conservation maintains all ecological relationships and evolutionary processes intact, allowing species to continue adapting naturally within their ecosystems."
    },
    {
      question: "Which career field develops tools for biodiversity monitoring?",
      options: ["Only biology", "Only computer science", "Conservation technology (interdisciplinary)", "Only environmental science"],
      correctAnswer: 2,
      explanation: "Conservation technology is an interdisciplinary field combining biology, computer science, engineering, and environmental science to develop monitoring and protection tools."
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
                <h1>Definition: Genetic, Species and Ecosystem Diversity</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Biodiversity: Nature's Ultimate Database </h3>
              <div className="theory-box">
                <p>Hey future engineers!  Think of biodiversity as nature's massive distributed database system - it's got three levels of organization, each more complex than the last. Just like how your code has different layers (functions, classes, modules), biodiversity has genetic, species, and ecosystem levels. And trust me, this "database" is way more sophisticated than anything we've built! </p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity Stats That'll Blow Your Mind </h4>
                  <ul>
                    <li><strong>Total Species:</strong> 8-10 million estimated (we've only cataloged 1.2 million!)</li>
                    <li><strong>Genetic Diversity:</strong> Humans share 99.9% DNA but that 0.1% creates all our differences</li>
                    <li><strong>Ecosystem Variety:</strong> From deep ocean trenches to mountain peaks</li>
                    <li><strong>Engineering Inspiration:</strong> Biomimicry has given us Velcro, airplane wings, and more!</li>
                  </ul>
                </div>
              </div>
              
              <h4>The Three Levels of Biodiversity </h4>
              <p>Biodiversity refers to the variety of life on Earth and the natural patterns it forms. It encompasses three main levels of biological organization that are interconnected and essential for ecosystem functioning.</p>
              
              <h5>Genetic Diversity - The Source Code Level </h5>
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

              <h5>Ecosystem Diversity - The System Architecture Level </h5>
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

              <h4>Why This Matters for Engineers </h4>
              
              <div className="career-opportunities">
                <h5>Biomimicry Applications </h5>
                <ul>
                  <li><strong>Structural Engineering:</strong> Honeycomb structures, bird wing aerodynamics</li>
                  <li><strong>Materials Science:</strong> Spider silk strength, gecko adhesion</li>
                  <li><strong>Robotics:</strong> Animal locomotion, swarm intelligence</li>
                  <li><strong>Algorithms:</strong> Ant colony optimization, genetic algorithms</li>
                </ul>

                <h5>Career Opportunities </h5>
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
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/7G3eXI_DPn8?si=FaulseZDH7cEFppZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            </div>

            <Quiz title="Module 3.1: Biodiversity Levels" questions={module1Quiz} subject="ES" unitId={3} moduleId={1} />

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
              <h3>Value of Biodiversity: Nature's Economic Engine </h3>
              <div className="theory-box">
                <p>Alright engineers, let's talk business! 💼 Biodiversity isn't just pretty to look at - it's a massive economic powerhouse that drives industries worth trillions of dollars. From the medicines in your cabinet to the algorithms in your code, nature has been humanity's original R&D department. Understanding these values helps you see opportunities where biology meets technology!</p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity's Economic Impact </h4>
                  <ul>
                    <li><strong>Pharmaceutical Industry:</strong> 25% of drugs come from plants - $40 billion market</li>
                    <li><strong>Agriculture:</strong> Genetic diversity in crops worth $115 billion annually</li>
                    <li><strong>Ecosystem Services:</strong> Valued at $125 trillion globally per year</li>
                    <li><strong>Biomimicry Market:</strong> Expected to reach $18 billion by 2030</li>
                  </ul>
                </div>
              </div>
              
              <h4>Economic and Non-Economic Values of Biodiversity </h4>
              <p>Biodiversity provides numerous values that can be categorized into different types based on how humans interact with and benefit from biological diversity.</p>
              
              <h5>Consumptive Use Values - Direct Benefits</h5>
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

              <h5>Productive Use Values - Commercial Applications </h5>
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

              <h5>Social Values - Cultural Operating System </h5>
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

              <h4>Additional Biodiversity Values </h4>
              
              <h5>Ethical Values - The Moral Code </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Intrinsic rights:</strong> Species have a right to exist (like basic human rights)</li>
                  <li><strong>Moral obligations:</strong> Our responsibility to protect nature</li>
                  <li><strong>Stewardship duties:</strong> Taking care of what we've inherited</li>
                  <li><strong>Intergenerational equity:</strong> Preserving options for future generations</li>
                  <li><strong>Inherent worth:</strong> Value beyond human utility</li>
                </ul>
              </div>

              <h5>Aesthetic Values - Nature's User Interface </h5>
              <div className="example-box">
                <ul>
                  <li><strong>Natural beauty:</strong> Landscapes that inspire and refresh</li>
                  <li><strong>Species appreciation:</strong> The wonder of seeing wildlife</li>
                  <li><strong>Artistic inspiration:</strong> Nature as muse for creativity</li>
                  <li><strong>Recreation settings:</strong> Beautiful places for relaxation</li>
                  <li><strong>Tourism attractions:</strong> Economic value of natural beauty</li>
                  <li><strong>Photography subjects:</strong> Instagram-worthy natural scenes! </li>
                </ul>
              </div>

              <h5>Option Values - Future Potential </h5>
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

              <h4>Engineering Applications of Biodiversity Values </h4>
              
              <div className="career-opportunities">
                <h5>Tech Opportunities </h5>
                <ul>
                  <li><strong>Bioprospecting Apps:</strong> AI to identify valuable compounds in nature</li>
                  <li><strong>Ecosystem Valuation:</strong> Software to calculate ecosystem service values</li>
                  <li><strong>Conservation Economics:</strong> Tools for cost-benefit analysis of protection</li>
                  <li><strong>Sustainable Supply Chains:</strong> Tracking biodiversity impact in products</li>
                </ul>

                <h5>Career Paths </h5>
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
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/xcHZFuq270g?si=IV3buww5Zff-Gs73&amp;start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Module 3.2: Biodiversity Values" questions={module2Quiz} subject="ES" unitId={3} moduleId={2} />

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
              <h3>Biodiversity Distribution: From Global to Local Scale </h3>
              <div className="theory-box">
                <p>Think of biodiversity distribution like network architecture - you've got global infrastructure, national networks, and local nodes, each with different characteristics and challenges! 🌐 Just like how internet traffic isn't evenly distributed (some servers get way more hits), biodiversity isn't spread evenly across the planet. Some places are like biological data centers - packed with incredible diversity!</p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity Distribution Facts </h4>
                  <ul>
                    <li><strong>Tropical Bias:</strong> 50% of species in just 7% of Earth's land area</li>
                    <li><strong>Ocean Mystery:</strong> 80% of ocean species still undiscovered</li>
                    <li><strong>India's Density:</strong> 8% of global species in 2.4% of land area</li>
                    <li><strong>Hotspot Concentration:</strong> 36 hotspots contain 60% of plant species</li>
                  </ul>
                </div>
              </div>
              
              <h4>Biodiversity Distribution Across Scales </h4>
              <p>Biodiversity varies significantly across different spatial scales, with patterns of richness and endemism changing from global to national to local levels.</p>
              
              <h5>Global Biodiversity Patterns </h5>
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

              <h5>Local Biodiversity Patterns </h5>
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
              
              <h5>India's Exceptional Biodiversity </h5>
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

              <h5>India's Biogeographic Zones </h5>
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

              <h5>Endemic Richness in India </h5>
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

              <h4>Engineering Applications </h4>
              
              <div className="career-opportunities">
                <h5>Technology Solutions </h5>
                <ul>
                  <li><strong>Biodiversity Mapping:</strong> GIS and remote sensing for species distribution</li>
                  <li><strong>Citizen Science Apps:</strong> Crowdsourcing biodiversity data collection</li>
                  <li><strong>AI Species Identification:</strong> Machine learning for automated species recognition</li>
                  <li><strong>Conservation Prioritization:</strong> Algorithms to optimize protection efforts</li>
                </ul>

                <h5>Career Opportunities</h5>
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
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/jnz2Xq9T0dk?si=U8jX29I_FpF01Nka&amp;start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Module 3.3: Biodiversity Distribution" questions={module3Quiz} subject="ES" unitId={3} moduleId={3} />

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
              <h3>Threats to Biodiversity: System Vulnerabilities </h3>
              <div className="theory-box">
                <p>Alright engineers, time for some cybersecurity thinking!  Just like how computer systems face various threats (malware, DDoS attacks, data breaches), biodiversity faces multiple threats that can crash entire ecosystems. Understanding these threats is like doing a security audit on nature - we need to identify vulnerabilities and patch them before the whole system goes down!</p>
                
                <div className="performance-metrics">
                  <h4>Biodiversity Threat Statistics </h4>
                  <ul>
                    <li><strong>Extinction Rate:</strong> 1,000-10,000x faster than natural background rate</li>
                    <li><strong>Habitat Loss:</strong> Primary threat to 85% of endangered species</li>
                    <li><strong>Wildlife Trade:</strong> $20 billion illegal market annually</li>
                    <li><strong>Climate Impact:</strong> Could affect 1 million species by 2050</li>
                  </ul>
                </div>
              </div>
              
              <h4>Major Threats to Biodiversity </h4>
              <p>Biodiversity faces unprecedented threats from human activities, with habitat destruction, direct exploitation, and human-wildlife conflicts being among the most pressing challenges.</p>
              
              <h5>Habitat Loss - The Ultimate System Crash </h5>
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

              <h5>Poaching of Wildlife - Unauthorized Access </h5>
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

              <h5>Man-Wildlife Conflicts - System Incompatibility </h5>
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

              <h4>Additional Threats to Biodiversity </h4>
              
              <h5>Climate Change Impacts - System Overheating </h5>
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

              <h5>Pollution Effects - System Contamination </h5>
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

              <h5>Invasive Species - Malicious Code Injection </h5>
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

              <h4>Engineering Solutions to Biodiversity Threats </h4>
              
              <div className="career-opportunities">
                <h5>Technology Applications </h5>
                <ul>
                  <li><strong>Anti-Poaching Tech:</strong> Drones, sensors, and AI for wildlife protection</li>
                  <li><strong>Conflict Mitigation:</strong> Early warning systems for human-wildlife conflicts</li>
                  <li><strong>Pollution Monitoring:</strong> Real-time sensors for environmental contamination</li>
                  <li><strong>Climate Adaptation:</strong> Modeling tools for species migration corridors</li>
                </ul>

                <h5>Career Opportunities </h5>
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
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/705DHheuG6w?si=kjpwXjBu5-kKRUYw&amp;start=4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Module 3.4: Threats to Biodiversity" questions={module4Quiz} subject="ES" unitId={3} moduleId={4} />

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
              <h3>Conservation of Biodiversity: Protecting Nature's Systems 🛡️</h3>
              <div className="theory-box">
                <p>Conservation is like system backup and disaster recovery - we need both on-site protection (in-situ) and off-site backups (ex-situ) to ensure biodiversity survives! Just like you wouldn't trust a single backup strategy for critical data, we can't rely on just one conservation approach.</p>
              </div>
              
              <h4>In-Situ Conservation - On-Site Protection 🏞️</h4>
              <div className="example-box">
                <p>Protecting species in their natural habitats with all ecological relationships intact.</p>
                <ul>
                  <li><strong>National Parks:</strong> Large protected areas for ecosystem conservation</li>
                  <li><strong>Wildlife Sanctuaries:</strong> Protected areas focusing on specific species</li>
                  <li><strong>Biosphere Reserves:</strong> UNESCO sites balancing conservation and development</li>
                  <li><strong>Sacred Groves:</strong> Traditional community-protected forests</li>
                </ul>
              </div>

              <h4>Ex-Situ Conservation - Off-Site Backup 🏛️</h4>
              <div className="example-box">
                <p>Protecting species outside their natural habitats as insurance against extinction.</p>
                <ul>
                  <li><strong>Zoos:</strong> Captive breeding programs for endangered animals</li>
                  <li><strong>Botanical Gardens:</strong> Living collections of rare plants</li>
                  <li><strong>Seed Banks:</strong> Long-term storage of plant genetic material</li>
                  <li><strong>Gene Banks:</strong> Cryopreservation of genetic resources</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Conservation Strategies</h4>
              <p>Learn about different approaches to protecting biodiversity.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/jnz2Xq9T0dk?si=U8jX29I_FpF01Nka" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Module 3.5: Conservation Strategies" questions={module5Quiz} subject="ES" unitId={3} moduleId={5} />

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