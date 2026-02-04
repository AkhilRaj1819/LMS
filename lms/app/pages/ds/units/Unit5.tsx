'use client';
import React, { useState } from 'react';
import CodeCompiler from '../components/CodeCompiler';
import Quiz from '../components/Quiz';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const dsQuizQuestions = [
  {
    question: "What is the time complexity of binary search in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity."
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Selection Sort", "Insertion Sort", "Quick Sort"],
    correctAnswer: 3,
    explanation: "Quick Sort has O(n log n) average-case time complexity, making it one of the fastest sorting algorithms."
  },
  {
    question: "Which sorting algorithm is stable?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
    correctAnswer: 2,
    explanation: "Merge Sort is stable because it preserves the relative order of equal elements during the merge process."
  },
  {
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Merge Sort requires O(n) additional space for the temporary arrays used during the merge process."
  },
  {
    question: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "Stack follows Last In First Out (LIFO) principle where the last element added is the first to be removed."
  },
  {
    question: "What is the time complexity of inserting an element at the beginning of an array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Inserting at the beginning requires shifting all existing elements, resulting in O(n) time complexity."
  },
  {
    question: "Which operation is NOT typically performed on a stack?",
    options: ["Push", "Pop", "Peek", "Dequeue"],
    correctAnswer: 3,
    explanation: "Dequeue is a queue operation. Stack operations are push, pop, and peek/top."
  },
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
    correctAnswer: 2,
    explanation: "Quick Sort's worst case occurs when the pivot is always the smallest or largest element, resulting in O(n²) complexity."
  },
  {
    question: "Which data structure is best for implementing recursion?",
    options: ["Array", "Queue", "Stack", "Tree"],
    correctAnswer: 2,
    explanation: "Stack is used to implement recursion as it maintains function call information in LIFO order."
  },
  {
    question: "What is the primary advantage of using a circular queue over a simple queue?",
    options: ["Faster operations", "Better memory utilization", "Simpler implementation", "Lower time complexity"],
    correctAnswer: 1,
    explanation: "Circular queue efficiently reuses memory space, avoiding the memory wastage that occurs in simple queues."
  }
];

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

