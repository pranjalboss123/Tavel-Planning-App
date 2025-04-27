import React from 'react';

const ContinueButton = ({ handleContinue }) => {
  return (
    <div className="mt-8">
      <button
        onClick={handleContinue}
        className=" ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} w-full bg-blue-600 text-white py-3 rounded-md font-medium cursor-pointer whitespace-nowrap"
      >
        Continue
      </button>
    </div>
  );
};

export default ContinueButton;
