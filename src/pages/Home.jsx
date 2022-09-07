import React from 'react'
import Header from '../components/Header'
import NavLeft from '../components/NavLeft'
import Titres from '../components/Titres'
import ActiviteQuotidienne from '../components/ActiviteQuotidienne'
import Moyenne from '../components/Moyenne'
import Intensite from '../components/Intensite'
import Score from '../components/Score'
import Calories from '../components/Calories'
import Proteines from '../components/Proteines'
import Glucides from '../components/Glucides'
import Lipides from '../components/Lipides'
import { useParams } from 'react-router-dom'
import useFetchs from '../services/mockAPI'
import useFetch from '../services/fetchAPI'

/**
 * function that creates the home page with its components
 * @returns the Home page html
 */
const Home = () => {
  let { userId } = useParams()
  let { mainData, activityData, averageSessionsData, performanceData, error } =
    useFetch(userId)

  if (userId === undefined) {
    userId = 12
  }

  if (error) {
    return <span>.........Oups il y a eu un problème </span>
  }
  if (mainData !== undefined) {
    return (
      <div>
        <Header />
        <main>
          <NavLeft />
          <section>
            <Titres data={mainData} />

            <div className="resultat">
              <div className="graphiques">
                <ActiviteQuotidienne data={activityData} />
                <div className="troisGraphiques">
                  <Moyenne data={averageSessionsData} />
                  <Intensite data={performanceData} />
                  <Score data={mainData} />
                </div>
              </div>
              <div className="iconeValeur">
                <Calories data={mainData} />
                <Proteines data={mainData} />
                <Glucides data={mainData} />
                <Lipides data={mainData} />
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Home
