export class UserDataFormater {
  constructor(mainData, activityData, averageSessionsData, performanceData) {
    this.mainData = mainData
    this.activity = activityData
    this.averageSessions = averageSessionsData
    this.performance = performanceData
  }
  getFormattedMain() {
    let score = 0
    if (this.mainData.score !== undefined) {
      score = this.mainData.score * 100
    }
    if (this.mainData.todayScore !== undefined) {
      score = this.mainData.todayScore * 100
    }
    if (this.mainData.formattedScore === undefined) {
      this.mainData = Object.assign(this.mainData, { formattedScore: score })
    }
    return this.mainData
  }
  getFormattedActivity() {
    const updateActivity = this.activity.sessions.map((element, index) => ({
      ...element,
      session: index + 1,
    }))
    return updateActivity
  }
  getFormattedAverageSessions() {
    const updateAverage = this.averageSessions.sessions.map((element) => ({
      ...element,
      day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'][element.day - 1],
    }))
    return updateAverage
  }
  getFormattedPerformance() {
    const trad = (kind) => {
      switch (kind) {
        case 'energy':
          return 'energie'
        case 'strength':
          return 'force'
        case 'speed':
          return 'vitesse'
        case 'intensity':
          return 'intensité'
        default:
          return kind
      }
    }
    const updatePerformance = this.performance.data.map((element) => ({
      ...element,
      kind: trad(this.performance.kind[element.kind]),
    }))
    return updatePerformance.reverse()
  }
}
