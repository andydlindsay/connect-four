import React, { useState } from 'react';
import Board from '../helpers/Board';
import Row from './Row';
import { cloneDeep } from 'lodash';
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
        const newGame = {...prevGame, board: cloneDeep(prevGame.board)};
        newGame.board.placeLowest(newGame.currentColor, cell.x);
        newGame.currentColor = nextColor(newGame.currentColor);
        newGame.gameOver = newGame.board.checkForWin();
        return newGame;
      });
    }
  };

  const resetGame = () => {
    setGame(prevGame => {
      const newGame = {...prevGame, board: cloneDeep(prevGame.board)};
      newGame.board.reset();
      newGame.currentColor = 'red';
      newGame.gameOver = false;
      return newGame;
    });
  };

  return (
    <div className="parent">
      <div className="play-area">
        { game.board.board.map((row, index) => (
          <Row
            key={index}
            row={row}
            cellClickHandler={cellClickHandler} 
          />)) }
      </div>
      <div className="data-display">
        { !game.gameOver && <h2>It's {game.currentColor}'s turn!</h2> }
        { game.gameOver && <h2>Game Over! {nextColor(game.currentColor)} wins!</h2> }
        <button onClick={resetGame}>Start New Game</button>
      </div>
    </div>
  );
};

export default PlayArea;
