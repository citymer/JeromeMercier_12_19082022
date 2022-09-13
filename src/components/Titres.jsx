import React from 'react'
import PropTypes from 'prop-types'

/**
 * function that returns the user's first name and congratulations in h2
 * @param {{data:{userInfos:{firstName:string}}}} data
 * @returns Bonjour firstName and h2
 */
const titres = (props) => {
  let info = props.data.userInfos.firstName
  console.log(props)
  return (
    <div className="titres">
      <h1>
        Bonjour <span>{info}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  )
}

titres.propTypes = {
  info: PropTypes.string,
}
export default titres
