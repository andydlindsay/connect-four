import React from 'react';
import Cell from './Cell';
import './Row.scss';

const Row = ({row, cellClickHandler}) => {
  return (
    <div className="row">
    { row.map((cell, index) => <Cell key={index} cell={cell} cellClickHandler={cellClickHandler} />) }
    </div>
  )
};

export default Row;
