// MISSING MODULES TO BE ADDED TO UNIT 4

export const SOLID_WASTE_MODULE = {
  id: "solid-waste-management",
  title: "Solid Waste Management",
  content: {
    definition: "🗑️ Solid waste management is the systematic collection, treatment, and disposal of solid material discarded as useless - a critical engineering challenge for sustainable cities!",
    simpleExplanation: "As engineers, we design systems to handle waste like a production line in reverse - from generation to final disposal, ensuring minimal environmental impact.",
    
    types: {
      urban: [
        "🏠 Municipal Solid Waste (MSW): Household garbage, food waste, paper, plastics",
        "🏗️ Construction & Demolition Waste: Concrete, bricks, wood, metals",
        "🏥 Biomedical Waste: Hospital waste, syringes, contaminated materials",
        "🛒 Commercial Waste: Shops, restaurants, markets"
      ],
      industrial: [
        "🏭 Process Waste: Manufacturing byproducts, chemical residues",
        "⚠️ Hazardous Waste: Toxic, flammable, corrosive materials",
        "🔧 Scrap Materials: Metal scraps, defective products",
        "🧪 Chemical Waste: Solvents, acids, heavy metals"
      ]
    },
    
    causes: [
      "👥 Population growth and urbanization",
      "🛍️ Consumerism and disposable culture",
      "📦 Excessive packaging materials",
      "🏭 Industrial production increase",
      "🌾 Agricultural waste generation",
      "🏗️ Construction activities"
    ],
    
    effects: [
      "🌍 Land pollution and soil contamination",
      "💧 Groundwater pollution from leachate",
      "🌬️ Air pollution from open burning",
      "🦠 Disease spread (dengue, malaria, plague)",
      "🏞️ Aesthetic degradation of landscape",
      "🐀 Breeding ground for pests and vectors",
      "🌊 Marine pollution from plastic waste"
    ],
    
    managementHierarchy: [
      "1️⃣ Source Reduction: Minimize waste generation",
      "2️⃣ Reuse: Use items multiple times",
      "3️⃣ Recycle: Convert waste to new products",
      "4️⃣ Recovery: Energy recovery from waste",
      "5️⃣ Treatment: Biological/thermal/chemical processing",
      "6️⃣ Disposal: Landfilling as last resort"
    ],
    
    engineeringMethods: {
      collection: [
        "🚛 Segregated collection systems (wet/dry/hazardous)",
        "📍 Strategic bin placement using GIS",
        "⏰ Optimized collection schedules",
        "🗺️ Route optimization algorithms"
      ],
      treatment: [
        "♻️ Material Recovery Facilities (MRF): Sorting and recycling",
        "🌱 Composting: Aerobic decomposition of organic waste",
        "🦠 Vermicomposting: Using earthworms for decomposition",
        "🔥 Incineration: High-temperature combustion with energy recovery",
        "⚡ Waste-to-Energy (WtE): Electricity generation from waste",
        "🧪 Pyrolysis: Thermal decomposition in absence of oxygen",
        "💧 Anaerobic Digestion: Biogas production from organic waste"
      ],
      disposal: [
        "🏞️ Sanitary Landfills: Engineered disposal with liner systems",
        "🛡️ Leachate collection and treatment",
        "💨 Landfill gas management",
        "🌱 Post-closure land reclamation"
      ]
    },
    
    threeRs: {
      reduce: ["🛍️ Avoid unnecessary purchases", "📦 Choose products with minimal packaging", "🥤 Use reusable bags and bottles"],
      reuse: ["♻️ Repair instead of replace", "🎁 Donate usable items", "🔄 Refill containers"],
      recycle: ["📄 Paper and cardboard", "🍾 Glass and plastic bottles", "🔧 Metal cans and electronics", "🌱 Organic waste to compost"]
    },
    
    roleOfIndividual: [
      "🗑️ Segregate waste at source (wet, dry, hazardous)",
      "♻️ Practice 3Rs - Reduce, Reuse, Recycle",
      "🚫 Avoid single-use plastics",
      "🌱 Compost organic waste at home",
      "💡 Spread awareness in community",
      "📜 Follow local waste management rules",
      "🛒 Choose eco-friendly products"
    ],
    
    caseStudy: {
      title: "Indore - India's Cleanest City",
      points: [
        "🏆 5-time winner of Swachh Survekshan",
        "♻️ 100% door-to-door waste collection",
        "🌱 Decentralized composting plants",
        "⚡ Waste-to-energy plant processing 550 TPD",
        "📱 Mobile app for citizen complaints",
        "💰 Penalties for non-segregation"
      ]
    },
    
    images: [
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=400&fit=crop"
    ],
    videos: ["RSGbR2cKJms", "Nym8h7K7-Yk"],
    
    quiz: {
      questions: [
        { id: "q1", question: "First step in waste management hierarchy:", options: ["Disposal", "Source reduction", "Recycling", "Treatment"], correct: 1 },
        { id: "q2", question: "Sanitary landfill includes:", options: ["Open dumping", "Engineered liner system", "Burning waste", "Ocean disposal"], correct: 1 },
        { id: "q3", question: "3Rs stand for:", options: ["Read, Write, Run", "Reduce, Reuse, Recycle", "Rest, Relax, Repeat", "Remove, Replace, Repair"], correct: 1 }
      ]
    }
  }
};

