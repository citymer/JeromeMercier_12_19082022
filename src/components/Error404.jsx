import React from 'react'
import Header from './Header'
import NavLeft from './NavLeft'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <Header />
      <main>
        <NavLeft />
        <section className="contentError">
          <p className="erreur">ERREUR 404</p>
          <ul>
            <Link to="/">
              <li className="retourner">Retourner sur la page d'acceuil</li>
            </Link>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Error404