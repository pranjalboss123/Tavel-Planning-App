import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="absolute top-14 right-4">
      <button onClick={toggleTheme} className="p-2 rounded-full cursor-pointer">
        {theme === 'light' ? (
          <i className="fas fa-moon text-gray-700"></i>
        ) : (
          <i className="fas fa-sun text-yellow-300"></i>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
