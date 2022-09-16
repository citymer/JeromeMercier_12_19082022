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
import useFetch from '../services/fetchAPI'
import { useParams } from 'react-router-dom'
//import useFetchs from '../services/mockAPI'

/**
 * function that creates the home page with its components
 * @returns the Home page html
 */
const Home = () => {
  let { userId } = useParams()
  let {
    mainData,
    name,
    activityData,
    averageSessionsData,
    day,
    performanceData,
    error,
  } = useFetch(userId)

  const comptageJour = () => {
    return day.map((jour) => jour.day)
  }
  const calorie = () => {
    let session = activityData.sessions
    return session.map((cal) => cal.calories)
  }
  const poids = () => {
    let session = activityData.sessions
    return session.map((kg) => kg.kilogram)
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
            <Titres data={name} />

            <div className="resultat">
              <div className="graphiques">
                <ActiviteQuotidienne
                  data={activityData}
                  day={comptageJour}
                  cal={calorie}
                  kg={poids}
                />
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
