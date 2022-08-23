import React from 'react'
import calories from '../assets/calories.png'
const Calories = () => {
  return (
    <div className="calories">
      <div className="iconDiv">
        <img className="imgCalorie" src={calories} alt="calories" />
      </div>
      <div className="textDiv">
        <p className="kcal">1.930KCal</p>
        <p className="textCalories">Calories</p>
      </div>
    </div>
  )
}

export default Calories
