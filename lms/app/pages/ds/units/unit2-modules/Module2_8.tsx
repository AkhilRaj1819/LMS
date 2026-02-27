'use client';
import Quiz from '../../components/Quiz';

const Module2_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.8</div>
        <div className="lesson-title-main">
          <h1>Introduction to Sorting &amp; Merge Sort</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          Okay, let's start today's session with a problem statement:
        </p>

        <p className="mb-6">
          Imagine you're building a massive online library with millions of books. You need to implement a feature that allows users to quickly find books by title, author, or publication date, even as the library grows exponentially. How do you ensure that search queries remain lightning-fast and relevant, regardless of the library's size?
        </p>

        <p className="mb-6">
          Sorting algorithms are fundamental to solving this problem, and they play a critical role in various aspects of computer science and data management.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why Sorting Algorithms are Important?</h2>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Organization:</strong> Sorting helps organize data in a meaningful way, making it easier to search and retrieve information. Think about how a library organizes books or how a phone book lists contacts.</li>
          <li><strong>Efficiency:</strong> Sorted data allows for faster searching using algorithms like binary search, which we'll cover later.</li>
          <li><strong>Foundation:</strong> Sorting is a fundamental operation in many computer science applications, including databases, search engines, and data analysis.</li>
          <li><strong>Real-world Applications:</strong> From online shopping (sorting products by price) to route planning (finding the shortest path), sorting algorithms are used everywhere.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Sorting Basics</h2>
        <p className="mb-4">
          Let's establish some common ground with some important terms.
        </p>

        <h3 className="text-xl font-semibold mb-4">Important Terms</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Increasing Order:</strong> Elements are arranged from smallest to largest (e.g., 1, 2, 3, 4, 5).</li>
          <li><strong>Decreasing Order:</strong> Elements are arranged from largest to smallest (e.g., 5, 4, 3, 2, 1).</li>
          <li><strong>Non-Increasing Order:</strong> Elements are arranged in descending order, but duplicates are allowed (e.g., 5, 4, 4, 2, 1).</li>
          <li><strong>Non-Decreasing Order:</strong> Elements are arranged in ascending order, but duplicates are allowed (e.g., 1, 2, 2, 4, 5).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Stable and Not Stable Sorting</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <strong>Stable Sorting:</strong> A sorting algorithm is stable if elements with the same value maintain their original order in the sorted output.
            <p className="mt-2">Imagine sorting a list of students by their marks, and you want to maintain the order of students with the same marks based on their admission date. Stable sorting algorithms preserve this original order.</p>
          </li>
          <li><strong>Not Stable Sorting:</strong> If the order of equal elements is not guaranteed to be preserved, the algorithm is not stable.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">In-place Sorting and Not-in-place Sorting</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>In-place Sorting:</strong> An algorithm is in-place if it requires a minimal (ideally constant) amount of extra memory to perform the sorting. It sorts the elements within the original array itself, without creating a separate copy.</li>
          <li><strong>Not-in-place Sorting:</strong> These algorithms require extra memory space proportional to the input size to perform the sorting.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Types of Sorting Techniques</h3>
        <p className="mb-4">
          There are many different ways to sort data, each with its own advantages and disadvantages. Some common sorting techniques include:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Bubble Sort:</strong> Simple but inefficient.</li>
          <li><strong>Insertion Sort:</strong> Efficient for small datasets or nearly sorted data.</li>
          <li><strong>Selection Sort:</strong> Simple and consistent performance, but generally inefficient.</li>
          <li><strong>Merge Sort:</strong> Efficient and stable, based on the divide-and-conquer paradigm (a strategy of breaking a problem down into smaller subproblems, solving each subproblem independently, and then combining the solutions to solve the original problem).</li>
          <li><strong>Quick Sort:</strong> Very efficient on average, but can have poor performance in the worst case.</li>
          <li><strong>Heap Sort:</strong> Efficient and guaranteed performance.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Basic Sorting Algorithms: Merge Sort</h2>
        <p className="mb-6">
          Now that we understand recursion from the previous lesson, we can unlock one of the most famous and efficient families of algorithms: divide-and-conquer sorting.
        </p>

        <p className="mb-4">
          Merge sort is a divide-and-conquer algorithm that sorts an array by:
        </p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li>Dividing the array into two halves.</li>
          <li>Recursively sorting each half.</li>
          <li>Merging the sorted halves into a single sorted array.</li>
        </ol>

        <p className="mb-4">
          Watch this video that explains merge sort in a simplified manner:
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4VqmGXwpLqc" title="Merge Sort Explained" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <p className="mb-4">
          Now, let's understand how merge sort works step by step.
        </p>

        <h3 className="text-xl font-semibold mb-4">How Merge Sort Works: A Step-by-Step Guide</h3>
        <p className="mb-4">
          Let's visualize this with an example. Suppose we want to sort the array [8, 3, 1, 7, 0, 10, 2].
        </p>

        <div className="mb-6 space-y-4">
          <div>
            <p className="font-semibold mb-2">Divide:</p>
            <p>Split the array into two halves: [8, 3, 1, 7] and [0, 10, 2].</p>
          </div>

          <div>
            <p className="font-semibold mb-2">Conquer (Recursively Sort):</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Split [8, 3, 1, 7] into [8, 3] and [1, 7].</li>
              <li>Split [8, 3] into [8] and [3].</li>
              <li>[8] and [3] are now single-element arrays, which are inherently sorted.</li>
              <li>Merge [8] and [3] to get [3, 8].</li>
              <li>Split [1, 7] into [1] and [7].</li>
              <li>Merge [1] and [7] to get [1, 7].</li>
              <li>Merge [3, 8] and [1, 7] to get [1, 3, 7, 8].</li>
              <li>Repeat the same process for [0, 10, 2] to get [0, 2, 10].</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-2">Merge:</p>
            <p>Finally, merge [1, 3, 7, 8] and [0, 2, 10] to get the sorted array [0, 1, 2, 3, 7, 8, 10].</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4">Code Example</h3>
        <p className="mb-4">
          Here's a pseudocode snippet demonstrating the merge sort
        </p>

        <p className="mb-4 font-semibold">Merge Sort Pseudocode</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`function mergeSort(array)
  if array.length <= 1
    return array  // Already sorted

  mid = array.length / 2
  left = array[0...mid]
  right = array[mid...array.length]

  left = mergeSort(left)  // Recursively sort left half
  right = mergeSort(right) // Recursively sort right half

  return merge(left, right) // Merge the sorted halves

function merge(left, right)
  result = []
  i = 0 // Index for left array
  j = 0 // Index for right array

  while i < left.length AND j < right.length
    if left[i] <= right[j]
      result.append(left[i])
      i = i + 1
    else
      result.append(right[j])
      j = j + 1

  // Add any remaining elements from left and right arrays
  while i < left.length
    result.append(left[i])
    i = i + 1

  while j < right.length
    result.append(right[j])
    j = j + 1

  return result`}</code>
        </pre>

        <p className="mb-4 font-semibold">What this code does:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>The `merge_sort` function recursively divides the array into halves until it reaches single-element arrays.</li>
          <li>The `merge` function then merges these sorted halves back together in the correct order.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Time and Space Complexity Analysis</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <strong>Time Complexity:</strong> Merge Sort has a time complexity of O(n log n) in all cases (best, average, and worst). This makes it a very efficient sorting algorithm for large datasets.
            <p className="mt-2">The `O(n log n)` complexity arises from the fact that the array is divided into halves `(log n)` times, and each merge operation takes `O(n)` time.</p>
          </li>
          <li><strong>Space Complexity:</strong> Merge Sort has a space complexity of O(n) because it requires extra space to store the merged subarrays.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Analogy</h3>
        <p className="mb-6">
          Think of sorting a deck of cards. With Merge Sort, you split the deck in half, then split each half, and so on until you have piles of single cards (which are already sorted). Then, you merge the piles back together in order.
        </p>
        <section className="content-section">
          <h3>Practice Problems</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://leetcode.com/problems/sort-an-array/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Sort an Array</h4>
              <p className="text-xs text-gray-500">LeetCode • Medium</p>
            </a>
            <a href="https://leetcode.com/problems/merge-sorted-array/description/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
              <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">Merge Sorted Array</h4>
              <p className="text-xs text-gray-500">LeetCode • Easy</p>
            </a>
          </div>
        </section>

        <Quiz
          title="Module 2.8 Quiz: Sorting Fundamentals & Merge Sort"
          questions={[
            {
              question: "What does it mean for a sorting algorithm to be 'Stable'?",
              options: ["It always runs in O(n) time", "It preserves the relative order of elements with equal values", "It doesn't require extra memory", "It only works on integers"],
              correctAnswer: 1,
              explanation: "Stability means if two elements have the same value, their original order from the input is maintained in the sorted output."
            },
            {
              question: "What is the Time Complexity of Merge Sort in its worst case?",
              options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
              correctAnswer: 2,
              explanation: "Merge Sort consistently performs at O(n log n) regardless of the initial order of elements, due to its balanced divide-and-conquer approach."
            },
            {
              question: "Merge Sort is typically NOT an 'in-place' algorithm because:",
              options: ["It is too slow", "It requires O(n) extra space to perform the merge operation", "It uses recursion", "It only sorts strings"],
              correctAnswer: 1,
              explanation: "During the merge step, a temporary array (or extra space) is usually required to combine the sorted halves."
            },
            {
              question: "Which algorithmic paradigm does Merge Sort follow?",
              options: ["Greedy approach", "Dynamic Programming", "Divide and Conquer", "Backtracking"],
              correctAnswer: 2,
              explanation: "Merge Sort divides the problem into smaller sub-problems (halves), solves them recursively, and combines (merges) the results."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={8}
        />

        <h3 className="text-xl font-semibold mb-4">How to choose the best algorithm</h3>
        <p className="mb-4">
          Choosing the "best" sorting algorithm depends on several factors:
        </p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Size of the dataset:</strong> For small datasets, simpler algorithms like insertion sort might be faster.</li>
          <li><strong>Level of sortedness:</strong> If the data is nearly sorted, insertion sort can be very efficient.</li>
          <li><strong>Memory constraints:</strong> If memory is limited, in-place algorithms like heap sort are preferred.</li>
          <li><strong>Stability requirement:</strong> If maintaining the order of equal elements is important, use a stable algorithm like merge sort.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Class Fun Activity</h2>
        <p className="mb-4">
          Let's engage in a thought-provoking debate!
        </p>

        <p className="mb-4 font-semibold">
          Debate Topic: "In modern software development, is algorithmic optimization (like choosing the right sorting algorithm) becoming less critical due to advancements in hardware and cloud computing?"
        </p>

        <p className="mb-4 font-semibold">Instructions:</p>
        <ol className="list-decimal ml-6 mb-6 space-y-2">
          <li>Divide the class into two teams: "For" and "Against."</li>
          <li>The "For" team will argue that algorithmic optimization is becoming less critical.</li>
          <li>The "Against" team will argue that algorithmic optimization remains essential.</li>
          <li>
            Each team should prepare arguments supported by real-world examples and technical reasoning. Consider factors such as:
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Scalability of modern applications</li>
              <li>Cost-effectiveness of different approaches</li>
              <li>Energy efficiency</li>
              <li>The prevalence of Big Data</li>
              <li>Specific use cases where algorithmic choices have a significant impact</li>
            </ul>
          </li>
          <li>Each team will have a designated time to present their arguments, followed by a rebuttal period for counterarguments and clarifications.</li>
        </ol>

        <p className="mb-6">
          This debate will encourage critical thinking about the practical implications of algorithmic efficiency in contemporary software engineering.
        </p>

        <div className="mb-6">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Data%20Structures%20and%20Algorithms%2FIntroduction%20to%20Sorting%20%26%20Merge%20Sort%20-%20mindmap.png" alt="Debate" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Additional resources for you:</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>
            <a href="https://www.geeksforgeeks.org/merge-sort/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://www.geeksforgeeks.org/merge-sort/
            </a>
          </li>
          <li>
            <a href="https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/merge-sort" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/merge-sort
            </a>
          </li>
          <li>
            <a href="https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              https://www.tutorialspoint.com/data_structures_algorithms/merge_sort_algorithm.htm
            </a>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold mb-4">Summary</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Sorting algorithms are essential for organizing data and enabling efficient searching.</li>
          <li>Merge Sort is a divide-and-conquer algorithm that recursively divides an array into halves, sorts each half, and then merges the sorted halves.</li>
          <li>Merge Sort has a time complexity of O(n log n) and a space complexity of O(n).</li>
          <li>The choice of sorting algorithm depends on factors such as dataset size, level of sortedness, memory constraints, and stability requirements.</li>
          <li>Merge Sort is our first formal dive into efficient sorting. We will contrast it with another divide-and-conquer algorithm, Quick Sort.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_8;
