import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

function GameProvider({ children }) {
  const [board, setBoard] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [active, setActive] = useState(true);
  const [gameMessage, setGameMessage] = useState('');

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
