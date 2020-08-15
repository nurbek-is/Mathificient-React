import React from 'react'
import Score from './Score';	
import Timer from './Timer';	
import Equation from './Equation';	
import NumberButton from './NumberButton';	
import ClearButton from './ClearButton';
import './Game.css';	

function Game(props) {

return (
    <div>
    Operation is <strong>{props.operation}</strong><br />
    Maximum number is <strong>{props.maxNumber}</strong>.
    <main className="text-center" id="game-container">
  <div className="row border-bottom" style={{fontSize:"1.5em"}}>
    <div className="col px-3 text-left">
      <Score score="0" />
    </div>
    <div  className="col px-3 text-right">
      <Timer timeLeft="60" />
    </div>
  </div>
  <div className="row text-secondary my-2" id="equation">
    <Equation question="1 + 1" answer="2" />
  </div>
  <div className="row" id="buttons">
    <div className="col">
      <NumberButton value="1" />
      <NumberButton value="2" />
      <NumberButton value="3" />
      <NumberButton value="4" />
      <NumberButton value="5" />
      <NumberButton value="6" />
      <NumberButton value="7" />
      <NumberButton value="8" />
      <NumberButton value="9" />
      <NumberButton value="0" />
      <ClearButton />
    </div>
  </div>
</main>
    </div>
    )
}
export default Game;