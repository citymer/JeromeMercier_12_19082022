import React from 'react'
import proteines from '../assets/protein-icon.png'

const Proteines = (data) => {
  let keyData = data.data.keyData
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={proteines} alt="proteines" />
      </div>
      <div className="textDiv">
        <p className="textTop">{keyData.proteinCount}g</p>
        <p className="textBottom">Proteines</p>
      </div>
    </div>
  )
}

export default Proteines
