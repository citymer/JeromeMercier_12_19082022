import React from 'react'
import lipides from '../assets/fat-icon.png'

/**
 * build the component that displays the amount of lipid
 * @param {object} data
 * @returns lipid picture and amount of lipid
 */
const Lipides = (data) => {
  let keyData = data.data.keyData
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={lipides} alt="lipides" />
      </div>
      <div className="textDiv">
        <p className="textTop">{keyData.lipidCount}g</p>
        <p className="textBottom">Lipides</p>
      </div>
    </div>
  )
}

export default Lipides
