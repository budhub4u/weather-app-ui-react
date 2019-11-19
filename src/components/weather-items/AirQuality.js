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
  type: 'angulargauge', // The gauge type
  width: '300', // Width of the gauge
  height: '180', // Height of the gauge
  dataFormat: 'json', // Data type
  dataSource: {
    chart: {
      lowerLimit: '0',
      upperLimit: '300',
      showValue: '1',
      numberSuffix: '',
      theme: 'fusion',
      showToolTip: '0'
    },

    colorRange: {
      color: [
        {
          minValue: '0',
          maxValue: '120',
          code: '#62B58F'
        },
        {
          minValue: '120',
          maxValue: '200',
          code: '#FFC533'
        },
        {
          minValue: '200',
          maxValue: '300',
          code: '#F2726F'
        }
      ]
    },
    dials: {
      dial: [
        {
          value: 0
        }
      ]
    }
  }
};

const AirQuality = () => {
  const weatherContext = useContext(WeatherContext);

  const { weatherData } = weatherContext;
  chartConfigs.dataSource.dials.dial[0].value = weatherData.airQuality.aqi;

  return (
    <div>
      <div className='weather-app--weather-item'>
        <ReactFC {...chartConfigs} />
        <div>
          <h3>Air Quality = {weatherData.airQuality.aqi}</h3>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
