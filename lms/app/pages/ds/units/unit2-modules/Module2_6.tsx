'use client';
import Quiz from '../../components/Quiz';

const Module2_6: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">2.6</div>
        <div className="lesson-title-main">
          <h1>Hands-On | File Directory Scanner</h1>
        </div>
      </div>

      <section className="content-section">
        <p className="mb-6">
          In this lesson, you will simulate a file system traversal using recursion to list all files and folders with proper indentation based on directory depth.
        </p>

        <p className="mb-6">
          We will explore recursive traversal of nested dictionary structures that mimic real-world file systems, just like how operating systems list folders and files recursively in tools like tree or ls -R.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Simulating a File Directory Scanner</h2>

        <h3 className="text-xl font-semibold mb-4">Recursive Traversal</h3>
        <p className="mb-6">
          Imagine opening a folder on your computer. Inside, you find other folders and files. Each of those folders might contain more folders and files. This kind of nested structure is best handled using recursion, where a function can call itself to dive deeper into subfolders.
        </p>

        <div className="mb-6">
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjRreHd4b3J1M3UxeWdzemd5dGd5emNoeXp4YmxpYmRjMHhqYjM0YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VPTCIp6nZtsEyLsGET/giphy.webp" alt="File Directory Structure" />
        </div>

        <p className="mb-6">
          Recursive traversal mimics Depth-First Search (DFS) where we explore each folder deeply before backtracking.
        </p>

        <h3 className="text-xl font-semibold mb-4">Why Use Recursion for File Systems?</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>It is a natural fit for nested data (folders within folders).</li>
          <li>Allows clean code that handles unknown depths.</li>
          <li>Makes visualization and indentation straightforward.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Real-World Use Cases</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Directory listing tools like ls -R, tree</li>
          <li>Backup and sync tools</li>
          <li>Searching or filtering files recursively</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Time &amp; Space Complexity</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li><strong>Time Complexity:</strong> O(n) – where n is the total number of files and folders.</li>
          <li><strong>Space Complexity:</strong> O(d) – where d is the max depth of nested folders (recursion stack).</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Key Ideas</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>" " * depth helps visualize folder depth.</li>
          <li>Files are base cases (non-dictionary, i.e., None).</li>
          <li>Folders (dictionaries) trigger recursive calls.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">When Not to Use Recursion</h3>
        <ul className="list-disc ml-6 mb-6 space-y-2">
          <li>Extremely deep file trees can cause stack overflow.</li>
          <li>Iterative methods may be better for performance-critical cases.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Analogy: Searching in Cabinets</h3>
        <p className="mb-6">
          Think of each folder as a locked cabinet inside another cabinet. You can only move forward by opening one layer at a time—and that's recursion.
        </p>

        <div className="mb-6">
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDcxZmNtZzI2N3Fsajc1YTQzbjdqbmxueGJvcXVreXY0cW83bzdkcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SuEFqeWxlLcvm/giphy.webp" alt="Cabinet Analogy" />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Objective</h2>
        <p className="mb-6">
          Simulate a file system traversal using recursion and print all files and folders with indentation representing their depth in the hierarchy.
        </p>

        <h3 className="text-xl font-semibold mb-4">** We'll Simulate this structure ** INPUT</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`MyDrive folder 3
Documents folder 2
Resume.pdf file
CoverLetter.docx file
Photos folder 1
Vacation folder 2
beach.png file
mountains.jpg file
Notes.txt file`}</code>
        </pre>

        <p className="mb-4">
          This input simulates a file directory structure in a flat, linear format, meant to be parsed recursively.
        </p>

        <p className="mb-6">
          Each directory or file is described in a depth-first order, using the following format:
        </p>

        <h3 className="text-xl font-semibold mb-4">OUTPUT</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto mb-6">
          <code>{`MyDrive
  Documents
    Resume.pdf
    CoverLetter.docx
  Photos
    Vacation
      beach.png
      mountains.jpg
  Notes.txt`}</code>
        </pre>

        <p className="mb-6 font-semibold text-lg">
          This is a bit Tricky question try to solve it !!
        </p>
        

        <Quiz
          title="Module 2.6 Quiz: File System Traversal"
          questions={[
            {
              question: "Recursive traversal of a file system is most similar to which graph traversal algorithm?",
              options: ["Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Dijkstra's Algorithm", "Binary Search"],
              correctAnswer: 1,
              explanation: "Recursion naturally explores one path (subfolder) as deep as possible before backtracking to the sibling paths, which is characteristic of DFS."
            },
            {
              question: "What determines the Space Complexity of a recursive file scanner?",
              options: ["The total number of files", "The size of the largest file", "The maximum depth of the nested folders", "The speed of the hard drive"],
              correctAnswer: 2,
              explanation: "The space complexity is determined by the maximum number of activation records on the call stack, which corresponds to the deepest nesting level."
            },
            {
              question: "In the context of this assignment, what represents the 'base case'?",
              options: ["Opening a new folder", "Encountering a 'file' (which has no further sub-items)", "The root directory", "Print statement"],
              correctAnswer: 1,
              explanation: "Files are the terminal points in the hierarchy. When we encounter one, the recursion for that branch stops and returns."
            },
            {
              question: "Why might you avoid recursion for a file system with millions of nested levels?",
              options: ["It would be too fast", "It could cause a 'Stack Overflow' error", "Folders can't be listed", "Recursion only works for numbers"],
              correctAnswer: 1,
              explanation: "Every recursive call consumes stack memory. Extremely deep trees can exceed the stack limit of the environment."
            }
          ]}
          subject="DS"
          unitId={2}
          moduleId={6}
        />
      </section>
    </div>
  );
};

export default Module2_6;
