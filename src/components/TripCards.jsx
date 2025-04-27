import React from 'react';

const TripCard = ({ themeStyles, tripData }) => {
  // Calculate end date based on duration
  const getEndDate = (duration) => {
    const startDate = new Date('2025-01-27');
    let days = 0;
    
    if (duration.includes('days')) {
      days = parseInt(duration.split('-')[1]);
    } else if (duration.includes('weeks')) {
      const weeks = parseInt(duration.split('-')[1]);
      days = weeks * 7;
    }
    
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + days);
    return endDate.toLocaleDateString('en-GB', { 
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '.');
  };

  const endDate = tripData.duration ? getEndDate(tripData.duration) : '02.02.2025';
  const groupSize = tripData.travelingWith === 'Solo' ? '1' :
                   tripData.travelingWith === 'Couple' ? '2' :
                   tripData.travelingWith === 'Family' ? '4' : '4';

  return (
    <div className="px-5 py-3">
      <h2 className="text-lg font-semibold mb-2" style={{ color: themeStyles.text }}>Your Upcoming Trip</h2>
      <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer" style={{ backgroundColor: themeStyles.cardBg }}>
        {/* Trip Image */}
        <div className="relative h-48 w-full">
          <img
            src="https://readdy.ai/api/search-image?query=Tokyo%20skyline%20at%20sunset%20with%20Tokyo%20Tower%20illuminated%20in%20orange%20against%20a%20purple%20and%20pink%20sky%2C%20modern%20skyscrapers%20silhouetted%20against%20the%20dramatic%20colorful%20sky%2C%20high%20quality%20professional%20photograph%2C%20atmospheric%20cityscape%2C%20urban%20landscape&width=500&height=300&seq=1&orientation=landscape"
            alt="Tokyo Skyline"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
          <div className="absolute top-0 left-0 p-5 w-full">
            <h3 className="text-4xl font-bold text-white tracking-wider">
              {tripData.destination ? tripData.destination.split(',')[0].toUpperCase() : 'TOKYO'}
            </h3>
            <p className="text-white text-sm mt-1">27.01.2025 - {endDate}</p>
          </div>
          <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-1 rounded-full cursor-pointer">
            <i className="fas fa-arrow-up-right-from-square text-white"></i>
          </div>
        </div>
        <div className="p-3 flex justify-between items-center" style={{ backgroundColor: themeStyles.cardBg }}>
          {/* Trip Info */}
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-900/50 flex items-center justify-center mr-2">
              <i className="fas fa-clock text-green-400 text-xs"></i>
            </div>
            <div>
              <p className="text-xs" style={{ color: themeStyles.secondaryText }}>Duration</p>
              <p className="text-sm font-medium" style={{ color: themeStyles.text }}>
                {tripData.duration || '8 Days'}
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-100/10 flex items-center justify-center mr-2">
              <i className="fas fa-users text-green-500 text-xs"></i>
            </div>
            <div>
              <p className="text-xs" style={{ color: themeStyles.secondaryText }}>Group Size</p>
              <p className="text-sm font-medium" style={{ color: themeStyles.text }}>{groupSize}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-green-100/10 flex items-center justify-center mr-2">
              <i className="fas fa-map-marker-alt text-green-500 text-xs"></i>
            </div>
            <div>
              <p className="text-xs" style={{ color: themeStyles.secondaryText }}>Activities</p>
              <p className="text-sm font-medium" style={{ color: themeStyles.text }}>14</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
