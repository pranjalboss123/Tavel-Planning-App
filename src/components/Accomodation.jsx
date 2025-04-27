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
        // First get coordinates for the city
        const geoResponse = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${encodeURIComponent(city)}&apikey=${import.meta.env.VITE_OPENTRIP_API_KEY}`);
        const geoData = await geoResponse.json();
        
        if (geoData.lat && geoData.lon) {
          // Then fetch accommodations near these coordinates using correct category
          const hotelsResponse = await fetch(
            `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${geoData.lon}&lat=${geoData.lat}&kinds=accomodations&format=json&apikey=${import.meta.env.VITE_OPENTRIP_API_KEY}`
          );
          const hotelsData = await hotelsResponse.json();
          
          // Check if hotelsData is an array and has items
          if (Array.isArray(hotelsData) && hotelsData.length > 0) {
            // Process only first 3 hotels
            const hotelResults = hotelsData.slice(0, 3).map(hotel => ({
              name: hotel.name || `${city} Luxury Hotel`,
              description: hotel.kinds ? `${hotel.kinds.replace(/,/g, ', ')}` : `${city} City Center`,
              rating: (Math.random() * (5 - 4) + 4).toFixed(1),
              reviews: Math.floor(Math.random() * (500 - 300) + 300),
              image: `https://source.unsplash.com/featured/?hotel,${encodeURIComponent(city)}&${Math.random()}`
            }));
            console.log('Processed hotel results:', hotelResults);
            setHotels(hotelResults);
          } else {
            console.log('No hotels found in the response:', hotelsData);
            // Set default hotels for the city if no results found
            setHotels([{
              name: `${city} Grand Hotel`,
              description: `Luxury Stay in ${city}`,
              rating: "4.5",
              reviews: "384",
              image: `https://source.unsplash.com/featured/?hotel,${encodeURIComponent(city)}&1`
            },
            {
              name: `${city} Plaza`,
              description: `City Center Location`,
              rating: "4.8",
              reviews: "426",
              image: `https://source.unsplash.com/featured/?hotel,${encodeURIComponent(city)}&2`
            },
            {
              name: `${city} Resort`,
              description: `Premium Location`,
              rating: "4.6",
              reviews: "312",
              image: `https://source.unsplash.com/featured/?hotel,${encodeURIComponent(city)}&3`
            }]);
          }
        }
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
