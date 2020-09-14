import React from 'react';
import Cell from './Cell';
import './Row.scss';

const Row = (props) => {
  return (
    <div className="row">
    { props.row.map((cell) => <Cell cell={cell} />) }
    </div>
  )
};

export default Row;
