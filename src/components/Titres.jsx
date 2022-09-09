import React from 'react'

/**
 * function that returns the user's first name and congratulations in h2
 * @param {{data:{userInfos:string}}} data
 * @returns Bonjour firstName and h2
 */
const titres = (data) => {
  let info = data.data.userInfos

  return (
    <div className="titres">
      <h1>
        Bonjour <span>{info.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
    </div>
  )
}

export default titres
