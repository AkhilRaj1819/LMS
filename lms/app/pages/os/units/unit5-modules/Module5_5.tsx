'use client';
import React, { useState, useEffect } from 'react';

const DataMovementAnimation: React.FC = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 3), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-blue-800">Data Distribution Across Disks</div>
      <div className="flex justify-center gap-4">
        {[1, 2, 3].map(disk => (
          <div key={disk} className="flex flex-col items-center">
            <div className={`w-24 h-32 flex items-center justify-center rounded-lg font-bold text-white transition-all ${
              step === disk - 1 ? 'bg-blue-600 scale-110' : 'bg-blue-400'
            }`}>
              Disk {disk}
            </div>
            <div className="text-sm mt-2 text-blue-700">Disk {disk}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RAID0Animation: React.FC = () => {
  const [block, setBlock] = useState(0);
  const blocks = ['A', 'B', 'C', 'D'];

  useEffect(() => {
    const timer = setInterval(() => setBlock(b => (b + 1) % 4), 1200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-red-500 bg-red-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-red-800">RAID 0 - Striping</div>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-center font-semibold text-sm">Disk 1</div>
          <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
            block === 0 ? 'bg-red-600' : 'bg-red-400'
          }`}>A</div>
          <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
            block === 2 ? 'bg-red-600' : 'bg-red-400'
          }`}>C</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-center font-semibold text-sm">Disk 2</div>
          <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
            block === 1 ? 'bg-red-600' : 'bg-red-400'
          }`}>B</div>
          <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
            block === 3 ? 'bg-red-600' : 'bg-red-400'
          }`}>D</div>
        </div>
      </div>
      <p className="text-center mt-3 text-sm text-red-700">Fast but no backup</p>
    </div>
  );
};

const RAID1Animation: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 2), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-green-500 bg-green-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-green-800">RAID 1 - Mirroring</div>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-center font-semibold text-sm">Disk 1</div>
          <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
            active === 0 ? 'bg-green-600' : 'bg-green-400'
          }`}>A</div>
          <div className="w-16 h-16 flex items-center justify-center rounded font-bold text-white bg-green-400">B</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-center font-semibold text-sm">Disk 2 (Mirror)</div>
          <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
            active === 1 ? 'bg-green-600' : 'bg-green-400'
          }`}>A</div>
          <div className="w-16 h-16 flex items-center justify-center rounded font-bold text-white bg-green-400">B</div>
        </div>
      </div>
      <p className="text-center mt-3 text-sm text-green-700">Exact copy for safety</p>
    </div>
  );
};

