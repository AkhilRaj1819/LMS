'use client';
import React, { useState, useEffect } from 'react';

const HypervisorAnimation: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 3), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-blue-500 bg-blue-50 p-6 rounded-lg">
      <div className="text-center mb-4">
        <div className="p-3 bg-gray-600 text-white font-bold rounded">Physical Hardware</div>
      </div>
      <div className="text-center mb-4">
        <div className="p-3 bg-blue-600 text-white font-bold rounded">Hypervisor</div>
      </div>
      <div className="flex justify-center gap-4">
        {['VM 1', 'VM 2', 'VM 3'].map((vm, i) => (
          <div key={i} className={`w-24 h-24 flex items-center justify-center rounded font-bold text-white transition-all ${
            active === i ? 'bg-green-600 scale-110' : 'bg-green-400'
          }`}>
            {vm}
          </div>
        ))}
      </div>
    </div>
  );
};

const VMTypesAnimation: React.FC = () => {
  const [type, setType] = useState(0);
  const types = [
    { name: 'System VM', desc: 'Full OS', color: 'purple' },
    { name: 'Process VM', desc: 'Single App', color: 'orange' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setType(t => (t + 1) % 2), 2500);
    return () => clearInterval(timer);
  }, []);

  const current = types[type];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-6 rounded-lg`}>
      <div className="text-center">
        <div className={`text-2xl font-bold text-${current.color}-800 mb-2`}>{current.name}</div>
        <div className={`text-lg text-${current.color}-700`}>{current.desc}</div>
      </div>
    </div>
  );
};

const ContainerAnimation: React.FC = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 4), 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-4 border-cyan-500 bg-cyan-50 p-6 rounded-lg">
      <div className="text-center mb-4 font-bold text-cyan-800">Containers</div>
      <div className="flex justify-center gap-3">
        {['App 1', 'App 2', 'App 3', 'App 4'].map((app, i) => (
          <div key={i} className={`w-20 h-20 flex items-center justify-center rounded font-bold text-white text-sm transition-all ${
            active === i ? 'bg-cyan-600 scale-110' : 'bg-cyan-400'
          }`}>
            {app}
          </div>
        ))}
      </div>
      <p className="text-center mt-3 text-sm text-cyan-700">Lightweight & Fast</p>
    </div>
  );
};

const Module5_8: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">5.8</div>
        <div className="lesson-title-main">
          <h1>Virtual Machines</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Computers Within Your Computer</h3>
        <p>Before we dive in, let's start with a quick riddle to get you thinking!</p>
        <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg my-4">
          <p className="text-center font-semibold text-purple-800 text-lg">
            I look like a computer, but I'm not really there. I can run Windows, Linux, or even macOS, yet I don't exist physically. What am I?
          </p>
        </div>
        <p className="text-center text-lg">🤔 Wondering what the answer would be?</p>
        <p className="text-center font-semibold">Let's find out!</p>
      </section>

      <section className="content-section">
        <h3>Virtualization</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800">
            <strong>Virtualization:</strong> It is the technology that allows you to create multiple virtual environments on a single physical computer. It enables the sharing of hardware resources (CPU, RAM, storage) efficiently.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>What Does 'Virtual' Mean?</h3>
        <p>Let's take a step back—what exactly does 'virtual' mean?</p>
        <p>
          <strong>Virtual</strong> means something that exists in a digital or simulated environment rather than physically. It behaves like the real thing but is not physically present.
        </p>
        <p>Let's understand what are virtual machines?</p>
      </section>

      <section className="content-section">
        <h3>What is a Virtual Machine?</h3>
        <p>
          A Virtual Machine (VM) is a software-based computer that runs inside a physical computer. It behaves like a real computer, with its own operating system, memory, storage, and applications, but it doesn't physically exist—it's completely virtual!
        </p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_VM011.png" alt="Virtual Machine" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg">
          <p className="text-green-800">
            Just like a smart TV can run Netflix, YouTube, and other apps separately without affecting each other, a VM runs its own OS independently on the same computer.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Types of Hypervisor</h3>
        <p>Now that we understand what a Virtual Machine is and how it works, let's explore the key component that makes virtualization possible—the hypervisor!</p>
        <p>Before exploring the types of hypervisors, let's first understand what a hypervisor is🖥️</p>
        <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg my-4">
          <p className="text-orange-800">
            A <strong>hypervisor</strong> is a software that creates and manages Virtual Machines (VMs) by allocating resources like CPU, RAM, and storage from the host system.
          </p>
        </div>
        <p>There are two types of hypervisor, namely:</p>
        <ul>
          <li>Type 1 hypervisor (Bare-Metal Hypervisor)</li>
          <li>Type 2 hypervisor (Hosted Hypervisor)</li>
        </ul>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_VM012.png" alt="Hypervisor Types" className="rounded-lg shadow-lg max-w-2xl" />
        </div>
      </section>

      <section className="content-section">
        <h3>Type 1 Hypervisor (Bare-Metal Hypervisor)</h3>
        <ul>
          <li>A Type 1 hypervisor runs directly on the physical hardware without requiring a host operating system.</li>
          <li>It provides better performance, stability, and security because it has direct access to hardware resources.</li>
          <li>This type of hypervisor is used in enterprise environments, data centers, and cloud computing.</li>
          <li><strong>Examples:</strong> VMware vSphere/ESXi, Microsoft Hyper-V, Citrix XenServer.</li>
        </ul>
        <p>
          <strong>Use case:</strong> A cloud service provider, such as AWS or Microsoft Azure, deploys Type 1 hypervisors on powerful physical servers in data centers. These hypervisors run directly on the hardware, allowing multiple virtual machines to operate efficiently with dedicated resources.
        </p>
      </section>

      <section className="content-section">
        <h3>Type 2 Hypervisor (Hosted Hypervisor)</h3>
        <ul>
          <li>A Type 2 hypervisor runs on top of an existing operating system, functioning like an application.</li>
          <li>It is easier to set up but slightly less efficient because it relies on the host operating system for resource management.</li>
          <li>This type of hypervisor is suitable for personal use, software testing, and development.</li>
          <li><strong>Examples:</strong> Oracle VirtualBox, VMware Workstation, Parallels Desktop.</li>
        </ul>
        <p>
          <strong>Use case:</strong> A software developer working on cross-platform applications installs a Type 2 hypervisor, such as VirtualBox or VMware Workstation, on their Windows laptop. They create a Linux virtual machine to test applications in a different operating system without affecting their primary OS.
        </p>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg mt-4">
          <p className="text-center">
            <iframe width="407" height="360" src="https://www.youtube.com/embed/-2nQyJxqai4" title="03 Types of Hypervisors || Hypervisors || Virtualization || #hypervisor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Working of a Virtual Machine</h3>
        <p>Let's explore how a virtual machine works.</p>
        <p>Check out the image for a clear and concise visual of how it works!</p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/working.png" alt="" />
        </div>
        <p>Virtual Machines (VMs) run inside a physical computer (host machine) using virtualization technology.</p>
        
        <h4>Physical Hardware (Host Machine)</h4>
        <p>The actual computer (server, PC, or cloud machine) provides CPU, RAM, storage, and network resources.</p>

        <h4>Hypervisor (Virtualization Software)</h4>
        <p>The hypervisor is a special software layer that creates and manages multiple Virtual Machines on the host machine. It allocates resources like CPU, memory, and storage to each VM.</p>

        <h4>Virtual Machine (Guest OS)</h4>
        <p>Each VM runs its own operating system (Windows, Linux, macOS, etc.) inside the host machine. The guest OS thinks it is running on a real computer, but it's actually virtual.</p>

        <h4>Resource Allocation & Isolation</h4>
        <p>The hypervisor divides and allocates host machine resources (CPU, RAM, storage) among VMs. Each VM runs independently, so if one VM crashes or gets infected by a virus, others remain safe.</p>

        <h4>Running Applications & Workloads</h4>
        <p>Once set up, VMs function just like a normal computer, running software, hosting servers, or testing applications.</p>

        <HypervisorAnimation />

        <div className="border-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg mt-4">
          <p className="font-semibold text-yellow-800 mb-2">Apartment Building Analogy</p>
          <p className="text-yellow-800">Think of a Virtual Machine (VM) as an apartment inside a building (host machine).</p>
          <ul className="text-yellow-800 mt-2">
            <li><strong>Building (Host Machine)</strong> → The physical computer that houses multiple VMs.</li>
            <li><strong>Apartment (VM)</strong> → A separate, self-contained system running inside the host.</li>
            <li><strong>Hypervisor (Building Manager)</strong> → Manages resource distribution to each VM.</li>
            <li><strong>Utilities (CPU, RAM, Storage)</strong> → Shared among all apartments (VMs).</li>
            <li><strong>If One Apartment Has Issues</strong> like a broken pipe in one apartment doesn't affect others—just like a VM crash won't harm the host or other VMs.</li>
          </ul>
        </div>
        <p className="text-center font-bold text-lg mt-4">You've nailed the working of VMs👏</p>
      </section>

      <section className="content-section">
        <h3>Types of Virtual Machines</h3>
        <p>Now, let's understand what are the types of Virtual Machines.</p>
        <p>There are two types of Virtual Machines.</p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_VM14.png" alt="VM Types" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <VMTypesAnimation />

        <h4>System Virtual Machine</h4>
        <p>Think of this as creating a whole new computer inside your existing one.</p>
        <ul>
          <li>It allows you to run an entire operating system (Windows, Linux, macOS) on a single physical machine.</li>
          <li>Uses a hypervisor to manage multiple virtual machines on the same hardware.</li>
          <li>Each VM runs independently, as if it were a separate physical computer.</li>
          <li><strong>Use Case:</strong> Used in cloud computing, server management, and software testing.</li>
          <li><strong>Example:</strong> Running Windows inside a Mac using VirtualBox</li>
        </ul>
        <p className="text-sm text-gray-600 italic">VirtualBox is a free, open-source virtualization software developed by Oracle that allows users to create and run Virtual Machines (VMs) on their computers.</p>

        <h4>Process Virtual Machine</h4>
        <p>Instead of running an entire OS, this type of VM is designed to run a single application or process.</p>
        <ul>
          <li>It creates a virtual environment that allows apps to run across different operating systems.</li>
          <li>The host OS remains the same, but the app runs inside a virtual runtime environment.</li>
          <li><strong>Use Case:</strong> Used for software portability, app compatibility, and cross-platform development.</li>
          <li><strong>Example:</strong> Java Virtual Machine (JVM) allows Java programs to run on Windows, Linux, and Mac without modification.</li>
        </ul>
        <p className="text-sm text-gray-600 italic">The Java Virtual Machine (JVM) is software that allows Java programs to run on any operating system without modification.</p>
      </section>

      <section className="content-section">
        <h3>What are Containers?</h3>
        <p>Now that we've seen how VMs create isolated environments, what if we could achieve isolation without running an entire OS? This is where containers come in. Let's explore!</p>
        <p>
          Containers are lightweight, portable environments that allow applications to run consistently across different computing environments. Unlike virtual machines, which virtualize hardware, containers virtualize the operating system, enabling faster performance and better resource efficiency.
        </p>
        <div className="border-4 border-cyan-500 bg-cyan-50 p-4 rounded-lg my-4">
          <p className="text-cyan-800">
            Let's take it this way, think of containers like food delivery meal kits. Each kit comes with pre-measured ingredients and instructions, so you can cook a meal without worrying about shopping or preparation.
          </p>
          <p className="text-cyan-800 mt-2">
            Similarly, a container includes everything an application needs—code, runtime, libraries, and dependencies—so it can run quickly and consistently anywhere, without worrying about the underlying system.
          </p>
        </div>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_VM013.png" alt="Containers" className="rounded-lg shadow-lg max-w-lg" />
        </div>
        <ContainerAnimation />
        <p className="mt-4">
          <strong>Use Case:</strong> Containers are widely used in cloud computing. Companies like Netflix and Google use containers to deploy and scale applications efficiently across multiple servers without worrying about system differences.
        </p>
        <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg mt-4">
          <p className="text-center">
            <iframe width="407" height="360" src="https://www.youtube.com/embed/cjXI-yxqGTI" title="Containers vs VMs: What&#39;s the difference?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Why are Virtual Machines Necessary?</h3>
        <p>Since we now understand virtual machines and their working, let's look at why they are necessary.</p>
        <div className="flex justify-center my-4">
          <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/OS_VM01.png" alt="Why VMs" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <ul>
          <li><strong>Efficient Use of Hardware</strong> – VMs allow multiple systems to run on one machine, reducing wasted resources.</li>
          <li><strong>Run Multiple Operating Systems</strong> – Use Windows, Linux, or macOS on the same device without rebooting.</li>
          <li><strong>Safe Testing & Development</strong> – Developers test new software in VMs without affecting their main system.</li>
          <li><strong>Cybersecurity & Malware Analysis</strong> – Security experts study viruses in a controlled, isolated VM environment.</li>
          <li><strong>Cost Savings & Cloud Computing</strong> – Businesses and cloud providers use VMs to run multiple servers on fewer machines.</li>
          <li><strong>Server Virtualization</strong> – IT departments consolidate multiple servers into fewer physical machines, saving space and power.</li>
        </ul>
        <p>Virtual machines provide flexibility, security, and cost efficiency, making them essential in modern computing.</p>
      </section>

      <section className="content-section">
        <h3>Advantages</h3>
        <p>Since virtual machines play a crucial role in modern computing, let's now look at their advantages and disadvantages to understand their benefits and limitations.</p>
        <ul>
          <li>Virtual machines help reduce hardware costs by allowing multiple operating systems to run on a single machine.</li>
          <li>They enable users to run Windows, Linux, or macOS on the same device without requiring separate computers.</li>
          <li>Virtual machines provide isolated environments, preventing malware from spreading to the host system.</li>
          <li>They can be easily moved across different systems, offering flexibility and convenience.</li>
          <li>VMs are ideal for testing software in various operating system environments without affecting the main system.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Disadvantages</h3>
        <ul>
          <li>Virtual machines require powerful hardware to run efficiently without performance issues.</li>
          <li>Setting up and managing virtual machines can be difficult for beginners due to the complexity of configurations.</li>
          <li>If a virtual machine is not configured properly, it may pose security risks.</li>
          <li>Virtual machines generate large files that can consume a significant amount of storage space.</li>
          <li>Some applications may experience slower performance when running inside a virtual machine compared to a physical system.</li>
        </ul>
      </section>

      <section className="content-section">
        <h3>Answer to the Riddle</h3>
        <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
          <p className="text-center font-bold text-purple-800 text-xl">
            So coming back to the riddle, what's the answer to our question? Yes, it's a Virtual Machine (VM)!
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Great" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">You've mastered Virtual Machines!</p>
      </section>
    </div>
  );
};

export default Module5_8;
