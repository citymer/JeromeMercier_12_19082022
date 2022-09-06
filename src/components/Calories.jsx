import React from 'react'
import calories from '../assets/calories.png'

/**
 * builds the component that displays the amount of calorie
 * @param {object} data
 * @returns calorie picture and amount of calorie
 */
const Calories = (data) => {
  let keyData = data.data.keyData
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={calories} alt="calories" />
      </div>
      <div className="textDiv">
        <p className="textTop">{keyData.calorieCount}KCal</p>
        <p className="textBottom">Calories</p>
      </div>
    </div>
  )
}

export default Calories
