import React from 'react';

const PopularActivities = ({ themeStyles }) => {
  return (
    <div className="mt-6 px-5 pb-20">
      <h2 className="text-lg font-semibold mb-2" style={{ color: themeStyles.text }}>Popular Activities</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: themeStyles.cardBg }}>
          <div className="h-24 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=Mount%20Fuji%20view%20from%20a%20distance%2C%20iconic%20Japanese%20landmark%2C%20snow-capped%20mountain%20peak%20against%20blue%20sky%2C%20natural%20landscape%2C%20professional%20travel%20photography&width=200&height=150&seq=5&orientation=landscape"
              alt="Mount Fuji"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium text-sm" style={{ color: themeStyles.text }}>Mount Fuji Day Trip</h3>
            <p className="text-xs mt-1" style={{ color: themeStyles.secondaryText }}>Full day excursion</p>
          </div>
        </div>
        <div className="rounded-xl shadow-md overflow-hidden" style={{ backgroundColor: themeStyles.cardBg }}>
          <div className="h-24 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=traditional%20Japanese%20tea%20ceremony%20setup%2C%20zen%20atmosphere%2C%20matcha%20tea%20preparation%2C%20cultural%20experience%2C%20professional%20cultural%20photography&width=200&height=150&seq=6&orientation=landscape"
              alt="Tea Ceremony"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-3">
            <h3 className="font-medium text-sm" style={{ color: themeStyles.text }}>Tea Ceremony</h3>
            <p className="text-xs mt-1" style={{ color: themeStyles.secondaryText }}>Traditional experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularActivities;
