import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Like from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMousePosition'
import withLoader from './hoc/withLoader'

interface IShowResult{
  message:string;
  status:string;
}
const DogShow:React.FC<{data:IShowResult}> = ({data})=>{
  return (
    <>
    <h2>Dog show:{data.status}</h2>
    <img src={data.message} alt=""/>
    </>
  )
}
function App() {
  const [show, setShow] = useState(true)
  // const positions = useMousePosition()
  const WrappedDogShow = withLoader(DogShow,'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button onClick={()=>{setShow(!show)}}>Toggle Tracker</button>
        </p>
        <Hello></Hello>
        <WrappedDogShow></WrappedDogShow>
        {/* <Like></Like> */}
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
