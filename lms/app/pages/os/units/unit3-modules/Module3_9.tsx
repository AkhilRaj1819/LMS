'use client';
import React from 'react';

const Module3_9: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">3.9</div>
        <div className="lesson-title-main">
          <h1>Linkers and Dynamic Linking</h1>
        </div>
      </div>
      
      <section className="content-section">
        <p>In this lesson, you will gain insights into Linkers and dynamic linking.</p>
        <p>When a computer program executes, it organizes its data into specific memory sections, each serving a distinct purpose. The memory layout typically encompasses three main sections: the code section, data section, and stack section.</p>

        <ul>
          <li><strong>Code Section:</strong> Positioned at the beginning of memory, the code section holds the program&apos;s instructions, akin to a recipe guiding the computer&apos;s actions.</li>
          <li><strong>Data Section:</strong> Following the code section, the data section accommodates variables and essential program data. It expands upwards to accommodate additional data as the program&apos;s requirements evolve.</li>
          <li><strong>Stack Section:</strong> Situated at the top of memory, the stack section manages function calls and temporary data. It operates on a Last-In-First-Out (LIFO) basis, resembling a stack of plates where the most recently added item is accessed first.</li>
        </ul>

        <p>Efficient memory management during program execution involves several integral components:</p>
        <ul>
          <li><strong>Compiler and Assembler:</strong> These tools translate human-readable source code into a machine-readable format, generating object files containing essential program information.</li>
          <li><strong>Linker:</strong> Responsible for consolidating object files into a single executable file, the linker ensures completeness and coherence. It resolves dependencies among program parts, producing a unified executable ready for execution.</li>
          <li><strong>Operating System (OS):</strong> Acting as the computer&apos;s manager, the OS loads the program file into memory and supervises its execution. It facilitates multitasking by allocating memory resources to multiple programs simultaneously, preventing interference between them.</li>
          <li><strong>Run-time Library:</strong> Collaborating with the OS, the run-time library provides essential functions for dynamic memory management. Functions like malloc and free enable programs to allocate and release memory dynamically during execution, enhancing efficiency.</li>
        </ul>

        <p>This collaborative effort ensures smooth program execution and optimal memory utilization. The program&apos;s instructions, data, and execution environment are meticulously managed, allowing for seamless execution and resource allocation.</p>

        <h3>Introduction to Linkers:</h3>
        <p>In the realm of programming, the creation of a functional and executable program involves a multi-step process that integrates various components seamlessly. Central to this process is the role of a linker, a critical tool that orchestrates the assembly of disparate program components into a cohesive whole. Here&apos;s an in-depth exploration of linkers and their integral functions, along with the challenges they address and the process they undertake:</p>

        <h3>Understanding Linkers:</h3>
        <p>When crafting a program, developers typically work with multiple components, each serving a specific function. These components, analogous to chapters in a book, need to be consolidated to form an executable program. This is where a linker comes into play.</p>

        <h3>Functions of a Linker:</h3>
        <ul>
          <li><strong>Combining Pieces:</strong> A linker amalgamates individual program components into a unified entity, much like compiling separate chapters of a book into a single document.</li>
          <li><strong>Memory Organization:</strong> Once assembled, the linker organizes these components in a manner that ensures coherence and logical flow within the computer&apos;s memory. It optimizes memory allocation to accommodate the program&apos;s requirements.</li>
          <li><strong>Address Adjustment:</strong> Crucially, the linker adjusts memory addresses within the program to facilitate seamless execution. Analogous to updating page numbers in a table of contents, this ensures that the program can efficiently locate and access its various parts during runtime.</li>
        </ul>

        <h3>Linker Execution Process:</h3>
        <p>The process of linking a program unfolds through a series of meticulously orchestrated steps:</p>
        <ul>
          <li><strong>Pass 1: Calculating Memory Layout:</strong> The linker evaluates the size and spatial requirements of each program component, devising an optimal memory layout.</li>
          <li><strong>Pass 2: Building a Symbol Table:</strong> A comprehensive symbol table is constructed, enumerating all program variables and functions alongside their respective memory locations.</li>
          <li><strong>Pass 3: Updating Addresses and Creating the Final Program:</strong> The linker iteratively adjusts memory addresses based on the determined layout, culminating in the generation of a runnable executable file.</li>
        </ul>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_linker_dynamic_linking_image2.jpg" alt="" />

        <p className="text-sm text-gray-600 italic my-4">The diagram illustrates the compilation process for computer programs. Source code, written by a programmer, is first converted into an assembly language file by a compiler. An assembler translates the assembly language into object code, a machine-readable format. The linker combines the object code with other program elements to create an executable file. Finally, the loader prepares the executable file for the operating system to run.</p>

        <h3>Introduction to Dynamic Linking:</h3>
        <h4>What is Dynamic Linking?</h4>
        <p>Dynamic linking is a method used by modern computer systems to manage how programs use shared libraries.</p>

        <h4>Shared Libraries and Dynamic Linking:</h4>
        <p>In the late 1980s, computer systems began using shared libraries to save memory and improve efficiency. Shared libraries are collections of commonly used code that multiple programs can use simultaneously.</p>
        <ul>
          <li><strong>Single Copy in Memory:</strong> Instead of each program containing its own copy of these libraries, a single copy is kept in memory and shared by all running processes.</li>
          <li><strong>Dynamic Resolution:</strong> The exact location of these shared libraries is not known until the program runs. When the program starts, it dynamically finds and links to the required library functions.</li>
        </ul>

        <h3>How Dynamic Linking Works:</h3>
        <p className="text-sm text-gray-600 italic my-4">This diagram showcases the stages of dynamic linking. It highlights how a source program is translated, linked, and loaded into memory, relying on shared libraries for efficient execution during runtime.</p>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating+Systems/os_linkers_image2.jpg" alt="" />

        <h4>Linking Process:</h4>
        <ul>
          <li>When a program is being linked, if it uses functions from shared libraries, the linker doesn&apos;t include the actual library code directly.</li>
          <li>Instead, it creates a jump table and a placeholder for the library functions.</li>
        </ul>

        <h4>Jump Table:</h4>
        <ul>
          <li>The jump table is like a map that shows the program where to find each function it needs.</li>
          <li>Initially, all entries in the jump table point to address zero, indicating they&apos;re not yet resolved.</li>
        </ul>

        <h4>Dynamic Loader:</h4>
        <ul>
          <li>When the program starts, a special library called the dynamic loader is called.</li>
          <li>The dynamic loader loads the shared libraries into memory and fills in the jump table with the correct addresses for each function.</li>
          <li>Now, when the program calls a function from a shared library, the jump table redirects the call to the right place in memory where that function resides.</li>
        </ul>

        <h3>Benefits of Dynamic Linking:</h3>
        <ul>
          <li><strong>Efficiency:</strong> It saves memory by only loading shared libraries when needed.</li>
          <li><strong>Flexibility:</strong> It allows programs to use the latest versions of libraries without recompiling.</li>
          <li><strong>Reduced Program Size:</strong> Programs are smaller since they don&apos;t contain all the library code directly.</li>
        </ul>

        <h3>Additional Links:</h3>
        <p>This part is optional and you can skip it if you want.</p>
        <ul>
          <li><a href="https://www.geeksforgeeks.org/static-and-dynamic-linking-in-operating-systems/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Static and Dynamic Linking in Operating Systems - GeeksforGeeks</a></li>
          <li><a href="https://www.ibm.com/docs/en/aix/7.2?topic=techniques-dynamic-static-linking" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dynamic and static linking | IBM</a></li>
          <li><a href="https://www.baeldung.com/cs/dynamic-linking-vs-dynamic-loading" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Dynamic Linking vs. Dynamic Loading | Baeldung on Computer Science</a></li>
        </ul>

        <p className="mt-4">Congratulations! You have reached the end of this lesson.</p>
      </section>
    </div>
  );
};

export default Module3_9;
