'use client';
import React, { useState, useEffect } from 'react';

const RAIDAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const disks = ['Disk 1', 'Disk 2', 'Disk 3'];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 4), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="flex justify-center items-center gap-4">
        {disks.map((disk, i) => (
          <div key={i} className={`w-24 h-24 flex items-center justify-center rounded-lg font-bold text-white transition-all ${
            active >= i ? 'bg-blue-600 scale-110' : 'bg-blue-400'
          }`}>
            {disk}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <div className="text-2xl">→ Data Distribution →</div>
        <p className="font-semibold text-gray-700 mt-2">RAID spreads data across multiple drives</p>
      </div>
    </div>
  );
};

const RAIDTypeAnimation: React.FC = () => {
  const [type, setType] = useState(0);
  const types = [
    { name: 'RAID 0', description: 'Speed', color: 'red', icon: '⚡' },
    { name: 'RAID 1', description: 'Safety', color: 'green', icon: '🛡️' },
    { name: 'RAID 5', description: 'Balance', color: 'blue', icon: '⚖️' },
    { name: 'RAID 10', description: 'Best of Both', color: 'purple', icon: '🏆' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setType(t => (t + 1) % 4), 2500);
    return () => clearInterval(timer);
  }, []);

  const current = types[type];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-8 rounded-lg`}>
      <div className="text-center">
        <div className="text-6xl mb-4">{current.icon}</div>
        <div className={`text-2xl font-bold text-${current.color}-800`}>{current.name}</div>
        <div className={`text-lg text-${current.color}-700`}>{current.description}</div>
      </div>
    </div>
  );
};

const Module5_7: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.7</div>
        <div className="lesson-title-main">
          <h1>RAID</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Disks Team Up</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-center font-semibold text-blue-800">
            Picture a single-lane road jammed with traffic. Now, add multiple lanes, and suddenly, cars move faster. RAID does the same thing for data!
          </p>
        </div>
        <p>
          RAID spreads data across multiple drives to speed up access and prevent bottlenecks. It's like having multiple lanes on a highway - traffic flows much smoother!
        </p>
      </section>

      <section className="content-section">
        <h3>What is RAID?</h3>
        <p>
          <strong>RAID</strong> stands for <strong>Redundant Array of Independent Disks</strong>. It is a storage technique that combines multiple hard drives into a single system to improve performance, reliability, or both.
        </p>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg my-4">
          <p className="font-semibold text-green-800 mb-2">Think of it like a restaurant kitchen:</p>
          <p className="text-green-700">
            Instead of one chef cooking all dishes (slow), imagine a team of chefs working together - some share cooking tasks for speed, others make backup recipes for safety!
          </p>
        </div>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid00.png" alt="RAID Overview" className="w-full rounded-lg shadow-lg my-4" />
      </section>

      <section className="content-section">
        <h3>Why Do We Need RAID?</h3>
        <ul>
          <li><strong>Speed:</strong> Faster data access for streaming, gaming, and applications</li>
          <li><strong>Safety:</strong> Protection against drive failures and data loss</li>
          <li><strong>Scalability:</strong> Handle massive amounts of data efficiently</li>
          <li><strong>Reliability:</strong> Business continuity even when hardware fails</li>
        </ul>
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg mt-4">
          <p className="font-semibold text-orange-800">
            Imagine if every time you wanted to watch a movie online, it took forever to load or disappeared because of system failure. RAID prevents these problems!
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>How RAID Distributes Data</h3>
        <RAIDAnimation />
      </section>

      <section className="content-section">
        <h3>RAID Controller</h3>
        <p>
          A RAID controller is the "brain" that manages how data is stored and retrieved across multiple drives. It can be:
        </p>
        <ul>
          <li><strong>Hardware-based:</strong> Separate device that manages the process efficiently</li>
          <li><strong>Software-based:</strong> Managed by the operating system</li>
        </ul>
        <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg my-4">
          <p className="font-semibold text-purple-800">Key Functions:</p>
          <ul className="text-purple-700 mt-2">
            <li>Decides where and how data is stored across drives</li>
            <li>Helps recover missing data when drives fail</li>
            <li>Coordinates multiple drives to work as one system</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>Types of RAID</h3>
        <RAIDTypeAnimation />
        
        <h4>RAID 0 - Striping</h4>
        <p>
          <strong>Pure speed, no protection.</strong> Data is split into chunks and spread across multiple drives for maximum performance.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid0.png" alt="RAID 0" className="rounded-lg shadow-lg max-w-md" />
        </div>
        <ul>
          <li>✅ Fastest performance</li>
          <li>✅ Uses 100% of storage capacity</li>
          <li>❌ No redundancy - single drive failure = total data loss</li>
          <li><strong>Best for:</strong> Gaming, video editing, temporary storage</li>
        </ul>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg mt-2">
          <p className="text-red-800">📚➡️📖📖 Like two typists writing alternate pages - twice as fast, but lose half the book if one fails!</p>
        </div>

        <h4>RAID 1 - Mirroring</h4>
        <p>
          <strong>Complete data duplication.</strong> Every piece of data is copied to another drive for maximum safety.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid1.png" alt="RAID 1" className="rounded-lg shadow-lg max-w-md" />
        </div>
        <ul>
          <li>✅ High redundancy and data protection</li>
          <li>✅ Can survive drive failures</li>
          <li>❌ Only 50% storage efficiency</li>
          <li><strong>Best for:</strong> Critical data, OS disks, log files</li>
        </ul>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg mt-2">
          <p className="text-green-800">📔📔 Like keeping two identical diaries - if one gets lost, you still have the other!</p>
        </div>

        <h4>RAID 5 - Striping with Parity</h4>
        <p>
          <strong>Balance of speed and protection.</strong> Data is striped with parity information distributed across drives.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid5.png" alt="RAID 5" className="rounded-lg shadow-lg max-w-md" />
        </div>
        <ul>
          <li>✅ Good balance of speed and safety</li>
          <li>✅ Can rebuild from one drive failure</li>
          <li>✅ Good storage efficiency (67-94%)</li>
          <li>❌ Requires minimum 3 drives</li>
          <li><strong>Best for:</strong> Servers, business applications</li>
        </ul>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mt-2">
          <p className="text-blue-800">⚽👥 Like a soccer team where each player knows part of the strategy and can rebuild the missing piece!</p>
        </div>

        <h4>RAID 6 - Dual Parity</h4>
        <p>
          <strong>Enhanced reliability.</strong> Uses dual parity for protection against two simultaneous drive failures.
        </p>
        <ul>
          <li>✅ Can survive two drive failures</li>
          <li>✅ Higher fault tolerance</li>
          <li>❌ Requires minimum 4 drives</li>
          <li>❌ More complex parity calculations</li>
          <li><strong>Best for:</strong> Enterprise storage, critical databases</li>
        </ul>
        <div className="border-4 border-indigo-500 bg-indigo-50 p-4 rounded-lg mt-2">
          <p className="text-indigo-800">🛡️🛡️ Double protection shields - even if two guards fail, your data is still safe!</p>
        </div>

        <h4>RAID 10 (1+0) - Mirroring + Striping</h4>
        <p>
          <strong>Best of both worlds.</strong> Combines RAID 1 mirroring with RAID 0 striping for speed and safety.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid10.png" alt="RAID 10" className="rounded-lg shadow-lg max-w-md" />
        </div>
        <ul>
          <li>✅ High speed and redundancy</li>
          <li>✅ Fast recovery from failures</li>
          <li>❌ Only 50% storage efficiency</li>
          <li>❌ Requires minimum 4 drives</li>
          <li><strong>Best for:</strong> High-performance databases, financial systems</li>
        </ul>
        <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg mt-2">
          <p className="text-purple-800">🏀👯♂️ Like a basketball team where each player has a twin - fast gameplay with perfect backup!</p>
        </div>
      </section>

      <section className="content-section">
        <h3>RAID Comparison Chart</h3>
        <table className="w-full border-collapse border-2 border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">RAID Level</th>
              <th className="border-2 border-gray-400 p-3">Speed</th>
              <th className="border-2 border-gray-400 p-3">Fault Tolerance</th>
              <th className="border-2 border-gray-400 p-3">Storage Efficiency</th>
              <th className="border-2 border-gray-400 p-3">Min Drives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">RAID 0</td>
              <td className="border-2 border-gray-400 p-3 text-green-600 font-bold">High</td>
              <td className="border-2 border-gray-400 p-3 text-red-600 font-bold">None</td>
              <td className="border-2 border-gray-400 p-3 text-green-600 font-bold">100%</td>
              <td className="border-2 border-gray-400 p-3">2</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">RAID 1</td>
              <td className="border-2 border-gray-400 p-3 text-yellow-600 font-bold">Medium</td>
              <td className="border-2 border-gray-400 p-3 text-green-600 font-bold">High</td>
              <td className="border-2 border-gray-400 p-3 text-red-600 font-bold">50%</td>
              <td className="border-2 border-gray-400 p-3">2</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">RAID 5</td>
              <td className="border-2 border-gray-400 p-3 text-yellow-600 font-bold">Medium</td>
              <td className="border-2 border-gray-400 p-3 text-yellow-600 font-bold">Medium</td>
              <td className="border-2 border-gray-400 p-3 text-yellow-600 font-bold">67-94%</td>
              <td className="border-2 border-gray-400 p-3">3</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">RAID 6</td>
              <td className="border-2 border-gray-400 p-3 text-yellow-600 font-bold">Medium</td>
              <td className="border-2 border-gray-400 p-3 text-green-600 font-bold">High</td>
              <td className="border-2 border-gray-400 p-3 text-yellow-600 font-bold">50-88%</td>
              <td className="border-2 border-gray-400 p-3">4</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">RAID 10</td>
              <td className="border-2 border-gray-400 p-3 text-green-600 font-bold">High</td>
              <td className="border-2 border-gray-400 p-3 text-green-600 font-bold">High</td>
              <td className="border-2 border-gray-400 p-3 text-red-600 font-bold">50%</td>
              <td className="border-2 border-gray-400 p-3">4</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h3>Key Takeaways</h3>
        <ul>
          <li><strong>RAID 0:</strong> Maximum speed, zero protection - perfect for temporary high-performance needs</li>
          <li><strong>RAID 1:</strong> Maximum protection, moderate speed - ideal for critical data</li>
          <li><strong>RAID 5:</strong> Balanced approach with parity protection - great for general server use</li>
          <li><strong>RAID 6:</strong> Enhanced protection with dual parity - enterprise-grade reliability</li>
          <li><strong>RAID 10:</strong> Best performance and protection combined - premium solution</li>
        </ul>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg mt-4">
          <p className="font-semibold text-green-800">Remember:</p>
          <p className="text-green-700">
            RAID is not a backup solution! It protects against hardware failure but not against data corruption, accidental deletion, or disasters.
          </p>
        </div>
        <br />
        <iframe width="407" height="360" src="https://www.youtube.com/embed/MZfRxjEGRj4" title="What is a RAID Array, RAID 0, 1, 5, 10. Advantages and Disadvantages of RAID 0. 1. 5 10" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </section>

      <section className="content-section">
        <h3>Bonus Content</h3>
        <p className="text-sm text-gray-600 mb-2">This part is optional and you can skip it if you want.</p>
        <ul>
          <li>
            <a href="https://www.ibm.com/topics/raid" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              RAID storage technology | IBM
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/raid-redundant-arrays-of-independent-disks/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              RAID - Redundant Arrays of Independent Disks | GeeksforGeeks
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Great Job" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">Great job mastering RAID!</p>
      </section>
    </div>
  );
};

export default Module5_7;