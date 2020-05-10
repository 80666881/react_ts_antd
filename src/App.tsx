import React, { useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import useURLLoader from './hooks/useURLLoader'
import Like from './components/LikeButton'
interface IShowResult{
  message:string;
  status:string;
}


function App() {
  const [show, setShow] = useState(true)
  const [data,loading] = useURLLoader('https://dog.ceo/api/breeds/image/random')
  const dogResult = data as IShowResult
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=>{setShow(!show)}}>Toggle Tracker</button>
          <br/>
          <Like></Like>
        </p>
        <Hello></Hello>
        {loading?<p>狗 读取中</p>:
          <img src={dogResult.message} alt=''></img>
        }
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
