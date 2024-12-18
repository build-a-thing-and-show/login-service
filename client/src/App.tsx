import React from 'react';

const App = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      {/* Image Section */}
      <img 
        src="/images/logo-0.1.png" 
        alt="Build A Thing" 
        style={{ width: '300px', marginBottom: '20px' }}
      />
      
      {/* Animated Text */}
      <h1>Welcome to our Landing Page</h1>
      <div style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        color: '#FF6347', 
        display: 'inline-block',
        animation: 'move 2s infinite alternate'
      }}>
        🚧 Under Construction 🚧
      </div>

      <style>
        {`
          @keyframes move {
            0% {
              transform: translateX(-20px); /* Move left */
            }
            100% {
              transform: translateX(20px); /* Move right */
            }
          }
        `}
      </style>
    </div>
  );
};

export default App;
