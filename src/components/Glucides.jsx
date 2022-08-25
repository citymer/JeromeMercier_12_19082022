import React from 'react'
import glucides from '../assets/carbs-icon.png'

const Glucides = (data) => {
  let keyData = data.data.keyData
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={glucides} alt="proteines" />
      </div>
      <div className="textDiv">
        <p className="textTop">{keyData.carbohydrateCount}g</p>
        <p className="textBottom">Glucides</p>
      </div>
    </div>
  )
}

export default Glucides
