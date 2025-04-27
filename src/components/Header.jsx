import React from 'react';

const Header = ({ toggleTheme, isDarkMode, themeStyles }) => {
  return (
    <div className="px-5 pt-4 pb-2 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: themeStyles.text }}>Hello Chhavi!</h1>
          <p style={{ color: themeStyles.secondaryText }} className="text-sm">Ready for the trip?</p>
        </div>
        <button 
          onClick={toggleTheme}
          className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer !rounded-button whitespace-nowrap"
          style={{ backgroundColor: themeStyles.cardBg }}
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-green-500`}></i>
        </button>
      </div>
      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white cursor-pointer !rounded-button whitespace-nowrap">
        <span className="text-lg font-medium">C</span>
      </div>
    </div>
  );
};

export default Header;