export const DISASTER_MANAGEMENT_MODULE = {
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
      causes: [
        "🌧️ Heavy rainfall and cloudbursts",
        "❄️ Melting snow and glaciers",
        "🌊 Dam failures",
        "🏗️ Poor urban drainage",
        "🌳 Deforestation reducing water absorption",
        "🌍 Climate change increasing extreme weather"
      ],
      effects: [
        "💀 Loss of human and animal life",
        "🏠 Property and infrastructure damage",
        "🌾 Crop destruction and food shortage",
        "💧 Water contamination and diseases",
        "🛣️ Road and bridge collapse",
        "⚡ Power and communication disruption"
      ],
      engineeringMitigation: [
        "🏗️ Dams and reservoirs for flood control",
        "🌊 Levees and embankments along rivers",
        "💧 Improved drainage systems in cities",
        "🌳 Watershed management and afforestation",
        "🗺️ Flood hazard mapping using GIS",
        "📡 Early warning systems with sensors",
        "🏘️ Zoning regulations for flood-prone areas"
      ],
      preparedness: [
        "🎒 Emergency kit (food, water, medicines, flashlight)",
        "📱 Stay informed through weather alerts",
        "🗺️ Know evacuation routes",
        "🏠 Move to higher floors",
        "⚡ Turn off electricity and gas",
        "🚫 Avoid walking/driving through floodwater"
      ]
    },
    
    earthquakes: {
      causes: [
        "🌍 Tectonic plate movements",
        "🌋 Volcanic activity",
        "⛏️ Mining and reservoir-induced seismicity",
        "💣 Underground nuclear tests"
      ],
      measurement: "📊 Richter Scale (magnitude) and Mercalli Scale (intensity)",
      effects: [
        "🏚️ Building collapse and structural damage",
        "🌊 Tsunamis in coastal areas",
        "⛰️ Landslides in hilly regions",
        "🔥 Fire from gas line ruptures",
        "💀 Casualties and injuries",
        "💰 Economic losses"
      ],
      engineeringMitigation: [
        "🏗️ Earthquake-resistant building design (IS codes)",
        "🔩 Base isolation and damping systems",
        "🏛️ Retrofitting old structures",
        "🗺️ Seismic zoning and land-use planning",
        "📡 Seismograph networks for monitoring",
        "🧱 Use of flexible materials and reinforcement",
        "⚙️ Shock absorbers in structures"
      ],
      preparedness: [
        "🏠 Secure heavy furniture and appliances",
        "🚪 Identify safe spots (under tables, door frames)",
        "🎒 Emergency supplies ready",
        "🏃 DROP, COVER, HOLD ON during shaking",
        "🚫 Don't use elevators",
        "⚡ Turn off utilities after quake"
      ]
    },
    
    cyclones: {
      definition: "🌀 Tropical cyclones are intense circular storms with low pressure centers, strong winds (>119 km/h), and heavy rainfall",
      formation: "🌊 Form over warm ocean waters (>27°C) with Coriolis effect",
      effects: [
        "💨 High-speed winds causing destruction",
        "🌊 Storm surge flooding coastal areas",
        "🌧️ Heavy rainfall and flooding",
        "⚡ Power outages",
        "🌳 Uprooting of trees",
        "🏠 Damage to buildings and infrastructure"
      ],
      engineeringMitigation: [
        "🏗️ Cyclone-resistant building codes",
        "🌊 Coastal embankments and sea walls",
        "🌳 Mangrove plantation as natural barriers",
        "🏠 Cyclone shelters in vulnerable areas",
        "📡 Doppler radar for tracking",
        "🛰️ Satellite monitoring systems",
        "📱 SMS-based early warning systems"
      ],
      preparedness: [
        "📻 Monitor weather forecasts",
        "🏠 Secure loose objects outdoors",
        "🪟 Board up windows",
        "🏃 Evacuate if advised",
        "🎒 Emergency supplies ready",
        "🚫 Stay indoors during cyclone"
      ]
    },
    
    landslides: {
      causes: [
        "🌧️ Heavy rainfall saturating soil",
        "🌍 Earthquakes triggering slope failure",
        "🌳 Deforestation removing root support",
        "🏗️ Construction on slopes",
        "⛏️ Mining and quarrying",
        "🌊 Erosion by rivers"
      ],
      effects: [
        "💀 Loss of life",
        "🏠 Property destruction",
        "🛣️ Road blockages",
        "🌉 Bridge damage",
        "🌾 Agricultural land loss",
        "🏞️ Environmental degradation"
      ],
      engineeringMitigation: [
        "🧱 Retaining walls and slope stabilization",
        "💧 Proper drainage systems",
        "🌳 Afforestation and vegetation cover",
        "🗺️ Slope stability analysis",
        "🚧 Avoid construction on steep slopes",
        "🪨 Rock bolting and soil nailing",
        "📡 Monitoring systems for slope movement"
      ],
      preparedness: [
        "🚨 Recognize warning signs (cracks, tilting)",
        "🏃 Evacuate immediately if landslide imminent",
        "🚫 Avoid river valleys during heavy rain",
        "📱 Report unusual ground movement",
        "🗺️ Know safe evacuation routes"
      ]
    },
    
    disasterManagementCycle: [
      "1️⃣ Mitigation: Reduce disaster impact through planning",
      "2️⃣ Preparedness: Training, drills, early warning systems",
      "3️⃣ Response: Immediate action during disaster",
      "4️⃣ Recovery: Rehabilitation and reconstruction"
    ],
    
    roleOfEngineers: [
      "🏗️ Design disaster-resistant structures",
      "📡 Develop early warning systems",
      "🗺️ Create hazard maps using GIS/Remote Sensing",
      "🔧 Conduct structural assessments",
      "🏘️ Plan safe evacuation routes",
      "💡 Innovate disaster mitigation technologies",
      "🌉 Rebuild infrastructure post-disaster"
    ],
    
    nationalDisasterManagement: [
      "🇮🇳 National Disaster Management Authority (NDMA)",
      "📞 National Emergency Number: 112",
      "🚨 State Disaster Response Force (SDRF)",
      "🛟 National Disaster Response Force (NDRF)",
      "📡 India Meteorological Department (IMD)"
    ],
    
    images: [
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop"
    ],
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
};

