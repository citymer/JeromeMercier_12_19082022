import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const Moyenne = (data) => {
  let session = data.data.sessions
  console.log(session)
  return (
    <div className="moyenne">
      <LineChart
        width={258}
        height={263}
        margin={{ top: 35, right: 5, left: 5, bottom: 10 }}
        data={session}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector('.moyenne')
            let windowWidth = div.clientWidth
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            )
            // @ts-ignore
            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
          }
        }}
      >
        <XAxis
          dataKey="day"
          stroke="#FFFFFF"
          opacity={0.5}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          dataKey="sessionLength"
          padding={{ top: 40, bottom: 20 }}
          stroke="#FFFFFF"
          opacity={0.5}
          tickLine={false}
          axisLine={false}
          hide
        />

        <Tooltip />

        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#FFFFFF"
          dot={false}
          strokeWidth={2}
          legendType="none"
        />
      </LineChart>
    </div>
  )
}

export default Moyenne
