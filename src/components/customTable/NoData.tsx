import React from 'react'
import noData from 'assets/img/noData.svg'

const NoData = () => {
  return (
    <div className="noDataTable">
      <img src={noData} height="50px" />
      <h2>Não há nada por aqui...</h2>
    </div>
  )
}

export default NoData
