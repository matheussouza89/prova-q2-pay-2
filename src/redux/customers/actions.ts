/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomersData } from './../../models/types'
import { CustomersActionTypes } from './constants'

export type CustomersActionType = {
  type:
    | CustomersActionTypes.API_RESPONSE_SUCCESS
    | CustomersActionTypes.API_RESPONSE_ERROR
    | CustomersActionTypes.SET_CUSTOMERS
    | CustomersActionTypes.CLEAN_CUSTOMERS
    | CustomersActionTypes.SET_CUSTOMER
    | CustomersActionTypes.CLEAN_CUSTOMER
    | CustomersActionTypes.SET_LOADING_TABLE
    | CustomersActionTypes.SET_STATE_MODAL
    | CustomersActionTypes.SET_SEE_REGISTER
    | CustomersActionTypes.SET_STATE_MODAL_CONFIRMATION
    | CustomersActionTypes.SET_ITEM_SELECTED
    | CustomersActionTypes.GET_ALL_CUSTOMERS_SAGA
    | CustomersActionTypes.GET_CUSTOMER_SAGA
    | CustomersActionTypes.POST_CUSTOMER_SAGA
    | CustomersActionTypes.REMOVE_CUSTOMER_SAGA
    | CustomersActionTypes.EDIT_CUSTOMER_SAGA
  value?: any
  field?: string
}

export const customersApiResponseSuccess = (
  actionType: string,
  data: any
): CustomersActionType => ({
  type: CustomersActionTypes.API_RESPONSE_SUCCESS,
  value: { actionType, data }
})

export const customersApiResponseError = (
  actionType: string,
  error: string
): CustomersActionType => ({
  type: CustomersActionTypes.API_RESPONSE_ERROR,
  value: { actionType, error }
})

export const setCustomers = (value: any): CustomersActionType => ({
  type: CustomersActionTypes.SET_CUSTOMERS,
  value: value
})

export const cleanCustomers = (): CustomersActionType => ({
  type: CustomersActionTypes.CLEAN_CUSTOMERS
})

export const getCustomers = (
  _page: number,
  _limit: number
): CustomersActionType => ({
  type: CustomersActionTypes.GET_ALL_CUSTOMERS_SAGA,
  value: { _page, _limit }
})

export const getCustomer = (id: number): CustomersActionType => ({
  type: CustomersActionTypes.GET_CUSTOMER_SAGA,
  value: id
})

export const setCustomer = (
  value: any,
  field: string
): CustomersActionType => ({
  type: CustomersActionTypes.SET_CUSTOMER,
  value: value,
  field: field
})

export const cleanCustomer = (): CustomersActionType => ({
  type: CustomersActionTypes.CLEAN_CUSTOMER
})

export const postCustomer = (data: CustomersData): CustomersActionType => ({
  type: CustomersActionTypes.POST_CUSTOMER_SAGA,
  value: data
})

export const removeCustomer = (id: number): CustomersActionType => ({
  type: CustomersActionTypes.REMOVE_CUSTOMER_SAGA,
  value: id
})

export const putCustomer = (
  id: number,
  data: CustomersData
): CustomersActionType => ({
  type: CustomersActionTypes.EDIT_CUSTOMER_SAGA,
  value: { id: id, data: data }
})

export const setLoading = (value: boolean): CustomersActionType => ({
  type: CustomersActionTypes.SET_LOADING_TABLE,
  value: value
})

export const setStateModal = (value: boolean): CustomersActionType => ({
  type: CustomersActionTypes.SET_STATE_MODAL,
  value: value
})

export const setSeeRegister = (value: boolean): CustomersActionType => ({
  type: CustomersActionTypes.SET_SEE_REGISTER,
  value: value
})

export const setStateModalConfirmation = (
  value: boolean
): CustomersActionType => ({
  type: CustomersActionTypes.SET_STATE_MODAL_CONFIRMATION,
  value: value
})

export const setItemSelected = (id: number): CustomersActionType => ({
  type: CustomersActionTypes.SET_ITEM_SELECTED,
  value: id
})
