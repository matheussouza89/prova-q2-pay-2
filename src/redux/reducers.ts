import { combineReducers } from 'redux'
import Customers from './customers/reducers'
import Auth from './auth/reducers'

export default combineReducers({
  Customers,
  Auth
})
