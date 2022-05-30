import { all } from 'redux-saga/effects'
import authSaga from './auth/saga'
import customersSaga from './customers/saga'

export default function* rootSaga() {
  yield all([customersSaga(), authSaga()])
}
