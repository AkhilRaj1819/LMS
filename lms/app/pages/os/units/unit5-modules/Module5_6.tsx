'use client';
import React, { useState } from 'react';

const Module5_6: React.FC = () => {
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.6</div>
        <div className="lesson-title-main">
          <h1>Free Space Management</h1>
        </div>
      </div>

      <section className="content-section">
        <h2>Welcome to the Lesson on Free Space Management!</h2>
        <p className="mb-3">Before we dive in, think of this:</p>
        <p className="text-lg font-semibold mb-3">How does an operating system know where new files can be stored?</p>
        <p className="mb-4">It's like managing thousands of empty parking spots but on a disk with no humans watching!</p>

        <button 
          onClick={() => setShowIntro(!showIntro)}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 mb-4"
        >
          {showIntro ? 'Hide' : 'Reveal'} Intro Insight
        </button>

        {showIntro && (
          <div className="bg-blue-50 border-2 border-blue-500 p-4 rounded-lg mb-4">
            <p>In this lesson, we will explore how operating systems track and manage free space on storage devices. We'll discuss different methods, each with its own advantages and disadvantages.</p>
            <p className="mt-2 font-semibold">Let's dive into the lesson!</p>
          </div>
        )}
      </section>

      <section className="content-section">
        <h3>Free Space Management</h3>
        <p>Imagine a large parking lot where cars come and go, and the parking spots must be managed efficiently. The parking lot attendants need to track which spots are free and allocate them to incoming cars.</p>
      </section>

      <section className="content-section">
        <h3>Free Space Management Techniques</h3>
        <p className="mb-3">Here are some of the commonly used free space management techniques:</p>

        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold">Linked Allocation:</h4>
            <p>In this technique, each file is represented by a linked list of disk blocks. When a file is created, the operating system finds enough free space on the disk and links the blocks of the file to form a chain. This method is simple to implement but can lead to fragmentation and waste of space.</p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold">Contiguous Allocation:</h4>
            <p>In this technique, each file is stored as a contiguous block of disk space. When a file is created, the operating system finds a contiguous block of free space and assigns it to the file. This method is efficient as it minimizes fragmentation but suffers from the problem of external fragmentation.</p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold">Indexed Allocation:</h4>
            <p>In this technique, a separate index block is used to store the addresses of all the disk blocks that make up a file. When a file is created, the operating system creates an index block and stores the addresses of all the blocks in the file. This method is efficient in terms of storage space and minimizes fragmentation.</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold">File Allocation Table (FAT):</h4>
            <p>In this technique, the operating system uses a file allocation table to keep track of the location of each file on the disk. When a file is created, the operating system updates the file allocation table with the address of the disk blocks that make up the file. This method is widely used in Microsoft Windows operating systems.</p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold">Volume Shadow Copy:</h4>
            <p>This is a technology used in Microsoft Windows operating systems to create backup copies of files or entire volumes. When a file is modified, the operating system creates a shadow copy of the file and stores it in a separate location. This method is useful for data recovery and protection against accidental file deletion.</p>
          </div>
        </div>

        <p className="mt-4">A file system is responsible to allocate the free blocks to the file therefore it has to keep track of all the free blocks present in the disk. Free space management is a crucial function of operating systems, as it ensures that storage devices are utilized efficiently and effectively.</p>
        <p className="mt-2">The system maintains a free space list which keeps track of the disk blocks that are not allocated to some file or directory.</p>
        <p className="mt-2 font-semibold">The free space list can be implemented mainly as:</p>
      </section>

      <section className="content-section">
        <h3>Bitmap or Bit Vector</h3>
        <p className="mb-3">A bitmap is like a theater's digital seat map, where each seat has a light green for available, red for occupied. When someone books a seat, the light turns red; when they leave, it turns green. Similarly, a bitmap tracks free and used memory blocks with 0s and 1s.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files18.png" alt="" />
        <p className="mb-3">A Bitmap or Bit Vector is series or collection of bits where each bit corresponds to a disk block. 0 indicates that the block is free and 1 indicates an allocated block.</p>

        <div className="bg-gray-100 p-4 rounded-lg my-4">
          <p className="font-mono text-center text-lg">1111000111111001</p>
          <p className="text-center text-sm mt-2">Example: 16-bit bitmap representing disk blocks</p>
        </div>

        <p className="mb-2">In the given instance of disk blocks on the disk in the above image can be represented by a bitmap of 16 bits as: 1111000111111001.</p>

        <h4 className="font-semibold mt-4 text-green-700">Advantages:</h4>
        <ul className="list-disc pl-6 mb-3">
          <li>Simple to understand.</li>
          <li>Finding the first free block is efficient. It requires scanning the words (a group of 8 bits) in a bitmap for a non-zero word. (A 0-valued word has all bits 0). The first free block is then found by scanning for the first 1 bit in the non-zero word.</li>
        </ul>

        <h4 className="font-semibold text-red-700">Disadvantages:</h4>
        <ul className="list-disc pl-6">
          <li>For finding a free block, Operating System needs to iterate all the blocks which is time consuming.</li>
          <li>The efficiency of this method reduces as the disk size increases.</li>
        </ul>

        <p className="mt-4">Next we will explore Linked List.</p>
      </section>

      <section className="content-section">
        <h3>Linked List</h3>
        <p className="mb-3">In this approach, the free disk blocks are linked together i.e. a free block contains a pointer to the next free block. The block number of the very first disk block is stored at a separate location on disk and is also cached in memory.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_files20.png" alt="" />
        <div className="bg-gray-100 p-4 rounded-lg my-4">
          <p className="font-mono text-center">Head → Block 5 → Block 6 → Block 9 → ... → NULL</p>
          <p className="text-center text-sm mt-2">Free space list using linked blocks</p>
        </div>

        <p className="mb-3">In the above image, the free space list head points to Block 5 which points to Block 6, the next free block and so on. The last free block would contain a null pointer indicating the end of free list. A drawback of this method is the I/O required for free space list traversal.</p>

        <h4 className="font-semibold mt-4 text-green-700">Advantages:</h4>
        <ul className="list-disc pl-6 mb-3">
          <li>The total available space is used efficiently using this method.</li>
          <li>Dynamic allocation in Linked List is easy, thus can add the space as per the requirement dynamically.</li>
        </ul>

        <h4 className="font-semibold text-red-700">Disadvantages:</h4>
        <ul className="list-disc pl-6">
          <li>When the size of Linked List increases, the headache of maintaining pointers also increases.</li>
          <li>This method is not efficient during iteration of each block of memory.</li>
        </ul>

        <p className="mt-4">On to the next topic, Grouping.</p>
      </section>

      <section className="content-section">
        <h3>Grouping</h3>
        <p className="mb-3">This approach stores the address of the free blocks in the first free block. The first free block stores the address of some, say n free blocks. Out of these n blocks, the first n-1 blocks are actually free and the last block contains the address of next free n blocks. An advantage of this approach is that the addresses of a group of free disk blocks can be found easily.</p>

        <h4 className="font-semibold mt-4 text-green-700">Advantage:</h4>
        <ul className="list-disc pl-6 mb-3">
          <li>Finding free blocks in massive amount can be done easily using this method.</li>
        </ul>

        <h4 className="font-semibold text-red-700">Disadvantage:</h4>
        <ul className="list-disc pl-6">
          <li>The only disadvantage is, we need to alter the entire list, if any of the block of the list is occupied.</li>
        </ul>

        <p className="mt-4">The last implementation is Counting, Let's look into it.</p>
      </section>

      <section className="content-section">
        <h3>Counting</h3>
        <p className="mb-3">This approach stores the address of the first free disk block and a number n of free contiguous disk blocks that follow the first block. Every entry in the list would contain:</p>

        <ul className="list-disc pl-6 mb-3">
          <li>Address of first free disk block.</li>
          <li>A number n.</li>
        </ul>

        <h4 className="font-semibold mt-4 text-green-700">Advantages:</h4>
        <ul className="list-disc pl-6 mb-3">
          <li>Using this method, a group of entire free blocks can take place easy and fast.</li>
          <li>The list formed in this method is especially smaller in size.</li>
        </ul>

        <h4 className="font-semibold text-red-700">Disadvantage:</h4>
        <ul className="list-disc pl-6">
          <li>The first free block in this method, keeps account of other free blocks. Thus, due to that one block the space requirement is more.</li>
        </ul>
      </section>
    </div>
  );
};

export default Module5_6;
