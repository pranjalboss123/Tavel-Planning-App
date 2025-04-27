import React from 'react';

const StatusBar = ({ themeStyles }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <span className="text-sm font-medium" style={{ color: themeStyles.text }}>9:41</span>
      <div className="flex items-center space-x-1">
        <i className="fas fa-signal" style={{ color: themeStyles.text }}></i>
        <i className="fas fa-wifi" style={{ color: themeStyles.text }}></i>
        <i className="fas fa-battery-full" style={{ color: themeStyles.text }}></i>
      </div>
    </div>
  );
};

export default StatusBar;
