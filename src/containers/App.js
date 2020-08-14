import React, {useState} from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Game from '../components/Game';

function App() {
  const [operation,setOperation]=useState('+');
  const [maxNumber, setMaxNumber]=useState(10)
  return (
    <div className="App">
      <Header />
      <h1>Mathificent</h1>
      <Main operation={operation} setOperation = {setOperation} maxNumber = {maxNumber} 
      setMaxNumber = {setMaxNumber}/><br />
      <Game operation = {operation} maxNumber={maxNumber} />
      <Footer />
    </div>
  );
}

export default App;
