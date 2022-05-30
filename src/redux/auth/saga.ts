import { AuthData } from './../../models/types'
import { all, fork, takeEvery, call } from 'redux-saga/effects'
import { SagaIterator } from '@redux-saga/core'
import { AuthActionTypes } from './constants'
import { login as loginApi } from 'helpers'
import { APICore } from 'helpers/api/apiCore'

const api = new APICore()

function* login(params: { value: AuthData; type: string }): SagaIterator {
  try {
    const response = yield call(loginApi, params.value)
    const auth = response.data
    api.setLoggedInUser(auth.accessToken)
  } catch (error) {
    api.setLoggedInUser(false)
  }
}

export function* watchLogin() {
  yield takeEvery(AuthActionTypes.POST_AUTH_LOGIN_SAGA, login)
}

function* authSaga() {
  yield all([fork(watchLogin)])
}

export default authSaga
