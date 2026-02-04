'use client';
import React from 'react';

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
                <h1>Best Out of Waste Competition</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Introduction to Best Out of Waste</h3>
              <p>Best out of waste competitions encourage creativity while promoting waste reduction and recycling. These activities transform discarded materials into useful or decorative items.</p>
              
              <h4>Objectives:</h4>
              <ul>
                <li>Promote waste reduction and recycling awareness</li>
                <li>Encourage creative thinking and innovation</li>
                <li>Develop practical skills in upcycling</li>
                <li>Reduce environmental pollution</li>
                <li>Foster sustainable lifestyle habits</li>
              </ul>

              <h4>Common Waste Materials to Use:</h4>
              <ul>
                <li><strong>Paper & Cardboard:</strong> Newspapers, magazines, boxes, egg cartons</li>
                <li><strong>Plastic:</strong> Bottles, containers, bags, caps</li>
                <li><strong>Glass:</strong> Jars, bottles, broken pieces</li>
                <li><strong>Metal:</strong> Cans, bottle caps, wire</li>
                <li><strong>Fabric:</strong> Old clothes, scraps, buttons</li>
                <li><strong>Natural Materials:</strong> Wood, coconut shells, bamboo</li>
              </ul>

              <h4>Best Out of Waste Project Ideas:</h4>
              
              <div className="project-gallery">
                <div className="project-image">
                  <img src="/images/waste-to-art.jpg" alt="Best out of waste projects" className="project-photo" />
                  <p>Creative upcycling projects</p>
                </div>
                <div className="project-image">
                  <img src="/images/plastic-bottle-planters.jpg" alt="Plastic bottle planters" className="project-photo" />
                  <p>Plastic bottle planters</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>DIY Best Out of Waste Ideas</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/1BuLGKj_zqg" 
                    title="Best Out of Waste - Creative Ideas"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h4>Creative Project Ideas:</h4>
              
              <h5>From Plastic Bottles:</h5>
              <ul>
                <li>Planters and vertical gardens</li>
                <li>Pen holders and organizers</li>
                <li>Bird feeders</li>
                <li>Decorative lamps</li>
                <li>Storage containers</li>
              </ul>

              <h5>From Paper & Cardboard:</h5>
              <ul>
                <li>Paper bags and envelopes</li>
                <li>Wall art and frames</li>
                <li>Organizers and file holders</li>
                <li>Decorative items</li>
                <li>Gift boxes</li>
              </ul>

              <h5>From Fabric:</h5>
              <ul>
                <li>Tote bags from old clothes</li>
                <li>Cushion covers</li>
                <li>Quilts and rugs</li>
                <li>Accessories like headbands</li>
                <li>Soft toys</li>
              </ul>

              <div className="example-box">
                <h5>Competition Guidelines</h5>
                <ol>
                  <li>Use only waste/discarded materials</li>
                  <li>Create functional or decorative items</li>
                  <li>Prepare a brief description of your project</li>
                  <li>Explain the materials used and process</li>
                  <li>Judging criteria: Creativity, utility, presentation</li>
                </ol>
              </div>

              <h4>Steps to Organize Competition:</h4>
              <ol>
                <li>Announce competition with clear rules</li>
                <li>Set submission deadline (2-3 weeks)</li>
                <li>Arrange display area for exhibits</li>
                <li>Form judging panel</li>
                <li>Award prizes and certificates</li>
                <li>Display winning entries for inspiration</li>
              </ol>

              <h4>Benefits:</h4>
              <ul>
                <li>Reduces waste going to landfills</li>
                <li>Saves money by reusing materials</li>
                <li>Develops problem-solving skills</li>
                <li>Promotes environmental consciousness</li>
                <li>Encourages sustainable practices</li>
              </ul>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Poster Making Competition →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Poster Making Competition</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h4>Poster Making for Environmental Awareness:</h4>
              
              <div className="activity-gallery">
                <div className="activity-image">
                  <img src="/images/environmental-posters.jpg" alt="Environmental awareness posters" className="activity-photo" />
                  <p>Student-made environmental posters</p>
                </div>
                <div className="activity-image">
                  <img src="/images/poster-competition.jpg" alt="Poster making competition" className="activity-photo" />
                  <p>Poster making competition in progress</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>How to Create Effective Environmental Posters</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/2KqUvIIzIqg" 
                    title="Environmental Poster Design Tips"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h4>Environmental Awareness Through Posters:</h4>
              <p>Posters are powerful visual communication tools to spread environmental awareness and inspire action.</p>
              
              <h4>Poster Themes:</h4>
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/climate-change-poster.jpg" alt="Climate Change Poster" className="movie-poster" />
                  <h6>Climate Change</h6>
                  <p>Global warming awareness campaigns</p>
                </div>
                <div className="movie-card">
                  <img src="/images/save-water-poster.jpg" alt="Save Water Poster" className="movie-poster" />
                  <h6>Water Conservation</h6>
                  <p>Every drop counts messaging</p>
                </div>
                <div className="movie-card">
                  <img src="/images/plastic-free-poster.jpg" alt="Plastic Free Poster" className="movie-poster" />
                  <h6>Plastic-Free Living</h6>
                  <p>Say no to single-use plastics</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Creating Impactful Environmental Posters</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/2KqUvIIzIqg" 
                    title="Environmental Poster Design Workshop"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              <ul>
                <li><strong>Climate Change:</strong> Global warming, carbon footprint</li>
                <li><strong>Pollution:</strong> Air, water, soil, noise pollution</li>
                <li><strong>Conservation:</strong> Save water, energy, forests</li>
                <li><strong>Waste Management:</strong> Reduce, reuse, recycle</li>
                <li><strong>Biodiversity:</strong> Wildlife protection, endangered species</li>
                <li><strong>Sustainable Living:</strong> Green energy, eco-friendly practices</li>
              </ul>

              <h4>Effective Poster Design Elements:</h4>
              <ul>
                <li><strong>Clear Message:</strong> Simple, direct, memorable</li>
                <li><strong>Visual Impact:</strong> Eye-catching colors and images</li>
                <li><strong>Minimal Text:</strong> Short slogans and key points</li>
                <li><strong>Call to Action:</strong> Inspire specific behavior change</li>
                <li><strong>Readable Fonts:</strong> Large, clear typography</li>
              </ul>

              <h4>Powerful Environmental Slogans:</h4>
              <ul>
                <li>"Save Earth, Save Life"</li>
                <li>"Go Green, Breathe Clean"</li>
                <li>"Reduce, Reuse, Recycle"</li>
                <li>"Every Drop Counts - Save Water"</li>
                <li>"Plant Trees, Save Bees"</li>
                <li>"Think Before You Trash"</li>
                <li>"Be the Change, Save the Range"</li>
              </ul>

              <h4>Sign Making for Awareness:</h4>
              <p>Create signs for campus and community placement:</p>
              <ul>
                <li>Dustbin labels (Wet/Dry/Hazardous)</li>
                <li>"Switch Off Lights" reminders</li>
                <li>"Save Water" near taps</li>
                <li>"No Plastic Zone" markers</li>
                <li>"Keep Clean" area signs</li>
                <li>Tree plantation markers</li>
              </ul>

              <div className="example-box">
                <h5>Competition Format</h5>
                <p><strong>Materials Provided:</strong> Chart paper, colors, markers</p>
                <p><strong>Time Limit:</strong> 2-3 hours</p>
                <p><strong>Size:</strong> A3 or A2 size</p>
                <p><strong>Judging Criteria:</strong></p>
                <ul>
                  <li>Relevance to theme (30%)</li>
                  <li>Creativity and originality (30%)</li>
                  <li>Visual appeal (20%)</li>
                  <li>Message clarity (20%)</li>
                </ul>
              </div>

              <h4>Digital Poster Making:</h4>
              <p>Use digital tools for wider reach:</p>
              <ul>
                <li>Canva for easy design</li>
                <li>Adobe Photoshop for advanced editing</li>
                <li>Share on social media platforms</li>
                <li>Create infographics with data</li>
              </ul>

              <h4>Display and Impact:</h4>
              <ul>
                <li>Display in high-traffic areas</li>
                <li>Rotate posters regularly</li>
                <li>Create poster galleries</li>
                <li>Share digitally on campus portals</li>
                <li>Use in awareness campaigns</li>
              </ul>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Best Out of Waste</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Recycling Activities →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Recycling & Environmental Pollution</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h4>Recycling Process Demonstration:</h4>
              
              <div className="project-gallery">
                <div className="project-image">
                  <img src="/images/waste-segregation.jpg" alt="Waste segregation bins" className="project-photo" />
                  <p>Proper waste segregation system</p>
                </div>
                <div className="project-image">
                  <img src="/images/recycling-process.jpg" alt="Recycling process" className="project-photo" />
                  <p>Materials being processed for recycling</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Understanding Pollution and Its Effects</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/HQTUWK7CM-Y" 
                    title="Environmental Pollution Awareness"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h3>Understanding Recycling</h3>
              <p>Recycling converts waste materials into new products, reducing consumption of raw materials and energy.</p>
              
              <h4>Types of Recyclable Materials:</h4>
              <ul>
                <li><strong>Paper:</strong> Newspapers, cardboard, office paper</li>
                <li><strong>Plastic:</strong> PET bottles, HDPE containers</li>
                <li><strong>Glass:</strong> Bottles, jars, containers</li>
                <li><strong>Metal:</strong> Aluminum cans, steel containers</li>
                <li><strong>E-waste:</strong> Electronics, batteries, bulbs</li>
                <li><strong>Organic:</strong> Food waste, garden waste</li>
              </ul>

              <h4>Recycling Process:</h4>
              <ol>
                <li><strong>Collection:</strong> Gather recyclable materials</li>
                <li><strong>Sorting:</strong> Separate by material type</li>
                <li><strong>Cleaning:</strong> Remove contaminants</li>
                <li><strong>Processing:</strong> Convert to raw materials</li>
                <li><strong>Manufacturing:</strong> Create new products</li>
              </ol>

              <h4>Campus Recycling Activities:</h4>
              <ul>
                <li>Set up segregated waste bins</li>
                <li>Organize paper collection drives</li>
                <li>E-waste collection campaigns</li>
                <li>Plastic bottle collection points</li>
                <li>Composting organic waste</li>
                <li>Partner with recycling agencies</li>
              </ul>

              <h3>Environmental Pollution</h3>
              
              <h4>Types of Pollution:</h4>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/air-pollution.jpg" alt="Air Pollution" className="movie-poster" />
                  <h6>Air Pollution</h6>
                  <p>Smog and emissions affecting air quality</p>
                </div>
                <div className="movie-card">
                  <img src="/images/water-pollution.jpg" alt="Water Pollution" className="movie-poster" />
                  <h6>Water Pollution</h6>
                  <p>Industrial waste contaminating water bodies</p>
                </div>
                <div className="movie-card">
                  <img src="/images/plastic-pollution.jpg" alt="Plastic Pollution" className="movie-poster" />
                  <h6>Plastic Pollution</h6>
                  <p>Ocean and land contamination by plastics</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>The Impact of Environmental Pollution</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/HQTUWK7CM-Y" 
                    title="Environmental Pollution Documentary"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h5>1. Air Pollution</h5>
              <ul>
                <li><strong>Sources:</strong> Vehicles, industries, burning waste</li>
                <li><strong>Effects:</strong> Respiratory diseases, climate change</li>
                <li><strong>Solutions:</strong> Use public transport, plant trees, reduce emissions</li>
              </ul>

              <h5>2. Water Pollution</h5>
              <ul>
                <li><strong>Sources:</strong> Industrial discharge, sewage, plastic waste</li>
                <li><strong>Effects:</strong> Waterborne diseases, ecosystem damage</li>
                <li><strong>Solutions:</strong> Proper waste disposal, water treatment, reduce plastic</li>
              </ul>

              <h5>3. Soil Pollution</h5>
              <ul>
                <li><strong>Sources:</strong> Pesticides, industrial waste, landfills</li>
                <li><strong>Effects:</strong> Reduced fertility, food contamination</li>
                <li><strong>Solutions:</strong> Organic farming, proper waste management</li>
              </ul>

              <h5>4. Noise Pollution</h5>
              <ul>
                <li><strong>Sources:</strong> Traffic, construction, loudspeakers</li>
                <li><strong>Effects:</strong> Hearing loss, stress, sleep disturbance</li>
                <li><strong>Solutions:</strong> Noise barriers, regulations, awareness</li>
              </ul>

              <div className="example-box">
                <h5>Recycling Activity Plan</h5>
                <p><strong>Week 1:</strong> Awareness campaign about recycling</p>
                <p><strong>Week 2:</strong> Install segregated bins across campus</p>
                <p><strong>Week 3:</strong> Collection drive for paper and plastic</p>
                <p><strong>Week 4:</strong> Partner with recycling agency for pickup</p>
                <p><strong>Ongoing:</strong> Monitor and maintain recycling system</p>
              </div>

              <h4>Pollution Prevention Activities:</h4>
              <ul>
                <li>Organize clean-up drives</li>
                <li>Conduct pollution awareness workshops</li>
                <li>Monitor air and water quality</li>
                <li>Plant trees for air purification</li>
                <li>Promote eco-friendly alternatives</li>
                <li>Reduce single-use plastics</li>
              </ul>

              <h4>Benefits of Recycling:</h4>
              <ul>
                <li>Conserves natural resources</li>
                <li>Reduces landfill waste</li>
                <li>Saves energy and reduces emissions</li>
                <li>Creates employment opportunities</li>
                <li>Reduces pollution</li>
              </ul>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Poster Making</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Rainwater Harvesting →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.4</div>
              <div className="lesson-title-main">
                <h1>Rainwater Harvesting Management</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Introduction to Rainwater Harvesting</h3>
              <p>Rainwater harvesting is the collection and storage of rainwater for reuse before it reaches the ground.</p>
              
              <h4>Why Rainwater Harvesting?</h4>
              <ul>
                <li>Reduces dependence on groundwater</li>
                <li>Prevents water scarcity</li>
                <li>Recharges groundwater levels</li>
                <li>Reduces flooding and erosion</li>
                <li>Provides chemical-free water</li>
                <li>Cost-effective water source</li>
              </ul>

              <h4>Types of Rainwater Harvesting:</h4>
              
              <h5>1. Rooftop Rainwater Harvesting</h5>
              <ul>
                <li>Collect rainwater from building roofs</li>
                <li>Store in tanks or recharge pits</li>
                <li>Most common in urban areas</li>
                <li>Suitable for homes and institutions</li>
              </ul>

              <h5>2. Surface Runoff Harvesting</h5>
              <ul>
                <li>Collect water from ground surfaces</li>
                <li>Use ponds, lakes, or check dams</li>
                <li>Common in rural areas</li>
                <li>Suitable for agriculture</li>
              </ul>

              <h4>Rainwater Harvesting System Components:</h4>
              
              <div className="system-gallery">
                <div className="system-image">
                  <img src="/images/rainwater-harvesting-system.jpg" alt="Rainwater harvesting setup" className="system-photo" />
                  <p>Complete rainwater harvesting system</p>
                </div>
                <div className="system-image">
                  <img src="/images/rooftop-collection.jpg" alt="Rooftop water collection" className="system-photo" />
                  <p>Rooftop collection method</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>How to Set Up Rainwater Harvesting</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/bFqNubeuRy4" 
                    title="Rainwater Harvesting Setup Guide"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h4>Components of Rainwater Harvesting System:</h4>
              <ol>
                <li><strong>Catchment Area:</strong> Roof or ground surface</li>
                <li><strong>Gutters:</strong> Channels to collect water</li>
                <li><strong>Downpipes:</strong> Vertical pipes to transport water</li>
                <li><strong>First Flush:</strong> Device to remove initial dirty water</li>
                <li><strong>Filter:</strong> Removes debris and contaminants</li>
                <li><strong>Storage Tank:</strong> Stores collected water</li>
                <li><strong>Recharge Pit:</strong> Allows water to seep into ground</li>
              </ol>

              <h4>Calculation of Rainwater Potential:</h4>
              <p><strong>Formula:</strong> Rainwater (liters) = Roof Area (m²) × Rainfall (mm) × 0.8</p>
              <div className="example-box">
                <h5>Example Calculation</h5>
                <p>Roof Area: 100 m²</p>
                <p>Annual Rainfall: 1000 mm</p>
                <p>Runoff Coefficient: 0.8</p>
                <p><strong>Harvestable Water:</strong> 100 × 1000 × 0.8 = 80,000 liters/year</p>
              </div>

              <h4>Implementation Steps:</h4>
              <ol>
                <li>Assess rainfall patterns and roof area</li>
                <li>Design appropriate system</li>
                <li>Install gutters and downpipes</li>
                <li>Set up filtration system</li>
                <li>Install storage tank or recharge pit</li>
                <li>Connect to usage points</li>
                <li>Regular maintenance and cleaning</li>
              </ol>

              <h4>Campus Implementation Activities:</h4>
              <ul>
                <li>Survey existing rainwater systems</li>
                <li>Identify potential harvesting sites</li>
                <li>Design and install pilot project</li>
                <li>Create awareness about benefits</li>
                <li>Monitor water quality and quantity</li>
                <li>Document savings and impact</li>
              </ul>

              <h4>Maintenance Requirements:</h4>
              <ul>
                <li>Clean gutters before monsoon</li>
                <li>Check and clean filters regularly</li>
                <li>Inspect tanks for leaks</li>
                <li>Remove debris from catchment area</li>
                <li>Test water quality periodically</li>
                <li>Repair damaged components</li>
              </ul>

              <h4>Uses of Harvested Rainwater:</h4>
              <ul>
                <li>Gardening and landscaping</li>
                <li>Toilet flushing</li>
                <li>Washing vehicles and floors</li>
                <li>Groundwater recharge</li>
                <li>After treatment: Drinking and cooking</li>
              </ul>

              <h4>Benefits:</h4>
              <ul>
                <li>Reduces water bills</li>
                <li>Ensures water availability during scarcity</li>
                <li>Improves groundwater levels</li>
                <li>Reduces soil erosion</li>
                <li>Environmentally sustainable</li>
              </ul>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Recycling Activities</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Eco-Friendly Products →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.5</div>
              <div className="lesson-title-main">
                <h1>Eco-Friendly Product Management</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h4>Eco-Friendly Product Examples:</h4>
              
              <div className="project-gallery">
                <div className="project-image">
                  <img src="/images/eco-friendly-products.jpg" alt="Eco-friendly alternatives" className="project-photo" />
                  <p>Sustainable product alternatives</p>
                </div>
                <div className="project-image">
                  <img src="/images/bamboo-products.jpg" alt="Bamboo products" className="project-photo" />
                  <p>Bamboo-based eco-friendly items</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>DIY Eco-Friendly Products at Home</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/nrIHxklHBdg" 
                    title="Making Eco-Friendly Products at Home"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h3>Understanding Eco-Friendly Products</h3>
              <p>Eco-friendly products are designed to minimize environmental impact throughout their lifecycle.</p>
              
              <h4>Characteristics of Eco-Friendly Products:</h4>
              <ul>
                <li>Made from sustainable materials</li>
                <li>Biodegradable or recyclable</li>
                <li>Energy-efficient production</li>
                <li>Minimal packaging</li>
                <li>Non-toxic and safe</li>
                <li>Long-lasting and durable</li>
              </ul>

              <h4>Categories of Eco-Friendly Products:</h4>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/reusable-bags.jpg" alt="Reusable Shopping Bags" className="movie-poster" />
                  <h6>Reusable Items</h6>
                  <p>Cloth bags, steel bottles, containers</p>
                </div>
                <div className="movie-card">
                  <img src="/images/organic-products.jpg" alt="Organic Personal Care" className="movie-poster" />
                  <h6>Organic Care</h6>
                  <p>Natural soaps, shampoos, cosmetics</p>
                </div>
                <div className="movie-card">
                  <img src="/images/solar-gadgets.jpg" alt="Solar Powered Devices" className="movie-poster" />
                  <h6>Solar Devices</h6>
                  <p>Solar lights, chargers, cookers</p>
                </div>
              </div>
              
              <div className="video-section">
                <h6>Making Natural Products at Home</h6>
                <div className="video-container">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/nrIHxklHBdg" 
                    title="DIY Natural Products Tutorial"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              <h5>1. Daily Use Items</h5>
              <ul>
                <li><strong>Cloth bags</strong> instead of plastic bags</li>
                <li><strong>Steel/Glass bottles</strong> instead of plastic bottles</li>
                <li><strong>Bamboo toothbrushes</strong> instead of plastic ones</li>
                <li><strong>Natural soaps</strong> instead of chemical detergents</li>
                <li><strong>Reusable containers</strong> for food storage</li>
              </ul>

              <h5>2. Personal Care</h5>
              <ul>
                <li>Organic cosmetics and skincare</li>
                <li>Natural shampoo bars</li>
                <li>Biodegradable sanitary products</li>
                <li>Chemical-free deodorants</li>
                <li>Reusable cotton pads</li>
              </ul>

              <h5>3. Household Products</h5>
              <ul>
                <li>LED bulbs for energy efficiency</li>
                <li>Solar-powered devices</li>
                <li>Natural cleaning products</li>
                <li>Compost bins</li>
                <li>Water-saving fixtures</li>
              </ul>

              <h5>4. Stationery & Office</h5>
              <ul>
                <li>Recycled paper products</li>
                <li>Refillable pens</li>
                <li>Plantable pencils</li>
                <li>Eco-friendly notebooks</li>
                <li>Digital alternatives</li>
              </ul>

              <h4>Alternatives to Common Products:</h4>
              <div className="example-box">
                <h5>Product Substitutions</h5>
                <ul>
                  <li>Plastic straws → Steel/Bamboo straws</li>
                  <li>Plastic wrap → Beeswax wraps</li>
                  <li>Disposable plates → Leaf plates/Steel plates</li>
                  <li>Chemical cleaners → Vinegar, baking soda</li>
                  <li>Plastic cutlery → Bamboo/Steel cutlery</li>
                  <li>Paper towels → Cloth towels</li>
                </ul>
              </div>

              <h4>Campus Eco-Friendly Initiatives:</h4>
              <ul>
                <li><strong>Plastic-Free Campus:</strong> Ban single-use plastics</li>
                <li><strong>Green Stationery:</strong> Use recycled paper products</li>
                <li><strong>Sustainable Cafeteria:</strong> Biodegradable plates, steel cutlery</li>
                <li><strong>Eco-Friendly Events:</strong> Zero-waste event management</li>
                <li><strong>Green Procurement:</strong> Purchase eco-certified products</li>
              </ul>

              <h4>Promoting Eco-Friendly Products:</h4>
              
              <h5>Awareness Activities:</h5>
              <ul>
                <li>Organize eco-product exhibitions</li>
                <li>Conduct workshops on making natural products</li>
                <li>Create comparison charts (eco vs conventional)</li>
                <li>Invite eco-entrepreneurs for talks</li>
                <li>Distribute samples of eco-products</li>
              </ul>

              <h5>DIY Eco-Friendly Products:</h5>
              <ul>
                <li><strong>Natural Cleaner:</strong> Vinegar + water + essential oils</li>
                <li><strong>Cloth Bags:</strong> Stitch from old clothes</li>
                <li><strong>Compost:</strong> Kitchen waste + garden waste</li>
                <li><strong>Natural Air Freshener:</strong> Baking soda + essential oils</li>
                <li><strong>Reusable Wipes:</strong> Cut old towels into squares</li>
              </ul>

              <h4>Benefits of Eco-Friendly Products:</h4>
              <ul>
                <li><strong>Environmental:</strong> Reduces pollution and waste</li>
                <li><strong>Health:</strong> Non-toxic, safer for users</li>
                <li><strong>Economic:</strong> Long-term cost savings</li>
                <li><strong>Social:</strong> Supports sustainable businesses</li>
                <li><strong>Future:</strong> Preserves resources for next generation</li>
              </ul>

              <h4>Challenges and Solutions:</h4>
              <ul>
                <li><strong>Higher Initial Cost:</strong> Focus on long-term savings</li>
                <li><strong>Limited Availability:</strong> Support local eco-businesses</li>
                <li><strong>Lack of Awareness:</strong> Conduct education campaigns</li>
                <li><strong>Convenience Factor:</strong> Make eco-options easily accessible</li>
              </ul>

              <h4>Certification and Labels:</h4>
              <ul>
                <li>Eco-Mark (India)</li>
                <li>Energy Star</li>
                <li>Organic certifications</li>
                <li>Fair Trade labels</li>
                <li>FSC (Forest Stewardship Council)</li>
              </ul>

              <h4>Action Plan for Students:</h4>
              <ol>
                <li>Audit personal product usage</li>
                <li>Identify items to replace with eco-alternatives</li>
                <li>Start with easy swaps (bags, bottles)</li>
                <li>Gradually transition to more products</li>
                <li>Influence family and friends</li>
                <li>Share experiences on social media</li>
              </ol>
            </section>

            <div className="reference-section">
              <h3>Reference Materials</h3>
              <ul>
                <li><a href="https://www.nss.gov.in/" target="_blank" rel="noopener noreferrer">NSS Official Website</a></li>
                <li><a href="https://moef.gov.in/" target="_blank" rel="noopener noreferrer">Ministry of Environment, Forest and Climate Change</a></li>
                <li><a href="https://swachhbharatmission.gov.in/" target="_blank" rel="noopener noreferrer">Swachh Bharat Mission</a></li>
              </ul>
            </div>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Rainwater Harvesting</button>
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