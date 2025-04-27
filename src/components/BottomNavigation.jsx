import React from 'react';

const BottomNavigation = ({ themeStyles, isDarkMode }) => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-16 border-t flex justify-around items-center px-3"
      style={{ backgroundColor: themeStyles.background, borderColor: isDarkMode ? '#1f2937' : '#e5e7eb' }}
    >
      <button className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-[rgb(211,244,98)]/10 text-[rgb(211,244,98)] cursor-pointer !rounded-button whitespace-nowrap">
        <i className="fas fa-home"></i>
      </button>
      <button className="flex flex-col items-center justify-center w-12 h-12 cursor-pointer !rounded-button whitespace-nowrap" style={{ color: themeStyles.secondaryText }}>
        <i className="fas fa-search"></i>
      </button>
      <button className="flex flex-col items-center justify-center w-12 h-12 rounded-full bg-[rgb(211,244,98)] text-black shadow-lg cursor-pointer !rounded-button whitespace-nowrap">
        <i className="fas fa-plus"></i>
      </button>
      <button className="flex flex-col items-center justify-center w-12 h-12 cursor-pointer !rounded-button whitespace-nowrap" style={{ color: themeStyles.secondaryText }}>
        <i className="fas fa-heart"></i>
      </button>
      <button className="flex flex-col items-center justify-center w-12 h-12 cursor-pointer !rounded-button whitespace-nowrap" style={{ color: themeStyles.secondaryText }}>
        <i className="fas fa-user"></i>
      </button>
    </div>
  );
};

export default BottomNavigation;
