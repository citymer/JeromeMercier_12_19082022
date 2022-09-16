import React from 'react'
import { RadialBarChart, RadialBar, Legend, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'

/**
 * function that builds a score graph with a percentage
 * @param {{data : {object}}} props
 * @returns a graph score
 */
const Score = (props) => {
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
        data={[props]}
      >
        <circle cx="50%" cy="50%" fill="white" r="82"></circle>
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={1}
          tick={false}
        />
        <RadialBar
          dataKey={props.score}
          angleAxisId={1}
          cornerRadius="50%"
          fill="#E60000"
        />
        <Legend
          content={() => (
            <div className="custom-legend-score">
              <p className="custom-legend-text">{props.score()}%</p>
              <p className="text-objectif"> de votre objectif</p>
            </div>
          )}
        />
      </RadialBarChart>
    </div>
  )
}

Score.propTypes = {
  score: PropTypes.func.isRequired,
}
export default Score
