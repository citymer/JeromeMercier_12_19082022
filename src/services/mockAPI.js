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
  const isLoading = null
  const error = null
  return {
    mainData,
    activityData,
    averageSessionsData,
    performanceData,
    isLoading,
    error,
  }
}

export default useFetchs
