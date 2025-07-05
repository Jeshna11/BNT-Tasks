import React, { useState, useEffect } from 'react';
import '../App.css'; 
function TrafficLight() {
  const [light, setLight] = useState('green');
  const [autoMode, setAutoMode] = useState(true);
  useEffect(() => {
    if (!autoMode) return;
    let timer;
    if (light === 'green') {
      timer = setTimeout(() => setLight('yellow'), 15000);
    } else if (light === 'yellow') {
      timer = setTimeout(() => setLight('red'), 5000);
    } else if (light === 'red') {
      timer = setTimeout(() => setLight('green'), 10000);
    }
    return () => clearTimeout(timer);
  }, [light, autoMode]);
  const handleManual = (color) => {
    setAutoMode(false);
    setLight(color);
  };
  const handleStart = () => {
    setAutoMode(true);
    setLight('green');
  };
  return (
    <div className="App">
      <h1>Traffic Light</h1>
      <div className="traffic-light">
        <div className={`light red ${light === 'red' ? 'on' : ''}`}></div>
        <div className={`light yellow ${light === 'yellow' ? 'on' : ''}`}></div>
        <div className={`light green ${light === 'green' ? 'on' : ''}`}></div>
      </div>
      <div className="buttons">
        <button onClick={handleStart}>Start Auto</button>
        <button onClick={() => handleManual('red')}>Red</button>
        <button onClick={() => handleManual('yellow')}>Yellow</button>
        <button onClick={() => handleManual('green')}>Green</button>
      </div>
    </div>
  );
}
export default TrafficLight;