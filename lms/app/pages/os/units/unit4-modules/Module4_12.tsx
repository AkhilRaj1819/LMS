'use client';
import React, { useState, useEffect } from 'react';

const LRUAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const sequence = [
    { ref: 7, frames: [7], recent: [7], action: 'Load 7' },
    { ref: 0, frames: [7, 0], recent: [0, 7], action: 'Load 0' },
    { ref: 1, frames: [7, 0, 1], recent: [1, 0, 7], action: 'Load 1' },
    { ref: 2, frames: [7, 0, 1, 2], recent: [2, 1, 0, 7], action: 'Load 2' },
    { ref: 0, frames: [7, 0, 1, 2], recent: [0, 2, 1, 7], action: 'Hit 0 (move to front)' },
    { ref: 3, frames: [3, 0, 1, 2], recent: [3, 0, 2, 1], action: 'Evict 7, Load 3' },
    { ref: 0, frames: [3, 0, 1, 2], recent: [0, 3, 2, 1], action: 'Hit 0 (move to front)' },
    { ref: 4, frames: [3, 0, 4, 2], recent: [4, 0, 3, 2], action: 'Evict 1, Load 4' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % sequence.length), 2000);
    return () => clearInterval(timer);
  }, []);

  const current = sequence[step];

  return (
    <div className="border-4 border-purple-500 bg-purple-50 p-6 rounded-lg">
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-purple-700">Reference: {current.ref}</div>
        <div className="text-sm text-purple-600 mt-1">{current.action}</div>
      </div>
      <div className="flex justify-center gap-8">
        <div>
          <div className="text-center font-semibold mb-2">Frames</div>
          <div className="flex flex-col gap-2">
            {current.frames.map((page, i) => (
              <div key={i} className={`w-16 h-12 flex items-center justify-center rounded font-bold text-white ${
                page === current.ref ? 'bg-green-500' : 'bg-purple-500'
              }`}>
                {page}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-center font-semibold mb-2">Recency Order</div>
          <div className="flex flex-col gap-2">
            {current.recent.map((page, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-16 h-12 flex items-center justify-center rounded font-bold text-white ${
                  i === 0 ? 'bg-green-500' : i === current.recent.length - 1 ? 'bg-red-500' : 'bg-gray-400'
                }`}>
                  {page}
                </div>
                <span className="text-xs text-gray-600">{i === 0 ? 'Most Recent' : i === current.recent.length - 1 ? 'Least Recent' : ''}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Module4_12: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">4.12</div>
        <div className="lesson-title-main">
          <h1>Least Recently Used</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Haven't Used It? You're Out!</h3>
        <p>
          In this lesson, you will be learning the next page replacement algorithm, which is the <strong>Least Recently Used (LRU)</strong> algorithm, one of the most practical and widely implemented strategies in modern operating systems.
        </p>
      </section>

      <section className="content-section">
        <h3>Least Recently Used (LRU)</h3>
        <p>The Least Recently Used (LRU) page replacement algorithm is based on a simple but powerful intuition:</p>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg my-4">
          <p className="text-center font-semibold text-blue-800">
            Pages that have not been used for a long time are less likely to be used in the near future.
          </p>
        </div>
        <p>
          Therefore, when all frames are full and a new page must be loaded, LRU evicts the page whose last use was the farthest back in time.
        </p>
        <p>
          LRU approximates real program behavior closely because most programs exhibit <strong>temporal locality</strong>, meaning recently accessed data tends to be accessed again soon.
        </p>
      </section>

      <section className="content-section">
        <h3>How LRU Works</h3>
        <p>Imagine you have several frames in memory. Every time the CPU references a page:</p>
        <ul>
          <li>It is marked as <strong>recently used</strong>.</li>
          <li>It becomes the "most recently used" entry.</li>
          <li>All other pages are shifted one position "older" in terms of recency.</li>
        </ul>
        <p>When a replacement is needed:</p>
        <div className="border-4 border-orange-500 bg-orange-50 p-3 rounded-lg my-3">
          <p className="text-center font-semibold text-orange-800">
            → LRU removes the page with the oldest last access time.
          </p>
        </div>
        <p>This requires the operating system to keep track of when each page was last used. This can be done with:</p>
        <ul>
          <li>Stacks</li>
          <li>Queues</li>
          <li>Counters</li>
          <li>Time-stamps</li>
          <li>Linked lists</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>LRU Animation</h3>
        <LRUAnimation />
      </section>

      <section className="content-section">
        <h3>Key Characteristics of LRU</h3>
        
        <h4>1. Recency-Based Eviction</h4>
        <p>LRU always removes the page that has been inactive for the longest time.</p>

        <h4>2. Better Performance Than FIFO</h4>
        <p>Because FIFO ignores usage patterns, it often removes pages that are still needed soon. LRU avoids this mistake and typically results in fewer page faults.</p>

        <h4>3. Models Real Program Behavior</h4>
        <p>Programs often access data in loops or repeatedly use the same values. LRU captures this pattern more naturally.</p>

        <h4>4. Low Page Fault Rate for Locality-Aware Workloads</h4>
        <p>When programs repeatedly access the same addresses (temporal locality), LRU performs extremely well.</p>
      </section>

      <section className="content-section">
        <h3>Practical Challenges of LRU</h3>
        <p>Although conceptually simple, real implementation can be expensive:</p>

        <h4>1. Tracking Exact Order of Uses</h4>
        <p>Keeping exact usage order requires data structures that support:</p>
        <ul>
          <li>Fast updates</li>
          <li>Fast lookups</li>
          <li>Fast eviction</li>
        </ul>
        <p>This becomes costly when there are thousands of pages.</p>

        <h4>2. Hardware Support</h4>
        <p>True LRU is rarely implemented fully in hardware because:</p>
        <ul>
          <li>It requires additional bits per entry</li>
          <li>Updating usage information for every memory access is expensive</li>
        </ul>
        <p>So real systems sometimes use <strong>approximate LRU</strong> like:</p>
        <ul>
          <li>NRU (Not Recently Used)</li>
          <li>Aging algorithm</li>
          <li>Second-Chance (Clock)</li>
          <li>Enhanced Clock</li>
          <li>LRU-K</li>
        </ul>
        <p>These versions reduce overhead while maintaining good performance.</p>
      </section>

      <section className="content-section">
        <h3>LRU Example</h3>
        <p>Let's consider 4 frames and this reference string:</p>
        <div className="border-4 border-green-500 bg-green-50 p-3 rounded-lg my-3">
          <p className="text-center font-mono font-bold text-green-800">[7, 0, 1, 2, 0, 3, 0, 4, 2, 3]</p>
        </div>
        <p>Here is what LRU does conceptually:</p>
        <ol>
          <li>Load pages until frames fill.</li>
          <li>Every time a page is accessed:
            <ul>
              <li>Move it to "most recently used" position.</li>
            </ul>
          </li>
          <li>When a new page comes and no frame is empty:
            <ul>
              <li>Remove the page that has not been used for the longest time.</li>
            </ul>
          </li>
        </ol>
        <p>This ensures pages used frequently remain in memory longer, reducing page faults.</p>
      </section>

      <section className="content-section">
        <h3>Why LRU Is Widely Used</h3>
        <ul>
          <li>It reflects real memory access patterns better than FIFO.</li>
          <li>It has a lower page fault rate than many other algorithms.</li>
          <li>It balances practicality and efficiency.</li>
          <li>Many operating systems use approximations of LRU because of its strong performance.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Watch the Video</h3>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg">
          <p className="text-center">
            <iframe width="407" height="360" src="https://www.youtube.com/embed/LCPFjNxQIVU" title="Least Recently Used (LRU) Page Replacement Algorithm in OS with Example Problem - Memory Management" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
          <p className="text-sm text-center mt-2">This video provides an excellent visual understanding of how LRU works internally.</p>
        </div>
      </section>

      <section className="content-section">
        <h3>Advantages of LRU</h3>
        <ul>
          <li><strong>Follows Program Behavior:</strong> Recently used pages are reused often.</li>
          <li><strong>Low Page Fault Rate:</strong> Performs better than FIFO in most cases.</li>
          <li><strong>No Belady's Anomaly:</strong> More frames never increase page faults.</li>
          <li><strong>Locality Friendly:</strong> Works best with loops, arrays & iterative flows.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Disadvantages of LRU</h3>
        <ul>
          <li><strong>High Hardware Cost:</strong> Needs counters or timestamps.</li>
          <li><strong>Slow for Large Tables:</strong> Tracking thousands of pages is expensive.</li>
          <li><strong>Extra Data Structures:</strong> Requires stacks / lists / hash maps.</li>
          <li><strong>Pattern Shift Issues:</strong> Sudden changes can cause wrong eviction.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Real-World Applications</h3>
        <ul>
          <li><strong>OS Paging:</strong> CLOCK, Enhanced CLOCK, LRU-K in modern systems.</li>
          <li><strong>CPU Caches:</strong> LRU or pseudo-LRU eviction for cache lines.</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, Oracle buffer managers.</li>
          <li><strong>Browsers:</strong> Tab history, image & asset caching.</li>
          <li><strong>App-Level Caches:</strong> Redis, Memcached, Guava Cache.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Mind Map</h3>
        <div className="flex justify-center my-4">
          <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20System%2Flru_svg.svg" alt="" />
        </div>
      </section>

      <section className="content-section">
        <h3>Additional Links (Optional)</h3>
        <ul>
          <li>
            <a href="https://www.javatpoint.com/difference-between-lru-and-lfu-page-replacement-algorithm" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Difference between LRU and LFU Page Replacement Algorithm - javatpoint
            </a>
          </li>
          <li>
            <a href="https://www.scaler.com/topics/lru-page-replacement-algorithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              LRU Page Replacement Algorithm - Scaler Topics
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/program-for-least-recently-used-lru-page-replacement-algorithm/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Program for Least Recently Used (LRU) Page Replacement - GeeksforGeeks
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img 
            src="https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif" 
            alt="Credits Giphy"
            className="rounded-lg shadow-lg max-w-sm"
          />
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">Credits: Giphy</p>
      </section>
    </div>
  );
};

export default Module4_12;
