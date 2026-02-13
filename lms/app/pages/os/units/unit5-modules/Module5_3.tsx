'use client';
import React, { useState, useEffect } from 'react';

const FileSystemFlowAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { name: 'File System Structure', color: 'blue' },
    { name: 'File Allocation', color: 'green' },
    { name: 'Data Retrieval', color: 'purple' },
    { name: 'Security & Permissions', color: 'orange' },
    { name: 'Recovery & Fault Tolerance', color: 'red' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 5), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-gray-500 bg-gray-50 p-6 rounded-lg">
      <div className="flex flex-wrap justify-center gap-4">
        {steps.map((item, i) => (
          <div key={i} className={`w-40 h-24 flex items-center justify-center rounded-lg font-bold text-white text-center transition-all ${
            step === i ? `bg-${item.color}-600 scale-110` : `bg-${item.color}-400`
          }`}>
            {item.name}
          </div>
        ))}
      </div>
      <p className="text-center mt-4 font-semibold text-gray-700">Current: {steps[step].name}</p>
    </div>
  );
};

const LinearListAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const files = ['file1.txt', 'file2.doc', 'file3.pdf', 'file4.jpg'];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 4), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-blue-800">Linear List Directory</div>
      <div className="flex justify-center items-center gap-2">
        {files.map((file, i) => (
          <React.Fragment key={i}>
            <div className={`w-32 h-16 flex items-center justify-center rounded font-bold text-white ${
              active === i ? 'bg-blue-600' : 'bg-blue-400'
            }`}>
              {file}
            </div>
            {i < files.length - 1 && <div className="text-2xl">→</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const HashTableAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const entries = [
    { key: 'hash(file1)', value: 'file1.txt' },
    { key: 'hash(file2)', value: 'file2.doc' },
    { key: 'hash(file3)', value: 'file3.pdf' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 3), 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-green-500 bg-green-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-green-800">Hash Table Directory</div>
      <div className="flex justify-center gap-4">
        {entries.map((entry, i) => (
          <div key={i} className={`p-4 rounded-lg font-bold text-white transition-all ${
            active === i ? 'bg-green-600 scale-110' : 'bg-green-400'
          }`}>
            <div className="text-sm">{entry.key}</div>
            <div className="text-xl mt-2">↓</div>
            <div>{entry.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Module5_3: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.3</div>
        <div className="lesson-title-main">
          <h1>File System Implementations</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Under the Hood</h3>
        <p>
          In this lesson, you will be learning how to implement file systems, understand how they store and manage files efficiently. We'll explore on-disk and in-memory data structures and how directories are implemented. Understanding these concepts ensures better storage management and system performance.
        </p>
        <p>Let's dive in!</p>
      </section>

      <section className="content-section">
        <h3>File System Implementations</h3>
        <p>
          File system implementation defines how files and directories are physically and logically stored, how disk space is allocated, and how the operating system ensures efficient and reliable access to data. Essentially, it's the bridge between user operations (like opening a file) and the physical storage device.
        </p>
        <p>
          A robust implementation ensures that data is safe, efficiently stored, quickly accessible, and that the system can recover from errors.
        </p>
        <p>Let's get started with the key components of a file system.</p>
      </section>

      <section className="content-section">
        <h3>1. Key Components of File System Implementation</h3>
        
        <h4>1.1 File System Structure</h4>
        <p>The file system structure determines how files and directories are organized on disk and in memory.</p>
        <ul>
          <li>Organizes data into blocks or clusters on disk.</li>
          <li>Uses hierarchical structures (directories, subdirectories) for efficient navigation.</li>
          <li>Example: UNIX uses inodes to represent file metadata; NTFS uses Master File Table (MFT).</li>
        </ul>

        <h4>1.2 File Allocation</h4>
        <p>File allocation defines where the file's data will be physically stored on the disk. Different methods affect performance, fragmentation, and ease of access:</p>
        <ul>
          <li><strong>Contiguous Allocation:</strong> File occupies consecutive blocks.
            <ul>
              <li>Fast access but prone to fragmentation.</li>
            </ul>
          </li>
          <li><strong>Linked Allocation:</strong> File blocks are linked via pointers.
            <ul>
              <li>No external fragmentation, but random access is slower.</li>
            </ul>
          </li>
          <li><strong>Indexed Allocation:</strong> Index block contains pointers to all file blocks.
            <ul>
              <li>Efficient for both sequential and random access.</li>
            </ul>
          </li>
        </ul>

        <h4>1.3 Data Retrieval</h4>
        <p>How the system reads and writes data:</p>
        <ul>
          <li>File system maintains metadata to locate data blocks.</li>
          <li>Uses buffering and caching to improve read/write speed.</li>
          <li>Optimized access methods like read-ahead for sequential reads.</li>
        </ul>

        <h4>1.4 Security and Permissions</h4>
        <p>Security ensures only authorized users or processes can access files:</p>
        <ul>
          <li><strong>File permissions:</strong> Read, write, execute.</li>
          <li><strong>Access Control Lists (ACLs):</strong> More granular control per file.</li>
          <li><strong>Ownership:</strong> Each file has a user and group owner.</li>
          <li><strong>Encryption:</strong> Protect sensitive files from unauthorized access.</li>
        </ul>

        <h4>1.5 Recovery and Fault Tolerance</h4>
        <p>File system must be resilient against crashes or data corruption:</p>
        <ul>
          <li><strong>Journaling File Systems:</strong> Record operations in a log before writing to disk. (Example: ext3/ext4, NTFS)</li>
          <li><strong>Backup & Restore:</strong> Automatic snapshots to restore previous states.</li>
          <li><strong>Consistency Checks:</strong> fsck (UNIX/Linux) or chkdsk (Windows) to detect and repair errors.</li>
        </ul>
        <p>
          (<a href="https://www.geeksforgeeks.org/file-system-implementation-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Read the contents of this site</a> to understand file system implementations in detail.)
        </p>
      </section>

      <section className="content-section">
        <h3>Advantages of File System Implementation</h3>
        <ul>
          <li>Organized storage and retrieval of files</li>
          <li>Efficient disk space utilization</li>
          <li>Improved system performance with caching and in-memory structures</li>
          <li>Better security via permissions & access control</li>
          <li>Support for recovery and fault tolerance</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Disadvantages of File System Implementation</h3>
        <ul>
          <li>Complexity in implementation and maintenance</li>
          <li>Potential overhead from metadata storage</li>
          <li>Vulnerable to corruption and security threats</li>
          <li>Performance drops in large directories with linear search</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Real-World File Systems</h3>
        <ul>
          <li><strong>Windows:</strong> NTFS</li>
          <li><strong>Linux:</strong> ext4, ext3</li>
          <li><strong>macOS:</strong> APFS, HFS+</li>
          <li><strong>USB Drives:</strong> FAT32, exFAT</li>
          <li><strong>Enterprise storage:</strong> ZFS, XFS</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Key Steps Involved in File System Implementation</h3>
        <p>File system implementation is a crucial component of an operating system, as it provides an interface between the user and the physical storage device. Here are the key steps involved in file system implementation:</p>
        
        <ol>
          <li><strong>Partitioning The Storage Device:</strong> The first step in file system implementation is to partition the physical storage device into one or more logical partitions. Each partition is formatted with a specific file system that defines the way files and directories are organized and stored.</li>
          
          <li><strong>File System Structures:</strong> File system structures are the data structures used by the operating system to manage files and directories. Some of the key file system structures include the superblock, inode table, directory structure, and file allocation table.</li>
          
          <li><strong>Allocation of Storage Space:</strong> The file system must allocate storage space for each file and directory on the storage device. There are several methods for allocating storage space, including contiguous, linked, and indexed allocation.</li>
          
          <li><strong>File Operations:</strong> The file system provides a set of operations that can be performed on files and directories, including create, delete, read, write, open, close, and seek. These operations are implemented using the file system structures and the storage allocation methods.</li>
          
          <li><strong>File System Security:</strong> The file system must provide security mechanisms to protect files and directories from unauthorized access or modification. This can be done by setting file permissions, access control lists, or encryption.</li>
          
          <li><strong>File System Maintenance:</strong> The file system must be maintained to ensure efficient and reliable operation. This includes tasks such as disk defragmentation, disk checking, and backup and recovery. Overall, file system implementation is a complex and critical component of an operating system.</li>
        </ol>
      </section>

      <section className="content-section">
        <h3>File System Implementation Flow</h3>
        <FileSystemFlowAnimation />
      </section>

      <section className="content-section">
        <h3>Major Ways of Implementing File Systems</h3>
        <p>There are some major ways of implementing file systems:</p>
        <ul>
          <li>On Disk Data Structures</li>
          <li>In Memory Data Structure</li>
        </ul>
        <p>Let's explore each one of them.</p>
      </section>

      <section className="content-section">
        <h3>On Disk Data Structures</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <p>
            Think of on-disk data structures like the blueprint of a building—they define how files are stored, organized, and accessed on a storage device, ensuring everything is in the right place for quick retrieval and efficient management.
          </p>
        </div>
        <p>There are various on disk data structures that are used to implement a file system. This structure may vary depending upon the operating system.</p>
        
        <h4>Boot Control Block</h4>
        <p>Contains all the information which is needed to boot an operating system from that volume. It is called the boot block in the UNIX file system. In NTFS, it is called the partition boot sector.</p>

        <h4>Volume Control Block</h4>
        <p>Volume control blocks all the information regarding that volume such as number of blocks, size of each block, partition table, pointers to free blocks and free FCB blocks. In the UNIX file system, it is known as a super block. In NTFS, this information is stored inside the master file table.</p>

        <h4>Directory Structure</h4>
        <p>A directory structure (per file system) contains file names and pointers to corresponding FCBs. In UNIX, it includes inode numbers associated with file names.</p>

        <h4>File Control Block</h4>
        <p>The File Control block contains all the details about the file such as ownership details, permission details, file size, etc. In UFS, this detail is stored in inode (An inode is a data structure that keeps track of all the files and directories within a Linux or UNIX-based filesystem). In NTFS, this information is stored inside the master file table as a relational database structure. A typical file control block is shown in the image below.</p>
      </section>

      <section className="content-section">
        <h3>In Memory Data Structures</h3>
        <p>Here, we will discuss the data structures required to be present in memory in order to implement the file system. The in-memory data structures are used for file system management as well as performance improvement via caching. This information is loaded on the mount time and discarded on ejection.</p>
        
        <h4>In-memory Mount Table</h4>
        <p>In-memory mount table contains the list of all the devices which are being mounted to the system. Whenever the connection is maintained to a device, its entry will be done in the mount table.</p>

        <h4>In-memory Directory structure cache</h4>
        <p>This is the list of directories which are recently accessed by the CPU. The directories present in the list can also be accessed in the near future so it will be better to store them temporarily in cache.</p>

        <h4>System-wide open file table</h4>
        <p>This is the list of all the open files in the system at a particular time. Whenever the user opens any file for reading or writing, the entry will be made in this open file table.</p>

        <h4>Per process Open file table</h4>
        <p>It is the list of open files subjected to every process. Since there is already a list which is there for every open file in the system therefore, it only contains pointers to the appropriate entry in the system wide table.</p>
      </section>

      <section className="content-section">
        <h3>Directory Implementation</h3>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg mb-4">
          <p>
            Think of directory implementation like a library's catalog system—it keeps track of book titles, their locations, and additional details to help you quickly find and access what you need.
          </p>
        </div>
        <p>
          There is the number of algorithms by which the directories can be implemented. However, the selection of an appropriate directory implementation algorithm may significantly affect the performance of the system.
        </p>
        <p>
          The directory implementation algorithms are classified according to the data structure they are using. There are mainly two algorithms which are used these days. They are Linear List and Hash Table.
        </p>
      </section>

      <section className="content-section">
        <h3>Linear List</h3>
        <p>In this algorithm, all the files in a directory are maintained as a singly linked list. Each file contains the pointers to the data blocks which are assigned to it and the next file in the directory.</p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_files5.png" alt="Linear List" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <LinearListAnimation />
        <ul className="mt-4">
          <li>When a new file is created, then the entire list is checked whether the new file name is matching to an existing file name or not. In case, it doesn't exist, the file can be created at the beginning or at the end. Therefore, searching for a unique name is a big concern because traversing the whole list takes time.</li>
          <li>The list needs to be traversed in case of every operation (creation, deletion, updating, etc) on the files therefore the systems become inefficient.</li>
        </ul>
        <p className="mt-2">To overcome the drawbacks of singly linked list implementation of directories, there is an alternative approach that is hash table.</p>
      </section>

      <section className="content-section">
        <h3>Hash Table</h3>
        <p>This approach suggests using a hash table along with the linked lists. A key-value pair for each file in the directory gets generated and stored in the hash table. The key can be determined by applying the hash function on the file name while the key points to the corresponding file stored in the directory.</p>
        <p>
          Now, searching becomes efficient due to the fact that now, the entire list will not be searched on every operation. Only hash table entries are checked using the key and if an entry is found then the corresponding file will be fetched using the value.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_files6.png" alt="Hash Table" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <HashTableAnimation />
        <p className="text-sm text-gray-600 mt-4">
          The image illustrates a hash table-based directory implementation in a file system. File names are hashed into keys, which are stored in a hash table alongside their corresponding values (pointers to metadata or file locations). Each file entry contains pointers to data blocks that store the actual file content.
        </p>
      </section>

      <section className="content-section">
        <h3>Bonus Content</h3>
        <p className="text-sm text-gray-600 mb-2">This part is optional and you can skip it if you want.</p>
        <ul>
          <li>
            <a href="https://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#fileSystemImplementation" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              File system implementation | Yale University
            </a>
          </li>
          <li>
            <a href="https://www.javatpoint.com/os-on-disk-data-structures" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              On disk Data structures | javatpoint
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7absbD7PbTFQa0c8/giphy.gif" alt="Great" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">Great! That wraps up the lesson on file system implementation.</p>
      </section>
    </div>
  );
};

export default Module5_3;
