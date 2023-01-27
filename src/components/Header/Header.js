import React from 'react';
import { useGameContext } from '../../context/gameContext.js';
import './Header.css';

export default function Header() {
  const { currentPlayer, active, handleReset } = useGameContext();
  return (
    <header>
      <h1>{"Tic Tac n' Toe"}</h1>
      <h4>{`Player ${currentPlayer} it's your turn!`}</h4>
      {active ? <h4>Fight to win</h4> : <button onClick={handleReset}>Lets try again</button>}
    </header>
  );
}
