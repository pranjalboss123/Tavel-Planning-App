import React, { useState, useEffect } from 'react';

const Accommodation = ({ themeStyles, destination }) => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      if (!destination) {
        console.log('No destination provided');
        setLoading(false);
        return;
      }
      
      const city = destination.split(',')[0].trim();
      console.log('Fetching hotels for city:', city);
      setLoading(true);
      
      try {
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '299275c166mshd426f1e7214c919p1e674ajsna15483372551',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
          }
        };

        const response = await fetch(`https://hotels4.p.rapidapi.com/locations/v3/search?q=${encodeURIComponent(city)}&locale=en_US&langid=1033&siteid=300000001`, options);
        const data = await response.json();
        console.log('API Response:', data);
        
        // Check if data.sr exists and is an array
        if (!data.sr || !Array.isArray(data.sr)) {
          console.error('Invalid API response structure:', data);
          setHotels([]);
          setLoading(false);
          return;
        }

        // Extract hotel data
        const hotelResults = data.sr.slice(0, 3).map(hotel => {
          console.log('Processing hotel:', hotel);
          return {
            name: hotel.regionNames?.primaryDisplayName || 'Unknown Hotel',
            description: hotel.essId?.sourceName || 'No description available',
            rating: (Math.random() * (5 - 4) + 4).toFixed(1),
            reviews: Math.floor(Math.random() * (500 - 300) + 300),
            image: `https://readdy.ai/api/search-image?query=luxury%20hotel%20in%20${encodeURIComponent(city)}%2C%20modern%20architecture%2C%20professional%20photography&width=200&height=150&seq=${Math.floor(Math.random() * 10)}&orientation=landscape`
          };
        });

        console.log('Processed hotel results:', hotelResults);
        setHotels(hotelResults);
      } catch (error) {
        console.error('Error fetching hotels:', error);
        setHotels([]);
      }
      setLoading(false);
    };

    fetchHotels();
  }, [destination]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="fas fa-star text-yellow-400 text-xs"></i>
        ))}
        {hasHalfStar && <i className="fas fa-star-half-alt text-yellow-400 text-xs"></i>}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <i key={`empty-${i}`} className="far fa-star text-yellow-400 text-xs"></i>
        ))}
      </div>
    );
  };

  return (
    <div className="px-5 py-3">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold" style={{ color: themeStyles.text }}>
          Accommodation
        </h2>
        <a href="#" className="text-blue-600 text-sm cursor-pointer">
          See all
        </a>
      </div>
      <div 
        className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide" 
        style={{ 
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {loading ? (
          <div className="flex items-center justify-center w-full py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          hotels.map((hotel, index) => (
            <div
              key={index}
              className="min-w-[180px] rounded-xl shadow-md overflow-hidden"
              style={{ backgroundColor: themeStyles.cardBg }}
            >
              <div className="h-24 overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm" style={{ color: themeStyles.text }}>
                  {hotel.name}
                </h3>
                <p className="text-xs mt-1" style={{ color: themeStyles.secondaryText }}>
                  {hotel.description}
                </p>
                <div className="flex items-center mt-1">
                  {renderStars(parseFloat(hotel.rating))}
                  <span className="text-xs ml-1" style={{ color: themeStyles.secondaryText }}>
                    ({hotel.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Accommodation;
