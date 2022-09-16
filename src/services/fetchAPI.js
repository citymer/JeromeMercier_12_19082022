import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (userId) => {
  const [mainData, setMainData] = useState()
  const [name, setName] = useState()
  const [calories, setCalories] = useState()
  const [protein, setProtein] = useState()
  const [glucid, setGlucid] = useState()
  const [lipid, setLipid] = useState()
  const [activityData, setActivityData] = useState()
  const [day, setDay] = useState()
  const [averageSessionsData, setAverageSessionsData] = useState()
  const [value, setValue] = useState()
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [value3, setValue3] = useState()
  const [value4, setValue4] = useState()
  const [value5, setValue5] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const request1 = axios.get(`http://localhost:3000/user/${userId}`)
    const request2 = axios.get(`http://localhost:3000/user/${userId}/activity`)
    const request3 = axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    )
    const request4 = axios.get(
      `http://localhost:3000/user/${userId}/performance`
    )

    axios
      .all([request1, request2, request3, request4])
      .then(
        axios.spread((...responses) => {
          setMainData(responses[0].data.data)
          setName(responses[0].data.data.userInfos.firstName)
          setCalories(responses[0].data.data.keyData.calorieCount)
          setProtein(responses[0].data.data.keyData.proteinCount)
          setGlucid(responses[0].data.data.keyData.carbohydrateCount)
          setLipid(responses[0].data.data.keyData.lipidCount)
          setActivityData(responses[1].data.data)
          setAverageSessionsData(responses[2].data.data)
          setDay(responses[2].data.data.sessions)
          setValue(responses[3].data.data.data[0].value)
          setValue1(responses[3].data.data.data[1].value)
          setValue2(responses[3].data.data.data[2].value)
          setValue3(responses[3].data.data.data[3].value)
          setValue4(responses[3].data.data.data[4].value)
          setValue5(responses[3].data.data.data[5].value)
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
    name,
    calories,
    protein,
    glucid,
    lipid,
    activityData,
    day,
    averageSessionsData,
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

export default useFetch
