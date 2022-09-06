import React from 'react'
import yoga from '../assets/yoga.png'
import natation from '../assets/natation.png'
import velo from '../assets/velo.png'
import haltere from '../assets/haltere.png'

/**
 * buils the navigation located on the left with the icons
 * @returns {img} yoga natation velo haltere and copiryght
 */
const NavLeft = () => {
  return (
    <div className="navleft">
      <div className="contentIcon">
        <img src={yoga} alt="yoga" />
        <img src={natation} alt="yoga" />
        <img src={velo} alt="yoga" />
        <img src={haltere} alt="yoga" />
      </div>
      <p className="copiryght">Copiryght, SportSee 2020</p>
    </div>
  )
}

export default NavLeft
