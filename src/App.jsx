import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import StatusBar from './components/StatusBar';
import ThemeToggle from './components/ThemeToggle';
import DestinationInput from './components/DestinationInput';
import DurationDropdown from './components/DurationDropdown';
import TravelingWithOptions from './components/TravelingWithOptions';
import ContinueButton from './components/ContinueButton';
import Dashboard from './components/Dashboard';

const HomePage = ({ theme, setTheme, destination, setDestination, durationOpen, setDurationOpen, duration, setDuration, travelingWith, setTravelingWith, handleContinue }) => {
  return (
    <div className={`min-h-screen flex justify-center items-center ${theme === 'light' ? 'bg-[#f5f5ff]' : 'bg-black'}`}>
      <div className="w-[375px] h-[730px] overflow-y-auto relative shadow-2xl rounded-[3rem] flex flex-col">
        <StatusBar theme={theme} />
        <ThemeToggle theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <div className="flex-1 px-4 pt-6 pb-4 flex flex-col max-w-md mx-auto w-full">
          <div className="mb-6">
            <h1 className={`text-[22px] font-bold mb-1 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Plan Your Journey, Your Way!</h1>
            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
              Let's create your personalized travel experience
            </p>
          </div>
          <div className="space-y-5 flex-1">
            <DestinationInput theme={theme} destination={destination} setDestination={setDestination} />
            <DurationDropdown theme={theme} durationOpen={durationOpen} setDurationOpen={setDurationOpen} duration={duration} setDuration={setDuration} />
            <TravelingWithOptions theme={theme} travelingWith={travelingWith} handleTravelingWithSelect={setTravelingWith} />
          </div>
          <ContinueButton theme={theme} handleContinue={handleContinue} />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [theme, setTheme] = useState('light');
  const [destination, setDestination] = useState('');
  const [durationOpen, setDurationOpen] = useState(false);
  const [duration, setDuration] = useState('');
  const [travelingWith, setTravelingWith] = useState(null);
  const navigate = useNavigate();

  const handleContinue = () => {
    // Save data to localStorage
    localStorage.setItem('destination', destination);
    localStorage.setItem('duration', duration);
    localStorage.setItem('travelingWith', travelingWith);
    
    // Navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <Routes>
      <Route path="/" element={
        <HomePage
          theme={theme}
          setTheme={setTheme}
          destination={destination}
          setDestination={setDestination}
          durationOpen={durationOpen}
          setDurationOpen={setDurationOpen}
          duration={duration}
          setDuration={setDuration}
          travelingWith={travelingWith}
          setTravelingWith={setTravelingWith}
          handleContinue={handleContinue}
        />
      } />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;
