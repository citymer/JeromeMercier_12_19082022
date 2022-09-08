import React from 'react'
import Header from '../components/Header'
import NavLeft from '../components/NavLeft'
import { Link } from 'react-router-dom'

/**
 * builds a page that displays an error
 * @returns an error page
 */
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
