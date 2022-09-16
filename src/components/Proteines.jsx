import React from 'react'
import proteines from '../assets/protein-icon.png'
import PropTypes from 'prop-types'

/**
 * builds the component that displays the amount of protein
 * @param {object} props
 * @returns protein picture and amount of protein
 */
const Proteines = (props) => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={proteines} alt="proteines" />
      </div>
      <div className="textDiv">
        <p className="textTop">{props.data}g</p>
        <p className="textBottom">Proteines</p>
      </div>
    </div>
  )
}

Proteines.propTypes = {
  data: PropTypes.number.isRequired,
}
export default Proteines
