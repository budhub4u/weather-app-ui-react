import React, { useReducer } from 'react';
import WeatherContext from './weatherContext';
import WeatherReducer from './weatherReducer';
import axios from 'axios';

import { GET_WEATHER, SET_LOADING } from '../types';

const weatherUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/weather-data/'
    : process.env.WEATHER_URL;
// Initial state used
const WeatherState = props => {
  const initialState = {
    cities: ['hyderabad', 'bangalore', 'mumbai'],
    city: 'hyderabad',
    weatherData: {
      id: 1,
      cityName: 'hyderabad',
      temperature: {
        value: 0,
        unit: 'deg_celsius'
      },
      airQuality: {
        aqi: 0
      }
    },
    loading: false
  };
  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  //get weather of a city
  const getWeather = async city => {
    try {
      setLoading();

      console.log('latest weather data of city = ' + city);
      const res = await axios.get(`${weatherUrl}/weathernow/${city}`);

      dispatch({ type: GET_WEATHER, payload: res.data });
    } catch (error) {
      console.log('Api call failed with error status: ', error.response.status);
      alert('Something went wrong. Click on Home to go back..');
    }
  };

  //set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <WeatherContext.Provider
      value={{
        cities: state.cities,
        city: state.city,
        weatherData: state.weatherData,
        loading: state.loading,
        getWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
