import React from 'react'
import glucides from '../assets/carbs-icon.png'
import PropTypes from 'prop-types'
/**
 * builds the component that displays the amount of carbohydrate
 * @param {object} data
 * @returns carbohydrate picture and amount of carbohydrate
 */
const Glucides = (props) => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={glucides} alt="glucides" />
      </div>
      <div className="textDiv">
        <p className="textTop">{props.data}g</p>
        <p className="textBottom">Glucides</p>
      </div>
    </div>
  )
}
Glucides.propTypes = {
  data: PropTypes.number.isRequired,
}
export default Glucides
