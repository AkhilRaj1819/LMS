'use client';
import React, { useState, useEffect } from 'react';

const DesktopAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const components = ['Desktop', 'Taskbar', 'App Menu', 'File Manager'];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-blue-800">Linux Desktop Components</div>
      <div className="grid grid-cols-2 gap-4">
        {components.map((comp, i) => (
          <div key={i} className={`p-4 rounded-lg font-bold text-white text-center transition-all ${
            active === i ? 'bg-blue-600 scale-110' : 'bg-blue-400'
          }`}>
            {comp}
          </div>
        ))}
      </div>
    </div>
  );
};

const TerminalAnimation: React.FC = () => {
  const [cmd, setCmd] = useState(0);
  const commands = [
    { cmd: 'pwd', output: '/home/student' },
    { cmd: 'ls', output: 'Documents Downloads Pictures' },
    { cmd: 'cd Documents', output: '' },
    { cmd: 'mkdir Projects', output: '' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCmd(c => (c + 1) % 4), 2500);
    return () => clearInterval(timer);
  }, []);

  const current = commands[cmd];

  return (
    <div className="border-4 border-green-500 bg-green-50 p-6 rounded-lg">
      <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
        <div className="mb-2">$ {current.cmd}</div>
        {current.output && <div className="text-green-300">{current.output}</div>}
        <div className="mt-2">$<span className="animate-pulse">_</span></div>
      </div>
    </div>
  );
};

const LinuxExplorerAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const concepts = [
    { name: 'Desktop Environment', icon: '🖥️', color: 'blue' },
    { name: 'Terminal Basics', icon: '💻', color: 'green' },
    { name: 'File System', icon: '📁', color: 'purple' },
    { name: 'Processes', icon: '⚙️', color: 'orange' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-gray-500 bg-gray-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-gray-800">🖥️ Linux Explorer: Knowledge Adventure</div>
      <div className="grid grid-cols-2 gap-4">
        {concepts.map((concept, i) => (
          <div key={i} className={`p-4 rounded-lg font-bold text-white text-center transition-all ${
            active === i ? `bg-${concept.color}-600 scale-110` : `bg-${concept.color}-400`
          }`}>
            <div className="text-3xl mb-2">{concept.icon}</div>
            <div className="text-sm">{concept.name}</div>
          </div>
        ))}
      </div>
      <p className="text-center mt-4 text-sm text-gray-600">Click a concept to reveal detailed information…</p>
    </div>
  );
};

