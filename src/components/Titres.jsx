import React from 'react'
import PropTypes from 'prop-types'

/**
 * function that returns the user's first name and congratulations in h2
 * @param {{data:string}} props
 * @returns Bonjour firstName and h2
 */
const titres = (props) => {
  return (
    <div className="titres">
      <h1>
        Bonjour <span>{props.data}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  )
}
titres.propTypes = {
  data: PropTypes.string.isRequired,
}

export default titres
