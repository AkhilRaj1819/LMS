'use client';
import React, { useState, useEffect } from 'react';

const DirectoryTreeAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const dirs = ['/', '/bin', '/etc', '/home', '/tmp', '/var'];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 6), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-green-500 bg-green-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-green-800">Linux Directory Tree</div>
      <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
        <div className={active === 0 ? 'text-green-200 font-bold' : ''}>/ (root)</div>
        <div className={active === 1 ? 'text-green-200 font-bold' : ''}>├── bin       (Essential commands)</div>
        <div className={active === 2 ? 'text-green-200 font-bold' : ''}>├── etc       (Configuration files)</div>
        <div className={active === 3 ? 'text-green-200 font-bold' : ''}>├── home      (User directories)</div>
        <div>│   ├── alice</div>
        <div>│   └── bob</div>
        <div className={active === 4 ? 'text-green-200 font-bold' : ''}>├── tmp       (Temporary files)</div>
        <div className={active === 5 ? 'text-green-200 font-bold' : ''}>└── var       (Logs, caches, etc.)</div>
      </div>
    </div>
  );
};

const CommandDemoAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { cmd: 'pwd', output: '/home/student' },
    { cmd: 'cd ~', output: '' },
    { cmd: 'mkdir Projects', output: '' },
    { cmd: 'cd Projects', output: '' },
    { cmd: 'ls -l', output: 'total 0' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 5), 2000);
    return () => clearInterval(timer);
  }, []);

  const current = steps[step];

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-blue-800">Command Demo</div>
      <div className="bg-gray-900 text-blue-400 p-4 rounded font-mono text-sm">
        <div className="mb-2">$ {current.cmd}</div>
        {current.output && <div className="text-blue-300">{current.output}</div>}
        <div className="mt-2">$<span className="animate-pulse">_</span></div>
      </div>
    </div>
  );
};

const PathAnimation: React.FC = () => {
  const [type, setType] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setType(t => (t + 1) % 2), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`border-4 ${type === 0 ? 'border-purple-500 bg-purple-50' : 'border-orange-500 bg-orange-50'} p-6 rounded-lg`}>
      <div className={`text-center mb-4 font-bold ${type === 0 ? 'text-purple-800' : 'text-orange-800'}`}>
        {type === 0 ? 'Absolute Path' : 'Relative Path'}
      </div>
      <div className={`text-center font-mono text-lg ${type === 0 ? 'text-purple-700' : 'text-orange-700'}`}>
        {type === 0 ? '/home/alice/Documents/notes.txt' : 'Documents/notes.txt'}
      </div>
      <p className={`text-center mt-3 text-sm ${type === 0 ? 'text-purple-600' : 'text-orange-600'}`}>
        {type === 0 ? 'Starts from root (/)' : 'Starts from current location'}
      </p>
    </div>
  );
};

