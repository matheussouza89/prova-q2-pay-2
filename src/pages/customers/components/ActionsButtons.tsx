import React from 'react'
import useRedux from 'hooks/useRedux'
import { AiOutlineEye } from 'react-icons/ai'
import { BsPencil, BsTrash } from 'react-icons/bs'
import {
  getCustomer,
  setItemSelected,
  setSeeRegister,
  setStateModal,
  setStateModalConfirmation
} from 'redux/actions'

const ActionsButtons = (param: { id: number }) => {
  const { dispatch } = useRedux()
  return (
    <div className="actions-buttons">
      <AiOutlineEye
        onClick={() => {
          dispatch(getCustomer(param.id))
          dispatch(setSeeRegister(true))
          dispatch(setStateModal(true))
        }}
      />
      <BsPencil
        onClick={() => {
          dispatch(getCustomer(param.id))
          dispatch(setStateModal(true))
        }}
      />
      <BsTrash
        onClick={() => {
          dispatch(setItemSelected(param.id))
          dispatch(setStateModalConfirmation(true))
        }}
      />
    </div>
  )
}

export default ActionsButtons
