import React from 'react';

const Accommodation = ({ themeStyles }) => {
  return (
    <div className="px-5 py-3">
      <div className="flex justify-between items-center mb-2">
        <h2
          className="text-lg font-semibold"
          style={{ color: themeStyles.text }}
        >
          Accommodation
        </h2>
        <a href="#" className="text-blue-600 text-sm cursor-pointer">
          See all
        </a>
      </div>
      <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide" style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}>
        {/* First Hotel Card */}
        <div
          className="min-w-[180px] rounded-xl shadow-md overflow-hidden"
          style={{ backgroundColor: themeStyles.cardBg }}
        >
          <div className="h-24 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20luxury%20hotel%20interior%20in%20Tokyo%2C%20contemporary%20Japanese%20design%2C%20minimalist%20lobby%20with%20elegant%20lighting%2C%20high-end%20accommodation%2C%20professional%20architectural%20photography&width=200&height=150&seq=3&orientation=landscape"
              alt="Hotel Interior"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-3">
            <h3
              className="font-medium text-sm"
              style={{ color: themeStyles.text }}
            >
              Grand Hyatt Tokyo
            </h3>
            <p
              className="text-xs mt-1"
              style={{ color: themeStyles.secondaryText }}
            >
              Luxury 5-star hotel in Roppongi
            </p>
            <div className="flex items-center mt-1">
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <span
                className="text-xs ml-1"
                style={{ color: themeStyles.secondaryText }}
              >
                (487)
              </span>
            </div>
          </div>
        </div>
        {/* Second Hotel Card */}
        <div
          className="min-w-[180px] rounded-xl shadow-md overflow-hidden"
          style={{ backgroundColor: themeStyles.cardBg }}
        >
          <div className="h-24 overflow-hidden">
            <img
              src="https://readdy.ai/api/search-image?query=modern%20boutique%20hotel%20exterior%20in%20Tokyo%2C%20contemporary%20Japanese%20architecture%2C%20sleek%20building%20facade%20with%20glass%20elements%2C%20high-end%20accommodation%2C%20professional%20architectural%20photography&width=200&height=150&seq=4&orientation=landscape"
              alt="Hotel Exterior"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="p-3">
            <h3
              className="font-medium text-sm"
              style={{ color: themeStyles.text }}
            >
              Shinjuku Park Hotel
            </h3>
            <p
              className="text-xs mt-1"
              style={{ color: themeStyles.secondaryText }}
            >
              Central location near Shinjuku Station
            </p>
            <div className="flex items-center mt-1">
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star text-yellow-400 text-xs"></i>
              <i className="fas fa-star-half-alt text-yellow-400 text-xs"></i>
              <span
                className="text-xs ml-1"
                style={{ color: themeStyles.secondaryText }}
              >
                (352)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
