/* eslint-disable @typescript-eslint/no-explicit-any */
import { CustomersState } from 'models/types'
import { CustomersActionTypes } from './constants'

const INIT_STATE: CustomersState = {
  customers: [],
  customer: {
    name: '',
    document: '',
    bank: {
      account: '',
      agency: '',
      bankName: '',
      code: ''
    }
  }
}

type CustomersActionType = {
  type:
    | CustomersActionTypes.API_RESPONSE_SUCCESS
    | CustomersActionTypes.API_RESPONSE_ERROR
    | CustomersActionTypes.CLEAN_CUSTOMERS
    | CustomersActionTypes.SET_CUSTOMERS
    | CustomersActionTypes.SET_CUSTOMER
  field?: any
  value?: any
}

const Customers = (state = INIT_STATE, action: CustomersActionType) => {
  switch (action.type) {
    case CustomersActionTypes.API_RESPONSE_SUCCESS:
      switch (action.value.actionType) {
        case CustomersActionTypes.SET_CUSTOMERS:
          return { ...state, customers: action.value.data }
        case CustomersActionTypes.SET_CUSTOMER:
          return { ...state, customer: action.value.data }
        default:
          return { ...state }
      }
    case CustomersActionTypes.SET_CUSTOMERS:
      return { ...state, customers: action.value }
    case CustomersActionTypes.CLEAN_CUSTOMERS:
      return { ...state, customers: INIT_STATE.customers }
    case CustomersActionTypes.SET_CUSTOMER:
      if (action.field.indexOf('.') !== -1) {
        const arr: string[] = action.field.split('.')
        if (state.customer) {
          return {
            ...state,
            customer: {
              ...state.customer,
              [arr[0]]: {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                ...state.customer[arr[0]],
                [arr[1]]: action.value
              }
            }
          }
        }
      }
      return {
        ...state,
        customer: { ...state.customer, [action.field]: action.value }
      }
    default:
      return { ...state }
  }
}

export default Customers
