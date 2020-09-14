import React, { useState } from 'react';
import Board from '../helpers/Board';
import Row from './Row';
import './PlayArea.scss';

const nextColor = (currentColor) => {
  return currentColor === 'red' ? 'blue' : 'red';
};

const PlayArea = () => {
  const [game, setGame] = useState({
    board: new Board(7, 6),
    currentColor: 'red'
  });

  const cellClickHandler = (cell) => {
    if (!cell.content) {
      setGame(prevGame => {
        const newGame = {...prevGame};
        newGame.board.board[cell.y][cell.x].content = newGame.currentColor;
        newGame.currentColor = nextColor(newGame.currentColor);
        return newGame;
      });
    }
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
