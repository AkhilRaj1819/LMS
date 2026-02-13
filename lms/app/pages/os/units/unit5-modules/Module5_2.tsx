'use client';
import React, { useState, useEffect } from 'react';

const FileSystemLayersAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const layers = [
    { name: 'Application Programs', color: 'red' },
    { name: 'Logical File System', color: 'orange' },
    { name: 'File Organization Module', color: 'yellow' },
    { name: 'Basic File System', color: 'green' },
    { name: 'I/O Control', color: 'blue' },
    { name: 'Devices', color: 'purple' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 6), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-gray-500 bg-gray-50 p-6 rounded-lg">
      <div className="flex flex-col gap-2">
        {layers.map((layer, i) => (
          <div key={i} className={`p-4 rounded-lg font-bold text-white text-center transition-all ${
            active === i ? `bg-${layer.color}-600 scale-105` : `bg-${layer.color}-400`
          }`}>
            {layer.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const FileTypeAnimation: React.FC = () => {
  const [type, setType] = useState(0);
  const types = [
    { name: 'Regular Files', icon: '📄', color: 'blue' },
    { name: 'Directories', icon: '📁', color: 'green' },
    { name: 'Character Special', icon: '⌨️', color: 'orange' },
    { name: 'Block Special', icon: '💾', color: 'purple' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setType(t => (t + 1) % 4), 2000);
    return () => clearInterval(timer);
  }, []);

  const current = types[type];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-8 rounded-lg`}>
      <div className="text-center">
        <div className="text-6xl mb-4">{current.icon}</div>
        <div className={`text-2xl font-bold text-${current.color}-800`}>{current.name}</div>
      </div>
    </div>
  );
};

const Module5_2: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.2</div>
        <div className="lesson-title-main">
          <h1>File Systems</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Not Just Folders</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-center font-semibold text-blue-800">
            How does your computer know where every file lives, how to retrieve it, and how to keep it safe from corruption?
          </p>
          <p className="text-center mt-2 text-blue-700">That's the job of the file system.</p>
        </div>
        <p>
          It decides how data is stored, how files are organized, how permissions work, and how the OS retrieves data efficiently without losing or corrupting it.
        </p>
      </section>

      <section className="content-section">
        <h3>File Systems</h3>
        <p>
          A file system in OS dictates how the contents of a storage medium are stored and organized. These storage media (such as secondary memory, external drives, etc) could be computer secondary memory, flash memory, etc.
        </p>
        <p>
          A file system is a method an operating system uses to store, organize, and manage files and directories on a storage device. The filesystem also stores data related to files, such as their name, extension, permissions, etc.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/file+systems+.png" alt="File System" className="rounded-lg shadow-lg max-w-2xl" />
        </div>
      </section>

      <section className="content-section">
        <h3>Advantages of Using a File System</h3>
        <ul>
          <li><strong>Organization:</strong> A file system allows files to be organized into directories and subdirectories, making it easier to manage and locate files.</li>
          <li><strong>Data protection:</strong> File systems often include features such as file and folder permissions, backup and restore, and error detection and correction, to protect data from loss or corruption.</li>
          <li><strong>Improved performance:</strong> A well-designed file system can improve the performance of reading and writing data by organizing it efficiently on disk.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Disadvantages of Using a File System</h3>
        <ul>
          <li><strong>Compatibility issues:</strong> Different file systems may not be compatible with each other, making it difficult to transfer data between different operating systems.</li>
          <li><strong>Disk space overhead:</strong> File systems may use some disk space to store metadata and other overhead information, reducing the amount of space available for user data.</li>
          <li><strong>Vulnerability:</strong> File systems can be vulnerable to data corruption, malware, and other security threats, which can compromise the stability and security of the system.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Common Types of File Systems</h3>
        <ul>
          <li><strong>FAT (File Allocation Table):</strong> An older file system used by older versions of Windows and other operating systems.</li>
          <li><strong>NTFS (New Technology File System):</strong> A modern file system used by Windows. It supports features such as file and folder permissions, compression, and encryption.</li>
          <li><strong>ext (Extended File System):</strong> A file system commonly used on Linux and Unix-based operating systems.</li>
          <li><strong>HFS (Hierarchical File System):</strong> A file system used by macOS.</li>
          <li><strong>APFS (Apple File System):</strong> A new file system introduced by Apple for their Macs and iOS devices.</li>
        </ul>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg mt-4">
          <p className="font-semibold text-green-800 mb-2">Check this out</p>
        </div>
      </section>

      <section className="content-section">
        <h3>File System Structure</h3>
        <p>
          A file is a logical unit of information. They are produced by processes when they issue a system call to the operating system. The operating system manages files.
        </p>
        <p>
          While creating a file, a name is assigned to it. After this process has terminated, the file exists and remains accessible to other processes. The name of a file has two parts, separated by a dot. Example, <strong>code.cpp</strong> is a c++ program file with name <strong>code</strong> and extension <strong>cpp</strong>. The name of the file before the dot is a label for the file's identification, while the part after the dot is called the file extension which indicates the type of the file.
        </p>
        <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg my-4">
          <p className="font-semibold text-purple-800">Did you know?</p>
          <p className="text-purple-700">
            APFS (Apple File System) can clone files instantly without actually copying the data. It just creates a reference until changes are made!
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Layers of File System</h3>
        <p>
          A file system in an operating system is organized into multiple layers, each responsible for different aspects of file management and storage. Here are the key layers in a typical file system:
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files13.png" alt="File System Layers" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <FileSystemLayersAnimation />

        <h4>Application Programs</h4>
        <p>
          This is the topmost layer where users interact with files through applications. It provides the user interface for file operations like creating, deleting, reading, writing, and modifying files. Examples include text editors, file browsers, and command-line interfaces.
        </p>

        <h4>Logical File System</h4>
        <p>
          It manages metadata information about a file i.e includes all details about a file except the actual contents of the file. It also maintains via file control blocks. File control block (FCB) has information about a file – owner, size, permissions, and location of file contents.
        </p>

        <h4>File Organization Module</h4>
        <p>
          It has information about files, the location of files and their logical and physical blocks. Physical blocks do not match with logical numbers of logical blocks numbered from 0 to N. It also has a free space that tracks unallocated blocks.
        </p>

        <h4>Basic File System</h4>
        <p>
          It issues general commands to the device driver to read and write physical blocks on disk. It manages the memory buffers and caches. A block in the buffer can hold the contents of the disk block and the cache stores frequently used file system metadata.
        </p>

        <h4>I/O Control Level</h4>
        <p>
          Device drivers act as an interface between devices and OS, they help to transfer data between disk and main memory. It takes block number as input and as output, it gives low-level hardware-specific instruction.
        </p>

        <h4>Devices Layer</h4>
        <p>
          The bottommost layer, consisting of the actual hardware devices. It performs the actual reading and writing of data to the physical storage medium. This includes hard drives, SSDs, optical disks, and other storage devices.
        </p>
      </section>

      <section className="content-section">
        <h3>File Types in an OS</h3>
        <p>
          There are numerous file types that an operating system uses internally and are not generally used or required by the system user. These files could be application software files, kernel files, configuration files, metadata files, etc.
        </p>
        <FileTypeAnimation />

        <h4>Regular Files</h4>
        <ul>
          <li>Regular files consist of information related to the user. The files are usually either ASCII or binary.</li>
          <li>The major benefit of an ASCII file is that it can be displayed or printed as it is, and it can be edited using a text editor.</li>
          <li>Regular files are supported by both Windows as well as UNIX-based operating systems.</li>
          <li>Binary files (also a type of regular file) on printing may give some random junk content. Usually, a binary file would have some sort of internal structure that is only known to the program that uses it.</li>
          <li>A binary file is a sequence of bytes, which if is in the proper format, can be executed by the operating system.</li>
        </ul>

        <h4>Directories</h4>
        <ul>
          <li>A directory in the filesystem is a structure that contains references to other files and possibly other directories.</li>
          <li>Files could be arranged by storing related files in the same directory.</li>
          <li>Directories are supported by both Windows as well as UNIX-based operating systems.</li>
        </ul>

        <h4>Character Special Files</h4>
        <ul>
          <li>A character special file provides access to an I/O device. Examples include a terminal file, a system console file, a NULL file, a file descriptor file, etc.</li>
          <li>Each character special file has a device major number and a device minor number.</li>
          <li>The device major number identifies the device type.</li>
          <li>The device minor number identifies a specific device of a given device type.</li>
          <li>Character special files are supported by UNIX-based operating systems.</li>
        </ul>

        <h4>Block Special Files</h4>
        <ul>
          <li>Block special files enable buffered access to hardware devices. They also provide some abstraction from their specifics.</li>
          <li>Unlike character special files, block special files always allow the programmer to read and write a block of any size or alignment.</li>
          <li>Block special files are supported by UNIX-based operating systems.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Commonly Used Terms in File Systems</h3>
        
        <h4>File</h4>
        <p>A file is a logical unit of information created by processes that processes produce.</p>

        <h4>Directory</h4>
        <p>A location on the storage that stores several files within itself.</p>

        <h4>Partition</h4>
        <p>A part of the storage medium is virtually separate from the rest of the storage.</p>

        <h4>Access Mechanism</h4>
        <p>The process is followed by the OS to grant a user/process access to a file.</p>

        <h4>File Extension</h4>
        <p>A label appended to the name of a file after a dot. Gives information of the purpose of and information in the file.</p>
      </section>

      <section className="content-section">
        <h3>Real-World Examples</h3>
        <table className="w-full border-collapse border-2 border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Operating System</th>
              <th className="border-2 border-gray-400 p-3">File System</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-400 p-3">Windows</td>
              <td className="border-2 border-gray-400 p-3">NTFS</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3">Linux</td>
              <td className="border-2 border-gray-400 p-3">ext4</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3">macOS</td>
              <td className="border-2 border-gray-400 p-3">APFS, HFS+</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3">USB Drives</td>
              <td className="border-2 border-gray-400 p-3">FAT32, exFAT</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="content-section">
        <h3>Bonus Content</h3>
        <p className="text-sm text-gray-600 mb-2">This part is optional and you can skip it if you want.</p>
        <ul>
          <li>
            <a href="https://www.ibm.com/topics/file-systems" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              File systems | IBM
            </a>
          </li>
          <li>
            <a href="https://web.stanford.edu/~ouster/cgi-bin/cs140-spring14/lecture.php?topic=file" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Introduction to File systems | Stanford University
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif" alt="That's a wrap" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">That's a wrap for this lesson!</p>
      </section>
    </div>
  );
};

export default Module5_2;
