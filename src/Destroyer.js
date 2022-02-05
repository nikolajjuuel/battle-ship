import Square from "./Square";
import { useDrag } from "react-dnd";

const Destroyer = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'destroyer',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })

  }))

  return (
    <div className="destroyer" ref={drag}>
      <Square x={0} y={0} name={'destroyer-box'} />
      <Square x={0} y={1} name={'destroyer-box'} />
    </div>
  )
}


export default Destroyer;