export const POLLUTION_CASE_STUDIES_MODULE = {
  id: "pollution-case-studies",
  title: "Pollution Case Studies",
  content: {
    definition: "📚 Real-world pollution incidents provide valuable lessons for engineers to design better systems and prevent future disasters.",
    
    caseStudy1: {
      title: "🏭 Bhopal Gas Tragedy (1984) - India",
      incident: "Methyl isocyanate (MIC) gas leak from Union Carbide pesticide plant",
      causes: [
        "⚠️ Poor maintenance and safety systems",
        "💰 Cost-cutting measures",
        "🚨 Disabled safety alarms",
        "🏭 Storage of hazardous chemicals in populated area"
      ],
      impact: [
        "💀 3,000+ immediate deaths, 15,000+ total",
        "🏥 500,000+ people affected",
        "👶 Birth defects in subsequent generations",
        "🌍 Soil and water contamination"
      ],
      lessons: [
        "🛡️ Importance of safety systems",
        "📏 Strict industrial regulations needed",
        "🏘️ Zoning laws for hazardous industries",
        "🚨 Emergency response planning",
        "⚖️ Corporate accountability"
      ]
    },
    
    caseStudy2: {
      title: "🌊 Yamuna River Pollution - Delhi, India",
      problem: "Severe water pollution in India's most polluted river stretch",
      causes: [
        "🚽 Untreated sewage discharge (70%)",
        "🏭 Industrial effluents",
        "🗑️ Solid waste dumping",
        "🙏 Religious activities",
        "🌾 Agricultural runoff"
      ],
      impact: [
        "💧 Dissolved oxygen near zero",
        "🐟 Aquatic life extinction",
        "💀 Waterborne diseases",
        "🚫 Unfit for any use",
        "💰 Economic losses"
      ],
      solutions: [
        "🏭 Sewage treatment plants (STPs)",
        "📜 Strict effluent standards",
        "🌳 Riverfront development",
        "♻️ Waste management systems",
        "👥 Public awareness campaigns"
      ]
    },
    
    caseStudy3: {
      title: "🌫️ Delhi Air Pollution Crisis",
      problem: "Severe air quality deterioration, especially in winter",
      causes: [
        "🚗 Vehicular emissions (major contributor)",
        "🏭 Industrial pollution",
        "🏗️ Construction dust",
        "🔥 Crop burning in neighboring states",
        "🎆 Firecracker burning"
      ],
      impact: [
        "🫁 Respiratory diseases surge",
        "👁️ Eye irritation and allergies",
        "📉 Reduced life expectancy",
        "✈️ Flight cancellations",
        "💰 Economic productivity loss"
      ],
      engineeringSolutions: [
        "🚇 Metro expansion for public transport",
        "⚡ Electric vehicle adoption",
        "🏭 Industrial emission controls",
        "💨 Smog towers (experimental)",
        "🌳 Green belt development",
        "🛣️ Dust suppression on roads"
      ]
    },
    
    caseStudy4: {
      title: "☢️ Fukushima Nuclear Disaster (2011) - Japan",
      incident: "Nuclear meltdown following earthquake and tsunami",
      causes: [
        "🌍 9.0 magnitude earthquake",
        "🌊 15-meter tsunami waves",
        "⚡ Power failure and cooling system breakdown",
        "🏗️ Inadequate tsunami protection"
      ],
      impact: [
        "☢️ Radioactive contamination",
        "🏘️ 160,000 people evacuated",
        "🌊 Marine ecosystem damage",
        "💰 $200+ billion economic loss",
        "🚫 20 km exclusion zone"
      ],
      lessons: [
        "🏗️ Design for extreme events",
        "🔄 Redundant safety systems",
        "📍 Site selection importance",
        "🚨 Emergency preparedness",
        "♻️ Nuclear waste management"
      ]
    },
    
    caseStudy5: {
      title: "🗑️ Great Pacific Garbage Patch",
      problem: "Massive floating plastic debris in North Pacific Ocean",
      scale: "1.6 million km² area, 80,000 tons of plastic",
      causes: [
        "🛍️ Single-use plastic consumption",
        "🌊 Ocean currents concentrating debris",
        "♻️ Poor waste management",
        "🚢 Marine littering"
      ],
      impact: [
        "🐢 Marine life entanglement and ingestion",
        "🍽️ Microplastics in food chain",
        "🌊 Ecosystem disruption",
        "🎣 Fishing industry impact"
      ],
      solutions: [
        "🚫 Reduce plastic use",
        "♻️ Improve recycling systems",
        "🌊 Ocean cleanup technologies",
        "📜 International regulations",
        "🔬 Biodegradable alternatives"
      ]
    },
    
    images: [
      "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=400&fit=crop"
    ],
    videos: ["RSGbR2cKJms", "Nym8h7K7-Yk"],
    
    quiz: {
      questions: [
        { id: "q1", question: "Bhopal gas tragedy involved:", options: ["CO2", "MIC", "SO2", "NOx"], correct: 1 },
        { id: "q2", question: "Main pollutant in Yamuna:", options: ["Oil", "Sewage", "Plastic", "Air"], correct: 1 },
        { id: "q3", question: "Delhi air pollution major cause:", options: ["Trees", "Vehicles", "Rain", "Wind"], correct: 1 }
      ]
    }
  }
};
