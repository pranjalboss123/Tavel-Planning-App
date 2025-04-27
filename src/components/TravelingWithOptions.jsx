import React from 'react';

const TravelingWithOptions = ({ theme, travelingWith, handleTravelingWithSelect }) => {
  const options = ['Solo', 'Couple', 'Family', 'Friends'];

  return (
    <div>
      <label className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        Who are you traveling with?
      </label>
      <div className="grid grid-cols-2 gap-3">
        {options.map(option => (
          <div
            key={option}
            onClick={() => handleTravelingWithSelect(option)}
            className={`flex items-center justify-center p-3 rounded-md border cursor-pointer transition-colors duration-200 ${
              travelingWith === option
                ? `${theme === 'light' ? 'bg-blue-50 border-blue-500' : 'bg-blue-900 border-blue-400'}`
                : `${theme === 'light' ? 'bg-white border-gray-300 hover:bg-gray-50' : 'bg-[rgb(51,51,51)] border-gray-700 hover:bg-[rgb(60,60,60)]'}`
            }`}
          >
            <i className={`mr-2 ${
              option === 'Solo' ? 'fas fa-user'
              : option === 'Couple' ? 'fas fa-user-friends'
              : option === 'Family' ? 'fas fa-home'
              : 'fas fa-users'
            } ${travelingWith === option 
                ? (theme === 'light' ? 'text-blue-500' : 'text-blue-400')
                : (theme === 'light' ? 'text-gray-500' : 'text-gray-400')
            }`}></i>
            <span className={`${
              travelingWith === option 
                ? (theme === 'light' ? 'text-blue-500' : 'text-blue-400') 
                : (theme === 'light' ? 'text-gray-700' : 'text-gray-300')
            } font-medium`}>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelingWithOptions;
