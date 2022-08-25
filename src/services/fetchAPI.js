import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (userId) => {
  const [mainData, setMainData] = useState()
  const [activityData, setActivityData] = useState()
  const [averageSessionsData, setAverageSessionsData] = useState()
  const [performanceData, setPerformanceData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const userMain = `http://localhost:3000/user/${userId}`
    const userActivity = `http://localhost:3000/user/${userId}/activity`
    const userAverageSessions = `http://localhost:3000/user/${userId}/average-sessions`
    const userPerformance = `http://localhost:3000/user/${userId}/performance`

    const request1 = axios.get(userMain)
    const request2 = axios.get(userActivity)
    const request3 = axios.get(userAverageSessions)
    const request4 = axios.get(userPerformance)

    axios
      .all([request1, request2, request3, request4])
      .then(
        axios.spread((...responses) => {
          setMainData(responses[0].data.data)
          setActivityData(responses[1].data.data)
          setAverageSessionsData(responses[2].data.data)
          setPerformanceData(responses[3].data.data)
          setIsLoading(false)
        })
      )
      .catch((errors) => {
        // react on errors.
        setError(errors)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [userId])

  return {
    mainData,
    activityData,
    averageSessionsData,
    performanceData,
    isLoading,
    error,
  }
}

export default useFetch
