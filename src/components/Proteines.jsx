import React from 'react'
import proteines from '../assets/protein-icon.png'

const Proteines = () => {
  return (
    <div className="proteines">
      <div className="iconDiv">
        <img className="imgProteine" src={proteines} alt="proteines" />
      </div>
      <div className="textDiv">
        <p className="g">155g</p>
        <p className="textProteines">Proteines</p>
      </div>
    </div>
  )
}

export default Proteines
