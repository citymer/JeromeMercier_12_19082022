import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import '../styles/utils/_variables.scss'
import PropTypes from 'prop-types'

/**
 * buids a graph that displays daily activity
 * @param {object} data
 * @returns Barchart
 */
const ActiviteQuotidienne = (props) => {
  let session = props.data.sessions

  return (
    <div className="activite">
      <div className="presentation">
        <h3>Activité quotidienne</h3>
        <div className="contentPoidCalorie">
          <div className="divpoids">
            <div className="cercleNoir"></div>
            <p className="poid">Poids (kg)</p>
          </div>
          <div className="divcalorie">
            <div className="cercleRouge"></div>
            <p className="calorie">Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <div className="graphique">
        <BarChart width={740} height={250} data={session} margin={{ left: 30 }}>
          <CartesianGrid strokeDasharray="1 1" vertical={false} />
          <XAxis dataKey={props.day} tickLine={false} axisLine={false} />
          <XAxis
            dataKey={props.cal}
            type="number"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            yAxisId={props.kg}
            dataKey={props.kg}
            type="number"
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="3"
            dx={15}
          />
          <YAxis
            yAxisId={props.cal}
            dataKey={props.cal}
            type="number"
            hide={true}
          />

          <Tooltip
            content={({ payload, active }) => {
              if (active) {
                return (
                  <div className="custom-tooltip-activity">
                    <p className="label">{`${payload[0].value}`}kg</p>
                    <p className="label">{`${payload[1].value}`}KCal</p>
                  </div>
                )
              }
              return null
            }}
          />
          <Bar
            yAxisId={props.kg}
            name="Poids (kg)"
            label={false}
            dataKey="kilogram"
            fill="#282d30"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId={props.cal}
            name="Calories brûlées (kCal)"
            label={false}
            dataKey="calories"
            fill="#e60000"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
        </BarChart>
      </div>
    </div>
  )
}

ActiviteQuotidienne.propTypes = {
  day: PropTypes.func.isRequired,
  cal: PropTypes.func.isRequired,
  kg: PropTypes.func.isRequired,
}

export default ActiviteQuotidienne
