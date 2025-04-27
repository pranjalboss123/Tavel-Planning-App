import React from 'react';

const FlightDetails = ({ themeStyles }) => {
  return (
    <div className="px-5 py-3">
      <div className="flex justify-between items-center mb-2">
        <h2
          className="text-lg font-semibold"
          style={{ color: themeStyles.text }}
        >
          Flight Details
        </h2>
        <a href="#" className="text-blue-600 text-sm cursor-pointer">
          See all
        </a>
      </div>
      <div
        className="rounded-xl p-4 text-white shadow-md"
        style={{ backgroundColor: themeStyles.cardBg }}
      >
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm" style={{ color: themeStyles.text }}>
            26.01.2025, 10:50 am
          </p>
          <img
            src="https://readdy.ai/api/search-image?query=modern%20minimalist%20airplane%20icon%20on%20transparent%20background%2C%20simple%20white%20silhouette%2C%20clean%20design%2C%20professional%20graphic%2C%20high%20contrast&width=100&height=50&seq=2&orientation=landscape"
            alt="Airplane"
            className="h-6 w-12 object-contain"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <h3
              className="text-xl font-bold"
              style={{ color: themeStyles.text }}
            >
              DEL
            </h3>
            <p
              className="text-xs opacity-80"
              style={{ color: themeStyles.secondaryText }}
            >
              Delhi, India
            </p>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center">
            <div className="w-full flex items-center">
              <div
                className="h-[1px] flex-1"
                style={{ backgroundColor: themeStyles.secondaryText }}
              ></div>
              <i
                className="fas fa-plane mx-2 transform rotate-90"
                style={{ color: themeStyles.text }}
              ></i>
              <div
                className="h-[1px] flex-1"
                style={{ backgroundColor: themeStyles.secondaryText }}
              ></div>
            </div>
          </div>
          <div className="text-center">
            <h3
              className="text-xl font-bold"
              style={{ color: themeStyles.text }}
            >
              NRT
            </h3>
            <p
              className="text-xs opacity-80"
              style={{ color: themeStyles.secondaryText }}
            >
              Narita, Tokyo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
