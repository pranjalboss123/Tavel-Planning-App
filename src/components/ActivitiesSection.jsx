import React from 'react';

const Activities = ({ themeStyles }) => {
  return (
    <div className="mt-6 px-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold" style={{ color: themeStyles.text }}>Activities</h2>
        <span className="text-blue-600 text-sm">See all</span>
      </div>
      <div className="flex space-x-2 mb-4 overflow-x-auto scrollbar-hide" style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}>
        <div className="bg-[rgb(211,244,98)] text-black px-4 py-2 rounded-full whitespace-nowrap">Day Plan</div>
        <div className="border border-[rgb(211,244,98)] text-[rgb(211,244,98)] px-4 py-2 rounded-full whitespace-nowrap">14 Activities</div>
      </div>
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide mb-4" style={{ 
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}>
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center min-w-[50px] p-2 rounded-xl ${
              index === 0 ? 'bg-[rgb(211,244,98)] text-black' : ''
            }`}
            style={{ backgroundColor: index === 0 ? '' : themeStyles.cardBg, color: index === 0 ? '' : themeStyles.text }}
          >
            <span className="text-xs">{day}</span>
            <span className="text-sm font-medium">{27 + index}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-medium" style={{ color: themeStyles.text }}>Day 1 27.01.2025</div>
          <div className="text-sm text-blue-600">3 Activities</div>
        </div>
        <div className="space-y-4">
          {/* Activity 1 */}
          <div className="rounded-xl p-4 shadow-md" style={{ backgroundColor: themeStyles.cardBg }}>
            <div className="flex items-center gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=senso%20ji%20temple%20and%20nakamise%20shopping%20street%20in%20tokyo%2C%20traditional%20japanese%20architecture%2C%20bustling%20marketplace%2C%20cultural%20landmark%2C%20professional%20travel%20photography&width=100&height=100&seq=7&orientation=squarish"
                alt="Senso-ji Temple"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium" style={{ color: themeStyles.text }}>Senso-ji Temple & Nakamise Shopping Street</h3>
                <div className="mt-2 text-sm" style={{ color: themeStyles.secondaryText }}>
                  <div><i className="far fa-clock mr-2"></i>8:15 am Morning</div>
                  <div><i className="far fa-hourglass mr-2"></i>Duration: 3 hours</div>
                  <div><i className="fas fa-map-marker-alt mr-2"></i>Pick up: From Hotel</div>
                </div>
              </div>
            </div>
          </div>
          {/* Activity 2 */}
          <div className="rounded-xl p-4 shadow-md" style={{ backgroundColor: themeStyles.cardBg }}>
            <div className="flex items-center gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=tokyo%20sky%20tree%20tower%20at%20night%2C%20illuminated%20modern%20architecture%2C%20iconic%20landmark%2C%20urban%20cityscape%2C%20professional%20architectural%20photography&width=100&height=100&seq=8&orientation=squarish"
                alt="Tokyo Sky Tree"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium" style={{ color: themeStyles.text }}>Tokyo Sky Tree</h3>
                <div className="mt-2 text-sm" style={{ color: themeStyles.secondaryText }}>
                  <div><i className="far fa-clock mr-2"></i>1:00 pm Afternoon</div>
                  <div><i className="far fa-hourglass mr-2"></i>Duration: 3 hours</div>
                  <div><i className="fas fa-map-marker-alt mr-2"></i>Pick up: From Nakamise Street</div>
                </div>
              </div>
            </div>
          </div>
          {/* Activity 3 */}
          <div className="rounded-xl p-4 shadow-md" style={{ backgroundColor: themeStyles.cardBg }}>
            <div className="flex items-center gap-4">
              <img
                src="https://readdy.ai/api/search-image?query=traditional%20japanese%20kimono%20wearing%20experience%2C%20elegant%20floral%20pattern%20kimono%2C%20cultural%20dress%20up%20activity%2C%20authentic%20japanese%20culture%2C%20professional%20fashion%20photography&width=100&height=100&seq=9&orientation=squarish"
                alt="Kimono Wearing"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium" style={{ color: themeStyles.text }}>Kimono Wearing</h3>
                <div className="mt-2 text-sm" style={{ color: themeStyles.secondaryText }}>
                  <div><i className="far fa-clock mr-2"></i>Anytime before 8:00pm</div>
                  <div><i className="far fa-hourglass mr-2"></i>Duration: 2 hours</div>
                  <div><i className="fas fa-map-marker-alt mr-2"></i>Pick up: From Hotel</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
