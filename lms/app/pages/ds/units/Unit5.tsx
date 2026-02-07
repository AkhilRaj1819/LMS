'use client';
import React, { useState } from 'react';
import CodeCompiler from '../components/CodeCompiler';
import Quiz from '../components/Quiz';

interface Unit5Props {
  currentModule: number;
  setCurrentModule: (module: number) => void;
  onBack?: () => void;
}

// Quiz for Module 1: Searching Techniques
const searchingQuizQuestions = [
  {
    question: "What is the time complexity of binary search in the worst case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Binary search divides the search space in half with each comparison, resulting in O(log n) time complexity."
  },
  {
    question: "What is the prerequisite for binary search to work?",
    options: ["Array must be sorted", "Array must be unsorted", "Array must have unique elements", "Array must be of even size"],
    correctAnswer: 0,
    explanation: "Binary search requires the array to be sorted in ascending order to work correctly."
  },
  {
    question: "What is the time complexity of linear search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Linear search examines each element sequentially, resulting in O(n) time complexity."
  },
  {
    question: "Which search algorithm is more efficient for large sorted datasets?",
    options: ["Linear Search", "Binary Search", "Both are equal", "Depends on data"],
    correctAnswer: 1,
    explanation: "Binary search is significantly more efficient with O(log n) complexity compared to linear search's O(n)."
  },
  {
    question: "What is the space complexity of iterative binary search?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 0,
    explanation: "Iterative binary search uses constant space O(1) as it only needs a few variables."
  }
];

// Quiz for Module 2: Basic Sorting Algorithms
const basicSortingQuizQuestions = [
  {
    question: "Which sorting algorithm is stable?",
    options: ["Selection Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
    correctAnswer: 2,
    explanation: "Bubble Sort is stable as it preserves the relative order of equal elements."
  },
  {
    question: "What is the best case time complexity of insertion sort?",
    options: ["O(1)", "O(n)", "O(n log n)", "O(n²)"],
    correctAnswer: 1,
    explanation: "Insertion sort has O(n) best case complexity when the array is already sorted."
  },
  {
    question: "Which sorting algorithm performs the minimum number of swaps?",
    options: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
    correctAnswer: 2,
    explanation: "Selection sort performs only O(n) swaps, making it efficient in terms of write operations."
  },
  {
    question: "What is the average case time complexity of bubble sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
    correctAnswer: 2,
    explanation: "Bubble sort has O(n²) average case complexity due to nested iterations."
  },
  {
    question: "Which basic sorting algorithm is most efficient for nearly sorted data?",
    options: ["Bubble Sort", "Selection Sort", "Insertion Sort", "All are equal"],
    correctAnswer: 2,
    explanation: "Insertion sort performs best on nearly sorted data with O(n) complexity in such cases."
  }
];

// Quiz for Module 3: Divide and Conquer Sorting
const divideConquerQuizQuestions = [
  {
    question: "What is the space complexity of merge sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctAnswer: 2,
    explanation: "Merge Sort requires O(n) additional space for the temporary arrays used during the merge process."
  },
  {
    question: "Which sorting algorithm is guaranteed to have O(n log n) time complexity in all cases?",
    options: ["Quick Sort", "Merge Sort", "Heap Sort", "Both B and C"],
    correctAnswer: 3,
    explanation: "Both Merge Sort and Heap Sort guarantee O(n log n) time complexity in all cases."
  },
  {
    question: "Is merge sort a stable sorting algorithm?",
    options: ["Yes", "No", "Depends on implementation", "Only for small arrays"],
    correctAnswer: 0,
    explanation: "Merge sort is stable as it preserves the relative order of equal elements during merging."
  },
  {
    question: "What is the main disadvantage of merge sort?",
    options: ["Time complexity", "Space complexity", "Not stable", "Difficult to implement"],
    correctAnswer: 1,
    explanation: "Merge sort's main disadvantage is its O(n) space complexity requirement."
  },
  {
    question: "In merge sort, what happens in the 'divide' phase?",
    options: ["Elements are sorted", "Array is split into halves", "Elements are merged", "Pivot is selected"],
    correctAnswer: 1,
    explanation: "In the divide phase, the array is recursively split into two halves until single elements remain."
  }
];

// Quiz for Module 4: Quick Sort Implementation
const quickSortQuizQuestions = [
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(2^n)"],
    correctAnswer: 2,
    explanation: "Quick Sort's worst case occurs when the pivot is always the smallest or largest element, resulting in O(n²) complexity."
  },
  {
    question: "Which pivot selection strategy helps avoid worst-case scenarios?",
    options: ["Always first element", "Always last element", "Random selection", "Always middle element"],
    correctAnswer: 2,
    explanation: "Random pivot selection helps avoid worst-case scenarios by preventing consistently poor partitions."
  },
  {
    question: "What is the average case time complexity of Quick Sort?",
    options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
    correctAnswer: 1,
    explanation: "Quick Sort has O(n log n) average-case time complexity with good pivot selection."
  },
  {
    question: "Is Quick Sort a stable sorting algorithm?",
    options: ["Yes", "No", "Depends on implementation", "Only with random pivot"],
    correctAnswer: 1,
    explanation: "Quick Sort is not stable as it may change the relative order of equal elements during partitioning."
  },
  {
    question: "What is the space complexity of Quick Sort in the average case?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 1,
    explanation: "Quick Sort has O(log n) average space complexity due to the recursive call stack."
  }
];

