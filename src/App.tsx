import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Like from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
function App() {
  const [show, setShow] = useState(true)
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=>{setShow(!show)}}>Toggle Tracker</button>
        </p>
        <Hello></Hello>
        <p>X:{positions.x},Y:{positions.y}</p>
        <Like></Like>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
