import React from 'react'
import lipides from '../assets/fat-icon.png'

const Lipides = () => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={lipides} alt="lipides" />
      </div>
      <div className="textDiv">
        <p className="textTop">50g</p>
        <p className="textBottom">Lipides</p>
      </div>
    </div>
  )
}

export default Lipides
