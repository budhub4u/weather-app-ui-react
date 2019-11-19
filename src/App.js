import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import About from './components/pages/About';

import NotFound from './components/pages/NotFound';

import WeatherItems from './components/weather-items/WeatherItems';

import WeatherState from './context/weather/WeatherState';

function App() {
  return (
    <WeatherState>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />

          <Route exact path='/weather/:city' component={WeatherItems} />

          <Route component={NotFound} />
        </Switch>
        <div className='App'></div>
      </Router>
    </WeatherState>
  );
}

export default App;
