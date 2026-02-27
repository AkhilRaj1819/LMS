'use client';
import Quiz from '../../components/Quiz';

const Module2_13: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.13</div>
        <div className="lesson-title-main">
          <h1>Quick Sort Algorithm</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-4">
          Hey everyone!
        </p>

        <p className="mb-6">
          In the previous lesson, you've already seen how Merge Sort divides a list perfectly in half to sort it. In this session, you're going to learn about a different, often faster, sorting algorithm called Quick Sort. Instead of a simple fifty-fifty split, Quick Sort uses a clever and flexible approach. It picks one element, called a "pivot," and smartly rearranges the entire list around it.
        </p>

        <p className="mb-6">
          This lesson will show you how this "partitioning" strategy forms the heart of one of the most widely used sorting algorithms in the world.
        </p>

        <p className="mb-4">
          Imagine sorting a deck of cards. You wouldn't pick up each card one by one and compare it to all the others. Instead, you'd likely use a strategy to group and arrange the cards more efficiently.
        </p>

        <div className="mb-6">
          <img src="https://smartpress.imgix.net/resources/offering_images/playing_cards_3qtr_resting_front_cp_grandier-20240226_135448636.jpg?w=1000&h=1000&fit=crop&auto=format" alt="Sorting cards" />
          <p className="text-sm text-gray-600 mt-2">Credits: smartpress</p>
        </div>

        <p className="mb-6">
          Sorting is a fundamental task in computer science, essential for organizing data in a meaningful way. From arranging search results to managing databases, efficient sorting algorithms are crucial for optimizing performance and enhancing user experience. So let's uncover the magic behind it, and explore!
        </p>

        <p className="mb-6">
          Think of Quick Sort as a way to sort a list by picking a "pivot" and rearranging elements around it, making smaller piles on either side.
        </p>

        <h3 className="text-xl font-semibold mb-4">What is Quick Sort?</h3>
        <p className="mb-4">
          Quick Sort is a highly efficient sorting algorithm that follows the "Divide and Conquer" paradigm. It works by selecting a "pivot"(a value chosen from the array to partition it into two subarrays) element from the list and partitioning the other elements into two sub-lists, according to whether they are less than or greater than the pivot.
        </p>

        <p className="mb-6">
          Imagine you're organizing a bookshelf. You pick a book (the pivot) and then divide the remaining books into two piles: those that come before it alphabetically and those that come after. You repeat this process for each pile until all the books are sorted. That's Quick Sort in action!
        </p>

        <div className="mb-6">
          <img src="https://kq-storage.kalvium.community/quicksort.png" alt="Quick Sort visualization" />
        </div>

        <p className="mb-6">
          Quick Sort relies on the principle of "Divide and Conquer," where the problem is divided into smaller subproblems, solved independently, and combined to produce the final result.
        </p>

        <p className="mb-4">
          Here is a short video that explains quick sort
        </p>

        <div className="mb-6">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Hoixgm4-P4M" title="Quick Sort Explained" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

        <h3 className="text-xl font-semibold mb-4">Key Principles:</h3>
        <p className="mb-4">
          Now, let's dive into some of the key principles involved in quick sort.
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Divide and Conquer:</strong> The algorithm divides the list into smaller sub-lists based on a chosen "pivot" element.</li>
          <li><strong>Partitioning:</strong> Elements are rearranged such that all elements less than the pivot are placed before it, and all elements greater than the pivot are placed after it.</li>
          <li><strong>Recursion:</strong> The process is then repeated recursively for the sub-lists until the entire list is sorted.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Why is Quick Sort Important?</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Efficiency:</strong> Quick Sort has an average time complexity of O(n log n), making it one of the fastest sorting algorithms for large datasets.</li>
          <li><strong>In-Place Sorting:</strong> Quick Sort is an in-place sorting algorithm, meaning it requires minimal additional memory space.</li>
          <li><strong>Widely Used:</strong> Quick Sort is used extensively in various applications, including database systems, operating systems, and software libraries.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">How Does Quick Sort Work?</h3>
        <p className="mb-6">
          Quick Sort can be implemented using two approaches: recursive and iterative. Both achieve the same result but differ in their implementation style.
        </p>


        <p className="mb-4">
          Let's visualize how quick sort functions before moving to the two approaches.
        </p>

        <p className="mb-4 font-semibold">Instructions:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>You can either insert values manually or click on the run button, which will use random values.</li>
          <li>The default no os values is 8. If you want to increase the size of the array, you can do it using the drop-down beside the reset button.</li>
          <li>Once you click the run button, you will be greeted with 4 new buttons and the array below it.</li>
          <li>You can use the &lt; and &gt; buttons to move 1 step at a time and use &lt;&lt; and &gt;&gt; buttons to move to the end or the start.</li>
        </ul>

        <p className="mb-4">
          Now, let's see what are the two approaches.
        </p>

        <h3 className="text-xl font-semibold mb-4">1. Recursive Implementation:</h3>
        <p className="mb-4">
          In the recursive approach, the Quick Sort algorithm calls itself with smaller sub-arrays until the base case (when the sub-array is empty or contains only one element) is reached. Let's understand this with an example:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Imagine you're sorting the list [5, 2, 8, 1, 9, 4, 7] using Quick Sort.</li>
          <li>In the first step, you choose a pivot element, say 5. Then, you partition the list into two sub-lists: [2, 1, 4] (elements less than 5) and [8, 9, 7] (elements greater than 5).</li>
          <li>Next, you recursively apply Quick Sort to the sub-lists [2, 1, 4] and [8, 9, 7].</li>
          <li>This process continues until all sub-lists are sorted, resulting in the sorted list [1, 2, 4, 5, 7, 8, 9].</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`def recursive_quick_sort(list):
if len(list) <= 1:
return list
else:
pivot = list[0]
less = [i for i in list[1:] if i <= pivot]
greater = [i for i in list[1:] if i > pivot]
return recursive_quick_sort(less) + [pivot] + recursive_quick_sort(greater)`}</code>
        </pre>

        <p className="mb-4 font-semibold">Example Usage:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`unsorted_list = [5, 2, 8, 1, 9, 4, 7]
sorted_list = recursive_quick_sort(unsorted_list)
print("Sorted list:", sorted_list)`}</code>
        </pre>


        <p className="mb-4 font-semibold">What this code does:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>This function implements quick sort recursively.</li>
          <li>If the length of the list is less than or equal to 1, it returns the list.</li>
          <li>Otherwise it picks the pivot element and divides the unsorted list into smaller and greater sub lists</li>
          <li>Recursively calls the quick sort method on the sublists.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">2. Iterative Implementation.</h3>
        <p className="mb-4">
          In the iterative approach, the Quick Sort algorithm uses a stack to keep track of sub-arrays that need to be sorted. This eliminates the need for recursive function calls. Let's understand this with an example:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Imagine you're sorting the list [5, 2, 8, 1, 9, 4, 7] using iterative Quick Sort.</li>
          <li>You start by pushing the indices of the entire list onto a stack.</li>
          <li>While the stack is not empty, you pop the indices, partition the sub-list, and push the indices of the resulting sub-lists onto the stack.</li>
          <li>This process continues until the stack is empty, resulting in the sorted list [1, 2, 4, 5, 7, 8, 9].</li>
        </ul>

        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-4">
          <code>{`def iterative_quick_sort(list):
stack = [(0, len(list) - 1)]
while stack:
low, high = stack.pop()
if low < high:
pivot_index = partition(list, low, high)
stack.append((low, pivot_index - 1))
stack.append((pivot_index + 1, high))
return list
 
def partition(list, low, high):
pivot = list[high]
i = low - 1
for j in range(low, high):
if list[j] <= pivot:
i += 1
list[i], list[j] = list[j], list[i]
list[i + 1], list[high] = list[high], list[i + 1]
return i + 1`}</code>
        </pre>

        <p className="mb-4 font-semibold">Example Usage:</p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`unsorted_list = [5, 2, 8, 1, 9, 4, 7]
sorted_list = iterative_quick_sort(unsorted_list)
print("Sorted list:", sorted_list)`}</code>
        </pre>

        <p className="mb-4 font-semibold">What this code does:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>This function implements quick sort iteratively using a stack.</li>
          <li>The partition function partitions the list around a pivot and returns the index of the pivot.</li>
          <li>The iterative_quick_sort function uses a stack to keep track of the sub-arrays that need to be sorted.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Analyzing Efficiency: Time and Space Complexity</h3>

        <div className="mb-6">
          <p className="font-semibold mb-2">Time Complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Best Case:</strong> O(n log n) - occurs when the pivot is always the middle element.</li>
            <li><strong>Average Case:</strong> O(n log n) - occurs when the pivot is close to the middle element on average.</li>
            <li><strong>Worst Case:</strong> O(n^2) - occurs when the pivot is always the smallest or largest element.</li>
          </ul>
        </div>

        <div className="mb-6">
          <p className="font-semibold mb-2">Space Complexity:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong>Recursive:</strong> O(log n) - due to the call stack.</li>
            <li><strong>Iterative:</strong> O(log n) - due to the stack.</li>
          </ul>
        </div>

        <p className="mb-6">
          The O(n log n) average time complexity of Quick Sort makes it highly efficient for sorting large datasets. However, it's important to be aware of the worst-case scenario, which can result in O(n^2) time complexity. Choosing a good pivot can help mitigate this risk.
        </p>

        <h3 className="text-xl font-semibold mb-4">Quick Sort vs. Merge Sort: A Comparison</h3>
        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Quick Sort</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Merge Sort</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Time Complexity</td>
                <td className="border border-gray-300 px-4 py-2">O(n log n) average, O(n²) worst</td>
                <td className="border border-gray-300 px-4 py-2">O(n log n) always</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Space Complexity</td>
                <td className="border border-gray-300 px-4 py-2">O(log n)</td>
                <td className="border border-gray-300 px-4 py-2">O(n)</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sorting Type</td>
                <td className="border border-gray-300 px-4 py-2">In-place</td>
                <td className="border border-gray-300 px-4 py-2">Not in-place</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Stability</td>
                <td className="border border-gray-300 px-4 py-2">Not stable</td>
                <td className="border border-gray-300 px-4 py-2">Stable</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Best Use Case</td>
                <td className="border border-gray-300 px-4 py-2">General-purpose sorting</td>
                <td className="border border-gray-300 px-4 py-2">External sorting, stable sorting</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-6">
          <strong>Merge Sort:</strong> It also divides and conquers, but in a different way. It is known for its stability and guaranteed O(n log n) time complexity.
        </p>
        

        <Quiz
          title="Module 2.13 Quiz: Quick Sort Algorithm"
          questions={[
            {
              question: "Which of the following describes the average time complexity of Quick Sort?",
              options: ["O(n)", "O(n^2)", "O(n log n)", "O(log n)"],
              correctAnswer: 2,
              explanation: "Quick Sort generally performs O(n log n) in the average case, making it very efficient for practical use."
            },
            {
              question: "What is a 'pivot' in the context of Quick Sort?",
              options: ["The smallest element in the list", "The largest element in the list", "An element chosen to partition the array into smaller and larger elements", "The number of times the function calls itself"],
              correctAnswer: 2,
              explanation: "The pivot is the reference point used to rearrange elements into two sub-arrays during the partitioning step."
            },
            {
              question: "In which scenario does Quick Sort hit its worst-case time complexity, O(n^2)?",
              options: ["When the list is already sorted and the first or last element is consistently picked as the pivot", "When the list is randomized", "When the pivot is always the median element", "When the array size is a power of 2"],
              correctAnswer: 0,
              explanation: "Unbalanced partitioning (picking extremes as pivots in sorted/reverse-sorted data) leads to O(n^2) performance."
            },
            {
              question: "What is a key advantage of Quick Sort over Merge Sort in terms of resources?",
              options: ["It is always stable", "It is an in-place sorting algorithm (uses less extra memory)", "It never hits O(n^2)", "It doesn't use recursion"],
              correctAnswer: 1,
              explanation: "Quick Sort is in-place (O(log n) space for recursion stack), whereas Merge Sort requires O(n) extra space for merging."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={13}
        />

        <p className="mb-6">
          You've now seen the theory behind Quick Sort, how it uses a pivot to partition data, and how that choice impacts its efficiency. You've also compared it to Merge Sort and understand the trade-offs between them.
        </p>

        <p className="mb-6">
          But knowing the theory is one thing; implementing it efficiently is another. In your next lesson, you will be given an assignment to implement Quick Sort yourself. This won't just be about writing the code—it will be about applying what you've learned to create an optimal implementation. You'll need to think carefully about your pivot selection strategy to ensure your algorithm performs at its best and avoids that worst-case scenario. Good luck
        </p>

        <div className="mb-6">
          <img src="https://media.tenor.com/images/coding.gif" alt="Good luck coding" />
          <p className="text-sm text-gray-600 mt-2">Credits: tenor</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Activity Time!</h3>
        <p className="mb-4">
          Now, let's engage in a hands-on activity to solidify your understanding of Quick Sort.
        </p>

        <p className="mb-4 font-semibold">Task:</p>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Given an unsorted list of numbers, implement Quick Sort to sort the list in ascending order.</li>
          <li>Random: 34, 7, 23, 32, 5, 62</li>
          <li>Sorted: 1, 2, 3, 4, 5, 6</li>
          <li>Reverse: 10, 9, 8, 7, 6, 5</li>
          <li>Analyze the time complexity of Quick Sort for different input scenarios.</li>
        </ul>
      </section>
      <section className="content-section">
        <h3>Practice Problems</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://www.geeksforgeeks.org/dsa/quicksort-using-random-pivoting/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">quick Sort using random pivoting</h4>
            <p className="text-xs text-gray-500">GeeksforGeeks • Medium</p>
          </a>
          <a href="https://www.geeksforgeeks.org/dsa/quick-sort-algorithm/" target="_blank" className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-500 hover:bg-emerald-50 transition-all group">
            <h4 className="font-bold text-gray-800 group-hover:text-emerald-600">quick Sort algorithm</h4>
            <p className="text-xs text-gray-500">GeeksforGeeks • Medium</p>
          </a>
        </div>
      </section>
      <section className="content-section">
        <h3>Key Takeaways</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Quick Sort:</strong> A divide-and-conquer algorithm that sorts an array by partitioning it around a pivot element.</li>
          <li><strong>Time Complexity:</strong> O(n log n) on average, O(n²) in the worst case.</li>
          <li><strong>Space Complexity:</strong> O(log n) for the recursion stack.</li>
          <li><strong>Pivot Selection:</strong> The choice of pivot significantly affects performance.</li>
          <li><strong>Stability:</strong> Not a stable sorting algorithm.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module2_13;
