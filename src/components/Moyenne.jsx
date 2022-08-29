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
        margin={{ top: 45, right: 0, left: 0, bottom: 5 }}
        data={session}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector('.averageSessions')
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
          padding={{ top: 50 }}
          stroke="#FFFFFF"
          opacity={0.5}
          tickLine={false}
          axisLine={false}
          hide
        />

        <Tooltip />

        <Line
          type="basis"
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
