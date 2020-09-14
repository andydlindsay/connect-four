import React, { useState } from 'react';
import Game from '../helpers/Game';
import Row from './Row';
import './PlayArea.scss';

const PlayArea = () => {
  const [game] = useState(new Game());
  console.dir(game);

  return (
    <div>
      <div className="play-area">
        { game.board.board.map((row) => <Row row={row} />) }
      </div>
    </div>
  )
};

export default PlayArea;
