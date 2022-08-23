import React from 'react'

const ActiviteQuotidienne = () => {
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
    </div>
  )
}

export default ActiviteQuotidienne