const Module5_10: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.10</div>
        <div className="lesson-title-main">
          <h1>Working with Directories in Linux</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Text-Based Superpowers</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-center font-semibold text-blue-800 text-lg mb-3">
            In Linux, where does every file and directory begin?
          </p>
          <div className="text-center">
            <button 
              onClick={() => setShowAnswer(!showAnswer)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
            </button>
          </div>
          {showAnswer && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-center font-bold text-blue-900 text-xl">
                Every file and directory in Linux starts from <span className="text-red-600">/</span> (root).
              </p>
            </div>
          )}
        </div>
        <p>
          Linux organizes everything into a hierarchical structure, much like a tree 🌳.
        </p>
        <p>
          The root directory (/) sits at the top, and all other directories (like /home, /etc, /bin) branch out from it.
        </p>
        <p>
          Understanding this structure is the first step in navigating and managing Linux effectively. Let's dive in!
        </p>
      </section>

      <section className="content-section">
        <h3>Directory Structure Example</h3>
        <DirectoryTreeAnimation />
      </section>

      <section className="content-section">
        <h3>Essential Directory Commands</h3>
        <table className="w-full border-collapse border-2 border-gray-400 my-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Command</th>
              <th className="border-2 border-gray-400 p-3">What it Does</th>
              <th className="border-2 border-gray-400 p-3">Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">pwd</td>
              <td className="border-2 border-gray-400 p-3">Show current directory</td>
              <td className="border-2 border-gray-400 p-3 font-mono">/home/student</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">ls</td>
              <td className="border-2 border-gray-400 p-3">List files and directories</td>
              <td className="border-2 border-gray-400 p-3 font-mono">ls -l</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">cd directory</td>
              <td className="border-2 border-gray-400 p-3">Change to a directory</td>
              <td className="border-2 border-gray-400 p-3 font-mono">cd Documents</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">cd ..</td>
              <td className="border-2 border-gray-400 p-3">Move one level up (parent directory)</td>
              <td className="border-2 border-gray-400 p-3">–</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">cd ~</td>
              <td className="border-2 border-gray-400 p-3">Go to home directory</td>
              <td className="border-2 border-gray-400 p-3">–</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">mkdir dirname</td>
              <td className="border-2 border-gray-400 p-3">Create a new directory</td>
              <td className="border-2 border-gray-400 p-3 font-mono">mkdir Projects</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">rmdir dirname</td>
              <td className="border-2 border-gray-400 p-3">Remove an empty directory</td>
              <td className="border-2 border-gray-400 p-3 font-mono">rmdir temp</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">rm -r dirname</td>
              <td className="border-2 border-gray-400 p-3">Remove a directory and its contents (careful!)</td>
              <td className="border-2 border-gray-400 p-3 font-mono">rm -r old_files</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">tree</td>
              <td className="border-2 border-gray-400 p-3">Show directory tree structure (if installed)</td>
              <td className="border-2 border-gray-400 p-3 font-mono">tree Documents</td>
            </tr>
          </tbody>
        </table>
        <div className="border-4 border-yellow-500 bg-yellow-50 p-3 rounded-lg">
          <p className="text-yellow-800"><strong>Tip:</strong> Use <span className="font-mono">ls -a</span> to see hidden files (those starting with .).</p>
        </div>
        <CommandDemoAnimation />
      </section>

      <section className="content-section">
        <h3>Example Walkthrough</h3>
        <p>Imagine you want to create and organize your projects:</p>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-4">
          <div>pwd                # See where you are</div>
          <div>cd ~               # Go to home directory</div>
          <div>mkdir Projects     # Make a new directory</div>
          <div>cd Projects        # Enter Projects</div>
          <div>mkdir Python Cpp   # Create two folders inside</div>
          <div>cd Python          # Enter Python</div>
          <div>touch app.py       # Create a file</div>
          <div>cd ..              # Go back to Projects</div>
          <div>ls -R              # Show everything inside recursively</div>
        </div>
      </section>

      <section className="content-section">
        <h3>Absolute vs. Relative Paths</h3>
        <PathAnimation />
        
        <h4>Absolute Path</h4>
        <p>→ Starts from the root /.</p>
        <p><strong>Example:</strong> <span className="font-mono">/home/alice/Documents/notes.txt</span></p>

        <h4>Relative Path</h4>
        <p>→ Starts from your current location.</p>
        <p><strong>Example:</strong> If you're in <span className="font-mono">/home/alice</span>, then <span className="font-mono">cd Documents</span> works.</p>
      </section>

      <section className="content-section">
        <h3>Special Shortcuts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-mono font-bold text-blue-800 mb-2">.</div>
            <p className="text-blue-700">Current directory</p>
          </div>
          <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-mono font-bold text-green-800 mb-2">..</div>
            <p className="text-green-700">Parent directory</p>
          </div>
          <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-3xl font-mono font-bold text-purple-800 mb-2">~</div>
            <p className="text-purple-700">Home directory</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Watch the Video</h3>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg">
          <p className="text-center">
            <iframe width="600" height="360" src="https://www.youtube.com/embed/JCMRlMptRus" title="Linux Tutorials | Working with Directories | GeeksforGeeks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
          <p className="text-sm text-center mt-2">Watch the below given video to understand more about LINUX DIRECTORIES</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Mind Map</h3>
        <div className="flex justify-center my-4">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20System%2Fdir_svg.svg" alt="Mind Map" className="rounded-lg shadow-lg max-w-md" />
        </div>
      </section>

      <section className="content-section">
        <h3>Additional Resources</h3>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/linux-directory-structure/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Linux Directories Explained (GeeksforGeeks)
            </a>
          </li>
          <li>
            <a href="https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Filesystem Hierarchy Standard (Linux Foundation)
            </a>
          </li>
          <li>
            <a href="https://linuxize.com/post/linux-cd-command/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Linux cd Command Guide (Linuxize)
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/mkdir-command-in-linux-with-examples/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Linux mkdir and rmdir Tutorial
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Great" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">You're mastering Linux directories!</p>
      </section>
    </div>
  );
};

export default Module5_10;
