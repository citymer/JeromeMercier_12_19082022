import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

const Intensite = (data) => {
  let performance = data.data.data

  return (
    <div className="intensite">
      <RadarChart width={258} height={263} data={performance}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#FFFFFF"
          fontSize={12}
          tickLine={false}
        />
        <Radar
          dataKey="value"
          stroke="#E60000"
          fill="#E60000"
          fillOpacity={0.7}
          legendType="none"
        />
      </RadarChart>
    </div>
  )
}

export default Intensite
