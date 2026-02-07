'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit4Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const module1Quiz = [
  {
    question: "What is the maximum number of edges in a simple undirected graph with n vertices?",
    options: ["n", "n(n-1)", "n(n-1)/2", "n²"],
    correctAnswer: 2,
    explanation: "A simple undirected graph with n vertices can have at most n(n-1)/2 edges, as each pair of vertices can be connected by at most one edge."
  },
  {
    question: "Which graph property indicates that a path exists between every pair of vertices?",
    options: ["Complete", "Connected", "Bipartite", "Planar"],
    correctAnswer: 1,
    explanation: "A connected graph has a path between every pair of vertices. A complete graph is a special case where every vertex is directly connected to every other vertex."
  },
  {
    question: "What is the degree of a vertex in a graph?",
    options: ["Number of adjacent vertices", "Number of incident edges", "Distance from root", "Number of paths"],
    correctAnswer: 1,
    explanation: "The degree of a vertex is the number of edges incident to it, which equals the number of adjacent vertices in a simple graph."
  },
  {
    question: "In a directed graph, what is the difference between in-degree and out-degree?",
    options: ["In-degree counts incoming edges, out-degree counts outgoing edges", "They are always equal", "In-degree is for weighted graphs only", "Out-degree is always greater"],
    correctAnswer: 0,
    explanation: "In-degree counts edges coming into a vertex, while out-degree counts edges going out from a vertex in a directed graph."
  },
  {
    question: "What type of graph can be drawn on a plane without edge crossings?",
    options: ["Complete graph", "Bipartite graph", "Planar graph", "Directed graph"],
    correctAnswer: 2,
    explanation: "A planar graph can be drawn on a plane without any edges crossing each other."
  }
];

const module2Quiz = [
  {
    question: "What is the space complexity of an adjacency matrix for a graph with V vertices?",
    options: ["O(V)", "O(V²)", "O(V + E)", "O(E)"],
    correctAnswer: 1,
    explanation: "An adjacency matrix requires O(V²) space as it stores a V × V matrix regardless of the number of edges."
  },
  {
    question: "Which graph representation is more space-efficient for sparse graphs?",
    options: ["Adjacency matrix", "Adjacency list", "Edge list", "Incidence matrix"],
    correctAnswer: 1,
    explanation: "Adjacency list uses O(V + E) space, which is more efficient than O(V²) for sparse graphs where E << V²."
  },
  {
    question: "What is the time complexity to check if an edge exists between two vertices using an adjacency matrix?",
    options: ["O(1)", "O(V)", "O(E)", "O(log V)"],
    correctAnswer: 0,
    explanation: "Adjacency matrix provides O(1) edge existence checking through direct array access at matrix[i][j]."
  },
  {
    question: "Which representation is best for iterating through all neighbors of a vertex?",
    options: ["Adjacency matrix", "Adjacency list", "Edge list", "Both matrix and list are equal"],
    correctAnswer: 1,
    explanation: "Adjacency list allows O(degree) iteration through neighbors, while adjacency matrix requires O(V) to check all possible connections."
  },
  {
    question: "What is the space complexity of an adjacency list for a graph with V vertices and E edges?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V²)"],
    correctAnswer: 2,
    explanation: "Adjacency list requires O(V + E) space: O(V) for the array of lists and O(E) for storing all edges."
  }
];

const module3Quiz = [
  {
    question: "What data structure does BFS use for graph traversal?",
    options: ["Stack", "Queue", "Priority Queue", "Array"],
    correctAnswer: 1,
    explanation: "BFS uses a queue (FIFO) to process vertices level by level, ensuring shortest path in unweighted graphs."
  },
  {
    question: "What is the time complexity of BFS and DFS for a graph with V vertices and E edges?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V²)"],
    correctAnswer: 2,
    explanation: "Both BFS and DFS visit each vertex once and explore each edge once, resulting in O(V + E) time complexity."
  },
  {
    question: "Which traversal algorithm guarantees finding the shortest path in an unweighted graph?",
    options: ["DFS", "BFS", "Both DFS and BFS", "Neither"],
    correctAnswer: 1,
    explanation: "BFS explores vertices level by level, guaranteeing the shortest path in unweighted graphs by visiting closer vertices first."
  },
  {
    question: "What is the space complexity of recursive DFS in the worst case?",
    options: ["O(1)", "O(V)", "O(E)", "O(V + E)"],
    correctAnswer: 1,
    explanation: "Recursive DFS uses O(V) space for the recursion stack in the worst case (linear graph), plus O(V) for the visited array."
  },
  {
    question: "Which application is best suited for DFS rather than BFS?",
    options: ["Shortest path finding", "Level-order processing", "Cycle detection", "Minimum hops calculation"],
    correctAnswer: 2,
    explanation: "DFS is well-suited for cycle detection as it can track the recursion stack to identify back edges indicating cycles."
  }
];

