import React from 'react';

const AdditionalAccommodation = ({ themeStyles }) => {
  return (
   <>
   
          <div className="px-5 py-3">
            <div className="space-y-3">
              <div
                className="rounded-xl p-4 shadow-md"
                style={{ backgroundColor: themeStyles.cardBg }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="font-medium"
                      style={{ color: themeStyles.text }}
                    >
                      Shinagawa Prince Hotel
                    </h3>
                    <div
                      className="text-sm mt-1"
                      style={{ color: themeStyles.secondaryText }}
                    >
                      <div>Check-in: 26.01.2025, 11:15 pm</div>
                      <div>Check out: 28.01.2025, 11:15 am</div>
                    </div>
                    <div
                      className="text-sm mt-2"
                      style={{ color: themeStyles.text }}
                    >
                      2 Nights
                    </div>
                    <div className="flex items-center mt-2 text-[rgb(211,244,98)]">
                      <i className="fas fa-check-circle mr-1"></i>
                      <span className="text-sm">Confirmed</span>
                    </div>
                  </div>
                  <div className="bg-[rgb(211,244,98)] text-black text-xs px-2 py-1 rounded">
                    4.5/Very Good
                  </div>
                </div>
              </div>
              <div
                className="rounded-xl p-4 shadow-md"
                style={{ backgroundColor: themeStyles.cardBg }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="font-medium"
                      style={{ color: themeStyles.text }}
                    >
                      Mercure Tokyo Hotel
                    </h3>
                    <div
                      className="text-sm mt-1"
                      style={{ color: themeStyles.secondaryText }}
                    >
                      <div>Check-in: 28.01.2025, 6:00 pm</div>
                      <div>Check out: 30.01.2025, 11:15 am</div>
                    </div>
                    <div
                      className="text-sm mt-2"
                      style={{ color: themeStyles.text }}
                    >
                      2 Nights
                    </div>
                    <div className="flex items-center mt-2 text-orange-500">
                      <i className="fas fa-clock mr-1"></i>
                      <span className="text-sm">Pending</span>
                    </div>
                  </div>
                  <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    4.1/Very Good
                  </div>
                </div>
              </div>
            </div>
          </div>

   </>
  );
};

export default AdditionalAccommodation;
