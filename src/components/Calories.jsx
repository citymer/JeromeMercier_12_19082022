import React from 'react'
import calories from '../assets/calories.png'
import PropTypes from 'prop-types'

/**
 * builds the component that displays the amount of calorie
 * @param {{data: number}} data
 * @returns calorie picture and amount of calorie
 */
const Calories = (props) => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={calories} alt="calories" />
      </div>
      <div className="textDiv">
        <p className="textTop">{props.data}KCal</p>
        <p className="textBottom">Calories</p>
      </div>
    </div>
  )
}

Calories.propTypes = {
  data: PropTypes.number.isRequired,
}
export default Calories
