import React, { useState, useEffect } from 'react';

// Components
import StatusBar from './StatusBar2';
import Header from './Header';
import TripCard from './TripCards';
import FlightDetails from './FlightDetails';
import Accommodation from './Accomodation';
import AdditionalAccommodation from './AdditionalAccomodation';
import Activities from './ActivitiesSection';
import DayPlan from './DayPlan';
import PopularActivities from './PopularActivities';
import BottomNavigation from './BottomNavigation';

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [tripData, setTripData] = useState({
    destination: '',
    duration: '',
    travelingWith: ''
  });

  useEffect(() => {
    // Retrieve data from localStorage
    const destination = localStorage.getItem('destination');
    const duration = localStorage.getItem('duration');
    const travelingWith = localStorage.getItem('travelingWith');

    setTripData({
      destination,
      duration,
      travelingWith
    });
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = {
    background: isDarkMode ? '#121212' : '#ffffff',
    text: isDarkMode ? '#ffffff' : '#000000',
    cardBg: isDarkMode ? '#1a237e' : '#f3f4f6',
    secondaryText: isDarkMode ? '#9ca3af' : '#4b5563',
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black">
      <div className={`w-[375px] h-[730px] overflow-hidden relative shadow-2xl rounded-[3rem] flex flex-col`} style={{ backgroundColor: themeStyles.background }}>
        {/* Status Bar */}
        <StatusBar themeStyles={themeStyles} />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide" style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}>
          {/* Header */}
          <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} themeStyles={themeStyles} />
          
          {/* Trip Card */}
          <TripCard themeStyles={themeStyles} tripData={tripData} />
          
          {/* Flight Details */}
          <FlightDetails themeStyles={themeStyles} destination={tripData.destination} />
          
          {/* Accommodation */}
          <Accommodation themeStyles={themeStyles} destination={tripData.destination} />
          
          {/* Additional Accommodation */}
          <AdditionalAccommodation themeStyles={themeStyles} destination={tripData.destination} />
          
          {/* Activities Section */}
          <Activities themeStyles={themeStyles} isDarkMode={isDarkMode} destination={tripData.destination} />
          <DayPlan themeStyles={themeStyles} duration={tripData.duration} />
          
          {/* Popular Activities Section */}
          <PopularActivities themeStyles={themeStyles} destination={tripData.destination} />

          {/* Bottom Navigation - Fixed */}
          <BottomNavigation isDarkMode={isDarkMode} themeStyles={themeStyles} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
