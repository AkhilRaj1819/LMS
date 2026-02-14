'use client';
import React, { useState, useEffect } from 'react';

const RPCFlowAnimation: React.FC = () => {
  const [step, setStep] = useState(0);
  const steps = [
    { name: 'Client Call', color: 'blue', description: 'Client invokes remote procedure' },
    { name: 'Marshalling', color: 'green', description: 'Convert parameters to network format' },
    { name: 'Network Transfer', color: 'purple', description: 'Data travels across network' },
    { name: 'Unmarshalling', color: 'orange', description: 'Convert back to original format' },
    { name: 'Server Execute', color: 'red', description: 'Server runs the procedure' },
    { name: 'Response', color: 'indigo', description: 'Result returns to client' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setStep(s => (s + 1) % 6), 2000);
    return () => clearInterval(timer);
  }, []);

  const current = steps[step];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-6 rounded-lg`}>
      <div className="flex justify-center items-center gap-4 mb-4">
        {steps.map((s, i) => (
          <div key={i} className={`w-16 h-16 flex items-center justify-center rounded-full font-bold text-white transition-all ${
            step === i ? `bg-${s.color}-600 scale-110` : `bg-${s.color}-300`
          }`}>
            {i + 1}
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className={`text-2xl font-bold text-${current.color}-800 mb-2`}>{current.name}</div>
        <div className={`text-lg text-${current.color}-700`}>{current.description}</div>
      </div>
    </div>
  );
};

const RPCComponentsAnimation: React.FC = () => {
  const [active, setActive] = useState(0);
  const components = [
    { name: 'Client', icon: '📱', color: 'blue' },
    { name: 'Client Stub', icon: '🔄', color: 'green' },
    { name: 'Network', icon: '🌐', color: 'purple' },
    { name: 'Server Stub', icon: '⚙️', color: 'orange' },
    { name: 'Server', icon: '🖥️', color: 'red' }
  ];

  useEffect(() => {
    const timer = setInterval(() => setActive(a => (a + 1) % 5), 2000);
    return () => clearInterval(timer);
  }, []);

  const current = components[active];

  return (
    <div className={`border-4 border-${current.color}-500 bg-${current.color}-50 p-8 rounded-lg`}>
      <div className="text-center">
        <div className="text-6xl mb-4">{current.icon}</div>
        <div className={`text-2xl font-bold text-${current.color}-800`}>{current.name}</div>
      </div>
    </div>
  );
};

const Module1_14: React.FC = () => {
  return (
    <div className="module-content">
      <div className="lesson-header">
        <div className="lesson-number-badge">1.14</div>
        <div className="lesson-title-main">
          <h1>Remote Procedure Calls (RPC)</h1>
        </div>
      </div>

      <section className="content-section">
        <h3>Calling Functions Across Networks</h3>
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-center font-semibold text-blue-800">
            Imagine you're using a mobile banking app. You tap "Check Balance" and within seconds, your account details appear. But your phone doesn't actually have your bank's data stored locally. So how does your app fetch it instantly from a distant server?
          </p>
        </div>
        <p>
          This seamless action happens because of something called a <strong>Remote Procedure Call (RPC)</strong>. It allows your app (the client) to execute a function on another machine (the server) as if it were local without you ever noticing the network communication happening behind the scenes.
        </p>
        <p>
          In this lesson, we will learn how programs execute procedures on remote machines, how communication happens across distributed systems, and the issues that arise along with their solutions.
        </p>
      </section>

      <section className="content-section">
        <h3>Remote Procedure Calls</h3>
        <p>
          <strong>Remote Procedure Call (RPC)</strong> is a communication mechanism that allows a program to execute a procedure on another machine as if it were a local function. It simplifies the process of building distributed systems by abstracting the details of network communication.
        </p>
        <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg my-4">
          <p className="text-green-700">
            In a distributed system, multiple computers (nodes) work together to complete tasks. With RPC, a program running on one computer (the client) can request a service or function that runs on another computer (the server) without explicitly managing the communication between them.
          </p>
        </div>
        <img src="https://kq-storage.s3.ap-south-1.amazonaws.com/Operating%2BSystems/os_rpc_image.png" alt="RPC Overview" className="w-full rounded-lg shadow-lg my-4" />
      </section>

      <section className="content-section">
        <h3>Key Components of RPC</h3>
        <RPCComponentsAnimation />
        <ul className="mt-4">
          <li><strong>Client:</strong> The program that requests a remote service or procedure.</li>
          <li><strong>Server:</strong> The program that provides the requested service.</li>
          <li><strong>Client Stub:</strong> Acts as a local representative for the remote procedure. It handles packaging the request and sending it to the server.</li>
          <li><strong>Server Stub:</strong> Receives the request, unpacks it, and invokes the actual procedure on the server side.</li>
          <li><strong>Communication System:</strong> The underlying network mechanism that transfers data between client and server.</li>
        </ul>
      </section>
      <iframe width="407" height="360" src="https://www.youtube.com/embed/QmhTjsOOrlw" title="Remote Procedure Calls (RPC)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <section className="content-section">
        <h3>How RPC Works</h3>
        <RPCFlowAnimation />
        
        <div className="mt-6">
          <h4>Quick Steps (1–6)</h4>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Client calls a remote procedure like a local function.</li>
            <li>Client stub performs <strong>marshalling</strong> — serializing parameters into a message.</li>
            <li>The serialized message travels across the network.</li>
            <li>Server stub performs <strong>unmarshalling</strong> — deserializing message to parameters.</li>
            <li>The server executes the requested procedure and produces a result.</li>
            <li>Result travels back: server stub → client stub (unmarshall → marshall) → client.</li>
          </ol>
          <div className="border-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg mt-4">
            <p className="font-semibold text-yellow-800">💡 Tip:</p>
            <p className="text-yellow-700">
              Marshalling/unmarshalling handle type conversion & network-safe encoding; error handling (timeouts, retries) and security (auth, encryption) are essential in real RPC systems.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Marshalling and Unmarshalling</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">📦 Marshalling</h4>
            <p className="text-blue-700">
              The process of converting data or parameters into a format suitable for transmission across the network.
            </p>
          </div>
          <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">📤 Unmarshalling</h4>
            <p className="text-green-700">
              The process of converting received data back into its original form for the receiving program to understand.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Issues in RPC & How They're Resolved</h3>
        <p>While RPCs simplify distributed communication, they introduce several challenges that need to be handled carefully.</p>
        
        <h4 className="mt-6 mb-4">Common Issues in RPC</h4>
        <div className="space-y-4">
          <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-800 mb-2">⚙️ Latency</h4>
            <p className="text-red-700"><strong>Solution:</strong> Use caching, asynchronous RPC, and load balancing.</p>
          </div>
          
          <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">⚙️ Network Failures</h4>
            <p className="text-orange-700"><strong>Solution:</strong> Implement retry logic, acknowledgments, and fault-tolerant designs.</p>
          </div>
          
          <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">⚙️ Security Concerns</h4>
            <p className="text-purple-700"><strong>Solution:</strong> Use encryption (SSL/TLS) and authentication mechanisms.</p>
          </div>
          
          <div className="border-4 border-indigo-500 bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-bold text-indigo-800 mb-2">⚙️ Data Consistency</h4>
            <p className="text-indigo-700"><strong>Solution:</strong> Use two-phase commit or synchronization protocols.</p>
          </div>
          
          <div className="border-4 border-pink-500 bg-pink-50 p-4 rounded-lg">
            <h4 className="font-bold text-pink-800 mb-2">⚙️ Heterogeneity</h4>
            <p className="text-pink-700"><strong>Solution:</strong> Standardize communication using JSON, XML, or Protocol Buffers (gRPC).</p>
          </div>
        </div>
      </section>
      <iframe width="407" height="360" src="https://www.youtube.com/embed/jH3RezOHROU" title="Issues in RPC &amp; How They&#39;re Resolved" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      <section className="content-section">
        <h3>Advantages of RPC</h3>
        <p>RPC provides several benefits that make it a cornerstone of distributed computing:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">🔍</span>
              <h4 className="font-bold text-blue-800">Transparency</h4>
            </div>
            <p className="text-blue-700">Allows seamless execution of remote functions as if they were local.</p>
          </div>
          
          <div className="border-4 border-green-500 bg-green-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">⚙️</span>
              <h4 className="font-bold text-green-800">Simplified Programming</h4>
            </div>
            <p className="text-green-700">Developers can build networked applications without handling low-level socket programming.</p>
          </div>
          
          <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">📈</span>
              <h4 className="font-bold text-purple-800">Scalability</h4>
            </div>
            <p className="text-purple-700">Tasks can be distributed across multiple servers for improved performance.</p>
          </div>
          
          <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">🧩</span>
              <h4 className="font-bold text-orange-800">Modularity</h4>
            </div>
            <p className="text-orange-700">Components can reside on different machines while maintaining logical consistency.</p>
          </div>
          
          <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">♻️</span>
              <h4 className="font-bold text-red-800">Reusability</h4>
            </div>
            <p className="text-red-700">RPC enables reusing existing services remotely across multiple clients.</p>
          </div>
          
          <div className="border-4 border-indigo-500 bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">🔄</span>
              <h4 className="font-bold text-indigo-800">Flexibility</h4>
            </div>
            <p className="text-indigo-700">Supports integration across architectures via standards like gRPC and XML-RPC.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Disadvantages of RPC</h3>
        <p>While RPC simplifies distributed computing, it also introduces some challenges:</p>
        <div className="space-y-4 mt-4">
          <div className="border-4 border-red-500 bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold text-red-800 mb-2">🌐 Network Dependency</h4>
            <p className="text-red-700">Performance relies heavily on network stability and speed.</p>
          </div>
          
          <div className="border-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
            <h4 className="font-bold text-orange-800 mb-2">🐛 Complex Debugging</h4>
            <p className="text-orange-700">Tracing distributed errors can be difficult and time-consuming.</p>
          </div>
          
          <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded-lg">
            <h4 className="font-bold text-purple-800 mb-2">⚠️ Security Risks</h4>
            <p className="text-purple-700">Unsecured communication can lead to data interception or modification.</p>
          </div>
          
          <div className="border-4 border-yellow-500 bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 mb-2">🔄 Version Mismatch</h4>
            <p className="text-yellow-700">Different service versions may lead to compatibility issues.</p>
          </div>
          
          <div className="border-4 border-gray-500 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold text-gray-800 mb-2">💥 Partial Failures</h4>
            <p className="text-gray-700">Failure in one machine can affect the entire RPC chain.</p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h3>Real-World Applications of RPC</h3>
        <p>RPC plays a major role in enabling communication between distributed components across platforms and networks:</p>
        <table className="w-full border-collapse border-2 border-gray-400 mt-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="border-2 border-gray-400 p-3">Application</th>
              <th className="border-2 border-gray-400 p-3">How RPC is Used</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">Cloud Computing</td>
              <td className="border-2 border-gray-400 p-3">AWS, Azure, and Google Cloud use RPC for distributed service coordination.</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">Microservices</td>
              <td className="border-2 border-gray-400 p-3">gRPC enables efficient service-to-service communication.</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">Databases</td>
              <td className="border-2 border-gray-400 p-3">Systems like Cassandra and MongoDB use RPC for data replication.</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">Remote File Systems</td>
              <td className="border-2 border-gray-400 p-3">NFS and SMB rely on RPC for accessing files remotely.</td>
            </tr>
            <tr>
              <td className="border-2 border-gray-400 p-3 font-bold">Web Services</td>
              <td className="border-2 border-gray-400 p-3">SOAP and XML-RPC enable communication between heterogeneous systems.</td>
            </tr>
          </tbody>
        </table>
        
        <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded-lg mt-4">
          <p className="font-semibold text-blue-800">
            Every time you access cloud storage, stream media, or use collaborative tools like Google Docs — an RPC mechanism is silently enabling that interaction across networks.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h3>Summary</h3>
        <ul>
          <li><strong>RPC (Remote Procedure Call)</strong> enables programs to execute procedures on remote systems as if they were local.</li>
          <li>It uses <strong>client and server stubs</strong> to handle communication and <strong>marshalling/unmarshalling</strong> to convert data for transmission.</li>
          <li>Key benefits include <strong>transparency, modularity,</strong> and ease of building distributed systems.</li>
          <li>Common challenges such as <strong>latency, security,</strong> and data consistency can be mitigated with robust design and error-handling techniques.</li>
          <li>RPC is a cornerstone of distributed computing, forming the foundation for technologies like <strong>microservices, APIs,</strong> and cloud communication.</li>
        </ul>
      </section>

      <h4>Mid map</h4>
      <img src="https://storage.googleapis.com/kq-storage.kalvium.community/Operating%20Systems%2Frpc.svg" alt="" />

      <section className="content-section">
        <h3>Bonus Content</h3>
        <p className="text-sm text-gray-600 mb-2">This part is optional and you can skip it if you want.</p>
        <ul>
          <li>
            <a href="https://www.techtarget.com/searchapparchitecture/definition/Remote-Procedure-Call-RPC" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              What is Remote Procedure Call (RPC)? - TechTarget
            </a>
          </li>
          <li>
            <a href="https://www.ibm.com/topics/remote-procedure-call" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Remote Procedure Call - IBM
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/remote-procedure-call-rpc-in-operating-system/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              Understanding RPC in Distributed Computing - GeeksforGeeks
            </a>
          </li>
          <li>
            <a href="https://grpc.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              gRPC by Google — Modern RPC Framework
            </a>
          </li>
        </ul>
      </section>

      <section className="content-section">
        <div className="flex justify-center">
          <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="Great Job" className="rounded-lg shadow-lg max-w-sm" />
        </div>
        <p className="text-center font-bold text-lg mt-2">Great job understanding RPC!</p>
      </section>
    </div>
  );
};

export default Module1_14;
