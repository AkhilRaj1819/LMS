'use client';
import React from 'react';
import Quiz from '../components/Quiz.tsx';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule }) => {
  const module1Quiz = [
    {
      question: "What is the primary definition of environmental science?",
      options: ["Study of plants only", "Interdisciplinary study of environment and solutions to environmental problems", "Study of animals", "Study of weather"],
      correctAnswer: 1,
      explanation: "Environmental science is an interdisciplinary field that integrates physical, biological, and social sciences to study the environment and solve environmental problems."
    },
    {
      question: "Which of the following is NOT a component of the environment?",
      options: ["Biotic factors", "Abiotic factors", "Human-made structures", "None of the above"],
      correctAnswer: 3,
      explanation: "All three - biotic factors, abiotic factors, and human-made structures - are components of the environment."
    },
    {
      question: "What is the scope of environmental studies?",
      options: ["Only natural sciences", "Only social sciences", "Interdisciplinary covering natural, social, and applied sciences", "Only engineering"],
      correctAnswer: 2,
      explanation: "Environmental studies has a broad interdisciplinary scope covering natural sciences, social sciences, engineering, and applied sciences."
    },
    {
      question: "Why is environmental education important?",
      options: ["To pass exams", "To create awareness and promote sustainable practices", "To memorize facts", "To study animals"],
      correctAnswer: 1,
      explanation: "Environmental education is crucial for creating awareness about environmental issues and promoting sustainable practices among individuals and communities."
    },
    {
      question: "Which field studies the relationship between organisms and their environment?",
      options: ["Physics", "Chemistry", "Ecology", "Geology"],
      correctAnswer: 2,
      explanation: "Ecology is the branch of biology that studies the relationships between organisms and their physical environment."
    }
  ];

  const module2Quiz = [
    {
      question: "What is an ecosystem?",
      options: ["A collection of plants", "A community of living organisms interacting with their physical environment", "A group of animals", "A type of climate"],
      correctAnswer: 1,
      explanation: "An ecosystem is a community of living organisms (biotic factors) interacting with each other and their physical environment (abiotic factors)."
    },
    {
      question: "Which of the following is an abiotic factor?",
      options: ["Plants", "Animals", "Temperature", "Bacteria"],
      correctAnswer: 2,
      explanation: "Temperature is an abiotic (non-living) factor. Plants, animals, and bacteria are biotic (living) factors."
    },
    {
      question: "What are the two main components of an ecosystem?",
      options: ["Plants and animals", "Biotic and abiotic", "Water and soil", "Producers and consumers"],
      correctAnswer: 1,
      explanation: "The two main components of an ecosystem are biotic (living) and abiotic (non-living) components."
    },
    {
      question: "What is ecosystem structure?",
      options: ["Energy flow", "The composition and organization of biotic and abiotic components", "Nutrient cycling", "Food chains"],
      correctAnswer: 1,
      explanation: "Ecosystem structure refers to the composition and organization of biotic and abiotic components in an ecosystem."
    },
    {
      question: "What is ecosystem function?",
      options: ["Species diversity", "The processes like energy flow and nutrient cycling", "Spatial arrangement", "Biomass distribution"],
      correctAnswer: 1,
      explanation: "Ecosystem function refers to the processes that occur in an ecosystem, such as energy flow, nutrient cycling, and productivity."
    }
  ];

  const module3Quiz = [
    {
      question: "What are producers in an ecosystem?",
      options: ["Organisms that eat other organisms", "Organisms that make their own food through photosynthesis", "Organisms that decompose matter", "Organisms that hunt"],
      correctAnswer: 1,
      explanation: "Producers (autotrophs) are organisms that make their own food through photosynthesis, converting solar energy into chemical energy."
    },
    {
      question: "What are primary consumers?",
      options: ["Carnivores", "Herbivores", "Decomposers", "Producers"],
      correctAnswer: 1,
      explanation: "Primary consumers are herbivores that feed directly on producers (plants)."
    },
    {
      question: "What is the role of decomposers?",
      options: ["Produce food", "Eat plants", "Break down dead organic matter and return nutrients", "Hunt animals"],
      correctAnswer: 2,
      explanation: "Decomposers (bacteria and fungi) break down dead organic matter and return nutrients to the ecosystem, completing the nutrient cycle."
    },
    {
      question: "What is ecological succession?",
      options: ["Movement of animals", "Predictable change in biological communities over time", "Food chain", "Energy flow"],
      correctAnswer: 1,
      explanation: "Ecological succession is the process by which biological communities change over time in a predictable sequence."
    },
    {
      question: "What is a climax community?",
      options: ["Initial stage of succession", "Disturbed ecosystem", "Stable, mature community at the end of succession", "Pioneer species"],
      correctAnswer: 2,
      explanation: "A climax community is a stable, mature biological community that represents the final stage of ecological succession."
    }
  ];

  const module4Quiz = [
    {
      question: "What is a food chain?",
      options: ["Complex network of feeding relationships", "Linear sequence of energy transfer from one organism to another", "Type of ecosystem", "Nutrient cycle"],
      correctAnswer: 1,
      explanation: "A food chain is a linear sequence showing how energy and nutrients are transferred from one organism to another through feeding relationships."
    },
    {
      question: "What is a food web?",
      options: ["Single food chain", "Complex network of interconnected food chains", "Type of pyramid", "Energy source"],
      correctAnswer: 1,
      explanation: "A food web is a complex network of interconnected food chains showing multiple feeding relationships in an ecosystem."
    },
    {
      question: "What is the 10% energy transfer rule?",
      options: ["All energy is transferred", "About 10% of energy is transferred to the next trophic level", "90% energy is transferred", "No energy is lost"],
      correctAnswer: 1,
      explanation: "The 10% rule states that approximately 10% of energy is transferred from one trophic level to the next, with 90% lost as heat."
    },
    {
      question: "What is a pyramid of energy?",
      options: ["Shows organism count", "Shows biomass", "Shows energy flow through trophic levels", "Shows species diversity"],
      correctAnswer: 2,
      explanation: "A pyramid of energy shows the flow of energy through different trophic levels in an ecosystem, always upright in shape."
    },
    {
      question: "Why are food webs more stable than food chains?",
      options: ["They are simpler", "They have multiple feeding relationships providing alternative pathways", "They have less energy", "They have fewer organisms"],
      correctAnswer: 1,
      explanation: "Food webs are more stable because they have multiple feeding relationships, providing alternative pathways if one species is affected."
    }
  ];

  const module5Quiz = [
    {
      question: "What are terrestrial ecosystems?",
      options: ["Water-based ecosystems", "Land-based ecosystems", "Underground ecosystems", "Artificial ecosystems"],
      correctAnswer: 1,
      explanation: "Terrestrial ecosystems are land-based ecosystems including forests, grasslands, deserts, and tundra."
    },
    {
      question: "Which is an example of an aquatic ecosystem?",
      options: ["Forest", "Desert", "Ocean", "Grassland"],
      correctAnswer: 2,
      explanation: "Oceans are aquatic (water-based) ecosystems. Forests, deserts, and grasslands are terrestrial ecosystems."
    },
    {
      question: "What are artificial ecosystems?",
      options: ["Natural forests", "Human-created or managed ecosystems like farms and cities", "Oceans", "Mountains"],
      correctAnswer: 1,
      explanation: "Artificial ecosystems are human-created or managed systems like agricultural lands, urban areas, and gardens."
    },
    {
      question: "What characterizes a forest ecosystem?",
      options: ["Lack of trees", "High tree density and biodiversity", "Desert conditions", "Only grass"],
      correctAnswer: 1,
      explanation: "Forest ecosystems are characterized by high tree density, multiple layers of vegetation, and high biodiversity."
    },
    {
      question: "What is an estuary?",
      options: ["Desert area", "Transitional ecosystem where freshwater meets saltwater", "Mountain ecosystem", "Grassland"],
      correctAnswer: 1,
      explanation: "An estuary is a transitional ecosystem where freshwater from rivers meets and mixes with saltwater from the ocean."
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
                <h1>Introduction to Environmental Science</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Foundations of Environmental Studies</h3>
              <div className="theory-box">
                <p><strong>Environmental studies</strong> is like the ultimate interdisciplinary team project! It brings together scientists, economists, policymakers, and engineers to tackle our planet's biggest challenges. Think of it as the "Avengers" of academic fields – each discipline contributes its unique superpowers to save the environment.</p>
                
                <div className="performance-metrics">
                  <h4>What Exactly is "Environment"?</h4>
                  <p>Imagine you're sitting in your room right now. Your environment includes:</p>
                  <ul>
                    <li><strong>Living things around you:</strong> That spider in the corner, your pet, plants on your windowsill</li>
                    <li><strong>Non-living things:</strong> The air you breathe, water you drink, the temperature, even your WiFi signals!</li>
                    <li><strong>Human-made stuff:</strong> Your laptop, the building you're in, that pizza box from last night</li>
                    <li><strong>The dynamic interactions:</strong> How everything constantly affects everything else</li>
                  </ul>
                </div>
              </div>
              
              <h4>Scope of Environmental Studies</h4>
              <div className="example-box">
                <p>Environmental studies is like a Swiss Army knife – it has tools for every situation:</p>
                <ul>
                  <li><strong>Science & Technology:</strong> Developing cool gadgets to clean up pollution and monitor ecosystems</li>
                  <li><strong>Ethics & Policy:</strong> Deciding what's right and wrong, and making rules everyone can follow</li>
                  <li><strong>Economics & Management:</strong> Figuring out how to save the planet without going broke</li>
                  <li><strong>Education & Awareness:</strong> Teaching people (like you!) why this stuff matters</li>
                </ul>
              </div>

              <h4>Why Should You Care?</h4>
              <div className="theory-box">
                <h5>Real Talk: Environmental Problems Affect Your Daily Life</h5>
                <ul>
                  <li><strong>Air pollution:</strong> Makes your morning jog feel like breathing through a straw</li>
                  <li><strong>Climate change:</strong> Messes with your favorite weather and vacation spots</li>
                  <li><strong>Resource depletion:</strong> Could make your smartphone more expensive than a car</li>
                  <li><strong>Ecosystem collapse:</strong> No more Instagram-worthy nature photos!</li>
                </ul>
                
                <h5>The Good News: You Can Be Part of the Solution!</h5>
                <p>Every environmental engineer, policy maker, and aware citizen started by learning these basics. Today's knowledge becomes tomorrow's breakthrough solutions.</p>
              </div>

              <h4>The Interdisciplinary Dream Team</h4>
              <div className="comparison-table">
                <h5>Physical Sciences Squad</h5>
                <ul>
                  <li><strong>Physics:</strong> "We study energy flows and radiation – basically how power moves through everything"</li>
                  <li><strong>Chemistry:</strong> "We figure out what happens when substances mix – including pollution reactions"</li>
                  <li><strong>Geology:</strong> "We know rocks, soil, and minerals – the foundation of everything"</li>
                  <li><strong>Atmospheric Science:</strong> "We predict weather and climate – your daily forecast team"</li>
                </ul>

                <h5>Life Sciences Team</h5>
                <ul>
                  <li><strong>Biology:</strong> "We understand how living things work and interact"</li>
                  <li><strong>Ecology:</strong> "We study the relationships between organisms and their environment"</li>
                  <li><strong>Botany:</strong> "We're the plant experts – from tiny algae to giant trees"</li>
                  <li><strong>Zoology:</strong> "We study animals – from microscopic creatures to elephants"</li>
                </ul>

                <h5>Social Sciences Alliance</h5>
                <ul>
                  <li><strong>Economics:</strong> "We figure out costs, benefits, and how to fund environmental solutions"</li>
                  <li><strong>Sociology:</strong> "We study how people behave and how to change harmful habits"</li>
                  <li><strong>Political Science:</strong> "We work on policies and laws to protect the environment"</li>
                  <li><strong>Psychology:</strong> "We understand why people make certain environmental choices"</li>
                </ul>
              </div>

              <div className="example-box">
                <h4>Fun Fact Corner</h4>
                <p><strong>Did you know?</strong> The term "environment" comes from the French word "environ," meaning "around." So environmental science literally studies everything "around" us – pretty cool, right?</p>
              </div>
            </section>

            <div className="video-embed">
              <h4>Introduction to Environmental Science</h4>
              <p>Understanding the interdisciplinary nature and importance of environmental studies.</p>
              
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/7G3eXI_DPn8?si=FaulseZDH7cEFppZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            </div>

            <Quiz title="Introduction to Environmental Science Quiz" questions={module1Quiz} subject="ES" unitId={1} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Concept of an Ecosystem →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.2</div>
              <div className="lesson-title-main">
                <h1>Ecosystems and Biodiversity</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Ecosystems</h3>
              <div className="theory-box">
                <p>Think of an ecosystem as <strong>nature's ultimate social network</strong> – where every living thing is connected to every other living thing, and they're all constantly posting updates about what they're eating, where they're living, and how they're feeling about the weather!</p>
                
                <div className="performance-metrics">
                  <h4>What Makes an Ecosystem Tick?</h4>
                  <p>An ecosystem is basically a <strong>biological community</strong> where living organisms (the "users") interact with their physical environment (the "platform"). Here's what makes it special:</p>
                  <ul>
                    <li><strong>Self-sustaining:</strong> Like a well-designed app that runs itself – no external maintenance needed!</li>
                    <li><strong>Energy flow:</strong> Energy moves through the system like data through a network</li>
                    <li><strong>Everyone's connected:</strong> Change one thing, and it affects everything else (just like social media drama!)</li>
                    <li><strong>Dynamic balance:</strong> Constantly adapting and adjusting to stay stable</li>
                  </ul>
                </div>
              </div>
              
              <h4>The Two Main Components</h4>
              <div className="example-box">
                <h5>Biotic Components (The Living Squad)</h5>
                <p>These are all the living things in the ecosystem – the "active users" of nature's network:</p>
                <ul>
                  <li><strong>Producers:</strong> The content creators (plants, algae) who make their own food using sunlight</li>
                  <li><strong>Consumers:</strong> The followers who eat other organisms (that's us and most animals!)</li>
                  <li><strong>Decomposers:</strong> The cleanup crew (bacteria, fungi) who recycle everything</li>
                </ul>
                
                <h5>Abiotic Components (The Platform Infrastructure)</h5>
                <p>These are the non-living things that provide the "hardware" for life to run on:</p>
                <ul>
                  <li><strong>Air:</strong> The oxygen you're breathing right now</li>
                  <li><strong>Water:</strong> H₂O – the universal solvent and life's favorite drink</li>
                  <li><strong>Soil:</strong> Nature's growing medium (like potting soil, but way more complex)</li>
                  <li><strong>Sunlight:</strong> The ultimate power source – better than any battery!</li>
                  <li><strong>Temperature:</strong> The thermostat that controls how fast life processes happen</li>
                </ul>
              </div>

              <h4>Structure vs Function: The Architecture of Life</h4>
              <div className="theory-box">
                <h5>Think of it Like Building a House</h5>
                <p><strong>Structure</strong> is what you can see and count – like the rooms, furniture, and people in a house. <strong>Function</strong> is what actually happens – like cooking, sleeping, and family conversations.</p>
              </div>

              <div className="comparison-table">
                <h5>Ecosystem Structure (What's There)</h5>
                <ul>
                  <li><strong>Species diversity:</strong> How many different types of organisms live there (like counting different apps on your phone)</li>
                  <li><strong>Trophic levels:</strong> The "food hierarchy" – who eats whom</li>
                  <li><strong>Spatial arrangement:</strong> Where everything lives (like room layout in a house)</li>
                  <li><strong>Biomass distribution:</strong> How much living stuff is at each level</li>
                </ul>

                <h5>Ecosystem Function (What Happens)</h5>
                <ul>
                  <li><strong>Energy flow:</strong> How energy moves from the sun through all living things</li>
                  <li><strong>Nutrient cycling:</strong> How essential elements like carbon and nitrogen get recycled</li>
                  <li><strong>Productivity:</strong> How much new life gets created (like measuring website traffic)</li>
                  <li><strong>Regulation:</strong> How the system keeps itself balanced and stable</li>
                </ul>
              </div>

              <div className="example-box">
                <h4>Real-World Example: Your School Campus</h4>
                <p>Your campus is actually a mini-ecosystem! <strong>Biotic components:</strong> students, teachers, plants, birds, insects. <strong>Abiotic components:</strong> buildings, air, water fountains, sunlight. <strong>Energy flow:</strong> You eat food (energy) to study and move around. <strong>Interactions:</strong> You affect the environment, and it affects you back!</p>
              </div>
            </section>

            <div className="video-embed">
              <h4>Ecosystem Basics</h4>
              <p>Introduction to ecosystems, their components, and functions.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/pc7sJg1sdFU?si=dEGkty7PANYRcm2n" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Ecosystems and Biodiversity Quiz" questions={module2Quiz} subject="ES" unitId={1} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Definition and Scope</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Producers, Consumers and Decomposers →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.3</div>
              <div className="lesson-title-main">
                <h1>Natural Resources</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Trophic Relationships</h3>
              <div className="theory-box">
                <p>Living organisms in an ecosystem are classified based on their feeding relationships and roles in energy transfer and nutrient cycling.</p>
              </div>
              
              <h4>Producers (Autotrophs)</h4>
              <ul>
                <li>Photosynthetic organisms (plants, algae, cyanobacteria)</li>
                <li>Convert solar energy to chemical energy</li>
                <li>Form the base of food chains</li>
                <li>Provide energy and nutrients for other organisms</li>
              </ul>

              <h4>Consumers (Heterotrophs)</h4>
              <ul>
                <li><strong>Primary consumers (herbivores)</strong> feed on producers</li>
                <li><strong>Secondary consumers (carnivores)</strong> eat herbivores</li>
                <li><strong>Tertiary consumers (top carnivores)</strong> eat other carnivores</li>
                <li><strong>Omnivores</strong> consume both plants and animals</li>
              </ul>

              <h4>Decomposers</h4>
              <div className="example-box">
                <ul>
                  <li>Bacteria and fungi break down dead organic matter</li>
                  <li>Return nutrients to the ecosystem</li>
                  <li>Essential for nutrient cycling</li>
                  <li>Complete the energy and matter cycle</li>
                </ul>
              </div>

              <h4>Ecological Succession</h4>
              <div className="theory-box">
                <h5>Change Over Time</h5>
                <p>Ecological succession is the process by which biological communities change over time in a predictable sequence, leading to the development of a stable climax community.</p>
              </div>

              <div className="comparison-table">
                <h5>Types of Succession</h5>
                <ul>
                  <li><strong>Primary succession</strong> - colonization of new habitats</li>
                  <li><strong>Secondary succession</strong> - recovery of disturbed areas</li>
                  <li><strong>Autogenic succession</strong> - driven by internal factors</li>
                  <li><strong>Allogenic succession</strong> - driven by external factors</li>
                </ul>

                <h5>Succession Stages</h5>
                <ul>
                  <li><strong>Pioneer stage</strong> - initial colonizers</li>
                  <li><strong>Intermediate stages</strong> - increasing diversity</li>
                  <li><strong>Climax stage</strong> - stable community</li>
                  <li><strong>Disturbance and renewal cycles</strong></li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Food Relationships</h4>
              <p>Understanding food chains, webs, and energy flow in ecosystems.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/j78g5iRnYBM?si=-e4icIMBghEfm9oO" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Natural Resources Quiz" questions={module3Quiz} subject="ES" unitId={1} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Concept of an Ecosystem</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Food Chains and Food Webs →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.4</div>
              <div className="lesson-title-main">
                <h1>Environmental Ethics</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Energy Transfer Networks</h3>
              <div className="theory-box">
                <p>Food chains, food webs, and ecological pyramids illustrate the flow of energy and nutrients through different trophic levels in an ecosystem.</p>
              </div>
              
              <h4>Food Chains</h4>
              <ul>
                <li>Linear sequence of energy transfer</li>
                <li>Producer → Primary consumer → Secondary consumer</li>
                <li>Energy loss at each trophic level</li>
                <li>Typically 3-5 levels maximum</li>
              </ul>

              <h4>Food Webs</h4>
              <div className="example-box">
                <ul>
                  <li>Complex network of interconnected food chains</li>
                  <li>Multiple feeding relationships</li>
                  <li>Greater stability than simple chains</li>
                  <li>Shows ecosystem complexity</li>
                </ul>
              </div>

              <h4>Ecological Pyramids</h4>
              <ul>
                <li><strong>Pyramid of numbers</strong> - organism count per level</li>
                <li><strong>Pyramid of biomass</strong> - mass per level</li>
                <li><strong>Pyramid of energy</strong> - energy flow per level</li>
                <li>Typically upright, with decreasing values upward</li>
              </ul>

              <h4>Energy Flow in an Ecosystem</h4>
              <div className="theory-box">
                <h5>Energy Transfer Dynamics</h5>
                <p>Energy flows through ecosystems in a unidirectional manner, following the laws of thermodynamics, with significant losses at each trophic level.</p>
              </div>

              <div className="comparison-table">
                <h5>Energy Flow Process</h5>
                <ul>
                  <li>Solar energy captured by producers</li>
                  <li>Transfer through trophic levels</li>
                  <li>Energy loss as heat at each level</li>
                  <li>Decomposition and nutrient return</li>
                </ul>

                <h5>Energy Laws</h5>
                <ul>
                  <li><strong>First law:</strong> Energy cannot be created or destroyed</li>
                  <li><strong>Second law:</strong> Energy conversions are inefficient</li>
                  <li>About 10% energy transfer between levels</li>
                  <li>Entropy increases in energy transformations</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Ecological Succession</h4>
              <p>How ecosystems change over time through succession.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/8ceDE01iWLE?si=LYhQzWxfQiIwNOnt" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <Quiz title="Environmental Ethics Quiz" questions={module4Quiz} subject="ES" unitId={1} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Producers, Consumers and Decomposers</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Types of Ecosystems →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.5</div>
              <div className="lesson-title-main">
                <h1>Unit 1 Quiz</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Ecosystem Classification</h3>
              <div className="theory-box">
                <p>Ecosystems can be classified based on various criteria including habitat type, dominant species, and environmental conditions.</p>
              </div>
              
              <h4>Terrestrial Ecosystems</h4>
              <ul>
                <li><strong>Forests</strong> - tropical, temperate, boreal</li>
                <li><strong>Grasslands</strong> - savannas, prairies, steppes</li>
                <li><strong>Deserts</strong> - hot and cold deserts</li>
                <li><strong>Tundra</strong> - arctic and alpine tundra</li>
              </ul>

              <h4>Aquatic Ecosystems</h4>
              <div className="example-box">
                <ul>
                  <li><strong>Freshwater</strong> - lakes, rivers, ponds, wetlands</li>
                  <li><strong>Marine</strong> - oceans, coral reefs, estuaries</li>
                  <li><strong>Transitional</strong> - mangroves, marshes, swamps</li>
                  <li><strong>Underground</strong> - cave ecosystems</li>
                </ul>
              </div>

              <h4>Artificial Ecosystems</h4>
              <ul>
                <li><strong>Agricultural</strong> - farms, croplands</li>
                <li><strong>Urban</strong> - cities, suburban areas</li>
                <li><strong>Managed</strong> - gardens, parks, aquaculture</li>
                <li><strong>Industrial</strong> - factory ecosystems</li>
              </ul>

              <h4>Practical Experiments</h4>
              <div className="theory-box">
                <h5>Activity 1: Ecosystem Observation and Analysis</h5>
                <p>Students observe and analyze a local ecosystem, identifying biotic and abiotic components, food relationships, and energy flow patterns.</p>
              </div>

              <div className="comparison-table">
                <h5>Observation Components</h5>
                <ul>
                  <li>Identify producers, consumers, and decomposers</li>
                  <li>Record abiotic factors (temperature, pH, light)</li>
                  <li>Map feeding relationships and food chains</li>
                  <li>Measure species diversity and abundance</li>
                </ul>

                <h5>Analysis Tasks</h5>
                <ul>
                  <li>Construct food webs from observed relationships</li>
                  <li>Create ecological pyramids</li>
                  <li>Assess ecosystem health indicators</li>
                  <li>Document succession patterns</li>
                </ul>
              </div>

              <h4>Activity 2: Energy Flow Simulation</h4>
              <div className="example-box">
                <p>Students simulate energy flow through an ecosystem using mathematical models to understand the 10% energy transfer rule and its implications.</p>
              </div>

              <h5>Simulation Elements</h5>
              <ul>
                <li>Create hypothetical ecosystem model</li>
                <li>Calculate energy transfer between levels</li>
                <li>Demonstrate energy loss as heat</li>
                <li>Visualize pyramid of energy</li>
              </ul>

              <h5>Mathematical Applications</h5>
              <ul>
                <li>Apply 10% energy transfer rule</li>
                <li>Calculate biomass at each level</li>
                <li>Compare pyramid shapes</li>
                <li>Assess carrying capacity</li>
              </ul>

              <h4>Activity 3: Succession Study</h4>
              <div className="theory-box">
                <p>Students study succession patterns in different habitats, comparing primary and secondary succession processes.</p>
              </div>

              <div className="comparison-table">
                <h5>Study Areas</h5>
                <ul>
                  <li>Recently disturbed sites</li>
                  <li>Old field succession areas</li>
                  <li>Forest regeneration zones</li>
                  <li>Rocky shore or sand dune areas</li>
                </ul>

                <h5>Documentation Methods</h5>
                <ul>
                  <li>Photography over time</li>
                  <li>Species composition records</li>
                  <li>Soil development measurements</li>
                  <li>Community structure analysis</li>
                </ul>
              </div>
            </section>

            <div className="video-embed">
              <h4>Ecosystem Diversity</h4>
              <p>Different types of ecosystems and their characteristics.</p>
              <iframe width="50%" height="300" src="https://www.youtube.com/embed/R8q_iRRabT4?si=ww2quNC3X3O7SeZm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>            </div>

            <Quiz title="Unit 1 Complete Quiz" questions={module5Quiz} subject="ES" unitId={1} moduleId={5} />

            <div className="reference-section">
              <h3>Unit 1 Summary</h3>
              <div className="theory-box">
                <p><strong>Coverage:</strong> Ecosystem Structure, Function, and Energy Flow</p>
                <p>This unit has provided a comprehensive foundation in environmental science, covering ecosystem concepts, energy flow, and biodiversity patterns essential for understanding environmental challenges.</p>
              </div>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Food Chains and Food Webs</button>
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