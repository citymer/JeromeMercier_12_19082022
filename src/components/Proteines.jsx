import React from 'react'
import proteines from '../assets/protein-icon.png'

const Proteines = () => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={proteines} alt="proteines" />
      </div>
      <div className="textDiv">
        <p className="textTop">155g</p>
        <p className="textBottom">Proteines</p>
      </div>
    </div>
  )
}

export default Proteines
