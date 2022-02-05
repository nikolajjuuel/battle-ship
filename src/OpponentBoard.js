import Square from './Square'

const OpponentBoard = () => {
  const pieces = [];
  const size = 400;
  const width = 40;
  const columns = Math.floor(size / width)
  const rows = Math.floor(size / width)

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++)
      pieces.push(<Square x={x} y={y} key={`${x},${y}`} />)

  }

  return (
    <div className="board opponent">
      {pieces}
    </div>
  )

}

export default OpponentBoard;