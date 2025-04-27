import React, { useState, useEffect } from 'react';

const DestinationInput = ({ theme, destination, setDestination }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!destination) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(destination)}&key=1594e59a3bef449d9f09582dd06a8045&limit=5`
        );
        const data = await response.json();
        
        const locations = data.results.map(result => ({
          name: result.formatted,
          country: result.components.country
        }));
        
        setSuggestions(locations);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Error fetching locations:', error);
        setSuggestions([]);
      }
      setLoading(false);
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [destination]);

  // Add effect to hide suggestions after 3 seconds of inactivity
  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setShowSuggestions(false);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }, [destination]);

  const handleLocationSelect = (selectedLocation) => {
    setDestination(selectedLocation);
    setShowSuggestions(false); // Immediately hide suggestions when location is selected
  };

  return (
    <div>
      <label className={`block mb-2 text-sm font-medium ${theme === 'light' ? 'text-black' : 'text-white'}`}>
        Where would you like to go?
      </label>
      <div className="relative">
        <div className={`flex items-center h-12 px-3 rounded-md border ${theme === 'light' ? 'bg-white border-gray-300' : 'bg-[rgb(51,51,51)] border-gray-700'}`}>
          <i className={`fas fa-map-marker-alt ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}></i>
          <input
            type="text"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={`w-full ml-2 focus:outline-none border-none text-sm ${theme === 'light' ? 'bg-white text-black placeholder-gray-400' : 'bg-[rgb(51,51,51)] text-white placeholder-gray-500'}`}
          />
          {loading && (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-500 border-t-transparent"></div>
          )}
        </div>
        {destination && suggestions.length > 0 && showSuggestions && (
          <div className={`absolute z-20 w-full mt-1 rounded-md shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-800'}`}>
            <ul className="py-1">
              {suggestions.map((place) => (
                <li
                  key={place.name}
                  onClick={() => handleLocationSelect(place.name)}
                  className={`px-3 py-2 cursor-pointer flex items-center ${theme === 'light' ? 'hover:bg-gray-100 text-black' : 'hover:bg-[rgb(51, 51, 51)] text-white'}`}
                >
                  <i className="fas fa-map-marker-alt mr-2 text-gray-400"></i>
                  <div>
                    <div className="text-sm">{place.name}</div>
                    <div className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>
                      {place.country}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationInput;
