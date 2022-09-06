import React from 'react'
import { RadialBarChart, RadialBar, Legend } from 'recharts'

/**
 * function that builds a score graph with a percentage
 * @param {object} data
 * @returns a graph score
 */
const Score = (data) => {
  let score = [data.data]

  return (
    <div className="score">
      <h3>Score</h3>
      <RadialBarChart
        width={258}
        height={263}
        startAngle={95}
        endAngle={230}
        cx="50%"
        cy="50%"
        innerRadius={70}
        barSize={10}
        outerRadius={120}
        data={score}
      >
        <Legend
          content={(payload) => (
            <div className="custom-legend-score">
              <p className="custom-legend-text">
                {payload?.payload[0]?.payload.todayScore * 100}%
              </p>
              <p className="text-objectif"> de votre objectif</p>
            </div>
          )}
        />
        <RadialBar dataKey="todayScore" cornerRadius="50%" fill="#E60000" />
      </RadialBarChart>
    </div>
  )
}

export default Score
