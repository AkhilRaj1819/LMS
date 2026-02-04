'use client';
import React from 'react';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit3: React.FC<Unit3Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.1</div>
              <div className="lesson-title-main">
                <h1>Tree Terminology and Representations</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Hierarchical Data Structures</h3>
              <p>Trees are fundamental hierarchical data structures that represent relationships between elements in a parent-child fashion. Unlike linear structures, trees enable efficient organization, searching, and manipulation of data with natural hierarchical relationships.</p>
              
              <h4>Fundamental Tree Concepts</h4>
              <p>Trees provide a mathematical model for hierarchical organization:</p>
              <ul>
                <li><strong>Hierarchical Structure:</strong> Parent-child relationships form natural hierarchies</li>
                <li><strong>Recursive Definition:</strong> Trees are recursively defined structures</li>
                <li><strong>Graph Theory Foundation:</strong> Connected acyclic graphs with n-1 edges</li>
                <li><strong>Mathematical Properties:</strong> Height, depth, and degree relationships</li>
              </ul>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/tree-terminology.jpg" alt="Tree Terminology" className="movie-poster" />
                  <h6>Tree Terminology</h6>
                  <p>Nodes, edges, and hierarchical relationships</p>
                </div>
                <div className="movie-card">
                  <img src="/images/tree-representations.jpg" alt="Tree Representations" className="movie-poster" />
                  <h6>Tree Representations</h6>
                  <p>Array and pointer-based implementations</p>
                </div>
                <div className="movie-card">
                  <img src="/images/tree-properties.jpg" alt="Tree Properties" className="movie-poster" />
                  <h6>Tree Properties</h6>
                  <p>Height, depth, and structural characteristics</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/qH6yxkw0u78" 
                  title="Tree Data Structure Introduction"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Introduction to Trees and Terminology</p>
              </div>

              <h4>Comprehensive Tree Terminology</h4>
              <h6>Essential Tree Components</h6>
              <ul>
                <li><strong>Root:</strong> The topmost node with no parent - entry point to tree</li>
                <li><strong>Node:</strong> Entity containing data and references to child nodes</li>
                <li><strong>Edge:</strong> Connection/link between parent and child nodes</li>
                <li><strong>Parent:</strong> Node that has edges to its child nodes</li>
                <li><strong>Child:</strong> Node that has a parent node above it</li>
                <li><strong>Leaf/Terminal Node:</strong> Node with no children (degree = 0)</li>
                <li><strong>Internal Node:</strong> Node with both parent and children</li>
                <li><strong>Sibling:</strong> Nodes sharing the same parent</li>
              </ul>
              
              <h4>Advanced Tree Properties and Metrics</h4>
              <div className="example-box">
                <h5>Mathematical Tree Characteristics</h5>
                <div className="operation-details">
                  <h6>Height and Depth Relationships</h6>
                  <ul>
                    <li><strong>Height of Tree:</strong> Length of longest path from root to leaf</li>
                    <li><strong>Depth of Node:</strong> Length of path from root to that node</li>
                    <li><strong>Level:</strong> All nodes at same depth form a level</li>
                    <li><strong>Height of Node:</strong> Length of longest path from node to leaf</li>
                  </ul>
                  
                  <h6>Degree and Branching Properties</h6>
                  <ul>
                    <li><strong>Degree of Node:</strong> Number of children of that node</li>
                    <li><strong>Degree of Tree:</strong> Maximum degree among all nodes</li>
                    <li><strong>Branching Factor:</strong> Maximum number of children per node</li>
                    <li><strong>Path:</strong> Sequence of nodes connected by edges</li>
                  </ul>
                  
                  <h6>Size and Structural Metrics</h6>
                  <ul>
                    <li><strong>Size:</strong> Total number of nodes in the tree</li>
                    <li><strong>Subtree:</strong> Tree formed by node and all its descendants</li>
                    <li><strong>Forest:</strong> Collection of disjoint trees</li>
                    <li><strong>Ancestor/Descendant:</strong> Nodes on path to/from root</li>
                  </ul>
                </div>
              </div>

              <h4>Tree Representation Strategies</h4>
              <h6>Implementation Approaches</h6>
              <ul>
                <li><strong>Dynamic Node Structure:</strong> Flexible pointer-based representation</li>
                <li><strong>Array Representation:</strong> Mathematical index relationships</li>
                <li><strong>First Child/Next Sibling:</strong> Binary representation for n-ary trees</li>
                <li><strong>Adjacency List:</strong> Graph-based representation</li>
              </ul>

              <h4>Mathematical Properties and Formulas</h4>
              <div className="example-box">
                <h5>Tree Mathematics and Relationships</h5>
                <ul>
                  <li><strong>Nodes in Complete Binary Tree:</strong> 2^(h+1) - 1 nodes at height h</li>
                  <li><strong>Maximum Nodes at Level i:</strong> 2^i nodes in binary tree</li>
                  <li><strong>Minimum Height:</strong> ⌊log₂(n)⌋ for n nodes</li>
                  <li><strong>Leaf Nodes in k-ary Tree:</strong> (k-1)×internal_nodes + 1</li>
                  <li><strong>Edges in Tree:</strong> Always n-1 edges for n nodes</li>
                  <li><strong>Path Length:</strong> Sum of depths of all nodes</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Tree Terminology and Basic Operations</h5>
                <p>Implement basic tree structure with node creation, insertion, and property calculation.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Tree Terminology Implementation"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Binary Trees & BST →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.2</div>
              <div className="lesson-title-main">
                <h1>Binary Trees and Binary Search Trees</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Binary Tree Structures and Search Optimization</h3>
              <p>Binary trees form the foundation of many advanced data structures, providing efficient search, insertion, and deletion operations through structured organization where each node has at most two children.</p>
              
              <div className="theory-box">
                <h5>Binary Tree Theoretical Foundations</h5>
                <p>Understanding the mathematical principles of binary structures:</p>
                <ul>
                  <li><strong>Binary Constraint:</strong> Maximum two children per node (left and right)</li>
                  <li><strong>Recursive Structure:</strong> Each subtree is also a binary tree</li>
                  <li><strong>Ordering Properties:</strong> BST maintains sorted order invariant</li>
                  <li><strong>Logarithmic Performance:</strong> O(log n) operations in balanced trees</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/binary-tree-structure.jpg" alt="Binary Tree Structure" className="movie-poster" />
                  <h6>Binary Tree Structure</h6>
                  <p>Node organization and relationships</p>
                </div>
                <div className="movie-card">
                  <img src="/images/bst-properties.jpg" alt="BST Properties" className="movie-poster" />
                  <h6>BST Properties</h6>
                  <p>Search tree invariants and ordering</p>
                </div>
                <div className="movie-card">
                  <img src="/images/tree-operations.jpg" alt="Tree Operations" className="movie-poster" />
                  <h6>Tree Operations</h6>
                  <p>Insertion, deletion, and search algorithms</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/H5JubkIy_p8" 
                  title="Binary Trees and BST"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Binary Trees and Binary Search Trees</p>
              </div>

              <h4>Binary Tree Classifications</h4>
              <div className="definition-box">
                <h6>Types of Binary Trees</h6>
                <ul>
                  <li><strong>Full Binary Tree:</strong> Every node has either 0 or 2 children</li>
                  <li><strong>Complete Binary Tree:</strong> All levels filled except possibly last</li>
                  <li><strong>Perfect Binary Tree:</strong> All internal nodes have 2 children, leaves at same level</li>
                  <li><strong>Balanced Binary Tree:</strong> Height difference between subtrees ≤ 1</li>
                  <li><strong>Degenerate Tree:</strong> Each internal node has only one child</li>
                  <li><strong>Skewed Tree:</strong> All nodes have only left or only right children</li>
                </ul>
              </div>
              
              <h4>Binary Search Tree (BST) Properties</h4>
              <div className="example-box">
                <h5>BST Invariant and Operations</h5>
                <div className="operation-details">
                  <h6>BST Ordering Property</h6>
                  <p><strong>Invariant:</strong> For every node N:</p>
                  <ul>
                    <li>All keys in left subtree are less than N.key</li>
                    <li>All keys in right subtree are greater than N.key</li>
                    <li>Both left and right subtrees are also BSTs</li>
                    <li>No duplicate keys (in standard BST)</li>
                  </ul>
                  
                  <h6>BST Operations Complexity</h6>
                  <ul>
                    <li><strong>Search:</strong> O(h) where h is height</li>
                    <li><strong>Insertion:</strong> O(h) - find position and insert</li>
                    <li><strong>Deletion:</strong> O(h) - three cases to handle</li>
                    <li><strong>Minimum/Maximum:</strong> O(h) - leftmost/rightmost node</li>
                  </ul>
                  
                  <h6>BST Deletion Cases</h6>
                  <ul>
                    <li><strong>Leaf Node:</strong> Simply remove the node</li>
                    <li><strong>One Child:</strong> Replace node with its child</li>
                    <li><strong>Two Children:</strong> Replace with inorder successor/predecessor</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Binary Tree Concepts</h4>
              <div className="definition-box">
                <h6>Specialized Binary Tree Variants</h6>
                <ul>
                  <li><strong>Threaded Binary Tree:</strong> Null pointers replaced with threads</li>
                  <li><strong>Expression Tree:</strong> Operators as internal nodes, operands as leaves</li>
                  <li><strong>Huffman Tree:</strong> Optimal prefix-free encoding tree</li>
                  <li><strong>Segment Tree:</strong> Range query optimization structure</li>
                  <li><strong>Fenwick Tree:</strong> Binary indexed tree for prefix sums</li>
                  <li><strong>Cartesian Tree:</strong> Binary tree from sequence with heap property</li>
                </ul>
              </div>

              <h4>Performance Analysis and Optimization</h4>
              <div className="example-box">
                <h5>BST Performance Characteristics</h5>
                <div className="operation-details">
                  <h6>Best Case Performance (Balanced Tree)</h6>
                  <ul>
                    <li>Height: O(log n)</li>
                    <li>All operations: O(log n)</li>
                    <li>Space complexity: O(n)</li>
                    <li>Optimal for search-intensive applications</li>
                  </ul>
                  
                  <h6>Worst Case Performance (Skewed Tree)</h6>
                  <ul>
                    <li>Height: O(n)</li>
                    <li>All operations: O(n)</li>
                    <li>Degenerates to linked list performance</li>
                    <li>Occurs with sorted input data</li>
                  </ul>
                  
                  <h6>Balancing Solutions</h6>
                  <ul>
                    <li><strong>AVL Trees:</strong> Height-balanced BST with rotations</li>
                    <li><strong>Red-Black Trees:</strong> Color-based balancing rules</li>
                    <li><strong>Splay Trees:</strong> Self-adjusting with recently accessed nodes</li>
                    <li><strong>Treaps:</strong> Randomized BST with heap property</li>
                  </ul>
                </div>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Binary Search Tree Implementation</h5>
                <p>Implement BST with insertion, deletion, search, and traversal operations.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Binary Search Tree Implementation"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Tree Terminology</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Advanced Tree Types →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.3</div>
              <div className="lesson-title-main">
                <h1>Advanced Tree Types: Heaps, B-Trees, and N-ary Trees</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Specialized Tree Structures for Optimal Performance</h3>
              <p>Advanced tree structures extend basic binary trees to address specific computational challenges, providing optimized solutions for priority management, database indexing, and multi-way branching scenarios.</p>
              
              <div className="theory-box">
                <h5>Advanced Tree Architecture Principles</h5>
                <p>Understanding specialized tree design patterns:</p>
                <ul>
                  <li><strong>Heap Property:</strong> Parent-child ordering for priority operations</li>
                  <li><strong>Multi-way Branching:</strong> B-trees for disk-based storage optimization</li>
                  <li><strong>Balanced Height:</strong> Guaranteed logarithmic performance</li>
                  <li><strong>Cache Optimization:</strong> Minimizing disk I/O operations</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/heap-structure.jpg" alt="Heap Structure" className="movie-poster" />
                  <h6>Heap Data Structure</h6>
                  <p>Priority queue implementation</p>
                </div>
                <div className="movie-card">
                  <img src="/images/btree-structure.jpg" alt="B-Tree Structure" className="movie-poster" />
                  <h6>B-Tree Architecture</h6>
                  <p>Multi-way search trees</p>
                </div>
                <div className="movie-card">
                  <img src="/images/nary-trees.jpg" alt="N-ary Trees" className="movie-poster" />
                  <h6>N-ary Trees</h6>
                  <p>General tree structures</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/t0Cq6tVNRBA" 
                  title="Advanced Tree Structures"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Heaps, B-Trees, and Advanced Tree Structures</p>
              </div>

              <h4>Heap Data Structure</h4>
              <div className="definition-box">
                <h6>Heap Properties and Operations</h6>
                <ul>
                  <li><strong>Complete Binary Tree:</strong> All levels filled except possibly last</li>
                  <li><strong>Heap Property:</strong> Parent ≥ children (max-heap) or parent ≤ children (min-heap)</li>
                  <li><strong>Array Representation:</strong> Parent at i/2, children at 2i and 2i+1</li>
                  <li><strong>Insertion:</strong> Add at end, bubble up - O(log n)</li>
                  <li><strong>Deletion:</strong> Remove root, replace with last, bubble down - O(log n)</li>
                  <li><strong>Heapify:</strong> Convert array to heap - O(n)</li>
                </ul>
              </div>
              
              <h4>B-Tree Architecture</h4>
              <div className="example-box">
                <h5>Multi-way Search Tree Design</h5>
                <div className="operation-details">
                  <h6>B-Tree Properties (Order m)</h6>
                  <ul>
                    <li><strong>Node Capacity:</strong> Each node has at most m children</li>
                    <li><strong>Minimum Degree:</strong> Non-root nodes have at least ⌈m/2⌉ children</li>
                    <li><strong>Key Distribution:</strong> Node with k children has k-1 keys</li>
                    <li><strong>Balanced Height:</strong> All leaves at the same level</li>
                  </ul>
                  
                  <h6>B-Tree Operations</h6>
                  <ul>
                    <li><strong>Search:</strong> Multi-way comparison at each node - O(log n)</li>
                    <li><strong>Insertion:</strong> Insert in leaf, split if overflow - O(log n)</li>
                    <li><strong>Deletion:</strong> Complex rebalancing with merging - O(log n)</li>
                    <li><strong>Split Operation:</strong> Divide full node into two nodes</li>
                  </ul>
                  
                  <h6>B+ Tree Enhancements</h6>
                  <ul>
                    <li><strong>Data in Leaves:</strong> All records stored in leaf nodes</li>
                    <li><strong>Linked Leaves:</strong> Sequential access through leaf links</li>
                    <li><strong>Higher Fan-out:</strong> More keys per internal node</li>
                    <li><strong>Range Queries:</strong> Efficient sequential scanning</li>
                  </ul>
                </div>
              </div>

              <h4>N-ary Tree Structures</h4>
              <div className="definition-box">
                <h6>General Tree Implementations</h6>
                <ul>
                  <li><strong>Variable Branching:</strong> Each node can have 0 to N children</li>
                  <li><strong>Trie Structure:</strong> Prefix tree for string operations</li>
                  <li><strong>Decision Trees:</strong> Multi-way decision making</li>
                  <li><strong>File System Trees:</strong> Directory hierarchy representation</li>
                  <li><strong>Parse Trees:</strong> Syntax analysis in compilers</li>
                  <li><strong>Game Trees:</strong> Move evaluation in game AI</li>
                </ul>
              </div>

              <h4>Specialized Tree Applications</h4>
              <div className="example-box">
                <h5>Domain-Specific Tree Usage</h5>
                <div className="operation-details">
                  <h6>Database Systems</h6>
                  <ul>
                    <li><strong>B+ Trees:</strong> Primary indexing in relational databases</li>
                    <li><strong>R-Trees:</strong> Spatial data indexing</li>
                    <li><strong>LSM Trees:</strong> Log-structured merge trees for write-heavy workloads</li>
                    <li><strong>Fractal Trees:</strong> Cache-oblivious data structures</li>
                  </ul>
                  
                  <h6>System Software</h6>
                  <ul>
                    <li><strong>File Systems:</strong> Directory trees and inode structures</li>
                    <li><strong>Memory Management:</strong> Buddy system allocation trees</li>
                    <li><strong>Process Trees:</strong> Parent-child process relationships</li>
                    <li><strong>Network Routing:</strong> Spanning trees and routing protocols</li>
                  </ul>
                  
                  <h6>Algorithm Applications</h6>
                  <ul>
                    <li><strong>Priority Queues:</strong> Heap-based implementations</li>
                    <li><strong>Huffman Coding:</strong> Optimal prefix-free encoding</li>
                    <li><strong>Segment Trees:</strong> Range query data structures</li>
                    <li><strong>Suffix Trees:</strong> String processing and pattern matching</li>
                  </ul>
                </div>
              </div>

              <h4>Performance Comparison and Trade-offs</h4>
              <div className="example-box">
                <h5>Comparative Analysis of Tree Structures</h5>
                <ul>
                  <li><strong>Binary Trees:</strong> Simple, O(log n) balanced, O(n) worst case</li>
                  <li><strong>Heaps:</strong> O(log n) insert/delete, O(1) peek, array-based</li>
                  <li><strong>B-Trees:</strong> O(log n) guaranteed, optimized for disk I/O</li>
                  <li><strong>B+ Trees:</strong> Better sequential access, higher fan-out</li>
                  <li><strong>N-ary Trees:</strong> Flexible branching, application-specific optimization</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Heap and B-Tree Implementation</h5>
                <p>Implement max-heap with heapify operations and basic B-tree structure.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Advanced Tree Structures"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Binary Trees & BST</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Traversals & Applications →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.4</div>
              <div className="lesson-title-main">
                <h1>Tree Traversals, Applications, and Hashing</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Systematic Tree Navigation and Hash-based Data Access</h3>
              <p>Tree traversals provide systematic methods for visiting all nodes, enabling various algorithms and applications. Hashing complements tree structures by offering constant-time average access for key-value operations.</p>
              
              <div className="theory-box">
                <h5>Traversal Theory and Hash Function Design</h5>
                <p>Understanding systematic data access patterns:</p>
                <ul>
                  <li><strong>Depth-First Traversals:</strong> Recursive exploration of tree structure</li>
                  <li><strong>Breadth-First Traversal:</strong> Level-by-level systematic exploration</li>
                  <li><strong>Hash Function Properties:</strong> Uniform distribution and collision minimization</li>
                  <li><strong>Load Factor Management:</strong> Balancing space and time efficiency</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/tree-traversals.jpg" alt="Tree Traversals" className="movie-poster" />
                  <h6>Tree Traversals</h6>
                  <p>Preorder, inorder, postorder patterns</p>
                </div>
                <div className="movie-card">
                  <img src="/images/tree-applications.jpg" alt="Tree Applications" className="movie-poster" />
                  <h6>Tree Applications</h6>
                  <p>Real-world tree usage scenarios</p>
                </div>
                <div className="movie-card">
                  <img src="/images/hashing-concepts.jpg" alt="Hashing Concepts" className="movie-poster" />
                  <h6>Hashing Techniques</h6>
                  <p>Hash functions and collision resolution</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/9RHO6jU--GU" 
                  title="Tree Traversals and Hashing"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Tree Traversals and Hashing Techniques</p>
              </div>

              <h4>Comprehensive Tree Traversal Methods</h4>
              <div className="definition-box">
                <h6>Depth-First Traversal Algorithms</h6>
                <ul>
                  <li><strong>Preorder (Root-Left-Right):</strong> Process root, then left subtree, then right subtree</li>
                  <li><strong>Inorder (Left-Root-Right):</strong> Process left subtree, then root, then right subtree</li>
                  <li><strong>Postorder (Left-Right-Root):</strong> Process left subtree, then right subtree, then root</li>
                  <li><strong>Level-order (Breadth-First):</strong> Process nodes level by level using queue</li>
                </ul>
              </div>
              
              <h4>Tree Construction from Traversals</h4>
              <div className="example-box">
                <h5>Unique Tree Reconstruction Algorithms</h5>
                <div className="operation-details">
                  <h6>Preorder and Inorder Construction</h6>
                  <p><strong>Algorithm:</strong> Use preorder for root identification, inorder for subtree division</p>
                  <ul>
                    <li>First element of preorder is always the root</li>
                    <li>Find root position in inorder traversal</li>
                    <li>Elements left of root in inorder form left subtree</li>
                    <li>Elements right of root in inorder form right subtree</li>
                    <li>Recursively apply to construct subtrees</li>
                  </ul>
                  
                  <h6>Postorder and Inorder Construction</h6>
                  <ul>
                    <li>Last element of postorder is the root</li>
                    <li>Find root in inorder to divide subtrees</li>
                    <li>Recursively construct left and right subtrees</li>
                    <li>Time Complexity: O(n), Space: O(n)</li>
                  </ul>
                  
                  <h6>Special Cases and Limitations</h6>
                  <ul>
                    <li><strong>Preorder + Postorder:</strong> Not sufficient for unique reconstruction</li>
                    <li><strong>BST Special Case:</strong> Single traversal sufficient due to ordering</li>
                    <li><strong>Complete Binary Tree:</strong> Level-order sufficient with size</li>
                  </ul>
                </div>
              </div>

              <h4>Comprehensive Tree Applications</h4>
              <div className="definition-box">
                <h6>Real-World Tree Usage Scenarios</h6>
                <ul>
                  <li><strong>Expression Parsing:</strong> Syntax trees for mathematical expressions</li>
                  <li><strong>File Systems:</strong> Directory hierarchies and file organization</li>
                  <li><strong>Database Indexing:</strong> B-trees for efficient data retrieval</li>
                  <li><strong>Decision Making:</strong> Decision trees in machine learning</li>
                  <li><strong>Network Routing:</strong> Spanning trees and shortest path algorithms</li>
                  <li><strong>Compiler Design:</strong> Parse trees and abstract syntax trees</li>
                </ul>
              </div>

              <h4>Hashing Fundamentals and Techniques</h4>
              <div className="example-box">
                <h5>Hash Function Design and Implementation</h5>
                <div className="operation-details">
                  <h6>Hash Function Properties</h6>
                  <ul>
                    <li><strong>Deterministic:</strong> Same input always produces same output</li>
                    <li><strong>Uniform Distribution:</strong> Keys spread evenly across hash table</li>
                    <li><strong>Efficient Computation:</strong> Fast hash value calculation</li>
                    <li><strong>Avalanche Effect:</strong> Small input changes cause large output changes</li>
                  </ul>
                  
                  <h6>Common Hash Functions</h6>
                  <ul>
                    <li><strong>Division Method:</strong> h(key) = key % table_size</li>
                    <li><strong>Multiplication Method:</strong> h(key) = ⌊m(key × A mod 1)⌋</li>
                    <li><strong>Universal Hashing:</strong> Random selection from function family</li>
                    <li><strong>Cryptographic Hashing:</strong> SHA, MD5 for security applications</li>
                  </ul>
                  
                  <h6>Collision Resolution Strategies</h6>
                  <ul>
                    <li><strong>Separate Chaining:</strong> Linked lists at each hash table slot</li>
                    <li><strong>Linear Probing:</strong> Sequential search for next empty slot</li>
                    <li><strong>Quadratic Probing:</strong> Quadratic increments for probe sequence</li>
                    <li><strong>Double Hashing:</strong> Second hash function for probe intervals</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Hashing Applications</h4>
              <div className="example-box">
                <h5>Hash Table Usage in Complex Systems</h5>
                <ul>
                  <li><strong>Database Systems:</strong> Hash joins and hash-based indexing</li>
                  <li><strong>Caching Systems:</strong> LRU cache with hash table lookup</li>
                  <li><strong>Distributed Systems:</strong> Consistent hashing for load balancing</li>
                  <li><strong>Compiler Symbol Tables:</strong> Identifier lookup and scope management</li>
                  <li><strong>Network Security:</strong> Hash-based message authentication</li>
                  <li><strong>Blockchain Technology:</strong> Merkle trees and proof of work</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Tree Traversals and Hash Table Implementation</h5>
                <p>Implement all tree traversal methods and a hash table with collision resolution.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Traversals and Hashing"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Advanced Tree Types</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Practical Experiments →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">3.5</div>
              <div className="lesson-title-main">
                <h1>Practical Experiments</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Advanced Tree Algorithm Implementation</h3>
              <p>Apply comprehensive tree knowledge to solve complex algorithmic challenges involving tree transformations and structural analysis through hands-on programming experiments.</p>
              
              <div className="theory-box">
                <h5>Experiment Objectives and Learning Goals</h5>
                <ul>
                  <li><strong>Tree Transformation:</strong> Converting between different data structures</li>
                  <li><strong>Balance Analysis:</strong> Evaluating tree structural properties</li>
                  <li><strong>Algorithm Design:</strong> Implementing efficient tree algorithms</li>
                  <li><strong>Complexity Analysis:</strong> Understanding time and space trade-offs</li>
                </ul>
              </div>
              
              <h4>Experiment 1: Binary Tree to Doubly Linked List Conversion</h4>
              <div className="definition-box">
                <h6>Problem Analysis and Approach</h6>
                <ul>
                  <li><strong>Objective:</strong> Convert binary tree to circular doubly linked list in-place</li>
                  <li><strong>Constraint:</strong> Use existing left/right pointers as prev/next</li>
                  <li><strong>Order:</strong> Maintain inorder traversal sequence in DLL</li>
                  <li><strong>Algorithm:</strong> Inorder traversal with pointer manipulation</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Algorithm Strategy and Implementation</h5>
                <div className="operation-details">
                  <h6>Step-by-Step Approach</h6>
                  <ul>
                    <li>Perform inorder traversal of the binary tree</li>
                    <li>Maintain previous node pointer during traversal</li>
                    <li>Link current node with previous node using left/right pointers</li>
                    <li>After traversal, connect head and tail for circular structure</li>
                  </ul>
                  
                  <h6>Key Implementation Details</h6>
                  <ul>
                    <li><strong>Pointer Management:</strong> Careful handling of left/right as prev/next</li>
                    <li><strong>Edge Cases:</strong> Empty tree, single node, leaf nodes</li>
                    <li><strong>Circular Connection:</strong> Link first and last nodes</li>
                    <li><strong>Memory Efficiency:</strong> In-place transformation</li>
                  </ul>
                </div>
              </div>

              <div className="compiler-section">
                <h5>🎯 Experiment 1: Binary Tree to Doubly Linked List Conversion</h5>
                <p>Write a program to convert a binary tree into a circular doubly linked list in-place.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Binary Tree to DLL Conversion"
                ></iframe>
              </div>

              <h4>Experiment 2: BST Balance Verification</h4>
              <div className="definition-box">
                <h6>Balance Analysis Framework</h6>
                <ul>
                  <li><strong>Definition:</strong> Tree is balanced if height difference ≤ 1 for all nodes</li>
                  <li><strong>Approach:</strong> Recursive height calculation with balance checking</li>
                  <li><strong>Optimization:</strong> Single-pass algorithm combining height and balance</li>
                  <li><strong>Applications:</strong> AVL tree validation, performance analysis</li>
                </ul>
              </div>

              <div className="example-box">
                <h5>Balance Checking Algorithm Design</h5>
                <div className="operation-details">
                  <h6>Efficient Balance Verification</h6>
                  <ul>
                    <li><strong>Recursive Approach:</strong> Check balance while calculating height</li>
                    <li><strong>Early Termination:</strong> Return immediately if imbalance detected</li>
                    <li><strong>Height Calculation:</strong> 1 + max(left_height, right_height)</li>
                    <li><strong>Balance Condition:</strong> |left_height - right_height| ≤ 1</li>
                  </ul>
                  
                  <h6>Algorithm Complexity Analysis</h6>
                  <ul>
                    <li><strong>Time Complexity:</strong> O(n) - single traversal</li>
                    <li><strong>Space Complexity:</strong> O(h) - recursion stack</li>
                    <li><strong>Optimization:</strong> Avoid redundant height calculations</li>
                    <li><strong>Alternative:</strong> Iterative approach using explicit stack</li>
                  </ul>
                </div>
              </div>

              <div className="compiler-section">
                <h5>🎯 Experiment 2: BST Balance Verification</h5>
                <p>Write a program to check whether a given binary search tree is height-balanced.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="BST Balance Checker"
                ></iframe>
              </div>

              <h4>Additional Advanced Tree Problems</h4>
              <div className="example-box">
                <h5>Extended Practical Challenges</h5>
                <div className="operation-details">
                  <h6>Tree Reconstruction Problems</h6>
                  <ul>
                    <li><strong>Build from Traversals:</strong> Construct tree from preorder + inorder</li>
                    <li><strong>Serialize/Deserialize:</strong> Convert tree to string and back</li>
                    <li><strong>Mirror Tree:</strong> Create mirror image of binary tree</li>
                    <li><strong>Lowest Common Ancestor:</strong> Find LCA of two nodes</li>
                  </ul>
                  
                  <h6>Tree Validation Problems</h6>
                  <ul>
                    <li><strong>BST Validation:</strong> Verify BST property for entire tree</li>
                    <li><strong>Complete Tree Check:</strong> Verify complete binary tree property</li>
                    <li><strong>Symmetric Tree:</strong> Check if tree is symmetric around center</li>
                    <li><strong>Path Sum Problems:</strong> Find paths with specific sum values</li>
                  </ul>
                  
                  <h6>Tree Transformation Algorithms</h6>
                  <ul>
                    <li><strong>Flatten to List:</strong> Convert tree to linked list structure</li>
                    <li><strong>Level Order Construction:</strong> Build tree from level-order array</li>
                    <li><strong>Threaded Tree:</strong> Add threading for efficient traversal</li>
                    <li><strong>Expression Tree:</strong> Build and evaluate expression trees</li>
                  </ul>
                </div>
              </div>

              <h4>Performance Analysis and Optimization</h4>
              <div className="example-box">
                <h5>Algorithm Efficiency Considerations</h5>
                <ul>
                  <li><strong>Time Complexity:</strong> Most tree operations are O(h) where h is height</li>
                  <li><strong>Space Complexity:</strong> Recursive algorithms use O(h) stack space</li>
                  <li><strong>Iterative Alternatives:</strong> Use explicit stacks to avoid recursion</li>
                  <li><strong>Memory Management:</strong> Proper allocation and deallocation</li>
                  <li><strong>Cache Optimization:</strong> Consider memory access patterns</li>
                  <li><strong>Parallel Processing:</strong> Independent subtree operations</li>
                </ul>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Traversals & Applications</button>
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

export default Unit3;