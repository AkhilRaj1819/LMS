'use client';
import React from 'react';
import CodeCompiler from '../components/CodeCompiler';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">

            <div className="lesson-header">
              <div className="lesson-number-badge">1.1</div>
              <div className="lesson-title-main">
                <h1>Arrays: Foundation of Data Structure Engineering</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Mastering Array Architecture and Memory Management</h3>
              <p>Arrays represent the cornerstone of computational data organization, providing the fundamental building blocks for sophisticated data structure implementations. Understanding array mechanics is essential for developing efficient algorithms and optimizing system performance.</p>
              
              <h4>Core Array Principles and Mathematical Foundation</h4>
              <p>Arrays embody the mathematical concept of indexed collections with precise memory mapping:</p>
              <ul>
                <li><strong>Homogeneous Data Storage:</strong> Elements of identical data type ensuring uniform memory allocation</li>
                <li><strong>Contiguous Memory Architecture:</strong> Sequential memory layout enabling O(1) random access</li>
                <li><strong>Index-Based Addressing:</strong> Mathematical mapping from logical position to physical memory</li>
                <li><strong>Static vs. Dynamic Allocation:</strong> Compile-time vs. runtime memory management strategies</li>
                <li><strong>Cache Locality Optimization:</strong> Spatial locality benefits for enhanced performance</li>
              </ul>
              
              <div className="video-section">
                <h6>Array Data Structure Explained</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/55l-aZ7_F24" 
                    title="Array Data Structure Explained"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="/images/array-memory.jpg" alt="Array Memory Layout" className="movie-poster" />
                  <h6>Memory Architecture</h6>
                  <p>Contiguous memory allocation patterns</p>
                </div>
                <div className="movie-card">
                  <img src="/images/array-operations.jpg" alt="Array Operations" className="movie-poster" />
                  <h6>Array Operations</h6>
                  <p>Insertion, deletion, and traversal algorithms</p>
                </div>
                <div className="movie-card">
                  <img src="/images/cache-locality.jpg" alt="Cache Locality" className="movie-poster" />
                  <h6>Performance Optimization</h6>
                  <p>Cache-friendly data access patterns</p>
                </div>
              </div>

              <h4>Advanced Array Operations and Complexity Analysis</h4>
              
              <h6>Fundamental Array Operations</h6>
              <ul>
                <li><strong>Insertion Operations:</strong> Element placement with O(n) worst-case complexity for shifting</li>
                <li><strong>Deletion Mechanisms:</strong> Element removal requiring subsequent element repositioning</li>
                <li><strong>Traversal Algorithms:</strong> Sequential and parallel processing techniques</li>
                <li><strong>Search Strategies:</strong> Linear O(n) and binary O(log n) search implementations</li>
                <li><strong>Sorting Integration:</strong> In-place sorting algorithms leveraging array structure</li>
              </ul>
              
              <h6>Array Performance Characteristics and Optimization</h6>
              <ul>
                <li><strong>Random Access Efficiency:</strong> Constant-time element access via index calculation</li>
                <li><strong>Memory Efficiency:</strong> Minimal overhead compared to linked structures</li>
                <li><strong>Cache Performance:</strong> Excellent spatial locality for sequential operations</li>
                <li><strong>Vectorization Support:</strong> SIMD instruction compatibility for parallel processing</li>
                <li><strong>Hardware Alignment:</strong> Natural mapping to processor architecture</li>
              </ul>
              
              <div className="video-section">
                <h6>Array Operations and Algorithms</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/QJNwK2uJyGs" 
                    title="Array Operations and Algorithms"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>

              <h4>Mathematical Memory Address Calculation</h4>
              <h5>Advanced Address Computation and Memory Layout</h5>
              <div className="address-calculation">
                <h6>Multi-dimensional Array Address Formula</h6>
                <p><strong>1D Array:</strong> Address(arr[i]) = Base + (i × sizeof(element))</p>
                <p><strong>2D Array (Row-major):</strong> Address(arr[i][j]) = Base + (i × cols + j) × sizeof(element)</p>
                
                <h6>Practical Memory Mapping Example</h6>
                <div className="memory-example">
                  <p><strong>Given:</strong> Base address = 0x1000, Element size = 4 bytes</p>
                  <table>
                    <thead>
                      <tr><th>Index</th><th>Calculation</th><th>Address</th><th>Hex Address</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>arr[0]</td><td>0x1000 + (0 × 4)</td><td>4096</td><td>0x1000</td></tr>
                      <tr><td>arr[1]</td><td>0x1000 + (1 × 4)</td><td>4100</td><td>0x1004</td></tr>
                      <tr><td>arr[2]</td><td>0x1000 + (2 × 4)</td><td>4104</td><td>0x1008</td></tr>
                      <tr><td>arr[3]</td><td>0x1000 + (3 × 4)</td><td>4108</td><td>0x100C</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>



              <div className="compiler-section">
                <h5>🎯 Advanced Array Implementation Challenge</h5>
                <p>Design and implement a dynamic array class with automatic resizing, memory optimization, and comprehensive operation support including insertion, deletion, searching, and sorting capabilities.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Advanced Array Implementation"
                ></iframe>
              </div>

            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Sparse Matrices →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.2</div>
              <div className="lesson-title-main">
                <h1>Sparse Matrices</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Sparse Matrix Representation and Optimization</h3>
              <p>A sparse matrix is a matrix in which the majority of elements are zero. When the number of zero elements significantly exceeds non-zero elements, specialized storage techniques become essential for memory efficiency and computational performance.</p>
              
              <p>Sparse matrices are fundamental in computational mathematics, appearing in scientific computing, machine learning, and network analysis. Efficient representation techniques enable processing of large-scale problems that would be computationally prohibitive with dense matrix storage.</p>
              
              <h4>Mathematical Definition and Sparsity Metrics</h4>
              <p>A matrix is considered sparse when the sparsity ratio exceeds a threshold, typically 60-70%. The sparsity ratio is defined as:</p>
              
              <p><strong>Sparsity Ratio = (Number of zero elements) / (Total elements)</strong></p>
              <p>Matrices with sparsity ratios above 0.6 generally benefit from sparse representation techniques, which store only non-zero elements and their positional information.</p>
              
              <h4>Sparse Matrix Representation Techniques</h4>
              <ul>
                <li><strong>Triplet representation:</strong> Store (row, column, value) tuples for each non-zero element</li>
                <li><strong>Compressed Sparse Row (CSR):</strong> Row-wise compression using row pointers and column indices</li>
                <li><strong>Compressed Sparse Column (CSC):</strong> Column-wise compression for efficient column operations</li>
                <li><strong>Coordinate format (COO):</strong> Separate arrays for row indices, column indices, and values</li>
              </ul>
              
              <h4>Applications in Computational Systems</h4>
              <p>Sparse matrices are critical in numerous computational domains:</p>
              <ul>
                <li><strong>Social Network Analysis:</strong> Adjacency matrices representing connections between users</li>
                <li><strong>Web Search Algorithms:</strong> Link matrices in PageRank and web graph analysis</li>
                <li><strong>Image Processing:</strong> Feature detection and computer vision applications</li>
                <li><strong>Scientific Computing:</strong> Finite element analysis and numerical simulations</li>
                <li><strong>Machine Learning:</strong> Feature matrices in natural language processing and recommendation systems</li>
                <li><strong>Graph Theory:</strong> Adjacency matrices for large-scale network analysis</li>
              </ul>
              
              <div className="video-section">
                <h6>Sparse Matrix Representation</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/Yy6394X0cSQ" 
                    title="Sparse Matrix Representation"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>
              
              <h4>Advantages of Sparse Matrix Representation</h4>
              <h6>Performance and Efficiency Benefits</h6>
              <ul>
                <li><strong>Memory efficiency:</strong> Store only non-zero elements, reducing memory footprint significantly</li>
                <li><strong>Computational advantages:</strong> Skip operations involving zero elements, improving algorithm performance</li>
                <li><strong>Storage optimization:</strong> Achieve substantial space savings for large matrices</li>
                <li><strong>Faster operations:</strong> Process only meaningful data, reducing computational overhead</li>
                <li><strong>Cache Performance:</strong> Improved memory locality when accessing non-zero elements</li>
                <li><strong>Parallel Processing:</strong> Non-zero elements can be processed independently across multiple cores</li>
              </ul>
              
              <h4>Implementation Considerations</h4>
              <p>Sparse matrix implementations must balance several factors:</p>
              <ul>
                <li><strong>Overhead Analysis:</strong> Metadata storage costs must be justified by sparsity level</li>
                <li><strong>Access Patterns:</strong> Random access becomes more complex than dense matrices</li>
                <li><strong>Algorithm Complexity:</strong> Specialized algorithms required for sparse operations</li>
                <li><strong>Memory Management:</strong> Dynamic allocation strategies for varying sparsity patterns</li>
                <li><strong>Numerical Stability:</strong> Maintaining precision in sparse computations</li>
              </ul>

              <h5>Triplet Representation Example</h5>
              <p>Matrix:</p>
              <pre>
