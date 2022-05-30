/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthActionTypes } from './constants'

export type AuthActionType = {
  type:
    | AuthActionTypes.API_RESPONSE_SUCCESS
    | AuthActionTypes.API_RESPONSE_ERROR
    | AuthActionTypes.SET_AUTH
    | AuthActionTypes.POST_AUTH_LOGIN_SAGA
  value?: any
  field?: string
}

export const authApiResponseSuccess = (
  actionType: string,
  data: any
): AuthActionType => ({
  type: AuthActionTypes.API_RESPONSE_SUCCESS,
  value: { actionType, data }
})

export const authApiResponseError = (
  actionType: string,
  error: string
): AuthActionType => ({
  type: AuthActionTypes.API_RESPONSE_ERROR,
  value: { actionType, error }
})

export const setLogin = (value: string, field: string): AuthActionType => ({
  type: AuthActionTypes.SET_AUTH,
  value: value,
  field: field
})

export const loginSystem = (value: any): AuthActionType => ({
  type: AuthActionTypes.POST_AUTH_LOGIN_SAGA,
  value: value
})
