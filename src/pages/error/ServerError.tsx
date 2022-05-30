import React from 'react'
import serverError from 'assets/img/serverError.svg'

const ServerError = () => {
  return (
    <div className="server-error-content">
      <img src={serverError} />
      <h2>Oops! Ocorreu um erro!</h2>
      <span>Fique tranquilo, estamos cientes e trabalhando na correção.</span>
    </div>
  )
}

export default ServerError