const Unit5: React.FC<Unit5Props> = ({ currentModule, setCurrentModule, onBack }) => {
  const renderModule = () => {
    switch (currentModule) {
    case 1:
      return (
        <div className="module-content">
          <div className="lesson-header">
            <div className="lesson-number-badge">5.1</div>
            <div className="lesson-title-main">
              <h1>Searching Techniques: Linear and Binary Search</h1>
            </div>
          </div>
          
          <section className="content-section">
            <h3>Fundamental Searching Algorithms and Complexity Analysis</h3>
            <p>Searching algorithms form the foundation of data retrieval operations, enabling efficient location of specific elements within data structures. Understanding their complexity characteristics is crucial for optimal algorithm selection.</p>
            
            <h4>Linear Search: Sequential Access Pattern</h4>
            <p>Linear search examines each element sequentially until the target is found or the end is reached:</p>
            <ul>
              <li><strong>Algorithm Strategy:</strong> Sequential examination from start to end</li>
              <li><strong>Data Requirements:</strong> Works on both sorted and unsorted arrays</li>
              <li><strong>Time Complexity:</strong> O(n) worst case, O(1) best case</li>
              <li><strong>Space Complexity:</strong> O(1) constant space requirement</li>
              <li><strong>Use Cases:</strong> Small datasets, unsorted data, simple implementation</li>
            </ul>
            
            <div className="media-gallery">
              <div className="movie-card">
                <img src="/images/linear-search.jpg" alt="Linear Search" className="movie-poster" />
                <h6>Linear Search Process</h6>
                <p>Sequential element examination</p>
              </div>
              <div className="movie-card">
                <img src="/images/binary-search.jpg" alt="Binary Search" className="movie-poster" />
                <h6>Binary Search Tree</h6>
                <p>Divide and conquer approach</p>
              </div>
              <div className="movie-card">
                <img src="/images/search-complexity.jpg" alt="Search Complexity" className="movie-poster" />
                <h6>Complexity Analysis</h6>
                <p>Performance comparison charts</p>
              </div>
            </div>

            <h6>Binary Search: Divide and Conquer Strategy</h6>
            <ul>
              <li><strong>Prerequisite:</strong> Array must be sorted in ascending order</li>
              <li><strong>Algorithm Principle:</strong> Repeatedly divide search interval in half</li>
              <li><strong>Comparison Strategy:</strong> Compare target with middle element</li>
              <li><strong>Search Space Reduction:</strong> Eliminate half of remaining elements each iteration</li>
              <li><strong>Termination Conditions:</strong> Element found or search space exhausted</li>
            </ul>
            
            <div className="example-box">
              <h5>Binary Search Implementation Analysis</h5>
              <div className="code-example">
                <h6>Iterative Binary Search Algorithm</h6>
                <pre>{`int binarySearch(int arr[], int n, int target) {
    int left = 0, right = n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target)
            return mid;
        
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    
    return -1; // Element not found
}`}</pre>
                
                <h6>Complexity Analysis</h6>
                <ul>
                  <li><strong>Time Complexity:</strong> O(log n) - logarithmic search time</li>
                  <li><strong>Space Complexity:</strong> O(1) - constant space for iterative version</li>
                  <li><strong>Recursive Version:</strong> O(log n) space due to call stack</li>
                  <li><strong>Performance Advantage:</strong> Exponentially faster than linear search for large datasets</li>
                </ul>
              </div>
            </div>

            <div style={{margin: '24px 0'}}>
              <iframe 
                src="https://www.youtube.com/embed/P3YID7liBug" 
                title="Binary Search Algorithm Explained"
                frameBorder="0" 
                allowFullScreen
                style={{width: '50%', height: '300px'}}>
              </iframe>
              <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Complete explanation with visual examples and implementation</p>
            </div>

            <div className="compiler-section">
              <h5>🎯 Practice Problem: Binary Search Implementation</h5>
              <p>Implement binary search with first/last occurrence finding and occurrence counting functionality.</p>
              <iframe
                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/"
                width="100%"
                title="Binary Search Implementation"
              ></iframe>
            </div>
          </section>

          <div className="navigation-buttons">
            <button onClick={() => setCurrentModule(2)} className="next-module-btn">Basic Sorting Algorithms →</button>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="module-content">
          <div className="lesson-header">
            <div className="lesson-number-badge">5.2</div>
            <div className="lesson-title-main">
              <h1>Basic Sorting Algorithms: Bubble, Insertion, Selection Sort</h1>
            </div>
          </div>
          
          <section className="content-section">
            <h3>Fundamental Sorting Techniques and Comparative Analysis</h3>
            <p>Basic sorting algorithms provide foundational understanding of comparison-based sorting principles, each demonstrating different approaches to element arrangement and optimization strategies.</p>
            
            <div className="theory-box">
              <h5>Bubble Sort: Adjacent Element Exchange</h5>
              <p>Bubble sort repeatedly compares adjacent elements and swaps them if they are in wrong order:</p>
              <ul>
                <li><strong>Algorithm Principle:</strong> Largest elements "bubble up" to correct positions</li>
                <li><strong>Comparison Pattern:</strong> Adjacent element pairs compared sequentially</li>
                <li><strong>Optimization:</strong> Early termination when no swaps occur in a pass</li>
                <li><strong>Stability:</strong> Stable sorting algorithm preserving relative order</li>
                <li><strong>Adaptivity:</strong> Can be optimized for nearly sorted arrays</li>
              </ul>
            </div>
            
            <div className="media-gallery">
              <div className="movie-card">
                <img src="/images/bubble-sort.jpg" alt="Bubble Sort" className="movie-poster" />
                <h6>Bubble Sort Animation</h6>
                <p>Element bubbling visualization</p>
              </div>
              <div className="movie-card">
                <img src="/images/insertion-sort.jpg" alt="Insertion Sort" className="movie-poster" />
                <h6>Insertion Sort Process</h6>
                <p>Card sorting analogy</p>
              </div>
              <div className="movie-card">
                <img src="/images/selection-sort.jpg" alt="Selection Sort" className="movie-poster" />
                <h6>Selection Sort Method</h6>
                <p>Minimum element selection</p>
              </div>
            </div>

            <div className="definition-box">
              <h6>Insertion Sort: Incremental Sorted Region Building</h6>
              <ul>
                <li><strong>Strategy:</strong> Build sorted array one element at a time</li>
                <li><strong>Insertion Process:</strong> Insert each element into correct position in sorted portion</li>
                <li><strong>Shifting Operation:</strong> Move larger elements right to make space</li>
                <li><strong>Best Case Performance:</strong> O(n) for already sorted arrays</li>
                <li><strong>Practical Efficiency:</strong> Excellent for small or nearly sorted datasets</li>
              </ul>
            </div>
            
            <div className="advantages-box">
              <h6>Selection Sort: Minimum Element Selection Strategy</h6>
              <ul>
                <li><strong>Algorithm Approach:</strong> Find minimum element and place at beginning</li>
                <li><strong>Consistent Performance:</strong> Always performs O(n²) comparisons</li>
                <li><strong>Memory Efficiency:</strong> Minimal number of swaps (O(n))</li>
                <li><strong>Instability:</strong> Not stable - may change relative order of equal elements</li>
                <li><strong>Simplicity:</strong> Easy to understand and implement</li>
              </ul>
            </div>

            <div className="example-box">
              <h5>Comparative Algorithm Analysis</h5>
              <div className="comparison-table">
                <h6>Performance Comparison Table</h6>
                <table>
                  <thead>
                    <tr>
                      <th>Algorithm</th>
                      <th>Best Case</th>
                      <th>Average Case</th>
                      <th>Worst Case</th>
                      <th>Space</th>
                      <th>Stable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Bubble Sort</td>
                      <td>O(n)</td>
                      <td>O(n²)</td>
                      <td>O(n²)</td>
                      <td>O(1)</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Insertion Sort</td>
                      <td>O(n)</td>
                      <td>O(n²)</td>
                      <td>O(n²)</td>
                      <td>O(1)</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Selection Sort</td>
                      <td>O(n²)</td>
                      <td>O(n²)</td>
                      <td>O(n²)</td>
                      <td>O(1)</td>
                      <td>No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="video-section">
              <h5>Video Resources</h5>
              <div className="video-grid">
                <div className="video-item">
                  <iframe 
                    src="https://www.youtube.com/embed/xli_FI7CuzA" 
                    title="Bubble Sort Algorithm Visualization"
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                  <p>Step-by-step sorting process with animation and code</p>
                </div>
                <div className="video-item">
                  <iframe 
                    src="https://www.youtube.com/embed/JU767SDMDvA" 
                    title="Insertion Sort Detailed Explanation"
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                  <p>Card sorting analogy and efficient implementation techniques</p>
                </div>
              </div>
            </div>

            <div className="compiler-section">
              <h5>🎯 Practice Problem: Basic Sorting Algorithms</h5>
              <p>Implement and compare bubble sort, insertion sort, and selection sort with performance analysis.</p>
              <iframe
                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/"
                width="100%"
                title="Basic Sorting Algorithms"
              ></iframe>
            </div>
          </section>

          <div className="navigation-buttons">
            <button onClick={() => setCurrentModule(1)} className="prev-module-btn">← Searching Techniques</button>
            <button onClick={() => setCurrentModule(3)} className="next-module-btn">Divide and Conquer Sorting →</button>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="module-content">
          <div className="lesson-header">
            <div className="lesson-number-badge">5.3</div>
            <div className="lesson-title-main">
              <h1>Divide and Conquer Sorting: Merge Sort and Quick Sort</h1>
            </div>
          </div>
          
          <section className="content-section">
            <h3>Advanced Sorting Algorithms with Optimal Complexity</h3>
            <p>Divide and conquer sorting algorithms achieve superior performance through recursive problem decomposition, representing the pinnacle of comparison-based sorting efficiency with O(n log n) average complexity.</p>
            
            <div className="theory-box">
              <h5>Merge Sort: Stable Divide and Conquer</h5>
              <p>Merge sort divides the array into halves, recursively sorts each half, then merges sorted subarrays:</p>
              <ul>
                <li><strong>Divide Phase:</strong> Recursively split array into smaller subarrays</li>
                <li><strong>Conquer Phase:</strong> Sort individual subarrays (base case: single elements)</li>
                <li><strong>Combine Phase:</strong> Merge sorted subarrays maintaining order</li>
                <li><strong>Stability Guarantee:</strong> Preserves relative order of equal elements</li>
                <li><strong>Predictable Performance:</strong> Consistent O(n log n) in all cases</li>
              </ul>
            </div>
            
            <div className="media-gallery">
              <div className="movie-card">
                <img src="/images/merge-sort.jpg" alt="Merge Sort" className="movie-poster" />
                <h6>Merge Sort Process</h6>
                <p>Divide and conquer visualization</p>
              </div>
              <div className="movie-card">
                <img src="/images/quick-sort.jpg" alt="Quick Sort" className="movie-poster" />
                <h6>Quick Sort Partitioning</h6>
                <p>Pivot-based partitioning strategy</p>
              </div>
              <div className="movie-card">
                <img src="/images/recursion-tree.jpg" alt="Recursion Tree" className="movie-poster" />
                <h6>Recursion Analysis</h6>
                <p>Complexity analysis trees</p>
              </div>
            </div>

            <div className="definition-box">
              <h6>Quick Sort: Efficient Partitioning Strategy</h6>
              <ul>
                <li><strong>Pivot Selection:</strong> Choose element to partition array around</li>
                <li><strong>Partitioning Process:</strong> Rearrange elements relative to pivot</li>
                <li><strong>Recursive Sorting:</strong> Sort subarrays on both sides of pivot</li>
                <li><strong>In-Place Operation:</strong> Minimal additional memory requirement</li>
                <li><strong>Average Performance:</strong> O(n log n) with good pivot selection</li>
              </ul>
            </div>
            
            <div className="advantages-box">
              <h6>Algorithm Comparison and Selection Criteria</h6>
              <ul>
                <li><strong>Merge Sort Advantages:</strong> Stable, predictable O(n log n), good for linked lists</li>
                <li><strong>Quick Sort Advantages:</strong> In-place, cache-friendly, fastest average case</li>
                <li><strong>Space Complexity:</strong> Merge sort O(n), Quick sort O(log n) average</li>
                <li><strong>Worst Case Scenarios:</strong> Merge sort consistent, Quick sort O(n²) with poor pivots</li>
                <li><strong>Practical Considerations:</strong> Quick sort preferred for arrays, merge sort for stability</li>
              </ul>
            </div>

            <div className="example-box">
              <h5>Merge Sort Implementation Analysis</h5>
              <div className="code-example">
                <h6>Recursive Merge Sort Algorithm</h6>
                <pre>{`void mergeSort(int arr[], int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        merge(arr, left, mid, right);
    }
}

void merge(int arr[], int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int leftArr[n1], rightArr[n2];
    
    // Copy data to temporary arrays
    for (int i = 0; i < n1; i++)
        leftArr[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        rightArr[j] = arr[mid + 1 + j];
    
    // Merge temporary arrays back
    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}`}</pre>
              </div>
            </div>

            <div className="video-section">
              <h5>Video Resources</h5>
              <div className="video-grid">
                <div className="video-item">
                  <iframe 
                    src="https://www.youtube.com/embed/4VqmGXwpLqc" 
                    title="Merge Sort Divide and Conquer"
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                  <p>Recursive approach and merging process explained</p>
                </div>
                <div className="video-item">
                  <iframe 
                    src="https://www.youtube.com/embed/Hoixgm4-P4M" 
                    title="Quick Sort Partitioning Strategy"
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                  <p>Pivot selection and partitioning techniques explained</p>
                </div>
              </div>
            </div>

            <div className="compiler-section">
              <h5>🎯 Practice Problem: Merge Sort Implementation</h5>
              <p>Implement merge sort with detailed step-by-step visualization and complexity analysis.</p>
              <iframe
                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/"
                width="100%"
                title="Merge Sort Implementation"
              ></iframe>
            </div>
          </section>

          <div className="navigation-buttons">
            <button onClick={() => setCurrentModule(2)} className="prev-module-btn">← Basic Sorting Algorithms</button>
            <button onClick={() => setCurrentModule(4)} className="next-module-btn">Quick Sort Implementation →</button>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="module-content">
          <div className="lesson-header">
            <div className="lesson-number-badge">5.4</div>
            <div className="lesson-title-main">
              <h1>Quick Sort Implementation and Optimization</h1>
            </div>
          </div>
          
          <section className="content-section">
            <h3>Advanced Quick Sort Techniques and Performance Optimization</h3>
            <p>Quick sort represents one of the most efficient sorting algorithms in practice, utilizing sophisticated partitioning strategies and optimization techniques to achieve superior average-case performance.</p>
            
            <div className="theory-box">
              <h5>Quick Sort Algorithm Design and Analysis</h5>
              <p>Quick sort employs a divide-and-conquer strategy with intelligent pivot selection:</p>
              <ul>
                <li><strong>Partitioning Strategy:</strong> Rearrange elements around chosen pivot</li>
                <li><strong>Recursive Decomposition:</strong> Sort subarrays independently</li>
                <li><strong>In-Place Operation:</strong> Minimal additional memory usage</li>
                <li><strong>Cache Efficiency:</strong> Excellent locality of reference</li>
                <li><strong>Practical Performance:</strong> Fastest sorting algorithm for most real-world data</li>
              </ul>
            </div>
            
            <div className="media-gallery">
              <div className="movie-card">
                <img src="/images/quicksort-partition.jpg" alt="QuickSort Partition" className="movie-poster" />
                <h6>Partitioning Process</h6>
                <p>Pivot-based element arrangement</p>
              </div>
              <div className="movie-card">
                <img src="/images/pivot-selection.jpg" alt="Pivot Selection" className="movie-poster" />
                <h6>Pivot Selection Strategies</h6>
                <p>Optimization techniques</p>
              </div>
              <div className="movie-card">
                <img src="/images/quicksort-analysis.jpg" alt="QuickSort Analysis" className="movie-poster" />
                <h6>Performance Analysis</h6>
                <p>Best, average, worst case scenarios</p>
              </div>
            </div>

            <div className="definition-box">
              <h6>Partitioning Algorithm: Lomuto and Hoare Schemes</h6>
              <ul>
                <li><strong>Lomuto Partition:</strong> Simple implementation with single pointer traversal</li>
                <li><strong>Hoare Partition:</strong> More efficient with bidirectional pointer movement</li>
                <li><strong>Pivot Placement:</strong> Correct final position after partitioning</li>
                <li><strong>Invariant Maintenance:</strong> Elements less than pivot on left, greater on right</li>
                <li><strong>Termination Guarantee:</strong> Progress made in each recursive call</li>
              </ul>
            </div>
            
            <div className="advantages-box">
              <h6>Quick Sort Optimization Techniques</h6>
              <ul>
                <li><strong>Randomized Pivot:</strong> Random selection to avoid worst-case scenarios</li>
                <li><strong>Median-of-Three:</strong> Choose median of first, middle, last elements</li>
                <li><strong>Hybrid Approach:</strong> Switch to insertion sort for small subarrays</li>
                <li><strong>Three-Way Partitioning:</strong> Handle duplicate elements efficiently</li>
                <li><strong>Tail Recursion:</strong> Optimize recursive calls to reduce stack usage</li>
              </ul>
            </div>
            
            <div style={{margin: '24px 0'}}>
              <iframe 
                src="https://www.youtube.com/embed/SLauY6PpjW4" 
                title="Quick Sort Implementation and Optimization"
                frameBorder="0" 
                allowFullScreen
                style={{width: '50%', height: '300px'}}>
              </iframe>
              <p style={{marginTop: '12px', fontSize: '14px', color: '#666'}}>Advanced Quick Sort techniques and performance optimization</p>
            </div>

            <div className="example-box">
              <h5>Quick Sort Implementation with Optimizations</h5>
              <div className="code-example">
                <h6>Optimized Quick Sort Algorithm</h6>
                <pre>{`void quickSort(int arr[], int low, int high) {
    while (low < high) {
        // Optimization: Use insertion sort for small arrays
        if (high - low < 10) {
            insertionSort(arr, low, high);
            break;
        }
        
        // Randomized pivot selection
        int pivotIndex = randomizedPartition(arr, low, high);
        
        // Tail recursion optimization
        if (pivotIndex - low < high - pivotIndex) {
            quickSort(arr, low, pivotIndex - 1);
            low = pivotIndex + 1;
        } else {
            quickSort(arr, pivotIndex + 1, high);
            high = pivotIndex - 1;
        }
    }
}

int randomizedPartition(int arr[], int low, int high) {
    // Random pivot selection
    int randomIndex = low + rand() % (high - low + 1);
    swap(arr[randomIndex], arr[high]);
    
    return partition(arr, low, high);
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}`}</pre>
                
                <h6>Complexity Analysis</h6>
                <ul>
                  <li><strong>Best Case:</strong> O(n log n) - balanced partitions</li>
                  <li><strong>Average Case:</strong> O(n log n) - random pivot selection</li>
                  <li><strong>Worst Case:</strong> O(n²) - already sorted array with poor pivot</li>
                  <li><strong>Space Complexity:</strong> O(log n) average, O(n) worst case</li>
                </ul>
              </div>
            </div>

            <div className="compiler-section">
              <h5>🎯 Practice Problem: Quick Sort Implementation</h5>
              <p>Implement quick sort with randomized pivot selection and performance optimization techniques.</p>
              <iframe
                frameBorder="0"
                height="450px"
                src="https://onecompiler.com/embed/"
                width="100%"
                title="Quick Sort Implementation"
              ></iframe>
            </div>
          </section>

          <div className="navigation-buttons">
            <button onClick={() => setCurrentModule(3)} className="prev-module-btn">← Divide and Conquer Sorting</button>
            <button onClick={() => setCurrentModule(5)} className="next-module-btn">Assessment and Resources →</button>
          </div>
        </div>
      );

    case 5:
      return (
        <div className="module-content">
          <div className="lesson-header">
            <div className="lesson-number-badge">5.5</div>
            <div className="lesson-title-main">
              <h1>Assessment, Resources, and Advanced Topics</h1>
            </div>
          </div>
          
          <section className="content-section">
            <h3>Comprehensive Assessment and Learning Resources</h3>
            <p>This module provides comprehensive assessment tools, reference materials, and advanced topics to solidify understanding of searching and sorting algorithms with practical applications.</p>
            
            <div className="theory-box">
              <h5>Algorithm Selection Guidelines</h5>
              <p>Choosing the appropriate algorithm depends on various factors:</p>
              <ul>
                <li><strong>Data Size:</strong> Small datasets favor simple algorithms, large datasets need efficient ones</li>
                <li><strong>Data Characteristics:</strong> Nearly sorted data benefits from adaptive algorithms</li>
                <li><strong>Memory Constraints:</strong> In-place algorithms for limited memory environments</li>
                <li><strong>Stability Requirements:</strong> Stable algorithms preserve relative order of equal elements</li>
                <li><strong>Implementation Complexity:</strong> Balance between performance and code simplicity</li>
              </ul>
            </div>
            
            <div className="media-gallery">
              <div className="movie-card">
                <img src="/images/algorithm-comparison.jpg" alt="Algorithm Comparison" className="movie-poster" />
                <h6>Performance Comparison</h6>
                <p>Comprehensive algorithm analysis</p>
              </div>
              <div className="movie-card">
                <img src="/images/textbooks.jpg" alt="Textbooks" className="movie-poster" />
                <h6>Reference Materials</h6>
                <p>Essential textbooks and resources</p>
              </div>
              <div className="movie-card">
                <img src="/images/web-resources.jpg" alt="Web Resources" className="movie-poster" />
                <h6>Online Learning</h6>
                <p>Interactive tutorials and practice</p>
              </div>
            </div>

            <div className="definition-box">
              <h6>Text Books and References</h6>
              <ul>
                <li><strong>Schaum's Outline Series:</strong> "Data Structure", TMH, Special Indian Edition, 17th Reprint</li>
                <li><strong>Thomas H. Cormen et al.:</strong> "Introduction to Algorithms", 3rd Edition, MIT Press</li>
                <li><strong>R.S. Salaria, Khanna:</strong> "Data Structure & Algorithms", Book Publishing Co. (P) Ltd.</li>
                <li><strong>E. Horowitz and S. Sahani:</strong> "Fundamentals of Data Structures in C", 2nd Edition</li>
              </ul>
            </div>
            
            <div className="advantages-box">
              <h6>Web Resources for Continued Learning</h6>
              <ul>
                <li><strong>DS Tutorial - Javatpoint:</strong> Comprehensive tutorials with examples</li>
                <li><strong>Solve Data Structures | HackerRank:</strong> Practice platform with challenges</li>
                <li><strong>NPTEL:</strong> Free online courses from IIT professors</li>
                <li><strong>GeeksforGeeks:</strong> Detailed algorithm explanations and implementations</li>
                <li><strong>Coursera/edX:</strong> University-level courses on algorithms and data structures</li>
              </ul>
            </div>

            <Quiz 
              title="Data Structures Assessment Quiz"
              questions={dsQuizQuestions}
            />

            <div className="video-section">
              <h5>Supplemental Video Resources</h5>
              <div className="video-grid">
                <div className="video-item">
                  <iframe 
                    src="https://www.youtube.com/embed/kPRA0W1kECg" 
                    title="Sorting Algorithms Comparison"
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                  <p>Visual comparison of all sorting algorithms</p>
                </div>
                <div className="video-item">
                  <iframe 
                    src="https://www.youtube.com/embed/ZZuD6iUe3Pc" 
                    title="Algorithm Analysis Techniques"
                    frameBorder="0" 
                    allowFullScreen>
                  </iframe>
                  <p>Time and space complexity analysis methods</p>
                </div>
              </div>
            </div>

            <div className="summary-box">
              <h5>Unit 5 Summary: Key Takeaways</h5>
              <ul>
                <li><strong>Searching Algorithms:</strong> Linear search O(n), Binary search O(log n) for sorted data</li>
                <li><strong>Basic Sorting:</strong> Bubble, Insertion, Selection sort all O(n²) but differ in practical performance</li>
                <li><strong>Advanced Sorting:</strong> Merge sort O(n log n) stable, Quick sort O(n log n) average fastest</li>
                <li><strong>Algorithm Selection:</strong> Consider data size, memory, stability, and implementation complexity</li>
                <li><strong>Optimization Techniques:</strong> Hybrid approaches, randomization, and adaptive algorithms</li>
              </ul>
            </div>
          </section>

          <div className="navigation-buttons">
            <button onClick={() => setCurrentModule(4)} className="prev-module-btn">← Quick Sort Implementation</button>
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

export default Unit5;