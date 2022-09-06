import React from 'react'
import glucides from '../assets/carbs-icon.png'

/**
 * builds the component that displays the amount of carbohydrate
 * @param {object} data
 * @returns carbohydrate picture and amount of carbohydrate
 */
const Glucides = (data) => {
  let keyData = data.data.keyData
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={glucides} alt="glucides" />
      </div>
      <div className="textDiv">
        <p className="textTop">{keyData.carbohydrateCount}g</p>
        <p className="textBottom">Glucides</p>
      </div>
    </div>
  )
}

export default Glucides
