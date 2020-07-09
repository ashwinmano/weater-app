import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'weather-icons/css/weather-icons.css';
import './App.css';
import Weather from './components/weather_component';
function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
