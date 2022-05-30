/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { CustomersActionTypes } from './constants'

const INIT_STATE: CustomersState = {
  customers: [],
  customer: {
    id: 0,
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

type CustomersData = {
  id: number
  name: string
  document: string
  bank: {
    bankName: string
    code: string
    agency: string
    account: string
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

export type CustomersState = {
  customers?: CustomersData[]
  customer?: CustomersData
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
      return { ...state, customer: action.value.data }
    default:
      return { ...state }
  }
}

export default Customers
