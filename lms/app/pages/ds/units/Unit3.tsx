'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit3Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const module1Quiz = [
  {
    question: "What is the maximum number of edges in a tree with n nodes?",
    options: ["n", "n-1", "n+1", "2n"],
    correctAnswer: 1,
    explanation: "A tree with n nodes always has exactly n-1 edges, as it is a connected acyclic graph."
  },
  {
    question: "In a complete binary tree with height h, what is the maximum number of nodes?",
    options: ["2^h", "2^h - 1", "2^(h+1) - 1", "2^(h+1)"],
    correctAnswer: 2,
    explanation: "A complete binary tree with height h has a maximum of 2^(h+1) - 1 nodes when all levels are completely filled."
  },
  {
    question: "Which tree representation uses mathematical index relationships for parent-child connections?",
    options: ["Pointer-based", "Array representation", "Adjacency list", "First child/next sibling"],
    correctAnswer: 1,
    explanation: "Array representation uses mathematical formulas: parent at i/2, left child at 2i, right child at 2i+1."
  },
  {
    question: "What is the degree of a node in a tree?",
    options: ["Number of ancestors", "Number of children", "Height of node", "Depth of node"],
    correctAnswer: 1,
    explanation: "The degree of a node is the number of children it has. The degree of a tree is the maximum degree among all nodes."
  },
  {
    question: "In a k-ary tree, what is the relationship between leaf nodes and internal nodes?",
    options: ["Leaves = Internal nodes", "Leaves = (k-1) × Internal + 1", "Leaves = k × Internal", "No fixed relationship"],
    correctAnswer: 1,
    explanation: "In a k-ary tree, the number of leaf nodes equals (k-1) times the number of internal nodes plus 1."
  }
];

const module2Quiz = [
  {
    question: "What is the time complexity of searching in a balanced Binary Search Tree?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "In a balanced BST, search operations take O(log n) time as the tree height is logarithmic."
  },
  {
    question: "Which case is most complex when deleting a node from a BST?",
    options: ["Leaf node", "Node with one child", "Node with two children", "Root node"],
    correctAnswer: 2,
    explanation: "Deleting a node with two children requires finding the inorder successor or predecessor to replace it, making it the most complex case."
  },
  {
    question: "What property distinguishes a full binary tree?",
    options: ["All levels filled", "Every node has 0 or 2 children", "Height is minimum", "All leaves at same level"],
    correctAnswer: 1,
    explanation: "A full binary tree has the property that every node has either 0 children (leaf) or exactly 2 children."
  },
  {
    question: "In a skewed BST with n nodes, what is the worst-case search time?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "A skewed BST degenerates into a linked list structure, resulting in O(n) search time in the worst case."
  },
  {
    question: "Which self-balancing BST uses color-based balancing rules?",
    options: ["AVL tree", "Red-Black tree", "Splay tree", "Treap"],
    correctAnswer: 1,
    explanation: "Red-Black trees use color properties (red and black nodes) with specific rules to maintain balance."
  }
];

