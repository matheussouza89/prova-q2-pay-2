import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { CustomersActionTypes } from './constants'
import {
  getCustomers as getCustomersApi,
  getCustomer as getCustomerApi,
  createCustomer as createCustomerApi,
  removeCustomer as removeCustomerApi,
  editCustomer as editCustomerApi
} from 'helpers'
import {
  customersApiResponseSuccess,
  setLoading,
  setStateModal
} from './actions'
import { CustomersData } from 'models/types'
import { toast } from 'react-toastify'

function* listarCustomers(params: {
  value: { _page: number; _limit: number }
  type: string
}): SagaIterator {
  try {
    yield put(setLoading(true))
    const response = yield call(getCustomersApi, {
      _page: params.value._page,
      _limit: params.value._limit
    })
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMERS, customers)
    )
  } catch (error) {
    toast.error('Ocorreu um erro') // Todo: verificar possibilidade de exibir mensagem de erro da API
  } finally {
    yield put(setLoading(false))
  }
}

function* listarCustomer(params: {
  value: number
  type: string
}): SagaIterator {
  try {
    yield put(setLoading(true))
    const response = yield call(getCustomerApi, { id: params.value })
    const customer = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMER, customer)
    )
  } catch (error) {
    toast.error('Ocorreu um erro') // Todo: verificar possibilidade de exibir mensagem de erro da API
  } finally {
    yield put(setLoading(false))
  }
}

function* criarCustomer(params: {
  value: CustomersData
  type: string
}): SagaIterator {
  try {
    yield put(setLoading(true))
    yield call(createCustomerApi, { data: params.value })
    const response = yield call(getCustomersApi, { _page: 0, _limit: 3 })
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMERS, customers)
    )
    yield put(setStateModal(false))
    toast.success('Operação realizada com sucesso')
  } catch (error) {
    toast.error('Ocorreu um erro') // Todo: verificar possibilidade de exibir mensagem de erro da API
  } finally {
    yield put(setLoading(false))
  }
}

function* removerCustomer(params: {
  value: number
  type: string
}): SagaIterator {
  try {
    yield put(setLoading(true))
    yield call(removeCustomerApi, { id: params.value })
    const response = yield call(getCustomersApi, { _page: 0, _limit: 3 })
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMERS, customers)
    )
    toast.success('Operação realizada com sucesso')
  } catch (error) {
    toast.error('Ocorreu um erro') // Todo: verificar possibilidade de exibir mensagem de erro da API
  } finally {
    yield put(setLoading(false))
  }
}

function* editarCustomer(params: {
  value: { id: number; data: CustomersData }
  type: string
}): SagaIterator {
  try {
    yield put(setLoading(true))
    yield call(editCustomerApi, {
      id: params.value.id,
      data: params.value.data
    })
    const response = yield call(getCustomersApi, { _page: 0, _limit: 3 })
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMERS, customers)
    )
    yield put(setStateModal(false))
    toast.success('Operação realizada com sucesso')
  } catch (error) {
    toast.error('Ocorreu um erro') // Todo: verificar possibilidade de exibir mensagem de erro da API
  } finally {
    yield put(setLoading(false))
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

export function* watchEditarCustomer() {
  yield takeEvery(CustomersActionTypes.EDIT_CUSTOMER_SAGA, editarCustomer)
}

function* customersSaga() {
  yield all([
    fork(watchListarCustomers),
    fork(watchListarCustomer),
    fork(watchCriarCustomer),
    fork(watchRemoverCustomer),
    fork(watchEditarCustomer)
  ])
}

export default customersSaga
