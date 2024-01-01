import React from 'react';

const WeatherCard = ({ temperature, humidity }) => {
  return (
    <div className="card text-center my-3">
      <div className="card-header">
        Paris: Current Weather
      </div>
      <div className="card-body">
        <h5 className="card-title">Temperature: {temperature}°C</h5>
        <p className="card-text">Humidity: {humidity}%</p>
      </div>
    </div>
  );
};

export default WeatherCard;
