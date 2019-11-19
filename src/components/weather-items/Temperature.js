import React, { useContext } from 'react';
import WeatherContext from '../../context/weather/weatherContext';
// import Spinner from '../common/spinner/Spinner';

// Fusion chart imports
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Widgets from 'fusioncharts/fusioncharts.widgets';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
ReactFC.fcRoot(FusionCharts, Widgets, FusionTheme);
const chartConfigs = {
  type: 'thermometer', // The gauge type
  width: '300', // Width of the gauge
  height: '180', // Height of the gauge
  dataFormat: 'json', // Data type
  dataSource: {
    chart: {
      lowerLimit: '0',
      upperLimit: '50',
      numberSuffix: '°C',
      thmFillColor: '#008ee4',
      thmOriginX: '100'
    },
    value: 0
  }
};

const Temperature = () => {
  const weatherContext = useContext(WeatherContext);

  const { weatherData } = weatherContext;
  chartConfigs.dataSource.value = weatherData.temperature.value;

  return (
    <div>
      <div className=' weather-app--weather-item'>
        <ReactFC {...chartConfigs} />
        <div>
          <h3>
            {' '}
            Temperature = {weatherData.temperature.value}
            {weatherData.temperature.unit}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Temperature;
