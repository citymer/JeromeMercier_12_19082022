const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: 'Karl',
      lastName: 'Dovineau',
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Cecilia',
      lastName: 'Ratorez',
      age: 34,
    },
    todayScore: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
]

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        jour: 1,
        day: '2020-07-01',
        kilogram: 80,
        calories: 240,
      },
      {
        jour: 2,
        day: '2020-07-02',
        kilogram: 80,
        calories: 220,
      },
      {
        jour: 3,
        day: '2020-07-03',
        kilogram: 81,
        calories: 280,
      },
      {
        jour: 4,
        day: '2020-07-04',
        kilogram: 81,
        calories: 290,
      },
      {
        jour: 5,
        day: '2020-07-05',
        kilogram: 80,
        calories: 160,
      },
      {
        jour: 6,
        day: '2020-07-06',
        kilogram: 78,
        calories: 162,
      },
      {
        jour: 7,
        day: '2020-07-07',
        kilogram: 76,
        calories: 390,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        jour: 1,
        day: '2020-07-01',
        kilogram: 70,
        calories: 240,
      },
      {
        jour: 2,
        day: '2020-07-02',
        kilogram: 69,
        calories: 220,
      },
      {
        jour: 3,
        day: '2020-07-03',
        kilogram: 70,
        calories: 280,
      },
      {
        jour: 4,
        day: '2020-07-04',
        kilogram: 70,
        calories: 500,
      },
      {
        jour: 5,
        day: '2020-07-05',
        kilogram: 69,
        calories: 160,
      },
      {
        jour: 6,
        day: '2020-07-06',
        kilogram: 69,
        calories: 162,
      },
      {
        jour: 7,
        day: '2020-07-07',
        kilogram: 69,
        calories: 390,
      },
    ],
  },
]

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 'L',
        sessionLength: 30,
      },
      {
        day: 'M',
        sessionLength: 23,
      },
      {
        day: 'M',
        sessionLength: 45,
      },
      {
        day: 'J',
        sessionLength: 50,
      },
      {
        day: 'V',
        sessionLength: 0,
      },
      {
        day: 'S',
        sessionLength: 0,
      },
      {
        day: 'D',
        sessionLength: 60,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 'L',
        sessionLength: 30,
      },
      {
        day: 'M',
        sessionLength: 40,
      },
      {
        day: 'M',
        sessionLength: 50,
      },
      {
        day: 'J',
        sessionLength: 30,
      },
      {
        day: 'V',
        sessionLength: 30,
      },
      {
        day: 'S',
        sessionLength: 50,
      },
      {
        day: 'D',
        sessionLength: 50,
      },
    ],
  },
]

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        value: 80,
        kind: 'Cardio',
      },
      {
        value: 120,
        kind: 'Energie',
      },
      {
        value: 140,
        kind: 'Endurance',
      },
      {
        value: 50,
        kind: 'Force',
      },
      {
        value: 200,
        kind: 'Vitesse',
      },
      {
        value: 90,
        kind: 'Intensité',
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity',
    },
    data: [
      {
        value: 200,
        kind: 'Cardio',
      },
      {
        value: 240,
        kind: 'Energie',
      },
      {
        value: 80,
        kind: 'Endurance',
      },
      {
        value: 80,
        kind: 'Force',
      },
      {
        value: 220,
        kind: 'Vitesse',
      },
      {
        value: 110,
        kind: 'Intensité',
      },
    ],
  },
]

module.exports = {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
}
