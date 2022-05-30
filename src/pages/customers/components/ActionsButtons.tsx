import React from 'react'
import useRedux from 'hooks/useRedux'
import { AiOutlineEye } from 'react-icons/ai'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { getCustomer, removeCustomer } from 'redux/actions'

const ActionsButtons = (param: { id: number }) => {
  const { dispatch } = useRedux()
  return (
    <>
      <AiOutlineEye
        onClick={() => {
          dispatch(getCustomer(param.id))
        }}
      />
      <BsPencil
        onClick={() => {
          dispatch(getCustomer(param.id))
        }}
      />
      <BsTrash
        onClick={() => {
          dispatch(removeCustomer(param.id))
        }}
      />
    </>
  )
}

export default ActionsButtons