0  0  3  0
0  0  0  4
2  0  0  0
0  1  0  0
              </pre>
              <p>Triplet representation: [(0,2,3), (1,3,4), (2,0,2), (3,1,1)]</p>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Sparse Matrix Triplet Representation</h5>
                <p>Implement sparse matrix using triplet representation for efficient storage.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Sparse Matrix Implementation"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Arrays Fundamentals</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Stack Operations →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.3</div>
              <div className="lesson-title-main">
                <h1>Stack Operations and Applications</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Stacks: The LIFO Data Structure</h3>
              <p>A stack is a linear data structure that follows the Last In First Out (LIFO) principle. Think of a stack like a pile of plates - you can only add or remove plates from the top. This fundamental concept drives many computing operations from function call management to expression evaluation.</p>
              
              <p>Stacks are ubiquitous in computer systems. They manage function calls, handle undo operations in applications, and facilitate expression parsing in compilers. Understanding stack operations is essential for system programming and algorithm design.</p>
              
              <h4>LIFO Principle and Stack Behavior</h4>
              <p>The LIFO (Last In, First Out) principle defines stack behavior where the most recently added element is the first to be removed. This ordering constraint makes stacks particularly suitable for managing nested operations and maintaining execution context in recursive algorithms.</p>
              
              <h4>Stack Operations: Core Functionality</h4>
              <ul>
                <li><strong>Push:</strong> Insert element at top - O(1) time complexity</li>
                <li><strong>Pop:</strong> Remove element from top - O(1) time complexity</li>
                <li><strong>Peek/Top:</strong> View top element without removal - O(1) access</li>
                <li><strong>isEmpty:</strong> Check if stack is empty - O(1) boolean operation</li>
              </ul>
              
              <h4>Stack Applications in Computer Systems</h4>
              <p>Stacks serve critical roles in modern computing architectures:</p>
              <ul>
                <li><strong>Function Call Management:</strong> Runtime stack maintains activation records and return addresses</li>
                <li><strong>Expression Evaluation:</strong> Parsing and evaluating mathematical expressions</li>
                <li><strong>Undo Mechanisms:</strong> Command pattern implementation in applications</li>
                <li><strong>Syntax Analysis:</strong> Compiler design for parentheses matching and parsing</li>
                <li><strong>Memory Management:</strong> Stack frames for local variable storage</li>
                <li><strong>Backtracking Algorithms:</strong> Depth-first search and constraint satisfaction</li>
              </ul>
              
              <div className="video-section">
                <h6>Stack Data Structure Operations</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/F1F2imiOJfk" 
                    title="Stack Data Structure Operations"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>
              
              <h4>Stack Implementation and Applications</h4>
              <h6>Critical System Applications</h6>
              <ul>
                <li><strong>Expression evaluation:</strong> Infix to postfix conversion using operator precedence</li>
                <li><strong>Function calls:</strong> Runtime call stack management and activation records</li>
                <li><strong>Undo operations:</strong> Command pattern implementation in software applications</li>
                <li><strong>Backtracking:</strong> Algorithmic problem solving in maze traversal and constraint satisfaction</li>
                <li><strong>Parentheses Matching:</strong> Syntax validation in compilers and interpreters</li>
                <li><strong>Recursion Simulation:</strong> Converting recursive algorithms to iterative implementations</li>
              </ul>

              <h4>Infix to Postfix Conversion Algorithm</h4>
              <p>The conversion from infix notation (human-readable) to postfix notation (computer-friendly) demonstrates stack utility in compiler design. This algorithm uses operator precedence and associativity rules to maintain mathematical correctness.</p>
              <h5>Infix to Postfix Conversion</h5>
              <ol>
                <li>Scan infix expression left to right</li>
                <li>If operand, add to output</li>
                <li>If operator, pop higher/equal precedence operators</li>
                <li>If '(', push to stack</li>
                <li>If ')', pop until '(' found</li>
              </ol>
              <p><strong>Example:</strong> A+B*C → ABC*+</p>

              <h4>Tower of Hanoi: Recursive Problem Analysis</h4>
              <p>The Tower of Hanoi represents a classic recursive problem that demonstrates stack-like behavior in algorithmic problem solving. This mathematical puzzle provides insight into recursive algorithm design and complexity analysis.</p>
              
              <h6>Problem Constraints and Rules</h6>
              <p>Move n disks from source tower to destination tower using auxiliary tower with these constraints:</p>
              <ul>
                <li>Only one disk can be moved at a time</li>
                <li>Only the top disk from any tower can be moved</li>
                <li>A larger disk cannot be placed on a smaller disk</li>
                <li>Minimum moves required: 2^n - 1 (exponential complexity)</li>
              </ul>
              
              <h4>Stack Implementation Strategies</h4>
              <p>Stack implementations vary based on underlying data structure and performance requirements:</p>
              <ul>
                <li><strong>Array-based Implementation:</strong> Contiguous memory, O(1) operations, fixed or dynamic capacity</li>
                <li><strong>Linked List Implementation:</strong> Dynamic memory allocation, pointer overhead, unlimited capacity</li>
                <li><strong>Language Built-ins:</strong> Optimized implementations with additional functionality</li>
              </ul>
              
              <h4>Performance Characteristics</h4>
              <ul>
                <li><strong>Time Complexity:</strong> All basic operations are O(1)</li>
                <li><strong>Space Complexity:</strong> O(n) where n is the number of elements</li>
                <li><strong>Memory Access Pattern:</strong> Excellent cache locality for array-based implementation</li>
                <li><strong>Concurrency Considerations:</strong> Thread-safety requires synchronization mechanisms</li>
              </ul>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Stack Operations and Tower of Hanoi</h5>
                <p>Implement stack with push, pop, peek operations and solve Tower of Hanoi problem.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Stack Implementation"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Sparse Matrices</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Queue Operations →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.4</div>
              <div className="lesson-title-main">
                <h1>Queue Operations and Types</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Queues</h3>
              <p>A queue is a linear data structure that follows the First In First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.</p>
              
              <h4>Queue Operations</h4>
              <ul>
                <li><strong>Enqueue:</strong> Insert element at rear - O(1)</li>
                <li><strong>Dequeue:</strong> Remove element from front - O(1)</li>
                <li><strong>Front:</strong> View front element - O(1)</li>
                <li><strong>Rear:</strong> View rear element - O(1)</li>
              </ul>
              
              <div className="video-section">
                <h6>Queue Data Structure Operations</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/okr-XE8yTO8" 
                    title="Queue Data Structure Operations"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>
              
              <h4>Types of Queues</h4>
              <h6>Queue Variations</h6>
              <ul>
                <li><strong>Simple Queue:</strong> Basic FIFO implementation</li>
                <li><strong>Circular Queue:</strong> Efficient memory utilization</li>
                <li><strong>Priority Queue:</strong> Elements served based on priority</li>
                <li><strong>Double-ended Queue (Deque):</strong> Insertion/deletion at both ends</li>
              </ul>

              <h4>Priority Queue</h4>
              <h5>Priority Queue Characteristics</h5>
              <ul>
                <li>Each element has an associated priority</li>
                <li>Higher priority elements are served first</li>
                <li>Implementation: Heap, sorted array, or linked list</li>
                <li>Applications: CPU scheduling, Dijkstra's algorithm</li>
              </ul>
              <p><strong>Operations:</strong> Insert with priority, Extract maximum/minimum</p>

              <h4>Circular Queue Advantages</h4>
              <h5>Why Circular Queue?</h5>
              <ul>
                <li>Efficient memory utilization</li>
                <li>No memory wastage after dequeue operations</li>
                <li>Front and rear pointers wrap around</li>
                <li>Better space complexity than simple queue</li>
              </ul>
              <p><strong>Condition:</strong> Queue is full when (rear + 1) % size == front</p>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Circular Queue and Priority Queue</h5>
                <p>Implement circular queue with efficient memory utilization and priority queue operations.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Queue Implementation"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Stack Operations</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Practical Experiments →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">1.5</div>
              <div className="lesson-title-main">
                <h1>Practical Experiments</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Advanced Implementation Challenges</h3>
              <p>Apply your knowledge of arrays, stacks, and queues to solve complex problems and implement advanced data structure operations.</p>
              
              <h4>Experiment Objectives</h4>
              <ul>
                <li><strong>Two Stacks in Array:</strong> Optimize space utilization</li>
                <li><strong>Infix to Postfix:</strong> Expression conversion algorithms</li>
                <li><strong>Tower of Hanoi:</strong> Recursive problem solving</li>
                <li><strong>Performance Analysis:</strong> Time and space complexity</li>
              </ul>
              
              <div className="video-section">
                <h6>Advanced Data Structure Experiments</h6>
                <div className="video-container">
                  <iframe 
                    src="https://www.youtube.com/embed/MeRb_1bddWg" 
                    title="Advanced Data Structure Experiments"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                </div>
              </div>
              
              <h4>Two Stacks in Single Array</h4>
              <h6>Implementation Strategy</h6>
              <ul>
                <li>Stack 1 grows from left (index 0 onwards)</li>
                <li>Stack 2 grows from right (index n-1 backwards)</li>
                <li>Overflow when top1 + 1 == top2</li>
                <li>Efficient space utilization</li>
              </ul>

              <h5>Practical Experiment 1: Two Stacks in Array</h5>
              <p>Implement two stacks in a single array for space optimization</p>

              <div className="compiler-section">
                <h5>🎯 Practical Experiments: Advanced Data Structure Problems</h5>
                <p>Solve all three practical experiments: Two stacks in array, Queue implementation, and Infix to Postfix conversion.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Practical Experiments"
                ></iframe>
              </div>
            </section>

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Queue Operations</button>
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

export default Unit1;