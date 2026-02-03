// COMPLETE ENVIRONMENTAL SCIENCE COURSE DATA - ALL 5 UNITS
// This file contains the complete syllabus implementation

export const COMPLETE_COURSE_DATA = {
  courseInfo: {
    title: "Environmental Science",
    code: "2401160101",
    regulation: "GGUBT-24",
    semester: "II B.Tech - II Semester",
    credits: "2-0-0-2",
    hours: "28 Contact Hours"
  },
  
  units: [
    // ==================== UNIT 1: ENVIRONMENT AND ECOSYSTEM ====================
    {
      id: 1,
      title: "Environment and Ecosystem",
      modules: [
        // Module 1: Definition, Scope, Importance
        {
          id: "env-def",
          title: "Definition, Scope and Importance - Public Awareness",
          content: {
            definition: "🌍 Environment is the sum total of all biotic (living) and abiotic (non-living) factors that surround and influence an organism. It encompasses the atmosphere, hydrosphere, lithosphere, and biosphere - forming an integrated system essential for life.",
            simpleExplanation: "As engineers, think of the environment as a complex system with multiple interconnected subsystems - each component affects others through feedback loops, energy transfers, and material cycles.",
            scope: "Environmental Science is an interdisciplinary field integrating multiple domains to solve complex environmental challenges:",
            scopeDetails: [
              "🔬 Physical Sciences: Thermodynamics, fluid mechanics, atmospheric chemistry, geophysics",
              "🧬 Life Sciences: Ecology, microbiology, genetics, biochemistry",
              "💻 Engineering & Technology: Environmental engineering, remote sensing, GIS, modeling",
              "👥 Social Sciences: Environmental economics, policy, ethics, sociology",
              "📊 Mathematics & Statistics: Environmental modeling, risk assessment, data analysis"
            ],
            importance: [
              "🏗️ Critical for sustainable engineering design and development",
              "⚖️ Ensures compliance with environmental regulations and standards",
              "🏭 Enables pollution control and waste management in industries",
              "♻️ Facilitates resource optimization and circular economy principles",
              "🌡️ Addresses climate change through engineering solutions",
              "💡 Drives innovation in clean technology and renewable energy",
              "📊 Supports environmental impact assessment (EIA) for projects"
            ],
            publicAwareness: [
              "📺 Environmental education programs in schools and colleges",
              "🌳 Community tree plantation and green belt development",
              "♻️ Waste segregation and recycling awareness campaigns",
              "🚲 Promoting eco-friendly transportation like cycling",
              "💡 Energy conservation and renewable energy awareness"
            ],
            multidisciplinary: "🎯 Environmental Science is multidisciplinary because it combines Biology, Chemistry, Physics, Geography, and Sociology to solve environmental problems comprehensively!",
            images: [
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
            ],
            videos: ["dQw4w9WgXcQ", "5QxxaVfgQ3k"],
            quiz: {
              questions: [
                { id: "q1", question: "What does Environment include?", options: ["Only plants", "Everything around us - air, water, soil, living things", "Only animals", "Only humans"], correct: 1 },
                { id: "q2", question: "Environmental Science is multidisciplinary because:", options: ["It's difficult", "It combines multiple subjects", "It's new", "It's complex"], correct: 1 },
                { id: "q3", question: "Why is public awareness important?", options: ["For entertainment", "To educate people about environmental protection", "To waste time", "To increase pollution"], correct: 1 }
              ]
            }
          }
        },
        
        // Module 2: Concept of Ecosystem
        {
          id: "ecosystem-concept",
          title: "Concept of Ecosystem",
          content: {
            definition: "🏘️ An ecosystem is like a neighborhood where all living things (plants, animals, bacteria) live together with non-living things (air, water, soil) and help each other survive!",
            simpleExplanation: "Think of a forest as a big apartment building. Trees are the structure, animals are residents, soil is the foundation, and sunlight is the electricity!",
            components: {
              biotic: [
                "🌱 Producers (Green Plants) - Make food using sunlight",
                "🐰 Primary Consumers (Herbivores) - Eat plants",
                "🦅 Secondary Consumers (Carnivores) - Hunt other animals",
                "🍄 Decomposers (Bacteria & Fungi) - Recycle dead matter"
              ],
              abiotic: [
                "🌡️ Temperature - Controls life processes",
                "☀️ Sunlight - Energy source for plants",
                "💧 Water - Essential for all life",
                "🌱 Soil - Provides nutrients",
                "🌬️ Air - Provides oxygen and CO2"
              ]
            },
            images: [
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop"
            ],
            videos: ["hFAOXdXZ5TM", "68tgzVaBW4g"],
            quiz: {
              questions: [
                { id: "q1", question: "What are producers?", options: ["Animals", "Plants that make food", "Decomposers", "Consumers"], correct: 1 },
                { id: "q2", question: "Which is abiotic?", options: ["Trees", "Animals", "Sunlight", "Bacteria"], correct: 2 },
                { id: "q3", question: "Decomposers do what?", options: ["Make food", "Hunt", "Break down dead matter", "Eat plants"], correct: 2 }
              ]
            }
          }
        },
        
        // Module 3: Structure and Function
        {
          id: "ecosystem-structure",
          title: "Structure and Function of Ecosystem",
          content: {
            definition: "🏗️ Ecosystem structure is like a building blueprint - it shows how all components are organized and work together!",
            simpleExplanation: "Think of it as an organization chart where everyone has a specific role to make the system successful!",
            structure: {
              physical: ["🌍 Spatial arrangement", "🏔️ Vertical layers", "🗺️ Horizontal distribution"],
              trophic: ["🥬 Producers", "🐰 Primary consumers", "🦅 Secondary consumers", "🍄 Decomposers"]
            },
            functions: {
              energyFlow: ["☀️ Solar energy capture", "🔄 Energy transfer", "📉 Energy loss (10% rule)"],
              nutrientCycling: ["♻️ Carbon cycle", "💧 Water cycle", "🌱 Nitrogen cycle"]
            },
            images: [
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop"
            ],
            videos: ["hFAOXdXZ5TM", "68tgzVaBW4g"],
            quiz: {
              questions: [
                { id: "q1", question: "Trophic structure refers to:", options: ["Physical arrangement", "Who eats whom", "Temperature", "Water"], correct: 1 },
                { id: "q2", question: "10% rule refers to:", options: ["Species diversity", "Energy transfer", "Water content", "Soil nutrients"], correct: 1 }
              ]
            }
          }
        },
        
        // Module 4: Producers, Consumers, Decomposers
        {
          id: "producers-consumers",
          title: "Producers, Consumers and Decomposers",
          content: {
            definition: "🎭 In nature's theater, every organism has a role! Producers are stage builders, consumers are actors, decomposers are cleanup crew!",
            simpleExplanation: "Like a restaurant: Producers are chefs making food, consumers are customers eating, decomposers are dishwashers cleaning!",
            producers: {
              definition: "🌱 Producers make their own food using sunlight through photosynthesis",
              examples: ["🌳 Trees", "🌾 Grasses", "🦠 Algae", "🌵 Cacti"]
            },
            consumers: {
              primary: ["🐰 Rabbits", "🦌 Deer", "🐄 Cows"],
              secondary: ["🐍 Snakes", "🦅 Hawks", "🐸 Frogs"],
              tertiary: ["🦁 Lions", "🐅 Tigers", "🦈 Sharks"]
            },
            decomposers: {
              definition: "♻️ Nature's recycling team breaking down dead matter",
              examples: ["🍄 Mushrooms", "🦠 Bacteria", "🪱 Earthworms"]
            },
            images: [
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop"
            ],
            videos: ["TE6wqG4nb3M", "hLq2datPo5M"],
            quiz: {
              questions: [
                { id: "q1", question: "Producers make food through:", options: ["Eating", "Photosynthesis", "Hunting", "Decomposing"], correct: 1 },
                { id: "q2", question: "Primary consumers are:", options: ["Carnivores", "Herbivores", "Decomposers", "Producers"], correct: 1 }
              ]
            }
          }
        },
        
        // Module 5: Ecological Succession
        {
          id: "ecological-succession",
          title: "Ecological Succession",
          content: {
            definition: "🌱 Ecological succession is like watching a barren land slowly transform into a lush forest over time!",
            simpleExplanation: "Imagine an empty plot of land. First, small plants grow, then bushes, then small trees, and finally a big forest. This gradual change is succession!",
            types: {
              primary: [
                "🏔️ Starts on bare rock or new land",
                "🌋 Example: After volcanic eruption",
                "🪨 Lichens are first colonizers",
                "⏰ Takes hundreds of years"
              ],
              secondary: [
                "🔥 Starts after disturbance (fire, flood)",
                "🌱 Soil already present",
                "🌾 Grasses appear first",
                "⏰ Takes decades to complete"
              ]
            },
            stages: [
              "1️⃣ Pioneer Stage: Lichens and mosses on bare rock",
              "2️⃣ Grass Stage: Small grasses and herbs",
              "3️⃣ Shrub Stage: Bushes and small plants",
              "4️⃣ Young Forest: Small trees appear",
              "5️⃣ Climax Community: Mature stable forest"
            ],
            images: [
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop"
            ],
            videos: ["4-0MM0M_Xk8", "jZKhYlJb8Ek"],
            quiz: {
              questions: [
                { id: "q1", question: "Primary succession starts on:", options: ["Existing soil", "Bare rock", "Grassland", "Forest"], correct: 1 },
                { id: "q2", question: "Secondary succession occurs after:", options: ["Volcanic eruption", "Fire or flood", "Ice age", "New island formation"], correct: 1 },
                { id: "q3", question: "First colonizers in primary succession:", options: ["Trees", "Grasses", "Lichens", "Shrubs"], correct: 2 }
              ]
            }
          }
        },
        
        // Module 6: Food Chains and Food Webs
        {
          id: "food-chains-webs",
          title: "Food Chains, Food Webs and Ecological Pyramids",
          content: {
            definition: "🍽️ A food chain shows 'who eats whom' in nature - like a cafeteria line where energy passes from one organism to another!",
            simpleExplanation: "Grass grows → Rabbit eats grass → Fox eats rabbit → Bacteria decompose fox. It's nature's way of sharing energy!",
            foodChain: {
              grazing: ["🌱 Starts with green plants", "Example: Grass → Rabbit → Fox → Bacteria"],
              detritus: ["🍂 Starts with dead matter", "Example: Dead leaves → Earthworms → Birds → Decomposers"]
            },
            foodWeb: "🕸️ A food web is multiple interconnected food chains - like a spider web showing all feeding relationships in an ecosystem!",
            pyramids: {
              numbers: ["🔢 Shows number of organisms at each level", "Usually: Many plants → Few herbivores → Fewer carnivores"],
              biomass: ["⚖️ Shows total weight of organisms", "Decreases from producers to top consumers"],
              energy: ["⚡ Shows energy flow", "Only 10% energy transfers to next level", "90% lost as heat"]
            },
            images: [
              "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deaa?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop"
            ],
            videos: ["TE6wqG4nb3M", "hLq2datPo5M"],
            quiz: {
              questions: [
                { id: "q1", question: "Grazing food chain starts with:", options: ["Dead animals", "Green plants", "Carnivores", "Decomposers"], correct: 1 },
                { id: "q2", question: "In energy pyramid, most energy is at:", options: ["Top", "Middle", "Bottom (producers)", "All equal"], correct: 2 },
                { id: "q3", question: "Food web is:", options: ["Single chain", "Multiple interconnected chains", "Only plants", "Only animals"], correct: 1 }
              ]
            }
          }
        },
        
        // Module 7: Energy Flow
        {
          id: "energy-flow",
          title: "Energy Flow in Ecosystem",
          content: {
            definition: "⚡ Energy flow is like electricity flowing through wires - it moves from the sun through plants to animals in one direction!",
            simpleExplanation: "Sun gives energy to plants → Plants give energy to herbivores → Herbivores give energy to carnivores. Energy always flows forward, never backward!",
            tenPercentLaw: "📊 10% Law: Only 10% of energy transfers to the next level. If plants have 1000 units, herbivores get only 100, carnivores get only 10!",
            energyPath: [
              "☀️ Step 1: Sun provides light energy",
              "🌱 Step 2: Plants convert to chemical energy (photosynthesis)",
              "🐰 Step 3: Herbivores get energy by eating plants",
              "🦅 Step 4: Carnivores get energy by eating herbivores",
              "♨️ Step 5: Energy lost as heat at each step"
            ],
            characteristics: [
              "🔄 Unidirectional - flows in one direction only",
              "📉 Decreases at each trophic level",
              "♨️ Lost as heat during transfer",
              "☀️ Sun is ultimate source",
              "🔚 Cannot be recycled"
            ],
            images: [
              "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop"
            ],
            videos: ["TE6wqG4nb3M", "hLq2datPo5M"],
            quiz: {
              questions: [
                { id: "q1", question: "Energy flow in ecosystem is:", options: ["Bidirectional", "Unidirectional", "Circular", "Random"], correct: 1 },
                { id: "q2", question: "10% law states:", options: ["10% species die", "10% energy transfers to next level", "10% water evaporates", "10% soil erodes"], correct: 1 },
                { id: "q3", question: "Ultimate source of energy:", options: ["Plants", "Animals", "Sun", "Soil"], correct: 2 }
              ]
            }
          }
        },
        
        // Module 8: Types of Ecosystems
        {
          id: "types-ecosystems",
          title: "Types of Ecosystems",
          content: {
            definition: "🌍 Ecosystems come in many types - from hot deserts to cold tundras, from deep oceans to high mountains!",
            simpleExplanation: "Just like houses come in different styles (apartments, villas, huts), ecosystems also come in different types based on location and climate!",
            terrestrial: {
              forest: ["🌳 Dense tree cover", "🌧️ High rainfall", "🦁 Rich biodiversity", "Examples: Amazon, Congo"],
              grassland: ["🌾 Dominated by grasses", "🦓 Grazing animals", "🌤️ Moderate rainfall", "Examples: Savannas, Prairies"],
              desert: ["🏜️ Very low rainfall", "🌵 Adapted plants (cacti)", "🦎 Specialized animals", "Examples: Sahara, Thar"],
              tundra: ["❄️ Extremely cold", "🌱 Low vegetation", "🐻‍❄️ Polar bears, penguins", "Examples: Arctic, Antarctic"]
            },
            aquatic: {
              freshwater: ["🏞️ Rivers, lakes, ponds", "💧 Low salt content", "🐟 Fish, frogs, insects", "🌱 Aquatic plants"],
              marine: ["🌊 Oceans and seas", "🧂 High salt content", "🦈 Sharks, whales, coral", "🌍 Covers 71% of Earth"]
            },
            artificial: ["🏙️ Urban ecosystems", "🌾 Agricultural fields", "🏞️ Parks and gardens", "🏊 Aquariums and zoos"],
            images: [
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=400&fit=crop"
            ],
            videos: ["hFAOXdXZ5TM", "68tgzVaBW4g"],
            quiz: {
              questions: [
                { id: "q1", question: "Desert ecosystem has:", options: ["High rainfall", "Low rainfall", "No sunlight", "No animals"], correct: 1 },
                { id: "q2", question: "Marine ecosystems have:", options: ["Fresh water", "Salt water", "No water", "Ice only"], correct: 1 },
                { id: "q3", question: "Tundra is characterized by:", options: ["Hot climate", "Extreme cold", "Heavy rainfall", "Dense forests"], correct: 1 }
              ]
            }
          }
        }
      ]
    },
    
    // ==================== UNIT 2: NATURAL RESOURCES ====================
    {
      id: 2,
      title: "Natural Resources",
      modules: [
        {
          id: "energy-resources",
          title: "Renewable and Non-renewable Energy Resources",
          content: {
            definition: "⚡ Energy resources are nature's power banks! Like your phone battery, some can be recharged (renewable) and some can't (non-renewable).",
            simpleExplanation: "Think of renewable energy as a water fountain that never stops flowing, and non-renewable as a water bottle that empties once you drink it!",
            renewable: {
              definition: "♻️ Renewable energy sources that naturally replenish - they're like infinite power supplies!",
              types: [
                "☀️ Solar Energy: Converts sunlight to electricity using photovoltaic cells (like calculators)",
                "💨 Wind Energy: Wind turbines work like giant fans in reverse - wind spins them to generate power",
                "💧 Hydroelectric: Falling water spins turbines (like water wheels in old mills)",
                "🌋 Geothermal: Uses Earth's internal heat (like natural hot springs)",
                "🌱 Biomass: Organic matter burned for energy (wood, crop waste, biogas)"
              ],
              advantages: ["Never depletes", "Minimal pollution", "Low operating costs", "Energy independence"]
            },
            nonRenewable: {
              definition: "⛽ Finite energy sources formed over millions of years - once used, they're gone!",
              types: [
                "⚫ Coal: Fossilized plants, used in thermal power plants",
                "🛢️ Petroleum/Oil: Fossilized marine organisms, refined into gasoline, diesel",
                "💨 Natural Gas: Cleanest fossil fuel, used for cooking and power generation",
                "☢️ Nuclear: Uranium fission releases massive energy"
              ],
              problems: ["Limited reserves", "Air pollution (CO2, SO2)", "Climate change", "Environmental damage from extraction"]
            },
            engineeringApplications: [
              "🏗️ Solar panels on buildings reduce grid dependency",
              "🌊 Hydroelectric dams provide base load power",
              "⚙️ Wind farms in coastal areas harness strong winds",
              "🔋 Battery storage systems for renewable energy"
            ],
            images: [
              "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop"
            ],
            videos: ["20Vb6hlLQSg", "6fv6J5eDFV4"],
            quiz: {
              questions: [
                { id: "q1", question: "Which is renewable?", options: ["Coal", "Solar", "Oil", "Natural gas"], correct: 1 },
                { id: "q2", question: "Main problem with non-renewable energy:", options: ["Too cheap", "Will run out", "Too clean", "Too efficient"], correct: 1 },
                { id: "q3", question: "Hydroelectric power uses:", options: ["Wind", "Sunlight", "Falling water", "Coal"], correct: 2 }
              ]
            }
          }
        },
        {
          id: "forest-resources",
          title: "Forest Resources and Deforestation",
          content: {
            definition: "🌳 Forests are Earth's lungs and nature's factories - they produce oxygen, regulate climate, and provide countless resources!",
            simpleExplanation: "Imagine forests as multi-purpose factories: oxygen production unit, water purification plant, wildlife habitat, and resource supplier - all in one!",
            uses: [
              "🪵 Timber: Construction, furniture, paper industry",
              "💊 Medicines: 25% of modern medicines come from forest plants",
              "🍎 Food: Fruits, nuts, honey, mushrooms",
              "🌧️ Climate Regulation: Absorb CO2, release O2, control rainfall",
              "💧 Water Cycle: Prevent soil erosion, maintain groundwater"
            ],
            deforestation: {
              causes: [
                "🏗️ Urban expansion and infrastructure development",
                "🌾 Agricultural land conversion",
                "⛏️ Mining operations",
                "🪵 Illegal logging and timber extraction",
                "🔥 Forest fires (natural and man-made)"
              ],
              effects: [
                "🌡️ Climate change - less CO2 absorption",
                "💧 Soil erosion and landslides",
                "🐾 Loss of biodiversity and wildlife habitat",
                "🌧️ Disrupted water cycle and reduced rainfall",
                "👥 Impact on tribal communities"
              ]
            },
            conservation: [
              "🌱 Afforestation: Planting trees on barren land",
              "🌳 Reforestation: Replanting in deforested areas",
              "📜 Strict laws against illegal logging",
              "🏞️ Protected forest reserves and national parks",
              "♻️ Sustainable forestry practices"
            ],
            images: [
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&h=400&fit=crop"
            ],
            videos: ["gqht2bIQXIY", "Ic-J6hcSKa8"],
            quiz: {
              questions: [
                { id: "q1", question: "Forests help in:", options: ["Increasing CO2", "Oxygen production", "Soil erosion", "Pollution"], correct: 1 },
                { id: "q2", question: "Deforestation causes:", options: ["More rainfall", "Climate change", "More oxygen", "Better soil"], correct: 1 },
                { id: "q3", question: "Afforestation means:", options: ["Cutting trees", "Planting trees", "Burning forests", "Mining"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "water-resources",
          title: "Water Resources Management",
          content: {
            definition: "💧 Water is life's most essential resource - only 2.5% of Earth's water is fresh, and only 1% is accessible for human use!",
            simpleExplanation: "Think of Earth's water like a bank account: 97% is locked (ocean salt water), 2% is frozen (glaciers), only 1% is available cash (fresh water we can use)!",
            sources: {
              surface: ["🏞️ Rivers: Flowing water bodies", "🌊 Lakes: Natural water storage", "⛲ Reservoirs: Man-made water storage"],
              ground: ["💧 Aquifers: Underground water layers", "🕳️ Wells: Access points to groundwater", "⛲ Springs: Natural groundwater outlets"]
            },
            problems: [
              "📉 Over-exploitation: Extracting water faster than natural replenishment",
              "🏭 Pollution: Industrial waste, sewage, agricultural runoff",
              "🌊 Floods: Excessive rainfall, poor drainage systems",
              "🏜️ Droughts: Prolonged water scarcity",
              "⚔️ Water conflicts: Inter-state disputes over river water"
            ],
            dams: {
              benefits: ["💡 Hydroelectric power generation", "🌾 Irrigation for agriculture", "💧 Water supply for cities", "🌊 Flood control"],
              problems: ["🏘️ Displacement of people", "🐟 Disrupts aquatic ecosystems", "💰 High construction costs", "🌍 Siltation reduces capacity"]
            },
            conservation: [
              "🌧️ Rainwater harvesting: Collect and store rainwater",
              "♻️ Wastewater treatment and reuse",
              "💧 Drip irrigation: Efficient water use in agriculture",
              "🚰 Fix leaks and reduce wastage",
              "🌳 Watershed management: Protect water catchment areas"
            ],
            images: [
              "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=400&fit=crop"
            ],
            videos: ["0GyJIsYf4Mc", "kNi8oKbRYFk"],
            quiz: {
              questions: [
                { id: "q1", question: "Percentage of fresh water on Earth:", options: ["97%", "50%", "2.5%", "10%"], correct: 2 },
                { id: "q2", question: "Rainwater harvesting helps in:", options: ["Wasting water", "Water conservation", "Pollution", "Floods"], correct: 1 },
                { id: "q3", question: "Dams are used for:", options: ["Decoration", "Power generation", "Pollution", "Deforestation"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "mineral-resources",
          title: "Mineral Resources",
          content: {
            definition: "⛏️ Minerals are naturally occurring inorganic substances with definite chemical composition - the building blocks of modern civilization!",
            simpleExplanation: "Minerals are like ingredients in a recipe - iron for steel, copper for wires, silicon for computer chips. Everything we build needs minerals!",
            types: [
              "⚫ Metallic: Iron, copper, aluminum, gold (used in construction, electronics)",
              "🪨 Non-metallic: Limestone, gypsum, mica (used in cement, plaster)",
              "⚡ Energy minerals: Coal, uranium, petroleum (fuel and power)"
            ],
            uses: [
              "🏗️ Construction: Iron, cement, sand",
              "💻 Electronics: Silicon, copper, rare earth elements",
              "🚗 Transportation: Aluminum, steel, rubber",
              "⚡ Energy: Coal, uranium, petroleum"
            ],
            extraction: {
              methods: ["⛏️ Surface mining: Open pit, strip mining", "🕳️ Underground mining: Shaft and tunnel mining", "💧 Solution mining: Dissolving minerals"],
              impacts: [
                "🌍 Land degradation and habitat destruction",
                "💧 Water pollution from mine drainage",
                "🌬️ Air pollution from dust and emissions",
                "👥 Health hazards for miners",
                "🏘️ Displacement of communities"
              ]
            },
            conservation: [
              "♻️ Recycling metals (aluminum, copper, steel)",
              "🔄 Reuse of materials",
              "⚙️ Efficient extraction technologies",
              "🌱 Mine reclamation and restoration",
              "🔬 Finding substitutes for scarce minerals"
            ],
            images: [
              "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=800&h=400&fit=crop"
            ],
            videos: ["QXr3emXXjvM", "_801e-5Qgpk"],
            quiz: {
              questions: [
                { id: "q1", question: "Iron is a:", options: ["Non-metallic mineral", "Metallic mineral", "Energy mineral", "Liquid"], correct: 1 },
                { id: "q2", question: "Mining causes:", options: ["Afforestation", "Environmental degradation", "More rainfall", "Clean air"], correct: 1 },
                { id: "q3", question: "Best way to conserve minerals:", options: ["Use more", "Recycling", "Waste them", "Burn them"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "food-resources",
          title: "Food Resources and Agriculture",
          content: {
            definition: "🌾 Food resources are the foundation of human survival - agriculture feeds 8 billion people on Earth!",
            simpleExplanation: "Agriculture is like a massive food production factory - it converts sunlight, water, and soil into the food on your plate!",
            worldProblems: [
              "👥 Growing population: More mouths to feed",
              "🌍 Limited arable land: Only 11% of Earth's land is suitable for farming",
              "💧 Water scarcity: Agriculture uses 70% of fresh water",
              "🌡️ Climate change: Unpredictable weather affects crops",
              "📉 Soil degradation: Loss of fertile topsoil"
            ],
            modernAgriculture: {
              benefits: ["📈 Increased crop yield", "🌾 Multiple crops per year", "🔬 Disease-resistant varieties", "⚙️ Mechanization reduces labor"],
              problems: [
                "🧪 Chemical fertilizers: Soil degradation, water pollution",
                "🦟 Pesticides: Kill beneficial insects, health hazards",
                "💧 Waterlogging: Excessive irrigation damages soil",
                "🧂 Salinity: Salt accumulation makes soil infertile",
                "🌱 Loss of biodiversity: Monoculture farming"
              ]
            },
            overgrazing: [
              "🐄 Too many animals on limited land",
              "🌱 Vegetation destroyed faster than it regrows",
              "🏜️ Leads to desertification",
              "💨 Soil erosion by wind and water"
            ],
            solutions: [
              "🌱 Organic farming: No chemical fertilizers/pesticides",
              "🔄 Crop rotation: Different crops in sequence",
              "💧 Efficient irrigation: Drip and sprinkler systems",
              "🌾 Integrated pest management: Biological pest control",
              "🌳 Agroforestry: Trees + crops together"
            ],
            images: [
              "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=400&fit=crop"
            ],
            videos: ["7vEzV5RnPqI", "_pJNcL0xMxg"],
            quiz: {
              questions: [
                { id: "q1", question: "Modern agriculture problem:", options: ["Too organic", "Chemical pollution", "Too little food", "No technology"], correct: 1 },
                { id: "q2", question: "Overgrazing leads to:", options: ["More vegetation", "Desertification", "Forests", "Rivers"], correct: 1 },
                { id: "q3", question: "Organic farming uses:", options: ["Chemical fertilizers", "Natural methods", "Pesticides", "Herbicides"], correct: 1 }
              ]
            }
          }
        }
      ]
    },
    
    // ==================== UNIT 3: BIODIVERSITY AND CONSERVATION ====================
    {
      id: 3,
      title: "Biodiversity and Conservation",
      modules: [
        {
          id: "biodiversity-types",
          title: "Types and Value of Biodiversity",
          content: {
            definition: "🌈 Biodiversity is the variety of life on Earth - from tiny bacteria to giant whales, from desert cacti to rainforest trees!",
            simpleExplanation: "Think of biodiversity like a library with millions of books - each species is a unique book with its own story. Losing species is like burning books forever!",
            types: {
              genetic: ["🧬 Variation within species", "Different genes in same species", "Example: Different dog breeds, rice varieties"],
              species: ["🦁 Variety of species in area", "Different plants, animals, microorganisms", "Example: 8.7 million species on Earth"],
              ecosystem: ["🌍 Variety of ecosystems", "Forests, deserts, oceans, grasslands", "Each ecosystem has unique communities"]
            },
            values: {
              consumptive: ["🍎 Direct use: Food, medicine, fuel", "🪵 Timber, fish, game animals", "Used directly without market"],
              productive: ["💰 Commercial products", "🌾 Agriculture, pharmaceuticals", "Sold in markets"],
              social: ["🎨 Cultural and spiritual significance", "🏞️ Recreation and tourism", "🎓 Education and research"],
              ethical: ["⚖️ Right to exist", "🌱 Moral responsibility", "Future generations' right"],
              aesthetic: ["🌺 Beauty and inspiration", "🎭 Art and literature", "Mental well-being"],
              option: ["🔮 Future potential uses", "💊 Undiscovered medicines", "🌾 Future crop varieties"]
            },
            importance: [
              "🍽️ Food security: 80,000 edible plants",
              "💊 Medicine: 25% drugs from plants",
              "🌡️ Climate regulation",
              "💧 Water purification",
              "🌱 Soil formation",
              "🐝 Pollination services"
            ],
            images: [
              "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop"
            ],
            videos: ["GK_vRtHJZu4", "b6Ua_zWDH6U"],
            quiz: {
              questions: [
                { id: "q1", question: "Genetic diversity refers to:", options: ["Different species", "Variation within species", "Different ecosystems", "Only animals"], correct: 1 },
                { id: "q2", question: "Consumptive value means:", options: ["Selling products", "Direct use without market", "Tourism", "Research"], correct: 1 },
                { id: "q3", question: "How many species exist on Earth?", options: ["1 million", "8.7 million", "100 thousand", "50 million"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "india-biodiversity",
          title: "India as Mega-diversity Nation",
          content: {
            definition: "🇮🇳 India is one of 17 mega-diverse countries, hosting 8% of global biodiversity on just 2.4% of Earth's land!",
            simpleExplanation: "India is like a biodiversity supermarket - from Himalayas to oceans, deserts to rainforests, it has almost everything!",
            facts: [
              "🌍 4 of 34 global biodiversity hotspots",
              "🌱 45,000+ plant species",
              "🦁 91,000+ animal species",
              "🐘 7.6% of world's mammals",
              "🦜 12.6% of world's birds",
              "🐍 6.2% of world's reptiles"
            ],
            hotspots: {
              definition: "🔥 Areas with exceptional biodiversity under threat",
              indian: [
                "🏔️ Eastern Himalayas: Snow leopard, red panda",
                "🌴 Western Ghats: Lion-tailed macaque, Nilgiri tahr",
                "🌏 Indo-Burma: Hoolock gibbon, Asian elephant",
                "🏝️ Sundaland (Nicobar): Nicobar pigeon, megapode"
              ]
            },
            levels: {
              global: ["🌍 Earth's total biodiversity", "Varies by latitude", "Highest at equator"],
              national: ["🇮🇳 Country-level diversity", "India: 17 mega-diverse nations", "Protected by laws"],
              local: ["🏞️ Community-level diversity", "Sacred groves", "Local conservation efforts"]
            },
            images: [
              "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?w=800&h=400&fit=crop"
            ],
            videos: ["RWXXCqfRyeU", "kZyIN23Cy4Y"],
            quiz: {
              questions: [
                { id: "q1", question: "India has how many biodiversity hotspots?", options: ["2", "4", "6", "8"], correct: 1 },
                { id: "q2", question: "Mega-diverse countries are:", options: ["10", "17", "25", "50"], correct: 1 },
                { id: "q3", question: "Western Ghats is a:", options: ["Desert", "Hotspot", "City", "River"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "threats-biodiversity",
          title: "Threats to Biodiversity",
          content: {
            definition: "⚠️ Biodiversity faces multiple threats - habitat loss, poaching, pollution, climate change. We're losing species 1000x faster than natural rate!",
            simpleExplanation: "Imagine your house being demolished (habitat loss), your family hunted (poaching), your water poisoned (pollution) - that's what wildlife faces!",
            habitatLoss: {
              causes: ["🏗️ Urbanization and construction", "🌾 Agricultural expansion", "⛏️ Mining and quarrying", "🌊 Dam construction"],
              effects: ["🏠 Species lose homes", "🍽️ Food scarcity", "👥 Population decline", "💀 Extinction risk"]
            },
            poaching: [
              "🐘 Elephants: Ivory trade",
              "🐅 Tigers: Skin and bones",
              "🦏 Rhinos: Horn for medicine",
              "🐢 Turtles: Meat and shells",
              "🦜 Exotic birds: Pet trade"
            ],
            manWildlifeConflict: {
              causes: ["🏘️ Human settlements in forest areas", "🌾 Crop raiding by animals", "🐘 Elephant corridors blocked", "🐆 Livestock predation"],
              solutions: ["🚧 Wildlife corridors", "⚡ Electric fencing", "💰 Compensation schemes", "📚 Awareness programs"]
            },
            otherThreats: [
              "🌡️ Climate change: Habitat shifts",
              "🏭 Pollution: Air, water, soil",
              "🌿 Invasive species: Compete with natives",
              "🦠 Diseases: Spread by humans",
              "🔥 Forest fires: Natural and man-made"
            ],
            images: [
              "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=400&fit=crop"
            ],
            videos: ["GQB3jQGbsxw", "Nym8h7K7-Yk"],
            quiz: {
              questions: [
                { id: "q1", question: "Main threat to biodiversity:", options: ["Too many animals", "Habitat loss", "Too much rain", "Clean air"], correct: 1 },
                { id: "q2", question: "Poaching means:", options: ["Legal hunting", "Illegal killing", "Conservation", "Protection"], correct: 1 },
                { id: "q3", question: "Man-wildlife conflict occurs due to:", options: ["Too many forests", "Human encroachment", "Clean water", "Fresh air"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "conservation-methods",
          title: "Conservation of Biodiversity",
          content: {
            definition: "🛡️ Conservation means protecting and preserving biodiversity for present and future generations!",
            simpleExplanation: "Conservation is like maintaining a library - protect existing books (species), restore damaged ones, and ensure future generations can read them!",
            inSitu: {
              definition: "🏞️ In-situ: Conservation in natural habitat - 'on-site' conservation",
              methods: [
                "🏞️ National Parks: Strict protection, no human activity (Jim Corbett, Kaziranga)",
                "🦁 Wildlife Sanctuaries: Protection with limited human activity",
                "🌍 Biosphere Reserves: Conservation + sustainable use (Nilgiri, Nanda Devi)",
                "🌳 Sacred Groves: Community-protected forest patches",
                "🏔️ Biodiversity Hotspots: Priority conservation areas"
              ],
              advantages: ["🏠 Natural habitat maintained", "🔄 Natural evolution continues", "💰 Cost-effective", "🌍 Ecosystem services preserved"]
            },
            exSitu: {
              definition: "🏛️ Ex-situ: Conservation outside natural habitat - 'off-site' conservation",
              methods: [
                "🦁 Zoos: Captive breeding programs",
                "🌺 Botanical Gardens: Plant conservation",
                "🌾 Seed Banks: Store seeds at low temperature",
                "🧬 Gene Banks: Preserve genetic material",
                "🧪 Tissue Culture: Lab propagation",
                "🐠 Aquariums: Marine species conservation"
              ],
              advantages: ["🔬 Controlled breeding", "🛡️ Protection from threats", "🧬 Genetic diversity preserved", "📚 Research opportunities"]
            },
            comparison: [
              "In-situ: Natural, ecosystem intact, large scale",
              "Ex-situ: Artificial, isolated, small scale",
              "Both are complementary approaches"
            ],
            images: [
              "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=400&fit=crop"
            ],
            videos: ["RWXXCqfRyeU", "kZyIN23Cy4Y"],
            quiz: {
              questions: [
                { id: "q1", question: "In-situ conservation means:", options: ["In zoo", "In natural habitat", "In lab", "In museum"], correct: 1 },
                { id: "q2", question: "National Parks allow:", options: ["Hunting", "Mining", "Strict protection", "Farming"], correct: 2 },
                { id: "q3", question: "Seed banks are example of:", options: ["In-situ", "Ex-situ", "Poaching", "Deforestation"], correct: 1 }
              ]
            }
          }
        }
      ]
    },
    
    // ==================== UNIT 4: ENVIRONMENTAL POLLUTION ====================
    {
      id: 4,
      title: "Environmental Pollution",
      modules: [
        {
          id: "air-pollution",
          title: "Air Pollution",
          content: {
            definition: "🌫️ Air pollution is contamination of air by harmful substances - like adding poison to the air we breathe!",
            simpleExplanation: "Imagine breathing through a dirty cloth - that's what polluted air does to your lungs!",
            sources: {
              natural: ["🌋 Volcanic eruptions", "🔥 Forest fires", "💨 Dust storms", "🌸 Pollen"],
              manMade: ["🚗 Vehicle emissions (CO, NOx)", "🏭 Industrial smoke (SO2, particulates)", "🔥 Burning fossil fuels", "🌾 Agricultural burning", "🏗️ Construction dust"]
            },
            pollutants: [
              "💨 CO (Carbon Monoxide): Incomplete combustion, reduces oxygen in blood",
              "🌫️ CO2 (Carbon Dioxide): Greenhouse gas, global warming",
              "☁️ SO2 (Sulfur Dioxide): Acid rain, respiratory problems",
              "🚗 NOx (Nitrogen Oxides): Smog formation, lung damage",
              "💨 PM (Particulate Matter): Lung diseases, heart problems",
              "☁️ O3 (Ozone): Ground level - respiratory issues"
            ],
            effects: [
              "🫁 Respiratory diseases: Asthma, bronchitis, lung cancer",
              "❤️ Cardiovascular problems",
              "🌡️ Global warming and climate change",
              "🌧️ Acid rain: Damages buildings, forests, aquatic life",
              "☁️ Smog: Reduced visibility",
              "🌍 Ozone layer depletion"
            ],
            control: [
              "🚗 Use public transport, electric vehicles",
              "🏭 Install scrubbers and filters in industries",
              "⚡ Switch to renewable energy",
              "🌳 Plant more trees",
              "📜 Strict emission standards",
              "🔧 Regular vehicle maintenance"
            ],
            images: [
              "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=800&h=400&fit=crop"
            ],
            videos: ["e6rglsLy1Ys", "GVBeY1jSG9Y"],
            quiz: {
              questions: [
                { id: "q1", question: "Main source of air pollution:", options: ["Trees", "Vehicles and industries", "Rain", "Wind"], correct: 1 },
                { id: "q2", question: "CO2 causes:", options: ["Clean air", "Global warming", "More oxygen", "Cool climate"], correct: 1 },
                { id: "q3", question: "Acid rain is caused by:", options: ["Clean water", "SO2 and NOx", "Oxygen", "Trees"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "water-pollution",
          title: "Water Pollution",
          content: {
            definition: "💧 Water pollution is contamination of water bodies making them unsafe for use - like poisoning our life source!",
            simpleExplanation: "Imagine your drinking water mixed with sewage, chemicals, and trash - that's water pollution!",
            sources: [
              "🏭 Industrial discharge: Heavy metals, chemicals",
              "🚽 Sewage: Untreated human waste",
              "🌾 Agricultural runoff: Fertilizers, pesticides",
              "🛢️ Oil spills: Marine pollution",
              "🗑️ Solid waste: Plastic, garbage",
              "⛏️ Mining: Acid mine drainage"
            ],
            effects: [
              "🦠 Waterborne diseases: Cholera, typhoid, dysentery",
              "🌿 Eutrophication: Algal blooms, oxygen depletion",
              "🐟 Aquatic life death",
              "💧 Groundwater contamination",
              "🌊 Marine ecosystem damage",
              "🍽️ Food chain contamination"
            ],
            control: [
              "🏭 Wastewater treatment plants",
              "📜 Strict industrial regulations",
              "🌾 Organic farming practices",
              "♻️ Reduce plastic use",
              "🚽 Proper sewage systems",
              "🛢️ Oil spill cleanup technologies"
            ],
            images: [
              "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop"
            ],
            videos: ["Om42Lppkd9w", "7W3Ek8pGPvQ"],
            quiz: {
              questions: [
                { id: "q1", question: "Eutrophication is caused by:", options: ["Clean water", "Excess nutrients", "Oxygen", "Fish"], correct: 1 },
                { id: "q2", question: "Main source of water pollution:", options: ["Rain", "Industrial discharge", "Clouds", "Trees"], correct: 1 },
                { id: "q3", question: "Waterborne disease:", options: ["Malaria", "Cholera", "Dengue", "Flu"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "soil-noise-nuclear",
          title: "Soil, Noise Pollution and Nuclear Hazards",
          content: {
            definition: "🌍 Multiple pollution types threaten our environment - soil degradation, noise disturbance, and nuclear radiation!",
            simpleExplanation: "Soil pollution kills the ground, noise pollution hurts ears, nuclear radiation is invisible danger!",
            soilPollution: {
              sources: ["🧪 Industrial chemicals", "🌾 Pesticides and fertilizers", "🗑️ Solid waste dumping", "🛢️ Oil spills", "⛏️ Mining waste"],
              effects: ["🌱 Reduced soil fertility", "🍎 Food contamination", "💧 Groundwater pollution", "🌾 Crop yield reduction"],
              control: ["♻️ Waste recycling", "🌾 Organic farming", "🌳 Afforestation", "🗑️ Proper waste disposal"]
            },
            noisePollution: {
              sources: ["🚗 Traffic noise", "🏭 Industrial machinery", "✈️ Aircraft", "🎵 Loudspeakers", "🏗️ Construction"],
              effects: ["👂 Hearing loss", "😰 Stress and anxiety", "💤 Sleep disturbance", "❤️ High blood pressure"],
              control: ["🌳 Green belts", "🔇 Noise barriers", "📜 Noise regulations", "🏠 Soundproofing"]
            },
            nuclearHazards: {
              sources: ["☢️ Nuclear power plants", "💣 Nuclear weapons testing", "🏥 Medical radiation", "⛏️ Uranium mining"],
              effects: ["🧬 Genetic mutations", "🦠 Cancer", "👶 Birth defects", "☠️ Radiation sickness"],
              control: ["🛡️ Proper shielding", "📏 Safe distance", "⏱️ Limited exposure time", "♻️ Proper waste disposal"]
            },
            images: [
              "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=800&h=400&fit=crop"
            ],
            videos: ["RSGbR2cKJms", "Nym8h7K7-Yk"],
            quiz: {
              questions: [
                { id: "q1", question: "Soil pollution reduces:", options: ["Fertility", "Pollution", "Water", "Air"], correct: 0 },
                { id: "q2", question: "Noise pollution causes:", options: ["Better hearing", "Hearing loss", "More sleep", "Happiness"], correct: 1 },
                { id: "q3", question: "Nuclear radiation causes:", options: ["Health", "Cancer", "Strength", "Growth"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "solid-waste-management",
          title: "Solid Waste Management",
          content: {
            definition: "🗑️ Solid waste management is the systematic collection, treatment, and disposal of solid material discarded as useless - a critical engineering challenge for sustainable cities!",
            simpleExplanation: "As engineers, we design systems to handle waste like a production line in reverse - from generation to final disposal, ensuring minimal environmental impact.",
            types: {
              urban: ["🏠 Municipal Solid Waste (MSW): Household garbage, food waste, paper, plastics", "🏗️ Construction & Demolition Waste: Concrete, bricks, wood, metals", "🏥 Biomedical Waste: Hospital waste, syringes, contaminated materials", "🛒 Commercial Waste: Shops, restaurants, markets"],
              industrial: ["🏭 Process Waste: Manufacturing byproducts, chemical residues", "⚠️ Hazardous Waste: Toxic, flammable, corrosive materials", "🔧 Scrap Materials: Metal scraps, defective products", "🧪 Chemical Waste: Solvents, acids, heavy metals"]
            },
            causes: ["👥 Population growth and urbanization", "🛍️ Consumerism and disposable culture", "📦 Excessive packaging materials", "🏭 Industrial production increase", "🌾 Agricultural waste generation", "🏗️ Construction activities"],
            effects: ["🌍 Land pollution and soil contamination", "💧 Groundwater pollution from leachate", "🌬️ Air pollution from open burning", "🦠 Disease spread (dengue, malaria, plague)", "🏞️ Aesthetic degradation of landscape", "🐀 Breeding ground for pests and vectors", "🌊 Marine pollution from plastic waste"],
            managementHierarchy: ["1️⃣ Source Reduction: Minimize waste generation", "2️⃣ Reuse: Use items multiple times", "3️⃣ Recycle: Convert waste to new products", "4️⃣ Recovery: Energy recovery from waste", "5️⃣ Treatment: Biological/thermal/chemical processing", "6️⃣ Disposal: Landfilling as last resort"],
            engineeringMethods: {
              collection: ["🚛 Segregated collection systems (wet/dry/hazardous)", "📍 Strategic bin placement using GIS", "⏰ Optimized collection schedules", "🗺️ Route optimization algorithms"],
              treatment: ["♻️ Material Recovery Facilities (MRF): Sorting and recycling", "🌱 Composting: Aerobic decomposition of organic waste", "🦠 Vermicomposting: Using earthworms for decomposition", "🔥 Incineration: High-temperature combustion with energy recovery", "⚡ Waste-to-Energy (WtE): Electricity generation from waste", "🧪 Pyrolysis: Thermal decomposition in absence of oxygen", "💧 Anaerobic Digestion: Biogas production from organic waste"],
              disposal: ["🏞️ Sanitary Landfills: Engineered disposal with liner systems", "🛡️ Leachate collection and treatment", "💨 Landfill gas management", "🌱 Post-closure land reclamation"]
            },
            threeRs: {
              reduce: ["🛍️ Avoid unnecessary purchases", "📦 Choose products with minimal packaging", "🥤 Use reusable bags and bottles"],
              reuse: ["♻️ Repair instead of replace", "🎁 Donate usable items", "🔄 Refill containers"],
              recycle: ["📄 Paper and cardboard", "🍾 Glass and plastic bottles", "🔧 Metal cans and electronics", "🌱 Organic waste to compost"]
            },
            roleOfIndividual: ["🗑️ Segregate waste at source (wet, dry, hazardous)", "♻️ Practice 3Rs - Reduce, Reuse, Recycle", "🚫 Avoid single-use plastics", "🌱 Compost organic waste at home", "💡 Spread awareness in community", "📜 Follow local waste management rules", "🛒 Choose eco-friendly products"],
            caseStudy: {
              title: "Indore - India's Cleanest City",
              points: ["🏆 5-time winner of Swachh Survekshan", "♻️ 100% door-to-door waste collection", "🌱 Decentralized composting plants", "⚡ Waste-to-energy plant processing 550 TPD", "📱 Mobile app for citizen complaints", "💰 Penalties for non-segregation"]
            },
            images: ["https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop", "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop", "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=400&fit=crop"],
            videos: ["RSGbR2cKJms", "Nym8h7K7-Yk"],
            quiz: {
              questions: [
                { id: "q1", question: "First step in waste management hierarchy:", options: ["Disposal", "Source reduction", "Recycling", "Treatment"], correct: 1 },
                { id: "q2", question: "Sanitary landfill includes:", options: ["Open dumping", "Engineered liner system", "Burning waste", "Ocean disposal"], correct: 1 },
                { id: "q3", question: "3Rs stand for:", options: ["Read, Write, Run", "Reduce, Reuse, Recycle", "Rest, Relax, Repeat", "Remove, Replace, Repair"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "disaster-management",
          title: "Disaster Management",
          content: {
            definition: "🚨 Disaster management is the systematic process of planning, organizing, coordinating, and implementing measures to prevent, prepare for, respond to, and recover from disasters.",
            simpleExplanation: "Engineers play crucial roles in disaster-resistant design, early warning systems, and post-disaster reconstruction - saving lives through technical solutions!",
            disasterTypes: {
              natural: ["🌊 Floods", "🌍 Earthquakes", "🌀 Cyclones", "⛰️ Landslides", "🌋 Volcanic eruptions", "🌪️ Tornadoes", "☄️ Tsunamis"],
              manMade: ["🏭 Industrial accidents", "💣 Nuclear disasters", "🔥 Urban fires", "🚂 Transport accidents", "⚠️ Chemical spills"]
            },
            floods: {
              causes: ["🌧️ Heavy rainfall and cloudbursts", "❄️ Melting snow and glaciers", "🌊 Dam failures", "🏗️ Poor urban drainage", "🌳 Deforestation reducing water absorption", "🌍 Climate change increasing extreme weather"],
              effects: ["💀 Loss of human and animal life", "🏠 Property and infrastructure damage", "🌾 Crop destruction and food shortage", "💧 Water contamination and diseases", "🛣️ Road and bridge collapse", "⚡ Power and communication disruption"],
              engineeringMitigation: ["🏗️ Dams and reservoirs for flood control", "🌊 Levees and embankments along rivers", "💧 Improved drainage systems in cities", "🌳 Watershed management and afforestation", "🗺️ Flood hazard mapping using GIS", "📡 Early warning systems with sensors", "🏘️ Zoning regulations for flood-prone areas"],
              preparedness: ["🎒 Emergency kit (food, water, medicines, flashlight)", "📱 Stay informed through weather alerts", "🗺️ Know evacuation routes", "🏠 Move to higher floors", "⚡ Turn off electricity and gas", "🚫 Avoid walking/driving through floodwater"]
            },
            earthquakes: {
              causes: ["🌍 Tectonic plate movements", "🌋 Volcanic activity", "⛏️ Mining and reservoir-induced seismicity", "💣 Underground nuclear tests"],
              measurement: "📊 Richter Scale (magnitude) and Mercalli Scale (intensity)",
              effects: ["🏚️ Building collapse and structural damage", "🌊 Tsunamis in coastal areas", "⛰️ Landslides in hilly regions", "🔥 Fire from gas line ruptures", "💀 Casualties and injuries", "💰 Economic losses"],
              engineeringMitigation: ["🏗️ Earthquake-resistant building design (IS codes)", "🔩 Base isolation and damping systems", "🏛️ Retrofitting old structures", "🗺️ Seismic zoning and land-use planning", "📡 Seismograph networks for monitoring", "🧱 Use of flexible materials and reinforcement", "⚙️ Shock absorbers in structures"],
              preparedness: ["🏠 Secure heavy furniture and appliances", "🚪 Identify safe spots (under tables, door frames)", "🎒 Emergency supplies ready", "🏃 DROP, COVER, HOLD ON during shaking", "🚫 Don't use elevators", "⚡ Turn off utilities after quake"]
            },
            cyclones: {
              definition: "🌀 Tropical cyclones are intense circular storms with low pressure centers, strong winds (>119 km/h), and heavy rainfall",
              formation: "🌊 Form over warm ocean waters (>27°C) with Coriolis effect",
              effects: ["💨 High-speed winds causing destruction", "🌊 Storm surge flooding coastal areas", "🌧️ Heavy rainfall and flooding", "⚡ Power outages", "🌳 Uprooting of trees", "🏠 Damage to buildings and infrastructure"],
              engineeringMitigation: ["🏗️ Cyclone-resistant building codes", "🌊 Coastal embankments and sea walls", "🌳 Mangrove plantation as natural barriers", "🏠 Cyclone shelters in vulnerable areas", "📡 Doppler radar for tracking", "🛰️ Satellite monitoring systems", "📱 SMS-based early warning systems"],
              preparedness: ["📻 Monitor weather forecasts", "🏠 Secure loose objects outdoors", "🪟 Board up windows", "🏃 Evacuate if advised", "🎒 Emergency supplies ready", "🚫 Stay indoors during cyclone"]
            },
            landslides: {
              causes: ["🌧️ Heavy rainfall saturating soil", "🌍 Earthquakes triggering slope failure", "🌳 Deforestation removing root support", "🏗️ Construction on slopes", "⛏️ Mining and quarrying", "🌊 Erosion by rivers"],
              effects: ["💀 Loss of life", "🏠 Property destruction", "🛣️ Road blockages", "🌉 Bridge damage", "🌾 Agricultural land loss", "🏞️ Environmental degradation"],
              engineeringMitigation: ["🧱 Retaining walls and slope stabilization", "💧 Proper drainage systems", "🌳 Afforestation and vegetation cover", "🗺️ Slope stability analysis", "🚧 Avoid construction on steep slopes", "🪨 Rock bolting and soil nailing", "📡 Monitoring systems for slope movement"],
              preparedness: ["🚨 Recognize warning signs (cracks, tilting)", "🏃 Evacuate immediately if landslide imminent", "🚫 Avoid river valleys during heavy rain", "📱 Report unusual ground movement", "🗺️ Know safe evacuation routes"]
            },
            disasterManagementCycle: ["1️⃣ Mitigation: Reduce disaster impact through planning", "2️⃣ Preparedness: Training, drills, early warning systems", "3️⃣ Response: Immediate action during disaster", "4️⃣ Recovery: Rehabilitation and reconstruction"],
            roleOfEngineers: ["🏗️ Design disaster-resistant structures", "📡 Develop early warning systems", "🗺️ Create hazard maps using GIS/Remote Sensing", "🔧 Conduct structural assessments", "🏘️ Plan safe evacuation routes", "💡 Innovate disaster mitigation technologies", "🌉 Rebuild infrastructure post-disaster"],
            nationalDisasterManagement: ["🇮🇳 National Disaster Management Authority (NDMA)", "📞 National Emergency Number: 112", "🚨 State Disaster Response Force (SDRF)", "🛟 National Disaster Response Force (NDRF)", "📡 India Meteorological Department (IMD)"],
            images: ["https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=400&fit=crop", "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop", "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop"],
            videos: ["gqht2bIQXIY", "Ic-J6hcSKa8"],
            quiz: {
              questions: [
                { id: "q1", question: "Earthquake-resistant design includes:", options: ["Rigid structures", "Base isolation", "Heavy roofs", "No reinforcement"], correct: 1 },
                { id: "q2", question: "Cyclones form over:", options: ["Cold water", "Warm ocean water", "Land", "Mountains"], correct: 1 },
                { id: "q3", question: "First step in disaster management cycle:", options: ["Response", "Mitigation", "Recovery", "Evacuation"], correct: 1 },
                { id: "q4", question: "Landslides can be prevented by:", options: ["Deforestation", "Afforestation", "Mining", "Construction"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "pollution-case-studies",
          title: "Pollution Case Studies",
          content: {
            definition: "📚 Real-world pollution incidents provide valuable lessons for engineers to design better systems and prevent future disasters.",
            caseStudy1: {
              title: "🏭 Bhopal Gas Tragedy (1984) - India",
              incident: "Methyl isocyanate (MIC) gas leak from Union Carbide pesticide plant",
              causes: ["⚠️ Poor maintenance and safety systems", "💰 Cost-cutting measures", "🚨 Disabled safety alarms", "🏭 Storage of hazardous chemicals in populated area"],
              impact: ["💀 3,000+ immediate deaths, 15,000+ total", "🏥 500,000+ people affected", "👶 Birth defects in subsequent generations", "🌍 Soil and water contamination"],
              lessons: ["🛡️ Importance of safety systems", "📏 Strict industrial regulations needed", "🏘️ Zoning laws for hazardous industries", "🚨 Emergency response planning", "⚖️ Corporate accountability"]
            },
            caseStudy2: {
              title: "🌊 Yamuna River Pollution - Delhi, India",
              problem: "Severe water pollution in India's most polluted river stretch",
              causes: ["🚽 Untreated sewage discharge (70%)", "🏭 Industrial effluents", "🗑️ Solid waste dumping", "🙏 Religious activities", "🌾 Agricultural runoff"],
              impact: ["💧 Dissolved oxygen near zero", "🐟 Aquatic life extinction", "💀 Waterborne diseases", "🚫 Unfit for any use", "💰 Economic losses"],
              solutions: ["🏭 Sewage treatment plants (STPs)", "📜 Strict effluent standards", "🌳 Riverfront development", "♻️ Waste management systems", "👥 Public awareness campaigns"]
            },
            caseStudy3: {
              title: "🌫️ Delhi Air Pollution Crisis",
              problem: "Severe air quality deterioration, especially in winter",
              causes: ["🚗 Vehicular emissions (major contributor)", "🏭 Industrial pollution", "🏗️ Construction dust", "🔥 Crop burning in neighboring states", "🎆 Firecracker burning"],
              impact: ["🫁 Respiratory diseases surge", "👁️ Eye irritation and allergies", "📉 Reduced life expectancy", "✈️ Flight cancellations", "💰 Economic productivity loss"],
              engineeringSolutions: ["🚇 Metro expansion for public transport", "⚡ Electric vehicle adoption", "🏭 Industrial emission controls", "💨 Smog towers (experimental)", "🌳 Green belt development", "🛣️ Dust suppression on roads"]
            },
            caseStudy4: {
              title: "☢️ Fukushima Nuclear Disaster (2011) - Japan",
              incident: "Nuclear meltdown following earthquake and tsunami",
              causes: ["🌍 9.0 magnitude earthquake", "🌊 15-meter tsunami waves", "⚡ Power failure and cooling system breakdown", "🏗️ Inadequate tsunami protection"],
              impact: ["☢️ Radioactive contamination", "🏘️ 160,000 people evacuated", "🌊 Marine ecosystem damage", "💰 $200+ billion economic loss", "🚫 20 km exclusion zone"],
              lessons: ["🏗️ Design for extreme events", "🔄 Redundant safety systems", "📍 Site selection importance", "🚨 Emergency preparedness", "♻️ Nuclear waste management"]
            },
            caseStudy5: {
              title: "🗑️ Great Pacific Garbage Patch",
              problem: "Massive floating plastic debris in North Pacific Ocean",
              scale: "1.6 million km² area, 80,000 tons of plastic",
              causes: ["🛍️ Single-use plastic consumption", "🌊 Ocean currents concentrating debris", "♻️ Poor waste management", "🚢 Marine littering"],
              impact: ["🐢 Marine life entanglement and ingestion", "🍽️ Microplastics in food chain", "🌊 Ecosystem disruption", "🎣 Fishing industry impact"],
              solutions: ["🚫 Reduce plastic use", "♻️ Improve recycling systems", "🌊 Ocean cleanup technologies", "📜 International regulations", "🔬 Biodegradable alternatives"]
            },
            images: ["https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop", "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=400&fit=crop", "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop"],
            videos: ["RSGbR2cKJms", "Nym8h7K7-Yk"],
            quiz: {
              questions: [
                { id: "q1", question: "Bhopal gas tragedy involved:", options: ["CO2", "MIC", "SO2", "NOx"], correct: 1 },
                { id: "q2", question: "Main pollutant in Yamuna:", options: ["Oil", "Sewage", "Plastic", "Air"], correct: 1 },
                { id: "q3", question: "Delhi air pollution major cause:", options: ["Trees", "Vehicles", "Rain", "Wind"], correct: 1 }
              ]
            }
          }
        }
      ]
    },
    
    // ==================== UNIT 5: HUMAN POPULATION AND ENVIRONMENT ====================
    {
      id: 5,
      title: "Human Population and Environment",
      modules: [
        {
          id: "population-growth",
          title: "Population Growth and Women Empowerment",
          content: {
            definition: "👥 Human population has grown from 1 billion (1800) to 8 billion (2022) - exponential growth straining Earth's resources!",
            simpleExplanation: "Imagine a classroom designed for 30 students now having 80 students - overcrowded, insufficient resources, chaos! That's population explosion!",
            populationGrowth: {
              facts: ["🌍 World population: 8 billion+", "🇮🇳 India: 1.4 billion (2nd largest)", "📈 Growing at 1.1% per year", "👶 Birth rate > Death rate"],
              causes: ["💊 Better healthcare", "🌾 More food production", "📉 Reduced mortality", "👶 High birth rate", "👴 Increased life expectancy"]
            },
            populationExplosion: {
              definition: "💥 Rapid uncontrolled population growth",
              effects: [
                "🍽️ Food scarcity",
                "💧 Water shortage",
                "🏠 Housing problems",
                "💼 Unemployment",
                "🏭 Environmental degradation",
                "📚 Education challenges",
                "💊 Healthcare burden"
              ]
            },
            womenEmpowerment: {
              definition: "👩 Empowering women through education, rights, and opportunities",
              importance: [
                "📚 Education: Educated women have fewer children",
                "💼 Employment: Economic independence",
                "⚖️ Rights: Decision-making power",
                "💊 Healthcare: Better family health",
                "👶 Family planning: Controlled birth rate"
              ],
              impact: ["Reduces population growth", "Improves child health", "Economic development", "Social progress"]
            },
            solutions: [
              "📚 Education and awareness",
              "👶 Family planning programs",
              "👩 Women empowerment",
              "📜 Government policies",
              "💊 Healthcare access"
            ],
            images: [
              "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=400&fit=crop"
            ],
            videos: ["PUwmA3Q0_OE", "3RBM4DwpQkY"],
            quiz: {
              questions: [
                { id: "q1", question: "World population is:", options: ["1 billion", "8 billion", "100 million", "50 billion"], correct: 1 },
                { id: "q2", question: "Population explosion causes:", options: ["More resources", "Resource scarcity", "Clean air", "More forests"], correct: 1 },
                { id: "q3", question: "Women empowerment helps in:", options: ["Population increase", "Population control", "Pollution", "Deforestation"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "global-warming",
          title: "Global Warming",
          content: {
            definition: "🌡️ Global warming is the gradual increase in Earth's average temperature due to greenhouse gases - like wrapping Earth in a thick blanket!",
            simpleExplanation: "Imagine sitting in a car with windows closed on a sunny day - it gets hotter and hotter. That's what greenhouse gases do to Earth!",
            greenhouseEffect: {
              definition: "🏚️ Natural process where gases trap heat in atmosphere",
              gases: ["💨 CO2 (Carbon Dioxide) - 60%", "💨 CH4 (Methane) - 20%", "☁️ N2O (Nitrous Oxide)", "🏭 CFCs (Chlorofluorocarbons)", "💧 Water vapor"],
              natural: "Keeps Earth warm enough for life (33°C warmer)",
              enhanced: "Human activities increase greenhouse gases"
            },
            causes: [
              "🔥 Burning fossil fuels (coal, oil, gas)",
              "🌳 Deforestation (less CO2 absorption)",
              "🏭 Industrial emissions",
              "🚗 Vehicle emissions",
              "🌾 Agriculture (methane from livestock)",
              "🗑️ Waste decomposition"
            ],
            effects: [
              "🌡️ Rising temperatures (1.1°C since 1880)",
              "🌊 Sea level rise (melting glaciers)",
              "❄️ Melting polar ice caps",
              "🌪️ Extreme weather events",
              "🌾 Crop failures",
              "🐾 Species extinction",
              "🏝️ Coastal flooding"
            ],
            solutions: [
              "♻️ Renewable energy (solar, wind)",
              "🌳 Afforestation and reforestation",
              "🚗 Electric vehicles",
              "💡 Energy efficiency",
              "🏭 Carbon capture technology",
              "🌍 International agreements (Paris Agreement)"
            ],
            images: [
              "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop"
            ],
            videos: ["dcBXMgOrMIo", "G4H1N_yXBiA"],
            quiz: {
              questions: [
                { id: "q1", question: "Main greenhouse gas:", options: ["Oxygen", "CO2", "Nitrogen", "Helium"], correct: 1 },
                { id: "q2", question: "Global warming causes:", options: ["Cooling", "Sea level rise", "More ice", "Less heat"], correct: 1 },
                { id: "q3", question: "Solution to global warming:", options: ["Burn more coal", "Renewable energy", "Cut trees", "More vehicles"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "acid-rain-ozone",
          title: "Acid Rain and Ozone Depletion",
          content: {
            definition: "🌧️ Acid rain and ozone depletion are two major atmospheric problems caused by human activities!",
            simpleExplanation: "Acid rain is like pouring lemon juice on everything, and ozone depletion is like removing Earth's sunscreen!",
            acidRain: {
              definition: "🌧️ Rain with pH < 5.6 due to atmospheric pollution",
              causes: ["🏭 SO2 from industries", "🚗 NOx from vehicles", "🔥 Burning fossil fuels"],
              formation: "SO2 + H2O → H2SO4 (Sulfuric acid), NOx + H2O → HNO3 (Nitric acid)",
              effects: [
                "🏛️ Damages buildings (Taj Mahal)",
                "🌳 Harms forests and vegetation",
                "🐟 Kills aquatic life",
                "🌾 Reduces soil fertility",
                "💊 Human health problems"
              ],
              control: ["🏭 Use scrubbers in industries", "⚡ Switch to clean energy", "🚗 Reduce vehicle emissions", "🌳 Liming of soil"]
            },
            ozoneDepletion: {
              definition: "☁️ Thinning of ozone layer in stratosphere",
              ozoneLayer: "Protective layer 15-30 km above Earth, absorbs 97-99% UV radiation",
              causes: ["❄️ CFCs (Chlorofluorocarbons) from refrigerators, ACs", "💨 Halons from fire extinguishers", "✈️ Aircraft emissions"],
              ozoneHole: "🌍 Severe depletion over Antarctica discovered in 1985",
              effects: [
                "☀️ Increased UV radiation",
                "🦠 Skin cancer",
                "👁️ Eye cataracts",
                "🧬 Immune system damage",
                "🌾 Crop damage",
                "🌊 Marine ecosystem harm"
              ],
              control: ["🚫 Montreal Protocol (1987) - Ban CFCs", "♻️ Use ozone-friendly alternatives", "🔧 Proper disposal of old equipment"]
            },
            images: [
              "https://images.unsplash.com/photo-1474418397713-7ede21d49118?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800&h=400&fit=crop"
            ],
            videos: ["Nym8h7K7-Yk", "e6rglsLy1Ys"],
            quiz: {
              questions: [
                { id: "q1", question: "Acid rain pH is:", options: ["> 7", "< 5.6", "= 7", "> 10"], correct: 1 },
                { id: "q2", question: "Ozone layer protects from:", options: ["Rain", "UV radiation", "Wind", "Cold"], correct: 1 },
                { id: "q3", question: "CFCs cause:", options: ["Ozone formation", "Ozone depletion", "Rain", "Cooling"], correct: 1 }
              ]
            }
          }
        },
        {
          id: "it-environment",
          title: "Role of IT in Environment and Health",
          content: {
            definition: "💻 Information Technology is a powerful tool for environmental monitoring, management, and public health!",
            simpleExplanation: "IT is like having millions of eyes and brains working together to protect environment and health!",
            environmentalApplications: {
              monitoring: [
                "🛰️ Satellite imaging: Track deforestation, glaciers, pollution",
                "🌡️ Sensors: Real-time air and water quality monitoring",
                "📱 IoT devices: Smart environmental monitoring",
                "📊 Big Data: Analyze climate patterns"
              ],
              gis: [
                "🗺️ Geographic Information Systems",
                "Map natural resources",
                "Plan conservation areas",
                "Disaster management",
                "Urban planning"
              ],
              remoteSensing: [
                "🛰️ Satellite data collection",
                "Forest cover monitoring",
                "Crop health assessment",
                "Disaster prediction"
              ]
            },
            healthApplications: [
              "💊 Telemedicine: Remote healthcare",
              "📊 Health data analytics",
              "🦠 Disease tracking and prediction",
              "📱 Health apps and wearables",
              "🧬 AI in diagnosis",
              "📊 Epidemic modeling"
            ],
            benefits: [
              "⏱️ Real-time monitoring",
              "📊 Data-driven decisions",
              "💰 Cost-effective",
              "🌍 Global collaboration",
              "🚨 Early warning systems",
              "📚 Public awareness"
            ],
            challenges: [
              "💻 E-waste generation",
              "⚡ High energy consumption",
              "💰 Digital divide",
              "🔒 Data privacy concerns",
              "📚 Need for technical skills"
            ],
            smartSolutions: [
              "🏙️ Smart cities: Efficient resource use",
              "💡 Smart grids: Energy management",
              "🚗 Smart transport: Reduce emissions",
              "🌾 Precision agriculture: Optimize resources"
            ],
            images: [
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
              "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop"
            ],
            videos: ["gqht2bIQXIY", "Ic-J6hcSKa8"],
            quiz: {
              questions: [
                { id: "q1", question: "GIS is used for:", options: ["Gaming", "Mapping and analysis", "Music", "Shopping"], correct: 1 },
                { id: "q2", question: "Remote sensing uses:", options: ["Satellites", "Books", "Pens", "Paper"], correct: 0 },
                { id: "q3", question: "IT challenge for environment:", options: ["Clean air", "E-waste", "More trees", "Clean water"], correct: 1 }
              ]
            }
          }
        }
      ]
    }
  ],
  
  finalQuiz: {
    questions: [
      { id: "fq1", question: "Environment includes:", options: ["Only living", "Only non-living", "Both living and non-living", "Only humans"], correct: 2 },
      { id: "fq2", question: "Producers are:", options: ["Animals", "Green plants", "Bacteria", "Humans"], correct: 1 },
      { id: "fq3", question: "Energy flow is:", options: ["Bidirectional", "Unidirectional", "Circular", "Random"], correct: 1 },
      { id: "fq4", question: "Renewable energy:", options: ["Coal", "Oil", "Solar", "Natural gas"], correct: 2 },
      { id: "fq5", question: "Deforestation causes:", options: ["More oxygen", "Climate change", "More rain", "Better soil"], correct: 1 },
      { id: "fq6", question: "Fresh water on Earth:", options: ["97%", "50%", "2.5%", "75%"], correct: 2 },
      { id: "fq7", question: "India has biodiversity hotspots:", options: ["2", "4", "6", "8"], correct: 1 },
      { id: "fq8", question: "In-situ conservation:", options: ["In zoo", "In natural habitat", "In lab", "In museum"], correct: 1 },
      { id: "fq9", question: "Main air pollutant:", options: ["Oxygen", "CO2", "Nitrogen", "Hydrogen"], correct: 1 },
      { id: "fq10", question: "3Rs stand for:", options: ["Read, Write, Run", "Reduce, Reuse, Recycle", "Rain, River, Road", "Rest, Relax, Repeat"], correct: 1 },
      { id: "fq11", question: "World population 2022:", options: ["5 billion", "8 billion", "10 billion", "12 billion"], correct: 1 },
      { id: "fq12", question: "Global warming causes:", options: ["Cooling", "Sea level rise", "More ice", "Less heat"], correct: 1 },
      { id: "fq13", question: "Ozone layer protects from:", options: ["Rain", "UV radiation", "Wind", "Cold"], correct: 1 },
      { id: "fq14", question: "IT helps environment through:", options: ["More pollution", "Monitoring", "Cutting trees", "Wasting energy"], correct: 1 },
      { id: "fq15", question: "10% law refers to:", options: ["Species", "Energy transfer", "Water", "Soil"], correct: 1 }
    ]
  },
  
  references: {
    textbooks: [
      "Environmental Studies for Undergraduate Courses by Erach Bharucha",
      "Environmental Studies by Palaniswamy – Pearson Education",
      "Environmental Studies by Dr.S.Azeem Unnisa"
    ],
    referenceBooks: [
      "Environmental Science by Deeksha Dave and E.Sai Baba Reddy",
      "Environmental Sciences and Technology by M.Anji Reddy",
      "Comprehensive Environmental Studies by J.P.Sharma"
    ],
    webLinks: [
      "https://www.edx.org/learn/environmental-science",
      "http://ecoursesonline.iasri.res.in/Courses/Environmental%20Science",
      "https://onlinecourses.nptel.ac.in/noc23_hs55/preview",
      "https://www.ugc.ac.in/oldpdf/modelcurriculum/env.pdf"
    ]
  }
}
