'use client';
import React, { useState } from 'react';

interface CodeCompilerProps {
  problemStatement: string;
  starterCode: string;
  language?: string;
  expectedOutput?: string;
}

const CodeCompiler: React.FC<CodeCompilerProps> = ({ 
  problemStatement, 
  starterCode, 
  language = 'cpp',
  expectedOutput = ''
}) => {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    // Simulate code execution (replace with actual compiler API)
    setTimeout(() => {
      setOutput('Code executed successfully!\nOutput: Hello World\n\nNote: This is a demo. Integrate with Judge0 API for real compilation.');
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="compiler-section">
      <div className="problem-statement">
        <h5>🎯 Practice Problem</h5>
        <p>{problemStatement}</p>
        {expectedOutput && (
          <div className="expected-output">
            <strong>Expected Output:</strong>
            <pre>{expectedOutput}</pre>
          </div>
        )}
      </div>
      
      <div className="code-editor">
        <div className="editor-header">
          <span className="language-tag">{language.toUpperCase()}</span>
          <button onClick={runCode} disabled={isRunning} className="run-btn">
            {isRunning ? '⏳ Running...' : '▶ Run Code'}
          </button>
        </div>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="code-input"
          rows={20}
          spellCheck={false}
        />
      </div>
      
      <div className="output-section">
        <h6>Output:</h6>
        <pre className="output-display">{output || 'Click "Run Code" to see output...'}</pre>
      </div>
    </div>
  );
};

export default CodeCompiler;