import React from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'
import PropTypes from 'prop-types'

/**
 * builds the graph with the average session duration
 * @param {{data:Array}} props
 * @returns LineChart
 */
const Moyenne = (props) => {
  return (
    <div className="moyenne">
      <h4>Durée moyenne des sessions</h4>
      <LineChart
        width={258}
        height={263}
        margin={{ top: 35, right: 5, left: 5, bottom: 10 }}
        data={props.data.sessions}
        onMouseMove={(e) => {
          if (e.isTooltipActive === true) {
            let div = document.querySelector('.moyenne')
            let windowWidth = div.clientWidth
            let mouseXpercentage = Math.round(
              (e.activeCoordinate.x / windowWidth) * 100
            )

            div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
          }
        }}
      >
        <XAxis
          dataKey={props.jour}
          stroke="#FFFFFF"
          opacity={0.5}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          padding={{ top: 40, bottom: 20 }}
          stroke="#FFFFFF"
          opacity={0.5}
          tickLine={false}
          axisLine={false}
          hide
        />

        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="custom-tooltip-objectif">
                  <p className="textValue"> {`${payload[0].value} min`}</p>
                </div>
              )
            }
            return null
          }}
        />

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

Moyenne.propTypes = {
  jour: PropTypes.func.isRequired,
}

export default Moyenne
