import Square from './Square'
import { useState } from 'react';
const PlayerBoard = () => {
  const pieces = [];

  console.log('pieces', pieces)
  const size = 400;
  const width = 40;
  const columns = Math.floor(size / width)
  const rows = Math.floor(size / width)

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++)
      pieces.push(<Square x={x} y={y} key={`${x},${y}`} name={'ocean'} target={true} />)

  }

  return (
    <div className="board">
      {pieces}
    </div>
  )

}

export default PlayerBoard;