/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthState } from 'models/types'
import { AuthActionTypes } from './constants'

const INIT_STATE: AuthState = {
  login: {
    email: '',
    password: ''
  }
}

type AuthActionType = {
  type:
    | AuthActionTypes.API_RESPONSE_SUCCESS
    | AuthActionTypes.API_RESPONSE_ERROR
    | AuthActionTypes.SET_AUTH
  field?: any
  value?: any
}

const Auth = (state = INIT_STATE, action: AuthActionType) => {
  switch (action.type) {
    case AuthActionTypes.API_RESPONSE_SUCCESS:
      switch (action.value.actionType) {
        case AuthActionTypes.SET_AUTH:
          return { ...state, login: action.value.data }
        default:
          return { ...state }
      }
    case AuthActionTypes.SET_AUTH:
      return {
        ...state,
        login: { ...state.login, [action.field]: action.value }
      }
    default:
      return { ...state }
  }
}

export default Auth
