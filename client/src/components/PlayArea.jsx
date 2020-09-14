import React, { useState } from 'react';
import Game from '../helpers/Game';
import Row from './Row';
import './PlayArea.scss';

const PlayArea = () => {
  const [game, setGame] = useState(new Game());
  const [currentColor, setCurrentColor] = useState('red');

  const cellClickHandler = (cell) => {
    if (!cell.content) {
      setGame(prevGame => {
        const newGame = {...prevGame};
        newGame.board.board[cell.y][cell.x].content = currentColor;
        return newGame;
      });
      
      swapColor();
    }
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
