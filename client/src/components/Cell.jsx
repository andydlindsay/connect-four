import React from 'react';
import './Cell.scss';

const Cell = ({cell}) => {
  const className = `cell ${cell.content ? cell.content : ''}`;

  return (
    <div className={className}></div>
  )
};

export default Cell;
