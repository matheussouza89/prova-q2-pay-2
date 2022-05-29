import { all } from 'redux-saga/effects'
import customersSaga from './customers/saga'

export default function* rootSaga() {
  yield all([customersSaga()])
}
