import React from 'react';
import './Cell.scss';

const Cell = ({cell, cellClickHandler: clickHandler}) => {
  const className = `cell ${cell.content ? cell.content : ''}`;

  return (
    <div className={className} onClick={() => clickHandler(cell)}></div>
  )
};

export default Cell;
