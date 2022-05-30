/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomersData } from './../../models/types'
import { CustomersActionTypes } from './constants'

export type CustomersActionType = {
  type:
    | CustomersActionTypes.API_RESPONSE_SUCCESS
    | CustomersActionTypes.API_RESPONSE_ERROR
    | CustomersActionTypes.SET_CUSTOMERS
    | CustomersActionTypes.CLEAN_CUSTOMERS
    | CustomersActionTypes.GET_ALL_CUSTOMERS_SAGA
    | CustomersActionTypes.GET_CUSTOMER_SAGA
    | CustomersActionTypes.POST_CUSTOMER_SAGA
    | CustomersActionTypes.SET_CUSTOMER
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

export const getCustomers = (): CustomersActionType => ({
  type: CustomersActionTypes.GET_ALL_CUSTOMERS_SAGA
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

export const postCustomer = (data: CustomersData): CustomersActionType => ({
  type: CustomersActionTypes.POST_CUSTOMER_SAGA,
  value: data
})
