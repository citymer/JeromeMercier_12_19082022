import React from 'react'

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
