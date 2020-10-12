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
    currentColor: 'red',
    gameOver: false
  });

  const cellClickHandler = (cell) => {
    if (!cell.content && !game.gameOver) {
      setGame(prevGame => {
        const newGame = {...prevGame};
        newGame.board.placeLowest(newGame.currentColor, cell.x);
        newGame.currentColor = nextColor(newGame.currentColor);
        newGame.gameOver = newGame.board.checkForWin();
        return newGame;
      });
    }
  };

  return (
    <div className="parent">
      <div className="play-area">
        { game.board.board.map((row, index) => <Row key={index} row={row} cellClickHandler={cellClickHandler} />) }
      </div>
      <div className="data-display">
        <h2>Color: {game.currentColor}</h2>
        { game.gameOver && <h2>Game Over! {nextColor(game.currentColor)} wins!</h2> }
      </div>
    </div>
  )
};

export default PlayArea;
