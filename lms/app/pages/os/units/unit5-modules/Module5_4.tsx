'use client';
import React, { useState, useEffect } from 'react';

const ContiguousAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const blocks = [19, 20, 21, 22, 23, 24];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 6), 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-blue-800">Contiguous Allocation</div>
      <div className="flex justify-center gap-2">
        {blocks.map((block, i) => (
          <div key={i} className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white transition-all ${
            i <= active ? 'bg-blue-600' : 'bg-blue-300'
          }`}>
            {block}
          </div>
        ))}
      </div>
      <p className="text-center mt-3 text-sm text-blue-700">File occupies consecutive blocks</p>
    </div>
  );
};

const LinkedAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const blocks = [5, 12, 7, 25, 3];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 5), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-green-500 bg-green-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-green-800">Linked Allocation</div>
      <div className="flex justify-center items-center gap-2">
        {blocks.map((block, i) => (
          <React.Fragment key={i}>
            <div className={`w-16 h-16 flex items-center justify-center rounded font-bold text-white transition-all ${
              active === i ? 'bg-green-600 scale-110' : 'bg-green-400'
            }`}>
              {block}
            </div>
            {i < blocks.length - 1 && <div className="text-2xl text-green-600">→</div>}
          </React.Fragment>
        ))}
      </div>
      <p className="text-center mt-3 text-sm text-green-700">Blocks scattered, linked by pointers</p>
    </div>
  );
};

const IndexedAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const blocks = [2, 8, 14, 21, 30];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 5), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-purple-500 bg-purple-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-purple-800">Indexed Allocation</div>
      <div className="flex justify-center gap-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-purple-600 text-white font-bold rounded mb-2">
            Index
          </div>
          <div className="text-xs text-purple-700">Index Block</div>
        </div>
        <div className="flex gap-2">
          {blocks.map((block, i) => (
            <div key={i} className={`w-12 h-12 flex items-center justify-center rounded font-bold text-white text-sm transition-all ${
              active === i ? 'bg-purple-600 scale-110' : 'bg-purple-400'
            }`}>
              {block}
            </div>
          ))}
        </div>
      </div>
      <p className="text-center mt-3 text-sm text-purple-700">Index block points to all data blocks</p>
    </div>
  );
};

const Module5_4: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.4</div>
        <div className="lesson-title-main">
          <h1>File Allocation Methods</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>The Scatter Plan</h3>
        <p>
          Files on your computer are like little residents looking for their homes on the disk. How do they find the right blocks? Let's see how the operating system interestingly allocates them. Our curious cat will guide us through the world of file allocation!
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files7.png" alt="Cute cat typing" className="rounded-lg shadow-lg max-w-xs" />
        </div>
      </section>

      <section className="content-section">
        <h3>File Allocation Methods</h3>
        <p>
          The allocation method defines how the files are stored in the disk blocks. The direct access nature of the disks gives us the flexibility to implement the files. In many cases, different files or many files are stored on the same disk. The main problem that occurs in the operating system is that how we allocate the spaces to these files so that the utilization of disk is efficient and the quick access to the file is possible.
        </p>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg my-4">
          <div className="flex justify-center gap-2 mb-2">
            {[0, 1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded">
                F
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-blue-800">
            <strong>Contiguous Allocation:</strong> File occupies consecutive blocks (highlighted in blue).<br />
            You can see blocks 0-5 are assigned to a single file.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Three Main Methods</h3>
        <p>There are mainly three methods of file allocation in the disk. Each method has its advantages and disadvantages. Mainly a system uses one method for all files within the system.</p>
        <ul>
          <li>Contiguous allocation</li>
          <li>Linked allocation</li>
          <li>Indexed allocation</li>
        </ul>
        <p>The main idea behind these methods is to provide:</p>
        <ul>
          <li>Efficient disk space utilization.</li>
          <li>Fast access to the file blocks.</li>
        </ul>
        <p>The allocation method defines how files are stored on disk blocks. Efficient allocation ensures fast access and optimal disk usage.</p>
      </section>

      <section className="content-section">
        <h3>Visual Comparison</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
            <h4 className="text-blue-800 font-bold mb-2">Contiguous Allocation</h4>
            <p className="text-blue-700">Files occupy consecutive blocks on disk.</p>
            <div className="flex justify-center gap-2 mt-2">
              {[19, 20, 21, 22, 23, 24].map(b => (
                <div key={b} className="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded text-sm">
                  {b}
                </div>
              ))}
            </div>
          </div>

          <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg">
            <h4 className="text-green-800 font-bold mb-2">Linked Allocation</h4>
            <p className="text-green-700">Blocks are scattered, and each block points to the next.</p>
            <div className="flex justify-center items-center gap-2 mt-2">
              {[5, 12, 7, 25, 3].map((b, i) => (
                <React.Fragment key={b}>
                  <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white font-bold rounded text-sm">
                    {b}
                  </div>
                  {i < 4 && <span className="text-green-600">→</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
            <h4 className="text-purple-800 font-bold mb-2">Indexed Allocation</h4>
            <p className="text-purple-700">Each file has an index block pointing to all its blocks.</p>
            <div className="flex justify-center gap-2 mt-2">
              {[2, 8, 14, 21, 30].map(b => (
                <div key={b} className="w-12 h-12 flex items-center justify-center bg-purple-500 text-white font-bold rounded text-sm">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Contiguous Allocation</h3>
        <p>
          Each file occupies a contiguous set of blocks on the disk. For example, if a file requires n blocks and is given a block b as the starting location, then the blocks assigned to the file will be: b, b+1, b+2,……b+n-1. This means that given the starting block address and the length of the file (in terms of blocks required), we can determine the blocks occupied by the file. The directory entry for a file with contiguous allocation contains:
        </p>
        <ul>
          <li>Address of starting block</li>
          <li>Length of the allocated portion.</li>
        </ul>
        <div className="flex justify-center my-4">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/Contiguous-Allocation.png" alt="Contiguous Allocation" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <p className="text-sm text-gray-600">Image credits: geeksforgeeks</p>
        <p className="mt-2">
          The file 'mail' in the above image starts from the block 19 with length = 6 blocks. Therefore, it occupies 19, 20, 21, 22, 23, 24 blocks.
        </p>
        <ContiguousAnimation />

        <h4>Advantages</h4>
        <ul>
          <li>Supports both Sequential and Direct Access.</li>
          <li>Direct access is fast, as the address of the k-th block is (b + k).</li>
          <li>Minimal seeks due to contiguous allocation, ensuring high speed.</li>
        </ul>

        <h4>Disadvantages</h4>
        <ul>
          <li>Suffers from internal and external fragmentation, reducing memory efficiency.</li>
          <li>Expanding a file is difficult as it requires contiguous free space.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Linked Allocation</h3>
        <p>
          Each file is a linked list of disk blocks which need not be contiguous. The disk blocks can be scattered anywhere on the disk. The directory entry contains a pointer to the starting file block. Each block contains a pointer to the next block occupied by the file.
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files8.png" alt="Linked Allocation" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <p className="text-sm text-gray-600">Image credits: geeksforgeeks</p>
        <p className="mt-2">
          The file 'jeep' in the above image shows how the blocks are randomly distributed. The last block (25) contains -1 indicating a null pointer and does not point to any other block.
        </p>
        <LinkedAnimation />

        <h4>Advantages</h4>
        <ul>
          <li>Flexible file size—files can grow easily without needing contiguous memory.</li>
          <li>No external fragmentation, leading to better memory utilization.</li>
        </ul>

        <h4>Disadvantages</h4>
        <ul>
          <li>Slower access due to multiple seeks for scattered blocks.</li>
          <li>No direct access—A block k of a file can be accessed by traversing k blocks sequentially (sequential access) from the starting block of the file via block pointers.</li>
          <li>Extra overhead due to storage of block pointers.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Indexed Allocation</h3>
        <p>
          In this method, a special block known as the Index block contains the pointers to all the blocks occupied by a file. Each file has its own index block. The i-th entry in the index block contains the disk address of the i-th file block. The directory entry contains the address of the index block as shown in the image:
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_files9.png" alt="Indexed Allocation" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <p className="text-sm text-gray-600">Image credits: geeksforgeeks</p>
        <IndexedAnimation />

        <h4>Advantages</h4>
        <ul>
          <li>Supports direct access, enabling fast file retrieval.</li>
          <li>Eliminates external fragmentation.</li>
        </ul>

        <h4>Disadvantages</h4>
        <ul>
          <li>Higher pointer overhead compared to linked allocation.</li>
          <li>Inefficient for small files, as an entire index block is used even for a few blocks.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Handling Large Files in Indexed Allocation</h3>
        <p>To handle larger files, additional techniques are used to extend indexed allocation. Let's explore them.</p>
        <p>When a single index block cannot hold all pointers for a large file, the following techniques are used:</p>

        <h4>1. Linked Scheme</h4>
        <ul>
          <li>This scheme links two or more index blocks together for holding the pointers.</li>
          <li>Every index block would then contain a pointer or the address to the next index block.</li>
          <li>This helps extend file storage dynamically without requiring a large contiguous index block.</li>
        </ul>

        <h4>2. Multilevel Index</h4>
        <ul>
          <li>In this, a first level index block is used to point to the second level index blocks which in turn points to the disk blocks occupied by the file.</li>
          <li>This can be extended to 3 or more levels depending on the maximum file size.</li>
        </ul>

        <h4>3. Combined Scheme (Inode-Based Allocation)</h4>
        <p>
          A special structure called Inode (Information Node) stores file details and block addresses. The Inode contains direct pointers to file data blocks and indirect pointers for larger files. Indirect blocks may be single indirect, double indirect or triple indirect.
        </p>
        <ul>
          <li><strong>Single Indirect:</strong> Stores addresses of blocks containing file data.</li>
          <li><strong>Double Indirect:</strong> Points to blocks that store addresses of data blocks.</li>
          <li><strong>Triple Indirect:</strong> Points to blocks that store addresses of second-level index blocks.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Bonus Content</h3>
        <p className="text-sm text-gray-600 mb-2">This part is optional, you can skip it if you want.</p>
        <ul>
          <li>
            <a href="https://www.geeksforgeeks.org/file-allocation-methods/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              File allocation methods | geeksforgeeks
            </a>
          </li>
          <li>
            <a href="https://www.javatpoint.com/os-file-allocation-table" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              File allocation table | javatpoint
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o6ZsZdNs3yE5l6hWM/giphy.gif" alt="That's it" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">That's it for this lesson on file allocation methods!</p>
      </section>
    </div>
  );
};

export default Module5_4;
