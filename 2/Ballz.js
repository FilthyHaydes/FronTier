import './App.css';
import { useState } from 'react';

function Clicker(){
  setball(Math.floor(Math.random() * 6) + 1)


  const onButtonClicked = () =>{
    console.log("Button clicked");
    setball(6);
    console.log(leftDiceNumber);

  }
  return (
    <div className="App">
      <header>deeznuts</header>
      <main>
        <button onClick={onButtonClicked}>
        <img src={require(`./project-name/public${leftDiceNumber}.png`)}/>
        </button>
      </main>
    </div>
  );
}

export default App;
