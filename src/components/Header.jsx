import React from 'react'
import logo from '../assets/logo.png'

/**
 * builds the header
 * @returns header
 */
const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" className="logo" />
        <p>Acceuil</p>
        <p>Profil</p>
        <p>Réglage</p>
        <p className="communaute">Communauté</p>
      </nav>
    </header>
  )
}

export default Header
