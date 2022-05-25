import { createStore, compose, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'
import AppState from './storeType'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

// eslint-disable-next-line @typescript-eslint/ban-types
function configureStore(initialState: {}) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const localstore: Store<AppState> = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  sagaMiddleware.run(rootSaga)

  return localstore
}

export const store = configureStore({})
