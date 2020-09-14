import React, { useState } from 'react';
import Game from '../helpers/Game';
import Row from './Row';
import './PlayArea.scss';

const PlayArea = () => {
  const [game] = useState(new Game());
  const [currentColor, setCurrentColor] = useState('red');

  const cellClickHandler = (cell) => {
    game.board.board[cell.y][cell.x].content = currentColor;
    swapColor();
  };

  const swapColor = () => {
    const nextColor = currentColor === 'red' ? 'blue' : 'red';
    setCurrentColor(nextColor);
  };

  return (
    <div>
      <div className="play-area">
        { game.board.board.map((row, index) => <Row key={index} row={row} cellClickHandler={cellClickHandler} />) }
      </div>
    </div>
  )
};

export default PlayArea;
