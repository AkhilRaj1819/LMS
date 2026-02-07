'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit4Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
}

const Unit4: React.FC<Unit4Props> = ({ currentModule, setCurrentModule }) => {
  const module1Quiz = [
    {
      question: "What is a key component of sustainable living?",
      options: ["Wasting resources", "Energy conservation and water conservation", "Ignoring environment", "Using more plastics"],
      correctAnswer: 1,
      explanation: "Sustainable living involves energy conservation (solar panels, LED lights), water conservation (rainwater harvesting), waste reduction, and sustainable food practices."
    },
    {
      question: "Which lighting option is most energy-efficient?",
      options: ["Incandescent bulbs", "LED bulbs", "Halogen lights", "Fluorescent tubes"],
      correctAnswer: 1,
      explanation: "LED bulbs are the most energy-efficient lighting option, consuming significantly less electricity and lasting longer than traditional bulbs."
    },
    {
      question: "What is composting?",
      options: ["Burning waste", "Converting organic waste to fertilizer", "Throwing waste anywhere", "Burying plastic"],
      correctAnswer: 1,
      explanation: "Composting is the process of converting organic waste (food scraps, garden waste) into nutrient-rich fertilizer for plants."
    },
    {
      question: "Which is a sustainable transportation option?",
      options: ["Driving alone daily", "Using public transport or cycling", "Wasting fuel", "Never maintaining vehicle"],
      correctAnswer: 1,
      explanation: "Sustainable transportation includes using public transport, carpooling, cycling, walking, or electric vehicles to reduce carbon emissions."
    },
    {
      question: "What is a benefit of sustainable living?",
      options: ["Increases pollution", "Reduces environmental impact and saves money", "Wastes resources", "Harms health"],
      correctAnswer: 1,
      explanation: "Sustainable living reduces environmental pollution, saves money on utilities, improves health, preserves resources, and creates positive community impact."
    }
  ];

  const module2Quiz = [
    {
      question: "Why is regular vehicle maintenance important?",
      options: ["Waste money", "Ensures safety and reduces emissions", "Damages vehicle", "No benefits"],
      correctAnswer: 1,
      explanation: "Regular vehicle maintenance ensures safety, reduces emissions, improves fuel efficiency, extends vehicle life, and prevents costly repairs."
    },
    {
      question: "How often should tire pressure be checked?",
      options: ["Never", "Weekly", "Yearly", "Only when flat"],
      correctAnswer: 1,
      explanation: "Tire pressure should be checked weekly to ensure safety, improve fuel efficiency, and extend tire life. Maintain recommended PSI levels."
    },
    {
      question: "What does PUC certificate stand for?",
      options: ["Public Use Certificate", "Pollution Under Control", "Personal Use Card", "Private User Certificate"],
      correctAnswer: 1,
      explanation: "PUC stands for Pollution Under Control certificate, which certifies that a vehicle's emissions are within permissible limits."
    },
    {
      question: "Which practice improves fuel efficiency?",
      options: ["Sudden acceleration", "Maintaining steady speed", "Overloading vehicle", "Ignoring maintenance"],
      correctAnswer: 1,
      explanation: "Maintaining steady speed, avoiding sudden acceleration, removing unnecessary weight, and regular maintenance improve fuel efficiency."
    },
    {
      question: "What should be checked in the brake system?",
      options: ["Nothing", "Brake pads, fluid, and lines", "Only color", "Just sound"],
      correctAnswer: 1,
      explanation: "Brake system maintenance includes checking brake pads for wear, maintaining proper brake fluid levels, inspecting brake lines for leaks, and testing functionality."
    }
  ];

  const module3Quiz = [
    {
      question: "What is the primary goal of road safety campaigns?",
      options: ["Increase accidents", "Raise awareness and promote safe practices", "Sell vehicles", "Create traffic"],
      correctAnswer: 1,
      explanation: "Road safety campaigns aim to raise awareness about traffic rules, promote safe driving practices, and reduce accidents through education."
    },
    {
      question: "Which safety equipment is mandatory for two-wheeler riders?",
      options: ["Sunglasses", "Helmet", "Gloves only", "Nothing"],
      correctAnswer: 1,
      explanation: "Helmets are mandatory safety equipment for two-wheeler riders, protecting against head injuries in accidents."
    },
    {
      question: "What is the first action in earthquake safety?",
      options: ["Run outside", "Drop, cover, and hold on", "Use elevator", "Stand near windows"],
      correctAnswer: 1,
      explanation: "During an earthquake, the correct action is to Drop (to hands and knees), Cover (head and neck under sturdy furniture), and Hold on until shaking stops."
    },
    {
      question: "Which is a fire safety practice?",
      options: ["Overload electrical outlets", "Keep fire extinguishers and know evacuation routes", "Block exits", "Ignore smoke detectors"],
      correctAnswer: 1,
      explanation: "Fire safety includes keeping fire extinguishers accessible, knowing evacuation routes, installing smoke detectors, and avoiding electrical overload."
    },
    {
      question: "What should be avoided while driving?",
      options: ["Wearing seat belt", "Texting and drunk driving", "Following traffic rules", "Using mirrors"],
      correctAnswer: 1,
      explanation: "Texting while driving and drunk driving are extremely dangerous and should be strictly avoided to prevent accidents."
    }
  ];

  const module4Quiz = [
    {
      question: "What is the purpose of tree plantation drives?",
      options: ["Deforestation", "Environmental conservation and air purification", "Waste land", "Create pollution"],
      correctAnswer: 1,
      explanation: "Tree plantation drives promote environmental conservation, improve air quality, reduce urban heat, enhance biodiversity, and combat climate change."
    },
    {
      question: "Which tree is known for high oxygen production?",
      options: ["Plastic tree", "Peepal tree", "Dead tree", "Artificial tree"],
      correctAnswer: 1,
      explanation: "Peepal tree is known for high oxygen production and provides excellent shade, making it ideal for plantation drives."
    },
    {
      question: "What size pit should be dug for tree plantation?",
      options: ["1x1x1 feet", "2x2x2 feet", "No pit needed", "10x10x10 feet"],
      correctAnswer: 1,
      explanation: "A pit of 2x2x2 feet should be dug for tree plantation to provide adequate space for root growth and proper establishment."
    },
    {
      question: "What is a green campus initiative?",
      options: ["Increase plastic use", "Plastic-free campus and energy saving", "Waste water", "Cut all trees"],
      correctAnswer: 1,
      explanation: "Green campus initiatives include plastic-free policies, paper conservation, energy saving with LEDs/solar, water conservation, and waste segregation."
    },
    {
      question: "What is vertical gardening?",
      options: ["Underground farming", "Wall-mounted planters for space efficiency", "Cutting trees", "Wasting space"],
      correctAnswer: 1,
      explanation: "Vertical gardening uses wall-mounted planters to grow plants efficiently in limited space, ideal for urban areas."
    }
  ];

  const module5Quiz = [
    {
      question: "What is the main objective of clean campus programs?",
      options: ["Create mess", "Maintain cleanliness and promote hygiene", "Waste resources", "Ignore cleanliness"],
      correctAnswer: 1,
      explanation: "Clean campus programs aim to maintain cleanliness and hygiene, develop responsibility, reduce waste, promote sustainability, and create a healthy environment."
    },
    {
      question: "How should waste be managed on campus?",
      options: ["Mix all waste", "Segregate into wet, dry, and hazardous", "Throw anywhere", "Burn everything"],
      correctAnswer: 1,
      explanation: "Proper waste management requires segregation into wet (organic), dry (recyclable), and hazardous waste using separate bins for proper disposal."
    },
    {
      question: "What is Swachh Bharat Mission?",
      options: ["Pollution campaign", "National cleanliness campaign", "Waste creation", "Littering program"],
      correctAnswer: 1,
      explanation: "Swachh Bharat Mission is India's national cleanliness campaign promoting toilet usage, hygiene, solid waste management, and behavioral change."
    },
    {
      question: "What is Shramdaan?",
      options: ["Paid work", "Voluntary labor for cleaning", "Avoiding work", "Creating waste"],
      correctAnswer: 1,
      explanation: "Shramdaan means voluntary labor or contribution, where people voluntarily participate in cleaning and community service activities."
    },
    {
      question: "What should be used for eco-friendly cleaning?",
      options: ["Harmful chemicals", "Natural products like vinegar and baking soda", "Toxic substances", "Polluting agents"],
      correctAnswer: 1,
      explanation: "Eco-friendly cleaning uses natural products like vinegar, baking soda, and natural disinfectants instead of harmful chemicals."
    }
  ];
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.1</div>
              <div className="lesson-title-main">
                <h1>Eco-Friendly Approaches for Sustainable Living</h1>
              </div>
            </div>
            
            <section className="content-section">
              <div className="module-image">
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sustainable living practices" className="content-image" />
                <p className="image-caption">Eco-friendly approaches for sustainable living</p>
              </div>
              
              <h3>Virtual Demonstration of Eco-Friendly Approaches</h3>
              <p>Sustainable living involves adopting practices that reduce environmental impact and promote ecological balance.</p>
              
              <h4>Eco-Friendly Living Examples:</h4>
              
              <div className="eco-gallery">
                <div className="eco-image">
                  <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Solar panel installation" className="eco-photo" />
                  <p>Solar energy for sustainable living</p>
                </div>
                <div className="eco-image">
                  <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Vertical garden" className="eco-photo" />
                  <p>Space-efficient vertical gardening</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Sustainable Living Practices</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/WMrpByDbHZE?si=CalOc6HND_0cnvXL" 
                    title="Sustainable Living Tips and Practices"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h4>Key Eco-Friendly Approaches:</h4>
              
              <h5>1. Energy Conservation</h5>
              <ul>
                <li><strong>Solar Energy:</strong> Install solar panels for electricity</li>
                <li><strong>LED Lighting:</strong> Replace traditional bulbs with LEDs</li>
                <li><strong>Energy-Efficient Appliances:</strong> Use 5-star rated devices</li>
                <li><strong>Natural Lighting:</strong> Maximize daylight usage</li>
                <li><strong>Switch Off:</strong> Turn off unused lights and appliances</li>
              </ul>

              <h5>2. Water Conservation</h5>
              <ul>
                <li><strong>Rainwater Harvesting:</strong> Collect and store rainwater</li>
                <li><strong>Drip Irrigation:</strong> Efficient watering for gardens</li>
                <li><strong>Fix Leaks:</strong> Repair dripping taps immediately</li>
                <li><strong>Reuse Water:</strong> Use kitchen water for plants</li>
                <li><strong>Low-Flow Fixtures:</strong> Install water-saving taps</li>
              </ul>

              <h5>3. Waste Reduction</h5>
              <ul>
                <li><strong>Composting:</strong> Convert organic waste to fertilizer</li>
                <li><strong>Recycling:</strong> Segregate and recycle materials</li>
                <li><strong>Reduce Plastic:</strong> Avoid single-use plastics</li>
                <li><strong>Reusable Items:</strong> Use cloth bags, steel bottles</li>
                <li><strong>Minimal Packaging:</strong> Choose products with less packaging</li>
              </ul>

              <h5>4. Sustainable Food Practices</h5>
              <ul>
                <li><strong>Organic Farming:</strong> Grow vegetables without chemicals</li>
                <li><strong>Local Produce:</strong> Buy from local farmers</li>
                <li><strong>Reduce Meat:</strong> Plant-based diet options</li>
                <li><strong>Zero Waste Cooking:</strong> Use all parts of vegetables</li>
                <li><strong>Home Gardening:</strong> Kitchen gardens and terrace farming</li>
              </ul>

              <div className="example-box">
                <h5>Virtual Demonstration Topics</h5>
                <ul>
                  <li>How to set up a home composting system</li>
                  <li>DIY solar cooker demonstration</li>
                  <li>Creating a vertical garden</li>
                  <li>Making natural cleaning products</li>
                  <li>Water-saving techniques at home</li>
                  <li>Upcycling waste materials</li>
                </ul>
              </div>

              <h4>Green Building Concepts:</h4>
              <ul>
                <li><strong>Natural Ventilation:</strong> Design for air circulation</li>
                <li><strong>Green Roofs:</strong> Rooftop gardens for insulation</li>
                <li><strong>Sustainable Materials:</strong> Bamboo, recycled materials</li>
                <li><strong>Passive Solar Design:</strong> Optimize sun exposure</li>
                <li><strong>Greywater Systems:</strong> Reuse household water</li>
              </ul>

              <h4>Sustainable Transportation:</h4>
              <ul>
                <li>Use public transport</li>
                <li>Carpool with colleagues</li>
                <li>Cycle or walk for short distances</li>
                <li>Electric vehicles</li>
                <li>Maintain vehicles for efficiency</li>
              </ul>

              <h4>Digital Tools for Sustainability:</h4>
              <ul>
                <li>Energy monitoring apps</li>
                <li>Carbon footprint calculators</li>
                <li>Sustainable living guides</li>
                <li>Virtual workshops and webinars</li>
                <li>Online communities for eco-living</li>
              </ul>

              <h4>Benefits of Sustainable Living:</h4>
              <ul>
                <li>Reduces environmental pollution</li>
                <li>Saves money on utilities</li>
                <li>Improves health and well-being</li>
                <li>Preserves resources for future</li>
                <li>Creates positive community impact</li>
              </ul>
            </section>

            <Quiz title="Module 4.1: Sustainable Living" questions={module1Quiz} subject="NSS" unitId={4} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Vehicle Maintenance →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.2</div>
              <div className="lesson-title-main">
                <h1>Vehicle Maintenance Workshops</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Importance of Vehicle Maintenance</h3>
              <p>Regular vehicle maintenance ensures safety, reduces emissions, improves fuel efficiency, and extends vehicle life.</p>
              
              <h4>Basic Vehicle Maintenance:</h4>
              
              <h5>1. Engine Care</h5>
              <ul>
                <li><strong>Oil Changes:</strong> Regular engine oil replacement</li>
                <li><strong>Air Filter:</strong> Clean or replace periodically</li>
                <li><strong>Coolant Levels:</strong> Check and maintain proper levels</li>
                <li><strong>Spark Plugs:</strong> Replace as per schedule</li>
                <li><strong>Battery:</strong> Check terminals and charge</li>
              </ul>

              <h5>2. Tire Maintenance</h5>
              <ul>
                <li><strong>Tire Pressure:</strong> Check weekly, maintain recommended PSI</li>
                <li><strong>Tread Depth:</strong> Ensure adequate grip</li>
                <li><strong>Rotation:</strong> Rotate tires every 10,000 km</li>
                <li><strong>Alignment:</strong> Check wheel alignment</li>
                <li><strong>Balancing:</strong> Balance wheels for smooth ride</li>
              </ul>

              <h5>3. Brake System</h5>
              <ul>
                <li><strong>Brake Pads:</strong> Check wear and replace</li>
                <li><strong>Brake Fluid:</strong> Maintain proper levels</li>
                <li><strong>Brake Lines:</strong> Inspect for leaks</li>
                <li><strong>Parking Brake:</strong> Test functionality</li>
              </ul>

              <h5>4. Lights and Electrical</h5>
              <ul>
                <li>Check all lights (headlights, indicators, brake lights)</li>
                <li>Replace burnt bulbs immediately</li>
                <li>Clean light covers</li>
                <li>Test horn and wipers</li>
              </ul>

              <div className="example-box">
                <h5>Workshop Activities</h5>
                <ul>
                  <li>Demonstrate oil checking and changing</li>
                  <li>Teach tire pressure measurement</li>
                  <li>Show brake inspection techniques</li>
                  <li>Practice basic troubleshooting</li>
                  <li>Hands-on maintenance tasks</li>
                </ul>
              </div>

              <h4>Fuel Efficiency Tips:</h4>
              <ul>
                <li>Maintain steady speed, avoid sudden acceleration</li>
                <li>Remove unnecessary weight from vehicle</li>
                <li>Keep windows closed at high speeds</li>
                <li>Use cruise control on highways</li>
                <li>Turn off engine during long waits</li>
                <li>Plan routes to avoid traffic</li>
              </ul>

              <h4>Emission Control:</h4>
              <ul>
                <li><strong>PUC Certificate:</strong> Get pollution check regularly</li>
                <li><strong>Catalytic Converter:</strong> Ensure proper functioning</li>
                <li><strong>Exhaust System:</strong> Check for leaks</li>
                <li><strong>Fuel Quality:</strong> Use recommended fuel grade</li>
                <li><strong>Engine Tuning:</strong> Regular servicing</li>
              </ul>

              <h4>Two-Wheeler Maintenance:</h4>
              <ul>
                <li>Chain lubrication and tension</li>
                <li>Brake cable adjustment</li>
                <li>Clutch cable maintenance</li>
                <li>Carburetor cleaning</li>
                <li>Regular servicing every 3000 km</li>
              </ul>

              <h4>Safety Checks:</h4>
              <ul>
                <li>Seat belts and airbags functional</li>
                <li>Mirrors properly adjusted</li>
                <li>First aid kit available</li>
                <li>Fire extinguisher in vehicle</li>
                <li>Emergency tools (jack, wrench, spare tire)</li>
              </ul>

              <h4>Environmental Benefits:</h4>
              <ul>
                <li>Well-maintained vehicles emit less pollution</li>
                <li>Better fuel efficiency reduces carbon footprint</li>
                <li>Proper disposal of oil and fluids</li>
                <li>Longer vehicle life reduces waste</li>
              </ul>

              <h4>Workshop Format:</h4>
              <ul>
                <li>Invite automobile experts/mechanics</li>
                <li>Demonstrate on actual vehicles</li>
                <li>Provide maintenance checklists</li>
                <li>Q&A session with participants</li>
                <li>Distribute maintenance guides</li>
              </ul>
            </section>

            <Quiz title="Module 4.2: Vehicle Maintenance" questions={module2Quiz} subject="NSS" unitId={4} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Eco-Friendly Approaches</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Safety Campaign →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.3</div>
              <div className="lesson-title-main">
                <h1>Safety Campaign Projects</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Conducting Safety Campaigns</h3>
              <p>Safety campaigns raise awareness about various safety issues and promote safe practices in daily life.</p>
              
              <h4>Types of Safety Campaigns:</h4>
              
              <h5>1. Road Safety</h5>
              <ul>
                <li><strong>Traffic Rules:</strong> Educate about signals, signs, and regulations</li>
                <li><strong>Helmet Usage:</strong> Promote helmet wearing for two-wheelers</li>
                <li><strong>Seat Belts:</strong> Emphasize importance in cars</li>
                <li><strong>Drunk Driving:</strong> Awareness about dangers</li>
                <li><strong>Speed Limits:</strong> Encourage adherence to limits</li>
                <li><strong>Pedestrian Safety:</strong> Use zebra crossings, footpaths</li>
              </ul>

              <h5>2. Fire Safety</h5>
              <ul>
                <li><strong>Fire Prevention:</strong> Avoid electrical overload, gas leaks</li>
                <li><strong>Fire Extinguishers:</strong> Proper usage and placement</li>
                <li><strong>Evacuation Plans:</strong> Emergency exit routes</li>
                <li><strong>Smoke Detectors:</strong> Installation and maintenance</li>
                <li><strong>Kitchen Safety:</strong> Safe cooking practices</li>
              </ul>

              <h5>3. Workplace Safety</h5>
              <ul>
                <li><strong>PPE Usage:</strong> Personal protective equipment</li>
                <li><strong>Ergonomics:</strong> Proper posture and workspace setup</li>
                <li><strong>Chemical Safety:</strong> Handling hazardous materials</li>
                <li><strong>Emergency Procedures:</strong> First aid and evacuation</li>
                <li><strong>Electrical Safety:</strong> Proper wiring and grounding</li>
              </ul>

              <h5>4. Home Safety</h5>
              <ul>
                <li><strong>Child Safety:</strong> Childproofing homes</li>
                <li><strong>Elderly Care:</strong> Fall prevention, accessibility</li>
                <li><strong>Gas Safety:</strong> LPG handling and leak detection</li>
                <li><strong>Water Safety:</strong> Swimming pool precautions</li>
                <li><strong>Security:</strong> Locks, alarms, lighting</li>
              </ul>

              <div className="example-box">
                <h5>Campaign Activities</h5>
                <ul>
                  <li>Street plays on road safety</li>
                  <li>Distribution of safety pamphlets</li>
                  <li>Helmet distribution drives</li>
                  <li>Fire drill demonstrations</li>
                  <li>Safety quiz competitions</li>
                  <li>Poster making on safety themes</li>
                  <li>Mock accident scenarios</li>
                </ul>
              </div>

              <h4>Road Safety Campaign Ideas:</h4>
              <ul>
                <li>Set up awareness stalls at traffic signals</li>
                <li>Distribute reflective stickers</li>
                <li>Organize road safety rallies</li>
                <li>Screen road safety videos</li>
                <li>Invite traffic police for talks</li>
                <li>Create safety slogans and banners</li>
              </ul>

              <h4>Disaster Preparedness:</h4>
              <ul>
                <li><strong>Earthquake Safety:</strong> Drop, cover, hold on</li>
                <li><strong>Flood Preparedness:</strong> Emergency kits, evacuation</li>
                <li><strong>Cyclone Safety:</strong> Secure structures, stay indoors</li>
                <li><strong>Emergency Contacts:</strong> Police, fire, ambulance numbers</li>
                <li><strong>First Aid Training:</strong> Basic medical response</li>
              </ul>

              <h4>Digital Safety:</h4>
              <ul>
                <li>Cyber security awareness</li>
                <li>Safe internet practices</li>
                <li>Privacy protection</li>
                <li>Avoiding online scams</li>
                <li>Social media safety</li>
              </ul>

              <h4>Campaign Implementation:</h4>
              <ol>
                <li>Identify target audience and location</li>
                <li>Prepare educational materials</li>
                <li>Coordinate with authorities (police, fire dept)</li>
                <li>Organize demonstrations and activities</li>
                <li>Distribute safety equipment/materials</li>
                <li>Document campaign impact</li>
                <li>Follow-up and evaluation</li>
              </ol>

              <h4>Safety Slogans:</h4>
              <ul>
                <li>"Safety First, Always"</li>
                <li>"Better Safe Than Sorry"</li>
                <li>"Your Life, Your Responsibility"</li>
                <li>"Speed Thrills But Kills"</li>
                <li>"Don't Text and Drive"</li>
                <li>"Helmet - Your Lifeline"</li>
              </ul>

              <h4>Measuring Campaign Success:</h4>
              <ul>
                <li>Number of people reached</li>
                <li>Materials distributed</li>
                <li>Behavioral changes observed</li>
                <li>Feedback from participants</li>
                <li>Media coverage received</li>
                <li>Reduction in accidents (long-term)</li>
              </ul>
            </section>

            <Quiz title="Module 4.3: Safety Campaigns" questions={module3Quiz} subject="NSS" unitId={4} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Vehicle Maintenance</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Go Green Activities →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.4</div>
              <div className="lesson-title-main">
                <h1>Go Green Activities</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Go Green Initiatives</h3>
              <p>Go Green activities promote environmental conservation and encourage sustainable practices in communities.</p>
              
           
              
              <div className="video-section">
                <h6>How to Plant Trees Properly</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/-k6j8lqQgTk?si=5eEwf0nr4QREwztf"
                    title="Tree Plantation Guide - Step by Step"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h4>Tree Plantation Drives:</h4>
              
              <h5>Planning Tree Plantation:</h5>
              <ul>
                <li><strong>Site Selection:</strong> Identify suitable locations</li>
                <li><strong>Species Selection:</strong> Choose native, climate-appropriate trees</li>
                <li><strong>Sapling Procurement:</strong> Get healthy saplings from nurseries</li>
                <li><strong>Tools & Materials:</strong> Spades, water, fertilizer, guards</li>
                <li><strong>Community Involvement:</strong> Mobilize volunteers</li>
              </ul>

              <h5>Best Trees to Plant:</h5>
              <ul>
                <li><strong>Neem:</strong> Medicinal, air purifying</li>
                <li><strong>Peepal:</strong> Oxygen production, shade</li>
                <li><strong>Banyan:</strong> Large canopy, ecosystem support</li>
                <li><strong>Mango:</strong> Fruit bearing, shade</li>
                <li><strong>Gulmohar:</strong> Ornamental, shade</li>
                <li><strong>Bamboo:</strong> Fast growing, versatile</li>
              </ul>

              <h5>Plantation Process:</h5>
              <ol>
                <li>Dig pit (2x2x2 feet)</li>
                <li>Add compost and fertilizer</li>
                <li>Place sapling carefully</li>
                <li>Fill soil and compact gently</li>
                <li>Water thoroughly</li>
                <li>Install tree guard</li>
                <li>Mark with identification tag</li>
              </ol>

              <div className="example-box">
                <h5>Tree Plantation Event Plan</h5>
                <p><strong>Target:</strong> Plant 100 trees</p>
                <p><strong>Location:</strong> School campus, roadside, park</p>
                <p><strong>Participants:</strong> Students, community members</p>
                <p><strong>Activities:</strong></p>
                <ul>
                  <li>Inauguration by chief guest</li>
                  <li>Distribution of saplings</li>
                  <li>Plantation in designated areas</li>
                  <li>Pledge for tree care</li>
                  <li>Refreshments</li>
                </ul>
              </div>

              <h4>Green Campus Initiatives:</h4>
              <ul>
                <li><strong>Plastic-Free Campus:</strong> Ban single-use plastics</li>
                <li><strong>Paper Conservation:</strong> Digital documentation, reuse paper</li>
                <li><strong>Energy Saving:</strong> LED lights, solar panels</li>
                <li><strong>Water Conservation:</strong> Rainwater harvesting, drip irrigation</li>
                <li><strong>Waste Segregation:</strong> Separate bins for different waste</li>
                <li><strong>Composting:</strong> Convert organic waste to fertilizer</li>
              </ul>

              <h4>Urban Greening:</h4>
              <ul>
                <li><strong>Vertical Gardens:</strong> Wall-mounted planters</li>
                <li><strong>Terrace Gardens:</strong> Rooftop cultivation</li>
                <li><strong>Balcony Gardens:</strong> Container gardening</li>
                <li><strong>Community Gardens:</strong> Shared green spaces</li>
                <li><strong>Street Beautification:</strong> Plant trees along roads</li>
              </ul>

              <h4>Green Awareness Activities:</h4>
              <ul>
                <li>Organize nature walks and eco-tours</li>
                <li>Conduct workshops on organic farming</li>
                <li>Screen environmental documentaries</li>
                <li>Celebrate World Environment Day</li>
                <li>Create green clubs in institutions</li>
                <li>Organize eco-friendly competitions</li>
              </ul>

              <h4>Biodiversity Conservation:</h4>
              <ul>
                <li>Create butterfly gardens</li>
                <li>Install bird feeders and baths</li>
                <li>Build insect hotels</li>
                <li>Protect local wildlife habitats</li>
                <li>Avoid pesticides and chemicals</li>
              </ul>

              <h4>Green Transportation:</h4>
              <ul>
                <li>Promote cycling to campus</li>
                <li>Organize car-free days</li>
                <li>Encourage carpooling</li>
                <li>Use public transport</li>
                <li>Walk for short distances</li>
              </ul>

              <h4>Maintenance and Care:</h4>
              <ul>
                <li>Regular watering schedule</li>
                <li>Weeding and mulching</li>
                <li>Pruning when necessary</li>
                <li>Pest and disease management</li>
                <li>Monitoring growth and survival</li>
                <li>Adopt-a-tree programs</li>
              </ul>

              <h4>Benefits of Go Green Activities:</h4>
              <ul>
                <li>Improves air quality</li>
                <li>Reduces urban heat</li>
                <li>Enhances biodiversity</li>
                <li>Provides shade and beauty</li>
                <li>Combats climate change</li>
                <li>Creates environmental awareness</li>
              </ul>
            </section>

            <Quiz title="Module 4.4: Go Green Activities" questions={module4Quiz} subject="NSS" unitId={4} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Safety Campaign</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Clean Campus Program →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.5</div>
              <div className="lesson-title-main">
                <h1>Clean Campus Program</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Maintaining Clean Campus</h3>
              <p>Clean campus programs promote hygiene, environmental responsibility, and create a healthy learning environment.</p>
              
              <h4>Objectives:</h4>
              <ul>
                <li>Maintain cleanliness and hygiene</li>
                <li>Develop sense of responsibility</li>
                <li>Reduce waste generation</li>
                <li>Promote sustainable practices</li>
                <li>Create pleasant environment</li>
              </ul>

              <h4>Clean Campus Activities:</h4>
              
              <h5>1. Regular Cleaning Drives</h5>
              <ul>
                <li><strong>Daily Cleaning:</strong> Classrooms, corridors, washrooms</li>
                <li><strong>Weekly Drives:</strong> Campus grounds, gardens</li>
                <li><strong>Monthly Campaigns:</strong> Deep cleaning, painting</li>
                <li><strong>Special Drives:</strong> Before festivals, events</li>
              </ul>

              <h5>2. Waste Management</h5>
              <ul>
                <li><strong>Segregation:</strong> Separate bins for wet, dry, hazardous waste</li>
                <li><strong>Collection:</strong> Regular waste pickup schedule</li>
                <li><strong>Disposal:</strong> Proper disposal through authorized agencies</li>
                <li><strong>Recycling:</strong> Send recyclables to recycling units</li>
                <li><strong>Composting:</strong> Convert organic waste to compost</li>
              </ul>

              <h5>3. Toilet Cleanliness</h5>
              <ul>
                <li>Regular cleaning and disinfection</li>
                <li>Adequate water and soap supply</li>
                <li>Proper ventilation and lighting</li>
                <li>Sanitary napkin disposal bins</li>
                <li>Maintenance of fixtures</li>
                <li>Display hygiene instructions</li>
              </ul>

              <div className="example-box">
                <h5>Weekly Clean Campus Schedule</h5>
                <p><strong>Monday:</strong> Classroom cleaning</p>
                <p><strong>Tuesday:</strong> Corridor and staircase cleaning</p>
                <p><strong>Wednesday:</strong> Garden and lawn maintenance</p>
                <p><strong>Thursday:</strong> Washroom deep cleaning</p>
                <p><strong>Friday:</strong> Campus grounds and parking</p>
                <p><strong>Saturday:</strong> Special areas (labs, library)</p>
              </div>

              <h4>Swachh Bharat Mission Integration:</h4>
              <ul>
                <li>Align with national cleanliness campaign</li>
                <li>Promote toilet usage and hygiene</li>
                <li>Eliminate open defecation</li>
                <li>Solid waste management</li>
                <li>Behavioral change communication</li>
              </ul>

              <h4>Student Involvement:</h4>
              <ul>
                <li><strong>Cleanliness Committees:</strong> Student-led groups</li>
                <li><strong>Duty Rosters:</strong> Rotating cleaning responsibilities</li>
                <li><strong>Monitoring Teams:</strong> Check and report issues</li>
                <li><strong>Awareness Campaigns:</strong> Posters, announcements</li>
                <li><strong>Competitions:</strong> Cleanest classroom awards</li>
              </ul>

              <h4>Infrastructure Requirements:</h4>
              <ul>
                <li>Adequate dustbins in all areas</li>
                <li>Cleaning tools and supplies</li>
                <li>Hand washing stations</li>
                <li>Waste collection vehicles</li>
                <li>Composting pits</li>
                <li>Recycling collection points</li>
              </ul>

              <h4>Hygiene Practices:</h4>
              <ul>
                <li><strong>Personal Hygiene:</strong> Handwashing, cleanliness</li>
                <li><strong>Food Hygiene:</strong> Clean cafeteria, safe food handling</li>
                <li><strong>Water Hygiene:</strong> Clean drinking water facilities</li>
                <li><strong>Surroundings:</strong> No littering, proper disposal</li>
              </ul>

              <h4>Cleanliness Campaigns:</h4>
              <ul>
                <li><strong>Swachhata Pakhwada:</strong> Fortnight-long cleanliness drive</li>
                <li><strong>Cleanliness Pledge:</strong> Mass oath-taking ceremony</li>
                <li><strong>Shramdaan:</strong> Voluntary labor for cleaning</li>
                <li><strong>Competitions:</strong> Best maintained area awards</li>
                <li><strong>Awareness Programs:</strong> Talks, workshops, demonstrations</li>
              </ul>

              <h4>Monitoring and Evaluation:</h4>
              <ul>
                <li>Regular inspections by committees</li>
                <li>Cleanliness rating system</li>
                <li>Feedback from students and staff</li>
                <li>Photographic documentation</li>
                <li>Monthly review meetings</li>
                <li>Corrective actions for issues</li>
              </ul>

              <h4>Behavioral Change:</h4>
              <ul>
                <li>Promote "use dustbin" culture</li>
                <li>Discourage spitting and littering</li>
                <li>Encourage reporting of unclean areas</li>
                <li>Reward cleanliness champions</li>
                <li>Lead by example</li>
              </ul>

              <h4>Green Cleaning Practices:</h4>
              <ul>
                <li>Use eco-friendly cleaning products</li>
                <li>Minimize water usage</li>
                <li>Natural disinfectants (vinegar, baking soda)</li>
                <li>Avoid harmful chemicals</li>
                <li>Proper disposal of cleaning waste</li>
              </ul>

              <h4>Long-term Benefits:</h4>
              <ul>
                <li>Healthy and disease-free environment</li>
                <li>Enhanced aesthetic appeal</li>
                <li>Improved productivity and morale</li>
                <li>Positive institutional image</li>
                <li>Environmental sustainability</li>
                <li>Life-long cleanliness habits</li>
              </ul>
            </section>

            <Quiz title="Module 4.5: Clean Campus Program" questions={module5Quiz} subject="NSS" unitId={4} moduleId={5} />

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://swachhbharatmission.gov.in/" target="_blank" rel="noopener noreferrer">Swachh Bharat Mission</a></li>
                <li><a href="https://www.nss.gov.in/" target="_blank" rel="noopener noreferrer">NSS Official Website</a></li>
                <li><a href="https://moef.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Environment</a></li>
                <li><a href="https://morth.nic.in/" target="_blank" rel="noopener noreferrer">Road Safety - Ministry of Road Transport</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Go Green Activities</button>
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