import './App.css';
import { useState } from 'react';

export function SomeApp(){
  const [ballNum, setBall] = useState(5)

  const onButtonClicked = () =>{
      setBall(Math.floor(Math.random() * 5) + 1)
    }


  return (
    <div className="SomeApp">
      <main>
        <button onClick={onButtonClicked}>
        <img src={require(`./assets/ball${ballNum}.png`)}/>
        </button>
      </main>
    </div>
  );
}
export function AnozaApp(){
  const [ballNum, setBall] = useState(5)

  const onButtonClicked = () =>{
      setBall(Math.floor(Math.random() * 5) + 1)
    }


  return (
    <div className="AnozaApp">
      <main>
        <button onClick={onButtonClicked}>
        <img src={require(`./assets/ball${ballNum}.png`)}/>
        </button>
      </main>
    </div>
  );
}
