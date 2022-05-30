import React from 'react'
import notFound from 'assets/img/notFound.svg'

const PageNotFound = () => {
  return (
    <div className="not-found-content">
      <img src={notFound} />
      <h2>Oops..</h2>
    </div>
  )
}

export default PageNotFound
