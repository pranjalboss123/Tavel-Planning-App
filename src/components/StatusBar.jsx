import React from 'react';

const StatusBar = ({ theme }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <span className={`text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>9:41</span>
      <div className="flex items-center space-x-1">
        <i className={`fas fa-signal ${theme === 'light' ? 'text-black' : 'text-white'}`}></i>
        <i className={`fas fa-wifi ${theme === 'light' ? 'text-black' : 'text-white'}`}></i>
        <i className={`fas fa-battery-full ${theme === 'light' ? 'text-black' : 'text-white'}`}></i>
      </div>
    </div>
  );
};

export default StatusBar;