const module4Quiz = [
  {
    question: "What is the time complexity of Kruskal's MST algorithm?",
    options: ["O(V log V)", "O(E log E)", "O(V + E)", "O(V²)"],
    correctAnswer: 1,
    explanation: "Kruskal's algorithm is dominated by edge sorting which takes O(E log E) time. Union-Find operations are nearly constant with optimizations."
  },
  {
    question: "Which data structure is essential for Kruskal's algorithm to detect cycles?",
    options: ["Stack", "Queue", "Union-Find (Disjoint Set)", "Priority Queue"],
    correctAnswer: 2,
    explanation: "Union-Find (Disjoint Set) is used in Kruskal's algorithm to efficiently detect cycles by checking if two vertices are in the same set."
  },
  {
    question: "What is the constraint for Dijkstra's algorithm to work correctly?",
    options: ["Graph must be connected", "All edge weights must be non-negative", "Graph must be acyclic", "Graph must be undirected"],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm requires non-negative edge weights. For graphs with negative weights, Bellman-Ford algorithm should be used."
  },
  {
    question: "What is the time complexity of Dijkstra's algorithm using a binary heap?",
    options: ["O(V²)", "O(E log V)", "O(V + E)", "O(E log E)"],
    correctAnswer: 1,
    explanation: "Dijkstra's algorithm with binary heap has O((V + E) log V) complexity, which simplifies to O(E log V) for connected graphs."
  },
  {
    question: "Which algorithm can detect negative weight cycles in a graph?",
    options: ["Dijkstra's", "Prim's", "Bellman-Ford", "Kruskal's"],
    correctAnswer: 2,
    explanation: "Bellman-Ford algorithm can detect negative weight cycles by checking if distances can still be reduced after V-1 iterations."
  }
];

const module5Quiz = [
  {
    question: "What is the purpose of maintaining a recursion stack in DFS for cycle detection?",
    options: ["To track visited vertices", "To identify back edges", "To calculate distances", "To store path weights"],
    correctAnswer: 1,
    explanation: "The recursion stack in DFS helps identify back edges (edges to ancestors in DFS tree), which indicate the presence of cycles."
  },
  {
    question: "What is the time complexity of topological sorting using DFS?",
    options: ["O(V)", "O(E)", "O(V + E)", "O(V log V)"],
    correctAnswer: 2,
    explanation: "Topological sorting using DFS visits each vertex and edge once, resulting in O(V + E) time complexity."
  },
  {
    question: "Which algorithm is used to find strongly connected components in a directed graph?",
    options: ["Dijkstra's", "Prim's", "Kosaraju's or Tarjan's", "Kruskal's"],
    correctAnswer: 2,
    explanation: "Kosaraju's algorithm (two DFS passes) or Tarjan's algorithm (single DFS with low-link values) are used to find strongly connected components."
  },
  {
    question: "What is an articulation point in a graph?",
    options: ["A vertex with maximum degree", "A vertex whose removal increases connected components", "A vertex in a cycle", "A vertex with minimum degree"],
    correctAnswer: 1,
    explanation: "An articulation point (cut vertex) is a vertex whose removal increases the number of connected components in the graph."
  },
  {
    question: "What is the space complexity of finding strongly connected components using Kosaraju's algorithm?",
    options: ["O(1)", "O(V)", "O(E)", "O(V + E)"],
    correctAnswer: 3,
    explanation: "Kosaraju's algorithm requires O(V + E) space for the graph representation, visited arrays, and stack for storing vertices."
  }
];

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
                  <img src="data:image/jpeg;base64,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" alt="Graph Fundamentals" className="movie-poster" />
                  <h6>Graph Fundamentals</h6>
                  <p>Vertices, edges, and basic concepts</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Graph Types" className="movie-poster" />
                  <h6>Graph Types</h6>
                  <p>Directed, undirected, weighted graphs</p>
                </div>
                <div className="movie-card">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200630111809/graph18.jpg" alt="Graph Properties" className="movie-poster" />
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

            <Quiz 
              title="Module 4.1 Quiz: Graph Types and Terminology"
              questions={module1Quiz}
              subject="DS"
              unitId={4}
              moduleId={1}
            />

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
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/adjacency-matrix.png" alt="Adjacency Matrix" className="movie-poster" />
                  <h6>Adjacency Matrix</h6>
                  <p>2D array representation</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/adjacency-list.png" alt="Adjacency List" className="movie-poster" />
                  <h6>Adjacency List</h6>
                  <p>Linked list representation</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Edge List" className="movie-poster" />
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

            <Quiz 
              title="Module 4.2 Quiz: Graph Representations"
              questions={module2Quiz}
              subject="DS"
              unitId={4}
              moduleId={2}
            />

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
                  <img src="data:image/jpeg;base64,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" alt="BFS Algorithm" className="movie-poster" />
                  <h6>BFS Algorithm</h6>
                  <p>Breadth-first exploration pattern</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="DFS Algorithm" className="movie-poster" />
                  <h6>DFS Algorithm</h6>
                  <p>Depth-first exploration pattern</p>
                </div>
                <div className="movie-card">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200630111809/graph18.jpg" alt="Traversal Comparison" className="movie-poster" />
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

            <Quiz 
              title="Module 4.3 Quiz: Graph Traversals - BFS and DFS"
              questions={module3Quiz}
              subject="DS"
              unitId={4}
              moduleId={3}
            />

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
                  <img src="data:image/png;base64,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" alt="MST Algorithms" className="movie-poster" />
                  <h6>MST Algorithms</h6>
                  <p>Kruskal's and Prim's algorithms</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Shortest Path" className="movie-poster" />
                  <h6>Shortest Path</h6>
                  <p>Dijkstra's and Bellman-Ford algorithms</p>
                </div>
                <div className="movie-card">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200630111809/graph18.jpg" alt="Graph Optimization" className="movie-poster" />
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

            <Quiz 
              title="Module 4.4 Quiz: Graph Applications - MST and Shortest Path"
              questions={module4Quiz}
              subject="DS"
              unitId={4}
              moduleId={4}
            />

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

            <Quiz 
              title="Module 4.5 Quiz: Practical Experiments"
              questions={module5Quiz}
              subject="DS"
              unitId={4}
              moduleId={5}
            />

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