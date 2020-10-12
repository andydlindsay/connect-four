import React from 'react';
import './Cell.scss';

const Cell = ({cell, cellClickHandler}) => {
  const className = `cell ${cell.content ? cell.content : ''}`;

  const clickHandler = (event) => {
    event.stopPropagation();
    cellClickHandler(cell);
  }

  return (
    <div className={className} onClick={(e) => clickHandler(e)}></div>
  )
};

export default Cell;
