import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/scss/bootstrap.scss'
import './assets/scss/Main.scss'
import { Provider } from 'react-redux'
import { configureStore } from 'redux/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={configureStore({})}>
    <App />
  </Provider>
)
