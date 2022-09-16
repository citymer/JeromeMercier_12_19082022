import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../mocks/data'

const useFetchs = (userId) => {
  const mainData = USER_MAIN_DATA.find((elem) => elem.id === parseInt(userId))
  const activityData = USER_ACTIVITY.find(
    (elem) => elem.userId === parseInt(userId)
  )
  const averageSessionsData = USER_AVERAGE_SESSIONS.find(
    (elem) => elem.userId === parseInt(userId)
  )
  const performanceData = USER_PERFORMANCE.find(
    (elem) => elem.userId === parseInt(userId)
  )
  const name = mainData.userInfos.firstName
  const calories = mainData.keyData.calorieCount
  const protein = mainData.keyData.proteinCount
  const lipid = mainData.keyData.lipidCount
  const glucid = mainData.keyData.carbohydrateCount
  const day = averageSessionsData.sessions
  const value = performanceData.data[0].value
  const value1 = performanceData.data[1].value
  const value2 = performanceData.data[2].value
  const value3 = performanceData.data[3].value
  const value4 = performanceData.data[4].value
  const value5 = performanceData.data[5].value
  const isLoading = null
  const error = null

  return {
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
    isLoading,
    error,
  }
}

export default useFetchs
