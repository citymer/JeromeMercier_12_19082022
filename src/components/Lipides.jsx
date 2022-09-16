import React from 'react'
import lipides from '../assets/fat-icon.png'
import PropTypes from 'prop-types'

/**
 * build the component that displays the amount of lipid
 * @param {object} props
 * @returns lipid picture and amount of lipid
 */
const Lipides = (props) => {
  return (
    <div className="boite">
      <div className="iconDiv">
        <img className="img" src={lipides} alt="lipides" />
      </div>
      <div className="textDiv">
        <p className="textTop">{props.data}g</p>
        <p className="textBottom">Lipides</p>
      </div>
    </div>
  )
}
Lipides.propTypes = {
  data: PropTypes.number.isRequired,
}

export default Lipides
