import React, { createContext, useContext, useState } from 'react';
import boardData from '../ttt-data.js';

const GameContext = createContext();

function GameProvider({ children }) {
  const [board, setBoard] = useState(boardData);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(false);
  const [gameMessage, setGameMessage] = useState('');

  const handleClick = (space) => {
    console.log('click', space);
  };

  const handleReset = () => {
    setActive(true);
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        active,
        setActive,
        gameMessage,
        setGameMessage,
        handleClick,
        handleReset,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

function useGameContext() {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error('useGameContext must be used within the gameProvider');
  }

  return context;
}

export { GameProvider, GameContext, useGameContext };
