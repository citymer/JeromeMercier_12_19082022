import React from 'react'
import glucides from '../assets/carbs-icon.png'

const Glucides = () => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={glucides} alt="proteines" />
      </div>
      <div className="textDiv">
        <p className="textTop">290g</p>
        <p className="textBottom">Glucides</p>
      </div>
    </div>
  )
}

export default Glucides
