import React from 'react';

interface BarProps {
  left?: boolean;
}

const Bar: React.FC<{ left?: boolean }> = ({ left }) => {
    const barStyle: React.CSSProperties = {
      width: '10px', // Reduced width
      height: '100px',
      backgroundColor: 'gold',
      border: '2px solid #c299ee', // White border
      borderRadius: '10px',
      position: 'absolute',
      left: left ? '10px' : 'unset',
      right: left ? 'unset' : '10px',
    };
  
    return <div style={barStyle} />;
  };
  

export default Bar;
