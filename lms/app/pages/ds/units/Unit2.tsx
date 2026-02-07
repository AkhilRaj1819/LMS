'use client';
import React from 'react';
import Quiz from '../components/Quiz';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
  
  const module1Quiz = [
    {
      question: "What is the main advantage of a singly linked list over an array?",
      options: ["Random access", "Dynamic size", "Cache locality", "Less memory usage"],
      correctAnswer: 1,
      explanation: "Singly linked lists have dynamic size and can grow/shrink at runtime without predetermined size limitations, unlike arrays which have fixed size."
    },
    {
      question: "What is the time complexity of inserting a node at the beginning of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Inserting at the beginning requires only updating the head pointer and the new node's next pointer, which is O(1) constant time."
    },
    {
      question: "What does the 'next' pointer of the last node in a singly linked list point to?",
      options: ["First node", "NULL", "Previous node", "Itself"],
      correctAnswer: 1,
      explanation: "In a singly linked list, the last node's next pointer points to NULL to indicate the end of the list."
    },
    {
      question: "What is the time complexity of deleting a node from the end of a singly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: 1,
      explanation: "Deleting from the end requires traversing to the second-to-last node, which takes O(n) time in a singly linked list."
    },
    {
      question: "Which operation is more efficient in a linked list compared to an array?",
      options: ["Random access", "Insertion at beginning", "Binary search", "Cache performance"],
      correctAnswer: 1,
      explanation: "Insertion at the beginning is O(1) in linked lists but O(n) in arrays due to shifting elements. Arrays are better for random access and cache performance."
    }
  ];

  const module2Quiz = [
    {
      question: "In a linked list implementation of a stack, where should push and pop operations occur?",
      options: ["At the tail", "At the head", "In the middle", "At random positions"],
      correctAnswer: 1,
      explanation: "Push and pop operations should occur at the head for O(1) time complexity, as accessing the head is immediate in a linked list."
    },
    {
      question: "What is the main advantage of implementing a queue using a linked list?",
      options: ["Fixed size", "No size limitations", "Faster access", "Less memory"],
      correctAnswer: 1,
      explanation: "Linked list implementation eliminates the fixed size limitation of array-based queues, allowing dynamic growth as needed."
    },
    {
      question: "For efficient queue operations, what pointers should be maintained?",
      options: ["Only head", "Only tail", "Both head and tail", "Head, tail, and middle"],
      correctAnswer: 2,
      explanation: "Maintaining both head and tail pointers allows O(1) enqueue (at tail) and dequeue (at head) operations."
    },
    {
      question: "What is the time complexity of push operation in a linked list-based stack?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "Push operation at the head of a linked list is O(1) as it only involves creating a new node and updating the head pointer."
    },
    {
      question: "Which data structure benefits most from linked list implementation?",
      options: ["Array", "Stack with unknown size", "Binary search", "Sorting algorithms"],
      correctAnswer: 1,
      explanation: "Stacks with unknown or varying sizes benefit most from linked list implementation due to dynamic memory allocation."
    }
  ];

  const module3Quiz = [
    {
      question: "What is the main advantage of a doubly linked list over a singly linked list?",
      options: ["Less memory", "Bidirectional traversal", "Faster insertion", "Simpler implementation"],
      correctAnswer: 1,
      explanation: "Doubly linked lists allow bidirectional traversal (forward and backward) through both next and previous pointers."
    },
    {
      question: "In a circular linked list, what does the last node's next pointer point to?",
      options: ["NULL", "First node", "Previous node", "Itself"],
      correctAnswer: 1,
      explanation: "In a circular linked list, the last node's next pointer points back to the first node, creating a circular structure."
    },
    {
      question: "What is the time complexity of deleting a given node in a doubly linked list?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 0,
      explanation: "With a reference to the node, deletion in a doubly linked list is O(1) as we can directly access both previous and next nodes."
    },
    {
      question: "Which problem is best solved using a circular linked list?",
      options: ["Binary search", "Josephus problem", "Sorting", "Matrix multiplication"],
      correctAnswer: 1,
      explanation: "The Josephus problem (eliminating every k-th person in a circle) is naturally solved using a circular linked list."
    },
    {
      question: "What is the memory overhead of a doubly linked list compared to a singly linked list?",
      options: ["Same", "One extra pointer per node", "Two extra pointers per node", "Half the memory"],
      correctAnswer: 1,
      explanation: "Doubly linked lists require one additional pointer (previous) per node compared to singly linked lists, increasing memory by approximately 33%."
    }
  ];

  const module4Quiz = [
    {
      question: "Which data structure uses linked lists for collision resolution?",
      options: ["Array", "Hash table with chaining", "Binary tree", "Heap"],
      correctAnswer: 1,
      explanation: "Hash tables use linked lists in separate chaining method to handle collisions where multiple keys hash to the same bucket."
    },
    {
      question: "How are adjacency lists in graphs typically implemented?",
      options: ["Using arrays only", "Using linked lists", "Using matrices", "Using stacks"],
      correctAnswer: 1,
      explanation: "Adjacency lists use linked lists to store neighbors of each vertex, providing space-efficient graph representation."
    },
    {
      question: "Which application uses doubly linked lists for efficient operations?",
      options: ["Stack", "Queue", "LRU Cache", "Binary search"],
      correctAnswer: 2,
      explanation: "LRU (Least Recently Used) Cache uses doubly linked lists for O(1) insertion, deletion, and moving elements to maintain access order."
    },
    {
      question: "What is the primary use of linked lists in operating systems?",
      options: ["File storage", "Process scheduling", "Memory allocation", "All of the above"],
      correctAnswer: 3,
      explanation: "Operating systems use linked lists for process scheduling queues, memory management (free block lists), and file system structures."
    },
    {
      question: "How are polynomials efficiently represented using linked lists?",
      options: ["Store all coefficients", "Store only non-zero terms", "Store only exponents", "Store in array"],
      correctAnswer: 1,
      explanation: "Linked lists efficiently represent sparse polynomials by storing only non-zero terms with their coefficients and exponents."
    }
  ];

  const module5Quiz = [
    {
      question: "What is the best approach to reverse a singly linked list?",
      options: ["Use recursion", "Use iteration with three pointers", "Use a stack", "All of the above"],
      correctAnswer: 3,
      explanation: "All three approaches work: recursion uses call stack, iteration uses three pointers (prev, curr, next), and explicit stack stores nodes."
    },
    {
      question: "What is the time complexity of removing duplicates from an unsorted linked list using a hash table?",
      options: ["O(1)", "O(n)", "O(n²)", "O(n log n)"],
      correctAnswer: 1,
      explanation: "Using a hash table to track seen values allows O(n) time complexity for duplicate removal with single traversal."
    },
    {
      question: "In a priority queue implemented with a linked list, where should insertion occur?",
      options: ["Always at head", "Always at tail", "Based on priority", "Random position"],
      correctAnswer: 2,
      explanation: "Elements are inserted based on priority to maintain sorted order, ensuring highest priority element is always accessible."
    },
    {
      question: "What is the space complexity of displaying a linked list in reverse using recursion?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      correctAnswer: 1,
      explanation: "Recursive approach uses O(n) space on the call stack as each node requires a recursive call until the end is reached."
    },
    {
      question: "Which algorithm is most efficient for detecting a cycle in a linked list?",
      options: ["Brute force", "Floyd's cycle detection", "Using hash table", "Sorting"],
      correctAnswer: 1,
      explanation: "Floyd's cycle detection (tortoise and hare) uses two pointers at different speeds with O(n) time and O(1) space complexity."
    }
  ];
  
  const renderModule = () => {
    switch (currentModule) {
      case 1:
        return (
          <div className="module-content">

            <div className="lesson-header" style={{ marginTop: '50px' }}>
              <div className="lesson-number-badge">2.1</div>
              <div className="lesson-title-main">
                <h1>Singly/Linear Linked Lists</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Understanding Singly Linked Lists</h3>
              <p>A singly linked list is a fundamental dynamic data structure where elements are stored in nodes, each containing data and a pointer to the next node. This structure provides efficient insertion and deletion operations while maintaining sequential access to elements.</p>
              
              <h4>Fundamental Concepts of Linked Lists</h4>
              <p>Linked lists represent a paradigm shift from array-based storage:</p>
              <ul>
                <li><strong>Dynamic Memory Allocation:</strong> Memory is allocated at runtime as needed</li>
                <li><strong>Non-contiguous Storage:</strong> Nodes can be stored anywhere in memory</li>
                <li><strong>Pointer-based Navigation:</strong> Access through following pointer chains</li>
                <li><strong>Flexible Size:</strong> Can grow or shrink during program execution</li>
              </ul>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept_0.png" alt="Singly Linked List" className="movie-poster" />
                  <h6>Singly Linked List</h6>
                  <p>Basic structure with nodes and pointers</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-with-data.png" alt="Linked List Operations" className="movie-poster" />
                  <h6>List Operations</h6>
                  <p>Insertion, deletion, and traversal</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Memory Allocation" className="movie-poster" />
                  <h6>Memory Management</h6>
                  <p>Dynamic allocation and deallocation</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/njTh_OwMljA" 
                  title="Introduction to Linked Lists"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Introduction to Linked Lists fundamentals</p>
              </div>

              <h4>Node Structure and Memory Layout</h4>
              <h6>Anatomical Structure of a Node</h6>
              <ul>
                <li><strong>Data Field:</strong> Stores the actual information (int, string, object)</li>
                <li><strong>Next Pointer:</strong> Contains memory address of the next node</li>
                <li><strong>Head Pointer:</strong> External pointer to the first node</li>
                <li><strong>Null Terminator:</strong> Last node's next pointer is NULL</li>
                <li><strong>Memory Footprint:</strong> Size = sizeof(data) + sizeof(pointer)</li>
              </ul>
              
              <h4>Comprehensive Operation Analysis</h4>
              <h6>Core Operations with Complexity Analysis</h6>
              <ul>
                <li><strong>Traversal:</strong> Sequential access through pointer following - O(n)</li>
                <li><strong>Search:</strong> Linear search through nodes until found - O(n)</li>
                <li><strong>Insertion:</strong> Create node, adjust pointers - O(1) at head, O(n) elsewhere</li>
                <li><strong>Deletion:</strong> Locate node, adjust pointers, free memory - O(1) at head, O(n) elsewhere</li>
                <li><strong>Length Calculation:</strong> Count nodes through traversal - O(n)</li>
                <li><strong>Display:</strong> Print all elements in sequence - O(n)</li>
              </ul>

              <h4>Advanced Insertion Strategies</h4>
              <h5>Detailed Insertion Techniques</h5>
              <h6>Insertion at Beginning (Head)</h6>
              <p><strong>Algorithm:</strong> Create new node → Set next to current head → Update head pointer</p>
              <ul>
                <li>Time Complexity: O(1) - Constant time operation</li>
                <li>Space Complexity: O(1) - Single node allocation</li>
                <li>Use Case: Stack implementation, recent items</li>
                <li>Advantage: Most efficient insertion position</li>
              </ul>
              
              <h6>Insertion at End (Tail)</h6>
              <p><strong>Algorithm:</strong> Traverse to last node → Create new node → Set last node's next</p>
              <ul>
                <li>Time Complexity: O(n) - Requires full traversal</li>
                <li>Space Complexity: O(1) - Single node allocation</li>
                <li>Optimization: Maintain tail pointer for O(1) insertion</li>
                <li>Use Case: Queue implementation, append operations</li>
              </ul>
              
              <h6>Insertion at Specific Position</h6>
              <p><strong>Algorithm:</strong> Traverse to position-1 → Create new node → Adjust pointers</p>
              <ul>
                <li>Time Complexity: O(n) - Worst case traversal to position</li>
                <li>Position Validation: Check bounds before insertion</li>
                <li>Pointer Management: Careful handling to avoid memory leaks</li>
                <li>Edge Cases: Empty list, position 0, beyond list length</li>
              </ul>

              <h4>Comprehensive Deletion Mechanisms</h4>
              <h5>Advanced Deletion Strategies</h5>
              <h6>Deletion from Beginning</h6>
              <ul>
                <li>Store reference to current head node</li>
                <li>Update head pointer to head→next</li>
                <li>Free memory of the old head node</li>
                <li>Handle edge case: single node in list</li>
              </ul>
              
              <h6>Deletion from End</h6>
              <ul>
                <li>Traverse to second-to-last node</li>
                <li>Set its next pointer to NULL</li>
                <li>Free memory of the last node</li>
                <li>Special handling for single node scenario</li>
              </ul>
              
              <h6>Deletion by Value</h6>
              <ul>
                <li>Search for node containing the target value</li>
                <li>Maintain previous node reference during traversal</li>
                <li>Adjust previous node's next pointer</li>
                <li>Free memory of the deleted node</li>
              </ul>

              <h4>Memory Management and Performance Considerations</h4>
              <ul>
                <li><strong>Dynamic Allocation:</strong> malloc()/new for node creation, free()/delete for cleanup</li>
                <li><strong>Memory Fragmentation:</strong> Non-contiguous allocation can lead to fragmentation</li>
                <li><strong>Cache Performance:</strong> Poor spatial locality compared to arrays</li>
                <li><strong>Pointer Overhead:</strong> Additional memory for storing next pointers</li>
                <li><strong>Memory Leaks:</strong> Proper deallocation essential to prevent leaks</li>
                <li><strong>Garbage Collection:</strong> Automatic in managed languages, manual in C/C++</li>
              </ul>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Singly Linked List Implementation</h5>
                <p>Implement a singly linked list with insertion, deletion, and traversal operations.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Singly Linked List Implementation"
                ></iframe>
              </div>
            </section>

            <Quiz title="Module 2.1 Quiz: Singly Linked Lists" questions={module1Quiz} subject="DS" unitId={2} moduleId={1} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="next-module-btn">Stack & Queue Implementation →</button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.2</div>
              <div className="lesson-title-main">
                <h1>Linked List Implementation of Stacks and Queues</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Advanced Implementation Strategies for Stacks and Queues</h3>
              <p>Linked list implementations of stacks and queues provide dynamic memory management, eliminating fixed-size limitations while maintaining optimal time complexity for core operations. This approach offers superior flexibility and memory efficiency.</p>
              
              <h4>Theoretical Foundations of Dynamic Data Structures</h4>
              <p>Understanding the mathematical and computational principles:</p>
              <ul>
                <li><strong>LIFO Principle:</strong> Last In, First Out - mathematical stack model</li>
                <li><strong>FIFO Principle:</strong> First In, First Out - queue theoretical model</li>
                <li><strong>Amortized Analysis:</strong> Average-case performance over sequence of operations</li>
                <li><strong>Space-Time Tradeoffs:</strong> Memory efficiency vs. access patterns</li>
              </ul>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" alt="Stack using Linked List" className="movie-poster" />
                  <h6>Stack Implementation</h6>
                  <p>LIFO operations with linked nodes</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/queue.png" alt="Queue using Linked List" className="movie-poster" />
                  <h6>Queue Implementation</h6>
                  <p>FIFO operations with head/tail pointers</p>
                </div>
                <div className="movie-card">
                  <img src="data:image/png;base64,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" alt="Dynamic Memory Management" className="movie-poster" />
                  <h6>Memory Management</h6>
                  <p>Runtime allocation and deallocation</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/MuwxQ2IB8lQ" 
                  title="Stack and Queue using Linked Lists"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Stack and Queue implementation using Linked Lists</p>
              </div>

              <h4>Advanced Stack Implementation Analysis</h4>
              <h6>Comprehensive Stack Operations</h6>
              <ul>
                <li><strong>Push Operation:</strong> Insert at head - O(1) time, O(1) space</li>
                <li><strong>Pop Operation:</strong> Remove from head - O(1) time, handles underflow</li>
                <li><strong>Peek/Top Operation:</strong> Access head data without removal - O(1)</li>
                <li><strong>isEmpty Check:</strong> Verify if head pointer is NULL - O(1)</li>
                <li><strong>Size Calculation:</strong> Count nodes or maintain counter - O(n) or O(1)</li>
                <li><strong>Clear/Destroy:</strong> Deallocate all nodes - O(n)</li>
              </ul>
              
              <h4>Sophisticated Queue Implementation Strategies</h4>
              <h6>Optimized Queue Operations</h6>
              <ul>
                <li><strong>Enqueue Operation:</strong> Insert at tail with tail pointer - O(1)</li>
                <li><strong>Dequeue Operation:</strong> Remove from head - O(1)</li>
                <li><strong>Front Access:</strong> View head node data - O(1)</li>
                <li><strong>Rear Access:</strong> View tail node data with tail pointer - O(1)</li>
                <li><strong>Queue Status:</strong> Check empty/full conditions - O(1)</li>
                <li><strong>Circular Conversion:</strong> Link tail to head for circular queue</li>
              </ul>

              <h4>Implementation Design Patterns</h4>
              <div className="example-box">
                <h5>Advanced Implementation Considerations</h5>
                <div className="operation-details">
                  <h6>Stack Implementation Pattern</h6>
                  <p><strong>Single Pointer Design:</strong> Only head pointer needed for stack operations</p>
                  <ul>
                    <li>Memory Efficiency: Minimal pointer overhead</li>
                    <li>Simplicity: Straightforward push/pop at head</li>
                    <li>Error Handling: Underflow detection and management</li>
                    <li>Thread Safety: Considerations for concurrent access</li>
                  </ul>
                  
                  <h6>Queue Implementation Pattern</h6>
                  <p><strong>Dual Pointer Design:</strong> Both head and tail pointers for efficiency</p>
                  <ul>
                    <li>Optimal Performance: O(1) enqueue and dequeue operations</li>
                    <li>Pointer Synchronization: Maintain head/tail consistency</li>
                    <li>Edge Case Handling: Empty queue and single element scenarios</li>
                    <li>Memory Management: Proper node deallocation</li>
                  </ul>
                  
                  <h6>Generic Implementation Strategies</h6>
                  <ul>
                    <li><strong>Template/Generic Classes:</strong> Type-independent implementations</li>
                    <li><strong>Exception Handling:</strong> Robust error management</li>
                    <li><strong>Iterator Support:</strong> STL-compatible iteration patterns</li>
                    <li><strong>Memory Pool:</strong> Pre-allocated node pools for performance</li>
                  </ul>
                </div>
              </div>

              <h4>Comparative Analysis and Performance Metrics</h4>
              <div className="example-box">
                <h5>Linked List vs Array Implementation Comparison</h5>
                <div className="operation-details">
                  <h6>Advantages of Linked List Implementation</h6>
                  <ul>
                    <li><strong>Dynamic Size:</strong> No predetermined size limitations</li>
                    <li><strong>Memory Efficiency:</strong> Allocate only required memory</li>
                    <li><strong>No Overflow:</strong> Limited only by available system memory</li>
                    <li><strong>Flexibility:</strong> Easy to extend with additional operations</li>
                  </ul>
                  
                  <h6>Trade-offs and Considerations</h6>
                  <ul>
                    <li><strong>Memory Overhead:</strong> Additional pointer storage per node</li>
                    <li><strong>Cache Performance:</strong> Non-contiguous memory affects locality</li>
                    <li><strong>Complexity:</strong> More complex implementation than arrays</li>
                    <li><strong>Debugging:</strong> Pointer-related bugs can be challenging</li>
                  </ul>
                </div>
              </div>

              <h4>Real-World Applications and Use Cases</h4>
              <ul>
                <li><strong>Function Call Management:</strong> Runtime stack for function calls and local variables</li>
                <li><strong>Expression Evaluation:</strong> Parsing and evaluating mathematical expressions</li>
                <li><strong>Undo/Redo Systems:</strong> Command pattern implementation in editors</li>
                <li><strong>Browser History:</strong> Navigation stack for back/forward functionality</li>
                <li><strong>Task Scheduling:</strong> Process queues in operating systems</li>
                <li><strong>Buffer Management:</strong> I/O buffering and data streaming</li>
                <li><strong>Breadth-First Search:</strong> Queue-based graph traversal algorithms</li>
                <li><strong>Print Spooling:</strong> Managing print job queues</li>
              </ul>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Stack and Queue using Linked Lists</h5>
                <p>Implement both stack and queue data structures using linked lists.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Stack and Queue Implementation"
                ></iframe>
              </div>
            </section>

            <Quiz title="Module 2.2 Quiz: Stack & Queue Implementation" questions={module2Quiz} subject="DS" unitId={2} moduleId={2} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Singly Linked Lists</button>
              <button onClick={() => setCurrentModule(3)} className="next-module-btn">Doubly & Circular Lists →</button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.3</div>
              <div className="lesson-title-main">
                <h1>Doubly and Circular Linked Lists</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Advanced Linked List Architectures: Doubly and Circular Variants</h3>
              <p>Doubly and circular linked lists represent sophisticated data structure architectures that extend the basic linked list concept to provide enhanced functionality, bidirectional navigation, and specialized use cases in complex algorithmic scenarios.</p>
              
              <div className="theory-box">
                <h5>Theoretical Foundations of Advanced Linked Structures</h5>
                <p>Understanding the mathematical and structural principles:</p>
                <ul>
                  <li><strong>Bidirectional Connectivity:</strong> Forward and backward traversal capabilities</li>
                  <li><strong>Circular Topology:</strong> Elimination of null terminators for continuous loops</li>
                  <li><strong>Structural Invariants:</strong> Maintaining consistency in complex pointer relationships</li>
                  <li><strong>Algorithmic Complexity:</strong> Impact on time and space complexity analysis</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/doubly-linked-list-concept.png" alt="Doubly Linked List" className="movie-poster" />
                  <h6>Doubly Linked List</h6>
                  <p>Bidirectional navigation structure</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/circular-linked-list.png" alt="Circular Linked List" className="movie-poster" />
                  <h6>Circular Linked List</h6>
                  <p>Continuous loop architecture</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/doubly-linked-list-concept.png" alt="Doubly Circular List" className="movie-poster" />
                  <h6>Doubly Circular List</h6>
                  <p>Advanced hybrid structure</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/8kptHdreaTA" 
                  title="Doubly and Circular Linked Lists"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Doubly and Circular Linked Lists explained</p>
              </div>

              <h4>Comprehensive Doubly Linked List Analysis</h4>
              <div className="definition-box">
                <h6>Anatomical Structure and Properties</h6>
                <ul>
                  <li><strong>Node Architecture:</strong> Data + Next pointer + Previous pointer</li>
                  <li><strong>Dual Connectivity:</strong> Each node maintains bidirectional links</li>
                  <li><strong>Head and Tail Pointers:</strong> External references to both ends</li>
                  <li><strong>Boundary Conditions:</strong> Head.prev = NULL, Tail.next = NULL</li>
                  <li><strong>Memory Overhead:</strong> Additional pointer per node (33% increase)</li>
                  <li><strong>Structural Integrity:</strong> Invariant: node.next.prev = node</li>
                </ul>
              </div>
              
              <h4>Advanced Operations in Doubly Linked Lists</h4>
              <div className="example-box">
                <h5>Sophisticated Operation Implementations</h5>
                <div className="operation-details">
                  <h6>Bidirectional Traversal</h6>
                  <p><strong>Forward Traversal:</strong> Standard next pointer following</p>
                  <p><strong>Backward Traversal:</strong> Previous pointer following from tail</p>
                  <ul>
                    <li>Time Complexity: O(n) for both directions</li>
                    <li>Use Cases: Reverse iteration, palindrome checking</li>
                    <li>Implementation: Dual iterator support</li>
                  </ul>
                  
                  <h6>Efficient Deletion Operations</h6>
                  <p><strong>Delete Given Node:</strong> O(1) deletion when node reference available</p>
                  <ul>
                    <li>Algorithm: node.prev.next = node.next; node.next.prev = node.prev</li>
                    <li>Advantage: No traversal required to find previous node</li>
                    <li>Edge Cases: Deleting head, tail, or single node</li>
                    <li>Memory Management: Proper deallocation of deleted node</li>
                  </ul>
                  
                  <h6>Advanced Insertion Strategies</h6>
                  <ul>
                    <li><strong>Insert Before Node:</strong> O(1) insertion before given node</li>
                    <li><strong>Insert After Node:</strong> O(1) insertion after given node</li>
                    <li><strong>Sorted Insertion:</strong> Maintain sorted order during insertion</li>
                    <li><strong>Bulk Operations:</strong> Efficient range insertions and deletions</li>
                  </ul>
                </div>
              </div>

              <h4>Circular Linked List Architectures</h4>
              <div className="definition-box">
                <h6>Circular Structure Variations</h6>
                <ul>
                  <li><strong>Singly Circular:</strong> Last node points to first node</li>
                  <li><strong>Doubly Circular:</strong> Bidirectional circular connections</li>
                  <li><strong>No Null Terminators:</strong> Continuous loop structure</li>
                  <li><strong>Sentinel Nodes:</strong> Dummy nodes to simplify edge cases</li>
                  <li><strong>Cycle Detection:</strong> Special algorithms needed for traversal</li>
                  <li><strong>Infinite Loops:</strong> Risk of infinite traversal without proper termination</li>
                </ul>
              </div>

              <h4>Specialized Algorithms for Circular Lists</h4>
              <div className="example-box">
                <h5>Advanced Circular List Operations</h5>
                <div className="operation-details">
                  <h6>Safe Traversal Techniques</h6>
                  <ul>
                    <li><strong>Counter-based:</strong> Traverse exactly n nodes</li>
                    <li><strong>Marker-based:</strong> Use starting node as termination condition</li>
                    <li><strong>Two-pointer:</strong> Fast and slow pointers for cycle detection</li>
                    <li><strong>Visited Marking:</strong> Temporary marking for complex operations</li>
                  </ul>
                  
                  <h6>Josephus Problem Solution</h6>
                  <p><strong>Problem:</strong> Eliminate every k-th person in a circle</p>
                  <ul>
                    <li>Circular list represents people in circle</li>
                    <li>Count k positions and eliminate node</li>
                    <li>Continue until only one node remains</li>
                    <li>Time Complexity: O(n*k), Space: O(1)</li>
                  </ul>
                  
                  <h6>Round-Robin Scheduling</h6>
                  <ul>
                    <li>Process queue in circular fashion</li>
                    <li>Each process gets fixed time quantum</li>
                    <li>Automatic cycling through process list</li>
                    <li>Fair resource allocation algorithm</li>
                  </ul>
                </div>
              </div>

              <h4>Comparative Analysis and Performance Metrics</h4>
              <div className="example-box">
                <h5>Comprehensive Structure Comparison</h5>
                <div className="operation-details">
                  <h6>Doubly Linked List Advantages</h6>
                  <ul>
                    <li><strong>Bidirectional Navigation:</strong> Forward and backward traversal</li>
                    <li><strong>Efficient Deletion:</strong> O(1) deletion with node reference</li>
                    <li><strong>Easy Reversal:</strong> Simple pointer swapping for list reversal</li>
                    <li><strong>Better for Algorithms:</strong> Many algorithms benefit from backward links</li>
                  </ul>
                  
                  <h6>Circular List Advantages</h6>
                  <ul>
                    <li><strong>Continuous Operations:</strong> No end-of-list checks needed</li>
                    <li><strong>Round-Robin Applications:</strong> Natural fit for cyclic algorithms</li>
                    <li><strong>Memory Efficiency:</strong> No null pointers (slight memory saving)</li>
                    <li><strong>Symmetric Structure:</strong> Every node has same structure</li>
                  </ul>
                  
                  <h6>Trade-offs and Considerations</h6>
                  <ul>
                    <li><strong>Memory Overhead:</strong> Doubly linked lists use more memory</li>
                    <li><strong>Complexity:</strong> More complex pointer management</li>
                    <li><strong>Debugging Difficulty:</strong> Circular references complicate debugging</li>
                    <li><strong>Cache Performance:</strong> Additional pointers may affect cache locality</li>
                  </ul>
                </div>
              </div>

              <h4>Advanced Applications and Use Cases</h4>
              <ul>
                <li><strong>Browser Navigation:</strong> Forward/back button implementation using doubly linked lists</li>
                <li><strong>Music Playlists:</strong> Circular lists for continuous playback and shuffle</li>
                <li><strong>Text Editors:</strong> Cursor movement and text manipulation</li>
                <li><strong>LRU Cache:</strong> Doubly linked list for efficient cache management</li>
                <li><strong>Operating System Scheduling:</strong> Round-robin process scheduling</li>
                <li><strong>Game Development:</strong> Turn-based games and circular player queues</li>
                <li><strong>Network Protocols:</strong> Token ring networks and circular buffers</li>
                <li><strong>Mathematical Applications:</strong> Polynomial representation and manipulation</li>
              </ul>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Doubly and Circular Linked Lists</h5>
                <p>Implement doubly linked list and circular linked list with all operations.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Doubly and Circular Lists"
                ></iframe>
              </div>
            </section>

            <Quiz title="Module 2.3 Quiz: Doubly & Circular Lists" questions={module3Quiz} subject="DS" unitId={2} moduleId={3} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Stack & Queue Implementation</button>
              <button onClick={() => setCurrentModule(4)} className="next-module-btn">Applications →</button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.4</div>
              <div className="lesson-title-main">
                <h1>Linked List Applications</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Comprehensive Applications of Linked List Data Structures</h3>
              <p>Linked lists serve as fundamental building blocks in computer science, enabling sophisticated algorithms and system implementations across diverse domains from operating systems to artificial intelligence, demonstrating their versatility and computational significance.</p>
              
              <div className="theory-box">
                <h5>Theoretical Foundations of Linked List Applications</h5>
                <p>Understanding the computational principles that make linked lists essential:</p>
                <ul>
                  <li><strong>Dynamic Memory Management:</strong> Runtime allocation and deallocation</li>
                  <li><strong>Pointer-based Algorithms:</strong> Efficient traversal and manipulation</li>
                  <li><strong>Abstract Data Type Implementation:</strong> Foundation for complex structures</li>
                  <li><strong>Algorithmic Paradigms:</strong> Supporting various computational patterns</li>
                </ul>
              </div>
              
              <div className="media-gallery">
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-concept_0.png" alt="Linked List Applications" className="movie-poster" />
                  <h6>System Applications</h6>
                  <p>OS, compilers, and system software</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/linked-list-with-data.png" alt="Data Structure Applications" className="movie-poster" />
                  <h6>Algorithm Implementation</h6>
                  <p>Hash tables, graphs, and trees</p>
                </div>
                <div className="movie-card">
                  <img src="https://cdn.programiz.com/sites/tutorial2program/files/stack.png" alt="Real World Applications" className="movie-poster" />
                  <h6>Real-World Usage</h6>
                  <p>Software applications and systems</p>
                </div>
              </div>
              
              <div style={{margin: '24px 0'}}>
                <iframe 
                  src="https://www.youtube.com/embed/R9PTBwOzceo" 
                  title="Linked List Applications"
                  frameBorder="0" 
                  allowFullScreen
                  style={{width: '50%', height: '300px'}}>
                </iframe>
                <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Real-world applications of Linked Lists</p>
              </div>

              <h4>System-Level Applications</h4>
              <div className="definition-box">
                <h6>Operating System Implementations</h6>
                <ul>
                  <li><strong>Process Management:</strong> Process control blocks in scheduling queues</li>
                  <li><strong>Memory Management:</strong> Free block lists and memory allocation</li>
                  <li><strong>File Systems:</strong> Directory structures and file allocation tables</li>
                  <li><strong>Device Drivers:</strong> I/O request queues and buffer management</li>
                  <li><strong>Interrupt Handling:</strong> Interrupt service routine chains</li>
                  <li><strong>Virtual Memory:</strong> Page replacement algorithms and page tables</li>
                </ul>
              </div>
              
              <h4>Compiler and Language Implementation</h4>
              <div className="definition-box">
                <h6>Programming Language Support</h6>
                <ul>
                  <li><strong>Symbol Tables:</strong> Variable and function identifier management</li>
                  <li><strong>Abstract Syntax Trees:</strong> Parse tree representation</li>
                  <li><strong>Lexical Analysis:</strong> Token streams and lexeme processing</li>
                  <li><strong>Code Generation:</strong> Instruction sequences and optimization</li>
                  <li><strong>Garbage Collection:</strong> Object reference tracking</li>
                  <li><strong>Runtime Stack:</strong> Function call management and local variables</li>
                </ul>
              </div>

              <h4>Advanced Data Structure Implementations</h4>
              <div className="example-box">
                <h5>Complex Structure Foundations</h5>
                <div className="operation-details">
                  <h6>Hash Table Collision Resolution</h6>
                  <p><strong>Separate Chaining:</strong> Each bucket contains a linked list</p>
                  <ul>
                    <li>Collision Handling: Multiple keys hash to same bucket</li>
                    <li>Dynamic Sizing: Lists grow/shrink as needed</li>
                    <li>Load Factor Management: Maintain performance characteristics</li>
                    <li>Memory Efficiency: Allocate only required space</li>
                  </ul>
                  
                  <h6>Graph Representation (Adjacency Lists)</h6>
                  <p><strong>Vertex-Edge Mapping:</strong> Each vertex maintains list of adjacent vertices</p>
                  <ul>
                    <li>Space Efficiency: O(V + E) space complexity</li>
                    <li>Dynamic Graphs: Easy addition/removal of edges</li>
                    <li>Traversal Algorithms: BFS, DFS implementation support</li>
                    <li>Weighted Graphs: Store edge weights in list nodes</li>
                  </ul>
                  
                  <h6>Polynomial Arithmetic</h6>
                  <ul>
                    <li><strong>Coefficient Storage:</strong> Each node stores coefficient and exponent</li>
                    <li><strong>Sparse Representation:</strong> Store only non-zero terms</li>
                    <li><strong>Arithmetic Operations:</strong> Addition, multiplication, differentiation</li>
                    <li><strong>Sorted Order:</strong> Maintain terms in descending order of exponents</li>
                  </ul>
                </div>
              </div>

              <h4>Software Application Domains</h4>
              <div className="example-box">
                <h5>User-Facing Application Implementations</h5>
                <div className="operation-details">
                  <h6>Text Editor Functionality</h6>
                  <ul>
                    <li><strong>Undo/Redo Operations:</strong> Command pattern with linked list history</li>
                    <li><strong>Text Buffer Management:</strong> Efficient insertion/deletion in documents</li>
                    <li><strong>Cursor Navigation:</strong> Position tracking and movement</li>
                    <li><strong>Multi-level Undo:</strong> Hierarchical operation history</li>
                  </ul>
                  
                  <h6>Web Browser Implementation</h6>
                  <ul>
                    <li><strong>History Management:</strong> Forward/backward navigation</li>
                    <li><strong>Tab Management:</strong> Dynamic tab creation and removal</li>
                    <li><strong>Bookmark Organization:</strong> Hierarchical bookmark structures</li>
                    <li><strong>Cache Management:</strong> LRU cache implementation</li>
                  </ul>
                  
                  <h6>Media Player Systems</h6>
                  <ul>
                    <li><strong>Playlist Management:</strong> Song queues and playback order</li>
                    <li><strong>Shuffle Algorithms:</strong> Random playback implementation</li>
                    <li><strong>Repeat Modes:</strong> Circular list for continuous playback</li>
                    <li><strong>Queue Operations:</strong> Add, remove, reorder tracks</li>
                  </ul>
                </div>
              </div>

              <h4>Database and Information Systems</h4>
              <div className="definition-box">
                <h6>Database Implementation Components</h6>
                <ul>
                  <li><strong>Index Structures:</strong> B-tree node linking and traversal</li>
                  <li><strong>Join Operations:</strong> Temporary result set management</li>
                  <li><strong>Transaction Logs:</strong> Sequential operation recording</li>
                  <li><strong>Buffer Pool Management:</strong> Page replacement strategies</li>
                  <li><strong>Query Optimization:</strong> Plan enumeration and selection</li>
                  <li><strong>Concurrency Control:</strong> Lock chains and wait-for graphs</li>
                </ul>
              </div>

              <h4>Network and Distributed Systems</h4>
              <div className="example-box">
                <h5>Network Protocol Implementation</h5>
                <ul>
                  <li><strong>Packet Queuing:</strong> Network buffer management</li>
                  <li><strong>Routing Tables:</strong> Dynamic route maintenance</li>
                  <li><strong>Connection Pools:</strong> Database and network connection management</li>
                  <li><strong>Load Balancing:</strong> Server selection algorithms</li>
                  <li><strong>Message Queues:</strong> Asynchronous communication systems</li>
                  <li><strong>Protocol Stacks:</strong> Layered network protocol implementation</li>
                </ul>
              </div>

              <h4>Artificial Intelligence and Machine Learning</h4>
              <div className="example-box">
                <h5>AI Algorithm Support Structures</h5>
                <ul>
                  <li><strong>Search Algorithms:</strong> Open and closed lists in A* search</li>
                  <li><strong>Game Trees:</strong> Move generation and game state management</li>
                  <li><strong>Neural Networks:</strong> Dynamic network topology representation</li>
                  <li><strong>Genetic Algorithms:</strong> Population management and selection</li>
                  <li><strong>Expert Systems:</strong> Rule chaining and inference engines</li>
                  <li><strong>Natural Language Processing:</strong> Parse trees and grammar rules</li>
                </ul>
              </div>

              <h4>Performance-Critical Applications</h4>
              <ul>
                <li><strong>Real-time Systems:</strong> Task scheduling and priority queues</li>
                <li><strong>Game Engines:</strong> Entity management and scene graphs</li>
                <li><strong>Graphics Rendering:</strong> Display lists and rendering pipelines</li>
                <li><strong>Audio Processing:</strong> Sample buffers and effect chains</li>
                <li><strong>Embedded Systems:</strong> Resource-constrained data management</li>
                <li><strong>High-Frequency Trading:</strong> Order book management</li>
                <li><strong>Scientific Computing:</strong> Sparse matrix representations</li>
                <li><strong>Simulation Systems:</strong> Event queues and discrete event simulation</li>
              </ul>

              <div className="compiler-section">
                <h5>🎯 Practice Problem: Linked List Applications</h5>
                <p>Implement practical applications like polynomial addition and LRU cache using linked lists.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Linked List Applications"
                ></iframe>
              </div>
            </section>

            <Quiz title="Module 2.4 Quiz: Linked List Applications" questions={module4Quiz} subject="DS" unitId={2} moduleId={4} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Doubly & Circular Lists</button>
              <button onClick={() => setCurrentModule(5)} className="next-module-btn">Practical Experiments →</button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="module-content">
            <div className="lesson-header">
              <div className="lesson-number-badge">2.5</div>
              <div className="lesson-title-main">
                <h1>Practical Experiments</h1>
              </div>
            </div>
            
            <section className="content-section">
              <h3>Advanced Linked List Programming</h3>
              <p>Apply your knowledge of linked lists to solve complex problems and implement advanced algorithms using different types of linked list structures.</p>
              
              <div className="theory-box">
                <h5>Experiment Objectives</h5>
                <ul>
                  <li><strong>Stack using Linked List:</strong> Dynamic stack implementation</li>
                  <li><strong>Priority Queue:</strong> Priority-based insertion and deletion</li>
                  <li><strong>Reverse Display:</strong> Different approaches to reverse traversal</li>
                  <li><strong>Duplicate Removal:</strong> Efficient algorithms for data cleaning</li>
                </ul>
              </div>
              
              <h4>Experiment 1: Stack using Linked List</h4>
              <div className="definition-box">
                <h6>Implementation Requirements</h6>
                <ul>
                  <li>Create node structure with data and next pointer</li>
                  <li>Implement push operation (add to head)</li>
                  <li>Implement pop operation (remove from head)</li>
                  <li>Include peek/top and isEmpty operations</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Experiment 1: Stack Implementation using Linked List</h5>
                <p>Write a program to implement a stack using a linked list with push, pop, peek, and isEmpty operations.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Stack using Linked List"
                ></iframe>
              </div>

              <h4>Experiment 2: Priority Queue using Linked List</h4>
              <div className="example-box">
                <h5>Priority Queue Implementation</h5>
                <ul>
                  <li>Create node structure with data and priority</li>
                  <li>Insert elements based on priority (sorted insertion)</li>
                  <li>Remove elements with highest priority</li>
                  <li>Maintain sorted order during operations</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Experiment 2: Priority Queue using Linked List</h5>
                <p>Write a program to implement a priority queue using a linked list with priority-based insertion.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Priority Queue using Linked List"
                ></iframe>
              </div>

              <h4>Experiment 3: Display Linked List in Reverse</h4>
              <div className="example-box">
                <h5>Reverse Display Methods</h5>
                <ul>
                  <li><strong>Recursive approach:</strong> Use function call stack</li>
                  <li><strong>Iterative with stack:</strong> Use auxiliary stack</li>
                  <li><strong>Reverse and print:</strong> Modify original list</li>
                  <li><strong>Compare complexities:</strong> Time vs space trade-offs</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Experiment 3: Display Singly Linked List in Reverse Order</h5>
                <p>Write a program to display a singly linked list in reverse order using different approaches.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Reverse Display Linked List"
                ></iframe>
              </div>

              <h4>Experiment 4: Remove Duplicates</h4>
              <div className="example-box">
                <h5>Duplicate Removal Algorithms</h5>
                <ul>
                  <li><strong>Brute force:</strong> Nested loops approach - O(n²)</li>
                  <li><strong>Hash table:</strong> Efficient removal - O(n)</li>
                  <li><strong>Sorting approach:</strong> Sort then remove - O(n log n)</li>
                  <li><strong>Preserve order:</strong> Maintain original sequence</li>
                </ul>
              </div>

              <div className="compiler-section">
                <h5>🎯 Experiment 4: Remove Duplicates from Singly Linked List</h5>
                <p>Write a program to remove duplicates in a singly linked list using efficient algorithms.</p>
                <iframe
                  frameBorder="0"
                  height="450px"
                  src="https://onecompiler.com/embed/"
                  width="100%"
                  title="Remove Duplicates from Linked List"
                ></iframe>
              </div>
            </section>

            <Quiz title="Module 2.5 Quiz: Practical Experiments" questions={module5Quiz} subject="DS" unitId={2} moduleId={5} />

            <div className="navigation-buttons">
              <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Applications</button>
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

export default Unit2;