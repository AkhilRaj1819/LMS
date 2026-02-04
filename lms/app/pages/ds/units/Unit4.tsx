'use client';
import React from 'react';

interface Unit4Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit4: React.FC<Unit4Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.1</div>
              <div className="lesson-title-main">
                <h1>Graph Types and Terminology</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Graph Theory Fundamentals</h3>
              <p>Graphs are mathematical structures used to model pairwise relationships between objects. A graph consists of vertices (nodes) connected by edges (links), providing a powerful abstraction for representing networks, relationships, and complex systems.</p>
              
              <h4>Mathematical Foundation of Graph Theory</h4>
              <p>Graphs provide a formal framework for modeling relationships:</p>
              <ul>
                <li><strong>Discrete Mathematics:</strong> Foundation for combinatorial optimization</li>
                <li><strong>Set Theory:</strong> Vertices and edges as mathematical sets</li>
                <li><strong>Relation Theory:</strong> Binary relations between entities</li>
                <li><strong>Algorithmic Complexity:</strong> Computational analysis of graph problems</li>
              </ul>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/graph-fundamentals.jpg" alt="Graph Fundamentals" className="movie-poster" />
                  <h6>Graph Fundamentals</h6>
                  <p>Vertices, edges, and basic concepts</p>
                </div>
                <div className="movie-card">
                  <img src="/images/graph-types.jpg" alt="Graph Types" className="movie-poster" />
                  <h6>Graph Types</h6>
                  <p>Directed, undirected, weighted graphs</p>
                </div>
                <div className="movie-card">
                  <img src="/images/graph-properties.jpg" alt="Graph Properties" className="movie-poster" />
                  <h6>Graph Properties</h6>
                  <p>Connectivity, cycles, and characteristics</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/gXgEDyodOJU" 
                  title="Graph Theory Introduction"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Introduction to Graph Theory</p>
              </div>

              <h4>Essential Graph Terminology</h4>
              <h6>Core Graph Components</h6>
              <ul>
                <li><strong>Vertex/Node:</strong> Fundamental unit representing an entity or object</li>
                <li><strong>Edge/Arc:</strong> Connection between two vertices representing relationship</li>
                <li><strong>Adjacent Vertices:</strong> Vertices connected directly by an edge</li>
                <li><strong>Incident Edge:</strong> Edge connected to a particular vertex</li>
                <li><strong>Degree:</strong> Number of edges incident to a vertex</li>
                <li><strong>Path:</strong> Sequence of vertices connected by edges</li>
                <li><strong>Cycle:</strong> Path that starts and ends at the same vertex</li>
                <li><strong>Weight:</strong> Numeric value assigned to an edge</li>
              </ul>
              
              <h4>Comprehensive Graph Classifications</h4>
              <div className="example-box">
                <h5>Graph Type Analysis</h5>
                <div className="operation-details">
                  <h6>Directional Classification</h6>
                  <ul>
                    <li><strong>Undirected Graph:</strong> Edges have no direction, bidirectional traversal</li>
                    <li><strong>Directed Graph (Digraph):</strong> Edges have direction, unidirectional traversal</li>
                    <li><strong>Mixed Graph:</strong> Contains both directed and undirected edges</li>
                  </ul>
                  
                  <h6>Weight Classification</h6>
                  <ul>
                    <li><strong>Weighted Graph:</strong> Edges have associated weights or costs</li>
                    <li><strong>Unweighted Graph:</strong> All edges considered equal</li>
                    <li><strong>Positive Weighted:</strong> All edge weights are positive</li>
                    <li><strong>Negative Weighted:</strong> Contains edges with negative weights</li>
                  </ul>
                  
                  <h6>Structural Classification</h6>
                  <ul>
                    <li><strong>Simple Graph:</strong> No self-loops or multiple edges</li>
                    <li><strong>Multigraph:</strong> Multiple edges between same vertices allowed</li>
                    <li><strong>Pseudograph:</strong> Self-loops and multiple edges allowed</li>
                    <li><strong>Complete Graph:</strong> Every vertex connected to every other vertex</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Graph Properties</h4>
              <div className="definition-box">
                <h6>Connectivity and Structure</h6>
                <ul>
                  <li><strong>Connected Graph:</strong> Path exists between every pair of vertices</li>
                  <li><strong>Disconnected Graph:</strong> Contains isolated components</li>
                  <li><strong>Strongly Connected:</strong> Path exists between every pair in directed graph</li>
                  <li><strong>Weakly Connected:</strong> Connected when treating directed as undirected</li>
                  <li><strong>Bipartite Graph:</strong> Vertices can be divided into two disjoint sets</li>
                  <li><strong>Planar Graph:</strong> Can be drawn without edge crossings</li>
                </ul>
              </div>

              <h4>Graph Density and Complexity Metrics</h4>
              <div className="example-box">
                <h5>Quantitative Graph Analysis</h5>
                <ul>
                  <li><strong>Sparse Graph:</strong> Relatively few edges compared to vertices (E ≪ V²)</li>
                  <li><strong>Dense Graph:</strong> Many edges, approaching complete graph (E ≈ V²)</li>
                  <li><strong>Graph Density:</strong> Ratio of actual edges to maximum possible edges</li>
                  <li><strong>Diameter:</strong> Longest shortest path between any two vertices</li>
                  <li><strong>Radius:</strong> Minimum eccentricity among all vertices</li>
                  <li><strong>Girth:</strong> Length of shortest cycle in the graph</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Graph Fundamentals and Basic Operations</h5>
                <p>Implement basic graph structure with vertex and edge management operations.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Graph Fundamentals Implementation"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Graph Representations →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.2</div>
              <div className="lesson-title-main">
                <h1>Graph Representations</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Efficient Graph Storage and Access Methods</h3>
              <p>Graph representation determines how vertices and edges are stored in memory, directly impacting the efficiency of graph algorithms. Different representations optimize for different operations and graph characteristics.</p>
              
              <div className="theory-box">
                <h5>Representation Theory and Trade-offs</h5>
                <p>Understanding the computational implications of different storage methods:</p>
                <ul>
                  <li><strong>Space Complexity:</strong> Memory requirements for vertices and edges</li>
                  <li><strong>Time Complexity:</strong> Access patterns for common operations</li>
                  <li><strong>Cache Performance:</strong> Memory locality and access patterns</li>
                  <li><strong>Algorithm Suitability:</strong> Optimization for specific graph algorithms</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/adjacency-matrix.jpg" alt="Adjacency Matrix" className="movie-poster" />
                  <h6>Adjacency Matrix</h6>
                  <p>2D array representation</p>
                </div>
                <div className="movie-card">
                  <img src="/images/adjacency-list.jpg" alt="Adjacency List" className="movie-poster" />
                  <h6>Adjacency List</h6>
                  <p>Linked list representation</p>
                </div>
                <div className="movie-card">
                  <img src="/images/edge-list.jpg" alt="Edge List" className="movie-poster" />
                  <h6>Edge List</h6>
                  <p>Simple edge storage method</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/k1wraWzqtvQ" 
                  title="Graph Representations"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Graph Representation Methods</p>
              </div>

              <h4>Adjacency Matrix Representation</h4>
              <div className="definition-box">
                <h6>Matrix-Based Storage</h6>
                <ul>
                  <li><strong>Structure:</strong> V × V matrix where matrix[i][j] indicates edge from i to j</li>
                  <li><strong>Space Complexity:</strong> O(V²) - fixed regardless of edge count</li>
                  <li><strong>Edge Check:</strong> O(1) - direct array access</li>
                  <li><strong>Add/Remove Edge:</strong> O(1) - simple matrix update</li>
                  <li><strong>Vertex Addition:</strong> O(V²) - requires matrix resize</li>
                  <li><strong>Memory Usage:</strong> High for sparse graphs, efficient for dense graphs</li>
                </ul>
              </div>
              
              <h4>Adjacency List Representation</h4>
              <div className="example-box">
                <h5>List-Based Dynamic Storage</h5>
                <div className="operation-details">
                  <h6>Structure and Implementation</h6>
                  <ul>
                    <li><strong>Organization:</strong> Array of lists, each list contains neighbors</li>
                    <li><strong>Space Complexity:</strong> O(V + E) - proportional to actual edges</li>
                    <li><strong>Edge Check:</strong> O(degree(v)) - linear search in neighbor list</li>
                    <li><strong>Add Edge:</strong> O(1) - append to list</li>
                    <li><strong>Remove Edge:</strong> O(degree(v)) - search and remove</li>
                  </ul>
                  
                  <h6>Variations and Optimizations</h6>
                  <ul>
                    <li><strong>Sorted Lists:</strong> Binary search for O(log degree) edge checks</li>
                    <li><strong>Hash Sets:</strong> O(1) average edge operations</li>
                    <li><strong>Balanced Trees:</strong> O(log degree) guaranteed operations</li>
                    <li><strong>Compressed Storage:</strong> Bit vectors for boolean adjacency</li>
                  </ul>
                </div>
              </div>

              <h4>Alternative Representation Methods</h4>
              <div className="definition-box">
                <h6>Specialized Storage Approaches</h6>
                <ul>
                  <li><strong>Edge List:</strong> Simple list of edge pairs - O(E) space, O(E) edge checks</li>
                  <li><strong>Incidence Matrix:</strong> V × E matrix for vertex-edge relationships</li>
                  <li><strong>Compressed Sparse Row (CSR):</strong> Efficient for sparse matrices</li>
                  <li><strong>Forward Star:</strong> Sorted edge list with vertex pointers</li>
                  <li><strong>Succinct Representations:</strong> Space-optimal encodings</li>
                </ul>
              </div>

              <h4>Comparative Analysis and Selection Criteria</h4>
              <div className="example-box">
                <h5>Representation Selection Guidelines</h5>
                <div className="operation-details">
                  <h6>Adjacency Matrix - Best For:</h6>
                  <ul>
                    <li>Dense graphs (E ≈ V²)</li>
                    <li>Frequent edge existence queries</li>
                    <li>Matrix-based algorithms (Floyd-Warshall)</li>
                    <li>Small graphs where memory is not a concern</li>
                  </ul>
                  
                  <h6>Adjacency List - Best For:</h6>
                  <ul>
                    <li>Sparse graphs (E ≪ V²)</li>
                    <li>Graph traversal algorithms (BFS, DFS)</li>
                    <li>Dynamic graphs with frequent edge additions</li>
                    <li>Memory-constrained environments</li>
                  </ul>
                  
                  <h6>Edge List - Best For:</h6>
                  <ul>
                    <li>Simple graph processing</li>
                    <li>Sorting edges by weight (MST algorithms)</li>
                    <li>Streaming graph algorithms</li>
                    <li>Minimal memory footprint requirements</li>
                  </ul>
                </div>
              </div>

              <h4>Implementation Considerations</h4>
              <div className="example-box">
                <h5>Practical Implementation Details</h5>
                <ul>
                  <li><strong>Memory Alignment:</strong> Cache-friendly data layout</li>
                  <li><strong>Dynamic Resizing:</strong> Handling graph growth efficiently</li>
                  <li><strong>Parallel Access:</strong> Thread-safe operations for concurrent algorithms</li>
                  <li><strong>Compression:</strong> Reducing memory footprint for large graphs</li>
                  <li><strong>Persistence:</strong> Serialization and deserialization strategies</li>
                  <li><strong>Hybrid Approaches:</strong> Combining multiple representations</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Graph Representation Implementation</h5>
                <p>Implement both adjacency matrix and adjacency list representations with comparison.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Graph Representations"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Graph Types</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">BFS and DFS →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.3</div>
              <div className="lesson-title-main">
                <h1>Graph Traversals: BFS and DFS</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Systematic Graph Exploration Algorithms</h3>
              <p>Graph traversal algorithms provide systematic methods for visiting all vertices in a graph. BFS and DFS form the foundation for numerous graph algorithms and applications, each offering unique advantages for different problem domains.</p>
              
              <div className="theory-box">
                <h5>Traversal Algorithm Theory</h5>
                <p>Understanding the mathematical foundations of graph exploration:</p>
                <ul>
                  <li><strong>Completeness:</strong> Guarantee of visiting all reachable vertices</li>
                  <li><strong>Optimality:</strong> Finding shortest paths in unweighted graphs</li>
                  <li><strong>Time Complexity:</strong> Linear in vertices and edges O(V + E)</li>
                  <li><strong>Space Complexity:</strong> Dependent on graph structure and algorithm</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/bfs-algorithm.jpg" alt="BFS Algorithm" className="movie-poster" />
                  <h6>BFS Algorithm</h6>
                  <p>Breadth-first exploration pattern</p>
                </div>
                <div className="movie-card">
                  <img src="/images/dfs-algorithm.jpg" alt="DFS Algorithm" className="movie-poster" />
                  <h6>DFS Algorithm</h6>
                  <p>Depth-first exploration pattern</p>
                </div>
                <div className="movie-card">
                  <img src="/images/traversal-comparison.jpg" alt="Traversal Comparison" className="movie-poster" />
                  <h6>Algorithm Comparison</h6>
                  <p>BFS vs DFS characteristics</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/oDqjPvD54Ss" 
                  title="BFS and DFS Algorithms"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>BFS and DFS Graph Traversal Algorithms</p>
              </div>

              <h4>Breadth-First Search (BFS) Algorithm</h4>
              <div className="definition-box">
                <h6>BFS Characteristics and Properties</h6>
                <ul>
                  <li><strong>Exploration Pattern:</strong> Level-by-level traversal from source</li>
                  <li><strong>Data Structure:</strong> Queue (FIFO) for vertex processing</li>
                  <li><strong>Shortest Path:</strong> Finds shortest path in unweighted graphs</li>
                  <li><strong>Time Complexity:</strong> O(V + E) for adjacency list representation</li>
                  <li><strong>Space Complexity:</strong> O(V) for queue and visited array</li>
                  <li><strong>Completeness:</strong> Visits all vertices reachable from source</li>
                </ul>
              </div>
              
              <h4>Depth-First Search (DFS) Algorithm</h4>
              <div className="example-box">
                <h5>DFS Implementation Strategies</h5>
                <div className="operation-details">
                  <h6>Recursive DFS Implementation</h6>
                  <ul>
                    <li><strong>Approach:</strong> Uses function call stack implicitly</li>
                    <li><strong>Space Complexity:</strong> O(V) for recursion stack in worst case</li>
                    <li><strong>Advantages:</strong> Clean, intuitive implementation</li>
                    <li><strong>Disadvantages:</strong> Stack overflow risk for deep graphs</li>
                  </ul>
                  
                  <h6>Iterative DFS Implementation</h6>
                  <ul>
                    <li><strong>Approach:</strong> Uses explicit stack data structure</li>
                    <li><strong>Control:</strong> Better control over stack size and memory</li>
                    <li><strong>Flexibility:</strong> Can modify traversal order easily</li>
                    <li><strong>Robustness:</strong> Avoids recursion depth limitations</li>
                  </ul>
                  
                  <h6>DFS Applications and Variants</h6>
                  <ul>
                    <li><strong>Cycle Detection:</strong> Identifies cycles in directed/undirected graphs</li>
                    <li><strong>Topological Sorting:</strong> Linear ordering of DAG vertices</li>
                    <li><strong>Connected Components:</strong> Finds disconnected graph components</li>
                    <li><strong>Path Finding:</strong> Discovers paths between vertices</li>
                  </ul>
                </div>
              </div>

              <h4>Algorithm Comparison and Analysis</h4>
              <div className="definition-box">
                <h6>BFS vs DFS Comparative Analysis</h6>
                <ul>
                  <li><strong>Memory Usage:</strong> BFS higher (stores level), DFS lower (path only)</li>
                  <li><strong>Shortest Path:</strong> BFS guarantees shortest, DFS does not</li>
                  <li><strong>Implementation:</strong> BFS iterative only, DFS recursive or iterative</li>
                  <li><strong>Applications:</strong> BFS for shortest paths, DFS for connectivity</li>
                  <li><strong>Graph Type:</strong> Both work on directed and undirected graphs</li>
                  <li><strong>Completeness:</strong> Both visit all reachable vertices</li>
                </ul>
              </div>

              <h4>Advanced Traversal Applications</h4>
              <div className="example-box">
                <h5>Real-World Traversal Applications</h5>
                <div className="operation-details">
                  <h6>BFS Applications</h6>
                  <ul>
                    <li><strong>Shortest Path:</strong> Unweighted graph shortest path finding</li>
                    <li><strong>Level-Order Processing:</strong> Processing nodes by distance from source</li>
                    <li><strong>Bipartite Testing:</strong> Checking if graph is bipartite</li>
                    <li><strong>Web Crawling:</strong> Systematic web page exploration</li>
                  </ul>
                  
                  <h6>DFS Applications</h6>
                  <ul>
                    <li><strong>Maze Solving:</strong> Finding paths through mazes</li>
                    <li><strong>Puzzle Solving:</strong> Backtracking in constraint satisfaction</li>
                    <li><strong>Compiler Design:</strong> Syntax tree traversal</li>
                    <li><strong>Game AI:</strong> Game tree exploration</li>
                  </ul>
                  
                  <h6>Specialized Traversal Variants</h6>
                  <ul>
                    <li><strong>Bidirectional Search:</strong> BFS from both source and target</li>
                    <li><strong>Iterative Deepening:</strong> DFS with increasing depth limits</li>
                    <li><strong>Best-First Search:</strong> Priority-based exploration</li>
                    <li><strong>A* Search:</strong> Heuristic-guided pathfinding</li>
                  </ul>
                </div>
              </div>

              <h4>Implementation Optimization Techniques</h4>
              <div className="example-box">
                <h5>Performance Enhancement Strategies</h5>
                <ul>
                  <li><strong>Early Termination:</strong> Stop when target found</li>
                  <li><strong>Visited Optimization:</strong> Efficient visited set implementation</li>
                  <li><strong>Memory Management:</strong> Reusing data structures across calls</li>
                  <li><strong>Parallel Traversal:</strong> Multi-threaded exploration strategies</li>
                  <li><strong>Cache Optimization:</strong> Memory-friendly access patterns</li>
                  <li><strong>Preprocessing:</strong> Graph preprocessing for faster traversals</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: BFS and DFS Implementation</h5>
                <p>Implement both BFS and DFS algorithms with path tracking and component detection.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="BFS and DFS Implementation"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Graph Representations</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Graph Applications →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.4</div>
              <div className="lesson-title-main">
                <h1>Graph Applications: MST and Shortest Path</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Advanced Graph Algorithms for Optimization Problems</h3>
              <p>Minimum Spanning Trees and Shortest Path algorithms solve fundamental optimization problems in graph theory, with applications spanning network design, routing protocols, and resource allocation in complex systems.</p>
              
              <div className="theory-box">
                <h5>Optimization Theory in Graph Algorithms</h5>
                <p>Understanding the mathematical foundations of graph optimization:</p>
                <ul>
                  <li><strong>Greedy Algorithms:</strong> Local optimal choices leading to global optimum</li>
                  <li><strong>Dynamic Programming:</strong> Optimal substructure in shortest path problems</li>
                  <li><strong>Cut Property:</strong> Theoretical foundation for MST algorithms</li>
                  <li><strong>Relaxation Technique:</strong> Iterative improvement in distance estimation</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/mst-algorithms.jpg" alt="MST Algorithms" className="movie-poster" />
                  <h6>MST Algorithms</h6>
                  <p>Kruskal's and Prim's algorithms</p>
                </div>
                <div className="movie-card">
                  <img src="/images/shortest-path.jpg" alt="Shortest Path" className="movie-poster" />
                  <h6>Shortest Path</h6>
                  <p>Dijkstra's and Bellman-Ford algorithms</p>
                </div>
                <div className="movie-card">
                  <img src="/images/graph-optimization.jpg" alt="Graph Optimization" className="movie-poster" />
                  <h6>Graph Optimization</h6>
                  <p>Network optimization applications</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/4ZlRH0eK-qQ" 
                  title="MST and Shortest Path Algorithms"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Minimum Spanning Tree and Shortest Path Algorithms</p>
              </div>

              <h4>Minimum Spanning Tree (MST) Algorithms</h4>
              <div className="definition-box">
                <h6>MST Problem Definition and Properties</h6>
                <ul>
                  <li><strong>Definition:</strong> Subset of edges connecting all vertices with minimum total weight</li>
                  <li><strong>Properties:</strong> Exactly V-1 edges, no cycles, connects all vertices</li>
                  <li><strong>Uniqueness:</strong> MST is unique if all edge weights are distinct</li>
                  <li><strong>Cut Property:</strong> Minimum weight edge crossing any cut is in some MST</li>
                  <li><strong>Cycle Property:</strong> Maximum weight edge in any cycle is not in MST</li>
                  <li><strong>Applications:</strong> Network design, clustering, approximation algorithms</li>
                </ul>
              </div>
              
              <h4>Kruskal's Algorithm</h4>
              <div className="example-box">
                <h5>Edge-Based MST Construction</h5>
                <div className="operation-details">
                  <h6>Algorithm Strategy</h6>
                  <ul>
                    <li><strong>Approach:</strong> Sort edges by weight, add minimum weight edges avoiding cycles</li>
                    <li><strong>Data Structure:</strong> Union-Find (Disjoint Set) for cycle detection</li>
                    <li><strong>Time Complexity:</strong> O(E log E) dominated by edge sorting</li>
                    <li><strong>Space Complexity:</strong> O(V) for Union-Find structure</li>
                  </ul>
                  
                  <h6>Union-Find Optimization</h6>
                  <ul>
                    <li><strong>Path Compression:</strong> Flatten tree structure during find operations</li>
                    <li><strong>Union by Rank:</strong> Attach smaller tree under larger tree root</li>
                    <li><strong>Amortized Complexity:</strong> Nearly O(1) per operation with optimizations</li>
                    <li><strong>Inverse Ackermann:</strong> Theoretical bound α(n) for practical purposes</li>
                  </ul>
                </div>
              </div>

              <h4>Prim's Algorithm</h4>
              <div className="definition-box">
                <h6>Vertex-Based MST Construction</h6>
                <ul>
                  <li><strong>Approach:</strong> Grow MST one vertex at a time from arbitrary start</li>
                  <li><strong>Data Structure:</strong> Priority queue for minimum weight edge selection</li>
                  <li><strong>Time Complexity:</strong> O(E log V) with binary heap, O(E + V log V) with Fibonacci heap</li>
                  <li><strong>Space Complexity:</strong> O(V) for priority queue and key arrays</li>
                  <li><strong>Advantage:</strong> Better for dense graphs, produces MST incrementally</li>
                  <li><strong>Implementation:</strong> Maintains cut between MST and remaining vertices</li>
                </ul>
              </div>

              <h4>Shortest Path Algorithms</h4>
              <div className="example-box">
                <h5>Single-Source Shortest Path Problems</h5>
                <div className="operation-details">
                  <h6>Dijkstra's Algorithm</h6>
                  <ul>
                    <li><strong>Constraint:</strong> Non-negative edge weights only</li>
                    <li><strong>Strategy:</strong> Greedy selection of minimum distance vertex</li>
                    <li><strong>Time Complexity:</strong> O((V + E) log V) with priority queue</li>
                    <li><strong>Optimality:</strong> Guarantees shortest paths from single source</li>
                  </ul>
                  
                  <h6>Bellman-Ford Algorithm</h6>
                  <ul>
                    <li><strong>Capability:</strong> Handles negative edge weights</li>
                    <li><strong>Strategy:</strong> Relaxation of all edges V-1 times</li>
                    <li><strong>Time Complexity:</strong> O(VE) - slower but more general</li>
                    <li><strong>Cycle Detection:</strong> Detects negative weight cycles</li>
                  </ul>
                  
                  <h6>Floyd-Warshall Algorithm</h6>
                  <ul>
                    <li><strong>Problem:</strong> All-pairs shortest paths</li>
                    <li><strong>Strategy:</strong> Dynamic programming with intermediate vertices</li>
                    <li><strong>Time Complexity:</strong> O(V³) - suitable for small dense graphs</li>
                    <li><strong>Space Complexity:</strong> O(V²) for distance matrix</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Applications and Extensions</h4>
              <div className="definition-box">
                <h6>Real-World Problem Applications</h6>
                <ul>
                  <li><strong>Network Design:</strong> Minimum cost network connectivity</li>
                  <li><strong>GPS Navigation:</strong> Shortest route calculation</li>
                  <li><strong>Internet Routing:</strong> Optimal packet routing protocols</li>
                  <li><strong>VLSI Design:</strong> Minimum wire length in circuit layout</li>
                  <li><strong>Social Networks:</strong> Influence propagation and community detection</li>
                  <li><strong>Bioinformatics:</strong> Phylogenetic tree construction</li>
                </ul>
              </div>

              <h4>Algorithm Selection and Optimization</h4>
              <div className="example-box">
                <h5>Choosing the Right Algorithm</h5>
                <div className="operation-details">
                  <h6>MST Algorithm Selection</h6>
                  <ul>
                    <li><strong>Sparse Graphs:</strong> Kruskal's algorithm preferred</li>
                    <li><strong>Dense Graphs:</strong> Prim's algorithm more efficient</li>
                    <li><strong>Online Processing:</strong> Prim's for incremental MST construction</li>
                    <li><strong>Parallel Processing:</strong> Kruskal's more amenable to parallelization</li>
                  </ul>
                  
                  <h6>Shortest Path Algorithm Selection</h6>
                  <ul>
                    <li><strong>Non-negative Weights:</strong> Dijkstra's algorithm optimal</li>
                    <li><strong>Negative Weights:</strong> Bellman-Ford required</li>
                    <li><strong>All-Pairs:</strong> Floyd-Warshall for small graphs</li>
                    <li><strong>Large Graphs:</strong> Johnson's algorithm for all-pairs</li>
                  </ul>
                </div>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: MST and Shortest Path Implementation</h5>
                <p>Implement Kruskal's MST algorithm and Dijkstra's shortest path algorithm.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="MST and Shortest Path Algorithms"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← BFS and DFS</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Practical Experiments →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">4.5</div>
              <div className="lesson-title-main">
                <h1>Practical Experiments</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Advanced Graph Algorithm Implementation</h3>
              <p>Apply comprehensive graph theory knowledge to implement sophisticated algorithms for directed graph traversal, demonstrating mastery of graph data structures and algorithmic techniques.</p>
              
              <div className="theory-box">
                <h5>Experiment Objectives and Learning Outcomes</h5>
                <ul>
                  <li><strong>Algorithm Implementation:</strong> Practical coding of graph traversal algorithms</li>
                  <li><strong>Data Structure Mastery:</strong> Efficient graph representation and manipulation</li>
                  <li><strong>Complexity Analysis:</strong> Understanding time and space trade-offs</li>
                  <li><strong>Problem Solving:</strong> Handling edge cases and optimization challenges</li>
                </ul>
              </div>
              
              <h4>Experiment 1: Directed Graph DFS Traversal</h4>
              <div className="definition-box">
                <h6>Problem Specification and Requirements</h6>
                <ul>
                  <li><strong>Objective:</strong> Implement DFS traversal for directed graphs</li>
                  <li><strong>Features:</strong> Handle disconnected components and cycle detection</li>
                  <li><strong>Implementations:</strong> Both recursive and iterative approaches</li>
                  <li><strong>Extensions:</strong> Topological sorting and strongly connected components</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Comprehensive DFS Implementation Strategy</h5>
                <div className="operation-details">
                  <h6>Algorithm Design Considerations</h6>
                  <ul>
                    <li><strong>Graph Representation:</strong> Adjacency list for efficient traversal</li>
                    <li><strong>Visited Tracking:</strong> Boolean array to prevent revisiting</li>
                    <li><strong>Component Handling:</strong> Iterate through all vertices for completeness</li>
                    <li><strong>Path Reconstruction:</strong> Maintain parent pointers for path tracking</li>
                  </ul>
                  
                  <h6>Advanced Features Implementation</h6>
                  <ul>
                    <li><strong>Cycle Detection:</strong> Use recursion stack to identify back edges</li>
                    <li><strong>Topological Sort:</strong> Post-order DFS for DAG vertex ordering</li>
                    <li><strong>SCC Detection:</strong> Kosaraju's algorithm using DFS twice</li>
                    <li><strong>Time Stamps:</strong> Discovery and finish times for analysis</li>
                  </ul>
                  
                  <h6>Performance Optimization</h6>
                  <ul>
                    <li><strong>Memory Management:</strong> Efficient data structure usage</li>
                    <li><strong>Early Termination:</strong> Stop when specific conditions met</li>
                    <li><strong>Iterative Implementation:</strong> Avoid stack overflow for deep graphs</li>
                    <li><strong>Cache Optimization:</strong> Memory-friendly access patterns</li>
                  </ul>
                </div>
              </div>

              <div className="compiler-section">
                <h5>🎯 Experiment 1: Directed Graph DFS Traversal Implementation</h5>
                <p>Write a comprehensive program to traverse a directed graph using DFS with cycle detection and topological sorting.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Directed Graph DFS Traversal"
                ></iframe>
              </div>

              <h4>Extended Graph Algorithm Challenges</h4>
              <div className="definition-box">
                <h6>Additional Implementation Challenges</h6>
                <ul>
                  <li><strong>Strongly Connected Components:</strong> Kosaraju's or Tarjan's algorithm</li>
                  <li><strong>Articulation Points:</strong> Critical vertices in graph connectivity</li>
                  <li><strong>Bridge Detection:</strong> Critical edges for graph connectivity</li>
                  <li><strong>Bipartite Testing:</strong> Two-coloring using DFS</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Advanced Graph Analysis Algorithms</h5>
                <div className="operation-details">
                  <h6>Strongly Connected Components (SCC)</h6>
                  <ul>
                    <li><strong>Kosaraju's Algorithm:</strong> Two DFS passes on original and transposed graph</li>
                    <li><strong>Tarjan's Algorithm:</strong> Single DFS pass with low-link values</li>
                    <li><strong>Applications:</strong> Web graph analysis, social network clustering</li>
                    <li><strong>Time Complexity:</strong> O(V + E) for both algorithms</li>
                  </ul>
                  
                  <h6>Articulation Points and Bridges</h6>
                  <ul>
                    <li><strong>Articulation Points:</strong> Vertices whose removal increases components</li>
                    <li><strong>Bridges:</strong> Edges whose removal increases components</li>
                    <li><strong>Tarjan's Algorithm:</strong> DFS-based approach with discovery times</li>
                    <li><strong>Applications:</strong> Network reliability, critical infrastructure</li>
                  </ul>
                  
                  <h6>Graph Coloring and Bipartite Testing</h6>
                  <ul>
                    <li><strong>Two-Coloring:</strong> DFS-based bipartite graph detection</li>
                    <li><strong>Graph Coloring:</strong> Minimum colors for proper vertex coloring</li>
                    <li><strong>Chromatic Number:</strong> Minimum colors needed for graph</li>
                    <li><strong>Applications:</strong> Scheduling, register allocation, map coloring</li>
                  </ul>
                </div>
              </div>

              <div className="compiler-section">
                <h5>🎯 Extended Challenge: Advanced Graph Algorithms</h5>
                <p>Implement strongly connected components detection and articulation points finding algorithms.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Advanced Graph Algorithms"
                ></iframe>
              </div>

              <h4>Performance Analysis and Complexity Study</h4>
              <div className="example-box">
                <h5>Algorithm Complexity Analysis</h5>
                <div className="operation-details">
                  <h6>Time Complexity Analysis</h6>
                  <ul>
                    <li><strong>DFS Traversal:</strong> O(V + E) - visits each vertex and edge once</li>
                    <li><strong>Cycle Detection:</strong> O(V + E) - integrated with DFS traversal</li>
                    <li><strong>Topological Sort:</strong> O(V + E) - post-order DFS processing</li>
                    <li><strong>SCC Detection:</strong> O(V + E) - two DFS passes maximum</li>
                  </ul>
                  
                  <h6>Space Complexity Analysis</h6>
                  <ul>
                    <li><strong>Adjacency List:</strong> O(V + E) - proportional to graph size</li>
                    <li><strong>Visited Array:</strong> O(V) - boolean array for all vertices</li>
                    <li><strong>Recursion Stack:</strong> O(V) - worst case for linear graph</li>
                    <li><strong>Additional Arrays:</strong> O(V) - for timestamps, colors, etc.</li>
                  </ul>
                  
                  <h6>Optimization Strategies</h6>
                  <ul>
                    <li><strong>Memory Optimization:</strong> Bit vectors for visited tracking</li>
                    <li><strong>Cache Optimization:</strong> Locality-aware graph representation</li>
                    <li><strong>Parallel Processing:</strong> Independent component processing</li>
                    <li><strong>Early Termination:</strong> Stop when objectives achieved</li>
                  </ul>
                </div>
              </div>

              <h4>Testing and Validation Framework</h4>
              <div className="example-box">
                <h5>Comprehensive Testing Strategy</h5>
                <ul>
                  <li><strong>Edge Cases:</strong> Empty graphs, single vertex, disconnected components</li>
                  <li><strong>Cycle Testing:</strong> Graphs with and without cycles</li>
                  <li><strong>Performance Testing:</strong> Large graphs with varying densities</li>
                  <li><strong>Correctness Validation:</strong> Compare with known correct outputs</li>
                  <li><strong>Stress Testing:</strong> Maximum size graphs within memory limits</li>
                  <li><strong>Regression Testing:</strong> Ensure modifications don't break functionality</li>
                </ul>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Graph Applications</button>
              {onBack && (
                <button onClick={onBack} className="next-module-btn">Back to Course →</button>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="module-content">
            <h2>Select a module to begin</h2>
          </div>
        );
    }
  };

  return <div className="unit-container">{renderModule()}</div>;
};

export default Unit4;