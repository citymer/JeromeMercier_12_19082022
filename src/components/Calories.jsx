import React from 'react'
import calories from '../assets/calories.png'
const Calories = () => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={calories} alt="calories" />
      </div>
      <div className="textDiv">
        <p className="textTop">1.930KCal</p>
        <p className="textBottom">Calories</p>
      </div>
    </div>
  )
}

export default Calories
