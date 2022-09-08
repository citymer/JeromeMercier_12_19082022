import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import '../styles/utils/_variables.scss'

/**
 * buids a graph that displays daily activity
 * @param {object} data
 * @returns Barchart
 */
const ActiviteQuotidienne = (data) => {
  let session = data.data.sessions

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
          <XAxis dataKey="jour" tickLine={false} axisLine={false} />
          <XAxis
            dataKey="calories"
            type="number"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            orientation="right"
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 2', 'dataMax + 1']}
            tickCount="3"
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
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
            yAxisId="kilogram"
            name="Poids (kg)"
            label={false}
            dataKey="kilogram"
            fill="#282d30"
            radius={[10, 10, 0, 0]}
            barSize={7}
          />
          <Bar
            yAxisId="calories"
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

export default ActiviteQuotidienne
