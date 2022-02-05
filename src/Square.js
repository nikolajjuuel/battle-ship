import { useState } from "react";

const fire = (e) => {
  console.log(e);
  e.target.style.backgroundColor = 'blue';

}


const Square = (props) => {

  const { x, y, name } = props;
  const location = `${x}${y}`;

  return (
    <div className={name} id={location} onClick={fire}>
    </div>
  )
}

export default Square;