// Main comprehensive quiz
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
                <img src="data:image/png;base64,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" alt="Linear Search" className="movie-poster" />
                <h6>Linear Search Process</h6>
                <p>Sequential element examination</p>
              </div>
              <div className="movie-card">
                <img src="data:image/jpeg;base64,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" alt="Binary Search" className="movie-poster" />
                <h6>Binary Search Tree</h6>
                <p>Divide and conquer approach</p>
              </div>
              <div className="movie-card">
                <img src="data:image/jpeg;base64,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" alt="Search Complexity" className="movie-poster" />
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

            <Quiz title="Searching Techniques Quiz" questions={searchingQuizQuestions} subject="DS" unitId={5} moduleId={1} />
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
                <img src="data:image/jpeg;base64,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" alt="Bubble Sort" className="movie-poster" />
                <h6>Bubble Sort Animation</h6>
                <p>Element bubbling visualization</p>
              </div>
              <div className="movie-card">
                <img src="data:image/png;base64,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" alt="Insertion Sort" className="movie-poster" />
                <h6>Insertion Sort Process</h6>
                <p>Card sorting analogy</p>
              </div>
              <div className="movie-card">
                <img src="https://miro.medium.com/0*pK2-pSUoAnIR_Eg7.png" alt="Selection Sort" className="movie-poster" />
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

            <Quiz title="Basic Sorting Algorithms Quiz" questions={basicSortingQuizQuestions} subject="DS" unitId={5} moduleId={2} />
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
                <img src="data:image/png;base64,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" alt="Merge Sort" className="movie-poster" />
                <h6>Merge Sort Process</h6>
                <p>Divide and conquer visualization</p>
              </div>
              <div className="movie-card">
                <img src="data:image/jpeg;base64,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" alt="Quick Sort" className="movie-poster" />
                <h6>Quick Sort Partitioning</h6>
                <p>Pivot-based partitioning strategy</p>
              </div>
              <div className="movie-card">
                <img src="https://www.acte.in/wp-content/uploads/2025/09/Types-of-Recursion-Photoroom-1.png" alt="Recursion Tree" className="movie-poster" />
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

            <Quiz title="Divide and Conquer Sorting Quiz" questions={divideConquerQuizQuestions} subject="DS" unitId={5} moduleId={3} />
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
                <img src="data:image/png;base64,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" alt="QuickSort Partition" className="movie-poster" />
                <h6>Partitioning Process</h6>
                <p>Pivot-based element arrangement</p>
              </div>
              <div className="movie-card">
                <img src="data:image/png;base64,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" alt="Pivot Selection" className="movie-poster" />
                <h6>Pivot Selection Strategies</h6>
                <p>Optimization techniques</p>
              </div>
              <div className="movie-card">
                <img src="data:image/jpeg;base64,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" alt="QuickSort Analysis" className="movie-poster" />
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

            <Quiz title="Quick Sort Implementation Quiz" questions={quickSortQuizQuestions} subject="DS" unitId={5} moduleId={4} />
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
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230526103842/1.webp" alt="Algorithm Comparison" className="movie-poster" />
                <h6>Performance Comparison</h6>
                <p>Comprehensive algorithm analysis</p>
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

            <Quiz title="Data Structures Assessment Quiz" questions={dsQuizQuestions} subject="DS" unitId={5} moduleId={5} />

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
