import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { CustomersActionTypes } from './constants'
import {
  getCustomers as getCustomersApi,
  getCustomer as getCustomerApi,
  createCustomer as createCustomerApi,
  removeCustomer as removeCustomerApi
} from 'helpers'
import {
  // customersApiResponseError,
  customersApiResponseSuccess
} from './actions'
import { CustomersData } from 'models/types'

function* listarCustomers(): SagaIterator {
  try {
    const response = yield call(getCustomersApi)
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMERS, customers)
    )
  } catch (error) {
    // yield put(
    //   customersApiResponseError(CustomersActionTypes.SET_LISTA_MOTIVOS, error)
    // )
  }
}

function* listarCustomer(params: {
  value: number
  type: string
}): SagaIterator {
  try {
    const response = yield call(getCustomerApi, { id: params.value })
    const customer = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMER, customer)
    )
  } catch (error) {
    // yield put(
    //   customersApiResponseError(CustomersActionTypes.SET_LISTA_MOTIVOS, error)
    // )
  }
}

function* criarCustomer(params: {
  value: CustomersData
  type: string
}): SagaIterator {
  try {
    yield call(createCustomerApi, { data: params.value })
    const response = yield call(getCustomersApi)
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMER, customers)
    )
  } catch (error) {
    // yield put(
    //   customersApiResponseError(CustomersActionTypes.SET_LISTA_MOTIVOS, error)
    // )
  }
}

function* removerCustomer(params: {
  value: number
  type: string
}): SagaIterator {
  try {
    yield call(removeCustomerApi, { id: params.value })
    const response = yield call(getCustomersApi)
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMER, customers)
    )
  } catch (error) {
    // yield put(
    //   customersApiResponseError(CustomersActionTypes.SET_LISTA_MOTIVOS, error)
    // )
  }
}

export function* watchListarCustomers() {
  yield takeEvery(CustomersActionTypes.GET_ALL_CUSTOMERS_SAGA, listarCustomers)
}

export function* watchListarCustomer() {
  yield takeEvery(CustomersActionTypes.GET_CUSTOMER_SAGA, listarCustomer)
}

export function* watchCriarCustomer() {
  yield takeEvery(CustomersActionTypes.POST_CUSTOMER_SAGA, criarCustomer)
}

export function* watchRemoverCustomer() {
  yield takeEvery(CustomersActionTypes.REMOVE_CUSTOMER_SAGA, removerCustomer)
}

function* customersSaga() {
  yield all([
    fork(watchListarCustomers),
    fork(watchListarCustomer),
    fork(watchCriarCustomer),
    fork(watchRemoverCustomer)
  ])
}

export default customersSaga
