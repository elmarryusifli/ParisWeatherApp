import React, { useState, useEffect } from 'react';
import WeatherCard from './WeatherCard';

function App() {
  const [weatherData, setWeatherData] = useState({ temperature: null, humidity: null });

  useEffect(() => {
    const fetchWeather = async () => {
      // Replace with your API key
      const apiKey = 'YOUR_API_KEY';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apiKey}`);
      const data = await response.json();
      setWeatherData({
        temperature: data.main.temp - 273.15, // Convert from Kelvin to Celsius
        humidity: data.main.humidity
      });
    };

    fetchWeather();
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center">Weather App</h1>
      {weatherData.temperature !== null && (
        <WeatherCard 
          temperature={weatherData.temperature.toFixed(1)} 
          humidity={weatherData.humidity} 
        />
      )}
    </div>
  );
}

export default App;
