import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import WeatherContext from '../context/weather/weatherContext';

const Cities = () => {
  const weatherContext = useContext(WeatherContext);
  const { cities } = weatherContext;

  return (
    <Fragment>
      <ul>
        {cities.map((city, index) => {
          return (
            <li className='lead text-center' key={index}>
              <Link to={'weather/' + city}>{city}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
export default Cities;
