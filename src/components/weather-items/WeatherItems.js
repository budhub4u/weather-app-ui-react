import React, { useContext, useEffect } from 'react';
import WeatherContext from '../../context/weather/weatherContext';
import Temperature from './Temperature';
import AirQuality from './AirQuality';

const WeatherItems = match => {
  const weatherContext = useContext(WeatherContext);

  useEffect(() => {
    weatherContext.getWeather(match.match.params.city);

    const myInterval = setInterval(() => {
      weatherContext.getWeather(match.match.params.city);
      //weatherContext.refreshWeather();
    }, 8000);

    return () => {
      console.log('unmounting weather items... clearing the timer');
      clearInterval(myInterval);
    };
  }, []);

  return (
    <div className='weather-app--content'>
      <h1>{weatherContext.city}</h1>
      <div className='weather-app--weather-items'>
        <Temperature></Temperature>
        <AirQuality></AirQuality>
      </div>
    </div>
  );
};

export default WeatherItems;
