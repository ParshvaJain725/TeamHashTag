import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const CodingPlayground = () => {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [executionTime, setExecutionTime] = useState('');
  const [memoryUsage, setMemoryUsage] = useState('');
  const navigate = useNavigate();

  const handleRunCode = async () => {
    setOutput('Running...');
    
    const response = await fetch('http://localhost:5000/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: 'cpp',
        code,
        input,
      }),
    });

    const result = await response.json();
    setOutput(result.output);
    setExecutionTime(result.executionTime);
    setMemoryUsage(result.memoryUsage);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      
      <button
        onClick={() => navigate('/main')}
        className="text-white mb-4 flex items-center gap-2"
      >
        <FaArrowLeft className="text-xl" /> 
        <span>Back to Main Page</span>
      </button>

      <div className="mb-4">
        <h1 className="text-2xl font-bold">C++ Coding Playground</h1>
      </div>

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your C++ code here..."
        className="w-full h-48 p-4 bg-gray-800 text-white font-mono rounded"
      />

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Custom Input (optional)"
        className="w-full h-24 mt-4 p-4 bg-gray-800 text-white font-mono rounded"
      />

      <button
        onClick={handleRunCode}
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
      >
        Run Code
      </button>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Output:</h2>
        <pre className="bg-gray-800 p-4 rounded">{output}</pre>
      </div>

      <div className="mt-4">
        <p>Execution Time: {executionTime} ms</p>
        <p>Memory Usage: {memoryUsage} KB</p>
      </div>
    </div>
  );
};

export default CodingPlayground;
