import React from 'react';

const DurationDropdown = ({ theme, durationOpen, setDurationOpen, duration, setDuration }) => {
  const durations = ['1-3 days', '4-7 days', '1-2 weeks', '2+ weeks'];

  return (
    <div>
      <label className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        How long will you stay?
      </label>
      <div className="relative">
        <div
          onClick={() => setDurationOpen(!durationOpen)}
          className={`flex items-center justify-between px-3 py-3 rounded-md border cursor-pointer ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-[rgb(51,51,51)] border-gray-700'}`}
        >
          <div className="flex items-center">
            <i className={`fas fa-calendar-alt mr-2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}></i>
            <span className={`${duration ? '' : 'text-gray-500'} ${theme === 'light' ? 'text-black' : 'text-white'}`}>
              {duration || 'Select Duration'}
            </span>
          </div>
          <i className={`fas fa-chevron-down ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}></i>
        </div>
        {durationOpen && (
          <div className={`absolute z-10 mt-1 w-full rounded-md shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-[rgb(51,51,51)]'}`}>
            <ul className="py-1">
              {durations.map((option) => (
                <li
                  key={option}
                  onClick={() => {
                    setDuration(option);
                    setDurationOpen(false);
                  }}
                  className={`px-3 py-2 cursor-pointer ${theme === 'light' ? 'hover:bg-gray-100 text-black' : 'hover:bg-gray-700 text-white'}`}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DurationDropdown;
