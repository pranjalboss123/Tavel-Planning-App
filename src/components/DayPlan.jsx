import React from 'react';

 const DayPlan = ({ themeStyles }) => (
  <div className="mt-6 px-5">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg font-semibold" style={{ color: themeStyles.text }}>Day Plan</h2>
      <span className="text-blue-600 text-sm">See all</span>
    </div>
    <div className="flex space-x-2 mb-4 overflow-x-auto">
      <div className="bg-[rgb(211,244,98)] text-black px-4 py-2 rounded-full whitespace-nowrap">Day Plan</div>
      <div className="border border-[rgb(211,244,98)] text-[rgb(211,244,98)] px-4 py-2 rounded-full whitespace-nowrap">14 Activities</div>
    </div>
  </div>
);

export default DayPlan;