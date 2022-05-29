import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { CustomersActionTypes } from './constants'
import { getCustomers as getCustomersApi } from 'helpers'
import {
  // customersApiResponseError,
  customersApiResponseSuccess
} from './actions'

// type CustomersData = {
//   value: any
//   type: string
// }

function* listarCustomers(): SagaIterator {
  try {
    const response = yield call(getCustomersApi)
    const customers = response.data
    yield put(
      customersApiResponseSuccess(CustomersActionTypes.SET_CUSTOMERS, customers)
    )
  } catch (error: any) {
    // yield put(
    //   customersApiResponseError(CustomersActionTypes.SET_LISTA_MOTIVOS, error)
    // )
  }
}

export function* watchListarCustomers() {
  yield takeEvery(CustomersActionTypes.GET_ALL_CUSTOMERS_SAGA, listarCustomers)
}

function* customersSaga() {
  yield all([fork(watchListarCustomers)])
}

export default customersSaga
