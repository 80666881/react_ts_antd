import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import useURLLoader from './hooks/useURLLoader'
import Like from './components/LikeButton'
interface IShowResult {
  message: string;
  status: string;
}

interface IThemeProps {
  [key: string]: { color: string; background: string }
}

const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee'
  },
  'dark': {
    color: '#fff',
    background: '#222'
  }
}

export const ThemeContext = React.createContext(themes.light)

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={() => { setShow(!show) }}>Toggle Tracker</button>
            <br />
            <Like></Like>
          </p>
          <Hello></Hello>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
