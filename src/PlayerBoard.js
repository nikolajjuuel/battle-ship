const Square = (props) => {
  console.log(props)
  const { x, y } = props;
  const location = `${x}${y}`;

  return (
    <div className="square" id={location}>

    </div>
  )
}


const PlayerBoard = () => {
  const pieces = [];
  const size = 400;
  const width = 40;
  const columns = Math.floor(size / width)
  const rows = Math.floor(size / width)


  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < columns; y++)
      pieces.push(<Square x={x} y={y} />)

  }

  return (
    <div className="board">
      {pieces}
    </div>
  )

}

export default PlayerBoard;