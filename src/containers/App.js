import React, {useState} from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Game from '../components/Game';
import {Route} from 'react-router-dom';



function App() {
  const [operation,setOperation]=useState('+');
  const [maxNumber, setMaxNumber] = useState(10)
  return (
    <div style={{color:'blue',backgroundColor:'orange'}} className="App">
      <Header />
    
      <Route exact path='/' component = {()=>
      <Main operation={operation}
          setOperation={setOperation}
          maxNumber={maxNumber}
          setMaxNumber={setMaxNumber} />} />

      <Route path="/play" 
        component={()=>
        <Game operation={operation}
          maxNumber={maxNumber}/>}/>
      <Footer />
    </div>
  );
}

export default App;
