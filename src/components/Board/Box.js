import React from 'react';
import { useGameContext } from '../../context/gameContext.js';
import './Box.css';

export default function Box({ box: { content, space } }) {
  const { handleClick } = useGameContext();

  return (
    <div className="box" onClick={() => handleClick(space, content)}>
      {content}
    </div>
  );
}
