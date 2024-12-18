import React from 'react';

const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#2B2B2B', // Logo background dark gray
        color: '#E6E6DD',           // Logo text off-white
        textAlign: 'center',
        margin: 0,
        padding: '5% 0',
        minHeight: '100vh',
        fontFamily: "'Bebas Neue', 'Arial Black', Impact, sans-serif",
      }}
    >
      {/* Logo Image */}
      <img
        src="/images/logo-0.1.png" // Replace with your actual image path
        alt="Build A Thing And Show"
        style={{
          width: '300px',
          marginBottom: '20px',
        }}
      />

      {/* Landing Page Heading */}
      <h1
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          letterSpacing: '2px',
          //textTransform: 'uppercase', // Make text uppercase
          marginBottom: '10px',
        }}
      >
        Welcome to our Landing Page
      </h1>

      {/* Animated "Under Construction" Text */}
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          letterSpacing: '1px',
          color: '#E6E6DD',           // Logo text off-white
          animation: 'move 2s infinite alternate',
          display: 'inline-block',
        }}
      >
        🚧 Under Construction 🚧
      </div>

      {/* Inline Keyframes Animation */}
      <style>
        {`
          @keyframes move {
            0% { transform: translateX(-20px); }
            100% { transform: translateX(20px); }
          }

          body {
            margin: 0;
            background-color: #333333; /* Set background for full page */
          }
        `}
      </style>
    </div>
  );
};

export default App;
