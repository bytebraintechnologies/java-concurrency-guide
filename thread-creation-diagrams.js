import React from 'react';

// Diagram Component for Thread Inheritance
const ThreadInheritanceDiagram = () => {
  return (
    <svg viewBox="0 0 400 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="300" height="100" fill="#f0f0f0" stroke="#000" strokeWidth="2" />
      <text x="200" y="70" textAnchor="middle" fontWeight="bold">Thread Inheritance</text>
      
      <rect x="100" y="90" width="200" height="40" fill="#e0e0e0" stroke="#666" />
      <text x="200" y="115" textAnchor="middle">
        Custom Thread Class
      </text>
      
      <path d="M200 130 L200 170" stroke="#000" strokeWidth="2" strokeDasharray="5,5" />
      <text x="200" y="190" textAnchor="middle" fontSize="12">
        Extends Thread Class
      </text>
    </svg>
  );
};

// Diagram Component for Runnable Interface
const RunnableInterfaceDiagram = () => {
  return (
    <svg viewBox="0 0 400 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="300" height="100" fill="#f0f0f0" stroke="#000" strokeWidth="2" />
      <text x="200" y="70" textAnchor="middle" fontWeight="bold">Runnable Interface</text>
      
      <rect x="100" y="90" width="200" height="40" fill="#e0e0e0" stroke="#666" />
      <text x="200" y="115" textAnchor="middle">
        Custom Runnable Class
      </text>
      
      <path d="M200 130 L200 170" stroke="#000" strokeWidth="2" strokeDasharray="5,5" />
      <text x="200" y="190" textAnchor="middle" fontSize="12">
        Implements Runnable Interface
      </text>
    </svg>
  );
};

// Diagram Component for Lambda Thread Creation
const LambdaThreadDiagram = () => {
  return (
    <svg viewBox="0 0 400 200" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="300" height="100" fill="#f0f0f0" stroke="#000" strokeWidth="2" />
      <text x="200" y="70" textAnchor="middle" fontWeight="bold">Lambda Thread Creation</text>
      
      <rect x="100" y="90" width="200" height="40" fill="#e0e0e0" stroke="#666" />
      <text x="200" y="115" textAnchor="middle" fontSize="14">
        () -> { /* Task Logic */ }
      </text>
      
      <path d="M200 130 L200 170" stroke="#000" strokeWidth="2" strokeDasharray="5,5" />
      <text x="200" y="190" textAnchor="middle" fontSize="12">
        Functional Interface Implementation
      </text>
    </svg>
  );
};

export { 
  ThreadInheritanceDiagram, 
  RunnableInterfaceDiagram, 
  LambdaThreadDiagram 
};
