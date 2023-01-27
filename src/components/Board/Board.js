import React from 'react';
import { useGameContext } from '../../context/gameContext.js';
import Box from './Box.js';
import './Board.css';

export default function Board() {
  const { board } = useGameContext();
  return (
    <section className="gameBoard">
      {board.map((box) => (
        <Box key={box.id} {...{ box }} />
      ))}
    </section>
  );
}