const RAID5Animation: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 3), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-purple-500 bg-purple-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-purple-800">RAID 5 - Striping with Parity</div>
      <div className="flex justify-center gap-4">
        {[1, 2, 3].map(disk => (
          <div key={disk} className="flex flex-col gap-2">
            <div className="text-center font-semibold text-sm">Disk {disk}</div>
            <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white ${
              active === disk - 1 ? 'bg-purple-600' : 'bg-purple-400'
            }`}>
              {disk === 1 ? 'A' : disk === 2 ? 'B' : 'P'}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-3 text-sm text-purple-700">Speed + Parity protection</p>
    </div>
  );
};

const Module5_5: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.5</div>
        <div className="lesson-title-main">
          <h1>RAID</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Multiple Lanes for Data</h3>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid00.png" alt="Traffic" className="rounded-lg shadow-lg max-w-md" />
        </div>
        <p>
          Picture a single-lane road jammed with traffic. Now, add multiple lanes, and suddenly, cars move faster. RAID does the same thing for data, spreading it across multiple drives to speed up access and prevent bottlenecks!
        </p>
        <p>
          Now, think about how this idea applies to the digital world, where massive amounts of information need to move quickly and stay safe at the same time. How do we ensure things run smoothly without delays or disasters? Let's find out!
        </p>
      </section>

      <section className="content-section">
        <h3>Need for RAID</h3>
        <p>
          In today's world, data is everywhere from social media and online banking to streaming services and medical records. But storing and accessing all this data efficiently is a huge challenge.
        </p>
        <p>
          Imagine if every time you wanted to watch a movie online, it took forever to load or, even worse, if the movie disappeared because of a system failure.
        </p>
        <p>
          Businesses, hospitals, and cloud services face similar problems data needs to be stored safely, accessed quickly, and recovered easily if something goes wrong. This is where we need a smarter way to manage storage. And that's where RAID comes in!
        </p>
      </section>

      <section className="content-section">
        <h3>What is RAID and How Does It Work?</h3>
        <p>
          RAID stands for <strong>Redundant Array of Independent Disks</strong>. It is a storage technique that combines multiple hard drives into a single system to improve performance, reliability, or both. Instead of relying on just one hard drive, RAID spreads data across multiple drives in a way that makes storage faster, safer, or both, depending on the RAID level used.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid1a.png" alt="RAID" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg my-4">
          <p className="font-semibold text-orange-800 mb-2">Restaurant Kitchen Analogy</p>
          <p className="text-orange-700">
            Think of a restaurant kitchen where only one chef is cooking all the dishes. It takes a long time, and if the chef makes a mistake, the entire order is ruined.
          </p>
          <p className="text-orange-700 mt-2">Now, imagine a team of chefs working together:</p>
          <ul className="text-orange-700 mt-2">
            <li>Some share the cooking tasks to prepare meals faster (speed).</li>
            <li>Some chefs make backup copies of recipes, so if one forgets, others can continue cooking without losing orders (data protection).</li>
            <li>The restaurant has a system in place to ensure that even if one chef leaves, the others can rebuild the missing steps and complete the meal (recovery).</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <h3>How RAID Works</h3>
        <ul>
          <li>When a file is saved, RAID decides how to store it across multiple drives based on the configuration.</li>
          <li>If one drive fails, RAID can either rebuild the missing data or continue operating without interruption, depending on how it was set up.</li>
          <li>RAID can be managed by either software (handled by the operating system) or hardware (using a separate RAID controller).</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Visualizing How RAID Moves Data</h3>
        <p>Watch how data blocks move across multiple disks just like RAID distributes, mirrors, or protects your data!</p>
        <DataMovementAnimation />
      </section>

      <section className="content-section">
        <h3>What is a RAID Controller?</h3>
        <p>
          A RAID controller is a hardware or software component that manages how data is stored and retrieved in a RAID system. It acts as the "brain" of RAID, coordinating how multiple drives work together to improve performance, redundancy, or both.
        </p>
        
        <h4>How a RAID Controller Works?</h4>
        <ul>
          <li>When you save or open a file, the RAID controller decides where and how the data is stored across multiple drives.</li>
          <li>If a drive fails, it helps the system recover the missing data (depending on the RAID setup).</li>
          <li>It can be built into the computer's software or exist as a separate hardware device that manages the process more efficiently.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>TYPES OF RAID</h3>
        <p>
          RAID has different levels, each designed for a specific balance of speed, data protection, or both and these types are classified based on performance improvement, redundancy, fault tolerance and storage efficiency.
        </p>
        <p>
          While there are multiple RAID levels, the most commonly used ones are <strong>RAID 0, RAID 1, RAID 5, RAID 6, and RAID 10</strong>. These configurations are widely adopted as they provide a balance of speed, redundancy, and fault tolerance, catering to different storage requirements.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid12.png" alt="RAID Types" className="rounded-lg shadow-lg max-w-2xl" />
        </div>
        <p>Now that we understand RAID, let's explore its types and see how they handle speed and data protection!</p>
      </section>

      <section className="content-section">
        <h3>RAID 0</h3>
        <p>
          RAID 0 is the most basic type of RAID, designed purely to enhance speed and performance without any data protection features. RAID 0 is often referred to as <strong>striping</strong> because it breaks data into strips and spreads them across the drives. However, RAID 0 does not provide any redundancy or backup—if even one drive in the array fails, all stored data is lost.
        </p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid0.png" alt="" />
        
        <h4>How does RAID 0 work?</h4>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg my-4">
          <p className="text-blue-800">
            Imagine a book being copied by two typists instead of one. Each typist writes alternate pages at the same time, finishing the job twice as fast. But if one typist loses their pages, you lose half the book—just like losing data in RAID 0 if a drive fails!
          </p>
        </div>
        <ul>
          <li>Data is split into smaller chunks (called "strips").</li>
          <li>These strips are spread across multiple drives in the RAID 0 array.</li>
          <li>Since multiple drives work at the same time, data is read and written much faster than using a single drive.</li>
          <li>No backups or redundancy—if even one drive fails, all data is lost.</li>
        </ul>
        <RAID0Animation />
        <p className="mt-4"><strong>Use case:</strong> Ideal for gaming, video editing, and temporary storage where speed is crucial but data loss is not a concern.</p>
      </section>

      <section className="content-section">
        <h3>RAID 1</h3>
        <p>
          RAID 1 is a storage configuration that creates exact copies (mirrors) of data on two or more drives, ensuring data redundancy and protection. It is commonly known as <strong>mirroring</strong> because each piece of data is duplicated across multiple drives, providing a safeguard against hardware failure.
        </p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid1.png" alt="" />
        
        <h4>How does RAID 1 work?</h4>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg my-4">
          <p className="text-green-800">
            Imagine you're writing an important diary, and you don't want to risk losing it. So, every time you write something, you immediately copy it into another diary (unless you are lazy). If one diary gets lost or damaged, you still have the other one with the same information. That's how RAID 1 works it keeps an identical copy of your data on another drive to ensure nothing is lost!
          </p>
        </div>
        <ul>
          <li>Data is duplicated (mirrored) onto two or more drives.</li>
          <li>Every write operation is performed on all drives simultaneously.</li>
          <li>Read speed can improve since data can be accessed from multiple drives.</li>
          <li>If one drive fails, the other contains an exact copy, preventing data loss.</li>
          <li>Storage capacity is reduced to half since all data is duplicated.</li>
        </ul>
        <RAID1Animation />
        <p className="mt-4"><strong>Use case:</strong> Best for storing critical data, operating system disks, and log files where data redundancy is more important than storage capacity.</p>
      </section>

      <section className="content-section">
        <h3>RAID 5</h3>
        <p>
          RAID 5 offers a balance between performance and data protection. It improves speed by distributing data across multiple drives while also ensuring fault tolerance. Unlike basic striping methods, RAID 5 uses <strong>parity</strong>, which allows the system to recover lost data in case of a drive failure.
        </p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid5.png" alt="" />
        
        <h4>What is parity information?</h4>
        <div className="border-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg my-4">
          <p className="text-yellow-800">
            Imagine you and two friends each have a school bag with books inside. Before class, you all count the total number of books and write it down on a note (parity information).
          </p>
          <ul className="text-yellow-800 mt-2">
            <li>You have 3 books 📚</li>
            <li>Friend 1 has 4 books 📚</li>
            <li>Friend 2 has 5 books 📚</li>
            <li>Total books written down: 12 (parity)</li>
          </ul>
          <p className="text-yellow-800 mt-2">
            Now, if one friend's bag goes missing, you can use the total (12) and the remaining books to figure out how many were lost and replace them.
          </p>
          <p className="text-yellow-800 mt-2">
            This is how RAID 5 parity works it helps recover lost data when a drive fails!
          </p>
        </div>

        <h4>How does RAID 5 work?</h4>
        <ul>
          <li>Data is split into chunks (striping) and spread across multiple drives.</li>
          <li>Parity information is also distributed across all drives instead of being stored on a single drive.</li>
          <li>When data is written, RAID 5 calculates parity and stores it on a different drive each time.</li>
          <li>If one drive fails, the system uses the remaining data and parity to rebuild the lost information.</li>
          <li>RAID 5 requires at least three drives to work and offers a good balance between speed, storage efficiency, and fault tolerance.</li>
        </ul>
        <RAID5Animation />
        <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg my-4">
          <p className="text-purple-800">
            Imagine a soccer team where each player knows a part of the game strategy. Instead of one person memorizing the entire plan, every player also keeps a small summary of another teammate's role.
          </p>
          <p className="text-purple-800 mt-2">
            Now, if one player gets injured and leaves the game, the team can rebuild the missing strategy using the summaries stored by the remaining players and keep playing without major issues.
          </p>
        </div>
        <p className="mt-4"><strong>Use case:</strong> Commonly used in servers, business applications, and general-purpose storage where a balance of speed, storage efficiency, and fault tolerance is needed.</p>
      </section>

      <section className="content-section">
        <h3>RAID 6</h3>
        <p>
          RAID 6 is like RAID 5 but with enhanced reliability. It uses <strong>dual parity</strong>, meaning it can handle two drive failures without losing data. Ideal for large storage systems, enterprise environments, and critical data protection.
        </p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid6.png" alt="" />
        
        <h4>How does RAID 6 work?</h4>
        <ul>
          <li>Data is striped across multiple drives, just like in RAID 5.</li>
          <li>Two separate parity blocks are created and distributed across different drives.</li>
          <li>If up to two drives fail, the missing data can be reconstructed using the dual parity information.</li>
          <li>Requires at least four drives, but the more drives added, the more efficient it becomes.</li>
        </ul>
        <p className="mt-4"><strong>Use case:</strong> Suitable for enterprise storage, large-scale databases, and mission-critical applications that require high fault tolerance and can't risk multiple drive failures.</p>
      </section>

      <section className="content-section">
        <h3>RAID 10 (1+0)</h3>
        <p>
          RAID 10 is a combination of RAID 1 (mirroring) and RAID 0 (striping) offering both speed and data redundancy. It is ideal for high-performance applications where data safety is crucial. However, due to mirroring, only half of the total storage capacity is usable.
        </p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_raid10.png" alt="" />
        
        <h4>How does RAID 10 work?</h4>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg my-4">
          <p className="text-blue-800 font-semibold">Basketball Team Analogy</p>
          <p className="text-blue-800 mt-2">
            Imagine a basketball team where each player has a twin who plays exactly like them.
          </p>
          <ul className="text-blue-800 mt-2">
            <li><strong>Mirroring (RAID 1):</strong> Every player has a backup (twin) who can step in if they get injured.</li>
            <li><strong>Striping (RAID 0):</strong> Instead of one player doing all the work, the team passes the ball quickly to score faster.</li>
          </ul>
          <p className="text-blue-800 mt-2">
            This means the team plays faster (better performance) and always has a backup (data redundancy) if something goes wrong.
          </p>
        </div>
        <ul>
          <li><strong>Mirroring (RAID 1)</strong> – Each piece of data is copied (mirrored) onto another drive for redundancy.</li>
          <li><strong>Striping (RAID 0)</strong> – The mirrored data is then split across multiple drives to improve speed.</li>
          <li>Requires at least 4 drives – Two for mirroring and two for striping.</li>
          <li>If a drive fails, data is safe because it exists on its mirrored pair.</li>
          <li>Faster read/write speeds since multiple drives handle the data simultaneously.</li>
          <li>Uses only 50% of total storage because half is used for mirroring.</li>
        </ul>
        <p className="mt-4"><strong>Use case:</strong> Perfect for high-performance databases, financial transactions, and applications that need both speed and strong redundancy, ensuring quick recovery from failures.</p>
      </section>

      <section className="content-section">
        <h3>RAID Levels Comparison</h3>
        <table className="w-full border-collapse border-2 border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">RAID Level</th>
              <th className="border-2 border-gray-400 p-3">Speed</th>
              <th className="border-2 border-gray-400 p-3">Fault Tolerance</th>
              <th className="border-2 border-gray-400 p-3">Min Drives</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">RAID 0</td>
              <td className="border-2 border-gray-400 p-3">Very Fast</td>
              <td className="border-2 border-gray-400 p-3">None</td>
              <td className="border-2 border-gray-400 p-3 text-center">2</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">RAID 1</td>
              <td className="border-2 border-gray-400 p-3">Moderate</td>
              <td className="border-2 border-gray-400 p-3">High (1 drive)</td>
              <td className="border-2 border-gray-400 p-3 text-center">2</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">RAID 5</td>
              <td className="border-2 border-gray-400 p-3">Fast</td>
              <td className="border-2 border-gray-400 p-3">Moderate (1 drive)</td>
              <td className="border-2 border-gray-400 p-3 text-center">3</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">RAID 6</td>
              <td className="border-2 border-gray-400 p-3">Moderate</td>
              <td className="border-2 border-gray-400 p-3">High (2 drives)</td>
              <td className="border-2 border-gray-400 p-3 text-center">4</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-semibold">RAID 10</td>
              <td className="border-2 border-gray-400 p-3">Very Fast</td>
              <td className="border-2 border-gray-400 p-3">High (1 drive per pair)</td>
              <td className="border-2 border-gray-400 p-3 text-center">4</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h3>Watch the Video</h3>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg">
          <p className="text-center">
            <iframe width="407" height="360" src="https://www.youtube.com/embed/MZfRxjEGRj4" title="What is a RAID Array, RAID 0, 1, 5, 10. Advantages and Disadvantages of RAID 0. 1. 5 10" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </p>
          <p className="text-sm text-center mt-2">Watch the provided video for a clearer understanding.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Great" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">That's it for RAID!</p>
      </section>
    </div>
  );
};

export default Module5_5;
