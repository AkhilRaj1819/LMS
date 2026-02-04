'use client';
import React from 'react';

interface Unit2Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit2: React.FC<Unit2Props> = ({ currentModule, setCurrentModule, onBack }) => {
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
                  <img src="/images/singly-linked-list.jpg" alt="Singly Linked List" className="movie-poster" />
                  <h6>Singly Linked List</h6>
                  <p>Basic structure with nodes and pointers</p>
                </div>
                <div className="movie-card">
                  <img src="/images/linked-list-operations.jpg" alt="Linked List Operations" className="movie-poster" />
                  <h6>List Operations</h6>
                  <p>Insertion, deletion, and traversal</p>
                </div>
                <div className="movie-card">
                  <img src="/images/memory-allocation.jpg" alt="Memory Allocation" className="movie-poster" />
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
                  <img src="/images/stack-linked-list.jpg" alt="Stack using Linked List" className="movie-poster" />
                  <h6>Stack Implementation</h6>
                  <p>LIFO operations with linked nodes</p>
                </div>
                <div className="movie-card">
                  <img src="/images/queue-linked-list.jpg" alt="Queue using Linked List" className="movie-poster" />
                  <h6>Queue Implementation</h6>
                  <p>FIFO operations with head/tail pointers</p>
                </div>
                <div className="movie-card">
                  <img src="/images/dynamic-memory.jpg" alt="Dynamic Memory Management" className="movie-poster" />
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
                  <img src="/images/doubly-linked-list.jpg" alt="Doubly Linked List" className="movie-poster" />
                  <h6>Doubly Linked List</h6>
                  <p>Bidirectional navigation structure</p>
                </div>
                <div className="movie-card">
                  <img src="/images/circular-linked-list.jpg" alt="Circular Linked List" className="movie-poster" />
                  <h6>Circular Linked List</h6>
                  <p>Continuous loop architecture</p>
                </div>
                <div className="movie-card">
                  <img src="/images/doubly-circular-list.jpg" alt="Doubly Circular List" className="movie-poster" />
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
                  <img src="/images/linked-list-applications.jpg" alt="Linked List Applications" className="movie-poster" />
                  <h6>System Applications</h6>
                  <p>OS, compilers, and system software</p>
                </div>
                <div className="movie-card">
                  <img src="/images/data-structure-apps.jpg" alt="Data Structure Applications" className="movie-poster" />
                  <h6>Algorithm Implementation</h6>
                  <p>Hash tables, graphs, and trees</p>
                </div>
                <div className="movie-card">
                  <img src="/images/real-world-linked-lists.jpg" alt="Real World Applications" className="movie-poster" />
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