const Module5_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.9</div>
        <div className="lesson-title-main">
          <h1>Getting Started with Linux: Desktop, Terminal, and Basics</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Hello Command Line</h3>
        <p>
          Have you ever wondered why developers, system admins, and even ethical hackers love Linux?
        </p>
        <p>
          Linux is powerful, flexible, and free – and today, we'll explore how to get started with it.
        </p>
        <p>
          In this lesson, we'll cover both the desktop interface and the terminal basics, so you'll be comfortable using Linux in no time.
        </p>
      </section>

      <section className="content-section">
        <h3>The Linux Desktop</h3>
        <p>
          Linux distributions (like Ubuntu, Fedora, or Mint) usually provide a desktop environment (like GNOME, KDE, or XFCE).
        </p>
        <p>
          Think of it as the face of Linux – windows, menus, icons – similar to Windows or macOS.
        </p>
        <ul>
          <li><strong>Desktop</strong> → Where your files, folders, and applications live.</li>
          <li><strong>Taskbar / Dock</strong> → Quick access to apps & notifications.</li>
          <li><strong>Application Menu</strong> → Launch installed programs.</li>
          <li><strong>File Manager</strong> → Browse files graphically.</li>
        </ul>
        <p>The desktop is beginner-friendly, but Linux shines when you dive into the terminal.</p>
        <div className="flex justify-center my-4">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20System%2FWork%20Working%20GIF%20by%20jjjjjohn.gif" alt="Linux Desktop" className="rounded-lg shadow-lg max-w-2xl" />
        </div>
        <DesktopAnimation />
      </section>

      <section className="content-section">
        <h3>Why the Terminal?</h3>
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg my-4">
          <p className="text-orange-800 font-semibold mb-2">Cooking Analogy</p>
          <p className="text-orange-800">Imagine you're cooking. You could:</p>
          <ul className="text-orange-800 mt-2">
            <li><strong>Use buttons on a microwave (desktop)</strong> → easy but limited.</li>
            <li><strong>Use a gas stove with full control (terminal)</strong> → powerful, precise, and flexible.</li>
          </ul>
        </div>
        <p>The Linux terminal is the command-line interface (CLI) that lets you:</p>
        <ul>
          <li>Control every part of the OS.</li>
          <li>Automate tasks.</li>
          <li>Run commands faster than clicking menus.</li>
        </ul>
        <p>Don't worry – you don't need to memorize everything at once. Let's start small.</p>
      </section>

      <section className="content-section">
        <h3>Basic Linux Commands</h3>
        <p>Here are some must-know commands to get started:</p>
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
              <td className="border-2 border-gray-400 p-3">Shows your current directory (where you are).</td>
              <td className="border-2 border-gray-400 p-3 font-mono">/home/student</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">ls</td>
              <td className="border-2 border-gray-400 p-3">Lists files and folders in the current directory.</td>
              <td className="border-2 border-gray-400 p-3 font-mono">ls Documents</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">cd</td>
              <td className="border-2 border-gray-400 p-3">Changes directory.</td>
              <td className="border-2 border-gray-400 p-3 font-mono">cd Downloads</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">mkdir</td>
              <td className="border-2 border-gray-400 p-3">Creates a new folder.</td>
              <td className="border-2 border-gray-400 p-3 font-mono">mkdir Projects</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">touch</td>
              <td className="border-2 border-gray-400 p-3">Creates a new empty file.</td>
              <td className="border-2 border-gray-400 p-3 font-mono">touch notes.txt</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">cp</td>
              <td className="border-2 border-gray-400 p-3">Copies files.</td>
              <td className="border-2 border-gray-400 p-3 font-mono">cp file.txt backup.txt</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">mv</td>
              <td className="border-2 border-gray-400 p-3">Moves or renames files.</td>
              <td className="border-2 border-gray-400 p-3 font-mono">mv old.txt new.txt</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">rm</td>
              <td className="border-2 border-gray-400 p-3">Removes files (careful – no recycle bin!).</td>
              <td className="border-2 border-gray-400 p-3 font-mono">rm temp.txt</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-mono font-bold">man</td>
              <td className="border-2 border-gray-400 p-3">Shows the manual (help) for a command.</td>
              <td className="border-2 border-gray-400 p-3 font-mono">man ls</td>
            </tr>
          </tbody>
        </table>
        <div className="border-4 border-yellow-500 bg-yellow-50 p-3 rounded-lg">
          <p className="text-yellow-800"><strong>Tip:</strong> Commands are case-sensitive in Linux.</p>
        </div>
        <TerminalAnimation />
      </section>

      <section className="content-section">
        <h3>Example Walkthrough</h3>
        <p>Imagine you want to organize your coding projects:</p>
        <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm my-4">
          <div>pwd                    # Check where you are</div>
          <div>cd Documents            # Move to Documents folder</div>
          <div>mkdir MyProjects        # Create a folder</div>
          <div>cd MyProjects           # Enter it</div>
          <div>touch hello.py          # Create a Python file</div>
          <div>ls                      # List files (you'll see hello.py)</div>
        </div>
      </section>

      <section className="content-section">
        <h3>Desktop vs. Terminal</h3>
        <table className="w-full border-collapse border-2 border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Task</th>
              <th className="border-2 border-gray-400 p-3">Desktop Way</th>
              <th className="border-2 border-gray-400 p-3">Terminal Way</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-400 p-3">Open folder</td>
              <td className="border-2 border-gray-400 p-3">Double-click in File Manager</td>
              <td className="border-2 border-gray-400 p-3 font-mono">cd foldername</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3">Create file</td>
              <td className="border-2 border-gray-400 p-3">Right-click → New Document</td>
              <td className="border-2 border-gray-400 p-3 font-mono">touch file.txt</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3">Delete file</td>
              <td className="border-2 border-gray-400 p-3">Right-click → Delete</td>
              <td className="border-2 border-gray-400 p-3 font-mono">rm file.txt</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3">Move file</td>
              <td className="border-2 border-gray-400 p-3">Drag & Drop</td>
              <td className="border-2 border-gray-400 p-3 font-mono">mv file1.txt folder/</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4">Both ways work – but the terminal is faster and scriptable.</p>
      </section>

      <section className="content-section">
        <h3>Why Learn Linux Basics?</h3>
        <ul>
          <li><strong>Developers</strong> use Linux for programming & servers.</li>
          <li><strong>System admins</strong> rely on Linux to manage users, processes, and networking.</li>
          <li><strong>Everyday users</strong> enjoy stability, security, and freedom.</li>
        </ul>
        <p>Once you master the basics, Linux becomes your superpower.</p>
      </section>

      <section className="content-section">
        <h3>Linux Explorer</h3>
        <LinuxExplorerAnimation />
      </section>

      <section className="content-section">
        <h3>📝 Summary</h3>
        <p>In this lesson, you've learned:</p>
        <ul>
          <li>The Linux desktop and its components.</li>
          <li>Why the terminal is powerful.</li>
          <li>Basic commands (pwd, ls, cd, mkdir, touch, etc.).</li>
          <li>How to compare desktop vs. terminal workflows.</li>
        </ul>
        <p>
          <strong>Next step:</strong> Practice these commands in a real Linux environment (try Ubuntu in VirtualBox or WSL).
        </p>
      </section>

      <section className="content-section">
        <h3>Watch the Video</h3>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg">
          <p className="text-center">
            <iframe width="407" height="360" src="https://www.youtube.com/embed/WvR-6CVI-Mc" title="Getting Started with Linux, here&#39;s the distros beginners should try" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </p>
          <p className="text-sm text-center mt-2">Watch the below given video to understand more about LINUX</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Mind Map</h3>
        <div className="flex justify-center my-4">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20System%2Flinux_svg.svg" alt="Mind Map" className="rounded-lg shadow-lg max-w-md" />
        </div>
      </section>

      <section className="content-section">
        <h3>Additional Resources</h3>
        <p className="text-sm text-gray-600 mb-2">This part is optional and you can skip it if you want.</p>
        <ul>
          <li>
            <a href="https://ubuntu.com/desktop/features" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Ubuntu Desktop Tour
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/news/the-linux-commands-handbook/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Linux Command Handbook
            </a>
          </li>
          <li>
            <a href="https://linuxjourney.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Linux Journey (Interactive Learning)
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Great" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">You're ready to explore Linux!</p>
      </section>
    </div>
  );
};

export default Module5_9;
