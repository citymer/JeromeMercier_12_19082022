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
//import useFetch from '../services/fetchAPI'
import { useParams } from 'react-router-dom'
import useFetchs from '../services/mockAPI'

/**
 * function that creates the home page with its components
 * @returns the Home page html
 */
const Home = () => {
  let { userId } = useParams()
  let {
    mainData,
    name,
    calories,
    protein,
    lipid,
    glucid,
    activityData,
    averageSessionsData,
    day,
    value,
    value1,
    value2,
    value3,
    value4,
    value5,
    error,
  } = useFetchs(userId)

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
  const formatDay = () => {
    const jour = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return jour
  }
  const duree = () => {
    let session = averageSessionsData.sessions
    return session.map((temps) => temps.sessionLength)
  }

  const scores = () => {
    let score = []
    if (mainData?.score !== undefined) {
      score = mainData.score * 100
    }
    if (mainData?.todayScore !== undefined) {
      score = mainData.todayScore * 100
    }
    return score
  }
  /**
   * formats data from Intensite.jsx
   * @returns data
   */
  const format = () => {
    let datas = [
      { values: 10, kind: 'Cardio' },
      { values: 10, kind: 'Energie' },
      { values: 10, kind: 'Endurance' },
      { values: 40, kind: 'Force' },
      { values: 20, kind: 'Vitesse' },
      { values: 70, kind: 'Intensité' },
    ]
    datas[0].values = value
    datas[1].values = value1
    datas[2].values = value2
    datas[3].values = value3
    datas[4].values = value4
    datas[5].values = value5

    return datas
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
                  <Moyenne
                    data={averageSessionsData}
                    jour={formatDay}
                    temps={duree}
                  />
                  <Intensite kind={format} />
                  <Score data={mainData} score={scores} />
                </div>
              </div>
              <div className="iconeValeur">
                <Calories data={calories} />
                <Proteines data={protein} />
                <Glucides data={glucid} />
                <Lipides data={lipid} />
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}

export default Home
