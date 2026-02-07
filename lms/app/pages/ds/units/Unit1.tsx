'use client';
import React from 'react';
import CodeCompiler from '../components/CodeCompiler';
import Quiz from '../components/Quiz';

interface Unit1Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit1: React.FC<Unit1Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const module1Quiz = [
    {
      question: "What is the time complexity for accessing an element in an array by index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Array elements can be accessed in constant time O(1) using index-based addressing because the memory address can be calculated directly using the formula: Base + (index × element_size)."
    },
    {
      question: "What is the formula for calculating the memory address of arr[i] in a 1D array?",
      options: [
        "Base + i",
        "Base + (i × sizeof(element))",
        "Base × i × sizeof(element)",
        "Base + i + sizeof(element)"
      ],
      correctAnswer: 1,
      explanation: "The address of arr[i] is calculated as Base + (i × sizeof(element)), where Base is the starting address, i is the index, and sizeof(element) is the size of each element in bytes."
    },
    {
      question: "Which of the following is NOT an advantage of arrays?",
      options: [
        "Random access in O(1) time",
        "Cache-friendly due to contiguous memory",
        "Dynamic size adjustment",
        "Simple implementation"
      ],
      correctAnswer: 2,
      explanation: "Static arrays have fixed size and cannot be dynamically adjusted. Dynamic size adjustment is a limitation of arrays, not an advantage. Dynamic arrays (like vectors) can resize but with O(n) cost."
    },
    {
      question: "What is the worst-case time complexity for inserting an element at the beginning of an array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctAnswer: 2,
      explanation: "Inserting at the beginning requires shifting all existing n elements one position to the right, resulting in O(n) time complexity."
    },
    {
      question: "In a 2D array with row-major order, what is the address formula for arr[i][j]?",
      options: [
        "Base + (i + j) × sizeof(element)",
        "Base + (i × cols + j) × sizeof(element)",
        "Base + (j × rows + i) × sizeof(element)",
        "Base + i × j × sizeof(element)"
      ],
      correctAnswer: 1,
      explanation: "In row-major order, the address is calculated as Base + (i × cols + j) × sizeof(element), where i is the row index, j is the column index, and cols is the number of columns."
    }
  ];

  const module2Quiz = [
    {
      question: "What is a sparse matrix?",
      options: [
        "A matrix with all zero elements",
        "A matrix where most elements are zero",
        "A matrix with no zero elements",
        "A matrix with equal rows and columns"
      ],
      correctAnswer: 1,
      explanation: "A sparse matrix is one in which the majority of elements are zero. Typically, when 60-70% or more elements are zero, specialized sparse representation techniques become beneficial."
    },
    {
      question: "What is the sparsity ratio formula?",
      options: [
        "(Non-zero elements) / (Total elements)",
        "(Zero elements) / (Total elements)",
        "(Total elements) / (Zero elements)",
        "(Rows × Columns) / (Zero elements)"
      ],
      correctAnswer: 1,
      explanation: "Sparsity ratio = (Number of zero elements) / (Total elements). A higher ratio indicates a sparser matrix that benefits more from sparse representation."
    },
    {
      question: "In triplet representation of sparse matrix, what information is stored for each non-zero element?",
      options: [
        "Only the value",
        "Row and column indices",
        "Row index, column index, and value",
        "Only row and column indices"
      ],
      correctAnswer: 2,
      explanation: "Triplet representation stores three pieces of information for each non-zero element: (row index, column index, value). This allows reconstruction of the original matrix while saving space."
    },
    {
      question: "What is the main advantage of using sparse matrix representation?",
      options: [
        "Faster element access",
        "Memory efficiency",
        "Simpler implementation",
        "Better for dense matrices"
      ],
      correctAnswer: 1,
      explanation: "The main advantage is memory efficiency - storing only non-zero elements significantly reduces memory usage for matrices with many zeros, which is common in scientific computing and machine learning."
    },
    {
      question: "Which application commonly uses sparse matrices?",
      options: [
        "Image compression",
        "Social network analysis",
        "Video processing",
        "Audio encoding"
      ],
      correctAnswer: 1,
      explanation: "Social network analysis uses sparse matrices extensively because adjacency matrices representing connections between users are typically very sparse - most users are not directly connected to most other users."
    }
  ];

  const module3Quiz = [
    {
      question: "What principle does a stack follow?",
      options: ["FIFO", "LIFO", "Priority-based", "Random access"],
      correctAnswer: 1,
      explanation: "Stack follows LIFO (Last In First Out) principle, meaning the last element added is the first one to be removed, like a stack of plates."
    },
    {
      question: "What is the time complexity of push and pop operations in a stack?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Both push and pop operations in a stack have O(1) time complexity as they only involve adding or removing an element from the top, requiring no traversal."
    },
    {
      question: "Which of the following is NOT a typical application of stacks?",
      options: [
        "Function call management",
        "Expression evaluation",
        "Shortest path finding",
        "Undo operations"
      ],
      correctAnswer: 2,
      explanation: "Shortest path finding typically uses queues (BFS) or priority queues (Dijkstra's algorithm), not stacks. Stacks are used for function calls, expression evaluation, and undo mechanisms."
    },
    {
      question: "In infix to postfix conversion, what is the postfix equivalent of 'A + B * C'?",
      options: ["ABC*+", "AB+C*", "ABC+*", "A*BC+"],
      correctAnswer: 0,
      explanation: "'A + B * C' converts to 'ABC*+' in postfix notation. Due to operator precedence, B*C is evaluated first, then added to A."
    },
    {
      question: "What is the minimum number of moves required to solve Tower of Hanoi with n disks?",
      options: ["n", "2^n", "2^n - 1", "n²"],
      correctAnswer: 2,
      explanation: "The minimum number of moves for Tower of Hanoi with n disks is 2^n - 1. This exponential complexity demonstrates the recursive nature of the problem."
    }
  ];

  const module4Quiz = [
    {
      question: "What principle does a queue follow?",
      options: ["LIFO", "FIFO", "Priority-based", "Random access"],
      correctAnswer: 1,
      explanation: "Queue follows FIFO (First In First Out) principle, meaning the first element added is the first one to be removed, like a line of people waiting."
    },
    {
      question: "What is the time complexity of enqueue and dequeue operations in a queue?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: 0,
      explanation: "Both enqueue (adding at rear) and dequeue (removing from front) operations have O(1) time complexity in a properly implemented queue."
    },
    {
      question: "In a circular queue, when is the queue considered full?",
      options: [
        "When rear == size - 1",
        "When (rear + 1) % size == front",
        "When front == rear",
        "When rear == front - 1"
      ],
      correctAnswer: 1,
      explanation: "A circular queue is full when (rear + 1) % size == front. This condition accounts for the circular nature where indices wrap around."
    },
    {
      question: "What is the main advantage of a circular queue over a simple queue?",
      options: [
        "Faster operations",
        "Efficient memory utilization",
        "Simpler implementation",
        "Supports priority"
      ],
      correctAnswer: 1,
      explanation: "Circular queue efficiently utilizes memory by reusing spaces freed by dequeue operations. In a simple queue, front spaces become unusable after dequeue."
    },
    {
      question: "In a priority queue, how are elements served?",
      options: [
        "First come first served",
        "Last come first served",
        "Based on priority value",
        "Random order"
      ],
      correctAnswer: 2,
      explanation: "In a priority queue, elements are served based on their priority value, not their arrival order. Higher priority elements are dequeued first regardless of when they were added."
    }
  ];

  const module5Quiz = [
    {
      question: "In the two stacks in one array implementation, where does Stack 2 grow from?",
      options: [
        "From index 0 onwards",
        "From the middle",
        "From index n-1 backwards",
        "From a random position"
      ],
      correctAnswer: 2,
      explanation: "Stack 2 grows from index n-1 backwards (towards lower indices), while Stack 1 grows from index 0 onwards. This maximizes space utilization."
    },
    {
      question: "When does overflow occur in two stacks implemented in a single array?",
      options: [
        "When top1 == n-1",
        "When top2 == 0",
        "When top1 + 1 == top2",
        "When top1 == top2"
      ],
      correctAnswer: 2,
      explanation: "Overflow occurs when top1 + 1 == top2, meaning the two stacks meet and there's no space left between them for new elements."
    },
    {
      question: "What is the space complexity advantage of implementing two stacks in one array?",
      options: [
        "Uses half the memory",
        "Better space utilization than two separate arrays",
        "No space advantage",
        "Uses double the memory"
      ],
      correctAnswer: 1,
      explanation: "Two stacks in one array provide better space utilization than two separate arrays because unused space in one stack can be used by the other, avoiding wasted memory."
    },
    {
      question: "Which data structure is most suitable for implementing recursion?",
      options: ["Array", "Queue", "Stack", "Linked List"],
      correctAnswer: 2,
      explanation: "Stack is most suitable for implementing recursion because it naturally handles the LIFO nature of recursive function calls, storing activation records and return addresses."
    },
    {
      question: "What is the primary purpose of practical experiments in data structures?",
      options: [
        "Memorizing algorithms",
        "Understanding theoretical concepts through implementation",
        "Writing complex code",
        "Avoiding real-world problems"
      ],
      correctAnswer: 1,
      explanation: "Practical experiments help understand theoretical concepts through hands-on implementation, bridging the gap between theory and practice, and developing problem-solving skills."
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
               
                  <iframe 
                    src="https://www.youtube.com/embed/55l-aZ7_F24" 
                    title="Array Data Structure Explained"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230302091959/Arrays-in-C.png" alt="Array Memory Layout" className="movie-poster" />
                  <h6>Memory Architecture</h6>
                  <p>Contiguous memory allocation patterns</p>
                </div>
                <div className="movie-card">
                  <img src="https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png" alt="Array Operations" className="movie-poster" />
                  <h6>Array Operations</h6>
                  <p>Insertion, deletion, and traversal algorithms</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Array Structure" className="movie-poster" />
                  <h6>Array Structure</h6>
                  <p>Index-based element access patterns</p>
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
                
                  <iframe 
                    src="https://www.youtube.com/embed/QJNwK2uJyGs" 
                    title="Array Operations and Algorithms"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
             
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

            <Quiz title="Module 1.1 Quiz: Arrays Fundamentals" questions={module1Quiz} subject="DS" unitId={1} moduleId={1} />

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
                
                  <iframe 
                    src="https://www.youtube.com/embed/O64RH5Y9ZjU?si=AK6qXgVXTAojfnCu" 
                    title="Sparse Matrix Representation"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                
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

            <Quiz title="Module 1.2 Quiz: Sparse Matrices" questions={module2Quiz} subject="DS" unitId={1} moduleId={2} />

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
               
                  <iframe 
                    src="https://www.youtube.com/embed/F1F2imiOJfk" 
                    title="Stack Data Structure Operations"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
                
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

            <Quiz title="Module 1.3 Quiz: Stack Operations" questions={module3Quiz} subject="DS" unitId={1} moduleId={3} />

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
                
                  <iframe 
                    src="https://www.youtube.com/embed/okr-XE8yTO8" 
                    title="Queue Data Structure Operations"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
              
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

            <Quiz title="Module 1.4 Quiz: Queue Operations" questions={module4Quiz} subject="DS" unitId={1} moduleId={4} />

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
             
                  <iframe 
                    src="https://www.youtube.com/embed/MeRb_1bddWg" 
                    title="Advanced Data Structure Experiments"
                    frameBorder="0" 
                    allowFullScreen
                    style={{width: '400px', height: '225px'}}>
                  </iframe>
               
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

            <Quiz title="Module 1.5 Quiz: Practical Experiments" questions={module5Quiz} subject="DS" unitId={1} moduleId={5} />

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