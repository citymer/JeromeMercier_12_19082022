import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'

/**
 * builds a graph with the score as a percentage
 * @param {{data: Array}} props
 * @returns RadarChart
 */
const Intensite = (props) => {
  return (
    <div className="intensite">
      <RadarChart width={258} height={263} data={props.kind()} outerRadius={72}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#FFFFFF"
          fontSize={12}
          tickLine={false}
        />
        <Radar
          dataKey="values"
          stroke="#E60000"
          fill="#E60000"
          fillOpacity={0.7}
          legendType="none"
        />
      </RadarChart>
    </div>
  )
}

Intensite.propTypes = {
  kind: PropTypes.func.isRequired,
}
export default Intensite