const module3Quiz = [
  {
    question: "What is the time complexity of inserting an element into a heap?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Heap insertion involves adding at the end and bubbling up, which takes O(log n) time in the worst case."
  },
  {
    question: "In a B-tree of order m, what is the minimum number of children for non-root internal nodes?",
    options: ["m/2", "⌈m/2⌉", "m-1", "⌊m/2⌋"],
    correctAnswer: 1,
    explanation: "Non-root internal nodes in a B-tree of order m must have at least ⌈m/2⌉ children to maintain balance."
  },
  {
    question: "What advantage does a B+ tree have over a regular B-tree?",
    options: ["Faster insertion", "Less memory usage", "Better sequential access", "Simpler implementation"],
    correctAnswer: 2,
    explanation: "B+ trees store all data in leaf nodes with links between leaves, enabling efficient sequential access and range queries."
  },
  {
    question: "What is the time complexity of building a heap from an unsorted array (heapify)?",
    options: ["O(n)", "O(n log n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Building a heap from an array using bottom-up heapify takes O(n) time, which is more efficient than inserting elements one by one."
  },
  {
    question: "Which tree structure is optimal for database indexing with disk-based storage?",
    options: ["Binary Search Tree", "AVL Tree", "B+ Tree", "Heap"],
    correctAnswer: 2,
    explanation: "B+ trees are optimal for database indexing as they minimize disk I/O operations with high fan-out and sequential leaf access."
  }
];

const module4Quiz = [
  {
    question: "Which traversal of a BST produces elements in sorted order?",
    options: ["Preorder", "Inorder", "Postorder", "Level-order"],
    correctAnswer: 1,
    explanation: "Inorder traversal (Left-Root-Right) of a BST visits nodes in ascending sorted order due to the BST property."
  },
  {
    question: "Which two traversals are sufficient to uniquely reconstruct a binary tree?",
    options: ["Preorder and Postorder", "Preorder and Inorder", "Postorder and Level-order", "Preorder and Level-order"],
    correctAnswer: 1,
    explanation: "Preorder and Inorder (or Postorder and Inorder) are sufficient to uniquely reconstruct a binary tree."
  },
  {
    question: "What collision resolution technique uses linked lists at each hash table slot?",
    options: ["Linear probing", "Quadratic probing", "Separate chaining", "Double hashing"],
    correctAnswer: 2,
    explanation: "Separate chaining handles collisions by maintaining a linked list of all elements that hash to the same slot."
  },
  {
    question: "What is the average time complexity of hash table operations with good hash function?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 0,
    explanation: "With a good hash function and proper load factor, hash table operations (insert, search, delete) have O(1) average time complexity."
  },
  {
    question: "Which traversal uses a queue data structure for implementation?",
    options: ["Preorder", "Inorder", "Postorder", "Level-order"],
    correctAnswer: 3,
    explanation: "Level-order (breadth-first) traversal uses a queue to process nodes level by level from left to right."
  }
];

const module5Quiz = [
  {
    question: "When converting a binary tree to a doubly linked list in-place, which pointers are reused?",
    options: ["Parent pointers", "Left and right pointers", "Data pointers", "New allocated pointers"],
    correctAnswer: 1,
    explanation: "The left and right pointers of tree nodes are reused as prev and next pointers in the doubly linked list for in-place conversion."
  },
  {
    question: "What is the condition for a binary tree to be height-balanced?",
    options: ["All leaves at same level", "Height difference ≤ 1 for all nodes", "Perfect binary tree", "Complete binary tree"],
    correctAnswer: 1,
    explanation: "A tree is height-balanced if for every node, the height difference between left and right subtrees is at most 1."
  },
  {
    question: "What is the space complexity of checking if a BST is balanced using recursion?",
    options: ["O(1)", "O(log n)", "O(h)", "O(n)"],
    correctAnswer: 2,
    explanation: "The recursive balance checking algorithm uses O(h) space for the recursion stack, where h is the height of the tree."
  },
  {
    question: "Which traversal order should be maintained when converting a binary tree to a doubly linked list?",
    options: ["Preorder", "Inorder", "Postorder", "Level-order"],
    correctAnswer: 1,
    explanation: "Inorder traversal order is typically maintained when converting a binary tree to a doubly linked list to preserve sorted order in BSTs."
  },
  {
    question: "What is the time complexity of finding the lowest common ancestor (LCA) in a BST?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Finding LCA in a BST takes O(log n) time in a balanced tree by utilizing the BST property to navigate efficiently."
  }
];

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
                  <img src="data:image/jpeg;base64,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" alt="Tree Terminology" className="movie-poster" />
                  <h6>Tree Terminology</h6>
                  <p>Nodes, edges, and hierarchical relationships</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/binary-tree.png" alt="Tree Representations" className="movie-poster" />
                  <h6>Tree Representations</h6>
                  <p>Array and pointer-based implementations</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Tree Properties" className="movie-poster" />
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

            <Quiz 
              title="Module 3.1 Quiz: Tree Terminology and Representations"
              questions={module1Quiz}
              subject="DS"
              unitId={3}
              moduleId={1}
            />

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

            <Quiz 
              title="Module 3.2 Quiz: Binary Trees and Binary Search Trees"
              questions={module2Quiz}
              subject="DS"
              unitId={3}
              moduleId={2}
            />

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

            <Quiz 
              title="Module 3.3 Quiz: Advanced Tree Types - Heaps, B-Trees, and N-ary Trees"
              questions={module3Quiz}
              subject="DS"
              unitId={3}
              moduleId={3}
            />

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

            <Quiz 
              title="Module 3.4 Quiz: Tree Traversals, Applications, and Hashing"
              questions={module4Quiz}
              subject="DS"
              unitId={3}
              moduleId={4}
            />

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

            <Quiz 
              title="Module 3.5 Quiz: Practical Experiments"
              questions={module5Quiz}
              subject="DS"
              unitId={3}
              moduleId={5}
            />

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