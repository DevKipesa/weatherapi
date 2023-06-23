import React, { useEffect, useState } from 'react';
import './Homepage.css';
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const apiKey = 'f6f35d56a1af4e679de6e7848370e29d';

  const fetchWeatherData = async () => {
    const apiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data.data[0]);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleSearch = () => {
    fetchWeatherData();
  };

  return (
    <div className='color'>
    <div className='Weather'>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && (
        <div>
          <h2>Current Weather in {weatherData.city_name}</h2>
          <p>Temperature: {weatherData.temp}&deg;C</p>
          <p>Weather Description: {weatherData.weather.description}</p>
          <p>Humidity: {weatherData.rh}%</p>
          <p>Wind Speed: {weatherData.wind_spd} m/s</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default WeatherComponent;
